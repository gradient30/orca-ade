# 更新日志 {#changelog}

本页保留最近五次桌面版的**完整中文日志**，不是一句话摘要。打开时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 版本索引 {#index}

| 版本 | 日期 | 标题 |
| --- | --- | --- |
| [v1.4.220](#v1-4-220) | 2026年10月4日 | - Native chat (experimental)… |
| [v1.4.219](#v1-4-219) | 2026年10月2日 | Codex 共用服务器会提示，启动 Agent 时预信任文件夹 |
| [v1.4.218](#v1-4-218) | 2026年9月30日 | Codex 终端可独立服务器，内置更多 Agent |
| [v1.4.217](#v1-4-217) | 2026年9月29日 | Codex 0.158 worker 恢复启动，标签各自独立运行 |
| [v1.4.216](#v1-4-216) | 2026年9月28日 | 窄窗口里状态栏保持单行 |

## 完整中文日志 {#full-notes}

## v1.4.220 - Native chat (experimental)… {#v1-4-220}

2026年10月4日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.220)

感谢使用 Orca，也感谢一直以来的支持。

This patch is built from the October 2 daily build plus fixes picked from main. Pull requests that landed on main after that are not in this build.

### 简要说明 {#v1-4-220-short}

- **Native chat (experimental):** The **"Stop" button** ends Claude's process, including background commands and subagents. If Codex refuses or never answers a stop request, Orca ends it too. Unsent messages stay unsent until Retry, steered messages are not duplicated, and interrupted turns show a clearer status.
- **Chat polish:** `/clear` switches chats immediately; the first message starts the new agent. Codex connection retries update one warning instead of stacking errors. You can send AI notes to open chats, and older Orca versions preserve newer chat histories as read-only.
- **Agent status:** Esc cancellation settles Codex panes promptly, while Ctrl+C used to copy or leave `/side` no longer looks like an interruption. OpenCode shows failed and stopped turns correctly. Slow SSH connections no longer make agents look gone.
- **Usage meters:** Antigravity shows its own quota without Gemini CLI sign-in or spending quota to check. Cursor sign-in checks no longer freeze on large databases or mistake a refused usage request for an expired login.
- **Workspaces:** Creation is faster in large repositories, removal no longer stalls chat or files, and a workspace finishing in the background no longer switches your view. Local `main` updates are safer, and sidebar host tags can be hidden.
- **SSH hosts:** An optional Orca runtime works without Node, npm, or a compiler on the host; **Auto** remains the default. Standard Windows SSH accounts work, and keystrokes typed during terminal reconnection are kept.
- **Screenshot drops:** Mac screenshot thumbnails can now be dropped into a local Claude Code terminal or the new-workspace composer. Orca gives the agent a readable copy of the temporary image; previously, some drops looked successful but the screenshot never reached Claude Code.
- **Terminals and files:** macOS Option shortcuts reach terminal apps, background terminals return to their original tab, and wide paired-server panes use their full width. Huge Markdown previews no longer freeze Orca; review-note visibility and shell-file highlighting are fixed.
- **Stability and tools:** Orca recovers from several Linux and Windows crash loops and retries failed window launches. The first Windows browser command no longer hangs, the iOS simulator works with Xcode 27, and `orca file open` stays in your current view unless given `--focus`.

Terminals open before this update keep using the previous background service; new terminals use the new one.

### Known issues {#v1-4-220-known-issues}

**Windows on ARM:** The ARM64 package ships an x64 `orca.exe` command-line tool. Windows 11 on ARM runs it under emulation. Windows 10 on ARM can't run it, so the `orca` command does not work there (#24094).

**OpenCode 2:** OpenCode 2 panes that were already running before the update may show no status until you restart OpenCode in them. If you downgrade Orca after this update, duplicate OpenCode status plugins are left behind. After `opencode run` exits, its pane can keep showing "Done"; a fix is pending in #24472.

**Codex:** After you upgrade, Codex launches use Orca's managed Codex home until Codex approves Orca's new status hook. A resumed pane that uses `~/.codex` can pause for up to 30 seconds (#23552).

**Claude folder trust:** Folder pre-trust is on by default (Settings → Agents → "Trust the folder when Orca starts an agent"). On Alpine WSL, Orca can't copy the file permissions it needs, so Claude shows its own trust prompt instead (#23744).

---

### 产品体验 {#v1-4-220-product}

#### Native Chat {#v1-4-220-native-chat}

> Experimental 结构化聊天 stop reliably, never send a message you were told was not sent, report crashed turns honestly, and keep their history when an older Orca opens them.

- 修复（claude）：a Stop ends Claude's process, and the next message resumes the conversation（[@brennanb2025](https://github.com/brennanb2025)，[#24235](https://github.com/stablyai/orca/pull/24235)）
- 修复（native-chat）：a Codex Stop that Codex refuses or never answers ends the Codex process（[@brennanb2025](https://github.com/brennanb2025)，[#24334](https://github.com/stablyai/orca/pull/24334)）
- 修复（native-chat）：after a Stop whose exit can't be confirmed, the next message retries the stop instead of failing（[@brennanb2025](https://github.com/brennanb2025)，[#24333](https://github.com/stablyai/orca/pull/24333)）
- 修复（native-chat）：Stop's pause is worked out from the chat's history, so a steered message is never re-sent（[@brennanb2025](https://github.com/brennanb2025)，[#24072](https://github.com/stablyai/orca/pull/24072)）
- 修复（native-chat）：a message the chat said was not sent is never sent later on its own（[@brennanb2025](https://github.com/brennanb2025)，[#24232](https://github.com/stablyai/orca/pull/24232)）
- 修复（native-chat）：a Stop still reads as yours after Orca restarts, because the turn's end reads the Stop's event（[@brennanb2025](https://github.com/brennanb2025)，[#24311](https://github.com/stablyai/orca/pull/24311)）
- 修复（agent-status）：a turn a crash cut off reads Interrupted, an unproven end Couldn't confirm（[@brennanb2025](https://github.com/brennanb2025)，[#23467](https://github.com/stablyai/orca/pull/23467)）
- 修复（claude）：end a message Claude started but never confirmed, and keep Claude running while it holds one（[@brennanb2025](https://github.com/brennanb2025)，[#23898](https://github.com/stablyai/orca/pull/23898)）
- 修复（codex）：steer a mid-turn send into the running turn by name（[@brennanb2025](https://github.com/brennanb2025)，[#21062](https://github.com/stablyai/orca/pull/21062)）
- 修复（native-chat）：every chat action press is its own action (re-land #23916 on main)（[@brennanb2025](https://github.com/brennanb2025)，[#24301](https://github.com/stablyai/orca/pull/24301)）
- 修复（native-chat）：/clear starts nothing; the new chat's first message starts its agent（[@brennanb2025](https://github.com/brennanb2025)，[#23935](https://github.com/stablyai/orca/pull/23935)）
- 修复（native-chat）：chat failure messages appear in the app's language（[@brennanb2025](https://github.com/brennanb2025)，[#23674](https://github.com/stablyai/orca/pull/23674)）
- 修复（native-chat）：a Codex stream retry is one warning row that updates in place（[@brennanb2025](https://github.com/brennanb2025)，[#23684](https://github.com/stablyai/orca/pull/23684)）
- 修复（native-chat）：a failed Codex turn shows its error, not a raw thread-status row（[@brennanb2025](https://github.com/brennanb2025)，[#23704](https://github.com/stablyai/orca/pull/23704)）
- 修复（claude）：an informational note is a warning row in its own words, never a raw frame row（[@brennanb2025](https://github.com/brennanb2025)，[#24471](https://github.com/stablyai/orca/pull/24471)）
- 修复（native-chat）：the working line shows only what the agent is doing now（[@brennanb2025](https://github.com/brennanb2025)，[#24218](https://github.com/stablyai/orca/pull/24218)）
- 修复（native-chat）：a resting chat lists its model the way the running agent does, so no stray effort picker appears（[@brennanb2025](https://github.com/brennanb2025)，[#24267](https://github.com/stablyai/orca/pull/24267)）
- 新增（native-chat）：the chat strip and the sidebar read the host's child records（[@brennanb2025](https://github.com/brennanb2025)，[#22614](https://github.com/stablyai/orca/pull/22614)）
- 新增（native-chat）：register Codex default-mode helpers as subagents（[@brennanb2025](https://github.com/brennanb2025)，[#22619](https://github.com/stablyai/orca/pull/22619)）
- 修复（notes）：send AI notes to open 结构化聊天 sessions（[@brennanb2025](https://github.com/brennanb2025)，[#24221](https://github.com/stablyai/orca/pull/24221)）
- 修复（native-chat）：a paired server admits 结构化聊天 by client capability, not its own chat setting（[@brennanb2025](https://github.com/brennanb2025)，[#24203](https://github.com/stablyai/orca/pull/24203)）
- 修复（native-chat）：an older Orca keeps a chat with a newer row kind read-only instead of deleting the rest of its history（[@brennanb2025](https://github.com/brennanb2025)，[#24477](https://github.com/stablyai/orca/pull/24477)）
- 修复（native-chat）：a failed startup chat-lease save no longer puts the app into "Session restore failed"（[@brennanb2025](https://github.com/brennanb2025)，[#23964](https://github.com/stablyai/orca/pull/23964)）
- 重构（native-chat）：keep agent-session records in the chat journal database（[@brennanb2025](https://github.com/brennanb2025)，[#24006](https://github.com/stablyai/orca/pull/24006)）
- 重构（native-chat）：结构化聊天 failures always reach the diagnostics log（[@brennanb2025](https://github.com/brennanb2025)，[#24312](https://github.com/stablyai/orca/pull/24312)）

#### Codex & orchestration {#v1-4-220-codex-orchestration}

> Codex panes settle when you cancel with Esc or press Ctrl+C to copy, orchestration finds Antigravity, Cline and Prime Agent ready, and chat agents can learn their own Orca session ID.

- 修复（codex）：install Codex's Interrupt hook so an Esc-cancelled turn settles（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24332](https://github.com/stablyai/orca/pull/24332)）
- 修复：Codex status after Ctrl+C copy and side-chat navigation（[@nwparker](https://github.com/nwparker)，[#24339](https://github.com/stablyai/orca/pull/24339)）
- 新增（orchestration）：tell each agent its own orchestration address（[@brennanb2025](https://github.com/brennanb2025)，[#22636](https://github.com/stablyai/orca/pull/22636)）
- 修复（orchestration）：call the Orca session ID orca_session_id everywhere agents see it（[@brennanb2025](https://github.com/brennanb2025)，[#24230](https://github.com/stablyai/orca/pull/24230)）
- 修复（runtime）：read Antigravity, Cline and Prime Agent readiness from the live screen（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24222](https://github.com/stablyai/orca/pull/24222)）
- 重构（runtime）：read four agents' readiness from JSON rule files through one engine（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24348](https://github.com/stablyai/orca/pull/24348)）
- 重构（runtime）：read Codex, Claude, OpenCode, Pi, OMP and Gemini readiness from rule files（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24375](https://github.com/stablyai/orca/pull/24375)）
- 修复（runtime）：settle tui-idle on hook state for agents whose hooks cover the whole turn（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24388](https://github.com/stablyai/orca/pull/24388)）
- 修复（cli）：orca file open no longer moves your view unless you pass --focus（[@brennanb2025](https://github.com/brennanb2025)，[#24244](https://github.com/stablyai/orca/pull/24244)）

#### Agents & agent integrations {#v1-4-220-agents-agent-integrations}

> Antigravity and Cursor usage meters show real numbers, OpenCode shows failed and stopped turns, and agents are no longer marked as exited when Orca simply couldn't check.

- 修复（agent-status）：preserve hook presence when process checks cannot answer (step 1 of 3)（[@brennanb2025](https://github.com/brennanb2025)，[#23947](https://github.com/stablyai/orca/pull/23947)）
- 修复（opencode）：preserve turn outcomes and avoid auto permission attention（[@nwparker](https://github.com/nwparker)，[#24612](https://github.com/stablyai/orca/pull/24612)）
- 修复（opencode）：keep absent session stores quiet（[@nwparker](https://github.com/nwparker)，[#24577](https://github.com/stablyai/orca/pull/24577)）
- 修复（rate-limits）：read real Antigravity quota from the agy CLI, not the Gemini mirror（[@nwparker](https://github.com/nwparker)，[#24073](https://github.com/stablyai/orca/pull/24073)）
- 修复（status-bar）：show Antigravity's model-group pools instead of an empty segment（[@nwparker](https://github.com/nwparker)，[#24074](https://github.com/stablyai/orca/pull/24074)）
- 修复（antigravity）：gate free quota reads by CLI version and usage preference（[@nwparker](https://github.com/nwparker)，[#24593](https://github.com/stablyai/orca/pull/24593)）
- 修复（antigravity）：discover skills from the CLI global config directory（[@nwparker](https://github.com/nwparker)，[#24592](https://github.com/stablyai/orca/pull/24592)）
- 修复（antigravity）：launch POSIX hooks through sh with bounded JSON stdin（[@nwparker](https://github.com/nwparker)，[#24596](https://github.com/stablyai/orca/pull/24596)）
- 修复（cursor）：read desktop login outside the main thread（[@nwparker](https://github.com/nwparker)，[#24572](https://github.com/stablyai/orca/pull/24572)）
- 修复（cursor）：distinguish usage failures from expired login（[@nwparker](https://github.com/nwparker)，[#24575](https://github.com/stablyai/orca/pull/24575)）
- 修复（cursor）：preserve UTF-8 in Windows hook transport（[@nwparker](https://github.com/nwparker)，[#24585](https://github.com/stablyai/orca/pull/24585)）
- 修复（dsh）：support 0.2 positional profiles and first workspace launch（[@nwparker](https://github.com/nwparker)，[#24589](https://github.com/stablyai/orca/pull/24589)）
- 修复（ai-vault）：follow ZCode stored transcript order（[@nwparker](https://github.com/nwparker)，[#24584](https://github.com/stablyai/orca/pull/24584)）

#### 终端 {#v1-4-220-terminal}

> Mac screenshot thumbnails now reach Claude Code when dropped into a local terminal or the new-workspace composer. Wide panes use their full width, Option shortcuts work on ABC keyboards, OpenCode tabs respond to clicks, and a background terminal returns to its own tab.

- 修复：terminal width cutoff on wide panes（[@nwparker](https://github.com/nwparker)，[#24687](https://github.com/stablyai/orca/pull/24687)）
- 启用：Option shortcuts for ABC keyboards in Auto mode（[@nwparker](https://github.com/nwparker)，[#24528](https://github.com/stablyai/orca/pull/24528)）
- 修复（terminal）：pass single-pane OpenCode tab clicks through drag strip（[@nwparker](https://github.com/nwparker)，[#24591](https://github.com/stablyai/orca/pull/24591)）
- 修复（terminal）：fill OpenCode DOM block glyphs in repainted rows（[@nwparker](https://github.com/nwparker)，[#24582](https://github.com/stablyai/orca/pull/24582)）
- 修复（terminal）：reattach a background terminal to its own tab instead of opening a duplicate（[@brennanb2025](https://github.com/brennanb2025)，[#24458](https://github.com/stablyai/orca/pull/24458)）
- 修复（terminal）：stop parking pass queueing no-op renders that trip React #185 during worktree removal（[@OrcaWin](https://github.com/OrcaWin)，[#23636](https://github.com/stablyai/orca/pull/23636)）
- 修复（drop）：make temporary Mac screenshots readable to Claude Code when dropped into a local terminal or new-workspace composer（[@AmethystLiang](https://github.com/AmethystLiang)，[#24009](https://github.com/stablyai/orca/pull/24009)）

#### SSH & remote hosts {#v1-4-220-ssh-remote-hosts}

> SSH hosts can run Orca on Orca's own Node so they need no Node, npm or compiler, Windows SSH hosts work for standard accounts, and typing during a reconnect is no longer lost.

- 新增（ssh）：relay runtime fallback ladder, telemetry and host runtime setting（[@OrcaWin](https://github.com/OrcaWin)，[#24133](https://github.com/stablyai/orca/pull/24133)）
- 新增（ssh）：opt-in SSH 中继 on the pinned Node with prebuilt addons（[@OrcaWin](https://github.com/OrcaWin)，[#24129](https://github.com/stablyai/orca/pull/24129)）
- 新增（ssh）：pinned-Node relay on Windows SSH hosts（[@OrcaWin](https://github.com/OrcaWin)，[#24135](https://github.com/stablyai/orca/pull/24135)）
- 新增（ssh）：rung B glibc 2.17 compat runtime; gate remote vault on host node:sqlite（[@OrcaWin](https://github.com/OrcaWin)，[#24148](https://github.com/stablyai/orca/pull/24148)）
- 新增（ssh）：plain SSH terminals and SFTP browsing when no Orca runtime can run（[@OrcaWin](https://github.com/OrcaWin)，[#24147](https://github.com/stablyai/orca/pull/24147)）
- 新增（ssh）：runtime-store GC in production and exec-stdin upload fallback（[@OrcaWin](https://github.com/OrcaWin)，[#24136](https://github.com/stablyai/orca/pull/24136)）
- 修复（ssh）：collect relay versions only when provably exited; runtimes/ store GC（[@OrcaWin](https://github.com/OrcaWin)，[#24130](https://github.com/stablyai/orca/pull/24130)）
- 修复（ssh）：Windows hosts without Add-Type staging; runtime-store GC on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#24149](https://github.com/stablyai/orca/pull/24149)）
- 修复（ssh）：launch the Windows relay outside sshd's job so standard users work（[@OrcaWin](https://github.com/OrcaWin)，[#24224](https://github.com/stablyai/orca/pull/24224)）
- 修复（ssh）：keep keystrokes typed while a restored SSH terminal reattaches（[@OrcaWin](https://github.com/OrcaWin)，[#24166](https://github.com/stablyai/orca/pull/24166)）
- 修复（relay）：treat EPIPE/ECONNRESET write failures as the client leaving（[@OrcaWin](https://github.com/OrcaWin)，[#24209](https://github.com/stablyai/orca/pull/24209)）
- 修复（ssh）：name missing build tools when the relay has no node-pty（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#22670](https://github.com/stablyai/orca/pull/22670)）
- 修复（ai-vault）：require node:sqlite backup support in remote SQLite probes（[@OrcaWin](https://github.com/OrcaWin)，[#24086](https://github.com/stablyai/orca/pull/24086)）
- 新增（ai-vault）：read remote OpenCode history with the pinned Node; remove Bun（[@OrcaWin](https://github.com/OrcaWin)，[#24128](https://github.com/stablyai/orca/pull/24128)）
- 新增（orcad）：run orcad on the pinned Node instead of Bun（[@OrcaWin](https://github.com/OrcaWin)，[#24110](https://github.com/stablyai/orca/pull/24110)）
- 重构（orcad）：make profile backup and preflight runtime-neutral（[@OrcaWin](https://github.com/OrcaWin)，[#24088](https://github.com/stablyai/orca/pull/24088)）
- 构建（orcad）：server node-pty slots at glibc 2.28, plus a glibc 2.17 compat slot（[@OrcaWin](https://github.com/OrcaWin)，[#24134](https://github.com/stablyai/orca/pull/24134)）
- 新增（packaging）：ship the orcad server template in desktop builds（[@OrcaWin](https://github.com/OrcaWin)，[#24155](https://github.com/stablyai/orca/pull/24155)）

#### Mobile app & paired clients {#v1-4-220-mobile-app-paired-clients}

> The phone page slides between screens, iOS fields take typed text again, held buttons keep working, and OpenCode no longer leaves the phone terminal blank.

- 新增（mobile）：slide the page's host stack on push and Back（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24268](https://github.com/stablyai/orca/pull/24268)）
- 修复（mobile）：iOS shell keeps WebKit text interaction on so page fields take text（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24270](https://github.com/stablyai/orca/pull/24270)）
- 修复（mobile）：hold-to-dictate, repeat keys and the browser long-press survive the page's long-press（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24277](https://github.com/stablyai/orca/pull/24277)）
- 修复：OpenCode startup parser crash in the mobile terminal engine（[@nwparker](https://github.com/nwparker)，[#24626](https://github.com/stablyai/orca/pull/24626)）
- 保留：Mermaid exports through mobile bundling（[@nwparker](https://github.com/nwparker)，[#24661](https://github.com/stablyai/orca/pull/24661)）
- 保持：paired browser terminal insertion in the host's requested position（[@nwparker](https://github.com/nwparker)，[#24676](https://github.com/stablyai/orca/pull/24676)）
- 修复（mobile）：publish the Android APK's size and checksum with the release（[@nwparker](https://github.com/nwparker)，[#24037](https://github.com/stablyai/orca/pull/24037)）

#### Browser & emulator {#v1-4-220-browser-emulator}

> Annotate page element has a shortcut, the first browser command on Windows no longer hangs, and the iOS simulator works with Xcode 27.

- 新增（browser）：add a rebindable shortcut for Annotate page element（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23879](https://github.com/stablyai/orca/pull/23879)）
- 修复（browser）：stop the first browser command on a new Windows tab hanging until it fails（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24237](https://github.com/stablyai/orca/pull/24237)）
- 修复（emulator）：take serve-sim 0.1.47 so the iOS simulator works on Xcode 27（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24228](https://github.com/stablyai/orca/pull/24228)）

#### Workspaces & sidebar {#v1-4-220-workspaces-sidebar}

> A finished workspace no longer pulls you away from where you are, removing worktrees no longer stalls the app, creation is faster in large repositories, and the host tag on cards can be turned off.

- 修复（worktrees）：a finished create no longer pulls you off the workspace you switched to（[@brennanb2025](https://github.com/brennanb2025)，[#23974](https://github.com/stablyai/orca/pull/23974)）
- 修复（worktrees）：let git delete removed checkouts so chat sends never wait behind them（[@brennanb2025](https://github.com/brennanb2025)，[#23837](https://github.com/stablyai/orca/pull/23837)）
- 修复（worktree）：update local main safely, once per branch, alongside the checkout（[@brennanb2025](https://github.com/brennanb2025)，[#23698](https://github.com/stablyai/orca/pull/23698)）
- 修复（worktrees）：keep creation fast in large repositories（[@nwparker](https://github.com/nwparker)，[#24346](https://github.com/stablyai/orca/pull/24346)）
- 新增（sidebar）：let the host pill be turned off per card（[@nwparker](https://github.com/nwparker)，[#24299](https://github.com/stablyai/orca/pull/24299)）
- 改进：scroll indicator visibility with larger sizes and opacity（[@AmethystLiang](https://github.com/AmethystLiang)，[#24276](https://github.com/stablyai/orca/pull/24276)）

#### Editor, files & source control {#v1-4-220-editor-files-source-control}

> Huge Markdown previews no longer freeze Orca, the Review Notes setting works, shell dotfiles get colors, and commit messages and times read better.

- 修复（markdown）：cap rendered size of large Markdown previews to stop renderer freezes（[@OrcaWin](https://github.com/OrcaWin)，[#23634](https://github.com/stablyai/orca/pull/23634)）
- 修复（editor）：honor the Markdown Review Notes setting（[@Waynting](https://github.com/Waynting)，[#24057](https://github.com/stablyai/orca/pull/24057)）
- 修复（editor）：highlight shell startup dotfiles（[@dunzkoi](https://github.com/dunzkoi)，[#24066](https://github.com/stablyai/orca/pull/24066)）
- 修复（source-control）：show git history commit times to the second（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23954](https://github.com/stablyai/orca/pull/23954)）
- 修复（source-control）：drop reasoning model think blocks from generated messages（[@FenjuFu](https://github.com/FenjuFu)，[#24005](https://github.com/stablyai/orca/pull/24005)）
- 修复（files）：ignore nested generated directories on macOS（[@nwparker](https://github.com/nwparker)，[#24620](https://github.com/stablyai/orca/pull/24620)）

#### Reliability & languages {#v1-4-220-reliability-languages}

> Orca recovers instead of crash-looping in small Linux containers, on Windows out of memory, and when the system briefly can't start its window, and Korean labels read naturally.

- 修复（linux）：move Chromium shared memory off a tiny /dev/shm（[@OrcaWin](https://github.com/OrcaWin)，[#23751](https://github.com/stablyai/orca/pull/23751)）
- 修复（recovery）：prompt instead of reloading into a repeat Windows OOM when commit is exhausted（[@OrcaWin](https://github.com/OrcaWin)，[#23886](https://github.com/stablyai/orca/pull/23886)）
- 修复：recover renderer launch failures in the running app（[@OrcaWin](https://github.com/OrcaWin)，[#24250](https://github.com/stablyai/orca/pull/24250)）
- 修复（i18n）：correct Korean working and shell labels（[@isairz](https://github.com/isairz)，[#24341](https://github.com/stablyai/orca/pull/24341)）

#### Windows & packaging {#v1-4-220-windows-packaging}

> Windows and Linux packages no longer include the macOS-only iOS Simulator helper, and dependencies are updated.

- 杂项（deps）：update reviewed dependencies across Orca（[@nwparker](https://github.com/nwparker)，[#24561](https://github.com/stablyai/orca/pull/24561)）
- 新增（runtime）：pin the Node 24.21.0 server runtime with an offline CI check（[@OrcaWin](https://github.com/OrcaWin)，[#24087](https://github.com/stablyai/orca/pull/24087)）
- 修复（packaging）：ship serve-sim only in macOS builds（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25128](https://github.com/stablyai/orca/pull/25128)）

#### Relay service {#v1-4-220-relay-service}

> Server-side work on Orca's relay fleet: new relay servers in Asia and the US, and server updates that no longer block sign-ins or get stuck.

- 修复（relay）：re-place hosts off a draining cell without locking its row（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24216](https://github.com/stablyai/orca/pull/24216)）
- 修复（relay）：refuse a redial at once while the host's own release holds its row（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24225](https://github.com/stablyai/orca/pull/24225)）
- 修复（relay）：admit drained hosts through their own lane and stagger their return（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24446](https://github.com/stablyai/orca/pull/24446)）
- 修复（relay）：define restart-safe by the cell runtime, and refuse waves without headroom（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24259](https://github.com/stablyai/orca/pull/24259)）
- 修复（relay）：run the same-cap headroom gate in the modes the job actually receives（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24343](https://github.com/stablyai/orca/pull/24343)）
- 修复（relay）：let a draining cell pass restart-safe through refused redials（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24347](https://github.com/stablyai/orca/pull/24347)）
- 修复（relay）：anchor same-cap monitor evidence freshness to the run's authorisation, not job startup（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24349](https://github.com/stablyai/orca/pull/24349)）
- 修复（relay）：accept MIG version-name reconciliation and recreate stranded cells without rewriting the MIG（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24373](https://github.com/stablyai/orca/pull/24373)）
- 重构（relay）：sample fleet health inside the same-cap roll instead of a separate monitor run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24443](https://github.com/stablyai/orca/pull/24443)）
- 修复（relay）：gate the Asia canary on Asia-targeted region fallbacks only（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24320](https://github.com/stablyai/orca/pull/24320)）
- 新增（relay）：declare Asia cell c31 at the c30 shape（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24310](https://github.com/stablyai/orca/pull/24310)）
- 杂项（relay）：move Asia cell c31 to the general same-cap lists after promotion（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24318](https://github.com/stablyai/orca/pull/24318)）
- 新增（relay）：declare US cells c32 and c33 at the 3,000-host shape（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24444](https://github.com/stablyai/orca/pull/24444)）

#### Reverted before release {#v1-4-220-reverted-before-release}

> Twenty-six pieces of in-progress SSH and server work were merged and then taken back out, so none of their changes are in this release.

- 回退：take the 26 Phase 3 (#16741 port) PRs back out of main（[@OrcaWin](https://github.com/OrcaWin)，[#24559](https://github.com/stablyai/orca/pull/24559)）
- 新增（relay）：port the #16741 T1 seam (work drain, publication drain, release gate)（[@OrcaWin](https://github.com/OrcaWin)，[#24156](https://github.com/stablyai/orca/pull/24156)）
- 新增（relay）：route relay handlers through work admission; producer publication drain（[@OrcaWin](https://github.com/OrcaWin)，[#24181](https://github.com/stablyai/orca/pull/24181)）
- 新增（relay）：fence and drain file and git response streams on shutdown（[@OrcaWin](https://github.com/OrcaWin)，[#24185](https://github.com/stablyai/orca/pull/24185)）
- 重构（runtime-rpc）：extract the Node WebSocket lifecycle; opt-in pinned port（[@OrcaWin](https://github.com/OrcaWin)，[#24186](https://github.com/stablyai/orca/pull/24186)）
- 新增（ssh）：port the SSH connection work ledger and transport close ledger (#16741 T2)（[@OrcaWin](https://github.com/OrcaWin)，[#24210](https://github.com/stablyai/orca/pull/24210)）
- 新增（relay）：await owned watcher and agent children on shutdown (#16741 T2 P1)（[@OrcaWin](https://github.com/OrcaWin)，[#24400](https://github.com/stablyai/orca/pull/24400)）
- 新增（ssh）：wire SshConnection through the work and transport close ledgers (#16741 T2 P2)（[@OrcaWin](https://github.com/OrcaWin)，[#24401](https://github.com/stablyai/orca/pull/24401)）
- 新增（daemon）：tag daemon stream data with the PTY incarnation id (#16741 T2 P4a)（[@OrcaWin](https://github.com/OrcaWin)，[#24402](https://github.com/stablyai/orca/pull/24402)）
- 新增（profiles）：carry markdown frontmatter visibility in project transfers (#16741 T2 P7)（[@OrcaWin](https://github.com/OrcaWin)，[#24405](https://github.com/stablyai/orca/pull/24405)）
- 新增（session）：retry failed renderer session writes and verify local folder PTYs (#16741 T2 P9)（[@OrcaWin](https://github.com/OrcaWin)，[#24406](https://github.com/stablyai/orca/pull/24406)）
- 新增（ssh）：track connection-manager drains, test probes and provider continuations (#16741 T2 P3+P8a)（[@OrcaWin](https://github.com/OrcaWin)，[#24407](https://github.com/stablyai/orca/pull/24407)）
- 新增（daemon）：idle retirement, session census and recovery-only provider (#16741 T2 P4b)（[@OrcaWin](https://github.com/OrcaWin)，[#24409](https://github.com/stablyai/orca/pull/24409)）
- 修复（runtime）：project the PTY incarnation onto mobile session tabs（[@OrcaWin](https://github.com/OrcaWin)，[#24413](https://github.com/stablyai/orca/pull/24413)）
- 新增（ssh）：add pty.resumeClient and split SSH PTY process listing (#16741 T2 P5+P6)（[@OrcaWin](https://github.com/OrcaWin)，[#24414](https://github.com/stablyai/orca/pull/24414)）
- 新增（relay）：capability-gated owner reset with a durable preparation journal (#16741 T3 R1)（[@OrcaWin](https://github.com/OrcaWin)，[#24418](https://github.com/stablyai/orca/pull/24418)）
- 新增（ssh）：remote orcad primitives on the pinned Node runtime (#16741 T6-1)（[@OrcaWin](https://github.com/OrcaWin)，[#24419](https://github.com/stablyai/orca/pull/24419)）
- 新增（runtime）：SSH access links for paired servers in a downgrade-safe sidecar (#16741 T5-1+T5-2)（[@OrcaWin](https://github.com/OrcaWin)，[#24420](https://github.com/stablyai/orca/pull/24420)）
- 修复（runtime）：fence runtime-environment subscriptions and status probes by identity (#16741 T5-3)（[@OrcaWin](https://github.com/OrcaWin)，[#24421](https://github.com/stablyai/orca/pull/24421)）
- 新增（orcad）：migration manifest and dormant-state contracts (#16741 T6-7)（[@OrcaWin](https://github.com/OrcaWin)，[#24422](https://github.com/stablyai/orca/pull/24422)）
- 新增（ssh）：crash-safe orcad activation, rollback and recovery (#16741 T6-2)（[@OrcaWin](https://github.com/OrcaWin)，[#24423](https://github.com/stablyai/orca/pull/24423)）
- 新增（orcad）：supervisable server — stop requests, managed stop receipts, lock-safe lifetime (#16741 T6-3)（[@OrcaWin](https://github.com/OrcaWin)，[#24433](https://github.com/stablyai/orca/pull/24433)）
- 新增（ssh）：remote orcad stop by request file and journaled decommission (#16741 T6-4)（[@OrcaWin](https://github.com/OrcaWin)，[#24449](https://github.com/stablyai/orca/pull/24449)）
- 修复（ssh）：orcad GC honors the activation journal; readiness requires proven daemon coverage (#16741 T6)（[@OrcaWin](https://github.com/OrcaWin)，[#24451](https://github.com/stablyai/orca/pull/24451)）
- 新增（ssh）：deploy and pair an empty managed orcad server over SSH (#16741 T6-5)（[@OrcaWin](https://github.com/OrcaWin)，[#24453](https://github.com/stablyai/orca/pull/24453)）
- 新增（ssh）：update, roll back, recover and stop a managed orcad server (#16741 T6-5 follow-up)（[@OrcaWin](https://github.com/OrcaWin)，[#24463](https://github.com/stablyai/orca/pull/24463)）
- 新增（orcad）：source-side dormant export of a relay-hosted SSH target (#16741 T6-8)（[@OrcaWin](https://github.com/OrcaWin)，[#24519](https://github.com/stablyai/orca/pull/24519)）

#### Tests, CI & maintenance {#v1-4-220-tests-ci-maintenance}

> Release builds pass their telemetry check, main builds again after crossed changes, CI spends less time on setup, and many flaky or stale tests were fixed.

- 重构（native-chat）：move the provider-exit proof out of structured-agent-session-adapter.ts so main's lint passes（[@brennanb2025](https://github.com/brennanb2025)，[#24323](https://github.com/stablyai/orca/pull/24323)）
- 修复（native-chat）：restore main typecheck after #24312 and #24334 crossed（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24437](https://github.com/stablyai/orca/pull/24437)）
- 修复（build）：import the Electron remote capability list from its own module（[@brennanb2025](https://github.com/brennanb2025)，[#24494](https://github.com/stablyai/orca/pull/24494)）
- 修复（native-chat）：move the chat-tab surface out of the session host so main passes lint（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24496](https://github.com/stablyai/orca/pull/24496)）
- CI（daemon）：gate PRs on daemon protocol crossing from the newest release（[@OrcaWin](https://github.com/OrcaWin)，[#24089](https://github.com/stablyai/orca/pull/24089)）
- CI（daemon）：runtime-launcher protocol ratchet and Node slot marker（[@OrcaWin](https://github.com/OrcaWin)，[#24108](https://github.com/stablyai/orca/pull/24108)）
- CI（ssh）：hostile-host matrix for the relay runtime ladder（[@OrcaWin](https://github.com/OrcaWin)，[#24146](https://github.com/stablyai/orca/pull/24146)）
- CI（ssh）：macOS SSH-host lane for the pinned relay; fix uploads under a symlinked root（[@OrcaWin](https://github.com/OrcaWin)，[#24179](https://github.com/stablyai/orca/pull/24179)）
- CI（ssh）：Windows SSH-host lanes (inbox + preview OpenSSH) for the pinned relay（[@OrcaWin](https://github.com/OrcaWin)，[#24180](https://github.com/stablyai/orca/pull/24180)）
- CI：share PR planning setup and reuse the static native cache（[@nwparker](https://github.com/nwparker)，[#24329](https://github.com/stablyai/orca/pull/24329)）
- Free PR CI capacity by avoiding repeated setup and real-time test waits（[@nwparker](https://github.com/nwparker)，[#24355](https://github.com/stablyai/orca/pull/24355)）
- Reuse qualified Windows server builds and dependency verification records（[@nwparker](https://github.com/nwparker)，[#24448](https://github.com/stablyai/orca/pull/24448)）
- Speed up serializer checks and keep native caches stable（[@nwparker](https://github.com/nwparker)，[#24476](https://github.com/stablyai/orca/pull/24476)）
- CI：run every cross-version wire test, picked up by folder so new ones can't be skipped（[@brennanb2025](https://github.com/brennanb2025)，[#24499](https://github.com/stablyai/orca/pull/24499)）
- 减小：redundant headless server CI work（[@nwparker](https://github.com/nwparker)，[#24527](https://github.com/stablyai/orca/pull/24527)）
- 减小：CI setup costs and fixture failures（[@nwparker](https://github.com/nwparker)，[#24537](https://github.com/stablyai/orca/pull/24537)）
- Reuse prepared Windows native builds in SSH CI（[@nwparker](https://github.com/nwparker)，[#24555](https://github.com/stablyai/orca/pull/24555)）
- 停止：stalled unit jobs after an hour（[@nwparker](https://github.com/nwparker)，[#24583](https://github.com/stablyai/orca/pull/24583)）
- 限制：E2E package setup and retain cancellation traces（[@nwparker](https://github.com/nwparker)，[#24617](https://github.com/stablyai/orca/pull/24617)）
- 跳过：redundant package setup in SSH Linux builds（[@nwparker](https://github.com/nwparker)，[#24733](https://github.com/stablyai/orca/pull/24733)）
- 限制：package setup for the E2E native-cache job（[@nwparker](https://github.com/nwparker)，[#24758](https://github.com/stablyai/orca/pull/24758)）
- 测试（native-chat）：cancel the journal import test's tick before teardown（[@brennanb2025](https://github.com/brennanb2025)，[#24071](https://github.com/stablyai/orca/pull/24071)）
- 测试：stop main failing on three tests the store and close-cause changes crossed（[@brennanb2025](https://github.com/brennanb2025)，[#24231](https://github.com/stablyai/orca/pull/24231)）
- 测试（runtime）：add a readiness census that pins every tui-idle verdict（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24336](https://github.com/stablyai/orca/pull/24336)）
- 测试（orcad）：skip the live-terminal runtime hand-over across a protocol bump（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24429](https://github.com/stablyai/orca/pull/24429)）
- 测试（e2e）：select the onboarding Codex card by its exact name（[@brennanb2025](https://github.com/brennanb2025)，[#24439](https://github.com/stablyai/orca/pull/24439)）
- 测试（e2e）：fake Codex answers the --no-daemon --help probe without a spawn（[@brennanb2025](https://github.com/brennanb2025)，[#24440](https://github.com/stablyai/orca/pull/24440)）
- 测试（e2e）：drag the manual-order worktree to a slot that changes the order（[@brennanb2025](https://github.com/brennanb2025)，[#24441](https://github.com/stablyai/orca/pull/24441)）
- 测试（e2e）：give the sparse preset proof room to finish on CI（[@brennanb2025](https://github.com/brennanb2025)，[#24442](https://github.com/stablyai/orca/pull/24442)）
- 测试（e2e）：retry the crash-recovery test's main-process reads on Electron's transient evaluate error（[@brennanb2025](https://github.com/brennanb2025)，[#24479](https://github.com/stablyai/orca/pull/24479)）
- 修复：Codex Ctrl+C regression fixture on Linux（[@nwparker](https://github.com/nwparker)，[#24480](https://github.com/stablyai/orca/pull/24480)）
- 测试（e2e）：dismiss the correct tour before screenshot markup（[@nwparker](https://github.com/nwparker)，[#24534](https://github.com/stablyai/orca/pull/24534)）
- 测试（wire）：fix release fixtures and compatibility assertions（[@nwparker](https://github.com/nwparker)，[#24538](https://github.com/stablyai/orca/pull/24538)）
- 测试：isolate scan fixtures and wait for completed work（[@nwparker](https://github.com/nwparker)，[#24544](https://github.com/stablyai/orca/pull/24544)）
- 测试：isolate seeded Git repositories per Playwright worker（[@nwparker](https://github.com/nwparker)，[#24550](https://github.com/stablyai/orca/pull/24550)）
- 测试：hold the usage snapshot burst clock fixed（[@nwparker](https://github.com/nwparker)，[#24551](https://github.com/stablyai/orca/pull/24551)）
- 测试：update worktree setup and enforce cleanup results（[@nwparker](https://github.com/nwparker)，[#24552](https://github.com/stablyai/orca/pull/24552)）
- 测试：restore delayed PTY writes in large-paste coverage（[@nwparker](https://github.com/nwparker)，[#24556](https://github.com/stablyai/orca/pull/24556)）
- 测试：classify terminal driver input with the current PTY contract（[@nwparker](https://github.com/nwparker)，[#24560](https://github.com/stablyai/orca/pull/24560)）
- 测试：align source-control fixtures with current store contracts（[@nwparker](https://github.com/nwparker)，[#24571](https://github.com/stablyai/orca/pull/24571)）
- 移除：empty passing sentinels from opt-in socket tests（[@nwparker](https://github.com/nwparker)，[#24621](https://github.com/stablyai/orca/pull/24621)）
- 保持：SSH typing replies visible during background pressure（[@nwparker](https://github.com/nwparker)，[#24629](https://github.com/stablyai/orca/pull/24629)）
- 保持：SSH benchmark replies readable in narrow split panes（[@nwparker](https://github.com/nwparker)，[#24682](https://github.com/stablyai/orca/pull/24682)）
- 更新：sidebar test setup and remove an obsolete permission sentinel（[@nwparker](https://github.com/nwparker)，[#24734](https://github.com/stablyai/orca/pull/24734)）
- Classify acknowledged remount input as driving in the adoption test（[@nwparker](https://github.com/nwparker)，[#24750](https://github.com/stablyai/orca/pull/24750)）
- Check temporary worktree cleanup in the plugin test（[@nwparker](https://github.com/nwparker)，[#24779](https://github.com/stablyai/orca/pull/24779)）
- Check E2E packages where the installer reads them（[@nwparker](https://github.com/nwparker)，[#24785](https://github.com/stablyai/orca/pull/24785)）
### 新贡献者 {#v1-4-220-contributors}

- [@FenjuFu](https://github.com/FenjuFu) 首次贡献于 [#24005](https://github.com/stablyai/orca/pull/24005)
- [@Waynting](https://github.com/Waynting) 首次贡献于 [#24057](https://github.com/stablyai/orca/pull/24057)
- [@dunzkoi](https://github.com/dunzkoi) 首次贡献于 [#24066](https://github.com/stablyai/orca/pull/24066)
- [@isairz](https://github.com/isairz) 首次贡献于 [#24341](https://github.com/stablyai/orca/pull/24341)

---

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
