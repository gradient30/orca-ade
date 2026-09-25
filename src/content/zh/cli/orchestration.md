# 编排 {#orchestration}

实验性命令，用于在多个受监督 worker 之间拆分工作、跟踪任务与投递。

> **Experimental**
> 使用这些命令前，在 Settings → Experimental 下启用编排。CLI 与正在运行的 Orca 运行时通信，因此应先让 `orca status --json` 成功。

> **旧命令已退役**
> `orca orchestration run` 和 `run-stop`（以及 `coordinator-start` / `coordinator-stop`）**没有任何效果**。它们返回恢复提示，指向下方的受监督循环。

## 核心模型 {#core-model}

- **Run** — 顶层目标与其任务图。
- **Worker** — 绑定到某一 dispatch 的终端上的 Agent 实例；协调器拥有并替换 worker。
- **Task** — 带有规格、依赖与状态的工作项：`pending`、`ready`、`dispatched`、`completed`、`failed` 或 `blocked`。
- **Dispatch** — 任务在终端上的一次尝试；`worker_done` / heartbeat 的生命周期权威。
- **Message** — 收件箱邮件（`status`、`dispatch`、`worker_done`、`escalation`、`question`、`heartbeat` …）。
- **Decision gate** — 由协调器拥有的问题，阻塞任务直至解决。

完成权威来自活动的 dispatch 上下文。Worker 完成与 heartbeat 消息应同时包含 `taskId` 与 `dispatchId`。

终端中打印的任务 ID（如 `task_...`）是可点击链接。点击后会向 Orca 运行时查询该任务的当前 dispatch，并聚焦已分配的终端，包括任务位于远程或 SSH 运行时的情况。

## 首选的受监督循环 {#preferred-supervised-loop}

```bash
orca orchestration run-create --objective "Split checkout QA and summarize blockers" --json
orca orchestration task-create --spec "Audit billing settings for mobile layout" --task-title "Billing audit" --json
orca orchestration worker-start --task <taskId> --worktree current --agent codex --json
# or new worktree:
orca orchestration worker-start --task <taskId> --worktree new-child --name billing-audit --agent codex --setup run --json
# optional per-worker model / effort (Claude, Codex, Cursor, Antigravity, Muse; not with --terminal):
orca orchestration worker-start --task <taskId> --worktree current --agent claude --model <opaque-model-id> --effort high --json
```

`--agent` 可取 worker 服务器上已启用的任意 Orca agent ID，例如 `claude`、`codex`、`cursor`、`antigravity`、`muse`、`opencode` 或 `opencode2`。`--model` 接受 Claude、Codex、Cursor、Antigravity 与 Muse 的不透明 provider 模型 ID（例如 `--agent muse --model muse-spark-1.3`）；其他 Agent（包括 opencode）使用各自配置中的模型。`--effort` 需要 `--model`，并且仅在该 Agent/模型支持该级别时生效。两个标志都不能与 `--terminal`（复用已有窗格）组合。覆盖只应用于那一次启动，并显示在启动回执的 `launch.requested` / `launch.effective` 下。联邦启动需要一个声明支持 launch-preference 的 worker 宿主。

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
