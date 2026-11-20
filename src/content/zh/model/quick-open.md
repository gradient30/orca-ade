# 快速打开与跳转面板 {#quick-open-jump-palette}

worktree 一多，导航就成了瓶颈。Orca 自带两套以键盘为先的导航工具。

## Quick Open（Cmd-P） {#quick-open-cmd-p}

限定在当前 worktree 的文件搜索。输入片段；Orca 按最近使用加上匹配分数排序，并在新编辑器标签中打开该文件。结果行以 **文件名** 开头，空间紧时截断父目录（悬停看完整路径）。gitignored 文件也包含在结果里——它们作为第二轮出现在已跟踪匹配之后，这样你经常 quick-open 的文件（构建产物、env 文件）仍然找得到，又不会污染列表顶部。

## 新标签 omnibox {#new-tab-omnibox}

标签栏 **+** omnibox 在一个字段里搜索 **已打开的标签**、文件、URL 和 Agent（占位符：_Search open tabs, files, URLs, agents…_）。文件行使用与 Quick Open 相同的文件名优先布局。匹配到已经打开的编辑器标签时，优先那个标签而不是重复的文件结果，这样你会跳到已打开的缓冲区，而不是再开一份拷贝。

输入网页搜索而不是路径或 URL，会用你的 [Default Search Engine](/docs/settings) 在该 worktree 的浏览器中打开它。单个 token 仍把文件匹配排在前面；多词短语会提升搜索行。在查询前加 `?` 可跳过文件和标签匹配，立刻搜索。

## Worktree Jump Palette（Cmd-J） {#worktree-jump-palette-cmd-j}

在一次搜索里跨 worktree 和标签跳转。面板打开时带上侧栏当前的主机和项目范围，包括单个仓库选择。空输入的占位符写着 _repo/worktree_ ——打一半即可，Orca 会按此过滤。输入仍能找到被侧栏其他可见性开关藏起的未归档 worktree，但会保持该主机和仓库范围。Slack 风格的 emoji shortcode（`:rocket:`）使用与工作区命名相同的建议弹出层。

在面板里按 **Tab** 打开主机和项目过滤菜单。项目选择按仓库粒度。已选主机和仓库会收窄结果集，并以 chip 显示，可逐个移除。更改是临时的：关闭面板会丢弃它们，下次打开会从侧栏重新填入过滤。

结果包括：

- **Recent Chats & Terminals** — 空查询时，最多六个按活动排序的最近 Agent/终端会话（needs-you 优先，然后 done，然后 idle）。你已经在看的那个空闲标签会被省略，好让列表保持可操作；当前标签若正在工作、在等你、或有未读活动，仍会出现。行使用与标签栏相同的实时注意徽章（spinner、问号、铃、勾）。数字快捷键（macOS 上 `Cmd-1`–`Cmd-6`，Windows / Linux 上 `Ctrl-1`–`Ctrl-6`）直接跳到那些行；成员和顺序在面板打开时冻结，这样行不会在光标下挪动。
- **Recent Worktrees** — 空查询的下一段，按上次聚焦排序，有上限以便列表仍可扫视。
- 项目和仓库组，这样你可以按名称跳到侧栏某一段。
- 一旦开始输入，每个 worktree 按仓库分组。
- 当审查元数据已经可用时，按缓存的 GitHub PR 标题或编号（`#123`）以及缓存的 GitLab merge request 标题或编号（`!123`）匹配的 worktree。
- 每一个打开的标签，先按当前 worktree 范围，再全局。标签标题或内容中的匹配排在仅匹配 worktree、分支或仓库的前面；同等强度的匹配优先你更近使用的标签。Orca 有上次活动时间时，行会显示它。输入 `terminal` 或 `simulator` 这类别名仍会匹配那些标签类型，又不会把行标签弄乱。

当键入的查询同时命中 **已打开的标签** 和 worktree 时，面板会交错插入每一段的短预览，这样两个主列表都不会被埋住。如果某段有更多匹配，点击其 _N more_ 行里的 **See more**，每次再揭示 20 条。更改查询会重置已展开的段。单段结果保留完整的硬上限列表。

当查询匹配不到已有 worktree 时，面板会提供一行 **Create worktree**，用键入的文本作为名称。已有匹配仍会先被选中，所以在有真实结果时按 Enter 仍会跳转。

> 快捷键绑定可在 [Settings → Shortcuts](/docs/settings) 重新映射。
