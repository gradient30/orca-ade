# 设置参考 {#settings-reference}

设置按窗格分组。这里的一切都可用 `Cmd-,` 然后输入关键字搜索。这些文档中的功能页会直接链到相关窗格。

## General {#general}

- **Orca CLI** — 为 shell 和 Agent 注册捆绑的命令行工具。
- **Updates** — 检查并安装更新。在 **Check for Updates** 上的修饰键点击：

| 修饰键                                                     | 效果                                                                                                                                           |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Shift+click**                                            | 包含最新 **RC** 预发布                                                                                                                         |
| **Cmd+click**（macOS）/ **Ctrl+click**（Windows/Linux）    | 最新带 **perf** 标签的预发布                                                                                                                   |
| **Option+click**（仅 macOS）                               | 挑选 **validated local macOS build**（已做兼容性检查）。失败会显示 “Could Not Use Local Build”，并带 **Choose Another Build**。                |

- **Open in menu** — 选择 worktree **Open in** 菜单上的应用。VS Code / Insiders 为 SSH worktree 启用 **Remote SSH** 打开；其他编辑器仍仅限本地路径。
- **UI zoom** — 按安装的 UI 缩放。
- **Default new-worktree name** — 自定义前缀或海洋生物。
- **Editor Word Wrap** — 文件编辑器的默认折行（默认开启）。从文件标签的 **⋯** 菜单或 `Alt+Z` 切换。与 **Diff Word Wrap** 分开。

## Appearance {#appearance}

- 主题、强调色、密度。
- UI 字体族；编辑器字体为可选（空 = 跟随终端字体；设置值则只覆盖文件编辑器和 diff）。
- 编辑器 minimap 开关。
- 状态栏开关，包括 **Resource Manager**（CPU/内存/会话、daemon 控件、工作区磁盘扫描）。
- **Usage percentages** — 在状态栏名册上把提供方限额显示为 **% used** 或 **% remaining**。
- App Icon — 在 Classic、Watercolor 和 Blue 之间循环，用于 Dock 和窗口切换器中显示的图标。
- **Language** — 主要的 Interface 控件。在 System（跟随操作系统）、English、中文（简体）、한국어、日本語 或 Español 之间切换。设置搜索也会匹配 “language” 的本地词（语言 / 語言 / 언어 / 言語 / Idioma），因此 UI 仍是英文时你也能找到 Language。

## Git {#git}

- 默认 base ref 解析器。
- 提交签名选项。
- 外部 git 工具的编辑器。
- Auto-Rename Branch From Work — 在 Agent 开始工作后重命名 Orca 生成的生物分支。
- **GitHub API Budget** — 来自本地 `gh` CLI 的剩余 REST（core）、Search 和 GraphQL 配额。当 PR checks 或 Tasks 停止刷新时有用；如果数字看起来正常但 GitHub 仍对实时调用做速率限制，见 [GitHub 错误排查](/docs/github-errors)。

## Terminal {#terminal}

