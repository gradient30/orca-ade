# 编排 {#orchestration}

编排是 Orca 的结构化多 Agent 层：一个 **Run**（命名空间 + 协调者收件箱）、**Tasks**、**Dispatches**、受监督的 **workers**、消息和决策门。

当你需要所有权、完成跟踪或 DAG 时使用它。一次性 prompt 用 `orca terminal send`。不带监督的完整所有权移交，使用 `orca-cli` 技能里的 worktree/终端命令。

> **Experimental**
> 使用这些命令前，在 Settings → Experimental 下启用编排。CLI 与正在运行的 Orca 运行时通信，因此应先让 `orca status --json` 成功。

> **旧命令已退役**
> `orca orchestration run` 和 `run-stop`（以及 `coordinator-start` / `coordinator-stop`）**没有任何效果**。它们返回恢复文本，指向 `orca skills get orchestration --full`。请使用下面的 Run + worker-start 流程。

## 核心模型 {#core-model}

- **Run** —— 持久的命名空间和主收件箱。从不调度或放置 worker。
- **Task** —— 带有 spec、依赖和状态的工作项：`pending`、`ready`、`dispatched`、`completed`、`failed` 或 `blocked`。
- **Dispatch** —— 某项任务在一个终端上的一次尝试；对 `worker_done` / heartbeat 拥有生命周期权威。
- **Message** —— 收件箱邮件（`status`、`dispatch`、`worker_done`、`escalation`、`question`、`heartbeat`、…）。
- **Decision gate** —— 由协调者拥有的问题，在被解决之前会阻塞一项任务。

完成权威来自活动的 dispatch 上下文。Worker 完成和 heartbeat 消息应同时包含 `taskId` 和 `dispatchId`。

终端里打印的任务 ID（例如 `task_...`）是可点击链接。点击一条会向 Orca 运行时查询该任务当前的 dispatch，并聚焦到已分配的终端，即使该任务位于远程或 SSH 运行时。

## 首选的受监督循环 {#preferred-supervised-loop}

```bash
orca orchestration run-create --objective "Split checkout QA and summarize blockers" --json
orca orchestration task-create --spec "Audit billing settings for mobile layout" --task-title "Billing audit" --json
orca orchestration worker-start --task <taskId> --worktree current --agent codex --json
# or new worktree:
orca orchestration worker-start --task <taskId> --worktree new-child --name billing-audit --agent codex --setup run --json
# optional per-worker model / effort (Claude, Codex, Cursor only; not with --terminal):
orca orchestration worker-start --task <taskId> --worktree current --agent claude --model <opaque-model-id> --effort high --json
```

`--model` 接受 Claude、Codex 和 Cursor 的不透明 provider 模型 ID。`--effort` 需要 `--model`，并且仅在该 Agent/模型支持该级别时生效。两个标志都不能与 `--terminal`（复用已有窗格）组合。覆盖只应用于那一次启动，并显示在启动回执的 `launch.requested` / `launch.effective` 下。联邦启动需要一个声明支持 launch-preference 的 worker 宿主。

等待完成（处理一次 Delivery 里的每条消息，然后 ack）：

```bash
orca orchestration check --wait --types worker_done,escalation,question --timeout-ms 900000 --json
orca orchestration check --ack <deliveryId> --wait --types worker_done,escalation,question --timeout-ms 900000 --json
```

Worker 完成（从 worker 窗格；包含注入的 ID）：

```bash
orca orchestration send \
  --type worker_done \
  --subject "Completed mobile audit" \
  --body "Fixed footer overlap; no follow-ups." \
  --task-id <taskId> \
  --dispatch-id <dispatchId> \
  --outcome succeeded \
  --files-modified "src/app/settings/Billing.tsx" \
  --json
```

`worker_done` 需要 `--outcome succeeded|failed`。

检查 / 恢复：

```bash
orca orchestration worker-show --dispatch <dispatchId> --json
orca orchestration worker-read --dispatch <dispatchId> --limit 50 --json
orca orchestration worker-stop --dispatch <dispatchId> --json
# After an accepted worker_done: reuse the same terminal for a follow-up Dispatch, or release it
# (archives inspectable output, then closes only that coordinator-owned agent terminal):
orca orchestration worker-release --dispatch <dispatchId> --json
# Keep a settled worker live for debugging when the user asked to retain it:
orca orchestration worker-retain --dispatch <dispatchId> --json
# retry placement is explicit — --retry-of does not inherit --on/worktree:
orca orchestration worker-start --task <taskId> --retry-of <dispatchId> --worktree current --agent codex --json
```

不要为了再读输出而把已完成的 worker 终端留着开着——在 `worker-release` 之后用 `worker-read`。当 release 返回 `release_pending` 或 `release_unknown` 时，不要改用宽泛的 `terminal close`；遵循回执上的恢复动作。

