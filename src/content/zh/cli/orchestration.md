# 编排 {#orchestration}

编排是 Orca 的结构化多 Agent 层：一个 **Run**（命名空间 + 协调者收件箱）、**Tasks**、**Dispatches**、受监督的 **workers**、消息和决策门。

当你需要所有权、完成跟踪或 DAG 时使用它。要给另一个 Agent 发单向消息，使用 `orca orchestration send --to <terminal handle or orca_session_id:<id>> --subject "<topic>" --body "<message>"`；它不需要 Run 或 Task。不带监督的完整所有权移交，使用 `orca-cli` 技能里的 `worktree create --agent` 或 `agent launch`。

> **Experimental**
> 使用这些命令前，在 Settings → Experimental 下启用编排。CLI 与正在运行的 Orca 运行时通信，因此应先让 `orca status --json` 成功。

> **旧命令已退役**
> `orca orchestration run` 和 `run-stop`（以及 `coordinator-start` / `coordinator-stop`）**没有任何效果**。它们返回恢复文本，指向 `orca skills get orchestration --full`。请使用下面的 Run + worker-start 流程。

## 输出 {#output}

每条编排命令默认打印一个短视图：下一条命令需要的 ID 和状态，下一步放在最后。`--json` 把同样的字段打印成一行 JSON（`{"ok":true,"result":{...}}`）。`--full --json` 把 Orca 返回的完整记录打印成格式化 JSON；单独的 `--full` 打印更长的文本回执。失败或未确认的结果以非零状态退出，并向 stderr 写入 `error: <code>: <message>`。

## 核心模型 {#core-model}

- **Run** —— 持久的命名空间和主收件箱。从不调度或放置 worker。
- **Task** —— 带有 spec、依赖和状态的工作项：`pending`、`ready`、`dispatched`、`completed`、`failed` 或 `blocked`。
- **Dispatch** —— 某项任务在一个终端上的一次尝试；对 `worker_done` 拥有生命周期权威。
- **Message** —— 收件箱邮件（`status`、`dispatch`、`worker_done`、`escalation`、`question`、`heartbeat`、…）。
- **Decision gate** —— 由协调者拥有的问题，在被解决之前会阻塞一项任务。

完成权威来自活动的 dispatch 上下文。Worker 完成消息应同时包含 `taskId` 和 `dispatchId`。

终端里打印的任务 ID（例如 `task_...`）是可点击链接。点击一条会向 Orca 运行时查询该任务当前的 dispatch，并聚焦到已分配的终端，即使该任务位于远程或 SSH 运行时。

## 首选的受监督循环 {#preferred-supervised-loop}

```bash
orca orchestration run-create --objective "Split checkout QA and summarize blockers"
orca orchestration task-create --spec "Audit billing settings for mobile layout" --task-title "Billing audit"
orca orchestration worker-start --task <taskId> --worktree current --agent codex
# or new worktree:
orca orchestration worker-start --task <taskId> --worktree new-child --name billing-audit --agent codex --setup run
# optional per-worker model / effort (Claude, Codex, Cursor, Antigravity, Grok, Muse, Pi; not with --terminal):
orca orchestration worker-start --task <taskId> --worktree current --agent claude --model <opaque-model-id> --effort high
```

`--agent` 可取 worker 服务器上已启用的任意 Orca agent ID，例如 `claude`、`codex`、`cursor`、`antigravity`、`muse`、`opencode` 或 `opencode2`。`--model` 接受 Claude、Codex、Cursor、Antigravity、Grok、Muse 与 Pi 的不透明 provider 模型 ID（例如 `--agent muse --model muse-spark-1.3`）；Pi 接受 `provider/id` 选择器，并把 `--effort` 映射到它自己的 `--thinking` 级别（off、minimal、low、medium、high、xhigh、max）；OpenCode 仅在已有 worktree 中、且执行主机核对其 CLI 版本和模型可用性时，才接受单次启动的模型；OpenCode 的 effort 仍不支持。其他 Agent 使用各自配置中的模型。`--effort` 需要 `--model`，并且仅在该 Agent/模型支持该级别时生效。两个标志都不能与 `--terminal`（复用已有窗格）组合。覆盖只应用于那一次启动，并在启动回执里显示为 `model` / `effort`（`--full --json` 显示 `launch.requested` / `launch.effective`）。联邦启动需要一个声明支持 launch-preference 的 worker 宿主。

