# Agent 休眠 {#agent-hibernation}

当你保持几十个 worktree 打开时，空闲 Agent 会累积——每一个都是占用内存、持有模型会话的活 PTY。Agent 休眠让 Orca 在这些终端已经完成且足够久未被触碰后安静地停掉它们，并在你回到该 Agent 的标签时恢复同一会话。

> **实验性**
> Agent 休眠默认关闭。在我们继续调优安全模型期间，请在 **Settings → Experimental → Agent hibernation** 下打开它。

## 什么会被休眠 {#what-gets-hibernated}

Orca 仅在下列条件**全部**为真时休眠一个 Agent 终端：

- Agent 处于 **done** 状态——已完成上一轮，且不在等待输入。
- 它的终端标签没有显示在屏幕上（活动标签、显示在另一个分屏组中的标签，或 Activity 页面上显示的终端）。活动 worktree 中的其他标签仍可以休眠。
- 自 Agent 完成后未收到过按键。
- 该 Agent 属于带 [可恢复会话](/docs/agents/session-history) 的一类：Claude、Codex、Gemini、Antigravity、OpenCode、Pi、MiMo Code、Droid、Grok、Devin 或 OMP。
- 已空闲至少配置的空闲窗口（默认 30 分钟）。
- 当前没有移动端会话在驱动该终端。
- 没有仍未结算的 [编排](/docs/cli/orchestration) Dispatch（`pending`、`dispatched` 或 unknown）。运行时确认 `completed`、`failed` 或 `circuit_broken` 之后才允许再次休眠。
- 窗格上不再残留活的 subagent / teammate roster（仅有 provider 的 "done" 不够，只要子项仍附着就不休眠）。

未通过任一检查的终端会继续运行。每个 Agent 窗格会单独检查并休眠，因此一个已完成的窗格可以睡眠，而同一 worktree 里的兄弟窗格或标签继续运行。

手动休眠不同：它会一次停掉整个 worktree。从侧栏休眠一个 worktree（存在嵌套子项时使用 **Sleep → With Descendants**）。见 [Worktrees](/docs/model/worktrees)。手动休眠会保留 **finished** 和 **interrupted** 的可恢复会话，以便重新打开 worktree 时仍能用相同的 resume 标志重新启动——不会只因为窗格不再“活着”就擦掉那些会话记录。

## 调整空闲窗口 {#tuning-the-idle-window}

在 **Agent hibernation** 开关下，**Hibernate after** 设置一个已完成的后台 Agent 在 Orca 暂停它之前需要等待多少空闲分钟。

- 默认：**30 minutes**。
- 范围：**1 minute** 到 **24 hours**。
- 时钟从 Agent 最后一次 `done` 更新开始；任何按键、新输出，或回到该 Agent 的终端标签都会重置它。

更长的窗口用更少的暂停换取内存节省；更短的窗口暂停更激进，但下次切回来时要付出一次 resume。

## 查找休眠中的 worktree {#finding-sleeping-worktrees}

侧栏过滤菜单控制是否显示休眠中的 worktree。如果你经常隐藏它们，在 [Settings → Shortcuts](/docs/settings) 下为 **Toggle Sleeping Workspaces** 指定快捷键，即可在不打开过滤菜单的情况下显示或隐藏它们。

## 恢复 {#resuming}

当你切回一个已休眠 Agent 的标签时，Orca 会用与 [Agent 会话历史](/docs/agents/session-history) 相同的 resume 标志重新启动 Agent CLI——`claude --resume <id>`、`codex resume <id>` 等等——这样对话、工作目录和 provider 会话会从停下的地方接上。无需点击；恢复是把终端带回前台的一部分。

恢复还会复用 Orca 首次打开该 Agent 时捕获的启动命令、参数和私有环境。

如果 Agent CLI 因任何原因无法恢复该会话（transcript 被删除，provider 轮换了 session ID），终端会打开到一个全新 prompt，先前的 transcript 仍可在该 Agent 的会话历史下找到。

## 限制 {#limitations}

只有列出的可恢复 Agent 会休眠。Cursor CLI、Hermes、Copilot、Trae 以及其他不可恢复的终端会继续运行。

## 下一步 {#next-steps}

- [Agent 会话历史](/docs/agents/session-history) — 手动恢复任何过去的会话，包括 Orca 没有休眠过的。
- [热切换 Codex 账户](/docs/agents/codex-hot-swap) — 在不重启会话的情况下切换活动 Codex 登录，可与休眠一起使用。
