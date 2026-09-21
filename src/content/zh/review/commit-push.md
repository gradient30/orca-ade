# 从 Orca 提交并推送 {#commit-push-from-orca}

你可以提交、推送并打开审查，而不离开 Orca。提交面板就在 diff 查看器旁边，面向常见路径——审查、暂存、提交、推送、继续。

## 提交 {#commit}

1. 从 Source Control 面板暂存已改文件。
1. 在底部面板写 commit message，或者想让 Orca 根据已暂存改动起草时用 **Generate with AI**。
1. 焦点在 Source Control 且主操作为 Commit 时，按 **Commit**（macOS 上 `Cmd-Enter`，Windows / Linux 上 `Ctrl-Enter`）。

仓库的 pre-commit hooks 照常运行。如果 hook 失败，Orca 会行内展示输出。

提交失败时，从失败详情里用 **Fix with AI**，在活动 worktree 中启动默认 Agent，并带上 hook 输出、尝试过的 commit message 和已暂存文件列表。Agent 只拿到一份修复 prompt——不会被要求绕过 hooks、提交、推送或打开审查。

## 推送 {#push}

**Push** 把该 worktree 的分支推到 `origin`，第一次会设置 upstream。如果分支落后，Orca 不会静默 force-push。

当你改写了历史（rebase、amend、squash），而远程只有你本地提交的旧副本时，Source Control 面板会把 **Force push with lease** 作为明确的、独立的操作展示——绝不会作为普通 Push 的回退。标签会显示即将被替换的提交数量和 upstream 分支名，让你确切知道将要改什么。Force push 使用 `--force-with-lease`，因此本地对远程的过期视图会中止推送，而不是覆盖别人的提交。

## 打开托管审查 {#open-a-hosted-review}

分支推送后，用 Source Control 面板的托管审查操作来创建 pull request 或 merge request。提交前确认 base branch、title、description 和 draft 状态。Bitbucket Cloud 可以从同一 composer 创建 pull requests；它没有 draft PR，所以 Draft 会隐藏。对于 GitHub，当所选 base 已经有打开的 PR 时，你可以 **Stack this PR above #N**——见 [堆叠的 pull requests](/docs/review/github#stacked-pull-requests)。

如果 Orca 需要在 Create PR 流程中再跑一次后续提交，而那次提交失败——hooks 拒绝，或工作树处于不可提交状态——对话框会展示带 hook 输出和下一步按钮的详细失败摘要，而不是把你丢回面板且没有任何上下文。从摘要里用 **Fix with AI** 把失败交给 Agent，或自己解决后再跑一次。

在创建审查对话框里用 **Generate pull request details with AI**，可以让 Orca 根据分支 diff 和提交起草 title、description 和 draft 状态。生成的文案面向简短的 ELI5 problem/solution 段落，以及关联议题的指引（挂了 GitHub issue 时用 `Fixes` vs `Refs`）。Orca 会保留你选的 base branch，拒绝空 description，并给出清晰错误，让你可以重试而不是发出空白正文。创建审查前请核对字段。

## 按仓库的 AI 操作配方 {#per-repo-ai-action-recipes}

**Generate with AI**、**Generate pull request details with AI**、**Fix with AI** 和 **Resolve with AI** 都是 Source Control 的 AI 操作——每一个都由一份 **action recipe** 支撑，它选定你触发该操作时 Orca 运行的 Agent、CLI 参数和 prompt 模板。在 [Settings → Git & Source Control](/docs/settings) → **Action recipes** 下编辑，可以设为全局默认，或限定到当前仓库。

模板可以包含 `{basePrompt}`、`{branch}`、`{stagedFiles}`、`{stagedPatch}` 以及用于 commit messages 的 **`{linkedIssue}`** 等变量；PR 详情还支持 `{baseBranch}`、`{currentTitle}`、`{currentBody}`、`{commitSummary}`、`{changedFiles}` 和 `{patch}`。

`{linkedIssue}` 展开为工作区已关联的 **GitHub issue number**，未关联时为空（包括纯 Linear/GitLab 工作区）。优先用说明性措辞——光秃的 `Fixes #{linkedIssue}` 在未关联时会变成 `Fixes #`。

当仓库对某操作有自己的 recipe 时，保存对全局默认的更改不会碰到它——设置窗格会显示一条 **Repository overrides** 备注，列出哪些仓库有分叉以及它们覆盖了什么（agent、CLI arguments 或 command template），并带一个 **Review** 链接跳到该仓库的设置，以便你更新或移除覆盖。

## 修订 {#amend}

修订是显式的——**Commit → Amend**。除非你确认，Orca 不会 amend 已经推送过的提交。

## Source Control 面板 {#source-control-panel}

侧栏 **Source Control** 面板在不离开当前视图的情况下暴露相同操作：暂存和丢弃文件、写 commit message，以及一键运行 **Commit**、**Push**、**Pull** 或 **Sync**。即使路径含非 ASCII 字符，也会按 UTF-8 渲染。

顶部的 branch context 行把当前分支（或 detached HEAD）叠在比较基线之上（`branch → base`），因此 Create PR 和远程操作永远不会藏起你在哪条分支上。当分支有可用的 merge base 时，一个紧凑芯片会显示相对该分叉点新增和删除的总行数（一次范围 diff，不是 staged/unstaged 区域的求和）。当宿主发布拆分时，悬停芯片可看 **Code breakdown**：**Source**、**Tests** 和 **Generated**（Generated 仅在非零时显示）——只是路径启发式，不是内容分析。长分支名会截断，以免盖住芯片。

右键已改文件可 **Copy Path** / **Copy Relative Path**（相对 worktree 根）。

面板底部的主按钮随状态切换，让下一步有用的操作始终一键可达：有未暂存改动时是 **Stage Files**，然后是 **Commit**，再然后是 **Push** / **Pull** / **Sync**，取决于分支相对其 upstream 的位置。

当 merge、rebase、cherry-pick 或 revert 留下冲突时，Source Control 会在 **Review conflicts** 旁边显示 **Resolve with AI**，这样你可以把冲突集交给 Agent，或自己检查后再继续。对于你不想再要的进行中 merge 或 rebase，从 Source Control 使用 **Abort merge** 或 **Abort rebase**。

## 下一步 {#next-steps}

- [托管审查、议题与 Actions](/docs/review/github) — 连接拥有该审查的提供方。
- [批注 AI Diff](/docs/review/annotate-ai-diff) — 提交前留下行备注。
