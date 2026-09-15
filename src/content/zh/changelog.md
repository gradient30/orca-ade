# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.203](#v1-4-203) | 2026年9月15日 | Reliability & security: |
| [v1.4.201](#v1-4-201) | 2026年9月13日 | Native Chat 斜杠命令、后台任务与子 Agent |
| [v1.4.200](#v1-4-200) | 2026年9月11日 | Native Chat 看见子 Agent，编排从创建起就有主人 |

### v1.4.203 · Reliability & security: {#v1-4-203-summary}

2026年9月15日 · [本页全文](#v1-4-203) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.203)

- Reliability & security:
- Agents & chat:
- Workspaces & mobile:

### v1.4.201 · Native Chat 斜杠命令、后台任务与子 Agent {#v1-4-201-summary}

2026年9月13日 · [本页全文](#v1-4-201) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.201)

- Native Chat：任意位置的 `/` 选择器、后台任务条显示正在运行的内容、子 Agent 出现在侧栏子行。
- 桌面端与移动端原生推送曾接入后又撤回，待投递问题排查。
- 中继按区域放置、空闲切换后重连；终端与聊天只挂载可见内容。

### v1.4.200 · Native Chat 看见子 Agent，编排从创建起就有主人 {#v1-4-200-summary}

2026年9月11日 · [本页全文](#v1-4-200) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.200)

- Native Chat：Claude 子 Agent 活动与 Codex 后台任务会显示在聊天里；完成的回合列出变更文件，任务更新流入编写器。
- 编排：Worker 终端从创建起就有主人；启动、移动端输入与旧联邦协调器增加恢复保护。
- 工作区与浏览器：后台浏览器标签打开即加载；创建聊天时保留当前 worktree。

## 完整中文日志 {#full-notes}

## v1.4.203 Reliability & security: {#v1-4-203}

2026年9月15日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.203)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-203-short}

**Reliability & security:** Electron is updated to address a glibc environment use-after-free, browser cookie migration is more reliable, and worktree creation now completes cleanly after post-create failures.

**Agents & chat:** Native chat recovers restart-stranded sends from provider history, agent status no longer depends on a retained runtime row store, and provider/model validation is more resilient.

**Workspaces & mobile:** Folder workspaces retain their saved names and groups, sidebar nesting is easier to work with, and mobile restores push, cold-start, notification, Markdown, and workspace-routing behavior.

**Performance:** Orca reduces cold-switching, browser, terminal, SSH, mobile, history, plugin, and relay overhead across a broad set of targeted improvements.
---

### 产品体验 {#v1-4-203-product}

#### 工作区、标签页与浏览器 {#v1-4-203-workspaces-tabs}

> Safer workspace creation, more reliable browser data, and clearer navigation around your projects.

- 修复（browser）：decode Chromium SameSite storage values (135 cookies silently lost per profile)（[@brennanb2025](https://github.com/brennanb2025)，[#20076](https://github.com/stablyai/orca/pull/20076)）
- 修复（workspaces）：complete a worktree create when a post-create step throws（[@brennanb2025](https://github.com/brennanb2025)，[#20175](https://github.com/stablyai/orca/pull/20175)）
- 修复：landing footer menu placement（[@nwparker](https://github.com/nwparker)，[#20360](https://github.com/stablyai/orca/pull/20360)）
- Make sidebar nesting easier while preserving animated reordering（[@nwparker](https://github.com/nwparker)，[#20412](https://github.com/stablyai/orca/pull/20412)）
- 修复（browser）：move cookie scoping off psl's stale suffix list（[@nwparker](https://github.com/nwparker)，[#20421](https://github.com/stablyai/orca/pull/20421)）
- 修复（tabs）：cancel split drags when the window loses focus（[@OrcaWin](https://github.com/OrcaWin)，[#20323](https://github.com/stablyai/orca/pull/20323)）
- 修复（resource-manager）：show saved folder workspace names and groups（[@OrcaWin](https://github.com/OrcaWin)，[#20324](https://github.com/stablyai/orca/pull/20324)）
- 修复（sidebar）：show agent activity before workspace activation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20398](https://github.com/stablyai/orca/pull/20398)）

### Agent 与工作流 {#v1-4-203-agents-workflow}

#### Agent reliability & native chat {#v1-4-203-agent-reliability-native-chat}

> Agents recover more gracefully, and chat makes safer decisions when provider state or configuration changes.

- 重构（agent-status）：delete the runtime's retained row store (PR 1b)（[@brennanb2025](https://github.com/brennanb2025)，[#19785](https://github.com/stablyai/orca/pull/19785)）
- 修复（source-control）：pass the Antigravity prompt to agy --print（[@nwparker](https://github.com/nwparker)，[#20147](https://github.com/stablyai/orca/pull/20147)）
- 修复（hooks）：stop orphaned managed markers from consuming user TOML（[@nwparker](https://github.com/nwparker)，[#20148](https://github.com/stablyai/orca/pull/20148)）
- 修复（codex）：reconcile marketplace and plugin tables through the config mirror（[@nwparker](https://github.com/nwparker)，[#20150](https://github.com/stablyai/orca/pull/20150)）
- 新增（ai-vault-search）：session search query engine over the index（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20029](https://github.com/stablyai/orca/pull/20029)）
- 修复（native-chat）：shrink skill pill text（[@brennanb2025](https://github.com/brennanb2025)，[#20254](https://github.com/stablyai/orca/pull/20254)）
- 修复（claude）：refuse a structured model the provider does not list（[@brennanb2025](https://github.com/brennanb2025)，[#19946](https://github.com/stablyai/orca/pull/19946)）
- 修复（claude-accounts）：stop path resolution from creating the config directory（[@makoto-developer](https://github.com/makoto-developer)，[#12309](https://github.com/stablyai/orca/pull/12309)）
- 修复（ai-vault）：close OpenCode handles when query_only setup fails（[@bbingz](https://github.com/bbingz)，[#14134](https://github.com/stablyai/orca/pull/14134)）
- 修复（skills）：evict removed runtime discovery cache（[@bbingz](https://github.com/bbingz)，[#11489](https://github.com/stablyai/orca/pull/11489)）
- 修复（automations）：isolate the scheduler tick and refuse oversized cron steps（[@nwparker](https://github.com/nwparker)，[#20152](https://github.com/stablyai/orca/pull/20152)）
- 修复（runtime）：stop a name-only agent title from satisfying tui-idle（[@nwparker](https://github.com/nwparker)，[#20155](https://github.com/stablyai/orca/pull/20155)）
- 修复（agent-hooks）：stop navigation Escape from inferring completion（[@nwparker](https://github.com/nwparker)，[#20149](https://github.com/stablyai/orca/pull/20149)）
- 修复（ai-vault）：re-read a transcript rewritten to its previous size（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20261](https://github.com/stablyai/orca/pull/20261)）
- 重构（native-chat）：give each structured dispatch state exactly one meaning（[@brennanb2025](https://github.com/brennanb2025)，[#20133](https://github.com/stablyai/orca/pull/20133)）
- 新增（native-chat）：decide a restart-stranded send against provider history（[@brennanb2025](https://github.com/brennanb2025)，[#20139](https://github.com/stablyai/orca/pull/20139)）

#### 移动端 {#v1-4-203-mobile}

> Mobile restores its notification and startup paths while keeping workspace and Markdown handling responsive.

- 恢复：mobile push and fix cold-start dismissals（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20068](https://github.com/stablyai/orca/pull/20068)）
- 新增（mobile）：add typed RPC operations and fence raw requests（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20018](https://github.com/stablyai/orca/pull/20018)）
- 修复：prevent infinite loops in mobile Markdown rendering（[@nwparker](https://github.com/nwparker)，[#20313](https://github.com/stablyai/orca/pull/20313)）
- 修复（mobile）：reuse current workspace on notification taps（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20310](https://github.com/stablyai/orca/pull/20310)）

#### Relay & cloud {#v1-4-203-relay-cloud}

> Rollout gates, monitoring, and relay rehoming have stronger compatibility and failure handling.

- 新增（relay）：support protocol 3 in cell rollout gates（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20174](https://github.com/stablyai/orca/pull/20174)）
- 修复（relay）：bound idle rehome polling and skip disabled scans（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20203](https://github.com/stablyai/orca/pull/20203)）
- 修复（relay）：reuse canary across completed rollout batches（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20214](https://github.com/stablyai/orca/pull/20214)）
- 修复（cloud）：tolerate sparse director errors in rollout monitor（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20238](https://github.com/stablyai/orca/pull/20238)）
- 修复（cloud）：diagnose wrapped relay trust probe failures（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20403](https://github.com/stablyai/orca/pull/20403)）
- 测试（relay）：differential coverage for the single-pass host-data owner lookup（[@nwparker](https://github.com/nwparker)，[#20426](https://github.com/stablyai/orca/pull/20426)）
- 测试（rpc）：add a compile-time params catalog parity gate（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20281](https://github.com/stablyai/orca/pull/20281)）

### 质量与交付 {#v1-4-203-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### Performance improvements {#v1-4-203-performance-improvements}

> Targeted optimizations reduce unnecessary work across the interface, terminals, SSH and relay paths, browser and workspace indexing, mobile rendering, chat/history scans, Git, plugins, and AI-vault searches.

Highlights include faster cold worktree 切换, bounded remote transcript and terminal scans, fewer browser and tab inventory copies, lighter mobile Markdown and Linear grouping work, and more efficient Git, plugin, and session indexing.

#### Reliability, tests & delivery {#v1-4-203-reliability-tests-delivery}

- 修复（deps）：take Electron 43.7.0 for the glibc environ use-after-free (#20081)（[@nwparker](https://github.com/nwparker)，[#20089](https://github.com/stablyai/orca/pull/20089)）
- 修复（terminal）：re-run deferred tab admission when a plan installs mid-activation（[@brennanb2025](https://github.com/brennanb2025)，[#20176](https://github.com/stablyai/orca/pull/20176)）
- 修复（e2e）：remove four real flake sources and one caret race（[@brennanb2025](https://github.com/brennanb2025)，[#20169](https://github.com/stablyai/orca/pull/20169)）
- 修复（e2e）：run worktree first-paint probe on a mapped window（[@brennanb2025](https://github.com/brennanb2025)，[#20197](https://github.com/stablyai/orca/pull/20197)）
- 测试：replace fixed UI waits with observable readiness（[@nwparker](https://github.com/nwparker)，[#20369](https://github.com/stablyai/orca/pull/20369)）
- CI：reuse immutable package setup across shutdown checks（[@nwparker](https://github.com/nwparker)，[#20368](https://github.com/stablyai/orca/pull/20368)）
- CI：narrow pnpm cache keys and shallow development checkouts（[@nwparker](https://github.com/nwparker)，[#20370](https://github.com/stablyai/orca/pull/20370)）
- CI：balance existing unit and E2E shards using recorded timings（[@nwparker](https://github.com/nwparker)，[#20367](https://github.com/stablyai/orca/pull/20367)）
- 重构（renderer）：improve IPC error handling with clamped and unclamped variants（[@AmethystLiang](https://github.com/AmethystLiang)，[#20340](https://github.com/stablyai/orca/pull/20340)）
- 重构（preload）：drop the unused raw electron IPC bridge（[@nwparker](https://github.com/nwparker)，[#20419](https://github.com/stablyai/orca/pull/20419)）
- 修复（runtime）：GC expired proven-absent leaf PTY verdicts（[@innocarpe](https://github.com/innocarpe)，[#12810](https://github.com/stablyai/orca/pull/12810)）
- 修复（editor）：eliminate multi-second Markdown blank-run scans（[@nwparker](https://github.com/nwparker)，[#20231](https://github.com/stablyai/orca/pull/20231)）
- 修复（chat）：bound journal replay memory by live history（[@nwparker](https://github.com/nwparker)，[#20247](https://github.com/stablyai/orca/pull/20247)）
- 杂项：remove 20.7 MiB of duplicate and unused media（[@nwparker](https://github.com/nwparker)，[#20416](https://github.com/stablyai/orca/pull/20416)）
- 修复（updater）：open background check errors from the status bar（[@OrcaWin](https://github.com/OrcaWin)，[#20270](https://github.com/stablyai/orca/pull/20270)）
- 重构（windows）：vendor the registry addon as @orca/windows-registry（[@nwparker](https://github.com/nwparker)，[#20438](https://github.com/stablyai/orca/pull/20438)）
- 杂项（deps）：pin serve-sim to an exact version（[@nwparker](https://github.com/nwparker)，[#20446](https://github.com/stablyai/orca/pull/20446)）
- 新增：code quality lint for type assertions（[@AmethystLiang](https://github.com/AmethystLiang)，[#19462](https://github.com/stablyai/orca/pull/19462)）
- 修复（ci）：cache the vendored addon where node-gyp actually writes it（[@nwparker](https://github.com/nwparker)，[#20445](https://github.com/stablyai/orca/pull/20445)）
- 修复（ci）：match the truncated windows-process-tree virtual store dir（[@nwparker](https://github.com/nwparker)，[#20447](https://github.com/stablyai/orca/pull/20447)）
- 构建（macos）：parallelize native helpers with complete cancellation（[@espetro](https://github.com/espetro)，[#19651](https://github.com/stablyai/orca/pull/19651)）
- 减小：native dependency installs to the host platform（[@nwparker](https://github.com/nwparker)，[#20420](https://github.com/stablyai/orca/pull/20420)）
- 测试（scripts）：widen the Windows shim ratchet to catch package bin spawns（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20285](https://github.com/stablyai/orca/pull/20285)）

### New contributors {#v1-4-203-new-contributors}

- @espetro made their first contribution（[#19651](https://github.com/stablyai/orca/pull/19651)）

**完整变更对照：** [v1.4.201...v1.4.203](https://github.com/stablyai/orca/compare/v1.4.201...v1.4.203)

## v1.4.201 Native Chat 斜杠命令、后台任务与子 Agent {#v1-4-201}

2026年9月13日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.201)

### 简要说明 {#v1-4-201-short}

**Native Chat 更能读懂 Agent 在做什么。** 提示任意位置都是同一个 `/` 选择器；后台任务条会写出正在运行的内容；子 Agent 出现在侧栏子行，和 CLI Agent 一样。发送起就显示 Claude 正在工作，Thinking 表示推理。

**移动端推送曾接入后又撤回。** 桌面端与配对手机走过原生推送网关（1/3、2/3），本版本因投递问题整段回退，不包含在可用功能里。

**中继按区域放置，空闲切换后重连。** 终端在 worktree 切换时只挂载可见窗格；聊天只挂载视口附近的 transcript 行。

### Native Chat 与 Agent {#v1-4-201-native-chat}

> 斜杠命令、后台任务、子 Agent 与回合状态都在对话里可见。

- 修复（native-chat）：从发送起就显示 Claude 正在工作，而不是等提供方回显（[@brennanb2025](https://github.com/brennanb2025)，[#19822](https://github.com/stablyai/orca/pull/19822)）
- 修复（native-chat）：每个 Agent、提示任意位置都用同一个 / 选择器（[@brennanb2025](https://github.com/brennanb2025)，[#19832](https://github.com/stablyai/orca/pull/19832)）
- 新增（native-chat）：后台任务条会说明正在运行什么（[@brennanb2025](https://github.com/brennanb2025)，[#19311](https://github.com/stablyai/orca/pull/19311)）
- 修复（native-chat）：防止旧页面在 transcript 上打出空洞（[@nwparker](https://github.com/nwparker)，[#19845](https://github.com/stablyai/orca/pull/19845)）
- 重构（agent-status）：将结构化会话发布到 hook 服务器 store（[@brennanb2025](https://github.com/brennanb2025)，[#19683](https://github.com/stablyai/orca/pull/19683)）
- 新增（native-chat）：显示实时后台工作，并按类型命名每一行（[@brennanb2025](https://github.com/brennanb2025)，[#19705](https://github.com/stablyai/orca/pull/19705)）
- 新增（sidebar）：将 Native Chat 子 Agent 显示为侧栏子行，与 CLI Agent 一致（[@brennanb2025](https://github.com/brennanb2025)，[#19807](https://github.com/stablyai/orca/pull/19807)）
- 新增（native-chat）：聊天出现时聚焦消息框（[@brennanb2025](https://github.com/brennanb2025)，[#19868](https://github.com/stablyai/orca/pull/19868)）
- 测试（native-chat）：按结构化问题拆分 fixture（[@brennanb2025](https://github.com/brennanb2025)，[#19924](https://github.com/stablyai/orca/pull/19924)）
- 使结构化回合生命周期行持久化，以便完成时长得以保留（[@brennanb2025](https://github.com/brennanb2025)，[#19695](https://github.com/stablyai/orca/pull/19695)）
- 重构（native-chat）：统一 Agent 会话启动，并在结构化聊天中打开草稿（[@brennanb2025](https://github.com/brennanb2025)，[#19681](https://github.com/stablyai/orca/pull/19681)）
- 修复（native-chat）：绝不把未列出的模型收为启动默认（[@brennanb2025](https://github.com/brennanb2025)，[#19854](https://github.com/stablyai/orca/pull/19854)）
- 修复（native-chat）：在准入时结算结构化发送，而不是等提供方回显（[@brennanb2025](https://github.com/brennanb2025)，[#19863](https://github.com/stablyai/orca/pull/19863)）
- 修复（sidebar）：允许 Agent 行显示提供方自己的会话标题（[@brennanb2025](https://github.com/brennanb2025)，[#19936](https://github.com/stablyai/orca/pull/19936)）
- 新增（native-chat）：记录 Agent 会话的提供方名称（[@brennanb2025](https://github.com/brennanb2025)，[#19908](https://github.com/stablyai/orca/pull/19908)）
- 修复（native-chat）：把 Agent 实现的斜杠命令转交给 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#19929](https://github.com/stablyai/orca/pull/19929)）
- 新增（native-chat）：用提供方自己的报告描述斜杠命令（[@brennanb2025](https://github.com/brennanb2025)，[#19928](https://github.com/stablyai/orca/pull/19928)）
- 性能（native-chat）：只挂载视口附近的 transcript 行（[@brennanb2025](https://github.com/brennanb2025)，[#19869](https://github.com/stablyai/orca/pull/19869)）
- 性能（native-chat）：限制结构化会话路径上保留的条目（[@nwparker](https://github.com/nwparker)，[#19841](https://github.com/stablyai/orca/pull/19841)）
- 修复（native-chat）：只显示一个进行中回合指示器，并将 Thinking 表示为推理（[@brennanb2025](https://github.com/brennanb2025)，[#19977](https://github.com/stablyai/orca/pull/19977)）
- 新增（native-chat）：显示 Codex 目标被设置、更改或清除（[@brennanb2025](https://github.com/brennanb2025)，[#19923](https://github.com/stablyai/orca/pull/19923)）
### 移动端与推送 {#v1-4-201-mobile}

> 原生推送合入后又整段撤回，待投递问题排查——不在本构建的可用功能中。

- 修复（mobile）：Native Chat 在 iOS 上启用无需补丁的文本选择（[@brennanb2025](https://github.com/brennanb2025)，[#19769](https://github.com/stablyai/orca/pull/19769)）
- 修复（push）：隔离部署，并在激活前校验候选（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19771](https://github.com/stablyai/orca/pull/19771)）
- 新增（cloud）：原生推送网关与专用基础设施（1/3）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19912](https://github.com/stablyai/orca/pull/19912)）
- 重构（mobile）：从路由中抽出设置、诊断与编辑器文档屏幕（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19675](https://github.com/stablyai/orca/pull/19675)）
- 新增（desktop）：原生移动推送集成（2/3）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19935](https://github.com/stablyai/orca/pull/19935)）
- 重构（mobile）：为手写的 RPC 接受策略调用点命名（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19960](https://github.com/stablyai/orca/pull/19960)）
- 新增（mobile）：从已配对桌面接收原生推送通知（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19951](https://github.com/stablyai/orca/pull/19951)）
- 回退移动端推送放量，待投递问题排查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20040](https://github.com/stablyai/orca/pull/20040)）
- 修复（push）：离线时保留互不相同的 Android 提醒（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20066](https://github.com/stablyai/orca/pull/20066)）
- 修复（mobile）：露出主机创建警告与终端创建错误（[@brennanb2025](https://github.com/brennanb2025)，[#20125](https://github.com/stablyai/orca/pull/20125)）
### 中继、云端与编排 {#v1-4-201-relay}

- 修复（relay）：失败的重新归属轮询不计入持久失败预算（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19915](https://github.com/stablyai/orca/pull/19915)）
- 修复（orchestration）：将 @ 组地址限定到发送方的 Run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19783](https://github.com/stablyai/orca/pull/19783)）
- 修复（orchestration）：重新校验尝试的 Enter，而不是再次发送（[@brennanb2025](https://github.com/brennanb2025)，[#19911](https://github.com/stablyai/orca/pull/19911)）
- 新增（relay）：仅在源空闲时校正区域放置（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20105](https://github.com/stablyai/orca/pull/20105)）
- 测试（relay）：加固区域重新归属的竞态覆盖（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20136](https://github.com/stablyai/orca/pull/20136)）
- 新增（desktop）：测量中继区域，并在空闲切换后重连（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20106](https://github.com/stablyai/orca/pull/20106)）
- 修复（runtime）：由连接自行负责主机状态恢复（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20003](https://github.com/stablyai/orca/pull/20003)）
- 修复远程托管审查的浏览器路由（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20030](https://github.com/stablyai/orca/pull/20030)）
### 工作区、浏览器与编辑器 {#v1-4-201-workspaces}

- 修复（browser）：恢复 Chrome 形态的浏览器身份（STA-7147）（[@brennanb2025](https://github.com/brennanb2025)，[#19927](https://github.com/stablyai/orca/pull/19927)）
- 修复（editor）：让 Markdown 图片行内化，使段落保持 schema 有效（[@OrcaWin](https://github.com/OrcaWin)，[#19746](https://github.com/stablyai/orca/pull/19746)）
- 重构（renderer）：共享路径头部省略（[@AmethystLiang](https://github.com/AmethystLiang)，[#19938](https://github.com/stablyai/orca/pull/19938)）
- 新增（cmd-j）：紧凑的面板位置布局（[@AmethystLiang](https://github.com/AmethystLiang)，[#19939](https://github.com/stablyai/orca/pull/19939)）
- 修复（workspaces）：仅在空白选择时播种 shell（[@brennanb2025](https://github.com/brennanb2025)，[#19940](https://github.com/stablyai/orca/pull/19940)）
- 对已配对的 Web 客户端隐藏桌面主题导入（[@OrcaWin](https://github.com/OrcaWin)，[#20015](https://github.com/stablyai/orca/pull/20015)）
- 修复（worktrees）：删除时关闭空闲的结构化聊天，而不是拒绝（[@brennanb2025](https://github.com/brennanb2025)，[#19762](https://github.com/stablyai/orca/pull/19762)）
### 终端与运行时 {#v1-4-201-terminal}

- 性能（terminal）：越过已携带的帧继续搜索 OSC 终止符（[@nwparker](https://github.com/nwparker)，[#19839](https://github.com/stablyai/orca/pull/19839)）
- 性能（terminal）：两个扫描器共用一张 ESC 分发表（[@nwparker](https://github.com/nwparker)，[#19842](https://github.com/stablyai/orca/pull/19842)）
- 性能（terminal）：worktree 切换时停止重建每个工作区的集合（[@nwparker](https://github.com/nwparker)，[#19975](https://github.com/stablyai/orca/pull/19975)）
- 性能（terminal）：对回放为空的窗格不再花费 reveal-restore 帧（[@nwparker](https://github.com/nwparker)，[#19972](https://github.com/stablyai/orca/pull/19972)）
- 修复（daemon）：为持久化的终端历史固定仅所有者模式（[@nwparker](https://github.com/nwparker)，[#19954](https://github.com/stablyai/orca/pull/19954)）
- 修复（pi）：跨重载退役过期的 spinner 与提示定时器（[@nwparker](https://github.com/nwparker)，[#20035](https://github.com/stablyai/orca/pull/20035)）
- 修复（terminal）：阻止恢复预算在重新挂载时自我擦除（[@OrcaWin](https://github.com/OrcaWin)，[#19745](https://github.com/stablyai/orca/pull/19745)）
- 修复（monaco）：限制 svelte/astro/vue 语法中的嵌入语言递归（[@OrcaWin](https://github.com/OrcaWin)，[#19748](https://github.com/stablyai/orca/pull/19748)）
- 修复（runtime）：与 Agent 无关的 wait-blocked 原因（[@OrcaWin](https://github.com/OrcaWin)，[#19749](https://github.com/stablyai/orca/pull/19749)）
- 性能（terminal）：worktree 切换时只挂载可见窗格（[@nwparker](https://github.com/nwparker)，[#20034](https://github.com/stablyai/orca/pull/20034)）
- 修复（pi）：继承的所有者 PID 已死时认领状态窗格（STA-5245）（[@brennanb2025](https://github.com/brennanb2025)，[#16631](https://github.com/stablyai/orca/pull/16631)）
- 修复（pi）：为源代码管理生成加载扩展提供方（[@nwparker](https://github.com/nwparker)，[#20070](https://github.com/stablyai/orca/pull/20070)）
- 修复（terminal）：故意休眠的工作区保持冷态，直到被唤醒（[@nwparker](https://github.com/nwparker)，[#20075](https://github.com/stablyai/orca/pull/20075)）
- 性能（daemon）：停止扫描每个单元格去找不可能存在的 OSC 链接（[@nwparker](https://github.com/nwparker)，[#20077](https://github.com/stablyai/orca/pull/20077)）
- 修复（terminal）：把恢复账本移到标签行，并以观察到的结果为门禁（[@nwparker](https://github.com/nwparker)，[#20025](https://github.com/stablyai/orca/pull/20025)）
### 搜索、RPC 与维护 {#v1-4-201-search}

- 修复：每个版本只提示一次意外登出的 Cloud 用户（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19966](https://github.com/stablyai/orca/pull/19966)）
- 新增（ai-vault-search）：将会话搜索索引作为 transcript 读取器的消费者（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19687](https://github.com/stablyai/orca/pull/19687)）
- 新增（rpc）：从主机注册表生成共享参数目录，以解析对等为门禁（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19961](https://github.com/stablyai/orca/pull/19961)）
- 新增（ai-vault-search）：在索引上运行会话搜索查询引擎（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19750](https://github.com/stablyai/orca/pull/19750)）
- 重构（shared）：从 TuiAgent 派生 WellKnownAgentType（[@AmethystLiang](https://github.com/AmethystLiang)，[#19645](https://github.com/stablyai/orca/pull/19645)）
- 回退「新增（ai-vault-search）：在索引上运行会话搜索查询引擎（#19750）」（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20023](https://github.com/stablyai/orca/pull/20023)）
- 新增（ai-vault-search）：会话搜索索引库，负责回填、对账与保留（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19751](https://github.com/stablyai/orca/pull/19751)）
- 重构（rpc）：让 defineMethod 保留方法名与处理结果（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20016](https://github.com/stablyai/orca/pull/20016)）
- 修复（release）：把三项发布门禁修复移植到 main，避免裁剪再次继承（[@brennanb2025](https://github.com/brennanb2025)，[#19945](https://github.com/stablyai/orca/pull/19945)）
- 本地化：使文件显示标签可翻译（[@OrcaWin](https://github.com/OrcaWin)，[#20010](https://github.com/stablyai/orca/pull/20010)）
- 修复（i18n）：从运行时目录删除过期的 TerminalPane.minimumContrast 条目（main 再次变红）（[@nwparker](https://github.com/nwparker)，[#19575](https://github.com/stablyai/orca/pull/19575)）
- 测试（monaco）：驱动真正的 Monarch 分词器，而不是遍历规则表（[@nwparker](https://github.com/nwparker)，[#19981](https://github.com/stablyai/orca/pull/19981)）
- 测试（runtime）：捕获真实 Antigravity transcript——检测器在实时输出上是反的（[@nwparker](https://github.com/nwparker)，[#19983](https://github.com/stablyai/orca/pull/19983)）

**完整变更对照：** [v1.4.200...v1.4.201](https://github.com/stablyai/orca/compare/v1.4.200...v1.4.201)

## v1.4.200 Native Chat 看见子 Agent，编排从创建起就有主人 {#v1-4-200}

2026年9月11日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.200)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-200-short}

**Native Chat：Claude 子 Agent 活动与 Codex 后台任务会显示在聊天里。** 完成的回合会列出变更文件，任务更新会流入编写器。

**编排：Worker 终端从创建起就有主人。** 启动、移动端输入以及旧联邦协调器增加了恢复保护。

**工作区与浏览器：后台浏览器标签打开即加载；创建聊天时保留当前 worktree。**

### 产品体验 {#v1-4-200-product}

#### 工作区、标签页与浏览器 {#v1-4-200-workspaces-tabs}

> 保持当前 worktree 选中；新打开的浏览器标签在你访问时已经就绪。

**标签页与浏览器**

- 修复（browser）：新打开的后台标签页在访问时已加载（[@brennanb2025](https://github.com/brennanb2025)，[#19633](https://github.com/stablyai/orca/pull/19633)）
- 统一工作区激活时的标签页表面选择（[@brennanb2025](https://github.com/brennanb2025)，[#19635](https://github.com/stablyai/orca/pull/19635)）
- 修复（native-chat）：创建聊天时保持当前 worktree 处于活动状态（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19753](https://github.com/stablyai/orca/pull/19753)）
### Agent 与工作流 {#v1-4-200-agents-workflow}

#### Native Chat {#v1-4-200-native-chat}

> 对话能更清楚地告诉你：Agent 做了什么、正在做什么、以及委托了什么。

**Agent 活动与结果**

- 新增（native-chat）：在共享载体上显示 Claude 子 Agent 活动（[@brennanb2025](https://github.com/brennanb2025)，[#18806](https://github.com/stablyai/orca/pull/18806)）
- 新增（native-chat）：在聊天条中报告 Codex 后台任务（[@brennanb2025](https://github.com/brennanb2025)，[#19346](https://github.com/stablyai/orca/pull/19346)）
- 汇总回合文件变更，并保留已解析的提示回执（[@brennanb2025](https://github.com/brennanb2025)，[#19229](https://github.com/stablyai/orca/pull/19229)）
- 渲染带更新 diff 的任务清单，以及编写器进度面板（[@brennanb2025](https://github.com/brennanb2025)，[#19230](https://github.com/stablyai/orca/pull/19230)）

**编写器与控件**

- 修复（native-chat）：将 effort 放到模型选择器右侧（[@brennanb2025](https://github.com/brennanb2025)，[#19617](https://github.com/stablyai/orca/pull/19617)）
- 将选择器选中的 Native Chat 技能显示为药丸标签（[@brennanb2025](https://github.com/brennanb2025)，[#19616](https://github.com/stablyai/orca/pull/19616)）
- 修复（native-chat）：展开随附件发送的 Claude 斜杠命令（[@brennanb2025](https://github.com/brennanb2025)，[#19654](https://github.com/stablyai/orca/pull/19654)）
- 修复（native-chat）：仅在键盘聚焦时显示消息装饰，而非任意焦点（[@brennanb2025](https://github.com/brennanb2025)，[#19426](https://github.com/stablyai/orca/pull/19426)）
- 修复（native-chat）：折叠箭头保持在标题文字旁边（[@brennanb2025](https://github.com/brennanb2025)，[#19656](https://github.com/stablyai/orca/pull/19656)）
- 修复（renderer）：对齐 Native Chat 窗格层级（[@brennanb2025](https://github.com/brennanb2025)，[#19626](https://github.com/stablyai/orca/pull/19626)）

**聊天与工作区路由**

- 统一 Native Chat 与工作区标签页的命令分发（[@brennanb2025](https://github.com/brennanb2025)，[#19621](https://github.com/stablyai/orca/pull/19621)）
- 修复（native-chat）：统一启动路由并支持结构化 worker 放置（[@brennanb2025](https://github.com/brennanb2025)，[#19431](https://github.com/stablyai/orca/pull/19431)）
#### 自动化 {#v1-4-200-automations}

> Worker 从诞生起就有更明确的主人，在恢复、联邦或移动端使用时更不容易滞留。

- 修复（orchestration）：从创建起就拥有 worker 终端，而不是等启动完成（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19608](https://github.com/stablyai/orca/pull/19608)）
- 修复（orchestration）：移动端按键时围栏 worker 释放（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19337](https://github.com/stablyai/orca/pull/19337)）
- 修复（orchestration）：worker 启动以观察到的回合开始判定就绪，而非写入被接受（[@brennanb2025](https://github.com/brennanb2025)，[#19423](https://github.com/stablyai/orca/pull/19423)）
- 修复（orchestration）：统一 worktree ps 与侧栏的结构化会话状态（[@brennanb2025](https://github.com/brennanb2025)，[#19217](https://github.com/stablyai/orca/pull/19217)）
- 修复（orchestration）：接受旧联邦协调器缺失的 Run id（[@brennanb2025](https://github.com/brennanb2025)，[#19689](https://github.com/stablyai/orca/pull/19689)）
- 修复（orchestration）：将无 Run 终端的邮件归档到未绑定 Run 下（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19696](https://github.com/stablyai/orca/pull/19696)）
- 测试（orchestration）：固定未绑定直接邮件的 Run 必需契约（[@brennanb2025](https://github.com/brennanb2025)，[#19684](https://github.com/stablyai/orca/pull/19684)）
### 质量与交付 {#v1-4-200-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能：界面、聊天与工作区 {#v1-4-200-perf-ui-chat}

- 性能：文档标题未变时保留 store 状态（[@OrcaWin](https://github.com/OrcaWin)，[#19459](https://github.com/stablyai/orca/pull/19459)）
- 性能：为文档历史的工作区与路径身份建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19461](https://github.com/stablyai/orca/pull/19461)）
- 性能：为浏览器面板条目的统一标签页建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19464](https://github.com/stablyai/orca/pull/19464)）
- 性能：向自有项目源列表追加时不再反复拷贝（[@OrcaWin](https://github.com/OrcaWin)，[#19465](https://github.com/stablyai/orca/pull/19465)）
- 性能：终端绑定回放时惰性索引工作区标签页（[@OrcaWin](https://github.com/OrcaWin)，[#19466](https://github.com/stablyai/orca/pull/19466)）
- 性能：用 FIFO 游标回放待处理的聊天询问（[@OrcaWin](https://github.com/OrcaWin)，[#19496](https://github.com/stablyai/orca/pull/19496)）
- 性能：在结果窗口内惰性分组聊天历史序列（[@OrcaWin](https://github.com/OrcaWin)，[#19501](https://github.com/stablyai/orca/pull/19501)）
- 性能：排序删除锚点前只测量一次侧栏行几何（[@OrcaWin](https://github.com/OrcaWin)，[#19503](https://github.com/stablyai/orca/pull/19503)）
- 性能：为发现的技能 ID 与名称建索引以便批量选择（[@OrcaWin](https://github.com/OrcaWin)，[#19507](https://github.com/stablyai/orca/pull/19507)）
- 性能：精确文件匹配已填满窗口时跳过模糊排序（[@OrcaWin](https://github.com/OrcaWin)，[#19509](https://github.com/stablyai/orca/pull/19509)）
- 性能：在变基权威会话时为标签页成员关系建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19510](https://github.com/stablyai/orca/pull/19510)）
- 性能：排序已发现技能时复用 collator（[@OrcaWin](https://github.com/OrcaWin)，[#19440](https://github.com/stablyai/orca/pull/19440)）
- 性能：扫描 Warp 主题时复用 collator（[@OrcaWin](https://github.com/OrcaWin)，[#19441](https://github.com/stablyai/orca/pull/19441)）
- 性能：侧栏拖拽时为所选祖先覆盖范围建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19443](https://github.com/stablyai/orca/pull/19443)）
- 性能：为 Resource Manager 标签与累计工作区行建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19480](https://github.com/stablyai/orca/pull/19480)）
- 性能：将激活清单限定到所属主机与工作区（[@OrcaWin](https://github.com/OrcaWin)，[#19447](https://github.com/stablyai/orca/pull/19447)）
- 性能：焦点清理时为已关闭的浏览器页面 ID 建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19449](https://github.com/stablyai/orca/pull/19449)）
- 性能：按锁定名称索引可观察的技能安装（[@OrcaWin](https://github.com/OrcaWin)，[#19451](https://github.com/stablyai/orca/pull/19451)）
- 性能（runtime）：没有已完成 Agent 时跳过休眠清单（[@nwparker](https://github.com/nwparker)，[#19391](https://github.com/stablyai/orca/pull/19391)）
- 性能（workspaces）：跳过未变化的心跳订阅者工作（[@nwparker](https://github.com/nwparker)，[#19392](https://github.com/stablyai/orca/pull/19392)）
- 性能：目录扫描前先解析当前工作区的文档地址（[@OrcaWin](https://github.com/OrcaWin)，[#19495](https://github.com/stablyai/orca/pull/19495)）
- 性能：只物化请求的最近插件审计行（[@OrcaWin](https://github.com/OrcaWin)，[#19498](https://github.com/stablyai/orca/pull/19498)）
- 性能：待处理队列达到上限后停止合并操作系统打开的文件（[@OrcaWin](https://github.com/OrcaWin)，[#19508](https://github.com/stablyai/orca/pull/19508)）

#### 性能：终端、隧道与运行时 {#v1-4-200-perf-term-runtime}

- 性能：跟踪窗格别名的单例或歧义，不再拷贝桶（[@OrcaWin](https://github.com/OrcaWin)，[#19479](https://github.com/stablyai/orca/pull/19479)）
- 性能：从主机均衡列表中退役已耗尽的桶（[@OrcaWin](https://github.com/OrcaWin)，[#19493](https://github.com/stablyai/orca/pull/19493)）
- 性能：避免反复拷贝待处理的 SOCKS 载荷（[@OrcaWin](https://github.com/OrcaWin)，[#19439](https://github.com/stablyai/orca/pull/19439)）
- 性能（terminal）：输出突发时避免二次方的状态标记扫描（[@nwparker](https://github.com/nwparker)，[#19373](https://github.com/stablyai/orca/pull/19373)）
- 性能：按 PTY 为所选主机的 SSH 租约建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19467](https://github.com/stablyai/orca/pull/19467)）
- 性能：保留序列化文本前丢弃过大的诊断记录（[@OrcaWin](https://github.com/OrcaWin)，[#19445](https://github.com/stablyai/orca/pull/19445)）
- 性能：限制工具配对，并避免未使用的归属数组（[@OrcaWin](https://github.com/OrcaWin)，[#19468](https://github.com/stablyai/orca/pull/19468)）
- 性能：用分组集合校验终端收养的 MRU 成员关系（[@OrcaWin](https://github.com/OrcaWin)，[#19482](https://github.com/stablyai/orca/pull/19482)）
- 性能：为终端邻居顺序与剩余成员关系建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19453](https://github.com/stablyai/orca/pull/19453)）
- 性能：统计命令行转义时不产生正则匹配数组（[@OrcaWin](https://github.com/OrcaWin)，[#19499](https://github.com/stablyai/orca/pull/19499)）
- 性能：扩展范围前先检查回填日期基数（[@OrcaWin](https://github.com/OrcaWin)，[#19456](https://github.com/stablyai/orca/pull/19456)）
- 性能：探测请求的窗格键，而不是枚举全部记录（[@OrcaWin](https://github.com/OrcaWin)，[#19494](https://github.com/stablyai/orca/pull/19494)）
- 性能（terminal）：跳过部分转义序列之间的纯文本（[@nwparker](https://github.com/nwparker)，[#19393](https://github.com/stablyai/orca/pull/19393)）
- 性能（terminal）：释放待处理控件背后过大的底层字符串（[@nwparker](https://github.com/nwparker)，[#19396](https://github.com/stablyai/orca/pull/19396)）
- 性能（terminal）：预览控件扫描时跳过普通输出（[@nwparker](https://github.com/nwparker)，[#19400](https://github.com/stablyai/orca/pull/19400)）
- 性能（terminal）：自有保留的尾部行，避免钉住其 chunk（[@nwparker](https://github.com/nwparker)，[#19528](https://github.com/stablyai/orca/pull/19528)）
- 性能：拷贝帧载荷前先检查隧道队列容量（[@OrcaWin](https://github.com/OrcaWin)，[#19497](https://github.com/stablyai/orca/pull/19497)）
- 性能：监视器取消后停止排队的元数据工作（[@OrcaWin](https://github.com/OrcaWin)，[#19446](https://github.com/stablyai/orca/pull/19446)）

#### 性能：数据与集成 {#v1-4-200-perf-data}

- 性能：仅在条目可能过期时修剪元数据缓存（[@OrcaWin](https://github.com/OrcaWin)，[#19450](https://github.com/stablyai/orca/pull/19450)）
- 性能：单独仓库导入时跳过文件夹作用域构造（[@OrcaWin](https://github.com/OrcaWin)，[#19452](https://github.com/stablyai/orca/pull/19452)）
- 性能：聚合与合并时为用量会话明细建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19487](https://github.com/stablyai/orca/pull/19487)）
- 性能：复用 AI-vault 路径匹配器以及查询与排序键（[@OrcaWin](https://github.com/OrcaWin)，[#19469](https://github.com/stablyai/orca/pull/19469)）
- 性能：按主机与 cwd 缓存 AI-vault 项目归属（[@OrcaWin](https://github.com/OrcaWin)，[#19470](https://github.com/stablyai/orca/pull/19470)）
- 性能：一次遍历选定 checks 面板的工作区归属（[@OrcaWin](https://github.com/OrcaWin)，[#19471](https://github.com/stablyai/orca/pull/19471)）
- 性能：缓存 Linear 与 Jira 结果排序的更新时间戳（[@OrcaWin](https://github.com/OrcaWin)，[#19473](https://github.com/stablyai/orca/pull/19473)）
- 性能：复用自然有序的唯一 Codex 信任范围（[@OrcaWin](https://github.com/OrcaWin)，[#19492](https://github.com/stablyai/orca/pull/19492)）
- 性能：复用规范化的任务页仓库选择（[@OrcaWin](https://github.com/OrcaWin)，[#19454](https://github.com/stablyai/orca/pull/19454)）

#### 可靠性与维护 {#v1-4-200-reliability}

- 测试（ci）：用有界轮询替换固定的拆除等待（[@nwparker](https://github.com/nwparker)，[#19720](https://github.com/stablyai/orca/pull/19720)）
- 修复（lint）：保留有意的 collator 基准基线（[@brennanb2025](https://github.com/brennanb2025)，[#19686](https://github.com/stablyai/orca/pull/19686)）
- 修复（native-chat）：合并重复的 native-chat-types 导入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19698](https://github.com/stablyai/orca/pull/19698)）
- 重构（ai-vault）：将会话扫描器拆成 transcript 读取器与消费者（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19666](https://github.com/stablyai/orca/pull/19666)）

**完整变更对照：** [v1.4.199...v1.4.200](https://github.com/stablyai/orca/compare/v1.4.199...v1.4.200)
