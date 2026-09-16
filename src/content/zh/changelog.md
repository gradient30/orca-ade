# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.204](#v1-4-204) | 2026年9月16日 | Agent 与聊天： |
| [v1.4.203](#v1-4-203) | 2026年9月15日 | Electron 安全修复，侧栏嵌套，移动推送回归 |
| [v1.4.201](#v1-4-201) | 2026年9月13日 | Native Chat 斜杠命令、后台任务与子 Agent |

### v1.4.204 · Agent 与聊天： {#v1-4-204-summary}

2026年9月16日 · [本页全文](#v1-4-204) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.204)

- Agent 与聊天：
- 工作区与移动端：
- Performance:

### v1.4.203 · Electron 安全修复，侧栏嵌套，移动推送回归 {#v1-4-203-summary}

2026年9月15日 · [本页全文](#v1-4-203) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.203)

- 可靠性与安全：Electron 已升级以修复 glibc environ use-after-free；浏览器 cookie 迁移更稳；worktree 创建即使后续步骤失败也能干净完成。
- Agent 与聊天：Native Chat 能根据提供方历史恢复因重启滞留的发送；Agent 状态不再依赖运行时保留的行存储。
- 工作区与移动端：文件夹工作区保留已保存的名称与分组；侧栏嵌套更好用；移动端恢复推送、冷启动、通知与 Markdown 行为。

### v1.4.201 · Native Chat 斜杠命令、后台任务与子 Agent {#v1-4-201-summary}

2026年9月13日 · [本页全文](#v1-4-201) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.201)

- Native Chat：任意位置的 `/` 选择器、后台任务条显示正在运行的内容、子 Agent 出现在侧栏子行。
- 桌面端与移动端原生推送曾接入后又撤回，待投递问题排查。
- 中继按区域放置、空闲切换后重连；终端与聊天只挂载可见内容。

## 完整中文日志 {#full-notes}

## v1.4.204 Agent 与聊天： {#v1-4-204}

2026年9月16日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.204)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-204-short}

**Agent 与聊天：** Native chat adds file drag-and-drop and provider-aware Fast mode, resumes 结构化聊天s cleanly after restart, hides idle activity, and fixes tail-read cursor and Claude-turn reopening; Grok completion/hook attribution and Claude SessionEnd handling are more correct, and agent status keys rows by agent instead of pane.

**工作区与移动端：** Workspaces re-seed after agent selection, recover from activation failures, and retire orphaned chat tabs; mobile continues the typed-RPC migration across settings, source-control, and workspace creation while preserving delivery and fixing streaming jumps.

**Performance:** Orca batches terminal file-link checks, dispatches browser input in-process, avoids repeated remote capability probes, skips redundant persistence flushes, and bounds WSL skill discovery.

---

### 产品体验 {#v1-4-204-product}

#### 工作区、标签页与浏览器 {#v1-4-204-workspaces-tabs}

> Safer workspace recovery, more responsive browser input, and clearer project views.

- 修复（worktrees）：retire the chat tab of a chat with no child when its workspace goes（[@brennanb2025](https://github.com/brennanb2025)，[#19970](https://github.com/stablyai/orca/pull/19970)）
- 修复（browser）：press keys through a US-layout CDP key table instead of a subprocess per keystroke（[@atreidesend](https://github.com/atreidesend)，[#15310](https://github.com/stablyai/orca/pull/15310)）
- 修复（workspaces）：re-seed a gate-reported empty workspace after an agent selection（[@brennanb2025](https://github.com/brennanb2025)，[#20182](https://github.com/stablyai/orca/pull/20182)）
- 修复（workspaces）：recover a real terminal when activation throws for a planless agent create（[@brennanb2025](https://github.com/brennanb2025)，[#20190](https://github.com/stablyai/orca/pull/20190)）
- 修复（github）：name an unfiltered empty project view instead of blaming a filter（[@nwparker](https://github.com/nwparker)，[#20588](https://github.com/stablyai/orca/pull/20588)）

### Agent 与工作流 {#v1-4-204-agents-workflow}

#### Agent 可靠性与 Native Chat {#v1-4-204-agent-reliability}

> Chat adds drag-and-drop and Fast mode, recovers more gracefully, and reports agent state more accurately.

- 修复（native-chat）：wait for the runtime capability probe before resolving the creation launch route（[@brennanb2025](https://github.com/brennanb2025)，[#19819](https://github.com/stablyai/orca/pull/19819)）
- 新增（ai-vault-search）：public session search contract and transports（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20277](https://github.com/stablyai/orca/pull/20277)）
- 修复（tasks）：preserve repository results under GitHub search quota（[@OrcaWin](https://github.com/OrcaWin)，[#20460](https://github.com/stablyai/orca/pull/20460)）
- 修复（ai-vault）：stream oversized remote session transcripts（[@OrcaWin](https://github.com/OrcaWin)，[#20455](https://github.com/stablyai/orca/pull/20455)）
- 修复（grok）：stop replayed Claude/Cursor hooks reporting Grok panes as Claude（[@brennanb2025](https://github.com/brennanb2025)，[#20507](https://github.com/stablyai/orca/pull/20507)）
- 新增（native-chat）：support file drag and drop（[@brennanb2025](https://github.com/brennanb2025)，[#20494](https://github.com/stablyai/orca/pull/20494)）
- 重构（attention）：move the agent attention boundary off terminal panes（[@brennanb2025](https://github.com/brennanb2025)，[#20525](https://github.com/stablyai/orca/pull/20525)）
- 修复（grok）：defer managed hook pane guard expansion to shell（[@brennanb2025](https://github.com/brennanb2025)，[#20534](https://github.com/stablyai/orca/pull/20534)）
- 重构（orchestration）：derive delivery eligibility from messages（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19837](https://github.com/stablyai/orca/pull/19837)）
- 修复（grok）：announce a completion once, when Grok is actually finished（[@brennanb2025](https://github.com/brennanb2025)，[#20523](https://github.com/stablyai/orca/pull/20523)）
- 新增（native-chat）：add provider-aware Fast mode（[@brennanb2025](https://github.com/brennanb2025)，[#20506](https://github.com/stablyai/orca/pull/20506)）
- 修复（claude）：subscribe to SessionEnd on capable versions, and correct a false comment（[@brennanb2025](https://github.com/brennanb2025)，[#20530](https://github.com/stablyai/orca/pull/20530)）
- 新增（agent-status）：run-identity types for keying rows by agent instead of pane（[@brennanb2025](https://github.com/brennanb2025)，[#20531](https://github.com/stablyai/orca/pull/20531)）
- 修复（hooks）：report a timed-out hook as unverifiable and terminate its process tree（[@nwparker](https://github.com/nwparker)，[#20559](https://github.com/stablyai/orca/pull/20559)）
- 修复（session-search）：read oversized numeric file IDs on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#20551](https://github.com/stablyai/orca/pull/20551)）
- 新增（native-chat）：show a drop target on the whole chat pane（[@brennanb2025](https://github.com/brennanb2025)，[#20561](https://github.com/stablyai/orca/pull/20561)）
- 修复（native-chat）：let the provider reopen a Claude turn it resumed itself（[@brennanb2025](https://github.com/brennanb2025)，[#20518](https://github.com/stablyai/orca/pull/20518)）
- 修复（native-chat）：resume 结构化聊天s cleanly after restart（[@brennanb2025](https://github.com/brennanb2025)，[#20509](https://github.com/stablyai/orca/pull/20509)）
- 修复（ai-vault）：ignore non-absolute env overrides for agent scan roots（[@manuaudio](https://github.com/manuaudio)，[#13118](https://github.com/stablyai/orca/pull/13118)）
- 修复（grok）：stop SessionStart orca-status hook hanging for 10s（[@bjornrun](https://github.com/bjornrun)，[#20090](https://github.com/stablyai/orca/pull/20090)）
- 修复（native-chat）：stop a bounded tail read from moving the chat cursor past unapplied rows（[@brennanb2025](https://github.com/brennanb2025)，[#20581](https://github.com/stablyai/orca/pull/20581)）
- 新增（ai-vault-search）：construct the session search indexer in the scanner service behind a setting（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20516](https://github.com/stablyai/orca/pull/20516)）
- 修复（native-chat）：hide activity while awaiting input（[@brennanb2025](https://github.com/brennanb2025)，[#20496](https://github.com/stablyai/orca/pull/20496)）

#### 移动端 {#v1-4-204-mobile}

> Mobile continues its typed-RPC migration while keeping delivery and streaming stable.

- 重构（mobile）：migrate settings reads to RpcOperation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20499](https://github.com/stablyai/orca/pull/20499)）
- 修复（mobile）：give Native Chat one tail-follow owner so streaming stops jumping（[@brennanb2025](https://github.com/brennanb2025)，[#20493](https://github.com/stablyai/orca/pull/20493)）
- 修复（mobile）：preserve delivery ambiguity across transport cutover（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20280](https://github.com/stablyai/orca/pull/20280)）
- 测试（mobile）：consolidate the RPC migration's verification infrastructure（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20521](https://github.com/stablyai/orca/pull/20521)）
- 重构（mobile）：send the source-control domain through typed RpcOperations（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20544](https://github.com/stablyai/orca/pull/20544)）
- 修复（mobile）：two known main bugs the RPC migration preserved（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20563](https://github.com/stablyai/orca/pull/20563)）
- 测试（mobile）：pin each RPC golden to its own scenario input, not the whole manifest（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20562](https://github.com/stablyai/orca/pull/20562)）
- 重构（mobile）：send the task workspace-creation domain through typed RpcOperations（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20568](https://github.com/stablyai/orca/pull/20568)）

#### 中继与云端 {#v1-4-204-relay-cloud}

> Probes and identity validation have tighter bounds and failure handling.

- 修复（rpc）：validate provider-specific fields in TaskProviderIdentity（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20284](https://github.com/stablyai/orca/pull/20284)）
- 修复（ssh）：bound relay incumbent lsof probe（[@kaluli123123](https://github.com/kaluli123123)，[#18304](https://github.com/stablyai/orca/pull/18304)）

### 质量与交付 {#v1-4-204-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能改进 {#v1-4-204-perf-improvements}

> Targeted optimizations reduce unnecessary work across terminal, browser, remote, persistence, and skill-discovery paths.

Highlights include batched terminal file-link checks on their owning host, in-process browser pointer dispatch, fewer remote capability probes during file imports, skipped redundant whole-state flushes on terminal reattach, and bounded WSL skill discovery.

- 性能（terminal）：batch file-link checks on their owning host（[@OrcaWin](https://github.com/OrcaWin)，[#20463](https://github.com/stablyai/orca/pull/20463)）
- 性能（skills）：bound WSL installed skill discovery（[@PPP-JH](https://github.com/PPP-JH)，[#12314](https://github.com/stablyai/orca/pull/12314)）
- 性能（remote）：avoid repeated capability probes during file imports（[@dngur6344](https://github.com/dngur6344)，[#14555](https://github.com/stablyai/orca/pull/14555)）
- 性能（persistence）：skip redundant whole-state flushes on terminal reattach（[@AmethystLiang](https://github.com/AmethystLiang)，[#20137](https://github.com/stablyai/orca/pull/20137)）
- 性能（browser）：dispatch coordinate pointer input in process instead of one subprocess per event（[@nwparker](https://github.com/nwparker)，[#20593](https://github.com/stablyai/orca/pull/20593)）

#### 可靠性、测试与交付 {#v1-4-204-reliability-tests}

- 修复（runtime）：reject malformed file Base64 padding（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20283](https://github.com/stablyai/orca/pull/20283)）
- 修复：show unexpected signout notice only once across versions（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20526](https://github.com/stablyai/orca/pull/20526)）
- 修复（auth）：report callback failures instead of cancellation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20535](https://github.com/stablyai/orca/pull/20535)）
- 修复（git）：skip upstream remote probes when the remote is absent（[@innocarpe](https://github.com/innocarpe)，[#18455](https://github.com/stablyai/orca/pull/18455)）
- 修复（terminal）：drop the agent gutter from copied selections (#19770)（[@nwparker](https://github.com/nwparker)，[#20545](https://github.com/stablyai/orca/pull/20545)）
- 修复（pty）：pace the EAGAIN write retry so a stalled reader can't saturate the daemon thread（[@nireak](https://github.com/nireak)，[#15319](https://github.com/stablyai/orca/pull/15319)）

### 新贡献者 {#v1-4-204-contributors}

- @atreidesend made their first contribution（[#15310](https://github.com/stablyai/orca/pull/15310)）
- @PPP-JH made their first contribution（[#12314](https://github.com/stablyai/orca/pull/12314)）
- @manuaudio made their first contribution（[#13118](https://github.com/stablyai/orca/pull/13118)）
- @bjornrun made their first contribution（[#20090](https://github.com/stablyai/orca/pull/20090)）
- @nireak made their first contribution（[#15319](https://github.com/stablyai/orca/pull/15319)）

**完整变更对照：** [v1.4.203...v1.4.204](https://github.com/stablyai/orca/compare/v1.4.203...v1.4.204)

## v1.4.203 Electron 安全修复，侧栏嵌套，移动推送回归 {#v1-4-203}

2026年9月15日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.203)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-203-short}

**可靠性与安全：** Electron 已升级以修复 glibc environ use-after-free；浏览器 cookie 迁移更稳；worktree 创建即使后续步骤失败也能干净完成。

**Agent 与聊天：** Native Chat 能根据提供方历史恢复因重启滞留的发送；Agent 状态不再依赖运行时保留的行存储；提供方/模型校验更抗故障。

**工作区与移动端：** 文件夹工作区保留已保存的名称与分组；侧栏嵌套更好用；移动端恢复推送、冷启动、通知、Markdown 与工作区路由。

**性能：** 一轮针对性优化降低了冷切换、浏览器、终端、SSH、移动端、历史、插件与中继的开销。

---

### 产品体验 {#v1-4-203-product}

#### 工作区、标签页与浏览器 {#v1-4-203-workspaces-tabs}

> 工作区创建更安全，浏览器数据更可靠，项目导航更清楚。

- 修复（browser）：解码 Chromium SameSite 存储值（每个配置约 135 个 cookie 被静默丢掉）（[@brennanb2025](https://github.com/brennanb2025)，[#20076](https://github.com/stablyai/orca/pull/20076)）
- 修复（workspaces）：后续步骤抛错时仍完成 worktree 创建（[@brennanb2025](https://github.com/brennanb2025)，[#20175](https://github.com/stablyai/orca/pull/20175)）
- 修复：修正落地页页脚菜单位置（[@nwparker](https://github.com/nwparker)，[#20360](https://github.com/stablyai/orca/pull/20360)）
- 让侧栏嵌套更容易，同时保留动画重排（[@nwparker](https://github.com/nwparker)，[#20412](https://github.com/stablyai/orca/pull/20412)）
- 修复（browser）：把 cookie 作用域从 psl 过期的后缀表上移开（[@nwparker](https://github.com/nwparker)，[#20421](https://github.com/stablyai/orca/pull/20421)）
- 修复（tabs）：窗口失焦时取消分屏拖拽（[@OrcaWin](https://github.com/OrcaWin)，[#20323](https://github.com/stablyai/orca/pull/20323)）
- 修复（resource-manager）：显示已保存的文件夹工作区名称与分组（[@OrcaWin](https://github.com/OrcaWin)，[#20324](https://github.com/stablyai/orca/pull/20324)）
- 修复（sidebar）：在工作区激活前就显示 Agent 活动（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20398](https://github.com/stablyai/orca/pull/20398)）

### Agent 与工作流 {#v1-4-203-agents-workflow}

#### Agent 可靠性与 Native Chat {#v1-4-203-agent-reliability}

> Agent 恢复更从容；提供方状态或配置变化时，聊天会做更稳妥的决定。

- 重构（agent-status）：删除运行时保留的行存储（PR 1b）（[@brennanb2025](https://github.com/brennanb2025)，[#19785](https://github.com/stablyai/orca/pull/19785)）
- 修复（source-control）：把 Antigravity 提示传给 agy --print（[@nwparker](https://github.com/nwparker)，[#20147](https://github.com/stablyai/orca/pull/20147)）
- 修复（hooks）：阻止孤立的托管标记消耗用户 TOML（[@nwparker](https://github.com/nwparker)，[#20148](https://github.com/stablyai/orca/pull/20148)）
- 修复（codex）：通过配置镜像对账 marketplace 与插件表（[@nwparker](https://github.com/nwparker)，[#20150](https://github.com/stablyai/orca/pull/20150)）
- 新增（ai-vault-search）：在索引上的会话搜索查询引擎（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20029](https://github.com/stablyai/orca/pull/20029)）
- 修复（native-chat）：缩小技能药丸文字（[@brennanb2025](https://github.com/brennanb2025)，[#20254](https://github.com/stablyai/orca/pull/20254)）
- 修复（claude）：拒绝提供方未列出的结构化模型（[@brennanb2025](https://github.com/brennanb2025)，[#19946](https://github.com/stablyai/orca/pull/19946)）
- 修复（claude-accounts）：阻止路径解析去创建配置目录（[@makoto-developer](https://github.com/makoto-developer)，[#12309](https://github.com/stablyai/orca/pull/12309)）
- 修复（ai-vault）：query_only 设置失败时关闭 OpenCode 句柄（[@bbingz](https://github.com/bbingz)，[#14134](https://github.com/stablyai/orca/pull/14134)）
- 修复（skills）：驱逐已移除的运行时发现缓存（[@bbingz](https://github.com/bbingz)，[#11489](https://github.com/stablyai/orca/pull/11489)）
- 修复（automations）：隔离调度器 tick，并拒绝过大的 cron 步长（[@nwparker](https://github.com/nwparker)，[#20152](https://github.com/stablyai/orca/pull/20152)）
- 修复（runtime）：仅有名称的 Agent 标题不再满足 tui-idle（[@nwparker](https://github.com/nwparker)，[#20155](https://github.com/stablyai/orca/pull/20155)）
- 修复（agent-hooks）：导航 Escape 不再被推断为完成（[@nwparker](https://github.com/nwparker)，[#20149](https://github.com/stablyai/orca/pull/20149)）
- 修复（ai-vault）：transcript 被改写为原大小时重新读取（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20261](https://github.com/stablyai/orca/pull/20261)）
- 重构（native-chat）：让每个结构化分发状态只有一个含义（[@brennanb2025](https://github.com/brennanb2025)，[#20133](https://github.com/stablyai/orca/pull/20133)）
- 新增（native-chat）：对照提供方历史，判定因重启滞留的发送（[@brennanb2025](https://github.com/brennanb2025)，[#20139](https://github.com/stablyai/orca/pull/20139)）

#### 移动端 {#v1-4-203-mobile}

> 移动端恢复通知与启动路径，同时保持工作区与 Markdown 处理跟得上。

- 恢复移动端推送，并修复冷启动关闭（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20068](https://github.com/stablyai/orca/pull/20068)）
- 新增（mobile）：增加带类型的 RPC 操作，并围栏原始请求（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20018](https://github.com/stablyai/orca/pull/20018)）
- 修复：防止移动端 Markdown 渲染陷入无限循环（[@nwparker](https://github.com/nwparker)，[#20313](https://github.com/stablyai/orca/pull/20313)）
- 修复（mobile）：点通知时复用当前工作区（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20310](https://github.com/stablyai/orca/pull/20310)）

#### 中继与云端 {#v1-4-203-relay-cloud}

> 放量门禁、监控与中继重新归属的兼容性和失败处理更强。

- 新增（relay）：在单元放量门禁中支持协议 3（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20174](https://github.com/stablyai/orca/pull/20174)）
- 修复（relay）：限制空闲重新归属轮询，并跳过已禁用的扫描（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20203](https://github.com/stablyai/orca/pull/20203)）
- 修复（relay）：在已完成的放量批次间复用 canary（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20214](https://github.com/stablyai/orca/pull/20214)）
- 修复（cloud）：放量监视器容忍稀疏的 director 错误（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20238](https://github.com/stablyai/orca/pull/20238)）
- 修复（cloud）：诊断被包装的中继信任探测失败（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20403](https://github.com/stablyai/orca/pull/20403)）
- 测试（relay）：为单次遍历的主机数据所有者查找提供差分覆盖（[@nwparker](https://github.com/nwparker)，[#20426](https://github.com/stablyai/orca/pull/20426)）
- 测试（rpc）：增加编译期参数目录对等门禁（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20281](https://github.com/stablyai/orca/pull/20281)）

### 质量与交付 {#v1-4-203-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能改进 {#v1-4-203-perf-improvements}

针对性优化减少了界面、终端、SSH 与中继路径、浏览器与工作区索引、移动端渲染、聊天/历史扫描、Git、插件和 AI-vault 搜索中的多余工作。

其中包括：更快的冷启动 worktree 切换、有界的远程 transcript 与终端扫描、更少的浏览器与标签页清单拷贝、更轻的移动端 Markdown 与 Linear 分组，以及更高效的 Git、插件与会话索引。

#### 可靠性、测试与交付 {#v1-4-203-reliability-tests}

- 修复（deps）：采用 Electron 43.7.0，修复 glibc environ use-after-free（#20081）（[@nwparker](https://github.com/nwparker)，[#20089](https://github.com/stablyai/orca/pull/20089)）
- 修复（terminal）：计划在激活中途安装时重新运行推迟的标签准入（[@brennanb2025](https://github.com/brennanb2025)，[#20176](https://github.com/stablyai/orca/pull/20176)）
- 修复（e2e）：去掉四处真实 flake 来源和一处 caret 竞态（[@brennanb2025](https://github.com/brennanb2025)，[#20169](https://github.com/stablyai/orca/pull/20169)）
- 修复（e2e）：在已映射窗口上运行 worktree 首屏探测（[@brennanb2025](https://github.com/brennanb2025)，[#20197](https://github.com/stablyai/orca/pull/20197)）
- 测试：用可观察的就绪替换固定 UI 等待（[@nwparker](https://github.com/nwparker)，[#20369](https://github.com/stablyai/orca/pull/20369)）
- CI：在关闭检查间复用不可变的包安装（[@nwparker](https://github.com/nwparker)，[#20368](https://github.com/stablyai/orca/pull/20368)）
- CI：收窄 pnpm 缓存键，并对开发检出做浅克隆（[@nwparker](https://github.com/nwparker)，[#20370](https://github.com/stablyai/orca/pull/20370)）
- CI：按记录的耗时平衡现有单元与 E2E 分片（[@nwparker](https://github.com/nwparker)，[#20367](https://github.com/stablyai/orca/pull/20367)）
- 重构（renderer）：改进 IPC 错误处理，提供 clamped 与 unclamped 变体（[@AmethystLiang](https://github.com/AmethystLiang)，[#20340](https://github.com/stablyai/orca/pull/20340)）
- 重构（preload）：删除未使用的原始 electron IPC 桥（[@nwparker](https://github.com/nwparker)，[#20419](https://github.com/stablyai/orca/pull/20419)）
- 修复（runtime）：回收已过期的 proven-absent 叶子 PTY 判定（[@innocarpe](https://github.com/innocarpe)，[#12810](https://github.com/stablyai/orca/pull/12810)）
- 修复（editor）：消除持续数秒的 Markdown 空白 run 扫描（[@nwparker](https://github.com/nwparker)，[#20231](https://github.com/stablyai/orca/pull/20231)）
- 修复（chat）：按实时历史限制 journal 回放内存（[@nwparker](https://github.com/nwparker)，[#20247](https://github.com/stablyai/orca/pull/20247)）
- 杂项：删除 20.7 MiB 重复且未使用的媒体（[@nwparker](https://github.com/nwparker)，[#20416](https://github.com/stablyai/orca/pull/20416)）
- 修复（updater）：从状态栏打开后台检查错误（[@OrcaWin](https://github.com/OrcaWin)，[#20270](https://github.com/stablyai/orca/pull/20270)）
- 重构（windows）：把注册表插件以 @orca/windows-registry 内置（[@nwparker](https://github.com/nwparker)，[#20438](https://github.com/stablyai/orca/pull/20438)）
- 杂项（deps）：将 serve-sim 钉到精确版本（[@nwparker](https://github.com/nwparker)，[#20446](https://github.com/stablyai/orca/pull/20446)）
- 为类型断言增加代码质量 lint（[@AmethystLiang](https://github.com/AmethystLiang)，[#19462](https://github.com/stablyai/orca/pull/19462)）
- 修复（ci）：把内置插件缓存到 node-gyp 实际写入的位置（[@nwparker](https://github.com/nwparker)，[#20445](https://github.com/stablyai/orca/pull/20445)）
- 修复（ci）：匹配被截断的 windows-process-tree virtual store 目录（[@nwparker](https://github.com/nwparker)，[#20447](https://github.com/stablyai/orca/pull/20447)）
- 构建（macos）：并行化原生 helpers，并支持完整取消（[@espetro](https://github.com/espetro)，[#19651](https://github.com/stablyai/orca/pull/19651)）
- 把原生依赖安装收窄到主机平台（[@nwparker](https://github.com/nwparker)，[#20420](https://github.com/stablyai/orca/pull/20420)）
- 测试（scripts）：扩大 Windows shim 棘轮，以捕获 package bin 启动（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20285](https://github.com/stablyai/orca/pull/20285)）

### 新贡献者 {#v1-4-203-contributors}

- [@espetro](https://github.com/espetro) 首次贡献于 [#19651](https://github.com/stablyai/orca/pull/19651)

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
