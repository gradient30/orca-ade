# Worktrees {#worktrees}

Orca 以 worktree 为原生模型。不是在一份 checkout 上切分支、stash，而是每个任务通过 `git worktree` 得到仓库在磁盘上的一份拷贝。并行 Agent 之所以安全，靠的就是这个——它们不会踩到彼此的文件。

## 模型 {#the-model}

- 每个仓库有一个 **base ref**（通常是 `origin/main`）。
- 每个 worktree 有一个 **start-from ref**——它从哪里分出去。
- 每个 worktree 有自己的分支、自己磁盘上的文件，以及自己的 Agent 终端。
- 删除 worktree 会同时移除目录和分支（需确认）。如果 git 因为可能仍有未合并提交而保留本地分支，Orca 可以提供审查步骤——见 [保留的分支](#preserved-branches)。

## 按功能的生命周期 {#per-feature-lifecycle}

1. **Create** — 任务名、start-from 选择器、可选的 GitHub / Linear / Jira / GitLab 链接。
1. **Work** — Agent 终端、编辑器标签、浏览器标签、终端窗格全部限定在这个 worktree。
1. **Review** — 相对 start-from ref 的 diff 视图、批注 AI Diff、归因。
1. **Ship** — 提交、推送、打开 PR、等待检查——全部内联完成。
1. **Archive or delete** — 一键移除 worktree 和分支。

## 创建在后台进行 {#creation-runs-in-the-background}

提交 Create Worktree 对话框会立刻关掉它——`git fetch` 和 `git worktree add` 继续在后台进行，你可以接着用 Orca。新 worktree 以进度行出现在侧栏，该 worktree 的标签会显示实时 setup 状态，直到 checkout 完成并切到终端。创建进行中时你可以切到其他 worktree、看进度，或从标签内面板取消。如果创建失败，面板会带 Retry 展示错误。

## Start-from 选择器 {#start-from-picker}

创建 worktree 时，你选择从哪里分支出去。可以是：

- 仓库的 base ref（快路径）。
- 另一条本地分支——适合把工作叠在正在审查的 PR 上。
- 特定 commit SHA。
- 已有的远程分支——Orca 会 fetch 并检出它。

## 共享目录与 gitignored 文件 {#shared-directories-gitignored-files}

全新 worktree 是一份干净 checkout。依赖、缓存，以及住在 gitignored 路径里的本地密钥，在你重新创建它们之前都是缺的。

Orca 用三种互补方式填这个缺口：

1. **Worktree Shared Paths**（按仓库，在 Settings → Repository）——路径从主 checkout 物化到每个新 worktree（macOS 上尽可能用 APFS clone-copy，否则用符号链接）。
1. **`orca.yaml` 中的 `worktree.sharedDirectories`** — 检入仓库的 **gitignored 目录** 列表，用链接共享（包括在 APFS 上）。用于 `node_modules` 或 `.cache` 这类可重建的大树。条目必须在主 checkout 中作为目录存在 **并且** 被 gitignore；已跟踪或缺失的路径会被跳过。
1. **仓库根目录的 `.worktreeinclude`** — **要拷贝**（不是符号链接）进每个新 worktree 的 **gitignored 文件或目录** 列表，这样每个 worktree 拥有自己的副本。典型条目：`.env`、`.vscode/` 下的本地配置。允许空行和 `#` 注释。目前只支持 **字面** 路径——glob 和否定会带警告跳过。已跟踪、缺失、或未被 gitignore 的路径不会被拷贝。

`orca.yaml` 共享目录 **追加到** 每用户的 Worktree Shared Paths 列表；它们从不替换它。已经共享/链接的路径不会再从 `.worktreeinclude` 拷一遍。

见 [orca.yaml 与 .worktreeinclude 参考](/docs/model/orca-yaml)，了解 setup 脚本、默认标签、命令选择、路径规则、限制，以及每项设置从哪份 checkout 读取。

```yaml
# orca.yaml (repo root)
worktree:
  sharedDirectories:
    - node_modules
    - .cache
```

```text
# .worktreeinclude (repo root)
.env
.env.local
.vscode/settings.json
```

## 创建对话框：Project、Run on、Agent 与任务链接 {#create-dialog-project-run-on-agent-and-task-links}

Create Workspace 对话框对 **Project** 和 **Run on** 使用键入即筛 combobox：

- 输入以过滤；Enter 提交当前选中的那一行。
- **Project** 始终把 **Add a new project** 钉在底部——安装里还没有任何项目时，创建也不会走进死胡同。
- **Run on** 列出就绪主机和 recipe，以及那台机器上仍需完成项目设置的主机。在 setup-needed 主机上，选择 **Set project location** 而无需离开创建表单，然后浏览到已有 checkout/文件夹，或把 Git 仓库 clone 到那台主机。Orca 会选中刚就绪的位置，让你继续创建 worktree。断开的 SSH / 远程主机可以提供 **Connect**，而不把它们选为运行目标。**Add host** 对 SSH 或 Remote Orca Server 目标保持钉住。
- **Agent** 选择器（折叠或展开）可以对你在创建时选的 Agent **Set as default**，包括 Blank Terminal。
- 从名称字段链接 GitHub PR、Linear issue、GitLab MR 或 **Jira** issue（粘贴 Jira URL，或在 **Jira** 模式下搜索）。已链接的 issue 会出现在 worktree 卡片上。见 [Jira 事项抽屉](/docs/review/jira)。

见 [运行 Orca 的方式](/docs/ways-to-run)。

## Emoji 工作区名称 {#emoji-workspace-names}

在工作区名称字段里，你可以输入 Slack 风格的 shortcode（`:rocket:`），并从 shortcode 建议弹出层里挑选。双击重命名 worktree、在 **Edit Worktree Details** 里编辑，或在 [Worktree Jump Palette](/docs/model/quick-open)（`Cmd-J`）里输入 shortcode 时，同一个选择器也可用。显示名称保留 emoji；Orca 派生 git 分支名时，会把已知 emoji 改写成可读 shortcode（例如 🚀 → `rocket`）。Jump Palette 搜索按该 shortcode 派生片段匹配带 emoji 名的工作区。

## 命名分支 {#naming-the-branch}

默认情况下，Orca 从你输入的工作区名称派生新 worktree 的分支名；若工作区是从链接的 GitHub PR、Linear/Jira issue 或 GitLab MR 创建的，则从该项派生。若要改设显式分支名，在 Create Worktree 对话框中展开 **Advanced** 抽屉，在 **Branch name** 字段里输入（占位符 `feature/my-branch`）。

同一个抽屉还允许你从同一仓库中选一个活动 worktree，作为新工作区的 **Parent workspace**。这只是在 Orca 侧栏里嵌套工作区；不会改变 Git 历史或分支。Orca 会排除已归档工作区，以及会造成环的选择。

当你从 **Linear issue** 创建时，Orca 使用 Linear 为该 issue 提供的分支名（若 Linear 提供了）作为分支覆盖——与 Linear 在其 UI 中会建议的名称相同——而不是只把 issue 标题做成 slug。

Branch name 字段仅在你从键入的工作区名称或 base 分支创建时提供。当工作区绑定到被跟踪的工作项时，分支从该项派生——链接的 GitHub PR 甚至会在提交时重新解析分支——所以 Orca 隐藏该字段，以免出现被静默忽略的覆盖。

## 侧栏布局 {#sidebar-layout}

侧栏默认按 **project** 分组 worktree——顶层行是项目（一个项目 = 一个 git 仓库或相关集群），展开为你正在做的 worktree。标题栏有自己的过滤输入（与全局搜索分开），这样你不用离开侧栏就能收窄列表。

侧栏标题栏的过滤菜单把主机和项目范围归到共用的 **Show** 区（**Hosts** 和项目的子菜单行），然后是隐藏开关：

- **Sleeping** 工作区——每个项目的 **entry-point / main** 工作区在此过滤下仍可见，这样当那份 checkout 空闲时项目行不会消失
- **Except default branch**（仅在 **Hide sleeping** 打开时）——在隐藏 sleeping 工作区时仍让 default-branch 工作区可见；当 sleeping 工作区已经显示时，该子选项隐藏
- **Default branch** 工作区（主 checkout 行）
- **Automation-created** 工作区
- **CLI-created** 工作区 — 通过 `orca worktree create` 创建（悬停卡片可看 **Orca CLI** 来源详情）
- **Other-client** 工作区 — 当共享的 [远程 Orca 服务器](/docs/remote-servers) 上有从另一台已配对客户端创建的工作区时，会出现 **Hide other-client workspaces**；打开它，让本设备列表只保留你在这里创建的工作区。空查询的 `Cmd-J` 最近项和数字快捷键遵循同一过滤；输入查询仍能找到被隐藏的行。
- **Detached HEAD** 工作区 — 停在某个 commit 而不是分支上的 checkout

过滤控件上会显示活动过滤数量；**Clear** 只重置当前打开的过滤。文本搜索和 [Worktree Jump Palette](/docs/model/quick-open)（`Cmd-J`）一旦你输入查询，仍能到达仅被隐藏开关藏起的工作区。Cmd-J 打开时保留侧栏的主机和项目范围；按 **Tab** 可调整它的临时主机和单个仓库过滤。

当你添加一个包含多个 Git 仓库的父文件夹时，Orca 可以分别导入所选仓库，或把它们归到一个项目组下。

侧栏顶部的 **Search** 按钮打开 [Worktree Jump Palette](/docs/model/quick-open)（`Cmd-J`）——同一界面，面向不靠键盘导航的用户、用点击驱动。状态栏内联显示 Agent 活动；未读 worktree 用粗体而不是角标。

你可以把 worktree 钉到其项目顶部，让长时间运行的工作保持可见；右键 worktree 会露出 archive / sleep / delete 操作。要从键盘开始删除，将指针悬停在 worktree 或 folder workspace 上，在 macOS 上按 `Cmd-Shift-Backspace`，在 Windows / Linux 上按 `Ctrl-Shift-Backspace`；仍会出现正常的确认对话框。按住 `Cmd`（Linux/Windows 上为 `Ctrl`）点击可将 worktree 加入多选，或按住 `Shift` 选择连续范围——右键任一已选 worktree 会对选区中的每一个执行该操作。仓库行本身可以拖动重排。

当 worktree 有嵌套的子 worktree 时（例如来自编排，或带 parent 的 `worktree create`），上下文菜单还可以提供 **Sleep with Descendants (N)** 和 **Delete with Descendants…**。Sleep with descendants 会关闭所选工作区以及同一项目、仓库和主机上每个已验证嵌套子项的活动面板——只有带活动终端或浏览器标签的工作区才会被列为休眠目标。Delete with descendants 把已有的级联删除说清楚。过期的谱系链接、环，以及跨主机或仓库边界的子项会被排除。

双击侧栏中的 worktree 标题可内联重命名。双击卡片其他地方仍会打开完整编辑对话框。在 **Edit Worktree Details** 中，issue 字段接受 **GitHub** 或 **Linear**（字段上的 chip；粘贴 URL 可自动检测）。每个工作区一个已链接 issue——更换供应商或清空字段会取消上一个的链接。对于主机已断开的 SSH 工作区，卡片标题行可以显示内联重连控件（见 [SSH Worktrees](/docs/ssh)）。

## Resource Manager 清理 {#resource-manager-cleanup}

需要在移除之前通览整个设置中的工作区时，使用 **Resource Manager → Clean up workspaces**。列表包括本地 worktree、主 worktree、folder workspace，以及断开 SSH 主机上的工作区。搜索、过滤或排序列表，以查看每个工作区的状态、最近活动、大小、Git 状态和已链接审查，然后再选择要移除的项。

## 保留的分支 {#preserved-branches}

批量删除工作区（侧栏多选或 Resource Manager 清理）仍会移除磁盘上的文件夹。如果 git 因为本地分支可能包含未合并提交而拒绝丢掉它，Orca 会保留这些分支，并显示类似 **Review N Branches** 的 toast。打开它会列出被保留的分支，这样你可以强制删除一部分、留下另一部分。未选中的分支留在仓库里；工作区文件夹不会恢复。

## 多仓库项目组与 folder workspace {#multi-repo-project-groups-folder-workspaces}

当你导入一个包含多个 Git 仓库的父文件夹时，Orca 可以在侧栏把这些仓库归到单个 **project group** 下。每个项目组提供 **folder workspace** 流程——一个类似 worktree 的条目，住在父文件夹层级，并将其任务源绑定到底下的某一个仓库，这样某个功能的 GitHub/GitLab/Linear/Jira 任务面仍挂在正确的仓库上，即使该工作区本身在侧栏里与兄弟项分在一组。

要创建一个，将指针悬停在侧栏中项目组的标题行，点击 **+** 操作（tooltip："Create workspace for _group_"）。创建对话框（"Create Folder Workspace"）让你为工作区的任务源挑选源项目、命名工作区，并可选地附上已链接的 issue 或 PR。提交后，folder workspace 出现在项目组下，与普通的仓库范围 worktree 并列。

删除项目组时，Orca 还会提供一个复选框，在同一次操作中移除该组包含的项目（底层仓库注册）——这样清理不再使用的集群只需一次确认，而不是好几次。

## 使用普通 git {#using-plain-git}

每个 Orca worktree 都是真正的 git worktree。你可以在里面打开终端，使用 `git status`、`git rebase`、`git cherry-pick` 以及任何其他命令——Orca 会在下次渲染时拾取这些变更。

你自己用 `git worktree add` 创建的 worktree 在你于 Orca 中显示它们之前保持外部。如果仓库把它们藏起来，侧栏会显示一张 **hidden worktrees** 卡片。点击它打开 **Non-Orca worktrees**，然后对想出现在侧栏里的 worktree 选择 **Show**。

在 **Settings → General → Workspace** 中，为外部 worktree 来源设置全局默认：Claude Code worktree、GSD worktree、其他位置，以及你添加的任意自定义绝对路径位置。这些默认应用于该主机上当前和未来的 worktree；新的全局自定义根默认隐藏。在项目的 **Non-Orca worktrees** 对话框中，你可以为该项目覆盖某个来源，或把它恢复为全局设置，然后搜索并找回单个被隐藏的 worktree。

> 如果你从 CLI 执行 `git worktree remove`，Orca 会注意到，并在下次刷新该仓库时清理自己的状态。