启动 worker 之后，结束你这一轮。当 worker 汇报、提问或停止时，Orca 会唤醒协调者。在聊天里，每条消息会完整到达：直接处理它。当这次唤醒点名一条 `check` 命令（终端里，或一条大到无法整条投递的聊天消息）时，运行它并处理它打印的每一条消息：

```bash
orca orchestration check --run <runId>
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
  --files-modified "src/app/settings/Billing.tsx"
```

`worker_done` 需要 `--outcome succeeded|failed`。

检查 / 恢复：

```bash
orca orchestration worker-show --dispatch <dispatchId>
orca orchestration worker-read --dispatch <dispatchId> --limit 50
orca orchestration worker-stop --dispatch <dispatchId>
# After an accepted worker_done: reuse the same terminal for a follow-up Dispatch, or release it
# (archives inspectable output, then closes only that coordinator-owned agent terminal):
orca orchestration worker-release --dispatch <dispatchId>
# Keep a worker open after it finishes (or start it with worker-start --keep-open):
orca orchestration worker-keep-open --dispatch <dispatchId>
# retry placement is explicit — --retry-of does not inherit --on/worktree:
orca orchestration worker-start --task <taskId> --retry-of <dispatchId> --worktree current --agent codex
```

当 worker 停在权限提示上时，升级消息会点名该提示。只有人能允许它，所以先做其他工作，直到它的结束消息到来；如果它拖住了任务，用一条理由拒绝它，worker 会换一种方式继续：

```bash
orca orchestration deny --dispatch <dispatchId> --prompt <approvalId> --reason "<what to do instead>"
```

如果用户在 Orca 的编排设置里打开 **Let coordinators approve worker permission prompts**，协调者也可以附上理由允许它。用户仍能看到 Allow 和 Deny，先到的回答生效。运行 worker 的那台机器应用它自己的设置：

```bash
orca orchestration approve --dispatch <dispatchId> --prompt <approvalId> --reason "<reason>"
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
  --setup run
orca orchestration send --to dispatch:<dispatchId> --subject "Follow-up" --body "…"
```

改用 `--worktree new-child`，把服务器的 worktree 嵌套到侧栏里你的工作区下面。太旧、无法跨机器嵌套的服务器仍会启动 worker，作为顶层，并在回执里带一条 `warning`。

后续命令按 Dispatch ID 路由；不要重复 `--on`。

## 低层 dispatch（自定义拓扑） {#low-level-dispatch-custom-topology}

```bash
orca worktree create --name billing-audit --agent codex --json
orca terminal wait --terminal <workerHandle> --for tui-idle --timeout-ms 60000 --json
orca orchestration dispatch --task <taskId> --to <workerHandle> --inject
```

## 消息说明 {#messaging-notes}

- 默认的 `check` 把绑定 Run 里最旧的未读邮件作为一条 Delivery 返回（FIFO），并把它标为已处理。`--ack <deliveryId>` 确认来自不会自行标记的较旧 Orca 的 Delivery；单独使用时它不读取新邮件，加上 `--wait` 后它会等待并取走下一条 Delivery。
- `--peek` / `--all` 不消费邮件，也不返回 `deliveryId`，因此它们自己不会清空邮箱。`--all` 和 Run 的 `--peek` 最多显示 100 行。要清空，重复不带参数的 `check`，直到它打印 `No messages.`（使用 `--json` 时，直到 `messages` 为空）；在要求 `--ack <deliveryId>` 的较旧 Orca 上，先 ack 每一条 Delivery，否则 `check` 会再次返回它。
- 组地址：`@all`、`@idle`、`@claude`、`@codex`、`@opencode`、`@gemini`、`@droid`、`@grok`、`@cursor`、`@worktree:<id>` —— 绝不要用于 `worker_done`。
- 除 `@worktree:<id>` 外，每个组都表示发送者自己 Run 里的活 Dispatch，投递到它们的 Dispatch 邮箱（嵌套协调者则投到子 Run 邮箱）。不在任何 Run 中的发送者会被拒绝；`--run` 必须匹配受众，且从不授予成员资格。
- Run 组不含其所属协调者。worker 上报 blocker 时发到 `run:<id>`。`@worktree:<id>` 会包含该工作区里的协调者。
- 给 PowerShell 组地址加引号：`--to "@all"`。

