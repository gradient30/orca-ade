# 更新日志 {#changelog}

本页**置顶最近五次**桌面版的完整中文日志，并**永久保留**更早版本的译本。打开时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases)；同步脚本只追加/刷新新版本，**不会删除历史条目**。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 版本索引 {#index}

| 版本 | 日期 | 标题 |
| --- | --- | --- |
| [v1.4.237](#v1-4-237) | 2026年10月21日 | 手机端能做的更多：笔记、无头 Markdown，以及更稳的聊天与远程 |
| [v1.4.235](#v1-4-235) | 2026年10月20日 | Claude 聊天可 Rewind 到任意一轮，每段对话记住自己的模型设置 |
| [v1.4.233](#v1-4-233) | 2026年10月20日 | SSH 与远程工作区：无下载也能连通，Settings 里远程服务器更清晰 |
| [v1.4.232](#v1-4-232) | 2026年10月20日 | 自动权限进聊天与终端，Native Chat 支持 OpenCode 2 与 $ 技能 |
| [v1.4.230](#v1-4-230) | 2026年10月19日 | 实验性 Native Chat 支持 Antigravity，可选择 Agent 并在聊天内安装 |

更早版本（同步时保留，不删除）：
| [v1.4.229](#v1-4-229) | — | 实验性 Native Chat 可逐轮审查编辑，共享技能支持更多 Agent |
| [v1.4.227](#v1-4-227) | — | Native Chat 拥有独立权限模式，会话更易继续 |
| [v1.4.225](#v1-4-225) | — | SSH 与托管服务器：新连接使用托管服务器，旧终端继续工作 |
| [v1.4.224](#v1-4-224) | — | 自动化可按次指定模型与 effort，SSH 主机改跑托管 Orca 服务器 |
| [v1.4.223](#v1-4-223) | — | 实验性 Native Chat 可回退对话，SSH 重连后保留标签 |
| [v1.4.222](#v1-4-222) | — | OpenCode worker 等可提交后再交任务，大 CSV 可表格编辑 |
| [v1.4.221](#v1-4-221) | — | Copilot 配置改为仅所有者可读，Windows Codex 改用 ~/.codex |
| [v1.4.220](#v1-4-220) | — | Native Chat 的 Stop 会结束进程，SSH 可选自带运行时 |
| [v1.4.219](#v1-4-219) | — | Codex 共用服务器会提示，启动 Agent 时预信任文件夹 |
| [v1.4.218](#v1-4-218) | — | Codex 终端可独立服务器，内置更多 Agent |
| [v1.4.217](#v1-4-217) | — | Codex 0.158 worker 恢复启动，标签各自独立运行 |
| [v1.4.216](#v1-4-216) | — | 窄窗口里状态栏保持单行 |

## 完整中文日志 {#full-notes}

## v1.4.237 手机端能做的更多：笔记、无头 Markdown，以及更稳的聊天与远程 {#v1-4-237}

2026年10月21日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.237)

### 十万星标，感谢！⭐🐳 {#v1-4-237-100-000-stars-thank-you-}

Orca 刚刚突破 GitHub **100,000 star**！每一份 bug 报告、pull request、共享工作流与推荐都帮我们走到这里。感谢与我们一起用 Orca 构建，并塑造接下来的方向。❤️

为表庆祝，本版带来更强的手机体验、更可靠的 Agent 对话，以及让工作在桌面与远程机器间持续推进的修复。

### 简要说明 {#v1-4-237-short}

- **手机端能做的更多：** 创建和编辑笔记，在无头宿主上保存 Markdown，跟随相对文件链接，并查看内嵌图片。缓冲的终端草稿在切换工作区后也能保留。
- **聊完还能回来：** Codex 聊天在撤销后能正确重开，Claude 在 Orca 回滚后仍保留已 Rewind 的上下文，截图会跟着对话走。Codex 技能选择器现在反映 Codex 实际加载的技能。
- **工作更受保护：** Discard 会暂停跨工作区对同一文件的自动保存。只读 Markdown / CSV 视图保护未保存编辑；新建、未暂存的 Markdown 会直接进入富文本编辑器。
- **桌面之外的语音：** 通过无头 `orca serve` 宿主，手机听写再次可用，并可用 CLI 配置宿主的 OpenAI key。
- **更顺的远程工作：** 重启后重连隐藏的终端标签，宿主再次配对时保留浏览器登录，在有数千台主机的 SSH 配置里搜索而不卡死界面。
- **小细节，更顺手：** 手机标签跟随桌面顺序，横屏布局显示会话标题，键盘控件保持高度，worktree 安全扫描会跳过未改动的工作区。

**手机更新：** 更新为手机提供服务的那台电脑上的 Orca，也会更新手机端被提供的界面。持久终端草稿还需要更新过的 mobile shell。

### 兼容性与升级说明 {#v1-4-237-compatibility-upgrade-notes}

- **实验性 Native Chat：** 请让已配对与 SSH 宿主与 Orca 一起更新，以获得最新聊天修复。精确的 Codex 技能文件选择在桌面端且宿主支持时可用；手机选择与较旧宿主仍保留纯文本技能名。把技能作为新消息发送，以便 Codex 在一轮开始时应用它。
- **无头听写：** 用 `orca speech openai-key set`（从 stdin 读取）把 OpenAI key 保存在负责转写的宿主上。Linux / macOS 上已安装应用的 `orca serve` 宿主也可使用捆绑的端上识别器；Windows、托管 SSH 与 WSL 服务器使用云端模型。
- **CLI 启动选择：** 显式 `--surface` 需要更新过的执行宿主。省略该选项则保持你现有的默认值。

---

### 产品体验 {#v1-4-237-product}

#### 实验性 Native Chat {#v1-4-237-native-chat-experimental-}

> 挑选 Codex 实际加载的技能，自信地回到对话，并完整保留聊天历史与附件。

- 在聊天中使用 Codex 自己已加载的技能目录；桌面选择会定位到确切的技能文件，即使名称重复也能区分（[@brennanb2025](https://github.com/brennanb2025)，[#30937](https://github.com/stablyai/orca/pull/30937)）
- 撤销后重开 Codex 聊天，并以正确的对话历史继续（[@brennanb2025](https://github.com/brennanb2025)，[#31041](https://github.com/stablyai/orca/pull/31041)）
- 即使回滚 Orca，仍保持 Claude 已 Rewind 的上下文完整（[@nwparker](https://github.com/nwparker)，[#31231](https://github.com/stablyai/orca/pull/31231)）
- 在 Claude 实际收到的位置显示回合中途发送的 prompt 与 `!` 命令（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31204](https://github.com/stablyai/orca/pull/31204)）
- 拖入聊天的截图在该聊天生命周期内保持可用（[@brennanb2025](https://github.com/brennanb2025)，[#30419](https://github.com/stablyai/orca/pull/30419)）
- 重试失败的聊天命名，在标签悬停卡片上显示命名错误，并提供 **Regenerate name**（[@brennanb2025](https://github.com/brennanb2025)，[#30646](https://github.com/stablyai/orca/pull/30646)）
- 设置更新后，已恢复的 Claude 聊天仍可立即接收消息（[@brennanb2025](https://github.com/brennanb2025)，[#30982](https://github.com/stablyai/orca/pull/30982)）
- 仅在 Claude、Pi 或 ACP 处理工作时显示 **Working**，同时保持 Claude 聊天 worker 运行（[@brennanb2025](https://github.com/brennanb2025)，[#30577](https://github.com/stablyai/orca/pull/30577)）
- 将休眠的 Native Chat 工作区显示为休眠，并在侧栏筛选要求时隐藏它们（[@brennanb2025](https://github.com/brennanb2025)，[#28457](https://github.com/stablyai/orca/pull/28457)）
- 将完成通知关联到正确的 hook 驱动回合（[@brennanb2025](https://github.com/brennanb2025)，[#30620](https://github.com/stablyai/orca/pull/30620)）
- 澄清如何在聊天与终端 Agent 之间继续对话（[@AmethystLiang](https://github.com/AmethystLiang)，[#31402](https://github.com/stablyai/orca/pull/31402)）

#### 手机端 {#v1-4-237-phone}

> 在工作区之间切换而不丢失草稿，无需打开桌面窗口即可处理 Markdown，界面也更一致。

- 在桌面当前显示的标签上打开 worktree（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31215](https://github.com/stablyai/orca/pull/31215)）
- 按与桌面标签栏相同的顺序列出会话标签（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31269](https://github.com/stablyai/orca/pull/31269)）
- 离开并重新打开工作区时保留未发送的缓冲终端命令（[@nwparker](https://github.com/nwparker)，[#31314](https://github.com/stablyai/orca/pull/31314)）
- 在无头宿主上创建和编辑笔记（[@nwparker](https://github.com/nwparker)，[#31291](https://github.com/stablyai/orca/pull/31291)）
- 无需打开桌面窗口即可读取和保存 Markdown 标签，并用冲突检查保护未保存的桌面编辑（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31101](https://github.com/stablyai/orca/pull/31101)）
- 保存过程中若工作区迁移，仍把 Markdown 保存在原宿主上（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31376](https://github.com/stablyai/orca/pull/31376)）
- 从 Markdown 打开相对文件链接（[@nwparker](https://github.com/nwparker)，[#31298](https://github.com/stablyai/orca/pull/31298)）
- 在 Markdown 预览中显示内嵌图片（[@nwparker](https://github.com/nwparker)，[#31304](https://github.com/stablyai/orca/pull/31304)）
- 从审查返回时刷新已暂存文件（[@nwparker](https://github.com/nwparker)，[#31295](https://github.com/stablyai/orca/pull/31295)）
- 手机横屏时在标签旁显示会话标题（[@brennanb2025](https://github.com/brennanb2025)，[#30879](https://github.com/stablyai/orca/pull/30879)）
- 将状态栏区域融入工作区标题栏（[@nwparker](https://github.com/nwparker)，[#31353](https://github.com/stablyai/orca/pull/31353)）
- 让 Home Indicator 区域与终端输入面板对齐（[@nwparker](https://github.com/nwparker)，[#31354](https://github.com/stablyai/orca/pull/31354)）
- 所选主题未变时保留实时终端配色（[@nwparker](https://github.com/nwparker)，[#31355](https://github.com/stablyai/orca/pull/31355)）
- 重命名窗格后保持 Claude 聊天完整（[@nwparker](https://github.com/nwparker)，[#31358](https://github.com/stablyai/orca/pull/31358)）
- 在 DeepSeek Build 标签上显示内置鲸鱼图标（[@nwparker](https://github.com/nwparker)，[#31359](https://github.com/stablyai/orca/pull/31359)）
- 出现关闭按钮时保持键盘附属行高度稳定（[@nwparker](https://github.com/nwparker)，[#31363](https://github.com/stablyai/orca/pull/31363)）
- 听写控件与宿主设置保持同步（[@nwparker](https://github.com/nwparker)，[#31349](https://github.com/stablyai/orca/pull/31349)）
- 移除 Tools 开关及其一键全开模式，简化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#31188](https://github.com/stablyai/orca/pull/31188)）

#### 语音与 Agent 启动 {#v1-4-237-voice-agent-launches}

> 通过无头服务器用手机听写，并为单次 CLI 启动选择聊天或终端。

- 在无头 `orca serve` 宿主上恢复语音听写；托管 SSH、WSL 与 Windows 服务器使用云端模型（[@nwparker](https://github.com/nwparker)，[#31217](https://github.com/stablyai/orca/pull/31217)）
- 用 `orca speech openai-key status`、`set` 和 `clear` 配置无头宿主的 OpenAI 听写密钥（[@nwparker](https://github.com/nwparker)，[#31230](https://github.com/stablyai/orca/pull/31230)）
- 为 `orca agent launch` 与基于 Agent 的 `orca worktree create` 选择 `--surface chat` 或 `--surface terminal`（[@brennanb2025](https://github.com/brennanb2025)，[#31191](https://github.com/stablyai/orca/pull/31191)）

#### 编辑器、文件与性能 {#v1-4-237-editor-files-performance}

> 跨标签与工作区保护未保存工作，让新建 Markdown 文档立即可编辑，并减少后台活动。

- 从 Source Control 在富文本编辑器中打开新建、未暂存的 Markdown 文件（[@AmethystLiang](https://github.com/AmethystLiang)，[#31399](https://github.com/stablyai/orca/pull/31399)）
- Source Control Discard 期间暂停跨工作区自动保存，并防止只读 Markdown / CSV 标签覆盖未保存编辑（[@nwparker](https://github.com/nwparker)，[#31413](https://github.com/stablyai/orca/pull/31413)）
- 避免每次重启后不必要地重载远程文件（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31196](https://github.com/stablyai/orca/pull/31196)）
- 防止恢复标签的磁盘检查陷入循环或误报冲突（[@nwparker](https://github.com/nwparker)，[#31250](https://github.com/stablyai/orca/pull/31250)）
- 后台安全扫描时跳过未改动的 worktree（[@nwparker](https://github.com/nwparker)，[#31253](https://github.com/stablyai/orca/pull/31253)）
- 用键盘切换 worktree 后立即应用自定义标签快捷键（[@brennanb2025](https://github.com/brennanb2025)，[#30941](https://github.com/stablyai/orca/pull/30941)）

#### 终端、SSH 与远程服务器 {#v1-4-237-terminals-ssh-remote-servers}

> 重连到仍存活的会话，处理大型 SSH 配置，并让远程更新与浏览器登录更可靠。

- Agent 终端以首次真实尺寸启动，不再等待此前的 12 帧（[@brennanb2025](https://github.com/brennanb2025)，[#30442](https://github.com/stablyai/orca/pull/30442)）
- 终端重连尝试重叠时附着到成功的连接（[@brennanb2025](https://github.com/brennanb2025)，[#30448](https://github.com/stablyai/orca/pull/30448)）
- 将隐藏的终端标签重连到重启后仍存活的会话（[@brennanb2025](https://github.com/brennanb2025)，[#31254](https://github.com/stablyai/orca/pull/31254)）
- 防止不可用网络驱动器上的已保存终端文件夹冻住窗口（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31381](https://github.com/stablyai/orca/pull/31381)）
- 移除终端查询后保持手机终端快照对齐（[@nwparker](https://github.com/nwparker)，[#31348](https://github.com/stablyai/orca/pull/31348)）
- 即使配置含 13,000 台主机，SSH Hosts 列表仍保持可响应、可搜索（[@nwparker](https://github.com/nwparker)，[#31405](https://github.com/stablyai/orca/pull/31405)）
- 在各主机列表使用同一套有界可搜索选择器，使大型 SSH 配置在 Orca 各处仍可用（[@nwparker](https://github.com/nwparker)，[#31426](https://github.com/stablyai/orca/pull/31426)）
- 保留in-app browser logins when a WSL or managed SSH host pairs again（[@nwparker](https://github.com/nwparker)，[#29610](https://github.com/stablyai/orca/pull/29610)）
- Replace stale terminal daemons after they drain on Linux and WSL（[@nwparker](https://github.com/nwparker)，[#31235](https://github.com/stablyai/orca/pull/31235)）
- Restart the macOS serve supervisor from the updated app（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31200](https://github.com/stablyai/orca/pull/31200)）
- Prepare the macOS supervisor’s code copy in one step（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31303](https://github.com/stablyai/orca/pull/31303)）
- 防止sidebar view settings from blocking SSH host migration（[@nwparker](https://github.com/nwparker)，[#31374](https://github.com/stablyai/orca/pull/31374)）
- Refuse new terminal creation while a server update is stopping the server（[@nwparker](https://github.com/nwparker)，[#29834](https://github.com/stablyai/orca/pull/29834)）
- 给予Windows process-tree cleanup time to finish rather than leaving grandchildren behind（[@nwparker](https://github.com/nwparker)，[#29501](https://github.com/stablyai/orca/pull/29501)）
- Put sharing first in **Remote Orca Servers** settings（[@nwparker](https://github.com/nwparker)，[#31335](https://github.com/stablyai/orca/pull/31335)）

#### 历史、项目与源码管理 {#v1-4-237-history-projects-source-control}

> Find conversations across machines more easily, and keep project actions tied to the host that owns them.

- 保持scoped Session History working with very large transcript collections（[@brennanb2025](https://github.com/brennanb2025)，[#30905](https://github.com/stablyai/orca/pull/30905)）
- 给予history searches through SSH-connected Orca servers the full all-hosts scan budget（[@nwparker](https://github.com/nwparker)，[#31226](https://github.com/stablyai/orca/pull/31226)）
- Include sessions saved under a symlinked workspace’s real path in Workspace history（[@nwparker](https://github.com/nwparker)，[#31244](https://github.com/stablyai/orca/pull/31244)）
- Label the source host when history search results span multiple machines（[@nwparker](https://github.com/nwparker)，[#31261](https://github.com/stablyai/orca/pull/31261)）
- 打开PR cards, rows and dialogs on the host that returned the item when projects share a path（[@nwparker](https://github.com/nwparker)，[#31252](https://github.com/stablyai/orca/pull/31252)）
- 保持GitLab items and project dialogs on their owning host（[@nwparker](https://github.com/nwparker)，[#31271](https://github.com/stablyai/orca/pull/31271)）
- Save issue-source changes to the selected project row（[@nwparker](https://github.com/nwparker)，[#31319](https://github.com/stablyai/orca/pull/31319)）
- Use the caller’s host for GitHub routing and task filters（[@nwparker](https://github.com/nwparker)，[#31263](https://github.com/stablyai/orca/pull/31263)）
- Separate work-item cache entries by project row and host（[@nwparker](https://github.com/nwparker)，[#31290](https://github.com/stablyai/orca/pull/31290)）
- Find registered projects by ID, path and host during refreshes（[@nwparker](https://github.com/nwparker)，[#31274](https://github.com/stablyai/orca/pull/31274)）
- Clear repository cache entries without evicting another live host’s project（[@nwparker](https://github.com/nwparker)，[#31312](https://github.com/stablyai/orca/pull/31312)）
- Refuse ambiguous legacy automations instead of guessing which host should run them（[@nwparker](https://github.com/nwparker)，[#31234](https://github.com/stablyai/orca/pull/31234)）
- 拒绝workspace parents that would create a nesting loop, including before the worktree cache is loaded（[@brennanb2025](https://github.com/brennanb2025)，[#29340](https://github.com/stablyai/orca/pull/29340)）
- Fetch PR conflict-preview base branches through the shared fetch controller（[@brennanb2025](https://github.com/brennanb2025)，[#30654](https://github.com/stablyai/orca/pull/30654)）

#### 测试、构建与维护 {#v1-4-237-tests-builds-maintenance}

> release builds, broader platform coverage, dependency checks and continued editor cleanup. The layout-owner work below remains behind disabled build switches and is not enabled in this release更快。

- CI（wsl）：run the WSL orcad lane on Debian 12 and Fedora 41 too（[@nwparker](https://github.com/nwparker)，[#29821](https://github.com/stablyai/orca/pull/29821)）
- Refactor AGENTS.md for clarity and conciseness（[@nwparker](https://github.com/nwparker)，[#31238](https://github.com/stablyai/orca/pull/31238)）
- 测试（skills）：synchronize Windows rename contention（[@nwparker](https://github.com/nwparker)，[#31237](https://github.com/stablyai/orca/pull/31237)）
- 杂项remove CLAUDE.md（[@nwparker](https://github.com/nwparker)，[#31242](https://github.com/stablyai/orca/pull/31242)）
- 文档load Git guidance on demand [skip ci]（[@nwparker](https://github.com/nwparker)，[#31245](https://github.com/stablyai/orca/pull/31245)）
- 文档slim test agent instructions（[@nwparker](https://github.com/nwparker)，[#31246](https://github.com/stablyai/orca/pull/31246)）
- 文档remove redundant max-lines agent instructions [skip ci]（[@nwparker](https://github.com/nwparker)，[#31247](https://github.com/stablyai/orca/pull/31247)）
- CI：stop running WSL host tests for UI-only changes（[@nwparker](https://github.com/nwparker)，[#31243](https://github.com/stablyai/orca/pull/31243)）
- 更新AGENTS.md with Useful Commands section（[@nwparker](https://github.com/nwparker)，[#31248](https://github.com/stablyai/orca/pull/31248)）
- Editor tab state is written to its buffer record, not copied into it afterwards (phase 1a)（[@nwparker](https://github.com/nwparker)，[#31251](https://github.com/stablyai/orca/pull/31251)）
- 文档clarify first-class platform, remote, and mobile priorities（[@nwparker](https://github.com/nwparker)，[#31265](https://github.com/stablyai/orca/pull/31265)）
- 测试（daemon）：run the stalled-reader backpressure test over a Unix socket, not TCP loopback（[@brennanb2025](https://github.com/brennanb2025)，[#31256](https://github.com/stablyai/orca/pull/31256)）
- 重构（protocol）：each area owns its published runtime capability list（[@brennanb2025](https://github.com/brennanb2025)，[#30641](https://github.com/stablyai/orca/pull/30641)）
- Native chat: remove unused journalCheckpoint and setConversationCommand（[@brennanb2025](https://github.com/brennanb2025)，[#30645](https://github.com/stablyai/orca/pull/30645)）
- 更新AGENTS.md（[@nwparker](https://github.com/nwparker)，[#31288](https://github.com/stablyai/orca/pull/31288)）
- 构建（cli）：typecheck the CLI by following its imports, not a hand list（[@brennanb2025](https://github.com/brennanb2025)，[#30632](https://github.com/stablyai/orca/pull/30632)）
- Format AGENTS.md so main's formatting check passes（[@nwparker](https://github.com/nwparker)，[#31294](https://github.com/stablyai/orca/pull/31294)）
- 重构（wsl-hosts）：add flow in wsl-host-registration; liveness split into state, evidence and monitor（[@nwparker](https://github.com/nwparker)，[#29506](https://github.com/stablyai/orca/pull/29506)）
- 文档add test anti-pattern reference（[@nwparker](https://github.com/nwparker)，[#31277](https://github.com/stablyai/orca/pull/31277)）
- 新增the rules that decide which editor tabs are the same file (phase 1b-1, unused)（[@nwparker](https://github.com/nwparker)，[#31272](https://github.com/stablyai/orca/pull/31272)）
- Speed up adhoc releases with shared JavaScript and Blacksmith runners（[@nwparker](https://github.com/nwparker)，[#31297](https://github.com/stablyai/orca/pull/31297)）
- Close prompt, Discard, save flush and restart save each decided in one place per buffer record (phase 1b-2, no behaviour change)（[@nwparker](https://github.com/nwparker)，[#31313](https://github.com/stablyai/orca/pull/31313)）
- 修复（ci）：use one Zod identity in the E2E typecheck（[@nwparker](https://github.com/nwparker)，[#31320](https://github.com/stablyai/orca/pull/31320)）
- Overlap adhoc release gates and cache qualified server templates（[@nwparker](https://github.com/nwparker)，[#31300](https://github.com/stablyai/orca/pull/31300)）
- 修复（deps）：root and mobile resolve one zod, and CI fails if they drift（[@nwparker](https://github.com/nwparker)，[#31260](https://github.com/stablyai/orca/pull/31260)）
- Overlap native qualification setup with the mobile bundle build（[@nwparker](https://github.com/nwparker)，[#31336](https://github.com/stablyai/orca/pull/31336)）
- Batch macOS code signing for adhoc releases（[@nwparker](https://github.com/nwparker)，[#31340](https://github.com/stablyai/orca/pull/31340)）
- 文档（orca-cli）：teach agents cross-project parents and re-parenting（[@brennanb2025](https://github.com/brennanb2025)，[#29900](https://github.com/stablyai/orca/pull/29900)）
- 样式format a test file so main passes the formatting check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31378](https://github.com/stablyai/orca/pull/31378)）
- 测试（claude）：isolate real CLI fixtures and cover chat option requests（[@brennanb2025](https://github.com/brennanb2025)，[#31201](https://github.com/stablyai/orca/pull/31201)）
- Carry batched macOS signing and qualified-template caching into production（[@nwparker](https://github.com/nwparker)，[#31397](https://github.com/stablyai/orca/pull/31397)）
- 测试（vitest）：derive the Node SQLite test list from imports（[@brennanb2025](https://github.com/brennanb2025)，[#30647](https://github.com/stablyai/orca/pull/30647)）
- CI：one list for Windows boundary tests and one step for ratchets（[@brennanb2025](https://github.com/brennanb2025)，[#30643](https://github.com/stablyai/orca/pull/30643)）
- Build adhoc Mac architectures in parallel（[@nwparker](https://github.com/nwparker)，[#31415](https://github.com/stablyai/orca/pull/31415)）
- 修复（release）：avoid API rate limits waiting for the mobile bundle（[@nwparker](https://github.com/nwparker)，[#31431](https://github.com/stablyai/orca/pull/31431)）

#### Layout groundwork (disabled) {#v1-4-237-layout-groundwork-disabled-}

- Layout-owner build: main answers terminal questions from its own layout (A1, dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31187](https://github.com/stablyai/orca/pull/31187)）
- A CLI or phone file on a layout-owner server opens in the tab group a paired desktop shows (switch-on builds only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31264](https://github.com/stablyai/orca/pull/31264)）
- Layout-owner build: a CLI send, wait or read starts a saved pane that has no terminal yet (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31307](https://github.com/stablyai/orca/pull/31307)）
- The window shows tab, title, move and divider changes only from main's update, never drawing them itself (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31257](https://github.com/stablyai/orca/pull/31257)）
- Layout-owner build: phones see main's terminal and editor rows (A2, dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31276](https://github.com/stablyai/orca/pull/31276)）
- A paired desktop shows the held-terminal banner and Reopen for a server's held terminals (switch-on builds only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31275](https://github.com/stablyai/orca/pull/31275)）
- 钉住why main's pane list republish waits for a microtask (switch-on builds only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31333](https://github.com/stablyai/orca/pull/31333)）
- 测试（layout）：pin the layout-owner save format for downgrade, and keep main's touched-records save with an exhaustive guard (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31341](https://github.com/stablyai/orca/pull/31341)）
- Layout groundwork (switched off): main starts every split and new pane, the window only attaches（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31258](https://github.com/stablyai/orca/pull/31258)）
- 修复（runtime）：a server with no window answers its first terminal create, not 'handle stale' (switch-on builds only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31391](https://github.com/stablyai/orca/pull/31391)）
- Layout-owner build: main shows live terminals that lost their tab, at the same moments the window did (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31430](https://github.com/stablyai/orca/pull/31430)）

**完整变更对照：** [v1.4.235...v1.4.237](https://github.com/stablyai/orca/compare/v1.4.235...v1.4.237)
## v1.4.235 Claude 聊天可 Rewind 到任意一轮，每段对话记住自己的模型设置 {#v1-4-235}

2026年10月20日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.235)

### 简要说明 {#v1-4-235-short}

- **Rewind Claude 聊天：** 在开启一轮的消息上使用 **Rewind to here**，编辑 prompt，把对话带向新方向。Claude 从你保留的历史继续。
- **你的聊天，你的设置：** 每段对话记住自己的模型、effort 与 Fast 设置。切换模型会保留兼容选项；改 Agent 默认值不会再静默挪动已记录设置的聊天。
- **保留更多 Agent 产出：** 已完成回复与工具结果完整保存，而不在预览上限处截断。桌面或手机用 **Show full output**，手机也可用 **Show full message**，从缩短预览加载更多内容。

### 兼容性与升级说明 {#v1-4-235-compatibility-upgrade-notes}

- **实验性 Native Chat：** Rewind 需要更新过的聊天宿主。请与 Orca 一起更新已配对与 SSH 宿主。

---

### 产品体验 {#v1-4-235-product}

#### 实验性 Native Chat {#v1-4-235-native-chat-experimental-}

> Revisit Claude conversations, keep each chat’s settings consistent, and work with images and long outputs more comfortably.

- Rewind Claude chats from messages that started a turn, continuing with the conversation you kept（[@brennanb2025](https://github.com/brennanb2025)，[#30400](https://github.com/stablyai/orca/pull/30400)）
- Remember model, effort, speed and Fast choices per conversation, including across restarts（[@brennanb2025](https://github.com/brennanb2025)，[#30561](https://github.com/stablyai/orca/pull/30561)）
- Save completed replies and tool results in full, with controls to load more from shortened previews（[@brennanb2025](https://github.com/brennanb2025)，[#29982](https://github.com/stablyai/orca/pull/29982)）
- Edit images in queued desktop messages: remove, paste, drop or attach（[@brennanb2025](https://github.com/brennanb2025)，[#30815](https://github.com/stablyai/orca/pull/30815)）
- 打开the New Chat composer immediately while the host gets ready（[@brennanb2025](https://github.com/brennanb2025)，[#29358](https://github.com/stablyai/orca/pull/29358)）
- 等待for Codex when opening or resuming a chat instead of failing after 30 seconds（[@brennanb2025](https://github.com/brennanb2025)，[#30395](https://github.com/stablyai/orca/pull/30395)）
- Name chats from the first message immediately, even if automatic title generation fails（[@brennanb2025](https://github.com/brennanb2025)，[#30392](https://github.com/stablyai/orca/pull/30392)）
- 避免starting user MCP servers and hooks for background Claude runs（[@brennanb2025](https://github.com/brennanb2025)，[#30939](https://github.com/stablyai/orca/pull/30939)）
- 澄清labels for switching agents between terminal and chat（[@AmethystLiang](https://github.com/AmethystLiang)，[#31134](https://github.com/stablyai/orca/pull/31134)）
- Polish the appearance of chat question options（[@AmethystLiang](https://github.com/AmethystLiang)，[#31219](https://github.com/stablyai/orca/pull/31219)）

#### 手机端 {#v1-4-235-phone}

> 保持：conversations and project groups current, create workspaces with less waiting, and select cloud dictation models directly from your phone.

- Reconnect a chat’s live feed from its last received row when the stream ends（[@brennanb2025](https://github.com/brennanb2025)，[#29007](https://github.com/stablyai/orca/pull/29007)）
- 更新projects, project groups and workspace rows together so phone grouping stays in sync（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31102](https://github.com/stablyai/orca/pull/31102)）
- Prepare the worktree checkout while the new-workspace form is open（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31167](https://github.com/stablyai/orca/pull/31167)）
- Select ready cloud dictation models from setup and Settings → Voice（[@nwparker](https://github.com/nwparker)，[#31221](https://github.com/stablyai/orca/pull/31221)）
- 显示mobile home statistics when connected to an `orca serve` host（[@nwparker](https://github.com/nwparker)，[#31197](https://github.com/stablyai/orca/pull/31197)）
- 保持chat composer controls inside their row（[@brennanb2025](https://github.com/brennanb2025)，[#28983](https://github.com/stablyai/orca/pull/28983)）
- 保持session tab icons full size beside long titles（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31169](https://github.com/stablyai/orca/pull/31169)）

#### Editor, performance & file safety {#v1-4-235-editor-performance-file-safety}

> 减小：background file watching, speed up workspace navigation, and make reloads and save conflicts more dependable across tabs and devices.

- Watch active, recent and at-risk workspaces; refresh open files when you return to an unwatched workspace（[@nwparker](https://github.com/nwparker)，[#30415](https://github.com/stablyai/orca/pull/30415)）
- Preload the workspace jump palette before first use（[@brennanb2025](https://github.com/brennanb2025)，[#30935](https://github.com/stablyai/orca/pull/30935)）
- 改进save-conflict checks, Undo after reload, autosave during heavy file activity and chat-start error messages（[@nwparker](https://github.com/nwparker)，[#31216](https://github.com/stablyai/orca/pull/31216)）
- Release superseded and closed editor-tab watch probes and disk-check records（[@nwparker](https://github.com/nwparker)，[#31128](https://github.com/stablyai/orca/pull/31128)）
- 避免reapplying terminal bindings that already match when saving state（[@AmethystLiang](https://github.com/AmethystLiang)，[#31033](https://github.com/stablyai/orca/pull/31033)）

#### Workspaces, SSH & remote servers {#v1-4-235-workspaces-ssh-remote-servers}

> 保持：workspace lists current, make same-named projects easier to distinguish, and improve remote server transitions and permissions.

- 显示machine labels only when projects have the same name（[@nwparker](https://github.com/nwparker)，[#31233](https://github.com/stablyai/orca/pull/31233)）
- 保持the desktop workspace list current while hidden and include workspaces created on paired servers or other clients（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31090](https://github.com/stablyai/orca/pull/31090)）
- Refuse ambiguous same-path project routing instead of following the Active Server selection（[@nwparker](https://github.com/nwparker)，[#31119](https://github.com/stablyai/orca/pull/31119)）
- 允许an older SSH host to move to its managed server while a relay shell identified by its tab remains running（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31093](https://github.com/stablyai/orca/pull/31093)）
- Make `orca open-url` on a manually started server ask for a paired desktop rather than an SSH setting（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31120](https://github.com/stablyai/orca/pull/31120)）
- Respect the login umask for remote worktrees instead of making them owner-only（[@AmethystLiang](https://github.com/AmethystLiang)，[#31135](https://github.com/stablyai/orca/pull/31135)）
- 改进WSL migration checks for path casing, panes without restore folders and stale agent records（[@nwparker](https://github.com/nwparker)，[#31211](https://github.com/stablyai/orca/pull/31211)）

#### Settings & security {#v1-4-235-settings-security}

> 保持：Experimental settings accessible after language updates and tighten permissions for newly created Codex configuration files.

- 防止Experimental settings from crashing after language-pack updates（[@nwparker](https://github.com/nwparker)，[#31202](https://github.com/stablyai/orca/pull/31202)）
- Create new Codex `config.toml` files with owner-only permissions（[@nwparker](https://github.com/nwparker)，[#31228](https://github.com/stablyai/orca/pull/31228)）

#### 中继服务 {#v1-4-235-relay-service}

> 给予：each relay director revision its own instance limit during rollouts.

- Use a separate instance maximum per director revision rather than splitting a shared service cap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31178](https://github.com/stablyai/orca/pull/31178)）

#### 测试、CI 与维护 {#v1-4-235-tests-ci-maintenance}

> compatibility and regression coverage, leaner release builds, and continued terminal-layout groundwork. Layout-owner changes below remain behind a feature switch and are not enabled product features in this release进一步增强。

- Layout groundwork (disabled): open CLI- and phone-requested files in the visible tab group（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31123](https://github.com/stablyai/orca/pull/31123)）
- Layout groundwork (disabled): surface running terminals without visible panes and determine startup reconnections（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31118](https://github.com/stablyai/orca/pull/31118)）
- Test custom terminal titles with older phone layouts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31127](https://github.com/stablyai/orca/pull/31127)）
- Include headless server specs in the manually enabled layout CI run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31108](https://github.com/stablyai/orca/pull/31108)）
- Layout groundwork (disabled): advertise layout-change support to paired desktops（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31131](https://github.com/stablyai/orca/pull/31131)）
- Test terminal readiness after a layout-owner server restart loses a pane binding（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31132](https://github.com/stablyai/orca/pull/31132)）
- Test file opening from older phone layouts against a layout-owner build（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31138](https://github.com/stablyai/orca/pull/31138)）
- Layout groundwork (disabled): use consistent file identities in layout updates（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31140](https://github.com/stablyai/orca/pull/31140)）
- Test that windowless host reloads preserve terminals created by main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31144](https://github.com/stablyai/orca/pull/31144)）
- Layout groundwork (disabled): apply individual layout records instead of rebuilding the whole session（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31152](https://github.com/stablyai/orca/pull/31152)）
- Layout groundwork (disabled): render paired-server workspaces from the server’s layout stream（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31181](https://github.com/stablyai/orca/pull/31181)）
- Format the files changed by the full chat-output update（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31184](https://github.com/stablyai/orca/pull/31184)）
- Layout groundwork (disabled): let main create, start and close terminal tabs and panes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31130](https://github.com/stablyai/orca/pull/31130)）
- 更新nine end-to-end specs to match intended product behavior（[@brennanb2025](https://github.com/brennanb2025)，[#30897](https://github.com/stablyai/orca/pull/30897)）
- 升级the mobile app to 0.0.58 and Android versionCode to 22（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31194](https://github.com/stablyai/orca/pull/31194)）
- 保持Windows daemon teardown tests from counting processes with reused parent IDs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31192](https://github.com/stablyai/orca/pull/31192)）
- Layout groundwork (disabled): restore each terminal pane once at its saved size and identify sleeping or held panes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31171](https://github.com/stablyai/orca/pull/31171)）
- 新增checks for host-aware repository routing and migrate existing callers（[@nwparker](https://github.com/nwparker)，[#31096](https://github.com/stablyai/orca/pull/31096)）
- Test that SSH health probes stay responsive while the SSH layer is stuck（[@nwparker](https://github.com/nwparker)，[#31193](https://github.com/stablyai/orca/pull/31193)）
- 更新Zod to 4.6.7 for recursive schema type compatibility（[@nwparker](https://github.com/nwparker)，[#31222](https://github.com/stablyai/orca/pull/31222)）
- Test Claude dispatch metadata received after stopping a turn（[@nwparker](https://github.com/nwparker)，[#31229](https://github.com/stablyai/orca/pull/31229)）
- 减小duplicate release builds and history downloads（[@nwparker](https://github.com/nwparker)，[#31227](https://github.com/stablyai/orca/pull/31227)）

**完整变更对照：** [v1.4.233...v1.4.235](https://github.com/stablyai/orca/compare/v1.4.233...v1.4.235)
## v1.4.233 SSH 与远程工作区：无下载也能连通，Settings 里远程服务器更清晰 {#v1-4-233}

2026年10月20日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.233)

### 简要说明 {#v1-4-233-short}

- **SSH 与远程工作区：** 双方都无法下载 Node.js 时仍可连接 SSH 主机，Orca 会记住并重试一键镜像。更旧的 Windows 主机（Windows 10 1809 与 Server 2019）可跑 Orca 服务器；端口被旧 SSH 连接占用时隧道能恢复。
- **Settings 中的远程服务器：** Remote Orca Servers 收成一份列表而不是六个分区；SSH 主机可批量移除且保持移除。同一服务器保存两次时会提示；再次添加已保存的服务器会更新它。
- **手机端：** 从手机创建工作区更快，工作区列表与桌面保持同步，会话标签图标在长标题旁仍保持尺寸。

---

### 产品体验 {#v1-4-233-product}

#### SSH, managed servers & remote {#v1-4-233-ssh-managed-servers-remote}

> SSH hosts connect in more situations, Remote Orca Servers is one clear list, and edits always go to the machine that owns the workspace.

- One-click Node.js mirror when neither machine can download Node（[@nwparker](https://github.com/nwparker)，[#31069](https://github.com/stablyai/orca/pull/31069)）
- Retry with the saved Node.js mirror once a running connect fails the same way（[@nwparker](https://github.com/nwparker)，[#31089](https://github.com/stablyai/orca/pull/31089)）
- Ship node-pty's winpty backend so Windows 1809 / Server 2019 hosts can deploy（[@nwparker](https://github.com/nwparker)，[#31056](https://github.com/stablyai/orca/pull/31056)）
- A managed tunnel whose forward can't start takes the stdio bridge, and reclaims a port an old ControlMaster holds（[@nwparker](https://github.com/nwparker)，[#31062](https://github.com/stablyai/orca/pull/31062)）
- A legacy relay restarted at the same socket never takes over an open tab（[@nwparker](https://github.com/nwparker)，[#31068](https://github.com/stablyai/orca/pull/31068)）
- Detect Linux libraries reliably across SSH and WSL（[@nwparker](https://github.com/nwparker)，[#31077](https://github.com/stablyai/orca/pull/31077)）
- Remote Orca Servers: one list instead of six sections; SSH Hosts: bulk remove that stays removed（[@nwparker](https://github.com/nwparker)，[#31082](https://github.com/stablyai/orca/pull/31082)）
- Adding a server you already saved updates it instead of saving it twice（[@nwparker](https://github.com/nwparker)，[#31080](https://github.com/stablyai/orca/pull/31080)）
- Say which saved servers are the same machine paired twice, and how to fix it（[@nwparker](https://github.com/nwparker)，[#31100](https://github.com/stablyai/orca/pull/31100)）
- Say "Orca on <host>" instead of "managed server" in the UI（[@nwparker](https://github.com/nwparker)，[#31099](https://github.com/stablyai/orca/pull/31099)）
- A moved SSH host lists once in a project's Available Hosts（[@nwparker](https://github.com/nwparker)，[#31064](https://github.com/stablyai/orca/pull/31064)）
- New local projects never dedupe onto an SSH project at the same path（[@nwparker](https://github.com/nwparker)，[#31055](https://github.com/stablyai/orca/pull/31055)）
- PR/MR worktree base refuses SSH projects named only by executionHostId（[@nwparker](https://github.com/nwparker)，[#31054](https://github.com/stablyai/orca/pull/31054)）
- Worktree create sends the host --project/--host selected（[@nwparker](https://github.com/nwparker)，[#31066](https://github.com/stablyai/orca/pull/31066)）
- Editor writes and unqualified removals route by the rows, never the Active Server focus（[@nwparker](https://github.com/nwparker)，[#31036](https://github.com/stablyai/orca/pull/31036)）
- No owner route reads the Active Server focus, so a local row never routes to the focused server（[@nwparker](https://github.com/nwparker)，[#31058](https://github.com/stablyai/orca/pull/31058)）
- A damaged browser file list disables only the browser client, not the remote server（[@nwparker](https://github.com/nwparker)，[#31025](https://github.com/stablyai/orca/pull/31025)）
- A live orcad's browser helper pauses for macOS desktop installs（[@nwparker](https://github.com/nwparker)，[#31059](https://github.com/stablyai/orca/pull/31059)）

#### 手机端 {#v1-4-233-phone}

> Create workspaces from the phone much faster, and keep the phone's workspace list and session tabs accurate.

- Prepare the worktree checkout while the new-workspace form is open（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31167](https://github.com/stablyai/orca/pull/31167)）
- Phone list resends lost option changes, trusts the feed's row facts, and retries a failed feed read（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31088](https://github.com/stablyai/orca/pull/31088)）
- 保持session tab icons full size beside long titles（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31169](https://github.com/stablyai/orca/pull/31169)）

#### 工作区、侧栏与标签 {#v1-4-233-workspaces-sidebar-tabs}

> Same-named projects on different machines are easy to tell apart, and the sidebar's agent status and visibility settings stay accurate.

- 保持project names short and show their machine（[@nwparker](https://github.com/nwparker)，[#28250](https://github.com/stablyai/orca/pull/28250)）
- One agent phase history, so a compaction raises no unread and a title-started turn pushes its finish（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31103](https://github.com/stablyai/orca/pull/31103)）
- Visibility settings refresh workspace rows; pre-gap paired-server answers stay unverifiable（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31106](https://github.com/stablyai/orca/pull/31106)）

#### Editor, files & Markdown {#v1-4-233-editor-files-markdown}

> Saving no longer overwrites changes made on disk behind your back, and previews and renames act on the right file.

- Refuse saves that would overwrite unnoticed disk changes（[@nwparker](https://github.com/nwparker)，[#30417](https://github.com/stablyai/orca/pull/30417)）
- Disk-checked save follow-ups: repeatable stale reloads, Markdown whitespace, Undo of Reload（[@nwparker](https://github.com/nwparker)，[#31113](https://github.com/stablyai/orca/pull/31113)）
- Markdown preview of a terminal-opened file reads with its source tab's grant（[@nwparker](https://github.com/nwparker)，[#31060](https://github.com/stablyai/orca/pull/31060)）
- A rename retargets only editors whose own owner is the renaming host（[@nwparker](https://github.com/nwparker)，[#31091](https://github.com/stablyai/orca/pull/31091)）

#### 浏览器 {#v1-4-233-browser}

> Browser screenshots from an SSH host are checked when they're taken and when they're answered.

- An SSH host's capture is admitted at each capture and at its answer（[@nwparker](https://github.com/nwparker)，[#31072](https://github.com/stablyai/orca/pull/31072)）

#### Performance & reliability {#v1-4-233-performance-reliability}

> Long saved conversations no longer take several times their size in memory while Orca indexes them.

- [mem] Stream saved transcripts and stage large search writes（[@OrcaWin](https://github.com/OrcaWin)，[#30702](https://github.com/stablyai/orca/pull/30702)）

#### 中继服务 {#v1-4-233-relay-service}

> The hosted relay keeps desktops in their own region and spreads traffic evenly while it is updated.

- 给予region-correction reconnects and roll re-placements the in-region reserve fallback（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31042](https://github.com/stablyai/orca/pull/31042)）
- 移动director traffic in two steps so a deploy does not land on one instance（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31051](https://github.com/stablyai/orca/pull/31051)）
- 允许the same-cap trust probe outlast load-balancer warm-up（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31067](https://github.com/stablyai/orca/pull/31067)）

#### 测试、CI 与维护 {#v1-4-233-tests-ci-maintenance}

> Faster, lighter builds and checks; the new layout and sidebar work remains behind disabled build switches.

- Run cell-flags and reserve-watch on the paid runner pool（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31024](https://github.com/stablyai/orca/pull/31024)）
- 保持Mac qualification runs out of the release build's concurrency group（[@nwparker](https://github.com/nwparker)，[#31031](https://github.com/stablyai/orca/pull/31031)）
- Build Windows alongside Mac and preserve signing quota（[@nwparker](https://github.com/nwparker)，[#31032](https://github.com/stablyai/orca/pull/31032)）
- Cut end-to-end typecheck memory with Bun（[@nwparker](https://github.com/nwparker)，[#31046](https://github.com/stablyai/orca/pull/31046)）
- Halve CLI compile memory with Bun typechecking（[@nwparker](https://github.com/nwparker)，[#31043](https://github.com/stablyai/orca/pull/31043)）
- 停止the cold-authority scope test depending on the clock（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31098](https://github.com/stablyai/orca/pull/31098)）
- Shared switch-on fixtures so 71 layout tests pass with main owning the layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31076](https://github.com/stablyai/orca/pull/31076)）
- A test-only switch-on server template that packaging refuses（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31097](https://github.com/stablyai/orca/pull/31097)）
- No empty extra terminal tab from an old saved terminal record (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31045](https://github.com/stablyai/orca/pull/31045)）
- Agent titles from one status batch reach main as one rename (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31048](https://github.com/stablyai/orca/pull/31048)）
- Main sends one layout update per action, with only what changed (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31109](https://github.com/stablyai/orca/pull/31109)）
- Same-id workspaces on two hosts sort, nest and stay retained on their own; nested groups and project order hold in host sections (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31111](https://github.com/stablyai/orca/pull/31111)）
- A read Done no longer hides a pane that is still Working in Smart (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31114](https://github.com/stablyai/orca/pull/31114)）
- 更新WeChat QR code for group 13（[@AmethystLiang](https://github.com/AmethystLiang)，[#31052](https://github.com/stablyai/orca/pull/31052)）

**完整变更对照：** [v1.4.232...v1.4.233](https://github.com/stablyai/orca/compare/v1.4.232...v1.4.233)
## v1.4.232 自动权限进聊天与终端，Native Chat 支持 OpenCode 2 与 $ 技能 {#v1-4-232}

2026年10月20日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.232)

### 简要说明 {#v1-4-232-short}

- **自动权限，聊天与终端通用：** 在 Settings → Agents 选择 **Manual | Auto | Yolo**。Auto 让受支持的 Claude 与 Codex Agent 处理批准，新的 Native Chat 也跟随你的选择。可为其他 Agent 单独选权限模式；已有聊天保留各自设置。
- **实验性 Native Chat：** 直接在聊天中打开 OpenCode 2，输入 `$` 查找 Codex 技能，并可平移缩放图片预览。长对话支持 Rewind；用量上限会显示何时重置，并提供 **Continue** 按钮接上对话。
- **更好的手机输入区：** 可附加文件与照片，内联插入技能，并在同一面板选择模型、effort 与权限。切换应用后恢复更快，终端滚动更跟手，离开桌面也能继续工作。

### 兼容性与升级说明 {#v1-4-232-compatibility-upgrade-notes}

- **实验性 Native Chat：** 请与 Orca 一起更新已配对与 SSH 宿主。权限模式与技能查找依赖更新过的宿主。

---

### 产品体验 {#v1-4-232-product}

#### 实验性 Native Chat {#v1-4-232-native-chat-experimental-}

> OpenCode 2 opens in chat, Codex and Pi skills are easier to find, image previews support pan and zoom, and long conversations are easier to resume and rewind. Usage limits explain the pause and offer Continue, while sent images and visuals stay with the chat.

- 新增（opencode）：open OpenCode 2 in the chat view and list 2.x models before the first message（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28424](https://github.com/stablyai/orca/pull/28424)）
- 新增（native-chat）：pan and zoom chat image previews like mermaid diagrams（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30154](https://github.com/stablyai/orca/pull/30154)）
- 修复（native-chat）：move a chat visual's Open and Share buttons above it（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30356](https://github.com/stablyai/orca/pull/30356)）
- Mark completed Codex reviews Done when Stop is absent（[@brennanb2025](https://github.com/brennanb2025)，[#28860](https://github.com/stablyai/orca/pull/28860)）
- 恢复terminal conversations in Native Chat without waiting for History（[@brennanb2025](https://github.com/brennanb2025)，[#29150](https://github.com/stablyai/orca/pull/29150)）
- 修复（native-chat）：clicking Send or Stop keeps focus in the message box（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30456](https://github.com/stablyai/orca/pull/30456)）
- 修复（native-chat）：a Claude chat keeps a model its CLI stopped listing（[@brennanb2025](https://github.com/brennanb2025)，[#30436](https://github.com/stablyai/orca/pull/30436)）
- 修复thinking status translations in zh, ja, ko, and fr（[@AmethystLiang](https://github.com/AmethystLiang)，[#30558](https://github.com/stablyai/orca/pull/30558)）
- Native chat: rewind works at any chat length（[@brennanb2025](https://github.com/brennanb2025)，[#30394](https://github.com/stablyai/orca/pull/30394)）
- 新增（native-chat）：/resume in a 结构化聊天 opens Agent Session History（[@brennanb2025](https://github.com/brennanb2025)，[#28133](https://github.com/stablyai/orca/pull/28133)）
- 新增（native-chat）：+ menu shows chat, disabled chat and CLI rows（[@brennanb2025](https://github.com/brennanb2025)，[#29074](https://github.com/stablyai/orca/pull/29074)）
- 修复（codex）：a Codex chat keeps its Orca identity when the user's Codex config strips command environment variables（[@brennanb2025](https://github.com/brennanb2025)，[#30406](https://github.com/stablyai/orca/pull/30406)）
- Sleep stops a workspace's Native Chat agents（[@brennanb2025](https://github.com/brennanb2025)，[#28445](https://github.com/stablyai/orca/pull/28445)）
- Refuse chat resume until terminal writers have exited（[@brennanb2025](https://github.com/brennanb2025)，[#29242](https://github.com/stablyai/orca/pull/29242)）
- 修复（native-chat）：show the model picker in a new OMP or Antigravity chat（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30713](https://github.com/stablyai/orca/pull/30713)）
- Accept messages while any agent starts, and bound each startup step（[@brennanb2025](https://github.com/brennanb2025)，[#28046](https://github.com/stablyai/orca/pull/28046)）
- 修复make chat and terminal switch labels consistent（[@AmethystLiang](https://github.com/AmethystLiang)，[#30829](https://github.com/stablyai/orca/pull/30829)）
- 修复（native-chat）：save a Codex message's receipt from either of Codex's reports of it, not only the first（[@brennanb2025](https://github.com/brennanb2025)，[#30403](https://github.com/stablyai/orca/pull/30403)）
- 修复（native-chat）：a new chat in a twin workspace refuses instead of starting on this computer（[@nwparker](https://github.com/nwparker)，[#30838](https://github.com/stablyai/orca/pull/30838)）
- 修复distinguish history resumes from active-tab switches（[@AmethystLiang](https://github.com/AmethystLiang)，[#30871](https://github.com/stablyai/orca/pull/30871)）
- 修复（native-chat）：a usage limit reads as a pause with its reset time and a Continue, not a failure（[@brennanb2025](https://github.com/brennanb2025)，[#30396](https://github.com/stablyai/orca/pull/30396)）
- A chat's visuals and sent images live as long as the chat（[@brennanb2025](https://github.com/brennanb2025)，[#30413](https://github.com/stablyai/orca/pull/30413)）
- 新增（native-chat）：`$` opens Codex skills in the composer（[@brennanb2025](https://github.com/brennanb2025)，[#30827](https://github.com/stablyai/orca/pull/30827)）
- 修复（native-chat）：keep transcript text clear of the message rail（[@brennanb2025](https://github.com/brennanb2025)，[#30868](https://github.com/stablyai/orca/pull/30868)）
- 修复（native-chat）：keep a typed [Image #N] when the message has no such image（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30740](https://github.com/stablyai/orca/pull/30740)）
- 修复（native-chat）：list Pi skills in the / menu as /skill:<name>（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30924](https://github.com/stablyai/orca/pull/30924)）
- 修复（native-chat）：hide history before /clear（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30902](https://github.com/stablyai/orca/pull/30902)）
- 修复（native-chat）：keep /model, /effort, /clear and /compact in the / menu after an agent reports its commands（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30956](https://github.com/stablyai/orca/pull/30956)）
- 修复（native-chat）：link Antigravity sign-in instructions to settings（[@brennanb2025](https://github.com/brennanb2025)，[#30970](https://github.com/stablyai/orca/pull/30970)）
- 修复（native-chat）：say which request a chat start ran out of time on, and log the original error（[@nwparker](https://github.com/nwparker)，[#30992](https://github.com/stablyai/orca/pull/30992)）

#### Agent、账号与权限 {#v1-4-232-agents-accounts-permissions}

> Set Auto permissions for supported agents and carry that choice into new chats. Antigravity sign-in is clearer, Claude usage estimates account for model versions and long context, and MiniMax and GLM Coding Plan keys can be saved on the remote host that uses them.

- 修复（cloud-auth）：show that a sign-in is in progress, with copy-link and cancel, on every Orca sign-in button（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30410](https://github.com/stablyai/orca/pull/30410)）
- 修复（usage）：price Claude models by exact version, add Sonnet 5.5, flag unpriced models（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30421](https://github.com/stablyai/orca/pull/30421)）
- Check Claude sign-in duplicates against the listed account identity（[@AmethystLiang](https://github.com/AmethystLiang)，[#30446](https://github.com/stablyai/orca/pull/30446)）
- 修复（usage）：price Claude long-context requests per request, and price Haiku 5.5（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30427](https://github.com/stablyai/orca/pull/30427)）
- 修复（windows）：codex and claude get a prompt's double quotes intact in PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#30424](https://github.com/stablyai/orca/pull/30424)）
- 新增（settings）：sign Antigravity chats in from Accounts（[@brennanb2025](https://github.com/brennanb2025)，[#28705](https://github.com/stablyai/orca/pull/28705)）
- 新增（agent-status）：read OSC 7501 program status beside hooks（[@nwparker](https://github.com/nwparker)，[#30261](https://github.com/stablyai/orca/pull/30261)）
- 新增（agent-status）：show OSC 7501 program status in rows and tabs（[@nwparker](https://github.com/nwparker)，[#30262](https://github.com/stablyai/orca/pull/30262)）
- 修复（agent-status）：never drop a running helper for lack of room（[@brennanb2025](https://github.com/brennanb2025)，[#30416](https://github.com/stablyai/orca/pull/30416)）
- 修复（accounts）：copy Devin commands through Orca clipboard bridge（[@AmethystLiang](https://github.com/AmethystLiang)，[#30826](https://github.com/stablyai/orca/pull/30826)）
- 修复（settings）：Antigravity's sign-in reads as an Account line, never an empty box（[@brennanb2025](https://github.com/brennanb2025)，[#30850](https://github.com/stablyai/orca/pull/30850)）
- 修复（linear）：show a saved Linear credential that cannot be decrypted（[@brennanb2025](https://github.com/brennanb2025)，[#28867](https://github.com/stablyai/orca/pull/28867)）
- 新增（agents）：add Auto to the global agent permission switch（[@nwparker](https://github.com/nwparker)，[#30677](https://github.com/stablyai/orca/pull/30677)）
- 新增（native-chat）：apply per-agent Auto permission defaults（[@nwparker](https://github.com/nwparker)，[#30853](https://github.com/stablyai/orca/pull/30853)）
- 新增（accounts）：save MiniMax and GLM Coding Plan keys on the Settings host（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30862](https://github.com/stablyai/orca/pull/30862)）
- 修复（codex）：keep Orca's terminal identity in Codex commands when the user's Codex config strips environment variables（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30857](https://github.com/stablyai/orca/pull/30857)）
- 修复（status-bar）：keep this computer's providers visible as "Not configured on <host>" under a remote workspace（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30858](https://github.com/stablyai/orca/pull/30858)）
- 显示short Antigravity pool labels in status bar（[@AmethystLiang](https://github.com/AmethystLiang)，[#31007](https://github.com/stablyai/orca/pull/31007)）

#### 手机端 {#v1-4-232-phone}

> The redesigned chat composer adds file attachments, inline skills and one place for model, effort and permissions. Chat reading position, queued-message editing, terminal scrolling, reconnection and completion notifications get attention too.

- 修复（mobile）：show a renamed terminal tab's name on the phone（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30163](https://github.com/stablyai/orca/pull/30163)）
- 新增（mobile）：redesign the chat composer with file attachments and inline skills（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30359](https://github.com/stablyai/orca/pull/30359)）
- 修复（mobile）：keep typed commit messages, restore failed shortcut removals, name icon buttons（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30142](https://github.com/stablyai/orca/pull/30142)）
- 修复（mobile）：page GitHub tasks by number and drop pages from an old selection（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30140](https://github.com/stablyai/orca/pull/30140)）
- 修复（mobile）：one button style for the session header and tab strip; size tabs to titles（[@brennanb2025](https://github.com/brennanb2025)，[#29222](https://github.com/stablyai/orca/pull/29222)）
- One background-process read of "Notify About Hidden Workspaces" for phone pushes and the host unread flag（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30571](https://github.com/stablyai/orca/pull/30571)）
- 修复（mobile）：faster relay recovery after an app switch and on a late desktop data link（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30607](https://github.com/stablyai/orca/pull/30607)）
- 修复（mobile）：edit a queued message in a plain text box with compact cancel and save buttons（[@brennanb2025](https://github.com/brennanb2025)，[#30382](https://github.com/stablyai/orca/pull/30382)）
- 保持phone chat history in one window while preserving reading position（[@brennanb2025](https://github.com/brennanb2025)，[#29271](https://github.com/stablyai/orca/pull/29271)）
- 性能（push）：deliver queued notifications without waiting for the poll（[@nwparker](https://github.com/nwparker)，[#28624](https://github.com/stablyai/orca/pull/28624)）
- 性能（mobile）：shorten output batching during terminal scroll gestures（[@innocarpe](https://github.com/innocarpe)，[#30319](https://github.com/stablyai/orca/pull/30319)）
- 修复（notifications）：a server with no window pushes phones when a terminal agent finishes or needs input（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30602](https://github.com/stablyai/orca/pull/30602)）
- 修复（mobile）：let an add or removal replace corrupt stored terminal keys（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30977](https://github.com/stablyai/orca/pull/30977)）

#### SSH、托管服务器与远程工作区 {#v1-4-232-ssh-managed-servers-remote-workspaces}

> Reconnect and re-pair more reliably, keep tab closes through reloads, preserve unsaved editor drafts during migration, and upload files faster over high-latency links. Setup handles more hosts and restricted networks, with clearer disk-space, download and connection errors.

- 修复（renderer）：restored SSH session placeholders carry the host a listing would stamp（[@nwparker](https://github.com/nwparker)，[#30445](https://github.com/stablyai/orca/pull/30445)）
- 修复（open-in）：open a managed server's workspace in VS Code over Remote-SSH（[@nwparker](https://github.com/nwparker)，[#30441](https://github.com/stablyai/orca/pull/30441)）
- 修复（terminal）：reattach a restored terminal while an older daemon cannot answer (#30486)（[@nwparker](https://github.com/nwparker)，[#30499](https://github.com/stablyai/orca/pull/30499)）
- 修复（ssh）：rehome a cold-start converted workspace the scan missed, and notify replayed background-turn completions（[@nwparker](https://github.com/nwparker)，[#30578](https://github.com/stablyai/orca/pull/30578)）
- 修复（ssh）：follow a relaunched managed server's port; match quoted Windows forward argv（[@nwparker](https://github.com/nwparker)，[#30583](https://github.com/stablyai/orca/pull/30583)）
- 修复（terminal）：relay-era SSH panes open printed file paths on the host's server（[@OrcaWin](https://github.com/OrcaWin)，[#30240](https://github.com/stablyai/orca/pull/30240)）
- 修复（ssh）：managed servers install through SSH gateways that cut long commands (#30491)（[@nwparker](https://github.com/nwparker)，[#30549](https://github.com/stablyai/orca/pull/30549)）
- 修复（ssh）：relinking a stopped managed server keeps the project groups it holds, and later moves don't re-send them（[@nwparker](https://github.com/nwparker)，[#30608](https://github.com/stablyai/orca/pull/30608)）
- 修复（ssh）：make room for the pre-activation snapshot on remote hosts, and say why a capture failed（[@nwparker](https://github.com/nwparker)，[#30618](https://github.com/stablyai/orca/pull/30618)）
- 修复（ssh）：a cancelled or revoked host's browser command stops on the desktop（[@nwparker](https://github.com/nwparker)，[#30630](https://github.com/stablyai/orca/pull/30630)）
- 修复（ssh）：closing a bridged relay tab stops its shell, even across a restart（[@nwparker](https://github.com/nwparker)，[#30587](https://github.com/stablyai/orca/pull/30587)）
- 修复（ssh）：keep SFTP uploads pipelined so a high-latency link doesn't crawl（[@nwparker](https://github.com/nwparker)，[#30704](https://github.com/stablyai/orca/pull/30704)）
- 修复（ssh）：say the host's disk is full when a managed-server install runs out of space（[@nwparker](https://github.com/nwparker)，[#30679](https://github.com/stablyai/orca/pull/30679)）
- 修复（ssh）：say a noexec home can't run Orca's server, instead of "install an older version"（[@nwparker](https://github.com/nwparker)，[#30724](https://github.com/stablyai/orca/pull/30724)）
- 修复（remote）：keep a paired host's undelivered tab close across a reload（[@nwparker](https://github.com/nwparker)，[#30758](https://github.com/stablyai/orca/pull/30758)）
- 修复（ssh）：a network cut during a managed-server install no longer hangs, and says contact was lost（[@nwparker](https://github.com/nwparker)，[#30732](https://github.com/stablyai/orca/pull/30732)）
- 修复（orcad）：orca open-url opens the page on the paired desktop（[@nwparker](https://github.com/nwparker)，[#30782](https://github.com/stablyai/orca/pull/30782)）
- 修复（orcad-migration）：a pane saved in two tabs refuses on this desktop and names the tabs, not a server conflict（[@nwparker](https://github.com/nwparker)，[#30801](https://github.com/stablyai/orca/pull/30801)）
- 修复（remote）：a removed server's saved tab closes go with it; a same-machine re-pair keeps them（[@nwparker](https://github.com/nwparker)，[#30803](https://github.com/stablyai/orca/pull/30803)）
- 修复（ssh）：an overlapping managed-server update check sees the failure the first one recorded（[@nwparker](https://github.com/nwparker)，[#30835](https://github.com/stablyai/orca/pull/30835)）
- 修复（orcad-migration）：refuse before fencing a manifest no catalog request can carry（[@nwparker](https://github.com/nwparker)，[#30836](https://github.com/stablyai/orca/pull/30836)）
- 修复（ssh）：a bridged relay terminal's proven exit reaches the runtime from every close route（[@nwparker](https://github.com/nwparker)，[#30842](https://github.com/stablyai/orca/pull/30842)）
- 修复（managed-server）：snapshot capture and restore run on BusyBox before 1.30（[@nwparker](https://github.com/nwparker)，[#30840](https://github.com/stablyai/orca/pull/30840)）
- 修复（ssh）：an SSH server update counts terminals again just before it stops the server（[@nwparker](https://github.com/nwparker)，[#30874](https://github.com/stablyai/orca/pull/30874)）
- 修复（session-tabs）：a held paired-tab close survives an undecided re-pair, and a dropped one shows its tab at once（[@nwparker](https://github.com/nwparker)，[#30843](https://github.com/stablyai/orca/pull/30843)）
- 修复（ssh）：a managed tunnel follows the server's port after another desktop restarts it（[@nwparker](https://github.com/nwparker)，[#30888](https://github.com/stablyai/orca/pull/30888)）
- 修复（ssh）：Disconnect closes the managed server tunnels the SSH session carried（[@nwparker](https://github.com/nwparker)，[#30891](https://github.com/stablyai/orca/pull/30891)）
- 修复（ssh）：a system SSH forward owns its listener even when ssh_config sets a ControlMaster（[@nwparker](https://github.com/nwparker)，[#30887](https://github.com/stablyai/orca/pull/30887)）
- 修复（ssh）：two overlapping bridged-terminal attaches hand back the viewer they replace（[@nwparker](https://github.com/nwparker)，[#30856](https://github.com/stablyai/orca/pull/30856)）
- 修复（ssh）：orca open-url on a managed SSH host opens the page on the desktop through the browser bridge（[@nwparker](https://github.com/nwparker)，[#30849](https://github.com/stablyai/orca/pull/30849)）
- 修复（orcad-migration）：a host fenced on a manifest no request can carry can be cancelled by its id（[@nwparker](https://github.com/nwparker)，[#30864](https://github.com/stablyai/orca/pull/30864)）
- 修复（ssh）：say when this computer can't download Node for a managed server, and where an offline copy goes（[@nwparker](https://github.com/nwparker)，[#30911](https://github.com/stablyai/orca/pull/30911)）
- 修复（wsl）：keep the desktop pairing across host restarts（[@brennanb2025](https://github.com/brennanb2025)，[#29042](https://github.com/stablyai/orca/pull/29042)）
- 修复（hosts）：preserve complete status changes in the renderer（[@brennanb2025](https://github.com/brennanb2025)，[#29033](https://github.com/stablyai/orca/pull/29033)）
- 修复（wsl）：reconnect hosts when a retained connection stops answering（[@brennanb2025](https://github.com/brennanb2025)，[#29005](https://github.com/stablyai/orca/pull/29005)）
- 修复（ssh）：a legacy relay terminal stays with the relay that runs it when another relay lists the same id（[@nwparker](https://github.com/nwparker)，[#30870](https://github.com/stablyai/orca/pull/30870)）
- 修复（ssh）：download the pinned Node on the host when this computer can't reach it（[@nwparker](https://github.com/nwparker)，[#30945](https://github.com/stablyai/orca/pull/30945)）
- 修复（ssh）：a forward edit cut short by Disconnect keeps the host's saved port forwards（[@nwparker](https://github.com/nwparker)，[#30932](https://github.com/stablyai/orca/pull/30932)）
- 新增（ssh）：let a nodejs.org mirror serve the pinned Node on this computer and the host（[@nwparker](https://github.com/nwparker)，[#30981](https://github.com/stablyai/orca/pull/30981)）
- 新增（orcad-migration）：unsaved drafts stay on this desktop and are renamed to the server on commit（[@nwparker](https://github.com/nwparker)，[#30894](https://github.com/stablyai/orca/pull/30894)）
- 修复（ssh）：pair again over SSH when a managed server drops this desktop, instead of reconnecting forever（[@nwparker](https://github.com/nwparker)，[#30775](https://github.com/stablyai/orca/pull/30775)）

#### 工作区、侧栏与标签 {#v1-4-232-workspaces-sidebar-tabs}

> Workspace actions consistently target the machine you chose, even when another host has a matching project or path. Space adds faster selection, inspectable changed files and a dedicated actions menu; bulk tab closes ask for confirmation.

- 修复（renderer）：a created or lineage-refreshed worktree replaces only its own host's copy（[@nwparker](https://github.com/nwparker)，[#30447](https://github.com/stablyai/orca/pull/30447)）
- 修复（source-control）：clear unavailable branch line totals（[@AmethystLiang](https://github.com/AmethystLiang)，[#30475](https://github.com/stablyai/orca/pull/30475)）
- 修复（i18n）：clarify closing all tabs to the left and right（[@AmethystLiang](https://github.com/AmethystLiang)，[#30535](https://github.com/stablyai/orca/pull/30535)）
- Confirm before bulk-closing tabs（[@AmethystLiang](https://github.com/AmethystLiang)，[#30551](https://github.com/stablyai/orca/pull/30551)）
- 修复（sidebar）：show the project name on ungrouped compact cards（[@brennanb2025](https://github.com/brennanb2025)，[#28890](https://github.com/stablyai/orca/pull/28890)）
- 修复（git）：stop starting Git in deleted project folders and for removed projects（[@brennanb2025](https://github.com/brennanb2025)，[#28822](https://github.com/stablyai/orca/pull/28822)）
- 修复（sidebar）：run previous and next worktree shortcuts from a text field（[@brennanb2025](https://github.com/brennanb2025)，[#28891](https://github.com/stablyai/orca/pull/28891)）
- 修复（runtime）：project removal and edits stay on the selected project's host（[@nwparker](https://github.com/nwparker)，[#30584](https://github.com/stablyai/orca/pull/30584)）
- 修复（projects）：a project added from the CLI, web or a paired desktop through a symlink or subfolder shows its workspaces（[@nwparker](https://github.com/nwparker)，[#30657](https://github.com/stablyai/orca/pull/30657)）
- 修复（projects）：setup edits and removals name the host, so the twin on another host is never touched（[@nwparker](https://github.com/nwparker)，[#30664](https://github.com/stablyai/orca/pull/30664)）
- 修复（runtime）：one teardown policy per kind; removal closes host browser pages everywhere, headless sleep stops terminals（[@nwparker](https://github.com/nwparker)，[#30715](https://github.com/stablyai/orca/pull/30715)）
- 修复（projects）：refuse to file a folder under a project its own GitHub remote contradicts（[@nwparker](https://github.com/nwparker)，[#30717](https://github.com/stablyai/orca/pull/30717)）
- 修复（runtime）：a new terminal the host can't confirm says why, instead of nothing（[@nwparker](https://github.com/nwparker)，[#30725](https://github.com/stablyai/orca/pull/30725)）
- 修复（projects）：removing a project on this computer stops its chats, pages and every terminal on the host（[@nwparker](https://github.com/nwparker)，[#30728](https://github.com/stablyai/orca/pull/30728)）
- 修复（runtime）：a project removal stops its workspaces' terminals together under one deadline; every teardown is classified by kind（[@nwparker](https://github.com/nwparker)，[#30752](https://github.com/stablyai/orca/pull/30752)）
- 修复（runtime）：a terminal spawn names its host; the removed-project fence keys by host (R4-2)（[@nwparker](https://github.com/nwparker)，[#30798](https://github.com/stablyai/orca/pull/30798)）
- 修复（projects）：a project move names the row it moves; a paired server's twin by its SSH target（[@nwparker](https://github.com/nwparker)，[#30794](https://github.com/stablyai/orca/pull/30794)）
- The workspace you're on disappearing lands you where a sidebar delete does, whatever removed it（[@brennanb2025](https://github.com/brennanb2025)，[#30428](https://github.com/stablyai/orca/pull/30428)）
- 修复（cli）：--environment connects to the server a differently-cased name resolved to（[@nwparker](https://github.com/nwparker)，[#30834](https://github.com/stablyai/orca/pull/30834)）
- 修复（persistence）：an id-only worktree write refuses same-id twins instead of taking the first writer's copy（[@nwparker](https://github.com/nwparker)，[#30841](https://github.com/stablyai/orca/pull/30841)）
- 修复（runtime）：a runtime worktree removal prunes the scan snapshots and label routes like the desktop one（[@nwparker](https://github.com/nwparker)，[#30845](https://github.com/stablyai/orca/pull/30845)）
- 修复（projects）：link cloned and existing folders for GitLab and other non-GitHub remotes（[@nwparker](https://github.com/nwparker)，[#30785](https://github.com/stablyai/orca/pull/30785)）
- 修复（sidebar）：a status or order drag writes the card you dragged, not its twin on another host（[@nwparker](https://github.com/nwparker)，[#30844](https://github.com/stablyai/orca/pull/30844)）
- 修复（renderer）：restoring or re-selecting a workspace keeps the host it was selected on（[@nwparker](https://github.com/nwparker)，[#30839](https://github.com/stablyai/orca/pull/30839)）
- 修复（sidebar-inputs）：a failed domain read is retried by the next flush or phone read（[@nwparker](https://github.com/nwparker)，[#30866](https://github.com/stablyai/orca/pull/30866)）
- 修复（runtime）：a terminal start on an SSH twin no longer wakes or is refused by this computer's sleep（[@nwparker](https://github.com/nwparker)，[#30860](https://github.com/stablyai/orca/pull/30860)）
- 修复（sidebar）：a Pinned drop or menu pin pins the card you chose, not its twin on another host（[@nwparker](https://github.com/nwparker)，[#30892](https://github.com/stablyai/orca/pull/30892)）
- 修复（renderer）：host writes route only through the strict owner, and twin projections stay on their host (review-5 #2 #9 #11)（[@nwparker](https://github.com/nwparker)，[#30890](https://github.com/stablyai/orca/pull/30890)）
- 修复（runtime）：a failed orphan adoption write rolls back instead of keeping the adopted tabs（[@nwparker](https://github.com/nwparker)，[#30942](https://github.com/stablyai/orca/pull/30942)）
- 修复（worktrees）：a sort order and a minted push remote land on the copy that named them（[@nwparker](https://github.com/nwparker)，[#30976](https://github.com/stablyai/orca/pull/30976)）
- 修复（space）：speed up selection and support reviewed workspace cleanup（[@nwparker](https://github.com/nwparker)，[#30989](https://github.com/stablyai/orca/pull/30989)）
- 修复（runtime）：a moved shell history waits only on this machine's shells; a phone never clears a twin's unread flag（[@nwparker](https://github.com/nwparker)，[#30991](https://github.com/stablyai/orca/pull/30991)）
- 给予Space rows a dedicated actions menu（[@nwparker](https://github.com/nwparker)，[#31000](https://github.com/stablyai/orca/pull/31000)）
- 修复（sidebar）：a pin's reveal follows only the focused copy, by its own host（[@nwparker](https://github.com/nwparker)，[#31017](https://github.com/stablyai/orca/pull/31017)）

#### 终端与快捷键 {#v1-4-232-terminals-shortcuts}

> Renamed panes stay in sync with their host, restarting a failed terminal opens a plain shell, and Copy works correctly on remapped Latin keyboard layouts.

- 修复（shortcuts）：Cmd+C no longer pastes on remapped Latin keyboard layouts（[@IncursorTech](https://github.com/IncursorTech)，[#29587](https://github.com/stablyai/orca/pull/29587)）
- 修复（terminal）：client pane names reach a desktop host's window, and open panes follow the host's（[@nwparker](https://github.com/nwparker)，[#30496](https://github.com/stablyai/orca/pull/30496)）
- 修复（terminal）：Restart on a failed terminal opens a plain shell instead of Codex（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30872](https://github.com/stablyai/orca/pull/30872)）

#### 编辑器、文件与源码管理 {#v1-4-232-editor-files-source-control}

> File links open beside their source tab group, HTML file URLs open as document previews, WSL repositories opened through UNC paths support staging and discarding, and diff views remember their position. Restoring a deleted file and creating a starter MCP config also check for intervening file changes; this protection does not yet apply to general editor saves.

- 修复（drops）：name extensionless dropped images by their bytes（[@younghwan91](https://github.com/younghwan91)，[#30379](https://github.com/stablyai/orca/pull/30379)）
- 打开file links beside their source tab's group（[@AmethystLiang](https://github.com/AmethystLiang)，[#30399](https://github.com/stablyai/orca/pull/30399)）
- 打开HTML file URLs as document previews（[@AmethystLiang](https://github.com/AmethystLiang)，[#30512](https://github.com/stablyai/orca/pull/30512)）
- 修复（editor）：opening a quoted lettered list with an unquoted continuation no longer crashes（[@OrcaWin](https://github.com/OrcaWin)，[#30247](https://github.com/stablyai/orca/pull/30247)）
- 新增（files）：guarded file writes that refuse to overwrite a changed file（[@nwparker](https://github.com/nwparker)，[#30605](https://github.com/stablyai/orca/pull/30605)）
- 修复（git）：stage and discard files in WSL repos opened by UNC path（[@s-stefanov](https://github.com/s-stefanov)，[#30693](https://github.com/stablyai/orca/pull/30693)）
- 修复（github）：treat SSH certificate org remotes (org-<id>@github.com) as GitHub（[@Yi-111-a](https://github.com/Yi-111-a)，[#30659](https://github.com/stablyai/orca/pull/30659)）
- 修复（git）：drop SSH host from clone folder names（[@wswsadadbaba123](https://github.com/wswsadadbaba123)，[#30763](https://github.com/stablyai/orca/pull/30763)）
- 修复（git）：forward stdin on buffered Git reads（[@nwparker](https://github.com/nwparker)，[#30634](https://github.com/stablyai/orca/pull/30634)）
- 修复（diff-comments）：a review note on a twin worktree saves to the open copy and names its host（[@nwparker](https://github.com/nwparker)，[#30855](https://github.com/stablyai/orca/pull/30855)）
- 修复（diff）：restore the All Changes view when its tab is reopened（[@nwparker](https://github.com/nwparker)，[#30943](https://github.com/stablyai/orca/pull/30943)）
- 修复（diff）：keep combined diff position stable across worktree switches（[@nwparker](https://github.com/nwparker)，[#30950](https://github.com/stablyai/orca/pull/30950)）

#### 浏览器 {#v1-4-232-browser}

> Sign in to sites that ask for a username and password, confirm before a page opens another app, and follow links between local HTML files. Remote browser sizing and clicks are more accurate, and automation respects text composition and revoked host access.

- 修复（browser）：a remote viewer larger than the host's browser pane sees the whole page and clicks land under the cursor（[@nwparker](https://github.com/nwparker)，[#30437](https://github.com/stablyai/orca/pull/30437)）
- 修复（browser）：switch client-hosted profiles by staging the replacement guest（[@nwparker](https://github.com/nwparker)，[#30452](https://github.com/stablyai/orca/pull/30452)）
- 修复（browser）：let a local HTML page follow its own file:// links（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30611](https://github.com/stablyai/orca/pull/30611)）
- 修复（browser）：refuse agent clicks while the user is mid-IME composition（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30358](https://github.com/stablyai/orca/pull/30358)）
- 新增（browser）：ask before a page opens another app（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30490](https://github.com/stablyai/orca/pull/30490)）
- 修复（browser）：label popups from committed document origins（[@AmethystLiang](https://github.com/AmethystLiang)，[#30540](https://github.com/stablyai/orca/pull/30540)）
- 新增（browser）：ask for a username and password when a site needs one（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30886](https://github.com/stablyai/orca/pull/30886)）
- 修复（browser）：a press an SSH host left held across commands is let go of when the host is revoked（[@nwparker](https://github.com/nwparker)，[#30847](https://github.com/stablyai/orca/pull/30847)）

#### 自动化与编排 {#v1-4-232-automations-orchestration}

> Scheduled runs can send work into an existing agent session and keep completed per-run sessions asleep for later. CLI host and project selection, pane titles and automation follow-up results are clearer, with less repeated work behind agent updates.

- 修复（cli）：--host and --project accept the names host list and project list print（[@nwparker](https://github.com/nwparker)，[#30438](https://github.com/stablyai/orca/pull/30438)）
- 修复（terminal）：report the host's saved pane names in terminal.list, and make clearing the last one stick（[@nwparker](https://github.com/nwparker)，[#30433](https://github.com/stablyai/orca/pull/30433)）
- 新增（cli）：set the title of one terminal pane（[@nwparker](https://github.com/nwparker)，[#30485](https://github.com/stablyai/orca/pull/30485)）
- 修复（automations）：headless reuse-session sends the prompt into the existing agent (#24278)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30594](https://github.com/stablyai/orca/pull/30594)）
- 修复（cli）：refuse server names --environment cannot tell apart, and say how to pick one of twin projects（[@nwparker](https://github.com/nwparker)，[#30676](https://github.com/stablyai/orca/pull/30676)）
- 性能（orchestration）：stop recompiling a mailbox lookup on every agent title（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30792](https://github.com/stablyai/orca/pull/30792)）
- 修复（automations）：headless keeps finished per-run sessions asleep instead of closing them (#24208)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30639](https://github.com/stablyai/orca/pull/30639)）
- 性能（automations）：release completed run observers（[@nwparker](https://github.com/nwparker)，[#13641](https://github.com/stablyai/orca/pull/13641)）
- 澄清automation run CLI results and follow-up targets（[@nwparker](https://github.com/nwparker)，[#28262](https://github.com/stablyai/orca/pull/28262)）

#### 性能、可靠性与诊断 {#v1-4-232-performance-reliability-diagnostics}

> Session History avoids repeated transcript scans and keeps older workspace sessions visible. File watching, search, memory cleanup and saving after a full-disk error are more resilient, while crash reports capture better evidence for diagnosis.

- 修复（macos）：the TCC prompt watcher's log stream dies with Orca, and old orphans are reclaimed（[@nwparker](https://github.com/nwparker)，[#30148](https://github.com/stablyai/orca/pull/30148)）
- 修复（watcher）：stop unwatched windows from being re-subscribed to local watchers（[@nwparker](https://github.com/nwparker)，[#30412](https://github.com/stablyai/orca/pull/30412)）
- 修复（watcher）：flush file changes on a steady cadence instead of waiting for quiet（[@nwparker](https://github.com/nwparker)，[#30270](https://github.com/stablyai/orca/pull/30270)）
- Session History: the Workspace tab stops re-reading every transcript to find its sessions（[@brennanb2025](https://github.com/brennanb2025)，[#30469](https://github.com/stablyai/orca/pull/30469)）
- Session History: a repeat open keeps every older session of the workspace（[@brennanb2025](https://github.com/brennanb2025)，[#30586](https://github.com/stablyai/orca/pull/30586)）
- 修复（crash-reporting）：renderer crash reports say whether the window was hung or blank（[@OrcaWin](https://github.com/OrcaWin)，[#30692](https://github.com/stablyai/orca/pull/30692)）
- 修复（diagnostics）：crash bundles always keep the terminal daemon's newest log lines（[@OrcaWin](https://github.com/OrcaWin)，[#30690](https://github.com/stablyai/orca/pull/30690)）
- 修复（crash-reporting）：Windows native crash reports say what the fault touched and which code ran（[@OrcaWin](https://github.com/OrcaWin)，[#30691](https://github.com/stablyai/orca/pull/30691)）
- 修复（persistence）：a commit that runs out of disk no longer stops all later saves（[@nwparker](https://github.com/nwparker)，[#30694](https://github.com/stablyai/orca/pull/30694)）
- Session History: the "Reading N / M files" count reaches its total（[@brennanb2025](https://github.com/brennanb2025)，[#30683](https://github.com/stablyai/orca/pull/30683)）
- 性能preserve matching Terminal settings sections during search（[@nwparker](https://github.com/nwparker)，[#23164](https://github.com/stablyai/orca/pull/23164)）
- 性能（file-explorer）：reject nonmatching names before path checks（[@nwparker](https://github.com/nwparker)，[#28572](https://github.com/stablyai/orca/pull/28572)）
- 性能（gitlab）：skip unused review details in Checks（[@nwparker](https://github.com/nwparker)，[#28643](https://github.com/stablyai/orca/pull/28643)）
- [mem] fix(memory): release consumed buffers, abandoned waits, and deleted diff views（[@OrcaWin](https://github.com/OrcaWin)，[#30650](https://github.com/stablyai/orca/pull/30650)）
- Speed up macOS updates by avoiding background installer throttling（[@nwparker](https://github.com/nwparker)，[#30944](https://github.com/stablyai/orca/pull/30944)）
- 修复（provider-process）：kill a provider group its SIGKILLed supervisor leaves behind（[@nwparker](https://github.com/nwparker)，[#30997](https://github.com/stablyai/orca/pull/30997)）

#### 更小的应用包 {#v1-4-232-smaller-app-packages}

> Desktop and browser interfaces share installed assets, duplicate ripgrep copies and unused cloud sources are removed, and feature-tour animations use smaller files while preserving their pixels and timing.

- Exclude unused cloud service sources from desktop packages（[@nwparker](https://github.com/nwparker)，[#31004](https://github.com/stablyai/orca/pull/31004)）
- Shrink feature tour animations without changing pixels or timing（[@nwparker](https://github.com/nwparker)，[#31012](https://github.com/stablyai/orca/pull/31012)）
- 移除identical packaged ripgrep copies without changing deployed servers（[@nwparker](https://github.com/nwparker)，[#31005](https://github.com/stablyai/orca/pull/31005)）
- Share installed desktop and browser assets（[@nwparker](https://github.com/nwparker)，[#31010](https://github.com/stablyai/orca/pull/31010)）

#### 中继服务 {#v1-4-232-relay-service}

> Connection recovery, regional routing and reserve capacity handling improve, alongside phone-resume infrastructure, monitoring and staged rollout tools.

- 修复（relay）：judge the reserve watch's 503 rule on non-drain 503s, not a host's own re-dials（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30487](https://github.com/stablyai/orca/pull/30487)）
- 修复（relay）：log controls a cell closes after host proof but before wiring（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30559](https://github.com/stablyai/orca/pull/30559)）
- 修复（relay）：keep connected hosts on a reserve cell set to existing-only（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30609](https://github.com/stablyai/orca/pull/30609)）
- 修复（relay-ops）：let the incident monitor sample a reserve-mode cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30661](https://github.com/stablyai/orca/pull/30661)）
- 修复（relay-ops）：judge a reserve cell's connections against its configured hard cap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30668](https://github.com/stablyai/orca/pull/30668)）
- 新增（relay）：add the per-cell phonePath switch, effective only in reserve mode（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30629](https://github.com/stablyai/orca/pull/30629)）
- 新增（relay）：resume paired phones from one device read on memory cells（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30649](https://github.com/stablyai/orca/pull/30649)）
- 新增（relay-ops）：watch a memory phone cell and turn its phone path off on a breach（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30662](https://github.com/stablyai/orca/pull/30662)）
- 新增（relay）：keep a memory resume's basis in the cell and confirm it from one read（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30651](https://github.com/stablyai/orca/pull/30651)）
- 新增（relay）：batch a memory cell's resume-confirmed audit rows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30655](https://github.com/stablyai/orca/pull/30655)）
- 修复（relay-ops）：let same-cap rolls run while another cell is reserve; refuse a reserve roll target by name（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30707](https://github.com/stablyai/orca/pull/30707)）
- 新增（relay）：count and log phone-path failures, and every attach deadline（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30656](https://github.com/stablyai/orca/pull/30656)）
- 杂项（relay）：pin staging c1 and c4 to image J for the step-6 staging test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30812](https://github.com/stablyai/orca/pull/30812)）
- 新增（relay-load）：drive paired-phone resumes so staging can time the step-6 phone path（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30816](https://github.com/stablyai/orca/pull/30816)）
- 修复（relay）：never send a raw error message to the desktop as a control error code（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30873](https://github.com/stablyai/orca/pull/30873)）
- 修复（relay-ops）：stop the reserve watch cleanly when the cell leaves reserve（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30972](https://github.com/stablyai/orca/pull/30972)）
- 修复（relay）：keep a host in its region when the database lane is full and a reserve cell has room（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30974](https://github.com/stablyai/orca/pull/30974)）

#### 测试、CI 与维护 {#v1-4-232-tests-ci-maintenance}

> compatibility and end-to-end coverage, faster release preparation, formatting checks and internal cleanup. This section also includes sidebar and terminal-layout work that remains behind a feature switch; those entries are not enabled product features in this release覆盖更广。

- 修复（cleanup）：count visits as last activity once terminals stop stamping Recent (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30397](https://github.com/stablyai/orca/pull/30397)）
- 测试（e2e）：align title-strip drops with pane selection rules（[@brennanb2025](https://github.com/brennanb2025)，[#29903](https://github.com/stablyai/orca/pull/29903)）
- 重构（sidebar）：the stamp-sorted window list runs no settle, latch or saved order (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30401](https://github.com/stablyai/orca/pull/30401)）
- 重构（sidebar）：main keeps sleeping retention only, no order of its own (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30404](https://github.com/stablyai/orca/pull/30404)）
- A CLI-started terminal shows once in its workspace, and a pane close main has no pane for closes in the window (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30391](https://github.com/stablyai/orca/pull/30391)）
- 新增（sidebar）：Smart Done means finished and unread (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30425](https://github.com/stablyai/orca/pull/30425)）
- 测试（sidebar）：the desktop window and a phone reading the feed draw the same list (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30426](https://github.com/stablyai/orca/pull/30426)）
- 新增（cleanup）：the owning host records last terminal use for cleanup's last active (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30431](https://github.com/stablyai/orca/pull/30431)）
- A paired server's workspace never gets main's layout commands: a pinning test (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30430](https://github.com/stablyai/orca/pull/30430)）
- 杂项（telemetry）：remove the three Smart sort telemetry events（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30435](https://github.com/stablyai/orca/pull/30435)）
- A CLI split whose pane is closed before it shows answers at once (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30439](https://github.com/stablyai/orca/pull/30439)）
- 重构（main）：import three ipc seams from their defining modules (no re-exports)（[@nwparker](https://github.com/nwparker)，[#30440](https://github.com/stablyai/orca/pull/30440)）
- 更新prompt logic（[@AmethystLiang](https://github.com/AmethystLiang)，[#30444](https://github.com/stablyai/orca/pull/30444)）
- 新增（sidebar）：the owning host raises the workspace unread flag (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30450](https://github.com/stablyai/orca/pull/30450)）
- 重构（renderer）：one owner adapter for the deprecated-resolver folds, pinned by an acceptance table（[@nwparker](https://github.com/nwparker)，[#30451](https://github.com/stablyai/orca/pull/30451)）
- 测试（e2e）：the CLI retention test seeds its gone-pane record on disk, so it holds in both layout builds（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30432](https://github.com/stablyai/orca/pull/30432)）
- 重构（renderer）：fold four lib callers off the deprecated runtime-owner resolver（[@nwparker](https://github.com/nwparker)，[#30458](https://github.com/stablyai/orca/pull/30458)）
- The terminal server and desktop finish the two-pane terminal repair before startup continues (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30429](https://github.com/stablyai/orca/pull/30429)）
- Editor records keyed by owner, phone active file, and a bound on frame holds (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30473](https://github.com/stablyai/orca/pull/30473)）
- 重构（renderer）：fold 13 sidebar, hook and chat readers off the deprecated owner resolver, and count the adapter as a focus read（[@nwparker](https://github.com/nwparker)，[#30478](https://github.com/stablyai/orca/pull/30478)）
- 重构（ssh）：move the ssh-connection and ssh-target cluster into ssh/connection/ and ssh/targets/（[@nwparker](https://github.com/nwparker)，[#30479](https://github.com/stablyai/orca/pull/30479)）
- 构建bump pnpm to 12.14.0（[@nwparker](https://github.com/nwparker)，[#30481](https://github.com/stablyai/orca/pull/30481)）
- 新增（sidebar）：the desktop window lists main's sidebar inputs behind the build switch (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30461](https://github.com/stablyai/orca/pull/30461)）
- 构建declare dependencies that only hoisting supplied（[@nwparker](https://github.com/nwparker)，[#30225](https://github.com/stablyai/orca/pull/30225)）
- 重构（renderer）：fold activation mirroring and sort-order persistence off the deprecated owner resolver（[@nwparker](https://github.com/nwparker)，[#30484](https://github.com/stablyai/orca/pull/30484)）
- Main keeps an agent's resume record from the status it receives (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30455](https://github.com/stablyai/orca/pull/30455)）
- 修复（build）：shared native packages get one immutable build instead of in-place rebuilds（[@nwparker](https://github.com/nwparker)，[#30226](https://github.com/stablyai/orca/pull/30226)）
- 构建share one pnpm virtual store across worktrees (off in CI and on Windows)（[@nwparker](https://github.com/nwparker)，[#30254](https://github.com/stablyai/orca/pull/30254)）
- 新增（sidebar）：the phone reads its workspace list from the sidebar inputs (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30462](https://github.com/stablyai/orca/pull/30462)）
- A first visit resumes a sleeping agent once, in its own pane (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30468](https://github.com/stablyai/orca/pull/30468)）
- 重构extract helpers that agent-status files need room for（[@nwparker](https://github.com/nwparker)，[#30260](https://github.com/stablyai/orca/pull/30260)）
- 重构（ssh）：split ssh-connection-utils into concretely named modules（[@nwparker](https://github.com/nwparker)，[#30488](https://github.com/stablyai/orca/pull/30488)）
- Main writes a workspace sleep's resume records after the statuses it accepted before the sleep (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30482](https://github.com/stablyai/orca/pull/30482)）
- One spawn-options step for both ways Orca opens a terminal, and one first-size rule（[@brennanb2025](https://github.com/brennanb2025)，[#30390](https://github.com/stablyai/orca/pull/30390)）
- 重构（renderer）：fold launch, paste and terminal-create callers off the deprecated owner resolver; spawn refuses folder twins（[@nwparker](https://github.com/nwparker)，[#30497](https://github.com/stablyai/orca/pull/30497)）
- 测试（wsl）：exercise Native Chat on real WSL2 hosts（[@brennanb2025](https://github.com/brennanb2025)，[#28973](https://github.com/stablyai/orca/pull/28973)）
- 重构（shared）：move orcad-migration-* into src/shared/orcad-migration/（[@nwparker](https://github.com/nwparker)，[#30536](https://github.com/stablyai/orca/pull/30536)）
- Track usage of closing tabs to left and right（[@AmethystLiang](https://github.com/AmethystLiang)，[#30557](https://github.com/stablyai/orca/pull/30557)）
- 修复（wsl）：repair main typecheck after ssh-connection-utils split（[@nwparker](https://github.com/nwparker)，[#30566](https://github.com/stablyai/orca/pull/30566)）
- 重构（agent-status）：one live agent transition detector in main, read by the sort stamps（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30532](https://github.com/stablyai/orca/pull/30532)）
- 测试（floating-terminal）：mock the bulk-close confirmation the panel suite cannot render（[@nwparker](https://github.com/nwparker)，[#30568](https://github.com/stablyai/orca/pull/30568)）
- 构建use the shared pnpm store on Windows by default（[@nwparker](https://github.com/nwparker)，[#30565](https://github.com/stablyai/orca/pull/30565)）
- Revert "fix(native-chat): Claude, Pi and ACP chats are Working only while the agent holds the send" (#30134)（[@brennanb2025](https://github.com/brennanb2025)，[#30572](https://github.com/stablyai/orca/pull/30572)）
- An e2e test cuts the window's layout feed mid-session and checks it recovers and survives a restart (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30574](https://github.com/stablyai/orca/pull/30574)）
- Editor files that share a path across two hosts: the tab lookup, the load report and the phone close match the right file (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30569](https://github.com/stablyai/orca/pull/30569)）
- The host raises the shared unread dot whatever each client's Filters say (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30581](https://github.com/stablyai/orca/pull/30581)）
- 测试（browser）：document blocked popup compatibility gates（[@AmethystLiang](https://github.com/AmethystLiang)，[#30537](https://github.com/stablyai/orca/pull/30537)）
- 重构（renderer）：fold browser creation, file actions and file preview off the deprecated owner resolver（[@nwparker](https://github.com/nwparker)，[#30562](https://github.com/stablyai/orca/pull/30562)）
- 重构（shell）：one shell-argument-quoting module for the duplicated quote copies（[@nwparker](https://github.com/nwparker)，[#30564](https://github.com/stablyai/orca/pull/30564)）
- 重构（orchestration）：delete the unreachable pre-mailbox terminal delivery path（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30576](https://github.com/stablyai/orca/pull/30576)）
- 构建move cloud/ and docs/site/ to pnpm 12.14.0（[@nwparker](https://github.com/nwparker)，[#30600](https://github.com/stablyai/orca/pull/30600)）
- 重构（renderer）：one twin check, one worktree-copy scan, drop stale resolver mocks（[@nwparker](https://github.com/nwparker)，[#30579](https://github.com/stablyai/orca/pull/30579)）
- A pane closed while its terminal starts stays closed (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30560](https://github.com/stablyai/orca/pull/30560)）
- 杂项（docs）：use Node.js 24 for docs builds and runtime（[@nwparker](https://github.com/nwparker)，[#30615](https://github.com/stablyai/orca/pull/30615)）
- 修复（persistence）：repo writes take the row's identity, never a bare id（[@nwparker](https://github.com/nwparker)，[#30616](https://github.com/stablyai/orca/pull/30616)）
- 重构（plugins）：name shared catalog and manifest schema parts（[@nwparker](https://github.com/nwparker)，[#30612](https://github.com/stablyai/orca/pull/30612)）
- Align root Node types with the supported Node 24 runtime（[@nwparker](https://github.com/nwparker)，[#30617](https://github.com/stablyai/orca/pull/30617)）
- 修复（sidebar）：Hide sleeping keeps a paired server's active workspaces (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30624](https://github.com/stablyai/orca/pull/30624)）
- 修复（sidebar）：phone feed list leftovers before the flip (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30631](https://github.com/stablyai/orca/pull/30631)）
- 重构（terminal）：one PTY attribution for teardown, close and identity; delete the deprecated owner resolver（[@nwparker](https://github.com/nwparker)，[#30626](https://github.com/stablyai/orca/pull/30626)）
- 重构（ssh）：derive a host-key policy from the target owner（[@nwparker](https://github.com/nwparker)，[#30627](https://github.com/stablyai/orca/pull/30627)）
- 重构（process-host）：let runProcess callers observe stderr as it arrives（[@nwparker](https://github.com/nwparker)，[#30628](https://github.com/stablyai/orca/pull/30628)）
- 测试（managed-server）：6 KB wire-size budget for every POSIX host-op command（[@nwparker](https://github.com/nwparker)，[#30635](https://github.com/stablyai/orca/pull/30635)）
- 测试（e2e）：reveal specs create workspaces through main so they pass with the sidebar switch on（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30642](https://github.com/stablyai/orca/pull/30642)）
- 修复（sidebar）：the window raises the unread flag exactly when its host does not (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30638](https://github.com/stablyai/orca/pull/30638)）
- A CLI split that times out leaves no pane (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30563](https://github.com/stablyai/orca/pull/30563)）
- 修复（managed-server）：repair main typecheck after the byte-budget and snapshot-room PRs crossed（[@nwparker](https://github.com/nwparker)，[#30680](https://github.com/stablyai/orca/pull/30680)）
- 测试（relay）：census every activity-lease reader for phones without leases（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30625](https://github.com/stablyai/orca/pull/30625)）
- 重构（browser）：one page gate and one owner for a host command's hold（[@nwparker](https://github.com/nwparker)，[#30652](https://github.com/stablyai/orca/pull/30652)）
- 重构（composer）：split run-target rows and worktree-creation steps into named pieces（[@nwparker](https://github.com/nwparker)，[#30703](https://github.com/stablyai/orca/pull/30703)）
- 重构（renderer）：one FileTypeIcon component for file icons（[@nwparker](https://github.com/nwparker)，[#30695](https://github.com/stablyai/orca/pull/30695)）
- 重构one repo-row owner stamp for session placeholders; pass-1 follow-ups（[@nwparker](https://github.com/nwparker)，[#30699](https://github.com/stablyai/orca/pull/30699)）
- 测试（e2e）：nine sidebar specs create workspaces and links through main so they pass with the switch on（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30667](https://github.com/stablyai/orca/pull/30667)）
- CI：run the layout-owner switch-on specs as an advisory PR check (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30582](https://github.com/stablyai/orca/pull/30582)）
- The layout drift log names the values that differ (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30678](https://github.com/stablyai/orca/pull/30678)）
- 新增（orcad-migration）：host applies a signed editor-drafts blob inside the commit (S10-H)（[@nwparker](https://github.com/nwparker)，[#30665](https://github.com/stablyai/orca/pull/30665)）
- 重构de-barrel remote-runtime-client, runtime-terminal-stream and runtime-terminal-inspection (D2, D3)（[@nwparker](https://github.com/nwparker)，[#30684](https://github.com/stablyai/orca/pull/30684)）
- 重构（plugins）：extract the shared content-pack registry and list store（[@nwparker](https://github.com/nwparker)，[#30697](https://github.com/stablyai/orca/pull/30697)）
- 修复（security）：put every trust decision on a host-owned token surface（[@nwparker](https://github.com/nwparker)，[#30710](https://github.com/stablyai/orca/pull/30710)）
- 修复（sidebar）：key folder workspace rows by host so the phone matches the desktop (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30721](https://github.com/stablyai/orca/pull/30721)）
- 重构（pty）：every PTY retirement names its exit proof; ratchet the unproven ones（[@nwparker](https://github.com/nwparker)，[#30722](https://github.com/stablyai/orca/pull/30722)）
- 测试（e2e）：a phone lists the desktop's managed SSH workspace as the desktop sidebar does (switch on)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30718](https://github.com/stablyai/orca/pull/30718)）
- 测试（e2e）：mount-authority spec polls through the host's "can't answer yet" terminal list（[@nwparker](https://github.com/nwparker)，[#30743](https://github.com/stablyai/orca/pull/30743)）
- 测试（e2e）：pane-close specs close panes the way the user does and check main's copy (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30745](https://github.com/stablyai/orca/pull/30745)）
- 性能（sidebar）：announce a burst of sort-stamp writes once (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30746](https://github.com/stablyai/orca/pull/30746)）
- 重构（orcad）：every snapshot state op fits the gateway exec budget in shell; the state lock sends its script once（[@nwparker](https://github.com/nwparker)，[#30744](https://github.com/stablyai/orca/pull/30744)）
- 重构（pane-layout）：retire the unread intent tag; renamedLeafIds is the one layout delta（[@nwparker](https://github.com/nwparker)，[#30734](https://github.com/stablyai/orca/pull/30734)）
- 修复（pty）：an exit proof names its incarnation; a spawn is tracked from its reply（[@nwparker](https://github.com/nwparker)，[#30754](https://github.com/stablyai/orca/pull/30754)）
- 测试（e2e）：two chat specs follow the pan-and-zoom preview and the renamed New tab chat row（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30755](https://github.com/stablyai/orca/pull/30755)）
- 修复（persistence）：repo-row store writes take the row, not the id; ratchet the rest (R4-2a)（[@nwparker](https://github.com/nwparker)，[#30756](https://github.com/stablyai/orca/pull/30756)）
- 测试（relay）：drill a memory cell through a database outage, and pin phone renewal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30666](https://github.com/stablyai/orca/pull/30666)）
- 修复（ci）：background steps are single run steps, so no action reads the event payload while the runner rewrites it（[@nwparker](https://github.com/nwparker)，[#30795](https://github.com/stablyai/orca/pull/30795)）
- 修复（persistence）：folder, group and session-state store writes name their host or why they needn't (R4-2c)（[@nwparker](https://github.com/nwparker)，[#30797](https://github.com/stablyai/orca/pull/30797)）
- 修复（persistence）：worktree meta and lineage writes take the row's host, not the id (R4-2b)（[@nwparker](https://github.com/nwparker)，[#30811](https://github.com/stablyai/orca/pull/30811)）
- A pane main first sees when its terminal starts goes where the window split it (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30772](https://github.com/stablyai/orca/pull/30772)）
- 样式format the 10 files on main that oxfmt --check reports（[@nwparker](https://github.com/nwparker)，[#30828](https://github.com/stablyai/orca/pull/30828)）
- 修复a tab close by the handle a split returned finds the new pane (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30786](https://github.com/stablyai/orca/pull/30786)）
- 测试（codex）：pin the stopped-send receipt rule where #30403 moved it (fix red main)（[@nwparker](https://github.com/nwparker)，[#30865](https://github.com/stablyai/orca/pull/30865)）
- 文档（editor）：design for one editor buffer per file（[@nwparker](https://github.com/nwparker)，[#30851](https://github.com/stablyai/orca/pull/30851)）
- 回退remove the editor buffer design doc from the repo（[@nwparker](https://github.com/nwparker)，[#30875](https://github.com/stablyai/orca/pull/30875)）
- 修复（i18n）：stop extracting <style> sheets as translatable copy（[@nwparker](https://github.com/nwparker)，[#30765](https://github.com/stablyai/orca/pull/30765)）
- 重构（editor）：tab buffer state lives in a per-tab store record, mirrored onto the tab（[@nwparker](https://github.com/nwparker)，[#30885](https://github.com/stablyai/orca/pull/30885)）
- 重构（orcad-migration）：remove the host-side editor-drafts transfer, keep the durable-commit gate（[@nwparker](https://github.com/nwparker)，[#30884](https://github.com/stablyai/orca/pull/30884)）
- CI：fail the static job on unformatted files（[@nwparker](https://github.com/nwparker)，[#30863](https://github.com/stablyai/orca/pull/30863)）
- 停止running the experimental layout suite on every matching PR（[@nwparker](https://github.com/nwparker)，[#30907](https://github.com/stablyai/orca/pull/30907)）
- 杂项（lint）：bring orcad-managed-tunnel-manager.ts back under max-lines（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30921](https://github.com/stablyai/orca/pull/30921)）
- 杂项（format）：format the files main's new formatting check rejects（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30929](https://github.com/stablyai/orca/pull/30929)）
- 样式format the 22 files main merged unformatted (fix red main)（[@brennanb2025](https://github.com/brennanb2025)，[#30918](https://github.com/stablyai/orca/pull/30918)）
- 修复（managed-server）：keep the tunnel manager under its line limit (fix red main lint)（[@nwparker](https://github.com/nwparker)，[#30933](https://github.com/stablyai/orca/pull/30933)）
- 测试（browser）：wait for the popup fixture's first paint during startup, not in the first test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30854](https://github.com/stablyai/orca/pull/30854)）
- 杂项（ratchet）：prune the tabs-group-actions layout-writer baseline（[@brennanb2025](https://github.com/brennanb2025)，[#30869](https://github.com/stablyai/orca/pull/30869)）
- Run selected SSH tests instead of the whole suite on PRs（[@nwparker](https://github.com/nwparker)，[#30928](https://github.com/stablyai/orca/pull/30928)）
- A pane close by its terminal handle closes only that pane, even before the window lists it (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30920](https://github.com/stablyai/orca/pull/30920)）
- 样式format three files that landed before the format check (fix red main)（[@nwparker](https://github.com/nwparker)，[#30948](https://github.com/stablyai/orca/pull/30948)）
- 测试（browser）：route input into fresh sandboxed popup iframes before clicking them（[@nwparker](https://github.com/nwparker)，[#30966](https://github.com/stablyai/orca/pull/30966)）
- 测试（e2e）：give the ACK-backpressured typing scenario the under-load timer-drift budget（[@nwparker](https://github.com/nwparker)，[#30968](https://github.com/stablyai/orca/pull/30968)）
- 测试（node-runtime）：stop the refused-download test hanging under the bun runner (fix red main)（[@nwparker](https://github.com/nwparker)，[#30967](https://github.com/stablyai/orca/pull/30967)）
- 测试（e2e）：measure typing-time renderer stalls with long tasks, not interval drift（[@nwparker](https://github.com/nwparker)，[#30971](https://github.com/stablyai/orca/pull/30971)）
- 性能（release）：overlap server checks and share the mobile bundle（[@nwparker](https://github.com/nwparker)，[#30990](https://github.com/stablyai/orca/pull/30990)）
- Restored terminals named only on their tab reattach after a restart (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30986](https://github.com/stablyai/orca/pull/30986)）
- Overlap Mac notarization waits while preserving release gates（[@nwparker](https://github.com/nwparker)，[#31006](https://github.com/stablyai/orca/pull/31006)）
- Three small fixes in the layout-owner build: repo reads, dragged-out pane folder, cancelled chat reader (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31003](https://github.com/stablyai/orca/pull/31003)）

### 新贡献者 {#v1-4-232-contributors}

- [@IncursorTech](https://github.com/IncursorTech) 首次贡献于 [#29587](https://github.com/stablyai/orca/pull/29587)
- [@younghwan91](https://github.com/younghwan91) 首次贡献于 [#30379](https://github.com/stablyai/orca/pull/30379)
- [@s-stefanov](https://github.com/s-stefanov) 首次贡献于 [#30693](https://github.com/stablyai/orca/pull/30693)
- [@Yi-111-a](https://github.com/Yi-111-a) 首次贡献于 [#30659](https://github.com/stablyai/orca/pull/30659)
- [@wswsadadbaba123](https://github.com/wswsadadbaba123) 首次贡献于 [#30763](https://github.com/stablyai/orca/pull/30763)

**完整变更对照：** [v1.4.230...v1.4.232](https://github.com/stablyai/orca/compare/v1.4.230...v1.4.232)
## v1.4.230 实验性 Native Chat 支持 Antigravity，可选择 Agent 并在聊天内安装 {#v1-4-230}

2026年10月19日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.230)

### 简要说明 {#v1-4-230-short}

- **实验性 Native Chat：** 在聊天中使用 Antigravity，选择哪些 Agent 以聊天形式打开，并在聊天内安装缺失的 Agent。将复制的文件粘贴为附件、排队图片，并在附件与队列操作进行中看到更清晰的反馈。
- **账号与 Agent：** 切换 Claude 账号后，重启正在运行的会话到新账号。从 Settings 移除已下载的 Agent 运行时，并通过 Orca CLI 编辑或删除 Linear 评论。
- **手机端：** 就地编辑队列中的消息，用桌面风格卡片跟随工具运行，从历史恢复时立即看到对话。横屏手机把会话标签放在顶栏，Tasks 清楚显示你正在使用哪个桌面。

### 兼容性与升级说明 {#v1-4-230-compatibility-upgrade-notes}

- **实验性 Native Chat：** Antigravity 与聊天内安装需要更新过的宿主。请与 Orca 一起更新已配对与 SSH 宿主。

---

### 产品体验 {#v1-4-230-product}

#### 实验性 Native Chat {#v1-4-230-native-chat-experimental-}

> Choose which agents open as chats, use Antigravity, attach files and images more reliably, and see clearer queue, model and input-ownership feedback.

- Offer Install when a chat’s host is missing the agent it needs（[@brennanb2025](https://github.com/brennanb2025)，[#29051](https://github.com/stablyai/orca/pull/29051)）
- Chat: dropped files hold Send until they're attached（[@brennanb2025](https://github.com/brennanb2025)，[#29173](https://github.com/stablyai/orca/pull/29173)）
- A queue action still on its way greys its controls, like the phone（[@brennanb2025](https://github.com/brennanb2025)，[#29120](https://github.com/stablyai/orca/pull/29120)）
- Image messages wait in the queue like text（[@brennanb2025](https://github.com/brennanb2025)，[#28655](https://github.com/stablyai/orca/pull/28655)）
- Chat: pasting a copied file attaches it, like dropping it（[@brennanb2025](https://github.com/brennanb2025)，[#29089](https://github.com/stablyai/orca/pull/29089)）
- Choose which agents open in Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#29071](https://github.com/stablyai/orca/pull/29071)）
- A sign-in prompt on an ACP agent's error output ends the start or turn signed out（[@brennanb2025](https://github.com/brennanb2025)，[#28467](https://github.com/stablyai/orca/pull/28467)）
- An agent can run each chat's own permission mode itself（[@brennanb2025](https://github.com/brennanb2025)，[#28455](https://github.com/stablyai/orca/pull/28455)）
- 隐藏Orca's chat-naming requests from Session History（[@nwparker](https://github.com/nwparker)，[#30029](https://github.com/stablyai/orca/pull/30029)）
- A running Claude chat keeps its model when two Claude Code versions list differently（[@brennanb2025](https://github.com/brennanb2025)，[#30022](https://github.com/stablyai/orca/pull/30022)）
- Use Antigravity in Native Chat through its ACP server（[@brennanb2025](https://github.com/brennanb2025)，[#28595](https://github.com/stablyai/orca/pull/28595)）
- A refused steer leaves its turn as the chat's latest request（[@brennanb2025](https://github.com/brennanb2025)，[#29907](https://github.com/stablyai/orca/pull/29907)）
- A Codex chat is Working only while Codex holds the send（[@brennanb2025](https://github.com/brennanb2025)，[#29922](https://github.com/stablyai/orca/pull/29922)）
- Pause an agent's chat starts while its shared sign-in changes（[@brennanb2025](https://github.com/brennanb2025)，[#28649](https://github.com/stablyai/orca/pull/28649)）
- The queue button you pressed shows a working spinner（[@brennanb2025](https://github.com/brennanb2025)，[#30010](https://github.com/stablyai/orca/pull/30010)）
- Mark each attached image as [Image #N] where it sits in the prompt（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28736](https://github.com/stablyai/orca/pull/28736)）
- 保持a restored agent’s status unconfirmed after 30 minutes instead of marking it done（[@nwparker](https://github.com/nwparker)，[#30186](https://github.com/stablyai/orca/pull/30186)）
- 显示why the chat composer is locked and offer Take back when a phone holds the input（[@nwparker](https://github.com/nwparker)，[#30199](https://github.com/stablyai/orca/pull/30199)）
- Antigravity install: one clear message in the chat, with the message box staying in place（[@brennanb2025](https://github.com/brennanb2025)，[#30001](https://github.com/stablyai/orca/pull/30001)）
- Session History: the scan line under the search box no longer jumps during a refresh（[@brennanb2025](https://github.com/brennanb2025)，[#30158](https://github.com/stablyai/orca/pull/30158)）
- Sign in to Antigravity chats with the server’s own Google sign-in（[@brennanb2025](https://github.com/brennanb2025)，[#28650](https://github.com/stablyai/orca/pull/28650)）
- 移动a chat visual's Open and Share buttons above it（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30356](https://github.com/stablyai/orca/pull/30356)）
- A Claude chat keeps a model its CLI stopped listing（[@brennanb2025](https://github.com/brennanb2025)，[#30436](https://github.com/stablyai/orca/pull/30436)）

#### Agents, integrations & accounts {#v1-4-230-agents-integrations-accounts}

> Switch Claude accounts with a restart offer, manage downloaded runtimes, edit Linear comments, and keep terminal sessions and GitLab task searches reliable.

- Edit and delete Linear comments from the Orca CLI（[@brennanb2025](https://github.com/brennanb2025)，[#30003](https://github.com/stablyai/orca/pull/30003)）
- 移除a downloaded agent runtime from its Settings row（[@brennanb2025](https://github.com/brennanb2025)，[#29140](https://github.com/stablyai/orca/pull/29140)）
- Follow an Orca Claude account switch when the shell sets CLAUDE_CONFIG_DIR（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29890](https://github.com/stablyai/orca/pull/29890)）
- Offer to restart running Claude sessions on the new account after a switch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29898](https://github.com/stablyai/orca/pull/29898)）
- 移除a downloaded agent runtime only after nothing on its host can still run it（[@brennanb2025](https://github.com/brennanb2025)，[#29139](https://github.com/stablyai/orca/pull/29139)）
- 允许jcode's own client start its per-pane server（[@brennanb2025](https://github.com/brennanb2025)，[#30257](https://github.com/stablyai/orca/pull/30257)）
- Run the Antigravity usage check with agy's auto-update off（[@OrcaWin](https://github.com/OrcaWin)，[#30387](https://github.com/stablyai/orca/pull/30387)）
- Quit no longer warns about terminals a paired Orca server keeps running（[@nwparker](https://github.com/nwparker)，[#30006](https://github.com/stablyai/orca/pull/30006)）
- 恢复a relaunched workspace's sleeping agents only when shown（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29459](https://github.com/stablyai/orca/pull/29459)）
- One spawn step writes a terminal's pane identity for both ways Orca opens terminals（[@brennanb2025](https://github.com/brennanb2025)，[#29884](https://github.com/stablyai/orca/pull/29884)）
- Tell users once that the diff panel in a Claude pane is Claude's own（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29818](https://github.com/stablyai/orca/pull/29818)）
- 保持OMP prompt markers from ending an agent’s turn so phone chat can find its session（[@nwparker](https://github.com/nwparker)，[#30273](https://github.com/stablyai/orca/pull/30273)）
- 避免duplicate snapshot replays after reveal（[@nwparker](https://github.com/nwparker)，[#30205](https://github.com/stablyai/orca/pull/30205)）
- 保持OMP prompt markers from triggering unnecessary terminal repair（[@nwparker](https://github.com/nwparker)，[#30285](https://github.com/stablyai/orca/pull/30285)）
- Limit concurrent GitLab project requests to keep task searches within the queue limit（[@maxmilian](https://github.com/maxmilian)，[#30157](https://github.com/stablyai/orca/pull/30157)）

#### SSH, managed servers & remote {#v1-4-230-ssh-managed-servers-remote}

> 保持：disconnects, sleeping workspaces and closed tabs consistent, preserve workspace identity during server moves, and recover with clearer update and re-pairing guidance.

- 停止suggesting --host to listings that reject it（[@nwparker](https://github.com/nwparker)，[#30012](https://github.com/stablyai/orca/pull/30012)）
- Explain why file open fails on a server with no app window（[@nwparker](https://github.com/nwparker)，[#30014](https://github.com/stablyai/orca/pull/30014)）
- A host converted to its managed server keeps its workspaces' visit recency（[@nwparker](https://github.com/nwparker)，[#30015](https://github.com/stablyai/orca/pull/30015)）
- Link a folder workspace the server kept when a re-created SSH host moves again (#27285)（[@nwparker](https://github.com/nwparker)，[#30017](https://github.com/stablyai/orca/pull/30017)）
- A password SSH host waits for you at launch instead of prompting（[@nwparker](https://github.com/nwparker)，[#30025](https://github.com/stablyai/orca/pull/30025)）
- Make the host's tab name the one source for CLI and desktop renames（[@nwparker](https://github.com/nwparker)，[#30037](https://github.com/stablyai/orca/pull/30037)）
- A slept remote workspace stays asleep through terminal orphan recovery（[@nwparker](https://github.com/nwparker)，[#30118](https://github.com/stablyai/orca/pull/30118)）
- A Disconnect stays disconnected, and Settings and the status bar agree（[@nwparker](https://github.com/nwparker)，[#30130](https://github.com/stablyai/orca/pull/30130)）
- Orca serve on orcad serves the browser client and answers plain HTTP（[@nwparker](https://github.com/nwparker)，[#30120](https://github.com/stablyai/orca/pull/30120)）
- A tab closed while a managed host is disconnected stays closed; deflake the shared-home spec（[@nwparker](https://github.com/nwparker)，[#30146](https://github.com/stablyai/orca/pull/30146)）
- Paired clients see a folder-upgraded Git project under the host workspace id（[@nwparker](https://github.com/nwparker)，[#30190](https://github.com/stablyai/orca/pull/30190)）
- 移动the open workspace to the server's linked project when joining an existing server（[@nwparker](https://github.com/nwparker)，[#30189](https://github.com/stablyai/orca/pull/30189)）
- Saved terminal history no longer blocks a host's move to its Orca server (#30126)（[@nwparker](https://github.com/nwparker)，[#30188](https://github.com/stablyai/orca/pull/30188)）
- Say when a managed server may be behind this app, and retry a failed update once per launch（[@nwparker](https://github.com/nwparker)，[#30218](https://github.com/stablyai/orca/pull/30218)）
- A late relay-era attach releases only its own viewer, never a successor's（[@nwparker](https://github.com/nwparker)，[#30219](https://github.com/stablyai/orca/pull/30219)）
- 报告a legacy relay host active once a day while it bridges terminals（[@nwparker](https://github.com/nwparker)，[#30229](https://github.com/stablyai/orca/pull/30229)）
- SSH host management on a server without the desktop app says why it can't (D3)（[@nwparker](https://github.com/nwparker)，[#30242](https://github.com/stablyai/orca/pull/30242)）
- A connection never redials a host the user disconnected before its teardown runs（[@nwparker](https://github.com/nwparker)，[#30245](https://github.com/stablyai/orca/pull/30245)）
- Refuse a migration request too large for the host's sealed frame before sending it（[@nwparker](https://github.com/nwparker)，[#30249](https://github.com/stablyai/orca/pull/30249)）
- Overlapping update checks never both try a host the first one just failed on（[@nwparker](https://github.com/nwparker)，[#30253](https://github.com/stablyai/orca/pull/30253)）
- 显示Re-pair required for revoked servers and let you re-pair in place（[@nwparker](https://github.com/nwparker)，[#30271](https://github.com/stablyai/orca/pull/30271)）

#### 手机端 {#v1-4-230-phone}

> Edit queued messages in place, follow tool runs, resume conversations with their history visible, and navigate files, Tasks and landscape session tabs more smoothly.

- Edit queued messages in place（[@brennanb2025](https://github.com/brennanb2025)，[#28646](https://github.com/stablyai/orca/pull/28646)）
- One Working line in every chat; drop the floating 'Agent is working' pill（[@brennanb2025](https://github.com/brennanb2025)，[#29972](https://github.com/stablyai/orca/pull/29972)）
- The chat's Working line uses desktop's spinner（[@brennanb2025](https://github.com/brennanb2025)，[#30008](https://github.com/stablyai/orca/pull/30008)）
- 保持a headless host's chat tab through snapshot rebuilds（[@nwparker](https://github.com/nwparker)，[#30028](https://github.com/stablyai/orca/pull/30028)）
- 防止markdown and file tab reload and screen flicker on retap and revisit（[@zhangxaochen](https://github.com/zhangxaochen)，[#30033](https://github.com/stablyai/orca/pull/30033)）
- 显示the update screen instead of native screens when the desktop has no page（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29956](https://github.com/stablyai/orca/pull/29956)）
- 允许Markdown refresh during desktop tab snapshots（[@nwparker](https://github.com/nwparker)，[#30040](https://github.com/stablyai/orca/pull/30040)）
- Draw the host Accounts screen from the desktop's page（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30020](https://github.com/stablyai/orca/pull/30020)）
- Ask which desktop to open Tasks on when several are connected（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30048](https://github.com/stablyai/orca/pull/30048)）
- 显示which desktop the mobile Tasks screen is for（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30105](https://github.com/stablyai/orca/pull/30105)）
- A compact phone queue: shorter header, a capped scrolling list, and an editor that fits the card（[@brennanb2025](https://github.com/brennanb2025)，[#30016](https://github.com/stablyai/orca/pull/30016)）
- Draw chat tool runs the way desktop does（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30135](https://github.com/stablyai/orca/pull/30135)）
- Render Source Control on the phone for large branches（[@nwparker](https://github.com/nwparker)，[#30215](https://github.com/stablyai/orca/pull/30215)）
- A session resumed from the phone's history shows its conversation before the first new turn (#10923)（[@nwparker](https://github.com/nwparker)，[#30283](https://github.com/stablyai/orca/pull/30283)）
- Break the transport and terminal-document import cycles, and gate cycles after mobile's install（[@nwparker](https://github.com/nwparker)，[#30290](https://github.com/stablyai/orca/pull/30290)）
- Put the session tabs in the top bar on a landscape phone（[@brennanb2025](https://github.com/brennanb2025)，[#29070](https://github.com/stablyai/orca/pull/29070)）

#### 工作区、侧栏与标签 {#v1-4-230-workspaces-sidebar-tabs}

> Protect same-path workspaces on different machines, explain cross-host actions, keep shortcuts on the focused split, and make notices and tab previews steadier.

- Main produces per-workspace activity facts, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29980](https://github.com/stablyai/orca/pull/29980)）
- 停止the notice stack flickering under a resting mouse, and fit the force-delete button to its notice（[@brennanb2025](https://github.com/brennanb2025)，[#29878](https://github.com/stablyai/orca/pull/29878)）
- ResolveOwner refuses folder and project-group twins instead of guessing this computer（[@nwparker](https://github.com/nwparker)，[#30009](https://github.com/stablyai/orca/pull/30009)）
- Main publishes desktop focus, pins, project and host order, and SSH/WSL host state, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30018](https://github.com/stablyai/orca/pull/30018)）
- Main keeps one live set of paired-server rows, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30027](https://github.com/stablyai/orca/pull/30027)）
- Main produces per-workspace PR facts, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30026](https://github.com/stablyai/orca/pull/30026)）
- Main keeps a registry of workspace creations in progress, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30021](https://github.com/stablyai/orca/pull/30021)）
- Ui.setCollapsed changes one section's collapse without undoing another device（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30044](https://github.com/stablyai/orca/pull/30044)）
- Say so when a project cannot join a group on another host（[@nwparker](https://github.com/nwparker)，[#30127](https://github.com/stablyai/orca/pull/30127)）
- Draw a project group once when two hosts publish it under one id（[@nwparker](https://github.com/nwparker)，[#30128](https://github.com/stablyai/orca/pull/30128)）
- A host-scoped purge leaves a surviving twin's tabs and edits alone（[@nwparker](https://github.com/nwparker)，[#30030](https://github.com/stablyai/orca/pull/30030)）
- Destructive host callers refuse an ambiguous owner instead of reading it as local（[@nwparker](https://github.com/nwparker)，[#30035](https://github.com/stablyai/orca/pull/30035)）
- Fold getExplicitRuntimeEnvironmentIdForWorktree callers into resolveOwner（[@nwparker](https://github.com/nwparker)，[#30059](https://github.com/stablyai/orca/pull/30059)）
- Confirm before sleeping a workspace that another host's copy shares（[@nwparker](https://github.com/nwparker)，[#30047](https://github.com/stablyai/orca/pull/30047)）
- Shrink twin-removal teardown to the attributed close actions（[@nwparker](https://github.com/nwparker)，[#30060](https://github.com/stablyai/orca/pull/30060)）
- Tighten the host-identity stack（[@nwparker](https://github.com/nwparker)，[#30124](https://github.com/stablyai/orca/pull/30124)）
- 停止CLI-created worktrees flashing into a filtered sidebar（[@nwparker](https://github.com/nwparker)，[#30194](https://github.com/stablyai/orca/pull/30194)）
- Say a Linear task-status skip was for a multi-host workspace（[@nwparker](https://github.com/nwparker)，[#30243](https://github.com/stablyai/orca/pull/30243)）
- Apply Quick Command shortcuts and pane actions to the focused split（[@AmethystLiang](https://github.com/AmethystLiang)，[#30258](https://github.com/stablyai/orca/pull/30258)）
- 显示when a paired server’s access is revoked or an update is required（[@nwparker](https://github.com/nwparker)，[#30280](https://github.com/stablyai/orca/pull/30280)）
- 等待for the full hover delay before showing each tab preview（[@AmethystLiang](https://github.com/AmethystLiang)，[#30388](https://github.com/stablyai/orca/pull/30388)）

#### Editor, files & Markdown {#v1-4-230-editor-files-markdown}

> Reveal files from their header menu and run notebook cells only when their workspace belongs to this computer.

- Reveal a file in Finder from its header menu（[@nwparker](https://github.com/nwparker)，[#30129](https://github.com/stablyai/orca/pull/30129)）
- Run cells only when the resolved owner is this computer（[@nwparker](https://github.com/nwparker)，[#30187](https://github.com/stablyai/orca/pull/30187)）

#### 浏览器 {#v1-4-230-browser}

> 打开：hosting-provider websites from Cmd/Ctrl+J and clean up browser tabs on hosts without a browser engine.

- 允许Cmd+J open hosting-provider domains like github.io（[@AmethystLiang](https://github.com/AmethystLiang)，[#29989](https://github.com/stablyai/orca/pull/29989)）
- A client-hosted ghost tab closes on a host with no browser engine（[@nwparker](https://github.com/nwparker)，[#30119](https://github.com/stablyai/orca/pull/30119)）

#### Performance & reliability {#v1-4-230-performance-reliability}

> Retry failed shell PATH checks and speed up development typechecking with a pinned Bun dependency.

- Retry the shell PATH check and fall back when the shell cannot launch（[@nwparker](https://github.com/nwparker)，[#30204](https://github.com/stablyai/orca/pull/30204)）
- 钉住Bun as a devDependency and typecheck with it（[@nwparker](https://github.com/nwparker)，[#30149](https://github.com/stablyai/orca/pull/30149)）

#### 测试、CI 与维护 {#v1-4-230-tests-ci-maintenance}

> regression coverage, dependency updates and internal cleanup support the changes above. Work on host-owned layouts and sidebar state remains behind disabled build switches覆盖更广。

- Brand host-scoped worktree and repo keys for new code（[@nwparker](https://github.com/nwparker)，[#29990](https://github.com/stablyai/orca/pull/29990)）
- Agree with main on main-made terminal tabs and sleeping-agent records (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29967](https://github.com/stablyai/orca/pull/29967)）
- Agree with main on first-group ids, tab order and the preview flag (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29987](https://github.com/stablyai/orca/pull/29987)）
- Record chat tab opens and closes in main (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30019](https://github.com/stablyai/orca/pull/30019)）
- Record the chat pane the window picks in main (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30036](https://github.com/stablyai/orca/pull/30036)）
- 打开into the window's emptied pane beside a split branch in one layout command (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30039](https://github.com/stablyai/orca/pull/30039)）
- Write no false preview flag on a new or promoted tab (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30041](https://github.com/stablyai/orca/pull/30041)）
- Record simulator tab opens and closes in main (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30034](https://github.com/stablyai/orca/pull/30034)）
- Put main's sidebar inputs behind the ORCA_SIDEBAR_INPUTS dark build switch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30050](https://github.com/stablyai/orca/pull/30050)）
- Main serves workspace icons as small data URLs for the phone (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30046](https://github.com/stablyai/orca/pull/30046)）
- Floating editor files keep one id from open (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30109](https://github.com/stablyai/orca/pull/30109)）
- Main keeps the list's time rules on one clock, checked against the window (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30104](https://github.com/stablyai/orca/pull/30104)）
- Main's layout Loader keeps one pane per terminal on restore (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30110](https://github.com/stablyai/orca/pull/30110)）
- Main records a Quick Command tab's label when the tab is created (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30112](https://github.com/stablyai/orca/pull/30112)）
- Save-divergence detector: skip empty workspaces, see dropped tab-bar entries and kept pane trees (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30125](https://github.com/stablyai/orca/pull/30125)）
- A background agent tab keeps its live title when another tab opens (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30131](https://github.com/stablyai/orca/pull/30131)）
- Dark phone feed of the sidebar inputs (sidebarInputs.read)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30161](https://github.com/stablyai/orca/pull/30161)）
- Pane titles stay layout: the window stops writing tab names as pane titles, and main loads them as the window does (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30136](https://github.com/stablyai/orca/pull/30136)）
- Main's temporal owner reads the catalog the way the window does (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30166](https://github.com/stablyai/orca/pull/30166)）
- Main produces this host's workspace rows, checked against the window (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30184](https://github.com/stablyai/orca/pull/30184)）
- One placement helper for drawn tab opens (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30174](https://github.com/stablyai/orca/pull/30174)）
- Main drops the layout of workspaces the catalog no longer validates (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30177](https://github.com/stablyai/orca/pull/30177)）
- Reopening a file in its open tab sends the main process the changed file record (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30197](https://github.com/stablyai/orca/pull/30197)）
- Main repairs a terminal stored in two panes once at startup (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30178](https://github.com/stablyai/orca/pull/30178)）
- Main records when a workspace's default tabs were applied (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30176](https://github.com/stablyai/orca/pull/30176)）
- Main keeps editor tabs under owned ids and in-place re-owns in step (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30206](https://github.com/stablyai/orca/pull/30206)）
- Refuse a layout change on a workspace a WSL move has paused (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30198](https://github.com/stablyai/orca/pull/30198)）
- Main routes folders by the window's host rule and never stops layout frames (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30201](https://github.com/stablyai/orca/pull/30201)）
- Phone and old-client tab lists keep editor tabs under owned ids (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30216](https://github.com/stablyai/orca/pull/30216)）
- One comparison-only worktreeIdentityKey replaces three key wrappers（[@nwparker](https://github.com/nwparker)，[#30217](https://github.com/stablyai/orca/pull/30217)）
- One worktree path equality; the ipc copy folded WSL ext4 tails（[@nwparker](https://github.com/nwparker)，[#30227](https://github.com/stablyai/orca/pull/30227)）
- The host that owns a workspace stamps its Recent and Smart keys (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30235](https://github.com/stablyai/orca/pull/30235)）
- After a restart, the host clears sort tiers nothing backs any more (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30259](https://github.com/stablyai/orca/pull/30259)）
- 去掉the runtimeWorktreeIdsEqual alias; name the WSL hook relay gate for what it gates（[@nwparker](https://github.com/nwparker)，[#30264](https://github.com/stablyai/orca/pull/30264)）
- Main routes a project registered on two machines to the same owner the window saves to (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30196](https://github.com/stablyai/orca/pull/30196)）
- Window saves stop carrying tab and pane layout; main keeps its own (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30282](https://github.com/stablyai/orca/pull/30282)）
- The window's layout stream reconnects after a drop; a retried quit still sends resume records (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30380](https://github.com/stablyai/orca/pull/30380)）
- Only the tabs the window just changed wait for main's answer; the window-wide layout hold goes (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30384](https://github.com/stablyai/orca/pull/30384)）
- Sort Recent and Smart by the owning host's stamps, hold order under the pointer (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30284](https://github.com/stablyai/orca/pull/30284)）
- Renderer hydration cutoffs read main's status retention window（[@nwparker](https://github.com/nwparker)，[#30248](https://github.com/stablyai/orca/pull/30248)）
- One isRemoteExecutionHostPtyId, on prefix semantics（[@nwparker](https://github.com/nwparker)，[#30232](https://github.com/stablyai/orca/pull/30232)）
- 去掉remote-pty checks the shared predicate already covers（[@nwparker](https://github.com/nwparker)，[#30256](https://github.com/stablyai/orca/pull/30256)）
- One isLocalExecutionHost in shared（[@nwparker](https://github.com/nwparker)，[#30241](https://github.com/stablyai/orca/pull/30241)）
- 导入orcad helpers from their owning modules; delete the orcad-runtime-lifecycle re-export shim（[@nwparker](https://github.com/nwparker)，[#30265](https://github.com/stablyai/orca/pull/30265)）
- 移动runtime/relay to runtime/mobile-cloud-relay（[@nwparker](https://github.com/nwparker)，[#30274](https://github.com/stablyai/orca/pull/30274)）
- 导入mobile-cloud-relay and browser-host helpers from their owning modules（[@nwparker](https://github.com/nwparker)，[#30279](https://github.com/stablyai/orca/pull/30279)）
- SSH pane terminals and local-to-SSH tab moves reach main directly (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30281](https://github.com/stablyai/orca/pull/30281)）
- 导入system-ssh and ssh -G modules directly; delete the ssh-system-fallback re-export shim（[@nwparker](https://github.com/nwparker)，[#30255](https://github.com/stablyai/orca/pull/30255)）
- Fence the legacy relay in ssh/legacy-relay/; live deploy primitives drop the relay name（[@nwparker](https://github.com/nwparker)，[#30292](https://github.com/stablyai/orca/pull/30292)）
- 移动orcad activation into src/main/managed-server/activation/（[@nwparker](https://github.com/nwparker)，[#30320](https://github.com/stablyai/orca/pull/30320)）
- 移动port forwarding and hostile-host test harnesses into their own folders（[@nwparker](https://github.com/nwparker)，[#30277](https://github.com/stablyai/orca/pull/30277)）
- 移动the managed server's install and deploy code into src/main/managed-server/install/（[@nwparker](https://github.com/nwparker)，[#30335](https://github.com/stablyai/orca/pull/30335)）
- 移动the managed server's lifecycle into src/main/managed-server/lifecycle/（[@nwparker](https://github.com/nwparker)，[#30343](https://github.com/stablyai/orca/pull/30343)）
- 移动host state into src/main/managed-server/host-state/（[@nwparker](https://github.com/nwparker)，[#30347](https://github.com/stablyai/orca/pull/30347)）
- Group system-ssh transport, ssh config and remote exec into their own folders（[@nwparker](https://github.com/nwparker)，[#30355](https://github.com/stablyai/orca/pull/30355)）
- Group SSH and runtime-environment IPC handlers into ipc/ssh/ and ipc/runtime-environments/（[@nwparker](https://github.com/nwparker)，[#30362](https://github.com/stablyai/orca/pull/30362)）
- 导入ipc helpers from their owning modules, not re-export shims（[@nwparker](https://github.com/nwparker)，[#30369](https://github.com/stablyai/orca/pull/30369)）
- 导入renderer runtime, shared remote-runtime and orcad helpers from their owning modules（[@nwparker](https://github.com/nwparker)，[#30370](https://github.com/stablyai/orca/pull/30370)）
- 导入runtime helpers from their owning modules, not re-export shims（[@nwparker](https://github.com/nwparker)，[#30373](https://github.com/stablyai/orca/pull/30373)）
- 导入worktree, watcher and runtime-environment helpers from their owning modules（[@nwparker](https://github.com/nwparker)，[#30375](https://github.com/stablyai/orca/pull/30375)）
- 发送a browser tab's window times to main with its open (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29988](https://github.com/stablyai/orca/pull/29988)）
- 移动runtime/browser-host-* into runtime/browser-host/（[@nwparker](https://github.com/nwparker)，[#30275](https://github.com/stablyai/orca/pull/30275)）
- The common-dir check uses areWorktreePathsEqual（[@nwparker](https://github.com/nwparker)，[#30263](https://github.com/stablyai/orca/pull/30263)）
- Every build is the OTA shell; drop the native/OTA build switch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29969](https://github.com/stablyai/orca/pull/29969)）
- Delete native screens the OTA shell no longer reaches（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29979](https://github.com/stablyai/orca/pull/29979)）
- Name the vm transcript and mobile pending-write caps for what they count（[@nwparker](https://github.com/nwparker)，[#30251](https://github.com/stablyai/orca/pull/30251)）
- Host-twin fixture and twin isolation suite for destructive and selection actions（[@nwparker](https://github.com/nwparker)，[#29991](https://github.com/stablyai/orca/pull/29991)）
- Test that main and the window agree on a worktree identity rekey (tests only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30005](https://github.com/stablyai/orca/pull/30005)）
- Read isStructuredTab from the shared module the newest release defines it in（[@brennanb2025](https://github.com/brennanb2025)，[#30000](https://github.com/stablyai/orca/pull/30000)）
- 打开and close 结构化聊天 tabs with an isolated Claude stand-in（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30011](https://github.com/stablyai/orca/pull/30011)）
- Ratchet importers of the deprecated runtime-owner resolvers（[@nwparker](https://github.com/nwparker)，[#30002](https://github.com/stablyai/orca/pull/30002)）
- 修复a timing-dependent hang in the PTY launch race test (CI only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30132](https://github.com/stablyai/orca/pull/30132)）
- 更新vulnerable dependencies and prune stale overrides（[@nwparker](https://github.com/nwparker)，[#30143](https://github.com/stablyai/orca/pull/30143)）
- Make the hidden split-pane exit test exit cleanly (test only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30162](https://github.com/stablyai/orca/pull/30162)）
- 等待for git status before the discard confirmation test acts (test only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30165](https://github.com/stablyai/orca/pull/30165)）
- 减小lint dependencies with Oxlint（[@nwparker](https://github.com/nwparker)，[#30180](https://github.com/stablyai/orca/pull/30180)）
- 钉住the CocoaPods installer used by iOS releases（[@nwparker](https://github.com/nwparker)，[#30181](https://github.com/stablyai/orca/pull/30181)）
- Guard: older sessions' moved editor tabs get the right workspace id (tests only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30172](https://github.com/stablyai/orca/pull/30172)）
- Lock routine React Doctor and Knip execution（[@nwparker](https://github.com/nwparker)，[#30183](https://github.com/stablyai/orca/pull/30183)）
- 移除unused desktop and mobile declarations（[@nwparker](https://github.com/nwparker)，[#30182](https://github.com/stablyai/orca/pull/30182)）
- Ship the locked skills installer instead of executing npx（[@nwparker](https://github.com/nwparker)，[#30185](https://github.com/stablyai/orca/pull/30185)）
- Simplify CocoaPods pin checks by reusing existing Ruby CI（[@nwparker](https://github.com/nwparker)，[#30208](https://github.com/stablyai/orca/pull/30208)）
- Start the managed-SSH lane for remote product changes no route names（[@nwparker](https://github.com/nwparker)，[#30210](https://github.com/stablyai/orca/pull/30210)）
- Revert bundled skills installer; restore pinned skills@1.7.2（[@nwparker](https://github.com/nwparker)，[#30207](https://github.com/stablyai/orca/pull/30207)）
- Fail when Electron and orcad wire the runtime differently without a reason（[@nwparker](https://github.com/nwparker)，[#30212](https://github.com/stablyai/orca/pull/30212)）
- Delete the rollout-flag module nothing reads（[@nwparker](https://github.com/nwparker)，[#30211](https://github.com/stablyai/orca/pull/30211)）
- Delete the never-served TLS branch of the LAN WebSocket server（[@nwparker](https://github.com/nwparker)，[#30220](https://github.com/stablyai/orca/pull/30220)）
- Freeze the clock in the explicit-binary timeout test（[@nwparker](https://github.com/nwparker)，[#30221](https://github.com/stablyai/orca/pull/30221)）
- Delete unimported SSH, renderer and orchestration modules（[@nwparker](https://github.com/nwparker)，[#30214](https://github.com/stablyai/orca/pull/30214)）
- ORCA_FEATURE_REMOTE_AGENT_HOOKS now only gates the WSL hook relay（[@nwparker](https://github.com/nwparker)，[#30223](https://github.com/stablyai/orca/pull/30223)）
- Fail when orca serve's serve-selection entry or its chunks stay packed (#27404 guard)（[@nwparker](https://github.com/nwparker)，[#30228](https://github.com/stablyai/orca/pull/30228)）
- Fail when CI config, workflows or e2e code name a src/ file that no longer exists（[@nwparker](https://github.com/nwparker)，[#30224](https://github.com/stablyai/orca/pull/30224)）
- Orca serve's command line makes orcad serve the web client (#30120 regression)（[@nwparker](https://github.com/nwparker)，[#30222](https://github.com/stablyai/orca/pull/30222)）
- Start the managed-SSH lane for every helper only its specs import（[@nwparker](https://github.com/nwparker)，[#30233](https://github.com/stablyai/orca/pull/30233)）
- Native-ignore watcher test waits on delivered events, not a fixed sleep（[@nwparker](https://github.com/nwparker)，[#30236](https://github.com/stablyai/orca/pull/30236)）
- Start the remote host lanes and cross-version job for the transport code they execute（[@nwparker](https://github.com/nwparker)，[#30239](https://github.com/stablyai/orca/pull/30239)）
- Windows CLI matrix convert cell uses the convert helper that exists（[@nwparker](https://github.com/nwparker)，[#30231](https://github.com/stablyai/orca/pull/30231)）
- 钉住the 12 hand-kept error-code lists to their callers' policy（[@nwparker](https://github.com/nwparker)，[#30246](https://github.com/stablyai/orca/pull/30246)）
- Path-literal check scans live gate references; historical gate commands move to currentCommand（[@nwparker](https://github.com/nwparker)，[#30252](https://github.com/stablyai/orca/pull/30252)）
- ComposeWorktreeId plus a ratchet on hand-built worktree ids（[@nwparker](https://github.com/nwparker)，[#30238](https://github.com/stablyai/orca/pull/30238)）
- Resolve macOS tmpdir realpath in create-intent and clone tests（[@nwparker](https://github.com/nwparker)，[#30268](https://github.com/stablyai/orca/pull/30268)）
- Tighten the round-2 parity, serve and watcher tests（[@nwparker](https://github.com/nwparker)，[#30267](https://github.com/stablyai/orca/pull/30267)）
- Compatibility folders name their entry modules instead of an index barrel（[@nwparker](https://github.com/nwparker)，[#30269](https://github.com/stablyai/orca/pull/30269)）
- Ratchet type errors under tests/ so a broken spec import can't land unnoticed（[@nwparker](https://github.com/nwparker)，[#30286](https://github.com/stablyai/orca/pull/30286)）
- Ratchet the legacy relay fence (importers of ssh/legacy-relay/ and COMPAT seams)（[@nwparker](https://github.com/nwparker)，[#30317](https://github.com/stablyai/orca/pull/30317)）
- Format the resume and transcript files main left unformatted（[@brennanb2025](https://github.com/brennanb2025)，[#30137](https://github.com/stablyai/orca/pull/30137)）

### 新贡献者 {#v1-4-230-contributors}

- [@zhangxaochen](https://github.com/zhangxaochen) 首次贡献于 [#30033](https://github.com/stablyai/orca/pull/30033)
- [@maxmilian](https://github.com/maxmilian) 首次贡献于 [#30157](https://github.com/stablyai/orca/pull/30157)

**完整变更对照：** [v1.4.229...v1.4.230](https://github.com/stablyai/orca/compare/v1.4.229...v1.4.230)
## v1.4.229 实验性 Native Chat 可逐轮审查编辑，共享技能支持更多 Agent {#v1-4-229}

2026年10月17日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.229)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-229-short}

- **实验性 Native Chat：** 可在对话内逐轮审查编辑、展开图表平移缩放、一键分享聊天视觉内容，并查看 Claude 目标与 Codex 上下文用量。键盘回答、未读分隔线与选中复制让长对话更易浏览。
- **共享技能：** 共享技能安装现支持额外 20 个 Agent，WSL 发现范围更广，并为 Kiro、Qoder、CodeBuddy 等工具提供正确安装位置。
- **手机端：** 工作区筛选、分组与排序跟随桌面共享选择。长按查看关联问题与笔记，可操作服务器工作区与浏览器页面，或在新终端对话中继续支持的聊天。
- **SSH 与远程终端：** 重连修复保留分屏、粘贴顺序与托管服务器项目分组。休眠 Agent 会恢复其对话，移除一台机器的项目不会影响同路径的另一台。
- **工作区与日常打磨：** 用 Cmd/Ctrl+J 打开网站，创建 worktree 时观看检出进度，清理工作区前有明确确认再停止正在运行的 Agent。
- **Jira 规划：** 在问题列表与看板间切换，聚焦当前冲刺，复用已保存的 JQL 与 Jira 收藏，从桌面或手机启动工作区。Agent 也可通过 Orca CLI 读取与更新 Jira 工单。

### 已知问题 {#v1-4-229-known-issues}

**实验性 Native Chat：** 依赖远程主机的功能仅在该主机支持时可用。请与 Orca 一起更新主机以获取最新能力。

**SSH 主机上的 `orca` 命令：** 现有主机保留已保存的 Orca CLI 控制偏好。要让那里的 Agent 管理工作区或控制桌面浏览器，请在 Settings → SSH Hosts → 编辑主机 → Advanced Connection 中打开 **Allow this host’s orca CLI to control Orca**。

---

### 产品体验 {#v1-4-229-product}

#### 自动化 {#v1-4-229-automations}

> Create and edit automations on SSH projects with older paired servers, and keep scheduled work attached to the right host.

- 停止：offering Blank Terminal in agent-only pickers (automations)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26961](https://github.com/stablyai/orca/pull/26961)）
- Start server-run automations' agents through the launch executor（[@brennanb2025](https://github.com/brennanb2025)，[#26820](https://github.com/stablyai/orca/pull/26820)）
- 显示：valid multi-day automation schedules（[@nwparker](https://github.com/nwparker)，[#26850](https://github.com/stablyai/orca/pull/26850)）
- Automation runs, CLI tabs and folder-workspace browser tabs follow the owner（[@OrcaWin](https://github.com/OrcaWin)，[#27246](https://github.com/stablyai/orca/pull/27246)）
- Find folder-workspace targets on the Automations page（[@OrcaWin](https://github.com/OrcaWin)，[#27416](https://github.com/stablyai/orca/pull/27416)）
- 停止：offering Resume workspace for runs that never started an agent (STA-10103)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28179](https://github.com/stablyai/orca/pull/28179)）
- Format the jobs-file limit consistently（[@nwparker](https://github.com/nwparker)，[#28220](https://github.com/stablyai/orca/pull/28220)）
- 移除：Hermes automation support（[@AmethystLiang](https://github.com/AmethystLiang)，[#28519](https://github.com/stablyai/orca/pull/28519)）
- Sleep a finished run's terminal instead of closing it（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28838](https://github.com/stablyai/orca/pull/28838)）
- Run Now matches the managed server's setup after an SSH host moves（[@nwparker](https://github.com/nwparker)，[#29394](https://github.com/stablyai/orca/pull/29394)）
- Page automations runs so a paired server's history fits its replies（[@nwparker](https://github.com/nwparker)，[#29446](https://github.com/stablyai/orca/pull/29446)）
- Automations create/edit for an SSH project work against an older paired server（[@nwparker](https://github.com/nwparker)，[#29924](https://github.com/stablyai/orca/pull/29924)）

#### Native chat (experimental) {#v1-4-229-native-chat-experimental-}

> Review edits inline, expand diagrams, share visuals, follow Claude goals and Codex context usage, and keep long conversations easier to read and continue.

- Re-land Claude per-account folders (#24434, #26405) with the upgrade and proxy fixes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26801](https://github.com/stablyai/orca/pull/26801)）
- Save a new chat's first message during create（[@brennanb2025](https://github.com/brennanb2025)，[#26332](https://github.com/stablyai/orca/pull/26332)）
- A new Pi chat names the model it will run on its first frame（[@brennanb2025](https://github.com/brennanb2025)，[#26821](https://github.com/stablyai/orca/pull/26821)）
- Start orchestration workers as Native Chats for every agent that has Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#26776](https://github.com/stablyai/orca/pull/26776)）
- Highlight code blocks and shell commands（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26343](https://github.com/stablyai/orca/pull/26343)）
- 打开：a chat visual in its own tab instead of the sidebar（[@brennanb2025](https://github.com/brennanb2025)，[#26728](https://github.com/stablyai/orca/pull/26728)）
- 保持：Chat UI users with a Terminal default on the terminal, with a chat mode switch in the upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#26915](https://github.com/stablyai/orca/pull/26915)）
- 允许：a Codex chat stop a command it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#26780](https://github.com/stablyai/orca/pull/26780)）
- 新增："Copy sign-in link instead" for Claude accounts (STA-9912)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26990](https://github.com/stablyai/orca/pull/26990)）
- Every new-chat request opens its own chat（[@brennanb2025](https://github.com/brennanb2025)，[#26782](https://github.com/stablyai/orca/pull/26782)）
- Native chat: identify a paired device by its device id, never its credential（[@brennanb2025](https://github.com/brennanb2025)，[#26777](https://github.com/stablyai/orca/pull/26777)）
- Match model picker type to the options menu（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26349](https://github.com/stablyai/orca/pull/26349)）
- Every agent reports its learned default model once, when a chat starts（[@brennanb2025](https://github.com/brennanb2025)，[#26982](https://github.com/stablyai/orca/pull/26982)）
- Floating-workspace chats of every native-chat agent keep links in the folder they started in（[@brennanb2025](https://github.com/brennanb2025)，[#26981](https://github.com/stablyai/orca/pull/26981)）
- 保持：select-all and copy in a chat from reaching the terminal underneath（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26831](https://github.com/stablyai/orca/pull/26831)）
- Accept sends through their own receipt（[@brennanb2025](https://github.com/brennanb2025)，[#26672](https://github.com/stablyai/orca/pull/26672)）
- Edit a queued message in place, even while a question is open（[@brennanb2025](https://github.com/brennanb2025)，[#26886](https://github.com/stablyai/orca/pull/26886)）
- Settle a reply cut off by a server restart（[@brennanb2025](https://github.com/brennanb2025)，[#26460](https://github.com/stablyai/orca/pull/26460)）
- 隐藏：agent message controls while the turn runs（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26404](https://github.com/stablyai/orca/pull/26404)）
- 去掉：the redundant 'Waiting for your answer' line from queued cards（[@brennanb2025](https://github.com/brennanb2025)，[#27073](https://github.com/stablyai/orca/pull/27073)）
- 显示：attached files as filename pills in the composer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26409](https://github.com/stablyai/orca/pull/26409)）
- Offer Codex Ultrafast as a speed choice（[@brennanb2025](https://github.com/brennanb2025)，[#26962](https://github.com/stablyai/orca/pull/26962)）
- 允许：a Codex chat stop a sub-agent from the background-tasks strip（[@brennanb2025](https://github.com/brennanb2025)，[#27026](https://github.com/stablyai/orca/pull/27026)）
- Lazy WSL tier for Claude, Grok and omp lookup by id（[@OrcaWin](https://github.com/OrcaWin)，[#27082](https://github.com/stablyai/orca/pull/27082)）
- 恢复：a WSL session only in its own namespace, with a Linux Pi path（[@OrcaWin](https://github.com/OrcaWin)，[#27092](https://github.com/stablyai/orca/pull/27092)）
- 回收：the pending image bubble when the CLI records its path as text（[@OrcaWin](https://github.com/OrcaWin)，[#27095](https://github.com/stablyai/orca/pull/27095)）
- 回收：a first send's echo in transcript time, not this client's（[@OrcaWin](https://github.com/OrcaWin)，[#27099](https://github.com/stablyai/orca/pull/27099)）
- 减小：memory used to count Codex usage and avoid partial totals（[@nwparker](https://github.com/nwparker)，[#26966](https://github.com/stablyai/orca/pull/26966)）
- 更新：Claude usage without rereading the whole conversation（[@nwparker](https://github.com/nwparker)，[#26967](https://github.com/stablyai/orca/pull/26967)）
- 给予：each animation a reduced-motion state（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26276](https://github.com/stablyai/orca/pull/26276)）
- 允许：a Grok chat list and stop the commands it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27022](https://github.com/stablyai/orca/pull/27022)）
- 保留：running subagent rows in long chats（[@brennanb2025](https://github.com/brennanb2025)，[#26798](https://github.com/stablyai/orca/pull/26798)）
- Honor inactive Claude account retry deadlines（[@nwparker](https://github.com/nwparker)，[#26936](https://github.com/stablyai/orca/pull/26936)）
- Read ZCode conversations in their recorded order（[@nwparker](https://github.com/nwparker)，[#27142](https://github.com/stablyai/orca/pull/27142)）
- Register a short PostCompact hook command（[@vampik33](https://github.com/vampik33)，[#25211](https://github.com/stablyai/orca/pull/25211)）
- 修复：Codex usage bypassing configured proxy routing（[@nwparker](https://github.com/nwparker)，[#26942](https://github.com/stablyai/orca/pull/26942)）
- A new chat's model and effort pickers match their first frame before the agent starts（[@brennanb2025](https://github.com/brennanb2025)，[#27031](https://github.com/stablyai/orca/pull/27031)）
- A closed chat tab stays closed instead of coming back on the right（[@brennanb2025](https://github.com/brennanb2025)，[#27205](https://github.com/stablyai/orca/pull/27205)）
- Put Continue in the card that says the reply stopped（[@brennanb2025](https://github.com/brennanb2025)，[#27097](https://github.com/stablyai/orca/pull/27097)）
- One shared subagent tracker for Claude, Codex and Grok chat rows（[@brennanb2025](https://github.com/brennanb2025)，[#27228](https://github.com/stablyai/orca/pull/27228)）
- 允许：managed SSH Claude chats load the agent SDK（[@brennanb2025](https://github.com/brennanb2025)，[#26450](https://github.com/stablyai/orca/pull/26450)）
- Offer resume after restart for chats whose only work was in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27167](https://github.com/stablyai/orca/pull/27167)）
- Copy in remote Orca Server Codex sessions reaches your clipboard（[@OrcaWin](https://github.com/OrcaWin)，[#27605](https://github.com/stablyai/orca/pull/27605)）
- 保持：diagram source mounted and retire reveal history（[@brennanb2025](https://github.com/brennanb2025)，[#26690](https://github.com/stablyai/orca/pull/26690)）
- 保持：SSH chat providers alive after the desktop disconnects（[@brennanb2025](https://github.com/brennanb2025)，[#26473](https://github.com/stablyai/orca/pull/26473)）
- Native chat: queued-message actions and question answers accept through their own receipt（[@brennanb2025](https://github.com/brennanb2025)，[#26988](https://github.com/stablyai/orca/pull/26988)）
- One set of rules for chat text size, colour, hover and focus（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26685](https://github.com/stablyai/orca/pull/26685)）
- Use quote icon for Add to chat（[@brennanb2025](https://github.com/brennanb2025)，[#27631](https://github.com/stablyai/orca/pull/27631)）
- Jump to messages without scrolling animation（[@AmethystLiang](https://github.com/AmethystLiang)，[#27612](https://github.com/stablyai/orca/pull/27612)）
- Native chat: every agent launches through one composed launch path（[@brennanb2025](https://github.com/brennanb2025)，[#27204](https://github.com/stablyai/orca/pull/27204)）
- Offer Resume in New Native Chat only while the tab's agent is running（[@brennanb2025](https://github.com/brennanb2025)，[#27520](https://github.com/stablyai/orca/pull/27520)）
- 显示：hook failure details in error cards（[@nwparker](https://github.com/nwparker)，[#27824](https://github.com/stablyai/orca/pull/27824)）
- Honor Chat UI setting for worktree agent creation（[@brennanb2025](https://github.com/brennanb2025)，[#27796](https://github.com/stablyai/orca/pull/27796)）
- 显示：turn edit diffs inline in Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#27758](https://github.com/stablyai/orca/pull/27758)）
- Terminal header button: Resume in New Native Chat replaces Show chat view（[@brennanb2025](https://github.com/brennanb2025)，[#27184](https://github.com/stablyai/orca/pull/27184)）
- Message rail lights a message sent while the agent was working（[@brennanb2025](https://github.com/brennanb2025)，[#27821](https://github.com/stablyai/orca/pull/27821)）
- Name orchestration worker chat tabs after their task title（[@brennanb2025](https://github.com/brennanb2025)，[#28045](https://github.com/stablyai/orca/pull/28045)）
- Wrap long lines in code blocks（[@brennanb2025](https://github.com/brennanb2025)，[#26130](https://github.com/stablyai/orca/pull/26130)）
- Start the Codex usage probe off the main thread so focus doesn't freeze the UI（[@OrcaWin](https://github.com/OrcaWin)，[#27707](https://github.com/stablyai/orca/pull/27707)）
- Native chat: read one saved row per subagent (part 1 of 2)（[@brennanb2025](https://github.com/brennanb2025)，[#27914](https://github.com/stablyai/orca/pull/27914)）
- Name the agent when it refuses a message（[@brennanb2025](https://github.com/brennanb2025)，[#27946](https://github.com/stablyai/orca/pull/27946)）
- Require Codex 0.136.0 for chats（[@brennanb2025](https://github.com/brennanb2025)，[#26684](https://github.com/stablyai/orca/pull/26684)）
- 移动：Chat UI's chat settings from Experimental to the Chat page（[@brennanb2025](https://github.com/brennanb2025)，[#28050](https://github.com/stablyai/orca/pull/28050)）
- Register the Windows statusLine so usage updates without Git Bash（[@OrcaWin](https://github.com/OrcaWin)，[#27710](https://github.com/stablyai/orca/pull/27710)）
- Session History shows OpenCode, Grok, OMP and Pi chats as chats and refuses a second terminal writer（[@brennanb2025](https://github.com/brennanb2025)，[#27183](https://github.com/stablyai/orca/pull/27183)）
- 移动：the start-refusal table out so Lint passes on main（[@brennanb2025](https://github.com/brennanb2025)，[#28083](https://github.com/stablyai/orca/pull/28083)）
- Each Claude/Codex chat gets its own permission mode（[@brennanb2025](https://github.com/brennanb2025)，[#26116](https://github.com/stablyai/orca/pull/26116)）
- Replace chat upgrade switch with primary Enable Now button（[@nwparker](https://github.com/nwparker)，[#28113](https://github.com/stablyai/orca/pull/28113)）
- Native chat tabs show their recorded provider, not one guessed from the title（[@brennanb2025](https://github.com/brennanb2025)，[#28082](https://github.com/stablyai/orca/pull/28082)）
- Host writes one saved row per subagent（[@brennanb2025](https://github.com/brennanb2025)，[#27947](https://github.com/stablyai/orca/pull/27947)）
- Make Enable Now the full-width action in the chat upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#28199](https://github.com/stablyai/orca/pull/28199)）
- Seed the chat permission default from Claude's and Codex's own arguments（[@brennanb2025](https://github.com/brennanb2025)，[#28100](https://github.com/stablyai/orca/pull/28100)）
- 移动：Permissions for new chats into the Chat page's Behavior section（[@brennanb2025](https://github.com/brennanb2025)，[#28212](https://github.com/stablyai/orca/pull/28212)）
- 修复：delayed agent launches such as sleep 30 && claude（[@nwparker](https://github.com/nwparker)，[#28205](https://github.com/stablyai/orca/pull/28205)）
- 显示：Codex model capacity failures as red agent status（[@nwparker](https://github.com/nwparker)，[#28231](https://github.com/stablyai/orca/pull/28231)）
- Record the Codex capacity capture's known replay divergence（[@OrcaWin](https://github.com/OrcaWin)，[#28286](https://github.com/stablyai/orca/pull/28286)）
- 去掉：the duplicate Codex capacity replay baseline entry（[@OrcaWin](https://github.com/OrcaWin)，[#28295](https://github.com/stablyai/orca/pull/28295)）
- 去掉：the duplicate Codex capacity replay entry（[@OrcaWin](https://github.com/OrcaWin)，[#28297](https://github.com/stablyai/orca/pull/28297)）
- 恢复：the single Codex capacity replay entry（[@OrcaWin](https://github.com/OrcaWin)，[#28301](https://github.com/stablyai/orca/pull/28301)）
- Expand mermaid diagrams into a pan and zoom viewer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#27715](https://github.com/stablyai/orca/pull/27715)）
- Load long chats on the phone by keeping every update within its limit（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28203](https://github.com/stablyai/orca/pull/28203)）
- Chats from before permission modes keep the mode they were running with（[@brennanb2025](https://github.com/brennanb2025)，[#28099](https://github.com/stablyai/orca/pull/28099)）
- 恢复：in New Native Chat for Grok and OMP terminal conversations（[@brennanb2025](https://github.com/brennanb2025)，[#28049](https://github.com/stablyai/orca/pull/28049)）
- 停止：is saved before it acts, and a late or repeated Stop does nothing（[@brennanb2025](https://github.com/brennanb2025)，[#27076](https://github.com/stablyai/orca/pull/27076)）
- 显示：context usage in Codex chats（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28084](https://github.com/stablyai/orca/pull/28084)）
- Slash-menu command names no longer look oversized（[@brennanb2025](https://github.com/brennanb2025)，[#28461](https://github.com/stablyai/orca/pull/28461)）
- Copy the Codex TOML parser into packaged Orca（[@nwparker](https://github.com/nwparker)，[#28416](https://github.com/stablyai/orca/pull/28416)）
- Combine model and options into one picker（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#27972](https://github.com/stablyai/orca/pull/27972)）
- Phone Stop reaches a message the agent hasn't answered; unreadable task list reports unconfirmed（[@brennanb2025](https://github.com/brennanb2025)，[#28243](https://github.com/stablyai/orca/pull/28243)）
- A Claude model that's gone switches to the list's default when you send（[@brennanb2025](https://github.com/brennanb2025)，[#27826](https://github.com/stablyai/orca/pull/27826)）
- Store a chat's permission mode on its own, so a model pick can't reset it（[@brennanb2025](https://github.com/brennanb2025)，[#28268](https://github.com/stablyai/orca/pull/28268)）
- Pass the clock to a recorded option pick（[@nwparker](https://github.com/nwparker)，[#28571](https://github.com/stablyai/orca/pull/28571)）
- 去掉：the duplicate now key left by crossing fixes（[@nwparker](https://github.com/nwparker)，[#28599](https://github.com/stablyai/orca/pull/28599)）
- Questions an agent sends as permission requests are never auto-answered（[@brennanb2025](https://github.com/brennanb2025)，[#28449](https://github.com/stablyai/orca/pull/28449)）
- 恢复：in New Native Chat for OpenCode（[@brennanb2025](https://github.com/brennanb2025)，[#28072](https://github.com/stablyai/orca/pull/28072)）
- Native chat: a message stopped before the agent got it reaches the agent with your next send（[@brennanb2025](https://github.com/brennanb2025)，[#27623](https://github.com/stablyai/orca/pull/27623)）
- Native chat: record which agent run wrote each journal item (1/5, rebuild of #26867)（[@brennanb2025](https://github.com/brennanb2025)，[#28092](https://github.com/stablyai/orca/pull/28092)）
- 恢复：in New Native Chat for Pi（[@brennanb2025](https://github.com/brennanb2025)，[#28080](https://github.com/stablyai/orca/pull/28080)）
- Share a chat visual from the chat（[@brennanb2025](https://github.com/brennanb2025)，[#28479](https://github.com/stablyai/orca/pull/28479)）
- 恢复：in New CLI for OpenCode and OMP chats（[@brennanb2025](https://github.com/brennanb2025)，[#28075](https://github.com/stablyai/orca/pull/28075)）
- 新增：a "New" line above unseen messages（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28333](https://github.com/stablyai/orca/pull/28333)）
- 发送：typing after a click to the chat's composer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28728](https://github.com/stablyai/orca/pull/28728)）
- Copy chat selections when Copy on Select is on（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28737](https://github.com/stablyai/orca/pull/28737)）
- Chat scratch folders expire after 30 days unused（[@brennanb2025](https://github.com/brennanb2025)，[#28394](https://github.com/stablyai/orca/pull/28394)）
- Native chat: one current-work projection for every host reader, death recorded first (2/5, rebuild of #26867)（[@brennanb2025](https://github.com/brennanb2025)，[#28103](https://github.com/stablyai/orca/pull/28103)）
- Use short effort label in the Native Chat model pill（[@AmethystLiang](https://github.com/AmethystLiang)，[#29029](https://github.com/stablyai/orca/pull/29029)）
- Recognize missing history before chat creation（[@brennanb2025](https://github.com/brennanb2025)，[#28261](https://github.com/stablyai/orca/pull/28261)）
- Focus the composer after a keyboard switch between chats（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29152](https://github.com/stablyai/orca/pull/29152)）
- 显示：and focus the field in pi text dialogs（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28895](https://github.com/stablyai/orca/pull/28895)）
- 显示：Claude's /goal in the goal banner（[@brennanb2025](https://github.com/brennanb2025)，[#28923](https://github.com/stablyai/orca/pull/28923)）
- Start OMP on cmd.exe when setup runs first（[@brennanb2025](https://github.com/brennanb2025)，[#29176](https://github.com/stablyai/orca/pull/29176)）
- 保持：Claude skills tagged as skills after the agent changes folder（[@brennanb2025](https://github.com/brennanb2025)，[#29030](https://github.com/stablyai/orca/pull/29030)）
- 恢复：large terminal conversations in a new Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#29056](https://github.com/stablyai/orca/pull/29056)）
- Chat agents can declare a managed runtime that a start runs but never installs（[@brennanb2025](https://github.com/brennanb2025)，[#28460](https://github.com/stablyai/orca/pull/28460)）
- 打开：a Native Chat copy in the CLI without waiting for History（[@brennanb2025](https://github.com/brennanb2025)，[#29126](https://github.com/stablyai/orca/pull/29126)）
- One queue header that becomes the pause row; drop the composer Resume and the send dialog（[@brennanb2025](https://github.com/brennanb2025)，[#28654](https://github.com/stablyai/orca/pull/28654)）
- 支持：arrow-key answers in chat question cards（[@brennanb2025](https://github.com/brennanb2025)，[#28865](https://github.com/stablyai/orca/pull/28865)）
- Paste clipboard images into a chat on a managed SSH host or paired server（[@nwparker](https://github.com/nwparker)，[#29278](https://github.com/stablyai/orca/pull/29278)）
- 修复：terminal daemon restart leaving older Codex conversations locked（[@nwparker](https://github.com/nwparker)，[#29216](https://github.com/stablyai/orca/pull/29216)）
- Chat agents can run with their own temp folder, cleared when they exit（[@brennanb2025](https://github.com/brennanb2025)，[#28462](https://github.com/stablyai/orca/pull/28462)）
- A reclamation primitive removes all but the kept managed runtime release（[@brennanb2025](https://github.com/brennanb2025)，[#28507](https://github.com/stablyai/orca/pull/28507)）
- Settle acknowledged messages after a paged reconnect（[@brennanb2025](https://github.com/brennanb2025)，[#28993](https://github.com/stablyai/orca/pull/28993)）
- Acting on one chat no longer waits on checks of every other chat（[@brennanb2025](https://github.com/brennanb2025)，[#26555](https://github.com/stablyai/orca/pull/26555)）
- Link a bare file name once the chat's folder has it（[@brennanb2025](https://github.com/brennanb2025)，[#28818](https://github.com/stablyai/orca/pull/28818)）
- 修复：keyboard focus when revealing a chat in another pane（[@brennanb2025](https://github.com/brennanb2025)，[#28987](https://github.com/stablyai/orca/pull/28987)）
- Save agent prompts whole, bounded by what a chat message carries（[@brennanb2025](https://github.com/brennanb2025)，[#24488](https://github.com/stablyai/orca/pull/24488)）
- A slash command that starts a turn shows one Worked-for bar（[@brennanb2025](https://github.com/brennanb2025)，[#29013](https://github.com/stablyai/orca/pull/29013)）
- 保持：the "New" line in place when a turn is expanded（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29230](https://github.com/stablyai/orca/pull/29230)）
- Native chat: one settlement transaction for everything an ended run left (4/5, rebuild of #26867)（[@brennanb2025](https://github.com/brennanb2025)，[#28111](https://github.com/stablyai/orca/pull/28111)）
- 启用：Claude plugin images and bounded terminal file transport（[@nwparker](https://github.com/nwparker)，[#28200](https://github.com/stablyai/orca/pull/28200)）
- 保持：idle Claude sessions selected during nested Codex work（[@nwparker](https://github.com/nwparker)，[#29386](https://github.com/stablyai/orca/pull/29386)）
- Never run a chat on an older host with more access than Ask for approval allows（[@nwparker](https://github.com/nwparker)，[#29442](https://github.com/stablyai/orca/pull/29442)）
- A transcript lookup miss creates no Codex directories（[@nwparker](https://github.com/nwparker)，[#29557](https://github.com/stablyai/orca/pull/29557)）
- 保持：saved visuals from before the chat-scratch rename（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29717](https://github.com/stablyai/orca/pull/29717)）
- Offer Claude's own / commands (like /goal) in a chat before Claude starts（[@brennanb2025](https://github.com/brennanb2025)，[#29026](https://github.com/stablyai/orca/pull/29026)）
- 停止：following the end when the reader scrolls over a visual（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29116](https://github.com/stablyai/orca/pull/29116)）
- Offer actions for what you right-click in chat（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28729](https://github.com/stablyai/orca/pull/28729)）
- 修复：extra terminal during background native-chat setup（[@AmethystLiang](https://github.com/AmethystLiang)，[#29810](https://github.com/stablyai/orca/pull/29810)）
- 等待：for agent readiness without blocking Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#27925](https://github.com/stablyai/orca/pull/27925)）
- 保持：Claude's /color, /doctor and /reload-plugins in the chat / menu（[@brennanb2025](https://github.com/brennanb2025)，[#29784](https://github.com/stablyai/orca/pull/29784)）
- Identify the owner when resume creation is refused（[@brennanb2025](https://github.com/brennanb2025)，[#29119](https://github.com/stablyai/orca/pull/29119)）
- 保持：pending chat decisions available outside loaded history（[@brennanb2025](https://github.com/brennanb2025)，[#29121](https://github.com/stablyai/orca/pull/29121)）
- Dictate into the composer when it lacks focus（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29855](https://github.com/stablyai/orca/pull/29855)）
- OMP, OpenCode and Grok chats follow their own permission mode（[@brennanb2025](https://github.com/brennanb2025)，[#29335](https://github.com/stablyai/orca/pull/29335)）
- Decide provider failures by kind, never by searching the payload（[@brennanb2025](https://github.com/brennanb2025)，[#29092](https://github.com/stablyai/orca/pull/29092)）
- A managed runtime installs only when asked, with progress and cancel（[@brennanb2025](https://github.com/brennanb2025)，[#29023](https://github.com/stablyai/orca/pull/29023)）
- A dot between the queue header's label and its count（[@brennanb2025](https://github.com/brennanb2025)，[#29268](https://github.com/stablyai/orca/pull/29268)）
- Hosts install a managed runtime over RPC, and mark agents whose program Orca provides（[@brennanb2025](https://github.com/brennanb2025)，[#29024](https://github.com/stablyai/orca/pull/29024)）
- The app follows a host's managed runtime install state, shared by every surface（[@brennanb2025](https://github.com/brennanb2025)，[#29048](https://github.com/stablyai/orca/pull/29048)）
- Verify the actual CLI conversation during resume（[@brennanb2025](https://github.com/brennanb2025)，[#29124](https://github.com/stablyai/orca/pull/29124)）
- Idle cleanup and commands read the helpers the agent reported, not the capped status store（[@brennanb2025](https://github.com/brennanb2025)，[#29905](https://github.com/stablyai/orca/pull/29905)）
- One install row shows and drives a managed runtime install, for Settings and chat（[@brennanb2025](https://github.com/brennanb2025)，[#29049](https://github.com/stablyai/orca/pull/29049)）

#### Agents, integrations & orchestration {#v1-4-229-agents-integrations-orchestration}

> Plan work in Jira with boards, saved filters and current-sprint views, find the right task, and keep agent launches and session status consistent across machines.

- 报告：Kiro agent status and list Kiro sessions in history（[@w-felipe360](https://github.com/w-felipe360)，[#26695](https://github.com/stablyai/orca/pull/26695)）
- 显示：the usage unit once in the status bar（[@AmethystLiang](https://github.com/AmethystLiang)，[#26869](https://github.com/stablyai/orca/pull/26869)）
- Start plain new-tab agent launches through the host's agent.launch（[@brennanb2025](https://github.com/brennanb2025)，[#26489](https://github.com/stablyai/orca/pull/26489)）
- One host-routed agent-detection entry point（[@OrcaWin](https://github.com/OrcaWin)，[#27054](https://github.com/stablyai/orca/pull/27054)）
- Route the first-work branch rename by the repo's execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27080](https://github.com/stablyai/orca/pull/27080)）
- A session dropped on a pane edge splits the pane in paired-runtime workspaces（[@OrcaWin](https://github.com/OrcaWin)，[#27102](https://github.com/stablyai/orca/pull/27102)）
- Throttle and background last-status.json writes（[@nwparker](https://github.com/nwparker)，[#26822](https://github.com/stablyai/orca/pull/26822)）
- An old Windows or unknown-platform host asks to update instead of answering its default list（[@OrcaWin](https://github.com/OrcaWin)，[#27164](https://github.com/stablyai/orca/pull/27164)）
- Exclude label groups from assignable labels（[@nwparker](https://github.com/nwparker)，[#26861](https://github.com/stablyai/orca/pull/26861)）
- 显示：DeepSeek icon for observed Build sessions（[@nwparker](https://github.com/nwparker)，[#26863](https://github.com/stablyai/orca/pull/26863)）
- Name Agent Dashboard column regions（[@nwparker](https://github.com/nwparker)，[#26865](https://github.com/stablyai/orca/pull/26865)）
- One agent inventory per host and execution context（[@OrcaWin](https://github.com/OrcaWin)，[#27225](https://github.com/stablyai/orca/pull/27225)）
- Review providers resolve the repo on its host（[@OrcaWin](https://github.com/OrcaWin)，[#27247](https://github.com/stablyai/orca/pull/27247)）
- A server's late account result stays with that server（[@OrcaWin](https://github.com/OrcaWin)，[#27262](https://github.com/stablyai/orca/pull/27262)）
- GitHub Projects boards read from the task page's source host（[@OrcaWin](https://github.com/OrcaWin)，[#27270](https://github.com/stablyai/orca/pull/27270)）
- 保持：Coding Plan credentials and quota tied to the selected account（[@nwparker](https://github.com/nwparker)，[#24674](https://github.com/stablyai/orca/pull/24674)）
- 打开：ZCode sign-in in the existing setup terminal（[@nwparker](https://github.com/nwparker)，[#27321](https://github.com/stablyai/orca/pull/27321)）
- 移除：a rejected GLM key when restore fails（[@parkavenue9639](https://github.com/parkavenue9639)，[#24964](https://github.com/stablyai/orca/pull/24964)）
- 停止：feature branches from borrowing unrelated PRs（[@nwparker](https://github.com/nwparker)，[#27332](https://github.com/stablyai/orca/pull/27332)）
- 避免：downloading unchanged paired-runtime session history（[@nwparker](https://github.com/nwparker)，[#27383](https://github.com/stablyai/orca/pull/27383)）
- 保持：nested models off parent panes（[@nwparker](https://github.com/nwparker)，[#26846](https://github.com/stablyai/orca/pull/26846)）
- Session History: resume folder workspace chats in their own folder（[@brennanb2025](https://github.com/brennanb2025)，[#27209](https://github.com/stablyai/orca/pull/27209)）
- Account switchers and CLI cards follow the focused repo's host（[@nwparker](https://github.com/nwparker)，[#27687](https://github.com/stablyai/orca/pull/27687)）
- Edit agent launch settings on the workspace host（[@brennanb2025](https://github.com/brennanb2025)，[#26479](https://github.com/stablyai/orca/pull/26479)）
- Launch agents in existing workspaces（[@brennanb2025](https://github.com/brennanb2025)，[#27794](https://github.com/stablyai/orca/pull/27794)）
- Register forward-slash Windows hook paths for Grok, Devin, ZCode and Antigravity（[@OrcaWin](https://github.com/OrcaWin)，[#27713](https://github.com/stablyai/orca/pull/27713)）
- After a restart, an agent tab asks the terminal host what is running, never "Couldn't confirm the agent started"（[@brennanb2025](https://github.com/brennanb2025)，[#28043](https://github.com/stablyai/orca/pull/28043)）
- Cap Cursor's Retry-After at 24h and share one Retry-After parser（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28406](https://github.com/stablyai/orca/pull/28406)）
- Host plans agent launches with the window's runtime rule and one runtime fact (C1)（[@brennanb2025](https://github.com/brennanb2025)，[#27692](https://github.com/stablyai/orca/pull/27692)）
- 停止：retried failed worker starts from piling up live agents（[@brennanb2025](https://github.com/brennanb2025)，[#27795](https://github.com/stablyai/orca/pull/27795)）
- 显示："Network issue" for any provider whose usage request fails on the network（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28415](https://github.com/stablyai/orca/pull/28415)）
- Usage requests answer authenticated-proxy challenges on a cold start（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28411](https://github.com/stablyai/orca/pull/28411)）
- 保留：open chat status when terminals close（[@brennanb2025](https://github.com/brennanb2025)，[#28188](https://github.com/stablyai/orca/pull/28188)）
- A focused WSL host shows and switches its distro's accounts（[@nwparker](https://github.com/nwparker)，[#28465](https://github.com/stablyai/orca/pull/28465)）
- Launches a WSL host starts itself use the account selected for its distro（[@nwparker](https://github.com/nwparker)，[#28464](https://github.com/stablyai/orca/pull/28464)）
- 新增："None" agent option that opens only the setup script（[@leog](https://github.com/leog)，[#25617](https://github.com/stablyai/orca/pull/25617)）
- 回收：any restored agent row whose terminal died while Orca was closed (STA-10194)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28475](https://github.com/stablyai/orca/pull/28475)）
- Refresh Source Control only for the worktree whose git index changed（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26946](https://github.com/stablyai/orca/pull/26946)）
- 打开：a server agent's notification on its server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26518](https://github.com/stablyai/orca/pull/26518)）
- Refuse an agent whose WSL runtime needs repair under its own code, in the settings page's words（[@brennanb2025](https://github.com/brennanb2025)，[#28232](https://github.com/stablyai/orca/pull/28232)）
- 修复：CLI delivery and fresh launch environments for managed SSH agents（[@brennanb2025](https://github.com/brennanb2025)，[#26464](https://github.com/stablyai/orca/pull/26464)）
- AI-button and OpenCode-model tabs start their agent in their own terminal（[@brennanb2025](https://github.com/brennanb2025)，[#28210](https://github.com/stablyai/orca/pull/28210)）
- Refuse desktop resumes of chat-owned conversations（[@brennanb2025](https://github.com/brennanb2025)，[#28229](https://github.com/stablyai/orca/pull/28229)）
- Trust a WSL share path's distro in the agent list, over Orca's cached distro list（[@brennanb2025](https://github.com/brennanb2025)，[#28233](https://github.com/stablyai/orca/pull/28233)）
- 保持：status refresh for worktrees whose admin dirs differ only by case（[@nwparker](https://github.com/nwparker)，[#28586](https://github.com/stablyai/orca/pull/28586)）
- Clear agent selections in workspace creation and settings（[@nwparker](https://github.com/nwparker)，[#28543](https://github.com/stablyai/orca/pull/28543)）
- Finish agent-selection cleanup and restore merge validation（[@nwparker](https://github.com/nwparker)，[#28607](https://github.com/stablyai/orca/pull/28607)）
- 保持：issue titles readable in narrow panels（[@nwparker](https://github.com/nwparker)，[#28583](https://github.com/stablyai/orca/pull/28583)）
- 保持：description and comment hyperlinks clickable（[@nwparker](https://github.com/nwparker)，[#28584](https://github.com/stablyai/orca/pull/28584)）
- 允许：agents read and update Jira tickets safely（[@nwparker](https://github.com/nwparker)，[#28592](https://github.com/stablyai/orca/pull/28592)）
- 支持：scoped Cloud API tokens（[@nwparker](https://github.com/nwparker)，[#28604](https://github.com/stablyai/orca/pull/28604)）
- 保持：edits and comments visible while saving（[@nwparker](https://github.com/nwparker)，[#28585](https://github.com/stablyai/orca/pull/28585)）
- Generate issue titles on the connection host（[@nwparker](https://github.com/nwparker)，[#28625](https://github.com/stablyai/orca/pull/28625)）
- 修复：Jira Cloud All and classify presets by ticket status（[@nwparker](https://github.com/nwparker)，[#28579](https://github.com/stablyai/orca/pull/28579)）
- Resolve Jira keys in workspace references（[@nwparker](https://github.com/nwparker)，[#28619](https://github.com/stablyai/orca/pull/28619)）
- 显示：every linked Jira workspace and add a Has Workspace view（[@nwparker](https://github.com/nwparker)，[#28590](https://github.com/stablyai/orca/pull/28590)）
- Notice Jira and Linear state changes from other processes（[@nwparker](https://github.com/nwparker)，[#28594](https://github.com/stablyai/orca/pull/28594)）
- 新增：row quick copy and reusable prompt templates（[@nwparker](https://github.com/nwparker)，[#28618](https://github.com/stablyai/orca/pull/28618)）
- Save and reuse named Jira JQL filters on the execution host（[@nwparker](https://github.com/nwparker)，[#28600](https://github.com/stablyai/orca/pull/28600)）
- Choose planning columns in the issue list（[@nwparker](https://github.com/nwparker)，[#28615](https://github.com/stablyai/orca/pull/28615)）
- Choose Jira key casing and keep canonical Jira keys in review titles（[@nwparker](https://github.com/nwparker)，[#28596](https://github.com/stablyai/orca/pull/28596)）
- Collect required fields before changing status（[@nwparker](https://github.com/nwparker)，[#28588](https://github.com/stablyai/orca/pull/28588)）
- 恢复：Jira CI lint checks without changing behavior（[@nwparker](https://github.com/nwparker)，[#28717](https://github.com/stablyai/orca/pull/28717)）
- Make existing Jira assignees searchable and add Assign to me（[@nwparker](https://github.com/nwparker)，[#28612](https://github.com/stablyai/orca/pull/28612)）
- View Jira work on a board and filter the current sprint（[@nwparker](https://github.com/nwparker)，[#28633](https://github.com/stablyai/orca/pull/28633)）
- Load attachment images outside issue Markdown（[@nwparker](https://github.com/nwparker)，[#28631](https://github.com/stablyai/orca/pull/28631)）
- Remember repository project defaults（[@nwparker](https://github.com/nwparker)，[#28622](https://github.com/stablyai/orca/pull/28622)）
- Split Jira issue workspace hooks and IPC param checks（[@AmethystLiang](https://github.com/AmethystLiang)，[#28759](https://github.com/stablyai/orca/pull/28759)）
- Refuse a picked OpenCode model in any WSL share repo（[@brennanb2025](https://github.com/brennanb2025)，[#28236](https://github.com/stablyai/orca/pull/28236)）
- 显示：whole credit balances in usage displays（[@nwparker](https://github.com/nwparker)，[#28887](https://github.com/stablyai/orca/pull/28887)）
- Find a repo's project the way the window does（[@brennanb2025](https://github.com/brennanb2025)，[#28237](https://github.com/stablyai/orca/pull/28237)）
- 停止：Jira search loops when saved filters fail to load（[@nwparker](https://github.com/nwparker)，[#29011](https://github.com/stablyai/orca/pull/29011)）
- 新增：bounded site-specific favourite filter catalogue（[@nwparker](https://github.com/nwparker)，[#29028](https://github.com/stablyai/orca/pull/29028)）
- 避免：blank shells when launching new workspaces（[@brennanb2025](https://github.com/brennanb2025)，[#28451](https://github.com/stablyai/orca/pull/28451)）
- Use favourite filters within their source site（[@nwparker](https://github.com/nwparker)，[#29037](https://github.com/stablyai/orca/pull/29037)）
- 显示：linked workspaces in Has Workspace by matching the Jira login, not its label（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29201](https://github.com/stablyai/orca/pull/29201)）
- Session History: show the scan's progress in a strip under the search box（[@brennanb2025](https://github.com/brennanb2025)，[#28576](https://github.com/stablyai/orca/pull/28576)）
- 保持：collapsed sidebar agent cards steady when the child arrow appears（[@nwparker](https://github.com/nwparker)，[#29246](https://github.com/stablyai/orca/pull/29246)）
- Session History: let a scan run until it finishes instead of stopping it after 130 s（[@brennanb2025](https://github.com/brennanb2025)，[#29073](https://github.com/stablyai/orca/pull/29073)）
- 停止：nested reviews from collapsing Claude children（[@nwparker](https://github.com/nwparker)，[#29264](https://github.com/stablyai/orca/pull/29264)）
- Resolve SSH host aliases for account binding（[@orchardprior](https://github.com/orchardprior)，[#29018](https://github.com/stablyai/orca/pull/29018)）
- Clear a Claude permission wait when its approved tool fails（[@nwparker](https://github.com/nwparker)，[#29387](https://github.com/stablyai/orca/pull/29387)）
- 保持：scan notices from burying the session list（[@nwparker](https://github.com/nwparker)，[#29392](https://github.com/stablyai/orca/pull/29392)）
- 显示：usage from the host that owns the accounts（[@nwparker](https://github.com/nwparker)，[#29430](https://github.com/stablyai/orca/pull/29430)）
- Removing a worktree drops its sleeping-agent records（[@nwparker](https://github.com/nwparker)，[#29449](https://github.com/stablyai/orca/pull/29449)）
- Remote worker liveness reports exited when the host proves the agent gone（[@nwparker](https://github.com/nwparker)，[#29276](https://github.com/stablyai/orca/pull/29276)）
- Quote resume commands for a Windows SSH host's own shell（[@nwparker](https://github.com/nwparker)，[#29409](https://github.com/stablyai/orca/pull/29409)）
- Release a Claude permission wait that ended during an SSH disconnect（[@nwparker](https://github.com/nwparker)，[#29482](https://github.com/stablyai/orca/pull/29482)）
- The wake sweep no longer forks sessions owned by a disconnected SSH pane or a stale-workspace record（[@nwparker](https://github.com/nwparker)，[#29454](https://github.com/stablyai/orca/pull/29454)）
- A proven agent exit survives restarts, late hooks and same-second attaches（[@nwparker](https://github.com/nwparker)，[#29483](https://github.com/stablyai/orca/pull/29483)）
- 打开：disk usage in a separate window（[@nwparker](https://github.com/nwparker)，[#29513](https://github.com/stablyai/orca/pull/29513)）
- 打开：the browser for a WSL account sign-in（[@nwparker](https://github.com/nwparker)，[#29566](https://github.com/stablyai/orca/pull/29566)）
- 限制：retained agent exits（[@nwparker](https://github.com/nwparker)，[#29600](https://github.com/stablyai/orca/pull/29600)）
- New-agent shortcut, Explain and direct launches ask the workspace's own host for its agents（[@nwparker](https://github.com/nwparker)，[#29622](https://github.com/stablyai/orca/pull/29622)）
- A resumed agent's chat is readable on the phone before its first new turn（[@nwparker](https://github.com/nwparker)，[#29664](https://github.com/stablyai/orca/pull/29664)）
- Direct work-item and checks-fix launches quote for the execution host（[@nwparker](https://github.com/nwparker)，[#29716](https://github.com/stablyai/orca/pull/29716)）
- 允许：npm-installed agents generate commit messages on Windows（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29434](https://github.com/stablyai/orca/pull/29434)）
- Native-chat agents get their mail notice right away, the same way for every agent（[@brennanb2025](https://github.com/brennanb2025)，[#28540](https://github.com/stablyai/orca/pull/28540)）
- Session History: stop re-reading unchanged transcripts past 4,096 files（[@brennanb2025](https://github.com/brennanb2025)，[#28821](https://github.com/stablyai/orca/pull/28821)）
- Bold an agent row only while looking at it can clear it（[@brennanb2025](https://github.com/brennanb2025)，[#28830](https://github.com/stablyai/orca/pull/28830)）
- Session History: save the parse cache one row per transcript, so restarts re-read nothing（[@brennanb2025](https://github.com/brennanb2025)，[#29401](https://github.com/stablyai/orca/pull/29401)）
- Load MR reviewer choices from the paired server that owns the repo（[@nwparker](https://github.com/nwparker)，[#29917](https://github.com/stablyai/orca/pull/29917)）
- Fill the label and reviewer pickers and stop replacing issue assignees（[@zanmlakar](https://github.com/zanmlakar)，[#28776](https://github.com/stablyai/orca/pull/28776)）
- No false "Couldn't launch" toast while a new agent's terminal is still starting（[@brennanb2025](https://github.com/brennanb2025)，[#29911](https://github.com/stablyai/orca/pull/29911)）
- Delete the active or a running-agent workspace like a sidebar delete（[@brennanb2025](https://github.com/brennanb2025)，[#23593](https://github.com/stablyai/orca/pull/23593)）

#### SSH, managed servers & remote {#v1-4-229-ssh-managed-servers-remote}

> Reconnect after sleep or a network drop, recover split panes without losing their siblings, resume sleeping agents, and preserve each machine’s projects and running work.

- 显示：help before server startup（[@nwparker](https://github.com/nwparker)，[#26855](https://github.com/stablyai/orca/pull/26855)）
- Start AI commit messages from the same shell environment chats use（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26808](https://github.com/stablyai/orca/pull/26808)）
- Host registry stops minting client SSH hosts from a server's nested target（[@OrcaWin](https://github.com/OrcaWin)，[#26952](https://github.com/stablyai/orca/pull/26952)）
- Folder workspaces can answer "paired server"（[@OrcaWin](https://github.com/OrcaWin)，[#26958](https://github.com/stablyai/orca/pull/26958)）
- 保持：MCP repository settings on their selected host（[@nwparker](https://github.com/nwparker)，[#26859](https://github.com/stablyai/orca/pull/26859)）
- Extract subprocess handling into @orca/process-host（[@nwparker](https://github.com/nwparker)，[#26963](https://github.com/stablyai/orca/pull/26963)）
- 保持：a floating terminal floating when its cwd is inside a workspace（[@OrcaWin](https://github.com/OrcaWin)，[#27088](https://github.com/stablyai/orca/pull/27088)）
- Bounded OpenClaw discovery; title filter when a host's search is off（[@OrcaWin](https://github.com/OrcaWin)，[#27089](https://github.com/stablyai/orca/pull/27089)）
- A tab stream the host ends resubscribes on the retry backoff（[@OrcaWin](https://github.com/OrcaWin)，[#27098](https://github.com/stablyai/orca/pull/27098)）
- Automatic tab activation no longer wakes a worktree the host put to sleep（[@OrcaWin](https://github.com/OrcaWin)，[#27081](https://github.com/stablyai/orca/pull/27081)）
- A direct-SSH host republish no longer steals this view's tab selection（[@OrcaWin](https://github.com/OrcaWin)，[#27100](https://github.com/stablyai/orca/pull/27100)）
- A restored terminal row is retired only by its own host PTY（[@OrcaWin](https://github.com/OrcaWin)，[#27101](https://github.com/stablyai/orca/pull/27101)）
- Honor the OpenSSH DefaultShell on Windows SSH hosts running orcad（[@OrcaWin](https://github.com/OrcaWin)，[#27085](https://github.com/stablyai/orca/pull/27085)）
- A returning paired publisher is repaired by an authoritative census（[@OrcaWin](https://github.com/OrcaWin)，[#27094](https://github.com/stablyai/orca/pull/27094)）
- Implicit worktree selection is scoped to the caller's host（[@OrcaWin](https://github.com/OrcaWin)，[#27108](https://github.com/stablyai/orca/pull/27108)）
- The unresolved-owner sentinel is never routable（[@OrcaWin](https://github.com/OrcaWin)，[#27111](https://github.com/stablyai/orca/pull/27111)）
- Worktree create enforces the lineage host boundary（[@OrcaWin](https://github.com/OrcaWin)，[#27114](https://github.com/stablyai/orca/pull/27114)）
- Every repo catalog uses the host-catalog fence（[@OrcaWin](https://github.com/OrcaWin)，[#27116](https://github.com/stablyai/orca/pull/27116)）
- A terminal close commits in the session partition that holds the tab（[@OrcaWin](https://github.com/OrcaWin)，[#27119](https://github.com/stablyai/orca/pull/27119)）
- Closing a tab is never a silent no-op（[@OrcaWin](https://github.com/OrcaWin)，[#27132](https://github.com/stablyai/orca/pull/27132)）
- A server whose status answers is selectable while shared control connects（[@OrcaWin](https://github.com/OrcaWin)，[#27137](https://github.com/stablyai/orca/pull/27137)）
- Speed up process-host import enforcement in CI（[@nwparker](https://github.com/nwparker)，[#27124](https://github.com/stablyai/orca/pull/27124)）
- Advertise a key and fallback port the host can actually serve（[@OrcaWin](https://github.com/OrcaWin)，[#27158](https://github.com/stablyai/orca/pull/27158)）
- OS open actions follow the file's owner, not the focused server（[@OrcaWin](https://github.com/OrcaWin)，[#27165](https://github.com/stablyai/orca/pull/27165)）
- Deleting a project with live terminals warns and needs --force（[@OrcaWin](https://github.com/OrcaWin)，[#27172](https://github.com/stablyai/orca/pull/27172)）
- Servers publish a host descriptor（[@OrcaWin](https://github.com/OrcaWin)，[#27193](https://github.com/stablyai/orca/pull/27193)）
- Host-scoped port scan and stop on the server（[@OrcaWin](https://github.com/OrcaWin)，[#27188](https://github.com/stablyai/orca/pull/27188)）
- Check the runtime source before sending（[@OrcaWin](https://github.com/OrcaWin)，[#27206](https://github.com/stablyai/orca/pull/27206)）
- The host refuses a request meant for another runtime（[@OrcaWin](https://github.com/OrcaWin)，[#27224](https://github.com/stablyai/orca/pull/27224)）
- Terminal IDs, agent rows and dashboard rows follow the owner（[@OrcaWin](https://github.com/OrcaWin)，[#27243](https://github.com/stablyai/orca/pull/27243)）
- Dashboard terminal previews from the owning host（[@OrcaWin](https://github.com/OrcaWin)，[#27250](https://github.com/stablyai/orca/pull/27250)）
- The ports panel scans and stops on the workspace's own host（[@OrcaWin](https://github.com/OrcaWin)，[#27258](https://github.com/stablyai/orca/pull/27258)）
- Agent launch platform and shell come from the execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27259](https://github.com/stablyai/orca/pull/27259)）
- Resource Manager lists the owning host's processes（[@OrcaWin](https://github.com/OrcaWin)，[#27263](https://github.com/stablyai/orca/pull/27263)）
- Host-owned settings panes choose their host explicitly（[@OrcaWin](https://github.com/OrcaWin)，[#27265](https://github.com/stablyai/orca/pull/27265)）
- Install agent status hooks when a managed host starts（[@OrcaWin](https://github.com/OrcaWin)，[#27319](https://github.com/stablyai/orca/pull/27319)）
- Provide the orca CLI in Windows managed-host terminals（[@OrcaWin](https://github.com/OrcaWin)，[#27324](https://github.com/stablyai/orca/pull/27324)）
- Save runtime-started tabs in the tab bar before their terminal starts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27083](https://github.com/stablyai/orca/pull/27083)）
- A paired client can manage the server's own SSH hosts (ssh.target-management.v1)（[@OrcaWin](https://github.com/OrcaWin)，[#27329](https://github.com/stablyai/orca/pull/27329)）
- Create on a server's SSH project; Add Project SSH lists the server's targets（[@OrcaWin](https://github.com/OrcaWin)，[#27331](https://github.com/stablyai/orca/pull/27331)）
- 恢复：saved port forwards on managed hosts and show their Ports tab（[@OrcaWin](https://github.com/OrcaWin)，[#27361](https://github.com/stablyai/orca/pull/27361)）
- Reenable terminal link Actions after an old opt-out（[@nwparker](https://github.com/nwparker)，[#26853](https://github.com/stablyai/orca/pull/26853)）
- A recipe VM's SSH root runs on a managed Orca server（[@OrcaWin](https://github.com/OrcaWin)，[#27366](https://github.com/stablyai/orca/pull/27366)）
- A restore racing a disconnect never leaves a forward behind（[@OrcaWin](https://github.com/OrcaWin)，[#27368](https://github.com/stablyai/orca/pull/27368)）
- Refuse headless tab moves into a group the server doesn't have（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27381](https://github.com/stablyai/orca/pull/27381)）
- 允许：a paired desktop register its phones as phone devices（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26427](https://github.com/stablyai/orca/pull/26427)）
- 停止：dropping terminal output on a backed-up legacy connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26528](https://github.com/stablyai/orca/pull/26528)）
- 移动：tabs into a split-off group on the server too（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26522](https://github.com/stablyai/orca/pull/26522)）
- Reuse an Asia load principal set for shards past the fourth（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27403](https://github.com/stablyai/orca/pull/27403)）
- Unpack the orcad serve-selection entry so orca serve can run it（[@OrcaWin](https://github.com/OrcaWin)，[#27404](https://github.com/stablyai/orca/pull/27404)）
- Refresh open clients after project setup changes（[@nwparker](https://github.com/nwparker)，[#26941](https://github.com/stablyai/orca/pull/26941)）
- A fast remote folder listing no longer shows a false error（[@nwparker](https://github.com/nwparker)，[#26940](https://github.com/stablyai/orca/pull/26940)）
- 移除：the relay-only remote workspace sync so reconnect never sticks on pulling（[@OrcaWin](https://github.com/OrcaWin)，[#27409](https://github.com/stablyai/orca/pull/27409)）
- Only force-kill processes in the terminal's own Linux session（[@OrcaWin](https://github.com/OrcaWin)，[#27422](https://github.com/stablyai/orca/pull/27422)）
- Scope layout.unsubscribe to the caller's connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27423](https://github.com/stablyai/orca/pull/27423)）
- Observe-only fork gate for automatic terminal restores（[@OrcaWin](https://github.com/OrcaWin)，[#27424](https://github.com/stablyai/orca/pull/27424)）
- Launch the AppImage terminal daemon through its own mount（[@OrcaWin](https://github.com/OrcaWin)，[#27435](https://github.com/stablyai/orca/pull/27435)）
- Pace automatic terminal restores on headless hosts（[@OrcaWin](https://github.com/OrcaWin)，[#27428](https://github.com/stablyai/orca/pull/27428)）
- Pause automatic restores after a same-boot crash（[@OrcaWin](https://github.com/OrcaWin)，[#27433](https://github.com/stablyai/orca/pull/27433)）
- 报告：secrets unavailable instead of hanging on an unreachable macOS keychain（[@OrcaWin](https://github.com/OrcaWin)，[#27441](https://github.com/stablyai/orca/pull/27441)）
- Process-growth breaker that pauses automatic restores（[@OrcaWin](https://github.com/OrcaWin)，[#27437](https://github.com/stablyai/orca/pull/27437)）
- 去掉：a legacy daemon that can no longer accept a connection（[@OrcaWin](https://github.com/OrcaWin)，[#27436](https://github.com/stablyai/orca/pull/27436)）
- Count a claimed agent resume as automatic even without a history seed（[@OrcaWin](https://github.com/OrcaWin)，[#27442](https://github.com/stablyai/orca/pull/27442)）
- Reuse cached worktree rows when the admin probe cannot answer（[@OrcaWin](https://github.com/OrcaWin)，[#27445](https://github.com/stablyai/orca/pull/27445)）
- Phone wake reaches hibernated agent panes in place（[@OrcaWin](https://github.com/OrcaWin)，[#27450](https://github.com/stablyai/orca/pull/27450)）
- Accept a declared spawn intent from paired clients（[@OrcaWin](https://github.com/OrcaWin)，[#27452](https://github.com/stablyai/orca/pull/27452)）
- 保持：the isolated profile off the login keychain（[@OrcaWin](https://github.com/OrcaWin)，[#27463](https://github.com/stablyai/orca/pull/27463)）
- 停止：promising a manual update enables remote updates（[@OrcaWin](https://github.com/OrcaWin)，[#27464](https://github.com/stablyai/orca/pull/27464)）
- Install macOS orca serve updates instead of waiting on Squirrel forever（[@OrcaWin](https://github.com/OrcaWin)，[#27466](https://github.com/stablyai/orca/pull/27466)）
- Declare restore intent and keep deferred panes sleeping（[@OrcaWin](https://github.com/OrcaWin)，[#27455](https://github.com/stablyai/orca/pull/27455)）
- Decide a duplicate or doomed Electron serve before exec（[@OrcaWin](https://github.com/OrcaWin)，[#27472](https://github.com/stablyai/orca/pull/27472)）
- 允许：the owner resume paused automatic restores（[@OrcaWin](https://github.com/OrcaWin)，[#27459](https://github.com/stablyai/orca/pull/27459)）
- Cap terminals per execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27488](https://github.com/stablyai/orca/pull/27488)）
- One automatic-restore budget per execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27492](https://github.com/stablyai/orca/pull/27492)）
- Device-key authentication and per-installation key migration (host)（[@OrcaWin](https://github.com/OrcaWin)，[#27493](https://github.com/stablyai/orca/pull/27493)）
- 保持：tweetnacl out of the relocated Windows daemon-host graph; guard daemon externals at build（[@OrcaWin](https://github.com/OrcaWin)，[#27504](https://github.com/stablyai/orca/pull/27504)）
- The host keeps its own record of old-client restores it refuses（[@OrcaWin](https://github.com/OrcaWin)，[#27496](https://github.com/stablyai/orca/pull/27496)）
- 移除：a simulated terminal credit correctness check（[@nwparker](https://github.com/nwparker)，[#27507](https://github.com/stablyai/orca/pull/27507)）
- 保留：terminal permissions across app updates with a small signed helper（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27021](https://github.com/stablyai/orca/pull/27021)）
- 显示：terminal-host Full Disk Access, tag stable-copy daemons, and give Helpers folder strings（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27354](https://github.com/stablyai/orca/pull/27354)）
- Replace three copied new-terminal tab-order blocks with the shared helper（[@brennanb2025](https://github.com/brennanb2025)，[#26771](https://github.com/stablyai/orca/pull/26771)）
- Session-only browser keys and opt-in for pairing from plain-http pages (host)（[@OrcaWin](https://github.com/OrcaWin)，[#27540](https://github.com/stablyai/orca/pull/27540)）
- 打开：WSL paths in Cursor's WSL mode; ignore Windows-side CLIs in WSL hook setup（[@nwparker](https://github.com/nwparker)，[#27681](https://github.com/stablyai/orca/pull/27681)）
- 保持：remote servers usable when one saved record can't be read（[@nwparker](https://github.com/nwparker)，[#27685](https://github.com/stablyai/orca/pull/27685)）
- 恢复：Windows interop after another distro wipes it（[@nwparker](https://github.com/nwparker)，[#27682](https://github.com/stablyai/orca/pull/27682)）
- Don't duplicate terminals a newer Orca still runs after a downgrade（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27577](https://github.com/stablyai/orca/pull/27577)）
- 停止：booting stopped distros for background work（[@nwparker](https://github.com/nwparker)，[#27684](https://github.com/stablyai/orca/pull/27684)）
- Supervised mode for orca serve --supervise（[@OrcaWin](https://github.com/OrcaWin)，[#27716](https://github.com/stablyai/orca/pull/27716)）
- Auto-park registered serve supervisors during a desktop install（[@OrcaWin](https://github.com/OrcaWin)，[#27722](https://github.com/stablyai/orca/pull/27722)）
- End an older Orca's relay terminals from the connect refusal (STA-10166)（[@OrcaWin](https://github.com/OrcaWin)，[#27748](https://github.com/stablyai/orca/pull/27748)）
- Orca serve service install|status|uninstall（[@OrcaWin](https://github.com/OrcaWin)，[#27744](https://github.com/stablyai/orca/pull/27744)）
- Initialize the updater in headless Electron serve（[@OrcaWin](https://github.com/OrcaWin)，[#27771](https://github.com/stablyai/orca/pull/27771)）
- Opt-in OS ceiling on terminal processes, reported per host（[@OrcaWin](https://github.com/OrcaWin)，[#27769](https://github.com/stablyai/orca/pull/27769)）
- Quitting Claude or Codex in cmd.exe or Git Bash removes it from the running list（[@brennanb2025](https://github.com/brennanb2025)，[#27742](https://github.com/stablyai/orca/pull/27742)）
- 保持：1.4.224's running terminals working after the upgrade (legacy relay bridge)（[@OrcaWin](https://github.com/OrcaWin)，[#27787](https://github.com/stablyai/orca/pull/27787)）
- An old relay terminal's tab shows output again after a reconnect（[@OrcaWin](https://github.com/OrcaWin)，[#27951](https://github.com/stablyai/orca/pull/27951)）
- Never start a hidden orcad shell for a tab the legacy relay bridge serves（[@OrcaWin](https://github.com/OrcaWin)，[#27939](https://github.com/stablyai/orca/pull/27939)）
- Save Codex auth before a headless serve update restart（[@OrcaWin](https://github.com/OrcaWin)，[#28001](https://github.com/stablyai/orca/pull/28001)）
- Explain what to run when an SSH host's orca cannot start or install a server（[@OrcaWin](https://github.com/OrcaWin)，[#28003](https://github.com/stablyai/orca/pull/28003)）
- Run the --supervise supervisor from a copy outside the app（[@OrcaWin](https://github.com/OrcaWin)，[#28007](https://github.com/stablyai/orca/pull/28007)）
- 给予：the first AppImage serve one unpacking deadline and progress（[@OrcaWin](https://github.com/OrcaWin)，[#28015](https://github.com/stablyai/orca/pull/28015)）
- 停止：giving new terminals to a daemon whose AppImage files are gone（[@OrcaWin](https://github.com/OrcaWin)，[#28011](https://github.com/stablyai/orca/pull/28011)）
- Persistent banner to restart a terminal daemon whose files are gone（[@OrcaWin](https://github.com/OrcaWin)，[#28021](https://github.com/stablyai/orca/pull/28021)）
- Verify daemon PID identity from the native Windows process table, not PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#27703](https://github.com/stablyai/orca/pull/27703)）
- Start every host wsl.exe call through process-host so no console window flashes（[@OrcaWin](https://github.com/OrcaWin)，[#27628](https://github.com/stablyai/orca/pull/27628)）
- Save terminal rows in the tab groups' order（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28066](https://github.com/stablyai/orca/pull/28066)）
- 保持：the tab when a reattach finds its process gone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28067](https://github.com/stablyai/orca/pull/28067)）
- Speed up daemon smoke checks and keep compiler slots busy（[@nwparker](https://github.com/nwparker)，[#28106](https://github.com/stablyai/orca/pull/28106)）
- Identify instances by kernel start ticks, not drifting wall-clock start time（[@nwparker](https://github.com/nwparker)，[#28125](https://github.com/stablyai/orca/pull/28125)）
- Run WSL git with Windows Git line-ending settings on checkouts Windows Git wrote（[@nwparker](https://github.com/nwparker)，[#27778](https://github.com/stablyai/orca/pull/27778)）
- 停止：a project's terminals before the host forgets the project（[@nwparker](https://github.com/nwparker)，[#28024](https://github.com/stablyai/orca/pull/28024)）
- 保持：a named terminal's title across an orca serve restart（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28126](https://github.com/stablyai/orca/pull/28126)）
- 显示：a host-created setup split in the window that holds its tab（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28105](https://github.com/stablyai/orca/pull/28105)）
- Recheck watcher-reported paths with full stat on Windows Git drive checkouts（[@nwparker](https://github.com/nwparker)，[#27817](https://github.com/stablyai/orca/pull/27817)）
- 保持：the relocated Windows daemon host's conpty.dll under the path limit（[@nwparker](https://github.com/nwparker)，[#28156](https://github.com/stablyai/orca/pull/28156)）
- Orcad host transport over wsl.exe (WSL-via-orcad C1)（[@nwparker](https://github.com/nwparker)，[#27792](https://github.com/stablyai/orca/pull/27792)）
- Detached distro holder re-adopted from a pid file (WSL-via-orcad C3)（[@nwparker](https://github.com/nwparker)，[#27800](https://github.com/stablyai/orca/pull/27800)）
- 允许：existing profiles migrate without losing client history（[@nwparker](https://github.com/nwparker)，[#28141](https://github.com/stablyai/orca/pull/28141)）
- Pace automatic terminal restores on the desktop too（[@OrcaWin](https://github.com/OrcaWin)，[#28202](https://github.com/stablyai/orca/pull/28202)）
- 打开：the floating panel instead of blanking the main window on host reveals（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28184](https://github.com/stablyai/orca/pull/28184)）
- Clearer headless-display and supervisor messages on Linux（[@OrcaWin](https://github.com/OrcaWin)，[#28230](https://github.com/stablyai/orca/pull/28230)）
- Deploy and launch orcad inside a WSL distro (WSL-via-orcad C4)（[@nwparker](https://github.com/nwparker)，[#27819](https://github.com/stablyai/orca/pull/27819)）
- Direct AppImage serve honours the chosen profile and --supervise（[@OrcaWin](https://github.com/OrcaWin)，[#28227](https://github.com/stablyai/orca/pull/28227)）
- Name a new tab's first pane so its saved layout is never empty（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28168](https://github.com/stablyai/orca/pull/28168)）
- Route the worktree ready toast's host check by its owner, not the Active Server setting（[@nwparker](https://github.com/nwparker)，[#28265](https://github.com/stablyai/orca/pull/28265)）
- 显示：managed hosts once in the connection menu（[@nwparker](https://github.com/nwparker)，[#28277](https://github.com/stablyai/orca/pull/28277)）
- Run the AppImage terminal daemon off the mount, on the extracted copy's bundled Node（[@OrcaWin](https://github.com/OrcaWin)，[#28214](https://github.com/stablyai/orca/pull/28214)）
- A supervised serve run from the AppImage stays in place（[@OrcaWin](https://github.com/OrcaWin)，[#28270](https://github.com/stablyai/orca/pull/28270)）
- A supervised AppImage serve follows a replaced AppImage（[@OrcaWin](https://github.com/OrcaWin)，[#28244](https://github.com/stablyai/orca/pull/28244)）
- Status says live, exited or unverifiable, and shows the process ceiling（[@OrcaWin](https://github.com/OrcaWin)，[#28239](https://github.com/stablyai/orca/pull/28239)）
- A stop requested from outside never counts as a crash（[@OrcaWin](https://github.com/OrcaWin)，[#28307](https://github.com/stablyai/orca/pull/28307)）
- Connect to a WSL distro's orcad over wsl.exe stdio only (WSL-via-orcad C5)（[@nwparker](https://github.com/nwparker)，[#27834](https://github.com/stablyai/orca/pull/27834)）
- Unpack the AppImage copy in the background so the first daemon runs from it（[@OrcaWin](https://github.com/OrcaWin)，[#28311](https://github.com/stablyai/orca/pull/28311)）
- Liveness, failure classification and recovery for WSL orcad (WSL-via-orcad C6)（[@nwparker](https://github.com/nwparker)，[#27916](https://github.com/stablyai/orca/pull/27916)）
- Accounts shim for agents on a WSL orcad host (WSL-via-orcad C9)（[@nwparker](https://github.com/nwparker)，[#27874](https://github.com/stablyai/orca/pull/27874)）
- Account env for agent tabs on a WSL orcad host (WSL-via-orcad C9b)（[@nwparker](https://github.com/nwparker)，[#27940](https://github.com/stablyai/orca/pull/27940)）
- WSL distro hosts, main-process wiring and persistence (WSL-via-orcad C7a, experimental)（[@nwparker](https://github.com/nwparker)，[#27933](https://github.com/stablyai/orca/pull/27933)）
- 新增：WSL distro host UI and status (WSL-via-orcad C7b, experimental)（[@nwparker](https://github.com/nwparker)，[#27934](https://github.com/stablyai/orca/pull/27934)）
- Windows path actions for WSL hosts through one owner-routed capability (WSL-via-orcad C8)（[@nwparker](https://github.com/nwparker)，[#27955](https://github.com/stablyai/orca/pull/27955)）
- 保持：a paired pane when the desktop has not opened it yet（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28181](https://github.com/stablyai/orca/pull/28181)）
- 等待：for the desktop's terminal list before opening a terminal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28154](https://github.com/stablyai/orca/pull/28154)）
- A disconnect keeps an old relay terminal's tab on that terminal instead of starting a new shell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28344](https://github.com/stablyai/orca/pull/28344)）
- A slow window no longer makes `orca terminal create` fail and then duplicate（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28158](https://github.com/stablyai/orca/pull/28158)）
- A host whose ssh_config forwards a port can still open its server tunnel (STA-10471)（[@OrcaWin](https://github.com/OrcaWin)，[#28396](https://github.com/stablyai/orca/pull/28396)）
- Start a startup terminal while Orca's window is hidden instead of waiting for it to be shown（[@brennanb2025](https://github.com/brennanb2025)，[#28351](https://github.com/stablyai/orca/pull/28351)）
- An SSH host comes back after restarting Orca instead of staying offline (STA-10476)（[@OrcaWin](https://github.com/OrcaWin)，[#28398](https://github.com/stablyai/orca/pull/28398)）
- 发送：only the text a Linux IME commits, not the candidate key（[@nwparker](https://github.com/nwparker)，[#28275](https://github.com/stablyai/orca/pull/28275)）
- Cancel on an SSH password prompt no longer brings it straight back（[@OrcaWin](https://github.com/OrcaWin)，[#28402](https://github.com/stablyai/orca/pull/28402)）
- Accept string stdin in synchronous runs（[@nwparker](https://github.com/nwparker)，[#28225](https://github.com/stablyai/orca/pull/28225)）
- Orcad's own git sees the login shell's SSH agent, proxy and signing env（[@nwparker](https://github.com/nwparker)，[#28456](https://github.com/stablyai/orca/pull/28456)）
- Retain CRLF split across output chunks（[@nwparker](https://github.com/nwparker)，[#28224](https://github.com/stablyai/orca/pull/28224)）
- 保持：Codex status hooks in a managed account home on a WSL host, and list its sessions（[@nwparker](https://github.com/nwparker)，[#28469](https://github.com/stablyai/orca/pull/28469)）
- Decide every piece of project state and add a losslessness check (D1b-1)（[@nwparker](https://github.com/nwparker)，[#28459](https://github.com/stablyai/orca/pull/28459)）
- Accept local WSL projects on the migration wire, only in their own distro (D1b-2)（[@nwparker](https://github.com/nwparker)，[#28466](https://github.com/stablyai/orca/pull/28466)）
- A system-SSH host whose sshd refuses forwarding reaches its managed server over exec（[@OrcaWin](https://github.com/OrcaWin)，[#28408](https://github.com/stablyai/orca/pull/28408)）
- The stdio bridge clears an ssh -L an earlier Orca left on its port（[@OrcaWin](https://github.com/OrcaWin)，[#28509](https://github.com/stablyai/orca/pull/28509)）
- 允许：an app update reach a WSL host orcad (E1)（[@nwparker](https://github.com/nwparker)，[#28458](https://github.com/stablyai/orca/pull/28458)）
- Choose which projects a distro move takes and rewrite their paths (D1b-3)（[@nwparker](https://github.com/nwparker)，[#28473](https://github.com/stablyai/orca/pull/28473)）
- Bind the host to its distro registration and preflight every moved path (D1b-4)（[@nwparker](https://github.com/nwparker)，[#28542](https://github.com/stablyai/orca/pull/28542)）
- 保持：the text of an IME key pressed before a commit finalizes（[@nwparker](https://github.com/nwparker)，[#28441](https://github.com/stablyai/orca/pull/28441)）
- Stamp the build commit so orca skills install works on SSH and headless hosts（[@brennanb2025](https://github.com/brennanb2025)，[#28558](https://github.com/stablyai/orca/pull/28558)）
- A journal and fence for local WSL moves, on one shared journal store (D1b-5a)（[@nwparker](https://github.com/nwparker)，[#28536](https://github.com/stablyai/orca/pull/28536)）
- Don't report kitty releases for key presses the app never received（[@nwparker](https://github.com/nwparker)，[#28621](https://github.com/stablyai/orca/pull/28621)）
- Terminal gate, last-folder capture and exit proof for a WSL move (D1b-5b)（[@nwparker](https://github.com/nwparker)，[#28606](https://github.com/stablyai/orca/pull/28606)）
- Save a windowless host's chat tabs in its layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28354](https://github.com/stablyai/orca/pull/28354)）
- A new desktop can connect to a host already running a different Orca server version（[@OrcaWin](https://github.com/OrcaWin)，[#28642](https://github.com/stablyai/orca/pull/28642)）
- A password host no longer asks again after every reconnect（[@OrcaWin](https://github.com/OrcaWin)，[#28644](https://github.com/stablyai/orca/pull/28644)）
- Fence moving projects from new terminals and hide them once the host owns them (D1b-5c)（[@nwparker](https://github.com/nwparker)，[#28668](https://github.com/stablyai/orca/pull/28668)）
- The CLI, phone and paired clients no longer list a converted host's retained rows（[@nwparker](https://github.com/nwparker)，[#28754](https://github.com/stablyai/orca/pull/28754)）
- 恢复：a remote server's browser tabs after it restarts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28166](https://github.com/stablyai/orca/pull/28166)）
- Store the Terminal shell setting trimmed so agent tabs start like plain tabs（[@brennanb2025](https://github.com/brennanb2025)，[#28635](https://github.com/stablyai/orca/pull/28635)）
- Judge an agent's --shell against the runtime it runs in（[@brennanb2025](https://github.com/brennanb2025)，[#28234](https://github.com/stablyai/orca/pull/28234)）
- Name the fix that applies when --shell is refused（[@brennanb2025](https://github.com/brennanb2025)，[#28235](https://github.com/stablyai/orca/pull/28235)）
- Refuse edits to a project a WSL move is taking (D1b-5c-2)（[@nwparker](https://github.com/nwparker)，[#28761](https://github.com/stablyai/orca/pull/28761)）
- 报告：agent start failures the same way from every launch path（[@brennanb2025](https://github.com/brennanb2025)，[#28724](https://github.com/stablyai/orca/pull/28724)）
- Pause a moving project's terminals through Sleep and prove they exited (D1b-5d)（[@nwparker](https://github.com/nwparker)，[#28820](https://github.com/stablyai/orca/pull/28820)）
- Background writers step aside for a project a WSL move is taking (D1b-5c-3)（[@nwparker](https://github.com/nwparker)，[#28835](https://github.com/stablyai/orca/pull/28835)）
- 保持：every pane in main's layout through a terminal service restart（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28852](https://github.com/stablyai/orca/pull/28852)）
- 拒绝：a requested tab id that is already taken（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28841](https://github.com/stablyai/orca/pull/28841)）
- A capability-gated blob channel beside scrollback (D1b-6a)（[@nwparker](https://github.com/nwparker)，[#28866](https://github.com/stablyai/orca/pull/28866)）
- A moved pane reopens in its last folder on the WSL host (D1b-6b)（[@nwparker](https://github.com/nwparker)，[#28885](https://github.com/stablyai/orca/pull/28885)）
- Bring each pane back after a terminal service restart when it is shown（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28880](https://github.com/stablyai/orca/pull/28880)）
- The SSH password dialog no longer closes itself and comes back（[@OrcaWin](https://github.com/OrcaWin)，[#28883](https://github.com/stablyai/orca/pull/28883)）
- 允许：users close the profile storage delay warning（[@brennanb2025](https://github.com/brennanb2025)，[#28900](https://github.com/stablyai/orca/pull/28900)）
- Shell history moves with the project to the WSL host (D1b-6c-1)（[@nwparker](https://github.com/nwparker)，[#28902](https://github.com/stablyai/orca/pull/28902)）
- Reuse real launcher builds and avoid unused runtime RPC imports（[@nwparker](https://github.com/nwparker)，[#28905](https://github.com/stablyai/orca/pull/28905)）
- 去掉：a stored terminal row the tab bar already shows when loading the layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28889](https://github.com/stablyai/orca/pull/28889)）
- Overlap independent real PTY idle checks（[@nwparker](https://github.com/nwparker)，[#28932](https://github.com/stablyai/orca/pull/28932)）
- Publish each pane's live terminal title on the layout stream（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28928](https://github.com/stablyai/orca/pull/28928)）
- A relay-era desktop can join the server another desktop on the same login runs（[@OrcaWin](https://github.com/OrcaWin)，[#28886](https://github.com/stablyai/orca/pull/28886)）
- Run each terminal in its own systemd scope so one out-of-memory kill no longer closes every terminal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28871](https://github.com/stablyai/orca/pull/28871)）
- Start a managed server that stopped, on every connect path（[@OrcaWin](https://github.com/OrcaWin)，[#28996](https://github.com/stablyai/orca/pull/28996)）
- 停止：stale saved state from blocking an SSH host's move to a managed server（[@OrcaWin](https://github.com/OrcaWin)，[#29003](https://github.com/stablyai/orca/pull/29003)）
- Detect stalled terminal daemon I/O and offer restart review（[@nwparker](https://github.com/nwparker)，[#29087](https://github.com/stablyai/orca/pull/29087)）
- 修复：macOS terminal daemon restart leaving service registered（[@nwparker](https://github.com/nwparker)，[#29130](https://github.com/stablyai/orca/pull/29130)）
- A paused move to the managed server says so; servers show their real version; a gone server's project can be removed (#27267)（[@OrcaWin](https://github.com/OrcaWin)，[#29208](https://github.com/stablyai/orca/pull/29208)）
- 给予：each machine sharing one home its own managed server（[@OrcaWin](https://github.com/OrcaWin)，[#29214](https://github.com/stablyai/orca/pull/29214)）
- Reattach a healthy remote pane promptly after a worktree switch（[@OrcaWin](https://github.com/OrcaWin)，[#29210](https://github.com/stablyai/orca/pull/29210)）
- 跳过：the ps process-table read on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#29199](https://github.com/stablyai/orca/pull/29199)）
- 显示：the Reconnecting banner only when recovery outlasts a second（[@nwparker](https://github.com/nwparker)，[#29243](https://github.com/stablyai/orca/pull/29243)）
- 发送：typing held during a reattach at the host's subscribed reply（[@nwparker](https://github.com/nwparker)，[#29244](https://github.com/stablyai/orca/pull/29244)）
- A tall remote terminal pane gets a PTY of the same height（[@nwparker](https://github.com/nwparker)，[#29235](https://github.com/stablyai/orca/pull/29235)）
- Forward headless browser commands through startup（[@nwparker](https://github.com/nwparker)，[#29250](https://github.com/stablyai/orca/pull/29250)）
- A parked remote TUI keeps its screen on reveal instead of flashing its shell line（[@nwparker](https://github.com/nwparker)，[#29251](https://github.com/stablyai/orca/pull/29251)）
- 停止：a remote-typed terminal hidden on the host from reconnecting on every send（[@nwparker](https://github.com/nwparker)，[#29252](https://github.com/stablyai/orca/pull/29252)）
- 保持：live output flowing during resync and retry an unanswered one（[@nwparker](https://github.com/nwparker)，[#29236](https://github.com/stablyai/orca/pull/29236)）
- Hand the graph back to the headless host when its desktop window closes（[@nwparker](https://github.com/nwparker)，[#29273](https://github.com/stablyai/orca/pull/29273)）
- After a reboot, a connect that finds the host busy waits instead of failing on the terminal count（[@nwparker](https://github.com/nwparker)，[#29267](https://github.com/stablyai/orca/pull/29267)）
- Retry a stalled SSH reconnect when the machine wakes or the network returns（[@nwparker](https://github.com/nwparker)，[#29237](https://github.com/stablyai/orca/pull/29237)）
- Orca serve owns its Claude and Codex accounts again（[@OrcaWin](https://github.com/OrcaWin)，[#29209](https://github.com/stablyai/orca/pull/29209)）
- Ship the paired web client outside app.asar so a /tmp sweep cannot break it（[@nwparker](https://github.com/nwparker)，[#29277](https://github.com/stablyai/orca/pull/29277)）
- Hand macOS opens from the browser sidecar to the desktop app（[@nwparker](https://github.com/nwparker)，[#29258](https://github.com/stablyai/orca/pull/29258)）
- A worktree created from a remote branch tracks it（[@nwparker](https://github.com/nwparker)，[#29275](https://github.com/stablyai/orca/pull/29275)）
- Never leave an SSH host unconnectable after a refused move (phone users, #29083, Move anyway)（[@OrcaWin](https://github.com/OrcaWin)，[#29220](https://github.com/stablyai/orca/pull/29220)）
- A windowless host no longer lists no tabs for a workspace with live terminals（[@nwparker](https://github.com/nwparker)，[#29283](https://github.com/stablyai/orca/pull/29283)）
- Adopt the v47 terminal daemon the 1.4.227 release runs（[@brennanb2025](https://github.com/brennanb2025)，[#29191](https://github.com/stablyai/orca/pull/29191)）
- A paired client reopening a slept agent tab resumes its conversation（[@nwparker](https://github.com/nwparker)，[#29272](https://github.com/stablyai/orca/pull/29272)）
- Focus and hover reports no longer take a mirrored terminal's size（[@nwparker](https://github.com/nwparker)，[#29239](https://github.com/stablyai/orca/pull/29239)）
- Draw the host's saved screen when a reattached pane's first image is blank（[@nwparker](https://github.com/nwparker)，[#29261](https://github.com/stablyai/orca/pull/29261)）
- Start Linux headless serve on X11 so an inherited Wayland session can't abort it（[@nwparker](https://github.com/nwparker)，[#29260](https://github.com/stablyai/orca/pull/29260)）
- Switching back to a quiet remote terminal no longer refetches its snapshot（[@nwparker](https://github.com/nwparker)，[#29253](https://github.com/stablyai/orca/pull/29253)）
- 跳过：redundant process-host compilation during dev rebuilds（[@OrcaWin](https://github.com/OrcaWin)，[#29317](https://github.com/stablyai/orca/pull/29317)）
- No probe stall on the first remote action after a pause（[@nwparker](https://github.com/nwparker)，[#29240](https://github.com/stablyai/orca/pull/29240)）
- 隐藏：sleeping keeps a live remote workspace row through a transient PTY gap（[@nwparker](https://github.com/nwparker)，[#29325](https://github.com/stablyai/orca/pull/29325)）
- 保留：wake records after hibernation exit（[@nwparker](https://github.com/nwparker)，[#29288](https://github.com/stablyai/orca/pull/29288)）
- Overlap a reveal's stream open with its create, and claim the viewport once（[@nwparker](https://github.com/nwparker)，[#29269](https://github.com/stablyai/orca/pull/29269)）
- 给予：Macs sharing a home their own server, and make the shared-home claim exclusive（[@nwparker](https://github.com/nwparker)，[#29284](https://github.com/stablyai/orca/pull/29284)）
- Remote hosts honor the client's Nest Workspaces setting（[@nwparker](https://github.com/nwparker)，[#29404](https://github.com/stablyai/orca/pull/29404)）
- Never launch the orca-ide bash shim as the headless browser（[@nwparker](https://github.com/nwparker)，[#29363](https://github.com/stablyai/orca/pull/29363)）
- 保持：a CLI socket open while its request is still running（[@nwparker](https://github.com/nwparker)，[#29262](https://github.com/stablyai/orca/pull/29262)）
- Revealing a remote pane no longer triggers a second clear-and-repaint（[@nwparker](https://github.com/nwparker)，[#29285](https://github.com/stablyai/orca/pull/29285)）
- 防止：automatic replacement of host-mirrored agents（[@nwparker](https://github.com/nwparker)，[#29289](https://github.com/stablyai/orca/pull/29289)）
- A cold-parked terminal reveal paints once, at the pane's own size（[@nwparker](https://github.com/nwparker)，[#29331](https://github.com/stablyai/orca/pull/29331)）
- 报告：an unreachable host's worktree graph as unavailable, not empty（[@nwparker](https://github.com/nwparker)，[#29416](https://github.com/stablyai/orca/pull/29416)）
- 去掉：this desktop's rows for a paired host's project when it is removed（[@nwparker](https://github.com/nwparker)，[#29436](https://github.com/stablyai/orca/pull/29436)）
- A reveal after hidden output was dropped always restores it（[@nwparker](https://github.com/nwparker)，[#29342](https://github.com/stablyai/orca/pull/29342)）
- Route a CLI close of a paired host's terminal to that host（[@nwparker](https://github.com/nwparker)，[#29455](https://github.com/stablyai/orca/pull/29455)）
- A headless host keeps a parked terminal at its viewer's size（[@nwparker](https://github.com/nwparker)，[#29349](https://github.com/stablyai/orca/pull/29349)）
- Flag a macOS host whose managed server outlived its launching SSH session（[@nwparker](https://github.com/nwparker)，[#29371](https://github.com/stablyai/orca/pull/29371)）
- Ship @linear/sdk with the managed server so Linear works on SSH hosts（[@nwparker](https://github.com/nwparker)，[#29388](https://github.com/stablyai/orca/pull/29388)）
- A paired-client open leaves originless legacy resume records unresumed（[@nwparker](https://github.com/nwparker)，[#29389](https://github.com/stablyai/orca/pull/29389)）
- Reap orphaned processes when orca serve is PID 1（[@nwparker](https://github.com/nwparker)，[#29390](https://github.com/stablyai/orca/pull/29390)）
- Replace a retired macOS terminal service job that blocks new terminals（[@nwparker](https://github.com/nwparker)，[#29395](https://github.com/stablyai/orca/pull/29395)）
- Try the waiting ~/.ssh key before showing a password dialog（[@nwparker](https://github.com/nwparker)，[#29397](https://github.com/stablyai/orca/pull/29397)）
- A reconnect replay no longer re-fires task-complete notifications（[@nwparker](https://github.com/nwparker)，[#29410](https://github.com/stablyai/orca/pull/29410)）
- Seal integration credentials on the headless server instead of storing them in plaintext（[@nwparker](https://github.com/nwparker)，[#29412](https://github.com/stablyai/orca/pull/29412)）
- Opt-in per-terminal memory and swap limits on terminal hosts（[@nwparker](https://github.com/nwparker)，[#29413](https://github.com/stablyai/orca/pull/29413)）
- A Windows terminal read no longer shows PowerShell's history suggestion as typed input（[@nwparker](https://github.com/nwparker)，[#29415](https://github.com/stablyai/orca/pull/29415)）
- Restoring more than 32 remote terminals queues them instead of failing（[@nwparker](https://github.com/nwparker)，[#29417](https://github.com/stablyai/orca/pull/29417)）
- A terminal the old daemon still runs is never handed to the new daemon after an update（[@nwparker](https://github.com/nwparker)，[#29418](https://github.com/stablyai/orca/pull/29418)）
- 保持：remote typing in the fast paint lane by measuring each pane's echo delay（[@nwparker](https://github.com/nwparker)，[#29419](https://github.com/stablyai/orca/pull/29419)）
- Log and survive recoverable process errors, stop cleanly on fatal ones（[@nwparker](https://github.com/nwparker)，[#29423](https://github.com/stablyai/orca/pull/29423)）
- Resolve the install root through a symlinked launch script（[@nwparker](https://github.com/nwparker)，[#29424](https://github.com/stablyai/orca/pull/29424)）
- Classify remote_runtime_busy as recoverable（[@nwparker](https://github.com/nwparker)，[#29425](https://github.com/stablyai/orca/pull/29425)）
- 保持：port forwarding controls for an SSH host that moved to its managed server（[@nwparker](https://github.com/nwparker)，[#29427](https://github.com/stablyai/orca/pull/29427)）
- Hermes settles and first-work rename runs on a headless host（[@nwparker](https://github.com/nwparker)，[#29429](https://github.com/stablyai/orca/pull/29429)）
- A phone wake no longer resumes an agent whose terminal is still running（[@nwparker](https://github.com/nwparker)，[#29431](https://github.com/stablyai/orca/pull/29431)）
- Fail when an explicit --port is taken instead of serving on another port（[@nwparker](https://github.com/nwparker)，[#29432](https://github.com/stablyai/orca/pull/29432)）
- A paired tab closed right after a restart stays closed on the first sync（[@nwparker](https://github.com/nwparker)，[#29433](https://github.com/stablyai/orca/pull/29433)）
- 允许：an unfinished SSH access link be retried or cancelled（[@nwparker](https://github.com/nwparker)，[#29441](https://github.com/stablyai/orca/pull/29441)）
- A remote pane comes back on its own once its host answers again（[@nwparker](https://github.com/nwparker)，[#29444](https://github.com/stablyai/orca/pull/29444)）
- Pick up ~/.ssh/config changes at launch and when the hosts menu opens（[@nwparker](https://github.com/nwparker)，[#29451](https://github.com/stablyai/orca/pull/29451)）
- 给予：each Linux account its own Xvfb display instead of sharing :99（[@nwparker](https://github.com/nwparker)，[#29458](https://github.com/stablyai/orca/pull/29458)）
- 显示：a paired server's terminal in this desktop on terminal switch（[@Velm14](https://github.com/Velm14)，[#28023](https://github.com/stablyai/orca/pull/28023)）
- Removing a managed server's SSH host points to Stop or Forget（[@nwparker](https://github.com/nwparker)，[#29450](https://github.com/stablyai/orca/pull/29450)）
- Explain --environment in terminal help and on a stale handle（[@nwparker](https://github.com/nwparker)，[#29453](https://github.com/stablyai/orca/pull/29453)）
- 发送：again a tab close the paired host never received（[@nwparker](https://github.com/nwparker)，[#29468](https://github.com/stablyai/orca/pull/29468)）
- Paired servers honor the desktop's Keep Local Main Up to Date（[@nwparker](https://github.com/nwparker)，[#29469](https://github.com/stablyai/orca/pull/29469)）
- 报告：Claude's workspace trust dialog from terminal show's agent wait（[@nwparker](https://github.com/nwparker)，[#29488](https://github.com/stablyai/orca/pull/29488)）
- A slept remote workspace stays hidden after host updates and restarts（[@nwparker](https://github.com/nwparker)，[#29437](https://github.com/stablyai/orca/pull/29437)）
- Close the gaps in the macOS launch-session warning（[@nwparker](https://github.com/nwparker)，[#29487](https://github.com/stablyai/orca/pull/29487)）
- Agents on a managed SSH host can drive the desktop Orca browser again, behind the per-host switch（[@nwparker](https://github.com/nwparker)，[#29384](https://github.com/stablyai/orca/pull/29384)）
- An SSH host with a managed server lists its checkout once in Run on（[@nwparker](https://github.com/nwparker)，[#29518](https://github.com/stablyai/orca/pull/29518)）
- 发送：modifyOtherKeys Enter chords to apps that armed it, so pi's Shift/Option+Enter stop drifting (STA-7701)（[@nwparker](https://github.com/nwparker)，[#29528](https://github.com/stablyai/orca/pull/29528)）
- Hidden relay-era SSH panes stop sending every output chunk to the window（[@nwparker](https://github.com/nwparker)，[#29537](https://github.com/stablyai/orca/pull/29537)）
- A paired client no longer keeps a finished remote pane on working（[@nwparker](https://github.com/nwparker)，[#29538](https://github.com/stablyai/orca/pull/29538)）
- A managed SSH/WSL server falls back when port 6768 is taken; WSL lane skips the MSI on 3.0.1 images（[@nwparker](https://github.com/nwparker)，[#29522](https://github.com/stablyai/orca/pull/29522)）
- Offer the held-back challenge when a strict MaxAuthTries host drops the key retry（[@nwparker](https://github.com/nwparker)，[#29541](https://github.com/stablyai/orca/pull/29541)）
- Start a managed server whose active slot has no launch artifacts（[@SungsooKwon](https://github.com/SungsooKwon)，[#29532](https://github.com/stablyai/orca/pull/29532)）
- Resolve session tab workspace path aliases（[@nwparker](https://github.com/nwparker)，[#29543](https://github.com/stablyai/orca/pull/29543)）
- A disconnect during the legacy relay bridge wait no longer republishes connected（[@nwparker](https://github.com/nwparker)，[#29544](https://github.com/stablyai/orca/pull/29544)）
- Honour a paired-client close for every sleeping record shape（[@nwparker](https://github.com/nwparker)，[#29546](https://github.com/stablyai/orca/pull/29546)）
- Hidden agent restores past the host's cap resume in the background once it has room（[@nwparker](https://github.com/nwparker)，[#29547](https://github.com/stablyai/orca/pull/29547)）
- Windows orcad stops cleanly when its Electron browser sidecar's profile is still locked（[@nwparker](https://github.com/nwparker)，[#29562](https://github.com/stablyai/orca/pull/29562)）
- Resolve terminal authority from workspace owner evidence（[@OrcaWin](https://github.com/OrcaWin)，[#29565](https://github.com/stablyai/orca/pull/29565)）
- 限制：the line-ending sample's index scan, not just its matches（[@nwparker](https://github.com/nwparker)，[#29552](https://github.com/stablyai/orca/pull/29552)）
- Clear the macOS launch-session warning after this client relaunches the server（[@nwparker](https://github.com/nwparker)，[#29579](https://github.com/stablyai/orca/pull/29579)）
- Notify for a task that finished during an SSH disconnect（[@nwparker](https://github.com/nwparker)，[#29580](https://github.com/stablyai/orca/pull/29580)）
- End the paused-output gap exemption once a snapshot covers it（[@nwparker](https://github.com/nwparker)，[#29582](https://github.com/stablyai/orca/pull/29582)）
- Reconnecting a host after stopping its managed server no longer fails the move (#29560)（[@nwparker](https://github.com/nwparker)，[#29586](https://github.com/stablyai/orca/pull/29586)）
- Reopening a slept tab resumes when the other holder's agent has proven exited（[@nwparker](https://github.com/nwparker)，[#29588](https://github.com/stablyai/orca/pull/29588)）
- Prove the held-6768 fallback in e2e and keep the managed marker out of terminals（[@nwparker](https://github.com/nwparker)，[#29569](https://github.com/stablyai/orca/pull/29569)）
- Free a lock whose PID another user now owns, and explain a possibly reused PID（[@nwparker](https://github.com/nwparker)，[#29548](https://github.com/stablyai/orca/pull/29548)）
- 跳过：the moved shell-history pass on starts with nothing to install（[@nwparker](https://github.com/nwparker)，[#29556](https://github.com/stablyai/orca/pull/29556)）
- 保持：one workspace spelling for an early alias session-tabs stream（[@nwparker](https://github.com/nwparker)，[#29592](https://github.com/stablyai/orca/pull/29592)）
- Relay-era terminals' orca orchestration commands work again, behind the per-host switch (STA-10765)（[@nwparker](https://github.com/nwparker)，[#29571](https://github.com/stablyai/orca/pull/29571)）
- Bind relay-era legacy coordinators to their host and cap inbox reads (STA-10765 follow-up)（[@nwparker](https://github.com/nwparker)，[#29596](https://github.com/stablyai/orca/pull/29596)）
- A managed server restart no longer marks still-running agents done（[@nwparker](https://github.com/nwparker)，[#29604](https://github.com/stablyai/orca/pull/29604)）
- The ledgered desktop rewrite stage that finishes a committed move (D1b-7b)（[@nwparker](https://github.com/nwparker)，[#29597](https://github.com/stablyai/orca/pull/29597)）
- 停止：a relay-era shell when its bridged tab closes（[@nwparker](https://github.com/nwparker)，[#29620](https://github.com/stablyai/orca/pull/29620)）
- Explain a locked macOS Keychain to the user and recover Linear/Jira without a restart（[@nwparker](https://github.com/nwparker)，[#29608](https://github.com/stablyai/orca/pull/29608)）
- A restarted managed server keeps the tab titles of terminals it adopts（[@nwparker](https://github.com/nwparker)，[#29623](https://github.com/stablyai/orca/pull/29623)）
- 保持：desktop 2 connected with its live relay terminal when desktop 1 already moved the host (STA-10604)（[@nwparker](https://github.com/nwparker)，[#29625](https://github.com/stablyai/orca/pull/29625)）
- Classify integrationCredentials RPC ownership（[@nwparker](https://github.com/nwparker)，[#29638](https://github.com/stablyai/orca/pull/29638)）
- Load the bridge panes module lazily so SSH state effects have no import side effect (fixes main after #29625)（[@nwparker](https://github.com/nwparker)，[#29646](https://github.com/stablyai/orca/pull/29646)）
- Right-click pastes once into Codex（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29647](https://github.com/stablyai/orca/pull/29647)）
- Notify for a managed-server task that finished during an SSH disconnect（[@nwparker](https://github.com/nwparker)，[#29636](https://github.com/stablyai/orca/pull/29636)）
- A restarted managed server republishes restored tab titles right away（[@nwparker](https://github.com/nwparker)，[#29654](https://github.com/stablyai/orca/pull/29654)）
- 保留：paste order across remote recovery（[@nwparker](https://github.com/nwparker)，[#29635](https://github.com/stablyai/orca/pull/29635)）
- Tell panes their daemon died at once and say when typed input was lost（[@nwparker](https://github.com/nwparker)，[#29660](https://github.com/stablyai/orca/pull/29660)）
- Reopening a workspace-slept agent tab on a managed host resumes it, without widening its permissions（[@nwparker](https://github.com/nwparker)，[#29672](https://github.com/stablyai/orca/pull/29672)）
- A revealed paired terminal fits once, at its real size, on Linux（[@nwparker](https://github.com/nwparker)，[#29668](https://github.com/stablyai/orca/pull/29668)）
- Repaint the viewport after an inline image is added（[@nwparker](https://github.com/nwparker)，[#29713](https://github.com/stablyai/orca/pull/29713)）
- 保持：the WSL CLI status check from timing out on a cold or slow-profile distro（[@nwparker](https://github.com/nwparker)，[#29814](https://github.com/stablyai/orca/pull/29814)）
- 打开：the picked Windows shell on a managed host instead of typing it into PowerShell（[@nwparker](https://github.com/nwparker)，[#29836](https://github.com/stablyai/orca/pull/29836)）
- Do not bind a loopback port another runtime already serves on all interfaces（[@nwparker](https://github.com/nwparker)，[#29837](https://github.com/stablyai/orca/pull/29837)）
- Never hibernate floating-workspace terminals（[@brennanb2025](https://github.com/brennanb2025)，[#29790](https://github.com/stablyai/orca/pull/29790)）
- Pi and OMP agents started from the window in WSL report status from their first launch（[@brennanb2025](https://github.com/brennanb2025)，[#29780](https://github.com/stablyai/orca/pull/29780)）
- 保持：the integration credential key only in the owner-only key file（[@nwparker](https://github.com/nwparker)，[#29859](https://github.com/stablyai/orca/pull/29859)）
- Turn a host's orca CLI control on by default and stop resetting saved choices（[@nwparker](https://github.com/nwparker)，[#29856](https://github.com/stablyai/orca/pull/29856)）
- 保持：the pane when a recovery snapshot is unavailable（[@nwparker](https://github.com/nwparker)，[#29874](https://github.com/stablyai/orca/pull/29874)）
- Replay a viewport claim made during remote recovery before typing（[@nwparker](https://github.com/nwparker)，[#29892](https://github.com/stablyai/orca/pull/29892)）
- A restarted orcad adopts its running agents, and a windowless host resumes slept running agents（[@nwparker](https://github.com/nwparker)，[#29885](https://github.com/stablyai/orca/pull/29885)）
- Don't hand a stopped pre-claim server on a shared home to whichever machine connects first（[@nwparker](https://github.com/nwparker)，[#29883](https://github.com/stablyai/orca/pull/29883)）
- A failed or cancelled WSL host Add leaves no holder or host behind（[@nwparker](https://github.com/nwparker)，[#29889](https://github.com/stablyai/orca/pull/29889)）
- 保持：a converted SSH host hidden when another host shares its repo id（[@nwparker](https://github.com/nwparker)，[#29873](https://github.com/stablyai/orca/pull/29873)）
- Run wsl.exe probes from the system folder, never the profile（[@nwparker](https://github.com/nwparker)，[#29853](https://github.com/stablyai/orca/pull/29853)）
- Seed the first terminal when a warm empty worktree is selected again（[@nwparker](https://github.com/nwparker)，[#29893](https://github.com/stablyai/orca/pull/29893)）
- 移动：the open workspace to its managed server after the cold-start scan（[@nwparker](https://github.com/nwparker)，[#29894](https://github.com/stablyai/orca/pull/29894)）
- Folder workspaces can run scoped browser commands on a headless host（[@nwparker](https://github.com/nwparker)，[#29881](https://github.com/stablyai/orca/pull/29881)）
- Link a moved project only to the server machine's own checkout（[@nwparker](https://github.com/nwparker)，[#29896](https://github.com/stablyai/orca/pull/29896)）
- Never claim or reclaim another machine's server, and recover a stale lock without displacing a live one（[@nwparker](https://github.com/nwparker)，[#29902](https://github.com/stablyai/orca/pull/29902)）
- 显示：the Ports panel for folder workspaces on a managed SSH server（[@nwparker](https://github.com/nwparker)，[#29908](https://github.com/stablyai/orca/pull/29908)）
- Infer the repo for worktree create when the parent is host-scoped by identity（[@nwparker](https://github.com/nwparker)，[#29909](https://github.com/stablyai/orca/pull/29909)）
- Relay-era pane reattach keeps output printed after its screen, and an exited or abandoned pane never comes back（[@nwparker](https://github.com/nwparker)，[#29910](https://github.com/stablyai/orca/pull/29910)）
- Re-check a macOS host's ended launch-session warning so another desktop's restart can clear it（[@nwparker](https://github.com/nwparker)，[#29915](https://github.com/stablyai/orca/pull/29915)）
- Ship the mobile web page so phones paired to orcad get it（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29882](https://github.com/stablyai/orca/pull/29882)）
- A Disconnect or Remove during a background connect sticks（[@nwparker](https://github.com/nwparker)，[#29918](https://github.com/stablyai/orca/pull/29918)）
- 停止：offering a project on a paired server's SSH host, and say where to add it（[@nwparker](https://github.com/nwparker)，[#29919](https://github.com/stablyai/orca/pull/29919)）
- A failed removal no longer leaves the host stuck as "being removed"（[@nwparker](https://github.com/nwparker)，[#29921](https://github.com/stablyai/orca/pull/29921)）
- Sleep a twin-published workspace on the host each terminal names, or refuse（[@nwparker](https://github.com/nwparker)，[#29929](https://github.com/stablyai/orca/pull/29929)）
- A relay on another node of a shared network home is unverifiable, not exited（[@nwparker](https://github.com/nwparker)，[#29928](https://github.com/stablyai/orca/pull/29928)）
- Opening a slept running agent on a host with no window resumes it, never a fresh launch（[@nwparker](https://github.com/nwparker)，[#29950](https://github.com/stablyai/orca/pull/29950)）
- 保持：an artifact slot another machine's serve or daemon still runs from（[@nwparker](https://github.com/nwparker)，[#29952](https://github.com/stablyai/orca/pull/29952)）
- 保持：existing hosts' orca CLI control off after the on-by-default flip（[@nwparker](https://github.com/nwparker)，[#29949](https://github.com/stablyai/orca/pull/29949)）
- Removing one host's copy of a project keeps its same-path twin's shells, tabs and edits（[@nwparker](https://github.com/nwparker)，[#29954](https://github.com/stablyai/orca/pull/29954)）
- A client that reconnects during idle shutdown can still open terminals（[@nwparker](https://github.com/nwparker)，[#29958](https://github.com/stablyai/orca/pull/29958)）
- 保持：Vim scrolling inside shrunken panes（[@nwparker](https://github.com/nwparker)，[#29960](https://github.com/stablyai/orca/pull/29960)）
- Recovering one split pane keeps its healthy sibling（[@nwparker](https://github.com/nwparker)，[#29961](https://github.com/stablyai/orca/pull/29961)）
- Reconnecting a stopped managed host keeps the server's project groups（[@nwparker](https://github.com/nwparker)，[#29962](https://github.com/stablyai/orca/pull/29962)）
- The host stops a removed project's shells and agents itself（[@nwparker](https://github.com/nwparker)，[#29964](https://github.com/stablyai/orca/pull/29964)）

#### Phone {#v1-4-229-phone}

> Use shared workspace filters and sorting, browse linked issues and notes, work with server workspaces, and resume supported chats in a new CLI conversation.

- Size onboarding slides to the modal sheet on iPad（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26919](https://github.com/stablyai/orca/pull/26919)）
- One host sidebar on iPad, with the page owning the host area（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26761](https://github.com/stablyai/orca/pull/26761)）
- 保持：chat drafts and the sidebar reachable on iPad（[@brennanb2025](https://github.com/brennanb2025)，[#26096](https://github.com/stablyai/orca/pull/26096)）
- Usage and account switching come from the paired server（[@OrcaWin](https://github.com/OrcaWin)，[#27135](https://github.com/stablyai/orca/pull/27135)）
- Jira reaches the server（[@OrcaWin](https://github.com/OrcaWin)，[#27136](https://github.com/stablyai/orca/pull/27136)）
- 保持：tool results with the right command and reveal all results on mobile（[@nwparker](https://github.com/nwparker)，[#26968](https://github.com/stablyai/orca/pull/26968)）
- Preselect LAN for a signed-out desktop（[@OrcaWin](https://github.com/OrcaWin)，[#27145](https://github.com/stablyai/orca/pull/27145)）
- A new pairing scan supersedes a stale relay pairing journal（[@OrcaWin](https://github.com/OrcaWin)，[#27157](https://github.com/stablyai/orca/pull/27157)）
- Agents for workspaces another runtime owns show why（[@OrcaWin](https://github.com/OrcaWin)，[#27196](https://github.com/stablyai/orca/pull/27196)）
- The paired server is the web client's only host（[@OrcaWin](https://github.com/OrcaWin)，[#27266](https://github.com/stablyai/orca/pull/27266)）
- 显示：SSH host health on the workspace row badge（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26415](https://github.com/stablyai/orca/pull/26415)）
- Relay a paired phone's server-workspace requests through the desktop (hidden)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26435](https://github.com/stablyai/orca/pull/26435)）
- 允许：the desktop list its servers and their workspaces for the phone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26442](https://github.com/stablyai/orca/pull/26442)）
- Direct connections use v2 framing and never fall back once v2 is seen（[@OrcaWin](https://github.com/OrcaWin)，[#27473](https://github.com/stablyai/orca/pull/27473)）
- Verified https pairing links; custom scheme carries no secret（[@OrcaWin](https://github.com/OrcaWin)，[#27475](https://github.com/stablyai/orca/pull/27475)）
- Run focused checks for Mobile CI tool changes（[@nwparker](https://github.com/nwparker)，[#27532](https://github.com/stablyai/orca/pull/27532)）
- 打开：Grok, OpenCode, OMP and Pi chats on the phone（[@brennanb2025](https://github.com/brennanb2025)，[#27212](https://github.com/stablyai/orca/pull/27212)）
- Accept a fresh terminal snapshot after a stream ends（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27539](https://github.com/stablyai/orca/pull/27539)）
- The browser signs in with a non-extractable device key, or pairs for this session only（[@OrcaWin](https://github.com/OrcaWin)，[#27552](https://github.com/stablyai/orca/pull/27552)）
- 允许：the OTA page send extra top-level request fields（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27815](https://github.com/stablyai/orca/pull/27815)）
- 显示：the OTA download as a progress bar（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28056](https://github.com/stablyai/orca/pull/28056)）
- 去掉：the download bar glide so it always matches the MB counter（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28089](https://github.com/stablyai/orca/pull/28089)）
- 保持：a not-sent message in place on the phone, using the desktop's logic（[@brennanb2025](https://github.com/brennanb2025)，[#27936](https://github.com/stablyai/orca/pull/27936)）
- Copy complete chat replies and loaded markdown（[@brennanb2025](https://github.com/brennanb2025)，[#26152](https://github.com/stablyai/orca/pull/26152)）
- Load markdown tabs from any desktop split group; center load-error Retry（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28132](https://github.com/stablyai/orca/pull/28132)）
- Link the Android APK through a stable URL and bump it on release（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28143](https://github.com/stablyai/orca/pull/28143)）
- Auto-hide menu bar in web popups and re-layout when revealed（[@AmethystLiang](https://github.com/AmethystLiang)，[#28388](https://github.com/stablyai/orca/pull/28388)）
- 显示：and use the desktop's server workspaces on the phone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26501](https://github.com/stablyai/orca/pull/26501)）
- 避免：repeated mobile recording checks and slow download assertions（[@nwparker](https://github.com/nwparker)，[#28468](https://github.com/stablyai/orca/pull/28468)）
- Create workspaces on the desktop's servers from the phone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26533](https://github.com/stablyai/orca/pull/26533)）
- View and drive server browser pages the desktop renders（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27749](https://github.com/stablyai/orca/pull/27749)）
- 保持：the chat where the reader scrolled to（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28413](https://github.com/stablyai/orca/pull/28413)）
- Check a server workspace's SSH state on that server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26519](https://github.com/stablyai/orca/pull/26519)）
- List the desktop's server projects on the phone's Tasks screen（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27741](https://github.com/stablyai/orca/pull/27741)）
- Make mobile and desktop searches agree（[@nwparker](https://github.com/nwparker)，[#28580](https://github.com/stablyai/orca/pull/28580)）
- Browse Jira and start workspaces on mobile（[@nwparker](https://github.com/nwparker)，[#28616](https://github.com/stablyai/orca/pull/28616)）
- Workspace list host badge, "workspaces" wording, and search keyboard on the page（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28824](https://github.com/stablyai/orca/pull/28824)）
- Log OTA shell lifecycle to the connection diagnostics（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28840](https://github.com/stablyai/orca/pull/28840)）
- 保持：content clear of the side insets in landscape（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28749](https://github.com/stablyai/orca/pull/28749)）
- 打开：Create Workspace and Close issue from Tasks on iOS（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28855](https://github.com/stablyai/orca/pull/28855)）
- Phone server rows follow the desktop's other-client and sleeping filters（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28819](https://github.com/stablyai/orca/pull/28819)）
- Render markdown with markdown-it instead of a hand-written reader（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28858](https://github.com/stablyai/orca/pull/28858)）
- Group by Project with the desktop sidebar's own code（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28850](https://github.com/stablyai/orca/pull/28850)）
- Native chat: desktop and mobile read the host's working answer; plain refusal for a stopped agent's prompt (3/5, rebuild of #26867)（[@brennanb2025](https://github.com/brennanb2025)，[#28104](https://github.com/stablyai/orca/pull/28104)）
- 显示：skill commands you ran and draw warnings, errors and status lines as notices（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28899](https://github.com/stablyai/orca/pull/28899)）
- The phone filters and sorts with the desktop's shared Workspace options rules（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28986](https://github.com/stablyai/orca/pull/28986)）
- 显示：answered approvals and questions as receipts, and a waiting question as "Awaiting user input"（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28906](https://github.com/stablyai/orca/pull/28906)）
- Phones on a host with no window list each terminal once（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29085](https://github.com/stablyai/orca/pull/29085)）
- 保持：Jira saved and status filters in the browser client（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29203](https://github.com/stablyai/orca/pull/29203)）
- 打开：the OTA workspace page on iOS 18（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29197](https://github.com/stablyai/orca/pull/29197)）
- 停止："Opening workspace" spinning forever when the page never loads（[@nwparker](https://github.com/nwparker)，[#29274](https://github.com/stablyai/orca/pull/29274)）
- 打开：each chat at its newest message when switching chats（[@brennanb2025](https://github.com/brennanb2025)，[#29099](https://github.com/stablyai/orca/pull/29099)）
- The phone's Workspace options sheet, with every desktop option（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28997](https://github.com/stablyai/orca/pull/28997)）
- 显示：phone subagents and open the correct parent chat（[@brennanb2025](https://github.com/brennanb2025)，[#28686](https://github.com/stablyai/orca/pull/28686)）
- Long-press a workspace to see its linked PR, issues and notes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29225](https://github.com/stablyai/orca/pull/29225)）
- Say the host is unreachable and reload when it answers, instead of "Session restore failed"（[@nwparker](https://github.com/nwparker)，[#29460](https://github.com/stablyai/orca/pull/29460)）
- Agent Session History resumes sessions in SSH workspaces that can read them（[@nwparker](https://github.com/nwparker)，[#29461](https://github.com/stablyai/orca/pull/29461)）
- 保持：the app download going over a slow link instead of timing out each queued read（[@nwparker](https://github.com/nwparker)，[#29751](https://github.com/stablyai/orca/pull/29751)）
- 移除：only Orca's own adb forwards when an Android session stops（[@zanmlakar](https://github.com/zanmlakar)，[#28780](https://github.com/stablyai/orca/pull/28780)）
- 停止：phone reconnects from undoing a desktop take-back（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29465](https://github.com/stablyai/orca/pull/29465)）
- Draw your own messages as markdown, fold long ones and open attached pictures full size（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29075](https://github.com/stablyai/orca/pull/29075)）
- 停止：re-downloading a current OTA bundle on entry（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29860](https://github.com/stablyai/orca/pull/29860)）
- 恢复：in New CLI from a phone chat tab（[@brennanb2025](https://github.com/brennanb2025)，[#29783](https://github.com/stablyai/orca/pull/29783)）
- A streaming reply reveals word by word, like the desktop（[@brennanb2025](https://github.com/brennanb2025)，[#29148](https://github.com/stablyai/orca/pull/29148)）
- Re-read a server's capabilities when the server reconnects, not only the desktop（[@nwparker](https://github.com/nwparker)，[#29913](https://github.com/stablyai/orca/pull/29913)）
- 显示：message times, keep the long-press sheet open, and say when a conversation isn't found（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29105](https://github.com/stablyai/orca/pull/29105)）
- Order sidebar names the same on desktop, phone and server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29946](https://github.com/stablyai/orca/pull/29946)）
- 移除：the dead space around the chat composer（[@brennanb2025](https://github.com/brennanb2025)，[#29224](https://github.com/stablyai/orca/pull/29224)）
- Pair and stay paired from plain-http LAN and Tailscale pages again (partial revert of #27540)（[@nwparker](https://github.com/nwparker)，[#29984](https://github.com/stablyai/orca/pull/29984)）

#### Workspaces, sidebar & tabs {#v1-4-229-workspaces-sidebar-tabs}

> See checkout progress, clean up workspaces with clearer confirmation, and keep project ownership, sidebar order and restored tabs consistent.

- 打开：links and window.open in Orca tabs the way Chrome does（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26976](https://github.com/stablyai/orca/pull/26976)）
- Refs/heads/update-wechat-qr-code-2（[@AmethystLiang](https://github.com/AmethystLiang)，[#27036](https://github.com/stablyai/orca/pull/27036)）
- A session write cannot bring back a tab its partition recorded as closed（[@OrcaWin](https://github.com/OrcaWin)，[#27125](https://github.com/stablyai/orca/pull/27125)）
- Copy stable tab references（[@fabricedge](https://github.com/fabricedge)，[#26881](https://github.com/stablyai/orca/pull/26881)）
- 新增：CLI commands to manage and find workspace references（[@nwparker](https://github.com/nwparker)，[#26807](https://github.com/stablyai/orca/pull/26807)）
- Pairing with this same Orca profile is refused（[@OrcaWin](https://github.com/OrcaWin)，[#27166](https://github.com/stablyai/orca/pull/27166)）
- 修复：roadmap crash with plugin language packs（[@nwparker](https://github.com/nwparker)，[#26860](https://github.com/stablyai/orca/pull/26860)）
- 保留：Git history lanes through unrelated roots（[@nwparker](https://github.com/nwparker)，[#26932](https://github.com/stablyai/orca/pull/26932)）
- 保持：repository detection off the main registration thread（[@nwparker](https://github.com/nwparker)，[#26760](https://github.com/stablyai/orca/pull/26760)）
- Await Git checks while discovering and importing nested projects（[@nwparker](https://github.com/nwparker)，[#26790](https://github.com/stablyai/orca/pull/26790)）
- 保持：folder Git upgrades responsive and recheck project ownership（[@nwparker](https://github.com/nwparker)，[#26791](https://github.com/stablyai/orca/pull/26791)）
- Re-pairing the same server keeps its environment（[@OrcaWin](https://github.com/OrcaWin)，[#27197](https://github.com/stablyai/orca/pull/27197)）
- PR reads and actions follow the ownership table（[@OrcaWin](https://github.com/OrcaWin)，[#27248](https://github.com/stablyai/orca/pull/27248)）
- 保留：alias recovery while guarding destructive suggestions（[@nwparker](https://github.com/nwparker)，[#26934](https://github.com/stablyai/orca/pull/26934)）
- 保留：explicit workspace names after selecting tasks（[@nwparker](https://github.com/nwparker)，[#26937](https://github.com/stablyai/orca/pull/26937)）
- Return current preferences after slow updates（[@nwparker](https://github.com/nwparker)，[#27199](https://github.com/stablyai/orca/pull/27199)）
- List the cold-relaunch tab-order swap as known on main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27353](https://github.com/stablyai/orca/pull/27353)）
- Clean up completed permission helpers asynchronously（[@nwparker](https://github.com/nwparker)，[#27347](https://github.com/stablyai/orca/pull/27347)）
- 保持：NUL-separated source literals searchable（[@nwparker](https://github.com/nwparker)，[#26864](https://github.com/stablyai/orca/pull/26864)）
- Release macOS screenshot memory after each request（[@f8team](https://github.com/f8team)，[#27374](https://github.com/stablyai/orca/pull/27374)）
- 保持：Node-only Quick Open path accumulator out of the renderer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27372](https://github.com/stablyai/orca/pull/27372)）
- Require pointer rest before opening activity hover cards（[@AmethystLiang](https://github.com/AmethystLiang)，[#25931](https://github.com/stablyai/orca/pull/25931)）
- Accept a notification's workspace server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26516](https://github.com/stablyai/orca/pull/26516)）
- 保持：deferred line-init defined for plugins that call it by name（[@nwparker](https://github.com/nwparker)，[#26842](https://github.com/stablyai/orca/pull/26842)）
- 修复：cold proxy authentication in the desktop HTTP client（[@nwparker](https://github.com/nwparker)，[#26957](https://github.com/stablyai/orca/pull/26957)）
- 忽略：delayed PR/MR lookups after you change the form（[@nwparker](https://github.com/nwparker)，[#26954](https://github.com/stablyai/orca/pull/26954)）
- 新增：manual cleanup for worktree Electron storage（[@nwparker](https://github.com/nwparker)，[#27414](https://github.com/stablyai/orca/pull/27414)）
- 停止：the AppImage crashpad handler before the mount goes away（[@sergeytiron](https://github.com/sergeytiron)，[#23459](https://github.com/stablyai/orca/pull/23459)）
- 停止：a removed folder workspace from leaving a blank row（[@bbingz](https://github.com/bbingz)，[#26376](https://github.com/stablyai/orca/pull/26376)）
- A removed layout writer no longer fails other PRs' ratchet check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27557](https://github.com/stablyai/orca/pull/27557)）
- 保持：the 'worktree is ready' toast until dismissed（[@brennanb2025](https://github.com/brennanb2025)，[#27566](https://github.com/stablyai/orca/pull/27566)）
- Jump instead of smooth-scrolling under reduced motion（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26796](https://github.com/stablyai/orca/pull/26796)）
- Check real I/O progress during worktree deletion（[@nwparker](https://github.com/nwparker)，[#27620](https://github.com/stablyai/orca/pull/27620)）
- 恢复：dialog: show a finished resume as a result, not a picker（[@brennanb2025](https://github.com/brennanb2025)，[#27732](https://github.com/stablyai/orca/pull/27732)）
- 保持：Wayland clipboard text current（[@nwparker](https://github.com/nwparker)，[#27772](https://github.com/stablyai/orca/pull/27772)）
- 保持：extracted AppImage copies that something still runs from（[@OrcaWin](https://github.com/OrcaWin)，[#28002](https://github.com/stablyai/orca/pull/28002)）
- Clear a cancelled macOS install request before staging the next update（[@OrcaWin](https://github.com/OrcaWin)，[#28010](https://github.com/stablyai/orca/pull/28010)）
- Run Windows hooks without requiring PowerShell 7（[@OrcaWin](https://github.com/OrcaWin)，[#27626](https://github.com/stablyai/orca/pull/27626)）
- 保持：a "chats resumed" entry in the bottom bar until you've seen the result（[@brennanb2025](https://github.com/brennanb2025)，[#27580](https://github.com/stablyai/orca/pull/27580)）
- Point the main sync-spawn ratchet at the shared ratchet library（[@OrcaWin](https://github.com/OrcaWin)，[#28054](https://github.com/stablyai/orca/pull/28054)）
- 给予：Kimi a Windows .cmd status hook that cmd.exe can run（[@OrcaWin](https://github.com/OrcaWin)，[#27714](https://github.com/stablyai/orca/pull/27714)）
- 减小：transcript waits and redundant runner demand（[@nwparker](https://github.com/nwparker)，[#28060](https://github.com/stablyai/orca/pull/28060)）
- 停止：the workspace link icon lighting up on hover（[@brennanb2025](https://github.com/brennanb2025)，[#28078](https://github.com/stablyai/orca/pull/28078)）
- Warm only Linux for compiler recipe changes（[@nwparker](https://github.com/nwparker)，[#28081](https://github.com/stablyai/orca/pull/28081)）
- 停止：closed diff editors from leaking through Monaco's gutter menu（[@brennanb2025](https://github.com/brennanb2025)，[#27793](https://github.com/stablyai/orca/pull/27793)）
- Name the code behind a renderer out-of-memory crash（[@brennanb2025](https://github.com/brennanb2025)，[#27814](https://github.com/stablyai/orca/pull/27814)）
- 恢复：toast: say what happened and name its action（[@brennanb2025](https://github.com/brennanb2025)，[#28068](https://github.com/stablyai/orca/pull/28068)）
- 停止：only the named simulator's stream helper (STA-10307)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28176](https://github.com/stablyai/orca/pull/28176)）
- Close worktree ready notification when its workspace opens（[@nwparker](https://github.com/nwparker)，[#28238](https://github.com/stablyai/orca/pull/28238)）
- Register the stable launcher when serving from an extracted AppImage（[@OrcaWin](https://github.com/OrcaWin)，[#28241](https://github.com/stablyai/orca/pull/28241)）
- 显示：folder workspaces in the Cmd+J jump palette（[@AmethystLiang](https://github.com/AmethystLiang)，[#28175](https://github.com/stablyai/orca/pull/28175)）
- 恢复：the saved active group as a window does in the session-tabs projection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28174](https://github.com/stablyai/orca/pull/28174)）
- 移除：read macOS notifications from Notification Center by pane thread（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28425](https://github.com/stablyai/orca/pull/28425)）
- 更新：status bar and tray labels when language changes（[@nwparker](https://github.com/nwparker)，[#28226](https://github.com/stablyai/orca/pull/28226)）
- 保留：significant spaces in Explorer contents search（[@nwparker](https://github.com/nwparker)，[#28222](https://github.com/stablyai/orca/pull/28222)）
- 修复：linked reviews stuck loading on detached workspaces（[@nwparker](https://github.com/nwparker)，[#28228](https://github.com/stablyai/orca/pull/28228)）
- 支持：restarting Windows Orca as administrator（[@nwparker](https://github.com/nwparker)，[#28073](https://github.com/stablyai/orca/pull/28073)）
- 修复：Vercel recipe failures on stock macOS Bash（[@nwparker](https://github.com/nwparker)，[#28257](https://github.com/stablyai/orca/pull/28257)）
- Warn when a workspace status has no board column（[@nwparker](https://github.com/nwparker)，[#28264](https://github.com/stablyai/orca/pull/28264)）
- 区分：unreadable cookies from related import skips（[@nwparker](https://github.com/nwparker)，[#28269](https://github.com/stablyai/orca/pull/28269)）
- Release dictation window listeners after stop（[@nwparker](https://github.com/nwparker)，[#28260](https://github.com/stablyai/orca/pull/28260)）
- AI buttons stop writing a launch record（[@brennanb2025](https://github.com/brennanb2025)，[#28209](https://github.com/stablyai/orca/pull/28209)）
- 跳过：Windows security addon steps when the builder is missing（[@AmethystLiang](https://github.com/AmethystLiang)，[#28546](https://github.com/stablyai/orca/pull/28546)）
- 给予：Windows taskkill a 5s budget to reduce flaky tree cleanup（[@AmethystLiang](https://github.com/AmethystLiang)，[#28577](https://github.com/stablyai/orca/pull/28577)）
- 更新：WeChat Group 12 QR code [skip ci]（[@AmethystLiang](https://github.com/AmethystLiang)，[#28639](https://github.com/stablyai/orca/pull/28639)）
- Match modifier chords pressed during IME composition by physical key（[@nwparker](https://github.com/nwparker)，[#28620](https://github.com/stablyai/orca/pull/28620)）
- Require a unique full PR gate before merging（[@nwparker](https://github.com/nwparker)，[#28632](https://github.com/stablyai/orca/pull/28632)）
- 停止：orphaned background browsers from blocking Orca updates（[@nwparker](https://github.com/nwparker)，[#28562](https://github.com/stablyai/orca/pull/28562)）
- Search connected tasks by keyword from Cmd+J（[@nwparker](https://github.com/nwparker)，[#28617](https://github.com/stablyai/orca/pull/28617)）
- One owner for the cloud session; never drop a rotated token, stop after a 401（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28523](https://github.com/stablyai/orca/pull/28523)）
- Never delete a folder git no longer tracks（[@brennanb2025](https://github.com/brennanb2025)，[#25075](https://github.com/stablyai/orca/pull/25075)）
- Shorten worker sub-dispatch instructions（[@AmethystLiang](https://github.com/AmethystLiang)，[#28565](https://github.com/stablyai/orca/pull/28565)）
- A pane is read when it is on screen; closing a waiting tab clears its dot（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28637](https://github.com/stablyai/orca/pull/28637)）
- 保持：CI failure excerpts bounded and strip malformed ANSI controls linearly（[@AmethystLiang](https://github.com/AmethystLiang)，[#28671](https://github.com/stablyai/orca/pull/28671)）
- 跳过：reindexing unchanged transcripts on cold session list reads（[@AmethystLiang](https://github.com/AmethystLiang)，[#28798](https://github.com/stablyai/orca/pull/28798)）
- Reclaim idle worktree space automatically on dev startup（[@nwparker](https://github.com/nwparker)，[#28864](https://github.com/stablyai/orca/pull/28864)）
- 减小：import, frame-capture, teardown, and shard costs（[@nwparker](https://github.com/nwparker)，[#28879](https://github.com/stablyai/orca/pull/28879)）
- Prepare Windows natives with scoped compiler settings and measure servicing（[@nwparker](https://github.com/nwparker)，[#28881](https://github.com/stablyai/orca/pull/28881)）
- 减小：runner occupancy in release and contract jobs（[@nwparker](https://github.com/nwparker)，[#28930](https://github.com/stablyai/orca/pull/28930)）
- 跳过：packaging for verified unit harnesses（[@nwparker](https://github.com/nwparker)，[#28934](https://github.com/stablyai/orca/pull/28934)）
- Contain persistent transforms and trim model overhead（[@nwparker](https://github.com/nwparker)，[#28948](https://github.com/stablyai/orca/pull/28948)）
- Hidden workspaces stop notifying unless you opt in（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28870](https://github.com/stablyai/orca/pull/28870)）
- 保持：a tab in the group it names when loading an old saved layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28941](https://github.com/stablyai/orca/pull/28941)）
- 去掉：the pre-tab-bar session format; orphan recovery writes tab-bar entries（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28990](https://github.com/stablyai/orca/pull/28990)）
- One-time profile backup before startup rewrites saved data（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29016](https://github.com/stablyai/orca/pull/29016)）
- 升级：Electron to 43.7.8 to fix find-in-page looping（[@AmethystLiang](https://github.com/AmethystLiang)，[#28909](https://github.com/stablyai/orca/pull/28909)）
- 新增：bottom padding so last reply controls clear the composer（[@AmethystLiang](https://github.com/AmethystLiang)，[#29046](https://github.com/stablyai/orca/pull/29046)）
- Unify lineage child indentation across worktree cards（[@AmethystLiang](https://github.com/AmethystLiang)，[#29044](https://github.com/stablyai/orca/pull/29044)）
- Recover failed-job log retrieval onto main（[@AmethystLiang](https://github.com/AmethystLiang)，[#29180](https://github.com/stablyai/orca/pull/29180)）
- 保持：merge-tree's throwaway trees out of the real object store（[@brennanb2025](https://github.com/brennanb2025)，[#22356](https://github.com/stablyai/orca/pull/22356)）
- 允许：worktree parents across projects on the same machine（[@brennanb2025](https://github.com/brennanb2025)，[#28942](https://github.com/stablyai/orca/pull/28942)）
- 保持：recent worktree streams warm and stop resubscribing live ones（[@nwparker](https://github.com/nwparker)，[#29241](https://github.com/stablyai/orca/pull/29241)）
- Cancel superseded PR cache warmers（[@nwparker](https://github.com/nwparker)，[#29279](https://github.com/stablyai/orca/pull/29279)）
- 显示：checkout progress while a worktree is created（[@brennanb2025](https://github.com/brennanb2025)，[#24093](https://github.com/stablyai/orca/pull/24093)）
- 保持：the SQLite failure behind a startup open error across the writer worker（[@nwparker](https://github.com/nwparker)，[#29280](https://github.com/stablyai/orca/pull/29280)）
- 修复：first code block staying uncoloured on slow machines（[@nwparker](https://github.com/nwparker)，[#29290](https://github.com/stablyai/orca/pull/29290)）
- Publish a readable /usr/local/bin/orca symlink on macOS and repair unreadable ones（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29245](https://github.com/stablyai/orca/pull/29245)）
- 移动：panes and save divider sizes through main behind ORCA_LAYOUT_OWNER（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29192](https://github.com/stablyai/orca/pull/29192)）
- Render Kitty images at Unicode placeholder cells（[@nwparker](https://github.com/nwparker)，[#26031](https://github.com/stablyai/orca/pull/26031)）
- Cold-start Smart and Manual-fallback rows follow another client's order save（[@nwparker](https://github.com/nwparker)，[#29486](https://github.com/stablyai/orca/pull/29486)）
- Normalize CI log excerpts when check details arrive（[@AmethystLiang](https://github.com/AmethystLiang)，[#28694](https://github.com/stablyai/orca/pull/28694)）
- Offer always-delete option for preserved branches（[@nwparker](https://github.com/nwparker)，[#29505](https://github.com/stablyai/orca/pull/29505)）
- Make failed check details readable and easy to retry（[@AmethystLiang](https://github.com/AmethystLiang)，[#28702](https://github.com/stablyai/orca/pull/28702)）
- Make chart zoom and Finder reveal usable（[@nwparker](https://github.com/nwparker)，[#29567](https://github.com/stablyai/orca/pull/29567)）
- Adding a project through a symlink alias reuses the existing project（[@nwparker](https://github.com/nwparker)，[#29651](https://github.com/stablyai/orca/pull/29651)）
- Refuse a folder-to-Git type change that would hide folder workspaces（[@brennanb2025](https://github.com/brennanb2025)，[#29257](https://github.com/stablyai/orca/pull/29257)）
- 显示：a Keychain unlock on its own instead of leaving the locked notice up（[@nwparker](https://github.com/nwparker)，[#29815](https://github.com/stablyai/orca/pull/29815)）
- 保持：dedicated E2E specs out of general CI shard plan（[@AmethystLiang](https://github.com/AmethystLiang)，[#28161](https://github.com/stablyai/orca/pull/28161)）
- Run automated workspace setup in a dedicated Setup tab（[@AmethystLiang](https://github.com/AmethystLiang)，[#29819](https://github.com/stablyai/orca/pull/29819)）
- 显示：a PR found by Refresh, not "already exists"（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29231](https://github.com/stablyai/orca/pull/29231)）
- Paste CleanShot JPEG screenshots stored under the macOS PNG type（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29685](https://github.com/stablyai/orca/pull/29685)）
- Offer Force Delete with a plain warning when a checkout has submodules（[@brennanb2025](https://github.com/brennanb2025)，[#28878](https://github.com/stablyai/orca/pull/28878)）
- 移除：close-button tooltip（[@AmethystLiang](https://github.com/AmethystLiang)，[#29851](https://github.com/stablyai/orca/pull/29851)）
- A manual folder-to-Git change proves the folder is the Git root first（[@brennanb2025](https://github.com/brennanb2025)，[#29282](https://github.com/stablyai/orca/pull/29282)）
- Compact the Space window layout（[@nwparker](https://github.com/nwparker)，[#29857](https://github.com/stablyai/orca/pull/29857)）
- Catch up desktop chats from the newest page（[@brennanb2025](https://github.com/brennanb2025)，[#29125](https://github.com/stablyai/orca/pull/29125)）
- Never reclaim a create preparation another machine owns（[@nwparker](https://github.com/nwparker)，[#29957](https://github.com/stablyai/orca/pull/29957)）

#### Editor, files & Markdown {#v1-4-229-editor-files-markdown}

> 保持：files, previews and editor actions attached to the right workspace and machine.

- 允许：paired-server files to drop into their own terminals（[@nwparker](https://github.com/nwparker)，[#26931](https://github.com/stablyai/orca/pull/26931)）
- Orca file open and diff open name their owner（[@OrcaWin](https://github.com/OrcaWin)，[#27154](https://github.com/stablyai/orca/pull/27154)）
- A paired-server link outside its workspace opens in the host workspace that holds it（[@OrcaWin](https://github.com/OrcaWin)，[#27226](https://github.com/stablyai/orca/pull/27226)）
- Client drops on a remote composer upload through the import transaction（[@OrcaWin](https://github.com/OrcaWin)，[#27227](https://github.com/stablyai/orca/pull/27227)）
- Links to this computer in a remote terminal open on the client with trusted provenance（[@OrcaWin](https://github.com/OrcaWin)，[#27234](https://github.com/stablyai/orca/pull/27234)）
- A managed terminal links and opens a host file outside its workspace（[@OrcaWin](https://github.com/OrcaWin)，[#27364](https://github.com/stablyai/orca/pull/27364)）
- Paste a macOS image copied beside its file URL（[@benjaminb10](https://github.com/benjaminb10)，[#27346](https://github.com/stablyai/orca/pull/27346)）
- Save editor-only host sessions during quit（[@nwparker](https://github.com/nwparker)，[#26848](https://github.com/stablyai/orca/pull/26848)）
- Load authorized web fonts in HTML previews（[@nwparker](https://github.com/nwparker)，[#26849](https://github.com/stablyai/orca/pull/26849)）
- Editor: Nim and Typst on the shared TextMate layer, so a long line can't freeze the window（[@brennanb2025](https://github.com/brennanb2025)，[#26987](https://github.com/stablyai/orca/pull/26987)）
- Share any HTML file from the editor and the remote preview（[@brennanb2025](https://github.com/brennanb2025)，[#27608](https://github.com/stablyai/orca/pull/27608)）
- 修复：main CI failures in preview lint and history cleanup（[@nwparker](https://github.com/nwparker)，[#28108](https://github.com/stablyai/orca/pull/28108)）
- 保持：a pinned duplicate open on close and ignore setActiveFile for a missing file（[@BearMett](https://github.com/BearMett)，[#28120](https://github.com/stablyai/orca/pull/28120)）
- Restrict secure files in-process instead of spawning icacls（[@OrcaWin](https://github.com/OrcaWin)，[#28135](https://github.com/stablyai/orca/pull/28135)）
- 保留：valid terminal file links when another candidate fails（[@nwparker](https://github.com/nwparker)，[#28272](https://github.com/stablyai/orca/pull/28272)）
- Never write through a dangling symlink（[@brennanb2025](https://github.com/brennanb2025)，[#28385](https://github.com/stablyai/orca/pull/28385)）
- 打开：files at a requested line and column（[@nwparker](https://github.com/nwparker)，[#28240](https://github.com/stablyai/orca/pull/28240)）
- The host serves a chat's scratch folder as a file root（[@brennanb2025](https://github.com/brennanb2025)，[#28397](https://github.com/stablyai/orca/pull/28397)）
- Enter on a visited site's name opens the site, not a file（[@AmethystLiang](https://github.com/AmethystLiang)，[#28804](https://github.com/stablyai/orca/pull/28804)）
- Copy a file to the clipboard without a visible PowerShell window（[@zanmlakar](https://github.com/zanmlakar)，[#28781](https://github.com/stablyai/orca/pull/28781)）
- A local worktree's tabs stay on this machine when its project is also on a paired server（[@nwparker](https://github.com/nwparker)，[#29403](https://github.com/stablyai/orca/pull/29403)）
- 打开：large HTML, PDFs and images on a paired runtime（[@nwparker](https://github.com/nwparker)，[#29426](https://github.com/stablyai/orca/pull/29426)）

#### Browser, skills & feedback {#v1-4-229-browser-skills-feedback}

> 打开：typed websites from Cmd/Ctrl+J, share skills with more agents, and keep browser actions on the intended host.

- An absent editor or browser map is not a round-trip change（[@OrcaWin](https://github.com/OrcaWin)，[#27007](https://github.com/stablyai/orca/pull/27007)）
- 保持：browser tabs clickable after a drag that never starts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26986](https://github.com/stablyai/orca/pull/26986)）
- Return JPEG bytes for JPEG viewport screenshots（[@nwparker](https://github.com/nwparker)，[#26856](https://github.com/stablyai/orca/pull/26856)）
- Say an SSH repo was not scanned instead of dropping it silently（[@OrcaWin](https://github.com/OrcaWin)，[#27261](https://github.com/stablyai/orca/pull/27261)）
- Double-click in the address bar selects a word, like other browsers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27371](https://github.com/stablyai/orca/pull/27371)）
- Refuse web pages on the agent-browser CDP proxy（[@OrcaWin](https://github.com/OrcaWin)，[#27415](https://github.com/stablyai/orca/pull/27415)）
- Judge official skill updates by ownership, not snapshot matching（[@OrcaWin](https://github.com/OrcaWin)，[#27603](https://github.com/stablyai/orca/pull/27603)）
- End a page's mount admission whenever it leaves the store（[@brennanb2025](https://github.com/brennanb2025)，[#27755](https://github.com/stablyai/orca/pull/27755)）
- End a background page's mount admission after its first load（[@brennanb2025](https://github.com/brennanb2025)，[#27754](https://github.com/stablyai/orca/pull/27754)）
- Settle WSL tunnel reads so responses past 256 KiB complete（[@OrcaWin](https://github.com/OrcaWin)，[#27625](https://github.com/stablyai/orca/pull/27625)）
- Annotation card and outline follow the picked element（[@brennanb2025](https://github.com/brennanb2025)，[#27875](https://github.com/stablyai/orca/pull/27875)）
- Use a minimize icon in the Update skills dialog（[@nwparker](https://github.com/nwparker)，[#28107](https://github.com/stablyai/orca/pull/28107)）
- Collapse the annotation panel to one row（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28138](https://github.com/stablyai/orca/pull/28138)）
- Require a target for ambiguous keypress commands（[@nwparker](https://github.com/nwparker)，[#28221](https://github.com/stablyai/orca/pull/28221)）
- 修复：browser login popups and menu actions in native windows（[@AmethystLiang](https://github.com/AmethystLiang)，[#28474](https://github.com/stablyai/orca/pull/28474)）
- Agent bringToFront and activateTarget no longer take your keyboard (1/3)（[@nwparker](https://github.com/nwparker)，[#28452](https://github.com/stablyai/orca/pull/28452)）
- Agent keys and text go to the page, never into your terminal (2/3)（[@nwparker](https://github.com/nwparker)，[#28453](https://github.com/stablyai/orca/pull/28453)）
- Agent clicks give your keyboard back (3/3)（[@nwparker](https://github.com/nwparker)，[#28454](https://github.com/stablyai/orca/pull/28454)）
- Force git messages to English so skill updates work in translated locales（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28994](https://github.com/stablyai/orca/pull/28994)）
- Agent typing into a cross-site frame no longer borrows your keyboard（[@nwparker](https://github.com/nwparker)，[#29000](https://github.com/stablyai/orca/pull/29000)）
- End downloads that are waiting for a manual resume Orca never offers（[@brennanb2025](https://github.com/brennanb2025)，[#28936](https://github.com/stablyai/orca/pull/28936)）
- Settle client-hosted download toasts after their page closes（[@brennanb2025](https://github.com/brennanb2025)，[#28913](https://github.com/stablyai/orca/pull/28913)）
- 推导：skill discovery folders and home env overrides from the agent provider table（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29022](https://github.com/stablyai/orca/pull/29022)）
- Share again under an existing skill bundle name as a new version（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29090](https://github.com/stablyai/orca/pull/29090)）
- Install shared skills for 20 more agents and read every agent home in WSL（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29122](https://github.com/stablyai/orca/pull/29122)）
- Group skill update checks by operating system（[@nwparker](https://github.com/nwparker)，[#29021](https://github.com/stablyai/orca/pull/29021)）
- Managed SSH terminal links open in the Orca Browser again（[@OrcaWin](https://github.com/OrcaWin)，[#29215](https://github.com/stablyai/orca/pull/29215)）
- Always allow leaving when a page asks to confirm（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29142](https://github.com/stablyai/orca/pull/29142)）
- 推迟：capture cleanup until streamed tabs finish closing（[@OrcaWin](https://github.com/OrcaWin)，[#29365](https://github.com/stablyai/orca/pull/29365)）
- The remote browser tunnel goes through the server's outbound proxy（[@nwparker](https://github.com/nwparker)，[#29420](https://github.com/stablyai/orca/pull/29420)）
- Closing a headless server's browser tab no longer crashes the server（[@nwparker](https://github.com/nwparker)，[#29480](https://github.com/stablyai/orca/pull/29480)）
- List symlinked folders as folders in the remote Add Project browser（[@nwparker](https://github.com/nwparker)，[#29658](https://github.com/stablyai/orca/pull/29658)）
- 允许：Cmd+J open typed websites in a new browser tab（[@AmethystLiang](https://github.com/AmethystLiang)，[#29050](https://github.com/stablyai/orca/pull/29050)）

#### Performance & reliability {#v1-4-229-performance-reliability}

> 减小：repeated status subscriptions and session-stream work, avoid blocking WSL checks, and make workspace creation and switching smoother.

- 发送：PTY output to main as raw bytes, not NDJSON（[@outof-place](https://github.com/outof-place)，[#27006](https://github.com/stablyai/orca/pull/27006)）
- 保持：per-source usage caches off the main thread（[@outof-place](https://github.com/outof-place)，[#26980](https://github.com/stablyai/orca/pull/26980)）
- Resolve terminal names once per full process capture（[@nwparker](https://github.com/nwparker)，[#27146](https://github.com/stablyai/orca/pull/27146)）
- Pipeline fresh transcript discovery with bounded I/O（[@outof-place](https://github.com/outof-place)，[#27009](https://github.com/stablyai/orca/pull/27009)）
- 减小：terminal ANSI scanning work（[@nwparker](https://github.com/nwparker)，[#27344](https://github.com/stablyai/orca/pull/27344)）
- Release startup allocations held by journal sentinel（[@nwparker](https://github.com/nwparker)，[#27342](https://github.com/stablyai/orca/pull/27342)）
- 保留：Git scans when saving sort order（[@nwparker](https://github.com/nwparker)，[#27343](https://github.com/stablyai/orca/pull/27343)）
- 跳过：unchanged lineage after sidebar order saves（[@nwparker](https://github.com/nwparker)，[#27384](https://github.com/stablyai/orca/pull/27384)）
- Overlap Bun typechecking and skip redundant alias scans（[@nwparker](https://github.com/nwparker)，[#27382](https://github.com/stablyai/orca/pull/27382)）
- Yield between bounded slices of terminal output ingest（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27578](https://github.com/stablyai/orca/pull/27578)）
- Search Windows-drive projects with host ripgrep（[@nwparker](https://github.com/nwparker)，[#27690](https://github.com/stablyai/orca/pull/27690)）
- Use Zod 4.6 validation and compile ACP updates（[@nwparker](https://github.com/nwparker)，[#27735](https://github.com/stablyai/orca/pull/27735)）
- 停止：leaving stuck lsof processes behind on a dead network mount（[@brennanb2025](https://github.com/brennanb2025)，[#27729](https://github.com/stablyai/orca/pull/27729)）
- 停止：every Windows notification from freezing Orca（[@brennanb2025](https://github.com/brennanb2025)，[#27731](https://github.com/stablyai/orca/pull/27731)）
- 去掉：the extra PowerShell per hook event for Gemini, dsh, Kiro, Droid and Command Code（[@OrcaWin](https://github.com/OrcaWin)，[#27717](https://github.com/stablyai/orca/pull/27717)）
- Run the Windows status hook as a direct .cmd, faster and UTF-8 safe（[@OrcaWin](https://github.com/OrcaWin)，[#27718](https://github.com/stablyai/orca/pull/27718)）
- Check WSL working directories off the main thread（[@OrcaWin](https://github.com/OrcaWin)，[#27705](https://github.com/stablyai/orca/pull/27705)）
- Run the Windows Claude hook as a signed native claude-hook.exe（[@OrcaWin](https://github.com/OrcaWin)，[#27719](https://github.com/stablyai/orca/pull/27719)）
- 跳过：re-rendering unchanged worktree rows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28058](https://github.com/stablyai/orca/pull/28058)）
- 停止：re-sending the worktree list to mobile pollers on every terminal chunk（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28062](https://github.com/stablyai/orca/pull/28062)）
- Reuse verified Node and run the layout check with Bun（[@nwparker](https://github.com/nwparker)，[#28218](https://github.com/stablyai/orca/pull/28218)）
- Pooled wsl.exe command loops and orcad compile cache on the WSL wake path (C4 follow-up)（[@nwparker](https://github.com/nwparker)，[#27923](https://github.com/stablyai/orca/pull/27923)）
- 跳过：re-hashing unchanged orcad artifacts and guest Node runtime on the WSL wake path (C4c)（[@nwparker](https://github.com/nwparker)，[#27941](https://github.com/stablyai/orca/pull/27941)）
- 停止：a cancelled scan inside the file it is reading（[@brennanb2025](https://github.com/brennanb2025)，[#27952](https://github.com/stablyai/orca/pull/27952)）
- Read the composer's text and caret straight from the editor（[@brennanb2025](https://github.com/brennanb2025)，[#28064](https://github.com/stablyai/orca/pull/28064)）
- End a scan only when it stops making progress（[@brennanb2025](https://github.com/brennanb2025)，[#28434](https://github.com/stablyai/orca/pull/28434)）
- 保持：a timed-out scan's finished transcripts（[@brennanb2025](https://github.com/brennanb2025)，[#27937](https://github.com/stablyai/orca/pull/27937)）
- Fetch the base while the host's create picks a name（[@brennanb2025](https://github.com/brennanb2025)，[#26007](https://github.com/stablyai/orca/pull/26007)）
- Share concurrent Codex title-index reads（[@nwparker](https://github.com/nwparker)，[#28497](https://github.com/stablyai/orca/pull/28497)）
- Re-project only the written partition in the layout stream（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28845](https://github.com/stablyai/orca/pull/28845)）
- Load structured agent adapters when the host starts（[@nwparker](https://github.com/nwparker)，[#29086](https://github.com/stablyai/orca/pull/29086)）
- Release completed Windows pipe probe timers（[@nwparker](https://github.com/nwparker)，[#28560](https://github.com/stablyai/orca/pull/28560)）
- A paired desktop gets only the tab that changed, not the whole workspace（[@nwparker](https://github.com/nwparker)，[#29319](https://github.com/stablyai/orca/pull/29319)）
- A Smart-sort save on a paired host no longer refetches every repository or triggers the next save（[@nwparker](https://github.com/nwparker)，[#29333](https://github.com/stablyai/orca/pull/29333)）
- A headless host ignores a remote pane's unchanged layout write（[@nwparker](https://github.com/nwparker)，[#29347](https://github.com/stablyai/orca/pull/29347)）
- List a worktree's tabs over the ready shared socket, not a new one（[@nwparker](https://github.com/nwparker)，[#29360](https://github.com/stablyai/orca/pull/29360)）
- Read a remote server's SSH target states three at a time（[@nwparker](https://github.com/nwparker)，[#29393](https://github.com/stablyai/orca/pull/29393)）
- A parked web-mirror reveal reads its pane alongside the activation（[@nwparker](https://github.com/nwparker)，[#29472](https://github.com/stablyai/orca/pull/29472)）
- 避免：dev reloads for excluded package files（[@OrcaWin](https://github.com/OrcaWin)，[#29481](https://github.com/stablyai/orca/pull/29481)）
- 停止：re-inspecting the setup-script prompt on every worktree revisit（[@nwparker](https://github.com/nwparker)，[#29514](https://github.com/stablyai/orca/pull/29514)）
- 保持：warm session streams for every worktree whose terminals stay mounted（[@nwparker](https://github.com/nwparker)，[#29516](https://github.com/stablyai/orca/pull/29516)）
- 新增：an opt-in to skip main source maps during development（[@OrcaWin](https://github.com/OrcaWin)，[#29445](https://github.com/stablyai/orca/pull/29445)）
- 避免：notification settings page imports during onboarding（[@OrcaWin](https://github.com/OrcaWin)，[#29570](https://github.com/stablyai/orca/pull/29570)）
- 移除：per-match quality array filtering（[@nwparker](https://github.com/nwparker)，[#29785](https://github.com/stablyai/orca/pull/29785)）
- 减小：redundant sidebar agent status subscriptions（[@OrcaWin](https://github.com/OrcaWin)，[#29840](https://github.com/stablyai/orca/pull/29840)）
- Flush send transactions without flushing every streamed revision（[@brennanb2025](https://github.com/brennanb2025)，[#28966](https://github.com/stablyai/orca/pull/28966)）

#### Languages {#v1-4-229-languages}

> Updated translations and more consistent labels across the app.

- Correct Korean Finder menu label（[@nwparker](https://github.com/nwparker)，[#26866](https://github.com/stablyai/orca/pull/26866)）
- Correct Korean CI check translations（[@abruption](https://github.com/abruption)，[#27367](https://github.com/stablyai/orca/pull/27367)）
- Speed up import checks, localization extraction, and CI typechecking（[@nwparker](https://github.com/nwparker)，[#27727](https://github.com/stablyai/orca/pull/27727)）
- 去掉：chat-mode keys removed from en.json in #28113（[@nwparker](https://github.com/nwparker)，[#28131](https://github.com/stablyai/orca/pull/28131)）
- Correct Korean Settings translations（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28183](https://github.com/stablyai/orca/pull/28183)）
- Translate Settings help as whole sentences instead of fragments（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28185](https://github.com/stablyai/orca/pull/28185)）
- Nest settings translation keys for language packs（[@nwparker](https://github.com/nwparker)，[#28251](https://github.com/stablyai/orca/pull/28251)）
- Reuse import analysis and run localization coverage with Bun（[@nwparker](https://github.com/nwparker)，[#28463](https://github.com/stablyai/orca/pull/28463)）
- Translate 259 new keys to es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#28486](https://github.com/stablyai/orca/pull/28486)）
- Correct literal-sense Japanese mistranslations（[@sojiro-o](https://github.com/sojiro-o)，[#28535](https://github.com/stablyai/orca/pull/28535)）
- 去掉：setup-only keys and fix the default-tab test #28543 left red（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28603](https://github.com/stablyai/orca/pull/28603)）
- 去掉：catalog strings left behind by the automation removal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28810](https://github.com/stablyai/orca/pull/28810)）
- Correct the Japanese label for the Cleaned browser identity（[@sojiro-o](https://github.com/sojiro-o)，[#28526](https://github.com/stablyai/orca/pull/28526)）
- Use クリーンアップ in the Japanese VM cleanup stop dialog（[@sojiro-o](https://github.com/sojiro-o)，[#28533](https://github.com/stablyai/orca/pull/28533)）
- 移除：obsolete Hermes cron docs and translations（[@AmethystLiang](https://github.com/AmethystLiang)，[#28877](https://github.com/stablyai/orca/pull/28877)）
- Translate new keys to es/fr/ja/ko/zh (scan 2026-10-14)（[@AmethystLiang](https://github.com/AmethystLiang)，[#28896](https://github.com/stablyai/orca/pull/28896)）
- Refine release channel and chat input translations（[@AmethystLiang](https://github.com/AmethystLiang)，[#29027](https://github.com/stablyai/orca/pull/29027)）
- Translate new keys to es/fr/ja/ko/zh (scan 2026-10-15)（[@AmethystLiang](https://github.com/AmethystLiang)，[#29281](https://github.com/stablyai/orca/pull/29281)）

#### Relay service {#v1-4-229-relay-service}

> Connection routing, service recovery and relay operations receive reliability improvements.

- 钉住：staging c4 to image G for E-pre（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28854](https://github.com/stablyai/orca/pull/28854)）
- 钉住：staging c1, c5, c6 and c7 to image G for E-pre（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28872](https://github.com/stablyai/orca/pull/28872)）
- Split step-5 shadow compare and dry-run logs per cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28693](https://github.com/stablyai/orca/pull/28693)）
- Watch a reserve cell and flip it back on the first step 5 stop rule（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28698](https://github.com/stablyai/orca/pull/28698)）
- Log where the sticky lane's slot time goes, per pooled connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28908](https://github.com/stablyai/orca/pull/28908)）
- Check clock skew on every cell production.tfvars declares（[@zanmlakar](https://github.com/zanmlakar)，[#28786](https://github.com/stablyai/orca/pull/28786)）
- Destroy a pooled client whose session the server ended（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29573](https://github.com/stablyai/orca/pull/29573)）
- One ask-wait clamp and no needless exports（[@nwparker](https://github.com/nwparker)，[#29835](https://github.com/stablyai/orca/pull/29835)）

The remaining changes are listed in the [complete release notes](https://github.com/stablyai/orca/releases/download/v1.4.229/orca-v1.4.229-complete-changelog.md), with every title and contributor credit.

#### Reverted {#v1-4-229-reverted}

> Reverts and follow-up corrections included in this release.

- Revert "+" new-tab agent launches to the window route (reverts #26489)（[@brennanb2025](https://github.com/brennanb2025)，[#27173](https://github.com/stablyai/orca/pull/27173)）
- Revert "feat(mobile): verified https pairing links; custom scheme carries no secret" (#27475)（[@OrcaWin](https://github.com/OrcaWin)，[#27693](https://github.com/stablyai/orca/pull/27693)）

#### Tests, CI & maintenance {#v1-4-229-tests-ci-maintenance}

> regression coverage, build and release fixes, and internal cleanup support the changes above覆盖更广。

- 移动：the pure workspace-list builder into src/shared/sidebar-list (no visible change)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29906](https://github.com/stablyai/orca/pull/29906)）
- 保持：an editor tab Orca moved to its file's workspace across restart; record editor renames in main (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29930](https://github.com/stablyai/orca/pull/29930)）
- 发送：a terminal tab's own changes to main first, from every caller (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29904](https://github.com/stablyai/orca/pull/29904)）
- 移动：the sidebar's time rules into shared pure reducers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29943](https://github.com/stablyai/orca/pull/29943)）
- Golden for accented, mixed-case and numbered names（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29966](https://github.com/stablyai/orca/pull/29966)）
- 等待：for macOS build metadata after dispatch（[@nwparker](https://github.com/nwparker)，[#29974](https://github.com/stablyai/orca/pull/29974)）
- Merge the Android APK download bump automatically（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29981](https://github.com/stablyai/orca/pull/29981)）
- 允许：tag cuts when main requires pull requests（[@nwparker](https://github.com/nwparker)，[#29985](https://github.com/stablyai/orca/pull/29985)）

The remaining changes are listed in the [complete release notes](https://github.com/stablyai/orca/releases/download/v1.4.229/orca-v1.4.229-complete-changelog.md), with every title and contributor credit.

### 新贡献者 {#v1-4-229-contributors}

- [@w-felipe360](https://github.com/w-felipe360) 首次贡献于 [#26695](https://github.com/stablyai/orca/pull/26695)
- [@outof-place](https://github.com/outof-place) 首次贡献于 [#27006](https://github.com/stablyai/orca/pull/27006)
- [@fabricedge](https://github.com/fabricedge) 首次贡献于 [#26881](https://github.com/stablyai/orca/pull/26881)
- [@parkavenue9639](https://github.com/parkavenue9639) 首次贡献于 [#24964](https://github.com/stablyai/orca/pull/24964)
- [@abruption](https://github.com/abruption) 首次贡献于 [#27367](https://github.com/stablyai/orca/pull/27367)
- [@f8team](https://github.com/f8team) 首次贡献于 [#27374](https://github.com/stablyai/orca/pull/27374)
- [@vampik33](https://github.com/vampik33) 首次贡献于 [#25211](https://github.com/stablyai/orca/pull/25211)
- [@benjaminb10](https://github.com/benjaminb10) 首次贡献于 [#27346](https://github.com/stablyai/orca/pull/27346)
- [@sergeytiron](https://github.com/sergeytiron) 首次贡献于 [#23459](https://github.com/stablyai/orca/pull/23459)
- [@BearMett](https://github.com/BearMett) 首次贡献于 [#28120](https://github.com/stablyai/orca/pull/28120)
- [@leog](https://github.com/leog) 首次贡献于 [#25617](https://github.com/stablyai/orca/pull/25617)
- [@sojiro-o](https://github.com/sojiro-o) 首次贡献于 [#28535](https://github.com/stablyai/orca/pull/28535)
- [@zanmlakar](https://github.com/zanmlakar) 首次贡献于 [#28781](https://github.com/stablyai/orca/pull/28781)
- [@orchardprior](https://github.com/orchardprior) 首次贡献于 [#29018](https://github.com/stablyai/orca/pull/29018)
- [@Velm14](https://github.com/Velm14) 首次贡献于 [#28023](https://github.com/stablyai/orca/pull/28023)
- [@SungsooKwon](https://github.com/SungsooKwon) 首次贡献于 [#29532](https://github.com/stablyai/orca/pull/29532)

---

**完整变更对照：** [v1.4.227...v1.4.229](https://github.com/stablyai/orca/compare/v1.4.227...v1.4.229)

## v1.4.227 Native Chat 拥有独立权限模式，会话更易继续 {#v1-4-227}

2026年10月16日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.227)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-227-short}

- **Native chats have their own permission mode.** Choose permissions for each new Claude or Codex chat from Settings → Chat → Behavior; existing chats keep the mode they were already using, and changing models no longer resets it.
- **Native chat sessions are easier to continue.** You can resume large terminal conversations in a new Native Chat, recover chats whose only work ran in the background after a restart, and see every supported chat provider accurately in Session History.
- **Claude accounts and Codex chat setup are smoother.** Claude accounts again use separate folders, the sign-in link can be copied, Codex chats require version 0.136.0 or later, and Codex Ultrafast is available as a speed choice.
- **Browser automation gives your keyboard back reliably.** Agent browser commands target the intended page, and browser popups behave more like Chrome.
- **Also:** worktree cleanup is safer, read macOS notifications disappear from Notification Center, long chats load better on phones, and cold session-history reads avoid unnecessary reindexing.

---

### 产品体验 {#v1-4-227-product}

#### UI / workspace {#v1-4-227-ui-workspace}

> Safer worktree cleanup, tidier macOS notifications and small translation cleanup.

- 修复（worktrees）：never delete a folder git no longer tracks（[@brennanb2025](https://github.com/brennanb2025)，[#25075](https://github.com/stablyai/orca/pull/25075)）
- 修复（notifications）：remove read macOS notifications from Notification Center by pane thread（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28425](https://github.com/stablyai/orca/pull/28425)）
- 修复（i18n）：drop chat-mode keys removed from en.json in #28113（[@nwparker](https://github.com/nwparker)，[#28131](https://github.com/stablyai/orca/pull/28131)）

#### Orchestration {#v1-4-227-orchestration}

> Retries no longer leave failed worker starts piling up as live agents.

- 修复（orchestration）：stop retried failed worker starts from piling up live agents（[@brennanb2025](https://github.com/brennanb2025)，[#27795](https://github.com/stablyai/orca/pull/27795)）

#### Agent 与 Native Chat {#v1-4-227-native-chat}

> Each Claude and Codex chat keeps its own permission mode, chats are easier to resume and manage, Claude accounts return with safer sign-in, and chat settings and model handling are more consistent.

- 新增（native-chat）：each Claude/Codex chat gets its own permission mode（[@brennanb2025](https://github.com/brennanb2025)，[#26116](https://github.com/stablyai/orca/pull/26116)）
- 修复（native-chat）：chats from before permission modes keep the mode they were running with（[@brennanb2025](https://github.com/brennanb2025)，[#28099](https://github.com/stablyai/orca/pull/28099)）
- 修复（native-chat）：seed the chat permission default from Claude's and Codex's own arguments（[@brennanb2025](https://github.com/brennanb2025)，[#28100](https://github.com/stablyai/orca/pull/28100)）
- 新增（settings）：move Permissions for new chats into the Chat page's Behavior section（[@brennanb2025](https://github.com/brennanb2025)，[#28212](https://github.com/stablyai/orca/pull/28212)）
- 修复（native-chat）：store a chat's permission mode on its own, so a model pick can't reset it（[@brennanb2025](https://github.com/brennanb2025)，[#28268](https://github.com/stablyai/orca/pull/28268)）
- 新增（native-chat）：require Codex 0.136.0 for chats（[@brennanb2025](https://github.com/brennanb2025)，[#26684](https://github.com/stablyai/orca/pull/26684)）
- 新增（native-chat）：offer Codex Ultrafast as a speed choice（[@brennanb2025](https://github.com/brennanb2025)，[#26962](https://github.com/stablyai/orca/pull/26962)）
- Re-land Claude per-account folders (#24434, #26405) with the upgrade and proxy fixes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26801](https://github.com/stablyai/orca/pull/26801)）
- 新增："Copy sign-in link instead" for Claude accounts (STA-9912)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26990](https://github.com/stablyai/orca/pull/26990)）
- 修复（native-chat）：offer resume after restart for chats whose only work was in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27167](https://github.com/stablyai/orca/pull/27167)）
- 修复（native-chat）：resume large terminal conversations in a new Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#29056](https://github.com/stablyai/orca/pull/29056)）
- Terminal header button: Resume in New Native Chat replaces Show chat view（[@brennanb2025](https://github.com/brennanb2025)，[#27184](https://github.com/stablyai/orca/pull/27184)）
- 修复（tab-bar）：offer Resume in New Native Chat only while the tab's agent is running（[@brennanb2025](https://github.com/brennanb2025)，[#27520](https://github.com/stablyai/orca/pull/27520)）
- Session History shows OpenCode, Grok, OMP and Pi chats as chats and refuses a second terminal writer（[@brennanb2025](https://github.com/brennanb2025)，[#27183](https://github.com/stablyai/orca/pull/27183)）
- Session History: resume folder workspace chats in their own folder（[@brennanb2025](https://github.com/brennanb2025)，[#27209](https://github.com/stablyai/orca/pull/27209)）
- 恢复：dialog: show a finished resume as a result, not a picker（[@brennanb2025](https://github.com/brennanb2025)，[#27732](https://github.com/stablyai/orca/pull/27732)）
- Save a new chat's first message during create（[@brennanb2025](https://github.com/brennanb2025)，[#26332](https://github.com/stablyai/orca/pull/26332)）
- 修复（native-chat）：settle a reply cut off by a server restart（[@brennanb2025](https://github.com/brennanb2025)，[#26460](https://github.com/stablyai/orca/pull/26460)）
- 打开：a chat visual in its own tab instead of the sidebar（[@brennanb2025](https://github.com/brennanb2025)，[#26728](https://github.com/stablyai/orca/pull/26728)）
- 允许：a Codex chat stop a command it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#26780](https://github.com/stablyai/orca/pull/26780)）
- 修复（native-chat）：preserve running subagent rows in long chats（[@brennanb2025](https://github.com/brennanb2025)，[#26798](https://github.com/stablyai/orca/pull/26798)）
- A new Pi chat names the model it will run on its first frame（[@brennanb2025](https://github.com/brennanb2025)，[#26821](https://github.com/stablyai/orca/pull/26821)）
- 保持：Chat UI users with a Terminal default on the terminal, with a chat mode switch in the upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#26915](https://github.com/stablyai/orca/pull/26915)）
- Floating-workspace chats of every native-chat agent keep links in the folder they started in（[@brennanb2025](https://github.com/brennanb2025)，[#26981](https://github.com/stablyai/orca/pull/26981)）
- Every agent reports its learned default model once, when a chat starts（[@brennanb2025](https://github.com/brennanb2025)，[#26982](https://github.com/stablyai/orca/pull/26982)）
- 允许：a Grok chat list and stop the commands it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27022](https://github.com/stablyai/orca/pull/27022)）
- 允许：a Codex chat stop a sub-agent from the background-tasks strip（[@brennanb2025](https://github.com/brennanb2025)，[#27026](https://github.com/stablyai/orca/pull/27026)）
- 修复（native-chat）：a new chat's model and effort pickers match their first frame before the agent starts（[@brennanb2025](https://github.com/brennanb2025)，[#27031](https://github.com/stablyai/orca/pull/27031)）
- Native chat: every agent launches through one composed launch path（[@brennanb2025](https://github.com/brennanb2025)，[#27204](https://github.com/stablyai/orca/pull/27204)）
- Edit agent launch settings on the workspace host（[@brennanb2025](https://github.com/brennanb2025)，[#26479](https://github.com/stablyai/orca/pull/26479)）
- One shared subagent tracker for Claude, Codex and Grok chat rows（[@brennanb2025](https://github.com/brennanb2025)，[#27228](https://github.com/stablyai/orca/pull/27228)）
- Native chat: read one saved row per subagent (part 1 of 2)（[@brennanb2025](https://github.com/brennanb2025)，[#27914](https://github.com/stablyai/orca/pull/27914)）
- 新增（chat）：host writes one saved row per subagent（[@brennanb2025](https://github.com/brennanb2025)，[#27947](https://github.com/stablyai/orca/pull/27947)）
- 新增（settings）：move Chat UI's chat settings from Experimental to the Chat page（[@brennanb2025](https://github.com/brennanb2025)，[#28050](https://github.com/stablyai/orca/pull/28050)）
- 修复（tab-bar）：Native Chat tabs show their recorded provider, not one guessed from the title（[@brennanb2025](https://github.com/brennanb2025)，[#28082](https://github.com/stablyai/orca/pull/28082)）
- Replace chat upgrade switch with primary Enable Now button（[@nwparker](https://github.com/nwparker)，[#28113](https://github.com/stablyai/orca/pull/28113)）
- Make Enable Now the full-width action in the chat upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#28199](https://github.com/stablyai/orca/pull/28199)）

#### Remote server / SSH {#v1-4-227-remote-server-ssh}

> Paired devices are identified by their device ID instead of a credential.

- Native Chat: identify a paired device by its device id, never its credential（[@brennanb2025](https://github.com/brennanb2025)，[#26777](https://github.com/stablyai/orca/pull/26777)）

#### 浏览器 {#v1-4-227-browser}

> Popups follow Chrome’s behavior more closely, while agent browser actions stay focused on the intended page and return the keyboard when they finish.

- 打开：links and window.open in Orca tabs the way Chrome does（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26976](https://github.com/stablyai/orca/pull/26976)）
- 修复：browser login popups and menu actions in native windows（[@AmethystLiang](https://github.com/AmethystLiang)，[#28474](https://github.com/stablyai/orca/pull/28474)）
- Auto-hide menu bar in web popups and re-layout when revealed（[@AmethystLiang](https://github.com/AmethystLiang)，[#28388](https://github.com/stablyai/orca/pull/28388)）
- 修复（browser）：agent bringToFront and activateTarget no longer take your keyboard (1/3)（[@nwparker](https://github.com/nwparker)，[#28452](https://github.com/stablyai/orca/pull/28452)）
- 修复（browser）：agent keys and text go to the page, never into your terminal (2/3)（[@nwparker](https://github.com/nwparker)，[#28453](https://github.com/stablyai/orca/pull/28453)）
- 修复（browser）：agent clicks give your keyboard back (3/3)（[@nwparker](https://github.com/nwparker)，[#28454](https://github.com/stablyai/orca/pull/28454)）
- 修复（browser）：require a target for ambiguous keypress commands（[@nwparker](https://github.com/nwparker)，[#28221](https://github.com/stablyai/orca/pull/28221)）
- 修复（browser）：refuse web pages on the agent-browser CDP proxy（[@OrcaWin](https://github.com/OrcaWin)，[#27415](https://github.com/stablyai/orca/pull/27415)）

#### GitHub / source control {#v1-4-227-github-source-control}

> AI commit messages now start from the same shell environment that chats use.

- Start AI commit messages from the same shell environment chats use（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26808](https://github.com/stablyai/orca/pull/26808)）

#### 性能 {#v1-4-227-performance}

> Windows notifications no longer freeze Orca, and cold session-history reads skip unchanged transcript reindexing.

- 性能（notifications）：stop every Windows notification from freezing Orca（[@brennanb2025](https://github.com/brennanb2025)，[#27731](https://github.com/stablyai/orca/pull/27731)）
- 跳过：reindexing unchanged transcripts on cold session list reads（[@AmethystLiang](https://github.com/AmethystLiang)，[#28798](https://github.com/stablyai/orca/pull/28798)）

#### 移动端 {#v1-4-227-mobile}

> Long chats preserve each update within its limit, remember the reader’s place, and open every supported native-chat provider on the phone.

- 修复（native-chat）：load long chats on the phone by keeping every update within its limit（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28203](https://github.com/stablyai/orca/pull/28203)）
- 修复（mobile）：keep the chat where the reader scrolled to（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28413](https://github.com/stablyai/orca/pull/28413)）
- 修复（mobile）：open Grok, OpenCode, OMP and Pi chats on the phone（[@brennanb2025](https://github.com/brennanb2025)，[#27212](https://github.com/stablyai/orca/pull/27212)）

**完整变更对照：** [v1.4.224...v1.4.227](https://github.com/stablyai/orca/compare/v1.4.224...v1.4.227)

## v1.4.225 SSH 与托管服务器：新连接使用托管服务器，旧终端继续工作 {#v1-4-225}

2026年10月14日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.225)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-225-short}

- **SSH 与托管服务器：** 新的 SSH 连接现在使用 Orca 的托管服务器。v1.4.224 留下的正在运行的终端在升级和重连后仍在其现有标签中继续工作；新终端在托管服务器上打开。已保存的端口转发恢复，Windows 托管主机终端获得 `orca` CLI，托管的 Claude 聊天在桌面断开后仍保持其提供方运行。无法运行托管服务器的主机会显示明确原因；旧的 SSH 回退不再可用。
- **Native Chat（实验性）：** 代码块和 shell 命令会高亮，附加文件显示为文件名药丸，即使 Agent 正在提问时你也可以编辑排队消息。Codex 提供 Ultrafast，并可停止后台命令和子 Agent；Grok 也可以列出并停止其后台命令。新聊天立即保存其第一条消息，已关闭的聊天保持关闭，被中断的回复会在解释卡片中放入 **Continue**。Mermaid 图在暗色模式下更好，聊天可视化可以在自己的标签中打开。
- **Agent 与账户：** Kiro 报告 Agent 状态并出现在 Session History 中。Claude 账户使用单独文件夹并提供 **Copy sign-in link instead**。编排 worker 可以为支持的 Agent 以 Native Chat 启动，Agent 启动设置在工作区自己的宿主上编辑，账户切换和 MCP 设置跟随选定的宿主。
- **远程工作：** Ports 面板在工作区自己的计算机上扫描并停止端口，Resource Manager 列出该宿主的进程，Agent Dashboard 可以从拥有宿主显示终端预览。文件、项目创建、pull request 和 merge request 操作、账户结果和设置跟随拥有它们的计算机。重新配对同一服务器会保留其环境，一条不可读的已保存记录不再使整个服务器不可用。
- **服务与更新：** `orca serve --supervise` 获得一个从应用外副本运行的监督器，`orca serve service install`、`status` 和 `uninstall` 管理服务。更新在无头重启前保留 Codex 登录，macOS 终端权限在应用更新后幸存，自动终端恢复被节拍和限制以避免失控重启。Linux 保留仍在使用的 AppImage 副本，如果终端后台服务的文件消失则显示持久重启横幅。
- **手机与 iPad：** Grok、OpenCode、OMP 和 Pi 聊天在手机上打开。iPad 保持聊天草稿和宿主侧栏可访问，工作区徽章显示 SSH 宿主健康，工具结果跟随正确的命令，终端视图在流结束后接受新快照。
- **工作区与自动化：** 你可以从 CLI 复制稳定的标签引用并管理工作区引用，并从 CLI 在现有工作区中启动 Agent。文件夹工作区作为自动化目标出现，多日计划正确显示，已移除的文件夹工作区不再留下空白侧栏行，**worktree is ready** 通知保持直到你关闭它。特性分支不再借用无关的 pull request。
- **Windows、WSL 与 Linux：** Windows 通知不再冻结 Orca，CodeBuddy hooks 无需 PowerShell 7 即可工作，在 cmd.exe 或 Git Bash 中退出 Claude 或 Codex 会从运行列表中移除它。WSL 路径在 Cursor 的 WSL 模式中打开，后台工作让已停止的发行版保持休眠，Windows 驱动器搜索使用宿主的 ripgrep，Wayland 剪贴板文本保持当前。
- **可靠性与性能：** Orca 更可靠且响应更快，具有更安全的终端恢复、更强的连接恢复、更少的主线程工作和更快的后台与 CI 工作流。
- **其他：** Nim 和 Typst 高亮不再让长行冻结窗口，HTML 预览加载授权的 Web 字体，链接像在 Chrome 中一样在 Orca 标签中打开，取消的浏览器标签拖动留下可点击的标签，终端输出、用量计数和项目发现在主线程上做更少工作。

### 已知问题 {#v1-4-225-known-issues}

**较旧 SSH 终端中的 `orca` 命令：** 从 v1.4.224 保持运行的终端仍接受输入、输出和调整大小，但那些较旧终端内 `orca` 命令不可用。在同一宿主上的新终端中运行它们（#27787）。

### 产品体验 {#v1-4-225-product}

#### Native chat (experimental) {#v1-4-225-native-chat-experimental-}

> Code blocks and commands are highlighted, attachments appear as filename pills, queued messages can be edited while a question is open, and interrupted replies offer Continue in the explanation card. Codex and Grok can stop their background work, chats keep their first message and stay closed after you close them, and diagrams work better in dark mode.

- Save a new chat's first message during create（[@brennanb2025](https://github.com/brennanb2025)，[#26332](https://github.com/stablyai/orca/pull/26332)）
- A new Pi chat names the model it will run on its first frame（[@brennanb2025](https://github.com/brennanb2025)，[#26821](https://github.com/stablyai/orca/pull/26821)）
- 新增（native-chat）：highlight code blocks and shell commands（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26343](https://github.com/stablyai/orca/pull/26343)）
- 打开：a chat visual in its own tab instead of the sidebar（[@brennanb2025](https://github.com/brennanb2025)，[#26728](https://github.com/stablyai/orca/pull/26728)）
- 保持：Chat UI users with a Terminal default on the terminal, with a chat mode switch in the upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#26915](https://github.com/stablyai/orca/pull/26915)）
- 允许：a Codex chat stop a command it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#26780](https://github.com/stablyai/orca/pull/26780)）
- 修复（native-chat）：every new-chat request opens its own chat（[@brennanb2025](https://github.com/brennanb2025)，[#26782](https://github.com/stablyai/orca/pull/26782)）
- Native Chat: identify a paired device by its device id, never its credential（[@brennanb2025](https://github.com/brennanb2025)，[#26777](https://github.com/stablyai/orca/pull/26777)）
- 修复（native-chat）：match model picker type to the options menu（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26349](https://github.com/stablyai/orca/pull/26349)）
- Every agent reports its learned default model once, when a chat starts（[@brennanb2025](https://github.com/brennanb2025)，[#26982](https://github.com/stablyai/orca/pull/26982)）
- Floating-workspace chats of every native-chat agent keep links in the folder they started in（[@brennanb2025](https://github.com/brennanb2025)，[#26981](https://github.com/stablyai/orca/pull/26981)）
- 保持：select-all and copy in a chat from reaching the terminal underneath（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26831](https://github.com/stablyai/orca/pull/26831)）
- 修复（native-chat）：accept sends through their own receipt（[@brennanb2025](https://github.com/brennanb2025)，[#26672](https://github.com/stablyai/orca/pull/26672)）
- 修复（native-chat）：edit a queued message in place, even while a question is open（[@brennanb2025](https://github.com/brennanb2025)，[#26886](https://github.com/stablyai/orca/pull/26886)）
- 修复（native-chat）：settle a reply cut off by a server restart（[@brennanb2025](https://github.com/brennanb2025)，[#26460](https://github.com/stablyai/orca/pull/26460)）
- 修复（native-chat）：hide agent message controls while the turn runs（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26404](https://github.com/stablyai/orca/pull/26404)）
- 修复（native-chat）：drop the redundant 'Waiting for your answer' line from queued cards（[@brennanb2025](https://github.com/brennanb2025)，[#27073](https://github.com/stablyai/orca/pull/27073)）
- 新增（native-chat）：show attached files as filename pills in the composer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26409](https://github.com/stablyai/orca/pull/26409)）
- 新增（native-chat）：offer Codex Ultrafast as a speed choice（[@brennanb2025](https://github.com/brennanb2025)，[#26962](https://github.com/stablyai/orca/pull/26962)）
- 允许：a Codex chat stop a sub-agent from the background-tasks strip（[@brennanb2025](https://github.com/brennanb2025)，[#27026](https://github.com/stablyai/orca/pull/27026)）
- 修复（native-chat）：lazy WSL tier for Claude, Grok and omp lookup by id（[@OrcaWin](https://github.com/OrcaWin)，[#27082](https://github.com/stablyai/orca/pull/27082)）
- 修复（native-chat）：retire the pending image bubble when the CLI records its path as text（[@OrcaWin](https://github.com/OrcaWin)，[#27095](https://github.com/stablyai/orca/pull/27095)）
- 修复（native-chat）：retire a first send's echo in transcript time, not this client's（[@OrcaWin](https://github.com/OrcaWin)，[#27099](https://github.com/stablyai/orca/pull/27099)）
- 保持：tool results with the right command and reveal all results on mobile（[@nwparker](https://github.com/nwparker)，[#26968](https://github.com/stablyai/orca/pull/26968)）
- 修复（native-chat）：give each animation a reduced-motion state（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26276](https://github.com/stablyai/orca/pull/26276)）
- 允许：a Grok chat list and stop the commands it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27022](https://github.com/stablyai/orca/pull/27022)）
- 修复（native-chat）：preserve running subagent rows in long chats（[@brennanb2025](https://github.com/brennanb2025)，[#26798](https://github.com/stablyai/orca/pull/26798)）
- 修复（native-chat）：read ZCode conversations in their recorded order（[@nwparker](https://github.com/nwparker)，[#27142](https://github.com/stablyai/orca/pull/27142)）
- 修复（native-chat）：a new chat's model and effort pickers match their first frame before the agent starts（[@brennanb2025](https://github.com/brennanb2025)，[#27031](https://github.com/stablyai/orca/pull/27031)）
- A closed chat tab stays closed instead of coming back on the right（[@brennanb2025](https://github.com/brennanb2025)，[#27205](https://github.com/stablyai/orca/pull/27205)）
- Theme Mermaid diagrams for dark mode（[@AmethystLiang](https://github.com/AmethystLiang)，[#27398](https://github.com/stablyai/orca/pull/27398)）
- 修复（native-chat）：put Continue in the card that says the reply stopped（[@brennanb2025](https://github.com/brennanb2025)，[#27097](https://github.com/stablyai/orca/pull/27097)）
- One shared subagent tracker for Claude, Codex and Grok chat rows（[@brennanb2025](https://github.com/brennanb2025)，[#27228](https://github.com/stablyai/orca/pull/27228)）
- Session History: resume folder workspace chats in their own folder（[@brennanb2025](https://github.com/brennanb2025)，[#27209](https://github.com/stablyai/orca/pull/27209)）
- 修复（native-chat）：offer resume after restart for chats whose only work was in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27167](https://github.com/stablyai/orca/pull/27167)）
- 修复（native-chat）：keep diagram source mounted and retire reveal history（[@brennanb2025](https://github.com/brennanb2025)，[#26690](https://github.com/stablyai/orca/pull/26690)）
- Native Chat: queued-message actions and question answers accept through their own receipt（[@brennanb2025](https://github.com/brennanb2025)，[#26988](https://github.com/stablyai/orca/pull/26988)）
- 修复（native-chat）：one set of rules for chat text size, colour, hover and focus（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26685](https://github.com/stablyai/orca/pull/26685)）
- 修复（native-chat）：use quote icon for Add to chat（[@brennanb2025](https://github.com/brennanb2025)，[#27631](https://github.com/stablyai/orca/pull/27631)）
- 修复（chat）：jump to messages without scrolling animation（[@AmethystLiang](https://github.com/AmethystLiang)，[#27612](https://github.com/stablyai/orca/pull/27612)）
- Native chat: every agent launches through one composed launch path（[@brennanb2025](https://github.com/brennanb2025)，[#27204](https://github.com/stablyai/orca/pull/27204)）
- 修复（tab-bar）：offer Resume in New Native Chat only while the tab's agent is running（[@brennanb2025](https://github.com/brennanb2025)，[#27520](https://github.com/stablyai/orca/pull/27520)）
- 修复（chat）：show hook failure details in error cards（[@nwparker](https://github.com/nwparker)，[#27824](https://github.com/stablyai/orca/pull/27824)）
- 恢复：dialog: show a finished resume as a result, not a picker（[@brennanb2025](https://github.com/brennanb2025)，[#27732](https://github.com/stablyai/orca/pull/27732)）

#### Agents, accounts & orchestration {#v1-4-225-agents-accounts-orchestration}

> Kiro reports its status and appears in Session History, Claude accounts use separate folders and offer a sign-in link you can copy, and orchestration workers can start as Native Chats. Agent settings, account results and MCP settings stay with the computer that runs the work.

- 新增（kiro）：report Kiro agent status and list Kiro sessions in history（[@w-felipe360](https://github.com/w-felipe360)，[#26695](https://github.com/stablyai/orca/pull/26695)）
- Re-land Claude per-account folders (#24434, #26405) with the upgrade and proxy fixes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26801](https://github.com/stablyai/orca/pull/26801)）
- Start orchestration workers as Native Chats for every agent that has Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#26776](https://github.com/stablyai/orca/pull/26776)）
- 新增："Copy sign-in link instead" for Claude accounts (STA-9912)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26990](https://github.com/stablyai/orca/pull/26990)）
- 保持：MCP repository settings on their selected host（[@nwparker](https://github.com/nwparker)，[#26859](https://github.com/stablyai/orca/pull/26859)）
- 修复（agents）：one host-routed agent-detection entry point（[@OrcaWin](https://github.com/OrcaWin)，[#27054](https://github.com/stablyai/orca/pull/27054)）
- 修复（agent-hooks）：route the first-work branch rename by the repo's execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27080](https://github.com/stablyai/orca/pull/27080)）
- 修复（ai-vault）：bounded OpenClaw discovery; title filter when a host's search is off（[@OrcaWin](https://github.com/OrcaWin)，[#27089](https://github.com/stablyai/orca/pull/27089)）
- 修复（ai-vault）：resume a WSL session only in its own namespace, with a Linux Pi path（[@OrcaWin](https://github.com/OrcaWin)，[#27092](https://github.com/stablyai/orca/pull/27092)）
- 修复（pi）：name workflow child rows by their step key, not only the agent（[@mmarabel](https://github.com/mmarabel)，[#26909](https://github.com/stablyai/orca/pull/26909)）
- 修复（agents）：show DeepSeek icon for observed Build sessions（[@nwparker](https://github.com/nwparker)，[#26863](https://github.com/stablyai/orca/pull/26863)）
- 修复（zcode）：keep Coding Plan credentials and quota tied to the selected account（[@nwparker](https://github.com/nwparker)，[#24674](https://github.com/stablyai/orca/pull/24674)）
- 新增（accounts）：open ZCode sign-in in the existing setup terminal（[@nwparker](https://github.com/nwparker)，[#27321](https://github.com/stablyai/orca/pull/27321)）
- Honor inactive Claude account retry deadlines（[@nwparker](https://github.com/nwparker)，[#26936](https://github.com/stablyai/orca/pull/26936)）
- 修复（accounts）：remove a rejected GLM key when restore fails（[@parkavenue9639](https://github.com/parkavenue9639)，[#24964](https://github.com/stablyai/orca/pull/24964)）
- 修复（orcad）：install agent status hooks when a managed host starts（[@OrcaWin](https://github.com/OrcaWin)，[#27319](https://github.com/stablyai/orca/pull/27319)）
- 修复（claude）：register a short PostCompact hook command（[@vampik33](https://github.com/vampik33)，[#25211](https://github.com/stablyai/orca/pull/25211)）
- 修复（agent-status）：keep nested models off parent panes（[@nwparker](https://github.com/nwparker)，[#26846](https://github.com/stablyai/orca/pull/26846)）
- 修复（zsh）：keep deferred line-init defined for plugins that call it by name（[@nwparker](https://github.com/nwparker)，[#26842](https://github.com/stablyai/orca/pull/26842)）
- 修复：Codex usage bypassing configured proxy routing（[@nwparker](https://github.com/nwparker)，[#26942](https://github.com/stablyai/orca/pull/26942)）
- 修复：cold proxy authentication in the desktop HTTP client（[@nwparker](https://github.com/nwparker)，[#26957](https://github.com/stablyai/orca/pull/26957)）
- 修复（renderer）：account switchers and CLI cards follow the focused repo's host（[@nwparker](https://github.com/nwparker)，[#27687](https://github.com/stablyai/orca/pull/27687)）
- Edit agent launch settings on the workspace host（[@brennanb2025](https://github.com/brennanb2025)，[#26479](https://github.com/stablyai/orca/pull/26479)）

#### SSH, managed servers & remote {#v1-4-225-ssh-managed-servers-remote}

> New SSH connections use the managed Orca server, while terminals left running by v1.4.224 keep working in their existing tabs. Saved port forwards return, remote files open on their own computer, and projects, reviews, settings, ports and processes follow the host that owns them.

- 修复（hosts）：host registry stops minting client SSH hosts from a server's nested target（[@OrcaWin](https://github.com/OrcaWin)，[#26952](https://github.com/stablyai/orca/pull/26952)）
- 修复（folders）：folder workspaces can answer "paired server"（[@OrcaWin](https://github.com/OrcaWin)，[#26958](https://github.com/stablyai/orca/pull/26958)）
- 允许：paired-server files to drop into their own terminals（[@nwparker](https://github.com/nwparker)，[#26931](https://github.com/stablyai/orca/pull/26931)）
- 修复（session-tabs）：a tab stream the host ends resubscribes on the retry backoff（[@OrcaWin](https://github.com/OrcaWin)，[#27098](https://github.com/stablyai/orca/pull/27098)）
- 修复（ssh）：a direct-SSH host republish no longer steals this view's tab selection（[@OrcaWin](https://github.com/OrcaWin)，[#27100](https://github.com/stablyai/orca/pull/27100)）
- 修复（session-tabs）：a restored terminal row is retired only by its own host PTY（[@OrcaWin](https://github.com/OrcaWin)，[#27101](https://github.com/stablyai/orca/pull/27101)）
- 修复（terminal）：honor the OpenSSH DefaultShell on Windows SSH hosts running orcad（[@OrcaWin](https://github.com/OrcaWin)，[#27085](https://github.com/stablyai/orca/pull/27085)）
- 修复（session-tabs）：a returning paired publisher is repaired by an authoritative census（[@OrcaWin](https://github.com/OrcaWin)，[#27094](https://github.com/stablyai/orca/pull/27094)）
- 修复（hosts）：the unresolved-owner sentinel is never routable（[@OrcaWin](https://github.com/OrcaWin)，[#27111](https://github.com/stablyai/orca/pull/27111)）
- 修复（runtime）：worktree create enforces the lineage host boundary（[@OrcaWin](https://github.com/OrcaWin)，[#27114](https://github.com/stablyai/orca/pull/27114)）
- 修复（repos）：every repo catalog uses the host-catalog fence（[@OrcaWin](https://github.com/OrcaWin)，[#27116](https://github.com/stablyai/orca/pull/27116)）
- 修复（web）：usage and account switching come from the paired server（[@OrcaWin](https://github.com/OrcaWin)，[#27135](https://github.com/stablyai/orca/pull/27135)）
- 修复（web）：Jira reaches the server（[@OrcaWin](https://github.com/OrcaWin)，[#27136](https://github.com/stablyai/orca/pull/27136)）
- 修复（hosts）：a server whose status answers is selectable while shared control connects（[@OrcaWin](https://github.com/OrcaWin)，[#27137](https://github.com/stablyai/orca/pull/27137)）
- 修复（cli）：orca file open and diff open name their owner（[@OrcaWin](https://github.com/OrcaWin)，[#27154](https://github.com/stablyai/orca/pull/27154)）
- 修复（agents）：an old Windows or unknown-platform host asks to update instead of answering its default list（[@OrcaWin](https://github.com/OrcaWin)，[#27164](https://github.com/stablyai/orca/pull/27164)）
- 修复（pairing）：advertise a key and fallback port the host can actually serve（[@OrcaWin](https://github.com/OrcaWin)，[#27158](https://github.com/stablyai/orca/pull/27158)）
- 修复（shell）：OS open actions follow the file's owner, not the focused server（[@OrcaWin](https://github.com/OrcaWin)，[#27165](https://github.com/stablyai/orca/pull/27165)）
- 修复（pairing）：pairing with this same Orca profile is refused（[@OrcaWin](https://github.com/OrcaWin)，[#27166](https://github.com/stablyai/orca/pull/27166)）
- 新增（hosts）：servers publish a host descriptor（[@OrcaWin](https://github.com/OrcaWin)，[#27193](https://github.com/stablyai/orca/pull/27193)）
- 新增（ports）：host-scoped port scan and stop on the server（[@OrcaWin](https://github.com/OrcaWin)，[#27188](https://github.com/stablyai/orca/pull/27188)）
- 新增（pairing）：re-pairing the same server keeps its environment（[@OrcaWin](https://github.com/OrcaWin)，[#27197](https://github.com/stablyai/orca/pull/27197)）
- 修复（cli）：check the runtime source before sending（[@OrcaWin](https://github.com/OrcaWin)，[#27206](https://github.com/stablyai/orca/pull/27206)）
- 新增（runtime）：the host refuses a request meant for another runtime（[@OrcaWin](https://github.com/OrcaWin)，[#27224](https://github.com/stablyai/orca/pull/27224)）
- 修复（agents）：one agent inventory per host and execution context（[@OrcaWin](https://github.com/OrcaWin)，[#27225](https://github.com/stablyai/orca/pull/27225)）
- 修复（files）：a paired-server link outside its workspace opens in the host workspace that holds it（[@OrcaWin](https://github.com/OrcaWin)，[#27226](https://github.com/stablyai/orca/pull/27226)）
- 修复（files）：client drops on a remote composer upload through the import transaction（[@OrcaWin](https://github.com/OrcaWin)，[#27227](https://github.com/stablyai/orca/pull/27227)）
- 修复（files）：links to this computer in a remote terminal open on the client with trusted provenance（[@OrcaWin](https://github.com/OrcaWin)，[#27234](https://github.com/stablyai/orca/pull/27234)）
- 修复（terminals）：terminal IDs, agent rows and dashboard rows follow the owner（[@OrcaWin](https://github.com/OrcaWin)，[#27243](https://github.com/stablyai/orca/pull/27243)）
- 修复（terminals）：automation runs, CLI tabs and folder-workspace browser tabs follow the owner（[@OrcaWin](https://github.com/OrcaWin)，[#27246](https://github.com/stablyai/orca/pull/27246)）
- 修复（review）：review providers resolve the repo on its host（[@OrcaWin](https://github.com/OrcaWin)，[#27247](https://github.com/stablyai/orca/pull/27247)）
- 修复（review）：PR reads and actions follow the ownership table（[@OrcaWin](https://github.com/OrcaWin)，[#27248](https://github.com/stablyai/orca/pull/27248)）
- 新增（terminals）：dashboard terminal previews from the owning host（[@OrcaWin](https://github.com/OrcaWin)，[#27250](https://github.com/stablyai/orca/pull/27250)）
- 修复（ports）：the ports panel scans and stops on the workspace's own host（[@OrcaWin](https://github.com/OrcaWin)，[#27258](https://github.com/stablyai/orca/pull/27258)）
- 修复（skills）：say an SSH repo was not scanned instead of dropping it silently（[@OrcaWin](https://github.com/OrcaWin)，[#27261](https://github.com/stablyai/orca/pull/27261)）
- 修复（hosts）：agent launch platform and shell come from the execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27259](https://github.com/stablyai/orca/pull/27259)）
- 修复（accounts）：a server's late account result stays with that server（[@OrcaWin](https://github.com/OrcaWin)，[#27262](https://github.com/stablyai/orca/pull/27262)）
- 新增（hosts）：Resource Manager lists the owning host's processes（[@OrcaWin](https://github.com/OrcaWin)，[#27263](https://github.com/stablyai/orca/pull/27263)）
- 新增（settings）：host-owned settings panes choose their host explicitly（[@OrcaWin](https://github.com/OrcaWin)，[#27265](https://github.com/stablyai/orca/pull/27265)）
- 修复（web）：the paired server is the web client's only host（[@OrcaWin](https://github.com/OrcaWin)，[#27266](https://github.com/stablyai/orca/pull/27266)）
- 修复（sources）：GitHub Projects boards read from the task page's source host（[@OrcaWin](https://github.com/OrcaWin)，[#27270](https://github.com/stablyai/orca/pull/27270)）
- 修复（orcad）：provide the orca CLI in Windows managed-host terminals（[@OrcaWin](https://github.com/OrcaWin)，[#27324](https://github.com/stablyai/orca/pull/27324)）
- 新增（ssh）：a paired client can manage the server's own SSH hosts (ssh.target-management.v1)（[@OrcaWin](https://github.com/OrcaWin)，[#27329](https://github.com/stablyai/orca/pull/27329)）
- 修复（projects）：create on a server's SSH project; Add Project SSH lists the server's targets（[@OrcaWin](https://github.com/OrcaWin)，[#27331](https://github.com/stablyai/orca/pull/27331)）
- 修复（ssh）：restore saved port forwards on managed hosts and show their Ports tab（[@OrcaWin](https://github.com/OrcaWin)，[#27361](https://github.com/stablyai/orca/pull/27361)）
- 修复（files）：a managed terminal links and opens a host file outside its workspace（[@OrcaWin](https://github.com/OrcaWin)，[#27364](https://github.com/stablyai/orca/pull/27364)）
- 修复（vm）：a recipe VM's SSH root runs on a managed Orca server（[@OrcaWin](https://github.com/OrcaWin)，[#27366](https://github.com/stablyai/orca/pull/27366)）
- 修复（ssh）：a restore racing a disconnect never leaves a forward behind（[@OrcaWin](https://github.com/OrcaWin)，[#27368](https://github.com/stablyai/orca/pull/27368)）
- 重构（ssh）：connect fails for hosts orcad can't serve; remove the relay client path（[@OrcaWin](https://github.com/OrcaWin)，[#27214](https://github.com/stablyai/orca/pull/27214)）
- 修复（e2ee）：stop dropping terminal output on a backed-up legacy connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26528](https://github.com/stablyai/orca/pull/26528)）
- 修复（remote）：move tabs into a split-off group on the server too（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26522](https://github.com/stablyai/orca/pull/26522)）
- 修复（runtime）：refresh open clients after project setup changes（[@nwparker](https://github.com/nwparker)，[#26941](https://github.com/stablyai/orca/pull/26941)）
- 修复（ssh）：a fast remote folder listing no longer shows a false error（[@nwparker](https://github.com/nwparker)，[#26940](https://github.com/stablyai/orca/pull/26940)）
- 修复（ssh）：remove the relay-only remote workspace sync so reconnect never sticks on pulling（[@OrcaWin](https://github.com/OrcaWin)，[#27409](https://github.com/stablyai/orca/pull/27409)）
- 修复（browser）：refuse web pages on the agent-browser CDP proxy（[@OrcaWin](https://github.com/OrcaWin)，[#27415](https://github.com/stablyai/orca/pull/27415)）
- 修复（pty）：only force-kill processes in the terminal's own Linux session（[@OrcaWin](https://github.com/OrcaWin)，[#27422](https://github.com/stablyai/orca/pull/27422)）
- 修复（runtime）：reuse cached worktree rows when the admin probe cannot answer（[@OrcaWin](https://github.com/OrcaWin)，[#27445](https://github.com/stablyai/orca/pull/27445)）
- 新增（runtime）：device-key authentication and per-installation key migration (host)（[@OrcaWin](https://github.com/OrcaWin)，[#27493](https://github.com/stablyai/orca/pull/27493)）
- 修复：let managed SSH Claude chats load the agent SDK（[@brennanb2025](https://github.com/brennanb2025)，[#26450](https://github.com/stablyai/orca/pull/26450)）
- 新增（runtime）：session-only browser keys and opt-in for pairing from plain-http pages (host)（[@OrcaWin](https://github.com/OrcaWin)，[#27540](https://github.com/stablyai/orca/pull/27540)）
- 新增（web）：the browser signs in with a non-extractable device key, or pairs for this session only（[@OrcaWin](https://github.com/OrcaWin)，[#27552](https://github.com/stablyai/orca/pull/27552)）
- 修复（codex）：copy in remote Orca Server Codex sessions reaches your clipboard（[@OrcaWin](https://github.com/OrcaWin)，[#27605](https://github.com/stablyai/orca/pull/27605)）
- 保持：SSH chat providers alive after the desktop disconnects（[@brennanb2025](https://github.com/brennanb2025)，[#26473](https://github.com/stablyai/orca/pull/26473)）
- 修复（runtime）：keep remote servers usable when one saved record can't be read（[@nwparker](https://github.com/nwparker)，[#27685](https://github.com/stablyai/orca/pull/27685)）
- 修复（ssh）：keep 1.4.224's running terminals working after the upgrade (legacy relay bridge)（[@OrcaWin](https://github.com/OrcaWin)，[#27787](https://github.com/stablyai/orca/pull/27787)）
- 修复（ssh）：an old relay terminal's tab shows output again after a reconnect（[@OrcaWin](https://github.com/OrcaWin)，[#27951](https://github.com/stablyai/orca/pull/27951)）
- 修复（ssh）：never start a hidden orcad shell for a tab the legacy relay bridge serves（[@OrcaWin](https://github.com/OrcaWin)，[#27939](https://github.com/stablyai/orca/pull/27939)）

#### Serving, updates & terminal recovery {#v1-4-225-serving-updates-terminal-recovery}

> orca serve gains supervised operation and service management, automatic terminal restores are paced and limited, and updates preserve more of the server and terminal state. macOS terminal permissions survive app updates, and Linux shows a persistent recovery banner when a terminal background service loses its AppImage files.

- 修复（orcad）：show help before server startup（[@nwparker](https://github.com/nwparker)，[#26855](https://github.com/stablyai/orca/pull/26855)）
- 修复（packaging）：unpack the orcad serve-selection entry so orca serve can run it（[@OrcaWin](https://github.com/OrcaWin)，[#27404](https://github.com/stablyai/orca/pull/27404)）
- 修复（linux）：stop the AppImage crashpad handler before the mount goes away（[@sergeytiron](https://github.com/sergeytiron)，[#23459](https://github.com/stablyai/orca/pull/23459)）
- 新增（daemon）：observe-only fork gate for automatic terminal restores（[@OrcaWin](https://github.com/OrcaWin)，[#27424](https://github.com/stablyai/orca/pull/27424)）
- 修复（linux）：launch the AppImage terminal daemon through its own mount（[@OrcaWin](https://github.com/OrcaWin)，[#27435](https://github.com/stablyai/orca/pull/27435)）
- 新增（daemon）：pace automatic terminal restores on headless hosts（[@OrcaWin](https://github.com/OrcaWin)，[#27428](https://github.com/stablyai/orca/pull/27428)）
- 新增（daemon）：pause automatic restores after a same-boot crash（[@OrcaWin](https://github.com/OrcaWin)，[#27433](https://github.com/stablyai/orca/pull/27433)）
- 修复（serve）：report secrets unavailable instead of hanging on an unreachable macOS keychain（[@OrcaWin](https://github.com/OrcaWin)，[#27441](https://github.com/stablyai/orca/pull/27441)）
- 新增（daemon）：process-growth breaker that pauses automatic restores（[@OrcaWin](https://github.com/OrcaWin)，[#27437](https://github.com/stablyai/orca/pull/27437)）
- 修复（daemon）：drop a legacy daemon that can no longer accept a connection（[@OrcaWin](https://github.com/OrcaWin)，[#27436](https://github.com/stablyai/orca/pull/27436)）
- 修复（daemon）：count a claimed agent resume as automatic even without a history seed（[@OrcaWin](https://github.com/OrcaWin)，[#27442](https://github.com/stablyai/orca/pull/27442)）
- 修复（serve）：keep the isolated profile off the login keychain（[@OrcaWin](https://github.com/OrcaWin)，[#27463](https://github.com/stablyai/orca/pull/27463)）
- 修复（updater）：stop promising a manual update enables remote updates（[@OrcaWin](https://github.com/OrcaWin)，[#27464](https://github.com/stablyai/orca/pull/27464)）
- 修复（updater）：install macOS orca serve updates instead of waiting on Squirrel forever（[@OrcaWin](https://github.com/OrcaWin)，[#27466](https://github.com/stablyai/orca/pull/27466)）
- 新增（terminal）：declare restore intent and keep deferred panes sleeping（[@OrcaWin](https://github.com/OrcaWin)，[#27455](https://github.com/stablyai/orca/pull/27455)）
- 修复（serve）：decide a duplicate or doomed Electron serve before exec（[@OrcaWin](https://github.com/OrcaWin)，[#27472](https://github.com/stablyai/orca/pull/27472)）
- 新增（serve）：let the owner resume paused automatic restores（[@OrcaWin](https://github.com/OrcaWin)，[#27459](https://github.com/stablyai/orca/pull/27459)）
- 新增（daemon）：cap terminals per execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27488](https://github.com/stablyai/orca/pull/27488)）
- 新增（daemon）：one automatic-restore budget per execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27492](https://github.com/stablyai/orca/pull/27492)）
- 修复（daemon）：keep tweetnacl out of the relocated Windows daemon-host graph; guard daemon externals at build（[@OrcaWin](https://github.com/OrcaWin)，[#27504](https://github.com/stablyai/orca/pull/27504)）
- 新增（daemon）：the host keeps its own record of old-client restores it refuses（[@OrcaWin](https://github.com/OrcaWin)，[#27496](https://github.com/stablyai/orca/pull/27496)）
- 修复（macos）：preserve terminal permissions across app updates with a small signed helper（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27021](https://github.com/stablyai/orca/pull/27021)）
- 新增（macos）：show terminal-host Full Disk Access, tag stable-copy daemons, and give Helpers folder strings（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27354](https://github.com/stablyai/orca/pull/27354)）
- 修复（terminal）：don't duplicate terminals a newer Orca still runs after a downgrade（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27577](https://github.com/stablyai/orca/pull/27577)）
- 新增（serve）：supervised mode for orca serve --supervise（[@OrcaWin](https://github.com/OrcaWin)，[#27716](https://github.com/stablyai/orca/pull/27716)）
- 新增（updater）：auto-park registered serve supervisors during a desktop install（[@OrcaWin](https://github.com/OrcaWin)，[#27722](https://github.com/stablyai/orca/pull/27722)）
- 新增（serve）：orca serve service install|status|uninstall（[@OrcaWin](https://github.com/OrcaWin)，[#27744](https://github.com/stablyai/orca/pull/27744)）
- 修复（serve）：initialize the updater in headless Electron serve（[@OrcaWin](https://github.com/OrcaWin)，[#27771](https://github.com/stablyai/orca/pull/27771)）
- 新增（daemon）：opt-in OS ceiling on terminal processes, reported per host（[@OrcaWin](https://github.com/OrcaWin)，[#27769](https://github.com/stablyai/orca/pull/27769)）
- 修复（serve）：save Codex auth before a headless serve update restart（[@OrcaWin](https://github.com/OrcaWin)，[#28001](https://github.com/stablyai/orca/pull/28001)）
- 修复（serve）：explain what to run when an SSH host's orca cannot start or install a server（[@OrcaWin](https://github.com/OrcaWin)，[#28003](https://github.com/stablyai/orca/pull/28003)）
- 修复（linux）：keep extracted AppImage copies that something still runs from（[@OrcaWin](https://github.com/OrcaWin)，[#28002](https://github.com/stablyai/orca/pull/28002)）
- 修复（updater）：clear a cancelled macOS install request before staging the next update（[@OrcaWin](https://github.com/OrcaWin)，[#28010](https://github.com/stablyai/orca/pull/28010)）
- 新增（serve）：run the --supervise supervisor from a copy outside the app（[@OrcaWin](https://github.com/OrcaWin)，[#28007](https://github.com/stablyai/orca/pull/28007)）
- 修复（serve）：give the first AppImage serve one unpacking deadline and progress（[@OrcaWin](https://github.com/OrcaWin)，[#28015](https://github.com/stablyai/orca/pull/28015)）
- 修复（daemon）：stop giving new terminals to a daemon whose AppImage files are gone（[@OrcaWin](https://github.com/OrcaWin)，[#28011](https://github.com/stablyai/orca/pull/28011)）
- 新增（terminal）：persistent banner to restart a terminal daemon whose files are gone（[@OrcaWin](https://github.com/OrcaWin)，[#28021](https://github.com/stablyai/orca/pull/28021)）

#### Phone & paired clients {#v1-4-225-phone-paired-clients}

> Grok, OpenCode, OMP and Pi chats open on the phone, iPad keeps drafts and the sidebar reachable, SSH workspace badges show host health, and phone terminals accept fresh snapshots after their stream ends.

- 修复（mobile）：size onboarding slides to the modal sheet on iPad（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26919](https://github.com/stablyai/orca/pull/26919)）
- 修复（mobile）：one host sidebar on iPad, with the page owning the host area（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26761](https://github.com/stablyai/orca/pull/26761)）
- 修复（mobile）：keep chat drafts and the sidebar reachable on iPad（[@brennanb2025](https://github.com/brennanb2025)，[#26096](https://github.com/stablyai/orca/pull/26096)）
- 修复（mobile-pairing）：preselect LAN for a signed-out desktop（[@OrcaWin](https://github.com/OrcaWin)，[#27145](https://github.com/stablyai/orca/pull/27145)）
- 修复（mobile）：a new pairing scan supersedes a stale relay pairing journal（[@OrcaWin](https://github.com/OrcaWin)，[#27157](https://github.com/stablyai/orca/pull/27157)）
- 修复（mobile）：agents for workspaces another runtime owns show why（[@OrcaWin](https://github.com/OrcaWin)，[#27196](https://github.com/stablyai/orca/pull/27196)）
- 新增（push）：accept a notification's workspace server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26516](https://github.com/stablyai/orca/pull/26516)）
- 新增（mobile）：show SSH host health on the workspace row badge（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26415](https://github.com/stablyai/orca/pull/26415)）
- 新增（runtime）：let a paired desktop register its phones as phone devices（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26427](https://github.com/stablyai/orca/pull/26427)）
- 新增（mobile）：relay a paired phone's server-workspace requests through the desktop (hidden)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26435](https://github.com/stablyai/orca/pull/26435)）
- 新增（mobile）：let the desktop list its servers and their workspaces for the phone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26442](https://github.com/stablyai/orca/pull/26442)）
- 修复（terminal）：phone wake reaches hibernated agent panes in place（[@OrcaWin](https://github.com/OrcaWin)，[#27450](https://github.com/stablyai/orca/pull/27450)）
- 修复（mobile）：direct connections use v2 framing and never fall back once v2 is seen（[@OrcaWin](https://github.com/OrcaWin)，[#27473](https://github.com/stablyai/orca/pull/27473)）
- 修复（mobile）：open Grok, OpenCode, OMP and Pi chats on the phone（[@brennanb2025](https://github.com/brennanb2025)，[#27212](https://github.com/stablyai/orca/pull/27212)）
- 修复（mobile）：accept a fresh terminal snapshot after a stream ends（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27539](https://github.com/stablyai/orca/pull/27539)）
- 新增（mobile）：let the OTA page send extra top-level request fields（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27815](https://github.com/stablyai/orca/pull/27815)）

#### Workspaces, sidebar & tabs {#v1-4-225-workspaces-sidebar-tabs}

> Tabs have stable references you can copy, the CLI can manage workspace references and launch agents in an existing workspace, closed tabs stay closed, and the worktree-ready notification stays until you dismiss it.

- 修复（runtime）：keep a floating terminal floating when its cwd is inside a workspace（[@OrcaWin](https://github.com/OrcaWin)，[#27088](https://github.com/stablyai/orca/pull/27088)）
- 修复（runtime）：automatic tab activation no longer wakes a worktree the host put to sleep（[@OrcaWin](https://github.com/OrcaWin)，[#27081](https://github.com/stablyai/orca/pull/27081)）
- 修复（agents）：a session dropped on a pane edge splits the pane in paired-runtime workspaces（[@OrcaWin](https://github.com/OrcaWin)，[#27102](https://github.com/stablyai/orca/pull/27102)）
- 修复（cli）：implicit worktree selection is scoped to the caller's host（[@OrcaWin](https://github.com/OrcaWin)，[#27108](https://github.com/stablyai/orca/pull/27108)）
- 修复（runtime）：a terminal close commits in the session partition that holds the tab（[@OrcaWin](https://github.com/OrcaWin)，[#27119](https://github.com/stablyai/orca/pull/27119)）
- 修复（terminal）：closing a tab is never a silent no-op（[@OrcaWin](https://github.com/OrcaWin)，[#27132](https://github.com/stablyai/orca/pull/27132)）
- 修复（persistence）：a session write cannot bring back a tab its partition recorded as closed（[@OrcaWin](https://github.com/OrcaWin)，[#27125](https://github.com/stablyai/orca/pull/27125)）
- 新增（tabs）：copy stable tab references（[@fabricedge](https://github.com/fabricedge)，[#26881](https://github.com/stablyai/orca/pull/26881)）
- 新增：CLI commands to manage and find workspace references（[@nwparker](https://github.com/nwparker)，[#26807](https://github.com/stablyai/orca/pull/26807)）
- 修复（repos）：deleting a project with live terminals warns and needs --force（[@OrcaWin](https://github.com/OrcaWin)，[#27172](https://github.com/stablyai/orca/pull/27172)）
- 修复（composer）：preserve explicit workspace names after selecting tasks（[@nwparker](https://github.com/nwparker)，[#26937](https://github.com/stablyai/orca/pull/26937)）
- 修复（settings）：return current preferences after slow updates（[@nwparker](https://github.com/nwparker)，[#27199](https://github.com/stablyai/orca/pull/27199)）
- Save runtime-started tabs in the tab bar before their terminal starts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27083](https://github.com/stablyai/orca/pull/27083)）
- 修复（runtime）：refuse headless tab moves into a group the server doesn't have（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27381](https://github.com/stablyai/orca/pull/27381)）
- 修复：save editor-only host sessions during quit（[@nwparker](https://github.com/nwparker)，[#26848](https://github.com/stablyai/orca/pull/26848)）
- 修复（sidebar）：stop a removed folder workspace from leaving a blank row（[@bbingz](https://github.com/bbingz)，[#26376](https://github.com/stablyai/orca/pull/26376)）
- 保持：the 'worktree is ready' toast until dismissed（[@brennanb2025](https://github.com/brennanb2025)，[#27566](https://github.com/stablyai/orca/pull/27566)）
- 新增（cli）：launch agents in existing workspaces（[@brennanb2025](https://github.com/brennanb2025)，[#27794](https://github.com/stablyai/orca/pull/27794)）
- 修复（cli）：honor Chat UI setting for worktree agent creation（[@brennanb2025](https://github.com/brennanb2025)，[#27796](https://github.com/stablyai/orca/pull/27796)）

#### Automations, tasks & source control {#v1-4-225-automations-tasks-source-control}

> Folder workspaces appear as automation targets, multi-day schedules display correctly, selected task names survive composer updates, unrelated pull requests stay off feature branches, and Git history lanes survive unrelated roots.

- Start AI commit messages from the same shell environment chats use（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26808](https://github.com/stablyai/orca/pull/26808)）
- 停止：offering Blank Terminal in agent-only pickers (automations)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26961](https://github.com/stablyai/orca/pull/26961)）
- Start server-run automations' agents through the launch executor（[@brennanb2025](https://github.com/brennanb2025)，[#26820](https://github.com/stablyai/orca/pull/26820)）
- 显示：valid multi-day automation schedules（[@nwparker](https://github.com/nwparker)，[#26850](https://github.com/stablyai/orca/pull/26850)）
- 修复：roadmap crash with plugin language packs（[@nwparker](https://github.com/nwparker)，[#26860](https://github.com/stablyai/orca/pull/26860)）
- 修复（linear）：exclude label groups from assignable labels（[@nwparker](https://github.com/nwparker)，[#26861](https://github.com/stablyai/orca/pull/26861)）
- 保留：Git history lanes through unrelated roots（[@nwparker](https://github.com/nwparker)，[#26932](https://github.com/stablyai/orca/pull/26932)）
- 修复（github）：stop feature branches from borrowing unrelated PRs（[@nwparker](https://github.com/nwparker)，[#27332](https://github.com/stablyai/orca/pull/27332)）
- 修复（composer）：ignore delayed PR/MR lookups after you change the form（[@nwparker](https://github.com/nwparker)，[#26954](https://github.com/stablyai/orca/pull/26954)）
- 修复（automations）：find folder-workspace targets on the Automations page（[@OrcaWin](https://github.com/OrcaWin)，[#27416](https://github.com/stablyai/orca/pull/27416)）

#### Editor, files & clipboard {#v1-4-225-editor-files-clipboard}

> Nim and Typst highlighting no longer lets a long line freeze the window, HTML previews load authorized web fonts, editor-only sessions save on quit, and image pastes on macOS and clipboard text on Wayland are more reliable.

- 修复（clipboard）：paste a macOS image copied beside its file URL（[@benjaminb10](https://github.com/benjaminb10)，[#27346](https://github.com/stablyai/orca/pull/27346)）
- 修复（doc-preview）：load authorized web fonts in HTML previews（[@nwparker](https://github.com/nwparker)，[#26849](https://github.com/stablyai/orca/pull/26849)）
- Editor: Nim and Typst on the shared TextMate layer, so a long line can't freeze the window（[@brennanb2025](https://github.com/brennanb2025)，[#26987](https://github.com/stablyai/orca/pull/26987)）
- 修复（linux）：keep Wayland clipboard text current（[@nwparker](https://github.com/nwparker)，[#27772](https://github.com/stablyai/orca/pull/27772)）

#### Browser, skills & feedback {#v1-4-225-browser-skills-feedback}

> Links open in Orca tabs like they do in Chrome, cancelled drags leave browser tabs clickable, double-click selects a word in the address bar, and skill updates are checked against their ownership.

- 打开：links and window.open in Orca tabs the way Chrome does（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26976](https://github.com/stablyai/orca/pull/26976)）
- 保持：browser tabs clickable after a drag that never starts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26986](https://github.com/stablyai/orca/pull/26986)）
- refs/heads/update-wechat-qr-code-2（[@AmethystLiang](https://github.com/AmethystLiang)，[#27036](https://github.com/stablyai/orca/pull/27036)）
- 修复（browser）：return JPEG bytes for JPEG viewport screenshots（[@nwparker](https://github.com/nwparker)，[#26856](https://github.com/stablyai/orca/pull/26856)）
- 修复（settings）：reenable terminal link Actions after an old opt-out（[@nwparker](https://github.com/nwparker)，[#26853](https://github.com/stablyai/orca/pull/26853)）
- Require pointer rest before opening activity hover cards（[@AmethystLiang](https://github.com/AmethystLiang)，[#25931](https://github.com/stablyai/orca/pull/25931)）
- 修复（browser）：double-click in the address bar selects a word, like other browsers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27371](https://github.com/stablyai/orca/pull/27371)）
- 修复（skills）：judge official skill updates by ownership, not snapshot matching（[@OrcaWin](https://github.com/OrcaWin)，[#27603](https://github.com/stablyai/orca/pull/27603)）
- 修复（browser）：end a page's mount admission whenever it leaves the store（[@brennanb2025](https://github.com/brennanb2025)，[#27755](https://github.com/stablyai/orca/pull/27755)）
- 修复（browser）：end a background page's mount admission after its first load（[@brennanb2025](https://github.com/brennanb2025)，[#27754](https://github.com/stablyai/orca/pull/27754)）

#### Windows, WSL & languages {#v1-4-225-windows-wsl-languages}

> WSL files open in Cursor’s WSL mode, background work leaves stopped distributions asleep, Windows-drive searches use the host’s ripgrep, and CodeBuddy hooks work without PowerShell 7. Korean menu and check labels are corrected.

- 修复（i18n）：correct Korean Finder menu label（[@nwparker](https://github.com/nwparker)，[#26866](https://github.com/stablyai/orca/pull/26866)）
- 修复（i18n）：correct Korean CI check translations（[@abruption](https://github.com/abruption)，[#27367](https://github.com/stablyai/orca/pull/27367)）
- 修复（wsl）：open WSL paths in Cursor's WSL mode; ignore Windows-side CLIs in WSL hook setup（[@nwparker](https://github.com/nwparker)，[#27681](https://github.com/stablyai/orca/pull/27681)）
- 修复（wsl）：restore Windows interop after another distro wipes it（[@nwparker](https://github.com/nwparker)，[#27682](https://github.com/stablyai/orca/pull/27682)）
- 性能（wsl）：search Windows-drive projects with host ripgrep（[@nwparker](https://github.com/nwparker)，[#27690](https://github.com/stablyai/orca/pull/27690)）
- 修复（wsl）：stop booting stopped distros for background work（[@nwparker](https://github.com/nwparker)，[#27684](https://github.com/stablyai/orca/pull/27684)）
- 修复（terminal-pane）：quitting Claude or Codex in cmd.exe or Git Bash removes it from the running list（[@brennanb2025](https://github.com/brennanb2025)，[#27742](https://github.com/stablyai/orca/pull/27742)）
- 修复（codebuddy）：run Windows hooks without requiring PowerShell 7（[@OrcaWin](https://github.com/OrcaWin)，[#27626](https://github.com/stablyai/orca/pull/27626)）

#### Performance & reliability {#v1-4-225-performance-reliability}

> Terminal output and usage counting do less work on the main thread, project discovery and Git checks stay responsive, Windows notifications stop freezing the app, and port scans stop leaving stuck lsof processes behind.

- 显示：the usage unit once in the status bar（[@AmethystLiang](https://github.com/AmethystLiang)，[#26869](https://github.com/stablyai/orca/pull/26869)）
- 性能（daemon）：send PTY output to main as raw bytes, not NDJSON（[@outof-place](https://github.com/outof-place)，[#27006](https://github.com/stablyai/orca/pull/27006)）
- 性能（usage）：keep per-source usage caches off the main thread（[@outof-place](https://github.com/outof-place)，[#26980](https://github.com/stablyai/orca/pull/26980)）
- 减小：memory used to count Codex usage and avoid partial totals（[@nwparker](https://github.com/nwparker)，[#26966](https://github.com/stablyai/orca/pull/26966)）
- 更新：Claude usage without rereading the whole conversation（[@nwparker](https://github.com/nwparker)，[#26967](https://github.com/stablyai/orca/pull/26967)）
- 修复（agent-hooks）：throttle and background last-status.json writes（[@nwparker](https://github.com/nwparker)，[#26822](https://github.com/stablyai/orca/pull/26822)）
- 修复（a11y）：name Agent Dashboard column regions（[@nwparker](https://github.com/nwparker)，[#26865](https://github.com/stablyai/orca/pull/26865)）
- 保持：repository detection off the main registration thread（[@nwparker](https://github.com/nwparker)，[#26760](https://github.com/stablyai/orca/pull/26760)）
- Await Git checks while discovering and importing nested projects（[@nwparker](https://github.com/nwparker)，[#26790](https://github.com/stablyai/orca/pull/26790)）
- 保持：folder Git upgrades responsive and recheck project ownership（[@nwparker](https://github.com/nwparker)，[#26791](https://github.com/stablyai/orca/pull/26791)）
- 性能（mac）：resolve terminal names once per full process capture（[@nwparker](https://github.com/nwparker)，[#27146](https://github.com/stablyai/orca/pull/27146)）
- 性能（ai-vault）：pipeline fresh transcript discovery with bounded I/O（[@outof-place](https://github.com/outof-place)，[#27009](https://github.com/stablyai/orca/pull/27009)）
- 修复（computer-use）：clean up completed permission helpers asynchronously（[@nwparker](https://github.com/nwparker)，[#27347](https://github.com/stablyai/orca/pull/27347)）
- 性能（runtime）：reduce terminal ANSI scanning work（[@nwparker](https://github.com/nwparker)，[#27344](https://github.com/stablyai/orca/pull/27344)）
- 性能（main）：release startup allocations held by journal sentinel（[@nwparker](https://github.com/nwparker)，[#27342](https://github.com/stablyai/orca/pull/27342)）
- 修复（computer-use）：release macOS screenshot memory after each request（[@f8team](https://github.com/f8team)，[#27374](https://github.com/stablyai/orca/pull/27374)）
- 性能（worktrees）：preserve Git scans when saving sort order（[@nwparker](https://github.com/nwparker)，[#27343](https://github.com/stablyai/orca/pull/27343)）
- 性能（worktrees）：skip unchanged lineage after sidebar order saves（[@nwparker](https://github.com/nwparker)，[#27384](https://github.com/stablyai/orca/pull/27384)）
- 避免：downloading unchanged paired-runtime session history（[@nwparker](https://github.com/nwparker)，[#27383](https://github.com/stablyai/orca/pull/27383)）
- 修复（renderer）：jump instead of smooth-scrolling under reduced motion（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26796](https://github.com/stablyai/orca/pull/26796)）
- 性能（daemon）：yield between bounded slices of terminal output ingest（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27578](https://github.com/stablyai/orca/pull/27578)）
- 性能（zod）：use Zod 4.6 validation and compile ACP updates（[@nwparker](https://github.com/nwparker)，[#27735](https://github.com/stablyai/orca/pull/27735)）
- 性能（ports）：stop leaving stuck lsof processes behind on a dead network mount（[@brennanb2025](https://github.com/brennanb2025)，[#27729](https://github.com/stablyai/orca/pull/27729)）
- 性能（notifications）：stop every Windows notification from freezing Orca（[@brennanb2025](https://github.com/brennanb2025)，[#27731](https://github.com/stablyai/orca/pull/27731)）

#### Relay service {#v1-4-225-relay-service}

> Relay service work improves reconnect handling, database-fault recovery, authentication during outages, capacity placement, staging checks and operational alerts. Several reserve-mode changes remain disabled or preparatory, as noted in their PR titles.

- 修复（relay）：spread drain placement over a load band instead of one empty cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26802](https://github.com/stablyai/orca/pull/26802)）
- 修复（relay）：a database fault reaching unhandledRejection no longer kills the process（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26817](https://github.com/stablyai/orca/pull/26817)）
- 新增（relay）：read-only seat feed on cells for the directors' shadow directory（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26803](https://github.com/stablyai/orca/pull/26803)）
- 新增（relay）：Cloud Storage bucket for the per-cell runtime switch files (targeted apply only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26835](https://github.com/stablyai/orca/pull/26835)）
- 新增（relay）：one-cell flag write workflow with dry run, compare-and-swap and read-back（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26837](https://github.com/stablyai/orca/pull/26837)）
- 修复（relay）：a lost database reply ends its connection within statement timeout + 10 s（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26829](https://github.com/stablyai/orca/pull/26829)）
- 新增（relay）：per-cell runtime switches read from Cloud Storage every 5 s（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26805](https://github.com/stablyai/orca/pull/26805)）
- 新增（relay）：log metrics and alerts for fenced and fatal rejections and the lease shadow (evidence code)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26839](https://github.com/stablyai/orca/pull/26839)）
- 新增（relay）：local /ready behind the per-cell readinessLocal switch (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26812](https://github.com/stablyai/orca/pull/26812)）
- 新增（relay）：dark shadow seat directory poller on directors (step 3)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26810](https://github.com/stablyai/orca/pull/26810)）
- 新增（relay）：key id on assignment leases; cells shadow-check the lease (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26815](https://github.com/stablyai/orca/pull/26815)）
- 新增（relay）：dark shadow seat compare on sticky verify and /v1/resolve (step 3)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26813](https://github.com/stablyai/orca/pull/26813)）
- 新增（relay）：read-only /v1/admin/host-whereabouts on directors (step 3)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26816](https://github.com/stablyai/orca/pull/26816)）
- 重构（relay）：share one retry schedule and identity key（[@OrcaWin](https://github.com/OrcaWin)，[#27139](https://github.com/stablyai/orca/pull/27139)）
- 修复（relay）：wait through a scheduled reconnect and name why Relay is not ready（[@OrcaWin](https://github.com/OrcaWin)，[#27141](https://github.com/stablyai/orca/pull/27141)）
- 修复（relay）：a switch-file read cut off mid-body is asked for again（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27049](https://github.com/stablyai/orca/pull/27049)）
- 新增（relay）：per-cell switches for the rejection fence and the lost-reply margin（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27057](https://github.com/stablyai/orca/pull/27057)）
- 新增（relay）：step-5 reserve core: the cell's booking book and the director's placer (inert)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27038](https://github.com/stablyai/orca/pull/27038)）
- 新增（relay）：cell reserve mode: book, admit and demote without the database (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27041](https://github.com/stablyai/orca/pull/27041)）
- 新增（relay）：flip a reserve-mode cell back without disconnecting anyone (E-mix)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27043](https://github.com/stablyai/orca/pull/27043)）
- 修复（relay）：read control-error in every state and pace repeated rate limits（[@OrcaWin](https://github.com/OrcaWin)，[#27160](https://github.com/stablyai/orca/pull/27160)）
- 修复（relay）：install the desktop Relay provider on demand（[@OrcaWin](https://github.com/OrcaWin)，[#27159](https://github.com/stablyai/orca/pull/27159)）
- 新增（relay）：directors place on reserve-mode cells from memory (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27047](https://github.com/stablyai/orca/pull/27047)）
- 修复（relay）：cells without a seat feed stay out of shadow coverage and switch state（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27058](https://github.com/stablyai/orca/pull/27058)）
- 新增（relay）：the director that booked a join writes its row about a second later (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27048](https://github.com/stablyai/orca/pull/27048)）
- 修复（relay）：database sweeps and ops reads skip reserve-mode cells (step-5 census, inert)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27046](https://github.com/stablyai/orca/pull/27046)）
- 新增（relay）：log metric and console alert for unreadable cell switch files (evidence code)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27024](https://github.com/stablyai/orca/pull/27024)）
- 新增（relay）：alert when a reserve-mode cell trips its dead-man（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27096](https://github.com/stablyai/orca/pull/27096)）
- 修复（relay）：the cell switch tool changes only the named switches（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27056](https://github.com/stablyai/orca/pull/27056)）
- 修复（relay）：staging director deploys run as relay-dir with rehome identity, and can register one cell's cap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27118](https://github.com/stablyai/orca/pull/27118)）
- 修复（relay）：staging director deploys set the admin identity the director trusts to gha-relay（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27121](https://github.com/stablyai/orca/pull/27121)）
- 基础设施（relay）：staging c1 gets a 600/60 cap, and c1/c4 get rehome trust, for the step-5 e2e（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27117](https://github.com/stablyai/orca/pull/27117)）
- 新增（relay）：a staging cell-flags workflow, trusted by the staging relay deploy identity（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27113](https://github.com/stablyai/orca/pull/27113)）
- 新增（relay）：a free-form staging load mode on Prove Relay Asia Staging（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27115](https://github.com/stablyai/orca/pull/27115)）
- 修复（relay）：staging sleep runs under the admission selector instead of refusing（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27126](https://github.com/stablyai/orca/pull/27126)）
- 基础设施（relay）：pin staging c1, c2 and c4 to the step-5 image for the staging e2e（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27339](https://github.com/stablyai/orca/pull/27339)）
- 基础设施（relay）：keep staging c4 on the serving director image until the director identity bootstrap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27351](https://github.com/stablyai/orca/pull/27351)）
- 基础设施（relay）：pin staging c4 to the step-5 image again after the director identity bootstrap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27352](https://github.com/stablyai/orca/pull/27352)）
- 基础设施（relay）：point the staging deploy at the pre-step-5 image for the reserve guard drill（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27357](https://github.com/stablyai/orca/pull/27357)）
- 基础设施（relay）：pin staging c4 to the step-5 image again after the reserve guard drill（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27360](https://github.com/stablyai/orca/pull/27360)）
- 重构（relay）：delete the SSH 中继 server, its build assets and tests（[@OrcaWin](https://github.com/OrcaWin)，[#27215](https://github.com/stablyai/orca/pull/27215)）
- 修复（relay-load）：reuse an Asia load principal set for shards past the fourth（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27403](https://github.com/stablyai/orca/pull/27403)）
- 修复（relay）：report event-loop freezes and keep seat polls off the cell-list read（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27405](https://github.com/stablyai/orca/pull/27405)）
- 修复（relay）：director reaches Cloud SQL through a proxy sidecar (staging), adoptable deploy shape, event-loop stall alert（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27406](https://github.com/stablyai/orca/pull/27406)）
- 杂项（relay-staging）：declare staging C4 on image E so the director can deploy it（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27462](https://github.com/stablyai/orca/pull/27462)）
- 基础设施（relay）：add staging cells c5-c7 at c2's shape for the dead-cell guard e2e（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27476](https://github.com/stablyai/orca/pull/27476)）
- 修复（relay）：cell-flags tool refuses reserve without readinessLocal=true（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27460](https://github.com/stablyai/orca/pull/27460)）
- 文档（relay）：director Cloud SQL sidecar enablement and rollback（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27461](https://github.com/stablyai/orca/pull/27461)）
- 修复（relay）：let the staging admission workflow register and promote c5-c7（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27491](https://github.com/stablyai/orca/pull/27491)）
- 修复（relay）：let a host leave a dead reserve cell without an operator fence（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27458](https://github.com/stablyai/orca/pull/27458)）
- 修复（relay）：a resumed host control adopts the token its hello proved（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27487](https://github.com/stablyai/orca/pull/27487)）
- 修复（relay）：keep verifying host tokens from the last served keys while auth is down（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27490](https://github.com/stablyai/orca/pull/27490)）
- 杂项（relay）：move the staging cells onto image F（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27570](https://github.com/stablyai/orca/pull/27570)）
- 杂项（relay）：turn on the director Cloud SQL proxy sidecar and stall alert in production（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27697](https://github.com/stablyai/orca/pull/27697)）
- 新增（relay）：declare Asia spare cell c35 as migration-only（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27695](https://github.com/stablyai/orca/pull/27695)）
- 新增（relay）：promotion path for Asia spare cell c35（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27733](https://github.com/stablyai/orca/pull/27733)）
- 杂项（relay）：move Asia cell c35 to the general same-cap lists after promotion（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27761](https://github.com/stablyai/orca/pull/27761)）

#### Reverted {#v1-4-225-reverted}

> The new-tab launch routing change and verified mobile pairing links were reverted. The older-SSH-terminal refusal and stop action were superseded by the compatibility bridge that keeps those terminals running.

- Start plain new-tab agent launches through the host's agent.launch（[@brennanb2025](https://github.com/brennanb2025)，[#26489](https://github.com/stablyai/orca/pull/26489)）
- 新增（mobile）：verified https pairing links; custom scheme carries no secret（[@OrcaWin](https://github.com/OrcaWin)，[#27475](https://github.com/stablyai/orca/pull/27475)）
- Revert "+" new-tab agent launches to the window route (reverts #26489)（[@brennanb2025](https://github.com/brennanb2025)，[#27173](https://github.com/stablyai/orca/pull/27173)）
- Revert "feat(mobile): verified https pairing links; custom scheme carries no secret" (#27475)（[@OrcaWin](https://github.com/OrcaWin)，[#27693](https://github.com/stablyai/orca/pull/27693)）
- 修复（ssh）：end an older Orca's relay terminals from the connect refusal (STA-10166)（[@OrcaWin](https://github.com/OrcaWin)，[#27748](https://github.com/stablyai/orca/pull/27748)）

#### Tests, CI & maintenance {#v1-4-225-tests-ci-maintenance}

> Checks spend less time on repeated setup and waits, layout tests cover managed SSH and mixed-version clients, and internal routing and layout preparation are consolidated. Inert or unused layout work listed here does not enable a new workspace layout in this release.

- 重构（runtime-core）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26894](https://github.com/stablyai/orca/pull/26894)）
- 重构（execution-host）：one connection-to-host helper（[@OrcaWin](https://github.com/OrcaWin)，[#26929](https://github.com/stablyai/orca/pull/26929)）
- 重构（pty）：one remote-runtime PTY id predicate（[@OrcaWin](https://github.com/OrcaWin)，[#26930](https://github.com/stablyai/orca/pull/26930)）
- 重构（runtime-rpc-terminal-io）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26895](https://github.com/stablyai/orca/pull/26895)）
- 测试（e2e）：headless layout oracle covers tab moves between groups（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26857](https://github.com/stablyai/orca/pull/26857)）
- 新增：the inert workspace layout model, Loader and Serializer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26748](https://github.com/stablyai/orca/pull/26748)）
- 重构（renderer-terminal-runtime）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26900](https://github.com/stablyai/orca/pull/26900)）
- 新增：inert layout commands and runtime transitions（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26749](https://github.com/stablyai/orca/pull/26749)）
- 重构（ipc-persistence-shared）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26902](https://github.com/stablyai/orca/pull/26902)）
- 重构（renderer-ui-store）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26903](https://github.com/stablyai/orca/pull/26903)）
- [CI] Consolidate Activity tests and remove real-time quiescence wait（[@nwparker](https://github.com/nwparker)，[#26949](https://github.com/stablyai/orca/pull/26949)）
- 重构（providers）：local git provider behind the host router（[@OrcaWin](https://github.com/OrcaWin)，[#26955](https://github.com/stablyai/orca/pull/26955)）
- 重构（runtime）：runtime git commands use a provider for every host（[@OrcaWin](https://github.com/OrcaWin)，[#26965](https://github.com/stablyai/orca/pull/26965)）
- 新增：an inert read-only layout stream and the layout round-trip self-check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26964](https://github.com/stablyai/orca/pull/26964)）
- 杂项（providers）：neutral router rationale and typed provider generation（[@OrcaWin](https://github.com/OrcaWin)，[#26925](https://github.com/stablyai/orca/pull/26925)）
- 重构（runtime）：runtime file commands use a provider for every host（[@OrcaWin](https://github.com/OrcaWin)，[#26994](https://github.com/stablyai/orca/pull/26994)）
- 重构（pty）：key the PTY registry by execution host（[@OrcaWin](https://github.com/OrcaWin)，[#26995](https://github.com/stablyai/orca/pull/26995)）
- [CI] Advance debounce clocks and simplify test fixtures（[@nwparker](https://github.com/nwparker)，[#26996](https://github.com/stablyai/orca/pull/26996)）
- 修复（layout）：an absent editor or browser map is not a round-trip change（[@OrcaWin](https://github.com/OrcaWin)，[#27007](https://github.com/stablyai/orca/pull/27007)）
- 重构（pty）：PTY controller inventory and startup waits take a host id（[@OrcaWin](https://github.com/OrcaWin)，[#26998](https://github.com/stablyai/orca/pull/26998)）
- 测试（search）：keep Kiro out of older hosts' expected history-search agents（[@brennanb2025](https://github.com/brennanb2025)，[#27002](https://github.com/stablyai/orca/pull/27002)）
- 新增：the inert layout client for local and remote runtimes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27000](https://github.com/stablyai/orca/pull/27000)）
- 重构（ssh）：register each SSH host's providers as one set（[@OrcaWin](https://github.com/OrcaWin)，[#27044](https://github.com/stablyai/orca/pull/27044)）
- 重构（ipc）：route filesystem git handlers through the host router（[@OrcaWin](https://github.com/OrcaWin)，[#27059](https://github.com/stablyai/orca/pull/27059)）
- [CI] Reduce fixture work and consolidate related tests（[@nwparker](https://github.com/nwparker)，[#27063](https://github.com/stablyai/orca/pull/27063)）
- 重构（main）：route git probe and terminal-artifact provider checks through the host router（[@OrcaWin](https://github.com/OrcaWin)，[#27066](https://github.com/stablyai/orca/pull/27066)）
- Extract subprocess handling into @orca/process-host（[@nwparker](https://github.com/nwparker)，[#26963](https://github.com/stablyai/orca/pull/26963)）
- 重构（ai-vault, native-chat）：one per-call agent root table（[@OrcaWin](https://github.com/OrcaWin)，[#27079](https://github.com/stablyai/orca/pull/27079)）
- 重构（session-tabs）：one authority-repair lane shared by every session-tabs mirror（[@OrcaWin](https://github.com/OrcaWin)，[#27093](https://github.com/stablyai/orca/pull/27093)）
- CI：skip build:packages on release tags that predate it（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27110](https://github.com/stablyai/orca/pull/27110)）
- CI（release）：read the watcher child from the supervisor's slot in the fault harness（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27120](https://github.com/stablyai/orca/pull/27120)）
- [CI] Consolidate tests, retire static scans, and update evidence（[@nwparker](https://github.com/nwparker)，[#27109](https://github.com/stablyai/orca/pull/27109)）
- Speed up process-host import enforcement in CI（[@nwparker](https://github.com/nwparker)，[#27124](https://github.com/stablyai/orca/pull/27124)）
- 重构（shell）：the local-open guard takes an owner, not settings（[@OrcaWin](https://github.com/OrcaWin)，[#27144](https://github.com/stablyai/orca/pull/27144)）
- 测试（tabs）：mock the Copy icon the tab context menu now imports（[@OrcaWin](https://github.com/OrcaWin)，[#27162](https://github.com/stablyai/orca/pull/27162)）
- 测试（wire）：give the preflight downgrade journey a non-Windows old host（[@OrcaWin](https://github.com/OrcaWin)，[#27177](https://github.com/stablyai/orca/pull/27177)）
- 杂项：remove verified unused Orca code（[@nwparker](https://github.com/nwparker)，[#27175](https://github.com/stablyai/orca/pull/27175)）
- [CI] Overlap independent process waits and remove two static tests（[@nwparker](https://github.com/nwparker)，[#27198](https://github.com/stablyai/orca/pull/27198)）
- 重构（wsl）：move the WSL guest bundle sources out of src/relay（[@OrcaWin](https://github.com/OrcaWin)，[#27174](https://github.com/stablyai/orca/pull/27174)）
- 重构（hosts）：host authorities and owner resolution（[@OrcaWin](https://github.com/OrcaWin)，[#27176](https://github.com/stablyai/orca/pull/27176)）
- 重构（hosts）：one ingest adapter for fetched rows（[@OrcaWin](https://github.com/OrcaWin)，[#27216](https://github.com/stablyai/orca/pull/27216)）
- 重构（hosts）：stamp events and optimistic rows at ingest（[@OrcaWin](https://github.com/OrcaWin)，[#27223](https://github.com/stablyai/orca/pull/27223)）
- 重构（runtime）：route adapter, split fences, ownership table, combined ratchet（[@OrcaWin](https://github.com/OrcaWin)，[#27218](https://github.com/stablyai/orca/pull/27218)）
- [CI] Reduce repeated test imports and unrelated runner allocations（[@nwparker](https://github.com/nwparker)，[#27222](https://github.com/stablyai/orca/pull/27222)）
- [CI] Reduce test teardown waits and duplicate CI setup（[@nwparker](https://github.com/nwparker)，[#27253](https://github.com/stablyai/orca/pull/27253)）
- 重构（runtime）：owner transports, the creation default and a focus-read ratchet（[@OrcaWin](https://github.com/OrcaWin)，[#27275](https://github.com/stablyai/orca/pull/27275)）
- 重构（forge）：forge reads and edits route by the repo's owner or the task source（[@OrcaWin](https://github.com/OrcaWin)，[#27276](https://github.com/stablyai/orca/pull/27276)）
- 重构（files）：file reads and edits route by the file's owner（[@OrcaWin](https://github.com/OrcaWin)，[#27278](https://github.com/stablyai/orca/pull/27278)）
- 重构（terminals）：terminal input and inspection route by the PTY's owner（[@OrcaWin](https://github.com/OrcaWin)，[#27279](https://github.com/stablyai/orca/pull/27279)）
- 重构（agents）：agent, session and port calls route by their workspace owner（[@OrcaWin](https://github.com/OrcaWin)，[#27283](https://github.com/stablyai/orca/pull/27283)）
- 重构（github）：PR and work-item calls carry the repo owner's host（[@OrcaWin](https://github.com/OrcaWin)，[#27289](https://github.com/stablyai/orca/pull/27289)）
- 重构（sources）：row-less sources and host-less surfaces name their host（[@OrcaWin](https://github.com/OrcaWin)，[#27290](https://github.com/stablyai/orca/pull/27290)）
- 重构（projects）：repo, project group and folder catalog calls route by their owner（[@OrcaWin](https://github.com/OrcaWin)，[#27288](https://github.com/stablyai/orca/pull/27288)）
- [CI] Reduce repeated test setup and real CLI waits（[@nwparker](https://github.com/nwparker)，[#27297](https://github.com/stablyai/orca/pull/27297)）
- 重构（git）：git calls route by the worktree's owner（[@OrcaWin](https://github.com/OrcaWin)，[#27291](https://github.com/stablyai/orca/pull/27291)）
- [CI] Reduce repeated test setup and unnecessary packaging（[@nwparker](https://github.com/nwparker)，[#27308](https://github.com/stablyai/orca/pull/27308)）
- 重构（worktrees）：worktree create, listing, removal and repo hook/ref reads route by their owner（[@OrcaWin](https://github.com/OrcaWin)，[#27298](https://github.com/stablyai/orca/pull/27298)）
- 杂项（lint）：bypassing owner routing fails lint（[@OrcaWin](https://github.com/OrcaWin)，[#27313](https://github.com/stablyai/orca/pull/27313)）
- 杂项（settings）：rename "Active Server" to "Default host for new projects"（[@OrcaWin](https://github.com/OrcaWin)，[#27286](https://github.com/stablyai/orca/pull/27286)）
- [CI] Refresh unit timing weights and reduce repeated test setup（[@nwparker](https://github.com/nwparker)，[#27315](https://github.com/stablyai/orca/pull/27315)）
- 修复（cli）：preserve alias recovery while guarding destructive suggestions（[@nwparker](https://github.com/nwparker)，[#26934](https://github.com/stablyai/orca/pull/26934)）
- 文档（rpc）：a paired client runs commands as you; say so when pairing（[@OrcaWin](https://github.com/OrcaWin)，[#27317](https://github.com/stablyai/orca/pull/27317)）
- CI（e2e）：run the layout oracle on PRs that change layout writers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27103](https://github.com/stablyai/orca/pull/27103)）
- 测试（relay）：deterministic step-5 simulation with invariants 1-8（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27040](https://github.com/stablyai/orca/pull/27040)）
- 测试（e2e）：pass the catalog owner to the remaining fetchRepos callers（[@OrcaWin](https://github.com/OrcaWin)，[#27325](https://github.com/stablyai/orca/pull/27325)）
- 测试（relay）：load generator can send two concurrent assigns per host (--duplicate-assign-probes)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27107](https://github.com/stablyai/orca/pull/27107)）
- 测试（e2e）：pass the catalog owner to the remaining catalog fetches and creates（[@OrcaWin](https://github.com/OrcaWin)，[#27338](https://github.com/stablyai/orca/pull/27338)）
- 测试（e2e）：cover SSH user journeys on an orcad-managed host（[@OrcaWin](https://github.com/OrcaWin)，[#27323](https://github.com/stablyai/orca/pull/27323)）
- List the cold-relaunch tab-order swap as known on main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27353](https://github.com/stablyai/orca/pull/27353)）
- 测试（native-chat）：unmount the cut-turn notice hooks after each test（[@OrcaWin](https://github.com/OrcaWin)，[#27358](https://github.com/stablyai/orca/pull/27358)）
- Record a display-only snapshot of each paired server's tabs (inert)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27359](https://github.com/stablyai/orca/pull/27359)）
- 修复：keep NUL-separated source literals searchable（[@nwparker](https://github.com/nwparker)，[#26864](https://github.com/stablyai/orca/pull/26864)）
- [CI] Fix test fixtures and reduce unnecessary test setup（[@nwparker](https://github.com/nwparker)，[#27330](https://github.com/stablyai/orca/pull/27330)）
- 测试（main）：fail if the journal's shared no-row error returns (follow-up to #27342)（[@nwparker](https://github.com/nwparker)，[#27375](https://github.com/stablyai/orca/pull/27375)）
- 测试（runtime）：enforce ANSI preview-final pre-filter invariant（[@nwparker](https://github.com/nwparker)，[#27376](https://github.com/stablyai/orca/pull/27376)）
- 修复（dev）：keep Node-only Quick Open path accumulator out of the renderer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27372](https://github.com/stablyai/orca/pull/27372)）
- 测试（e2e）：reusable phone-mirror test setup and baseline specs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26412](https://github.com/stablyai/orca/pull/26412)）
- [CI] Reduce test teardown and scope server qualification（[@nwparker](https://github.com/nwparker)，[#27380](https://github.com/stablyai/orca/pull/27380)）
- 性能（ci）：overlap Bun typechecking and skip redundant alias scans（[@nwparker](https://github.com/nwparker)，[#27382](https://github.com/stablyai/orca/pull/27382)）
- CI（relay-staging）：asia-east2 staging load from a hosted runner（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27393](https://github.com/stablyai/orca/pull/27393)）
- 测试（ci）：point server-scope qualification fixtures at SSH after relay deletion（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27392](https://github.com/stablyai/orca/pull/27392)）
- CI（relay-staging）：split the staging load across two hosted runners（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27402](https://github.com/stablyai/orca/pull/27402)）
- 测试（relay）：load generator can reopen a closed phone splice instead of failing the run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27379](https://github.com/stablyai/orca/pull/27379)）
- 重构（runtime）：compose typed file search and listing ownership（[@nwparker](https://github.com/nwparker)，[#27396](https://github.com/stablyai/orca/pull/27396)）
- CI：ship the managed SSH server (orcad template) in hourly and daily builds（[@OrcaWin](https://github.com/OrcaWin)，[#27407](https://github.com/stablyai/orca/pull/27407)）
- 测试（e2e）：delete helpers orphaned by relay deletion（[@OrcaWin](https://github.com/OrcaWin)，[#27411](https://github.com/stablyai/orca/pull/27411)）
- CI：drop the relay Windows process-tree job from desktop packaging（[@OrcaWin](https://github.com/OrcaWin)，[#27412](https://github.com/stablyai/orca/pull/27412)）
- 重构（runtime）：remove unused text-search spawn hook（[@nwparker](https://github.com/nwparker)，[#27418](https://github.com/stablyai/orca/pull/27418)）
- 测试（ssh）：hostile-host cells state managed-orcad expectations only（[@OrcaWin](https://github.com/OrcaWin)，[#27419](https://github.com/stablyai/orca/pull/27419)）
- 新增：manual cleanup for worktree Electron storage（[@nwparker](https://github.com/nwparker)，[#27414](https://github.com/stablyai/orca/pull/27414)）
- 杂项（ratchet）：one focus-read ratchet（[@OrcaWin](https://github.com/OrcaWin)，[#27426](https://github.com/stablyai/orca/pull/27426)）
- 修复（runtime）：scope layout.unsubscribe to the caller's connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27423](https://github.com/stablyai/orca/pull/27423)）
- 测试（ssh）：Windows host lane drops relay cells（[@OrcaWin](https://github.com/OrcaWin)，[#27421](https://github.com/stablyai/orca/pull/27421)）
- 重构（renderer）：delete dead owner and settings shims（[@OrcaWin](https://github.com/OrcaWin)，[#27430](https://github.com/stablyai/orca/pull/27430)）
- 杂项：delete verified-unused modules and exports（[@OrcaWin](https://github.com/OrcaWin)，[#27438](https://github.com/stablyai/orca/pull/27438)）
- 重构（rpc）：delete the SSH-bridge caller scope（[@OrcaWin](https://github.com/OrcaWin)，[#27440](https://github.com/stablyai/orca/pull/27440)）
- 重构（rpc）：name the terminal.subscribe modules（[@OrcaWin](https://github.com/OrcaWin)，[#27444](https://github.com/stablyai/orca/pull/27444)）
- 重构（cli）：extract the serve supervisor's after-exit decision into a pure policy（[@OrcaWin](https://github.com/OrcaWin)，[#27446](https://github.com/stablyai/orca/pull/27446)）
- 重构（orcad）：shared serve-option validation; no daemon barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27443](https://github.com/stablyai/orca/pull/27443)）
- [CI] Remove copied probes and advance queued-card test waits（[@nwparker](https://github.com/nwparker)，[#27447](https://github.com/stablyai/orca/pull/27447)）
- 测试（e2e）：one posixShellQuote; docker-ssh-host fixture names (Phase 3.99 0.11b)（[@OrcaWin](https://github.com/OrcaWin)，[#27449](https://github.com/stablyai/orca/pull/27449)）
- 新增（runtime）：accept a declared spawn intent from paired clients（[@OrcaWin](https://github.com/OrcaWin)，[#27452](https://github.com/stablyai/orca/pull/27452)）
- 测试（e2e）：one managed-host setup path and skip gate for the ssh-orcad specs (Phase 3.99 0.11a)（[@OrcaWin](https://github.com/OrcaWin)，[#27465](https://github.com/stablyai/orca/pull/27465)）
- 重构（ssh）：drop the legacy-relay bridge and the relay branch of the terminal gate（[@OrcaWin](https://github.com/OrcaWin)，[#27471](https://github.com/stablyai/orca/pull/27471)）
- 重构（providers）：an ssh: route carries no provider and throws one typed error（[@OrcaWin](https://github.com/OrcaWin)，[#27477](https://github.com/stablyai/orca/pull/27477)）
- [CI] Clean up runtime test callbacks（[@nwparker](https://github.com/nwparker)，[#27483](https://github.com/stablyai/orca/pull/27483)）
- 重构（runtime）：paired sockets authenticate to a device principal（[@OrcaWin](https://github.com/OrcaWin)，[#27480](https://github.com/stablyai/orca/pull/27480)）
- 重构（rpc）：one dispatcher（[@OrcaWin](https://github.com/OrcaWin)，[#27486](https://github.com/stablyai/orca/pull/27486)）
- 重构（terminal）：panes have two transports, local or remote runtime（[@OrcaWin](https://github.com/OrcaWin)，[#27489](https://github.com/stablyai/orca/pull/27489)）
- 重构（runtime）：runtime git and file callers drop SSH arms（[@OrcaWin](https://github.com/OrcaWin)，[#27501](https://github.com/stablyai/orca/pull/27501)）
- [CI] Remove duplicate terminal backlog test replays（[@nwparker](https://github.com/nwparker)，[#27503](https://github.com/stablyai/orca/pull/27503)）
- 重构（pty）：delete the SSH PTY provider and its registry slot（[@OrcaWin](https://github.com/OrcaWin)，[#27499](https://github.com/stablyai/orca/pull/27499)）
- [CI] Remove a simulated terminal credit correctness check（[@nwparker](https://github.com/nwparker)，[#27507](https://github.com/stablyai/orca/pull/27507)）
- 重构（main）：agent detection, automations, skills, AI vault and ephemeral VM drop SSH provider arms（[@OrcaWin](https://github.com/OrcaWin)，[#27511](https://github.com/stablyai/orca/pull/27511)）
- [CI] Wait for delayed Codex answers before test cleanup（[@nwparker](https://github.com/nwparker)，[#27516](https://github.com/stablyai/orca/pull/27516)）
- 重构（pty）：delete relay-fed SSH output intake and projection threading（[@OrcaWin](https://github.com/OrcaWin)，[#27515](https://github.com/stablyai/orca/pull/27515)）
- [CI] Speed up Mobile test execution（[@nwparker](https://github.com/nwparker)，[#27521](https://github.com/stablyai/orca/pull/27521)）
- 重构（terminal）：move the mounted-terminal registry out of the graph file（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27427](https://github.com/stablyai/orca/pull/27427)）
- 重构（layout）：add the pane start, exit, first-surface and rename rules (unused)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27432](https://github.com/stablyai/orca/pull/27432)）
- 重构（ipc）：worktree handlers are local or runtime only（[@OrcaWin](https://github.com/OrcaWin)，[#27528](https://github.com/stablyai/orca/pull/27528)）
- [CI] Run focused checks for Mobile CI tool changes（[@nwparker](https://github.com/nwparker)，[#27532](https://github.com/stablyai/orca/pull/27532)）
- 杂项（ratchet）：layout-writer ratchets for main and renderer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27431](https://github.com/stablyai/orca/pull/27431)）
- 重构（pty）：drop SSH spawn, liveness and kill branches（[@OrcaWin](https://github.com/OrcaWin)，[#27529](https://github.com/stablyai/orca/pull/27529)）
- 新增（workspace-layout）：pure old-client translators for layout methods (inert)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27534](https://github.com/stablyai/orca/pull/27534)）
- 重构（remote）：one paired E2EE handshake core for desktop, CLI, web and mobile clients（[@OrcaWin](https://github.com/OrcaWin)，[#27523](https://github.com/stablyai/orca/pull/27523)）
- 重构（layout）：drop unused snapshot receipt fields and add the snapshot read method（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27536](https://github.com/stablyai/orca/pull/27536)）
- 重构（terminal）：keep mobile content-fact caches in their producers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27537](https://github.com/stablyai/orca/pull/27537)）
- 重构（layout）：add the per-view store, pane status and runtime leaf-record projection (unused)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27535](https://github.com/stablyai/orca/pull/27535)）
- 修复（ci）：a removed layout writer no longer fails other PRs' ratchet check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27557](https://github.com/stablyai/orca/pull/27557)）
- 杂项（ratchet）：prune main layout-writer baseline after #27529（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27554](https://github.com/stablyai/orca/pull/27554)）
- 重构（persistence）：retire the dead SSH PTY lease writers（[@OrcaWin](https://github.com/OrcaWin)，[#27555](https://github.com/stablyai/orca/pull/27555)）
- 重构（layout）：add the editor tab view type to the layout model (unused)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27541](https://github.com/stablyai/orca/pull/27541)）
- 重构（rpc）：delete host-side terminal source-range acks（[@OrcaWin](https://github.com/OrcaWin)，[#27546](https://github.com/stablyai/orca/pull/27546)）
- 重构（layout）：keep compatibility code in named folders behind one entry（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27556](https://github.com/stablyai/orca/pull/27556)）
- 测试（perf）：layout latency instruments and a main baseline（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27538](https://github.com/stablyai/orca/pull/27538)）
- [CI] Freeze legacy journal partition receipts to reduce test work（[@nwparker](https://github.com/nwparker)，[#27559](https://github.com/stablyai/orca/pull/27559)）
- 重构（terminal）：drop the relay-held error token（[@OrcaWin](https://github.com/OrcaWin)，[#27564](https://github.com/stablyai/orca/pull/27564)）
- 重构（store）：delete direct-SSH terminal ledgers（[@OrcaWin](https://github.com/OrcaWin)，[#27569](https://github.com/stablyai/orca/pull/27569)）
- 重构（terminal）：paste reads the live transport（[@OrcaWin](https://github.com/OrcaWin)，[#27572](https://github.com/stablyai/orca/pull/27572)）
- [CI] Improve test clocks and dependency fixtures（[@nwparker](https://github.com/nwparker)，[#27574](https://github.com/stablyai/orca/pull/27574)）
- 重构（remote）：clients connect through a paired-connection handle, not a pairing offer（[@OrcaWin](https://github.com/OrcaWin)，[#27533](https://github.com/stablyai/orca/pull/27533)）
- Replace three copied new-terminal tab-order blocks with the shared helper（[@brennanb2025](https://github.com/brennanb2025)，[#26771](https://github.com/stablyai/orca/pull/26771)）
- 测试（e2e）：layout oracle reads the live runtime layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27560](https://github.com/stablyai/orca/pull/27560)）
- 测试（native-chat）：keep #26586's path-link cases as regression tests（[@brennanb2025](https://github.com/brennanb2025)，[#26819](https://github.com/stablyai/orca/pull/26819)）
- 重构（renderer）：delete the direct-SSH authority and reconnect coordinator（[@OrcaWin](https://github.com/OrcaWin)，[#27587](https://github.com/stablyai/orca/pull/27587)）
- [CI] Narrow daemon fixture checks and advance coordinator test clocks（[@nwparker](https://github.com/nwparker)，[#27592](https://github.com/stablyai/orca/pull/27592)）
- 重构（renderer）：no client SSH operation arms in project creation or Native Chat（[@OrcaWin](https://github.com/OrcaWin)，[#27593](https://github.com/stablyai/orca/pull/27593)）
- 测试（e2e）：open the oracle's headless layout stream with a paired connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27601](https://github.com/stablyai/orca/pull/27601)）
- 重构（ssh）：SSH status copy lives in renderer/src/ssh and says what the build does（[@OrcaWin](https://github.com/OrcaWin)，[#27604](https://github.com/stablyai/orca/pull/27604)）
- 杂项（layout）：delete the dev-only layout round-trip watch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27597](https://github.com/stablyai/orca/pull/27597)）
- 重构（renderer）：no rebound-settings owner pattern（[@OrcaWin](https://github.com/OrcaWin)，[#27607](https://github.com/stablyai/orca/pull/27607)）
- 重构（ipc）：filesystem and repo handlers are local or runtime only（[@OrcaWin](https://github.com/OrcaWin)，[#27609](https://github.com/stablyai/orca/pull/27609)）
- 重构（renderer）：one default-host read; one catalog fan-out（[@OrcaWin](https://github.com/OrcaWin)，[#27613](https://github.com/stablyai/orca/pull/27613)）
- [CI] Check real I/O progress during worktree deletion（[@nwparker](https://github.com/nwparker)，[#27620](https://github.com/stablyai/orca/pull/27620)）
- CI：the layout oracle gates merges（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27600](https://github.com/stablyai/orca/pull/27600)）
- 测试（launch）：pin what each agent launcher produces on main today（[@brennanb2025](https://github.com/brennanb2025)，[#27189](https://github.com/stablyai/orca/pull/27189)）
- 测试（pty）：pin launch race fixes on both spawn paths before merging them（[@brennanb2025](https://github.com/brennanb2025)，[#27187](https://github.com/stablyai/orca/pull/27187)）
- 测试：run a 结构化聊天 against the packaged headless server（[@brennanb2025](https://github.com/brennanb2025)，[#26527](https://github.com/stablyai/orca/pull/26527)）
- 重构（providers）：delete the SSH git and filesystem providers and relay-only wiring（[@OrcaWin](https://github.com/OrcaWin)，[#27644](https://github.com/stablyai/orca/pull/27644)）
- 重构（settings）：one settings host-scope type and label（[@OrcaWin](https://github.com/OrcaWin)，[#27629](https://github.com/stablyai/orca/pull/27629)）
- 测试（e2e）：mixed-version, two-client and phone layout baselines recorded on main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27688](https://github.com/stablyai/orca/pull/27688)）
- CI（e2e）：one managed-SSH lane and routing regex; no relay build in e2e setup（[@OrcaWin](https://github.com/OrcaWin)，[#27640](https://github.com/stablyai/orca/pull/27640)）
- 重构（orcad）：deploy and serve orcad through a host transport interface（[@nwparker](https://github.com/nwparker)，[#27686](https://github.com/stablyai/orca/pull/27686)）
- [CI] Fix account fixture timestamps and SSH listing assertions（[@nwparker](https://github.com/nwparker)，[#27704](https://github.com/stablyai/orca/pull/27704)）
- 重构（ssh）：one pinned-runtime host target（[@OrcaWin](https://github.com/OrcaWin)，[#27709](https://github.com/stablyai/orca/pull/27709)）
- 重构（startup）：one agent-hook runtime binding set for every host（[@OrcaWin](https://github.com/OrcaWin)，[#27720](https://github.com/stablyai/orca/pull/27720)）
- 修复（bench）：load benchmark sources as file URLs so they run on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#27621](https://github.com/stablyai/orca/pull/27621)）
- 修复（bench）：make bench:idle-cpu build, sample CPU and parse the process table on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#27622](https://github.com/stablyai/orca/pull/27622)）
- [CI] Replace Codex fixture executables atomically（[@nwparker](https://github.com/nwparker)，[#27747](https://github.com/stablyai/orca/pull/27747)）
- Speed up import checks, localization extraction, and CI typechecking（[@nwparker](https://github.com/nwparker)，[#27727](https://github.com/stablyai/orca/pull/27727)）
- 重构（orcad）：transport-neutral command channel and generic stdio bridge listener（[@nwparker](https://github.com/nwparker)，[#27689](https://github.com/stablyai/orca/pull/27689)）
- Share historical test source and add manual cache cleanup（[@nwparker](https://github.com/nwparker)，[#27743](https://github.com/stablyai/orca/pull/27743)）
- 测试（launch）：pin what the "+" launchers produce on main today（[@brennanb2025](https://github.com/brennanb2025)，[#27691](https://github.com/stablyai/orca/pull/27691)）
- 测试（renderer）：one runtime-environment bridge fixture（[@OrcaWin](https://github.com/OrcaWin)，[#27780](https://github.com/stablyai/orca/pull/27780)）
- 重构（terminal）：one remote input hold（[@OrcaWin](https://github.com/OrcaWin)，[#27781](https://github.com/stablyai/orca/pull/27781)）
- 重构（shared）：dedupe the local-default connection-to-host conversion and the trim helpers（[@OrcaWin](https://github.com/OrcaWin)，[#27797](https://github.com/stablyai/orca/pull/27797)）
- 重构（pty）：no ipc/pty.ts barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27798](https://github.com/stablyai/orca/pull/27798)）
- 杂项（ratchet）：one ratchet baseline library（[@OrcaWin](https://github.com/OrcaWin)，[#27788](https://github.com/stablyai/orca/pull/27788)）
- 重构（providers）：import provider contracts directly (main)（[@OrcaWin](https://github.com/OrcaWin)，[#27813](https://github.com/stablyai/orca/pull/27813)）
- 测试（daemon）：remove clock jitter from startup-budget check（[@nwparker](https://github.com/nwparker)，[#27850](https://github.com/stablyai/orca/pull/27850)）
- 重构（ssh）：delete relay-only GC, takeover and install remnants（[@OrcaWin](https://github.com/OrcaWin)，[#27770](https://github.com/stablyai/orca/pull/27770)）
- 重构（cli）：serve children spawn through process-host（[@OrcaWin](https://github.com/OrcaWin)，[#27760](https://github.com/stablyai/orca/pull/27760)）
- 重构（ssh）：remove the ssh-relay-deploy-helpers re-export module（[@OrcaWin](https://github.com/OrcaWin)，[#27961](https://github.com/stablyai/orca/pull/27961)）
- 重构（build）：relay survivors named for what they are（[@OrcaWin](https://github.com/OrcaWin)，[#27962](https://github.com/stablyai/orca/pull/27962)）
- 重构（orcad）：orcad artifacts live under orcad/ and node-runtime/（[@OrcaWin](https://github.com/OrcaWin)，[#27963](https://github.com/stablyai/orca/pull/27963)）
- 重构（providers）：import provider contracts directly (runtime)（[@OrcaWin](https://github.com/OrcaWin)，[#27965](https://github.com/stablyai/orca/pull/27965)）
- 重构（providers）：import provider contracts directly (ipc); delete the barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27966](https://github.com/stablyai/orca/pull/27966)）
- 重构（renderer）：remove the web-runtime-session barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27967](https://github.com/stablyai/orca/pull/27967)）
- 重构（renderer）：remove the web-session-tabs-sync barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27969](https://github.com/stablyai/orca/pull/27969)）
- 重构（renderer）：remove the runtime-file-client barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27975](https://github.com/stablyai/orca/pull/27975)）
- 重构（renderer）：remove the runtime-git-client barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27977](https://github.com/stablyai/orca/pull/27977)）
- 重构（renderer）：remove the web-terminal-surface-id re-export（[@OrcaWin](https://github.com/OrcaWin)，[#27981](https://github.com/stablyai/orca/pull/27981)）
- 重构（renderer）：remove the keyboard-handlers barrel and partial re-exports（[@OrcaWin](https://github.com/OrcaWin)，[#27986](https://github.com/stablyai/orca/pull/27986)）
- 重构（renderer）：name target converters by meaning; drop re-export shims（[@OrcaWin](https://github.com/OrcaWin)，[#27992](https://github.com/stablyai/orca/pull/27992)）
- CI：stop new main-process code from freezing Orca with synchronous launches（[@brennanb2025](https://github.com/brennanb2025)，[#27756](https://github.com/stablyai/orca/pull/27756)）

### 新贡献者 {#v1-4-225-contributors}

- [@w-felipe360](https://github.com/w-felipe360) 首次贡献于 [#26695](https://github.com/stablyai/orca/pull/26695)
- [@outof-place](https://github.com/outof-place) 首次贡献于 [#27006](https://github.com/stablyai/orca/pull/27006)
- [@fabricedge](https://github.com/fabricedge) 首次贡献于 [#26881](https://github.com/stablyai/orca/pull/26881)
- [@parkavenue9639](https://github.com/parkavenue9639) 首次贡献于 [#24964](https://github.com/stablyai/orca/pull/24964)
- [@abruption](https://github.com/abruption) 首次贡献于 [#27367](https://github.com/stablyai/orca/pull/27367)
- [@f8team](https://github.com/f8team) 首次贡献于 [#27374](https://github.com/stablyai/orca/pull/27374)
- [@vampik33](https://github.com/vampik33) 首次贡献于 [#25211](https://github.com/stablyai/orca/pull/25211)
- [@benjaminb10](https://github.com/benjaminb10) 首次贡献于 [#27346](https://github.com/stablyai/orca/pull/27346)
- [@sergeytiron](https://github.com/sergeytiron) 首次贡献于 [#23459](https://github.com/stablyai/orca/pull/23459)

---

**完整变更对照：** [v1.4.224...v1.4.225](https://github.com/stablyai/orca/compare/v1.4.224...v1.4.225)

## v1.4.224 自动化可按次指定模型与 effort，SSH 主机改跑托管 Orca 服务器 {#v1-4-224}

2026年10月10日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.224)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-224-short}

- **自动化现在可以为每次运行指定 Agent 的模型和 effort。** 在自动化编辑器里打开 Advanced，填入 **Extra agent arguments**（或在 `orca automations create` 与 `edit` 时使用 `--extra-agent-args`），例如 `-model haiku --effort high`。目前对 Claude、Codex、Grok 和 CodeBuddy（模型和 effort）、Cursor（模型，effort 随之）和 OMP（模型）有效，更多 Agent 支持即将到来。每次运行都会开启全新会话，其他自动化仍保持宿主默认。另外，在已有工作区的 Orca 服务器上定时运行时，任务现在会交给启动后才读取它的 Agent（如 Aider、Goose 和 Amp），不再让它们空等。
- **SSH 主机现在运行托管的 Orca 服务器。** Orca 自带运行时，连接时自动设置，不再因为主机 Node 版本不对或缺少构建工具而失败。没有打开终端的主机会在下次连接时切换，并带上项目、文件夹和已打开的编辑器标签。有打开终端的主机继续按原方式工作，并提供 **Move to a managed Orca server**，会重启那些终端。无法运行的主机保持现有连接，Settings → SSH Hosts 会说明原因。你可以在 Settings → Managed servers 里查看、更新、回滚、**Recover** 或 **Forget** 每一台服务器。
- **Native Chat（实验性）：** 如果已打开 Chat UI 且默认视图是聊天，支持的 Agent 现在默认以结构化聊天打开。如果默认是 Terminal，新的 Agent 标签仍留在终端，并有一次性提示说明变化、允许打开聊天模式。你可以从标签右键菜单或 Agent Session History（**Resume in New CLI** / **Resume in New Native Chat**）在聊天和终端之间移动对话。
- **Native Chat 更多内容：** 近期版本的 OpenCode（包括 2.x）、Pi 和 OMP 在这台计算机上以结构化聊天打开。Agent 可以在回复里直接绘制图表、示意图和原型（桌面和手机均可，可在 Settings → Chat → Inline visuals 关闭）。Cmd/Ctrl+F 搜索聊天，可以用 **Add to chat** 引用回复的一部分，上下方向键回忆你发送过的每一条 prompt，数字键回答 Agent 的问题，长消息和工具调用序列折叠成一行。模型选择器不再等待 Agent 启动，Codex 和 Pi 在你发送前就会说明未登录，被 Orca 中断的回复会说明原因并提供 **Continue**。Grok 会显示其子 Agent，Grok、OpenCode 和 OMP 支持 `/compact`。
- **SSH 与远程终端：** 网络中断期间你输入的按键会按顺序精确送达一次，回滚和窗格大小在重连后仍在，打开的标签在托管服务器更新后会重新附着。打印文字的 shell 启动文件、有数万条目的文件夹和 64 位 ARM Linux 服务器不再导致连接失败或断开。当两台机器共享路径时，文件、浏览器标签、链接和拖放会留在它们所属的机器上。`orca serve` 现在会加载它的 SSH 主机，在服务机器上退出窗口不再停止服务器。
- **手机：** 在手机上打开的浏览器标签会在桌面最小化或屏保时继续加载，聊天可视化和子 Agent 会显示在手机的 Native Chat 里，视频和音乐文件可以在预览中播放。
- **工作区与编辑：** 你可以把多个 pull request、merge request 和任务附加到同一个工作区。悬停标签会显示带图标和程序的完整标题，Force Delete 可以记住 **Always force delete**，**Continue in New Session** 现在改为 **Hand Off to Another Agent**。Markdown 会显示 GitHub 风格的 callout（如 `> [!NOTE]`），PDF 可以用捏合和 Cmd/Ctrl+`=`/`-` 缩放，从 Finder 或文件资源管理器拖入的文件会精确落到你放下的窗格、文件夹或编辑器。
- **其他：** 状态栏的用量仪表现在默认使用更短的 Compact 视图（除非你已选择过，Detailed 仍可用），Stage All 即使列表上限为 1000 也会暂存所有更改，即使 `gh` 启动器卡住，Orca 也能检测到 GitHub CLI。

### 已知问题 {#v1-4-224-known-issues}

**SSH 主机上的 `orca` 命令：** 默认情况下，在 SSH 主机上运行的 `orca` 命令只能触及该主机自己的终端和编排消息。要让那里的 Agent 通过 `orca` 创建 worktree、打开终端或分发工作，请为该主机打开 **Allow this host's orca CLI to control Orca**（Settings → SSH Hosts → 编辑主机 → Advanced Connection）（#26483）。

**降级到 v1.4.223：** 在 v1.4.224 启动的终端，在你再次更新之前，v1.4.223 无法触及。附加到文件夹工作区的额外 pull request、merge request 和任务会被移除。如果 Chat UI 是打开的，再次更新后可能会关闭；请在 Settings → Experimental 里重新打开。已移动到托管服务器的 SSH 主机在 v1.4.223 里通过旧连接工作；如果你在那里添加或移除项目，更新后主机会显示 "Changed on an older Orca" 并提供 **Move the new projects**。Orca 仍拒绝从版本选择器安装早于 v1.4.214 的版本。要回到那些版本，先关掉 Orca，运行 `orca profile state rollback --latest-json`，再手动安装旧版本（#23262）。

**更新后的终端：** 这一版为新终端启动新的终端后台服务。已经打开的终端继续跑在前一个服务上，因此本版本的改动只作用于更新后打开的终端。

**来自 v1.4.217 或更早版本的 Native Chat：** 如果你在 v1.4.217 或更早版本用过实验性 Native Chat，并直接更新到 v1.4.224，更早的 Native Chat 不会出现。它们的文件仍在磁盘上（#26038）。

**从 shell 历史重新启动：** 当 Agent 的启动命令很长或跨越多行时，shell 历史里保存的是一条短的一次性命令，因此按上方向键再按 Enter 不会再次启动该 Agent（#23962）。

**从手机创建的工作区：** 在手机上从 issue、pull request 或 Linear 条目创建带 Agent 的工作区，仍会把桌面移到该工作区（#26025）。
### 产品体验 {#v1-4-224-product}

#### 自动化 {#v1-4-224-automations}

> 每个自动化可以设置自己的模型和 effort，已有工作区里由服务器运行的自动化现在会把任务交给启动后才读取它的 Agent。

- 允许自动化每次运行传递额外的 Agent 参数（[@AmethystLiang](https://github.com/AmethystLiang)，[#26659](https://github.com/stablyai/orca/pull/26659)）
- 把定时自动化的 prompt 发送给启动后才读取它的 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#26703](https://github.com/stablyai/orca/pull/26703)）

#### Native Chat（实验性） {#v1-4-224-native-chat-experimental}

> 结构化聊天成为 Chat UI 默认（Terminal 默认用户保持不变），OpenCode、Pi 和 OMP 加入结构化聊天，Agent 可以显示内联可视化，聊天获得查找、引用、prompt 回忆、更整齐的工具行、更清晰的登录和停止消息，以及更稳定的消息队列。

- 把实验性 Native Chat 默认设为结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#22933](https://github.com/stablyai/orca/pull/22933)）
- 保持 Chat UI 用户默认 Terminal 时仍用终端，并在升级提示中提供聊天模式开关（[@brennanb2025](https://github.com/brennanb2025)，[#26915](https://github.com/stablyai/orca/pull/26915)）
- 为升级前已开启 Experimental Chat UI 的用户显示一次性 Native Chat 升级提示（[@brennanb2025](https://github.com/brennanb2025)，[#26710](https://github.com/stablyai/orca/pull/26710)）
- 从标签右键菜单提供 Resume in New CLI / Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#26705](https://github.com/stablyai/orca/pull/26705)）
- 新增（session-history）：Resume in New CLI 把 Native Chat 的对话分叉到终端（[@brennanb2025](https://github.com/brennanb2025)，[#26336](https://github.com/stablyai/orca/pull/26336)）
- 通过 Agent Client Protocol 打开 OpenCode 结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#25845](https://github.com/stablyai/orca/pull/25845)）
- 新增（opencode）：也在结构化聊天中打开 OpenCode 2.x（[@brennanb2025](https://github.com/brennanb2025)，[#26395](https://github.com/stablyai/orca/pull/26395)）
- 新增：通过 RPC 模式打开 Pi 的结构化 Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#25851](https://github.com/stablyai/orca/pull/25851)）
- 新增（omp）：通过 ACP 在结构化聊天中打开 OMP（[@brennanb2025](https://github.com/brennanb2025)，[#26401](https://github.com/stablyai/orca/pull/26401)）
- 在每个 Agent 会话启动前显示模型和 effort 选项（[@brennanb2025](https://github.com/brennanb2025)，[#26407](https://github.com/stablyai/orca/pull/26407)）
- 修复（native-chat）：选择模型或 effort 后把焦点返回编写器（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26574](https://github.com/stablyai/orca/pull/26574)）
- 新增（native-chat）：在结构化聊天中内联显示 Agent 绘制的可视化内容（[@brennanb2025](https://github.com/brennanb2025)，[#26103](https://github.com/stablyai/orca/pull/26103)）
- 新增（native-chat）：教聊天 Agent 在自己的文件夹中显示内联可视化（[@brennanb2025](https://github.com/brennanb2025)，[#26099](https://github.com/stablyai/orca/pull/26099)）
- Native Chat：添加内联可视化开关并简化技能（[@brennanb2025](https://github.com/brennanb2025)，[#26358](https://github.com/stablyai/orca/pull/26358)）
- Native Chat：为 Grok、OpenCode 和 OMP 聊天提供内联可视化（[@brennanb2025](https://github.com/brennanb2025)，[#26530](https://github.com/stablyai/orca/pull/26530)）
- 允许页面内链接切换聊天可视化中的章节（[@brennanb2025](https://github.com/brennanb2025)，[#26729](https://github.com/stablyai/orca/pull/26729)）
- Native Chat：Cmd/Ctrl+F 在聊天中查找（[@brennanb2025](https://github.com/brennanb2025)，[#26517](https://github.com/stablyai/orca/pull/26517)）
- 新增（native-chat）：把 Agent 回复的选中部分引用到编写器（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26018](https://github.com/stablyai/orca/pull/26018)）
- 修复（native-chat）：在编写器用上下方向键回忆每一条已发送的 prompt（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26044](https://github.com/stablyai/orca/pull/26044)）
- 新增（native-chat）：用开关折叠长的已发送消息（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#25996](https://github.com/stablyai/orca/pull/25996)）
- 修复（native-chat）：完整阅读排队中的消息（[@brennanb2025](https://github.com/brennanb2025)，[#26004](https://github.com/stablyai/orca/pull/26004)）
- 修复（native-chat）：把回复之间的思考和工具调用折叠成一行（[@brennanb2025](https://github.com/brennanb2025)，[#26048](https://github.com/stablyai/orca/pull/26048)）
- 新增（native-chat）：用有界调用列表压缩工具运行（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26285](https://github.com/stablyai/orca/pull/26285)）
- 新增（native-chat）：用回复预览每个轨道刻度，并让跳转落在顶部（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26056](https://github.com/stablyai/orca/pull/26056)）
- 新增（native-chat）：为问题提供数字键和自动前进（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26288](https://github.com/stablyai/orca/pull/26288)）
- 新增（native-chat）：让 Native Chat 回复流入，跟随时代码本滑动（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26238](https://github.com/stablyai/orca/pull/26238)）
- 修复回复结束后仍停留在错误状态的 Mermaid 图表（[@brennanb2025](https://github.com/brennanb2025)，[#26480](https://github.com/stablyai/orca/pull/26480)）
- Native Chat：通过终端的文件链接菜单从工具行打开文件（[@brennanb2025](https://github.com/brennanb2025)，[#26511](https://github.com/stablyai/orca/pull/26511)）
- 修复（native-chat）：只有工作区确认文件路径存在后才下划线（[@brennanb2025](https://github.com/brennanb2025)，[#26675](https://github.com/stablyai/orca/pull/26675)）
- 修复（native-chat）：只在适用的地方显示右键复制和粘贴（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26207](https://github.com/stablyai/orca/pull/26207)）
- 新增（acp）：压缩 Grok、OpenCode 和 OMP 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#26502](https://github.com/stablyai/orca/pull/26502)）
- 新增（grok）：把 Grok 的子 Agent 显示为子 Agent 行（[@brennanb2025](https://github.com/brennanb2025)，[#26508](https://github.com/stablyai/orca/pull/26508)）
- 修复（omp）：正常结束的命令显示 exit 0（[@brennanb2025](https://github.com/brennanb2025)，[#26494](https://github.com/stablyai/orca/pull/26494)）
- 修复（acp）：保留跟随其推理的 OMP 回复（[@brennanb2025](https://github.com/brennanb2025)，[#26658](https://github.com/stablyai/orca/pull/26658)）
- 修复（acp）：为报告无模型的 Agent 启动聊天（[@brennanb2025](https://github.com/brennanb2025)，[#26587](https://github.com/stablyai/orca/pull/26587)）
- 修复（acp）：聊天消息失败时显示 Agent 详情（[@brennanb2025](https://github.com/brennanb2025)，[#26666](https://github.com/stablyai/orca/pull/26666)）
- Native Chat：当 Codex 未登录或 Agent 未安装时说明原因，而不禁用 Send（[@brennanb2025](https://github.com/brennanb2025)，[#25666](https://github.com/stablyai/orca/pull/25666)）
- 在 Native Chat 第一次发送前显示 "Pi isn't signed in"（[@brennanb2025](https://github.com/brennanb2025)，[#26743](https://github.com/stablyai/orca/pull/26743)）
- 为所有 Native Chat Agent 显示登录引导（[@brennanb2025](https://github.com/brennanb2025)，[#26544](https://github.com/stablyai/orca/pull/26544)）
- 当 OMP 报告未选择模型时显示 OMP 登录引导（[@brennanb2025](https://github.com/brennanb2025)，[#26649](https://github.com/stablyai/orca/pull/26649)）
- 新增（native-chat）：在聊天中说明 Orca 为何中断回复，并提供 Continue（[@brennanb2025](https://github.com/brennanb2025)，[#25675](https://github.com/stablyai/orca/pull/25675)）
- 新增（native-chat）：把每个被中断聊天的工作区显示为其只读侧栏卡片（[@brennanb2025](https://github.com/brennanb2025)，[#25652](https://github.com/stablyai/orca/pull/25652)）
- 新增（native-chat）：在恢复发生时显示每个聊天的恢复，并同时启动更多（[@brennanb2025](https://github.com/brennanb2025)，[#26361](https://github.com/stablyai/orca/pull/26361)）
- 在聊天的 Agent 完成启动前，把消息留在宿主中（[@brennanb2025](https://github.com/brennanb2025)，[#26416](https://github.com/stablyai/orca/pull/26416)）
- 修复（native-chat）：本机无法运行的本地聊天会在终端中打开 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#25947](https://github.com/stablyai/orca/pull/25947)）
- 新增（native-chat）：在已配对服务器上的结构化聊天中附加文件（[@brennanb2025](https://github.com/brennanb2025)，[#25146](https://github.com/stablyai/orca/pull/25146)）
- 修复（native-chat）：在手机和桌面上显示 SSH 会话的聊天历史（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26334](https://github.com/stablyai/orca/pull/26334)）
- 修复（native-chat）：桌面不保存发件箱；一次只发送一条，宿主拥有它已接受的内容（[@brennanb2025](https://github.com/brennanb2025)，[#25959](https://github.com/stablyai/orca/pull/25959)）
- 修复（native-chat）：退出或关闭后保留的消息按顺序等待，并跟随聊天的下一轮（[@brennanb2025](https://github.com/brennanb2025)，[#25960](https://github.com/stablyai/orca/pull/25960)）
- 修复（native-chat）：不因已有 20 条等待而拒绝排队卡片，并防止队列覆盖聊天（[@brennanb2025](https://github.com/brennanb2025)，[#26553](https://github.com/stablyai/orca/pull/26553)）
- 修复（native-chat）：不因重试记录已满而拒绝用户的写入（[@brennanb2025](https://github.com/brennanb2025)，[#26543](https://github.com/stablyai/orca/pull/26543)）
- 修复（native-chat）：Agent 工作时发送的 /compact 会排队等待而不是被拒绝（[@brennanb2025](https://github.com/brennanb2025)，[#25704](https://github.com/stablyai/orca/pull/25704)）
- 把在 Agent 开始处理前就停止的消息明确标记为 "Stopped"（[@brennanb2025](https://github.com/brennanb2025)，[#26381](https://github.com/stablyai/orca/pull/26381)）
- 新增（native-chat）：用当前标题显示 Agent 消息的发送者，排队卡片上也可点击（[@brennanb2025](https://github.com/brennanb2025)，[#26357](https://github.com/stablyai/orca/pull/26357)）
- 保持 Native Chat 的 /clear 在同一对话中（[@brennanb2025](https://github.com/brennanb2025)，[#26579](https://github.com/stablyai/orca/pull/26579)）
- 停止 Codex 启动前台命令时 Native Chat 跳动（[@brennanb2025](https://github.com/brennanb2025)，[#26503](https://github.com/stablyai/orca/pull/26503)）
- 修复（native-chat）：在通知卡片中显示宿主中断（[@brennanb2025](https://github.com/brennanb2025)，[#26161](https://github.com/stablyai/orca/pull/26161)）
- 关闭 Native Chat 编写器时保持已选技能和待上传项（[@brennanb2025](https://github.com/brennanb2025)，[#26538](https://github.com/stablyai/orca/pull/26538)）
- 关闭聊天编写器时释放剪贴板预览（[@nwparker](https://github.com/nwparker)，[#26234](https://github.com/stablyai/orca/pull/26234)）
- 修复（native-chat）：用一次总能放得下的写入结算已死 Agent 的剩余工作（[@brennanb2025](https://github.com/brennanb2025)，[#26664](https://github.com/stablyai/orca/pull/26664)）
- 从目录快照解析 Native Chat 工作区（[@AmethystLiang](https://github.com/AmethystLiang)，[#26428](https://github.com/stablyai/orca/pull/26428)）

#### Agent、集成与编排 {#v1-4-224-agents-integrations-orchestration}

> 会话交接有了更清晰的名称，DeepSeek Harness 会报告空闲，OpenCode 2 恢复时保持其启动模式，手机和 CLI 创建工作区与桌面一致，Windows Agent hooks 启动更快。

- 检测卡住的启动器背后已安装的 GitHub CLI（[@OrcaWin](https://github.com/OrcaWin)，[#25183](https://github.com/stablyai/orca/pull/25183)）
- 新增（agent-sessions）：把 "Continue in New Session" 重命名为 "Hand Off to Another Agent"（[@brennanb2025](https://github.com/brennanb2025)，[#26375](https://github.com/stablyai/orca/pull/26375)）
- 修复（runtime）：在其 hook-store 完成时结算 DSH tui-idle（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26481](https://github.com/stablyai/orca/pull/26481)）
- 恢复会话时尊重 OpenCode 2 的启动模式（[@nwparker](https://github.com/nwparker)，[#26843](https://github.com/stablyai/orca/pull/26843)）
- 通过启动执行器启动 worktree.create 的 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#26709](https://github.com/stablyai/orca/pull/26709)）
- 通过启动执行器启动编排 worker 和远程 worker（[@brennanb2025](https://github.com/brennanb2025)，[#26724](https://github.com/stablyai/orca/pull/26724)）
- 修复（worktrees）：手机或 CLI 创建仅在文件夹匹配时才保留稀疏预设（[@brennanb2025](https://github.com/brennanb2025)，[#26104](https://github.com/stablyai/orca/pull/26104)）
- 修复（worktrees）：手机或 CLI 创建时像桌面一样把 Agent 放到 orca.yaml 的第一个默认标签（[@brennanb2025](https://github.com/brennanb2025)，[#26106](https://github.com/stablyai/orca/pull/26106)）
- 修复：在安全的配置文件路径上直接分发 Muse Windows hooks（[@nwparker](https://github.com/nwparker)，[#26755](https://github.com/stablyai/orca/pull/26755)）
- 修复（hooks）：加速受保护的 Unicode Windows hook 启动（[@OrcaWin](https://github.com/OrcaWin)，[#26382](https://github.com/stablyai/orca/pull/26382)）
- 性能：安装 Agent hooks 时跳过未使用的 Grok login-shell 探测（[@nwparker](https://github.com/nwparker)，[#26241](https://github.com/stablyai/orca/pull/26241)）

#### SSH、托管服务器与远程 {#v1-4-224-ssh-managed-servers-remote}

> SSH 主机迁移到托管的 Orca 服务器，远程终端在中断期间保留输入、回滚和大小，文件、链接、浏览器标签和拖放留在它们所属的机器上。

- Phase 3：每台 SSH 主机运行托管的 Orca 服务器（orcad），替换中继，且 orca serve 在其上运行（[@OrcaWin](https://github.com/OrcaWin)，[#24863](https://github.com/stablyai/orca/pull/24863)）
- Phase 3.5：从根因修复顶级 SSH/远程问题（[@OrcaWin](https://github.com/OrcaWin)，[#26483](https://github.com/stablyai/orca/pull/26483)）
- Phase 3.7：修复对抗性真实主机测试发现的 SSH/远程失败（[@OrcaWin](https://github.com/OrcaWin)，[#26847](https://github.com/stablyai/orca/pull/26847)）
- 修复（remote-terminal）：在重试中保持断开输入宽限期的诚实（[@OrcaWin](https://github.com/OrcaWin)，[#26871](https://github.com/stablyai/orca/pull/26871)）
- 在托管的 Linux 和 macOS 服务器上提供 Orca CLI（[@nwparker](https://github.com/nwparker)，[#26539](https://github.com/stablyai/orca/pull/26539)）
- 保持托管服务器在应答前不可验证（[@nwparker](https://github.com/nwparker)，[#26637](https://github.com/stablyai/orca/pull/26637)）
- 避免声称不可验证的托管服务器已停止（[@nwparker](https://github.com/nwparker)，[#26663](https://github.com/stablyai/orca/pull/26663)）
- 通过当前 SSH 连接重新连接托管服务器（[@nwparker](https://github.com/nwparker)，[#26645](https://github.com/stablyai/orca/pull/26645)）
- 手动更新托管服务器后刷新 SSH 状态（[@nwparker](https://github.com/nwparker)，[#26665](https://github.com/stablyai/orca/pull/26665)）
- 在 Settings 中解释 Active Server 停止拒绝（[@nwparker](https://github.com/nwparker)，[#26584](https://github.com/stablyai/orca/pull/26584)）
- 保持打开的 Remote Settings 与已保存服务器同步（[@nwparker](https://github.com/nwparker)，[#26581](https://github.com/stablyai/orca/pull/26581)）
- 当 SSH 主机移动到 Remote 时重试失败的目录读取（[@nwparker](https://github.com/nwparker)，[#26531](https://github.com/stablyai/orca/pull/26531)）
- 保持已迁移的文件夹工作区在其 Remote 宿主下（[@nwparker](https://github.com/nwparker)，[#26535](https://github.com/stablyai/orca/pull/26535)）
- 保持远程文件夹侧栏行在不同执行宿主间区分（[@nwparker](https://github.com/nwparker)，[#26634](https://github.com/stablyai/orca/pull/26634)）
- 保持 Git 身份探测不阻止 SSH 主机重新转换（[@nwparker](https://github.com/nwparker)，[#26578](https://github.com/stablyai/orca/pull/26578)）
- 从已安装的提供方报告浏览器放置支持（[@nwparker](https://github.com/nwparker)，[#26559](https://github.com/stablyai/orca/pull/26559)）
- 托管转换后保持新浏览器标签在 SSH 路由上（[@nwparker](https://github.com/nwparker)，[#26570](https://github.com/stablyai/orca/pull/26570)）
- SSH 转换期间保留已保留的桌面浏览器页面（[@nwparker](https://github.com/nwparker)，[#26572](https://github.com/stablyai/orca/pull/26572)）
- 区分远程浏览器失败与服务器连接失败（[@nwparker](https://github.com/nwparker)，[#26573](https://github.com/stablyai/orca/pull/26573)）
- 列出远程 Markdown 前等待编辑器所有权（[@nwparker](https://github.com/nwparker)，[#26590](https://github.com/stablyai/orca/pull/26590)）
- SSH 主机转换期间保留编辑器文件身份（[@nwparker](https://github.com/nwparker)，[#26593](https://github.com/stablyai/orca/pull/26593)）
- 远程宿主联系恢复时恢复编辑器文件监视（[@nwparker](https://github.com/nwparker)，[#26606](https://github.com/stablyai/orca/pull/26606)）
- 服务器恢复后恢复远程资源管理器更新（[@nwparker](https://github.com/nwparker)，[#26612](https://github.com/stablyai/orca/pull/26612)）
- 保持资源管理器文件监视在选定的远程宿主上（[@nwparker](https://github.com/nwparker)，[#26616](https://github.com/stablyai/orca/pull/26616)）
- 在同一路径切换远程宿主时重置资源管理器文件（[@nwparker](https://github.com/nwparker)，[#26627](https://github.com/stablyai/orca/pull/26627)）
- 选定远程宿主改变时移动共享文件监视（[@nwparker](https://github.com/nwparker)，[#26632](https://github.com/stablyai/orca/pull/26632)）
- 保持托管工作区路径不进入桌面编辑器启动（[@nwparker](https://github.com/nwparker)，[#26668](https://github.com/stablyai/orca/pull/26668)）
- 保持托管状态警告不进入桌面 gitignore 写入（[@nwparker](https://github.com/nwparker)，[#26671](https://github.com/stablyai/orca/pull/26671)）
- 丢弃 Git 更改前等待托管编辑器保存（[@nwparker](https://github.com/nwparker)，[#26677](https://github.com/stablyai/orca/pull/26677)）
- 保持远程文件删除不保存和关闭桌面草稿（[@nwparker](https://github.com/nwparker)，[#26679](https://github.com/stablyai/orca/pull/26679)）
- 保持托管文件 Copy 不选择桌面文件（[@nwparker](https://github.com/nwparker)，[#26682](https://github.com/stablyai/orca/pull/26682)）
- 保持远程终端路径链接在它们自己的宿主上（[@nwparker](https://github.com/nwparker)，[#26696](https://github.com/stablyai/orca/pull/26696)）
- 保持远程文件拖放不打开桌面浏览器文件（[@nwparker](https://github.com/nwparker)，[#26698](https://github.com/stablyai/orca/pull/26698)）
- 保持工作区文件拖放在终端的宿主上（[@nwparker](https://github.com/nwparker)，[#26830](https://github.com/stablyai/orca/pull/26830)）
- 保持无法放置的工作区所有者不进入桌面 Open in 启动（[@OrcaWin](https://github.com/OrcaWin)，[#26797](https://github.com/stablyai/orca/pull/26797)）
- 修复：在背压下一次只接受中继批量帧（[@nwparker](https://github.com/nwparker)，[#26333](https://github.com/stablyai/orca/pull/26333)）
- 修复（serve）：冷启动后恢复已保存的活动标签组（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26089](https://github.com/stablyai/orca/pull/26089)）

#### 手机 {#v1-4-224-phone}

> 桌面休眠时浏览器标签继续流式加载，聊天可视化和子 Agent 显示在手机上，媒体文件可播放，大图片和 Markdown 使用更少时间和内存。

- 修复（browser）：手机流式传输浏览器标签时保持桌面绘制（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26284](https://github.com/stablyai/orca/pull/26284)）
- 修复（window）：手机流式传输后停止被覆盖窗口的绘制，并保持流式前台标签活跃（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26657](https://github.com/stablyai/orca/pull/26657)）
- 新增（mobile）：在手机的 Native Chat 中内联显示聊天可视化（[@brennanb2025](https://github.com/brennanb2025)，[#26071](https://github.com/stablyai/orca/pull/26071)）
- 新增（mobile）：像桌面一样显示 Native Chat 的子 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#26125](https://github.com/stablyai/orca/pull/26125)）
- 允许在投递未确认后另一台手机发送（[@brennanb2025](https://github.com/brennanb2025)，[#26392](https://github.com/stablyai/orca/pull/26392)）
- 新增：在手机预览中播放视频和音乐文件（[@nwparker](https://github.com/nwparker)，[#26148](https://github.com/stablyai/orca/pull/26148)）
- 在手机上释放已关闭的 Markdown 文档（[@nwparker](https://github.com/nwparker)，[#26159](https://github.com/stablyai/orca/pull/26159)）
- 可用时对手机图片字节使用原生 Base64 编码（[@nwparker](https://github.com/nwparker)，[#26165](https://github.com/stablyai/orca/pull/26165)）
- 使用浏览器 crypto 加速手机图片指纹（[@nwparker](https://github.com/nwparker)，[#26170](https://github.com/stablyai/orca/pull/26170)）
- 避免在输入时重建已提交的手机文件（[@nwparker](https://github.com/nwparker)，[#26196](https://github.com/stablyai/orca/pull/26196)）
- 停止手机上重复的 GitLab 详情请求（[@nwparker](https://github.com/nwparker)，[#26197](https://github.com/stablyai/orca/pull/26197)）
- 重构（mobile）：移除 hybrid-shell 开关；由构建决定（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26825](https://github.com/stablyai/orca/pull/26825)）

#### 工作区、侧栏与标签 {#v1-4-224-workspaces-sidebar-tabs}

> 标签悬停卡片显示完整标题，Force Delete 可以记住你的选择，用量条默认 Compact，侧栏标题和工作区刷新表现更好。

- 显示带图标和标签间平滑滑动的整标签悬停卡片（[@nwparker](https://github.com/nwparker)，[#26811](https://github.com/stablyai/orca/pull/26811)）
- 修复（sidebar）：防止项目标题与固定宿主重叠（[@AmethystLiang](https://github.com/AmethystLiang)，[#26775](https://github.com/stablyai/orca/pull/26775)）
- 修复：保持工作区搜索过滤按钮在一行（[@genni613](https://github.com/genni613)，[#26580](https://github.com/stablyai/orca/pull/26580)）
- 新增：把已保存的强制删除偏好加入工作区删除菜单（[@nwparker](https://github.com/nwparker)，[#26425](https://github.com/stablyai/orca/pull/26425)）
- 新增：在工作区删除对话框中加入 Always force delete 下拉（[@nwparker](https://github.com/nwparker)，[#26476](https://github.com/stablyai/orca/pull/26476)）
- 移除本地分支删除成功通知（[@nwparker](https://github.com/nwparker)，[#26422](https://github.com/stablyai/orca/pull/26422)）
- 保持并发注册后只有一个本地项目（[@nwparker](https://github.com/nwparker)，[#26789](https://github.com/stablyai/orca/pull/26789)）
- 把状态栏用量默认设为 Compact 并一次性说明变化（[@AmethystLiang](https://github.com/AmethystLiang)，[#26726](https://github.com/stablyai/orca/pull/26726)）
- 修复 Compact 用量通知焦点和旧宿主兼容性（[@AmethystLiang](https://github.com/AmethystLiang)，[#26747](https://github.com/stablyai/orca/pull/26747)）
- 保持用量溢出芯片宽度在隐藏计数变化时稳定（[@AmethystLiang](https://github.com/AmethystLiang)，[#26873](https://github.com/stablyai/orca/pull/26873)）
- 修复（floating-workspace）：防止文件链接使主窗口空白（[@brennanb2025](https://github.com/brennanb2025)，[#26655](https://github.com/stablyai/orca/pull/26655)）
- 避免在编辑项目名称时刷新 GitHub 账户（[@nwparker](https://github.com/nwparker)，[#26228](https://github.com/stablyai/orca/pull/26228)）
- 避免删除项目组时重复会话复制（[@nwparker](https://github.com/nwparker)，[#26230](https://github.com/stablyai/orca/pull/26230)）
- 避免删除一个 worktree 后刷新每个仓库（[@nwparker](https://github.com/nwparker)，[#26253](https://github.com/stablyai/orca/pull/26253)）
- 性能：桌面移除后保留无关的授权根（[@nwparker](https://github.com/nwparker)，[#26294](https://github.com/stablyai/orca/pull/26294)）
- 性能：按工作区分组 Space 决策输入（[@nwparker](https://github.com/nwparker)，[#26297](https://github.com/stablyai/orca/pull/26297)）

#### 编辑器、文件与 Markdown {#v1-4-224-editor-files-markdown}

> GitHub 风格 callout、PDF 缩放、富模式下带 HTML 的大 Markdown、实时 Markdown 链接、精确落地的操作系统文件拖放，以及更快的笔记本和 Markdown。

- 新增（markdown）：渲染 GitHub 风格 callout（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26255](https://github.com/stablyai/orca/pull/26255)）
- 修复（editor）：把缩放手势和应用缩放路由到 PDF 查看器（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26652](https://github.com/stablyai/orca/pull/26652)）
- 允许富模式下带 HTML 的大 Markdown 文档（[@AmethystLiang](https://github.com/AmethystLiang)，[#26331](https://github.com/stablyai/orca/pull/26331)）
- 修复富 Markdown 中的交替浏览器点击（[@nwparker](https://github.com/nwparker)，[#26920](https://github.com/stablyai/orca/pull/26920)）
- 文档元数据变化时刷新富 Markdown 链接（[@nwparker](https://github.com/nwparker)，[#26595](https://github.com/stablyai/orca/pull/26595)）
- 工作区文件变化时刷新打开的 Markdown 链接（[@nwparker](https://github.com/nwparker)，[#26599](https://github.com/stablyai/orca/pull/26599)）
- 修复（file-drop）：资源管理器、项目侧栏、标签条和编辑器拥有操作系统文件拖放（STA-6940 PR5）（[@brennanb2025](https://github.com/brennanb2025)，[#26133](https://github.com/stablyai/orca/pull/26133)）
- 修复（file-drop）：把终端文件交付到光标下的窗格（STA-6940 PR4/6）（[@brennanb2025](https://github.com/brennanb2025)，[#26008](https://github.com/stablyai/orca/pull/26008)）
- [STA-6940] 在其元素处交付聊天、工作区编写器和反馈文件拖放（3/6）（[@brennanb2025](https://github.com/brennanb2025)，[#25781](https://github.com/stablyai/orca/pull/25781)）
- 移除旧的操作系统文件拖放路由（STA-6940 PR6/6）（[@brennanb2025](https://github.com/brennanb2025)，[#26385](https://github.com/stablyai/orca/pull/26385)）
- 性能：在一次文档更新中保存已完成的笔记本运行（[@nwparker](https://github.com/nwparker)，[#26254](https://github.com/stablyai/orca/pull/26254)）
- 避免重新扫描累积的笔记本流输出（[@nwparker](https://github.com/nwparker)，[#26123](https://github.com/stablyai/orca/pull/26123)）
- 跳过对纯文本笔记本输出的重复 ANSI 解析扫描（[@nwparker](https://github.com/nwparker)，[#26124](https://github.com/stablyai/orca/pull/26124)）
- 高亮链接时只扫描一次 Markdown 行内代码跨度（[@nwparker](https://github.com/nwparker)，[#26126](https://github.com/stablyai/orca/pull/26126)）
- 性能：在无图片的 Markdown 预览中跳过冗余图片扫描（[@nwparker](https://github.com/nwparker)，[#26240](https://github.com/stablyai/orca/pull/26240)）
- 性能：无开关打开时跳过 Markdown 围栏扫描（[@nwparker](https://github.com/nwparker)，[#26324](https://github.com/stablyai/orca/pull/26324)）
- 在资源管理器延迟它们之前过滤无关的工作区事件（[@nwparker](https://github.com/nwparker)，[#26265](https://github.com/stablyai/orca/pull/26265)）
- 避免反复提取源文本用于复制上下文提示（[@nwparker](https://github.com/nwparker)，[#26115](https://github.com/stablyai/orca/pull/26115)）

#### 浏览器、技能与反馈 {#v1-4-224-browser-skills-feedback}

> 浏览器评论框不再覆盖你标注的内容，cookie 导入、浏览器命令、反馈和技能下载会自行清理。

- 修复（browser）：保持注释编写器不覆盖它标注的元素（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26596](https://github.com/stablyai/orca/pull/26596)）
- 导入准备失败时释放 cookie 快照（[@nwparker](https://github.com/nwparker)，[#26218](https://github.com/stablyai/orca/pull/26218)）
- 释放已完成的浏览器辅助排空计时器（[@nwparker](https://github.com/nwparker)，[#26210](https://github.com/stablyai/orca/pull/26210)）
- 响应处理完成后释放反馈请求（[@nwparker](https://github.com/nwparker)，[#26274](https://github.com/stablyai/orca/pull/26274)）
- 取消被放弃的技能包下载响应（[@nwparker](https://github.com/nwparker)，[#26169](https://github.com/stablyai/orca/pull/26169)）
- 修复（skills）：在读取前保持观察到的归档中止错误（[@nwparker](https://github.com/nwparker)，[#26246](https://github.com/stablyai/orca/pull/26246)）
- 性能（skills）：批量删除期间避免重复放置扫描（[@nwparker](https://github.com/nwparker)，[#26223](https://github.com/stablyai/orca/pull/26223)）

#### 性能与可靠性 {#v1-4-224-performance-reliability}

> 终端重绘、检查点、Codex 输出和聊天恢复使用更少 CPU 和内存，配置文件保存在磁盘慢时警告而不是失败。

- 避免保留未使用的 OpenCode 数据库 worker（[@nwparker](https://github.com/nwparker)，[#26113](https://github.com/stablyai/orca/pull/26113)）
- 关闭被拒绝的可选 OpenCode 计费请求（[@nwparker](https://github.com/nwparker)，[#26236](https://github.com/stablyai/orca/pull/26236)）
- 移除终端重绘摄入中的重复行复制（[@nwparker](https://github.com/nwparker)，[#26118](https://github.com/stablyai/orca/pull/26118)）
- 减小：用有界原生 JSON 编码减少终端检查点停滞（[@nwparker](https://github.com/nwparker)，[#26177](https://github.com/stablyai/orca/pull/26177)）
- 避免在跟踪 Agent 日志时重新扫描未完成记录（[@nwparker](https://github.com/nwparker)，[#26132](https://github.com/stablyai/orca/pull/26132)）
- 性能：在无关应用更新中复用聊天标签所有权（[@nwparker](https://github.com/nwparker)，[#26150](https://github.com/stablyai/orca/pull/26150)）
- 避免恢复期间重复历史序列化（[@nwparker](https://github.com/nwparker)，[#26160](https://github.com/stablyai/orca/pull/26160)）
- 性能：避免在已保存检查点之间复制 Codex 输出（[@nwparker](https://github.com/nwparker)，[#26199](https://github.com/stablyai/orca/pull/26199)）
- 释放已完成的提供方写入负载（[@nwparker](https://github.com/nwparker)，[#26208](https://github.com/stablyai/orca/pull/26208)）
- 主循环停滞故障前排空排队的 SQLite 回复（[@nwparker](https://github.com/nwparker)，[#26444](https://github.com/stablyai/orca/pull/26444)）
- 配置文件保存慢时警告而不是失败（[@AmethystLiang](https://github.com/AmethystLiang)，[#26447](https://github.com/stablyai/orca/pull/26447)）
- 清理后中止失败的运行时下载（[@nwparker](https://github.com/nwparker)，[#26269](https://github.com/stablyai/orca/pull/26269)）

#### 语言 {#v1-4-224-languages}

> 新界面已翻译成西班牙语、法语、日语、韩语和中文。

- 杂项（i18n）：把 176 个新键翻译成 es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#26365](https://github.com/stablyai/orca/pull/26365)）

#### 中继服务 {#v1-4-224-relay-service}

> Orca 中继服务的服务器端容量、部署和监控工作。

- 新增（relay）：为每个单元格类提供更慢的同容量排空节奏（15 和 20 分钟）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26350](https://github.com/stablyai/orca/pull/26350)）
- 修复（relay-ops）：让预排空认证门容忍孤立的认证 5xx（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26353](https://github.com/stablyai/orca/pull/26353)）
- 修复（relay）：跳过 3 分钟内重新连接的宿主的空闲重新安置（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26355](https://github.com/stablyai/orca/pull/26355)）
- 修复（relay）：数据库池超时时快速拒绝宿主 hello；续期跳过队列（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26362](https://github.com/stablyai/orca/pull/26362)）
- 新增（relay）：在单元格断开突发和数据库池聚集时告警（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26363](https://github.com/stablyai/orca/pull/26363)）
- 修复（relay）：节流连接预留自动清理，使一次运行停止驱逐共享数据库缓存（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26370](https://github.com/stablyai/orca/pull/26370)）
- 修复（relay）：仅在超过 DB 停滞的 SQL 失败突破时锁定重新安置关闭（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26371](https://github.com/stablyai/orca/pull/26371)）
- 修复（relay）：让同容量滚动的滚动后验证超过一次 DB 停滞（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26372](https://github.com/stablyai/orca/pull/26372)）

#### 已回退 {#v1-4-224-reverted}

> 每账户 Claude 文件夹、远程主机的 Node 24 要求以及 Windows 挂起看门狗在发布前被撤回。

- 修复（claude）：激活账户配置文件并移除凭证重放（第 4 步，共 4 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24434](https://github.com/stablyai/orca/pull/24434)）
- 修复（claude）：去掉账户菜单中重复的登录行，并命名正确的 Settings 页（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26405](https://github.com/stablyai/orca/pull/26405)）
- 发布前回退 Claude 每账户文件夹（#24434, #26405）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26638](https://github.com/stablyai/orca/pull/26638)）
- 新增（runtime）：要求服务器和远程宿主使用 Node 24（[@nwparker](https://github.com/nwparker)，[#26171](https://github.com/stablyai/orca/pull/26171)）
- 回退（runtime）：临时恢复之前的宿主 Node 最低版本（[@nwparker](https://github.com/nwparker)，[#26823](https://github.com/stablyai/orca/pull/26823)）
- [CI] 启用现有的 Windows 挂起看门狗并保留重启证据（[@nwparker](https://github.com/nwparker)，[#26763](https://github.com/stablyai/orca/pull/26763)）
- 回滚 Windows 挂起看门狗激活（[@nwparker](https://github.com/nwparker)，[#26804](https://github.com/stablyai/orca/pull/26804)）

#### 测试、CI 与维护 {#v1-4-224-tests-ci-maintenance}

> 尚未开启的基础工作（文件夹工作区 Agent 启动、聊天回执、终端布局检查）、托管服务器代码清理，以及更快更稳定的测试运行。

- 新增（agent-launch）：在一次宿主操作中创建文件夹工作区并启动其 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#26083](https://github.com/stablyai/orca/pull/26083)）
- 新增（native-chat）：添加聊天拥有的命令回执存储（[@brennanb2025](https://github.com/brennanb2025)，[#26653](https://github.com/stablyai/orca/pull/26653)）
- 新增（runtime）：把服务器隔离在兼容性启动器后面（[@nwparker](https://github.com/nwparker)，[#26374](https://github.com/stablyai/orca/pull/26374)）
- 测试（terminal）：固定镜像重构必须保持的布局不变量（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26073](https://github.com/stablyai/orca/pull/26073)）
- terminal：窗口说明每个新终端的去向（无行为变化）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26078](https://github.com/stablyai/orca/pull/26078)）
- 测试（terminal）：对照结构规则检查运行时的工作区布局（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26673](https://github.com/stablyai/orca/pull/26673)）
- 测试（e2e）：带窗口、无头 serve 和 SSH 的布局预言场景（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26674](https://github.com/stablyai/orca/pull/26674)）
- 重构（tabs）：复用共享的标签顺序辅助器而不是三个副本（[@brennanb2025](https://github.com/brennanb2025)，[#26704](https://github.com/stablyai/orca/pull/26704)）
- 重构（ssh-relay-runtime）：清理 Phase 3-3.8 代码（[@OrcaWin](https://github.com/OrcaWin)，[#26889](https://github.com/stablyai/orca/pull/26889)）
- 重构（ssh-connect-managed）：清理 Phase 3-3.8 代码（[@OrcaWin](https://github.com/OrcaWin)，[#26890](https://github.com/stablyai/orca/pull/26890)）
- 重构（ssh-orcad-lifecycle）：清理 Phase 3-3.8 代码（[@OrcaWin](https://github.com/OrcaWin)，[#26891](https://github.com/stablyai/orca/pull/26891)）
- 重构（orcad-daemon-startup-cli）：清理 Phase 3-3.8 代码（[@OrcaWin](https://github.com/OrcaWin)，[#26892](https://github.com/stablyai/orca/pull/26892)）
- 文档：移除过时的内部参考文档（[@nwparker](https://github.com/nwparker)，[#26328](https://github.com/stablyai/orca/pull/26328)）
- 修复（lint）：把 macOS 输入源探测移出 app.ts（[@brennanb2025](https://github.com/brennanb2025)，[#26643](https://github.com/stablyai/orca/pull/26643)）
- 修复（lint）：把 knownAgentIds 移出会话宿主（[@brennanb2025](https://github.com/brennanb2025)，[#26648](https://github.com/stablyai/orca/pull/26648)）
- 测试（native-chat）：批量日志提交后修复主类型检查（[@brennanb2025](https://github.com/brennanb2025)，[#26781](https://github.com/stablyai/orca/pull/26781)）
- 修复日志回执测试类型检查（[@AmethystLiang](https://github.com/AmethystLiang)，[#26788](https://github.com/stablyai/orca/pull/26788)）
- 只运行预期的性能契约套件（[@nwparker](https://github.com/nwparker)，[#26121](https://github.com/stablyai/orca/pull/26121)）
- [CI] 通过复用其狭窄模块加速编写器决策测试（[@nwparker](https://github.com/nwparker)，[#26179](https://github.com/stablyai/orca/pull/26179)）
- [CI] 减少 UI 状态测试中的重复持久化导入（[@nwparker](https://github.com/nwparker)，[#26185](https://github.com/stablyai/orca/pull/26185)）
- [CI] 使 SSH 权限探测夹具独立于真实 PID 复用（[@nwparker](https://github.com/nwparker)，[#26190](https://github.com/stablyai/orca/pull/26190)）
- [CI] 测试：使远程上传用例独立于时钟和初始写入（[@nwparker](https://github.com/nwparker)，[#26202](https://github.com/stablyai/orca/pull/26202)）
- [CI] 测试：避免为渲染器夹具构建器加载完整 Store（[@nwparker](https://github.com/nwparker)，[#26217](https://github.com/stablyai/orca/pull/26217)）
- [CI] 测试：推进重试时钟而不是实时等待（[@nwparker](https://github.com/nwparker)，[#26220](https://github.com/stablyai/orca/pull/26220)）
- [CI] 测试：在 Node 上保持真实 SSH 命令契约（[@nwparker](https://github.com/nwparker)，[#26226](https://github.com/stablyai/orca/pull/26226)）
- [CI] 测试：加载 Activity 夹具构建器而不导入页面（[@nwparker](https://github.com/nwparker)，[#26229](https://github.com/stablyai/orca/pull/26229)）
- [CI] 在五个持久化套件中复用首次 SQLite 夹具构建（[@nwparker](https://github.com/nwparker)，[#26231](https://github.com/stablyai/orca/pull/26231)）
- [CI] 在八个测试套件中直接导入 Activity 函数（[@nwparker](https://github.com/nwparker)，[#26237](https://github.com/stablyai/orca/pull/26237)）
- [CI] 测试（persistence）：在另外六个套件中复用首次构造器（[@nwparker](https://github.com/nwparker)，[#26250](https://github.com/stablyai/orca/pull/26250)）
- 性能（renderer）：通过公共包入口加载 Radix 原语（[@nwparker](https://github.com/nwparker)，[#26256](https://github.com/stablyai/orca/pull/26256)）
- [CI] 测试（runtime）：推进注入的拆卸策略时钟（[@nwparker](https://github.com/nwparker)，[#26267](https://github.com/stablyai/orca/pull/26267)）
- [CI] 测试（startup）：推进模拟的显示就绪轮询（[@nwparker](https://github.com/nwparker)，[#26283](https://github.com/stablyai/orca/pull/26283)）
- [CI] ci：在十个分片上运行完整的 pull request 单元测试（[@nwparker](https://github.com/nwparker)，[#26295](https://github.com/stablyai/orca/pull/26295)）
- [CI] 在 Node 中保持原生监视器契约并重置运行时测试缓存（[@nwparker](https://github.com/nwparker)，[#26315](https://github.com/stablyai/orca/pull/26315)）
- [CI] 用受控策略时钟加速终端探测测试（[@nwparker](https://github.com/nwparker)，[#26327](https://github.com/stablyai/orca/pull/26327)）
- CI（e2e）：在使用镜像列表的运行器镜像上把 apt 移出 Azure 镜像（[@OrcaWin](https://github.com/OrcaWin)，[#26335](https://github.com/stablyai/orca/pull/26335)）
- [CI] 保持结构化会话兼容性清单在文件限制内（[@nwparker](https://github.com/nwparker)，[#26342](https://github.com/stablyai/orca/pull/26342)）
- [CI] 在 GraphQL 测试夹具中重置规范 PR 堆栈缓存（[@nwparker](https://github.com/nwparker)，[#26346](https://github.com/stablyai/orca/pull/26346)）
- [CI] 测试：从 PTY 清理中移除重复的空闲轮询（[@nwparker](https://github.com/nwparker)，[#26360](https://github.com/stablyai/orca/pull/26360)）
- 测试：把 hook 夹具连接与假计时器隔离（[@brennanb2025](https://github.com/brennanb2025)，[#26369](https://github.com/stablyai/orca/pull/26369)）
- [CI] 测试：从压缩契约中移除空闲轮询（[@nwparker](https://github.com/nwparker)，[#26373](https://github.com/stablyai/orca/pull/26373)）
- [CI] 测试：从它们的公共模块加载 GitHub 操作（[@nwparker](https://github.com/nwparker)，[#26384](https://github.com/stablyai/orca/pull/26384)）
- [CI] 测试：让中继校正夹具存活超过最小连接年龄（[@nwparker](https://github.com/nwparker)，[#26389](https://github.com/stablyai/orca/pull/26389)）
- [CI] 测试：加速终端比较和重试策略检查（[@nwparker](https://github.com/nwparker)，[#26396](https://github.com/stablyai/orca/pull/26396)）
- [CI] ci：阻止缓存测试编辑启动五个预热运行器（[@nwparker](https://github.com/nwparker)，[#26399](https://github.com/stablyai/orca/pull/26399)）
- [CI] ci：恢复五个单元运行器并修剪仅源码测试（[@nwparker](https://github.com/nwparker)，[#26437](https://github.com/stablyai/orca/pull/26437)）
- 测试（native-chat）：使原地转录替换测试确定化（[@OrcaWin](https://github.com/OrcaWin)，[#26532](https://github.com/stablyai/orca/pull/26532)）
- [CI] 测试：移除重复用例和源文本检查（[@nwparker](https://github.com/nwparker)，[#26546](https://github.com/stablyai/orca/pull/26546)）
- 测试（e2e）：重试输入法从未交付的韩文数字尝试（[@OrcaWin](https://github.com/OrcaWin)，[#26566](https://github.com/stablyai/orca/pull/26566)）
- [CI] 测试：减少会话导入和模拟恢复等待（[@nwparker](https://github.com/nwparker)，[#26567](https://github.com/stablyai/orca/pull/26567)）
- [CI] ci：为共享单元夹具避免包和浏览器作业（[@nwparker](https://github.com/nwparker)，[#26575](https://github.com/stablyai/orca/pull/26575)）
- [CI] 减少重复测试工作并修复 Windows 清理和 IME 确认（[@nwparker](https://github.com/nwparker)，[#26608](https://github.com/stablyai/orca/pull/26608)）
- [CI] 回退测试优化引入的库补丁（[@nwparker](https://github.com/nwparker)，[#26727](https://github.com/stablyai/orca/pull/26727)）
- [CI] 减少重复测试工作并跳过无关服务器矩阵（[@nwparker](https://github.com/nwparker)，[#26711](https://github.com/stablyai/orca/pull/26711)）
- [CI] 减少重复测试工作并使用固定 Bun 进行本地化提取（[@nwparker](https://github.com/nwparker)，[#26806](https://github.com/stablyai/orca/pull/26806)）
- 测试（e2e）：在目录重试重连测试中保持两个宿主部分（[@OrcaWin](https://github.com/OrcaWin)，[#26838](https://github.com/stablyai/orca/pull/26838)）
- [CI] 整合相关测试并用现有虚拟时钟推进转录等待（[@nwparker](https://github.com/nwparker)，[#26874](https://github.com/stablyai/orca/pull/26874)）
- [CI] 在标准 Node worker 线程中运行移动 Vitest 测试（[@nwparker](https://github.com/nwparker)，[#26899](https://github.com/stablyai/orca/pull/26899)）

### 新贡献者 {#v1-4-224-contributors}

- [@genni613](https://github.com/genni613) 首次贡献于 [#26580](https://github.com/stablyai/orca/pull/26580)

---

**完整变更对照：** [v1.4.223...v1.4.224](https://github.com/stablyai/orca/compare/v1.4.223...v1.4.224)

## v1.4.223 实验性 Native Chat 可回退对话，SSH 重连后保留标签 {#v1-4-223}

2026年10月8日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.223)

感谢使用 Orca，也感谢一直以来的支持。

Orca Server 2.0 即将推出，会让远程工作更可靠。当前 Remote Server 仍是实验功能，可能有 bug。

### 简要说明 {#v1-4-223-short}

- **实验性 Native Chat：** 在设置 → Chat UI 打开「Use updated structured native chat」后，Grok 在这台计算机和已配对的 Orca 服务器上会以结构化聊天打开；SSH 和 WSL 仍用终端聊天。你可以把对话回退到更早的消息、搜索模型列表、输入 `@` 挑选工作区文件，并在新的设置 → Chat 页调整文字大小、代码大小、宽度和对比度，或匹配终端。聊天按第一条消息命名，停下来请求批准时会提醒你，未发送的草稿在重新加载或退出后仍在，并使用设置 → Agents 里保存的 Command 和 Arguments。使用 API key 的用户现在可以打开 Claude 聊天，Windows 聊天也不再拒绝启动。
- **SSH 工作区：** 打开的文件、正在运行的 Agent 标签，以及暂停的 Claude 或 Codex 恢复提议，在 SSH 重连和重启后仍在。很久以前关掉的标签不再以空壳回来。点击一个最后那个标签已被关掉的 SSH worktree，会再次打开终端。
- **远程服务器与手机：** 宿主应用重新启动后，已配对终端再次接受输入。网络中断后远程浏览器标签会回来。`orca serve` 重启后，手机仍保留每一个终端。从手机启动 Agent 会立刻显示它的标签，也不再挪动桌面窗口。在远程宿主上创建工作区，不再把其他已连接的桌面拉过去。
- **Agent 与终端：** macOS 和 Linux 上很长或多行的 Agent 启动命令会完整到达 Agent，而不是被截断或逐行执行。启动命令现在使用真正的 Enter。退出前刚关掉的窗格不再回来，拖进自己标签的窗格不再出现在两个标签里。用 Escape 取消时 Claude 的转圈会清掉；Escape 只关掉搜索时，Codex 仍保持正在工作的状态。Orca 不再在每次启动 Codex 时重写 `~/.codex` 的 hook。它为 Claude、Codex 和 OpenCode 启动的辅助进程会在 Orca 退出或崩溃时停掉。
- **账户与 Agent：** 切换 Claude 账户会保留 MCP 服务器登录。Pi 和 OMP 把后台辅助项显示为行。Rovo Dev 通过 `acli` 检测。模型列表里有 Grok 4.7。
- **侧栏与工作区：** Orca 会记住左侧栏是否打开。Agent 活动视图有过滤器、右键菜单和多选。包含嵌套 worktree 的工作区可以连它们一起在后台删除。显示远程工作区不再展开本地分区。访问该工作区时 Dock 角标会清掉。
- **文件与搜索：** 音频和视频文件可以在 Orca 里播放。Quarto 和 R Markdown 文件会高亮。你可以在 Finder 或文件资源管理器里显示源码管理中已改动的文件，或终端里的文件路径。Quick Open 能匹配多段查询，并在请求的位置打开文件。已放弃的搜索会停掉。
- **任务与审查：** GitHub Projects 的 Board 视图显示为可以拖动卡片的看板。任务描述里的私有 Linear 图片能加载。SSH 工作区里的 GitLab 合并请求和 issue 操作会到达正确的服务器。
- **其他：** 一个 Agent 紧接在另一个之后完成时，完成音现在也会播放。截图标注有了橡皮擦。
### 已知问题 {#v1-4-223-known-issues}

**来自 v1.4.217 或更早版本的 Native Chat：** 如果在 v1.4.217 或更早版本用过实验性 Native Chat，并直接更新到 v1.4.223，更早的 Native Chat 不会出现。它们的文件仍在磁盘上（#26038）。

**更新后的终端：** 这一版为新终端启动新的终端后台服务。已经打开的终端继续跑在前一个服务上，因此「完整的长启动命令」这类改动只作用于更新后打开的终端。这也意味着 v1.4.222 对 OpenCode、Pi 和 Qoder 检测的改进，在新终端里无需再重启任何东西即可生效。

**从 shell 历史重新启动：** 当 Agent 的启动命令很长或跨越多行时，shell 历史里保存的是一条短的一次性命令，因此按上方向键再按 Enter 不会再次启动该 Agent（#23962）。

**从手机创建的工作区：** 在手机上从 issue、pull request 或 Linear 条目创建带 Agent 的工作区，仍会把桌面移到该工作区（#26025）。

**降级：** Orca 现在拒绝从版本选择器安装早于 v1.4.214 的版本。要回到那些版本，先关掉 Orca，运行 `orca profile state rollback --latest-json`，再手动安装旧版本（#23262）。

**Windows on ARM：** ARM64 包装的是 x64 的 `orca.exe` 命令行工具。Windows 11 on ARM 会用模拟运行它。Windows 10 on ARM 跑不了，所以那里的 `orca` 命令不可用（#24094）。

**OpenCode 2：** 如果从 v1.4.219 或更早版本更新，已经在跑的 OpenCode 2 窗格可能要在里面重启 OpenCode 之后才有状态。这次更新之后如果降级 Orca，会留下重复的 OpenCode 状态插件。`opencode run` 退出后，窗格可能一直显示「Done」；修复还在 #24472 中等待。

**Claude 文件夹信任：** 文件夹预信任默认开启（设置 → Agents → 「Trust the folder when Orca starts an agent」）。在 Alpine WSL 上，Orca 无法复制它需要的文件权限，因此 Claude 会显示自己的信任提示（#23744）。

### 产品体验 {#v1-4-223-product}

#### 实验性 Native Chat {#v1-4-223-native-chat-experimental-}

> Grok 可以作为结构化聊天运行。你可以回退对话、搜索模型、用 @ 提及文件并调整聊天外观。聊天会有名称和批准提醒，草稿和 Stop 会留住你的文字。Codex、使用 API key 的 Claude 用户、Windows 和自定义 Agent 命令的聊天启动也更可靠。

- 修复（native-chat）：推理行有真正的展开/完成状态，Claude 的思考内容可读（[@brennanb2025](https://github.com/brennanb2025)，[#19221](https://github.com/stablyai/orca/pull/19221)）
- 可从结构化聊天消息确认后回退一段对话（[@brennanb2025](https://github.com/brennanb2025)，[#19338](https://github.com/stablyai/orca/pull/19338)）
- 新增（native-chat）：Grok 经 Agent Client Protocol 作为结构化聊天运行（[@brennanb2025](https://github.com/brennanb2025)，[#25225](https://github.com/stablyai/orca/pull/25225)）
- 新增（native-chat）：恢复失败后仍记录新会话（[@brennanb2025](https://github.com/brennanb2025)，[#25747](https://github.com/stablyai/orca/pull/25747)）
- 新增（native-chat）：可搜索的模型选择器（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26011](https://github.com/stablyai/orca/pull/26011)）
- 新增（native-chat）：输入 @ 时建议文件，并给这些触发器命名（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26017](https://github.com/stablyai/orca/pull/26017)）
- 增加聊天外观设置：文字大小、代码大小、宽度（[@brennanb2025](https://github.com/brennanb2025)，[#25657](https://github.com/stablyai/orca/pull/25657)）
- 增加聊天对比度，以及「Match terminal interface」（[@brennanb2025](https://github.com/brennanb2025)，[#25659](https://github.com/stablyai/orca/pull/25659)）
- 为结构化 Native Chat 增加 Chat 设置页（[@brennanb2025](https://github.com/brennanb2025)，[#25685](https://github.com/stablyai/orca/pull/25685)）
- 放柔 Native Chat 的颜色和代码表面（[@brennanb2025](https://github.com/brennanb2025)，[#25651](https://github.com/stablyai/orca/pull/25651)）
- 把 Native Chat 的工具调用显示成普通句子（[@brennanb2025](https://github.com/brennanb2025)，[#25654](https://github.com/stablyai/orca/pull/25654)）
- 修复（native-chat）：代码块可以长到完整高度（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26021](https://github.com/stablyai/orca/pull/26021)）
- 修复（native-chat）：消息轨从第一条用户消息开始显示（[@brennanb2025](https://github.com/brennanb2025)，[#25707](https://github.com/stablyai/orca/pull/25707)）
- 新增（native-chat）：实心、渐隐的 Jump to latest（[@brennanb2025](https://github.com/brennanb2025)，[#25759](https://github.com/stablyai/orca/pull/25759)）
- Native Claude 和 Codex 聊天按第一条消息命名（[@brennanb2025](https://github.com/brennanb2025)，[#25724](https://github.com/stablyai/orca/pull/25724)）
- 标签、侧栏和 AI Vault（列表与搜索）共用同一套 Native Chat 名称来源（[@brennanb2025](https://github.com/brennanb2025)，[#25986](https://github.com/stablyai/orca/pull/25986)）
- 修复（native-chat）：结构化聊天在一轮中途请求批准或输入时发出提醒（[@brennanb2025](https://github.com/brennanb2025)，[#25766](https://github.com/stablyai/orca/pull/25766)）
- 修复（native-chat）：未发送的草稿在重新加载或退出后仍在（[@brennanb2025](https://github.com/brennanb2025)，[#24905](https://github.com/stablyai/orca/pull/24905)）
- 新增（native-chat）：从你按下 Stop 起，聊天显示「Stopping…」，直到这一轮真正结束（[@brennanb2025](https://github.com/brennanb2025)，[#24369](https://github.com/stablyai/orca/pull/24369)）
- 新增（native-chat）：被 Stop 收回的消息仍留在屏幕上，后面只跟一行停止记录（[@brennanb2025](https://github.com/brennanb2025)，[#25051](https://github.com/stablyai/orca/pull/25051)）
- 修复（native-chat）：Stop 的说明留在它等待并停掉的那一轮上（[@brennanb2025](https://github.com/brennanb2025)，[#25056](https://github.com/stablyai/orca/pull/25056)）
- 新增（native-chat）：公布每条提交发到了哪里，以及被停止的那条最终回答进了哪一轮（[@brennanb2025](https://github.com/brennanb2025)，[#25073](https://github.com/stablyai/orca/pull/25073)）
- 修复（native-chat）：排队消息一直等到前面的一轮打开（Stop 事件方案的后续，修复 STA-9348）（[@brennanb2025](https://github.com/brennanb2025)，[#25217](https://github.com/stablyai/orca/pull/25217)）
- 修复（native-chat）：Codex 接受的 Stop 会结算那条从未打开轮次的消息（#25217 的后续）（[@brennanb2025](https://github.com/brennanb2025)，[#26105](https://github.com/stablyai/orca/pull/26105)）
- 修复（native-chat）：排队消息在任意一轮之后按顺序继续，重启后不会自己发出去（[@brennanb2025](https://github.com/brennanb2025)，[#24586](https://github.com/stablyai/orca/pull/24586)）
- 修复（native-chat）：退出或崩溃前已接受的消息保留为一张暂扣卡片（[@brennanb2025](https://github.com/brennanb2025)，[#24660](https://github.com/stablyai/orca/pull/24660)）
- 修复（native-chat）：Agent 退出会结束它的记录；未确认的停止改为并入，而不是暂扣（[@brennanb2025](https://github.com/brennanb2025)，[#24862](https://github.com/stablyai/orca/pull/24862)）
- 你停掉的工具调用显示为已中断，而不是失败（[@brennanb2025](https://github.com/brennanb2025)，[#25181](https://github.com/stablyai/orca/pull/25181)）
- 修复（native-chat）：长回复在重新加载后仍保留 Working 条和 Stop，状态来自宿主上的那一轮（[@brennanb2025](https://github.com/brennanb2025)，[#25751](https://github.com/stablyai/orca/pull/25751)）
- 修复（native-chat）：回答落地前，prompt 卡片占住聊天输入（终端支撑的聊天，桌面和手机）（[@brennanb2025](https://github.com/brennanb2025)，[#25761](https://github.com/stablyai/orca/pull/25761)）
- 修复（native-chat）：发送后把最新内容带进视野，并跟随回复（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24514](https://github.com/stablyai/orca/pull/24514)）
- 修复（native-chat）：回到聊天时丢掉它隐藏期间已经完成的后台任务（[@brennanb2025](https://github.com/brennanb2025)，[#24305](https://github.com/stablyai/orca/pull/24305)）
- 修复（native-chat）：流中断时不再闪一下正在重连（[@brennanb2025](https://github.com/brennanb2025)，[#24898](https://github.com/stablyai/orca/pull/24898)）
- 修复（native-chat）：启动失败的聊天在标签和工作区行上标出（[@brennanb2025](https://github.com/brennanb2025)，[#24904](https://github.com/stablyai/orca/pull/24904)）
- 修复（native-chat）：每种聊天结果只说一次，并去掉仅内部使用的表面（[@brennanb2025](https://github.com/brennanb2025)，[#24595](https://github.com/stablyai/orca/pull/24595)）
- 修复（native-chat）：改掉承诺会重试、会更新或即将变化的聊天文案（[@brennanb2025](https://github.com/brennanb2025)，[#25157](https://github.com/stablyai/orca/pull/25157)）
- 新增（native-chat）：消息框上方用一张通知卡片显示聊天自己的错误（[@brennanb2025](https://github.com/brennanb2025)，[#25835](https://github.com/stablyai/orca/pull/25835)）
- 修复（native-chat）：说明 Claude 重试进行到第几次，以及上次失败的原因（[@brennanb2025](https://github.com/brennanb2025)，[#25818](https://github.com/stablyai/orca/pull/25818)）
- 修复（native-chat）：已发送的图片在 Agent 工作时不再闪成「Pasted image」占位（[@brennanb2025](https://github.com/brennanb2025)，[#25664](https://github.com/stablyai/orca/pull/25664)）
- 新增（native-chat）：一次选择器选择可以附上多个文件（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23956](https://github.com/stablyai/orca/pull/23956)）
- 新增（native-chat）：可从右键菜单复制聊天图片（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24161](https://github.com/stablyai/orca/pull/24161)）
- 新增（native-chat）：在 OpenClaude 和 OMP 的聊天视图里回答 /context（[@brennanb2025](https://github.com/brennanb2025)，[#22294](https://github.com/stablyai/orca/pull/22294)）
- 新增（floating-workspace）：浮动面板走共用的工作区表面渲染（[@brennanb2025](https://github.com/brennanb2025)，[#22302](https://github.com/stablyai/orca/pull/22302)）
- 修复（native-chat）：启动 Codex 聊天时不再等待后台模型探测（[@brennanb2025](https://github.com/brennanb2025)，[#23831](https://github.com/stablyai/orca/pull/23831)）
- Codex 自己的模型列表失败后仍可创建 Codex 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#25754](https://github.com/stablyai/orca/pull/25754)）
- 修复（claude）：用已保存的选项启动 Claude 聊天，并立刻发送第一条消息（[@brennanb2025](https://github.com/brennanb2025)，[#25152](https://github.com/stablyai/orca/pull/25152)）
- 修复（claude）：使用 API key 的 Claude 用户不再被告知未登录（[@brennanb2025](https://github.com/brennanb2025)，[#25163](https://github.com/stablyai/orca/pull/25163)）
- 修复（native-chat）：启动 Windows 聊天时不再读取进程创建时间（[@brennanb2025](https://github.com/brennanb2025)，[#25718](https://github.com/stablyai/orca/pull/25718)）
- 修复（native-chat）：启动 Native Chat 时忽略终端启动命令（[@brennanb2025](https://github.com/brennanb2025)，[#25720](https://github.com/stablyai/orca/pull/25720)）
- 修复（native-chat）：遵守已保存的 Agent Command 和 Arguments（[@brennanb2025](https://github.com/brennanb2025)，[#25721](https://github.com/stablyai/orca/pull/25721)）
- 修复（native-chat）：无法运行的 Command 会被拒绝，而不是悄悄跑库存 CLI（[@brennanb2025](https://github.com/brennanb2025)，[#25667](https://github.com/stablyai/orca/pull/25667)）
- 修复 transcript 替换与聊天发布之间的竞态（[@nwparker](https://github.com/nwparker)，[#25965](https://github.com/stablyai/orca/pull/25965)）
- 修复（mobile-chat）：失败消息的文本加回草稿，过期的重发不再挡住这段文本（[@brennanb2025](https://github.com/brennanb2025)，[#25149](https://github.com/stablyai/orca/pull/25149)）
#### 编排与 Agent 启动 {#v1-4-223-orchestration-agent-launch}

> 从手机启动的 Agent 会立刻得到标签，并让桌面留在原地。已有聊天可以做编排 worker，已经结束的 worker 不再被反复恢复。

- 新增（agent-launch）：立刻在调用方要求的位置显示 Agent 标签（[@brennanb2025](https://github.com/brennanb2025)，[#25430](https://github.com/stablyai/orca/pull/25430)）
- 修复（agent-launch）：手机上的启动不再挪动桌面窗口（[@brennanb2025](https://github.com/brennanb2025)，[#26025](https://github.com/stablyai/orca/pull/26025)）
- 新增（agent-launch）：宿主分配调用方身份，并在标签存在时写下启动记录（统一方案 1/3）（[@brennanb2025](https://github.com/brennanb2025)，[#24934](https://github.com/stablyai/orca/pull/24934)）
- 新增（orchestration）：Native Chat 可以像终端 Agent 一样做分发 worker（[@brennanb2025](https://github.com/brennanb2025)，[#22972](https://github.com/stablyai/orca/pull/22972)）
- 新增（orchestration）：Native Chat 通过和你的消息同一条发送，拿到 CLI Agent 那种编排指针（[@brennanb2025](https://github.com/brennanb2025)，[#25078](https://github.com/stablyai/orca/pull/25078)）
- 新增（native-chat）：显示聊天消息来自哪个 Agent，并可打开它（[@brennanb2025](https://github.com/brennanb2025)，[#25888](https://github.com/stablyai/orca/pull/25888)）
- 修复（orchestration）：经过 /clear 的 Native Chat worker 由正在跑它的会话提供服务（[@brennanb2025](https://github.com/brennanb2025)，[#25875](https://github.com/stablyai/orca/pull/25875)）
- 修复（orchestration）：按聊天 worker 来写 worker 简报（[@brennanb2025](https://github.com/brennanb2025)，[#26036](https://github.com/stablyai/orca/pull/26036)）
- 不再反复恢复已经结束的 worker（[@nwparker](https://github.com/nwparker)，[#25679](https://github.com/stablyai/orca/pull/25679)）
#### Agent、账户与集成 {#v1-4-223-agents-accounts-integrations}

> 切换 Claude 账户会保留 MCP 登录。Codex hook 批准不再在每次启动时重写 ~/.codex。Escape 不再让 Claude 或 Codex 的状态出错。Orca 退出时辅助进程会停掉。Pi 和 OMP 会显示后台辅助项。Rovo Dev 能被检测到，Grok 4.7 也在模型列表里。

- 修复（claude-accounts）：切换账户时保留共用的 MCP OAuth 凭证（[@tomarai85](https://github.com/tomarai85)，[#21931](https://github.com/stablyai/orca/pull/21931)）
- 修复（codex）：只有内容有变化时才把 Orca 的 hook 写入 ~/.codex（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25743](https://github.com/stablyai/orca/pull/25743)）
- 修复（codex）：用 Codex 自己的哈希批准托管 Codex home 里的 Orca hook（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25742](https://github.com/stablyai/orca/pull/25742)）
- 修复（codex）：不再写出 Codex 无法加载的 config.toml，并同时批准两种符号链接写法（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25741](https://github.com/stablyai/orca/pull/25741)）
- 修复 Escape 取消后 Claude 转圈停不下来（[@nwparker](https://github.com/nwparker)，[#25846](https://github.com/stablyai/orca/pull/25846)）
- 修复（codex）：Escape 只关掉搜索或权限时，保留正在工作的状态（[@nwparker](https://github.com/nwparker)，[#25769](https://github.com/stablyai/orca/pull/25769)）
- 等 Codex 的实时编写器就绪后再粘贴关联 issue 草稿（[@nwparker](https://github.com/nwparker)，[#25779](https://github.com/stablyai/orca/pull/25779)）
- 修复 Claude 自动化过早完成，以及继承来的 CI 失败（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24878](https://github.com/stablyai/orca/pull/24878)）
- 新增（pi）：把 Pi 和 OMP 的后台子项显示为行（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23201](https://github.com/stablyai/orca/pull/23201)）
- 修复（omp）：子 Agent 结束后标签转圈不再粘住（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23662](https://github.com/stablyai/orca/pull/23662)）
- 修复（agent-status）：撤下已删除 worktree 的 hook 状态行（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23881](https://github.com/stablyai/orca/pull/23881)）
- 修复：Orca 退出或崩溃时停掉 Claude 和 Agent 辅助进程（STA-9254，1/2）（[@brennanb2025](https://github.com/brennanb2025)，[#25715](https://github.com/stablyai/orca/pull/25715)）
- 修复：Orca 退出或崩溃时停掉 Codex 和 OpenCode 辅助服务（STA-9254，2/2）（[@brennanb2025](https://github.com/brennanb2025)，[#25753](https://github.com/stablyai/orca/pull/25753)）
- 修复（rovo）：通过 acli 检测并启动 Rovo Dev（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25981](https://github.com/stablyai/orca/pull/25981)）
- 修复（grok）：把 Grok 4.7 加进后备模型目录（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25976](https://github.com/stablyai/orca/pull/25976)）
#### 终端 {#v1-4-223-terminal}

> 很长的 Agent 启动命令会完整到达，启动命令使用真正的 Enter。刚关掉或拖出的窗格不再回来，也不会出现两次。

- 在输入处暂存很长的 Agent 启动行，使它们完整到达（7 步中的第 2 步）（[@brennanb2025](https://github.com/brennanb2025)，[#23962](https://github.com/stablyai/orca/pull/23962)）
- 修复（terminal）：在所有平台上用 Enter 提交启动命令（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23672](https://github.com/stablyai/orca/pull/23672)）
- 修复（terminal）：退出前刚关掉的窗格在重新启动时不再回来（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25711](https://github.com/stablyai/orca/pull/25711)）
- 重构（terminal）：在窗口打开标签之前，先在主进程里移走拖出的窗格（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25380](https://github.com/stablyai/orca/pull/25380)）
- 修复终端和聊天文件拖放的归属（STA-6940，PR 1/6）（[@brennanb2025](https://github.com/brennanb2025)，[#25749](https://github.com/stablyai/orca/pull/25749)）
#### SSH、远程服务器与手机 {#v1-4-223-ssh-remote-servers-phone}

> SSH 工作区在重连和重启后仍保留标签、打开的文件和恢复提议。宿主重启或网络中断后，已配对终端、远程浏览器标签和手机上的终端列表会恢复。

- 修复（session）：启动时，本地副本不再覆盖 SSH 拥有的工作区自己的副本（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26098](https://github.com/stablyai/orca/pull/26098)）
- 修复（ssh）：把重新挂上的 SSH 窗格绑进目标自己的会话分区（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26088](https://github.com/stablyai/orca/pull/26088)）
- 修复（ssh）：宿主持有本客户端放不下的标签时，在被清空的 worktree 里打开终端（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23213](https://github.com/stablyai/orca/pull/23213)）
- 修复（ai-vault）：worktree 已删除的会话仍可恢复（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24236](https://github.com/stablyai/orca/pull/24236)）
- 修复（remote-runtime）：宿主应用重新启动后，已配对终端再次接受输入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25736](https://github.com/stablyai/orca/pull/25736)）
- 修复（remote-browser）：配对宿主在中断后回来时，再次托管客户端浏览器页（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25827](https://github.com/stablyai/orca/pull/25827)）
- 修复（serve）：orca serve 重启后，手机上仍保留每一个终端（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26022](https://github.com/stablyai/orca/pull/26022)）
- 修复（runtime）：手机打开空闲终端时构建宿主终端模型（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25780](https://github.com/stablyai/orca/pull/25780)）
- 创建远程 worktree 时不再把已配对客户端导航过去（[@nwparker](https://github.com/nwparker)，[#25793](https://github.com/stablyai/orca/pull/25793)）
- 修复：恢复被删的 Active Server 默认值，并保留编辑器宿主（[@nwparker](https://github.com/nwparker)，[#25938](https://github.com/stablyai/orca/pull/25938)）
#### 工作区、侧栏与标签 {#v1-4-223-workspaces-sidebar-tabs}

> 侧栏会记住自己是否打开。活动视图有过滤器和多选。嵌套 worktree 可以删除。宿主分区独立折叠。标签 tooltip 和滚动更安静。

- 修复（sidebar）：重启后记住左侧栏是否打开（[@INatsukiI](https://github.com/INatsukiI)，[#22682](https://github.com/stablyai/orca/pull/22682)）
- 新增（activity）：过滤器、匹配的标题、行右键菜单，并留在活动视图里（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25376](https://github.com/stablyai/orca/pull/25376)）
- 新增（activity）：多选 Agent 行，并带批量右键菜单（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25486](https://github.com/stablyai/orca/pull/25486)）
- 增加需确认的嵌套 worktree 删除（[@nwparker](https://github.com/nwparker)，[#25668](https://github.com/stablyai/orca/pull/25668)）
- 在后台运行嵌套工作区删除（[@nwparker](https://github.com/nwparker)，[#25975](https://github.com/stablyai/orca/pull/25975)）
- 显示远程工作区时不再展开本地固定项（[@nwparker](https://github.com/nwparker)，[#25836](https://github.com/stablyai/orca/pull/25836)）
- 侧栏分区的折叠在各执行宿主之间保持独立（[@nwparker](https://github.com/nwparker)，[#25944](https://github.com/stablyai/orca/pull/25944)）
- 修复折叠宿主和父项下的发送选择器显示（[@nwparker](https://github.com/nwparker)，[#25950](https://github.com/stablyai/orca/pull/25950)）
- 修复（dock）：清掉过期的工作区未读计数（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24877](https://github.com/stablyai/orca/pull/24877)）
- 修复（worktrees）：在宿主创建时，git worktree add 之前先决定 setup（[@brennanb2025](https://github.com/brennanb2025)，[#26006](https://github.com/stablyai/orca/pull/26006)）
- 修复（worktrees）：宿主取不到远程基线时，从本地分支创建并说明这一点（[@brennanb2025](https://github.com/brennanb2025)，[#26009](https://github.com/stablyai/orca/pull/26009)）
- 修复（repos）：不再把从未运行的克隆报成成功（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23770](https://github.com/stablyai/orca/pull/23770)）
- 修复（tabs）：掠过标签条时不再弹出标签和关闭的 tooltip（[@AmethystLiang](https://github.com/AmethystLiang)，[#25808](https://github.com/stablyai/orca/pull/25808)）
- 性能（tab-bar）：滚动标签条不再重渲染每一个标签（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24240](https://github.com/stablyai/orca/pull/24240)）
#### 编辑器、文件与搜索 {#v1-4-223-editor-files-search}

> 音频和视频文件可以在 Orca 里播放。Quarto 和 R Markdown 会高亮。文件可以在文件管理器里显示。Quick Open 能更精确地找到并打开文件。

- 新增：用原生控件流式预览桌面音频和视频（[@nwparker](https://github.com/nwparker)，[#26120](https://github.com/stablyai/orca/pull/26120)）
- 新增（editor）：Quarto 和 R Markdown 文件按语法高亮，而不是纯文本（[@ykunisato](https://github.com/ykunisato)，[#17772](https://github.com/stablyai/orca/pull/17772)）
- 新增（files）：在文件管理器里显示源码管理中的文件和终端里的文件链接（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24502](https://github.com/stablyai/orca/pull/24502)）
- 改进 Quick Open 的匹配、文件位置和最近历史（[@nwparker](https://github.com/nwparker)，[#25371](https://github.com/stablyai/orca/pull/25371)）
- 取消已放弃的文件搜索，并防止过期结果（[@nwparker](https://github.com/nwparker)，[#25370](https://github.com/stablyai/orca/pull/25370)）
- 限制文件搜索的并发和内存（[@nwparker](https://github.com/nwparker)，[#25369](https://github.com/stablyai/orca/pull/25369)）
- 修复（markdown）：加深暗色表格网格线（[@nwparker](https://github.com/nwparker)，[#25653](https://github.com/stablyai/orca/pull/25653)）
#### 源码管理、任务与 issue {#v1-4-223-source-control-tasks-issues}

> GitHub Projects 的 Board 视图可以作为看板使用。审查卡片更少轮询 GitHub。私有 Linear 图片能加载。SSH 工作区里的 GitLab 写入会到达正确的服务器。

- 新增（github-projects）：把 Board 项目视图渲染成可拖放的看板（[@NaoyaTatetsu](https://github.com/NaoyaTatetsu)，[#19074](https://github.com/stablyai/orca/pull/19074)）
- 自动刷新可见的审查，并停止对已合并项的轮询（[@nwparker](https://github.com/nwparker)，[#25788](https://github.com/stablyai/orca/pull/25788)）
- 修复任务描述里的私有 Linear 图片（[@nwparker](https://github.com/nwparker)，[#25849](https://github.com/stablyai/orca/pull/25849)）
- 修复（jira）：容忍格式错误的嵌套 Jira 状态字段（[@brennanb2025](https://github.com/brennanb2025)，[#25656](https://github.com/stablyai/orca/pull/25656)）
- 修复（git）：前缀退回到对分支安全的作者名（[@nwparker](https://github.com/nwparker)，[#25984](https://github.com/stablyai/orca/pull/25984)）
- 修复（gitlab）：SSH 工作区的写入走 GITLAB_HOST（[@nwparker](https://github.com/nwparker)，[#25985](https://github.com/stablyai/orca/pull/25985)）
#### 浏览器、反馈与通知 {#v1-4-223-browser-feedback-notifications}

> 截图标注有了橡皮擦。Windows 上能找到 Comet。每一次完成音都会播放。过大的反馈截图会重新编码以适配，且不丢失细节。

- 新增（browser）：截图标注增加橡皮擦（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24801](https://github.com/stablyai/orca/pull/24801)）
- 修复（browser）：在 Windows 厂商目录里检测 Comet（[@nwparker](https://github.com/nwparker)，[#25983](https://github.com/stablyai/orca/pull/25983)）
- 修复（notifications）：可靠地重放完成音（[@DEOWL-kan](https://github.com/DEOWL-kan)，[#15940](https://github.com/stablyai/orca/pull/15940)）
- 修复（feedback）：压缩过大的截图且不丢失细节（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23664](https://github.com/stablyai/orca/pull/23664)）
#### 配置档、设置与语言 {#v1-4-223-profiles-settings-languages}

> 退出和更新时 profile 保存的工作更少，应用卡住后仍会继续保存。日文和中文文案得到修复和翻译。

- 用安全恢复和降级取代自动的 profile JSON 快照（[@OrcaWin](https://github.com/OrcaWin)，[#23262](https://github.com/stablyai/orca/pull/23262)）
- 主循环卡住之后，profile 保存仍继续（[@AmethystLiang](https://github.com/AmethystLiang)，[#25318](https://github.com/stablyai/orca/pull/25318)）
- 修复（i18n）：润色日文上手清单文案（[@tb-soshiro](https://github.com/tb-soshiro)，[#19035](https://github.com/stablyai/orca/pull/19035)）
- 修复（i18n）：修复乱码的日文名称建议，以及颠倒的 ja/zh 引号（[@pinelibg](https://github.com/pinelibg)，[#25255](https://github.com/stablyai/orca/pull/25255)）
- 杂项（i18n）：把 76 个新 key 译成 es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#25719](https://github.com/stablyai/orca/pull/25719)）
- 杂项（i18n）：中文 Agent 文案使用「智能体」（[@AmethystLiang](https://github.com/AmethystLiang)，[#25767](https://github.com/stablyai/orca/pull/25767)）
#### Relay 服务 {#v1-4-223-relay-service}

> Orca relay 服务的服务端容量、部署和监控改动。

- 新增（relay）：把排空节奏窗口作为已审查的同容量输入，并加上感知排空的 503 门（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25639](https://github.com/stablyai/orca/pull/25639)）
- 新增（relay）：报告通道服务时间、503 原因、各站点持有 p99，以及 director 与 cell 的锁等待拆分（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25645](https://github.com/stablyai/orca/pull/25645)）
- 修复（relay）：一次往返提交 cell 计数器；cell 启动不再依赖数据库（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25765](https://github.com/stablyai/orca/pull/25765)）
- 修复（relay）：在 cell 锁之后读取对账的计数器单位（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25638](https://github.com/stablyai/orca/pull/25638)）
- 新增（relay）：一条命令的 director 部署驱动（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25642](https://github.com/stablyai/orca/pull/25642)）
- 修复（relay）：部署驱动构建已检出的提交，提示单独成行，并汇总进度（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25755](https://github.com/stablyai/orca/pull/25755)）
- 新增（relay）：给亚洲 cell c34 一个提升波次，使它可以成为通用 cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25757](https://github.com/stablyai/orca/pull/25757)）
- 杂项（relay）：提升后把亚洲 cell c34 移到通用同容量列表（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25758](https://github.com/stablyai/orca/pull/25758)）
#### 测试、CI 与维护 {#v1-4-223-tests-ci-maintenance}

> 尚未打开的地基（Claude 账户 profile、终端布局改动）、Grok 结构化聊天背后的共用构件、更快更省的测试运行、让 main 能继续构建的修复，以及对共享 YAML 默认值能展开多远的限制。

- 新增（claude）：准备账户 profile 和共享历史（4 步中的第 1 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24300](https://github.com/stablyai/orca/pull/24300)）
- Claude 账户 profile：休眠中的路由和消费方（4 步中的第 2 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24351](https://github.com/stablyai/orca/pull/24351)）
- Claude 账户 profile：休眠中的 WSL guest 设置（4 步中的第 3 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24384](https://github.com/stablyai/orca/pull/24384)）
- 修复（claude）：在 Windows 上用 junction 和同盘硬链接共享账户历史（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26067](https://github.com/stablyai/orca/pull/26067)）
- 从 Codex 抽出提供方进程监管和流读取（[@brennanb2025](https://github.com/brennanb2025)，[#24989](https://github.com/stablyai/orca/pull/24989)）
- 增加独立的 Agent Client Protocol 客户端层（[@brennanb2025](https://github.com/brennanb2025)，[#24990](https://github.com/stablyai/orca/pull/24990)）
- 重构（native-chat）：提供方的 resume 句柄对共享代码保持不透明（[@brennanb2025](https://github.com/brennanb2025)，[#24991](https://github.com/stablyai/orca/pull/24991)）
- 重构（native-chat）：结构化 Agent 自己声明能力，而不是共享代码点名 Claude 和 Codex（[@brennanb2025](https://github.com/brennanb2025)，[#25076](https://github.com/stablyai/orca/pull/25076)）
- 新增（native-chat）：在协商出的能力之后，向已注册 Agent 开放结构化聊天的线路和存储记录（[@brennanb2025](https://github.com/brennanb2025)，[#25159](https://github.com/stablyai/orca/pull/25159)）
- 结构化提供方共用托管进程生命周期（[@brennanb2025](https://github.com/brennanb2025)，[#25204](https://github.com/stablyai/orca/pull/25204)）
- 把一个提供方事件的日志写入收成一次排队操作，执行时再决定（[@brennanb2025](https://github.com/brennanb2025)，[#25141](https://github.com/stablyai/orca/pull/25141)）
- 为结构化 Agent 聊天增加共用时间线组装器（尚未接通）（[@brennanb2025](https://github.com/brennanb2025)，[#25064](https://github.com/stablyai/orca/pull/25064)）
- 把 ACP 流量译成共用时间线事件（[@brennanb2025](https://github.com/brennanb2025)，[#25090](https://github.com/stablyai/orca/pull/25090)）
- 让 ACP 连接拥有自己的 Agent 进程（[@brennanb2025](https://github.com/brennanb2025)，[#25810](https://github.com/stablyai/orca/pull/25810)）
- 重构（native-chat）：去掉记录文件和按聊天日志的导入（[@brennanb2025](https://github.com/brennanb2025)，[#26038](https://github.com/stablyai/orca/pull/26038)）
- 新增（agent-launch）：桌面 AI 按钮通过 agent.launch 启动 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#25624](https://github.com/stablyai/orca/pull/25624)）
- 重构（composer）：删掉没有任何调用方能走到的完整创建路径（[@brennanb2025](https://github.com/brennanb2025)，[#26052](https://github.com/stablyai/orca/pull/26052)）
- [STA-6940] 为元素所有者准备文件拖放（6 个 PR 中的第 2 个）（[@brennanb2025](https://github.com/brennanb2025)，[#25748](https://github.com/stablyai/orca/pull/25748)）
- 重构（codex）：删掉 ~/.codex hook 重做后留下的无用代码（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25744](https://github.com/stablyai/orca/pull/25744)）
- 重构（terminal）：增加就地应用窗格布局几何（尚未使用）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25671](https://github.com/stablyai/orca/pull/25671)）
- 重构（terminal）：报告两条布局不变量被打破的情况，并增加未运行的加载修复（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25673](https://github.com/stablyai/orca/pull/25673)）
- 重构（terminal）：终端启动时携带窗格位置，仅报告（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25677](https://github.com/stablyai/orca/pull/25677)）
- 重构（terminal）：标出来自用户手势的布局更新（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25680](https://github.com/stablyai/orca/pull/25680)）
- 重构（terminal）：每次保存后投影主进程的终端布局（尚无读取方）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25682](https://github.com/stablyai/orca/pull/25682)）
- 测试（e2e）：对照 main 检查终端布局是否一致（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25681](https://github.com/stablyai/orca/pull/25681)）
- 限制 YAML 合并转换，并补上 SQLite 路由审查缺口（[@nwparker](https://github.com/nwparker)，[#25998](https://github.com/stablyai/orca/pull/25998)）
- 修复（windows）：生成的技能和快照保持 LF（[@nwparker](https://github.com/nwparker)，[#25972](https://github.com/stablyai/orca/pull/25972)）
- 测试：即使运行时尚未加载，也检查结构化聊天代码是否引入 Electron（[@brennanb2025](https://github.com/brennanb2025)，[#24988](https://github.com/stablyai/orca/pull/24988)）
- 测试（native-chat）：覆盖已配对运行时的启动兼容（[@brennanb2025](https://github.com/brennanb2025)，[#25072](https://github.com/stablyai/orca/pull/25072)）
- 减少 CI 里的本地化审计和 relay 设置工作（[@nwparker](https://github.com/nwparker)，[#25665](https://github.com/stablyai/orca/pull/25665)）
- 修复（ci）：嵌套 worktree 删除对话框之后，解开 main 的静态分析（[@brennanb2025](https://github.com/brennanb2025)，[#25683](https://github.com/stablyai/orca/pull/25683)）
- 修复：嵌套 worktree 删除对话框之后，恢复 main 的 lint 和本地化检查（[@brennanb2025](https://github.com/brennanb2025)，[#25684](https://github.com/stablyai/orca/pull/25684)）
- 修复（test）：停止说明测试使用当前的提供方句柄形状（解开 main 的类型检查）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25706](https://github.com/stablyai/orca/pull/25706)）
- 修复（test）：提交位置测试使用当前的提供方句柄形状（解开 main 的类型检查）（[@brennanb2025](https://github.com/brennanb2025)，[#25709](https://github.com/stablyai/orca/pull/25709)）
- 测试（ratchet）：既然 src/main/provider-process 已落地，就要求它存在（[@brennanb2025](https://github.com/brennanb2025)，[#25710](https://github.com/stablyai/orca/pull/25710)）
- 修复（test）：去掉破坏 main 类型检查的重复 codexProviderHandle 导入（[@brennanb2025](https://github.com/brennanb2025)，[#25713](https://github.com/stablyai/orca/pull/25713)）
- 测试：去掉两次 main 修复都加进来的重复 codexProviderHandle 导入（[@brennanb2025](https://github.com/brennanb2025)，[#25717](https://github.com/stablyai/orca/pull/25717)）
- 修复（test）：在提交位置测试里恢复 codexProviderHandle 导入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25722](https://github.com/stablyai/orca/pull/25722)）
- 修复（test）：恢复被 #25078 合并去掉的 codexProviderHandle 导入（[@brennanb2025](https://github.com/brennanb2025)，[#25728](https://github.com/stablyai/orca/pull/25728)）
- 测试（cross-version）：加载那些会导入 main 已删除包的发行版（[@brennanb2025](https://github.com/brennanb2025)，[#25731](https://github.com/stablyai/orca/pull/25731)）
- 测试（agent-launch）：在 #23672 之后仍不能搭上该行的 prompt 上保留携带控制（[@brennanb2025](https://github.com/brennanb2025)，[#25734](https://github.com/stablyai/orca/pull/25734)）
- CI runner 队列恢复期间暂停 Pullfrog（[@nwparker](https://github.com/nwparker)，[#25760](https://github.com/stablyai/orca/pull/25760)）
- 删掉低价值测试和重复的模糊比较，以减少 CI 工作（[@nwparker](https://github.com/nwparker)，[#25791](https://github.com/stablyai/orca/pull/25791)）
- 减少重复测试和不必要的 CI 等待（[@nwparker](https://github.com/nwparker)，[#25806](https://github.com/stablyai/orca/pull/25806)）
- 并行构建 SSH 宿主兼容槽（[@nwparker](https://github.com/nwparker)，[#25821](https://github.com/stablyai/orca/pull/25821)）
- 性能（ci）：所有打包宿主只编译一次发布用 JavaScript（[@nwparker](https://github.com/nwparker)，[#25828](https://github.com/stablyai/orca/pull/25828)）
- 未合并的 PR 关闭后停止昂贵检查（[@nwparker](https://github.com/nwparker)，[#25829](https://github.com/stablyai/orca/pull/25829)）
- 修复 main CI 在协议能力注册表上的行数限制失败（[@nwparker](https://github.com/nwparker)，[#25839](https://github.com/stablyai/orca/pull/25839)）
- 在 Node 运行时契约下用 Bun 跑 Vitest（[@nwparker](https://github.com/nwparker)，[#25840](https://github.com/stablyai/orca/pull/25840)）
- 测试（mobile）：把轮次披露测试拆到 800 行测试限制以下（[@brennanb2025](https://github.com/brennanb2025)，[#25933](https://github.com/stablyai/orca/pull/25933)）
- 修复（ci）：#25751 和 #24369 之后恢复 main 的类型检查和 lint（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25949](https://github.com/stablyai/orca/pull/25949)）
- 用跨运行时的时长调度加快单元测试（[@nwparker](https://github.com/nwparker)，[#25967](https://github.com/stablyai/orca/pull/25967)）
- 修复（test）：恢复 main 类型检查——在记录存储槽测试里传入 resolveLaunchArgs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25970](https://github.com/stablyai/orca/pull/25970)）
- 修复（test）：恢复 main 类型检查——在 Codex 停止发送顺序测试里传入 resolveLaunchArgs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25977](https://github.com/stablyai/orca/pull/25977)）
- 简化显示和测试夹具清理（[@nwparker](https://github.com/nwparker)，[#25978](https://github.com/stablyai/orca/pull/25978)）
- 修复（test）：去掉破坏 main lint 的重复 resolveLaunchArgs（[@brennanb2025](https://github.com/brennanb2025)，[#25997](https://github.com/stablyai/orca/pull/25997)）
- 在 Bun 上跑本地化目录检查（时间少 26%）（[@nwparker](https://github.com/nwparker)，[#25999](https://github.com/stablyai/orca/pull/25999)）
- 加快昂贵的测试夹具（时间少 23–82%）（[@nwparker](https://github.com/nwparker)，[#26000](https://github.com/stablyai/orca/pull/26000)）
- 测试（codex）：关掉状态 hook 始终压过仍在进行的打开（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26001](https://github.com/stablyai/orca/pull/26001)）
- 测试（e2e）：源码管理显示的黄金文件不跟到更早的发行标签（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26005](https://github.com/stablyai/orca/pull/26005)）
- 修复（ci）：在 Node 运行时项目里跑三个新的 SQLite 支撑测试（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26010](https://github.com/stablyai/orca/pull/26010)）
- 在其他套件之后跑 SQLite 响应性测试（[@nwparker](https://github.com/nwparker)，[#26015](https://github.com/stablyai/orca/pull/26015)）
- 测试（vitest）：在 SQLite 运行时项目里跑 agent-launch-instant-tab（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26028](https://github.com/stablyai/orca/pull/26028)）
- 把原生契约留在 Node 上，并等待 Git 升级完成（[@nwparker](https://github.com/nwparker)，[#26034](https://github.com/stablyai/orca/pull/26034)）
- 测试：限制运行时 Electron 审计使用的内存（[@nwparker](https://github.com/nwparker)，[#26049](https://github.com/stablyai/orca/pull/26049)）
- 修复（lint）：把 structured-agent-session-host 拉回最大行数以内（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26050](https://github.com/stablyai/orca/pull/26050)）
- 修复不安全的测试夹具和 Bun 版本钉扎（[@nwparker](https://github.com/nwparker)，[#26051](https://github.com/stablyai/orca/pull/26051)）
- 修复（native-chat）：把附件失败文案拆出去，使 Lint 能在 main 上通过（[@brennanb2025](https://github.com/brennanb2025)，[#26079](https://github.com/stablyai/orca/pull/26079)）
- 修复（ci）：真正把 Electron 探测排除出无头 node-server 通道（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26093](https://github.com/stablyai/orca/pull/26093)）
- 修复（acp）：去掉旧日志路径之后，修复 main 的类型检查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26094](https://github.com/stablyai/orca/pull/26094)）
- 性能（tests）：测试运行之间复用 Vitest transform（[@nwparker](https://github.com/nwparker)，[#26095](https://github.com/stablyai/orca/pull/26095)）
- 修复（native-chat）：@ 提及属性改名之后，修复 main 的 web 类型检查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26097](https://github.com/stablyai/orca/pull/26097)）
- 性能（tests）：自动化夹具里避免重复导入持久化（[@nwparker](https://github.com/nwparker)，[#26111](https://github.com/stablyai/orca/pull/26111)）
- 性能（tests）：用例之间释放过期的窗格迁移监听器（[@nwparker](https://github.com/nwparker)，[#26131](https://github.com/stablyai/orca/pull/26131)）
- 推进模拟测试时钟，而不是按真实时间等待（[@nwparker](https://github.com/nwparker)，[#26135](https://github.com/stablyai/orca/pull/26135)）
- 减少草稿存储测试里重复的 UI 导入（[@nwparker](https://github.com/nwparker)，[#26145](https://github.com/stablyai/orca/pull/26145)）
- 测试：用暂存单元格复用把回放预言时间减少 20.93%（[@nwparker](https://github.com/nwparker)，[#26162](https://github.com/stablyai/orca/pull/26162)）
- 测试：把终端拓扑套件时间减少 40.98%（[@nwparker](https://github.com/nwparker)，[#26166](https://github.com/stablyai/orca/pull/26166)）
### 新贡献者 {#v1-4-223-contributors}

- [@DEOWL-kan](https://github.com/DEOWL-kan) 首次贡献于 [#15940](https://github.com/stablyai/orca/pull/15940)
- [@ykunisato](https://github.com/ykunisato) 首次贡献于 [#17772](https://github.com/stablyai/orca/pull/17772)
- [@tomarai85](https://github.com/tomarai85) 首次贡献于 [#21931](https://github.com/stablyai/orca/pull/21931)
- [@INatsukiI](https://github.com/INatsukiI) 首次贡献于 [#22682](https://github.com/stablyai/orca/pull/22682)
- [@pinelibg](https://github.com/pinelibg) 首次贡献于 [#25255](https://github.com/stablyai/orca/pull/25255)
**完整变更对照：** [v1.4.222...v1.4.223](https://github.com/stablyai/orca/compare/v1.4.222...v1.4.223)

## v1.4.222 OpenCode worker 等可提交后再交任务，大 CSV 可表格编辑 {#v1-4-222}

2026年10月7日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.222)

感谢使用 Orca，也感谢一直以来的支持。

Orca Server 2.0 即将推出，会让远程工作更可靠。当前 Remote Server 仍是实验功能，可能有 bug。

### 简要说明 {#v1-4-222-short}

- **OpenCode worker：** 用 `orca orchestration worker-start --agent opencode` 启动的 worker，在忙碌机器上不再把任务留在 OpenCode 输入框里不发送；Orca 会等到 OpenCode 真正能提交再交给它。worker 可以使用请求的模型，而不改你其他启动的默认模型。OpenCode 2.0.12 会自己发出第一条 prompt，Orca 的 OpenCode 插件会装到该终端的 OpenCode 实际读取设置的位置。
- **侧栏与工作区：** 你在侧栏里显示的远程计算机，不会在 Orca 保存设置时再次消失。拖动子项已折叠的工作区现在会真正移动它；拖动工作区不再能把侧栏拖崩。删除对话框在检查加载时不再跳动。Create worktree 会马上关闭，设置脚本在后台检查。
- **CSV 文件：** 大 CSV 不必一次载入整个文件即可打开。可以调整列宽、打开链接、编辑单元格、增删行列、复制粘贴区域、排序或筛选，列宽会被记住。
- **编辑器：** 项目以外文件的标签，重启后不再变回 “Access denied”。不同计算机上路径相同的文件，各自保留文本和 Undo 历史。图片粘贴和大段 Markdown 粘贴会落在你开始粘贴的位置，notebook 单元格会跟上磁盘上的改动。
- **日文、中文或韩文输入：** 按 Enter 确认文字时，不会再同时提交该字段、创建文件或发送评论。Orca 各处都是如此。
- **Native Chat（实验性）：** 打开聊天绝不会删掉它的历史，即使这份历史是较新的 Orca 保存的。消息在宿主确认前显示 “Sending…”，投递失败则显示 “Not sent” 并给出原因。Stop 只标记它真正停掉的那一轮。启动失败不再挡住新聊天。模型列表来自真正跑聊天的那台机器。被崩溃或退出截断的回复，会显示为已完成，并附一条说明。
- **Agent 与账户：** 用量菜单会在用量上限旁边显示 Claude 用量额度、OpenCode Zen 余额和 Codex 额度。切换 Codex 账户后重启，会继续同一段对话，而不是留下空白终端。已保存的模型选择和配置好的 Agent 参数不再重复发送同一个 flag，也就不会因此启动失败。Cursor 用量会读到正确的账户。
- **远程终端：** 回到正在跑 Claude Code 的远程标签时，不会再透过 Claude 的画面看到旧的 shell 输出。
- **Jira：** 创建 Jira issue 时可以选择 assignee。

### 已知问题 {#v1-4-222-known-issues}

**更新后的 Agent 检测：** 如果从 v1.4.221 更新，OpenCode、Pi 和 Qoder 检测的改进要等终端后台服务重启后才生效。已经打开的终端会在这次更新中继续运行。

**Windows on ARM：** ARM64 包装的是 x64 的 `orca.exe` 命令行工具。Windows 11 on ARM 会用模拟运行它。Windows 10 on ARM 跑不了，所以那里的 `orca` 命令不可用（#24094）。

**OpenCode 2：** 如果从 v1.4.219 或更早版本更新，已经在跑的 OpenCode 2 窗格可能要在里面重启 OpenCode 之后才有状态。这次更新之后如果降级 Orca，会留下重复的 OpenCode 状态插件。`opencode run` 退出后，窗格可能一直显示 “Done”；修复还在 #24472。

**Codex：** 升级之后，在 Codex 批准 Orca 的新状态 hook 之前，Codex 启动会使用 Orca 托管的 Codex home。恢复一个使用 `~/.codex` 的窗格，可能停顿最多 30 秒（#23552）。

**Claude 文件夹信任：** 文件夹预信任默认开启（Settings → Agents → “Trust the folder when Orca starts an agent”）。在 Alpine WSL 上，Orca 复制不了它需要的文件权限，所以 Claude 会改显示自己的信任提示（#23744）。

### 产品体验 {#v1-4-222-product}

#### Codex 与编排 {#v1-4-222-codex-orchestration}

> OpenCode worker 会在 OpenCode 能提交时才收到任务，也可以使用自己的模型。从手机发起的长启动 prompt 会在 Agent 就绪后粘贴一次。切换 Codex 账户会继续同一段对话。

- 修复（orchestration）：只在 OpenCode 能提交时才把任务交给 OpenCode worker（[@OrcaWin](https://github.com/OrcaWin)，[#25101](https://github.com/stablyai/orca/pull/25101)）
- 在执行主机上校验 OpenCode worker 的模型偏好（[@nwparker](https://github.com/nwparker)，[#24624](https://github.com/stablyai/orca/pull/24624)）
- OpenCode worker 的模型选择与默认模型分开保留（[@nwparker](https://github.com/nwparker)，[#24768](https://github.com/stablyai/orca/pull/24768)）
- 新增（agent-launch）：长 prompt 不放在启动命令行上，就绪后再粘贴（7 步中的第 1 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24257](https://github.com/stablyai/orca/pull/24257)）
- 修复（codex）：切换账户后继续会话，而不把终端清空（[@nwparker](https://github.com/nwparker)，[#25485](https://github.com/stablyai/orca/pull/25485)）

#### Native Chat {#v1-4-222-native-chat}

> 打开聊天绝不会删掉历史。消息会显示是否已发送。Stop 和启动失败的行为正确。模型列表来自真正跑聊天的那台机器。

- 修复（native-chat）：读取时绝不删除聊天历史；Orca 载入不了的聊天只说明一次原因（[@brennanb2025](https://github.com/brennanb2025)，[#24576](https://github.com/stablyai/orca/pull/24576)）
- 修复（native-chat）：消息在宿主确认前显示 “Sending…”（[@brennanb2025](https://github.com/brennanb2025)，[#24606](https://github.com/stablyai/orca/pull/24606)）
- 修复（native-chat）：Orca 已接受但随后投递失败的消息，在聊天里显示为 “Not sent”（[@brennanb2025](https://github.com/brennanb2025)，[#24710](https://github.com/stablyai/orca/pull/24710)）
- 重发的聊天消息拿到的是已记录的回答，而不是过早拒绝或编造的记录（[@brennanb2025](https://github.com/brennanb2025)，[#25158](https://github.com/stablyai/orca/pull/25158)）
- 修复（native-chat）：Stop 只绑定它真正停掉的那一轮（[@brennanb2025](https://github.com/brennanb2025)，[#24864](https://github.com/stablyai/orca/pull/24864)）
- 修复（native-chat）：更早的启动失败之后仍可开始新聊天（[@brennanb2025](https://github.com/brennanb2025)，[#24917](https://github.com/stablyai/orca/pull/24917)）
- 修复（native-chat）：被 Orca 崩溃或退出截断的回复，按已完成的一轮显示，并附一条说明（[@brennanb2025](https://github.com/brennanb2025)，[#25043](https://github.com/stablyai/orca/pull/25043)）
- 修复（native-chat）：新的结构化聊天的模型列表来自真正跑它的那台机器（[@brennanb2025](https://github.com/brennanb2025)，[#25143](https://github.com/stablyai/orca/pull/25143)）
- 修复（native-chat）：聊天的完成轮次提醒来自标签上记录的宿主，而不是工作区 id（[@brennanb2025](https://github.com/brennanb2025)，[#25081](https://github.com/stablyai/orca/pull/25081)）

#### Agent、账户与集成 {#v1-4-222-agents-accounts-integrations}

> 额度余额会出现在用量上限旁边。OpenCode 更可靠地装上插件并发出第一条 prompt。Agent 不再因重复 flag 而启动失败。Cursor 用量读到正确账户。

- 在用量上限旁边显示提供方额度余额（[@nwparker](https://github.com/nwparker)，[#25408](https://github.com/stablyai/orca/pull/25408)）
- 修复重复的会话选项 flag，并保留参数值（[@AmethystLiang](https://github.com/AmethystLiang)，[#25382](https://github.com/stablyai/orca/pull/25382)）
- 修复（cursor）：把用量 cookie 留在已解析的账户上（[@nwparker](https://github.com/nwparker)，[#25243](https://github.com/stablyai/orca/pull/25243)）
- 通过原生启动插件提交 OpenCode 2.0.12 的初始 prompt（[@nwparker](https://github.com/nwparker)，[#25428](https://github.com/stablyai/orca/pull/25428)）
- 把 OpenCode hook 装到该终端的配置目录（[@nwparker](https://github.com/nwparker)，[#25296](https://github.com/stablyai/orca/pull/25296)）
- 增加仓库级 OpenCode 权限默认值（[@nwparker](https://github.com/nwparker)，[#25326](https://github.com/stablyai/orca/pull/25326)）
- 修复（opencode）：脱离的服务不再使前台终端失效（[@nwparker](https://github.com/nwparker)，[#25378](https://github.com/stablyai/orca/pull/25378)）
- 限制 OpenCode 历史读取和重复的 worker 失败（[@nwparker](https://github.com/nwparker)，[#25292](https://github.com/stablyai/orca/pull/25292)）

#### 终端 {#v1-4-222-terminal}

> 正在跑 Claude Code 的远程标签不再透过它的画面显示旧输出。手机控制终端时显示的卡片更简单。

- 修复（terminal）：回到远程标签时，旧输出不再渗进 Claude 的画面（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24926](https://github.com/stablyai/orca/pull/24926)）
- 简化手机控制和手机尺寸的终端对话框（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25307](https://github.com/stablyai/orca/pull/25307)）

#### 移动应用与已配对客户端 {#v1-4-222-mobile-app-paired-clients}

> Android 聊天滚动时不再选中词语。工作指示环继续转动。置顶工作区跟随桌面设置。应用内 Android 下载链接指向 0.0.52。

- 修复（mobile）：Android 滚动聊天记录时不再选中词语（[@chokolademilch7](https://github.com/chokolademilch7)，[#22871](https://github.com/stablyai/orca/pull/22871)）
- 修复（mobile）：OTA 页面上的工作指示环继续转动（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25299](https://github.com/stablyai/orca/pull/25299)）
- 修复（mobile）：遵从桌面端置顶 worktree 的位置设置（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25301](https://github.com/stablyai/orca/pull/25301)）
- 增加共享工作区设置说明，并防止过滤器弹层展开（[@AmethystLiang](https://github.com/AmethystLiang)，[#25300](https://github.com/stablyai/orca/pull/25300)）
- 把应用内 Android APK 链接更新到 mobile 0.0.52（[@brennanb2025](https://github.com/brennanb2025)，[#25168](https://github.com/stablyai/orca/pull/25168)）

#### 工作区与侧栏 {#v1-4-222-workspaces-sidebar}

> 显示出来的远程计算机保持可见。子项已折叠的工作区可以重新排序且不崩溃。删除对话框保持稳定。Create worktree 不再等待脚本检查。Activity 预览保持简短。

- 修复（sidebar）：过期的 UI 更新不再盖掉远程主机的可见性（[@nwparker](https://github.com/nwparker)，[#25737](https://github.com/stablyai/orca/pull/25737)）
- 修复子项已折叠的工作区重新排序（[@nwparker](https://github.com/nwparker)，[#25302](https://github.com/stablyai/orca/pull/25302)）
- 修复：在 store 里落定 sortEpoch，避免 React 更新深度超限（[@AmethystLiang](https://github.com/AmethystLiang)，[#25313](https://github.com/stablyai/orca/pull/25313)）
- 变更加载时保持工作区删除对话框稳定（[@nwparker](https://github.com/nwparker)，[#25321](https://github.com/stablyai/orca/pull/25321)）
- 修复：慢速脚本检查之前先关闭 worktree 对话框（[@nwparker](https://github.com/nwparker)，[#25472](https://github.com/stablyai/orca/pull/25472)）
- 修复（activity）：行预览里的代码块不再渲染成滚动框（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25410](https://github.com/stablyai/orca/pull/25410)）

#### 输入、设置与语言 {#v1-4-222-input-settings-languages}

> 用来确认日文、中文或韩文的 Enter 不再提交字段。防休眠说明会解释各平台合盖后做什么。终端 shell 设置已有译文。

- 修复：防止 IME 的 Enter 在 Orca 各处提交文本字段（[@nwparker](https://github.com/nwparker)，[#25480](https://github.com/stablyai/orca/pull/25480)）
- 修复（ui）：在工作区详情里恢复对 IME Enter 的防护（[@setodeve](https://github.com/setodeve)，[#24099](https://github.com/stablyai/orca/pull/24099)）
- 更新 Caffeinate 提示文案，说明 MacBook 合盖行为（[@AmethystLiang](https://github.com/AmethystLiang)，[#23091](https://github.com/stablyai/orca/pull/23091)）
- 按平台说清防休眠提示的行为（[@AmethystLiang](https://github.com/AmethystLiang)，[#25323](https://github.com/stablyai/orca/pull/25323)）
- 为终端 shell 设置补充译文（[@AmethystLiang](https://github.com/AmethystLiang)，[#25418](https://github.com/stablyai/orca/pull/25418)）

#### 编辑器、文件与搜索 {#v1-4-222-editor-files-search}

> 大 CSV 打开更快，可以当表格编辑。项目以外文件的标签重启后能重新打开。不同计算机上路径相同的文件保持分开。粘贴落在开始的位置。搜索预览占用更少内存。

- 让大 CSV 预览保持响应，并加上列宽调整和链接（[@nwparker](https://github.com/nwparker)，[#25381](https://github.com/stablyai/orca/pull/25381)）
- 直接编辑 CSV 表格，并记住列宽（[@nwparker](https://github.com/nwparker)，[#25442](https://github.com/stablyai/orca/pull/25442)）
- 修复（editor）：项目以外文件恢复的标签不再以 Access denied 失败（[@brennanb2025](https://github.com/brennanb2025)，[#24489](https://github.com/stablyai/orca/pull/24489)）
- 按执行主机隔离代码编辑器的文本和 Undo 历史（[@nwparker](https://github.com/nwparker)，[#25174](https://github.com/stablyai/orca/pull/25174)）
- 编辑器变化时保留图片剪贴板目标和内容（[@nwparker](https://github.com/nwparker)，[#25176](https://github.com/stablyai/orca/pull/25176)）
- 大段 Markdown 粘贴保持在原来的选区（[@nwparker](https://github.com/nwparker)，[#25177](https://github.com/stablyai/orca/pull/25177)）
- 选中文本导航不再改写文档链接（[@nwparker](https://github.com/nwparker)，[#25175](https://github.com/stablyai/orca/pull/25175)）
- Markdown 审阅选区复用源行计算（[@nwparker](https://github.com/nwparker)，[#25173](https://github.com/stablyai/orca/pull/25173)）
- 外部重新加载后，保持当前的 notebook 单元格仍是活动单元格（[@nwparker](https://github.com/nwparker)，[#25172](https://github.com/stablyai/orca/pull/25172)）
- 限制搜索预览内存，并停掉已取消的 SSH 扫描（[@nwparker](https://github.com/nwparker)，[#25303](https://github.com/stablyai/orca/pull/25303)）
- 用 stream-json 替换打过补丁的 JSON 解析器（[@nwparker](https://github.com/nwparker)，[#25202](https://github.com/stablyai/orca/pull/25202)）

#### 任务与 issue {#v1-4-222-tasks-issues}

> 创建 Jira issue 时可以选择 assignee。已配对的网页客户端能处理缺失的 Jira 状态。

- 新增（jira）：创建 issue 时选择 assignee——Automatic、me，或任何人（[@kazuki-hanai](https://github.com/kazuki-hanai)，[#24376](https://github.com/stablyai/orca/pull/24376)）
- 修复（jira）：已配对网页客户端不再因缺失的 Jira 状态崩溃（[@brennanb2025](https://github.com/brennanb2025)，[#25579](https://github.com/stablyai/orca/pull/25579)）

#### Relay 服务 {#v1-4-222-relay-service}

> Orca relay 服务的服务端容量与清理工作。

- 新增（relay）：把亚洲备用单元 c34 声明为仅用于迁移（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25336](https://github.com/stablyai/orca/pull/25336)）
- 杂项（relay）：提升后把美国单元 c32 和 c33 移入通用同容量列表（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25367](https://github.com/stablyai/orca/pull/25367)）
- 修复（relay）：没有单元符合条件时，跳过死单元清扫的主机扫描（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25350](https://github.com/stablyai/orca/pull/25350)）
- 修复（relay）：按有界批次修剪已释放的控制连接预留（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25352](https://github.com/stablyai/orca/pull/25352)）
- 修复（relay）：确认结果保留一周，审计事件保留 90 天（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25353](https://github.com/stablyai/orca/pull/25353)）
- 重构（relay）：不再创建三张没有任何写入的表（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25354](https://github.com/stablyai/orca/pull/25354)）

#### 测试、CI 与维护 {#v1-4-222-tests-ci-maintenance}

> PR 检查在准备和失败运行上花的时间更少。贡献者文档与 PR 模板一致。代码重组，行为不变。

- 减少 PR 检查和 SSH 测试准备里可避免的工作（[@nwparker](https://github.com/nwparker)，[#25309](https://github.com/stablyai/orca/pull/25309)）
- 在接纳较短的必需检查之前，先等 PR preflight（[@nwparker](https://github.com/nwparker)，[#25317](https://github.com/stablyai/orca/pull/25317)）
- 减少重复的 CI 准备，并错开移动端类型检查（[@nwparker](https://github.com/nwparker)，[#25359](https://github.com/stablyai/orca/pull/25359)）
- 减少重复的终端扫描和未使用的 Qoder 测试导入（[@nwparker](https://github.com/nwparker)，[#25425](https://github.com/stablyai/orca/pull/25425)）
- 修复（test）：在图片插入访问测试里传入 getInsertionRange（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25351](https://github.com/stablyai/orca/pull/25351)）
- 修复（test）：给图片插入的 store 替身一份打开文件列表（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25357](https://github.com/stablyai/orca/pull/25357)）
- 测试（linear）：覆盖以数字开头的 issue 标识（[@kenfdev](https://github.com/kenfdev)，[#10241](https://github.com/stablyai/orca/pull/10241)）
- 重构（terminal）：终端拓扑关闭收成一个 commit 模块，并加上边界检查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25329](https://github.com/stablyai/orca/pull/25329)）
- 把 CSV 编辑器代码归到自己的文件夹（[@nwparker](https://github.com/nwparker)，[#25476](https://github.com/stablyai/orca/pull/25476)）
- 移除已完成的 SSH 选择器 E2E 计划（[@kazooooo-ma](https://github.com/kazooooo-ma)，[#24824](https://github.com/stablyai/orca/pull/24824)）
- 文档：让贡献者指引与 PR 模板一致（[@pqminh27](https://github.com/pqminh27)，[#25034](https://github.com/stablyai/orca/pull/25034)）

### 新贡献者 {#v1-4-222-contributors}

- [@chokolademilch7](https://github.com/chokolademilch7) 的首次贡献是 [#22871](https://github.com/stablyai/orca/pull/22871)
- [@setodeve](https://github.com/setodeve) 的首次贡献是 [#24099](https://github.com/stablyai/orca/pull/24099)
- [@kazuki-hanai](https://github.com/kazuki-hanai) 的首次贡献是 [#24376](https://github.com/stablyai/orca/pull/24376)
- [@kazooooo-ma](https://github.com/kazooooo-ma) 的首次贡献是 [#24824](https://github.com/stablyai/orca/pull/24824)
- [@pqminh27](https://github.com/pqminh27) 的首次贡献是 [#25034](https://github.com/stablyai/orca/pull/25034)

**完整变更对照：** [v1.4.221...v1.4.222](https://github.com/stablyai/orca/compare/v1.4.221...v1.4.222)

## v1.4.221 Copilot 配置改为仅所有者可读，Windows Codex 改用 ~/.codex {#v1-4-221}

2026年10月5日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.221)

感谢使用 Orca，也感谢一直以来的支持。

Remote Server 仍是实验功能，可能有 bug。Remote Server 2.0 将于本周推出，会消掉其中大部分问题。

### 简要说明 {#v1-4-221-short}

- **Copilot 安全修复：** Orca 把文件夹标成 GitHub Copilot 已信任时，可能把 `~/.copilot/config.json` 留成同机其他用户也可读。该文件可以存放 Copilot 登录令牌。v1.4.219 和 v1.4.220 在 SSH 主机上也会这样，而那些机器经常多人共用。现在 Orca 写入之后，文件只对所有者可读。旧版 Orca 已经放开的文件，会在下次 Orca 往里添加新文件夹时修好。
- **Windows 上的 Codex 改用你自己的 `~/.codex`：** Orca 里的 Codex 现在和 Orca 外的 Codex 使用同一文件夹，macOS 和 Linux 本来就是这样。如果只在 Orca 里登录过，这次会把登录状态复制过去，所以仍然保持登录。Codex 可能会再次要求信任文件夹或批准命令；只在 Orca 里添加的 MCP 服务器需要重新添加。一次性提示会说明这件事。更新前已经打开的 Codex 终端继续用 Orca 的旧文件夹，保留仅 Orca 有的 MCP 服务器，也不再弹出重启对话框。
- **Codex worker：** `worker-start` 现在接受 Orca 尚未列出的 Codex 模型的 `max` 和 `ultra` effort，例如 gpt-6.x，不再直接拒绝。
- **更多 Agent 与账户：** Qoder 对话会出现在会话历史和搜索里。Orca 可以启动 Qoder CLI China 和 Qwen Code，GLM Coding Plans 可以不经过 ZCode 直接关联。OpenCode 和 Devin 可以各自保留账户配置。Antigravity 有了 Accounts 卡片，Antigravity IDE 和 2.0 的对话可以在新的 CLI 对话里继续。
- **Native Chat（实验性）：** 已配对 Orca 服务器上的工作区，在聊天是默认时会打开结构化聊天。OpenCode 会话可以使用 Chat。正在等权限提示的 Claude 子 Agent 会显示为等待中。聊天错误用直白措辞，不再闪一下加载，也不会重复上报。
- **Agent 状态与编排：** Codex 的 “Implement this plan?” 菜单和未关闭的 Agent 提问现在算作在等你，发出的文字不会再落到菜单上。OMP 18.4 worker 可以启动。即使 shell 启动文件把更旧的全局安装放在前面，Agent 也会使用 Orca 自带的 `orca` 命令。
- **文件、Markdown 与搜索：** 分号分隔的 CSV 会按列显示。大 Markdown 预览加载更快，里面的 Find 打开更快，超大表格也可读。Find 开着时打字不再跳动光标。搜索能找到正确文件，完不成时会告诉你；SSH 重连或文件夹被替换后，文件更新会恢复。
- **工作区与通知：** 桌面通知可以按机器关闭。git 没能删完的 worktree 会留在列表里，方便重试；`C:\` 上 WSL 运行时项目里的工作区又可以删除了。Create PR 会让 Agent 在已经推送的分支上写 PR 说明。Jira 搜索接受普通词语。
- **更新与内存：** 在 macOS 上，Update & Restart 不再先关掉 Orca，再一直等后台 Orca 服务器。Orca 会告诉你该关什么，并允许重试。多处修复让 Orca 释放已关闭标签、预览、手机画面和空闲缓存占用的内存。

**已经打开的终端：** 更新会启动新的终端后台服务。更新前打开的终端继续跑在原来的服务上。新开的终端使用新服务，并得到这次的终端修复，包括上面的 `orca` 命令修复、OpenCode 和 Devin 的账户配置，以及 jcode、Qoder CLI China、Qwen Code 和 Cursor 的 Agent 检测与恢复。

### 已知问题 {#v1-4-221-known-issues}

**Windows on ARM：** ARM64 包装的是 x64 的 `orca.exe` 命令行工具。Windows 11 on ARM 会用模拟运行它。Windows 10 on ARM 跑不了，所以那里的 `orca` 命令不可用（#24094）。

**OpenCode 2：** 如果从 v1.4.219 或更早版本更新，已经在跑的 OpenCode 2 窗格可能要在里面重启 OpenCode 之后才有状态。这次更新之后如果降级 Orca，会留下重复的 OpenCode 状态插件。`opencode run` 退出后，窗格可能一直显示 “Done”；修复还在 #24472。

**OpenCode worker：** 机器忙的时候，用 `orca orchestration worker-start` 启动的 OpenCode worker，或带着提示启动的 OpenCode 标签，偶尔会把任务留在 OpenCode 输入框里没有发出。在那个窗格里按 Enter 就会发送。修复（#25101）已在 main 上，会随后续版本发布。

**Codex：** 升级之后，在 Codex 批准 Orca 的新状态 hook 之前，Codex 启动会使用 Orca 托管的 Codex home。使用 `~/.codex` 的已恢复窗格最多可能停顿 30 秒（#23552）。

**Claude 文件夹信任：** 文件夹预信任默认开启（Settings → Agents → “Trust the folder when Orca starts an agent”）。在 Alpine WSL 上，Orca 复制不了所需的文件权限，所以 Claude 仍会显示自己的信任提示（#23744）。

---

### 产品体验 {#v1-4-221-product}

#### Codex 与编排 {#v1-4-221-codex-orchestration}

> Windows 上的 Codex 现在跑在你自己的 `~/.codex` 上，已经打开的终端不再提示重启。Codex worker 接受较新模型的 max 和 ultra effort。编排能认出 Codex 的计划菜单、未关闭的 Agent 提问，以及 OMP 18.4。

- 新增（codex）：在 Windows 上用真正的 ~/.codex 运行 Codex（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24356](https://github.com/stablyai/orca/pull/24356)）
- 修复（codex）：刷新保留的共享 home 时，保留仅 Orca 有的 MCP 服务器（[@OrcaWin](https://github.com/OrcaWin)，[#24983](https://github.com/stablyai/orca/pull/24983)）
- 新增（codex）：向 Windows 用户提示一次，Orca 里的 Codex 现在共用 ~/.codex（[@OrcaWin](https://github.com/OrcaWin)，[#24916](https://github.com/stablyai/orca/pull/24916)）
- 修复（codex）：只有 home 变化时，不再提示重启 Codex（[@OrcaWin](https://github.com/OrcaWin)，[#25421](https://github.com/stablyai/orca/pull/25421)）
- 修复（codex）：Codex 会话索引读不了时，跳过 hook 信任 RPC（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24604](https://github.com/stablyai/orca/pull/24604)）
- 修复：关掉 Codex 账户提示，并把焦点交回终端（[@nwparker](https://github.com/nwparker)，[#24683](https://github.com/stablyai/orca/pull/24683)）
- 修复（orchestration）：对 Orca 尚未列出的 Codex 模型接受 max 和 ultra effort（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25375](https://github.com/stablyai/orca/pull/25375)）
- 修复（runtime）：把 Codex 的 “Implement this plan?” 菜单读成阻塞（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24536](https://github.com/stablyai/orca/pull/24536)）
- 修复（runtime）：把未关闭的 Agent 提问作为阻塞报告给 tui-idle 等待（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24533](https://github.com/stablyai/orca/pull/24533)）
- 修复（runtime）：Codex 的 tui-idle 等待在 hook 完成时结束，仍在工作的行交给规则处理（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24541](https://github.com/stablyai/orca/pull/24541)）
- 修复（runtime）：让 OMP 18.4 worker 在编写器处就绪，过期标题的清除只影响显示（[@brennanb2025](https://github.com/brennanb2025)，[#24295](https://github.com/stablyai/orca/pull/24295)）
- 等待：第一次派发之前，先等 OpenCode worker 的输入（[@nwparker](https://github.com/nwparker)，[#24601](https://github.com/stablyai/orca/pull/24601)）
- 解析 worker 上显式配置的命令别名（[@nwparker](https://github.com/nwparker)，[#24648](https://github.com/stablyai/orca/pull/24648)）
- 新增：Agent 状态规则的实时更新（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24387](https://github.com/stablyai/orca/pull/24387)）
- 修复：为回滚安全调整旧版 worker 恢复快照的时机（[@AmethystLiang](https://github.com/AmethystLiang)，[#25413](https://github.com/stablyai/orca/pull/25413)）
- 内部 worker 检查复用预编译语句（[@nwparker](https://github.com/nwparker)，[#24573](https://github.com/stablyai/orca/pull/24573)）
- 修复（orchestration）：提升任务时避免加载任务描述（[@OrcaWin](https://github.com/OrcaWin)，[#24781](https://github.com/stablyai/orca/pull/24781)）
- 修复（codex）：释放已完成子预览后面的完整消息（[@OrcaWin](https://github.com/OrcaWin)，[#24740](https://github.com/stablyai/orca/pull/24740)）

#### Native Chat {#v1-4-221-native-chat}

> 结构化聊天会在拥有该工作区的已配对 Orca 服务器上打开。正在等权限的 Claude 子 Agent 显示为等待中。OpenCode 会话可以使用 Chat。错误用直白措辞，不再闪一下加载。

- 修复（native-chat）：桌面端向已配对的 Orca 服务器声明支持结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#24204](https://github.com/stablyai/orca/pull/24204)）
- 新增（native-chat）：在拥有该工作区的已配对 Orca 服务器上打开结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#24205](https://github.com/stablyai/orca/pull/24205)）
- 新增（native-chat）：正在等权限提示的 Claude 子 Agent 显示为等待中（[@brennanb2025](https://github.com/brennanb2025)，[#22634](https://github.com/stablyai/orca/pull/22634)）
- 支持：在原生 Chat 中使用真正的 OpenCode 会话（[@nwparker](https://github.com/nwparker)，[#24647](https://github.com/stablyai/orca/pull/24647)）
- 保留：原生历史里的 OpenCode 推理过程和已记录补丁（[@nwparker](https://github.com/nwparker)，[#24790](https://github.com/stablyai/orca/pull/24790)）
- 修复（native-chat）：日志只由一个按序写入器负责（[@brennanb2025](https://github.com/brennanb2025)，[#24127](https://github.com/stablyai/orca/pull/24127)）
- 修复（native-chat）：去掉聊天启动时一闪而过的 “still starting” 提示（[@brennanb2025](https://github.com/brennanb2025)，[#24564](https://github.com/stablyai/orca/pull/24564)）
- 修复（native-chat）：打开时不再闪加载，启动失败只上报一次，不再显示 “Not reported” 说明（[@brennanb2025](https://github.com/brennanb2025)，[#24588](https://github.com/stablyai/orca/pull/24588)）
- 修复（native-chat）：聊天错误和状态行改用直白措辞（[@brennanb2025](https://github.com/brennanb2025)，[#24594](https://github.com/stablyai/orca/pull/24594)）
- 修复：接纳稍后出现的 Claude 提问行，并做真实 CLI 校验（[@nwparker](https://github.com/nwparker)，[#25119](https://github.com/stablyai/orca/pull/25119)）
- Native Chat 的等待消息只分类一次（[@nwparker](https://github.com/nwparker)，[#24771](https://github.com/stablyai/orca/pull/24771)）
- 追加子 Agent 交接时，不再复制整份消息列表（[@nwparker](https://github.com/nwparker)，[#24672](https://github.com/stablyai/orca/pull/24672)）
- 修复（claude）：检查子工具 ID 时不再重建其输出（[@OrcaWin](https://github.com/OrcaWin)，[#24707](https://github.com/stablyai/orca/pull/24707)）
- 修复（journal）：只编码保留下来的工具输出预览（[@OrcaWin](https://github.com/OrcaWin)，[#24696](https://github.com/stablyai/orca/pull/24696)）
- 修复（chat）：流式输出溢出时，只编码保留的前缀（[@OrcaWin](https://github.com/OrcaWin)，[#24799](https://github.com/stablyai/orca/pull/24799)）
- 修复（chat）：空闲的会话读取器可以释放已退役的日志折叠（[@OrcaWin](https://github.com/OrcaWin)，[#24842](https://github.com/stablyai/orca/pull/24842)）

#### Agent、账户与集成 {#v1-4-221-agents-accounts-integrations}

> Copilot 的设置文件保持私有。Qoder、Qwen Code 和 GLM Coding Plans 加入受支持的 Agent 与账户。OpenCode 和 Devin 可以各自保留账户配置。Antigravity、Cursor、OpenCode 和 jcode 的集成更可靠。

- 修复（agents）：Orca 信任文件夹时，把 ~/.copilot/config.json 保持为仅所有者可读（[@brennanb2025](https://github.com/brennanb2025)，[#25087](https://github.com/stablyai/orca/pull/25087)）
- 新增：Qoder 会话历史与搜索（[@nwparker](https://github.com/nwparker)，[#24614](https://github.com/stablyai/orca/pull/24614)）
- 注册受监督的 Qoder China 和 Qwen Code（[@nwparker](https://github.com/nwparker)，[#24616](https://github.com/stablyai/orca/pull/24616)）
- 新增（accounts）：关联独立的 GLM Coding Plans（[@nwparker](https://github.com/nwparker)，[#24618](https://github.com/stablyai/orca/pull/24618)）
- 新增：由主机持有的 OpenCode 和 Devin 托管账户配置（[@nwparker](https://github.com/nwparker)，[#24636](https://github.com/stablyai/orca/pull/24636)）
- 保留：登记出错后仍保存已有账户凭据（[@nwparker](https://github.com/nwparker)，[#25059](https://github.com/stablyai/orca/pull/25059)）
- 移除：大写注册 ID 的规范账户目录（[@nwparker](https://github.com/nwparker)，[#25126](https://github.com/stablyai/orca/pull/25126)）
- 保持：已保存的 OpenCode Go 密钥留在 main 持有的存储里（[@nwparker](https://github.com/nwparker)，[#24615](https://github.com/stablyai/orca/pull/24615)）
- 修复（opencode-go）：凭据数据库读不了时，不再回退到 OPENCODE_API_KEY（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24605](https://github.com/stablyai/orca/pull/24605)）
- 从当前选中的账户读取 OpenCode Go 用量（[@nwparker](https://github.com/nwparker)，[#24770](https://github.com/stablyai/orca/pull/24770)）
- 新增：在所属运行时上提供已校验的原生 Antigravity Accounts（[@nwparker](https://github.com/nwparker)，[#24691](https://github.com/stablyai/orca/pull/24691)）
- 在新的 CLI 对话里继续 Antigravity IDE 和 2.0 的历史（[@nwparker](https://github.com/nwparker)，[#24692](https://github.com/stablyai/orca/pull/24692)）
- 修复（antigravity）：在所属运行时上限制 Windows hook 的标准输入（[@nwparker](https://github.com/nwparker)，[#24622](https://github.com/stablyai/orca/pull/24622)）
- 修复（cursor）：启动状态回放之后，恢复到确切的对话（[@nwparker](https://github.com/nwparker)，[#24670](https://github.com/stablyai/orca/pull/24670)）
- 修复（cursor）：在紧凑用量里显示主模型池（[@nwparker](https://github.com/nwparker)，[#24830](https://github.com/stablyai/orca/pull/24830)）
- 修复（opencode）：在主线程之外读取绑定器的会话存储，并在 orcad 中带上读取 worker（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24638](https://github.com/stablyai/orca/pull/24638)）
- 按执行主机版本选择 OpenCode 插件导出（[@nwparker](https://github.com/nwparker)，[#24662](https://github.com/stablyai/orca/pull/24662)）
- 修复（opencode）：重试超时的 SSH 插件更新（[@nwparker](https://github.com/nwparker)，[#24666](https://github.com/stablyai/orca/pull/24666)）
- 修复（opencode）：提交已接纳的原生启动简报时，不覆盖输入（[@nwparker](https://github.com/nwparker)，[#24762](https://github.com/stablyai/orca/pull/24762)）
- 修复（opencode）：覆盖清单的清理留在自有目录内（[@nwparker](https://github.com/nwparker)，[#24763](https://github.com/stablyai/orca/pull/24763)）
- 修复（opencode）：TUI 设置无效时也能完成状态安装（[@nwparker](https://github.com/nwparker)，[#25031](https://github.com/stablyai/orca/pull/25031)）
- 修复（opencode）：共享会话的 TUI 活动留在所属窗格（[@nwparker](https://github.com/nwparker)，[#24962](https://github.com/stablyai/orca/pull/24962)）
- 把包装过的 OpenCode run 提示作为位置参数消息传入（[@nwparker](https://github.com/nwparker)，[#25001](https://github.com/stablyai/orca/pull/25001)）
- 安全清理已退役的 OpenCode 配置副本（[@nwparker](https://github.com/nwparker)，[#25222](https://github.com/stablyai/orca/pull/25222)）
- 修复（jcode）：加固 Windows hook，并协商远程历史（[@nwparker](https://github.com/nwparker)，[#24998](https://github.com/stablyai/orca/pull/24998)）
- 修复（jcode）：报告缺失和过期的托管 hook（[@NicholasTing](https://github.com/NicholasTing)，[#25135](https://github.com/stablyai/orca/pull/25135)）

#### 终端 {#v1-4-221-terminal}

> shell 启动之后，Agent 仍优先使用 Orca 自带的 CLI。终端优先模式下，OpenCode 能收到自己的编辑快捷键。单个标签的变化不再重绘每一个标签。关闭的终端会释放内存。

- 修复（daemon）：把终端 daemon 协议升到 v40（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25291](https://github.com/stablyai/orca/pull/25291)）
- 保持：shell 启动之后，Orca CLI 仍排在前面（[@nwparker](https://github.com/nwparker)，[#25130](https://github.com/stablyai/orca/pull/25130)）
- 允许：终端优先模式推迟 OpenCode 的编辑快捷键（[@nwparker](https://github.com/nwparker)，[#24640](https://github.com/stablyai/orca/pull/24640)）
- 性能（tab-bar）：一个标签变化时，不再重渲染每一个标签（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24261](https://github.com/stablyai/orca/pull/24261)）
- 就绪扫描时复用终端缓冲区单元格（[@nwparker](https://github.com/nwparker)，[#25161](https://github.com/stablyai/orca/pull/25161)）
- 终端关闭时取消尚未完成的光标更新（[@nwparker](https://github.com/nwparker)，[#24566](https://github.com/stablyai/orca/pull/24566)）
- 修复（terminal）：从 Agent 类型缓存里释放已退役的状态来源（[@OrcaWin](https://github.com/OrcaWin)，[#24669](https://github.com/stablyai/orca/pull/24669)）
- 修复（terminal）：从状态路由里释放已退役的回滚布局（[@OrcaWin](https://github.com/OrcaWin)，[#24686](https://github.com/stablyai/orca/pull/24686)）
- 修复（terminal）：揭示帧暂停时释放已关闭的布局（[@OrcaWin](https://github.com/OrcaWin)，[#24721](https://github.com/stablyai/orca/pull/24721)）
- 修复（terminal）：窗格关闭时取消视口重试（[@OrcaWin](https://github.com/OrcaWin)，[#24745](https://github.com/stablyai/orca/pull/24745)）
- 预览关闭时取消终端预览的适配帧（[@nwparker](https://github.com/nwparker)，[#24712](https://github.com/stablyai/orca/pull/24712)）
- 终端副作用送达之后即释放（[@nwparker](https://github.com/nwparker)，[#24548](https://github.com/stablyai/orca/pull/24548)）
- 检查 daemon 空闲状态时，不再构建会被丢弃的终端清单（[@nwparker](https://github.com/nwparker)，[#24749](https://github.com/stablyai/orca/pull/24749)）

#### SSH 与远程主机 {#v1-4-221-ssh-remote-hosts}

> 短暂的 SSH 重连之后文件更新仍然在。Git 保留 SSH 设置和审阅上下文。较旧的 Orca 服务器上搜索仍然可用。

- 修复（files）：SSH 重连竞态期间保持监视流（[@nwparker](https://github.com/nwparker)，[#24722](https://github.com/stablyai/orca/pull/24722)）
- 修复（git）：保留 SSH 审阅上下文和 worktree 归属（[@nwparker](https://github.com/nwparker)，[#24945](https://github.com/stablyai/orca/pull/24945)）
- 修复（search）：保留旧主机搜索，并协商 Agent 支持（[@nwparker](https://github.com/nwparker)，[#25009](https://github.com/stablyai/orca/pull/25009)）
- 保留：除非缺少 pwsh，否则保留 Windows SSH 上传失败信息（[@nwparker](https://github.com/nwparker)，[#25185](https://github.com/stablyai/orca/pull/25185)）
- 修复（ssh）：失败的工作区同步状态里不再带上终端缓冲区（[@OrcaWin](https://github.com/OrcaWin)，[#24833](https://github.com/stablyai/orca/pull/24833)）
- 修复（ssh）：接收端接受响应块之后即释放（[@OrcaWin](https://github.com/OrcaWin)，[#24719](https://github.com/stablyai/orca/pull/24719)）
- 中继监视器通知多个客户端时，复用事件字节大小（[@nwparker](https://github.com/nwparker)，[#24558](https://github.com/stablyai/orca/pull/24558)）
- 避免：中继列表里把终端 Agent 所有者克隆两次（[@nwparker](https://github.com/nwparker)，[#24713](https://github.com/stablyai/orca/pull/24713)）
- 修复（reconnect）：释放 handle-gap 监视器持有的过期应用状态（[@OrcaWin](https://github.com/OrcaWin)，[#24815](https://github.com/stablyai/orca/pull/24815)）

#### 移动应用与已配对客户端 {#v1-4-221-mobile-app-paired-clients}

> 离开之后，手机会停下还在跑的信息流和画面，图片、文件和终端追赶更省内存。Android APK 链接指向 0.0.52。

- 修复（mobile）：从传输层释放通知和账户流（[@brennanb2025](https://github.com/brennanb2025)，[#23032](https://github.com/stablyai/orca/pull/23032)）
- 移动订阅启动失败时，释放还在等待的终端输出（[@nwparker](https://github.com/nwparker)，[#24547](https://github.com/stablyai/orca/pull/24547)）
- 修复（mobile）：释放被取消的流仍然持有的回调（[@OrcaWin](https://github.com/OrcaWin)，[#24625](https://github.com/stablyai/orca/pull/24625)）
- 修复（mobile）：标签关闭后释放文件预览（[@OrcaWin](https://github.com/OrcaWin)，[#24655](https://github.com/stablyai/orca/pull/24655)）
- 修复（clipboard）：解码上传的图片时，不再把所有块拼在一起（[@OrcaWin](https://github.com/OrcaWin)，[#24653](https://github.com/stablyai/orca/pull/24653)）
- 修复（mobile）：减少加密文本帧的 base64 分配（[@OrcaWin](https://github.com/OrcaWin)，[#24665](https://github.com/stablyai/orca/pull/24665)）
- 修复（mobile）：合并终端积压时，不再反复扫描不断变长的字符串（[@OrcaWin](https://github.com/OrcaWin)，[#24680](https://github.com/stablyai/orca/pull/24680)）
- 修复（files）：空闲时释放过期的移动端路径清单（[@OrcaWin](https://github.com/OrcaWin)，[#24694](https://github.com/stablyai/orca/pull/24694)）
- 修复（mobile）：编辑 Markdown 时避免反引号匹配数组（[@OrcaWin](https://github.com/OrcaWin)，[#24778](https://github.com/stablyai/orca/pull/24778)）
- 写入失败后删除没有交还的剪贴板缓存文件（[@nwparker](https://github.com/nwparker)，[#24599](https://github.com/stablyai/orca/pull/24599)）
- 避免：移动中继链接已关闭后还重启错误计时器（[@nwparker](https://github.com/nwparker)，[#24567](https://github.com/stablyai/orca/pull/24567)）
- 避免：移动中继配对关闭后再重启错误计时器（[@nwparker](https://github.com/nwparker)，[#24568](https://github.com/stablyai/orca/pull/24568)）
- 跳过：反馈所有者清理之后再做新的移动端 toast（[@nwparker](https://github.com/nwparker)，[#24759](https://github.com/stablyai/orca/pull/24759)）
- 跳过：移动搜索清理之后再做新的旧版文件清单（[@nwparker](https://github.com/nwparker)，[#24792](https://github.com/stablyai/orca/pull/24792)）
- 跳过：移动网页浏览器请求里用不到的图片尺寸计算（[@nwparker](https://github.com/nwparker)，[#24941](https://github.com/stablyai/orca/pull/24941)）
- 构建移动端 Agent 行时复用祖先路径（[@nwparker](https://github.com/nwparker)，[#24539](https://github.com/stablyai/orca/pull/24539)）
- 过滤移动卡片时，每个项目仓库只检查一次（[@nwparker](https://github.com/nwparker)，[#24540](https://github.com/stablyai/orca/pull/24540)）
- 文档：把 Android APK 链接更新到 0.0.52（[@AmethystLiang](https://github.com/AmethystLiang)，[#25107](https://github.com/stablyai/orca/pull/25107)）

#### 浏览器、笔记本与 Computer Use {#v1-4-221-browser-notebooks-computer-use}

> 浏览器标签、屏幕串流、上传和文档预览占用更少内存。关闭笔记本时，会取消仍在启动的内核。

- 修复（browser）：避免再复制一份实时屏幕串流图片（[@OrcaWin](https://github.com/OrcaWin)，[#24851](https://github.com/stablyai/orca/pull/24851)）
- 修复（browser）：避免再复制一份文档预览字节（[@OrcaWin](https://github.com/OrcaWin)，[#24861](https://github.com/stablyai/orca/pull/24861)）
- 修复（browser）：原生暂存之后释放上传缓冲区（[@OrcaWin](https://github.com/OrcaWin)，[#24869](https://github.com/stablyai/orca/pull/24869)）
- 修复（browser）：关闭回放期间释放过期状态（[@OrcaWin](https://github.com/OrcaWin)，[#24892](https://github.com/stablyai/orca/pull/24892)）
- 停止：附加之前复制每一份保留的浏览器页面（[@nwparker](https://github.com/nwparker)，[#24553](https://github.com/stablyai/orca/pull/24553)）
- 跳过：请求已经结束后的渲染器回调（[@nwparker](https://github.com/nwparker)，[#24631](https://github.com/stablyai/orca/pull/24631)）
- 跳过：表面关闭之后迟到的浏览器抓取 toast（[@nwparker](https://github.com/nwparker)，[#24727](https://github.com/stablyai/orca/pull/24727)）
- 修复（notebook）：笔记本关闭时取消仍在启动的内核（[@OrcaWin](https://github.com/OrcaWin)，[#24858](https://github.com/stablyai/orca/pull/24858)）
- 避免：在 Mac 快照里搜索无关的滚动操作（[@nwparker](https://github.com/nwparker)，[#24731](https://github.com/stablyai/orca/pull/24731)）

#### 工作区、侧栏与通知 {#v1-4-221-workspaces-sidebar-notifications}

> 桌面通知可以按机器开关。git 没能删完的 worktree 会留在列表里以便重试。`C:\` 上的 WSL 运行时项目可以删除。子工作区有了快捷键。

- 按机器打开或关闭桌面通知（[@brennanb2025](https://github.com/brennanb2025)，[#24518](https://github.com/stablyai/orca/pull/24518)）
- 修复（worktrees）：git 删到一半失败的 worktree 仍留在列表里，并且可以重试（[@brennanb2025](https://github.com/brennanb2025)，[#23952](https://github.com/stablyai/orca/pull/23952)）
- 修复（filesystem）：在 WSL 运行时的 `C:\` 项目里删除工作区时，不再报 “outside allowed directories”（[@brennanb2025](https://github.com/brennanb2025)，[#24242](https://github.com/stablyai/orca/pull/24242)）
- 修复（worktrees）：git 把同一文件夹报两次时，只列出一次（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24357](https://github.com/stablyai/orca/pull/24357)）
- 新增（sidebar）：可绑定的快捷键，用来显示或隐藏子工作区（[@mmarabel](https://github.com/mmarabel)，[#24165](https://github.com/stablyai/orca/pull/24165)）
- 排序侧栏时，项目活动只读一次（[@nwparker](https://github.com/nwparker)，[#24549](https://github.com/stablyai/orca/pull/24549)）
- 避免：终端移除后清单没变时，仍渲染 Resource Manager（[@nwparker](https://github.com/nwparker)，[#24806](https://github.com/stablyai/orca/pull/24806)）
- 修复（activity）：撤销窗口期间释放无关的编辑器状态（[@OrcaWin](https://github.com/OrcaWin)，[#24838](https://github.com/stablyai/orca/pull/24838)）
- 每个过滤后的列表只准备一次 Activity 搜索查询（[@nwparker](https://github.com/nwparker)，[#24701](https://github.com/stablyai/orca/pull/24701)）
- 跳过：空选择上已经被丢弃的看板裁剪（[@nwparker](https://github.com/nwparker)，[#24782](https://github.com/stablyai/orca/pull/24782)）
- 杂项（worktree）：工作区创建事件带上创建耗时和备用结果（[@brennanb2025](https://github.com/brennanb2025)，[#24483](https://github.com/stablyai/orca/pull/24483)）

#### 编辑器、文件与源码管理 {#v1-4-221-editor-files-source-control}

> 分号 CSV 按列显示。大 Markdown 预览和 Find 保持轻快。搜索会报告完整结果。文件夹被替换后，文件监视会恢复。Create PR 会在已经推送的分支上写 PR 说明。

- 新增（csv-viewer）：识别分号分隔的 CSV（[@kbsali](https://github.com/kbsali)，[#19894](https://github.com/stablyai/orca/pull/19894)）
- 保持：大 Markdown 预览仍然跟手（[@nwparker](https://github.com/nwparker)，[#24880](https://github.com/stablyai/orca/pull/24880)）
- 加快大 Markdown 的 Find，并渲染超大表格（[@nwparker](https://github.com/nwparker)，[#24948](https://github.com/stablyai/orca/pull/24948)）
- 移除：Markdown 解析器补丁，并简化预览处理（[@nwparker](https://github.com/nwparker)，[#24919](https://github.com/stablyai/orca/pull/24919)）
- 修复：Markdown Find 编辑时不再移动光标或视口（[@nwparker](https://github.com/nwparker)，[#25144](https://github.com/stablyai/orca/pull/25144)）
- 修复（markdown）：减少普通文本 Find 的内存（[@OrcaWin](https://github.com/OrcaWin)，[#24635](https://github.com/stablyai/orca/pull/24635)）
- Markdown 预览关闭时，取消审阅动画和计时器（[@nwparker](https://github.com/nwparker)，[#24644](https://github.com/stablyai/orca/pull/24644)）
- 修复（editor）：编辑器空闲时让已保存文件的快照过期（[@OrcaWin](https://github.com/OrcaWin)，[#24657](https://github.com/stablyai/orca/pull/24657)）
- 修复（editor）：保存 LF Markdown 时避免换行匹配数组（[@OrcaWin](https://github.com/OrcaWin)，[#24795](https://github.com/stablyai/orca/pull/24795)）
- 修复（editor）：关闭后释放 Markdown 选区监听器（[@OrcaWin](https://github.com/OrcaWin)，[#24875](https://github.com/stablyai/orca/pull/24875)）
- 减小：在源头按文件名过滤，缩小 Markdown 发现输出（[@nwparker](https://github.com/nwparker)，[#25148](https://github.com/stablyai/orca/pull/25148)）
- 修复：ripgrep 结果完整性、文件名处理和搜索错误（[@nwparker](https://github.com/nwparker)，[#25156](https://github.com/stablyai/orca/pull/25156)）
- 避免：为完整文件清单重复跑 ripgrep 扫描（[@nwparker](https://github.com/nwparker)，[#23490](https://github.com/stablyai/orca/pull/23490)）
- 避免：单行选择时重建可见文件路径（[@nwparker](https://github.com/nwparker)，[#24743](https://github.com/stablyai/orca/pull/24743)）
- 修复（quick-open）：空闲时释放过期的旧版文件清单（[@OrcaWin](https://github.com/OrcaWin)，[#24805](https://github.com/stablyai/orca/pull/24805)）
- 修复（files）：原生失败后替换监视器订阅（[@nwparker](https://github.com/nwparker)，[#24723](https://github.com/stablyai/orca/pull/24723)）
- 修复（files）：浅层目录监视替换失败时重试（[@nwparker](https://github.com/nwparker)，[#24724](https://github.com/stablyai/orca/pull/24724)）
- 修复（git）：避免重复的监视器调和轮询（[@nwparker](https://github.com/nwparker)，[#24725](https://github.com/stablyai/orca/pull/24725)）
- 修复（plugins）：文件夹替换后恢复开发监视器（[@nwparker](https://github.com/nwparker)，[#24726](https://github.com/stablyai/orca/pull/24726)）
- 修复（watchers）：检查替换时保留目录身份（[@nwparker](https://github.com/nwparker)，[#24888](https://github.com/stablyai/orca/pull/24888)）
- 修复（cli）：`orca file open` 像文件资源管理器一样打开 PDF 和其他二进制文件（[@AmethystLiang](https://github.com/AmethystLiang)，[#24445](https://github.com/stablyai/orca/pull/24445)）
- 修复（source-control）：在已就绪的分支上，Create PR 之前先生成 PR 说明（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24215](https://github.com/stablyai/orca/pull/24215)）
- 修复（source-control）：Codex 默认改为 GPT-5.6 Terra low（[@BeamNawapat](https://github.com/BeamNawapat)，[#24495](https://github.com/stablyai/orca/pull/24495)）
- 修复（source-control）：在本地和 SSH 上生成干净的 OpenCode 消息（[@nwparker](https://github.com/nwparker)，[#24613](https://github.com/stablyai/orca/pull/24613)）
- 修复（git）：减少查询，并在不同执行主机之间保留数据（[@nwparker](https://github.com/nwparker)，[#24602](https://github.com/stablyai/orca/pull/24602)）
- 性能（git）：复用查询，并停止已取消的目录扫描（[@nwparker](https://github.com/nwparker)，[#24923](https://github.com/stablyai/orca/pull/24923)）
- 跳过：结果已经被丢弃之后的 diff 分析（[@nwparker](https://github.com/nwparker)，[#24711](https://github.com/stablyai/orca/pull/24711)）
- 获取被替换时，取消插件重试计时器（[@nwparker](https://github.com/nwparker)，[#24700](https://github.com/stablyai/orca/pull/24700)）

#### 任务、议题与自动化 {#v1-4-221-tasks-issues-automations}

> Jira 搜索接受普通词语。Fork 的议题留在你选中的仓库里。工作项刷新没有变化时，应用不再把一切重新检查一遍。关闭的 Jira 页面和自动化行会释放内存。

- 修复（jira）：任务搜索输入不是 JQL 时，按普通文本搜索（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#22900](https://github.com/stablyai/orca/pull/22900)）
- 保持：Fork 议题的详情和编辑留在选中的仓库（[@nwparker](https://github.com/nwparker)，[#24729](https://github.com/stablyai/orca/pull/24729)）
- 跳过：刷新后的工作项没有变化时，不再通知存储（[@nwparker](https://github.com/nwparker)，[#24530](https://github.com/stablyai/orca/pull/24530)）
- 修复（jira）：空闲时让缓存的附件图片过期（[@OrcaWin](https://github.com/OrcaWin)，[#24678](https://github.com/stablyai/orca/pull/24678)）
- 修复（jira）：关闭议题后丢弃详情回复（[@OrcaWin](https://github.com/OrcaWin)，[#24835](https://github.com/stablyai/orca/pull/24835)）
- 修复（automations）：从仪表盘行释放未使用的运行输出（[@OrcaWin](https://github.com/OrcaWin)，[#24847](https://github.com/stablyai/orca/pull/24847)）

#### 会话历史 {#v1-4-221-session-history}

> 已保存的 Agent 对话加载和搜索更省内存。很大的历史缓存不再让 Orca 停顿。

- 限制：限制 AI Vault 缓存加载，并让原子保存保持响应（[@nwparker](https://github.com/nwparker)，[#24789](https://github.com/stablyai/orca/pull/24789)）
- 搜索已保存的 Agent 对话时复用预编译读取（[@nwparker](https://github.com/nwparker)，[#24535](https://github.com/stablyai/orca/pull/24535)）
- 修复（ai-vault）：拼接消息块之前限制转录文本（[@OrcaWin](https://github.com/OrcaWin)，[#24659](https://github.com/stablyai/orca/pull/24659)）
- 修复（ai-vault）：空闲时释放过期的主机结果（[@OrcaWin](https://github.com/OrcaWin)，[#24766](https://github.com/stablyai/orca/pull/24766)）
- 在中继 worker 里丢弃已完成的 AI Vault 取消 ID（[@nwparker](https://github.com/nwparker)，[#24820](https://github.com/stablyai/orca/pull/24820)）
- 解码完整转录行时不再复制其字节（[@nwparker](https://github.com/nwparker)，[#24546](https://github.com/stablyai/orca/pull/24546)）
- 解码单段已保存会话尾部时不再复制（[@nwparker](https://github.com/nwparker)，[#24632](https://github.com/stablyai/orca/pull/24632)）
- 重构（ai-vault）：删除未使用的会话扫描 worker 线程（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24607](https://github.com/stablyai/orca/pull/24607)）

#### 更新与可靠性 {#v1-4-221-updates-reliability}

> 在 macOS 上，Update & Restart 不再关掉 Orca 后一直等后台 Orca 服务器。空闲的更新器和语音计时器会被释放。

- 修复（updater）：后台实例挡住更新时，macOS 上的 Orca 保持打开（[@OrcaWin](https://github.com/OrcaWin)，[#24952](https://github.com/stablyai/orca/pull/24952)）
- 释放已完成的更新器准备计时器和回调（[@nwparker](https://github.com/nwparker)，[#24920](https://github.com/stablyai/orca/pull/24920)）
- 出错和退出后清掉未使用的语音 worker 计时器（[@nwparker](https://github.com/nwparker)，[#24924](https://github.com/stablyai/orca/pull/24924)）

#### 中继服务 {#v1-4-221-relay-service}

> Orca 中继和推送服务的服务端清理。

- 主机连接离开时释放中继握手计时器（[@nwparker](https://github.com/nwparker)，[#24554](https://github.com/stablyai/orca/pull/24554)）
- 租用推送投递时复用已解析的通知（[@nwparker](https://github.com/nwparker)，[#24645](https://github.com/stablyai/orca/pull/24645)）

#### 测试、CI 与维护 {#v1-4-221-tests-ci-maintenance}

> 从较旧代码切出的补丁版本也能发布构建。CI 在准备和等待上花的时间更少。若干不稳定测试已修复。

- CI（release）：对早于 orcad 模板的 tag 跳过该模板（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24872](https://github.com/stablyai/orca/pull/24872)）
- CI（release）：跳过 orcad 模板之后仍然发布（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24882](https://github.com/stablyai/orca/pull/24882)）
- 移动：在 runner 退役前把 ARM Mac CI 迁到 macOS 15（[@nwparker](https://github.com/nwparker)，[#24760](https://github.com/stablyai/orca/pull/24760)）
- 允许：Windows ARM CI 上冷启动 node-pty 准备（[@nwparker](https://github.com/nwparker)，[#24997](https://github.com/stablyai/orca/pull/24997)）
- 让 ARM SSH 准备和彼此独立的观察等待重叠进行（[@nwparker](https://github.com/nwparker)，[#24714](https://github.com/stablyai/orca/pull/24714)）
- 跳过：已知无头构建输入的依赖安装（[@nwparker](https://github.com/nwparker)，[#24716](https://github.com/stablyai/orca/pull/24716)）
- 避免：在纯 Node 构建守卫里反复扫描共享 chunk（[@nwparker](https://github.com/nwparker)，[#24717](https://github.com/stablyai/orca/pull/24717)）
- 静态遍历时复用已发现的移动端 chunk（[@nwparker](https://github.com/nwparker)，[#24774](https://github.com/stablyai/orca/pull/24774)）
- 修复（ci）：移动端类型检查期间避免并发的 pnpm 刷新（[@nwparker](https://github.com/nwparker)，[#24776](https://github.com/stablyai/orca/pull/24776)）
- 一次遍历选出最新的稳定发布 tag（[@nwparker](https://github.com/nwparker)，[#24786](https://github.com/stablyai/orca/pull/24786)）
- 在 Alpine CI 里复用 pnpm 校验记录（[@nwparker](https://github.com/nwparker)，[#24817](https://github.com/stablyai/orca/pull/24817)）
- 减小：定时 CI 缓存预热改为每六小时一次（[@nwparker](https://github.com/nwparker)，[#24881](https://github.com/stablyai/orca/pull/24881)）
- 跳过：CI 里较慢的 Windows 根包存储恢复（[@nwparker](https://github.com/nwparker)，[#24885](https://github.com/stablyai/orca/pull/24885)）
- 跳过：Linux PR 任务里较慢的根包存储恢复（[@nwparker](https://github.com/nwparker)，[#24896](https://github.com/stablyai/orca/pull/24896)）
- 跳过：macOS PR 任务里较慢的根包存储恢复（[@nwparker](https://github.com/nwparker)，[#24908](https://github.com/stablyai/orca/pull/24908)）
- 避免：缓存生产者重复下载 pnpm 归档（[@nwparker](https://github.com/nwparker)，[#24927](https://github.com/stablyai/orca/pull/24927)）
- 在托管的根 CI 里自动使用测得的 pnpm 查找策略（[@nwparker](https://github.com/nwparker)，[#24951](https://github.com/stablyai/orca/pull/24951)）
- 复用无头检测器编译器，不再安装全部依赖（[@nwparker](https://github.com/nwparker)，[#24895](https://github.com/stablyai/orca/pull/24895)）
- 停止：让模拟的渲染器导入影响合格的无头 CI（[@nwparker](https://github.com/nwparker)，[#24902](https://github.com/stablyai/orca/pull/24902)）
- 让彼此独立的 Linux 无头运行时构建重叠进行（[@nwparker](https://github.com/nwparker)，[#24910](https://github.com/stablyai/orca/pull/24910)）
- 当前 Terminal Perf 运行复用更快的 Electron 准备（[@nwparker](https://github.com/nwparker)，[#24968](https://github.com/stablyai/orca/pull/24968)）
- 共享 PR 预检准备，降低 runner 需求（[@nwparker](https://github.com/nwparker)，[#25150](https://github.com/stablyai/orca/pull/25150)）
- 校验共享预检选择，并记录完整的单元测试耗时（[@nwparker](https://github.com/nwparker)，[#25239](https://github.com/stablyai/orca/pull/25239)）
- 全量单元测试失败时收集测试选择证据（[@nwparker](https://github.com/nwparker)，[#24955](https://github.com/stablyai/orca/pull/24955)）
- 缩短存储、Git 争用和就绪测试的 CI 时间（[@nwparker](https://github.com/nwparker)，[#25147](https://github.com/stablyai/orca/pull/25147)）
- 减小：终端测试开销，同时保留完整的对等检查（[@nwparker](https://github.com/nwparker)，[#25151](https://github.com/stablyai/orca/pull/25151)）
- 避免：CI 里重复导入运行时和重复播种恢复夹具（[@nwparker](https://github.com/nwparker)，[#25155](https://github.com/stablyai/orca/pull/25155)）
- 减小：单元测试等待、字节比较和导入开销（[@nwparker](https://github.com/nwparker)，[#25187](https://github.com/stablyai/orca/pull/25187)）
- 分片选择校验期间，已发现的测试文件只索引一次（[@nwparker](https://github.com/nwparker)，[#24532](https://github.com/stablyai/orca/pull/24532)）
- 检查变更代码诊断时，基准源只规范化一次（[@nwparker](https://github.com/nwparker)，[#24557](https://github.com/stablyai/orca/pull/24557)）
- 停止：在测试规划器里构建用不到的导入候选（[@nwparker](https://github.com/nwparker)，[#24611](https://github.com/stablyai/orca/pull/24611)）
- CPU 采样失败时清掉 watchdog 基准心跳（[@nwparker](https://github.com/nwparker)，[#24802](https://github.com/stablyai/orca/pull/24802)）
- 跳过：文档搜索结果里不可能的链接和标签匹配（[@nwparker](https://github.com/nwparker)，[#24646](https://github.com/stablyai/orca/pull/24646)）
- 结果导航时复用文档搜索摘录（[@nwparker](https://github.com/nwparker)，[#24574](https://github.com/stablyai/orca/pull/24574)）
- 修复（tests）：用当前代码跑监视器崩溃测试夹具（[@nwparker](https://github.com/nwparker)，[#24705](https://github.com/stablyai/orca/pull/24705)）
- 测试：数据库拆卸前取消日志导入采样器（[@nwparker](https://github.com/nwparker)，[#24767](https://github.com/stablyai/orca/pull/24767)）
- 等待：测试超时前，先等真正的备份 worker 就绪（[@nwparker](https://github.com/nwparker)，[#24793](https://github.com/stablyai/orca/pull/24793)）
- 测试：用已提交的捕获重放 OpenCode 重绘（[@nwparker](https://github.com/nwparker)，[#24811](https://github.com/stablyai/orca/pull/24811)）
- 在模拟的 Codex 测试里推进完整关闭截止时间（[@nwparker](https://github.com/nwparker)，[#24893](https://github.com/stablyai/orca/pull/24893)）
- 推进模拟的 Claude 子进程退出截止时间（[@nwparker](https://github.com/nwparker)，[#24897](https://github.com/stablyai/orca/pull/24897)）
- 测试：恢复 fish 终端夹具的启动前提（[@nwparker](https://github.com/nwparker)，[#24947](https://github.com/stablyai/orca/pull/24947)）
- 允许：检查已退役缓存归属前，先等垃圾回收稳定（[@nwparker](https://github.com/nwparker)，[#24967](https://github.com/stablyai/orca/pull/24967)）
- 等待：删除目录前，先等移除夹具持久化（[@nwparker](https://github.com/nwparker)，[#24977](https://github.com/stablyai/orca/pull/24977)）
- 修复（ci）：E2E 检查要求精确的 shell 和 SSH 包名（[@nwparker](https://github.com/nwparker)，[#24995](https://github.com/stablyai/orca/pull/24995)）
- 修复（ci）：等待片段导航策略报告（[@nwparker](https://github.com/nwparker)，[#25017](https://github.com/stablyai/orca/pull/25017)）
- 测试（windows）：记录原生 PTY 压力测试的生命周期节点（[@nwparker](https://github.com/nwparker)，[#25042](https://github.com/stablyai/orca/pull/25042)）
- CI：聊天发送构建器或 RPC 请求路径变化时，跑跨版本测试（[@brennanb2025](https://github.com/brennanb2025)，[#25061](https://github.com/stablyai/orca/pull/25061)）
- 重构（cursor）：把桌面登录读取挪到共享的外部 SQLite 读取 worker（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24603](https://github.com/stablyai/orca/pull/24603)）
- 用统一的 removeAgentArgs 取代 agentArgsOverride（[@AmethystLiang](https://github.com/AmethystLiang)，[#25091](https://github.com/stablyai/orca/pull/25091)）
- 重构（orchestration）：六种 Agent 对 Agent 发送收成一个函数（[@brennanb2025](https://github.com/brennanb2025)，[#24901](https://github.com/stablyai/orca/pull/24901)）
- 删除 docs/reference/jcode-hook-events.md（[@nwparker](https://github.com/nwparker)，[#25288](https://github.com/stablyai/orca/pull/25288)）

### 新贡献者 {#v1-4-221-contributors}

- [@kbsali](https://github.com/kbsali) 首次贡献于 [#19894](https://github.com/stablyai/orca/pull/19894)
- [@BeamNawapat](https://github.com/BeamNawapat) 首次贡献于 [#24495](https://github.com/stablyai/orca/pull/24495)
- [@NicholasTing](https://github.com/NicholasTing) 首次贡献于 [#25135](https://github.com/stablyai/orca/pull/25135)

---

**完整变更对照：** [v1.4.220...v1.4.221](https://github.com/stablyai/orca/compare/v1.4.220...v1.4.221)

## v1.4.220 Native Chat 的 Stop 会结束进程，SSH 可选自带运行时 {#v1-4-220}

2026年10月4日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.220)

感谢使用 Orca，也感谢一直以来的支持。

这个补丁基于 10 月 2 日的 daily build，并拣入了 main 上的修复。那之后合入 main 的 pull request 不在这次构建里。

### 简要说明 {#v1-4-220-short}

**Native Chat（实验性）：** **Stop** 会结束 Claude 的进程，包括后台命令和子 Agent。Codex 拒绝或一直不应答停止请求时，Orca 也会结束它。未发送的消息保持未发送，直到 Retry；被插入的消息不会重复发送；被打断的回合状态更清楚。

**聊天打磨：** `/clear` 会立刻切换聊天，第一条消息才启动新 Agent。Codex 连接重试只更新一条警告，不再堆叠错误。可以把 AI 笔记发到已打开的聊天。较旧的 Orca 会把更新的聊天历史保留为只读。

**Agent 状态：** Esc 取消会及时收尾 Codex 窗格；用来复制或离开 `/side` 的 Ctrl+C 不再看起来像中断。OpenCode 会正确显示失败和已停止的回合。慢的 SSH 连接不再让 Agent 看起来消失了。

**用量：** Antigravity 显示自己的额度，不需要 Gemini CLI 登录，也不会为了检查而消耗额度。Cursor 登录检查不再在大数据库上冻住，也不会把被拒绝的用量请求误当成登录过期。

**工作区：** 大仓库里创建更快，删除不再卡住聊天或文件，后台完成的工作区不再切换你的视图。本地 `main` 更新更安全，侧栏主机标签可以隐藏。

**SSH 主机：** 可选的 Orca 运行时不需要主机上的 Node、npm 或编译器；**Auto** 仍是默认。标准 Windows SSH 账户可用，终端重连期间输入的按键会保留。

**截图拖放：** Mac 截图缩略图现在可以拖进本地 Claude Code 终端或新建工作区输入框。Orca 会给 Agent 一份可读的临时图片副本；以前有些拖放看起来成功，截图却没到 Claude Code。

**终端与文件：** macOS 的 Option 快捷键能到达终端程序，后台终端回到原来的标签，宽的已配对服务器窗格用满宽度。超大 Markdown 预览不再冻住 Orca；审阅笔记的可见性和 shell 文件高亮已修复。

**稳定性与工具：** Orca 能从若干 Linux 和 Windows 崩溃循环中恢复，并重试失败的窗口启动。Windows 上第一条浏览器命令不再挂起，iOS 模拟器可配合 Xcode 27，`orca file open` 保持当前视图，除非传入 `--focus`。

这次更新之前打开的终端仍使用原来的后台服务；新开的终端使用新的。

### 已知问题 {#v1-4-220-known-issues}

**Windows on ARM：** ARM64 包装的是 x64 的 `orca.exe` 命令行工具。Windows 11 on ARM 会用模拟运行它。Windows 10 on ARM 跑不了，所以那里的 `orca` 命令不可用（#24094）。

**OpenCode 2：** 更新前就已经在跑的 OpenCode 2 窗格，可能要在里面重启 OpenCode 之后才有状态。这次更新之后如果降级 Orca，会留下重复的 OpenCode 状态插件。`opencode run` 退出后，窗格可能一直显示 “Done”；修复还在 #24472。

**Codex：** 升级之后，在 Codex 批准 Orca 的新状态 hook 之前，Codex 启动会使用 Orca 托管的 Codex home。使用 `~/.codex` 的已恢复窗格最多可能停顿 30 秒（#23552）。

**Claude 文件夹信任：** 文件夹预信任默认开启（Settings → Agents → “Trust the folder when Orca starts an agent”）。在 Alpine WSL 上，Orca 复制不了所需的文件权限，所以 Claude 仍会显示自己的信任提示（#23744）。

---

### 产品体验 {#v1-4-220-product}

#### Native Chat {#v1-4-220-native-chat}

> 实验性结构化聊天能可靠停止，不会发出已经告诉你未发送的消息，如实报告崩溃回合，较旧的 Orca 打开时也会保留历史。

- 修复（claude）：Stop 会结束 Claude 的进程，下一条消息再恢复对话（[@brennanb2025](https://github.com/brennanb2025)，[#24235](https://github.com/stablyai/orca/pull/24235)）
- 修复（native-chat）：Codex 拒绝或一直不应答 Stop 时，结束 Codex 进程（[@brennanb2025](https://github.com/brennanb2025)，[#24334](https://github.com/stablyai/orca/pull/24334)）
- 修复（native-chat）：Stop 的退出无法确认时，下一条消息改为重试停止，而不是直接失败（[@brennanb2025](https://github.com/brennanb2025)，[#24333](https://github.com/stablyai/orca/pull/24333)）
- 修复（native-chat）：Stop 的停顿从聊天历史推算，因此被插入的消息不会再次发送（[@brennanb2025](https://github.com/brennanb2025)，[#24072](https://github.com/stablyai/orca/pull/24072)）
- 修复（native-chat）：聊天标明未发送的消息，之后不会自己发出去（[@brennanb2025](https://github.com/brennanb2025)，[#24232](https://github.com/stablyai/orca/pull/24232)）
- 修复（native-chat）：Orca 重启后 Stop 仍算你的操作，因为回合结束会读取 Stop 事件（[@brennanb2025](https://github.com/brennanb2025)，[#24311](https://github.com/stablyai/orca/pull/24311)）
- 修复（agent-status）：被崩溃切断的回合显示 Interrupted，未能证实的结束显示 Couldn't confirm（[@brennanb2025](https://github.com/brennanb2025)，[#23467](https://github.com/stablyai/orca/pull/23467)）
- 修复（claude）：结束 Claude 已开始但从未确认的消息，并在它持有消息时保持 Claude 运行（[@brennanb2025](https://github.com/brennanb2025)，[#23898](https://github.com/stablyai/orca/pull/23898)）
- 修复（codex）：按名称把回合中途的发送插入正在进行的回合（[@brennanb2025](https://github.com/brennanb2025)，[#21062](https://github.com/stablyai/orca/pull/21062)）
- 修复（native-chat）：每一次聊天操作按钮都是独立动作（在 main 上重新合入 #23916）（[@brennanb2025](https://github.com/brennanb2025)，[#24301](https://github.com/stablyai/orca/pull/24301)）
- 修复（native-chat）：/clear 本身不启动任何东西；新聊天的第一条消息才启动 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#23935](https://github.com/stablyai/orca/pull/23935)）
- 修复（native-chat）：聊天失败信息使用应用当前语言（[@brennanb2025](https://github.com/brennanb2025)，[#23674](https://github.com/stablyai/orca/pull/23674)）
- 修复（native-chat）：Codex 流重试只占一行警告，并就地更新（[@brennanb2025](https://github.com/brennanb2025)，[#23684](https://github.com/stablyai/orca/pull/23684)）
- 修复（native-chat）：失败的 Codex 回合显示错误，而不是原始 thread-status 行（[@brennanb2025](https://github.com/brennanb2025)，[#23704](https://github.com/stablyai/orca/pull/23704)）
- 修复（claude）：说明性笔记按原文显示为警告行，不再是原始帧行（[@brennanb2025](https://github.com/brennanb2025)，[#24471](https://github.com/stablyai/orca/pull/24471)）
- 修复（native-chat）：工作行只显示 Agent 此刻正在做什么（[@brennanb2025](https://github.com/brennanb2025)，[#24218](https://github.com/stablyai/orca/pull/24218)）
- 修复（native-chat）：空闲聊天按正在运行的 Agent 列出模型，不再冒出多余的 effort 选择器（[@brennanb2025](https://github.com/brennanb2025)，[#24267](https://github.com/stablyai/orca/pull/24267)）
- 新增（native-chat）：聊天条和侧栏读取主机上的子记录（[@brennanb2025](https://github.com/brennanb2025)，[#22614](https://github.com/stablyai/orca/pull/22614)）
- 新增（native-chat）：把 Codex 默认模式助手注册为子 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#22619](https://github.com/stablyai/orca/pull/22619)）
- 修复（notes）：把 AI 笔记发到已打开的结构化聊天会话（[@brennanb2025](https://github.com/brennanb2025)，[#24221](https://github.com/stablyai/orca/pull/24221)）
- 修复（native-chat）：已配对服务器按客户端能力接纳结构化聊天，而不是按自己的聊天设置（[@brennanb2025](https://github.com/brennanb2025)，[#24203](https://github.com/stablyai/orca/pull/24203)）
- 修复（native-chat）：较旧的 Orca 遇到更新的行类型时，把聊天保持为只读，而不是删掉其余历史（[@brennanb2025](https://github.com/brennanb2025)，[#24477](https://github.com/stablyai/orca/pull/24477)）
- 修复（native-chat）：启动时聊天租约保存失败，不再把应用打进 “Session restore failed”（[@brennanb2025](https://github.com/brennanb2025)，[#23964](https://github.com/stablyai/orca/pull/23964)）
- 重构（native-chat）：把 Agent 会话记录放进聊天日志数据库（[@brennanb2025](https://github.com/brennanb2025)，[#24006](https://github.com/stablyai/orca/pull/24006)）
- 重构（native-chat）：结构化聊天失败总会写进诊断日志（[@brennanb2025](https://github.com/brennanb2025)，[#24312](https://github.com/stablyai/orca/pull/24312)）
#### Codex 与编排 {#v1-4-220-codex-orchestration}

> 用 Esc 取消或按 Ctrl+C 复制时 Codex 窗格会收尾；编排能判断 Antigravity、Cline 和 Prime Agent 是否就绪；聊天 Agent 可以知道自己的 Orca 会话 ID。

- 修复（codex）：安装 Codex 的 Interrupt hook，使 Esc 取消的回合能收尾（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24332](https://github.com/stablyai/orca/pull/24332)）
- 改动：修正用 Ctrl+C 复制以及离开侧栏聊天后的 Codex 状态（[@nwparker](https://github.com/nwparker)，[#24339](https://github.com/stablyai/orca/pull/24339)）
- 新增（orchestration）：告诉每个 Agent 自己的编排地址（[@brennanb2025](https://github.com/brennanb2025)，[#22636](https://github.com/stablyai/orca/pull/22636)）
- 修复（orchestration）：Agent 看到的 Orca 会话 ID 统一叫 orca_session_id（[@brennanb2025](https://github.com/brennanb2025)，[#24230](https://github.com/stablyai/orca/pull/24230)）
- 修复（runtime）：从实时画面读取 Antigravity、Cline 和 Prime Agent 是否就绪（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24222](https://github.com/stablyai/orca/pull/24222)）
- 重构（runtime）：用同一引擎从 JSON 规则文件读取四个 Agent 的就绪状态（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24348](https://github.com/stablyai/orca/pull/24348)）
- 重构（runtime）：从规则文件读取 Codex、Claude、OpenCode、Pi、OMP 和 Gemini 的就绪状态（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24375](https://github.com/stablyai/orca/pull/24375)）
- 修复（runtime）：对 hook 覆盖整个回合的 Agent，按 hook 状态收尾 tui-idle（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24388](https://github.com/stablyai/orca/pull/24388)）
- 修复（cli）：orca file open 不再移动当前视图，除非传入 --focus（[@brennanb2025](https://github.com/brennanb2025)，[#24244](https://github.com/stablyai/orca/pull/24244)）
#### Agent 与 Agent 集成 {#v1-4-220-agents-agent-integrations}

> Antigravity 和 Cursor 的用量显示真实数字，OpenCode 会显示失败和已停止的回合，Orca 只是检查不到时不再把 Agent 标成已退出。

- 修复（agent-status）：进程检查无法回答时保留 hook 在场状态（三步中的第一步）（[@brennanb2025](https://github.com/brennanb2025)，[#23947](https://github.com/stablyai/orca/pull/23947)）
- 修复（opencode）：保留回合结果，并避免自动权限引起的注意提示（[@nwparker](https://github.com/nwparker)，[#24612](https://github.com/stablyai/orca/pull/24612)）
- 修复（opencode）：会话存储不存在时保持安静（[@nwparker](https://github.com/nwparker)，[#24577](https://github.com/stablyai/orca/pull/24577)）
- 修复（rate-limits）：从 agy CLI 读取真实的 Antigravity 额度，而不是 Gemini 镜像（[@nwparker](https://github.com/nwparker)，[#24073](https://github.com/stablyai/orca/pull/24073)）
- 修复（status-bar）：显示 Antigravity 的模型组额度池，而不是空段（[@nwparker](https://github.com/nwparker)，[#24074](https://github.com/stablyai/orca/pull/24074)）
- 修复（antigravity）：按 CLI 版本和用量偏好决定是否读取免费额度（[@nwparker](https://github.com/nwparker)，[#24593](https://github.com/stablyai/orca/pull/24593)）
- 修复（antigravity）：从 CLI 全局配置目录发现 skills（[@nwparker](https://github.com/nwparker)，[#24592](https://github.com/stablyai/orca/pull/24592)）
- 修复（antigravity）：POSIX hook 经 sh 启动，并限制 JSON stdin 大小（[@nwparker](https://github.com/nwparker)，[#24596](https://github.com/stablyai/orca/pull/24596)）
- 修复（cursor）：在主线程之外读取桌面登录状态（[@nwparker](https://github.com/nwparker)，[#24572](https://github.com/stablyai/orca/pull/24572)）
- 修复（cursor）：把用量失败和登录过期区分开（[@nwparker](https://github.com/nwparker)，[#24575](https://github.com/stablyai/orca/pull/24575)）
- 修复（cursor）：Windows hook 传输保留 UTF-8（[@nwparker](https://github.com/nwparker)，[#24585](https://github.com/stablyai/orca/pull/24585)）
- 修复（dsh）：支持 0.2 的位置参数 profile，以及首次工作区启动（[@nwparker](https://github.com/nwparker)，[#24589](https://github.com/stablyai/orca/pull/24589)）
- 修复（ai-vault）：按 ZCode 存储的转录顺序读取（[@nwparker](https://github.com/nwparker)，[#24584](https://github.com/stablyai/orca/pull/24584)）
#### 终端 {#v1-4-220-terminal}

> Mac 截图缩略图拖进本地终端或新建工作区输入框后，Claude Code 能读到。宽窗格用满宽度，ABC 键盘的 Option 快捷键可用，OpenCode 标签响应点击，后台终端回到自己的标签。

- 改动：修正宽窗格上终端宽度被截断的问题（[@nwparker](https://github.com/nwparker)，[#24687](https://github.com/stablyai/orca/pull/24687)）
- 改动：在 Auto 模式下为 ABC 键盘启用 Option 快捷键（[@nwparker](https://github.com/nwparker)，[#24528](https://github.com/stablyai/orca/pull/24528)）
- 修复（terminal）：单窗格 OpenCode 的标签点击能穿过拖拽条（[@nwparker](https://github.com/nwparker)，[#24591](https://github.com/stablyai/orca/pull/24591)）
- 修复（terminal）：重绘行里补上 OpenCode 的 DOM 方块字形（[@nwparker](https://github.com/nwparker)，[#24582](https://github.com/stablyai/orca/pull/24582)）
- 修复（terminal）：把后台终端重新挂回自己的标签，而不是再开一个重复标签（[@brennanb2025](https://github.com/brennanb2025)，[#24458](https://github.com/stablyai/orca/pull/24458)）
- 修复（terminal）：停止把空渲染排进停车队列，以免删除 worktree 时触发 React #185（[@OrcaWin](https://github.com/OrcaWin)，[#23636](https://github.com/stablyai/orca/pull/23636)）
- 修复（drop）：把临时 Mac 截图拖进本地终端或新建工作区输入框时，让 Claude Code 能读到（[@AmethystLiang](https://github.com/AmethystLiang)，[#24009](https://github.com/stablyai/orca/pull/24009)）
#### SSH 与远程主机 {#v1-4-220-ssh-remote-hosts}

> SSH 主机可以用 Orca 自带的 Node 运行 Orca，因此不需要 Node、npm 或编译器；标准账户的 Windows SSH 主机可用；重连期间的输入不再丢失。

- 新增（ssh）：中继运行时回退阶梯、遥测，以及主机运行时设置（[@OrcaWin](https://github.com/OrcaWin)，[#24133](https://github.com/stablyai/orca/pull/24133)）
- 新增（ssh）：可选用固定 Node 上的 SSH 中继，并带预编译插件（[@OrcaWin](https://github.com/OrcaWin)，[#24129](https://github.com/stablyai/orca/pull/24129)）
- 新增（ssh）：在 Windows SSH 主机上使用固定 Node 中继（[@OrcaWin](https://github.com/OrcaWin)，[#24135](https://github.com/stablyai/orca/pull/24135)）
- 新增（ssh）：增加 glibc 2.17 兼容运行时这一档；远程保险库要求主机有 node:sqlite（[@OrcaWin](https://github.com/OrcaWin)，[#24148](https://github.com/stablyai/orca/pull/24148)）
- 新增（ssh）：没有任何 Orca 运行时可用时，仍可使用普通 SSH 终端和 SFTP 浏览（[@OrcaWin](https://github.com/OrcaWin)，[#24147](https://github.com/stablyai/orca/pull/24147)）
- 新增（ssh）：生产环境回收运行时存储，并增加 exec-stdin 上传回退（[@OrcaWin](https://github.com/OrcaWin)，[#24136](https://github.com/stablyai/orca/pull/24136)）
- 修复（ssh）：只在确认已退出时收集中继版本；回收 runtimes/ 存储（[@OrcaWin](https://github.com/OrcaWin)，[#24130](https://github.com/stablyai/orca/pull/24130)）
- 修复（ssh）：Windows 主机不再依赖 Add-Type 暂存；Windows 上回收运行时存储（[@OrcaWin](https://github.com/OrcaWin)，[#24149](https://github.com/stablyai/orca/pull/24149)）
- 修复（ssh）：在 sshd 的作业之外启动 Windows 中继，使标准用户可用（[@OrcaWin](https://github.com/OrcaWin)，[#24224](https://github.com/stablyai/orca/pull/24224)）
- 修复（ssh）：恢复的 SSH 终端重新挂接期间，保留已经输入的按键（[@OrcaWin](https://github.com/OrcaWin)，[#24166](https://github.com/stablyai/orca/pull/24166)）
- 修复（relay）：把 EPIPE/ECONNRESET 写失败视为客户端已离开（[@OrcaWin](https://github.com/OrcaWin)，[#24209](https://github.com/stablyai/orca/pull/24209)）
- 修复（ssh）：中继没有 node-pty 时，指出缺少哪些构建工具（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#22670](https://github.com/stablyai/orca/pull/22670)）
- 修复（ai-vault）：远程 SQLite 探测要求 node:sqlite 支持备份（[@OrcaWin](https://github.com/OrcaWin)，[#24086](https://github.com/stablyai/orca/pull/24086)）
- 新增（ai-vault）：用固定 Node 读取远程 OpenCode 历史；去掉 Bun（[@OrcaWin](https://github.com/OrcaWin)，[#24128](https://github.com/stablyai/orca/pull/24128)）
- 新增（orcad）：让 orcad 跑在固定 Node 上，而不是 Bun（[@OrcaWin](https://github.com/OrcaWin)，[#24110](https://github.com/stablyai/orca/pull/24110)）
- 重构（orcad）：让配置备份和预检与具体运行时无关（[@OrcaWin](https://github.com/OrcaWin)，[#24088](https://github.com/stablyai/orca/pull/24088)）
- 构建（orcad）：服务器 node-pty 槽位使用 glibc 2.28，另加 glibc 2.17 兼容槽位（[@OrcaWin](https://github.com/OrcaWin)，[#24134](https://github.com/stablyai/orca/pull/24134)）
- 新增（packaging）：桌面构建附带 orcad 服务器模板（[@OrcaWin](https://github.com/OrcaWin)，[#24155](https://github.com/stablyai/orca/pull/24155)）
#### 移动应用与已配对客户端 {#v1-4-220-mobile-app-paired-clients}

> 手机页面在屏幕之间滑动，iOS 输入框又能打字，按住的按钮继续有效，OpenCode 不再把手机终端留成空白。

- 新增（mobile）：页面在前进和返回时滑动宿主栈（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24268](https://github.com/stablyai/orca/pull/24268)）
- 修复（mobile）：iOS 外壳保持 WebKit 文本交互，页面输入框可以打字（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24270](https://github.com/stablyai/orca/pull/24270)）
- 修复（mobile）：按住听写、重复按键和浏览器长按，不再被页面长按吃掉（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24277](https://github.com/stablyai/orca/pull/24277)）
- 改动：修复移动终端引擎里 OpenCode 启动解析器崩溃（[@nwparker](https://github.com/nwparker)，[#24626](https://github.com/stablyai/orca/pull/24626)）
- 改动：移动端打包时保留 Mermaid 导出（[@nwparker](https://github.com/nwparker)，[#24661](https://github.com/stablyai/orca/pull/24661)）
- 改动：已配对浏览器的终端插入位置遵循主机请求（[@nwparker](https://github.com/nwparker)，[#24676](https://github.com/stablyai/orca/pull/24676)）
- 修复（mobile）：随版本发布 Android APK 的大小和校验和（[@nwparker](https://github.com/nwparker)，[#24037](https://github.com/stablyai/orca/pull/24037)）
#### 浏览器与模拟器 {#v1-4-220-browser-emulator}

> Annotate page element 有快捷键，Windows 上第一条浏览器命令不再挂起，iOS 模拟器可配合 Xcode 27。

- 新增（browser）：为 Annotate page element 增加可重绑定快捷键（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23879](https://github.com/stablyai/orca/pull/23879)）
- 修复（browser）：新 Windows 标签上的第一条浏览器命令不再一直挂起直到失败（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24237](https://github.com/stablyai/orca/pull/24237)）
- 修复（emulator）：采用 serve-sim 0.1.47，使 iOS 模拟器在 Xcode 27 上可用（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24228](https://github.com/stablyai/orca/pull/24228)）
#### 工作区与侧栏 {#v1-4-220-workspaces-sidebar}

> 完成后的工作区不再把你从当前位置拉走，删除 worktree 不再卡住应用，大仓库里创建更快，卡片上的主机标签可以关掉。

- 修复（worktrees）：创建完成后不再把你从已切换到的工作区拉走（[@brennanb2025](https://github.com/brennanb2025)，[#23974](https://github.com/stablyai/orca/pull/23974)）
- 修复（worktrees）：让 git 删除已移除的 checkout，聊天发送不再等在它们后面（[@brennanb2025](https://github.com/brennanb2025)，[#23837](https://github.com/stablyai/orca/pull/23837)）
- 修复（worktree）：与 checkout 一起、每个分支只更新一次本地 main，并且更安全（[@brennanb2025](https://github.com/brennanb2025)，[#23698](https://github.com/stablyai/orca/pull/23698)）
- 修复（worktrees）：大仓库里保持创建速度（[@nwparker](https://github.com/nwparker)，[#24346](https://github.com/stablyai/orca/pull/24346)）
- 新增（sidebar）：允许按卡片关掉主机标签（[@nwparker](https://github.com/nwparker)，[#24299](https://github.com/stablyai/orca/pull/24299)）
- 改动：用更大的尺寸和不透明度提高滚动指示器可见性（[@AmethystLiang](https://github.com/AmethystLiang)，[#24276](https://github.com/stablyai/orca/pull/24276)）
#### 编辑器、文件与源码管理 {#v1-4-220-editor-files-source-control}

> 超大 Markdown 预览不再冻住 Orca，Review Notes 设置生效，shell 点文件有颜色，提交说明和时间更好读。

- 修复（markdown）：限制大型 Markdown 预览的渲染尺寸，避免渲染器冻结（[@OrcaWin](https://github.com/OrcaWin)，[#23634](https://github.com/stablyai/orca/pull/23634)）
- 修复（editor）：遵守 Markdown Review Notes 设置（[@Waynting](https://github.com/Waynting)，[#24057](https://github.com/stablyai/orca/pull/24057)）
- 修复（editor）：给 shell 启动点文件加上高亮（[@dunzkoi](https://github.com/dunzkoi)，[#24066](https://github.com/stablyai/orca/pull/24066)）
- 修复（source-control）：Git 历史的提交时间显示到秒（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23954](https://github.com/stablyai/orca/pull/23954)）
- 修复（source-control）：从生成的提交说明里去掉推理模型的思考块（[@FenjuFu](https://github.com/FenjuFu)，[#24005](https://github.com/stablyai/orca/pull/24005)）
- 修复（files）：在 macOS 上忽略嵌套的生成目录（[@nwparker](https://github.com/nwparker)，[#24620](https://github.com/stablyai/orca/pull/24620)）
#### 可靠性与语言 {#v1-4-220-reliability-languages}

> 在很小的 Linux 容器、Windows 内存耗尽，以及系统短暂无法启动窗口时，Orca 会恢复而不是崩溃循环；韩语标签也更自然。

- 修复（linux）：把 Chromium 共享内存移出过小的 /dev/shm（[@OrcaWin](https://github.com/OrcaWin)，[#23751](https://github.com/stablyai/orca/pull/23751)）
- 修复（recovery）：Windows 提交内存耗尽时提示用户，而不是重新加载进又一次 OOM（[@OrcaWin](https://github.com/OrcaWin)，[#23886](https://github.com/stablyai/orca/pull/23886)）
- 修复：在正在运行的应用里恢复渲染器启动失败（[@OrcaWin](https://github.com/OrcaWin)，[#24250](https://github.com/stablyai/orca/pull/24250)）
- 修复（i18n）：修正韩语的工作中和 shell 标签（[@isairz](https://github.com/isairz)，[#24341](https://github.com/stablyai/orca/pull/24341)）
#### Windows 与打包 {#v1-4-220-windows-packaging}

> Windows 和 Linux 包不再包含仅 macOS 使用的 iOS Simulator 助手，依赖也已更新。

- 杂项（deps）：更新 Orca 中已审核的依赖（[@nwparker](https://github.com/nwparker)，[#24561](https://github.com/stablyai/orca/pull/24561)）
- 新增（runtime）：把服务器运行时固定为 Node 24.21.0，并做离线 CI 检查（[@OrcaWin](https://github.com/OrcaWin)，[#24087](https://github.com/stablyai/orca/pull/24087)）
- 修复（packaging）：只在 macOS 构建中附带 serve-sim（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25128](https://github.com/stablyai/orca/pull/25128)）
#### 中继服务 {#v1-4-220-relay-service}

> Orca 中继机群的服务端工作：亚洲和美国新增中继服务器，服务器更新不再挡住登录或卡住。

- 修复（relay）：把主机从正在排空的单元挪走，且不锁住该行（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24216](https://github.com/stablyai/orca/pull/24216)）
- 修复（relay）：主机自己的释放仍占着该行时，立刻拒绝重拨（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24225](https://github.com/stablyai/orca/pull/24225)）
- 修复（relay）：让已排空的主机走自己的通道，并错开返回（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24446](https://github.com/stablyai/orca/pull/24446)）
- 修复（relay）：按单元运行时定义 restart-safe，没有余量的波次直接拒绝（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24259](https://github.com/stablyai/orca/pull/24259)）
- 修复（relay）：在任务实际收到的模式下执行同容量余量门禁（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24343](https://github.com/stablyai/orca/pull/24343)）
- 修复（relay）：正在排空的单元可通过被拒绝的重拨达到 restart-safe（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24347](https://github.com/stablyai/orca/pull/24347)）
- 修复（relay）：同容量监控证据的新鲜度锚定到本次运行的授权，而不是任务启动时间（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24349](https://github.com/stablyai/orca/pull/24349)）
- 修复（relay）：接受 MIG 版本名核对，并在不改写 MIG 的情况下重建滞留单元（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24373](https://github.com/stablyai/orca/pull/24373)）
- 重构（relay）：在同容量滚动内部采样机群健康，而不是另开一次监控运行（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24443](https://github.com/stablyai/orca/pull/24443)）
- 修复（relay）：亚洲金丝雀只看针对亚洲的区域回退（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24320](https://github.com/stablyai/orca/pull/24320)）
- 新增（relay）：按 c30 规格声明亚洲单元 c31（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24310](https://github.com/stablyai/orca/pull/24310)）
- 杂项（relay）：提升后把亚洲单元 c31 移入通用同容量列表（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24318](https://github.com/stablyai/orca/pull/24318)）
- 新增（relay）：按 3,000 主机规格声明美国单元 c32 和 c33（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24444](https://github.com/stablyai/orca/pull/24444)）
#### 发布前已回退 {#v1-4-220-reverted-before-release}

> 二十六项进行中的 SSH 与服务器工作曾合入后又撤出，因此这些改动都不在这次发布里。

- 回退：把 26 个 Phase 3（#16741 移植）PR 从 main 撤出（[@OrcaWin](https://github.com/OrcaWin)，[#24559](https://github.com/stablyai/orca/pull/24559)）
- 新增（relay）：移植 #16741 的 T1 接缝（工作排空、发布排空、释放门禁）（[@OrcaWin](https://github.com/OrcaWin)，[#24156](https://github.com/stablyai/orca/pull/24156)）
- 新增（relay）：中继处理程序走工作准入；生产者发布排空（[@OrcaWin](https://github.com/OrcaWin)，[#24181](https://github.com/stablyai/orca/pull/24181)）
- 新增（relay）：关闭时隔离并排空文件和 git 响应流（[@OrcaWin](https://github.com/OrcaWin)，[#24185](https://github.com/stablyai/orca/pull/24185)）
- 重构（runtime-rpc）：抽出 Node WebSocket 生命周期；可选固定端口（[@OrcaWin](https://github.com/OrcaWin)，[#24186](https://github.com/stablyai/orca/pull/24186)）
- 新增（ssh）：移植 SSH 连接工作账本和传输关闭账本（#16741 T2）（[@OrcaWin](https://github.com/OrcaWin)，[#24210](https://github.com/stablyai/orca/pull/24210)）
- 新增（relay）：关闭时等待自有的 watcher 和 Agent 子进程（#16741 T2 P1）（[@OrcaWin](https://github.com/OrcaWin)，[#24400](https://github.com/stablyai/orca/pull/24400)）
- 新增（ssh）：让 SshConnection 走工作和传输关闭账本（#16741 T2 P2）（[@OrcaWin](https://github.com/OrcaWin)，[#24401](https://github.com/stablyai/orca/pull/24401)）
- 新增（daemon）：用 PTY incarnation id 标记守护进程流数据（#16741 T2 P4a）（[@OrcaWin](https://github.com/OrcaWin)，[#24402](https://github.com/stablyai/orca/pull/24402)）
- 新增（profiles）：项目传输携带 Markdown frontmatter 可见性（#16741 T2 P7）（[@OrcaWin](https://github.com/OrcaWin)，[#24405](https://github.com/stablyai/orca/pull/24405)）
- 新增（session）：重试失败的渲染器会话写入，并核对本机文件夹 PTY（#16741 T2 P9）（[@OrcaWin](https://github.com/OrcaWin)，[#24406](https://github.com/stablyai/orca/pull/24406)）
- 新增（ssh）：跟踪连接管理器排空、测试探测和 provider 延续（#16741 T2 P3+P8a）（[@OrcaWin](https://github.com/OrcaWin)，[#24407](https://github.com/stablyai/orca/pull/24407)）
- 新增（daemon）：空闲退役、会话普查，以及仅用于恢复的 provider（#16741 T2 P4b）（[@OrcaWin](https://github.com/OrcaWin)，[#24409](https://github.com/stablyai/orca/pull/24409)）
- 修复（runtime）：把 PTY incarnation 投影到移动会话标签（[@OrcaWin](https://github.com/OrcaWin)，[#24413](https://github.com/stablyai/orca/pull/24413)）
- 新增（ssh）：增加 pty.resumeClient，并拆分 SSH PTY 进程列表（#16741 T2 P5+P6）（[@OrcaWin](https://github.com/OrcaWin)，[#24414](https://github.com/stablyai/orca/pull/24414)）
- 新增（relay）：按能力门控的所有者重置，带持久准备日志（#16741 T3 R1）（[@OrcaWin](https://github.com/OrcaWin)，[#24418](https://github.com/stablyai/orca/pull/24418)）
- 新增（ssh）：在固定 Node 运行时上提供远程 orcad 原语（#16741 T6-1）（[@OrcaWin](https://github.com/OrcaWin)，[#24419](https://github.com/stablyai/orca/pull/24419)）
- 新增（runtime）：已配对服务器的 SSH 访问链接放在可降级的 sidecar（#16741 T5-1+T5-2）（[@OrcaWin](https://github.com/OrcaWin)，[#24420](https://github.com/stablyai/orca/pull/24420)）
- 修复（runtime）：按身份隔离运行时环境订阅和状态探测（#16741 T5-3）（[@OrcaWin](https://github.com/OrcaWin)，[#24421](https://github.com/stablyai/orca/pull/24421)）
- 新增（orcad）：迁移清单和休眠状态约定（#16741 T6-7）（[@OrcaWin](https://github.com/OrcaWin)，[#24422](https://github.com/stablyai/orca/pull/24422)）
- 新增（ssh）：可从崩溃恢复的 orcad 激活、回滚和恢复（#16741 T6-2）（[@OrcaWin](https://github.com/OrcaWin)，[#24423](https://github.com/stablyai/orca/pull/24423)）
- 新增（orcad）：可监管的服务器：停止请求、托管停止回执、锁安全的生命周期（#16741 T6-3）（[@OrcaWin](https://github.com/OrcaWin)，[#24433](https://github.com/stablyai/orca/pull/24433)）
- 新增（ssh）：用请求文件远程停止 orcad，并记录退役（#16741 T6-4）（[@OrcaWin](https://github.com/OrcaWin)，[#24449](https://github.com/stablyai/orca/pull/24449)）
- 修复（ssh）：orcad GC 遵守激活日志；就绪要求已证实的守护进程覆盖（#16741 T6）（[@OrcaWin](https://github.com/OrcaWin)，[#24451](https://github.com/stablyai/orca/pull/24451)）
- 新增（ssh）：通过 SSH 部署并配对一台空的托管 orcad 服务器（#16741 T6-5）（[@OrcaWin](https://github.com/OrcaWin)，[#24453](https://github.com/stablyai/orca/pull/24453)）
- 新增（ssh）：更新、回滚、恢复并停止托管 orcad 服务器（#16741 T6-5 后续）（[@OrcaWin](https://github.com/OrcaWin)，[#24463](https://github.com/stablyai/orca/pull/24463)）
- 新增（orcad）：源端导出中继托管的 SSH 目标的休眠状态（#16741 T6-8）（[@OrcaWin](https://github.com/OrcaWin)，[#24519](https://github.com/stablyai/orca/pull/24519)）
#### 测试、CI 与维护 {#v1-4-220-tests-ci-maintenance}

> 发布构建通过遥测检查，交叉改动之后 main 又能构建，CI 花在准备上的时间更少，并修了很多不稳定或过时的测试。

- 重构（native-chat）：把 provider 退出证明移出 structured-agent-session-adapter.ts，使 main 的 lint 通过（[@brennanb2025](https://github.com/brennanb2025)，[#24323](https://github.com/stablyai/orca/pull/24323)）
- 修复（native-chat）：在 #24312 与 #24334 交叉之后恢复 main 的类型检查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24437](https://github.com/stablyai/orca/pull/24437)）
- 修复（build）：从独立模块导入 Electron 远程能力列表（[@brennanb2025](https://github.com/brennanb2025)，[#24494](https://github.com/stablyai/orca/pull/24494)）
- 修复（native-chat）：把聊天标签界面移出会话宿主，使 main 通过 lint（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24496](https://github.com/stablyai/orca/pull/24496)）
- CI（daemon）：PR 须通过相对最新版本的守护进程协议交叉检查（[@OrcaWin](https://github.com/OrcaWin)，[#24089](https://github.com/stablyai/orca/pull/24089)）
- CI（daemon）：运行时启动器协议棘轮，以及 Node 槽位标记（[@OrcaWin](https://github.com/OrcaWin)，[#24108](https://github.com/stablyai/orca/pull/24108)）
- CI（ssh）：为中继运行时阶梯增加敌意主机矩阵（[@OrcaWin](https://github.com/OrcaWin)，[#24146](https://github.com/stablyai/orca/pull/24146)）
- CI（ssh）：固定中继的 macOS SSH 主机通道；修正符号链接根目录下的上传（[@OrcaWin](https://github.com/OrcaWin)，[#24179](https://github.com/stablyai/orca/pull/24179)）
- CI（ssh）：固定中继的 Windows SSH 主机通道（收件箱 + 预览版 OpenSSH）（[@OrcaWin](https://github.com/OrcaWin)，[#24180](https://github.com/stablyai/orca/pull/24180)）
- CI：共享 PR 规划准备，并复用静态原生缓存（[@nwparker](https://github.com/nwparker)，[#24329](https://github.com/stablyai/orca/pull/24329)）
- 改动：避免重复准备和实时测试等待，腾出 PR CI 容量（[@nwparker](https://github.com/nwparker)，[#24355](https://github.com/stablyai/orca/pull/24355)）
- 改动：复用已合格的 Windows 服务器构建和依赖核验记录（[@nwparker](https://github.com/nwparker)，[#24448](https://github.com/stablyai/orca/pull/24448)）
- 改动：加快序列化检查，并保持原生缓存稳定（[@nwparker](https://github.com/nwparker)，[#24476](https://github.com/stablyai/orca/pull/24476)）
- CI：按文件夹收录并跑完全部跨版本连线测试，新测试不会被漏掉（[@brennanb2025](https://github.com/brennanb2025)，[#24499](https://github.com/stablyai/orca/pull/24499)）
- 改动：减少无头服务器 CI 的重复工作（[@nwparker](https://github.com/nwparker)，[#24527](https://github.com/stablyai/orca/pull/24527)）
- 改动：降低 CI 准备成本和夹具失败（[@nwparker](https://github.com/nwparker)，[#24537](https://github.com/stablyai/orca/pull/24537)）
- 改动：在 SSH CI 中复用已准备好的 Windows 原生构建（[@nwparker](https://github.com/nwparker)，[#24555](https://github.com/stablyai/orca/pull/24555)）
- 改动：单元任务卡住一小时后停止（[@nwparker](https://github.com/nwparker)，[#24583](https://github.com/stablyai/orca/pull/24583)）
- 改动：限制 E2E 包准备时间，并保留取消追踪（[@nwparker](https://github.com/nwparker)，[#24617](https://github.com/stablyai/orca/pull/24617)）
- 改动：SSH Linux 构建跳过重复的包准备（[@nwparker](https://github.com/nwparker)，[#24733](https://github.com/stablyai/orca/pull/24733)）
- 改动：限制 E2E 原生缓存任务的包准备时间（[@nwparker](https://github.com/nwparker)，[#24758](https://github.com/stablyai/orca/pull/24758)）
- 测试（native-chat）：在拆卸前取消日志导入测试的计时器（[@brennanb2025](https://github.com/brennanb2025)，[#24071](https://github.com/stablyai/orca/pull/24071)）
- 测试：停止 main 因存储和关闭原因改动交叉而失败的三项测试（[@brennanb2025](https://github.com/brennanb2025)，[#24231](https://github.com/stablyai/orca/pull/24231)）
- 测试（runtime）：增加就绪普查，钉住每一个 tui-idle 判定（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24336](https://github.com/stablyai/orca/pull/24336)）
- 测试（orcad）：协议升级时跳过实时终端的运行时交接（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24429](https://github.com/stablyai/orca/pull/24429)）
- 测试（e2e）：按确切名称选择引导里的 Codex 卡片（[@brennanb2025](https://github.com/brennanb2025)，[#24439](https://github.com/stablyai/orca/pull/24439)）
- 测试（e2e）：伪造的 Codex 回答 --no-daemon --help 探测，且不实际启动进程（[@brennanb2025](https://github.com/brennanb2025)，[#24440](https://github.com/stablyai/orca/pull/24440)）
- 测试（e2e）：把手动排序的 worktree 拖到会改变顺序的槽位（[@brennanb2025](https://github.com/brennanb2025)，[#24441](https://github.com/stablyai/orca/pull/24441)）
- 测试（e2e）：给 sparse 预设证明留出在 CI 上完成的时间（[@brennanb2025](https://github.com/brennanb2025)，[#24442](https://github.com/stablyai/orca/pull/24442)）
- 测试（e2e）：崩溃恢复测试在 Electron 瞬时 evaluate 错误时重试主进程读取（[@brennanb2025](https://github.com/brennanb2025)，[#24479](https://github.com/stablyai/orca/pull/24479)）
- 改动：修正 Linux 上 Codex Ctrl+C 回归夹具（[@nwparker](https://github.com/nwparker)，[#24480](https://github.com/stablyai/orca/pull/24480)）
- 测试（e2e）：在截图标注前关掉正确的导览（[@nwparker](https://github.com/nwparker)，[#24534](https://github.com/stablyai/orca/pull/24534)）
- 测试（wire）：修正发布夹具和兼容性断言（[@nwparker](https://github.com/nwparker)，[#24538](https://github.com/stablyai/orca/pull/24538)）
- 测试：隔离扫描夹具，并等待工作完成（[@nwparker](https://github.com/nwparker)，[#24544](https://github.com/stablyai/orca/pull/24544)）
- 测试：按 Playwright worker 隔离播种的 Git 仓库（[@nwparker](https://github.com/nwparker)，[#24550](https://github.com/stablyai/orca/pull/24550)）
- 测试：把用量快照突发时钟固定住（[@nwparker](https://github.com/nwparker)，[#24551](https://github.com/stablyai/orca/pull/24551)）
- 测试：更新 worktree 准备，并强制检查清理结果（[@nwparker](https://github.com/nwparker)，[#24552](https://github.com/stablyai/orca/pull/24552)）
- 测试：在大段粘贴覆盖里恢复延迟的 PTY 写入（[@nwparker](https://github.com/nwparker)，[#24556](https://github.com/stablyai/orca/pull/24556)）
- 测试：按当前 PTY 约定分类终端驱动输入（[@nwparker](https://github.com/nwparker)，[#24560](https://github.com/stablyai/orca/pull/24560)）
- 测试：让源码管理夹具对齐当前存储约定（[@nwparker](https://github.com/nwparker)，[#24571](https://github.com/stablyai/orca/pull/24571)）
- 改动：从可选套接字测试里去掉空的通过哨兵（[@nwparker](https://github.com/nwparker)，[#24621](https://github.com/stablyai/orca/pull/24621)）
- 改动：后台压力下仍能看到 SSH 打字回复（[@nwparker](https://github.com/nwparker)，[#24629](https://github.com/stablyai/orca/pull/24629)）
- 改动：窄分屏里仍能读到 SSH 基准回复（[@nwparker](https://github.com/nwparker)，[#24682](https://github.com/stablyai/orca/pull/24682)）
- 改动：更新侧栏测试准备，并去掉过时的权限哨兵（[@nwparker](https://github.com/nwparker)，[#24734](https://github.com/stablyai/orca/pull/24734)）
- 改动：在接管测试里把已确认的重新挂载输入算作驱动（[@nwparker](https://github.com/nwparker)，[#24750](https://github.com/stablyai/orca/pull/24750)）
- 改动：在插件测试里检查临时 worktree 清理（[@nwparker](https://github.com/nwparker)，[#24779](https://github.com/stablyai/orca/pull/24779)）
- 改动：在安装器读取 E2E 包的位置检查这些包（[@nwparker](https://github.com/nwparker)，[#24785](https://github.com/stablyai/orca/pull/24785)）

### 新贡献者 {#v1-4-220-contributors}

- [@FenjuFu](https://github.com/FenjuFu) 在 [#24005](https://github.com/stablyai/orca/pull/24005) 做出首次贡献
- [@Waynting](https://github.com/Waynting) 在 [#24057](https://github.com/stablyai/orca/pull/24057) 做出首次贡献
- [@dunzkoi](https://github.com/dunzkoi) 在 [#24066](https://github.com/stablyai/orca/pull/24066) 做出首次贡献
- [@isairz](https://github.com/isairz) 在 [#24341](https://github.com/stablyai/orca/pull/24341) 做出首次贡献

**完整变更对照：** [v1.4.219...v1.4.220](https://github.com/stablyai/orca/compare/v1.4.219...v1.4.220)

## v1.4.219 Codex 共用服务器会提示，启动 Agent 时预信任文件夹 {#v1-4-219}

2026年10月2日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.219)

感谢使用 Orca，也感谢一直以来的支持。

这个补丁基于 9 月 30 日的 daily build，并拣入了 main 上的修复。那之后合入 main 的 pull request 不在这次构建里。

### 简要说明 {#v1-4-219-short}

**Codex 终端：** 某个 Codex 标签与其他 Codex 标签共用同一个后台服务器时，该标签顶部会出现提示。在那台服务器上，关掉一个标签可能结束其他标签，Agent 状态也可能不对。提示提供 **Fix**，会关掉共享并显示它将执行的具体命令。更新前就已打开的终端里，提示会改为建议新开一个终端。在普通 fish 标签里输入 `codex`，现在也会像 zsh 和 bash 一样让 Codex 跑在自己的服务器上。打开终端不再从 `~/.codex` 删掉 Orca 的状态 hook。Orca 不再把文件夹信任项再写一份进 Codex 的 `config.toml`（那会让每条 `codex` 命令都失效），并清掉已经写过的重复项。后台的 Codex 用量检查不再去点 Codex 更新提示里的 “Update now”，以免把 Codex 点坏。bare repository 的 worktree 里启动 Codex 也不再弹出信任提示。输入时 Codex 窗格不再冻结大约一秒。

**Agent 的文件夹信任：** Orca 在某个文件夹里启动 Claude Code、Codex、Cursor、Copilot、Qoder 或 Antigravity 时，会提前回答 Agent 的 “Do you trust this folder?”。编排 worker、自动化，以及从手机启动的 Agent 不再卡在这个提示上。可在 Settings → Agents → “Trust the folder when Orca starts an agent” 关掉。

**Agent 状态：** 同时开着多个 OpenCode 2 窗格时，每个窗格显示自己的 Working 和 Done，不再显示另一个窗格的。在 Windows 上，Claude 用 Windows PowerShell 5.1 跑 hook 时，Claude Code 状态再次可用。Codex 改了标签标题后，侧栏里的 Codex 行在运行期间仍会留下。刚启动的 Hermes 显示为就绪，而不是忙碌。

**Native Chat（实验性）：** Agent 还在工作时发出的消息，会在输入框上方以卡片等待，桌面和手机都是如此。你可以 **Steer** 把它插进正在进行的回合、编辑或删除；否则等回合结束后再发送。子 Agent 的工作出现在自己的区块里，不再混进主对话。`/compact` 单独占一行，未完成的 `/clear` 不再锁住聊天。Stop 响应更快，也不再误报 “Cancellation was not confirmed”。连到远程 Orca 服务器时，粘贴文本也能用。

**编排：** worker 的 “I'm done” 报告在对话被 compact 之后不再被拒。Orca 短暂不可达时，报告会重试大约两分钟，而不是直接丢掉。`worker-abandon` 现在每次都会把卡住的 worker 收尾。

**文件与编辑器：** 以前保存一篇新的未命名笔记再关掉标签，Orca 会把它删掉；已保存的笔记现在会保留。在富文本 Markdown 编辑器里点击不再跳到文件顶部。打开的文件会跟着系统的浅色/深色模式切换。sparse checkout 会把文件浏览器打开在你正在工作的文件夹。

**终端：** 文件名带括号或空格的图片，例如 `download (1).png`，拖进去时现在能附到 Agent 上。被跳过的拖放文件，提示会说明原因。开了很多标签时，当前标签会停在标签栏边缘、保持可见。Codex、Claude Code 这类程序晚启动或在后台启动时，也会拿到正确的颜色。

**Linux 与 Windows：** 在 Hyprland、sway、river 和 niri 上，钥匙环在运行且已解锁时，Orca 会加密保存的 API key 和 token。某条凭据未加密保存时，Settings 会在旁边显示警告。Windows 上的 `orca` 命令改成原生程序，因为杀毒软件一直在删旧的那个；它不需要 Visual C++ Redistributable。安装包也不再在应用归档里再带一份 Orca 的 relay 文件。

**已经打开的终端：** 新的颜色应答，以及 fish 标签里的 `codex` 设置，只对更新之后新开的终端生效。更新前就开着的终端保持旧行为，直到你新开终端。

### 已知问题 {#v1-4-219-known-issues}

**Windows on ARM：** ARM64 包装的是 x64 的 `orca.exe` 命令行工具。Windows 11 on ARM 会用模拟运行它。Windows 10 on ARM 跑不了，所以那里的 `orca` 命令不可用（#24094）。

**OpenCode 2：** 更新前就已经在跑的 OpenCode 2 窗格，可能要在里面重启 OpenCode 之后才有状态。这次更新之后如果降级 Orca，会留下重复的 OpenCode 状态插件。`opencode run` 退出后，窗格可能一直显示 “Done”；修复还在 #24472。

**Codex：** 升级之后，在 Codex 批准 Orca 的新状态 hook 之前，Codex 启动会使用 Orca 托管的 Codex home。使用 `~/.codex` 的已恢复窗格最多可能停顿 30 秒（#23552）。

**Claude 文件夹信任：** 文件夹预信任默认开启（Settings → Agents → “Trust the folder when Orca starts an agent”）。在 Alpine WSL 上，Orca 复制不了所需的文件权限，所以 Claude 仍会显示自己的信任提示（#23744）。

---

### 产品体验 {#v1-4-219-product}

#### Codex 与编排 {#v1-4-219-codex-orchestration}

> Codex 标签共用服务器时会警告，Codex 设置和 hook 不再被写坏，编排 worker 的报告也更能送达。

- 新增（terminal）：手动输入的 Codex 加入 Codex 共享服务器时给出警告（STA-9051）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24217](https://github.com/stablyai/orca/pull/24217)）
- 新增（terminal）：把旧终端里 Codex 共享服务器横幅指向新终端（STA-9051）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24501](https://github.com/stablyai/orca/pull/24501)）
- 修复（terminal）：给普通 fish 标签装上 Orca 的 codex 函数，而不改 fish 的启动流程（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24284](https://github.com/stablyai/orca/pull/24284)）
- 修复（codex）：打开终端不再从真正的 ~/.codex 里剥掉 Codex hook（[@brennanb2025](https://github.com/brennanb2025)，[#23552](https://github.com/stablyai/orca/pull/23552)）
- 修复（codex）：识别 Codex 在 config.toml 里的带引号写法，并修掉 Orca 写重的条目（#22592）（[@brennanb2025](https://github.com/brennanb2025)，[#23958](https://github.com/stablyai/orca/pull/23958)）
- 修复（codex）：信任 Codex 实际启动所在的 worktree，而不是猜出来的仓库根（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23937](https://github.com/stablyai/orca/pull/23937)）
- 修复（rate-limits）：不再驱动一个隐藏的 Codex TUI 去读用量（[@brennanb2025](https://github.com/brennanb2025)，[#23806](https://github.com/stablyai/orca/pull/23806)）
- 修复（codex）：在 Windows 上不经过 cmd.exe 启动短生命周期的 Codex app-server（[@brennanb2025](https://github.com/brennanb2025)，[#23830](https://github.com/stablyai/orca/pull/23830)）
- 修复（orchestration）：没有 dispatch capability 也接受 worker 报告（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23982](https://github.com/stablyai/orca/pull/23982)）
- 修复（orchestration）：不再签发并打印 dispatch capability（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23994](https://github.com/stablyai/orca/pull/23994)）
- 修复（orchestration）：worker-abandon 会收尾卡住的 worker，并记下是谁做的（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23983](https://github.com/stablyai/orca/pull/23983)）
- 修复（orchestration）：Orca runtime 短暂不可达时重试 worker_done（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23984](https://github.com/stablyai/orca/pull/23984)）

#### Agent 与 Agent 集成 {#v1-4-219-agents-agent-integrations}

> Orca 启动 Agent 时预先信任文件夹；OpenCode 2、Windows 上的 Claude 和 Hermes 能正确报告状态；引导流程改为围绕安装 skills。

- 新增（agents）：凡是 Orca 启动 Agent 的地方都预先信任该文件夹（[@brennanb2025](https://github.com/brennanb2025)，[#23744](https://github.com/stablyai/orca/pull/23744)）
- 修复（claude）：不再把 WSL 用户的 ~/.claude.json 变成所有人可读（[@brennanb2025](https://github.com/brennanb2025)，[#23973](https://github.com/stablyai/orca/pull/23973)）
- 修复（opencode）：从每个窗格自己的 TUI 报告 OpenCode 2 状态（[@brennanb2025](https://github.com/brennanb2025)，[#23722](https://github.com/stablyai/orca/pull/23722)）
- 修复（claude）：在 Windows 上跑 hook 时不使用 shell 运算符（[@brennanb2025](https://github.com/brennanb2025)，[#23944](https://github.com/stablyai/orca/pull/23944)）
- 修复（runtime）：把 Hermes 会话开始当成空闲，而不是正在进行的回合（[@nwparker](https://github.com/nwparker)，[#24064](https://github.com/stablyai/orca/pull/24064)）
- 修复（onboarding）：Agent 步骤围绕 skills 来做，而不是 CLI 注册（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22720](https://github.com/stablyai/orca/pull/22720)）

#### Native Chat {#v1-4-219-native-chat}

> 实验性的结构化聊天把回合中途的消息排成可编辑卡片，给子 Agent 单独区块，并更可靠地处理 Stop、`/compact`、`/clear` 和粘贴。

- 新增（native-chat）：把回合中途的消息放进宿主持有的队列（[@brennanb2025](https://github.com/brennanb2025)，[#23726](https://github.com/stablyai/orca/pull/23726)）
- 新增（native-chat）：回合中途的消息以可编辑卡片停在输入框上方（[@brennanb2025](https://github.com/brennanb2025)，[#23731](https://github.com/stablyai/orca/pull/23731)）
- 重构（native-chat）：子 Agent 的行放在自己的区块里，不再放进父对话（[@brennanb2025](https://github.com/brennanb2025)，[#23752](https://github.com/stablyai/orca/pull/23752)）
- 修复（claude）：重启后的 provider 会接上先前运行记下来的子 Agent 名单（[@brennanb2025](https://github.com/brennanb2025)，[#23758](https://github.com/stablyai/orca/pull/23758)）
- 修复（native-chat）：回合事实来自回合记录，`/compact` 是聊天自己发出的一条消息（[@brennanb2025](https://github.com/brennanb2025)，[#23059](https://github.com/stablyai/orca/pull/23059)）
- 修复（native-chat）：未完成的 `/clear` 或被拒绝的 Codex rewind 不再锁住聊天（[@brennanb2025](https://github.com/brennanb2025)，[#23524](https://github.com/stablyai/orca/pull/23524)）
- 修复（native-chat）：失败的回合停在它的错误上，而不是把错误折进去（[@brennanb2025](https://github.com/brennanb2025)，[#23679](https://github.com/stablyai/orca/pull/23679)）
- 修复（codex）：Codex 的 Stop 只是中断本身，不再说 “Cancellation was not confirmed”（[@brennanb2025](https://github.com/brennanb2025)，[#23850](https://github.com/stablyai/orca/pull/23850)）
- 修复（codex）：说明完整的 Stop 等待可能超出 quit 的驱逐预算，并 unref 它的计时器（[@brennanb2025](https://github.com/brennanb2025)，[#23859](https://github.com/stablyai/orca/pull/23859)）
- 修复（claude）：点名正在进行回合的 Stop 会立刻生效，间隙里的 Stop 不再丢失（[@brennanb2025](https://github.com/brennanb2025)，[#23861](https://github.com/stablyai/orca/pull/23861)）
- 修复（claude）：Claude 撤回的排队消息，改由 Claude 自己的 cancelled 事件收尾（[@brennanb2025](https://github.com/brennanb2025)，[#23862](https://github.com/stablyai/orca/pull/23862)）
- 修复（codex）：对已超时请求的迟到回复只记日志，不再显示在聊天里（[@brennanb2025](https://github.com/brennanb2025)，[#23893](https://github.com/stablyai/orca/pull/23893)）
- 修复：修正 Chat UI 的粘贴接入和窗格路由（[@brennanb2025](https://github.com/brennanb2025)，[#23784](https://github.com/stablyai/orca/pull/23784)）
- 修复（chat）：解码 Claude 粘贴，并报告终端投递不确定的情况（[@brennanb2025](https://github.com/brennanb2025)，[#23788](https://github.com/stablyai/orca/pull/23788)）
- 新增（native-chat）：恢复被打断的聊天在状态栏里进行（[@brennanb2025](https://github.com/brennanb2025)，[#23778](https://github.com/stablyai/orca/pull/23778)）
- 新增（native-chat）：每个宿主一份结构化聊天日志数据库，由一个进程持有（[@brennanb2025](https://github.com/brennanb2025)，[#23613](https://github.com/stablyai/orca/pull/23613)）

#### 终端 {#v1-4-219-terminal}

> Codex 窗格输入时不再冻结，程序能拿到正确颜色，拖入的文件会附上，或说明为何被跳过。

- 修复（terminal）：放开 xterm 的 DEC 2026 渲染挂起，而不是干等它的 1 秒超时（[@nwparker](https://github.com/nwparker)，[#23920](https://github.com/stablyai/orca/pull/23920)）
- 修复（terminal）：终端的所有者在终端整个生命周期内回答颜色查询（[@brennanb2025](https://github.com/brennanb2025)，[#23925](https://github.com/stablyai/orca/pull/23925)）
- 修复（terminal）：附上文件名需要 shell 引用的拖入图片（[@mmarabel](https://github.com/mmarabel)，[#23707](https://github.com/stablyai/orca/pull/23707)）
- 修复：在终端拖放上传报告里显示跳过原因（[@AmethystLiang](https://github.com/AmethystLiang)，[#23951](https://github.com/stablyai/orca/pull/23951)）
- 修复（terminal）：移除工作区时清掉该工作区的关闭记录（[@brennanb2025](https://github.com/brennanb2025)，[#23683](https://github.com/stablyai/orca/pull/23683)）

#### 移动应用与已配对客户端 {#v1-4-219-mobile-app-paired-clients}

> 手机也能看到回合中途的消息卡片；手机滑动不再打出转义文本；从手机启动的 Agent 遵循你选的聊天或终端；通知服务送达更多手机通知，而不是让它们过期。

- 新增（mobile）：回合中途的消息以卡片停在手机输入框上方（[@brennanb2025](https://github.com/brennanb2025)，[#23736](https://github.com/stablyai/orca/pull/23736)）
- 修复（terminal）：在桌面窗格快照里保留鼠标报告格式，这样手机滑动不会打出转义文本（[@brennanb2025](https://github.com/brennanb2025)，[#23943](https://github.com/stablyai/orca/pull/23943)）
- 修复（mobile）：开始菜单、快捷命令和 diff 笔记里的 Agent 都走 agent.launch（[@brennanb2025](https://github.com/brennanb2025)，[#22954](https://github.com/stablyai/orca/pull/22954)）
- 修复（mobile）：正在关闭的手机流不再结束替换它的终端或聊天推送（[@brennanb2025](https://github.com/brennanb2025)，[#22939](https://github.com/stablyai/orca/pull/22939)）
- 修复（mobile）：更新移动应用的墙会打开对应的那次 release（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23789](https://github.com/stablyai/orca/pull/23789)）
- 修复（mobile）：打开缓存的页面生成也算一次使用；缓存六个宿主（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23780](https://github.com/stablyai/orca/pull/23780)）
- 修复（push）：每个 push gateway 实例给六条数据库连接（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24026](https://github.com/stablyai/orca/pull/24026)）
- 修复（push）：投递排空从四路改成十二路（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24038](https://github.com/stablyai/orca/pull/24038)）
- 修复（push）：按排空路数确定认领尝试预算（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24040](https://github.com/stablyai/orca/pull/24040)）

#### 浏览器 {#v1-4-219-browser}

> 使用手机尺寸预设的浏览器标签，始终报告实际应用的那个尺寸身份。

- 修复（browser）：标签的手机身份跟随实际应用的视口（[@brennanb2025](https://github.com/brennanb2025)，[#23812](https://github.com/stablyai/orca/pull/23812)）

#### 标签与侧栏 {#v1-4-219-tabs-sidebar}

> 滚动的标签栏里当前标签保持可见，正在运行的 Codex 保留侧栏行。

- 修复（tab-bar）：标签条滚动时保持当前标签可见（[@AmethystLiang](https://github.com/AmethystLiang)，[#24010](https://github.com/stablyai/orca/pull/24010)）
- 修复（sidebar）：Agent 运行期间保留它的行，不论标签标题是什么（[@brennanb2025](https://github.com/brennanb2025)，[#23948](https://github.com/stablyai/orca/pull/23948)）

#### 编辑器与文件 {#v1-4-219-editor-files}

> 已保存的未命名笔记会保留，Markdown 点击不再跳到顶部，打开的文件跟随浅色/深色模式，sparse checkout 打开在有用的文件夹。

- 修复（editor）：关掉标签时保留已保存的未命名笔记（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23768](https://github.com/stablyai/orca/pull/23768)）
- 回退：“fix(markdown): return focus to editor from find bar”（#23175）（[@AmethystLiang](https://github.com/AmethystLiang)，[#24500](https://github.com/stablyai/orca/pull/24500)）
- 修复（editor）：编辑器标签保持打开时跟随系统浅色和深色（[@higherbros](https://github.com/higherbros)，[#23848](https://github.com/stablyai/orca/pull/23848)）
- 新增（explorer）：把文件树限定在 sparse checkout 目录（[@blaksmatic](https://github.com/blaksmatic)，[#18750](https://github.com/stablyai/orca/pull/18750)）

#### 已保存的凭据 {#v1-4-219-saved-credentials}

> 在更多 Linux 桌面上，保存的 API key 和 token 会被加密；未加密存储时 Settings 会警告。

- 修复（secrets）：在 Chromium 检测不到的 Linux 桌面上密封凭据（[@nwparker](https://github.com/nwparker)，[#24035](https://github.com/stablyai/orca/pull/24035)）
- 修复（secrets）：不再让已经在跑钥匙环的 Linux 用户去安装钥匙环（[@nwparker](https://github.com/nwparker)，[#24013](https://github.com/stablyai/orca/pull/24013)）
- 新增（secrets）：凭据未加密存储时在 Settings 里警告（[@nwparker](https://github.com/nwparker)，[#24048](https://github.com/stablyai/orca/pull/24048)）

#### Windows 与打包 {#v1-4-219-windows-packaging}

> Windows 的 `orca` 命令改成原生程序，不再像杀毒软件一直标记的恶意软件，也不需要额外的 Microsoft 运行库。应用也不再附带一份重复的 relay 文件。

- 修复（windows）：用原生启动器替换托管的 CLI 启动器（[@nwparker](https://github.com/nwparker)，[#24094](https://github.com/stablyai/orca/pull/24094)）
- 修复（windows）：静态链接 CLI 启动器的 C 运行库，使 orca.exe 不需要 VC++ Redistributable（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24484](https://github.com/stablyai/orca/pull/24484)）
- 修复（packaging）：不再把 relay 包放进 app.asar（[@nwparker](https://github.com/nwparker)，[#24027](https://github.com/stablyai/orca/pull/24027)）

#### 可靠性与性能 {#v1-4-219-reliability-performance}

> 添加或移除 worktree 只重新扫描那个项目，更少的 git 调用会挡住应用。

- 性能（git）：只重新列出 worktree 有变化的仓库，并停止在同步 git 上阻塞主线程（[@nwparker](https://github.com/nwparker)，[#23998](https://github.com/stablyai/orca/pull/23998)）

#### 测试、CI 与维护 {#v1-4-219-tests-ci-maintenance}

> Release 构建重新通过遥测检查，微信社群链接指向当前群，并删掉许多不可能失败的测试。

- 修复（release）：在压缩后的遥测检查里，接受更后面的声明作为构建身份（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24219](https://github.com/stablyai/orca/pull/24219)）
- 重构（shared）：把 constants.ts 拉回最大行数限制以内（[@brennanb2025](https://github.com/brennanb2025)，[#23923](https://github.com/stablyai/orca/pull/23923)）
- 文档（wechat）：把社群二维码指向第 11 群（[@AmethystLiang](https://github.com/AmethystLiang)，[#24050](https://github.com/stablyai/orca/pull/24050)）
- 修复（native-chat）：main 上的 draft-queue 测试跟上 #23524 的 `/clear`（修好 main）（[@brennanb2025](https://github.com/brennanb2025)，[#23940](https://github.com/stablyai/orca/pull/23940)）
- 测试（e2e）：不再让 main 的静态分析在标签条测试上失败（[@brennanb2025](https://github.com/brennanb2025)，[#24052](https://github.com/stablyai/orca/pull/24052)）
- 测试（mobile）：记录 RPC golden 时不钉死某个 commit，并按桌面的参数规则检查已记录的请求（[@brennanb2025](https://github.com/brennanb2025)，[#23732](https://github.com/stablyai/orca/pull/23732)）
- 测试（claude）：只有显式选择时才跑真正的 Claude CLI 测试（[@brennanb2025](https://github.com/brennanb2025)，[#23702](https://github.com/stablyai/orca/pull/23702)）
- 测试：单元测试不再能写入开发者真实的 Agent 或 Orca 设置（[@brennanb2025](https://github.com/brennanb2025)，[#23979](https://github.com/stablyai/orca/pull/23979)）
- 测试：通过同一套测试夹具打开、播种并读取 agent-session 记录存储（[@brennanb2025](https://github.com/brennanb2025)，[#23986](https://github.com/stablyai/orca/pull/23986)）
- 测试（e2e）：让已完成 worker 的假 Codex 回答 --help 探测（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24033](https://github.com/stablyai/orca/pull/24033)）
- 修复：把 WebRTC 出口探测的 iceCandidatePoolSize 设为 0（[@AmethystLiang](https://github.com/AmethystLiang)，[#23991](https://github.com/stablyai/orca/pull/23991)）
- 测试：不再通过没有调用方需要的导出去测私有内部（[@nwparker](https://github.com/nwparker)，[#23829](https://github.com/stablyai/orca/pull/23829)）
- 测试：丢掉已有行为归属的私有内部测试和边界普查测试（[@nwparker](https://github.com/nwparker)，[#23941](https://github.com/stablyai/orca/pull/23941)）
- 测试：退役渲染器里重复的私有谓词测试（[@nwparker](https://github.com/nwparker)，[#23945](https://github.com/stablyai/orca/pull/23945)）
- 测试：在泄漏内部清扫里退役最后一批重复的私有谓词测试（[@nwparker](https://github.com/nwparker)，[#23949](https://github.com/stablyai/orca/pull/23949)）
- 测试：不再复述内部调参常量，只保留属于契约的那些（[@nwparker](https://github.com/nwparker)，[#23950](https://github.com/stablyai/orca/pull/23950)）
- 测试：去掉只有读代码才能发现的 mock 回声和重复契约（[@nwparker](https://github.com/nwparker)，[#23953](https://github.com/stablyai/orca/pull/23953)）
- 测试：退役兄弟用例已经覆盖的浏览器和 cookie 导入用例（[@nwparker](https://github.com/nwparker)，[#23957](https://github.com/stablyai/orca/pull/23957)）
- 测试：退役兄弟用例已经覆盖的渲染器窗格和完成节拍用例（[@nwparker](https://github.com/nwparker)，[#23961](https://github.com/stablyai/orca/pull/23961)）
- 测试：退役谓词从不读取被变化输入的用例（[@nwparker](https://github.com/nwparker)，[#23965](https://github.com/stablyai/orca/pull/23965)）
- 测试：退役被夹具或谓词抵消掉的 native-chat 用例（[@nwparker](https://github.com/nwparker)，[#23968](https://github.com/stablyai/orca/pull/23968)）
- 测试：删掉只在测自己的套件，并修剪浏览器窗格的重复用例（[@nwparker](https://github.com/nwparker)，[#23971](https://github.com/stablyai/orca/pull/23971)）
- 测试：删掉早先检测器正则漏掉的源码 grep 测试（[@nwparker](https://github.com/nwparker)，[#23976](https://github.com/stablyai/orca/pull/23976)）
- 测试：退役守卫或算术不可能失败的 hook 和安装器用例（[@nwparker](https://github.com/nwparker)，[#23981](https://github.com/stablyai/orca/pull/23981)）
- 测试：退役扫描器从不读取其输入的 ai-vault 用例（[@nwparker](https://github.com/nwparker)，[#23992](https://github.com/stablyai/orca/pull/23992)）
- 测试：退役 setup 不起作用、或名字超出输入的 codex 用例（[@nwparker](https://github.com/nwparker)，[#23996](https://github.com/stablyai/orca/pull/23996)）
- 测试：退役重复跑兄弟用例已有契约的 cli 用例（[@nwparker](https://github.com/nwparker)，[#24000](https://github.com/stablyai/orca/pull/24000)）
- 测试：退役重复证明已有契约的 relay、preload 和 shared 用例（[@nwparker](https://github.com/nwparker)，[#24007](https://github.com/stablyai/orca/pull/24007)）
- 测试：退役重放归属方已经证明的契约的 src/main 用例（[@nwparker](https://github.com/nwparker)，[#24025](https://github.com/stablyai/orca/pull/24025)）
- 测试：退役重复证明已有契约的 src/main/runtime 用例（[@nwparker](https://github.com/nwparker)，[#24043](https://github.com/stablyai/orca/pull/24043)）
- 测试：退役输入到不了其所命名行为的渲染器用例（[@nwparker](https://github.com/nwparker)，[#24065](https://github.com/stablyai/orca/pull/24065)）
- 测试：退役输入到不了的 mobile、cloud、config 和 e2e 用例（[@nwparker](https://github.com/nwparker)，[#24077](https://github.com/stablyai/orca/pull/24077)）
- 测试：退役输入到不了其所命名行为的长尾用例（[@nwparker](https://github.com/nwparker)，[#24101](https://github.com/stablyai/orca/pull/24101)）
- 测试：退役跨重新导出或 provider 垫片重放归属方的重复用例（[@nwparker](https://github.com/nwparker)，[#24114](https://github.com/stablyai/orca/pull/24114)）
- 测试：退役只断言垫片、字面量或未读分支的积压用例（[@nwparker](https://github.com/nwparker)，[#24120](https://github.com/stablyai/orca/pull/24120)）
- 测试：补上 agent-hooks、claude 和 store 切片里已披露的读取缺口（[@nwparker](https://github.com/nwparker)，[#24126](https://github.com/stablyai/orca/pull/24126)）
- 测试：退役断言结果由测试自己决定的长尾用例（[@nwparker](https://github.com/nwparker)，[#24132](https://github.com/stablyai/orca/pull/24132)）
- 测试：退役生产签名表达不了其所命名维度的用例（[@nwparker](https://github.com/nwparker)，[#24139](https://github.com/stablyai/orca/pull/24139)）
- 测试：退役由夹具决定其所断言结果的用例（[@nwparker](https://github.com/nwparker)，[#24144](https://github.com/stablyai/orca/pull/24144)）
- 测试：退役已被诚实命名的相邻用例覆盖的用例（[@nwparker](https://github.com/nwparker)，[#24150](https://github.com/stablyai/orca/pull/24150)）

### 新贡献者 {#v1-4-219-contributors}

- [@higherbros](https://github.com/higherbros) 在 [#23848](https://github.com/stablyai/orca/pull/23848) 做出首次贡献

**完整变更对照：** [v1.4.218...v1.4.219](https://github.com/stablyai/orca/compare/v1.4.218...v1.4.219)

## v1.4.218 Codex 终端可独立服务器，内置更多 Agent {#v1-4-218}

2026年9月30日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.218)

感谢使用 Orca，也感谢一直以来的支持。

这个补丁基于 9 月 29 日的 daily build，并拣入了 main 上的修复。那之后合入 main 的 pull request 不在这次构建里。

### 简要说明 {#v1-4-218-short}

**Codex 终端：** Settings → Agents 新增 **「Run each Codex terminal on its own server」** 开关。默认开启，以便 Agent 状态和关闭标签仍正确。关掉则回到 Codex 的共享服务器及其 agents 总览。开关作用于新终端。一次性通知会说明这次变化并链到该开关。从 cmd.exe 标签、按完整路径，或在 “wait for setup” 结束后启动的 Codex，现在也走自己的服务器。忙碌的 Codex 0.150–0.157 标签不再显示为空闲，编排 worker 会等过 Codex 0.157 的启动画面再输入简报。

**更多 Agent：** 内置 DeepSeek Harness、Freebuff、Qoder 和 CodeBuddy：可以从 Orca 启动，状态显示在侧栏。ZCode CLI 会话出现在会话历史里，Coding Plan 额度显示在用量中。

**终端：** 终端右键菜单新增 **Reset Terminal**，清除崩溃程序留下的键盘和鼠标模式。Orca 不再因为猜测程序已死就关掉这些模式，因此 Ctrl+C 之后 Codex 和 Claude Code 里的 Shift+Enter 与 Option/Alt 仍可用。SSH 终端在程序崩溃后的清理与本地一致。打开数百个终端不再截断输出，终端保存失败也不再误报磁盘已满。

**Orca 移动应用：** 在 Windows 宿主上，桌面应用重启后，手机在 Codex 终端里的滑动又能滚动，而不再往 Codex 里打入乱码。若更新时终端仍开着，要等 Orca 的后台终端服务重启后才生效：关掉全部终端或重启机器。应用也会提示有更新版本可安装，键盘现在会像应用里其他屏幕一样盖住页面。

**浏览器：** Orca 浏览器里的页面崩溃后，调整视口大小不再让 Orca 崩溃。所选尺寸会在页面再次加载时应用。在分组之间移动的浏览器标签不再变空白。

**Native Chat（实验性）：** 结构化聊天可以自己运行编排并接收 worker 结果。状态、错误、子 Agent 和被中止的回合现在报告得更准确。

**可靠性：** 许多文件同时变化时，大 diff 不再让 Orca 卡死；工作区加载稍慢时，Cmd+J 仍把键盘留在终端。

---

### 产品体验 {#v1-4-218-product}

#### Codex 与编排 {#v1-4-218-codex-orchestration}

> Codex 终端可以改用自己的服务器或 Codex 的共享服务器；更多启动方式会走独立服务器，编排 worker 的启动也更可靠。

- 新增（settings）：允许 Codex 终端重新选用 Codex 的共享服务器（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23929](https://github.com/stablyai/orca/pull/23929)）
- 修复（terminal）：从 Orca 的 cmd.exe、按完整路径启动，以及等 setup 结束后再启动的 Codex，不再走共享服务器（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23933](https://github.com/stablyai/orca/pull/23933)）
- 修复（runtime）：忙碌的 Codex 0.150–0.157 窗格不再被读成 tui-idle（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23805](https://github.com/stablyai/orca/pull/23805)）
- 修复（runtime）：先等过 Codex 0.157 的启动画面，并在 Codex 的启动对话框处停下，再输入 worker 简报（[@brennanb2025](https://github.com/brennanb2025)，[#23745](https://github.com/stablyai/orca/pull/23745)）
- 修复（runtime）：为没有其他空闲信号的 Agent 重新打开静默前台的 tui-idle 通道（[@brennanb2025](https://github.com/brennanb2025)，[#23598](https://github.com/stablyai/orca/pull/23598)）
- 修复（codex）：托管账号恢复时，已还原的 Codex 窗格不再因 SUN_LEN 失败（[@brennanb2025](https://github.com/brennanb2025)，[#23724](https://github.com/stablyai/orca/pull/23724)）
- 修复（agent-trust）：限制启动时仍要等待的 Codex 信任写入（[@nwparker](https://github.com/nwparker)，[#23380](https://github.com/stablyai/orca/pull/23380)）
- 修复（codex）：把历史桥接进新账号 home 之前先为它建索引（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#22971](https://github.com/stablyai/orca/pull/22971)）
- 修复（codex）：按 Agent 关闭 Codex 时，其 hook 条目也保持关闭（[@brennanb2025](https://github.com/brennanb2025)，[#23667](https://github.com/stablyai/orca/pull/23667)）
- 新增（orchestration）：让结构化聊天以自身身份运行编排（[@brennanb2025](https://github.com/brennanb2025)，[#22568](https://github.com/stablyai/orca/pull/22568)）
- 新增（orchestration）：把 worker 结果交给结构化聊天协调者（[@brennanb2025](https://github.com/brennanb2025)，[#22631](https://github.com/stablyai/orca/pull/22631)）
- 修复（terminal-wait）：无人值守启动遇到 Claude 信任对话框时会报告它，而不是超时或往里面打字（[@brennanb2025](https://github.com/brennanb2025)，[#22927](https://github.com/stablyai/orca/pull/22927)）
- 修复（zcode）：第一次派发 worker 前先等待 composer 就绪（[@Alex-wangyang](https://github.com/Alex-wangyang)，[#23374](https://github.com/stablyai/orca/pull/23374)）

#### Agent 与集成 {#v1-4-218-agents-agent-integrations}

> 内置 DeepSeek Harness、Freebuff、Qoder 和 CodeBuddy；显示 ZCode 历史与额度；Agent 启动和 hooks 更可靠。

- 新增（agents）：新增一等支持的 DeepSeek Harness（dsh）（[@nwparker](https://github.com/nwparker)，[#22468](https://github.com/stablyai/orca/pull/22468)）
- 新增（agents）：支持启动 Freebuff，并在侧栏显示状态（[@nwparker](https://github.com/nwparker)，[#23567](https://github.com/stablyai/orca/pull/23567)）
- 新增：新增一等支持的 Qoder CLI（[@nwparker](https://github.com/nwparker)，[#23581](https://github.com/stablyai/orca/pull/23581)）
- 新增：把 CodeBuddy 作为内置编程 Agent（[@nwparker](https://github.com/nwparker)，[#23740](https://github.com/stablyai/orca/pull/23740)）
- 新增（ai-vault）：显示 ZCode CLI 会话历史（[@guanbear](https://github.com/guanbear)，[#23513](https://github.com/stablyai/orca/pull/23513)）
- 新增（usage）：在当前 main 上显示 ZCode Coding Plan 额度（[@guanbear](https://github.com/guanbear)，[#23520](https://github.com/stablyai/orca/pull/23520)）
- 修复（opencode）：阻止 OpenCode 2 从已停用的共享 hooks 目录加载过期插件（[@OrcaWin](https://github.com/OrcaWin)，[#23500](https://github.com/stablyai/orca/pull/23500)）
- 修复（opencode）：插件重载后 OpenCode 2 窗格仍保持 Working（[@brennanb2025](https://github.com/brennanb2025)，[#23700](https://github.com/stablyai/orca/pull/23700)）
- 修复（claude）：只写入用户的 Claude 会接受的 hook 事件和 statusLine（[@brennanb2025](https://github.com/brennanb2025)，[#23614](https://github.com/stablyai/orca/pull/23614)）
- 修复（agent-launch）：进程尚未拉起就失败的启动，按失败报告并带上原因（[@brennanb2025](https://github.com/brennanb2025)，[#22913](https://github.com/stablyai/orca/pull/22913)）
- 修复（agent-launch）：只把发起请求的客户端视图切到新启动的标签（[@brennanb2025](https://github.com/brennanb2025)，[#22914](https://github.com/stablyai/orca/pull/22914)）
- Agent 启动携带发起它的界面（[@brennanb2025](https://github.com/brennanb2025)，[#23697](https://github.com/stablyai/orca/pull/23697)）
- 新增（analytics）：持久化本地用量会话身份（[@blaksmatic](https://github.com/blaksmatic)，[#18759](https://github.com/stablyai/orca/pull/18759)）
- 性能（usage）：一次写入持久化某次扫描的分析会话 ID（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23807](https://github.com/stablyai/orca/pull/23807)）

#### Native Chat {#v1-4-218-native-chat}

> 实验性结构化聊天更准确地报告状态、错误、子 Agent 和被中止的回合，并且可以自己运行编排。

- 修复（native-chat）：终端支撑的聊天按结构化聊天的回合状态渲染（[@brennanb2025](https://github.com/brennanb2025)，[#22090](https://github.com/stablyai/orca/pull/22090)）
- 新增（native-chat）：Codex 会话把子 Agent 写入宿主状态存储（[@brennanb2025](https://github.com/brennanb2025)，[#22553](https://github.com/stablyai/orca/pull/22553)）
- 重构（sidebar）：CLI 与结构化子项共用一行子 Agent，并与聊天条共享（[@brennanb2025](https://github.com/brennanb2025)，[#22565](https://github.com/stablyai/orca/pull/22565)）
- 修复（native-chat）：消息先被接受，再被送达（[@brennanb2025](https://github.com/brennanb2025)，[#22821](https://github.com/stablyai/orca/pull/22821)）
- 修复（native-chat）：会话在 Agent 结束后仍然保留（[@brennanb2025](https://github.com/brennanb2025)，[#22835](https://github.com/stablyai/orca/pull/22835)）
- 修复（native-chat）：主界面关闭标签时，只关闭重新打开的那个聊天（[@brennanb2025](https://github.com/brennanb2025)，[#22922](https://github.com/stablyai/orca/pull/22922)）
- 修复（native-chat）：失败的请求显示为失败（[@brennanb2025](https://github.com/brennanb2025)，[#22944](https://github.com/stablyai/orca/pull/22944)）
- 修复（native-chat）：用白话说明被拒绝的聊天写入，并把它留在所描述的那次写入旁边（[@brennanb2025](https://github.com/brennanb2025)，[#22999](https://github.com/stablyai/orca/pull/22999)）
- 修复（native-chat）：消息一经发送，Stop 就已就位（[@brennanb2025](https://github.com/brennanb2025)，[#23026](https://github.com/stablyai/orca/pull/23026)）
- 显示：空闲的 Claude 聊天显示其 effort，而不是空白选择器（[@brennanb2025](https://github.com/brennanb2025)，[#23106](https://github.com/stablyai/orca/pull/23106)）
- 修复（native-chat）：宿主用人话写下聊天失败，并在旁边附上类型化事实（[@brennanb2025](https://github.com/brennanb2025)，[#23116](https://github.com/stablyai/orca/pull/23116)）
- 修复（native-chat）：让多问题询问记录列出它的问题（[@brennanb2025](https://github.com/brennanb2025)，[#23451](https://github.com/stablyai/orca/pull/23451)）
- 修复（native-chat）：被已证实崩溃截断的回合显示为已中断（[@brennanb2025](https://github.com/brennanb2025)，[#23456](https://github.com/stablyai/orca/pull/23456)）
- 修复（native-chat）：不再杀掉只是继承了聊天 spawn 标记的进程（[@brennanb2025](https://github.com/brennanb2025)，[#23460](https://github.com/stablyai/orca/pull/23460)）
- 修复（codex）：停止时 provider 监督者比它的 provider 组活得更久（[@brennanb2025](https://github.com/brennanb2025)，[#23466](https://github.com/stablyai/orca/pull/23466)）
- 修复（claude）：在 POSIX provider 监督者下运行结构化 Claude（[@brennanb2025](https://github.com/brennanb2025)，[#23476](https://github.com/stablyai/orca/pull/23476)）
- 修复（native-chat）：按 Codex 提问的顺序保留其问题（[@brennanb2025](https://github.com/brennanb2025)，[#23502](https://github.com/stablyai/orca/pull/23502)）
- 修复（native-chat）：失败的 Codex 回合保留失败状态和「Worked for」（[@brennanb2025](https://github.com/brennanb2025)，[#23514](https://github.com/stablyai/orca/pull/23514)）
- 修复（codex）：Native Chat 线程按聊天所选模型打开（[@brennanb2025](https://github.com/brennanb2025)，[#23532](https://github.com/stablyai/orca/pull/23532)）
- 修复（native-chat）：回合进行时显示「Working for」条（[@brennanb2025](https://github.com/brennanb2025)，[#23537](https://github.com/stablyai/orca/pull/23537)）
- 修复（claude）：撤回排在已停止回合后面的后续消息，而不是默默丢掉（[@brennanb2025](https://github.com/brennanb2025)，[#23553](https://github.com/stablyai/orca/pull/23553)）
- 修复（native-chat）：把回合条留在打开它的那条 prompt 上（[@brennanb2025](https://github.com/brennanb2025)，[#23573](https://github.com/stablyai/orca/pull/23573)）
- 修复（native-chat）：子 Agent 的话按该子 Agent 呈现，绝不算作父级的（[@brennanb2025](https://github.com/brennanb2025)，[#23605](https://github.com/stablyai/orca/pull/23605)）
- 修复（native-chat）：每次聊天失败都在失败对象上用白话说明原因（[@brennanb2025](https://github.com/brennanb2025)，[#23608](https://github.com/stablyai/orca/pull/23608)）
- 修复（codex）：Codex 接手前回合已停止的消息会被撤回，而不是卡住（[@brennanb2025](https://github.com/brennanb2025)，[#23618](https://github.com/stablyai/orca/pull/23618)）
- 修复（native-chat）：Claude 折进正在进行的回合的消息不再把回合拆开（[@brennanb2025](https://github.com/brennanb2025)，[#23621](https://github.com/stablyai/orca/pull/23621)）
- 修复（native-chat）：不再在每次聊天启动时闪「still starting」（[@brennanb2025](https://github.com/brennanb2025)，[#23666](https://github.com/stablyai/orca/pull/23666)）
- 修复（native-chat）：按产生它们的回合分组聊天行（[@brennanb2025](https://github.com/brennanb2025)，[#23671](https://github.com/stablyai/orca/pull/23671)）
- 修复（native-chat）：只有 Codex 的回合完成才会结束 Codex 回合（[@brennanb2025](https://github.com/brennanb2025)，[#23682](https://github.com/stablyai/orca/pull/23682)）
- 修复（native-chat）：聊天是默认视图时，空工作区以聊天形式打开默认 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#23693](https://github.com/stablyai/orca/pull/23693)）
- 修复（native-chat）：去掉 #23682 已删除的 Codex 错误路径（[@nwparker](https://github.com/nwparker)，[#23801](https://github.com/stablyai/orca/pull/23801)）
- 修复（native-chat）：子回合停在 Codex 不会重试的错误上（[@nwparker](https://github.com/nwparker)，[#23808](https://github.com/stablyai/orca/pull/23808)）

#### 终端 {#v1-4-218-terminal}

> Reset Terminal 清掉卡住的输入模式；Orca 不再关掉仍在运行程序的键盘模式；终端保存与恢复更可靠。

- 新增（terminal）：新增 Reset Terminal，清除宿主和窗格上残留的输入模式（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23602](https://github.com/stablyai/orca/pull/23602)）
- 修复（terminal）：不再猜测应用已死并清掉它们的键盘模式（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23584](https://github.com/stablyai/orca/pull/23584)）
- 修复（terminal）：死亡证明被推翻后，仍能恢复该应用的输入模式（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23474](https://github.com/stablyai/orca/pull/23474)）
- 修复（terminal）：确认 shell 后清除 Kitty 输入镜像（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23483](https://github.com/stablyai/orca/pull/23483)）
- 修复（relay）：重置死掉的程序留在 SSH 终端上的输入模式（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23488](https://github.com/stablyai/orca/pull/23488)）
- 修复（terminal）：未选中时让 Cmd+C 到达自己管理选区的应用（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23597](https://github.com/stablyai/orca/pull/23597)）
- 修复（terminal）：阻止内联图片解码器耗尽渲染进程的 wasm 内存预算（[@OrcaWin](https://github.com/OrcaWin)，[#23499](https://github.com/stablyai/orca/pull/23499)）
- 修复（terminal）：不再把保存失败误诊为磁盘已满（[@nwparker](https://github.com/nwparker)，[#23708](https://github.com/stablyai/orca/pull/23708)）
- 改进：PTY 设备错误信息支持本地化（[@AmethystLiang](https://github.com/AmethystLiang)，[#23538](https://github.com/stablyai/orca/pull/23538)）
- 修复（workspace）：恢复的工作区在终端重连前先绘制（[@brennanb2025](https://github.com/brennanb2025)，[#22810](https://github.com/stablyai/orca/pull/22810)）
- 修复（terminal）：重试首个终端的播种，直到决定生效（[@brennanb2025](https://github.com/brennanb2025)，[#22919](https://github.com/stablyai/orca/pull/22919)）
- 修复（terminal）：每次显式关闭终端都经同一主事务提交（[@brennanb2025](https://github.com/brennanb2025)，[#22929](https://github.com/stablyai/orca/pull/22929)）
- 修复（terminal）：主进程记录每次标签关闭，播种读取这些记录（[@brennanb2025](https://github.com/brennanb2025)，[#22955](https://github.com/stablyai/orca/pull/22955)）
- 修复（terminal）：统一的有意停止登记，以及每次运行的拉起和输入事实（[@brennanb2025](https://github.com/brennanb2025)，[#22989](https://github.com/stablyai/orca/pull/22989)）
- 修复（terminal）：恢复说明不再把仍在运行的远程 Agent 窗格刷空白（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23491](https://github.com/stablyai/orca/pull/23491)）
- 修复（runtime）：在流结束前退役已退出的终端（[@brennanb2025](https://github.com/brennanb2025)，[#23492](https://github.com/stablyai/orca/pull/23492)）
- 修复（terminal）：源窗格绑定时揭示分屏（[@nwparker](https://github.com/nwparker)，[#23692](https://github.com/stablyai/orca/pull/23692)）
- 修复（terminal）：远程窗格重新挂载时保留正在输入的内容（[@nwparker](https://github.com/nwparker)，[#23701](https://github.com/stablyai/orca/pull/23701)）

#### 移动应用与已配对客户端 {#v1-4-218-mobile-app-paired-clients}

> Windows 宿主上，手机滑动又能滚动 Codex；应用会提示有更新可安装；终端流和键盘布局表现更好。

- 修复（terminal）：随鼠标跟踪恢复鼠标格式，手机滑动不再往 Codex 里打字（[@brennanb2025](https://github.com/brennanb2025)，[#23946](https://github.com/stablyai/orca/pull/23946)）
- 新增（mobile）：有更新的应用二进制可安装时提示用户（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23755](https://github.com/stablyai/orca/pull/23755)）
- 新增（mobile）：键盘像原生屏幕一样盖住页面，shell 报告其高度（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23110](https://github.com/stablyai/orca/pull/23110)）
- 修复（mobile）：原生桌面模式的键盘抬升留在屏幕内；度量带上行距（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23070](https://github.com/stablyai/orca/pull/23070)）
- 修复（mobile）：页面按 RN 布局把终端帧推进文档（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23079](https://github.com/stablyai/orca/pull/23079)）
- 修复（mobile）：按文档报告的单元格框确定终端首次订阅的尺寸（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23080](https://github.com/stablyai/orca/pull/23080)）
- 修复（mobile）：AI 按钮启动的 Agent 走 agent.launch，而不是裸 shell（[@brennanb2025](https://github.com/brennanb2025)，[#22762](https://github.com/stablyai/orca/pull/22762)）
- 修复（mobile）：在直连上按请求退订会话标签（[@brennanb2025](https://github.com/brennanb2025)，[#22943](https://github.com/stablyai/orca/pull/22943)）
- 修复（mobile）：释放在重放的取消之后才 ready 的流（[@brennanb2025](https://github.com/brennanb2025)，[#22945](https://github.com/stablyai/orca/pull/22945)）
- 修复（runtime）：请求到达时登记手机终端订阅（[@brennanb2025](https://github.com/brennanb2025)，[#22948](https://github.com/stablyai/orca/pull/22948)）
- 修复（mobile）：一次只显示一张审查表，审查屏不再卡死（[@brennanb2025](https://github.com/brennanb2025)，[#22951](https://github.com/stablyai/orca/pull/22951)）
- 修复（runtime）：让手机用打开它的那个请求结束终端流（[@brennanb2025](https://github.com/brennanb2025)，[#23006](https://github.com/stablyai/orca/pull/23006)）
- 修复（runtime）：请求到达时登记手机标签列表流（[@brennanb2025](https://github.com/brennanb2025)，[#23045](https://github.com/stablyai/orca/pull/23045)）
- 修复（mobile）：冷恢复后，已配对客户端重新推导保留的终端（[@brennanb2025](https://github.com/brennanb2025)，[#23109](https://github.com/stablyai/orca/pull/23109)）
- 修复（mobile）：把键入的问题回答作为结构化回答发送（[@brennanb2025](https://github.com/brennanb2025)，[#23458](https://github.com/stablyai/orca/pull/23458)）
- 修复（runtime）：桌面已经挂载的窗格，立即应答 terminal.subscribe（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23512](https://github.com/stablyai/orca/pull/23512)）
- 修复（mobile）：桌面宿主卡片的每一行都左对齐（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23673](https://github.com/stablyai/orca/pull/23673)）
- 修复（mobile）：过大的 Markdown 读取改为截断，而不是失败（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23676](https://github.com/stablyai/orca/pull/23676)）

#### 浏览器 {#v1-4-218-browser}

> 崩溃页面在调整视口时不再拖垮 Orca，在分组间移动的浏览器标签不再变空白。

- 修复（browser）：崩溃页面在调整视口大小时不再让 Orca 崩溃（[@brennanb2025](https://github.com/brennanb2025)，[#23852](https://github.com/stablyai/orca/pull/23852)）
- 修复（deps）：升级到 Electron 43.7.5，分离的 webview 不再把浏览器标签刷成空白（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23586](https://github.com/stablyai/orca/pull/23586)）
- 修复（browser）：标签身份只归一个所有者，视口预设不再丢掉 client hints（[@brennanb2025](https://github.com/brennanb2025)，[#23718](https://github.com/stablyai/orca/pull/23718)）
- 修复（browser）：SSH 路由失败时保留卡片，同时宿主重新拨号（[@brennanb2025](https://github.com/brennanb2025)，[#23465](https://github.com/stablyai/orca/pull/23465)）
- 修复（browser）：离开移动端视口预设后恢复悬停（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#22846](https://github.com/stablyai/orca/pull/22846)）
- 浏览器标签放置复查（[@AmethystLiang](https://github.com/AmethystLiang)，[#23462](https://github.com/stablyai/orca/pull/23462)）

#### 标签、侧栏与状态栏 {#v1-4-218-tabs-sidebar-status-bar}

> 新标签搜索排序更好，Cmd+J 保持终端焦点，侧栏和状态栏布局更整齐。

- Tab opening ranking（[@AmethystLiang](https://github.com/AmethystLiang)，[#23435](https://github.com/stablyai/orca/pull/23435)）
- 修复：Cmd+J 唤醒工作区时保持终端焦点（[@nwparker](https://github.com/nwparker)，[#23546](https://github.com/stablyai/orca/pull/23546)）
- 修复（sidebar）：在 worktree 卡片边缘裁切溢出的箭头（[@nwparker](https://github.com/nwparker)，[#23566](https://github.com/stablyai/orca/pull/23566)）
- 修复（sidebar）：把 Agent 子项展开控件移到右侧（[@brennanb2025](https://github.com/brennanb2025)，[#23577](https://github.com/stablyai/orca/pull/23577)）
- 修复（status-bar）：仅折叠宽度变化时重新测量折叠层级（[@AmethystLiang](https://github.com/AmethystLiang)，[#23773](https://github.com/stablyai/orca/pull/23773)）
- 修复（setup）：去掉 wait-for-setup 的辅助说明（[@nwparker](https://github.com/nwparker)，[#23799](https://github.com/stablyai/orca/pull/23799)）

#### 编辑器、diff 与文件 {#v1-4-218-editor-diffs-files}

> 大 diff 不再让 Orca 卡死，Markdown 文档查找更快。

- 修复（renderer）：阻止模态 toast 规则把大 diff 卡死（[@brennanb2025](https://github.com/brennanb2025)，[#23721](https://github.com/stablyai/orca/pull/23721)）
- 修复：限制合并 diff 编辑器数量，并收窄聊天样式失效范围（[@nwparker](https://github.com/nwparker)，[#23725](https://github.com/stablyai/orca/pull/23725)）
- 修复（editor）：聚焦某一行时保留合并 diff 的滚动位置（[@nwparker](https://github.com/nwparker)，[#23735](https://github.com/stablyai/orca/pull/23735)）
- 用捆绑的 ripgrep 加快 Markdown 文档发现（[@nwparker](https://github.com/nwparker)，[#23306](https://github.com/stablyai/orca/pull/23306)）

#### SSH、Git 与集成 {#v1-4-218-ssh-git-integrations}

> 远程 Agent 设置在读取失败后仍保留，部分克隆仓库能被正确识别，Linear 接受以数字开头的团队键。

- 修复（ssh）：读取失败后不要覆盖远程 Agent 配置（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#22644](https://github.com/stablyai/orca/pull/22644)）
- 修复：从正确的远程识别部分克隆仓库（[@nwparker](https://github.com/nwparker)，[#23504](https://github.com/stablyai/orca/pull/23504)）
- 修复（linear）：接受以数字开头的团队键（[@leilei3167](https://github.com/leilei3167)，[#23423](https://github.com/stablyai/orca/pull/23423)）

#### 可靠性与性能 {#v1-4-218-reliability-performance}

> 设置搜索、Agent 状态更新和浏览器版 Orca 少做重复工作。

- 性能：搜索时保留匹配的 General 设置分区（[@nwparker](https://github.com/nwparker)，[#23177](https://github.com/stablyai/orca/pull/23177)）
- 性能：搜索时保留匹配的 Accounts 设置分区（[@nwparker](https://github.com/nwparker)，[#23192](https://github.com/stablyai/orca/pull/23192)）
- 修复（agent-session）：拆卸返回前等待进行中的会话存储写入（[@nwparker](https://github.com/nwparker)，[#23545](https://github.com/stablyai/orca/pull/23545)）
- 修复（agent-hooks）：按结构比较状态行，而不是把两边都序列化（[@brennanb2025](https://github.com/brennanb2025)，[#23585](https://github.com/stablyai/orca/pull/23585)）
- 修复（tab-group）：每个标签组只测量一次回退窗格几何，且仅在可见时（[@brennanb2025](https://github.com/brennanb2025)，[#23592](https://github.com/stablyai/orca/pull/23592)）

#### 测试、CI 与维护 {#v1-4-218-tests-ci-maintenance}

> CI 更快、跑在更便宜的 runner 上；Windows 发布要求已签名二进制；一项 CI 审计分片改动被回退。

- 性能（ci）：把 anti-slop 审计分片到多个进程，而不是单个 JS 运行时（[@nwparker](https://github.com/nwparker)，[#23543](https://github.com/stablyai/orca/pull/23543)）
- 回退（ci）：去掉 anti-slop 进程分片，它在 4-vCPU runner 上测出来只是噪声（[@nwparker](https://github.com/nwparker)，[#23575](https://github.com/stablyai/orca/pull/23575)）
- 修复（windows）：要求发布二进制已签名，并识别 CLI 启动器（[@nwparker](https://github.com/nwparker)，[#23680](https://github.com/stablyai/orca/pull/23680)）
- 修复（release）：阻止发布策略删掉流水线切出的 release（[@AmethystLiang](https://github.com/AmethystLiang)，[#23669](https://github.com/stablyai/orca/pull/23669)）
- 修复（i18n）：清掉 #23799 已删除的 wait-for-setup 帮助文案（[@nwparker](https://github.com/nwparker)，[#23802](https://github.com/stablyai/orca/pull/23802)）
- 文档（readme）：去掉 TestFlight 链接（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23660](https://github.com/stablyai/orca/pull/23660)）
- 文档：更新 GitHub star 历史图（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23661](https://github.com/stablyai/orca/pull/23661)）
- CI：减少重复的 runner 工作，并校验受影响测试选择（[@nwparker](https://github.com/nwparker)，[#23540](https://github.com/stablyai/orca/pull/23540)）
- 性能（ci）：orcad smoke 不再空等 15 秒，静态任务不再去取它会跳过的移动包（[@nwparker](https://github.com/nwparker)，[#23541](https://github.com/stablyai/orca/pull/23541)）
- 性能（ci）：升级 i18next-cli 1.74.1，提取时不再为找叶子而重扫每个键（[@nwparker](https://github.com/nwparker)，[#23550](https://github.com/stablyai/orca/pull/23550)）
- 性能（ci）：相对合并提交的第一父提交做 diff，以便 PR checkout 可以浅克隆（[@nwparker](https://github.com/nwparker)，[#23562](https://github.com/stablyai/orca/pull/23562)）
- 性能（ci）：在 Linux 上缓存 pnpm 校验记录（[@nwparker](https://github.com/nwparker)，[#23568](https://github.com/stablyai/orca/pull/23568)）
- 性能（ci）：在免费 ARM runner 上跑静态分析（[@nwparker](https://github.com/nwparker)，[#23576](https://github.com/stablyai/orca/pull/23576)）
- 性能（ci）：不再重复共享的 Linux 下载缓存（[@nwparker](https://github.com/nwparker)，[#23578](https://github.com/stablyai/orca/pull/23578)）
- 性能（ci）：再把六个任务挪到免费 ARM runner（[@nwparker](https://github.com/nwparker)，[#23594](https://github.com/stablyai/orca/pull/23594)）
- CI：跳过无关安装，并共享 xterm 构建依赖（[@nwparker](https://github.com/nwparker)，[#23607](https://github.com/stablyai/orca/pull/23607)）
- CI：临时 Linux 测试包使用更快的 gzip（[@nwparker](https://github.com/nwparker)，[#23609](https://github.com/stablyai/orca/pull/23609)）
- 性能（ci）：使用四个 ARM 测试 worker，并去掉重复编译（[@nwparker](https://github.com/nwparker)，[#23685](https://github.com/stablyai/orca/pull/23685)）
- 性能（ci）：在静态分析门禁之前而不是之后规划单元测试分片（[@nwparker](https://github.com/nwparker)，[#23743](https://github.com/stablyai/orca/pull/23743)）
- 性能（ci）：把门禁上的建议性单元选择证据拿掉（[@nwparker](https://github.com/nwparker)，[#23776](https://github.com/stablyai/orca/pull/23776)）
- 性能（ci）：每个 pull request 占用更少并发槽（[@nwparker](https://github.com/nwparker)，[#23810](https://github.com/stablyai/orca/pull/23810)）
- 杂项（ci）：不再自动把社区 PR 归档到项目板（[@nwparker](https://github.com/nwparker)，[#23796](https://github.com/stablyai/orca/pull/23796)）
- CI（e2e）：SSH 浏览器路由源码变化时跑其 e2e（[@brennanb2025](https://github.com/brennanb2025)，[#23498](https://github.com/stablyai/orca/pull/23498)）
- 修复（ci）：squash 合并后的 RPC 录制 pin 仍可通过其 pull request 找到（[@brennanb2025](https://github.com/brennanb2025)，[#23720](https://github.com/stablyai/orca/pull/23720)）
- 测试（windows）：PowerShell 冷启动慢时，NSIS 能力探测不再失败（[@nwparker](https://github.com/nwparker)，[#23381](https://github.com/stablyai/orca/pull/23381)）
- 测试（e2e）：稳定终端快捷键 Kitty 与 Ctrl+C 测试（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23472](https://github.com/stablyai/orca/pull/23472)）
- 测试（usage）：给 Codex fixture 加上长上下文 token 字段（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23478](https://github.com/stablyai/orca/pull/23478)）
- 测试（e2e）：修复失败并提高稳定性（[@AmethystLiang](https://github.com/AmethystLiang)，[#23480](https://github.com/stablyai/orca/pull/23480)）
- 修复（bench）：通过 jiti 加载被测基准模块（[@nwparker](https://github.com/nwparker)，[#23482](https://github.com/stablyai/orca/pull/23482)）
- 测试（e2e）：在 Option 组合输入测试里保持武装 Kitty 的应用存活（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23495](https://github.com/stablyai/orca/pull/23495)）
- 重构（agent-resume）：给每个 resume-note 读取器单独的具名检查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23497](https://github.com/stablyai/orca/pull/23497)）
- 测试（cross-version）：已发布客户端的能力来自它自己的 release（[@brennanb2025](https://github.com/brennanb2025)，[#23533](https://github.com/stablyai/orca/pull/23533)）
- 测试（mobile）：在 #22951 之后把 RPC 录制语料重新钉到 main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23535](https://github.com/stablyai/orca/pull/23535)）
- 测试（native-chat）：三个测试里等待异步历史和日志快照（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23560](https://github.com/stablyai/orca/pull/23560)）
- 测试（mobile）：在 #23080 之后把 RPC 录制语料重新钉到 main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23565](https://github.com/stablyai/orca/pull/23565)）
- 测试（e2e）：在减少动效下采集侧栏测量行基线（[@brennanb2025](https://github.com/brennanb2025)，[#23588](https://github.com/stablyai/orca/pull/23588)）
- 测试（claude）：修正排队发送取消的 CI 预期（[@nwparker](https://github.com/nwparker)，[#23675](https://github.com/stablyai/orca/pull/23675)）
- 修复（ci）：修复终端链接处理与 E2E 恢复 fixture（[@nwparker](https://github.com/nwparker)，[#23677](https://github.com/stablyai/orca/pull/23677)）
- 测试：在隔离的可见显示器上测量指针手势（[@nwparker](https://github.com/nwparker)，[#23678](https://github.com/stablyai/orca/pull/23678)）
- 测试：通过宿主拥有的状态退役休眠 worker（[@nwparker](https://github.com/nwparker)，[#23686](https://github.com/stablyai/orca/pull/23686)）
- 测试（e2e）：给滚轮探测一个正在运行的 TUI fixture（[@nwparker](https://github.com/nwparker)，[#23691](https://github.com/stablyai/orca/pull/23691)）
- 测试：拆卸前完成侧栏懒加载导入（[@nwparker](https://github.com/nwparker)，[#23694](https://github.com/stablyai/orca/pull/23694)）
- 测试（browser）：窄窗格里快捷键作用域检查仍然有效（[@nwparker](https://github.com/nwparker)，[#23709](https://github.com/stablyai/orca/pull/23709)）
- 测试（terminal）：宿主停放前等待诱饵窗格（[@nwparker](https://github.com/nwparker)，[#23729](https://github.com/stablyai/orca/pull/23729)）
- 测试（browser）：开始帧请求前先创建探测正文（[@nwparker](https://github.com/nwparker)，[#23730](https://github.com/stablyai/orca/pull/23730)）
- 测试：揭示后等待远程终端网格收敛（[@nwparker](https://github.com/nwparker)，[#23738](https://github.com/stablyai/orca/pull/23738)）
- 测试（mobile）：在 #22762 之后把 RPC 录制语料重新钉到 main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23757](https://github.com/stablyai/orca/pull/23757)）
- 性能（test）：去掉过时的结构快照（[@nwparker](https://github.com/nwparker)，[#23777](https://github.com/stablyai/orca/pull/23777)）
- 测试（native-chat）：main 上的 Codex 子项测试预期回合在自己的 turn/completed 上结束（[@brennanb2025](https://github.com/brennanb2025)，[#23783](https://github.com/stablyai/orca/pull/23783)）
- 测试（status-bar）：覆盖对更宽松密度级别的重新探测（[@AmethystLiang](https://github.com/AmethystLiang)，[#23793](https://github.com/stablyai/orca/pull/23793)）
- 测试：去掉断言源码文本而不是行为的无用测试（[@nwparker](https://github.com/nwparker)，[#23815](https://github.com/stablyai/orca/pull/23815)）
- 测试：去掉无断言探测、复制来的清单和导出形状检查（[@nwparker](https://github.com/nwparker)，[#23816](https://github.com/stablyai/orca/pull/23816)）

### 新贡献者 {#v1-4-218-contributors}

- [@blaksmatic](https://github.com/blaksmatic) 首次贡献于 [#18759](https://github.com/stablyai/orca/pull/18759)
- [@leilei3167](https://github.com/leilei3167) 首次贡献于 [#23423](https://github.com/stablyai/orca/pull/23423)
- [@Alex-wangyang](https://github.com/Alex-wangyang) 首次贡献于 [#23374](https://github.com/stablyai/orca/pull/23374)
- [@guanbear](https://github.com/guanbear) 首次贡献于 [#23513](https://github.com/stablyai/orca/pull/23513)

---

**完整变更对照：** [v1.4.217...v1.4.218](https://github.com/stablyai/orca/compare/v1.4.217...v1.4.218)

## v1.4.217 Codex 0.158 worker 恢复启动，标签各自独立运行 {#v1-4-217}

2026年9月29日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.217)

感谢使用 Orca，也感谢一直以来的支持。

这个补丁基于 9 月 27 日的 daily build，并拣入了 main 上的修复。那之后合入 main 的 pull request 不在这次构建里。

### 简要说明 {#v1-4-217-short}

**Codex：** 在当前 Codex（0.158）上，Codex worker 恢复启动。Orca 之前一直在等 Codex 0.158 已去掉的欢迎屏标签，于是每个 Codex worker 都超时；现在改为识别 Codex 的空输入框。带着模型或推理力度启动 Codex worker 也不再卡住。

**Codex 标签各自独立：** 在 Codex 0.157 及更新版本上，Orca 里每个 Codex 标签原先共用第一个标签拉起的后台服务器，于是状态和结果记到错误的标签，关掉第一个标签会拖垮其余标签。现在 Orca 终端里的每个 Codex 标签各自跑自己的服务器，关掉一个不再拖垮其他。更新后新开的终端立即生效；已经打开的终端保持旧行为，直到重新打开。若要继续共用服务器，在 shell 启动文件里加上 `export ORCA_CODEX_ISOLATE=0`。默认的代价是：Codex 的 “Run in background”、`codex agents`，以及从 Codex 桌面应用或 IDE 打开会话，都看不到在 Orca 里启动的会话，而且多开标签更占内存。

**状态栏与工作区界面：** 状态栏适配小屏幕：多余 Agent 先收进 “+N” 徽章，然后状态标签才缩成图标。紧凑 Agent 行会强调未读，浮动终端 Agent 的活动线程会打开右侧窗格。

**远程与 SSH：** 支持会询问验证码或其他多因素提示的 SSH 主机；远程文件访问遵循仓库所有权；被中断的远程安装可以恢复，且不会删掉仍在使用的文件。

**编辑器与浏览器：** Solidity、Typst 和 Twig 文件获得高亮，富文本编辑后 Markdown 源码仍在，窄屏上浏览器工具折进菜单。

**可靠性：** 找不到终端的编排 worker 会被正确停止，而不是越积越多；窗口重载或请求取消后，许多后台任务会自行清理。

---

### 产品体验 {#v1-4-217-product}

#### Codex 与编排 {#v1-4-217-codex-orchestration}

> Codex worker 在 Codex 0.158 上恢复启动；Orca 终端里每个 Codex 标签各自运行；停止 worker 会可靠地结束其进程。

- 修复（terminal）：Orca 终端里的 Codex 不再使用共享后台服务器（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23900](https://github.com/stablyai/orca/pull/23900)）
- 修复（daemon）：把 Codex 无守护进程的 shell 启动转入全新的 v37 daemon（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23907](https://github.com/stablyai/orca/pull/23907)）
- 修复（runtime）：在所有版本上把安静的 Codex composer 判定为就绪（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23765](https://github.com/stablyai/orca/pull/23765)）
- 修复（runtime）：从实时画面读取 Codex 是否就绪（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23475](https://github.com/stablyai/orca/pull/23475)）
- 修复：等待排队中的 Codex 信任预检完成（[@nwparker](https://github.com/nwparker)，[#23148](https://github.com/stablyai/orca/pull/23148)）
- 修复（orchestration）：重新落地进程化身回收，清理过期的 worker 终端句柄（[@brennanb2025](https://github.com/brennanb2025)，[#23583](https://github.com/stablyai/orca/pull/23583)）
- 修复（orchestration）：把派发邮件和回复交给当前 lead（[@nwparker](https://github.com/nwparker)，[#23325](https://github.com/stablyai/orca/pull/23325)）

#### 其他 Agent 与 Native Chat {#v1-4-217-other-agents-native-chat}

> OpenCode、Hermes、Kimi、Grok 和 Claude 集成更安全地处理边界情况，Native Chat 里的长问题可以展开。

- 修复：prompt setup 与清理失败后释放 OpenCode 2 hooks（[@nwparker](https://github.com/nwparker)，[#23209](https://github.com/stablyai/orca/pull/23209)）
- 尊重已禁用的 OpenCode 变体，并安全刷新 WSL 设置（[@nwparker](https://github.com/nwparker)，[#23328](https://github.com/stablyai/orca/pull/23328)）
- 保留：安装 hook 时处理 Hermes YAML 配置（[@nwparker](https://github.com/nwparker)，[#23324](https://github.com/stablyai/orca/pull/23324)）
- 修复（kimi）：写入途中 config.toml 被删除时不再崩溃（[@nwparker](https://github.com/nwparker)，[#23293](https://github.com/stablyai/orca/pull/23293)）
- 修复（grok）：显式零额度时显示零用量（[@nwparker](https://github.com/nwparker)，[#23321](https://github.com/stablyai/orca/pull/23321)）
- 修复（native-chat）：让「Asked」行展开长问题（[@brennanb2025](https://github.com/brennanb2025)，[#22941](https://github.com/stablyai/orca/pull/22941)）
- 修复（claude）：释放权限提示的中止监听器（[@OrcaWin](https://github.com/OrcaWin)，[#23195](https://github.com/stablyai/orca/pull/23195)）
- 性能（native-chat）：重载后释放过时的 transcript 查看器（[@nwparker](https://github.com/nwparker)，[#22982](https://github.com/stablyai/orca/pull/22982)）

#### 状态栏、侧栏与活动 {#v1-4-217-status-bar-sidebar-activity}

> 状态栏适配小屏幕，紧凑 Agent 行显示未读，活动线程会打开浮动终端 Agent。

- 修复（status-bar）：状态标签缩成仅图标之前，先把 Agent 收进 +N（[@AmethystLiang](https://github.com/AmethystLiang)，[#23689](https://github.com/stablyai/orca/pull/23689)）
- 修复（sidebar）：紧凑 Agent 行强调未读（[@nwparker](https://github.com/nwparker)，[#23327](https://github.com/stablyai/orca/pull/23327)）
- 修复（sidebar）：选择工作区时保留列表焦点（[@nwparker](https://github.com/nwparker)，[#23320](https://github.com/stablyai/orca/pull/23320)）
- 新增（activity）：在浮动终端工作区里揭示线程（[@AmethystLiang](https://github.com/AmethystLiang)，[#23239](https://github.com/stablyai/orca/pull/23239)）

#### 终端 {#v1-4-217-terminal}

> 按安装布局识别 Git Bash，日文文件链接保持完整，Windows 终端更稳健。

- 修复（terminal）：按安装布局识别 Git Bash 启动器（[@nwparker](https://github.com/nwparker)，[#23308](https://github.com/stablyai/orca/pull/23308)）
- 修复（terminal）：文件链接里保留日文间隔号和波浪号（[@nwparker](https://github.com/nwparker)，[#23322](https://github.com/stablyai/orca/pull/23322)）
- 修复（windows）：保留已迁移的终端和原生进程扫描（[@OrcaWin](https://github.com/OrcaWin)，[#22872](https://github.com/stablyai/orca/pull/22872)）
- 修复（windows）：同步原生终端表的生命周期（[@OrcaWin](https://github.com/OrcaWin)，[#23257](https://github.com/stablyai/orca/pull/23257)）
- 性能：限制共享路径扫描，并同步 Windows PTY 访问（[@nwparker](https://github.com/nwparker)，[#23194](https://github.com/stablyai/orca/pull/23194)）
- 性能：无关设置更新时保留终端预览（[@nwparker](https://github.com/nwparker)，[#23099](https://github.com/stablyai/orca/pull/23099)）

#### 编辑器、搜索与文件 {#v1-4-217-editor-search-files}

> Solidity、Typst 和 Twig 获得语法高亮，富文本编辑后 Markdown 源码仍在，分组搜索过滤保留逗号。

- 修复（editor）：高亮 Solidity 文件（[@anajuliabit](https://github.com/anajuliabit)，[#20928](https://github.com/stablyai/orca/pull/20928)）
- 新增（editor）：高亮 Typst 文件和 diff（[@nwparker](https://github.com/nwparker)，[#23323](https://github.com/stablyai/orca/pull/23323)）
- 修复（editor）：在文件和 diff 里高亮 Twig 模板（[@nwparker](https://github.com/nwparker)，[#23366](https://github.com/stablyai/orca/pull/23366)）
- 修复（editor）：识别所有捆绑的 Monaco 语言关联（[@nwparker](https://github.com/nwparker)，[#23371](https://github.com/stablyai/orca/pull/23371)）
- 修复（editor）：富文本编辑后保留 Markdown 源码（[@nwparker](https://github.com/nwparker)，[#23280](https://github.com/stablyai/orca/pull/23280)）
- 修复（search）：分组文件过滤里保留逗号（[@nwparker](https://github.com/nwparker)，[#23319](https://github.com/stablyai/orca/pull/23319)）
- 修复：setup 失败后删除 PDF 导出临时文件（[@nwparker](https://github.com/nwparker)，[#23130](https://github.com/stablyai/orca/pull/23130)）
- 性能：避免反复扫描不完整的笔记本输出帧（[@nwparker](https://github.com/nwparker)，[#23138](https://github.com/stablyai/orca/pull/23138)）

#### 浏览器 {#v1-4-217-browser}

> 窄屏上浏览器工具折进菜单，带显式端口的地址能正确打开。

- 用工具折叠实现响应式工具栏溢出（[@AmethystLiang](https://github.com/AmethystLiang)，[#23265](https://github.com/stablyai/orca/pull/23265)）
- 修复（browser）：打开带显式端口的域名（[@nwparker](https://github.com/nwparker)，[#23318](https://github.com/stablyai/orca/pull/23318)）

#### 远程、SSH 与 WSL {#v1-4-217-remote-ssh-wsl}

> SSH 支持多因素（keyboard-interactive）登录，远程文件访问尊重仓库所有权，远程安装能干净恢复。

- 新增（ssh）：支持 keyboard-interactive 认证（MFA）（[@Chihen-Tai](https://github.com/Chihen-Tai)，[#15588](https://github.com/stablyai/orca/pull/15588)）
- 保持：工作区自己更新后，SSH 终端被停放（[@OrcaWin](https://github.com/OrcaWin)，[#23193](https://github.com/stablyai/orca/pull/23193)）
- 修复：本地文件访问排除规范 SSH 根（[@nwparker](https://github.com/nwparker)，[#23196](https://github.com/stablyai/orca/pull/23196)）
- 修复：worktree 列表尊重规范 SSH 所有权（[@nwparker](https://github.com/nwparker)，[#23198](https://github.com/stablyai/orca/pull/23198)）
- 修复：把文件系统根授权绑定到仓库所有者（[@nwparker](https://github.com/nwparker)，[#23206](https://github.com/stablyai/orca/pull/23206)）
- 修复（ssh）：重试时保留被中断的安装结果（[@OrcaWin](https://github.com/OrcaWin)，[#23273](https://github.com/stablyai/orca/pull/23273)）
- 修复（ssh）：恢复被遗弃的缓存，而不删除仍在使用的依赖（[@OrcaWin](https://github.com/OrcaWin)，[#23281](https://github.com/stablyai/orca/pull/23281)）
- 修复（ssh）：Bun 归档解压无法开始时，指出缺少 unzip（[@nwparker](https://github.com/nwparker)，[#23298](https://github.com/stablyai/orca/pull/23298)）
- 避免：未变化的 SSH 仓库目录不再写存储更新（[@nwparker](https://github.com/nwparker)，[#23034](https://github.com/stablyai/orca/pull/23034)）
- 修复（worktrees）：在 BusyBox WSL 发行版上清掉孤立清理（[@nwparker](https://github.com/nwparker)，[#23296](https://github.com/stablyai/orca/pull/23296)）
- 修复（projects）：为按运行时寻址的仓库行补全 git remote 身份（[@nwparker](https://github.com/nwparker)，[#23300](https://github.com/stablyai/orca/pull/23300)）
- 修复（persistence）：报告被丢弃的跨主机仓库更新，而不是静默失败（[@nwparker](https://github.com/nwparker)，[#23379](https://github.com/stablyai/orca/pull/23379)）

#### 源码管理与代码审查 {#v1-4-217-source-control-code-review}

> Pull request 与审查查找保留最新结果，Gitea 查找能正确刷新。

- 修复：刷新严格 Gitea 查找，并同步 Windows PTY 访问（[@nwparker](https://github.com/nwparker)，[#23162](https://github.com/stablyai/orca/pull/23162)）
- 性能（github）：在待处理请求之后合并更强的刷新（[@nwparker](https://github.com/nwparker)，[#22970](https://github.com/stablyai/orca/pull/22970)）
- 修复：保留较新的 pull request 查找所有权（[@nwparker](https://github.com/nwparker)，[#23119](https://github.com/stablyai/orca/pull/23119)）
- 修复：保留较新的托管审查查找所有权（[@nwparker](https://github.com/nwparker)，[#23126](https://github.com/stablyai/orca/pull/23126)）
- 修复：生成审查时观察关联 issue 的失败（[@nwparker](https://github.com/nwparker)，[#23166](https://github.com/stablyai/orca/pull/23166)）
- 修复：缓存失效后退役过期的审查查找（[@nwparker](https://github.com/nwparker)，[#23182](https://github.com/stablyai/orca/pull/23182)）

#### 可靠性与性能 {#v1-4-217-reliability-performance}

> 重载或取消后，Orca 释放被遗弃的工作、监听器和流，并跳过重复扫描和更新。

- 性能（emulator）：渲染进程重载后停止过时的视频流（[@nwparker](https://github.com/nwparker)，[#22967](https://github.com/stablyai/orca/pull/22967)）
- 性能（mobile）：合并停滞的连接日志持久化（[@nwparker](https://github.com/nwparker)，[#22973](https://github.com/stablyai/orca/pull/22973)）
- 取消被遗弃的中继搜索工作（[@nwparker](https://github.com/nwparker)，[#22997](https://github.com/stablyai/orca/pull/22997)）
- 性能（push）：保留清理不重叠，也不放慢排空（[@nwparker](https://github.com/nwparker)，[#23001](https://github.com/stablyai/orca/pull/23001)）
- 性能（relay）：释放被拒绝的首帧连接［权衡］（[@nwparker](https://github.com/nwparker)，[#23011](https://github.com/stablyai/orca/pull/23011)）
- 性能（relay）：释放已取消的 AI Vault 启动请求（[@nwparker](https://github.com/nwparker)，[#23027](https://github.com/stablyai/orca/pull/23027)）
- 性能（history）：合并墓碑目录的重新扫描（[@nwparker](https://github.com/nwparker)，[#23031](https://github.com/stablyai/orca/pull/23031)）
- 把中继容量检查限定到所请求的 cell（[@nwparker](https://github.com/nwparker)，[#23036](https://github.com/stablyai/orca/pull/23036)）
- 性能：避免反复编码仍保留的 VM recipe 输出（[@nwparker](https://github.com/nwparker)，[#23048](https://github.com/stablyai/orca/pull/23048)）
- 修复：关闭被遗弃的 PDF.js 开发资源流（[@nwparker](https://github.com/nwparker)，[#23054](https://github.com/stablyai/orca/pull/23054)）
- 修复：渲染文档结束时释放文件监视（[@nwparker](https://github.com/nwparker)，[#23055](https://github.com/stablyai/orca/pull/23055)）
- 修复：关闭被遗弃的静态 Web 资源读取器（[@nwparker](https://github.com/nwparker)，[#23062](https://github.com/stablyai/orca/pull/23062)）
- 修复：渲染进程清理后停止过期的运行时事件工作（[@nwparker](https://github.com/nwparker)，[#23066](https://github.com/stablyai/orca/pull/23066)）
- 修复：语音 worker 退出时释放听写会话监听器（[@nwparker](https://github.com/nwparker)，[#23077](https://github.com/stablyai/orca/pull/23077)）
- 性能：跳过未使用的 Linux 无障碍子项枚举（[@nwparker](https://github.com/nwparker)，[#23085](https://github.com/stablyai/orca/pull/23085)）
- 性能：项目和文件夹目录未变时跳过存储通知（[@nwparker](https://github.com/nwparker)，[#23104](https://github.com/stablyai/orca/pull/23104)）
- 性能：无关错误跳过 macOS DNS 探测（[@nwparker](https://github.com/nwparker)，[#23121](https://github.com/stablyai/orca/pull/23121)）
- 性能：共享进行中的插件翻译启动请求（[@nwparker](https://github.com/nwparker)，[#23133](https://github.com/stablyai/orca/pull/23133)）
- 性能：限制嵌套仓库扫描里的通配段工作（[@nwparker](https://github.com/nwparker)，[#23149](https://github.com/stablyai/orca/pull/23149)）
- 修复（relay）：释放容量等待的中止监听器（[@OrcaWin](https://github.com/OrcaWin)，[#23188](https://github.com/stablyai/orca/pull/23188)）
- 修复（daemon）：释放终端挂载取消监听器（[@OrcaWin](https://github.com/OrcaWin)，[#23191](https://github.com/stablyai/orca/pull/23191)）

#### 国际化（i18n） {#v1-4-217-internationalization-i18n-}

> Diff 注释措辞更清楚。

- 修复（i18n）：说清 diff 注释的接收者（[@OrcaWin](https://github.com/OrcaWin)，[#23256](https://github.com/stablyai/orca/pull/23256)）

#### 测试、CI 与维护 {#v1-4-217-tests-ci-maintenance}

> CI 更快、更并行；格式化与打包更整齐；短暂的鼠标前进/后退快捷键改动已回退。

- 支持：快捷键里的鼠标前进/后退按钮（[@nwparker](https://github.com/nwparker)，[#23287](https://github.com/stablyai/orca/pull/23287)）
- 回退「支持：快捷键里的鼠标前进/后退按钮」（[@AmethystLiang](https://github.com/AmethystLiang)，[#23350](https://github.com/stablyai/orca/pull/23350)）
- 修复（design-system）：用 shadow-xs 替换手写的 diff 草稿卡阴影（[@nwparker](https://github.com/nwparker)，[#23307](https://github.com/stablyai/orca/pull/23307)）
- 修复（packaging）：应用文件排除根目录笔记（[@nwparker](https://github.com/nwparker)，[#23326](https://github.com/stablyai/orca/pull/23326)）
- 修复（homebrew）：去掉已弃用的 URL 校验参数（[@nwparker](https://github.com/nwparker)，[#23365](https://github.com/stablyai/orca/pull/23365)）
- 样式：消化 oxfmt 0.70 漂移，并停止格式化供应商许可证（[@nwparker](https://github.com/nwparker)，[#23377](https://github.com/stablyai/orca/pull/23377)）
- 测试：针对写入器超时，并诊断 Bun 启动停滞（[@OrcaWin](https://github.com/OrcaWin)，[#23267](https://github.com/stablyai/orca/pull/23267)）
- 修复（ci）：保留聚焦的 Playwright 文件选择（[@OrcaWin](https://github.com/OrcaWin)，[#23270](https://github.com/stablyai/orca/pull/23270)）
- CI：分片 SSH 测试、去掉重复运行，并预热 Windows 缓存（[@OrcaWin](https://github.com/OrcaWin)，[#23286](https://github.com/stablyai/orca/pull/23286)）
- CI：复用测试 fixture、原生构建和包镜像（[@OrcaWin](https://github.com/OrcaWin)，[#23291](https://github.com/stablyai/orca/pull/23291)）
- CI：收窄 orcad smoke，并并行 Linux 打包（[@OrcaWin](https://github.com/OrcaWin)，[#23314](https://github.com/stablyai/orca/pull/23314)）
- CI：复用移动 Web 路由分析，并跳过无关移动测试（[@OrcaWin](https://github.com/OrcaWin)，[#23329](https://github.com/stablyai/orca/pull/23329)）
- 复用移动录制编译，并刷新桌面 CI 计时（[@OrcaWin](https://github.com/OrcaWin)，[#23343](https://github.com/stablyai/orca/pull/23343)）
- 用原生并行 Actions 步骤运行相互独立的 CI 检查（[@OrcaWin](https://github.com/OrcaWin)，[#23351](https://github.com/stablyai/orca/pull/23351)）
- CI：重叠打包与安全准备，并共享本地化解析（[@OrcaWin](https://github.com/OrcaWin)，[#23364](https://github.com/stablyai/orca/pull/23364)）
- CI：重叠 shell、本地化与移动路由准备（[@OrcaWin](https://github.com/OrcaWin)，[#23368](https://github.com/stablyai/orca/pull/23368)）
- CI：使用 ARM 单元 runner，重叠 Web 构建，并复用校验 fixture（[@OrcaWin](https://github.com/OrcaWin)，[#23376](https://github.com/stablyai/orca/pull/23376)）
- CI：为 E2E 一起构建相互独立的 Electron 目标（[@OrcaWin](https://github.com/OrcaWin)，[#23378](https://github.com/stablyai/orca/pull/23378)）
- CI：为所有消费者只编译一次 E2E CLI（[@OrcaWin](https://github.com/OrcaWin)，[#23384](https://github.com/stablyai/orca/pull/23384)）

### 新贡献者 {#v1-4-217-contributors}

- [@anajuliabit](https://github.com/anajuliabit) 首次贡献于 [#20928](https://github.com/stablyai/orca/pull/20928)
- [@Chihen-Tai](https://github.com/Chihen-Tai) 首次贡献于 [#15588](https://github.com/stablyai/orca/pull/15588)

---

**完整变更对照：** [v1.4.216...v1.4.217](https://github.com/stablyai/orca/compare/v1.4.216...v1.4.217)

## v1.4.216 窄窗口里状态栏保持单行 {#v1-4-216}

2026年9月28日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.216)

感谢使用 Orca，也感谢一直以来的支持。

这个补丁是 v1.4.215 再加一项修复。v1.4.215 之后合入 main 的 pull request 不在这次构建里。

### 简要说明 {#v1-4-216-short}

**状态栏：** 在较小的屏幕和窄窗口里，状态栏保持单行，不再换行或被裁切。

---

### 修复 {#v1-4-216-fixes}

> 窗口变窄时，状态栏会收紧各项，让内容仍能放在同一行。

- 修复：小屏幕上的状态栏（[@AmethystLiang](https://github.com/AmethystLiang)，[#23587](https://github.com/stablyai/orca/pull/23587)）

---

**完整变更对照：** [v1.4.215...v1.4.216](https://github.com/stablyai/orca/compare/v1.4.215...v1.4.216)