## 联邦 worker（可选） {#federated-workers-optional}

```bash
orca orchestration worker-start \
  --task <taskId> \
  --on windows \
  --worktree new-top-level \
  --repo <exact_remote_repo_selector> \
  --name remote-worker \
  --agent codex \
  --setup run \
  --json
orca orchestration send --to dispatch:<dispatchId> --subject "Follow-up" --body "…" --json
```

后续命令按 Dispatch ID 路由；不要重复 `--on`。

## 低层 dispatch（自定义拓扑） {#low-level-dispatch-custom-topology}

```bash
orca worktree create --name billing-audit --agent codex --json
orca terminal wait --terminal <workerHandle> --for tui-idle --timeout-ms 60000 --json
orca orchestration dispatch --task <taskId> --to <workerHandle> --inject --json
```

## 消息说明 {#messaging-notes}

- 默认的 `check` 是绑定 Run 里最旧的未 ack Delivery（FIFO）。重放到 `--ack` 为止。
- `--peek` / `--all` 不消费邮件。
- 组地址：`@all`、`@idle`、`@claude`、`@codex`、`@opencode`、`@gemini`、`@droid`、`@grok`、`@cursor`、`@worktree:<id>` —— 绝不要用于 `worker_done` / heartbeat。
- 除 `@worktree:<id>` 外，每个组都表示发送者自己 Run 里的活 Dispatch，投递到它们的 Dispatch 邮箱（嵌套协调者则投到子 Run 邮箱）。不在任何 Run 中的发送者会被拒绝；`--run` 必须匹配受众，且从不授予成员资格。
- Run 组不含其所属协调者。worker 上报 blocker 时发到 `run:<id>`。`@worktree:<id>` 会包含该工作区里的协调者。
- 给 PowerShell 组地址加引号：`--to "@all"`。

```bash
orca orchestration send --to @all --subject "Heads up" --body "Pausing dispatches for a review." --json
orca orchestration send --to @idle --subject "Anyone free?" --json
orca orchestration send --to @codex --subject "Codex workers in this Run only" --json
```

等待进行时，CLI 每 15 秒向 stderr 发出一小行 JSON heartbeat。Stdout 仍然是最终命令结果。

## Worker 契约 {#worker-contract}

被 dispatch 的 worker 会收到一段前言，告诉它们如何与协调者通信：

- 恰好发送一次 `worker_done`，即使失败也要发，并带上 `--outcome`。
- 包含一段简短的 `--body` 摘要：做了什么、发现了什么、还剩什么。
- 同时包含 task 和 dispatch ID，这样过期的重试不会完成错误的 dispatch。
- 在长时间的活跃工作期间发送 `heartbeat` 消息。
- 用 `orca orchestration ask` 提阻塞性问题，而不是本地 TUI prompt。

```bash
orca orchestration ask \
  --to <coordinatorHandle> \
  --question "Should I update the shared component or only this page?" \
  --options "shared,page-only" \
  --timeout-ms 600000 \
  --json
```

带 `--json` 时，`ask` 打印标准的 `{id, ok, result, _meta}` 信封，因此 worker 用 `jq -r .result.answer` 读取答案。

## 决策门 {#decision-gates}

用 `ask` 处理 worker 向协调者的问题。当协调者已经创建了任务 DAG，并希望阻塞一项任务直到记录下决策时，使用显式的门：

```bash
orca orchestration gate-create \
  --task <taskId> \
  --question "Merge the shared button change into the task branch?" \
  --options '["yes","no"]' \
  --json

orca orchestration gate-resolve --id <gateId> --resolution "yes" --json
```

## 恢复 {#recovery}

```bash
orca orchestration dispatch-show --task <taskId> --json
orca orchestration dispatch-show --task <taskId> --preamble --json
orca orchestration task-list --json
orca orchestration task-update --id <taskId> --status blocked --result '{"reason":"waiting on credentials"}' --json
```

仅在你有意放弃编排状态时才 reset：

```bash
orca orchestration reset --tasks --json
orca orchestration reset --messages --json
orca orchestration reset --all --json
```

`reset` 影响运行时全局的编排状态。除非那就是你打算的清理，否则不要在另一个协调者仍活动时运行它。

## 选择正确的命令 {#choosing-the-right-command}

对你正在看着的 Agent 发一条轻量 prompt，用 `orca terminal send`。

当 worker 必须报告 `worker_done`、通过协调者提问、并按任务 ID 被跟踪时，用 `orca orchestration worker-start`（或 `dispatch --inject`）。

当你想要一个持久的 Run 命名空间和受监督的多 Agent 循环时，用 `orca orchestration run-create` + 任务 + workers —— 而不是已退役的 `orchestration run` 命令。

## 完整指南 {#full-guide}

命令标志会随应用演进。安装后，Agent 应运行：

```bash
orca skills get orchestration --full
```
