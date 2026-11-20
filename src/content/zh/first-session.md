# 第一次三 Agent 会话 {#your-first-3-agent-session}

这是整份文档里最重要的一页。结束时你会有三个 Agent 在三条不同路径上并行做同一件事，并发出一个 PR。

## 1. 添加仓库 {#1-add-a-repository}

点击侧栏的 **Add Repo**，把 Orca 指向本地 checkout。Orca 读取仓库的 git 状态，把默认分支当作 **base ref**——之后每个新 worktree 都从它分出去。

以后可在仓库设置里改 base ref。

## 2. 创建 worktree {#2-create-a-worktree}

点击仓库名旁边的 **+**。输入任务名（`fix-login-race` 即可——留空时 Orca 会用海洋生物命名）。

启动器会预选你的 **default agent**（在 [Settings → Agents](/docs/settings) 配置），或者打开空终端让你冷启动。钉住的 worktree 在侧栏更醒目，你真正住在里面的那些会一直看得见。

选一个 **start-from** ref。多数时候是 base ref（`origin/main`），也可以从任意分支或 commit 开始。

Orca 在它管理的目录下创建真正的 git worktree，检出分支，然后打开。

## 3. 选择 Agent {#3-pick-an-agent}

在新 worktree 里，终端带着 **agent combobox** 打开。选 Claude Code、Codex、Cursor CLI，或任意 [支持的 Agent](/docs/agents/supported)。Orca 会用正确的工作目录启动该 Agent 的 CLI，并转发你的订阅凭证。

## 4. 让三个 Agent 赛跑同一任务 {#4-race-three-agents-on-the-same-task}

再把第 2–3 步做两遍。现在你有三个 worktree：

- `fix-login-race` → Claude Code
- `fix-login-race-2` → Codex
- `fix-login-race-3` → Cursor CLI

把同一份 prompt 贴进每一个。三条分支。三份 diff。同一 prompt。让它们干活。

## 5. 同时看三个 Agent {#5-watch-all-three-agents}

每个 worktree 保留自己的窗格布局，所以切换 worktree 会换掉整个视图。看侧栏的[状态指示](/docs/model/agents-sessions#state-indicators)，就能知道哪个 Agent 在干活、已完成，或在等你，然后从侧栏或用 `Cmd-J`（macOS）/ `Ctrl-Shift-J`（Windows / Linux）跳过去。在一个 worktree 内部，把标签拖到窗格边缘可以分屏——见 [标签、窗格与分屏](/docs/model/tabs-panes-splits)。

## 6. 选出赢家，审查 diff，发出去 {#6-pick-a-winner-review-the-diff-ship-it}

Agent 停下来后，打开每个 worktree 的 diff 视图。用 [批注 AI Diff](/docs/review/annotate-ai-diff) 留行内评论，打回给最接近的那个 Agent。

直接从 Orca 提交并推送——见 [从 Orca 提交并推送](/docs/review/commit-push)。另外两个 worktree 一键删除，分支一起走。

> **这就是全部**
> 这个流程——添加 → worktree → Agent → 看着它 → diff → 发出去——就是 Orca 的全部。文档里其他每一页，都是其中某一步的深挖。
