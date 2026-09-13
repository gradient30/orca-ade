# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.201](#v1-4-201) | 2026年9月13日 | 官方更新 |
| [v1.4.200](#v1-4-200) | 2026年9月11日 | Native chat: |
| [v1.4.199](#v1-4-199) | 2026年9月9日 | Create 入口回来了，Structured Chat 更像对话 |

### v1.4.201 · 官方更新 {#v1-4-201-summary}

2026年9月13日 · [本页全文](#v1-4-201) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.201)

- 详见下方完整中文日志。

### v1.4.200 · Native chat: {#v1-4-200-summary}

2026年9月11日 · [本页全文](#v1-4-200) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.200)

- Native chat:
- Orchestration:
- Workspace & browser:

### v1.4.199 · Create 入口回来了，Structured Chat 更像对话 {#v1-4-199-summary}

2026年9月9日 · [本页全文](#v1-4-199) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.199)

- 侧栏「新建工作区」和「添加项目」合并进同一个 Create 按钮，任意窗口宽度都在同一位置。
- 实验设置打开 Structured Chat 后，工具调用按批次分组、可展开执行细节、Codex 子 Agent 动态，以及 /clear、/compact；Native Windows 也支持。
- 远程中继选区、迁移和重连更稳；终端恢复时保住输入与身份。渲染与 Git 解析更快。移动端中继测速和后台推送本版本已撤下。

## 完整中文日志 {#full-notes}

## v1.4.201 官方更新 {#v1-4-201}

2026年9月13日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.201)

### What's Changed {#v1-4-201-what-s-changed}

- 修复（push）：isolate deployment and validate candidates before activation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19771](https://github.com/stablyai/orca/pull/19771)）
- 修复（native-chat）：show Claude working from the send, not the provider echo（[@brennanb2025](https://github.com/brennanb2025)，[#19822](https://github.com/stablyai/orca/pull/19822)）
- 修复（mobile）：enable patch-free iOS text selection in Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#19769](https://github.com/stablyai/orca/pull/19769)）
- 性能（terminal）：resume OSC terminator search past the carried frame（[@nwparker](https://github.com/nwparker)，[#19839](https://github.com/stablyai/orca/pull/19839)）
- 性能（native-chat）：bound retained items on the structured session path（[@nwparker](https://github.com/nwparker)，[#19841](https://github.com/stablyai/orca/pull/19841)）
- 性能（terminal）：share one ESC dispatch table between the two scanners（[@nwparker](https://github.com/nwparker)，[#19842](https://github.com/stablyai/orca/pull/19842)）
- 修复（native-chat）：one `/` picker for every agent, anywhere in the prompt（[@brennanb2025](https://github.com/brennanb2025)，[#19832](https://github.com/stablyai/orca/pull/19832)）
- 新增（native-chat）：the background-tasks strip says what is running（[@brennanb2025](https://github.com/brennanb2025)，[#19311](https://github.com/stablyai/orca/pull/19311)）
- 修复（i18n）：drop the stale TerminalPane.minimumContrast entries from the runtime catalog (main red again)（[@nwparker](https://github.com/nwparker)，[#19575](https://github.com/stablyai/orca/pull/19575)）
- 修复（native-chat）：keep an older page from punching a hole in the transcript（[@nwparker](https://github.com/nwparker)，[#19845](https://github.com/stablyai/orca/pull/19845)）
- 重构（agent-status）：publish structured sessions into the hook server store（[@brennanb2025](https://github.com/brennanb2025)，[#19683](https://github.com/stablyai/orca/pull/19683)）
- 修复（orchestration）：scope @ group addresses to the sender's Run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19783](https://github.com/stablyai/orca/pull/19783)）
- 新增（native-chat）：show live background work and name each row by kind（[@brennanb2025](https://github.com/brennanb2025)，[#19705](https://github.com/stablyai/orca/pull/19705)）
- 新增（sidebar）：show native-chat subagents as sidebar child rows, like CLI agents already do（[@brennanb2025](https://github.com/brennanb2025)，[#19807](https://github.com/stablyai/orca/pull/19807)）
- 新增（native-chat）：focus the message box when a chat appears（[@brennanb2025](https://github.com/brennanb2025)，[#19868](https://github.com/stablyai/orca/pull/19868)）
- 修复（relay）：keep failed rehome polls out of the durable failure budget（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19915](https://github.com/stablyai/orca/pull/19915)）
- 修复（orchestration）：revalidate an attempted Enter instead of resending it（[@brennanb2025](https://github.com/brennanb2025)，[#19911](https://github.com/stablyai/orca/pull/19911)）
- 测试（native-chat）：split structured question fixtures（[@brennanb2025](https://github.com/brennanb2025)，[#19924](https://github.com/stablyai/orca/pull/19924)）
- Make the structured turn lifecycle row durable so completed durations survive（[@brennanb2025](https://github.com/brennanb2025)，[#19695](https://github.com/stablyai/orca/pull/19695)）
- 重构（native-chat）：unify agent session launch and open drafts in 结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#19681](https://github.com/stablyai/orca/pull/19681)）
- 新增（cloud）：native push gateway and dedicated infrastructure (1/3)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19912](https://github.com/stablyai/orca/pull/19912)）
- 修复（browser）：restore the Chrome-shaped browser identity (STA-7147)（[@brennanb2025](https://github.com/brennanb2025)，[#19927](https://github.com/stablyai/orca/pull/19927)）
- 重构（mobile）：extract settings, diagnostics and editor-document screens from their routes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19675](https://github.com/stablyai/orca/pull/19675)）
- 修复（native-chat）：never adopt an unlisted model as the launch default（[@brennanb2025](https://github.com/brennanb2025)，[#19854](https://github.com/stablyai/orca/pull/19854)）
- 修复（native-chat）：settle a structured send on admission, not on the provider echo（[@brennanb2025](https://github.com/brennanb2025)，[#19863](https://github.com/stablyai/orca/pull/19863)）
- 新增（desktop）：native mobile push integration (2/3)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19935](https://github.com/stablyai/orca/pull/19935)）
- 修复（sidebar）：let an agent row show the provider's own session title（[@brennanb2025](https://github.com/brennanb2025)，[#19936](https://github.com/stablyai/orca/pull/19936)）
- 修复（editor）：make markdown images inline so a paragraph stays schema-valid（[@OrcaWin](https://github.com/OrcaWin)，[#19746](https://github.com/stablyai/orca/pull/19746)）
- 新增（native-chat）：record the provider's name for an agent session（[@brennanb2025](https://github.com/brennanb2025)，[#19908](https://github.com/stablyai/orca/pull/19908)）
- 修复（release）：port three release-gate fixes to main so cuts stop re-inheriting them（[@brennanb2025](https://github.com/brennanb2025)，[#19945](https://github.com/stablyai/orca/pull/19945)）
- 重构（renderer）：share path head elision（[@AmethystLiang](https://github.com/AmethystLiang)，[#19938](https://github.com/stablyai/orca/pull/19938)）
- 新增（cmd-j）：compact palette location layout（[@AmethystLiang](https://github.com/AmethystLiang)，[#19939](https://github.com/stablyai/orca/pull/19939)）
- 重构（mobile）：name the RPC acceptance policies call sites hand-rolled（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19960](https://github.com/stablyai/orca/pull/19960)）
- 修复：prompt unexpectedly signed-out Cloud users once per version（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19966](https://github.com/stablyai/orca/pull/19966)）
- 新增（ai-vault-search）：session search index as a transcript reader consumer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19687](https://github.com/stablyai/orca/pull/19687)）
- 修复（native-chat）：pass agent-implemented slash commands through to the agent（[@brennanb2025](https://github.com/brennanb2025)，[#19929](https://github.com/stablyai/orca/pull/19929)）
- 性能（terminal）：stop rebuilding per-workspace collections on a worktree switch（[@nwparker](https://github.com/nwparker)，[#19975](https://github.com/stablyai/orca/pull/19975)）
- 新增（rpc）：generate a shared params catalog from the host registry, gated on parse parity（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19961](https://github.com/stablyai/orca/pull/19961)）
- 新增（native-chat）：describe slash commands from the provider's own report（[@brennanb2025](https://github.com/brennanb2025)，[#19928](https://github.com/stablyai/orca/pull/19928)）
- 性能（terminal）：stop spending reveal-restore frames on panes that replay nothing（[@nwparker](https://github.com/nwparker)，[#19972](https://github.com/stablyai/orca/pull/19972)）
- i18n: Make file reveal labels translatable（[@OrcaWin](https://github.com/OrcaWin)，[#20010](https://github.com/stablyai/orca/pull/20010)）
- 性能（native-chat）：mount only the transcript rows near the viewport（[@brennanb2025](https://github.com/brennanb2025)，[#19869](https://github.com/stablyai/orca/pull/19869)）
- 新增（mobile）：receive native push notifications from paired desktops（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19951](https://github.com/stablyai/orca/pull/19951)）
- 修复（workspaces）：seed shells only for blank selection（[@brennanb2025](https://github.com/brennanb2025)，[#19940](https://github.com/stablyai/orca/pull/19940)）
- Hide desktop theme imports from paired web clients（[@OrcaWin](https://github.com/OrcaWin)，[#20015](https://github.com/stablyai/orca/pull/20015)）
- 新增（ai-vault-search）：session search query engine over the index（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19750](https://github.com/stablyai/orca/pull/19750)）
- 重构（shared）：derive WellKnownAgentType from TuiAgent（[@AmethystLiang](https://github.com/AmethystLiang)，[#19645](https://github.com/stablyai/orca/pull/19645)）
- 回退「新增（ai-vault-search）：session search query engine over the index (#19750)」（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20023](https://github.com/stablyai/orca/pull/20023)）
- 新增（ai-vault-search）：session search indexer library owning backfill, reconcile and retention（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19751](https://github.com/stablyai/orca/pull/19751)）
- 重构（rpc）：make defineMethod preserve the method name and handler result（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20016](https://github.com/stablyai/orca/pull/20016)）
- 修复（daemon）：pin owner-only modes on persisted terminal history（[@nwparker](https://github.com/nwparker)，[#19954](https://github.com/stablyai/orca/pull/19954)）
- Revert mobile push rollout pending delivery investigation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20040](https://github.com/stablyai/orca/pull/20040)）
- 修复（pi）：retire stale spinner and prompt timers across reloads（[@nwparker](https://github.com/nwparker)，[#20035](https://github.com/stablyai/orca/pull/20035)）
- 修复（terminal）：stop the recovery budget erasing itself during a remount（[@OrcaWin](https://github.com/OrcaWin)，[#19745](https://github.com/stablyai/orca/pull/19745)）
- 修复（monaco）：bound embedded-language recursion in svelte/astro/vue grammars（[@OrcaWin](https://github.com/OrcaWin)，[#19748](https://github.com/stablyai/orca/pull/19748)）
- 修复（runtime）：agent-neutral wait-blocked reasons（[@OrcaWin](https://github.com/OrcaWin)，[#19749](https://github.com/stablyai/orca/pull/19749)）
- 修复（worktrees）：close an idle 结构化聊天 on delete instead of refusing（[@brennanb2025](https://github.com/brennanb2025)，[#19762](https://github.com/stablyai/orca/pull/19762)）
- 修复（runtime）：let connections own host status recovery（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20003](https://github.com/stablyai/orca/pull/20003)）
- 修复（native-chat）：show one live-turn indicator, and make Thinking mean reasoning（[@brennanb2025](https://github.com/brennanb2025)，[#19977](https://github.com/stablyai/orca/pull/19977)）
- 性能（terminal）：mount only the visible pane on a worktree switch（[@nwparker](https://github.com/nwparker)，[#20034](https://github.com/stablyai/orca/pull/20034)）
- 测试（monaco）：drive the real Monarch tokenizer instead of walking rule tables（[@nwparker](https://github.com/nwparker)，[#19981](https://github.com/stablyai/orca/pull/19981)）
- 测试（runtime）：capture real Antigravity transcripts — the detector is inverted on live output（[@nwparker](https://github.com/nwparker)，[#19983](https://github.com/stablyai/orca/pull/19983)）
- 修复（pi）：claim the status pane when the inherited owner PID is dead (STA-5245)（[@brennanb2025](https://github.com/brennanb2025)，[#16631](https://github.com/stablyai/orca/pull/16631)）
- 修复（pi）：load extension providers for source control generation（[@nwparker](https://github.com/nwparker)，[#20070](https://github.com/stablyai/orca/pull/20070)）
- 修复（terminal）：keep a deliberately slept workspace cold until it is woken（[@nwparker](https://github.com/nwparker)，[#20075](https://github.com/stablyai/orca/pull/20075)）
- 性能（daemon）：stop scanning every cell for OSC links that cannot exist（[@nwparker](https://github.com/nwparker)，[#20077](https://github.com/stablyai/orca/pull/20077)）
- 修复（terminal）：move the recovery ledger onto the tab row and gate it on observed outcome（[@nwparker](https://github.com/nwparker)，[#20025](https://github.com/stablyai/orca/pull/20025)）
- 修复（push）：preserve distinct Android alerts while offline（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20066](https://github.com/stablyai/orca/pull/20066)）
- 新增（native-chat）：show when a Codex goal is set, changed, or cleared（[@brennanb2025](https://github.com/brennanb2025)，[#19923](https://github.com/stablyai/orca/pull/19923)）
- 修复：remote hosted review browser routing（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20030](https://github.com/stablyai/orca/pull/20030)）
- 修复（mobile）：surface host create warnings and terminal-create errors（[@brennanb2025](https://github.com/brennanb2025)，[#20125](https://github.com/stablyai/orca/pull/20125)）
- 新增（relay）：correct regional placement only when the source is idle（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20105](https://github.com/stablyai/orca/pull/20105)）
- 测试（relay）：harden regional rehome race coverage（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20136](https://github.com/stablyai/orca/pull/20136)）
- 新增（desktop）：measure relay regions and reconnect after idle cutover（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20106](https://github.com/stablyai/orca/pull/20106)）

**完整变更对照：** [v1.4.200...v1.4.201](https://github.com/stablyai/orca/compare/v1.4.200...v1.4.201)

## v1.4.200 Native chat: {#v1-4-200}

2026年9月11日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.200)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-200-short}

**Native chat:** Claude subagent activity and Codex background tasks are now visible in chat. Completed turns show changed files, and task updates stream into the composer.

**Orchestration:** Worker-terminal ownership is established at creation. Startup, mobile input, and older federation coordinators have additional recovery safeguards.

**Workspace & browser:** Background browser tabs load on open, and creating a chat preserves the active worktree.

---

### 产品体验 {#v1-4-200-product}

#### Workspaces, tabs & browser {#v1-4-200-workspaces-tabs-browser}

> 保持：the current worktree selected, and trust a newly opened browser tab to be ready when you visit it.

**Tabs & browser**

- 修复（browser）：load newly opened background tabs（[@brennanb2025](https://github.com/brennanb2025)，[#19633](https://github.com/stablyai/orca/pull/19633)）
- Unify tab surface selection across workspace activation（[@brennanb2025](https://github.com/brennanb2025)，[#19635](https://github.com/stablyai/orca/pull/19635)）
- 修复（native-chat）：keep worktree active during chat creation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19753](https://github.com/stablyai/orca/pull/19753)）

### Agent 与工作流 {#v1-4-200-agents-workflow}

#### Native chat {#v1-4-200-native-chat}

> The conversation gives you a much better read on what an agent did, is doing, and has delegated.

**Agent activity & results**

- 新增（native-chat）：show Claude subagent activity on the shared carrier（[@brennanb2025](https://github.com/brennanb2025)，[#18806](https://github.com/stablyai/orca/pull/18806)）
- 新增（native-chat）：report Codex background tasks in the chat strip（[@brennanb2025](https://github.com/brennanb2025)，[#19346](https://github.com/stablyai/orca/pull/19346)）
- Summarize turn file changes and preserve resolved prompt receipts（[@brennanb2025](https://github.com/brennanb2025)，[#19229](https://github.com/stablyai/orca/pull/19229)）
- Render task checklists with update diffs and a composer progress panel（[@brennanb2025](https://github.com/brennanb2025)，[#19230](https://github.com/stablyai/orca/pull/19230)）

**Composer & controls**

- 修复（native-chat）：place effort to the right of model picker（[@brennanb2025](https://github.com/brennanb2025)，[#19617](https://github.com/stablyai/orca/pull/19617)）
- 显示：picker-selected Native Chat skills as pills（[@brennanb2025](https://github.com/brennanb2025)，[#19616](https://github.com/stablyai/orca/pull/19616)）
- 修复（native-chat）：expand Claude slash commands sent with an attachment（[@brennanb2025](https://github.com/brennanb2025)，[#19654](https://github.com/stablyai/orca/pull/19654)）
- 修复（native-chat）：reveal message chrome on keyboard focus, not any focus（[@brennanb2025](https://github.com/brennanb2025)，[#19426](https://github.com/stablyai/orca/pull/19426)）
- 修复（native-chat）：keep collapsible chevrons beside their header text（[@brennanb2025](https://github.com/brennanb2025)，[#19656](https://github.com/stablyai/orca/pull/19656)）
- 修复（renderer）：align Native Chat pane layering（[@brennanb2025](https://github.com/brennanb2025)，[#19626](https://github.com/stablyai/orca/pull/19626)）

**Chat & workspace routing**

- Unify Native Chat and workspace tab command dispatch（[@brennanb2025](https://github.com/brennanb2025)，[#19621](https://github.com/stablyai/orca/pull/19621)）
- 修复（native-chat）：unify launch routing and support structured worker placement（[@brennanb2025](https://github.com/brennanb2025)，[#19431](https://github.com/stablyai/orca/pull/19431)）

#### 自动化 {#v1-4-200-automations}

> Workers have a clearer owner from their first moment and are less likely to get stranded during recovery, federation, or mobile use.

- 修复（orchestration）：own a worker terminal from creation, not after the boot wait（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19608](https://github.com/stablyai/orca/pull/19608)）
- 修复（orchestration）：fence worker release on mobile keystrokes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19337](https://github.com/stablyai/orca/pull/19337)）
- 修复（orchestration）：worker-start settles readiness on observed turn start, not write acceptance（[@brennanb2025](https://github.com/brennanb2025)，[#19423](https://github.com/stablyai/orca/pull/19423)）
- 修复（orchestration）：unify structured-session status across worktree ps and sidebar（[@brennanb2025](https://github.com/brennanb2025)，[#19217](https://github.com/stablyai/orca/pull/19217)）
- 修复（orchestration）：accept a missing Run id from older federation coordinators（[@brennanb2025](https://github.com/brennanb2025)，[#19689](https://github.com/stablyai/orca/pull/19689)）
- 修复（orchestration）：file mail from terminals in no Run under an unbound Run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19696](https://github.com/stablyai/orca/pull/19696)）
- 测试（orchestration）：pin the Run-required contract for unbound direct mail（[@brennanb2025](https://github.com/brennanb2025)，[#19684](https://github.com/stablyai/orca/pull/19684)）

### 质量与交付 {#v1-4-200-quality}

> Nothing here changes what you see — it changes how smoothly Orca behaves under real workloads. Expanded below if you want the detail.

#### Performance: interface, chat & workspaces {#v1-4-200-performance-interface-chat-workspaces}

- 性能：preserve store state on unchanged document titles（[@OrcaWin](https://github.com/OrcaWin)，[#19459](https://github.com/stablyai/orca/pull/19459)）
- 性能：index document history workspace and path identities（[@OrcaWin](https://github.com/OrcaWin)，[#19461](https://github.com/stablyai/orca/pull/19461)）
- 性能：index unified tabs for browser palette entries（[@OrcaWin](https://github.com/OrcaWin)，[#19464](https://github.com/stablyai/orca/pull/19464)）
- 性能：append to owned project source lists without repeated copying（[@OrcaWin](https://github.com/OrcaWin)，[#19465](https://github.com/stablyai/orca/pull/19465)）
- 性能：lazily index workspace tabs during terminal binding replay（[@OrcaWin](https://github.com/OrcaWin)，[#19466](https://github.com/stablyai/orca/pull/19466)）
- 性能：replay pending chat asks with a FIFO cursor（[@OrcaWin](https://github.com/OrcaWin)，[#19496](https://github.com/stablyai/orca/pull/19496)）
- 性能：group chat history sequences lazily within result windows（[@OrcaWin](https://github.com/OrcaWin)，[#19501](https://github.com/stablyai/orca/pull/19501)）
- 性能：measure sidebar row geometry once before sorting delete anchors（[@OrcaWin](https://github.com/OrcaWin)，[#19503](https://github.com/stablyai/orca/pull/19503)）
- 性能：index discovered skill IDs and names for batch selection（[@OrcaWin](https://github.com/OrcaWin)，[#19507](https://github.com/stablyai/orca/pull/19507)）
- 性能：skip fuzzy ranking when exact file matches fill the window（[@OrcaWin](https://github.com/OrcaWin)，[#19509](https://github.com/stablyai/orca/pull/19509)）
- 性能：index tab membership when rebasing authoritative sessions（[@OrcaWin](https://github.com/OrcaWin)，[#19510](https://github.com/stablyai/orca/pull/19510)）
- 性能：reuse collators when sorting discovered skills（[@OrcaWin](https://github.com/OrcaWin)，[#19440](https://github.com/stablyai/orca/pull/19440)）
- 性能：reuse collators when scanning Warp themes（[@OrcaWin](https://github.com/OrcaWin)，[#19441](https://github.com/stablyai/orca/pull/19441)）
- 性能：index selected ancestor coverage during sidebar drag（[@OrcaWin](https://github.com/OrcaWin)，[#19443](https://github.com/stablyai/orca/pull/19443)）
- 性能：index Resource Manager labels and accumulated workspace rows（[@OrcaWin](https://github.com/OrcaWin)，[#19480](https://github.com/stablyai/orca/pull/19480)）
- 性能：scope activation inventory to the owning host and workspace（[@OrcaWin](https://github.com/OrcaWin)，[#19447](https://github.com/stablyai/orca/pull/19447)）
- 性能：index closed browser page IDs during focus cleanup（[@OrcaWin](https://github.com/OrcaWin)，[#19449](https://github.com/stablyai/orca/pull/19449)）
- 性能：index observable skill installations by locked name（[@OrcaWin](https://github.com/OrcaWin)，[#19451](https://github.com/stablyai/orca/pull/19451)）
- 性能（runtime）：skip hibernation inventories without completed agents（[@nwparker](https://github.com/nwparker)，[#19391](https://github.com/stablyai/orca/pull/19391)）
- 性能（workspaces）：skip unchanged heartbeat subscriber work（[@nwparker](https://github.com/nwparker)，[#19392](https://github.com/stablyai/orca/pull/19392)）
- 性能：resolve current-workspace document addresses before catalog scans（[@OrcaWin](https://github.com/OrcaWin)，[#19495](https://github.com/stablyai/orca/pull/19495)）
- 性能：materialize only the requested recent plugin audit lines（[@OrcaWin](https://github.com/OrcaWin)，[#19498](https://github.com/stablyai/orca/pull/19498)）
- 性能：stop merging OS-opened files at the pending queue cap（[@OrcaWin](https://github.com/OrcaWin)，[#19508](https://github.com/stablyai/orca/pull/19508)）

#### Performance: terminals, tunnels & runtime {#v1-4-200-performance-terminals-tunnels-runtime}

- 性能：track pane alias singleton or ambiguity without copying buckets（[@OrcaWin](https://github.com/OrcaWin)，[#19479](https://github.com/stablyai/orca/pull/19479)）
- 性能：retire exhausted buckets from host-balanced listings（[@OrcaWin](https://github.com/OrcaWin)，[#19493](https://github.com/stablyai/orca/pull/19493)）
- 性能：avoid repeated pending SOCKS payload copies（[@OrcaWin](https://github.com/OrcaWin)，[#19439](https://github.com/stablyai/orca/pull/19439)）
- 性能（terminal）：avoid quadratic status-marker scans in output bursts（[@nwparker](https://github.com/nwparker)，[#19373](https://github.com/stablyai/orca/pull/19373)）
- 性能：index selected-host SSH leases by PTY（[@OrcaWin](https://github.com/OrcaWin)，[#19467](https://github.com/stablyai/orca/pull/19467)）
- 性能：drop oversized diagnostic records before retaining serialized text（[@OrcaWin](https://github.com/OrcaWin)，[#19445](https://github.com/stablyai/orca/pull/19445)）
- 性能：bound tool pairing and avoid unused attribution arrays（[@OrcaWin](https://github.com/OrcaWin)，[#19468](https://github.com/stablyai/orca/pull/19468)）
- 性能：validate terminal adoption MRU membership with group sets（[@OrcaWin](https://github.com/OrcaWin)，[#19482](https://github.com/stablyai/orca/pull/19482)）
- 性能：index terminal neighbor order and remaining membership（[@OrcaWin](https://github.com/OrcaWin)，[#19453](https://github.com/stablyai/orca/pull/19453)）
- 性能：count command-line escapes without regex match arrays（[@OrcaWin](https://github.com/OrcaWin)，[#19499](https://github.com/stablyai/orca/pull/19499)）
- 性能：check backfill date cardinality before expanding ranges（[@OrcaWin](https://github.com/OrcaWin)，[#19456](https://github.com/stablyai/orca/pull/19456)）
- 性能：probe requested pane keys instead of enumerating records（[@OrcaWin](https://github.com/OrcaWin)，[#19494](https://github.com/stablyai/orca/pull/19494)）
- 性能（terminal）：skip plain text between partial escape sequences（[@nwparker](https://github.com/nwparker)，[#19393](https://github.com/stablyai/orca/pull/19393)）
- 性能（terminal）：release oversized backing strings behind pending controls（[@nwparker](https://github.com/nwparker)，[#19396](https://github.com/stablyai/orca/pull/19396)）
- 性能（terminal）：skip ordinary output in preview control scans（[@nwparker](https://github.com/nwparker)，[#19400](https://github.com/stablyai/orca/pull/19400)）
- 性能（terminal）：own retained tail rows so they stop pinning their chunks（[@nwparker](https://github.com/nwparker)，[#19528](https://github.com/stablyai/orca/pull/19528)）
- 性能：check tunnel queue capacity before copying frame payloads（[@OrcaWin](https://github.com/OrcaWin)，[#19497](https://github.com/stablyai/orca/pull/19497)）
- 性能：stop queued metadata work after watcher cancellation（[@OrcaWin](https://github.com/OrcaWin)，[#19446](https://github.com/stablyai/orca/pull/19446)）

#### Performance: data & integrations {#v1-4-200-performance-data-integrations}

- 性能：prune metadata caches only when an entry can expire（[@OrcaWin](https://github.com/OrcaWin)，[#19450](https://github.com/stablyai/orca/pull/19450)）
- 性能：skip folder-scope construction for separate repository imports（[@OrcaWin](https://github.com/OrcaWin)，[#19452](https://github.com/stablyai/orca/pull/19452)）
- 性能：index usage session breakdowns during aggregation and merge（[@OrcaWin](https://github.com/OrcaWin)，[#19487](https://github.com/stablyai/orca/pull/19487)）
- 性能：reuse AI-vault path matchers and query and sort keys（[@OrcaWin](https://github.com/OrcaWin)，[#19469](https://github.com/stablyai/orca/pull/19469)）
- 性能：cache AI-vault project attribution by host and cwd（[@OrcaWin](https://github.com/OrcaWin)，[#19470](https://github.com/stablyai/orca/pull/19470)）
- 性能：select checks-panel workspace attribution in one pass（[@OrcaWin](https://github.com/OrcaWin)，[#19471](https://github.com/stablyai/orca/pull/19471)）
- 性能：cache update timestamps for Linear and Jira result sorting（[@OrcaWin](https://github.com/OrcaWin)，[#19473](https://github.com/stablyai/orca/pull/19473)）
- 性能：reuse naturally ordered unique Codex trust ranges（[@OrcaWin](https://github.com/OrcaWin)，[#19492](https://github.com/stablyai/orca/pull/19492)）
- 性能：reuse normalized task-page repository selection（[@OrcaWin](https://github.com/OrcaWin)，[#19454](https://github.com/stablyai/orca/pull/19454)）

#### Reliability & maintenance {#v1-4-200-reliability-maintenance}

- 测试（ci）：replace fixed teardown waits with bounded polls（[@nwparker](https://github.com/nwparker)，[#19720](https://github.com/stablyai/orca/pull/19720)）
- 修复（lint）：preserve deliberate collator benchmark baselines（[@brennanb2025](https://github.com/brennanb2025)，[#19686](https://github.com/stablyai/orca/pull/19686)）
- 修复（native-chat）：merge duplicate native-chat-types import（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19698](https://github.com/stablyai/orca/pull/19698)）
- 重构（ai-vault）：split the session scanner into a transcript reader and consumers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19666](https://github.com/stablyai/orca/pull/19666)）

**完整变更对照：** [v1.4.199...v1.4.200](https://github.com/stablyai/orca/compare/v1.4.199...v1.4.200)

## v1.4.199 Create 入口回来了，Structured Chat 更像对话 {#v1-4-199}

2026年9月9日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.199)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-199-short}

**「Add project」又回到你找得到的地方了。** 过去侧边栏会按窗口宽度，把 *New workspace* 和 *Add project* 藏在不同入口后面。现在统一为一个 **Create** 按钮，两者都在其中——同样的标签、同样的位置，任意窗口尺寸皆如此。

**Structured Chat 更成熟了。** 在 Experimental 设置中开启 *Structured Chat* 后，Agent 输出会像对话一样可读：工具调用按批次分组、可展开的执行详情、Codex 子 Agent 活动而非原始 opcode、`/clear` 与 `/compact`、可重命名的标签页、悬停时间戳，以及直接从 Agent Session History 恢复。Native Windows 也支持结构化的 Codex 聊天。

**远程工作更稳了。** 桌面端与云端的中继区域选择、重新归属与重连更可靠。终端在恢复、重启与滚动回放过程中会保留输入、输出与身份。

**更快了。** 一轮大规模优化去掉了渲染器、侧边栏、终端、Git 解析与目录索引中多余的重渲染、重新扫描与分配。

**有两项被撤回。** 移动端中继连接速度相关改动与后台移动推送已回退，待后续再处理——不包含在本版本中。

---

### 产品体验 {#v1-4-199-product}

#### 工作区与项目 {#v1-4-199-workspaces}

> 侧边栏新建操作现已统一为单个 **Create** 按钮，且侧边栏不再丢失你的筛选条件、主机与项目列表。

**统一 Create 按钮**

- 将侧边栏创建操作统一为单个下拉菜单（[@AmethystLiang](https://github.com/AmethystLiang)，[#19375](https://github.com/stablyai/orca/pull/19375)）

**侧边栏保持位置**

- 修复（sidebar）：展开折叠的工作区时不清除筛选条件（[@nwparker](https://github.com/nwparker)，[#19398](https://github.com/stablyai/orca/pull/19398)）
- 修复（ui）：检测 overlay 时忽略持久化工作区列表（[@nwparker](https://github.com/nwparker)，[#18881](https://github.com/stablyai/orca/pull/18881)）
- 将 agents 侧边栏搜索可见性持久化为 pairing 本地偏好（[@AmethystLiang](https://github.com/AmethystLiang)，[#19313](https://github.com/stablyai/orca/pull/19313)）
- 修复（sidebar）：在多主机侧边栏中为固定行标注所属主机（[@nwparker](https://github.com/nwparker)，[#19351](https://github.com/stablyai/orca/pull/19351)）
- 修复（ui）：在窄侧边栏中保持源代码管理标题可读（[@nwparker](https://github.com/nwparker)，[#19146](https://github.com/stablyai/orca/pull/19146)）

**项目与 worktree**

- 修复（runtime）：阻止首次状态发布中止进行中的 worktree 扫描（[@nwparker](https://github.com/nwparker)，[#19357](https://github.com/stablyai/orca/pull/19357)）
- 修复：目录刷新时避免重复的仓库分组（[@kiendle](https://github.com/kiendle)，[#19170](https://github.com/stablyai/orca/pull/19170)）

#### 编辑器、浏览器与界面 {#v1-4-199-editor-ui}

> ⌘J 能找到你真正想要的内容，浏览器与地址栏表现正常，活动列表按需要你关注的内容排序。

**命令面板（⌘J）**

- 根据侧边栏作用域预填 Cmd-J 筛选条件（[@AmethystLiang](https://github.com/AmethystLiang)，[#19036](https://github.com/stablyai/orca/pull/19036)）
- 改进 cmd j 排序（[@AmethystLiang](https://github.com/AmethystLiang)，[#19005](https://github.com/stablyai/orca/pull/19005)）
- 修复（cmd-j）：将浏览器标签页所有权传入面板搜索（[@nwparker](https://github.com/nwparker)，[#18925](https://github.com/stablyai/orca/pull/18925)）
- 修复（cmd-j）：移除重复的浏览器所有权输入（[@nwparker](https://github.com/nwparker)，[#19172](https://github.com/stablyai/orca/pull/19172)）

**浏览器**

- 修复（browser）：首次点击地址栏时选中完整 URL（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19118](https://github.com/stablyai/orca/pull/19118)）
- 修复：避免仅为重置不存在的会话而启动浏览器 helper（[@nwparker](https://github.com/nwparker)，[#18952](https://github.com/stablyai/orca/pull/18952)）
- 修复：将浏览器恢复限定在 attach inventory 放置范围内（[@nwparker](https://github.com/nwparker)，[#18910](https://github.com/stablyai/orca/pull/18910)）
- 修复：在客户端托管页面更新期间保留 renderer 浏览器发布（[@nwparker](https://github.com/nwparker)，[#18961](https://github.com/stablyai/orca/pull/18961)）
- 在 worktree 切换时延迟非活动浏览器页面（[@AmethystLiang](https://github.com/AmethystLiang)，[#19326](https://github.com/stablyai/orca/pull/19326)）

**编辑器与 diff**

- 修复（editor）：在合并 diff 中支持 Shift+滚轮滚动（[@brohoya](https://github.com/brohoya)，[#11756](https://github.com/stablyai/orca/pull/11756)）
- 修复：在上下文菜单释放焦点后打开编辑器重命名（[@nwparker](https://github.com/nwparker)，[#18934](https://github.com/stablyai/orca/pull/18934)）
- 在可见性变化时恢复分支比较（[@AmethystLiang](https://github.com/AmethystLiang)，[#19021](https://github.com/stablyai/orca/pull/19021)）

**活动视图**

- 按关注级别对活动状态分组排序（[@AmethystLiang](https://github.com/AmethystLiang)，[#19329](https://github.com/stablyai/orca/pull/19329)）
- 修复（activity）：通过为进行中的 turn 提供已读回执，使工作中的 agent 在「仅未读」下可见（[@AmethystLiang](https://github.com/AmethystLiang)，[#19535](https://github.com/stablyai/orca/pull/19535)）
- 将活动菜单整理为筛选与视图分区（[@AmethystLiang](https://github.com/AmethystLiang)，[#19547](https://github.com/stablyai/orca/pull/19547)）

**端口、日志与诊断**

- 修复（ports）：合并 advertised URL 的刷新突发（[@nwparker](https://github.com/nwparker)，[#19150](https://github.com/stablyai/orca/pull/19150)）
- 修复（gh）：在 gh/glab 因超时被终止时记录日志（[@nwparker](https://github.com/nwparker)，[#18555](https://github.com/stablyai/orca/pull/18555)）
- 在会话终止失败时记录错误详情（[@AmethystLiang](https://github.com/AmethystLiang)，[#19381](https://github.com/stablyai/orca/pull/19381)）

#### 设置与本地化 {#v1-4-199-settings}

> 更多界面内容支持你的语言。

- 为活动视图与侧边栏添加本地化（[@OrcaWin](https://github.com/OrcaWin)，[#18589](https://github.com/stablyai/orca/pull/18589)）
- 修复（i18n）：删除导致 main 静态分析失败的孤立 TerminalPane.minimumContrast 条目（[@nwparker](https://github.com/nwparker)，[#19566](https://github.com/stablyai/orca/pull/19566)）

### Agent 与工作流 {#v1-4-199-agents-workflow}

#### Agent 与 Native Chat {#v1-4-199-native-chat}

> 结构化聊天（设置 → 实验性功能 → **Structured Chat**）读起来像对话，而不再是协议转储。

**阅读对话**

- feat(native-chat): 将工具批处理作为一组读取（[@brennanb2025](https://github.com/brennanb2025)，[#19372](https://github.com/stablyai/orca/pull/19372)）
- feat(native-chat): 添加执行详情与工具行标识（[@brennanb2025](https://github.com/brennanb2025)，[#19226](https://github.com/stablyai/orca/pull/19226)）
- feat(native-chat): 显示 Codex 子 Agent 活动，而非操作码行（[@brennanb2025](https://github.com/brennanb2025)，[#18773](https://github.com/stablyai/orca/pull/18773)）
- fix(native-chat): 渲染压缩通知、计划文档与图片（[@brennanb2025](https://github.com/brennanb2025)，[#19228](https://github.com/stablyai/orca/pull/19228)）
- 悬停时显示 native chat 消息时间戳（[@brennanb2025](https://github.com/brennanb2025)，[#19218](https://github.com/stablyai/orca/pull/19218)）
- 在聊天回合尾部显示提供方活动（[@brennanb2025](https://github.com/brennanb2025)，[#19055](https://github.com/stablyai/orca/pull/19055)）
- 添加持久的回合作用域聊天活动指示器（[@brennanb2025](https://github.com/brennanb2025)，[#19044](https://github.com/stablyai/orca/pull/19044)）
- 稳定滚动条槽位，防止消息列表布局偏移（[@AmethystLiang](https://github.com/AmethystLiang)，[#19332](https://github.com/stablyai/orca/pull/19332)）
- feat(native-chat): 为聊天链接提供链接操作弹出框（[@brennanb2025](https://github.com/brennanb2025)，[#19130](https://github.com/stablyai/orca/pull/19130)）
- fix(native-chat): 抑制 Claude 与 Codex 中的提供方用户回显（[@brennanb2025](https://github.com/brennanb2025)，[#19136](https://github.com/stablyai/orca/pull/19136)）

**引导会话**

- feat(chat): 支持结构化的 /clear 与 /compact 命令（[@brennanb2025](https://github.com/brennanb2025)，[#19164](https://github.com/stablyai/orca/pull/19164)）
- feat(native-chat): 将 Agent Session History 行恢复为新的结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#19176](https://github.com/stablyai/orca/pull/19176)）
- fix(native-chat): 使结构化聊天标签可重命名（[@brennanb2025](https://github.com/brennanb2025)，[#19153](https://github.com/stablyai/orca/pull/19153)）
- fix(native-chat): 记住结构化聊天的模型与 effort 选择（[@brennanb2025](https://github.com/brennanb2025)，[#19147](https://github.com/stablyai/orca/pull/19147)）
- fix(native-chat): 列出结构化 Claude 会话实际加载的斜杠命令与技能（[@brennanb2025](https://github.com/brennanb2025)，[#19127](https://github.com/stablyai/orca/pull/19127)）
- fix(native-chat): 在结构化聊天的首个回合自动重命名工作区（[@brennanb2025](https://github.com/brennanb2025)，[#19138](https://github.com/stablyai/orca/pull/19138)）
- 修复 native chat 完成排序与恢复后的活动时间戳（[@brennanb2025](https://github.com/brennanb2025)，[#19144](https://github.com/stablyai/orca/pull/19144)）
- feat(chat): 添加结构化会话回退后端（[@brennanb2025](https://github.com/brennanb2025)，[#19235](https://github.com/stablyai/orca/pull/19235)）

**曾经卡住的回合**

- fix(native-chat): 在确认窗口之后，若提供方证明已收到，则结算结构化发送（[@brennanb2025](https://github.com/brennanb2025)，[#19140](https://github.com/stablyai/orca/pull/19140)）
- fix(native-chat): 结算因重启而滞留的结构化聊天回合（[@brennanb2025](https://github.com/brennanb2025)，[#19122](https://github.com/stablyai/orca/pull/19122)）
- fix(native-chat): 停止在创建聊天时旁侧植入多余终端（[@brennanb2025](https://github.com/brennanb2025)，[#19123](https://github.com/stablyai/orca/pull/19123)）
- fix(native-chat): 停止将未应答主机解读为拒绝结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#19321](https://github.com/stablyai/orca/pull/19321)）
- fix(native-chat): 将编辑器文件拖放限定到接收它们的窗格（[@brennanb2025](https://github.com/brennanb2025)，[#19328](https://github.com/stablyai/orca/pull/19328)）
- fix(runtime): 将 structured-chat 设置应用于每个 RPC 调用方（[@brennanb2025](https://github.com/brennanb2025)，[#18700](https://github.com/stablyai/orca/pull/18700)）
- fix(codex): 保持大型 app-server 回复存活（[@brennanb2025](https://github.com/brennanb2025)，[#18590](https://github.com/stablyai/orca/pull/18590)）
- fix(chat): 阻止终端焦点恢复在 Chat UI 中抢占 Cmd+C（[@brennanb2025](https://github.com/brennanb2025)，[#18751](https://github.com/stablyai/orca/pull/18751)）
- fix: 为结构化 native chat 恢复完整的侧边栏 agent 行（[@brennanb2025](https://github.com/brennanb2025)，[#19137](https://github.com/stablyai/orca/pull/19137)）
- fix(agent-status): 阻止过期的自拟 agent 标题伪装成待处理问题（[@brennanb2025](https://github.com/brennanb2025)，[#19237](https://github.com/stablyai/orca/pull/19237)）
- fix(pi): 将输入模态显示为等待而非工作中（[@mmarabel](https://github.com/mmarabel)，[#18836](https://github.com/stablyai/orca/pull/18836)）
- fix(pi): 在每个界面完成对话框等待信号（[@nwparker](https://github.com/nwparker)，[#19533](https://github.com/stablyai/orca/pull/19533)）

**提供方与账户**

- 修复 MiniMax 中国用量路由与凭据处理（[@weekbin](https://github.com/weekbin)，[#14929](https://github.com/stablyai/orca/pull/14929)）
- 修复 MiniMax 凭据过期报告、区域同步与刷新（[@nwparker](https://github.com/nwparker)，[#19250](https://github.com/stablyai/orca/pull/19250)）
- fix(codex): 区分共享同一邮箱的个人与企业账户（[@nwparker](https://github.com/nwparker)，[#19279](https://github.com/stablyai/orca/pull/19279)）
- fix(rate-limits): 当 API 省略百分比时，停止将 Grok 用量报告为 0%（[@TimothyVang](https://github.com/TimothyVang)，[#17936](https://github.com/stablyai/orca/pull/17936)）
- fix: 将 kimi-code 进程识别为 kimi agent（[@Aladex](https://github.com/Aladex)，[#18634](https://github.com/stablyai/orca/pull/18634)）

#### 自动化 {#v1-4-199-automations}

> 多 Agent 运行可在应用重启后继续存活，保留其 worker 谱系，并拒绝那些曾经导致任务滞留的操作。

**持久性与谱系**

- feat(orchestration): 使多 Agent 工作流具备持久性（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#16904](https://github.com/stablyai/orca/pull/16904)）
- fix(orchestration): 在应用重启后保留 worker 谱系（STA-6366）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19121](https://github.com/stablyai/orca/pull/19121)）
- 移除已结算 worker 的自动恢复与休眠围栏（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19544](https://github.com/stablyai/orca/pull/19544)）

**调度、邮件与任务**

- fix(orchestration): 将联邦 worker 邮件归档到协调器 Run 下（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19542](https://github.com/stablyai/orca/pull/19542)）
- fix(orchestration): 拒绝在活跃 worker 下重新打开 Task；允许对滞留行重新下发 stop（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19551](https://github.com/stablyai/orca/pull/19551)）
- feat(orchestration): 编排原生诞生的结构化聊天会话（[@brennanb2025](https://github.com/brennanb2025)，[#18827](https://github.com/stablyai/orca/pull/18827)）

**状态与标题**

- fix(orchestration): 在完成标题竞态后恢复 Codex 空闲状态（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19243](https://github.com/stablyai/orca/pull/19243)）
- fix(orchestration): 避免在工作中终端标题上做全量消息扫描（[@brennanb2025](https://github.com/brennanb2025)，[#19390](https://github.com/stablyai/orca/pull/19390)）

#### 终端与 CLI {#v1-4-199-terminal-cli}

> 减少窗格丢失你的输入、输出或自身的途径。

**你的输入与输出得以保留**

- fix: 在终端回滚重放期间保留用户输入（[@nwparker](https://github.com/nwparker)，[#19075](https://github.com/stablyai/orca/pull/19075)）
- fix: 在应答恢复截止后重绘隐藏的输出溢出（[@nwparker](https://github.com/nwparker)，[#18904](https://github.com/stablyai/orca/pull/18904)）
- fix: 消除全屏滚动期间的二次空白裁剪（[@nwparker](https://github.com/nwparker)，[#19214](https://github.com/stablyai/orca/pull/19214)）
- fix: 跨控制帧保留终端命令探测（[@nwparker](https://github.com/nwparker)，[#19006](https://github.com/stablyai/orca/pull/19006)）
- fix(terminal): 保留普通前台命令名称（[@nwparker](https://github.com/nwparker)，[#18882](https://github.com/stablyai/orca/pull/18882)）

**窗格恢复与退役**

- fix: 在隐藏终端恢复期间优先使用保留的提供方快照（[@nwparker](https://github.com/nwparker)，[#18972](https://github.com/stablyai/orca/pull/18972)）
- fix(terminal): 重新挂载因 spawn 未返回 PTY id 而处于未绑定状态的窗格（[@brennanb2025](https://github.com/brennanb2025)，[#19223](https://github.com/stablyai/orca/pull/19223)）
- fix: 跨渲染器发布保留终端退役证明（[@nwparker](https://github.com/nwparker)，[#19002](https://github.com/stablyai/orca/pull/19002)）
- 修复原生 PTY I/O 失败导致会话终止被禁用（[@AmethystLiang](https://github.com/AmethystLiang)，[#19523](https://github.com/stablyai/orca/pull/19523)）
- fix: 将 macOS shell 所有权证明保持在恢复预算内（[@nwparker](https://github.com/nwparker)，[#18932](https://github.com/stablyai/orca/pull/18932)）
- fix: 在终端挂载与布局期间保留覆盖层焦点（[@nwparker](https://github.com/nwparker)，[#18982](https://github.com/stablyai/orca/pull/18982)）

**渲染与可读性**

- feat(terminal): 使对比度下限可由用户配置（#10754）（[@nwparker](https://github.com/nwparker)，[#18126](https://github.com/stablyai/orca/pull/18126)）
- fix(xterm): 按标识移除回滚装饰（[@bbingz](https://github.com/bbingz)，[#13178](https://github.com/stablyai/orca/pull/13178)）
- fix: 在关闭时释放浮动终端 WebGL 上下文（[@nwparker](https://github.com/nwparker)，[#19000](https://github.com/stablyai/orca/pull/19000)）
- fix(terminal): 在部分转义尾部中实现折叠安全的 CAN/SUB 与双 ESC 处理（[@nwparker](https://github.com/nwparker)，[#19521](https://github.com/stablyai/orca/pull/19521)）

### 远程与平台 {#v1-4-199-remote}

#### SSH、中继与远程 {#v1-4-199-ssh-relay}

> 手机与远程主机会选择合理的中继区域、正确完成 rehome，并在重连后保留各自的窗格。

**区域选择与 rehome**

- 修复（relay）：冷启动首次探测时不再拒绝近距离区域（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19233](https://github.com/stablyai/orca/pull/19233)）
- 修复（relay）：绝不缓存来自单区域目录的区域提示（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19349](https://github.com/stablyai/orca/pull/19349)）
- 修复（relay）：双向将主机 rehome 到其首选区域（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19241](https://github.com/stablyai/orca/pull/19241)）
- 修复（relay-ops）：让 rehome 信任探测批准 asia-east2 单元（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19275](https://github.com/stablyai/orca/pull/19275)）
- relay：为 asia-east2 单元赋予区域 rehome 身份（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19239](https://github.com/stablyai/orca/pull/19239)）
- 新增（relay）：在远单元放置与区域提示偏斜时发出告警（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19253](https://github.com/stablyai/orca/pull/19253)）

**连接与控制通道**

- 修复（relay）：在 accept 跨越控制通道 rebind 时仍能挂接手机（桌面侧）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19238](https://github.com/stablyai/orca/pull/19238)）
- 修复（relay）：向声明该能力的主机发出 pending-conn 详情（单元侧）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19266](https://github.com/stablyai/orca/pull/19266)）
- 修复（relay）：按每次 ping 与每次 flush 窗口限制控制通道 RTT 采样（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19268](https://github.com/stablyai/orca/pull/19268)）
- 新增（relay）：为成功的客户端 accept 与控制通道往返计时（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19232](https://github.com/stablyai/orca/pull/19232)）
- 修复（ssh-relay）：由守护进程持有端点凭证；失败的启动不会轮换该凭证（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19052](https://github.com/stablyai/orca/pull/19052)）
- 新增（relay）：记录区域探测并标出已分配单元名称（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19307](https://github.com/stablyai/orca/pull/19307)）
- 性能（mobile）：缩短中继重连关键路径，并更快认定失效套接字（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19236](https://github.com/stablyai/orca/pull/19236)）
- 回退（mobile）：暂缓中继重连路径与 cache-first 重连，留待单独的移动端合入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19265](https://github.com/stablyai/orca/pull/19265)）

**远程窗格与标签页**

- 修复：在调用方客户端中兑现远程终端插入（[@nwparker](https://github.com/nwparker)，[#18995](https://github.com/stablyai/orca/pull/18995)）
- 修复：在 runtime 终端回退后仍保持配对标签页更新为实时（[@nwparker](https://github.com/nwparker)，[#19022](https://github.com/stablyai/orca/pull/19022)）
- 修复（remote）：在孤儿恢复后继续同步终端标签页（[@shaharmor](https://github.com/shaharmor)，[#19065](https://github.com/stablyai/orca/pull/19065)）
- 修复（terminal）：移除配对远程分屏中主机已退役的幽灵窗格（#17770）（[@nwparker](https://github.com/nwparker)，[#19365](https://github.com/stablyai/orca/pull/19365)）
- 修复：在启动残留清理期间保留配对的主机会话（[@nwparker](https://github.com/nwparker)，[#18922](https://github.com/stablyai/orca/pull/18922)）
- 修复：在大型 SSH PTY 恢复期间避免 credit 死锁（[@nwparker](https://github.com/nwparker)，[#19026](https://github.com/stablyai/orca/pull/19026)）
- 修复（clipboard）：将 runtime 拥有的 SSH 图片粘贴经 runtime 路由（[@nwparker](https://github.com/nwparker)，[#19352](https://github.com/stablyai/orca/pull/19352)）

#### Windows 与 WSL {#v1-4-199-windows-wsl}

> 结构化 Codex 聊天可在原生 Windows 上运行；WSL1 与 MSYS shell 可被正确识别。

**原生 Windows 上的结构化聊天**

- 新增（windows）：在原生 Windows 上启用结构化 Codex 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#18519](https://github.com/stablyai/orca/pull/18519)）
- 修复（windows）：通过暴露进程创建时间，解除结构化原生聊天阻塞（[@brennanb2025](https://github.com/brennanb2025)，[#18986](https://github.com/stablyai/orca/pull/18986)）

**进程与 shell**

- 修复（windows）：拒绝关闭快照中过期的父 PID 链接（[@brennanb2025](https://github.com/brennanb2025)，[#19149](https://github.com/stablyai/orca/pull/19149)）
- 修复：将 MSYS shell 子进程保留在其终端 job 中（[@nwparker](https://github.com/nwparker)，[#19068](https://github.com/stablyai/orca/pull/19068)）
- 修复：在无 WSL2 内核时仍能识别可用的 WSL1（[@nwparker](https://github.com/nwparker)，[#19061](https://github.com/stablyai/orca/pull/19061)）
- 修复（agent-hooks）：在读取 stdin 之前守卫每一处 Windows 缺失目标回退（[@nwparker](https://github.com/nwparker)，[#19415](https://github.com/stablyai/orca/pull/19415)）

#### 移动端 {#v1-4-199-mobile}

> 结构化原生 Claude 聊天落地。另有两项较大改动已撤回，待下一轮合入。

**已发布**

- 新增（mobile）：结构化原生 Claude 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#18741](https://github.com/stablyai/orca/pull/18741)）
- 修复（mobile）：停止对历史行中的提交时间戳双重缩放（[@blade035](https://github.com/blade035)，[#17731](https://github.com/stablyai/orca/pull/17731)）

**已合入后又撤回、待进一步处理 — 不在本构建中**

- 新增：移动应用的真实后台推送通知（#8129）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18554](https://github.com/stablyai/orca/pull/18554)）
- 回退：暂缓移动端推送功能以供用户测试（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19203](https://github.com/stablyai/orca/pull/19203)）
- 新增（mobile）：会话重连时绘制上次已知的标签栏（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19258](https://github.com/stablyai/orca/pull/19258)）
- 新增（mobile）：会话重连时绘制上次已知的标签栏（移动端合入）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19281](https://github.com/stablyai/orca/pull/19281)）
- 新增（mobile）：为中继拨号各阶段计时，使诊断能指出慢连接卡在何处（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19245](https://github.com/stablyai/orca/pull/19245)）
- 回退（mobile）：撤回中继连接速度的移动端合入，待更小、已验证的版本再重新合入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19348](https://github.com/stablyai/orca/pull/19348)）

### 质量与交付 {#v1-4-199-quality}

> 这里的改动不会改变你看到的内容——它们改变的是交付有多快、发布有多稳。若需要细节，展开如下。

#### 性能：界面与工作区 {#v1-4-199-perf-ui}

- perf(store): 在 workspace 水合过程中保持仓库列表的 identity（[@nwparker](https://github.com/nwparker)，[#19057](https://github.com/stablyai/orca/pull/19057)）
- perf(tabs): 在 reconciliation 改动其他内容时保持 tab-model 的 identity（[@nwparker](https://github.com/nwparker)，[#19063](https://github.com/stablyai/orca/pull/19063)）
- perf(mobile): 在无变化时跳过 agent-status 投影 join（[@nwparker](https://github.com/nwparker)，[#19115](https://github.com/stablyai/orca/pull/19115)）
- perf(worktrees): 阻止 worktree 移除替换其从未触及的 map（[@nwparker](https://github.com/nwparker)，[#19058](https://github.com/stablyai/orca/pull/19058)）
- perf(selectors): 阻止两个始终挂载的 selector 在每次 store 写入时分配（[@nwparker](https://github.com/nwparker)，[#19113](https://github.com/stablyai/orca/pull/19113)）
- perf(store): 检测当前审计无法看到的 Zustand 重渲染 churn（[@nwparker](https://github.com/nwparker)，[#19059](https://github.com/stablyai/orca/pull/19059)）
- perf(agent-status): 阻止无操作的 retirement 重建 retired-pane-key map（[@nwparker](https://github.com/nwparker)，[#19142](https://github.com/stablyai/orca/pull/19142)）
- perf(worktrees): 阻止 worktree 拆除替换其从未触及的数组与 map（[@nwparker](https://github.com/nwparker)，[#19145](https://github.com/stablyai/orca/pull/19145)）
- perf(renderer): 避免每秒触发 spinner 动画事件（[@OrcaWin](https://github.com/OrcaWin)，[#19407](https://github.com/stablyai/orca/pull/19407)）
- perf: 在选择前台 agent 时记忆化 ancestry（[@OrcaWin](https://github.com/OrcaWin)，[#19502](https://github.com/stablyai/orca/pull/19502)）

#### 性能：终端与远程 {#v1-4-199-perf-terminal}

- perf(terminals): 阻止关闭标签页时替换其从未触及的 map（[@nwparker](https://github.com/nwparker)，[#19060](https://github.com/stablyai/orca/pull/19060)）
- perf(terminals): 在无需清空时保持 shutdown map 的 identity（[@nwparker](https://github.com/nwparker)，[#19112](https://github.com/stablyai/orca/pull/19112)）
- perf(mobile): 缩短中继重连关键路径并更快认定失效套接字（mobile 专项）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19280](https://github.com/stablyai/orca/pull/19280)）
- perf(mobile): 以并行启动 RPC 与预热终端引擎打开会话（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19260](https://github.com/stablyai/orca/pull/19260)）
- perf(mobile): 每次重连从 t=0 起竞速直连与中继拨号（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19308](https://github.com/stablyai/orca/pull/19308)）
- perf(native-chat): 在分页追赶期间限制 journal 读取（[@nwparker](https://github.com/nwparker)，[#19360](https://github.com/stablyai/orca/pull/19360)）
- perf(native-chat): 在流式传输时保留历史 tool 行（[@nwparker](https://github.com/nwparker)，[#19364](https://github.com/stablyai/orca/pull/19364)）

#### 性能：核心与基础设施 {#v1-4-199-perf-core}

- perf: 索引所选 team ID 并在单次遍历中选定主 team（[@OrcaWin](https://github.com/OrcaWin)，[#19504](https://github.com/stablyai/orca/pull/19504)）
- perf: 在无合格编辑器时跳过 Git-status 索引（[@OrcaWin](https://github.com/OrcaWin)，[#19437](https://github.com/stablyai/orca/pull/19437)）
- perf: 在首个匹配 root 处停止文件系统授权（[@OrcaWin](https://github.com/OrcaWin)，[#19438](https://github.com/stablyai/orca/pull/19438)）
- perf: 索引编辑器归属与已恢复的 workspace 投影（[@OrcaWin](https://github.com/OrcaWin)，[#19444](https://github.com/stablyai/orca/pull/19444)）
- perf: 索引项目表选项与迭代顺序（[@OrcaWin](https://github.com/OrcaWin)，[#19476](https://github.com/stablyai/orca/pull/19476)）
- perf: 在首个可用源处停止 clone URL 发现（[@OrcaWin](https://github.com/OrcaWin)，[#19477](https://github.com/stablyai/orca/pull/19477)）
- perf: 仅克隆已变更的 work-item 页面（[@OrcaWin](https://github.com/OrcaWin)，[#19478](https://github.com/stablyai/orca/pull/19478)）
- perf: 对 worker transcript roster 双生使用计数成员关系（[@OrcaWin](https://github.com/OrcaWin)，[#19484](https://github.com/stablyai/orca/pull/19484)）
- perf: 当全部最终自动化运行均可容纳时跳过排序（[@OrcaWin](https://github.com/OrcaWin)，[#19485](https://github.com/stablyai/orca/pull/19485)）
- perf: 解析 Git 历史头而不拆分 commit 正文（[@OrcaWin](https://github.com/OrcaWin)，[#19486](https://github.com/stablyai/orca/pull/19486)）
- perf: 为有界序数保留索引已遗忘的 Codex turn（[@OrcaWin](https://github.com/OrcaWin)，[#19488](https://github.com/stablyai/orca/pull/19488)）
- perf: 缓存已匹配与未匹配的 Claude 用量 cwd 归属（[@OrcaWin](https://github.com/OrcaWin)，[#19489](https://github.com/stablyai/orca/pull/19489)）
- perf: 汇总省略的 workspace 大小且不生成中间对象（[@OrcaWin](https://github.com/OrcaWin)，[#19491](https://github.com/stablyai/orca/pull/19491)）
- perf: 索引 VM 功能恢复并预计算排序 identity（[@OrcaWin](https://github.com/OrcaWin)，[#19457](https://github.com/stablyai/orca/pull/19457)）
- perf: 为批量删除复用规范化路径匹配器（[@OrcaWin](https://github.com/OrcaWin)，[#19458](https://github.com/stablyai/orca/pull/19458)）
- perf: 仅规范化保留的浏览器历史候选项（[@OrcaWin](https://github.com/OrcaWin)，[#19460](https://github.com/stablyai/orca/pull/19460)）
- perf: 在项目 identity 继承期间索引先前成员关系（[@OrcaWin](https://github.com/OrcaWin)，[#19463](https://github.com/stablyai/orca/pull/19463)）
- perf: 预计算 Jira 优先级与时间戳排序键（[@OrcaWin](https://github.com/OrcaWin)，[#19472](https://github.com/stablyai/orca/pull/19472)）
- perf: 每个运行仅解析一次外部自动化日期（[@OrcaWin](https://github.com/OrcaWin)，[#19474](https://github.com/stablyai/orca/pull/19474)）
- perf: 惰性索引不区分大小写的 Windows 环境键（[@OrcaWin](https://github.com/OrcaWin)，[#19483](https://github.com/stablyai/orca/pull/19483)）
- perf: 在不全量排序的情况下选出最高用量合计（[@OrcaWin](https://github.com/OrcaWin)，[#19490](https://github.com/stablyai/orca/pull/19490)）
- perf: 统计 GitLab diff 行前缀而不拆分全部行（[@OrcaWin](https://github.com/OrcaWin)，[#19505](https://github.com/stablyai/orca/pull/19505)）

#### 测试与可靠性 {#v1-4-199-testing}

- test: 在定时 CI 中演练打包浏览器兼容性（[@nwparker](https://github.com/nwparker)，[#19157](https://github.com/stablyai/orca/pull/19157)）
- test: 刷新 palette identity 与 structured-session journal fixture（[@nwparker](https://github.com/nwparker)，[#19165](https://github.com/stablyai/orca/pull/19165)）
- test: 刷新成对 palette 的主机限定行定位器（[@nwparker](https://github.com/nwparker)，[#19175](https://github.com/stablyai/orca/pull/19175)）
- test: 在隔离 CI 中覆盖原生 Wayland Hangul（[@nwparker](https://github.com/nwparker)，[#19174](https://github.com/stablyai/orca/pull/19174)）
- test(e2e): 将成对预览链接检查限定到确认环节（[@nwparker](https://github.com/nwparker)，[#18924](https://github.com/stablyai/orca/pull/18924)）
- test: 在检查镜像前等待已渲染的远程 agent 放置完成（[@nwparker](https://github.com/nwparker)，[#18983](https://github.com/stablyai/orca/pull/18983)）
- test: 将所选 runtime 项目断言限定到侧边栏（[@nwparker](https://github.com/nwparker)，[#19003](https://github.com/stablyai/orca/pull/19003)）
- test: 在关闭标签页时确认正在运行命令的提示（[@nwparker](https://github.com/nwparker)，[#18965](https://github.com/stablyai/orca/pull/18965)）
- test: 为 Linux CI 有界面规格启用软件 WebGL（[@nwparker](https://github.com/nwparker)，[#19001](https://github.com/stablyai/orca/pull/19001)）
- test: 在排空水合 FIFO 前恢复快照路径（[@nwparker](https://github.com/nwparker)，[#19186](https://github.com/stablyai/orca/pull/19186)）
- test: 从成功轮询返回成对浏览器状态（[@nwparker](https://github.com/nwparker)，[#19189](https://github.com/stablyai/orca/pull/19189)）
- test: 使 worker 恢复 fixture 与归属策略对齐（[@nwparker](https://github.com/nwparker)，[#19190](https://github.com/stablyai/orca/pull/19190)）
- fix(test): 修复 main——让 adoption-replay 创建 fixture 通过 structured-chat 门禁（[@nwparker](https://github.com/nwparker)，[#19246](https://github.com/stablyai/orca/pull/19246)）
- fix(test): 为 federation 测试提供真正的读后写同步屏障（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19262](https://github.com/stablyai/orca/pull/19262)）
- test(relay): 证明 pending-conn capability 头能到达 acceptControl（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19274](https://github.com/stablyai/orca/pull/19274)）
- test(ssh): 将 MFA fixture 与开发者真实的 ~/.ssh 隔离（[@brennanb2025](https://github.com/brennanb2025)，[#19300](https://github.com/stablyai/orca/pull/19300)）
- 修复侧边栏创建菜单 E2E 竞态（[@AmethystLiang](https://github.com/AmethystLiang)，[#19448](https://github.com/stablyai/orca/pull/19448)）
- test: 覆盖五个同时洪泛的 SSH 窗格中的输入（[@nwparker](https://github.com/nwparker)，[#19071](https://github.com/stablyai/orca/pull/19071)）
- test: 修复自动化与浏览器 reconciliation 的 e2e 测试（[@AmethystLiang](https://github.com/AmethystLiang)，[#19530](https://github.com/stablyai/orca/pull/19530)）

#### 发布、CI 与文档 {#v1-4-199-release-ci}

- docs(orchestration): 绝不选用用户未点名的 worker 模型（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19109](https://github.com/stablyai/orca/pull/19109)）
- skills: 重写并精简七份非编排指南（未经 Jinwoo 确认勿合并）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18724](https://github.com/stablyai/orca/pull/18724)）
- fix(ci): 阻止 Android 发布说明超出 GitHub body 限制（[@brennanb2025](https://github.com/brennanb2025)，[#19114](https://github.com/stablyai/orca/pull/19114)）
- 更新 mobile 0.0.48 Android 下载链接（[@brennanb2025](https://github.com/brennanb2025)，[#19117](https://github.com/stablyai/orca/pull/19117)）
- 回退「skills: 将七份非编排指南重写为以结果为先的统一标准 (#18724)」（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19126](https://github.com/stablyai/orca/pull/19126)）
- skills: 重写并精简七份非编排指南（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19128](https://github.com/stablyai/orca/pull/19128)）
- 恢复独立的 push gateway 部署（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19225](https://github.com/stablyai/orca/pull/19225)）
- 修复 push 部署源归档路径（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19231](https://github.com/stablyai/orca/pull/19231)）
- 重组 MiniMax 模块并去重共享测试状态（[@nwparker](https://github.com/nwparker)，[#19197](https://github.com/stablyai/orca/pull/19197)）
- tools: 新增 phone-vantage 中继连接基准测试（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19251](https://github.com/stablyai/orca/pull/19251)）
- chore(mobile): 移除过时的 max-lines 例外（[@nwparker](https://github.com/nwparker)，[#19366](https://github.com/stablyai/orca/pull/19366)）
- fix(deps): 更新桌面端解析器以提升安全性并限制资源使用（[@OrcaWin](https://github.com/OrcaWin)，[#19361](https://github.com/stablyai/orca/pull/19361)）
- fix(deps): 加固 cloud HTTP、WebSocket 与构建依赖（[@OrcaWin](https://github.com/OrcaWin)，[#19362](https://github.com/stablyai/orca/pull/19362)）
- chore(mobile): 修补 plist 工具中的 XML 解析器安全问题（[@OrcaWin](https://github.com/OrcaWin)，[#19380](https://github.com/stablyai/orca/pull/19380)）
- chore(docs): 修补花括号展开导致的资源耗尽修复（[@OrcaWin](https://github.com/OrcaWin)，[#19382](https://github.com/stablyai/orca/pull/19382)）
- fix(deps): 更新 react-i18next 以支持 TypeScript 7 与翻译解析（[@OrcaWin](https://github.com/OrcaWin)，[#19378](https://github.com/stablyai/orca/pull/19378)）
- fix(deps): 更新 DOMPurify 以修复 sanitizer 与 document-context 问题（[@OrcaWin](https://github.com/OrcaWin)，[#19377](https://github.com/stablyai/orca/pull/19377)）
- fix(ci): 读取变更路径列表时越过第一个管道缓冲区（[@nwparker](https://github.com/nwparker)，[#19409](https://github.com/stablyai/orca/pull/19409)）
- fix(deps): 将 Electron 升级至 43.6 以改善启动性能并修复崩溃（[@OrcaWin](https://github.com/OrcaWin)，[#19369](https://github.com/stablyai/orca/pull/19369)）
- 在做出更改前于 PR 检查修复提示中核实失败因果关系（[@AmethystLiang](https://github.com/AmethystLiang)，[#19435](https://github.com/stablyai/orca/pull/19435)）

### 新贡献者 {#v1-4-199-contributors}

> 本版本中有六位贡献者向 Orca 提交了首次改动。感谢你们！

- [@Aladex](https://github.com/Aladex) 首次贡献于 [#18634](https://github.com/stablyai/orca/pull/18634)
- [@weekbin](https://github.com/weekbin) 首次贡献于 [#14929](https://github.com/stablyai/orca/pull/14929)
- [@TimothyVang](https://github.com/TimothyVang) 首次贡献于 [#17936](https://github.com/stablyai/orca/pull/17936)
- [@brohoya](https://github.com/brohoya) 首次贡献于 [#11756](https://github.com/stablyai/orca/pull/11756)
- [@blade035](https://github.com/blade035) 首次贡献于 [#17731](https://github.com/stablyai/orca/pull/17731)
- [@kiendle](https://github.com/kiendle) 首次贡献于 [#19170](https://github.com/stablyai/orca/pull/19170)

**完整变更对照：** [v1.4.198...v1.4.199](https://github.com/stablyai/orca/compare/v1.4.198...v1.4.199)
