# 更新日志 {#changelog}

本页保留最近五次桌面版的**完整中文日志**，不是一句话摘要。打开时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 版本索引 {#index}

| 版本 | 日期 | 标题 |
| --- | --- | --- |
| [v1.4.222](#v1-4-222) | 2026年10月7日 | OpenCode worker 等可提交后再交任务，大 CSV 可表格编辑 |
| [v1.4.221](#v1-4-221) | 2026年10月5日 | Copilot 配置改为仅所有者可读，Windows Codex 改用 ~/.codex |
| [v1.4.220](#v1-4-220) | 2026年10月4日 | Native Chat 的 Stop 会结束进程，SSH 可选自带运行时 |
| [v1.4.219](#v1-4-219) | 2026年10月2日 | Codex 共用服务器会提示，启动 Agent 时预信任文件夹 |
| [v1.4.218](#v1-4-218) | 2026年9月30日 | Codex 终端可独立服务器，内置更多 Agent |

## 完整中文日志 {#full-notes}

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
