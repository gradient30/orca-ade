# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.206](#v1-4-206) | 2026年9月20日 | 会话历史可搜，OpenCode 2，用量扫描进 worker |
| [v1.4.205](#v1-4-205) | 2026年9月17日 | 聊天消息轨道，归档失败拦截删除，Codex 扫描提速 |
| [v1.4.204](#v1-4-204) | 2026年9月16日 | 聊天拖放与 Fast 模式，工作区恢复 |

### v1.4.206 · 会话历史可搜，OpenCode 2，用量扫描进 worker {#v1-4-206-summary}

2026年9月20日 · [本页全文](#v1-4-206) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.206)

- Agent 与聊天：可在历史面板、跨机器、以及 `orca search` 里搜 Agent 会话。现已支持 **OpenCode 2**。Native Chat 把计划当计划渲染，重启时还在跑的聊天可以重连；OMP 能在桌面和移动端选模型。Source Control AI 可用 OMP 生成。
- 工作区、编辑器与源码管理：编写器里紧凑分支选择器回来了；New Workspace 可选 base ref；diff 可折叠未改区域。审查评论支持多行范围。创建 worktree 优先 Git；WSL 删除不会带走孪生分支。
- 终端与远程：可选默认终端 shell；搜索有匹配计数且与 Cmd+F 对齐；可配置点 URL / 中键。Windows 终端会真的启动你要的 shell。Claude、Codex 与 OpenCode 的用量扫描改在 worker 线程跑。

### v1.4.205 · 聊天消息轨道，归档失败拦截删除，Codex 扫描提速 {#v1-4-205-summary}

2026年9月17日 · [本页全文](#v1-4-205) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.205)

- Agent 与聊天：Native Chat 增加提问跳转轨道，恢复的对话钉在末尾；超时 hook 会真正终止进程树。
- 工作区、编辑器与源码管理：归档 hook 失败会拦住 worktree 删除；暂存失败可重试；代码块可复制。
- 终端与远程：终端重命名与 PTY 句柄在轮换后仍保留；中继失败可按阶段诊断。Codex 冷扫描从数分钟降到一分钟内。

### v1.4.204 · 聊天拖放与 Fast 模式，工作区恢复 {#v1-4-204-summary}

2026年9月16日 · [本页全文](#v1-4-204) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.204)

- Agent 与聊天：Native Chat 支持文件拖放和按提供方区分的 Fast 模式；重启后能干净恢复结构化聊天。
- 工作区与移动端：工作区在选择 Agent 后重新播种，能从激活失败中恢复；移动端继续 typed-RPC 迁移。
- 性能：终端文件链接改为批量检查，浏览器输入在进程内派发，并限制 WSL skill 发现范围。

## 完整中文日志 {#full-notes}

## v1.4.206 会话历史可搜，OpenCode 2，用量扫描进 worker {#v1-4-206}

2026年9月20日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.206)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-206-short}

**Agent 与聊天：** 可在历史面板、跨机器、以及 `orca search` 里搜 Agent 会话。现已支持 **OpenCode 2**。Native Chat 把计划当计划来渲染，重启时还在跑的聊天可以重连；OMP 能在桌面和移动端选模型。Source Control AI 可用 OMP 生成。

**工作区、编辑器与源码管理：** 编写器里紧凑分支选择器回来了；New Workspace 可选 base ref；diff 可折叠未改区域。审查评论支持多行范围。创建 worktree 优先 Git；WSL 删除不会带走孪生分支。

**终端与远程：** 可选默认终端 shell；搜索有匹配计数且与 Cmd+F 对齐；可配置点 URL / 中键。Windows 终端会真的启动你要的 shell。Claude、Codex 与 OpenCode 的用量扫描改在 worker 线程跑。

**移动端：** 桌面可以空中下发移动端 web bundle。任务、文件和 Agent 历史开始迁到该页面壳上，返回控件更清楚，宿主不可达时给诚实状态，而不是一直 Connecting via Relay。

---

### 产品体验 {#v1-4-206-product}

#### 工作区、标签页与编辑器 {#v1-4-206-workspaces-tabs-editor}

> 编写器重新变紧凑，diff 能藏掉噪音，worktree 创建/删除更不容易让你吃惊。

- 新增（composer）：恢复紧凑分支选择器体验（[@nwparker](https://github.com/nwparker)，[#21741](https://github.com/stablyai/orca/pull/21741)）
- 新增（composer）：在 New Workspace 编写器里选择 base ref（[@Tkotm76](https://github.com/Tkotm76)，[#17250](https://github.com/stablyai/orca/pull/17250)）
- 新增（editor）：文件 diff 可选用折叠未改区域（[@dcieslak19973](https://github.com/dcieslak19973)，[#11955](https://github.com/stablyai/orca/pull/11955)）
- 新增（diff-comments）：支持拖拽和键盘选择多行范围（[@AmethystLiang](https://github.com/AmethystLiang)，[#20959](https://github.com/stablyai/orca/pull/20959)）
- 修复（editor）：长文件路径仍能区分开（[@nwparker](https://github.com/nwparker)，[#21631](https://github.com/stablyai/orca/pull/21631)）
- 修复（editor）：图片排版后保留 Markdown 滚动位置（[@nwparker](https://github.com/nwparker)，[#20956](https://github.com/stablyai/orca/pull/20956)）
- 修复：Markdown 源码模式高亮 bash 围栏（[@100space](https://github.com/100space)，[#20592](https://github.com/stablyai/orca/pull/20592)）
- 修复（pdf）：用 pdf.js 资源渲染 CJK 文本（[@OrcaWin](https://github.com/OrcaWin)，[#21625](https://github.com/stablyai/orca/pull/21625)）
- 选中侧栏 worktree 时关闭工作区看板（[@OrcaWin](https://github.com/OrcaWin)，[#21737](https://github.com/stablyai/orca/pull/21737)）
- 修复（sidebar）：新增项目后仍保留 Projects 过滤器（[@OrcaWin](https://github.com/OrcaWin)，[#20987](https://github.com/stablyai/orca/pull/20987)）
- 修复（sidebar）：新卡片样式下能区分休眠工作区（[@mmarabel](https://github.com/mmarabel)，[#21540](https://github.com/stablyai/orca/pull/21540)）
- 修复（sidebar）：行高变大时仍露出分组标题（[@kiendle](https://github.com/kiendle)，[#20883](https://github.com/stablyai/orca/pull/20883)）
- 提高选中对话框的对比度（[@AmethystLiang](https://github.com/AmethystLiang)，[#21718](https://github.com/stablyai/orca/pull/21718)）
- 新增（settings）：停止正在运行的终端前先确认（[@nwparker](https://github.com/nwparker)，[#21569](https://github.com/stablyai/orca/pull/21569)）
- 修复（settings）：点遮罩时保留集成连接对话框草稿（[@AmethystLiang](https://github.com/AmethystLiang)，[#20932](https://github.com/stablyai/orca/pull/20932)）
- 修复（settings）：保留多行 proxy bypass 规则（[@AmethystLiang](https://github.com/AmethystLiang)，[#20957](https://github.com/stablyai/orca/pull/20957)）
- 修复（worktree-create）：优先完成创建用的 Git，后台准备延后（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20722](https://github.com/stablyai/orca/pull/20722)）
- 修复（worktree）：保留 WSL checkout 大小写，删除不会带走孪生分支（[@nwparker](https://github.com/nwparker)，[#20273](https://github.com/stablyai/orca/pull/20273)）
- 修复（worktree）：远程删除前问执行宿主会动谁的 home（[@nwparker](https://github.com/nwparker)，[#19865](https://github.com/stablyai/orca/pull/19865)）
- 修复（worktrees）：未盖章的本地 worktree 在 #16841 仍失败关闭的两种状态下走本地路由（[@LesleyMurfin](https://github.com/LesleyMurfin)，[#16829](https://github.com/stablyai/orca/pull/16829)）
- 修复（session）：已清空的工作区在重连合并后仍能活下来（[@nwparker](https://github.com/nwparker)，[#19944](https://github.com/stablyai/orca/pull/19944)）

#### 源码管理与 GitHub {#v1-4-206-source-control-github}

> OMP 可以生成审查文案，GitHub Enterprise Managed User 登录能通过校验。

- 新增（source-control-ai）：支持用 OMP 生成（[@nwparker](https://github.com/nwparker)，[#20624](https://github.com/stablyai/orca/pull/20624)）
- 新增（github）：把项目绑到指定 gh 账号（[@llevintza](https://github.com/llevintza)，[#13664](https://github.com/stablyai/orca/pull/13664)）
- 修复（github）：owner slug 校验接受 Enterprise Managed User 登录（[@gon2gon2](https://github.com/gon2gon2)，[#20450](https://github.com/stablyai/orca/pull/20450)）
- 只在真正能用的地方显示 Source Control AI 的 CLI 参数框（[@brennanb2025](https://github.com/brennanb2025)，[#21149](https://github.com/stablyai/orca/pull/21149)）

#### 浏览器 {#v1-4-206-browser}

> 视口预设尊重 UI 缩放，客户端托管页面也能做截图标注。

- 修复：浏览器视口预设被 UI 缩放错误放大（[@AmethystLiang](https://github.com/AmethystLiang)，[#20962](https://github.com/stablyai/orca/pull/20962)）
- 修复（browser）：在客户端托管页面启用截图标注（[@yteruel31](https://github.com/yteruel31)，[#19577](https://github.com/stablyai/orca/pull/19577)）
- 修复（browser）：浏览器身份改为进程级单一选择（[@brennanb2025](https://github.com/brennanb2025)，[#20767](https://github.com/stablyai/orca/pull/20767)）

### Agent 与工作流 {#v1-4-206-agents-workflow}

#### 会话搜索 {#v1-4-206-session-search}

> 在历史面板、每台电脑、以及 CLI 里查找过去的 Agent 会话。

- 新增（session-search）：面板搜索与可选同意（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20580](https://github.com/stablyai/orca/pull/20580)）
- 新增（session-history）：本地搜索设置和索引控件（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20582](https://github.com/stablyai/orca/pull/20582)）
- 新增（session-search）：从历史面板搜索每一台电脑（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20885](https://github.com/stablyai/orca/pull/20885)）
- 新增（session-search）：跨宿主合并「全部电脑」搜索（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20670](https://github.com/stablyai/orca/pull/20670)）
- 新增（session-search）：从客户端为已配对服务器打开索引（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20886](https://github.com/stablyai/orca/pull/20886)）
- 新增（settings）：已连接电脑行，用于会话历史索引（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20887](https://github.com/stablyai/orca/pull/20887)）
- 新增（cli）：用 `orca search` 查 Agent 会话索引（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20514](https://github.com/stablyai/orca/pull/20514)）
- 新增（cli）：设置开关落地后展示 `orca search`（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20677](https://github.com/stablyai/orca/pull/20677)）
- 修复（session-search）：索引 OpenCode 的 SQLite 会话（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20870](https://github.com/stablyai/orca/pull/20870)）
- 修复（ai-vault）：索引 content blocks 类型为 Text 的 Codex Agent 回复（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20763](https://github.com/stablyai/orca/pull/20763)）
- 修复（ai-vault）：在 Windows 上发现并解析 Devin 会话（[@lattenee](https://github.com/lattenee)，[#21337](https://github.com/stablyai/orca/pull/21337)）
- 修复（ai-vault）：说明 Windows 上暂不能搜 WSL 里的 OpenCode（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20971](https://github.com/stablyai/orca/pull/20971)）

#### Native Chat、OMP 与提供方 {#v1-4-206-native-chat-omp-providers}

> OpenCode 2 beta、更清楚的计划和提问，以及始终贴在正确窗格和模型上的 OMP。

- 新增（agents）：支持 OpenCode 2 beta（[@nwparker](https://github.com/nwparker)，[#21418](https://github.com/stablyai/orca/pull/21418)）
- 新增（native-chat）：把提议的计划渲染成计划，而不是通用批准（[@brennanb2025](https://github.com/brennanb2025)，[#21090](https://github.com/stablyai/orca/pull/21090)）
- 修复（native-chat）：用等待输入行替换原始 question 工具行（[@brennanb2025](https://github.com/brennanb2025)，[#20724](https://github.com/stablyai/orca/pull/20724)）
- 重启时还在跑的 Native Chat 会提示重连（[@brennanb2025](https://github.com/brennanb2025)，[#21096](https://github.com/stablyai/orca/pull/21096)）
- Native Chat 持续滚到最底（[@AmethystLiang](https://github.com/AmethystLiang)，[#20898](https://github.com/stablyai/orca/pull/20898)）
- 修复（native-chat）：聊天窗格隐藏时仍投递排队消息（[@brennanb2025](https://github.com/brennanb2025)，[#20659](https://github.com/stablyai/orca/pull/20659)）
- 新增（omp）：在桌面和移动端发现并切换 Native Chat 模型（[@nwparker](https://github.com/nwparker)，[#20612](https://github.com/stablyai/orca/pull/20612)）
- 修复（omp）：开新任务时不自动恢复旧会话（[@nwparker](https://github.com/nwparker)，[#20622](https://github.com/stablyai/orca/pull/20622)）
- 修复（omp）：通过文件提及附加桌面和移动端图片（[@nwparker](https://github.com/nwparker)，[#21674](https://github.com/stablyai/orca/pull/21674)）
- 修复（omp）：子会话不再汇报到父窗格（[@nwparker](https://github.com/nwparker)，[#20611](https://github.com/stablyai/orca/pull/20611)）
- 修复（claude）：单一自有回合身份，让 Stop 能到达提供方打开的回合（[@brennanb2025](https://github.com/brennanb2025)，[#20794](https://github.com/stablyai/orca/pull/20794)）
- 修复（claude）：按 journal 发布的回合来判断 Stop（[@brennanb2025](https://github.com/brennanb2025)，[#20921](https://github.com/stablyai/orca/pull/20921)）
- 修复（pi）：完成状态忽略空闲工具对话框（[@nwparker](https://github.com/nwparker)，[#21707](https://github.com/stablyai/orca/pull/21707)）
- 修复（pi）：不为已禁用 Agent 安装扩展（[@nwparker](https://github.com/nwparker)，[#21711](https://github.com/stablyai/orca/pull/21711)）
- 新增（agent-launch）：统一的 Agent 启动执行器，暴露为 agent.launch（[@brennanb2025](https://github.com/brennanb2025)，[#19849](https://github.com/stablyai/orca/pull/19849)）

#### 终端 {#v1-4-206-terminal}

> 默认 shell、更好的查找、图片，以及 Windows 终端真的是你选的那个 shell。

- 新增（settings）：选择默认终端 shell（[@nwparker](https://github.com/nwparker)，[#21085](https://github.com/stablyai/orca/pull/21085)）
- 新增（terminal）：搜索匹配计数，以及与 Cmd+F 焦点对齐（[@shaharmor](https://github.com/shaharmor)，[#9035](https://github.com/stablyai/orca/pull/9035)）
- 新增（terminal）：配置点 URL 和中键行为（[@nwparker](https://github.com/nwparker)，[#21438](https://github.com/stablyai/orca/pull/21438)）
- 新增（terminal）：通过 @xterm/addon-image 内联图片（[@OrcaWin](https://github.com/OrcaWin)，[#19512](https://github.com/stablyai/orca/pull/19512)）
- 修复（terminal）：运行时创建的 Windows 终端就是你要的那个 shell（[@nwparker](https://github.com/nwparker)，[#20825](https://github.com/stablyai/orca/pull/20825)）
- 修复（terminal）：对齐 CJK IME 预编辑间距（[@nwparker](https://github.com/nwparker)，[#19367](https://github.com/stablyai/orca/pull/19367)）
- 修复（terminal）：shell 退出后清掉过期的 Agent 身份（[@nwparker](https://github.com/nwparker)，[#21714](https://github.com/stablyai/orca/pull/21714)）
- 修复（cli,relay）：不要把无法发信号的 pid 当成已死（[@nwparker](https://github.com/nwparker)，[#20098](https://github.com/stablyai/orca/pull/20098)）

#### 移动端 {#v1-4-206-mobile}

> 桌面可以下发移动端 web bundle；任务、文件和历史开始从该页面渲染。

- 新增（mobile）：原生 shell 视图，从私有源提供移动端 web 生成物（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21417](https://github.com/stablyai/orca/pull/21417)）
- 新增（mobile）：从该页面提供任务屏（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21694](https://github.com/stablyai/orca/pull/21694)）
- 新增（mobile）：从该页面提供文件浏览器和预览（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21710](https://github.com/stablyai/orca/pull/21710)）
- 新增（mobile）：用桌面的 bundle 渲染 Agent 会话历史（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21596](https://github.com/stablyai/orca/pull/21596)）
- 新增（mobile）：说清楚通知可选加入屏（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20930](https://github.com/stablyai/orca/pull/20930)）
- 新增（mobile）：说明宿主为何不可达，而不是一直「Connecting via Relay…」（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21566](https://github.com/stablyai/orca/pull/21566)）
- 新增（mobile）：在 shell 上响应原生动词，剪贴板优先（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21623](https://github.com/stablyai/orca/pull/21623)）

### 质量与交付 {#v1-4-206-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能改进 {#v1-4-206-perf-improvements}

> Claude、Codex 与 OpenCode 的用量扫描改在 worker 线程跑（v1.4.205 预告的那步）。纯 PTY 文本会跳过 SGR 和 kitty 扫描。自动化运行历史对大表做虚拟化。

- 性能（usage）：在 worker 线程跑 Claude/Codex/OpenCode 用量扫描（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21114](https://github.com/stablyai/orca/pull/21114)）
- 性能（usage）：每次扫描只解析一次 cwd 的 worktree（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21130](https://github.com/stablyai/orca/pull/21130)）
- 性能（codex-usage）：从上次解析字节续扫 rollout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21102](https://github.com/stablyai/orca/pull/21102)）
- 性能（terminal）：没有 ESC 时跳过后台 SGR 扫描（[@nwparker](https://github.com/nwparker)，[#21646](https://github.com/stablyai/orca/pull/21646)）
- 性能（terminal）：纯 PTY 输出跳过 kitty 扫描（[@nwparker](https://github.com/nwparker)，[#21643](https://github.com/stablyai/orca/pull/21643)）
- 对大历史虚拟化 automations 运行历史表（[@AmethystLiang](https://github.com/AmethystLiang)，[#20916](https://github.com/stablyai/orca/pull/20916)）
- 性能：始终显示项目名，去掉通知扫描（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20931](https://github.com/stablyai/orca/pull/20931)）
- 在分配前限制 AI Vault transcript 记录组装（[@OrcaWin](https://github.com/OrcaWin)，[#20963](https://github.com/stablyai/orca/pull/20963)）
- 修复（browser）：卡住的客户端限制 CDP 输出（[@OrcaWin](https://github.com/OrcaWin)，[#20949](https://github.com/stablyai/orca/pull/20949)）
- 性能（renderer）：一次窗格标题更新不再扫描全局休眠记录清单（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21292](https://github.com/stablyai/orca/pull/21292)）

#### 可靠性、测试与交付 {#v1-4-206-reliability-tests}

- 修复（runtime）：持久化已确认的终端标签退役（[@OrcaWin](https://github.com/OrcaWin)，[#21020](https://github.com/stablyai/orca/pull/21020)）
- 修复（runtime）：PTY 生命周期变化后拒绝过期清单（[@OrcaWin](https://github.com/OrcaWin)，[#21014](https://github.com/stablyai/orca/pull/21014)）
- 修复（daemon）：流积压变大时暂停生产者（[@OrcaWin](https://github.com/OrcaWin)，[#20947](https://github.com/stablyai/orca/pull/20947)）
- 修复（crash-reporting）：周期性发射器不再挤掉崩溃轨迹（[@OrcaWin](https://github.com/OrcaWin)，[#20639](https://github.com/stablyai/orca/pull/20639)）
- 修复（deps）：更新有漏洞的传递依赖（[@nwparker](https://github.com/nwparker)，[#21652](https://github.com/stablyai/orca/pull/21652)）
- 按时间戳而不是 semver 排序 dev 构建（[@AmethystLiang](https://github.com/AmethystLiang)，[#21720](https://github.com/stablyai/orca/pull/21720)）

### 新贡献者 {#v1-4-206-contributors}

- [@100space](https://github.com/100space) 首次贡献于 [#20592](https://github.com/stablyai/orca/pull/20592)
- [@gon2gon2](https://github.com/gon2gon2) 首次贡献于 [#20450](https://github.com/stablyai/orca/pull/20450)
- [@Lucasfarg](https://github.com/Lucasfarg) 首次贡献于 [#21194](https://github.com/stablyai/orca/pull/21194)
- [@Tkotm76](https://github.com/Tkotm76) 首次贡献于 [#17250](https://github.com/stablyai/orca/pull/17250)
- [@KAPUIST](https://github.com/KAPUIST) 首次贡献于 [#21361](https://github.com/stablyai/orca/pull/21361)
- [@llevintza](https://github.com/llevintza) 首次贡献于 [#13664](https://github.com/stablyai/orca/pull/13664)
- [@yteruel31](https://github.com/yteruel31) 首次贡献于 [#19577](https://github.com/stablyai/orca/pull/19577)
- [@fbartho](https://github.com/fbartho) 首次贡献于 [#20415](https://github.com/stablyai/orca/pull/20415)
- [@lattenee](https://github.com/lattenee) 首次贡献于 [#21337](https://github.com/stablyai/orca/pull/21337)

**完整变更对照：** [v1.4.205...v1.4.206](https://github.com/stablyai/orca/compare/v1.4.205...v1.4.206)

## v1.4.205 聊天消息轨道，归档失败拦截删除，Codex 扫描提速 {#v1-4-205}

2026年9月17日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.205)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-205-short}

**Agent 与聊天：** Native Chat 增加了在提问之间跳转的消息轨道；恢复的对话会钉在末尾；消息变长时保持分离阅读位置；能精确取消待发送的提问。OMP 对话会按保存的名称从会话历史恢复；Agent 状态入口收束到单一准入点；超时的 hook 现在会真正终止其进程树。

**工作区、编辑器与源码管理：** 归档 hook 失败时会拦截 worktree 删除，而不是照删不误；worktree 登记能挺过可修剪的 git 文件状态。暂存 / 取消暂存 / 丢弃失败会带重试入口；自动化修复了 cron 步长展开，并把 tick 延迟排除出错过运行的宽限期；代码块增加复制按钮；Tiptap 升级并加了 Markdown 兼容防护。

**终端与远程：** 终端重命名能挺过窗格水合；句柄在 PTY 实例轮换后仍保留；子进程检查在无法核实时保持不确定结论，而不是猜测。中继失败可按获取阶段与执行阶段诊断；远程流式记录有上限。

**性能：** Codex 用量扫描的工作量大幅下降——每次扫描只解析一次归属，增长中的 rollout 从上次解析字节续扫——一次大型冷扫描从数分钟降到一分钟以内。扫描仍在主进程运行；迁到 worker 线程会在后续版本落地。

---

### 产品体验 {#v1-4-205-product}

#### 工作区、标签页与编辑器 {#v1-4-205-workspaces-tabs-editor}

> worktree 删除更安全，失败提示更清楚，Tiptap 升级并加了 Markdown 兼容防护。

- 新增：给代码块加上复制按钮（[@AmethystLiang](https://github.com/AmethystLiang)，[#20357](https://github.com/stablyai/orca/pull/20357)）
- 修复（composer）：说清楚附件拖放失败的原因（[@AmethystLiang](https://github.com/AmethystLiang)，[#20704](https://github.com/stablyai/orca/pull/20704)）
- 区分窗格加载失败和空状态（[@AmethystLiang](https://github.com/AmethystLiang)，[#20735](https://github.com/stablyai/orca/pull/20735)）
- 修复（worktrees）：安全移除可修剪的 git-file 登记（[@nwparker](https://github.com/nwparker)，[#20617](https://github.com/stablyai/orca/pull/20617)）
- 修复（worktrees）：保留无法核实的磁盘见证（[@AmethystLiang](https://github.com/AmethystLiang)，[#20713](https://github.com/stablyai/orca/pull/20713)）
- 修复（worktree）：归档 hook 失败时拦截删除（[@nwparker](https://github.com/nwparker)，[#20153](https://github.com/stablyai/orca/pull/20153)）
- 修复（automations）：修复 cron 步长展开和日期限制 [HELD — semantic half]（[@nwparker](https://github.com/nwparker)，[#20202](https://github.com/stablyai/orca/pull/20202)）
- 修复（automations）：tick 延迟不再计入错过运行的宽限期（[@nwparker](https://github.com/nwparker)，[#20819](https://github.com/stablyai/orca/pull/20819)）
- 改进：麦克风权限错误与拖放失败提示（[@AmethystLiang](https://github.com/AmethystLiang)，[#20801](https://github.com/stablyai/orca/pull/20801)）
- 报告剪贴板和编写器拖放失败（[@AmethystLiang](https://github.com/AmethystLiang)，[#20795](https://github.com/stablyai/orca/pull/20795)）
- 修复（deps）：迁移 Tiptap 安全更新，并加 Markdown 兼容防护（[@OrcaWin](https://github.com/OrcaWin)，[#19376](https://github.com/stablyai/orca/pull/19376)）
- 新增（design-system）：用 @shadcn/lint 门禁渲染器 UI（[@nwparker](https://github.com/nwparker)，[#20731](https://github.com/stablyai/orca/pull/20731)）
- 修复（ui）：限制空闲光标绘制，避免 Agent 窗格空转烧 CPU（[@innocarpe](https://github.com/innocarpe)，[#10554](https://github.com/stablyai/orca/pull/10554)）

#### 源码管理 {#v1-4-205-source-control}

> 暂存失败可恢复，Git 启动错误会说明真正原因。

- 暂存、取消暂存和丢弃失败时给出重试入口（[@AmethystLiang](https://github.com/AmethystLiang)，[#20423](https://github.com/stablyai/orca/pull/20423)）
- 修复（source-control）：防止分区标题和操作按钮文字换行（[@AmethystLiang](https://github.com/AmethystLiang)，[#20046](https://github.com/stablyai/orca/pull/20046)）
- 修复（git）：区分二进制不存在和 spawn ENOENT 时缺少 cwd（[@AmethystLiang](https://github.com/AmethystLiang)，[#20798](https://github.com/stablyai/orca/pull/20798)）

### Agent 与工作流 {#v1-4-205-agents-workflow}

#### Agent 可靠性与 Native Chat {#v1-4-205-agent-reliability}

> 聊天导航和对话定位更好，Agent 状态改由单一入口上报。

- 修复（native-chat）：在写入 journal 行之前限制 dispatch reason（[@brennanb2025](https://github.com/brennanb2025)，[#20654](https://github.com/stablyai/orca/pull/20654)）
- 修复（native-chat）：恢复的对话始终钉在末尾（[@brennanb2025](https://github.com/brennanb2025)，[#20651](https://github.com/stablyai/orca/pull/20651)）
- 修复（codex）：在准入时结算结构化发送，并停止铸造冲突的身份（[@brennanb2025](https://github.com/brennanb2025)，[#20138](https://github.com/stablyai/orca/pull/20138)）
- 修复（omp）：终端标题所有者改写后仍保留状态（[@nwparker](https://github.com/nwparker)，[#20610](https://github.com/stablyai/orca/pull/20610)）
- 修复（agents）：用完整项目名查找 OMP（[@nwparker](https://github.com/nwparker)，[#20647](https://github.com/stablyai/orca/pull/20647)）
- 修复（omp）：在会话历史中保留已保存的对话名称（[@nwparker](https://github.com/nwparker)，[#20636](https://github.com/stablyai/orca/pull/20636)）
- 修复（agent-session）：在界面释放时遵守备份恢复围栏下限（[@brennanb2025](https://github.com/brennanb2025)，[#20708](https://github.com/stablyai/orca/pull/20708)）
- 修复（hooks）：真正终止超时 hook 的进程树（[@nwparker](https://github.com/nwparker)，[#20576](https://github.com/stablyai/orca/pull/20576)）
- 修复（native-chat）：精确取消待发送的提问（[@brennanb2025](https://github.com/brennanb2025)，[#20601](https://github.com/stablyai/orca/pull/20601)）
- 修复：从会话历史恢复 OMP 子对话（[@nwparker](https://github.com/nwparker)，[#20629](https://github.com/stablyai/orca/pull/20629)）
- 修复（ai-vault）：展开嵌套的 OMP 会话历史（[@nwparker](https://github.com/nwparker)，[#20663](https://github.com/stablyai/orca/pull/20663)）
- 修复（native-chat）：让阅读位置停在最新消息上方（[@brennanb2025](https://github.com/brennanb2025)，[#20709](https://github.com/stablyai/orca/pull/20709)）
- 修复（native-chat）：对话增长时保留分离阅读位置（[@brennanb2025](https://github.com/brennanb2025)，[#20710](https://github.com/stablyai/orca/pull/20710)）
- 新增（native-chat）：增加在提问之间跳转的消息轨道（[@brennanb2025](https://github.com/brennanb2025)，[#20719](https://github.com/stablyai/orca/pull/20719)）
- 重构（agent-status）：把遗留状态入口隔离到单一准入点（[@brennanb2025](https://github.com/brennanb2025)，[#20716](https://github.com/stablyai/orca/pull/20716)）
- 修复（runtime）：把 tui-idle 证据排序应用到邮箱投递（[@nwparker](https://github.com/nwparker)，[#20578](https://github.com/stablyai/orca/pull/20578)）
- 修复（orchestration）：要求已登记的窗格键来证明结构化 worker 身份（[@brennanb2025](https://github.com/brennanb2025)，[#20664](https://github.com/stablyai/orca/pull/20664)）

#### 终端 {#v1-4-205-terminal}

> 重命名、句柄和 PTY 判定能挺过轮换、水合和不确定状态。

- 修复（omp）：保留带全局别名的 zsh 启动（[@nwparker](https://github.com/nwparker)，[#20621](https://github.com/stablyai/orca/pull/20621)）
- 修复（terminal）：在渲染器窗格水合之前保留重命名（[@nwparker](https://github.com/nwparker)，[#20619](https://github.com/stablyai/orca/pull/20619)）
- 修复：文件夹工作区变成 Git 仓库时仍保留 OMP 终端（[@nwparker](https://github.com/nwparker)，[#20653](https://github.com/stablyai/orca/pull/20653)）
- 修复：PTY 子进程判定保留无法核实的状态（[@AmethystLiang](https://github.com/AmethystLiang)，[#20729](https://github.com/stablyai/orca/pull/20729)）
- 修复（runtime）：PTY 实例轮换时保留终端句柄（[@nwparker](https://github.com/nwparker)，[#20779](https://github.com/stablyai/orca/pull/20779)）
- 修复（pty）：保留子进程检查的不确定性（[@AmethystLiang](https://github.com/AmethystLiang)，[#20756](https://github.com/stablyai/orca/pull/20756)）

#### 移动端 {#v1-4-205-mobile}

> 移动端继续 typed-RPC 迁移。

- 将移动端 app.json 升到 0.0.50（[@brennanb2025](https://github.com/brennanb2025)，[#20661](https://github.com/stablyai/orca/pull/20661)）
- 重构（mobile）：把小域迁到 RpcOperation（第 4 步）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20705](https://github.com/stablyai/orca/pull/20705)）

#### 中继与云端 {#v1-4-205-relay-cloud}

> 中继失败可按阶段诊断，远程流式记录有上限。

- 修复（ai-vault）：限制远程 JSONL 流式记录（[@nwparker](https://github.com/nwparker)，[#20700](https://github.com/stablyai/orca/pull/20700)）
- 新增（runtime）：流式上传文件，而不是整文件缓冲（[@mmarabel](https://github.com/mmarabel)，[#16106](https://github.com/stablyai/orca/pull/16106)）
- 暴露预加载的 PostgreSQL 语句统计，用于中继诊断（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20712](https://github.com/stablyai/orca/pull/20712)）
- 按获取阶段与执行阶段诊断中继 PostgreSQL 失败（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20749](https://github.com/stablyai/orca/pull/20749)）
- 修复（relay）：在分离 Windows stdio 时打开真正的空设备（[@nwparker](https://github.com/nwparker)，[#20808](https://github.com/stablyai/orca/pull/20808)）

### 质量与交付 {#v1-4-205-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能改进 {#v1-4-205-perf-improvements}

> 针对性优化去掉了 Codex、OpenCode 和 Claude 用量扫描以及空操作 store 更新中的重复工作。这些降低了扫描成本，但还没有把扫描移出主进程。

其中包括：每次扫描只解析一次各 cwd 的 worktree（而不是每个事件都解析）；增长中的 Codex rollout 在边界摘要和 inode 检查后从上次解析字节续扫；空操作更新路径保持状态身份，避免 selector 反复跑。

- 修复（store）：阻止两次空写导致应用里每个 selector 重跑（[@OrcaWin](https://github.com/OrcaWin)，[#20641](https://github.com/stablyai/orca/pull/20641)）
- 修复（store）：空操作更新路径保持状态身份（[@nwparker](https://github.com/nwparker)，[#20703](https://github.com/stablyai/orca/pull/20703)）
- 性能（usage）：每次扫描只解析一次各 cwd 的 worktree（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21130](https://github.com/stablyai/orca/pull/21130)）
- 性能（codex-usage）：从上次解析字节续扫 rollout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21102](https://github.com/stablyai/orca/pull/21102)）

#### 可靠性、测试与交付 {#v1-4-205-reliability-tests}

- 修复（ci）：阻止小时版本落到低于已打 tag 或已发布的构建（[@nwparker](https://github.com/nwparker)，[#20699](https://github.com/stablyai/orca/pull/20699)）
- 测试：增加已验证的 OMP Native Chat mock 场景（[@nwparker](https://github.com/nwparker)，[#20655](https://github.com/stablyai/orca/pull/20655)）
- 测试（mobile）：把每条 RPC golden 钉到能到达它的 recorder 输入，而不是整个目录（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20662](https://github.com/stablyai/orca/pull/20662)）
- CI：把基线 Git 构建排除出兼容性矩阵通道（[@nwparker](https://github.com/nwparker)，[#20733](https://github.com/stablyai/orca/pull/20733)）
- 修复（ci）：不再在条件分支里定义 pilot mutant 测试（[@nwparker](https://github.com/nwparker)，[#20755](https://github.com/stablyai/orca/pull/20755)）
- 测试（native-chat）：把窗口测试工具从套件中拆出（[@nwparker](https://github.com/nwparker)，[#20773](https://github.com/stablyai/orca/pull/20773)）
- 杂项（lint）：加入 anti-slop oxlint 插件（钉版本，规则全关）（[@nwparker](https://github.com/nwparker)，[#20726](https://github.com/stablyai/orca/pull/20726)）
- 杂项（lint）：启用 anti-slop 的 no-reduce-accumulator-copy 和 no-widen-then-assert（[@nwparker](https://github.com/nwparker)，[#20780](https://github.com/stablyai/orca/pull/20780)）
- 修复（lint）：保持根 postinstall 作为唯一的 Electron 二进制安装负责人（[@nwparker](https://github.com/nwparker)，[#20788](https://github.com/stablyai/orca/pull/20788)）
- 测试（package）：让 postinstall 契约允许无关的串联步骤（[@nwparker](https://github.com/nwparker)，[#20787](https://github.com/stablyai/orca/pull/20787)）
- 修复（lint）：启用 anti-slop/no-unknown-type-aliases（[@nwparker](https://github.com/nwparker)，[#20784](https://github.com/stablyai/orca/pull/20784)）
- 重构（lint）：启用 anti-slop/no-reflect-apply（[@nwparker](https://github.com/nwparker)，[#20782](https://github.com/stablyai/orca/pull/20782)）
- 修复（lint）：启用 anti-slop/no-module-mocking（[@nwparker](https://github.com/nwparker)，[#20783](https://github.com/stablyai/orca/pull/20783)）
- 测试（package）：按精确命令拒绝 Electron 安装接管（[@nwparker](https://github.com/nwparker)，[#20799](https://github.com/stablyai/orca/pull/20799)）
- 修复（lint）：启用 anti-slop/no-reflect-get（[@nwparker](https://github.com/nwparker)，[#20786](https://github.com/stablyai/orca/pull/20786)）
- 修复（lint）：启用 anti-slop/no-object-parameters（[@nwparker](https://github.com/nwparker)，[#20781](https://github.com/stablyai/orca/pull/20781)）
- 修复（lint）：启用 anti-slop/no-shape-in-symbol-names（[@nwparker](https://github.com/nwparker)，[#20785](https://github.com/stablyai/orca/pull/20785)）
- 修复（git）：命令退出后避免 Windows 上的 tree 强杀（[@nwparker](https://github.com/nwparker)，[#20606](https://github.com/stablyai/orca/pull/20606)）
- 构建（release）：编译 Windows 中继 process-table 插件（[@nwparker](https://github.com/nwparker)，[#20809](https://github.com/stablyai/orca/pull/20809)）

**完整变更对照：** [v1.4.204...v1.4.205](https://github.com/stablyai/orca/compare/v1.4.204...v1.4.205)

## v1.4.204 聊天拖放与 Fast 模式，工作区恢复 {#v1-4-204}

2026年9月16日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.204)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-204-short}

**Agent 与聊天：** Native Chat 支持文件拖放和按提供方区分的 Fast 模式；重启后能干净恢复结构化聊天；隐藏空闲活动；修复了尾读游标和 Claude 回合重开。Grok 的完成/hook 归属与 Claude SessionEnd 处理更准确；Agent 状态按 agent 而不是窗格来索引行。

**工作区与移动端：** 工作区在选择 Agent 后会重新播种，能从激活失败中恢复，并回收无子聊天的标签。移动端继续把设置、源码管理与工作区创建迁到带类型的 RPC，同时保住投递并修复流式跳动。

**性能：** 终端文件链接检查改为批量；浏览器输入在进程内派发；避免重复的远程能力探测；跳过多余的持久化刷新；限制 WSL skill 发现范围。

---

### 产品体验 {#v1-4-204-product}

#### 工作区、标签页与浏览器 {#v1-4-204-workspaces-tabs}

> 工作区恢复更安全，浏览器输入更跟手，项目视图更清楚。

- 修复（worktrees）：工作区消失时，回收没有子聊天的聊天标签（[@brennanb2025](https://github.com/brennanb2025)，[#19970](https://github.com/stablyai/orca/pull/19970)）
- 修复（browser）：通过美式布局 CDP 键表按键，而不是每次按键开一个子进程（[@atreidesend](https://github.com/atreidesend)，[#15310](https://github.com/stablyai/orca/pull/15310)）
- 修复（workspaces）：Agent 选择后，对门禁报告的空工作区重新播种（[@brennanb2025](https://github.com/brennanb2025)，[#20182](https://github.com/stablyai/orca/pull/20182)）
- 修复（workspaces）：无计划的 Agent 创建在激活抛错时，恢复真正的终端（[@brennanb2025](https://github.com/brennanb2025)，[#20190](https://github.com/stablyai/orca/pull/20190)）
- 修复（github）：未过滤的空项目视图用自己的名字，而不是怪过滤器（[@nwparker](https://github.com/nwparker)，[#20588](https://github.com/stablyai/orca/pull/20588)）

### Agent 与工作流 {#v1-4-204-agents-workflow}

#### Agent 可靠性与 Native Chat {#v1-4-204-agent-reliability}

> 聊天增加拖放和 Fast 模式，恢复更从容，Agent 状态上报更准。

- 修复（native-chat）：在解析创建启动路由前，等待运行时能力探测（[@brennanb2025](https://github.com/brennanb2025)，[#19819](https://github.com/stablyai/orca/pull/19819)）
- 新增（ai-vault-search）：公开的会话搜索契约与传输（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20277](https://github.com/stablyai/orca/pull/20277)）
- 修复（tasks）：在 GitHub 搜索配额下仍保留仓库结果（[@OrcaWin](https://github.com/OrcaWin)，[#20460](https://github.com/stablyai/orca/pull/20460)）
- 修复（ai-vault）：流式传输过大的远程会话 transcript（[@OrcaWin](https://github.com/OrcaWin)，[#20455](https://github.com/stablyai/orca/pull/20455)）
- 修复（grok）：阻止重放的 Claude/Cursor hook 把 Grok 窗格报成 Claude（[@brennanb2025](https://github.com/brennanb2025)，[#20507](https://github.com/stablyai/orca/pull/20507)）
- 新增（native-chat）：支持文件拖放（[@brennanb2025](https://github.com/brennanb2025)，[#20494](https://github.com/stablyai/orca/pull/20494)）
- 重构（attention）：把 Agent 注意力边界从终端窗格上移开（[@brennanb2025](https://github.com/brennanb2025)，[#20525](https://github.com/stablyai/orca/pull/20525)）
- 修复（grok）：把托管 hook 窗格守卫的展开推迟到 shell（[@brennanb2025](https://github.com/brennanb2025)，[#20534](https://github.com/stablyai/orca/pull/20534)）
- 重构（orchestration）：从消息推导投递资格（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19837](https://github.com/stablyai/orca/pull/19837)）
- 修复（grok）：只在 Grok 真正完成时宣告一次完成（[@brennanb2025](https://github.com/brennanb2025)，[#20523](https://github.com/stablyai/orca/pull/20523)）
- 新增（native-chat）：增加按提供方区分的 Fast 模式（[@brennanb2025](https://github.com/brennanb2025)，[#20506](https://github.com/stablyai/orca/pull/20506)）
- 修复（claude）：在有能力的版本上订阅 SessionEnd，并修正一处错误注释（[@brennanb2025](https://github.com/brennanb2025)，[#20530](https://github.com/stablyai/orca/pull/20530)）
- 新增（agent-status）：用 run-identity 类型按 agent 而不是窗格索引行（[@brennanb2025](https://github.com/brennanb2025)，[#20531](https://github.com/stablyai/orca/pull/20531)）
- 修复（hooks）：把超时 hook 报为无法核实，并终止其进程树（[@nwparker](https://github.com/nwparker)，[#20559](https://github.com/stablyai/orca/pull/20559)）
- 修复（session-search）：在 Windows 上读取过大的数字文件 ID（[@OrcaWin](https://github.com/OrcaWin)，[#20551](https://github.com/stablyai/orca/pull/20551)）
- 新增（native-chat）：在整个聊天窗格显示拖放目标（[@brennanb2025](https://github.com/brennanb2025)，[#20561](https://github.com/stablyai/orca/pull/20561)）
- 修复（native-chat）：允许提供方重开它自己恢复的 Claude 回合（[@brennanb2025](https://github.com/brennanb2025)，[#20518](https://github.com/stablyai/orca/pull/20518)）
- 修复（native-chat）：重启后干净恢复结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#20509](https://github.com/stablyai/orca/pull/20509)）
- 修复（ai-vault）：忽略非绝对路径的 agent 扫描根环境覆盖（[@manuaudio](https://github.com/manuaudio)，[#13118](https://github.com/stablyai/orca/pull/13118)）
- 修复（grok）：阻止 SessionStart 的 orca-status hook 挂起 10 秒（[@bjornrun](https://github.com/bjornrun)，[#20090](https://github.com/stablyai/orca/pull/20090)）
- 修复（native-chat）：阻止有界尾读把聊天游标移过尚未应用的行（[@brennanb2025](https://github.com/brennanb2025)，[#20581](https://github.com/stablyai/orca/pull/20581)）
- 新增（ai-vault-search）：在扫描服务中、设置开关后构建会话搜索索引器（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20516](https://github.com/stablyai/orca/pull/20516)）
- 修复（native-chat）：等待输入时隐藏活动（[@brennanb2025](https://github.com/brennanb2025)，[#20496](https://github.com/stablyai/orca/pull/20496)）

#### 移动端 {#v1-4-204-mobile}

> 移动端继续 typed-RPC 迁移，同时保持投递和流式稳定。

- 重构（mobile）：把设置读取迁到 RpcOperation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20499](https://github.com/stablyai/orca/pull/20499)）
- 修复（mobile）：给 Native Chat 一个尾随所有者，避免流式跳动（[@brennanb2025](https://github.com/brennanb2025)，[#20493](https://github.com/stablyai/orca/pull/20493)）
- 修复（mobile）：在传输切换期间保留投递的歧义（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20280](https://github.com/stablyai/orca/pull/20280)）
- 测试（mobile）：整合 RPC 迁移的验证基础设施（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20521](https://github.com/stablyai/orca/pull/20521)）
- 重构（mobile）：把源码管理域走带类型的 RpcOperation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20544](https://github.com/stablyai/orca/pull/20544)）
- 修复（mobile）：修了 RPC 迁移保留下来的两个已知主线问题（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20563](https://github.com/stablyai/orca/pull/20563)）
- 测试（mobile）：把每条 RPC golden 钉到自己的场景输入，而不是整个清单（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20562](https://github.com/stablyai/orca/pull/20562)）
- 重构（mobile）：把任务工作区创建域走带类型的 RpcOperation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20568](https://github.com/stablyai/orca/pull/20568)）

#### 中继与云端 {#v1-4-204-relay-cloud}

> 探测和身份校验的边界更紧，失败处理更好。

- 修复（rpc）：校验 TaskProviderIdentity 中提供方特有字段（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20284](https://github.com/stablyai/orca/pull/20284)）
- 修复（ssh）：限制中继在任 lsof 探测（[@kaluli123123](https://github.com/kaluli123123)，[#18304](https://github.com/stablyai/orca/pull/18304)）

### 质量与交付 {#v1-4-204-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能改进 {#v1-4-204-perf-improvements}

> 针对性优化减少了终端、浏览器、远程、持久化和 skill 发现路径上的多余工作。

其中包括：在所属主机上批量检查终端文件链接、进程内派发浏览器指针、文件导入时减少远程能力探测、终端重新挂接时跳过多余的整状态刷新，以及有界的 WSL skill 发现。

- 性能（terminal）：在所属主机上批量检查文件链接（[@OrcaWin](https://github.com/OrcaWin)，[#20463](https://github.com/stablyai/orca/pull/20463)）
- 性能（skills）：限制 WSL 已安装 skill 的发现范围（[@PPP-JH](https://github.com/PPP-JH)，[#12314](https://github.com/stablyai/orca/pull/12314)）
- 性能（remote）：文件导入时避免重复的能力探测（[@dngur6344](https://github.com/dngur6344)，[#14555](https://github.com/stablyai/orca/pull/14555)）
- 性能（persistence）：终端重新挂接时跳过多余的整状态刷新（[@AmethystLiang](https://github.com/AmethystLiang)，[#20137](https://github.com/stablyai/orca/pull/20137)）
- 性能（browser）：在进程内派发坐标指针输入，而不是每个事件一个子进程（[@nwparker](https://github.com/nwparker)，[#20593](https://github.com/stablyai/orca/pull/20593)）

#### 可靠性、测试与交付 {#v1-4-204-reliability-tests}

- 修复（runtime）：拒绝畸形的文件 Base64 填充（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20283](https://github.com/stablyai/orca/pull/20283)）
- 修复：跨版本只显示一次意外退出登录提示（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20526](https://github.com/stablyai/orca/pull/20526)）
- 修复（auth）：把回调失败报为失败而不是取消（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20535](https://github.com/stablyai/orca/pull/20535)）
- 修复（git）：远程不存在时跳过上游远程探测（[@innocarpe](https://github.com/innocarpe)，[#18455](https://github.com/stablyai/orca/pull/18455)）
- 修复（terminal）：从复制的选区里去掉 Agent 槽位 (#19770)（[@nwparker](https://github.com/nwparker)，[#20545](https://github.com/stablyai/orca/pull/20545)）
- 修复（pty）：放缓 EAGAIN 写重试，避免卡住的读取把守护线程打满（[@nireak](https://github.com/nireak)，[#15319](https://github.com/stablyai/orca/pull/15319)）

### 新贡献者 {#v1-4-204-contributors}

- [@atreidesend](https://github.com/atreidesend) 首次贡献于 [#15310](https://github.com/stablyai/orca/pull/15310)
- [@PPP-JH](https://github.com/PPP-JH) 首次贡献于 [#12314](https://github.com/stablyai/orca/pull/12314)
- [@manuaudio](https://github.com/manuaudio) 首次贡献于 [#13118](https://github.com/stablyai/orca/pull/13118)
- [@bjornrun](https://github.com/bjornrun) 首次贡献于 [#20090](https://github.com/stablyai/orca/pull/20090)
- [@nireak](https://github.com/nireak) 首次贡献于 [#15319](https://github.com/stablyai/orca/pull/15319)

**完整变更对照：** [v1.4.203...v1.4.204](https://github.com/stablyai/orca/compare/v1.4.203...v1.4.204)
