# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.215](#v1-4-215) | 2026年9月27日 | When the JSON and SQLite cop… |
| [v1.4.214](#v1-4-214) | 2026年9月26日 | Interactive `.ipynb` noteboo… |
| [v1.4.212](#v1-4-212) | 2026年9月25日 | 官方更新 |

### v1.4.215 · When the JSON and SQLite cop… {#v1-4-215-summary}

2026年9月27日 · [本页全文](#v1-4-215) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.215)

- Profile： When the JSON and SQLite copies of your profile disagree, Orca asks whether to keep SQLite or JSON and applies that choice for you.
- ---

### v1.4.214 · Interactive `.ipynb` noteboo… {#v1-4-214-summary}

2026年9月26日 · [本页全文](#v1-4-214) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.214)

- Notebooks： Interactive `.ipynb` notebooks now render natively with click-to-edit cells, backed by a persistent Jupyter kernel, automatic virtual environment setup when pip is locked out, and trust boundaries before workspace interpreter execution.
- Agents & chat： Native chat displays real-time context window usage in the composer, adds a hover copy button to sent messages, auto-loads older history on scroll, and lets Codex 0.157+ start cleanly in Orca-managed homes without path-length failures (`SUN_LEN`). Subagent and child work status is tracked across Codex, Claude, Pi, and Grok, while ZCode joins as a first-class supported harness.
- Terminal, editor & workspaces： Single terminal panes gain an explicit close button, remounted SSH tabs keep spawning their shell, and managed WSL terminals automatically provide the Orca CLI. Workspace folder toggles are instant, AI notes UI is revamped, and large file identities on Windows stay distinct.

### v1.4.212 · 官方更新 {#v1-4-212-summary}

2026年9月25日 · [本页全文](#v1-4-212) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.212)

- 详见下方完整中文日志。

## 完整中文日志 {#full-notes}

## v1.4.215 When the JSON and SQLite cop… {#v1-4-215}

2026年9月27日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.215)

感谢使用 Orca，也感谢一直以来的支持。

This patch is v1.4.214 plus one fix. Pull requests that landed on main after v1.4.214 are not in this build.

### 简要说明 {#v1-4-215-short}

**Profile:** When the JSON and SQLite copies of your profile disagree, Orca asks whether to keep SQLite or JSON and applies that choice for you.

---

### 产品体验 {#v1-4-215-product}

> Both copies are readable, but they disagree. Orca shows each copy's last-saved time and lets you pick one, instead of handing you a command to run.

- 新增：let users choose JSON or SQLite when profile copies diverge（[@OrcaWin](https://github.com/OrcaWin)，[#23278](https://github.com/stablyai/orca/pull/23278)）

---

**完整变更对照：** [v1.4.214...v1.4.215](https://github.com/stablyai/orca/compare/v1.4.214...v1.4.215)

## v1.4.214 Interactive `.ipynb` noteboo… {#v1-4-214}

2026年9月26日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.214)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-214-short}

**Notebooks:** Interactive `.ipynb` notebooks now render natively with click-to-edit cells, backed by a persistent Jupyter kernel, automatic virtual environment setup when pip is locked out, and trust boundaries before workspace interpreter execution.

**Agent 与聊天：** Native chat displays real-time context window usage in the composer, adds a hover copy button to sent messages, auto-loads older history on scroll, and lets Codex 0.157+ start cleanly in Orca-managed homes without path-length failures (`SUN_LEN`). Subagent and child work status is tracked across Codex, Claude, Pi, and Grok, while ZCode joins as a first-class supported harness.

**Terminal, editor & workspaces:** Single terminal panes gain an explicit close button, remounted SSH tabs keep spawning their shell, and managed WSL terminals automatically provide the Orca CLI. Workspace folder toggles are instant, AI notes UI is revamped, and large file identities on Windows stay distinct.

**Persistence & performance:** Profile storage migrates to SQLite with background writes and bundled Bun for headless Orca. Bundled ripgrep powers local, WSL, and SSH searches, while concurrent transcript reads, readiness probes, and terminal marker scans receive major latency cuts.

**Remote, relay & browser:** Regional rehome operators accept newer production cells, relay drain times prevent dropped connections, and browser pixel captures only wait when required.

**Mobile:** The mobile OTA experience gains native safe area ownership, smoother streamed browser pane handling, Android live input echo fixes, and persistent machine naming after pairing.

---

### 产品体验 {#v1-4-214-product}

#### Notebooks {#v1-4-214-notebooks}

> Interactive notebooks render with editable cells, run in a persistent Jupyter kernel, set up virtual environments automatically, and respect workspace trust.

- 新增（ipynb）：render notebooks like a notebook, with seamless click-to-edit cells（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22519](https://github.com/stablyai/orca/pull/22519)）
- 新增（ipynb）：run notebook cells in a persistent Jupyter kernel（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22581](https://github.com/stablyai/orca/pull/22581)）
- 新增（ipynb）：create a .venv when pip is locked out, and show ipykernel setup progress（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22710](https://github.com/stablyai/orca/pull/22710)）
- 修复（ipynb）：run no workspace interpreter until the notebook is trusted（[@brennanb2025](https://github.com/brennanb2025)，[#22962](https://github.com/stablyai/orca/pull/22962)）

#### Agents, chat & launches {#v1-4-214-agents-chat-launches}

> Context window usage appears directly in the composer, Codex 0.157+ boots cleanly in Orca-managed homes, child work and subagents stay transparent, and ZCode joins as a supported harness.

- 修复（ai-vault-search）：detach buffered transcript rows（[@OrcaWin](https://github.com/OrcaWin)，[#22545](https://github.com/stablyai/orca/pull/22545)）
- 修复（native-chat）：underline only file links a click can act on（[@brennanb2025](https://github.com/brennanb2025)，[#22370](https://github.com/stablyai/orca/pull/22370)）
- 修复（opencode2）：block the pane on every session-owned form（[@nwparker](https://github.com/nwparker)，[#22548](https://github.com/stablyai/orca/pull/22548)）
- 新增（native-chat）：one shell-environment setting for every 结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#22387](https://github.com/stablyai/orca/pull/22387)）
- 修复（ai-vault-search）：own buffered transcript rows before they pin the parent（[@nwparker](https://github.com/nwparker)，[#22563](https://github.com/stablyai/orca/pull/22563)）
- 新增（agent-launch）：let a caller reserve the chat session, and start terminal launches with the session picks（[@brennanb2025](https://github.com/brennanb2025)，[#22523](https://github.com/stablyai/orca/pull/22523)）
- 修复（native-chat）：dock the task strip on the goal tab（[@brennanb2025](https://github.com/brennanb2025)，[#22530](https://github.com/stablyai/orca/pull/22530)）
- 修复（opencode-usage）：merge a migrated session's two rows per column（[@nwparker](https://github.com/nwparker)，[#22550](https://github.com/stablyai/orca/pull/22550)）
- 新增（agent-status）：publish the main agent's own state beside the combined row state（[@brennanb2025](https://github.com/brennanb2025)，[#22452](https://github.com/stablyai/orca/pull/22452)）
- 修复（opencode）：give the opencode2 status plugin a distinct id（[@nwparker](https://github.com/nwparker)，[#22544](https://github.com/stablyai/orca/pull/22544)）
- 修复（agents）：stop claiming an unconfirmed OpenCode handoff succeeded（[@nwparker](https://github.com/nwparker)，[#22546](https://github.com/stablyai/orca/pull/22546)）
- 修复（claude）：resume a Native Chat from its real latest message（[@brennanb2025](https://github.com/brennanb2025)，[#22395](https://github.com/stablyai/orca/pull/22395)）
- 修复（opencode2）：resolve subagent session lineage so child work stops taking over the pane（[@nwparker](https://github.com/nwparker)，[#22444](https://github.com/stablyai/orca/pull/22444)）
- 修复（rate-limits）：read OpenCode Go usage with the Go API key（[@nwparker](https://github.com/nwparker)，[#22551](https://github.com/stablyai/orca/pull/22551)）
- 修复（native-chat）：show every user message on the message rail, not just loaded ones（[@brennanb2025](https://github.com/brennanb2025)，[#22558](https://github.com/stablyai/orca/pull/22558)）
- 修复（native-chat）：keep chats that failed to resume in the status bar and say what to do（[@brennanb2025](https://github.com/brennanb2025)，[#22448](https://github.com/stablyai/orca/pull/22448)）
- 新增（agent-status）：combine Codex child work through the shared main-agent status fold（[@brennanb2025](https://github.com/brennanb2025)，[#22475](https://github.com/stablyai/orca/pull/22475)）
- 修复（orchestration）：type a request ahead of pasted dispatch briefs so Claude workers follow them（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22582](https://github.com/stablyai/orca/pull/22582)）
- 修复（opencode）：retire a subagent's blocker when the root turn ends（[@nwparker](https://github.com/nwparker)，[#22604](https://github.com/stablyai/orca/pull/22604)）
- 新增（native-chat）：show context window usage in the composer（[@brennanb2025](https://github.com/brennanb2025)，[#22301](https://github.com/stablyai/orca/pull/22301)）
- 修复（agent-status）：count only agent work in stats, and read a Grok background subagent as working（[@brennanb2025](https://github.com/brennanb2025)，[#22474](https://github.com/stablyai/orca/pull/22474)）
- 修复（native-chat）：load older messages automatically before the reader reaches the top（[@brennanb2025](https://github.com/brennanb2025)，[#22541](https://github.com/stablyai/orca/pull/22541)）
- 修复（native-chat）：record which Codex agent produced each journal row（[@brennanb2025](https://github.com/brennanb2025)，[#22532](https://github.com/stablyai/orca/pull/22532)）
- 新增（native-chat）：add a hover copy button to sent messages（[@brennanb2025](https://github.com/brennanb2025)，[#22721](https://github.com/stablyai/orca/pull/22721)）
- 新增（agent-session）：let the host own a chat's tab id and let a create reserve it（[@brennanb2025](https://github.com/brennanb2025)，[#22616](https://github.com/stablyai/orca/pull/22616)）
- 修复（claude）：open 结构化聊天 without a startup deadline, and make Retry start fresh（[@brennanb2025](https://github.com/brennanb2025)，[#22364](https://github.com/stablyai/orca/pull/22364)）
- 修复（skills）：recognize symlinked provider skill roots（[@aaryanporwal](https://github.com/aaryanporwal)，[#22606](https://github.com/stablyai/orca/pull/22606)）
- 修复（native-chat）：date a session by its own lifecycle, not its subagents' work（[@brennanb2025](https://github.com/brennanb2025)，[#22520](https://github.com/stablyai/orca/pull/22520)）
- 修复（agent-launch）：a cwd at the workspace root no longer forces a terminal（[@brennanb2025](https://github.com/brennanb2025)，[#22729](https://github.com/stablyai/orca/pull/22729)）
- 修复（pi）：stop pi-subagents workflows from pinning a pane on working（[@mmarabel](https://github.com/mmarabel)，[#22533](https://github.com/stablyai/orca/pull/22533)）
- 修复（agent-history）：list older Pi sessions in Workspace and Project views（[@mmarabel](https://github.com/mmarabel)，[#22482](https://github.com/stablyai/orca/pull/22482)）
- 修复（agent-status）：end a Claude helper's turn when an API error stops it（[@brennanb2025](https://github.com/brennanb2025)，[#22745](https://github.com/stablyai/orca/pull/22745)）
- 修复（pi）：isolate status ownership in new terminals（[@mmarabel](https://github.com/mmarabel)，[#22717](https://github.com/stablyai/orca/pull/22717)）
- 修复（agent-status）：a cancel never hides live work（[@brennanb2025](https://github.com/brennanb2025)，[#22476](https://github.com/stablyai/orca/pull/22476)）
- 修复（codex）：a Codex Native Chat that never sent a message reopens after restart（[@brennanb2025](https://github.com/brennanb2025)，[#22639](https://github.com/stablyai/orca/pull/22639)）
- 新增（agent-status）：child work records say what the child is doing, how it ended, and when（[@brennanb2025](https://github.com/brennanb2025)，[#22521](https://github.com/stablyai/orca/pull/22521)）
- 修复（native-chat）：show the Codex and Claude model picker the moment a chat opens（[@brennanb2025](https://github.com/brennanb2025)，[#22756](https://github.com/stablyai/orca/pull/22756)）
- 修复（native-chat）：offer a resume for every chat that was working, and say what it was doing（[@brennanb2025](https://github.com/brennanb2025)，[#22560](https://github.com/stablyai/orca/pull/22560)）
- 修复（terminal）：make Codex restart replace the pane's process instead of reattaching it（[@brennanb2025](https://github.com/brennanb2025)，[#22737](https://github.com/stablyai/orca/pull/22737)）
- 修复（native-chat）：keep the background-task strip above a pending prompt card（[@brennanb2025](https://github.com/brennanb2025)，[#22779](https://github.com/stablyai/orca/pull/22779)）
- 新增（agents）：add first-class ZCode harness（[@nwparker](https://github.com/nwparker)，[#22464](https://github.com/stablyai/orca/pull/22464)）
- 新增（zcode）：explain a ZCode build that has no terminal UI（[@nwparker](https://github.com/nwparker)，[#22730](https://github.com/stablyai/orca/pull/22730)）
- 重构（native-chat）：remove the unused terminal handoff（[@brennanb2025](https://github.com/brennanb2025)，[#22783](https://github.com/stablyai/orca/pull/22783)）
- 修复（claude）：let a Claude chat start again after its root exited with unverifiable descendants（[@brennanb2025](https://github.com/brennanb2025)，[#22802](https://github.com/stablyai/orca/pull/22802)）
- 修复（native-chat）：keep an idle chat alive while its subagents or background commands run（[@brennanb2025](https://github.com/brennanb2025)，[#22794](https://github.com/stablyai/orca/pull/22794)）
- 新增（native-chat）：Claude sessions write their subagents into the host status store（[@brennanb2025](https://github.com/brennanb2025)，[#22536](https://github.com/stablyai/orca/pull/22536)）
- 新增（feature-tips）：one-time tip for agent session search（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22923](https://github.com/stablyai/orca/pull/22923)）
- 修复（codex）：Codex 0.157+ starts in Orca-managed homes instead of failing with SUN_LEN（[@OrcaWin](https://github.com/OrcaWin)，[#22878](https://github.com/stablyai/orca/pull/22878)）
- 修复（claude）：prove a stopped chat's child processes gone when they exit with it（[@brennanb2025](https://github.com/brennanb2025)，[#22918](https://github.com/stablyai/orca/pull/22918)）
- 修复（native-chat）：send typed question answers as structured answers, not an option id（[@brennanb2025](https://github.com/brennanb2025)，[#22793](https://github.com/stablyai/orca/pull/22793)）
- 重构（agent-session）：keep which conversation each chat tab shows in one host table（[@brennanb2025](https://github.com/brennanb2025)，[#22709](https://github.com/stablyai/orca/pull/22709)）
- 修复（claude）：end a Claude chat on its root's exit even when a descendant survived（[@brennanb2025](https://github.com/brennanb2025)，[#22946](https://github.com/stablyai/orca/pull/22946)）
- 修复（native-chat）：every journal append reaches the chats that are open（[@brennanb2025](https://github.com/brennanb2025)，[#22811](https://github.com/stablyai/orca/pull/22811)）
- 修复（native-chat）：report a chat's owner from its record, not its running agent（[@brennanb2025](https://github.com/brennanb2025)，[#22808](https://github.com/stablyai/orca/pull/22808)）
- 修复（native-chat）：name a chat write by its target, not the owner generation（[@brennanb2025](https://github.com/brennanb2025)，[#22812](https://github.com/stablyai/orca/pull/22812)）
- 新增（rate-limits）：add Cursor usage tracking（[@nwparker](https://github.com/nwparker)，[#22633](https://github.com/stablyai/orca/pull/22633)）
- 修复（native-chat）：keep terminal pane chat ownership stable（[@OrcaWin](https://github.com/OrcaWin)，[#22984](https://github.com/stablyai/orca/pull/22984)）
- 修复（native-chat）：preserve current pane ownership through toggles and restore（[@OrcaWin](https://github.com/OrcaWin)，[#23049](https://github.com/stablyai/orca/pull/23049)）
- Accept repeated leading BOMs in agent hooks（[@nwparker](https://github.com/nwparker)，[#22414](https://github.com/stablyai/orca/pull/22414)）
- 修复（agents）：honor environment prefixes in generation commands（[@nwparker](https://github.com/nwparker)，[#22427](https://github.com/stablyai/orca/pull/22427)）
- 修复（native-chat）：every lease latch has a way to die（[@brennanb2025](https://github.com/brennanb2025)，[#22820](https://github.com/stablyai/orca/pull/22820)）
- 修复（codex）：retain runtime MCP entries without losing revocation（[@nwparker](https://github.com/nwparker)，[#22426](https://github.com/stablyai/orca/pull/22426)）
- 修复（native-chat）：keep chat visible when detaching its pane（[@OrcaWin](https://github.com/OrcaWin)，[#23096](https://github.com/stablyai/orca/pull/23096)）
- 修复（vault）：read OpenCode SQLite inside WSL and SSH hosts（[@OrcaWin](https://github.com/OrcaWin)，[#23128](https://github.com/stablyai/orca/pull/23128)）
- Better add ai notes ui（[@AmethystLiang](https://github.com/AmethystLiang)，[#21719](https://github.com/stablyai/orca/pull/21719)）

#### 终端 {#v1-4-214-terminal}

> Single panes gain an explicit close button, remounted SSH tabs keep spawning their shell, Linux IMEs handle candidate preedits, and managed WSL terminals automatically provide the Orca CLI.

- 重构（tabs）：delete the terminal tab's dead adopted-session field（[@brennanb2025](https://github.com/brennanb2025)，[#22557](https://github.com/stablyai/orca/pull/22557)）
- 修复（terminal）：let Linux IMEs keep the candidate key for a preedit they own（[@nwparker](https://github.com/nwparker)，[#22607](https://github.com/stablyai/orca/pull/22607)）
- 修复（daemon）：rebase durable checkpoints on the live terminal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22732](https://github.com/stablyai/orca/pull/22732)）
- 修复（terminal）：one process-boundary ground for every known or proven boundary（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22735](https://github.com/stablyai/orca/pull/22735)）
- 修复（terminal）：ground a program that dies with input modes armed on the normal screen（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22739](https://github.com/stablyai/orca/pull/22739)）
- 修复（terminal）：prove an idle Git Bash prompt through its bin launcher（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22752](https://github.com/stablyai/orca/pull/22752)）
- 修复（terminal）：serialize only the visible width after a column shrink（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22586](https://github.com/stablyai/orca/pull/22586)）
- 修复（terminal）：stop dropping visible alt-screen output tagged as hidden-resize repaint（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22587](https://github.com/stablyai/orca/pull/22587)）
- 显示：close button for single terminal panes（[@AmethystLiang](https://github.com/AmethystLiang)，[#22770](https://github.com/stablyai/orca/pull/22770)）
- Provide the Orca CLI automatically in managed WSL terminals（[@OrcaWin](https://github.com/OrcaWin)，[#22761](https://github.com/stablyai/orca/pull/22761)）
- 修复（terminal）：damp park-verdict churn that is too slow to burst（[@OrcaWin](https://github.com/OrcaWin)，[#20851](https://github.com/stablyai/orca/pull/20851)）
- 等待：for foreground job readiness before testing Ctrl-Z（[@OrcaWin](https://github.com/OrcaWin)，[#23158](https://github.com/stablyai/orca/pull/23158)）
- 重构（pty）：make renderer delivery optional for headless runtimes（[@OrcaWin](https://github.com/OrcaWin)，[#23117](https://github.com/stablyai/orca/pull/23117)）

#### Editor, workspaces & startup {#v1-4-214-editor-workspaces-startup}

> Folder toggles respond instantly, startup window activation and CJK Windows ACLs are stabilized, worktree catalogs are versioned, and machine identities stay distinct across Windows and remote runtimes.

- 修复：explain Xcode-blocked Git once in the sidebar and rescan on return（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22552](https://github.com/stablyai/orca/pull/22552)）
- 新增：name runtime machines（[@brennanb2025](https://github.com/brennanb2025)，[#22094](https://github.com/stablyai/orca/pull/22094)）
- 回退：#18790 (orchestration incarnation reap fallback and bundled Freebuff agent)（[@brennanb2025](https://github.com/brennanb2025)，[#22601](https://github.com/stablyai/orca/pull/22601)）
- 修复（file-explorer）：toggle folder instantly on name click（[@LesleyMurfin](https://github.com/LesleyMurfin)，[#22325](https://github.com/stablyai/orca/pull/22325)）
- 修复（worktrees）：version every catalog publication so a stale listing cannot undo a create（[@brennanb2025](https://github.com/brennanb2025)，[#22507](https://github.com/stablyai/orca/pull/22507)）
- 修复（floating-workspace）：keep agent launches from moving the main window's tab（[@brennanb2025](https://github.com/brennanb2025)，[#22603](https://github.com/stablyai/orca/pull/22603)）
- 重构（orchestration）：give structured sessions an orchestration actor column（[@brennanb2025](https://github.com/brennanb2025)，[#22522](https://github.com/stablyai/orca/pull/22522)）
- 修复（feedback）：send text-only report when screenshots exceed the upload limit（[@mmarabel](https://github.com/mmarabel)，[#22508](https://github.com/stablyai/orca/pull/22508)）
- 修复（desktop）：release a Native Chat when you leave it, so its idle clock can start（[@brennanb2025](https://github.com/brennanb2025)，[#22801](https://github.com/stablyai/orca/pull/22801)）
- 修复（runtime-environments）：don't crash when a server removed via the CLI still responds（[@mmarabel](https://github.com/mmarabel)，[#22517](https://github.com/stablyai/orca/pull/22517)）
- 重构（orchestration）：resolve every caller and target to one orchestration party, keyed by the Orca session id（[@brennanb2025](https://github.com/brennanb2025)，[#22555](https://github.com/stablyai/orca/pull/22555)）
- 修复（worktrees）：keep failed orphan cleanup retryable（[@nwparker](https://github.com/nwparker)，[#22409](https://github.com/stablyai/orca/pull/22409)）
- 修复：stop process-tree loops（[@nwparker](https://github.com/nwparker)，[#22411](https://github.com/stablyai/orca/pull/22411)）
- 修复（editor）：highlight scoped dotenv filenames on desktop and mobile（[@nwparker](https://github.com/nwparker)，[#22416](https://github.com/stablyai/orca/pull/22416)）
- 修复（editor）：use the bundled ABAP grammar（[@nwparker](https://github.com/nwparker)，[#22417](https://github.com/stablyai/orca/pull/22417)）
- 修复（cli）：preserve the WSL distro when adding managed accounts（[@nwparker](https://github.com/nwparker)，[#22418](https://github.com/stablyai/orca/pull/22418)）
- 修复（jira）：bypass collection caches on explicit refresh（[@nwparker](https://github.com/nwparker)，[#22419](https://github.com/stablyai/orca/pull/22419)）
- 修复（pdf）：keep the search counter in sync with selected matches（[@nwparker](https://github.com/nwparker)，[#22420](https://github.com/stablyai/orca/pull/22420)）
- 修复（projects）：refresh stale automatic GitHub icons during enrichment（[@nwparker](https://github.com/nwparker)，[#22421](https://github.com/stablyai/orca/pull/22421)）
- 保留：Kimi config permissions（[@nwparker](https://github.com/nwparker)，[#22422](https://github.com/stablyai/orca/pull/22422)）
- 修复（toast）：keep folder errors above standard modal backdrops（[@nwparker](https://github.com/nwparker)，[#22423](https://github.com/stablyai/orca/pull/22423)）
- 保持：large Windows file identities distinct（[@nwparker](https://github.com/nwparker)，[#22424](https://github.com/stablyai/orca/pull/22424)）
- 修复（tasks）：read a malformed saved Linear team selection as sticky-all instead of crashing the page（[@OrcaWin](https://github.com/OrcaWin)，[#22279](https://github.com/stablyai/orca/pull/22279)）
- 修复（types）：describe command environments independently of Expo globals（[@OrcaWin](https://github.com/OrcaWin)，[#23073](https://github.com/stablyai/orca/pull/23073)）
- Prioritize workspace opening over replacement checkout preparation（[@nwparker](https://github.com/nwparker)，[#23013](https://github.com/stablyai/orca/pull/23013)）
- 修复（sidebar）："Hide default branch" hides a folder project's root workspace（[@OrcaWin](https://github.com/OrcaWin)，[#22744](https://github.com/stablyai/orca/pull/22744)）
- 修复（startup）：hold desktop activations until the startup window exists（[@OrcaWin](https://github.com/OrcaWin)，[#22495](https://github.com/stablyai/orca/pull/22495)）
- 修复（startup）：read the install-dir package ACL as SDDL so a repaired folder reads clean on Chinese/Japanese/Korean Windows（[@OrcaWin](https://github.com/OrcaWin)，[#22490](https://github.com/stablyai/orca/pull/22490)）
- 修复（windows）：reuse shared PowerShell literal quoting at every hand-rolled escaper（[@OrcaWin](https://github.com/OrcaWin)，[#23083](https://github.com/stablyai/orca/pull/23083)）
- Leave Open Settings unbound by default（[@nwparker](https://github.com/nwparker)，[#23136](https://github.com/stablyai/orca/pull/23136)）
- 修复（markdown）：return focus to editor from find bar（[@nwparker](https://github.com/nwparker)，[#23175](https://github.com/stablyai/orca/pull/23175)）
- 修复：route hook files through their stored repository owner（[@nwparker](https://github.com/nwparker)，[#23184](https://github.com/stablyai/orca/pull/23184)）
- 修复：stop retired folder watchers from starting Git upgrades（[@nwparker](https://github.com/nwparker)，[#23144](https://github.com/stablyai/orca/pull/23144)）
- 修复：preserve conflicting folders when local import creation fails（[@nwparker](https://github.com/nwparker)，[#23101](https://github.com/stablyai/orca/pull/23101)）
- 修复：reject expired updater feed selections（[@nwparker](https://github.com/nwparker)，[#23160](https://github.com/stablyai/orca/pull/23160)）
- 修复：stop abandoned local attachment checks after composer unmount（[@nwparker](https://github.com/nwparker)，[#23075](https://github.com/stablyai/orca/pull/23075)）

#### Persistence & performance {#v1-4-214-persistence-performance}

> Profile storage shifts to SQLite with background writes and Bun bundling, concurrent reads and readiness probes are deduplicated, and lingering file watchers and caches are cleanly released.

- Persist profile state in SQLite with background writes（[@OrcaWin](https://github.com/OrcaWin)，[#22612](https://github.com/stablyai/orca/pull/22612)）
- 性能（ci）：reduce queue pressure without paid runners（[@OrcaWin](https://github.com/OrcaWin)，[#23053](https://github.com/stablyai/orca/pull/23053)）
- Bundle Bun for headless Orca and profile persistence（[@OrcaWin](https://github.com/OrcaWin)，[#22635](https://github.com/stablyai/orca/pull/22635)）
- 修复（persistence）：reclaim Windows profile locks after PID reuse（[@OrcaWin](https://github.com/OrcaWin)，[#23122](https://github.com/stablyai/orca/pull/23122)）
- 性能（chat）：share matching concurrent transcript reads（[@nwparker](https://github.com/nwparker)，[#23172](https://github.com/stablyai/orca/pull/23172)）
- 性能（editor）：skip unchanged draft publications（[@nwparker](https://github.com/nwparker)，[#23173](https://github.com/stablyai/orca/pull/23173)）
- 修复（renderer）：release retired store snapshots from selector caches（[@OrcaWin](https://github.com/OrcaWin)，[#23187](https://github.com/stablyai/orca/pull/23187)）
- Cancel abandoned renderer-owned reads（[@nwparker](https://github.com/nwparker)，[#22986](https://github.com/stablyai/orca/pull/22986)）
- 性能（terminal）：avoid intermediate history frame buffers（[@nwparker](https://github.com/nwparker)，[#23005](https://github.com/stablyai/orca/pull/23005)）
- 性能（terminal）：scan synchronized markers in linear work（[@nwparker](https://github.com/nwparker)，[#23015](https://github.com/stablyai/orca/pull/23015)）
- 性能（editor）：skip unchanged cursor-line store writes（[@nwparker](https://github.com/nwparker)，[#22983](https://github.com/stablyai/orca/pull/22983)）
- 重构（persistence）：retire ordinary JSON profile writes（[@OrcaWin](https://github.com/OrcaWin)，[#23202](https://github.com/stablyai/orca/pull/23202)）
- Release failed filesystem watcher setup records（[@nwparker](https://github.com/nwparker)，[#22995](https://github.com/stablyai/orca/pull/22995)）
- 性能（renderer）：release unrelated state during cache saves（[@nwparker](https://github.com/nwparker)，[#23021](https://github.com/stablyai/orca/pull/23021)）
- 性能：avoid copying unchanged artifact share records（[@nwparker](https://github.com/nwparker)，[#23141](https://github.com/stablyai/orca/pull/23141)）
- 性能：reuse Muse usage filters within each snapshot（[@nwparker](https://github.com/nwparker)，[#23179](https://github.com/stablyai/orca/pull/23179)）
- 性能：reuse target membership within folder lineage filtering（[@nwparker](https://github.com/nwparker)，[#23185](https://github.com/stablyai/orca/pull/23185)）
- 修复：release chunked download resources with their renderer（[@nwparker](https://github.com/nwparker)，[#23108](https://github.com/stablyai/orca/pull/23108)）
- 修复：close file watcher probes after failed writes（[@nwparker](https://github.com/nwparker)，[#23124](https://github.com/stablyai/orca/pull/23124)）
- 性能：retire removed worktree head failure markers（[@nwparker](https://github.com/nwparker)，[#23135](https://github.com/stablyai/orca/pull/23135)）
- Release cursor positions with editor tab ownership（[@nwparker](https://github.com/nwparker)，[#22988](https://github.com/stablyai/orca/pull/22988)）
- 性能（persistence）：serialize selective SQLite saves once（[@nwparker](https://github.com/nwparker)，[#23171](https://github.com/stablyai/orca/pull/23171)）
- Release SQLite transaction queues when startup fails（[@nwparker](https://github.com/nwparker)，[#22993](https://github.com/stablyai/orca/pull/22993)）
- 性能：reuse fresh selected folder checks on unrelated expiry（[@nwparker](https://github.com/nwparker)，[#23087](https://github.com/stablyai/orca/pull/23087)）

#### Remote, SSH & relay {#v1-4-214-remote-ssh-relay}

> Regional rehome operators accept newer production cells, relay drain times prevent dropped connections, and SSH pending layouts survive reconnects.

- 修复（relay）：accept production cells past c29 in the regional rehome operator（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22518](https://github.com/stablyai/orca/pull/22518)）
- 修复（relay）：drain a same-cap cell over 5 minutes, not 2（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22584](https://github.com/stablyai/orca/pull/22584)）
- 新增（search）：bundle ripgrep for local, WSL, and SSH search（[@nwparker](https://github.com/nwparker)，[#22396](https://github.com/stablyai/orca/pull/22396)）
- 修复（web）：keep Remote Web loading over plain HTTP without crypto.randomUUID（[@mmarabel](https://github.com/mmarabel)，[#22516](https://github.com/stablyai/orca/pull/22516)）
- 保留：pending SSH terminal layout edits（[@OrcaWin](https://github.com/OrcaWin)，[#22991](https://github.com/stablyai/orca/pull/22991)）
- 修复（terminal）：a remounted new SSH tab keeps the shell its old pane was still spawning（[@OrcaWin](https://github.com/OrcaWin)，[#22578](https://github.com/stablyai/orca/pull/22578)）
- 性能（relay）：share concurrent readiness probes（[@nwparker](https://github.com/nwparker)，[#23012](https://github.com/stablyai/orca/pull/23012)）
- 性能（relay）：skip abandoned queued control activation（[@nwparker](https://github.com/nwparker)，[#23029](https://github.com/stablyai/orca/pull/23029)）
- 性能：avoid duplicate base64 decode on SSH uploads（[@nwparker](https://github.com/nwparker)，[#23093](https://github.com/stablyai/orca/pull/23093)）
- 修复：stop retired relay load connections from rescheduling refreshes（[@nwparker](https://github.com/nwparker)，[#23071](https://github.com/stablyai/orca/pull/23071)）

#### 浏览器 {#v1-4-214-browser}

> Pixel captures only wait when necessary, empty Chromium cookies import cleanly, and settings search cataloging avoids redundant work.

- 修复（browser）：only pixel-capturing commands wait for the page to be drawn（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22528](https://github.com/stablyai/orca/pull/22528)）
- 修复（browser）：let pixel capture hold its own page drawn, without the desktop window（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22534](https://github.com/stablyai/orca/pull/22534)）
- 重构（browser）：remove the unused screenshot-prep visibility helper（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22526](https://github.com/stablyai/orca/pull/22526)）
- 修复（browser）：import empty-value Chromium cookies instead of their domain hash（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22719](https://github.com/stablyai/orca/pull/22719)）
- 性能：build browser settings search catalog once per render（[@nwparker](https://github.com/nwparker)，[#23155](https://github.com/stablyai/orca/pull/23155)）
- 性能：stream the packaged browser installer checksum in CI（[@nwparker](https://github.com/nwparker)，[#23082](https://github.com/stablyai/orca/pull/23082)）

#### Mobile (OTA page) {#v1-4-214-mobile-ota-page-}

> The over-the-air page gains native safe areas, smoother streamed browser panes, Android live input fixes, and persistent machine naming after pairing.

- 修复（mobile）：keep the shell's window insets out of the page WebView (OTA phase C follow-up)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22549](https://github.com/stablyai/orca/pull/22549)）
- 修复（mobile）：route the bottom drawer's keyboard through the platform seam (OTA phase C follow-up)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22556](https://github.com/stablyai/orca/pull/22556)）
- 修复（mobile-web）：page inputs lose the browser focus ring and hairlines draw one device pixel (OTA phase C follow-up)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22569](https://github.com/stablyai/orca/pull/22569)）
- 新增（mobile）：the page owns its safe area, like a native screen (OTA phase C follow-up)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22570](https://github.com/stablyai/orca/pull/22570)）
- 测试（mobile）：repin the recording corpus to main's tip after #22570（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22576](https://github.com/stablyai/orca/pull/22576)）
- 修复（mobile）：keep the streamed browser pane flipping on slow phones, and stop double taps（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22392](https://github.com/stablyai/orca/pull/22392)）
- 测试（mobile）：repin the RPC recording corpus and session closure after #22392（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22702](https://github.com/stablyai/orca/pull/22702)）
- 修复（mobile）：restart the streamed browser pane on every return to the app（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22694](https://github.com/stablyai/orca/pull/22694)）
- 文档：update translated Android APK links to 0.0.50（[@AmethystLiang](https://github.com/AmethystLiang)，[#22740](https://github.com/stablyai/orca/pull/22740)）
- 新增（mobile）：name the machine after pairing（[@brennanb2025](https://github.com/brennanb2025)，[#22104](https://github.com/stablyai/orca/pull/22104)）
- 修复（mobile）：the page's terminal shows its last rows above the command dock (OTA phase C follow-up)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22806](https://github.com/stablyai/orca/pull/22806)）
- 修复（mobile）：keep terminal input working when reopening worktrees（[@shaharmor](https://github.com/shaharmor)，[#22505](https://github.com/stablyai/orca/pull/22505)）
- 修复（mobile）：the page's Live input on Android echoes each letter as typed (OTA phase C follow-up)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22958](https://github.com/stablyai/orca/pull/22958)）
- 修复（mobile）：a terminal opens once at the phone's size, on the page and natively (OTA phase C follow-up)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22960](https://github.com/stablyai/orca/pull/22960)）
- 修复（mobile）：update fflate for security advisory（[@nwparker](https://github.com/nwparker)，[#22961](https://github.com/stablyai/orca/pull/22961)）
- 修复（mobile）：give each host field one writer so relay routing can't revert edits（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22956](https://github.com/stablyai/orca/pull/22956)）
- 重构（mobile）：the live input's composing range comes from a platform seam pair（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23037](https://github.com/stablyai/orca/pull/23037)）
- 测试（mobile）：repin RPC goldens to main after #22956's squash（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23046](https://github.com/stablyai/orca/pull/23046)）
- 修复（mobile）：label direct paths with the shared Tailscale check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23039](https://github.com/stablyai/orca/pull/23039)）

#### Internationalization (i18n) {#v1-4-214-internationalization-i18n-}

> Translations expand across Spanish, French, Japanese, Korean, and Chinese with corrected turn statuses and localized artifact search.

- 修复（i18n）：add missing translations for artifacts and browsing（[@AmethystLiang](https://github.com/AmethystLiang)，[#22697](https://github.com/stablyai/orca/pull/22697)）
- 修复（i18n）：align ko artifacts search keyword with value override（[@AmethystLiang](https://github.com/AmethystLiang)，[#22711](https://github.com/stablyai/orca/pull/22711)）
- 文档：restore translated README assets reverted by stale APK bump（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22755](https://github.com/stablyai/orca/pull/22755)）
- 修复（docs）：update translated readme asset and WeChat links（[@AmethystLiang](https://github.com/AmethystLiang)，[#22763](https://github.com/stablyai/orca/pull/22763)）
- 杂项（i18n）：translate 85 new keys to es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#22746](https://github.com/stablyai/orca/pull/22746)）
- 杂项（i18n）：translate 113 new keys to es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#23067](https://github.com/stablyai/orca/pull/23067)）
- 修复（i18n）：correct duration and turn-status copy across locales（[@AmethystLiang](https://github.com/AmethystLiang)，[#23243](https://github.com/stablyai/orca/pull/23243)）

#### Tests, CI & documentation {#v1-4-214-tests-ci-documentation}

> Redundant CI workflows and runner queues are trimmed, test isolation improves across worktrees and runtimes, and documentation is updated.

- 测试（file-search）：pin request-key listings against the real runtime shape（[@AmethystLiang](https://github.com/AmethystLiang)，[#22312](https://github.com/stablyai/orca/pull/22312)）
- 测试（runtime）：stop worker-recovery retries from scanning inside later tests（[@nwparker](https://github.com/nwparker)，[#22567](https://github.com/stablyai/orca/pull/22567)）
- 文档：remove duplicate Muse badge from README（[@FumingPower3925](https://github.com/FumingPower3925)，[#22497](https://github.com/stablyai/orca/pull/22497)）
- 测试（runtime）：isolate per-repo worktree scan expiry from the shared timer queue（[@brennanb2025](https://github.com/brennanb2025)，[#22575](https://github.com/stablyai/orca/pull/22575)）
- 测试（opencode）：cover the opencode2 host-env branch and stop inheriting ORCA_OPENCODE_AGENT（[@nwparker](https://github.com/nwparker)，[#22547](https://github.com/stablyai/orca/pull/22547)）
- 文档（tui-agent-config）：correct the OpenCode readiness-budget rationale（[@nwparker](https://github.com/nwparker)，[#22593](https://github.com/stablyai/orca/pull/22593)）
- 测试（terminal）：pin Option-composed currency on a punctuation key（[@nwparker](https://github.com/nwparker)，[#22608](https://github.com/stablyai/orca/pull/22608)）
- 测试：remove redundant mobile and GitLab checks（[@AmethystLiang](https://github.com/AmethystLiang)，[#22748](https://github.com/stablyai/orca/pull/22748)）
- 修复（release）：run the tag's own skill freshness inventory tests in the release gate（[@brennanb2025](https://github.com/brennanb2025)，[#22775](https://github.com/stablyai/orca/pull/22775)）
- 修复（lint）：include .mts and .cts in line-limit checks（[@nwparker](https://github.com/nwparker)，[#22413](https://github.com/stablyai/orca/pull/22413)）
- Simplify .map().flat() to .flatMap() in onboarding tests（[@AmethystLiang](https://github.com/AmethystLiang)，[#22917](https://github.com/stablyai/orca/pull/22917)）
- 杂项（deps）：refresh maintained dependencies（[@nwparker](https://github.com/nwparker)，[#22964](https://github.com/stablyai/orca/pull/22964)）
- 测试（terminal）：re-pin the pane hook-order parity past #23049（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23090](https://github.com/stablyai/orca/pull/23090)）
- CI：verify mobile disposal and balance unit-test costs（[@OrcaWin](https://github.com/OrcaWin)，[#23114](https://github.com/stablyai/orca/pull/23114)）
- 减小：redundant CI runs, pnpm uploads, and fixture startups（[@OrcaWin](https://github.com/OrcaWin)，[#23145](https://github.com/stablyai/orca/pull/23145)）
- 改进：pull request template for issue linking by @nwparker in https://github.com/stablyai/orca/commit/d3434a2
- Optimize CI follow-up workflows（[@OrcaWin](https://github.com/OrcaWin)，[#23190](https://github.com/stablyai/orca/pull/23190)）
- Simplify filter-flatMap patterns to single flatMap operations（[@AmethystLiang](https://github.com/AmethystLiang)，[#23242](https://github.com/stablyai/orca/pull/23242)）

### 新贡献者 {#v1-4-214-contributors}

- [@FumingPower3925](https://github.com/FumingPower3925) 首次贡献于 [#22497](https://github.com/stablyai/orca/pull/22497)
- [@aaryanporwal](https://github.com/aaryanporwal) 首次贡献于 [#22606](https://github.com/stablyai/orca/pull/22606)

**完整变更对照：** [v1.4.212...v1.4.214](https://github.com/stablyai/orca/compare/v1.4.212...v1.4.214)

## v1.4.212 官方更新 {#v1-4-212}

2026年9月25日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.212)

### Agent 与 Native Chat {#v1-4-212-native-chat}

- 修复（codex）：Codex 0.157+ starts in Orca-managed homes instead of failing with SUN_LEN（[@OrcaWin](https://github.com/OrcaWin)，[#22878](https://github.com/stablyai/orca/pull/22878)）

**完整变更对照：** [v1.4.211...v1.4.212](https://github.com/stablyai/orca/compare/v1.4.211...v1.4.212)
