# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.212](#v1-4-212) | 2026年9月25日 | 官方更新 |
| [v1.4.211](#v1-4-211) | 2026年9月25日 | Native chat keeps its live t… |
| [v1.4.210](#v1-4-210) | 2026年9月24日 | 已完成聊天折叠为答案，失败回合不再挂起 |

### v1.4.212 · 官方更新 {#v1-4-212-summary}

2026年9月25日 · [本页全文](#v1-4-212) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.212)

- 详见下方完整中文日志。

### v1.4.211 · Native chat keeps its live t… {#v1-4-211-summary}

2026年9月25日 · [本页全文](#v1-4-211) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.211)

- Agents & chat： Native chat keeps its live tool state intact, shows Codex goals above the composer, and treats active child work as working. Muse Code is now a first-class supervised-worker harness with local usage reporting.
- Workspaces, editor & browser： Large local workspaces can find files by name, preview tabs can be turned off, stale workspace listings cannot retire newly created workspaces, and browser shortcuts stay with the split or floating panel that received them.
- Terminal, remote & reliability： Background-created terminals answer startup queries, explicit closes get enough time for a daemon verdict, and macOS adoption and folder-denial events carry code-identity telemetry. Asia relay capacity grows safely with cell-specific gates, lock-convoy alerts, and safer rehoming.

### v1.4.210 · 已完成聊天折叠为答案，失败回合不再挂起 {#v1-4-210-summary}

2026年9月24日 · [本页全文](#v1-4-210) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.210)

- Agent 与聊天：已完成聊天折叠到答案，失败回合结束而不是挂起，结构化聊天完成时点亮未读，重启恢复留在状态栏。Antigravity 可作为受监督 worker 运行，终端启动会回报所创建的窗格。
- 终端、编辑器与工作区：终端主题选择覆盖 Ghostty 颜色，Linux daemon 在服务重启后仍存活并干净收割，macOS 会告知如何修复文件夹访问。大 artifact 与冲突列表已虚拟化，搜索列表不再闪旧结果，Monaco 失败被隔离。
- 远程与可靠性：WSL 访客保留 OpenCode agent variant，重建的 SSH 目标保留 generation floor，同容量中继波次清理失败模板时不触碰后端服务。

## 完整中文日志 {#full-notes}

## v1.4.212 官方更新 {#v1-4-212}

2026年9月25日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.212)

### Agent 与 Native Chat {#v1-4-212-native-chat}

- 修复（codex）：Codex 0.157+ starts in Orca-managed homes instead of failing with SUN_LEN（[@OrcaWin](https://github.com/OrcaWin)，[#22878](https://github.com/stablyai/orca/pull/22878)）

**完整变更对照：** [v1.4.211...v1.4.212](https://github.com/stablyai/orca/compare/v1.4.211...v1.4.212)

## v1.4.211 Native chat keeps its live t… {#v1-4-211}

2026年9月25日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.211)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-211-short}

**Agent 与聊天：** Native chat keeps its live tool state intact, shows Codex goals above the composer, and treats active child work as working. Muse Code is now a first-class supervised-worker harness with local usage reporting.

**Workspaces, editor & browser:** Large local workspaces can find files by name, preview tabs can be turned off, stale workspace listings cannot retire newly created workspaces, and browser shortcuts stay with the split or floating panel that received them.

**Terminal, remote & reliability:** Background-created terminals answer startup queries, explicit closes get enough time for a daemon verdict, and macOS adoption and folder-denial events carry code-identity telemetry. Asia relay capacity grows safely with cell-specific gates, lock-convoy alerts, and safer rehoming.

**Mobile:** The OTA page gains device Back support, safer draft handling, clearer re-pair and update recovery, and capability-negotiated, gzipped bundle ranges.

---

### 产品体验 {#v1-4-211-product}

#### Editor, workspaces & browser {#v1-4-211-editor-workspaces-browser}

> Workspace lists stay correct, large folders are easier to search, editor behavior is configurable, and browser commands stay in their originating view.

- 修复（cli）：describe Linear write support（[@AtejiMan](https://github.com/AtejiMan)，[#21830](https://github.com/stablyai/orca/pull/21830)）
- 修复（sidebar）：hang the subagent chevron in the card gutter（[@brennanb2025](https://github.com/brennanb2025)，[#22331](https://github.com/stablyai/orca/pull/22331)）
- 修复（usage）：price GPT-6 Sol/Luna, Opus 5.5 and Fable 5.1, and correct GPT-5.6 rates（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22350](https://github.com/stablyai/orca/pull/22350)）
- 修复（usage）：price Codex long context per request, not per aggregate（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22360](https://github.com/stablyai/orca/pull/22360)）
- 修复（worktrees）：a listing that predates a create can no longer retire the new workspace（[@brennanb2025](https://github.com/brennanb2025)，[#22311](https://github.com/stablyai/orca/pull/22311)）
- 修复（explorer）：find files by name in large local workspaces（[@nwparker](https://github.com/nwparker)，[#22369](https://github.com/stablyai/orca/pull/22369)）
- 新增（editor）：add a setting to turn off preview tabs（[@nwparker](https://github.com/nwparker)，[#22398](https://github.com/stablyai/orca/pull/22398)）
- 修复（editor）：map Salesforce Apex extensions to the apex language id（[@bdJohnson72](https://github.com/bdJohnson72)，[#14287](https://github.com/stablyai/orca/pull/14287)）
- 新增（sidebar）：copy workspace name from context menu（[@AmethystLiang](https://github.com/AmethystLiang)，[#22338](https://github.com/stablyai/orca/pull/22338)）

#### Orchestration & CLI {#v1-4-211-orchestration-cli}

> Runtime connection denials are reported accurately, and supervised workers accept Muse model and effort settings.

- 修复（cli）：report a denied runtime connection instead of a dead Orca（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22341](https://github.com/stablyai/orca/pull/22341)）
- 新增（orchestration）：accept Muse model and effort for supervised workers（[@nwparker](https://github.com/nwparker)，[#22383](https://github.com/stablyai/orca/pull/22383)）

#### Agents, chat & launches {#v1-4-211-agents-chat-launches}

> Live chat state stays legible, structured sessions reflect their child work, and Muse Code joins the supported agent harnesses.

- 修复（native-chat）：hide delete for structured history（[@brennanb2025](https://github.com/brennanb2025)，[#22106](https://github.com/stablyai/orca/pull/22106)）
- 修复（agent-status）：a structured session with live child work reads as working（[@brennanb2025](https://github.com/brennanb2025)，[#22295](https://github.com/stablyai/orca/pull/22295)）
- 重构（ai-vault）：read Codex's stated subagent parentage instead of a boolean（[@brennanb2025](https://github.com/brennanb2025)，[#22298](https://github.com/stablyai/orca/pull/22298)）
- 修复（native-chat）：journal rows name the agent that produced them（[@brennanb2025](https://github.com/brennanb2025)，[#22299](https://github.com/stablyai/orca/pull/22299)）
- 新增（native-chat）：notify on every settled structured turn（[@brennanb2025](https://github.com/brennanb2025)，[#22105](https://github.com/stablyai/orca/pull/22105)）
- 新增（agents）：add first-class Muse Code harness（[@nwparker](https://github.com/nwparker)，[#22216](https://github.com/stablyai/orca/pull/22216)）
- 修复（opencode-usage）：read OpenCode 2 session_v2 token totals（[@nwparker](https://github.com/nwparker)，[#22391](https://github.com/stablyai/orca/pull/22391)）
- 修复（opencode2）：only treat the question tool's form as a pane blocker（[@nwparker](https://github.com/nwparker)，[#22399](https://github.com/stablyai/orca/pull/22399)）
- 修复（native-chat）：keep a structured agent's tool line between tool calls（[@brennanb2025](https://github.com/brennanb2025)，[#22349](https://github.com/stablyai/orca/pull/22349)）
- 新增（usage）：add Muse Code local usage provider（[@nwparker](https://github.com/nwparker)，[#22379](https://github.com/stablyai/orca/pull/22379)）
- 新增（agent-launch）：let a caller reserve the pane its terminal launch creates（[@brennanb2025](https://github.com/brennanb2025)，[#22291](https://github.com/stablyai/orca/pull/22291)）
- 新增（native-chat）：show a Codex chat's goal above the composer, and set it from goal mode（[@brennanb2025](https://github.com/brennanb2025)，[#22377](https://github.com/stablyai/orca/pull/22377)）
- 修复（native-chat）：keep one live tool-run header from a call's start to the turn's end（[@brennanb2025](https://github.com/brennanb2025)，[#22432](https://github.com/stablyai/orca/pull/22432)）

#### 终端 {#v1-4-211-terminal}

> Background-created terminals answer startup questions, explicit closes receive a fair daemon verdict, and macOS diagnostics identify the adopted code.

- 新增（telemetry）：report the macOS daemon's code identity on adoption and folder-denial events（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22171](https://github.com/stablyai/orca/pull/22171)）
- 修复（runtime）：budget explicit terminal close for the daemon's immediate-kill verdict（[@nwparker](https://github.com/nwparker)，[#22385](https://github.com/stablyai/orca/pull/22385)）
- 修复（runtime）：answer startup terminal queries for background-created terminals（[@nwparker](https://github.com/nwparker)，[#22384](https://github.com/stablyai/orca/pull/22384)）

#### Remote, SSH & relay {#v1-4-211-remote-ssh-relay}

> Asia relay capacity expands with measured gates, lock-aware rehoming, and rollout visibility.

- 新增（relay）：declare Asia cell c30 at the c27 shape（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22375](https://github.com/stablyai/orca/pull/22375)）
- 修复（cloud）：compare the Asia topology budget gate against the measured 500-connection default（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22386](https://github.com/stablyai/orca/pull/22386)）
- 修复（cloud）：gate the Asia canary on its own cell's SQL failures, not the directors'（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22405](https://github.com/stablyai/orca/pull/22405)）
- 杂项（relay）：treat Asia cell c30 as a general cell now that it is promoted（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22439](https://github.com/stablyai/orca/pull/22439)）
- 修复（relay）：stop rehoming hosts off Asia cells until the lock fix lands（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22443](https://github.com/stablyai/orca/pull/22443)）
- 新增（relay）：alert on relay cell table lock convoys（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22446](https://github.com/stablyai/orca/pull/22446)）
- 修复（relay）：lock only the target cell row, last and NOWAIT, in the rehome commit（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22449](https://github.com/stablyai/orca/pull/22449)）

#### 浏览器 {#v1-4-211-browser}

> Browser commands stay with the split or floating panel that received them.

- 修复（browser）：scope back/forward/reload/zoom/grab shortcuts to the originating split（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22340](https://github.com/stablyai/orca/pull/22340)）
- 修复（browser）：scope floating browser shortcuts to their own panel（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22361](https://github.com/stablyai/orca/pull/22361)）

#### 性能 {#v1-4-211-performance}

> Mobile bundle delivery keeps more work in flight.

- 性能（mobile）：keep four bundle chunk reads in flight across the whole manifest (OTA phase C follow-up)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22376](https://github.com/stablyai/orca/pull/22376)）

#### Mobile (OTA page) {#v1-4-211-mobile-ota-page-}

> The over-the-air page gains keyboard and navigation behavior, recovery guidance, safer cache cleanup, and efficient bundle delivery. Listed here for visibility only; the mobile app ships on its own release schedule.

- 修复（push）：bound the delivery claim, delete finished batches, and keep a connection for requests（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22307](https://github.com/stablyai/orca/pull/22307)）
- 修复（mobile）：an accessory Enter ends the field's editing session, and the page's Enter survives a composition（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22300](https://github.com/stablyai/orca/pull/22300)）
- 新增（mobile）：the device Back key reaches the page（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22308](https://github.com/stablyai/orca/pull/22308)）
- 新增（mobile）：a failed hybrid-shell update is recorded on the device and shown in Troubleshoot（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22321](https://github.com/stablyai/orca/pull/22321)）
- 修复（mobile）：the page offers no control whose only effect is a re-dial it cannot make（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22326](https://github.com/stablyai/orca/pull/22326)）
- 修复（mobile）：removing a host deletes its page cache through the one process store（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22352](https://github.com/stablyai/orca/pull/22352)）
- 修复（mobile）：Back with an unsaved markdown draft prompts on the page too（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22362](https://github.com/stablyai/orca/pull/22362)）
- 修复（mobile）：the page's auth-failed banner offers Re-pair again（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22363](https://github.com/stablyai/orca/pull/22363)）
- 新增（mobile-web-bundle）：gzipped 384 KiB ranges over a capability-negotiated mobileWeb.bundle.range (OTA phase C follow-up)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22381](https://github.com/stablyai/orca/pull/22381)）

#### Tests, CI & documentation {#v1-4-211-tests-ci-documentation}

> Release checks stay targeted and the mobile recording corpus follows the relevant changes.

- 测试（opencode）：pin the installed OpenCode plugin to a v2-loadable default export（[@nwparker](https://github.com/nwparker)，[#22389](https://github.com/stablyai/orca/pull/22389)）
- 测试（mobile）：repin the recording corpus to main's tip after #22376（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22394](https://github.com/stablyai/orca/pull/22394)）
- 文档（wechat）：point community QR code at group 10（[@AmethystLiang](https://github.com/AmethystLiang)，[#22403](https://github.com/stablyai/orca/pull/22403)）
- 测试（mobile）：repin the recording corpus to main's tip after #22381（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22407](https://github.com/stablyai/orca/pull/22407)）
- 测试（mobile）：move the session closure pin past the structured tool-line module（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22430](https://github.com/stablyai/orca/pull/22430)）
- Optimize cloud-verify workflow to scan HEAD instead of all history（[@AmethystLiang](https://github.com/AmethystLiang)，[#22457](https://github.com/stablyai/orca/pull/22457)）

### 新贡献者 {#v1-4-211-contributors}

- [@AtejiMan](https://github.com/AtejiMan) 首次贡献于 [#21830](https://github.com/stablyai/orca/pull/21830)
- [@bdJohnson72](https://github.com/bdJohnson72) 首次贡献于 [#14287](https://github.com/stablyai/orca/pull/14287)

**完整变更对照：** [v1.4.210...v1.4.211](https://github.com/stablyai/orca/compare/v1.4.210...v1.4.211)

## v1.4.210 已完成聊天折叠为答案，失败回合不再挂起 {#v1-4-210}

2026年9月24日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.210)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-210-short}

**Agent 与聊天：** 已完成聊天折叠到答案，失败回合结束而不是挂起，结构化聊天完成时点亮未读，重启恢复留在状态栏。Antigravity 可作为受监督 worker 运行，终端启动会回报所创建的窗格。

**终端、编辑器与工作区：** 终端主题选择覆盖 Ghostty 颜色，Linux daemon 在服务重启后仍存活并干净收割，macOS 会告知如何修复文件夹访问。大 artifact 与冲突列表已虚拟化，搜索列表不再闪旧结果，Monaco 失败被隔离。

**远程与可靠性：** WSL 访客保留 OpenCode agent variant，重建的 SSH 目标保留 generation floor，同容量中继波次清理失败模板时不触碰后端服务。

---

### 产品体验 {#v1-4-210-product}

#### Agent、聊天与启动 {#v1-4-210-agents-chat-launches}

> 结构化聊天干净收束，启动携带上下文，工作区列表保持响应。

- 修复（sidebar）：有结构化聊天的 workspace 不再被读成休眠（[@brennanb2025](https://github.com/brennanb2025)，[#22098](https://github.com/stablyai/orca/pull/22098)）
- 修复：搜索查询变化时列表仍显示旧结果（[@AmethystLiang](https://github.com/AmethystLiang)，[#22173](https://github.com/stablyai/orca/pull/22173)）
- 用可复用组件虚拟化 artifacts 列表（[@AmethystLiang](https://github.com/AmethystLiang)，[#22061](https://github.com/stablyai/orca/pull/22061)）
- 成功投递后清除网站标注（[@AmethystLiang](https://github.com/AmethystLiang)，[#22060](https://github.com/stablyai/orca/pull/22060)）
- 修复（native-chat）：子 Agent 输出不再冒充生成它的 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#21398](https://github.com/stablyai/orca/pull/21398)）
- 回退：将子 Agent 归属推迟到联动重构之后（[@brennanb2025](https://github.com/brennanb2025)，[#22058](https://github.com/stablyai/orca/pull/22058)）
- 修复（native-chat）：已完成回合折叠到其答案（[@brennanb2025](https://github.com/brennanb2025)，[#22029](https://github.com/stablyai/orca/pull/22029)）
- 修复（native-chat）：Agent 报告失败时结束结构化回合（[@brennanb2025](https://github.com/brennanb2025)，[#22047](https://github.com/stablyai/orca/pull/22047)）
- 新增（native-chat）：结构化聊天完成时点亮未读指示（[@brennanb2025](https://github.com/brennanb2025)，[#21924](https://github.com/stablyai/orca/pull/21924)）
- 修复（native-chat）：导航到已打开的历史会话（[@brennanb2025](https://github.com/brennanb2025)，[#21283](https://github.com/stablyai/orca/pull/21283)）
- 新增（native-chat）：重启恢复入口保留在状态栏（[@brennanb2025](https://github.com/brennanb2025)，[#22031](https://github.com/stablyai/orca/pull/22031)）
- 修复（floating-workspace）：汇报终端启动所创建的窗格（[@brennanb2025](https://github.com/brennanb2025)，[#22108](https://github.com/stablyai/orca/pull/22108)）
- 重构（floating-workspace）：通过共享启动器启动默认 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#21390](https://github.com/stablyai/orca/pull/21390)）
- 新增：支持 Antigravity 作为受监督 worker（[@beattlekid](https://github.com/beattlekid)，[#21705](https://github.com/stablyai/orca/pull/21705)）

#### 用量报告 {#v1-4-210-usage-reporting}

> Claude 用量保持实时，费用总计覆盖最新模型。

- 修复（rate-limits）：Fable 账户在实时会话中继续轮询 Claude 用量（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22071](https://github.com/stablyai/orca/pull/22071)）
- 修复（usage）：为 GPT-6 Astra 计价，并声明 Codex 费用总计何时遗漏某模型（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22073](https://github.com/stablyai/orca/pull/22073)）

#### 终端 {#v1-4-210-terminal}

> 主题选择优先，后台服务在重启后存活，延迟数字保持诚实。

- 修复（settings）：终端主题选择覆盖 Ghostty 颜色（[@nwparker](https://github.com/nwparker)，[#22069](https://github.com/stablyai/orca/pull/22069)）
- 修复（daemon）：把终端 daemon 放到独立 systemd scope，服务重启不再杀死所有活着的 PTY（[@LesleyMurfin](https://github.com/LesleyMurfin)，[#19430](https://github.com/stablyai/orca/pull/19430)）
- 修复（macos）：当 Orca 终端服务无法读取文件夹时告知用户并引导修复（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21923](https://github.com/stablyai/orca/pull/21923)）
- 修复（daemon）：关闭时收割终端后代进程（[@OrcaWin](https://github.com/OrcaWin)，[#22232](https://github.com/stablyai/orca/pull/22232)）
- 修复（linux）：所有者退出时释放孤儿进程（[@OrcaWin](https://github.com/OrcaWin)，[#22247](https://github.com/stablyai/orca/pull/22247)）
- 修复（perf）：用已呈现的 CI 帧测量终端延迟（[@nwparker](https://github.com/nwparker)，[#22096](https://github.com/stablyai/orca/pull/22096)）
- 修复（perf）：校准报告预算且不掩盖延迟卡顿（[@nwparker](https://github.com/nwparker)，[#22075](https://github.com/stablyai/orca/pull/22075)）

#### 编辑器、工作区与源码管理 {#v1-4-210-editor-workspaces-source-control}

> 更新下载可靠，大 artifact 与冲突列表保持流畅，编辑器失败被隔离。

- 修复（updater）：发送 gh token 并缓存 release picker 的构建列表（[@AmethystLiang](https://github.com/AmethystLiang)，[#21902](https://github.com/stablyai/orca/pull/21902)）
- 降低 filter chip 对比度以表示只读状态（[@AmethystLiang](https://github.com/AmethystLiang)，[#21751](https://github.com/stablyai/orca/pull/21751)）
- 重构编辑器标题文件重命名为 breadcrumb morph UI（[@AmethystLiang](https://github.com/AmethystLiang)，[#21265](https://github.com/stablyai/orca/pull/21265)）
- 修复（renderer）：隔离 Monaco 初始化失败（[@OrcaWin](https://github.com/OrcaWin)，[#21555](https://github.com/stablyai/orca/pull/21555)）
- 虚拟化大型冲突文件树（[@AmethystLiang](https://github.com/AmethystLiang)，[#21920](https://github.com/stablyai/orca/pull/21920)）
- 重构：冲突审查改用通用 VirtualizedList（[@AmethystLiang](https://github.com/AmethystLiang)，[#22092](https://github.com/stablyai/orca/pull/22092)）
- 修复（browser）：离屏页面导航提交时通知状态（[@AmethystLiang](https://github.com/AmethystLiang)，[#21703](https://github.com/stablyai/orca/pull/21703)）

#### 提供方与助手 {#v1-4-210-providers}

> OpenCode 启动在各宿主上保留 variant 与插件。

- 修复（opencode）：在纯可执行名下支持 v2 插件（[@nwparker](https://github.com/nwparker)，[#22078](https://github.com/stablyai/orca/pull/22078)）
- 修复（wsl）：在访客中保留 OpenCode agent variant（[@nwparker](https://github.com/nwparker)，[#22089](https://github.com/stablyai/orca/pull/22089)）

#### 远程、SSH 与中继 {#v1-4-210-remote}

> 重建目标保留 floor，失败滚动自行清理。

- 修复（ssh）：重建目标保留 generation floor（相关 PR）
- 修复（relay）：同容量中继波次清理失败模板且不触碰后端服务（相关 PR）

#### 移动端 {#v1-4-210-mobile}

> 继续 OTA 迁移：页面壳、平台缝、听写、输入与路由更多走页面边界。

- 多项 feat/fix（mobile）：麦克风权限、可选能力声明、host-scoping 重写、历史页拒绝边界、catch-all 深链、Zod 校验、live-input 缝、native/OTA 构建开关、Metro 缓存键、听写拒绝原因、软键盘上的 live input、首帧前保留绘制帧等（[@Jinwoo-H](https://github.com/Jinwoo-H) 系列 PR）

### 新贡献者 {#v1-4-210-contributors}

- [@beattlekid](https://github.com/beattlekid) 首次贡献于 [#21705](https://github.com/stablyai/orca/pull/21705)

**完整变更对照：** [v1.4.209...v1.4.210](https://github.com/stablyai/orca/compare/v1.4.209...v1.4.210)
