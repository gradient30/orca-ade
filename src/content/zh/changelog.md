# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.205](#v1-4-205) | 2026年9月17日 | Agent 与聊天： |
| [v1.4.204](#v1-4-204) | 2026年9月16日 | Agent 与聊天： |
| [v1.4.203](#v1-4-203) | 2026年9月15日 | Electron 安全修复，侧栏嵌套，移动推送回归 |

### v1.4.205 · Agent 与聊天： {#v1-4-205-summary}

2026年9月17日 · [本页全文](#v1-4-205) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.205)

- Agent 与聊天：
- Workspaces, editor & source control:
- Terminal & remote:

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

## 完整中文日志 {#full-notes}

## v1.4.205 Agent 与聊天： {#v1-4-205}

2026年9月17日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.205)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-205-short}

**Agent 与聊天：** Native chat adds a message rail for jumping between your prompts, keeps a resumed transcript pinned to its end, holds a detached reader in place as messages grow, and cancels pending prompts precisely. OMP conversations resume from session history under their saved names, agent-status ingress moves behind a single admission point, and a timed-out hook now actually terminates its process tree.

**Workspaces, editor & source control:** A failed archive hook blocks worktree removal instead of deleting anyway, and worktree registrations survive prunable git-file states. Stage, unstage and discard failures surface with retry, automations repair cron step expansion and stop tick latency counting against the missed-run grace, code blocks gain a copy button, and Tiptap moves up behind Markdown compatibility guards.

**Terminal & remote:** Terminal renames survive pane hydration, handles persist across PTY incarnation rotation, and PTY child-process checks preserve an unverifiable verdict instead of guessing. Relay failures become diagnosable by acquisition versus execution phase, and streamed remote records are bounded.

**Performance:** Codex usage scans do far less work — attribution resolved once per scan, and grown rollouts resumed at the last parsed byte — which takes a large cold scan from minutes to under a minute. They still run on the main process; the worker-thread move lands in a later release.

---

### 产品体验 {#v1-4-205-product}

#### Workspaces, tabs & editor {#v1-4-205-workspaces-tabs-editor}

> Safer worktree removal, clearer failure reporting, and a Tiptap upgrade with Markdown compatibility guards.

- 新增：copy button to code blocks（[@AmethystLiang](https://github.com/AmethystLiang)，[#20357](https://github.com/stablyai/orca/pull/20357)）
- 修复（composer）：clarify failed attachment drops（[@AmethystLiang](https://github.com/AmethystLiang)，[#20704](https://github.com/stablyai/orca/pull/20704)）
- Distinguish pane load failures from empty states（[@AmethystLiang](https://github.com/AmethystLiang)，[#20735](https://github.com/stablyai/orca/pull/20735)）
- 修复（worktrees）：safely remove prunable git-file registrations（[@nwparker](https://github.com/nwparker)，[#20617](https://github.com/stablyai/orca/pull/20617)）
- 修复（worktrees）：preserve unverifiable disk witness（[@AmethystLiang](https://github.com/AmethystLiang)，[#20713](https://github.com/stablyai/orca/pull/20713)）
- 修复（worktree）：block removal when the archive hook fails（[@nwparker](https://github.com/nwparker)，[#20153](https://github.com/stablyai/orca/pull/20153)）
- 修复（automations）：repair cron step expansion and day restriction [HELD — semantic half]（[@nwparker](https://github.com/nwparker)，[#20202](https://github.com/stablyai/orca/pull/20202)）
- 修复（automations）：stop tick latency counting against the missed-run grace（[@nwparker](https://github.com/nwparker)，[#20819](https://github.com/stablyai/orca/pull/20819)）
- 改进：microphone permission errors and drop failure reporting（[@AmethystLiang](https://github.com/AmethystLiang)，[#20801](https://github.com/stablyai/orca/pull/20801)）
- Report clipboard and composer drop failures（[@AmethystLiang](https://github.com/AmethystLiang)，[#20795](https://github.com/stablyai/orca/pull/20795)）
- 修复（deps）：migrate Tiptap security updates with Markdown compatibility guards（[@OrcaWin](https://github.com/OrcaWin)，[#19376](https://github.com/stablyai/orca/pull/19376)）
- 新增（design-system）：gate renderer UI with @shadcn/lint（[@nwparker](https://github.com/nwparker)，[#20731](https://github.com/stablyai/orca/pull/20731)）
- 修复（ui）：contain idle caret paint so agent panes stop burning CPU（[@innocarpe](https://github.com/innocarpe)，[#10554](https://github.com/stablyai/orca/pull/10554)）

#### Source control {#v1-4-205-source-control}

> Staging failures are recoverable and Git spawn errors say what actually went wrong.

- Surface stage, unstage and discard failures with retry capability（[@AmethystLiang](https://github.com/AmethystLiang)，[#20423](https://github.com/stablyai/orca/pull/20423)）
- 修复（source-control）：prevent text wrapping in section headers and action buttons（[@AmethystLiang](https://github.com/AmethystLiang)，[#20046](https://github.com/stablyai/orca/pull/20046)）
- 修复（git）：distinguish binary absence from missing cwd on spawn ENOENT（[@AmethystLiang](https://github.com/AmethystLiang)，[#20798](https://github.com/stablyai/orca/pull/20798)）

### Agent 与工作流 {#v1-4-205-agents-workflow}

#### Agent 可靠性与 Native Chat {#v1-4-205-agent-reliability}

> Chat navigation and transcript positioning improve, and agent state is reported through one ingress point.

- 修复（native-chat）：bound a dispatch reason before it reaches the journal row（[@brennanb2025](https://github.com/brennanb2025)，[#20654](https://github.com/stablyai/orca/pull/20654)）
- 修复（native-chat）：keep a resumed transcript pinned to its end（[@brennanb2025](https://github.com/brennanb2025)，[#20651](https://github.com/stablyai/orca/pull/20651)）
- 修复（codex）：settle a structured send on admission, and stop minting a colliding identity（[@brennanb2025](https://github.com/brennanb2025)，[#20138](https://github.com/stablyai/orca/pull/20138)）
- 修复（omp）：preserve status after terminal title owner rewrite（[@nwparker](https://github.com/nwparker)，[#20610](https://github.com/stablyai/orca/pull/20610)）
- 修复（agents）：find OMP by its full project name（[@nwparker](https://github.com/nwparker)，[#20647](https://github.com/stablyai/orca/pull/20647)）
- 修复（omp）：preserve saved conversation names in session history（[@nwparker](https://github.com/nwparker)，[#20636](https://github.com/stablyai/orca/pull/20636)）
- 修复（agent-session）：honour the backup-recovery fence floor on surface release（[@brennanb2025](https://github.com/brennanb2025)，[#20708](https://github.com/stablyai/orca/pull/20708)）
- 修复（hooks）：actually terminate a timed-out hook's process tree（[@nwparker](https://github.com/nwparker)，[#20576](https://github.com/stablyai/orca/pull/20576)）
- 修复（native-chat）：cancel pending prompts precisely（[@brennanb2025](https://github.com/brennanb2025)，[#20601](https://github.com/stablyai/orca/pull/20601)）
- 修复：resume OMP child conversations from session history（[@nwparker](https://github.com/nwparker)，[#20629](https://github.com/stablyai/orca/pull/20629)）
- 修复（ai-vault）：expand nested OMP session history（[@nwparker](https://github.com/nwparker)，[#20663](https://github.com/stablyai/orca/pull/20663)）
- 修复（native-chat）：let a reader park just above the latest message（[@brennanb2025](https://github.com/brennanb2025)，[#20709](https://github.com/stablyai/orca/pull/20709)）
- 修复（native-chat）：preserve detached transcript position during growth（[@brennanb2025](https://github.com/brennanb2025)，[#20710](https://github.com/stablyai/orca/pull/20710)）
- 新增（native-chat）：add a message rail for jumping between your prompts（[@brennanb2025](https://github.com/brennanb2025)，[#20719](https://github.com/stablyai/orca/pull/20719)）
- 重构（agent-status）：isolate legacy status ingress behind one admission point（[@brennanb2025](https://github.com/brennanb2025)，[#20716](https://github.com/stablyai/orca/pull/20716)）
- 修复（runtime）：apply the tui-idle evidence ranking to mailbox delivery（[@nwparker](https://github.com/nwparker)，[#20578](https://github.com/stablyai/orca/pull/20578)）
- 修复（orchestration）：require the registered pane key to prove structured worker identity（[@brennanb2025](https://github.com/brennanb2025)，[#20664](https://github.com/stablyai/orca/pull/20664)）

#### 终端 {#v1-4-205-terminal}

> Renames, handles and PTY verdicts survive rotation, hydration and uncertainty.

- 修复（omp）：preserve zsh startup with global aliases（[@nwparker](https://github.com/nwparker)，[#20621](https://github.com/stablyai/orca/pull/20621)）
- 修复（terminal）：retain renames before renderer pane hydration（[@nwparker](https://github.com/nwparker)，[#20619](https://github.com/stablyai/orca/pull/20619)）
- 修复：keep OMP terminals when folder workspaces become Git repos（[@nwparker](https://github.com/nwparker)，[#20653](https://github.com/stablyai/orca/pull/20653)）
- 修复：PTY child process verdict to preserve unverifiable state（[@AmethystLiang](https://github.com/AmethystLiang)，[#20729](https://github.com/stablyai/orca/pull/20729)）
- 修复（runtime）：preserve terminal handles across PTY incarnation rotation（[@nwparker](https://github.com/nwparker)，[#20779](https://github.com/stablyai/orca/pull/20779)）
- 修复（pty）：preserve child-process inspection uncertainty（[@AmethystLiang](https://github.com/AmethystLiang)，[#20756](https://github.com/stablyai/orca/pull/20756)）

#### 移动端 {#v1-4-205-mobile}

> Mobile continues its typed-RPC migration.

- Bump mobile app.json to 0.0.50（[@brennanb2025](https://github.com/brennanb2025)，[#20661](https://github.com/stablyai/orca/pull/20661)）
- 重构（mobile）：migrate the small domains onto RpcOperation (step 4)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20705](https://github.com/stablyai/orca/pull/20705)）

#### 中继与云端 {#v1-4-205-relay-cloud}

> Relay failures are diagnosable by phase, and streamed remote records are bounded.

- 修复（ai-vault）：bound streamed remote JSONL records（[@nwparker](https://github.com/nwparker)，[#20700](https://github.com/stablyai/orca/pull/20700)）
- 新增（runtime）：stream file uploads instead of buffering whole files（[@mmarabel](https://github.com/mmarabel)，[#16106](https://github.com/stablyai/orca/pull/16106)）
- Expose preloaded PostgreSQL statement statistics for relay diagnostics（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20712](https://github.com/stablyai/orca/pull/20712)）
- Diagnose relay PostgreSQL failures by acquisition versus execution phase（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20749](https://github.com/stablyai/orca/pull/20749)）
- 修复（relay）：open the real null device when detaching Windows stdio（[@nwparker](https://github.com/nwparker)，[#20808](https://github.com/stablyai/orca/pull/20808)）

### 质量与交付 {#v1-4-205-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能改进 {#v1-4-205-perf-improvements}

> Targeted optimizations remove repeated work from the Codex, OpenCode and Claude usage scanners and from no-op store updates. These reduce the cost of a scan; they do not yet move it off the main process.

Highlights include resolving each cwd's worktree once per scan rather than per event, resuming grown Codex rollouts at the last parsed byte behind a boundary digest and inode check, and preserving state identity across no-op updater paths so selectors stop re-running.

- 修复（store）：stop two no-op writes from re-running every selector in the app（[@OrcaWin](https://github.com/OrcaWin)，[#20641](https://github.com/stablyai/orca/pull/20641)）
- 修复（store）：preserve state identity across no-op updater paths（[@nwparker](https://github.com/nwparker)，[#20703](https://github.com/stablyai/orca/pull/20703)）
- 性能（usage）：resolve each cwd's worktree once per scan（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21130](https://github.com/stablyai/orca/pull/21130)）
- 性能（codex-usage）：resume rollout scans at the last parsed byte（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21102](https://github.com/stablyai/orca/pull/21102)）

#### 可靠性、测试与交付 {#v1-4-205-reliability-tests}

- 修复（ci）：stop hourly versions dropping below a tagged or already-shipped build（[@nwparker](https://github.com/nwparker)，[#20699](https://github.com/stablyai/orca/pull/20699)）
- 测试：add a verified OMP native-chat mock scenario（[@nwparker](https://github.com/nwparker)，[#20655](https://github.com/stablyai/orca/pull/20655)）
- 测试（mobile）：pin each RPC golden to the recorder inputs that can reach it, not the whole directory（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20662](https://github.com/stablyai/orca/pull/20662)）
- CI：keep the baseline Git build off the compatibility matrix lanes（[@nwparker](https://github.com/nwparker)，[#20733](https://github.com/stablyai/orca/pull/20733)）
- 修复（ci）：stop defining pilot mutant tests inside a conditional（[@nwparker](https://github.com/nwparker)，[#20755](https://github.com/stablyai/orca/pull/20755)）
- 测试（native-chat）：split the windowing test harness out of the suite（[@nwparker](https://github.com/nwparker)，[#20773](https://github.com/stablyai/orca/pull/20773)）
- 杂项（lint）：add anti-slop oxlint plugin (pinned, all rules off)（[@nwparker](https://github.com/nwparker)，[#20726](https://github.com/stablyai/orca/pull/20726)）
- 杂项（lint）：enable anti-slop no-reduce-accumulator-copy and no-widen-then-assert（[@nwparker](https://github.com/nwparker)，[#20780](https://github.com/stablyai/orca/pull/20780)）
- 修复（lint）：keep root postinstall as the sole Electron binary install owner（[@nwparker](https://github.com/nwparker)，[#20788](https://github.com/stablyai/orca/pull/20788)）
- 测试（package）：let the postinstall contract allow unrelated chained steps（[@nwparker](https://github.com/nwparker)，[#20787](https://github.com/stablyai/orca/pull/20787)）
- 修复（lint）：enable anti-slop/no-unknown-type-aliases（[@nwparker](https://github.com/nwparker)，[#20784](https://github.com/stablyai/orca/pull/20784)）
- 重构（lint）：enable anti-slop/no-reflect-apply（[@nwparker](https://github.com/nwparker)，[#20782](https://github.com/stablyai/orca/pull/20782)）
- 修复（lint）：enable anti-slop/no-module-mocking（[@nwparker](https://github.com/nwparker)，[#20783](https://github.com/stablyai/orca/pull/20783)）
- 测试（package）：reject an Electron install takeover by exact command（[@nwparker](https://github.com/nwparker)，[#20799](https://github.com/stablyai/orca/pull/20799)）
- 修复（lint）：enable anti-slop/no-reflect-get（[@nwparker](https://github.com/nwparker)，[#20786](https://github.com/stablyai/orca/pull/20786)）
- 修复（lint）：enable anti-slop/no-object-parameters（[@nwparker](https://github.com/nwparker)，[#20781](https://github.com/stablyai/orca/pull/20781)）
- 修复（lint）：enable anti-slop/no-shape-in-symbol-names（[@nwparker](https://github.com/nwparker)，[#20785](https://github.com/stablyai/orca/pull/20785)）
- 修复（git）：avoid Windows tree kills after the command has exited（[@nwparker](https://github.com/nwparker)，[#20606](https://github.com/stablyai/orca/pull/20606)）
- 构建（release）：compile the Windows relay process-table addon（[@nwparker](https://github.com/nwparker)，[#20809](https://github.com/stablyai/orca/pull/20809)）

**完整变更对照：** [v1.4.204...v1.4.205](https://github.com/stablyai/orca/compare/v1.4.204...v1.4.205)

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