```bash
orca orchestration send --to @all --subject "Heads up" --body "Pausing dispatches for a review."
orca orchestration send --to @idle --subject "Anyone free?"
orca orchestration send --to @codex --subject "Codex workers in this Run only"
```

等待进行时，CLI 每 15 秒向 stderr 发出一小行 JSON heartbeat。Stdout 仍然是最终命令结果。

## Worker 契约 {#worker-contract}

被 dispatch 的 worker 会收到一段前言，告诉它们如何与协调者通信：

- 恰好发送一次 `worker_done`，即使失败也要发，并带上 `--outcome`。
- 包含一段简短的 `--body` 摘要：做了什么、发现了什么、还剩什么。
- 同时包含 task 和 dispatch ID，这样过期的重试不会完成错误的 dispatch。
- 用 `orca orchestration ask` 提问，而不是本地 TUI prompt，然后结束你这一轮。Orca 会用邮件把答案唤醒你：在聊天里它会完整到达，除非它大到一条聊天消息装不下；只要这次唤醒点名一条 `check` 命令，就运行它。

```bash
orca orchestration ask \
  --question "Should I update the shared component or only this page?" \
  --options "shared,page-only"
```

`ask` 会记下问题并立即返回，带有 `pending: true`。加上 `--wait`（或 `--resume <message_id>`）才会改为阻塞到答案；使用 `--json` 时，用 `jq -r .result.answer` 读取它。

## 决策门 {#decision-gates}

用 `ask` 处理 worker 向协调者的问题。当协调者已经创建了任务 DAG，并希望阻塞一项任务直到记录下决策时，使用显式的门：

```bash
orca orchestration gate-create \
  --task <taskId> \
  --question "Merge the shared button change into the task branch?" \
  --options '["yes","no"]'

orca orchestration gate-resolve --id <gateId> --resolution "yes"
```

## 恢复 {#recovery}

```bash
orca orchestration dispatch-show --task <taskId>
orca orchestration dispatch-show --task <taskId> --preamble
orca orchestration task-list
orca orchestration task-update --id <taskId> --status blocked --result '{"reason":"waiting on credentials"}'
```

仅在你有意放弃编排状态时才 reset：

```bash
orca orchestration reset --tasks
orca orchestration reset --messages
orca orchestration reset --all
```

`reset` 影响运行时全局的编排状态。除非那就是你打算的清理，否则不要在另一个协调者仍活动时运行它。

## 选择正确的命令 {#choosing-the-right-command}

给另一个 Agent 发单向消息，用 `orca orchestration send`。普通邮件时，聊天会连同发送者标头收到整条消息（大到一条聊天消息装不下的消息会得到一条说明，改为运行 `orca orchestration check`），Orca 从不会把你的话打进终端 Agent 的输入（它通过 `check` 读邮件），回执表示邮件已存储，而不是已读。发给已结束 worker 的 `dispatch:<id>` 则可能改为启动一项后续 Task，worker 会把其 body 当作自己的任务；回执会说明是哪一种。`orca terminal send` 用于 shell、开发服务器和 REPL，绝不要用来给 Agent 发消息。

当 worker 必须报告 `worker_done`、通过协调者提问、并按任务 ID 被跟踪时，用 `orca orchestration worker-start`（或 `dispatch --inject`）。

当你想要一个持久的 Run 命名空间和受监督的多 Agent 循环时，用 `orca orchestration run-create` + 任务 + workers —— 而不是已退役的 `orchestration run` 命令。

## 完整指南 {#full-guide}

命令标志会随应用演进。安装后，Agent 应运行：

```bash
orca skills get orchestration --full
```

当前 `orca help` 列出的编排命令卡片见 [命令使用 · 编排](/docs/cli/commands#orchestration)。
