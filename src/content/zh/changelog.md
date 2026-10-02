# 更新日志 {#changelog}

本页保留最近五次桌面版的**完整中文日志**，不是一句话摘要。打开时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 版本索引 {#index}

| 版本 | 日期 | 标题 |
| --- | --- | --- |
| [v1.4.219](#v1-4-219) | 2026年10月2日 | When a Codex tab ends up sha… |
| [v1.4.218](#v1-4-218) | 2026年9月30日 | Codex 终端可独立服务器，内置更多 Agent |
| [v1.4.217](#v1-4-217) | 2026年9月29日 | Codex 0.158 worker 恢复启动，标签各自独立运行 |
| [v1.4.216](#v1-4-216) | 2026年9月28日 | 窄窗口里状态栏保持单行 |
| [v1.4.215](#v1-4-215) | 2026年9月27日 | Profile 双副本冲突时让用户选择保留哪一份 |

## 完整中文日志 {#full-notes}

## v1.4.219 When a Codex tab ends up sha… {#v1-4-219}

2026年10月2日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.219)

感谢使用 Orca，也感谢一直以来的支持。

This patch is built from the September 30 daily build plus fixes picked from main. Pull requests that landed on main after that are not in this build.

### 简要说明 {#v1-4-219-short}

**Codex terminals:** When a Codex tab ends up sharing one background server with your other Codex tabs, a notice now appears at the top of that tab. On that server, closing one tab can end the others and agent status can be wrong. The notice offers a **Fix** that turns the sharing off and shows the exact command it runs. In a terminal that was opened before the update, it offers to open a new terminal instead. Typing `codex` in a plain fish tab now runs Codex on its own server, as it already did in zsh and bash. Opening a terminal no longer removes Orca's status hook from `~/.codex`. Orca no longer writes a second copy of a folder's trust entry into Codex's `config.toml`, which stopped every `codex` command from working, and it cleans up copies it already wrote. The background Codex usage check no longer clicks "Update now" in Codex's update prompt and leaves Codex broken. Codex also starts without a trust prompt in worktrees of a bare repository. A Codex pane no longer freezes for about a second while you type.

**Folder trust for agents:** When Orca starts Claude Code, Codex, Cursor, Copilot, Qoder, or Antigravity in a folder, it now answers the agent's "Do you trust this folder?" question ahead of time. Orchestration workers, automations, and agents started from your phone no longer get stuck waiting at that prompt. You can turn this off in Settings → Agents → "Trust the folder when Orca starts an agent".

**Agent status:** With several OpenCode 2 panes open, each pane now shows its own Working and Done, not another pane's. On Windows, Claude Code status works again when Claude runs its hooks in Windows PowerShell 5.1. A Codex row stays in the sidebar while Codex runs, even after Codex renames its tab. A freshly started Hermes is shown as ready, not busy.

**Native chat (experimental):** A message you send while the agent is working now waits as a card above the message box, on desktop and on the phone. You can **Steer** it into the running turn, edit it, or delete it. Otherwise it is sent when the turn ends. A subagent's work appears in its own section instead of being mixed into the conversation. `/compact` gets its own row, and an unfinished `/clear` no longer locks the chat. Stop responds faster and no longer shows a false "Cancellation was not confirmed". Pasting text works when you are connected to a remote Orca server.

**Orchestration:** A worker's "I'm done" report is no longer rejected after its conversation is compacted. If Orca is briefly unreachable, the report is retried for about two minutes instead of being lost. `worker-abandon` now settles a stuck worker every time.

**Files and editor:** If you saved a new untitled note and then closed its tab, Orca deleted it. Saved notes are now kept. Clicking in the rich Markdown editor no longer jumps to the top of the file. Open files switch with the system's light and dark mode. Sparse checkouts open the file explorer at the folder you work in.

**Terminal:** Images whose file names have brackets or spaces, like `download (1).png`, now attach to an agent when you drop them in. When dropped files are skipped, the notice tells you why. With many tabs open, the tab you're on stays visible at the edge of the tab bar. Programs like Codex and Claude Code now get the right colors when they start late or in the background.

**Linux and Windows:** On Hyprland, sway, river, and niri, Orca now encrypts saved API keys and tokens when your keyring is running and unlocked. If a credential is saved without encryption, Settings now shows a warning next to it. On Windows, the `orca` command is now a native program, because antivirus kept deleting the old one. It runs without the Visual C++ Redistributable. The installer no longer carries a duplicate copy of Orca's relay files inside the app archive.

**Terminals you already had open:** The new color answers and the `codex` setup in fish tabs take effect in terminals opened after the update. Terminals that were already open keep their old behavior until you open new ones.

### Known issues {#v1-4-219-known-issues}

**Windows on ARM:** The ARM64 package ships an x64 `orca.exe` command-line tool. Windows 11 on ARM runs it under emulation. Windows 10 on ARM can't run it, so the `orca` command does not work there (#24094).

**OpenCode 2:** OpenCode 2 panes that were already running before the update may show no status until you restart OpenCode in them. If you downgrade Orca after this update, duplicate OpenCode status plugins are left behind. After `opencode run` exits, its pane can keep showing "Done"; a fix is pending in #24472.

**Codex:** After you upgrade, Codex launches use Orca's managed Codex home until Codex approves Orca's new status hook. A resumed pane that uses `~/.codex` can pause for up to 30 seconds (#23552).

**Claude folder trust:** Folder pre-trust is on by default (Settings → Agents → "Trust the folder when Orca starts an agent"). On Alpine WSL, Orca can't copy the file permissions it needs, so Claude shows its own trust prompt instead (#23744).

---

### 产品体验 {#v1-4-219-product}

#### Codex & orchestration {#v1-4-219-codex-orchestration}

> Codex tabs warn when they share a server, Codex settings and hooks are no longer damaged, and orchestration worker reports get through more reliably.

- 新增（terminal）：warn when a typed Codex joins Codex's shared server (STA-9051)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24217](https://github.com/stablyai/orca/pull/24217)）
- 新增（terminal）：point an old terminal's Codex shared-server banner at a new terminal (STA-9051)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24501](https://github.com/stablyai/orca/pull/24501)）
- 修复（terminal）：give plain fish tabs Orca's codex function without changing fish's startup（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24284](https://github.com/stablyai/orca/pull/24284)）
- 修复（codex）：opening a terminal no longer strips Codex hooks from the real ~/.codex（[@brennanb2025](https://github.com/brennanb2025)，[#23552](https://github.com/stablyai/orca/pull/23552)）
- 修复（codex）：recognise Codex's quoted spellings in config.toml, and repair Orca's duplicates (#22592)（[@brennanb2025](https://github.com/brennanb2025)，[#23958](https://github.com/stablyai/orca/pull/23958)）
- 修复（codex）：trust the worktree Codex starts in, not a guessed repo root（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23937](https://github.com/stablyai/orca/pull/23937)）
- 修复（rate-limits）：stop driving a hidden Codex TUI to read usage（[@brennanb2025](https://github.com/brennanb2025)，[#23806](https://github.com/stablyai/orca/pull/23806)）
- 修复（codex）：start short-lived Codex app-servers on Windows without cmd.exe（[@brennanb2025](https://github.com/brennanb2025)，[#23830](https://github.com/stablyai/orca/pull/23830)）
- 修复（orchestration）：accept worker reports without the dispatch capability（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23982](https://github.com/stablyai/orca/pull/23982)）
- 修复（orchestration）：stop minting and printing the dispatch capability（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23994](https://github.com/stablyai/orca/pull/23994)）
- 修复（orchestration）：worker-abandon settles a stuck worker and records who did it（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23983](https://github.com/stablyai/orca/pull/23983)）
- 修复（orchestration）：retry worker_done while the Orca runtime is briefly unreachable（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23984](https://github.com/stablyai/orca/pull/23984)）

#### Agents & agent integrations {#v1-4-219-agents-agent-integrations}

> Orca pre-trusts the folder when it starts an agent, OpenCode 2, Claude on Windows, and Hermes report status correctly, and onboarding focuses on installing skills.

- 新增（agents）：pre-trust the folder wherever Orca starts an agent（[@brennanb2025](https://github.com/brennanb2025)，[#23744](https://github.com/stablyai/orca/pull/23744)）
- 修复（claude）：stop Orca making a WSL user's ~/.claude.json world-readable（[@brennanb2025](https://github.com/brennanb2025)，[#23973](https://github.com/stablyai/orca/pull/23973)）
- 修复（opencode）：report OpenCode 2 status from each pane's own TUI（[@brennanb2025](https://github.com/brennanb2025)，[#23722](https://github.com/stablyai/orca/pull/23722)）
- 修复（claude）：run Windows hooks without shell operators（[@brennanb2025](https://github.com/brennanb2025)，[#23944](https://github.com/stablyai/orca/pull/23944)）
- 修复（runtime）：treat Hermes session start as idle, not a running turn（[@nwparker](https://github.com/nwparker)，[#24064](https://github.com/stablyai/orca/pull/24064)）
- 修复（onboarding）：build the agent step around skills, not CLI registration（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22720](https://github.com/stablyai/orca/pull/22720)）

#### Native Chat {#v1-4-219-native-chat}

> Experimental 结构化聊天 queue mid-turn messages as editable cards, give subagents their own sections, and handle Stop, `/compact`, `/clear`, and pasting more reliably.

- 新增（native-chat）：hold mid-turn messages in a host-owned queue（[@brennanb2025](https://github.com/brennanb2025)，[#23726](https://github.com/stablyai/orca/pull/23726)）
- 新增（native-chat）：mid-turn messages wait as editable cards above the composer（[@brennanb2025](https://github.com/brennanb2025)，[#23731](https://github.com/stablyai/orca/pull/23731)）
- 重构（native-chat）：a subagent's rows live in its own section, not in the parent's conversation（[@brennanb2025](https://github.com/brennanb2025)，[#23752](https://github.com/stablyai/orca/pull/23752)）
- 修复（claude）：a restarted provider continues the subagent roster earlier runs journaled（[@brennanb2025](https://github.com/brennanb2025)，[#23758](https://github.com/stablyai/orca/pull/23758)）
- 修复（native-chat）：turn facts come from the turn record, and /compact is a message the chat sends（[@brennanb2025](https://github.com/brennanb2025)，[#23059](https://github.com/stablyai/orca/pull/23059)）
- 修复（native-chat）：an unfinished /clear or refused Codex rewind no longer locks the chat（[@brennanb2025](https://github.com/brennanb2025)，[#23524](https://github.com/stablyai/orca/pull/23524)）
- 修复（native-chat）：a failed turn ends on its error instead of folding it（[@brennanb2025](https://github.com/brennanb2025)，[#23679](https://github.com/stablyai/orca/pull/23679)）
- 修复（codex）：a Codex Stop is the interrupt alone, so it no longer says "Cancellation was not confirmed"（[@brennanb2025](https://github.com/brennanb2025)，[#23850](https://github.com/stablyai/orca/pull/23850)）
- 修复（codex）：say a full Stop wait can overrun quit's eviction budget, and unref its timer（[@brennanb2025](https://github.com/brennanb2025)，[#23859](https://github.com/stablyai/orca/pull/23859)）
- 修复（claude）：a Stop naming the running turn acts at once, and a Stop in the gap is no longer lost（[@brennanb2025](https://github.com/brennanb2025)，[#23861](https://github.com/stablyai/orca/pull/23861)）
- 修复（claude）：a queued message Claude withdrew is settled from Claude's own cancelled event（[@brennanb2025](https://github.com/brennanb2025)，[#23862](https://github.com/stablyai/orca/pull/23862)）
- 修复（codex）：log a late reply to a timed-out request instead of showing it in the chat（[@brennanb2025](https://github.com/brennanb2025)，[#23893](https://github.com/stablyai/orca/pull/23893)）
- 修复：Chat UI paste intake and pane routing（[@brennanb2025](https://github.com/brennanb2025)，[#23784](https://github.com/stablyai/orca/pull/23784)）
- 修复（chat）：decode Claude pastes and report terminal delivery uncertainty（[@brennanb2025](https://github.com/brennanb2025)，[#23788](https://github.com/stablyai/orca/pull/23788)）
- 新增（native-chat）：resuming interrupted chats runs in the status bar（[@brennanb2025](https://github.com/brennanb2025)，[#23778](https://github.com/stablyai/orca/pull/23778)）
- 新增（native-chat）：one structured-chat journal database per host, owned by one process（[@brennanb2025](https://github.com/brennanb2025)，[#23613](https://github.com/stablyai/orca/pull/23613)）

#### 终端 {#v1-4-219-terminal}

> Codex panes no longer freeze while you type, programs get the right colors, and dropped files attach or explain why they were skipped.

- 修复（terminal）：release xterm's DEC 2026 render hold instead of waiting out its 1s timeout（[@nwparker](https://github.com/nwparker)，[#23920](https://github.com/stablyai/orca/pull/23920)）
- 修复（terminal）：the terminal's owner answers colour queries for the terminal's whole life（[@brennanb2025](https://github.com/brennanb2025)，[#23925](https://github.com/stablyai/orca/pull/23925)）
- 修复（terminal）：attach dropped images whose filenames need shell quoting（[@mmarabel](https://github.com/mmarabel)，[#23707](https://github.com/stablyai/orca/pull/23707)）
- 显示：skip reasons in terminal drop upload reports（[@AmethystLiang](https://github.com/AmethystLiang)，[#23951](https://github.com/stablyai/orca/pull/23951)）
- 修复（terminal）：removing a workspace prunes that workspace's close records（[@brennanb2025](https://github.com/brennanb2025)，[#23683](https://github.com/stablyai/orca/pull/23683)）

#### Mobile app & paired clients {#v1-4-219-mobile-app-paired-clients}

> The phone gets the mid-turn message cards, phone swipes no longer type escape text, agents started from the phone follow your chat or terminal choice, and the notification service delivers more phone notifications instead of letting them expire.

- 新增（mobile）：mid-turn messages wait as cards above the phone composer（[@brennanb2025](https://github.com/brennanb2025)，[#23736](https://github.com/stablyai/orca/pull/23736)）
- 修复（terminal）：keep the mouse report format in desktop pane snapshots so phone swipes never type escape text（[@brennanb2025](https://github.com/brennanb2025)，[#23943](https://github.com/stablyai/orca/pull/23943)）
- 修复（mobile）：start + menu, quick command and diff-note agents through agent.launch（[@brennanb2025](https://github.com/brennanb2025)，[#22954](https://github.com/stablyai/orca/pull/22954)）
- 修复（mobile）：stop a closing phone stream from ending the terminal or chat feed that replaced it（[@brennanb2025](https://github.com/brennanb2025)，[#22939](https://github.com/stablyai/orca/pull/22939)）
- 修复（mobile）：the update-mobile wall opens the exact release（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23789](https://github.com/stablyai/orca/pull/23789)）
- 修复（mobile）：count opening a cached page generation as use; cache six hosts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23780](https://github.com/stablyai/orca/pull/23780)）
- 修复（push）：give the push gateway six database connections per instance（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24026](https://github.com/stablyai/orca/pull/24026)）
- 修复（push）：run twelve delivery drains instead of four（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24038](https://github.com/stablyai/orca/pull/24038)）
- 修复（push）：size the claim-attempt budget from the drain count（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24040](https://github.com/stablyai/orca/pull/24040)）

#### 浏览器 {#v1-4-219-browser}

> A browser tab with a phone-size preset always reports the identity of the size actually applied.

- 修复（browser）：a tab's phone identity follows the viewport actually applied（[@brennanb2025](https://github.com/brennanb2025)，[#23812](https://github.com/stablyai/orca/pull/23812)）

#### Tabs & sidebar {#v1-4-219-tabs-sidebar}

> The current tab stays visible in a scrolling tab bar, and a running Codex keeps its sidebar row.

- 修复（tab-bar）：keep the active tab visible when the tab strip scrolls（[@AmethystLiang](https://github.com/AmethystLiang)，[#24010](https://github.com/stablyai/orca/pull/24010)）
- 修复（sidebar）：an agent's row stays while it runs, whatever its tab title（[@brennanb2025](https://github.com/brennanb2025)，[#23948](https://github.com/stablyai/orca/pull/23948)）

#### Editor & files {#v1-4-219-editor-files}

> Saved untitled notes are kept, Markdown clicks no longer jump to the top, open files follow light and dark mode, and sparse checkouts open at a useful folder.

- 修复（editor）：keep saved untitled notes when their tab closes（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23768](https://github.com/stablyai/orca/pull/23768)）
- Revert "fix(markdown): return focus to editor from find bar" (#23175)（[@AmethystLiang](https://github.com/AmethystLiang)，[#24500](https://github.com/stablyai/orca/pull/24500)）
- 修复（editor）：follow system light and dark while the editor tab stays open（[@higherbros](https://github.com/higherbros)，[#23848](https://github.com/stablyai/orca/pull/23848)）
- 新增（explorer）：scope file trees to sparse checkout directories（[@blaksmatic](https://github.com/blaksmatic)，[#18750](https://github.com/stablyai/orca/pull/18750)）

#### Saved credentials {#v1-4-219-saved-credentials}

> On more Linux desktops, saved API keys and tokens are encrypted, and Settings warns when one is stored without encryption.

- 修复（secrets）：seal credentials on Linux desktops Chromium cannot detect（[@nwparker](https://github.com/nwparker)，[#24035](https://github.com/stablyai/orca/pull/24035)）
- 修复（secrets）：stop telling Linux users to install a keyring they already run（[@nwparker](https://github.com/nwparker)，[#24013](https://github.com/stablyai/orca/pull/24013)）
- 新增（secrets）：warn in Settings when a credential is stored unencrypted（[@nwparker](https://github.com/nwparker)，[#24048](https://github.com/stablyai/orca/pull/24048)）

#### Windows & packaging {#v1-4-219-windows-packaging}

> The Windows `orca` command is now a native program that no longer resembles the malware antivirus kept flagging and runs without extra Microsoft runtimes. The app also ships without a duplicate copy of its relay files.

- 修复（windows）：replace the managed CLI launcher with a native one（[@nwparker](https://github.com/nwparker)，[#24094](https://github.com/stablyai/orca/pull/24094)）
- 修复（windows）：link the CLI launcher's C runtime statically so orca.exe runs without the VC++ Redistributable（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24484](https://github.com/stablyai/orca/pull/24484)）
- 修复（packaging）：stop shipping the relay bundles inside app.asar（[@nwparker](https://github.com/nwparker)，[#24027](https://github.com/stablyai/orca/pull/24027)）

#### Reliability & performance {#v1-4-219-reliability-performance}

> Adding or removing a worktree rescans only that project, and fewer git calls block the app.

- 性能（git）：relist only the repo whose worktrees changed, and stop blocking main on sync git（[@nwparker](https://github.com/nwparker)，[#23998](https://github.com/stablyai/orca/pull/23998)）

#### Tests, CI & maintenance {#v1-4-219-tests-ci-maintenance}

> Release builds pass their telemetry check again, the WeChat community link points to the current group, and many tests that could not fail were removed.

- 修复（release）：accept the build identity as a later declarator in the minified telemetry check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24219](https://github.com/stablyai/orca/pull/24219)）
- 重构（shared）：bring constants.ts back under the max-lines limit（[@brennanb2025](https://github.com/brennanb2025)，[#23923](https://github.com/stablyai/orca/pull/23923)）
- 文档（wechat）：point community QR code at group 11（[@AmethystLiang](https://github.com/AmethystLiang)，[#24050](https://github.com/stablyai/orca/pull/24050)）
- 修复（native-chat）：main's draft-queue tests follow #23524's /clear (fixes main)（[@brennanb2025](https://github.com/brennanb2025)，[#23940](https://github.com/stablyai/orca/pull/23940)）
- 测试（e2e）：stop main's static analysis failing on the tab strip test（[@brennanb2025](https://github.com/brennanb2025)，[#24052](https://github.com/stablyai/orca/pull/24052)）
- 测试（mobile）：record RPC goldens without a pinned commit, and check recorded requests against the desktop's params rules（[@brennanb2025](https://github.com/brennanb2025)，[#23732](https://github.com/stablyai/orca/pull/23732)）
- 测试（claude）：run the real Claude CLI tests only when opted in（[@brennanb2025](https://github.com/brennanb2025)，[#23702](https://github.com/stablyai/orca/pull/23702)）
- 测试：unit tests can no longer write a developer's real agent or Orca settings（[@brennanb2025](https://github.com/brennanb2025)，[#23979](https://github.com/stablyai/orca/pull/23979)）
- 测试：open, seed and read the agent-session record store through one test harness（[@brennanb2025](https://github.com/brennanb2025)，[#23986](https://github.com/stablyai/orca/pull/23986)）
- 测试（e2e）：let the completed-worker fake Codex answer the --help probe（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24033](https://github.com/stablyai/orca/pull/24033)）
- Set iceCandidatePoolSize to 0 in WebRTC egress probe（[@AmethystLiang](https://github.com/AmethystLiang)，[#23991](https://github.com/stablyai/orca/pull/23991)）
- 测试：stop testing private internals through exports no caller needs（[@nwparker](https://github.com/nwparker)，[#23829](https://github.com/stablyai/orca/pull/23829)）
- 测试：drop private-internal and boundary-census tests with behavioral owners（[@nwparker](https://github.com/nwparker)，[#23941](https://github.com/stablyai/orca/pull/23941)）
- 测试：retire private-predicate duplicates in the renderer（[@nwparker](https://github.com/nwparker)，[#23945](https://github.com/stablyai/orca/pull/23945)）
- 测试：retire the last private-predicate duplicates in the leaked-internals sweep（[@nwparker](https://github.com/nwparker)，[#23949](https://github.com/stablyai/orca/pull/23949)）
- 测试：stop restating internal tuning constants, keep the ones that are contracts（[@nwparker](https://github.com/nwparker)，[#23950](https://github.com/stablyai/orca/pull/23950)）
- 测试：remove mock echoes and duplicate contracts that only reading finds（[@nwparker](https://github.com/nwparker)，[#23953](https://github.com/stablyai/orca/pull/23953)）
- 测试：retire browser and cookie-import cases their siblings already own（[@nwparker](https://github.com/nwparker)，[#23957](https://github.com/stablyai/orca/pull/23957)）
- 测试：retire renderer pane and completion-cadence cases siblings already own（[@nwparker](https://github.com/nwparker)，[#23961](https://github.com/stablyai/orca/pull/23961)）
- 测试：retire cases whose predicates never read the varied input（[@nwparker](https://github.com/nwparker)，[#23965](https://github.com/stablyai/orca/pull/23965)）
- 测试：retire native-chat cases their fixtures or predicates neutralize（[@nwparker](https://github.com/nwparker)，[#23968](https://github.com/stablyai/orca/pull/23968)）
- 测试：delete a suite that tested only itself, and trim browser-pane duplicates（[@nwparker](https://github.com/nwparker)，[#23971](https://github.com/stablyai/orca/pull/23971)）
- 测试：delete the source-grep tests an earlier detector's regex missed（[@nwparker](https://github.com/nwparker)，[#23976](https://github.com/stablyai/orca/pull/23976)）
- 测试：retire hook and installer cases whose guards or arithmetic cannot fail（[@nwparker](https://github.com/nwparker)，[#23981](https://github.com/stablyai/orca/pull/23981)）
- 测试：retire ai-vault cases whose inputs the scanner never reads（[@nwparker](https://github.com/nwparker)，[#23992](https://github.com/stablyai/orca/pull/23992)）
- 测试：retire codex cases whose setup is inert or whose name outruns its input（[@nwparker](https://github.com/nwparker)，[#23996](https://github.com/stablyai/orca/pull/23996)）
- 测试：retire cli cases that re-run a contract the sibling already owns（[@nwparker](https://github.com/nwparker)，[#24000](https://github.com/stablyai/orca/pull/24000)）
- 测试：retire relay, preload and shared cases that re-prove an owned contract（[@nwparker](https://github.com/nwparker)，[#24007](https://github.com/stablyai/orca/pull/24007)）
- 测试：retire src/main cases that replay a contract their owner already proves（[@nwparker](https://github.com/nwparker)，[#24025](https://github.com/stablyai/orca/pull/24025)）
- 测试：retire src/main/runtime cases that re-prove an owned contract（[@nwparker](https://github.com/nwparker)，[#24043](https://github.com/stablyai/orca/pull/24043)）
- 测试：retire renderer cases whose input cannot reach the behavior they name（[@nwparker](https://github.com/nwparker)，[#24065](https://github.com/stablyai/orca/pull/24065)）
- 测试：retire mobile, cloud, config and e2e cases their input cannot reach（[@nwparker](https://github.com/nwparker)，[#24077](https://github.com/stablyai/orca/pull/24077)）
- 测试：retire long-tail cases whose input cannot reach the behavior they name（[@nwparker](https://github.com/nwparker)，[#24101](https://github.com/stablyai/orca/pull/24101)）
- 测试：retire duplicate cases that replay an owner across a re-export or provider shim（[@nwparker](https://github.com/nwparker)，[#24114](https://github.com/stablyai/orca/pull/24114)）
- 测试：retire backlog cases that assert a shim, a literal, or an unread branch（[@nwparker](https://github.com/nwparker)，[#24120](https://github.com/stablyai/orca/pull/24120)）
- 测试：close the disclosed reading gap in agent-hooks, claude and store slices（[@nwparker](https://github.com/nwparker)，[#24126](https://github.com/stablyai/orca/pull/24126)）
- 测试：retire long-tail cases whose assertion is decided by the test itself（[@nwparker](https://github.com/nwparker)，[#24132](https://github.com/stablyai/orca/pull/24132)）
- 测试：retire cases whose named dimension the production signature cannot express（[@nwparker](https://github.com/nwparker)，[#24139](https://github.com/stablyai/orca/pull/24139)）
- 测试：retire cases whose fixture decides the outcome it asserts（[@nwparker](https://github.com/nwparker)，[#24144](https://github.com/stablyai/orca/pull/24144)）
- 测试：retire cases subsumed by an honestly-named neighbour（[@nwparker](https://github.com/nwparker)，[#24150](https://github.com/stablyai/orca/pull/24150)）

### 新贡献者 {#v1-4-219-contributors}

- [@higherbros](https://github.com/higherbros) 首次贡献于 [#23848](https://github.com/stablyai/orca/pull/23848)

---

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

## v1.4.215 Profile 双副本冲突时让用户选择保留哪一份 {#v1-4-215}

2026年9月27日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.215)

感谢使用 Orca，也感谢一直以来的支持。

这个补丁是 v1.4.214 再加一项修复。v1.4.214 之后合入 main 的 pull request 不在这次构建里。

### 简要说明 {#v1-4-215-short}

**Profile：** 当 JSON 与 SQLite 两份 profile 不一致时，Orca 会询问你保留 SQLite 还是 JSON，并按你的选择应用。

---

### 产品体验 {#v1-4-215-product}

> 两份都能读，但内容不一致。Orca 会显示每份的最后保存时间，让你选一份，而不是丢给你一条要自己跑的命令。

- 新增：profile 的 JSON 与 SQLite 副本不一致时，让用户选择保留哪一份（[@OrcaWin](https://github.com/OrcaWin)，[#23278](https://github.com/stablyai/orca/pull/23278)）

---

**完整变更对照：** [v1.4.214...v1.4.215](https://github.com/stablyai/orca/compare/v1.4.214...v1.4.215)