- 字体、主题、光标样式、内边距。
- Ghostty 导入。
- Warp 主题导入 — 用 **Import themes from Warp**（按操作系统自动发现 Warp 的 themes 文件夹）或 **Import from YAML**（任意 Warp 格式主题文件文件夹）引入你的 Warp YAML 主题。
- 用于 macOS 日文键盘的 JIS Yen (¥) to Backslash (\\)。
- **Terminal shell**（本地 macOS / Linux）——系统 shell 或自定义可执行文件，默认以 login 方式启动。**Custom shell → Advanced → Custom args** 为普通本地窗格请求替换参数。见 [启动文件与参数限制](/docs/terminal#macos-and-linux-shell)。
- Windows 默认 shell（PowerShell 或 CMD）。
- **Allow TUI Clipboard Writes (OSC 52)** — **默认开启**。让 Zellij、tmux、Neovim、fzf、Grok（以及类似工具）通过 PTY 写入系统剪贴板，包括通过 SSH。如果你更喜欢以前的锁定，关掉它。

## Quick Commands {#quick-commands}

- 已保存的终端命令和 Agent prompt 预设，范围为全局或某个项目。每一行都有命令正文的复制控件。
- 用于查看和编辑命令列表的范围过滤器。同一列表会同步到 [移动伴侣](/docs/mobile)。
- 在远程或多主机设置中，命令按拥有它们的 Orca 主机分组（**Saved on**）。主机所有权与 Global/Project 范围以及命令运行位置是分开的——见 [终端 → Quick Commands](/docs/terminal#quick-commands)。

## Agents {#agents}

- 已安装的 Agent — 你可以启用或禁用的已检测 CLI。
- 启用或禁用已检测的 Agent，让启动菜单只显示你想用的 CLI。
- Agent Permissions — 选择 **Yolo** 以减少 CLI 权限提示，或选择 **Manual**，让你尚未自定义的 Agent 保留各自的批准流程。
- Claude 和 Codex 账户列表。
- 每个 Agent 的启动 hooks。
- **Agent status hooks** — 在 Orca 中显示 working / waiting / done 状态。开关无需重启应用即可生效（包括 Windows WSL hook relay）。CLI：`orca agent hooks on|off|status`。
- **Keep computer awake** — **On**（持续保持唤醒）、**Agent**（Agent 工作时保持唤醒）或 **Off**。同一控件以 **Caffeinate**（咖啡图标）出现在桌面状态栏。在已配对的 Web 客户端上隐藏。
- **Skill freshness** — Agents 窗格和技能卡片仍显示完整状态。侧栏导航只给需要操作的技能打徽章（**Update available**、**Needs attention** / review）；健康、加载中以及可选未安装的行保持安静。在对话框中用 **Update** 在后台刷新全局技能（无终端）。进度出现在状态栏；关闭对话框不会取消运行。见 [Orca 技能](/docs/cli/skills#keep-skills-up-to-date)。

## Browser {#browser}

- 配置档（见 [浏览器使用配置档](/docs/browser/profiles)）。
- Default Zoom — 应用到新打开浏览器标签的缩放级别（通过 Cmd-滚轮做的按标签调整会单独记住）。
- Design Mode 默认值。
- Devtools 选择加入。
- **Remote server workspaces** — 选择 **This device** 在此桌面上渲染新的配对运行时浏览器页面，或选择 **Server (streamed)** 在服务器上渲染它们。流量始终经过远程服务器，且该选择只应用于新页面。见 [按 worktree 的浏览器 → 远程工作区](/docs/browser/overview#remote-workspaces)。
- **Browse through SSH workspace hosts** — 把浏览器流量和 DNS 经过每个工作区的 SSH 主机发送。关掉则改为从此设备浏览。
- **Link Routing** — 把来自终端、markdown 和编辑器的 http(s) 链接在 Orca 浏览器或系统浏览器中打开。嵌套的 **Hold Shift…** 会为一次点击反转该默认（`⇧⌘-click` / `Shift+Ctrl+click`）。见 [按 worktree 的浏览器](/docs/browser/overview#link-routing)。
- **Show terminal link actions** — **默认开启**。在终端链接上普通单击会打开紧凑的操作弹出层。关掉则需要 `⌘`-click / `Ctrl`-click。见 [终端 → 链接操作](/docs/terminal#link-actions)。
- **Default Search Engine** — 当你在浏览器地址栏或 [新标签 omnibox](/docs/model/quick-open#new-tab-omnibox) 中输入非 URL 文本时使用。

## Artifacts {#artifacts}

- **Orca account** — 登录（与 Orca Relay 同一账户族）以发布和管理共享文件。
- **Allow publishing public artifact links** — **默认关闭**。设备范围的闸门：开启时，你、Agent 以及此机器上的 `orca` CLI 可以上传 HTML/Markdown 并铸造公开查看链接。关掉它不会删除已有链接。
- **Show Artifacts** / 侧栏快捷方式 — 打开 Artifacts 列表以搜索、预览、复制或删除账户拥有的链接。
- **Ask Before Deleting Artifacts** — 在打断公开链接之前可选的确认。
- 从打开的本地 HTML 页面或 Markdown 编辑器用 **Share as artifact** 分享，或通过 `orca artifacts …`。见 [CLI 参考 → Artifacts](/docs/cli/reference#artifacts)。

## Integrations {#integrations}

- GitHub OAuth。
- Linear API token。
- Jira — Cloud（email + API token）或自托管 Server/Data Center（PAT 或 username/password）。见 [Jira 条目抽屉](/docs/review/jira)。
- Bitbucket Cloud — 用 **Email & API token**（默认）或 **Access token** 进行 **Connect**。Orca 在保存前验证凭据。`ORCA_BITBUCKET_*` 环境变量优先，并隐藏 Connect / Disconnect。已保存的凭据留在此机器上——在 [Remote Orca Server](/docs/remote-servers) 上，改为在服务器上设置环境变量。见 [托管审查](/docs/review/github)。
- MiniMax — 粘贴 MiniMax 会话 cookie（来自 `platform.minimax.io/console/usage`），以为 MiniMax CLI 启用本地用量和速率限制跟踪。可选的 group ID 和 usage models 字段会覆盖从 cookie 选出的默认值。
- MCP servers。

## Notifications {#notifications}

- Agent-finished：system、sound、chip。
- 按类别的自定义桌面通知声音。
- PR check 失败。
- 有可用更新。

## Voice {#voice}

- **Enable Voice Dictation** — 需要麦克风权限（macOS 可能会打开 Privacy & Security）。
- **Microphone** — 选择口述使用的输入设备。默认为系统麦克风；当你不想用操作系统默认时，选择特定设备（例如耳机）。如果所选麦克风被拔掉或缺失，Orca 回退到系统默认并显示非阻塞提示。
- **Dictation mode** — **Toggle**（按快捷键开始/停止）或 **Hold**（按住快捷键说话）。
- **Speech Model** — 下载/选择设备端模型，或在粘贴 API key 后使用云端 OpenAI 模型：
  - **Parakeet TDT v3**（推荐）— 多语言欧洲语言，离线。
  - **Parakeet TDT v2** — 英语，更快。
  - **Zipformer** 系列 — 双语 ZH+EN 流式；流式 EN/ZH；**Zipformer Streaming KO**（韩语）。
  - **Paraformer Bilingual** — 汉语方言 + 英语。
  - **Parakeet TDT-CTC JA** — 日语。
  - **SenseVoice** — ZH / EN / JA / KO / 粤语，带自动语言检测。
  - **Whisper Tiny** — 90+ 种语言，准确度较低。
  - **GPT-4o mini / GPT-4o Transcribe** — 云端；需要同一窗格下的 OpenAI key。
- 正在听时，**Listening…** 药丸显示 **Stop** 控件；在 toggle 模式下，工具提示还会显示口述快捷键。

## SSH {#ssh}

- SSH worktree、目标、口令、默认 identity file。
- 高级：proxy / jump host；**Reuse SSH connection for faster setup**（系统 OpenSSH multiplexing；默认开启）。
- Kerberos 主机：来自 OpenSSH 配置的 `GSSAPIAuthentication` 驱动系统 OpenSSH 鉴权（见 [SSH worktrees](/docs/ssh)）。

## Remote Orca Servers {#remote-orca-servers}

- 配对并连接到远程 Orca 运行时。
- 把此桌面应用通告为服务器，并创建可撤销的访问链接。
- 用于服务器路由的项目、终端和提供方检查的高级默认运行时选择。

## Shortcuts {#shortcuts}

- 完整键位图 — 每个绑定都可重映射。
- Toggle Sleeping Workspaces 默认未绑定；如果你想要侧栏休眠 worktree 过滤器的直接快捷键，在这里分配。
- **Toggle Child Workspaces** 默认未绑定；在这里分配，用来显示或隐藏父 worktree 的嵌套子项，与点击其 **N children** 芯片相同。它针对悬停的 worktree，没有悬停时针对当前 worktree。
- **Toggle Workspace Board** 默认未绑定；在这里分配，以便用一个快捷键打开或关闭 Workspace Board。`workspace.openBoard` 的现有绑定继续有效。
- 关闭所有编辑器标签在 macOS 上默认为 `Cmd+Option+W`，在 Windows / Linux 上为 `Ctrl+Alt+W`。
- **Tab navigation defaults (new installs)：** 跨所有类型的下一个/上一个标签是 `Cmd+Shift+]` / `Cmd+Shift+[`（Linux/Windows 上为 Ctrl）。同类型的下一个/上一个是 `Cmd+Option+]` / `Cmd+Option+[`。上一个最近标签是 `Ctrl+Tab`。现有安装把自定义覆盖保留在 `~/.orca/keybindings.json` 下。
- **Add Review Note** 默认为 `Cmd+Shift+A`（macOS）/ `Ctrl+Shift+A`（Windows / Linux）；可重映射。
- **Send Review Notes to Agent** 默认未绑定；在这里分配，以便不用鼠标即可打开活动 worktree 的 diff 批注发送菜单。
- **Delete workspace** 在 macOS 上默认为 `Cmd+Shift+Backspace`，在 Windows / Linux 上为 `Ctrl+Shift+Backspace`。把指针悬停在你打算删除的侧栏工作区上；Orca 仍会要求确认。

## Repository {#repository}

- 按仓库的 base ref 和 hooks。
- 在创建 worktree 时自动运行的命令。
- 侧栏的仓库图标：选择图标、完整可搜索的 emoji 选择器、上传的图片、网站 favicon 或 GitHub 头像，然后挑选预设或自定义十六进制徽章颜色。
- 用于提交信息、pull request 详情和分支名的 Source Control AI 覆盖。
- **Worktree Shared Paths** — 从主 checkout 物化到每个新 worktree 的 gitignored 路径（macOS 上尽可能 APFS clone-copy，否则 symlink）。补充仓库内检入的 `orca.yaml` 中的 `worktree.sharedDirectories` 以及 `.worktreeinclude`（见 [Worktrees](/docs/model/worktrees)）。

## Floating Workspace {#floating-workspace}

- **Enable Floating Workspace** — 用于 **不** 绑定到仓库 worktree 的终端、浏览器和 markdown 标签的全局表面。
- **Terminal Directory** — 新浮动终端标签的起始目录（`~` = 主目录）。
- **Toggle Button Location** — 浮动工作区开关出现的位置；无论按钮放在哪里，键盘快捷键都有效。

## Plugins (Experimental) {#plugins-experimental}

- **Plugin system** — Settings → Plugins。先打开系统，然后逐个审查并启用每个插件。在你同意之前什么都不会运行。
- **Marketplaces** — 添加 git marketplace 源，浏览插件，预览能力（面板、命令、语言包、VM recipes），安装、更新或回滚。
- 插件 worker 始终在此计算机上运行；SSH 工作区操作仍通过 Orca 路由。
- 能力和 API 形态可能变化；把第三方插件当作不受信任的软件。

## Experimental {#experimental}

- [Activity Page](/docs/activity) — 用于 Agent 事件的 Slack 式 worktree 动态。
- Compact worktree cards — 在布局仍处于实验阶段时隐藏侧栏中多余的第二行。
- [Agent 休眠](/docs/agents/hibernation) — 暂停空闲的后台 Agent，并在重新打开时自动恢复它们。
- **Agent Dashboard** — Needs You / Working / Done Agent 的看板（可选 Idle），带搜索以及项目/工作区/PR 过滤器；可在窗口内打开或弹出。**Show idle agents** 位于看板的仪表板设置控件上，不在这里。见 [Agent 与会话](/docs/model/agents-sessions#agent-dashboard)。
- **Chat UI** — 受支持 Agent 终端上的可选聊天表面。见 [Chat UI](/docs/agents/native-chat)。
- **Cloud VM** — 显示仓库拥有的按需环境（云沙箱、虚拟机或本地 Docker）的设置控件和工作区 **Run on** 目标。设置指南和 recipe 安装位于此实验开关下。见 [运行 Orca 的方式](/docs/ways-to-run#4-cloud-vms-per-workspace-environments)。
- 尚未稳定的功能 — 行为可能变化。
