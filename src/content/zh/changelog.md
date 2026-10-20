# 更新日志 {#changelog}

本页保留最近五次桌面版的**完整中文日志**，不是一句话摘要。打开时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 版本索引 {#index}

| 版本 | 日期 | 标题 |
| --- | --- | --- |
| [v1.4.233](#v1-4-233) | 2026年10月20日 | - SSH & remote workspaces: C… |
| [v1.4.232](#v1-4-232) | 2026年10月20日 | - Auto permissions, in chat … |
| [v1.4.230](#v1-4-230) | 2026年10月19日 | 实验性 Native Chat 支持 Antigravity，可选择 Agent 并在聊天内安装 |
| [v1.4.229](#v1-4-229) | 2026年10月17日 | 实验性 Native Chat 可逐轮审查编辑，共享技能支持更多 Agent |
| [v1.4.227](#v1-4-227) | 2026年10月16日 | Native Chat 拥有独立权限模式，会话更易继续 |

## 完整中文日志 {#full-notes}

## v1.4.233 - SSH & remote workspaces: C… {#v1-4-233}

2026年10月20日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.233)

感谢使用 Orca，也感谢一直以来的支持。

We shipped two releases today! If you missed it, check out the [v1.4.232 release notes](https://github.com/stablyai/orca/releases/tag/v1.4.232) too. Highlights include Manual / Auto / Yolo agent permissions, OpenCode 2 in Native Chat, a better phone composer with file attachments and inline skills, smoother SSH recovery, and a smaller app with faster Mac updates.

**Phone updates:** Updating Orca on your desktop also updates the app on your connected phone—the phone loads it directly from your desktop.

### 简要说明 {#v1-4-233-short}

- **SSH & remote workspaces:** Connecting to an SSH host works when neither machine can download Node.js, with a one-click mirror Orca remembers and retries. Older Windows hosts (Windows 10 1809 and Server 2019) can run Orca's server, and tunnels recover when a port is held by an old SSH connection.
- **Remote servers in Settings:** Remote Orca Servers is one list instead of six sections, and SSH hosts can be removed in bulk and stay removed. Orca tells you when the same server was saved twice, and adding a server you already saved updates it instead.
- **Phone:** Creating a workspace from the phone is much faster, the workspace list stays in step with the desktop, and session tab icons keep their size beside long titles.
- **Editor:** Orca refuses to save over changes made to a file on disk that you haven't seen, and Reload and Undo behave predictably afterwards.
- **Everyday polish:** Projects with the same name on different machines keep short names and show which machine they're on. Long saved conversations use far less memory when Orca scans them for Session History.

---

### 产品体验 {#v1-4-233-product}

#### SSH, managed servers & remote {#v1-4-233-ssh-managed-servers-remote}

> SSH hosts connect in more situations, Remote Orca Servers is one clear list, and edits always go to the machine that owns the workspace.

- One-click Node.js mirror when neither machine can download Node（[@nwparker](https://github.com/nwparker)，[#31069](https://github.com/stablyai/orca/pull/31069)）
- Retry with the saved Node.js mirror once a running connect fails the same way（[@nwparker](https://github.com/nwparker)，[#31089](https://github.com/stablyai/orca/pull/31089)）
- Ship node-pty's winpty backend so Windows 1809 / Server 2019 hosts can deploy（[@nwparker](https://github.com/nwparker)，[#31056](https://github.com/stablyai/orca/pull/31056)）
- A managed tunnel whose forward can't start takes the stdio bridge, and reclaims a port an old ControlMaster holds（[@nwparker](https://github.com/nwparker)，[#31062](https://github.com/stablyai/orca/pull/31062)）
- A legacy relay restarted at the same socket never takes over an open tab（[@nwparker](https://github.com/nwparker)，[#31068](https://github.com/stablyai/orca/pull/31068)）
- Detect Linux libraries reliably across SSH and WSL（[@nwparker](https://github.com/nwparker)，[#31077](https://github.com/stablyai/orca/pull/31077)）
- Remote Orca Servers: one list instead of six sections; SSH Hosts: bulk remove that stays removed（[@nwparker](https://github.com/nwparker)，[#31082](https://github.com/stablyai/orca/pull/31082)）
- Adding a server you already saved updates it instead of saving it twice（[@nwparker](https://github.com/nwparker)，[#31080](https://github.com/stablyai/orca/pull/31080)）
- Say which saved servers are the same machine paired twice, and how to fix it（[@nwparker](https://github.com/nwparker)，[#31100](https://github.com/stablyai/orca/pull/31100)）
- Say "Orca on <host>" instead of "managed server" in the UI（[@nwparker](https://github.com/nwparker)，[#31099](https://github.com/stablyai/orca/pull/31099)）
- A moved SSH host lists once in a project's Available Hosts（[@nwparker](https://github.com/nwparker)，[#31064](https://github.com/stablyai/orca/pull/31064)）
- New local projects never dedupe onto an SSH project at the same path（[@nwparker](https://github.com/nwparker)，[#31055](https://github.com/stablyai/orca/pull/31055)）
- PR/MR worktree base refuses SSH projects named only by executionHostId（[@nwparker](https://github.com/nwparker)，[#31054](https://github.com/stablyai/orca/pull/31054)）
- Worktree create sends the host --project/--host selected（[@nwparker](https://github.com/nwparker)，[#31066](https://github.com/stablyai/orca/pull/31066)）
- Editor writes and unqualified removals route by the rows, never the Active Server focus（[@nwparker](https://github.com/nwparker)，[#31036](https://github.com/stablyai/orca/pull/31036)）
- No owner route reads the Active Server focus, so a local row never routes to the focused server（[@nwparker](https://github.com/nwparker)，[#31058](https://github.com/stablyai/orca/pull/31058)）
- A damaged browser file list disables only the browser client, not the remote server（[@nwparker](https://github.com/nwparker)，[#31025](https://github.com/stablyai/orca/pull/31025)）
- A live orcad's browser helper pauses for macOS desktop installs（[@nwparker](https://github.com/nwparker)，[#31059](https://github.com/stablyai/orca/pull/31059)）

#### Phone {#v1-4-233-phone}

> Create workspaces from the phone much faster, and keep the phone's workspace list and session tabs accurate.

- Prepare the worktree checkout while the new-workspace form is open（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31167](https://github.com/stablyai/orca/pull/31167)）
- Phone list resends lost option changes, trusts the feed's row facts, and retries a failed feed read（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31088](https://github.com/stablyai/orca/pull/31088)）
- 保持：session tab icons full size beside long titles（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31169](https://github.com/stablyai/orca/pull/31169)）

#### Workspaces, sidebar & tabs {#v1-4-233-workspaces-sidebar-tabs}

> Same-named projects on different machines are easy to tell apart, and the sidebar's agent status and visibility settings stay accurate.

- 保持：project names short and show their machine（[@nwparker](https://github.com/nwparker)，[#28250](https://github.com/stablyai/orca/pull/28250)）
- One agent phase history, so a compaction raises no unread and a title-started turn pushes its finish（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31103](https://github.com/stablyai/orca/pull/31103)）
- Visibility settings refresh workspace rows; pre-gap paired-server answers stay unverifiable（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31106](https://github.com/stablyai/orca/pull/31106)）

#### Editor, files & Markdown {#v1-4-233-editor-files-markdown}

> Saving no longer overwrites changes made on disk behind your back, and previews and renames act on the right file.

- Refuse saves that would overwrite unnoticed disk changes（[@nwparker](https://github.com/nwparker)，[#30417](https://github.com/stablyai/orca/pull/30417)）
- Disk-checked save follow-ups: repeatable stale reloads, Markdown whitespace, Undo of Reload（[@nwparker](https://github.com/nwparker)，[#31113](https://github.com/stablyai/orca/pull/31113)）
- Markdown preview of a terminal-opened file reads with its source tab's grant（[@nwparker](https://github.com/nwparker)，[#31060](https://github.com/stablyai/orca/pull/31060)）
- A rename retargets only editors whose own owner is the renaming host（[@nwparker](https://github.com/nwparker)，[#31091](https://github.com/stablyai/orca/pull/31091)）

#### 浏览器 {#v1-4-233-browser}

> Browser screenshots from an SSH host are checked when they're taken and when they're answered.

- An SSH host's capture is admitted at each capture and at its answer（[@nwparker](https://github.com/nwparker)，[#31072](https://github.com/stablyai/orca/pull/31072)）

#### Performance & reliability {#v1-4-233-performance-reliability}

> Long saved conversations no longer take several times their size in memory while Orca indexes them.

- [mem] Stream saved transcripts and stage large search writes（[@OrcaWin](https://github.com/OrcaWin)，[#30702](https://github.com/stablyai/orca/pull/30702)）

#### Relay service {#v1-4-233-relay-service}

> The hosted relay keeps desktops in their own region and spreads traffic evenly while it is updated.

- 给予：region-correction reconnects and roll re-placements the in-region reserve fallback（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31042](https://github.com/stablyai/orca/pull/31042)）
- 移动：director traffic in two steps so a deploy does not land on one instance（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31051](https://github.com/stablyai/orca/pull/31051)）
- 允许：the same-cap trust probe outlast load-balancer warm-up（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31067](https://github.com/stablyai/orca/pull/31067)）

#### Tests, CI & maintenance {#v1-4-233-tests-ci-maintenance}

> Faster, lighter builds and checks; the new layout and sidebar work remains behind disabled build switches.

- Run cell-flags and reserve-watch on the paid runner pool（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31024](https://github.com/stablyai/orca/pull/31024)）
- 保持：Mac qualification runs out of the release build's concurrency group（[@nwparker](https://github.com/nwparker)，[#31031](https://github.com/stablyai/orca/pull/31031)）
- Build Windows alongside Mac and preserve signing quota（[@nwparker](https://github.com/nwparker)，[#31032](https://github.com/stablyai/orca/pull/31032)）
- Cut end-to-end typecheck memory with Bun（[@nwparker](https://github.com/nwparker)，[#31046](https://github.com/stablyai/orca/pull/31046)）
- Halve CLI compile memory with Bun typechecking（[@nwparker](https://github.com/nwparker)，[#31043](https://github.com/stablyai/orca/pull/31043)）
- 停止：the cold-authority scope test depending on the clock（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31098](https://github.com/stablyai/orca/pull/31098)）
- Shared switch-on fixtures so 71 layout tests pass with main owning the layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31076](https://github.com/stablyai/orca/pull/31076)）
- A test-only switch-on server template that packaging refuses（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31097](https://github.com/stablyai/orca/pull/31097)）
- No empty extra terminal tab from an old saved terminal record (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31045](https://github.com/stablyai/orca/pull/31045)）
- Agent titles from one status batch reach main as one rename (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31048](https://github.com/stablyai/orca/pull/31048)）
- Main sends one layout update per action, with only what changed (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31109](https://github.com/stablyai/orca/pull/31109)）
- Same-id workspaces on two hosts sort, nest and stay retained on their own; nested groups and project order hold in host sections (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31111](https://github.com/stablyai/orca/pull/31111)）
- A read Done no longer hides a pane that is still Working in Smart (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31114](https://github.com/stablyai/orca/pull/31114)）
- 更新：WeChat QR code for group 13（[@AmethystLiang](https://github.com/AmethystLiang)，[#31052](https://github.com/stablyai/orca/pull/31052)）

**完整变更对照：** [v1.4.232...v1.4.233](https://github.com/stablyai/orca/compare/v1.4.232...v1.4.233)

## v1.4.232 - Auto permissions, in chat … {#v1-4-232}

2026年10月20日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.232)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-232-short}

- **Auto permissions, in chat and terminal:** Choose **Manual | Auto | Yolo** in Settings → Agents. Auto lets supported Claude and Codex agents handle approvals, and new Native Chats follow your choice too. You can choose a separate permission mode for other agents; existing chats keep their own settings.
- **Native chat (experimental):** Open OpenCode 2 directly in chat, find Codex skills by typing `$`, and pan and zoom image previews. Rewind works in long conversations, and usage limits show when they reset with a **Continue** button to pick the conversation back up.
- **A better phone composer:** Attach files as well as photos, insert skills inline, and choose model, effort and permissions from one sheet. Faster recovery after switching apps and more responsive terminal scrolling make it easier to keep working away from your desk.
- **Smoother SSH work:** Managed servers recover from lost pairing over SSH, tunnels follow a restarted server's port, and unsaved editor drafts survive the move to a managed server. File uploads work better over high-latency links, and a configurable Node.js mirror helps on networks that block nodejs.org.
- **More control over your workspace:** Space responds faster, lets you inspect changed files before cleanup, and puts row actions in a dedicated menu. Browser pages can ask for a username and password, and Orca asks before a page opens another app.
- **A lighter app and faster Mac updates:** Shared desktop and browser assets, fewer duplicate resources and smaller tour animations reduce the app's footprint. macOS updates avoid background installer throttling, helping Orca get back to your work sooner.

### Compatibility & upgrade notes {#v1-4-232-compatibility-upgrade-notes}

**Native chat (experimental):** Some chat features require support from the remote host. Keep paired and SSH hosts updated alongside Orca to use the latest capabilities.

**Auto permissions:** Availability depends on the agent, model and host version. Changing the default applies to new sessions; existing Native Chats retain their saved permissions.

---

### 产品体验 {#v1-4-232-product}

#### Native chat (experimental) {#v1-4-232-native-chat-experimental-}

> OpenCode 2 opens in chat, Codex and Pi skills are easier to find, image previews support pan and zoom, and long conversations are easier to resume and rewind. Usage limits explain the pause and offer Continue, while sent images and visuals stay with the chat.

- 新增（opencode）：open OpenCode 2 in the chat view and list 2.x models before the first message（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28424](https://github.com/stablyai/orca/pull/28424)）
- 新增（native-chat）：pan and zoom chat image previews like mermaid diagrams（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30154](https://github.com/stablyai/orca/pull/30154)）
- 修复（native-chat）：move a chat visual's Open and Share buttons above it（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30356](https://github.com/stablyai/orca/pull/30356)）
- Mark completed Codex reviews Done when Stop is absent（[@brennanb2025](https://github.com/brennanb2025)，[#28860](https://github.com/stablyai/orca/pull/28860)）
- 恢复：terminal conversations in Native Chat without waiting for History（[@brennanb2025](https://github.com/brennanb2025)，[#29150](https://github.com/stablyai/orca/pull/29150)）
- 修复（native-chat）：clicking Send or Stop keeps focus in the message box（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30456](https://github.com/stablyai/orca/pull/30456)）
- 修复（native-chat）：a Claude chat keeps a model its CLI stopped listing（[@brennanb2025](https://github.com/brennanb2025)，[#30436](https://github.com/stablyai/orca/pull/30436)）
- 修复：thinking status translations in zh, ja, ko, and fr（[@AmethystLiang](https://github.com/AmethystLiang)，[#30558](https://github.com/stablyai/orca/pull/30558)）
- Native chat: rewind works at any chat length（[@brennanb2025](https://github.com/brennanb2025)，[#30394](https://github.com/stablyai/orca/pull/30394)）
- 新增（native-chat）：/resume in a 结构化聊天 opens Agent Session History（[@brennanb2025](https://github.com/brennanb2025)，[#28133](https://github.com/stablyai/orca/pull/28133)）
- 新增（native-chat）：+ menu shows chat, disabled chat and CLI rows（[@brennanb2025](https://github.com/brennanb2025)，[#29074](https://github.com/stablyai/orca/pull/29074)）
- 修复（codex）：a Codex chat keeps its Orca identity when the user's Codex config strips command environment variables（[@brennanb2025](https://github.com/brennanb2025)，[#30406](https://github.com/stablyai/orca/pull/30406)）
- Sleep stops a workspace's Native Chat agents（[@brennanb2025](https://github.com/brennanb2025)，[#28445](https://github.com/stablyai/orca/pull/28445)）
- Refuse chat resume until terminal writers have exited（[@brennanb2025](https://github.com/brennanb2025)，[#29242](https://github.com/stablyai/orca/pull/29242)）
- 修复（native-chat）：show the model picker in a new OMP or Antigravity chat（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30713](https://github.com/stablyai/orca/pull/30713)）
- Accept messages while any agent starts, and bound each startup step（[@brennanb2025](https://github.com/brennanb2025)，[#28046](https://github.com/stablyai/orca/pull/28046)）
- 修复：make chat and terminal switch labels consistent（[@AmethystLiang](https://github.com/AmethystLiang)，[#30829](https://github.com/stablyai/orca/pull/30829)）
- 修复（native-chat）：save a Codex message's receipt from either of Codex's reports of it, not only the first（[@brennanb2025](https://github.com/brennanb2025)，[#30403](https://github.com/stablyai/orca/pull/30403)）
- 修复（native-chat）：a new chat in a twin workspace refuses instead of starting on this computer（[@nwparker](https://github.com/nwparker)，[#30838](https://github.com/stablyai/orca/pull/30838)）
- 修复：distinguish history resumes from active-tab switches（[@AmethystLiang](https://github.com/AmethystLiang)，[#30871](https://github.com/stablyai/orca/pull/30871)）
- 修复（native-chat）：a usage limit reads as a pause with its reset time and a Continue, not a failure（[@brennanb2025](https://github.com/brennanb2025)，[#30396](https://github.com/stablyai/orca/pull/30396)）
- A chat's visuals and sent images live as long as the chat（[@brennanb2025](https://github.com/brennanb2025)，[#30413](https://github.com/stablyai/orca/pull/30413)）
- 新增（native-chat）：`$` opens Codex skills in the composer（[@brennanb2025](https://github.com/brennanb2025)，[#30827](https://github.com/stablyai/orca/pull/30827)）
- 修复（native-chat）：keep transcript text clear of the message rail（[@brennanb2025](https://github.com/brennanb2025)，[#30868](https://github.com/stablyai/orca/pull/30868)）
- 修复（native-chat）：keep a typed [Image #N] when the message has no such image（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30740](https://github.com/stablyai/orca/pull/30740)）
- 修复（native-chat）：list Pi skills in the / menu as /skill:<name>（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30924](https://github.com/stablyai/orca/pull/30924)）
- 修复（native-chat）：hide history before /clear（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30902](https://github.com/stablyai/orca/pull/30902)）
- 修复（native-chat）：keep /model, /effort, /clear and /compact in the / menu after an agent reports its commands（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30956](https://github.com/stablyai/orca/pull/30956)）
- 修复（native-chat）：link Antigravity sign-in instructions to settings（[@brennanb2025](https://github.com/brennanb2025)，[#30970](https://github.com/stablyai/orca/pull/30970)）
- 修复（native-chat）：say which request a chat start ran out of time on, and log the original error（[@nwparker](https://github.com/nwparker)，[#30992](https://github.com/stablyai/orca/pull/30992)）

#### Agents, accounts & permissions {#v1-4-232-agents-accounts-permissions}

> Set Auto permissions for supported agents and carry that choice into new chats. Antigravity sign-in is clearer, Claude usage estimates account for model versions and long context, and MiniMax and GLM Coding Plan keys can be saved on the remote host that uses them.

- 修复（cloud-auth）：show that a sign-in is in progress, with copy-link and cancel, on every Orca sign-in button（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30410](https://github.com/stablyai/orca/pull/30410)）
- 修复（usage）：price Claude models by exact version, add Sonnet 5.5, flag unpriced models（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30421](https://github.com/stablyai/orca/pull/30421)）
- Check Claude sign-in duplicates against the listed account identity（[@AmethystLiang](https://github.com/AmethystLiang)，[#30446](https://github.com/stablyai/orca/pull/30446)）
- 修复（usage）：price Claude long-context requests per request, and price Haiku 5.5（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30427](https://github.com/stablyai/orca/pull/30427)）
- 修复（windows）：codex and claude get a prompt's double quotes intact in PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#30424](https://github.com/stablyai/orca/pull/30424)）
- 新增（settings）：sign Antigravity chats in from Accounts（[@brennanb2025](https://github.com/brennanb2025)，[#28705](https://github.com/stablyai/orca/pull/28705)）
- 新增（agent-status）：read OSC 7501 program status beside hooks（[@nwparker](https://github.com/nwparker)，[#30261](https://github.com/stablyai/orca/pull/30261)）
- 新增（agent-status）：show OSC 7501 program status in rows and tabs（[@nwparker](https://github.com/nwparker)，[#30262](https://github.com/stablyai/orca/pull/30262)）
- 修复（agent-status）：never drop a running helper for lack of room（[@brennanb2025](https://github.com/brennanb2025)，[#30416](https://github.com/stablyai/orca/pull/30416)）
- 修复（accounts）：copy Devin commands through Orca clipboard bridge（[@AmethystLiang](https://github.com/AmethystLiang)，[#30826](https://github.com/stablyai/orca/pull/30826)）
- 修复（settings）：Antigravity's sign-in reads as an Account line, never an empty box（[@brennanb2025](https://github.com/brennanb2025)，[#30850](https://github.com/stablyai/orca/pull/30850)）
- 修复（linear）：show a saved Linear credential that cannot be decrypted（[@brennanb2025](https://github.com/brennanb2025)，[#28867](https://github.com/stablyai/orca/pull/28867)）
- 新增（agents）：add Auto to the global agent permission switch（[@nwparker](https://github.com/nwparker)，[#30677](https://github.com/stablyai/orca/pull/30677)）
- 新增（native-chat）：apply per-agent Auto permission defaults（[@nwparker](https://github.com/nwparker)，[#30853](https://github.com/stablyai/orca/pull/30853)）
- 新增（accounts）：save MiniMax and GLM Coding Plan keys on the Settings host（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30862](https://github.com/stablyai/orca/pull/30862)）
- 修复（codex）：keep Orca's terminal identity in Codex commands when the user's Codex config strips environment variables（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30857](https://github.com/stablyai/orca/pull/30857)）
- 修复（status-bar）：keep this computer's providers visible as "Not configured on <host>" under a remote workspace（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30858](https://github.com/stablyai/orca/pull/30858)）
- 显示：short Antigravity pool labels in status bar（[@AmethystLiang](https://github.com/AmethystLiang)，[#31007](https://github.com/stablyai/orca/pull/31007)）

#### Phone {#v1-4-232-phone}

> The redesigned chat composer adds file attachments, inline skills and one place for model, effort and permissions. Chat reading position, queued-message editing, terminal scrolling, reconnection and completion notifications get attention too.

- 修复（mobile）：show a renamed terminal tab's name on the phone（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30163](https://github.com/stablyai/orca/pull/30163)）
- 新增（mobile）：redesign the chat composer with file attachments and inline skills（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30359](https://github.com/stablyai/orca/pull/30359)）
- 修复（mobile）：keep typed commit messages, restore failed shortcut removals, name icon buttons（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30142](https://github.com/stablyai/orca/pull/30142)）
- 修复（mobile）：page GitHub tasks by number and drop pages from an old selection（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30140](https://github.com/stablyai/orca/pull/30140)）
- 修复（mobile）：one button style for the session header and tab strip; size tabs to titles（[@brennanb2025](https://github.com/brennanb2025)，[#29222](https://github.com/stablyai/orca/pull/29222)）
- One background-process read of "Notify About Hidden Workspaces" for phone pushes and the host unread flag（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30571](https://github.com/stablyai/orca/pull/30571)）
- 修复（mobile）：faster relay recovery after an app switch and on a late desktop data link（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30607](https://github.com/stablyai/orca/pull/30607)）
- 修复（mobile）：edit a queued message in a plain text box with compact cancel and save buttons（[@brennanb2025](https://github.com/brennanb2025)，[#30382](https://github.com/stablyai/orca/pull/30382)）
- 保持：phone chat history in one window while preserving reading position（[@brennanb2025](https://github.com/brennanb2025)，[#29271](https://github.com/stablyai/orca/pull/29271)）
- 性能（push）：deliver queued notifications without waiting for the poll（[@nwparker](https://github.com/nwparker)，[#28624](https://github.com/stablyai/orca/pull/28624)）
- 性能（mobile）：shorten output batching during terminal scroll gestures（[@innocarpe](https://github.com/innocarpe)，[#30319](https://github.com/stablyai/orca/pull/30319)）
- 修复（notifications）：a server with no window pushes phones when a terminal agent finishes or needs input（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30602](https://github.com/stablyai/orca/pull/30602)）
- 修复（mobile）：let an add or removal replace corrupt stored terminal keys（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30977](https://github.com/stablyai/orca/pull/30977)）

#### SSH, managed servers & remote workspaces {#v1-4-232-ssh-managed-servers-remote-workspaces}

> Reconnect and re-pair more reliably, keep tab closes through reloads, preserve unsaved editor drafts during migration, and upload files faster over high-latency links. Setup handles more hosts and restricted networks, with clearer disk-space, download and connection errors.

- 修复（renderer）：restored SSH session placeholders carry the host a listing would stamp（[@nwparker](https://github.com/nwparker)，[#30445](https://github.com/stablyai/orca/pull/30445)）
- 修复（open-in）：open a managed server's workspace in VS Code over Remote-SSH（[@nwparker](https://github.com/nwparker)，[#30441](https://github.com/stablyai/orca/pull/30441)）
- 修复（terminal）：reattach a restored terminal while an older daemon cannot answer (#30486)（[@nwparker](https://github.com/nwparker)，[#30499](https://github.com/stablyai/orca/pull/30499)）
- 修复（ssh）：rehome a cold-start converted workspace the scan missed, and notify replayed background-turn completions（[@nwparker](https://github.com/nwparker)，[#30578](https://github.com/stablyai/orca/pull/30578)）
- 修复（ssh）：follow a relaunched managed server's port; match quoted Windows forward argv（[@nwparker](https://github.com/nwparker)，[#30583](https://github.com/stablyai/orca/pull/30583)）
- 修复（terminal）：relay-era SSH panes open printed file paths on the host's server（[@OrcaWin](https://github.com/OrcaWin)，[#30240](https://github.com/stablyai/orca/pull/30240)）
- 修复（ssh）：managed servers install through SSH gateways that cut long commands (#30491)（[@nwparker](https://github.com/nwparker)，[#30549](https://github.com/stablyai/orca/pull/30549)）
- 修复（ssh）：relinking a stopped managed server keeps the project groups it holds, and later moves don't re-send them（[@nwparker](https://github.com/nwparker)，[#30608](https://github.com/stablyai/orca/pull/30608)）
- 修复（ssh）：make room for the pre-activation snapshot on remote hosts, and say why a capture failed（[@nwparker](https://github.com/nwparker)，[#30618](https://github.com/stablyai/orca/pull/30618)）
- 修复（ssh）：a cancelled or revoked host's browser command stops on the desktop（[@nwparker](https://github.com/nwparker)，[#30630](https://github.com/stablyai/orca/pull/30630)）
- 修复（ssh）：closing a bridged relay tab stops its shell, even across a restart（[@nwparker](https://github.com/nwparker)，[#30587](https://github.com/stablyai/orca/pull/30587)）
- 修复（ssh）：keep SFTP uploads pipelined so a high-latency link doesn't crawl（[@nwparker](https://github.com/nwparker)，[#30704](https://github.com/stablyai/orca/pull/30704)）
- 修复（ssh）：say the host's disk is full when a managed-server install runs out of space（[@nwparker](https://github.com/nwparker)，[#30679](https://github.com/stablyai/orca/pull/30679)）
- 修复（ssh）：say a noexec home can't run Orca's server, instead of "install an older version"（[@nwparker](https://github.com/nwparker)，[#30724](https://github.com/stablyai/orca/pull/30724)）
- 修复（remote）：keep a paired host's undelivered tab close across a reload（[@nwparker](https://github.com/nwparker)，[#30758](https://github.com/stablyai/orca/pull/30758)）
- 修复（ssh）：a network cut during a managed-server install no longer hangs, and says contact was lost（[@nwparker](https://github.com/nwparker)，[#30732](https://github.com/stablyai/orca/pull/30732)）
- 修复（orcad）：orca open-url opens the page on the paired desktop（[@nwparker](https://github.com/nwparker)，[#30782](https://github.com/stablyai/orca/pull/30782)）
- 修复（orcad-migration）：a pane saved in two tabs refuses on this desktop and names the tabs, not a server conflict（[@nwparker](https://github.com/nwparker)，[#30801](https://github.com/stablyai/orca/pull/30801)）
- 修复（remote）：a removed server's saved tab closes go with it; a same-machine re-pair keeps them（[@nwparker](https://github.com/nwparker)，[#30803](https://github.com/stablyai/orca/pull/30803)）
- 修复（ssh）：an overlapping managed-server update check sees the failure the first one recorded（[@nwparker](https://github.com/nwparker)，[#30835](https://github.com/stablyai/orca/pull/30835)）
- 修复（orcad-migration）：refuse before fencing a manifest no catalog request can carry（[@nwparker](https://github.com/nwparker)，[#30836](https://github.com/stablyai/orca/pull/30836)）
- 修复（ssh）：a bridged relay terminal's proven exit reaches the runtime from every close route（[@nwparker](https://github.com/nwparker)，[#30842](https://github.com/stablyai/orca/pull/30842)）
- 修复（managed-server）：snapshot capture and restore run on BusyBox before 1.30（[@nwparker](https://github.com/nwparker)，[#30840](https://github.com/stablyai/orca/pull/30840)）
- 修复（ssh）：an SSH server update counts terminals again just before it stops the server（[@nwparker](https://github.com/nwparker)，[#30874](https://github.com/stablyai/orca/pull/30874)）
- 修复（session-tabs）：a held paired-tab close survives an undecided re-pair, and a dropped one shows its tab at once（[@nwparker](https://github.com/nwparker)，[#30843](https://github.com/stablyai/orca/pull/30843)）
- 修复（ssh）：a managed tunnel follows the server's port after another desktop restarts it（[@nwparker](https://github.com/nwparker)，[#30888](https://github.com/stablyai/orca/pull/30888)）
- 修复（ssh）：Disconnect closes the managed server tunnels the SSH session carried（[@nwparker](https://github.com/nwparker)，[#30891](https://github.com/stablyai/orca/pull/30891)）
- 修复（ssh）：a system SSH forward owns its listener even when ssh_config sets a ControlMaster（[@nwparker](https://github.com/nwparker)，[#30887](https://github.com/stablyai/orca/pull/30887)）
- 修复（ssh）：two overlapping bridged-terminal attaches hand back the viewer they replace（[@nwparker](https://github.com/nwparker)，[#30856](https://github.com/stablyai/orca/pull/30856)）
- 修复（ssh）：orca open-url on a managed SSH host opens the page on the desktop through the browser bridge（[@nwparker](https://github.com/nwparker)，[#30849](https://github.com/stablyai/orca/pull/30849)）
- 修复（orcad-migration）：a host fenced on a manifest no request can carry can be cancelled by its id（[@nwparker](https://github.com/nwparker)，[#30864](https://github.com/stablyai/orca/pull/30864)）
- 修复（ssh）：say when this computer can't download Node for a managed server, and where an offline copy goes（[@nwparker](https://github.com/nwparker)，[#30911](https://github.com/stablyai/orca/pull/30911)）
- 修复（wsl）：keep the desktop pairing across host restarts（[@brennanb2025](https://github.com/brennanb2025)，[#29042](https://github.com/stablyai/orca/pull/29042)）
- 修复（hosts）：preserve complete status changes in the renderer（[@brennanb2025](https://github.com/brennanb2025)，[#29033](https://github.com/stablyai/orca/pull/29033)）
- 修复（wsl）：reconnect hosts when a retained connection stops answering（[@brennanb2025](https://github.com/brennanb2025)，[#29005](https://github.com/stablyai/orca/pull/29005)）
- 修复（ssh）：a legacy relay terminal stays with the relay that runs it when another relay lists the same id（[@nwparker](https://github.com/nwparker)，[#30870](https://github.com/stablyai/orca/pull/30870)）
- 修复（ssh）：download the pinned Node on the host when this computer can't reach it（[@nwparker](https://github.com/nwparker)，[#30945](https://github.com/stablyai/orca/pull/30945)）
- 修复（ssh）：a forward edit cut short by Disconnect keeps the host's saved port forwards（[@nwparker](https://github.com/nwparker)，[#30932](https://github.com/stablyai/orca/pull/30932)）
- 新增（ssh）：let a nodejs.org mirror serve the pinned Node on this computer and the host（[@nwparker](https://github.com/nwparker)，[#30981](https://github.com/stablyai/orca/pull/30981)）
- 新增（orcad-migration）：unsaved drafts stay on this desktop and are renamed to the server on commit（[@nwparker](https://github.com/nwparker)，[#30894](https://github.com/stablyai/orca/pull/30894)）
- 修复（ssh）：pair again over SSH when a managed server drops this desktop, instead of reconnecting forever（[@nwparker](https://github.com/nwparker)，[#30775](https://github.com/stablyai/orca/pull/30775)）

#### Workspaces, sidebar & tabs {#v1-4-232-workspaces-sidebar-tabs}

> Workspace actions consistently target the machine you chose, even when another host has a matching project or path. Space adds faster selection, inspectable changed files and a dedicated actions menu; bulk tab closes ask for confirmation.

- 修复（renderer）：a created or lineage-refreshed worktree replaces only its own host's copy（[@nwparker](https://github.com/nwparker)，[#30447](https://github.com/stablyai/orca/pull/30447)）
- 修复（source-control）：clear unavailable branch line totals（[@AmethystLiang](https://github.com/AmethystLiang)，[#30475](https://github.com/stablyai/orca/pull/30475)）
- 修复（i18n）：clarify closing all tabs to the left and right（[@AmethystLiang](https://github.com/AmethystLiang)，[#30535](https://github.com/stablyai/orca/pull/30535)）
- Confirm before bulk-closing tabs（[@AmethystLiang](https://github.com/AmethystLiang)，[#30551](https://github.com/stablyai/orca/pull/30551)）
- 修复（sidebar）：show the project name on ungrouped compact cards（[@brennanb2025](https://github.com/brennanb2025)，[#28890](https://github.com/stablyai/orca/pull/28890)）
- 修复（git）：stop starting Git in deleted project folders and for removed projects（[@brennanb2025](https://github.com/brennanb2025)，[#28822](https://github.com/stablyai/orca/pull/28822)）
- 修复（sidebar）：run previous and next worktree shortcuts from a text field（[@brennanb2025](https://github.com/brennanb2025)，[#28891](https://github.com/stablyai/orca/pull/28891)）
- 修复（runtime）：project removal and edits stay on the selected project's host（[@nwparker](https://github.com/nwparker)，[#30584](https://github.com/stablyai/orca/pull/30584)）
- 修复（projects）：a project added from the CLI, web or a paired desktop through a symlink or subfolder shows its workspaces（[@nwparker](https://github.com/nwparker)，[#30657](https://github.com/stablyai/orca/pull/30657)）
- 修复（projects）：setup edits and removals name the host, so the twin on another host is never touched（[@nwparker](https://github.com/nwparker)，[#30664](https://github.com/stablyai/orca/pull/30664)）
- 修复（runtime）：one teardown policy per kind; removal closes host browser pages everywhere, headless sleep stops terminals（[@nwparker](https://github.com/nwparker)，[#30715](https://github.com/stablyai/orca/pull/30715)）
- 修复（projects）：refuse to file a folder under a project its own GitHub remote contradicts（[@nwparker](https://github.com/nwparker)，[#30717](https://github.com/stablyai/orca/pull/30717)）
- 修复（runtime）：a new terminal the host can't confirm says why, instead of nothing（[@nwparker](https://github.com/nwparker)，[#30725](https://github.com/stablyai/orca/pull/30725)）
- 修复（projects）：removing a project on this computer stops its chats, pages and every terminal on the host（[@nwparker](https://github.com/nwparker)，[#30728](https://github.com/stablyai/orca/pull/30728)）
- 修复（runtime）：a project removal stops its workspaces' terminals together under one deadline; every teardown is classified by kind（[@nwparker](https://github.com/nwparker)，[#30752](https://github.com/stablyai/orca/pull/30752)）
- 修复（runtime）：a terminal spawn names its host; the removed-project fence keys by host (R4-2)（[@nwparker](https://github.com/nwparker)，[#30798](https://github.com/stablyai/orca/pull/30798)）
- 修复（projects）：a project move names the row it moves; a paired server's twin by its SSH target（[@nwparker](https://github.com/nwparker)，[#30794](https://github.com/stablyai/orca/pull/30794)）
- The workspace you're on disappearing lands you where a sidebar delete does, whatever removed it（[@brennanb2025](https://github.com/brennanb2025)，[#30428](https://github.com/stablyai/orca/pull/30428)）
- 修复（cli）：--environment connects to the server a differently-cased name resolved to（[@nwparker](https://github.com/nwparker)，[#30834](https://github.com/stablyai/orca/pull/30834)）
- 修复（persistence）：an id-only worktree write refuses same-id twins instead of taking the first writer's copy（[@nwparker](https://github.com/nwparker)，[#30841](https://github.com/stablyai/orca/pull/30841)）
- 修复（runtime）：a runtime worktree removal prunes the scan snapshots and label routes like the desktop one（[@nwparker](https://github.com/nwparker)，[#30845](https://github.com/stablyai/orca/pull/30845)）
- 修复（projects）：link cloned and existing folders for GitLab and other non-GitHub remotes（[@nwparker](https://github.com/nwparker)，[#30785](https://github.com/stablyai/orca/pull/30785)）
- 修复（sidebar）：a status or order drag writes the card you dragged, not its twin on another host（[@nwparker](https://github.com/nwparker)，[#30844](https://github.com/stablyai/orca/pull/30844)）
- 修复（renderer）：restoring or re-selecting a workspace keeps the host it was selected on（[@nwparker](https://github.com/nwparker)，[#30839](https://github.com/stablyai/orca/pull/30839)）
- 修复（sidebar-inputs）：a failed domain read is retried by the next flush or phone read（[@nwparker](https://github.com/nwparker)，[#30866](https://github.com/stablyai/orca/pull/30866)）
- 修复（runtime）：a terminal start on an SSH twin no longer wakes or is refused by this computer's sleep（[@nwparker](https://github.com/nwparker)，[#30860](https://github.com/stablyai/orca/pull/30860)）
- 修复（sidebar）：a Pinned drop or menu pin pins the card you chose, not its twin on another host（[@nwparker](https://github.com/nwparker)，[#30892](https://github.com/stablyai/orca/pull/30892)）
- 修复（renderer）：host writes route only through the strict owner, and twin projections stay on their host (review-5 #2 #9 #11)（[@nwparker](https://github.com/nwparker)，[#30890](https://github.com/stablyai/orca/pull/30890)）
- 修复（runtime）：a failed orphan adoption write rolls back instead of keeping the adopted tabs（[@nwparker](https://github.com/nwparker)，[#30942](https://github.com/stablyai/orca/pull/30942)）
- 修复（worktrees）：a sort order and a minted push remote land on the copy that named them（[@nwparker](https://github.com/nwparker)，[#30976](https://github.com/stablyai/orca/pull/30976)）
- 修复（space）：speed up selection and support reviewed workspace cleanup（[@nwparker](https://github.com/nwparker)，[#30989](https://github.com/stablyai/orca/pull/30989)）
- 修复（runtime）：a moved shell history waits only on this machine's shells; a phone never clears a twin's unread flag（[@nwparker](https://github.com/nwparker)，[#30991](https://github.com/stablyai/orca/pull/30991)）
- 给予：Space rows a dedicated actions menu（[@nwparker](https://github.com/nwparker)，[#31000](https://github.com/stablyai/orca/pull/31000)）
- 修复（sidebar）：a pin's reveal follows only the focused copy, by its own host（[@nwparker](https://github.com/nwparker)，[#31017](https://github.com/stablyai/orca/pull/31017)）

#### Terminals & shortcuts {#v1-4-232-terminals-shortcuts}

> Renamed panes stay in sync with their host, restarting a failed terminal opens a plain shell, and Copy works correctly on remapped Latin keyboard layouts.

- 修复（shortcuts）：Cmd+C no longer pastes on remapped Latin keyboard layouts（[@IncursorTech](https://github.com/IncursorTech)，[#29587](https://github.com/stablyai/orca/pull/29587)）
- 修复（terminal）：client pane names reach a desktop host's window, and open panes follow the host's（[@nwparker](https://github.com/nwparker)，[#30496](https://github.com/stablyai/orca/pull/30496)）
- 修复（terminal）：Restart on a failed terminal opens a plain shell instead of Codex（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30872](https://github.com/stablyai/orca/pull/30872)）

#### Editor, files & source control {#v1-4-232-editor-files-source-control}

> File links open beside their source tab group, HTML file URLs open as document previews, WSL repositories opened through UNC paths support staging and discarding, and diff views remember their position. Restoring a deleted file and creating a starter MCP config also check for intervening file changes; this protection does not yet apply to general editor saves.

- 修复（drops）：name extensionless dropped images by their bytes（[@younghwan91](https://github.com/younghwan91)，[#30379](https://github.com/stablyai/orca/pull/30379)）
- 打开：file links beside their source tab's group（[@AmethystLiang](https://github.com/AmethystLiang)，[#30399](https://github.com/stablyai/orca/pull/30399)）
- 打开：HTML file URLs as document previews（[@AmethystLiang](https://github.com/AmethystLiang)，[#30512](https://github.com/stablyai/orca/pull/30512)）
- 修复（editor）：opening a quoted lettered list with an unquoted continuation no longer crashes（[@OrcaWin](https://github.com/OrcaWin)，[#30247](https://github.com/stablyai/orca/pull/30247)）
- 新增（files）：guarded file writes that refuse to overwrite a changed file（[@nwparker](https://github.com/nwparker)，[#30605](https://github.com/stablyai/orca/pull/30605)）
- 修复（git）：stage and discard files in WSL repos opened by UNC path（[@s-stefanov](https://github.com/s-stefanov)，[#30693](https://github.com/stablyai/orca/pull/30693)）
- 修复（github）：treat SSH certificate org remotes (org-<id>@github.com) as GitHub（[@Yi-111-a](https://github.com/Yi-111-a)，[#30659](https://github.com/stablyai/orca/pull/30659)）
- 修复（git）：drop SSH host from clone folder names（[@wswsadadbaba123](https://github.com/wswsadadbaba123)，[#30763](https://github.com/stablyai/orca/pull/30763)）
- 修复（git）：forward stdin on buffered Git reads（[@nwparker](https://github.com/nwparker)，[#30634](https://github.com/stablyai/orca/pull/30634)）
- 修复（diff-comments）：a review note on a twin worktree saves to the open copy and names its host（[@nwparker](https://github.com/nwparker)，[#30855](https://github.com/stablyai/orca/pull/30855)）
- 修复（diff）：restore the All Changes view when its tab is reopened（[@nwparker](https://github.com/nwparker)，[#30943](https://github.com/stablyai/orca/pull/30943)）
- 修复（diff）：keep combined diff position stable across worktree switches（[@nwparker](https://github.com/nwparker)，[#30950](https://github.com/stablyai/orca/pull/30950)）

#### 浏览器 {#v1-4-232-browser}

> Sign in to sites that ask for a username and password, confirm before a page opens another app, and follow links between local HTML files. Remote browser sizing and clicks are more accurate, and automation respects text composition and revoked host access.

- 修复（browser）：a remote viewer larger than the host's browser pane sees the whole page and clicks land under the cursor（[@nwparker](https://github.com/nwparker)，[#30437](https://github.com/stablyai/orca/pull/30437)）
- 修复（browser）：switch client-hosted profiles by staging the replacement guest（[@nwparker](https://github.com/nwparker)，[#30452](https://github.com/stablyai/orca/pull/30452)）
- 修复（browser）：let a local HTML page follow its own file:// links（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30611](https://github.com/stablyai/orca/pull/30611)）
- 修复（browser）：refuse agent clicks while the user is mid-IME composition（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30358](https://github.com/stablyai/orca/pull/30358)）
- 新增（browser）：ask before a page opens another app（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30490](https://github.com/stablyai/orca/pull/30490)）
- 修复（browser）：label popups from committed document origins（[@AmethystLiang](https://github.com/AmethystLiang)，[#30540](https://github.com/stablyai/orca/pull/30540)）
- 新增（browser）：ask for a username and password when a site needs one（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30886](https://github.com/stablyai/orca/pull/30886)）
- 修复（browser）：a press an SSH host left held across commands is let go of when the host is revoked（[@nwparker](https://github.com/nwparker)，[#30847](https://github.com/stablyai/orca/pull/30847)）

#### Automations & orchestration {#v1-4-232-automations-orchestration}

> Scheduled runs can send work into an existing agent session and keep completed per-run sessions asleep for later. CLI host and project selection, pane titles and automation follow-up results are clearer, with less repeated work behind agent updates.

- 修复（cli）：--host and --project accept the names host list and project list print（[@nwparker](https://github.com/nwparker)，[#30438](https://github.com/stablyai/orca/pull/30438)）
- 修复（terminal）：report the host's saved pane names in terminal.list, and make clearing the last one stick（[@nwparker](https://github.com/nwparker)，[#30433](https://github.com/stablyai/orca/pull/30433)）
- 新增（cli）：set the title of one terminal pane（[@nwparker](https://github.com/nwparker)，[#30485](https://github.com/stablyai/orca/pull/30485)）
- 修复（automations）：headless reuse-session sends the prompt into the existing agent (#24278)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30594](https://github.com/stablyai/orca/pull/30594)）
- 修复（cli）：refuse server names --environment cannot tell apart, and say how to pick one of twin projects（[@nwparker](https://github.com/nwparker)，[#30676](https://github.com/stablyai/orca/pull/30676)）
- 性能（orchestration）：stop recompiling a mailbox lookup on every agent title（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30792](https://github.com/stablyai/orca/pull/30792)）
- 修复（automations）：headless keeps finished per-run sessions asleep instead of closing them (#24208)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30639](https://github.com/stablyai/orca/pull/30639)）
- 性能（automations）：release completed run observers（[@nwparker](https://github.com/nwparker)，[#13641](https://github.com/stablyai/orca/pull/13641)）
- 澄清：automation run CLI results and follow-up targets（[@nwparker](https://github.com/nwparker)，[#28262](https://github.com/stablyai/orca/pull/28262)）

#### Performance, reliability & diagnostics {#v1-4-232-performance-reliability-diagnostics}

> Session History avoids repeated transcript scans and keeps older workspace sessions visible. File watching, search, memory cleanup and saving after a full-disk error are more resilient, while crash reports capture better evidence for diagnosis.

- 修复（macos）：the TCC prompt watcher's log stream dies with Orca, and old orphans are reclaimed（[@nwparker](https://github.com/nwparker)，[#30148](https://github.com/stablyai/orca/pull/30148)）
- 修复（watcher）：stop unwatched windows from being re-subscribed to local watchers（[@nwparker](https://github.com/nwparker)，[#30412](https://github.com/stablyai/orca/pull/30412)）
- 修复（watcher）：flush file changes on a steady cadence instead of waiting for quiet（[@nwparker](https://github.com/nwparker)，[#30270](https://github.com/stablyai/orca/pull/30270)）
- Session History: the Workspace tab stops re-reading every transcript to find its sessions（[@brennanb2025](https://github.com/brennanb2025)，[#30469](https://github.com/stablyai/orca/pull/30469)）
- Session History: a repeat open keeps every older session of the workspace（[@brennanb2025](https://github.com/brennanb2025)，[#30586](https://github.com/stablyai/orca/pull/30586)）
- 修复（crash-reporting）：renderer crash reports say whether the window was hung or blank（[@OrcaWin](https://github.com/OrcaWin)，[#30692](https://github.com/stablyai/orca/pull/30692)）
- 修复（diagnostics）：crash bundles always keep the terminal daemon's newest log lines（[@OrcaWin](https://github.com/OrcaWin)，[#30690](https://github.com/stablyai/orca/pull/30690)）
- 修复（crash-reporting）：Windows native crash reports say what the fault touched and which code ran（[@OrcaWin](https://github.com/OrcaWin)，[#30691](https://github.com/stablyai/orca/pull/30691)）
- 修复（persistence）：a commit that runs out of disk no longer stops all later saves（[@nwparker](https://github.com/nwparker)，[#30694](https://github.com/stablyai/orca/pull/30694)）
- Session History: the "Reading N / M files" count reaches its total（[@brennanb2025](https://github.com/brennanb2025)，[#30683](https://github.com/stablyai/orca/pull/30683)）
- 性能：preserve matching Terminal settings sections during search（[@nwparker](https://github.com/nwparker)，[#23164](https://github.com/stablyai/orca/pull/23164)）
- 性能（file-explorer）：reject nonmatching names before path checks（[@nwparker](https://github.com/nwparker)，[#28572](https://github.com/stablyai/orca/pull/28572)）
- 性能（gitlab）：skip unused review details in Checks（[@nwparker](https://github.com/nwparker)，[#28643](https://github.com/stablyai/orca/pull/28643)）
- [mem] fix(memory): release consumed buffers, abandoned waits, and deleted diff views（[@OrcaWin](https://github.com/OrcaWin)，[#30650](https://github.com/stablyai/orca/pull/30650)）
- Speed up macOS updates by avoiding background installer throttling（[@nwparker](https://github.com/nwparker)，[#30944](https://github.com/stablyai/orca/pull/30944)）
- 修复（provider-process）：kill a provider group its SIGKILLed supervisor leaves behind（[@nwparker](https://github.com/nwparker)，[#30997](https://github.com/stablyai/orca/pull/30997)）

#### Smaller app packages {#v1-4-232-smaller-app-packages}

> Desktop and browser interfaces share installed assets, duplicate ripgrep copies and unused cloud sources are removed, and feature-tour animations use smaller files while preserving their pixels and timing.

- Exclude unused cloud service sources from desktop packages（[@nwparker](https://github.com/nwparker)，[#31004](https://github.com/stablyai/orca/pull/31004)）
- Shrink feature tour animations without changing pixels or timing（[@nwparker](https://github.com/nwparker)，[#31012](https://github.com/stablyai/orca/pull/31012)）
- 移除：identical packaged ripgrep copies without changing deployed servers（[@nwparker](https://github.com/nwparker)，[#31005](https://github.com/stablyai/orca/pull/31005)）
- Share installed desktop and browser assets（[@nwparker](https://github.com/nwparker)，[#31010](https://github.com/stablyai/orca/pull/31010)）

#### Relay service {#v1-4-232-relay-service}

> Connection recovery, regional routing and reserve capacity handling improve, alongside phone-resume infrastructure, monitoring and staged rollout tools.

- 修复（relay）：judge the reserve watch's 503 rule on non-drain 503s, not a host's own re-dials（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30487](https://github.com/stablyai/orca/pull/30487)）
- 修复（relay）：log controls a cell closes after host proof but before wiring（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30559](https://github.com/stablyai/orca/pull/30559)）
- 修复（relay）：keep connected hosts on a reserve cell set to existing-only（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30609](https://github.com/stablyai/orca/pull/30609)）
- 修复（relay-ops）：let the incident monitor sample a reserve-mode cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30661](https://github.com/stablyai/orca/pull/30661)）
- 修复（relay-ops）：judge a reserve cell's connections against its configured hard cap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30668](https://github.com/stablyai/orca/pull/30668)）
- 新增（relay）：add the per-cell phonePath switch, effective only in reserve mode（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30629](https://github.com/stablyai/orca/pull/30629)）
- 新增（relay）：resume paired phones from one device read on memory cells（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30649](https://github.com/stablyai/orca/pull/30649)）
- 新增（relay-ops）：watch a memory phone cell and turn its phone path off on a breach（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30662](https://github.com/stablyai/orca/pull/30662)）
- 新增（relay）：keep a memory resume's basis in the cell and confirm it from one read（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30651](https://github.com/stablyai/orca/pull/30651)）
- 新增（relay）：batch a memory cell's resume-confirmed audit rows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30655](https://github.com/stablyai/orca/pull/30655)）
- 修复（relay-ops）：let same-cap rolls run while another cell is reserve; refuse a reserve roll target by name（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30707](https://github.com/stablyai/orca/pull/30707)）
- 新增（relay）：count and log phone-path failures, and every attach deadline（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30656](https://github.com/stablyai/orca/pull/30656)）
- 杂项（relay）：pin staging c1 and c4 to image J for the step-6 staging test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30812](https://github.com/stablyai/orca/pull/30812)）
- 新增（relay-load）：drive paired-phone resumes so staging can time the step-6 phone path（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30816](https://github.com/stablyai/orca/pull/30816)）
- 修复（relay）：never send a raw error message to the desktop as a control error code（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30873](https://github.com/stablyai/orca/pull/30873)）
- 修复（relay-ops）：stop the reserve watch cleanly when the cell leaves reserve（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30972](https://github.com/stablyai/orca/pull/30972)）
- 修复（relay）：keep a host in its region when the database lane is full and a reserve cell has room（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30974](https://github.com/stablyai/orca/pull/30974)）

#### Tests, CI & maintenance {#v1-4-232-tests-ci-maintenance}

> compatibility and end-to-end coverage, faster release preparation, formatting checks and internal cleanup. This section also includes sidebar and terminal-layout work that remains behind a feature switch; those entries are not enabled product features in this release覆盖更广。

- 修复（cleanup）：count visits as last activity once terminals stop stamping Recent (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30397](https://github.com/stablyai/orca/pull/30397)）
- 测试（e2e）：align title-strip drops with pane selection rules（[@brennanb2025](https://github.com/brennanb2025)，[#29903](https://github.com/stablyai/orca/pull/29903)）
- 重构（sidebar）：the stamp-sorted window list runs no settle, latch or saved order (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30401](https://github.com/stablyai/orca/pull/30401)）
- 重构（sidebar）：main keeps sleeping retention only, no order of its own (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30404](https://github.com/stablyai/orca/pull/30404)）
- A CLI-started terminal shows once in its workspace, and a pane close main has no pane for closes in the window (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30391](https://github.com/stablyai/orca/pull/30391)）
- 新增（sidebar）：Smart Done means finished and unread (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30425](https://github.com/stablyai/orca/pull/30425)）
- 测试（sidebar）：the desktop window and a phone reading the feed draw the same list (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30426](https://github.com/stablyai/orca/pull/30426)）
- 新增（cleanup）：the owning host records last terminal use for cleanup's last active (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30431](https://github.com/stablyai/orca/pull/30431)）
- A paired server's workspace never gets main's layout commands: a pinning test (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30430](https://github.com/stablyai/orca/pull/30430)）
- 杂项（telemetry）：remove the three Smart sort telemetry events（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30435](https://github.com/stablyai/orca/pull/30435)）
- A CLI split whose pane is closed before it shows answers at once (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30439](https://github.com/stablyai/orca/pull/30439)）
- 重构（main）：import three ipc seams from their defining modules (no re-exports)（[@nwparker](https://github.com/nwparker)，[#30440](https://github.com/stablyai/orca/pull/30440)）
- 更新：prompt logic（[@AmethystLiang](https://github.com/AmethystLiang)，[#30444](https://github.com/stablyai/orca/pull/30444)）
- 新增（sidebar）：the owning host raises the workspace unread flag (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30450](https://github.com/stablyai/orca/pull/30450)）
- 重构（renderer）：one owner adapter for the deprecated-resolver folds, pinned by an acceptance table（[@nwparker](https://github.com/nwparker)，[#30451](https://github.com/stablyai/orca/pull/30451)）
- 测试（e2e）：the CLI retention test seeds its gone-pane record on disk, so it holds in both layout builds（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30432](https://github.com/stablyai/orca/pull/30432)）
- 重构（renderer）：fold four lib callers off the deprecated runtime-owner resolver（[@nwparker](https://github.com/nwparker)，[#30458](https://github.com/stablyai/orca/pull/30458)）
- The terminal server and desktop finish the two-pane terminal repair before startup continues (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30429](https://github.com/stablyai/orca/pull/30429)）
- Editor records keyed by owner, phone active file, and a bound on frame holds (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30473](https://github.com/stablyai/orca/pull/30473)）
- 重构（renderer）：fold 13 sidebar, hook and chat readers off the deprecated owner resolver, and count the adapter as a focus read（[@nwparker](https://github.com/nwparker)，[#30478](https://github.com/stablyai/orca/pull/30478)）
- 重构（ssh）：move the ssh-connection and ssh-target cluster into ssh/connection/ and ssh/targets/（[@nwparker](https://github.com/nwparker)，[#30479](https://github.com/stablyai/orca/pull/30479)）
- 构建：bump pnpm to 12.14.0（[@nwparker](https://github.com/nwparker)，[#30481](https://github.com/stablyai/orca/pull/30481)）
- 新增（sidebar）：the desktop window lists main's sidebar inputs behind the build switch (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30461](https://github.com/stablyai/orca/pull/30461)）
- 构建：declare dependencies that only hoisting supplied（[@nwparker](https://github.com/nwparker)，[#30225](https://github.com/stablyai/orca/pull/30225)）
- 重构（renderer）：fold activation mirroring and sort-order persistence off the deprecated owner resolver（[@nwparker](https://github.com/nwparker)，[#30484](https://github.com/stablyai/orca/pull/30484)）
- Main keeps an agent's resume record from the status it receives (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30455](https://github.com/stablyai/orca/pull/30455)）
- 修复（build）：shared native packages get one immutable build instead of in-place rebuilds（[@nwparker](https://github.com/nwparker)，[#30226](https://github.com/stablyai/orca/pull/30226)）
- 构建：share one pnpm virtual store across worktrees (off in CI and on Windows)（[@nwparker](https://github.com/nwparker)，[#30254](https://github.com/stablyai/orca/pull/30254)）
- 新增（sidebar）：the phone reads its workspace list from the sidebar inputs (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30462](https://github.com/stablyai/orca/pull/30462)）
- A first visit resumes a sleeping agent once, in its own pane (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30468](https://github.com/stablyai/orca/pull/30468)）
- 重构：extract helpers that agent-status files need room for（[@nwparker](https://github.com/nwparker)，[#30260](https://github.com/stablyai/orca/pull/30260)）
- 重构（ssh）：split ssh-connection-utils into concretely named modules（[@nwparker](https://github.com/nwparker)，[#30488](https://github.com/stablyai/orca/pull/30488)）
- Main writes a workspace sleep's resume records after the statuses it accepted before the sleep (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30482](https://github.com/stablyai/orca/pull/30482)）
- One spawn-options step for both ways Orca opens a terminal, and one first-size rule（[@brennanb2025](https://github.com/brennanb2025)，[#30390](https://github.com/stablyai/orca/pull/30390)）
- 重构（renderer）：fold launch, paste and terminal-create callers off the deprecated owner resolver; spawn refuses folder twins（[@nwparker](https://github.com/nwparker)，[#30497](https://github.com/stablyai/orca/pull/30497)）
- 测试（wsl）：exercise Native Chat on real WSL2 hosts（[@brennanb2025](https://github.com/brennanb2025)，[#28973](https://github.com/stablyai/orca/pull/28973)）
- 重构（shared）：move orcad-migration-* into src/shared/orcad-migration/（[@nwparker](https://github.com/nwparker)，[#30536](https://github.com/stablyai/orca/pull/30536)）
- Track usage of closing tabs to left and right（[@AmethystLiang](https://github.com/AmethystLiang)，[#30557](https://github.com/stablyai/orca/pull/30557)）
- 修复（wsl）：repair main typecheck after ssh-connection-utils split（[@nwparker](https://github.com/nwparker)，[#30566](https://github.com/stablyai/orca/pull/30566)）
- 重构（agent-status）：one live agent transition detector in main, read by the sort stamps（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30532](https://github.com/stablyai/orca/pull/30532)）
- 测试（floating-terminal）：mock the bulk-close confirmation the panel suite cannot render（[@nwparker](https://github.com/nwparker)，[#30568](https://github.com/stablyai/orca/pull/30568)）
- 构建：use the shared pnpm store on Windows by default（[@nwparker](https://github.com/nwparker)，[#30565](https://github.com/stablyai/orca/pull/30565)）
- Revert "fix(native-chat): Claude, Pi and ACP chats are Working only while the agent holds the send" (#30134)（[@brennanb2025](https://github.com/brennanb2025)，[#30572](https://github.com/stablyai/orca/pull/30572)）
- An e2e test cuts the window's layout feed mid-session and checks it recovers and survives a restart (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30574](https://github.com/stablyai/orca/pull/30574)）
- Editor files that share a path across two hosts: the tab lookup, the load report and the phone close match the right file (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30569](https://github.com/stablyai/orca/pull/30569)）
- The host raises the shared unread dot whatever each client's Filters say (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30581](https://github.com/stablyai/orca/pull/30581)）
- 测试（browser）：document blocked popup compatibility gates（[@AmethystLiang](https://github.com/AmethystLiang)，[#30537](https://github.com/stablyai/orca/pull/30537)）
- 重构（renderer）：fold browser creation, file actions and file preview off the deprecated owner resolver（[@nwparker](https://github.com/nwparker)，[#30562](https://github.com/stablyai/orca/pull/30562)）
- 重构（shell）：one shell-argument-quoting module for the duplicated quote copies（[@nwparker](https://github.com/nwparker)，[#30564](https://github.com/stablyai/orca/pull/30564)）
- 重构（orchestration）：delete the unreachable pre-mailbox terminal delivery path（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30576](https://github.com/stablyai/orca/pull/30576)）
- 构建：move cloud/ and docs/site/ to pnpm 12.14.0（[@nwparker](https://github.com/nwparker)，[#30600](https://github.com/stablyai/orca/pull/30600)）
- 重构（renderer）：one twin check, one worktree-copy scan, drop stale resolver mocks（[@nwparker](https://github.com/nwparker)，[#30579](https://github.com/stablyai/orca/pull/30579)）
- A pane closed while its terminal starts stays closed (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30560](https://github.com/stablyai/orca/pull/30560)）
- 杂项（docs）：use Node.js 24 for docs builds and runtime（[@nwparker](https://github.com/nwparker)，[#30615](https://github.com/stablyai/orca/pull/30615)）
- 修复（persistence）：repo writes take the row's identity, never a bare id（[@nwparker](https://github.com/nwparker)，[#30616](https://github.com/stablyai/orca/pull/30616)）
- 重构（plugins）：name shared catalog and manifest schema parts（[@nwparker](https://github.com/nwparker)，[#30612](https://github.com/stablyai/orca/pull/30612)）
- Align root Node types with the supported Node 24 runtime（[@nwparker](https://github.com/nwparker)，[#30617](https://github.com/stablyai/orca/pull/30617)）
- 修复（sidebar）：Hide sleeping keeps a paired server's active workspaces (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30624](https://github.com/stablyai/orca/pull/30624)）
- 修复（sidebar）：phone feed list leftovers before the flip (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30631](https://github.com/stablyai/orca/pull/30631)）
- 重构（terminal）：one PTY attribution for teardown, close and identity; delete the deprecated owner resolver（[@nwparker](https://github.com/nwparker)，[#30626](https://github.com/stablyai/orca/pull/30626)）
- 重构（ssh）：derive a host-key policy from the target owner（[@nwparker](https://github.com/nwparker)，[#30627](https://github.com/stablyai/orca/pull/30627)）
- 重构（process-host）：let runProcess callers observe stderr as it arrives（[@nwparker](https://github.com/nwparker)，[#30628](https://github.com/stablyai/orca/pull/30628)）
- 测试（managed-server）：6 KB wire-size budget for every POSIX host-op command（[@nwparker](https://github.com/nwparker)，[#30635](https://github.com/stablyai/orca/pull/30635)）
- 测试（e2e）：reveal specs create workspaces through main so they pass with the sidebar switch on（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30642](https://github.com/stablyai/orca/pull/30642)）
- 修复（sidebar）：the window raises the unread flag exactly when its host does not (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30638](https://github.com/stablyai/orca/pull/30638)）
- A CLI split that times out leaves no pane (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30563](https://github.com/stablyai/orca/pull/30563)）
- 修复（managed-server）：repair main typecheck after the byte-budget and snapshot-room PRs crossed（[@nwparker](https://github.com/nwparker)，[#30680](https://github.com/stablyai/orca/pull/30680)）
- 测试（relay）：census every activity-lease reader for phones without leases（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30625](https://github.com/stablyai/orca/pull/30625)）
- 重构（browser）：one page gate and one owner for a host command's hold（[@nwparker](https://github.com/nwparker)，[#30652](https://github.com/stablyai/orca/pull/30652)）
- 重构（composer）：split run-target rows and worktree-creation steps into named pieces（[@nwparker](https://github.com/nwparker)，[#30703](https://github.com/stablyai/orca/pull/30703)）
- 重构（renderer）：one FileTypeIcon component for file icons（[@nwparker](https://github.com/nwparker)，[#30695](https://github.com/stablyai/orca/pull/30695)）
- 重构：one repo-row owner stamp for session placeholders; pass-1 follow-ups（[@nwparker](https://github.com/nwparker)，[#30699](https://github.com/stablyai/orca/pull/30699)）
- 测试（e2e）：nine sidebar specs create workspaces and links through main so they pass with the switch on（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30667](https://github.com/stablyai/orca/pull/30667)）
- CI：run the layout-owner switch-on specs as an advisory PR check (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30582](https://github.com/stablyai/orca/pull/30582)）
- The layout drift log names the values that differ (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30678](https://github.com/stablyai/orca/pull/30678)）
- 新增（orcad-migration）：host applies a signed editor-drafts blob inside the commit (S10-H)（[@nwparker](https://github.com/nwparker)，[#30665](https://github.com/stablyai/orca/pull/30665)）
- 重构：de-barrel remote-runtime-client, runtime-terminal-stream and runtime-terminal-inspection (D2, D3)（[@nwparker](https://github.com/nwparker)，[#30684](https://github.com/stablyai/orca/pull/30684)）
- 重构（plugins）：extract the shared content-pack registry and list store（[@nwparker](https://github.com/nwparker)，[#30697](https://github.com/stablyai/orca/pull/30697)）
- 修复（security）：put every trust decision on a host-owned token surface（[@nwparker](https://github.com/nwparker)，[#30710](https://github.com/stablyai/orca/pull/30710)）
- 修复（sidebar）：key folder workspace rows by host so the phone matches the desktop (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30721](https://github.com/stablyai/orca/pull/30721)）
- 重构（pty）：every PTY retirement names its exit proof; ratchet the unproven ones（[@nwparker](https://github.com/nwparker)，[#30722](https://github.com/stablyai/orca/pull/30722)）
- 测试（e2e）：a phone lists the desktop's managed SSH workspace as the desktop sidebar does (switch on)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30718](https://github.com/stablyai/orca/pull/30718)）
- 测试（e2e）：mount-authority spec polls through the host's "can't answer yet" terminal list（[@nwparker](https://github.com/nwparker)，[#30743](https://github.com/stablyai/orca/pull/30743)）
- 测试（e2e）：pane-close specs close panes the way the user does and check main's copy (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30745](https://github.com/stablyai/orca/pull/30745)）
- 性能（sidebar）：announce a burst of sort-stamp writes once (dark switch)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30746](https://github.com/stablyai/orca/pull/30746)）
- 重构（orcad）：every snapshot state op fits the gateway exec budget in shell; the state lock sends its script once（[@nwparker](https://github.com/nwparker)，[#30744](https://github.com/stablyai/orca/pull/30744)）
- 重构（pane-layout）：retire the unread intent tag; renamedLeafIds is the one layout delta（[@nwparker](https://github.com/nwparker)，[#30734](https://github.com/stablyai/orca/pull/30734)）
- 修复（pty）：an exit proof names its incarnation; a spawn is tracked from its reply（[@nwparker](https://github.com/nwparker)，[#30754](https://github.com/stablyai/orca/pull/30754)）
- 测试（e2e）：two chat specs follow the pan-and-zoom preview and the renamed New tab chat row（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30755](https://github.com/stablyai/orca/pull/30755)）
- 修复（persistence）：repo-row store writes take the row, not the id; ratchet the rest (R4-2a)（[@nwparker](https://github.com/nwparker)，[#30756](https://github.com/stablyai/orca/pull/30756)）
- 测试（relay）：drill a memory cell through a database outage, and pin phone renewal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30666](https://github.com/stablyai/orca/pull/30666)）
- 修复（ci）：background steps are single run steps, so no action reads the event payload while the runner rewrites it（[@nwparker](https://github.com/nwparker)，[#30795](https://github.com/stablyai/orca/pull/30795)）
- 修复（persistence）：folder, group and session-state store writes name their host or why they needn't (R4-2c)（[@nwparker](https://github.com/nwparker)，[#30797](https://github.com/stablyai/orca/pull/30797)）
- 修复（persistence）：worktree meta and lineage writes take the row's host, not the id (R4-2b)（[@nwparker](https://github.com/nwparker)，[#30811](https://github.com/stablyai/orca/pull/30811)）
- A pane main first sees when its terminal starts goes where the window split it (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30772](https://github.com/stablyai/orca/pull/30772)）
- 样式：format the 10 files on main that oxfmt --check reports（[@nwparker](https://github.com/nwparker)，[#30828](https://github.com/stablyai/orca/pull/30828)）
- 修复：a tab close by the handle a split returned finds the new pane (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30786](https://github.com/stablyai/orca/pull/30786)）
- 测试（codex）：pin the stopped-send receipt rule where #30403 moved it (fix red main)（[@nwparker](https://github.com/nwparker)，[#30865](https://github.com/stablyai/orca/pull/30865)）
- 文档（editor）：design for one editor buffer per file（[@nwparker](https://github.com/nwparker)，[#30851](https://github.com/stablyai/orca/pull/30851)）
- 回退：remove the editor buffer design doc from the repo（[@nwparker](https://github.com/nwparker)，[#30875](https://github.com/stablyai/orca/pull/30875)）
- 修复（i18n）：stop extracting <style> sheets as translatable copy（[@nwparker](https://github.com/nwparker)，[#30765](https://github.com/stablyai/orca/pull/30765)）
- 重构（editor）：tab buffer state lives in a per-tab store record, mirrored onto the tab（[@nwparker](https://github.com/nwparker)，[#30885](https://github.com/stablyai/orca/pull/30885)）
- 重构（orcad-migration）：remove the host-side editor-drafts transfer, keep the durable-commit gate（[@nwparker](https://github.com/nwparker)，[#30884](https://github.com/stablyai/orca/pull/30884)）
- CI：fail the static job on unformatted files（[@nwparker](https://github.com/nwparker)，[#30863](https://github.com/stablyai/orca/pull/30863)）
- 停止：running the experimental layout suite on every matching PR（[@nwparker](https://github.com/nwparker)，[#30907](https://github.com/stablyai/orca/pull/30907)）
- 杂项（lint）：bring orcad-managed-tunnel-manager.ts back under max-lines（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30921](https://github.com/stablyai/orca/pull/30921)）
- 杂项（format）：format the files main's new formatting check rejects（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30929](https://github.com/stablyai/orca/pull/30929)）
- 样式：format the 22 files main merged unformatted (fix red main)（[@brennanb2025](https://github.com/brennanb2025)，[#30918](https://github.com/stablyai/orca/pull/30918)）
- 修复（managed-server）：keep the tunnel manager under its line limit (fix red main lint)（[@nwparker](https://github.com/nwparker)，[#30933](https://github.com/stablyai/orca/pull/30933)）
- 测试（browser）：wait for the popup fixture's first paint during startup, not in the first test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30854](https://github.com/stablyai/orca/pull/30854)）
- 杂项（ratchet）：prune the tabs-group-actions layout-writer baseline（[@brennanb2025](https://github.com/brennanb2025)，[#30869](https://github.com/stablyai/orca/pull/30869)）
- Run selected SSH tests instead of the whole suite on PRs（[@nwparker](https://github.com/nwparker)，[#30928](https://github.com/stablyai/orca/pull/30928)）
- A pane close by its terminal handle closes only that pane, even before the window lists it (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30920](https://github.com/stablyai/orca/pull/30920)）
- 样式：format three files that landed before the format check (fix red main)（[@nwparker](https://github.com/nwparker)，[#30948](https://github.com/stablyai/orca/pull/30948)）
- 测试（browser）：route input into fresh sandboxed popup iframes before clicking them（[@nwparker](https://github.com/nwparker)，[#30966](https://github.com/stablyai/orca/pull/30966)）
- 测试（e2e）：give the ACK-backpressured typing scenario the under-load timer-drift budget（[@nwparker](https://github.com/nwparker)，[#30968](https://github.com/stablyai/orca/pull/30968)）
- 测试（node-runtime）：stop the refused-download test hanging under the bun runner (fix red main)（[@nwparker](https://github.com/nwparker)，[#30967](https://github.com/stablyai/orca/pull/30967)）
- 测试（e2e）：measure typing-time renderer stalls with long tasks, not interval drift（[@nwparker](https://github.com/nwparker)，[#30971](https://github.com/stablyai/orca/pull/30971)）
- 性能（release）：overlap server checks and share the mobile bundle（[@nwparker](https://github.com/nwparker)，[#30990](https://github.com/stablyai/orca/pull/30990)）
- Restored terminals named only on their tab reattach after a restart (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30986](https://github.com/stablyai/orca/pull/30986)）
- Overlap Mac notarization waits while preserving release gates（[@nwparker](https://github.com/nwparker)，[#31006](https://github.com/stablyai/orca/pull/31006)）
- Three small fixes in the layout-owner build: repo reads, dragged-out pane folder, cancelled chat reader (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31003](https://github.com/stablyai/orca/pull/31003)）

### 新贡献者 {#v1-4-232-contributors}

- [@IncursorTech](https://github.com/IncursorTech) 首次贡献于 [#29587](https://github.com/stablyai/orca/pull/29587)
- [@younghwan91](https://github.com/younghwan91) 首次贡献于 [#30379](https://github.com/stablyai/orca/pull/30379)
- [@s-stefanov](https://github.com/s-stefanov) 首次贡献于 [#30693](https://github.com/stablyai/orca/pull/30693)
- [@Yi-111-a](https://github.com/Yi-111-a) 首次贡献于 [#30659](https://github.com/stablyai/orca/pull/30659)
- [@wswsadadbaba123](https://github.com/wswsadadbaba123) 首次贡献于 [#30763](https://github.com/stablyai/orca/pull/30763)

**完整变更对照：** [v1.4.230...v1.4.232](https://github.com/stablyai/orca/compare/v1.4.230...v1.4.232)

## v1.4.230 实验性 Native Chat 支持 Antigravity，可选择 Agent 并在聊天内安装 {#v1-4-230}

2026年10月19日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.230)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-230-short}

- **实验性 Native Chat：** 在聊天中使用 Antigravity，选择哪些 Agent 以聊天形式打开，并在聊天内安装缺失的 Agent。将复制的文件粘贴为附件、排队图片，并在附件与队列操作进行中看到更清晰的反馈。
- **账号与 Agent：** 切换 Claude 账号后，重启正在运行的会话到新账号。从 Settings 移除已下载的 Agent 运行时，并通过 Orca CLI 编辑或删除 Linear 评论。
- **手机端：** 就地编辑队列中的消息，用桌面风格卡片跟随工具运行，从历史恢复时立即看到对话。横屏手机把会话标签放在顶栏，Tasks 清楚显示你正在使用哪个桌面。
- **SSH 与远程工作区：** 断开保持断开，休眠工作区保持休眠，关闭的标签在重连后仍保持关闭。更清晰的服务器更新与重新配对提示帮助你恢复连接。
- **日常打磨：** Quick Command 快捷键跟随聚焦的分屏，标签预览等满悬停延迟再显示，文件标题栏提供 Reveal in Finder。工作区清理更好地保护其他机器上同路径的项目。

### 兼容性与升级说明 {#v1-4-230-compatibility-upgrade-notes}

**实验性 Native Chat：** 部分聊天功能需要远程宿主支持。请让宿主与 Orca 一起更新，以使用最新能力。

**SSH 主机上的 `orca` 命令：** 已有主机保留明确保存过的 CLI 控制偏好；未设置的偏好会迁移为关闭。若要允许已连接 SSH 主机上的命令打开并控制本桌面 Orca 里该主机工作区的浏览器标签，请在 Settings → SSH Hosts → 编辑该主机 → Advanced Connection 下启用 **Allow this host’s orca CLI to control Orca**。

---

### 产品体验 {#v1-4-230-product}

#### 实验性 Native Chat {#v1-4-230-native-chat-experimental-}

> 选择哪些 Agent 以聊天打开，使用 Antigravity，更可靠地附加文件与图片，并看到更清晰的队列、模型与输入所有权反馈。

- 当聊天宿主缺少所需 Agent 时提供 Install（[@brennanb2025](https://github.com/brennanb2025)，[#29051](https://github.com/stablyai/orca/pull/29051)）
- Chat：拖入的文件在附加完成前会卡住 Send（[@brennanb2025](https://github.com/brennanb2025)，[#29173](https://github.com/stablyai/orca/pull/29173)）
- 仍在进行中的队列操作会灰掉其控件，与手机端一致（[@brennanb2025](https://github.com/brennanb2025)，[#29120](https://github.com/stablyai/orca/pull/29120)）
- 图片消息像文本一样在队列中等待（[@brennanb2025](https://github.com/brennanb2025)，[#28655](https://github.com/stablyai/orca/pull/28655)）
- Chat：粘贴已复制的文件会附加它，与拖放相同（[@brennanb2025](https://github.com/brennanb2025)，[#29089](https://github.com/stablyai/orca/pull/29089)）
- 选择哪些 Agent 在 Native Chat 中打开（[@brennanb2025](https://github.com/brennanb2025)，[#29071](https://github.com/stablyai/orca/pull/29071)）
- ACP Agent 错误输出上的登录提示会以未登录结束启动或本轮（[@brennanb2025](https://github.com/brennanb2025)，[#28467](https://github.com/stablyai/orca/pull/28467)）
- Agent 可为每个聊天自行运行各自的权限模式（[@brennanb2025](https://github.com/brennanb2025)，[#28455](https://github.com/stablyai/orca/pull/28455)）
- 隐藏：Session History 中 Orca 的聊天命名请求（[@nwparker](https://github.com/nwparker)，[#30029](https://github.com/stablyai/orca/pull/30029)）
- 当两个 Claude Code 版本列出的模型不同时，正在运行的 Claude 聊天仍保留其模型（[@brennanb2025](https://github.com/brennanb2025)，[#30022](https://github.com/stablyai/orca/pull/30022)）
- 通过其 ACP 服务器在 Native Chat 中使用 Antigravity（[@brennanb2025](https://github.com/brennanb2025)，[#28595](https://github.com/stablyai/orca/pull/28595)）
- 被拒绝的 steer 仍把该轮保留为聊天的最新请求（[@brennanb2025](https://github.com/brennanb2025)，[#29907](https://github.com/stablyai/orca/pull/29907)）
- 仅当 Codex 持有发送时，Codex 聊天才显示 Working（[@brennanb2025](https://github.com/brennanb2025)，[#29922](https://github.com/stablyai/orca/pull/29922)）
- 共享登录变更时暂停该 Agent 的聊天启动（[@brennanb2025](https://github.com/brennanb2025)，[#28649](https://github.com/stablyai/orca/pull/28649)）
- 你按下的队列按钮显示工作中转圈（[@brennanb2025](https://github.com/brennanb2025)，[#30010](https://github.com/stablyai/orca/pull/30010)）
- 在 prompt 中把每张附加图片标为 [Image #N]（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28736](https://github.com/stablyai/orca/pull/28736)）
- 保持：恢复的 Agent 在 30 分钟后仍为未确认状态，而不是标成已完成（[@nwparker](https://github.com/nwparker)，[#30186](https://github.com/stablyai/orca/pull/30186)）
- 显示：聊天输入框被锁定的原因，并在手机占用输入时提供 Take back（[@nwparker](https://github.com/nwparker)，[#30199](https://github.com/stablyai/orca/pull/30199)）
- Antigravity 安装：在聊天中给出一条清晰消息，消息框保持原位（[@brennanb2025](https://github.com/brennanb2025)，[#30001](https://github.com/stablyai/orca/pull/30001)）
- Session History：刷新时搜索框下的扫描线不再跳动（[@brennanb2025](https://github.com/brennanb2025)，[#30158](https://github.com/stablyai/orca/pull/30158)）
- 用服务器自己的 Google 登录登入 Antigravity 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#28650](https://github.com/stablyai/orca/pull/28650)）
- 移动：把聊天视觉内容的 Open 与 Share 按钮放到其上方（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30356](https://github.com/stablyai/orca/pull/30356)）
- Claude 聊天保留其 CLI 已不再列出的模型（[@brennanb2025](https://github.com/brennanb2025)，[#30436](https://github.com/stablyai/orca/pull/30436)）

#### Agent、集成与账号 {#v1-4-230-agents-integrations-accounts}

> 切换 Claude 账号时提供重启提议，管理已下载运行时，编辑 Linear 评论，并保持终端会话与 GitLab 任务搜索可靠。

- 通过 Orca CLI 编辑和删除 Linear 评论（[@brennanb2025](https://github.com/brennanb2025)，[#30003](https://github.com/stablyai/orca/pull/30003)）
- 移除：从 Settings 行移除已下载的 Agent 运行时（[@brennanb2025](https://github.com/brennanb2025)，[#29140](https://github.com/stablyai/orca/pull/29140)）
- 当 shell 设置 CLAUDE_CONFIG_DIR 时跟随 Orca Claude 账号切换（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29890](https://github.com/stablyai/orca/pull/29890)）
- 切换后提议在新账号上重启正在运行的 Claude 会话（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29898](https://github.com/stablyai/orca/pull/29898)）
- 移除：仅当宿主上已无人能再运行它时才移除已下载的 Agent 运行时（[@brennanb2025](https://github.com/brennanb2025)，[#29139](https://github.com/stablyai/orca/pull/29139)）
- 允许：jcode's own client start its per-pane server（[@brennanb2025](https://github.com/brennanb2025)，[#30257](https://github.com/stablyai/orca/pull/30257)）
- Run the Antigravity usage check with agy's auto-update off（[@OrcaWin](https://github.com/OrcaWin)，[#30387](https://github.com/stablyai/orca/pull/30387)）
- 退出时不再警告已配对 Orca 服务器上仍在运行的终端（[@nwparker](https://github.com/nwparker)，[#30006](https://github.com/stablyai/orca/pull/30006)）
- 恢复：仅在显示时恢复重新打开工作区的休眠 Agent（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29459](https://github.com/stablyai/orca/pull/29459)）
- 一次 spawn 步骤为 Orca 打开终端的两种方式写入窗格身份（[@brennanb2025](https://github.com/brennanb2025)，[#29884](https://github.com/stablyai/orca/pull/29884)）
- 向用户说明一次：Claude 窗格里的 diff 面板是 Claude 自带的（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29818](https://github.com/stablyai/orca/pull/29818)）
- 保持：OMP prompt markers from ending an agent’s turn so phone chat can find its session（[@nwparker](https://github.com/nwparker)，[#30273](https://github.com/stablyai/orca/pull/30273)）
- 避免：duplicate snapshot replays after reveal（[@nwparker](https://github.com/nwparker)，[#30205](https://github.com/stablyai/orca/pull/30205)）
- 保持：OMP prompt markers from triggering unnecessary terminal repair（[@nwparker](https://github.com/nwparker)，[#30285](https://github.com/stablyai/orca/pull/30285)）
- Limit concurrent GitLab project requests to keep task searches within the queue limit（[@maxmilian](https://github.com/maxmilian)，[#30157](https://github.com/stablyai/orca/pull/30157)）

#### SSH、托管服务器与远程 {#v1-4-230-ssh-managed-servers-remote}

> 让断开、休眠工作区与已关闭标签保持一致，在服务器迁移时保留工作区身份，并用更清晰的更新与重新配对指引帮助恢复。

- 停止：suggesting --host to listings that reject it（[@nwparker](https://github.com/nwparker)，[#30012](https://github.com/stablyai/orca/pull/30012)）
- Explain why file open fails on a server with no app window（[@nwparker](https://github.com/nwparker)，[#30014](https://github.com/stablyai/orca/pull/30014)）
- A host converted to its managed server keeps its workspaces' visit recency（[@nwparker](https://github.com/nwparker)，[#30015](https://github.com/stablyai/orca/pull/30015)）
- Link a folder workspace the server kept when a re-created SSH host moves again (#27285)（[@nwparker](https://github.com/nwparker)，[#30017](https://github.com/stablyai/orca/pull/30017)）
- A password SSH host waits for you at launch instead of prompting（[@nwparker](https://github.com/nwparker)，[#30025](https://github.com/stablyai/orca/pull/30025)）
- Make the host's tab name the one source for CLI and desktop renames（[@nwparker](https://github.com/nwparker)，[#30037](https://github.com/stablyai/orca/pull/30037)）
- A slept remote workspace stays asleep through terminal orphan recovery（[@nwparker](https://github.com/nwparker)，[#30118](https://github.com/stablyai/orca/pull/30118)）
- A Disconnect stays disconnected, and Settings and the status bar agree（[@nwparker](https://github.com/nwparker)，[#30130](https://github.com/stablyai/orca/pull/30130)）
- Orca serve on orcad serves the browser client and answers plain HTTP（[@nwparker](https://github.com/nwparker)，[#30120](https://github.com/stablyai/orca/pull/30120)）
- A tab closed while a managed host is disconnected stays closed; deflake the shared-home spec（[@nwparker](https://github.com/nwparker)，[#30146](https://github.com/stablyai/orca/pull/30146)）
- Paired clients see a folder-upgraded Git project under the host workspace id（[@nwparker](https://github.com/nwparker)，[#30190](https://github.com/stablyai/orca/pull/30190)）
- 移动：the open workspace to the server's linked project when joining an existing server（[@nwparker](https://github.com/nwparker)，[#30189](https://github.com/stablyai/orca/pull/30189)）
- Saved terminal history no longer blocks a host's move to its Orca server (#30126)（[@nwparker](https://github.com/nwparker)，[#30188](https://github.com/stablyai/orca/pull/30188)）
- Say when a managed server may be behind this app, and retry a failed update once per launch（[@nwparker](https://github.com/nwparker)，[#30218](https://github.com/stablyai/orca/pull/30218)）
- A late relay-era attach releases only its own viewer, never a successor's（[@nwparker](https://github.com/nwparker)，[#30219](https://github.com/stablyai/orca/pull/30219)）
- 报告：a legacy relay host active once a day while it bridges terminals（[@nwparker](https://github.com/nwparker)，[#30229](https://github.com/stablyai/orca/pull/30229)）
- SSH host management on a server without the desktop app says why it can't (D3)（[@nwparker](https://github.com/nwparker)，[#30242](https://github.com/stablyai/orca/pull/30242)）
- A connection never redials a host the user disconnected before its teardown runs（[@nwparker](https://github.com/nwparker)，[#30245](https://github.com/stablyai/orca/pull/30245)）
- Refuse a migration request too large for the host's sealed frame before sending it（[@nwparker](https://github.com/nwparker)，[#30249](https://github.com/stablyai/orca/pull/30249)）
- Overlapping update checks never both try a host the first one just failed on（[@nwparker](https://github.com/nwparker)，[#30253](https://github.com/stablyai/orca/pull/30253)）
- 显示：Re-pair required for revoked servers and let you re-pair in place（[@nwparker](https://github.com/nwparker)，[#30271](https://github.com/stablyai/orca/pull/30271)）

#### 手机端 {#v1-4-230-phone}

> 就地编辑队列消息，跟随工具运行，恢复对话时可见历史，并更顺畅地浏览文件、Tasks 与横屏会话标签。

- 就地编辑队列中的消息（[@brennanb2025](https://github.com/brennanb2025)，[#28646](https://github.com/stablyai/orca/pull/28646)）
- 每个聊天一条 Working 行；去掉浮动的 “Agent is working” 胶囊（[@brennanb2025](https://github.com/brennanb2025)，[#29972](https://github.com/stablyai/orca/pull/29972)）
- 聊天的 Working 行使用桌面端转圈样式（[@brennanb2025](https://github.com/brennanb2025)，[#30008](https://github.com/stablyai/orca/pull/30008)）
- 保持：a headless host's chat tab through snapshot rebuilds（[@nwparker](https://github.com/nwparker)，[#30028](https://github.com/stablyai/orca/pull/30028)）
- 防止：markdown and file tab reload and screen flicker on retap and revisit（[@zhangxaochen](https://github.com/zhangxaochen)，[#30033](https://github.com/stablyai/orca/pull/30033)）
- 显示：the update screen instead of native screens when the desktop has no page（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29956](https://github.com/stablyai/orca/pull/29956)）
- 允许：Markdown refresh during desktop tab snapshots（[@nwparker](https://github.com/nwparker)，[#30040](https://github.com/stablyai/orca/pull/30040)）
- 从桌面端的页面绘制宿主 Accounts 屏幕（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30020](https://github.com/stablyai/orca/pull/30020)）
- 连接多台桌面时询问在哪台打开 Tasks（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30048](https://github.com/stablyai/orca/pull/30048)）
- 显示：which desktop the mobile Tasks screen is for（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30105](https://github.com/stablyai/orca/pull/30105)）
- A compact phone queue: shorter header, a capped scrolling list, and an editor that fits the card（[@brennanb2025](https://github.com/brennanb2025)，[#30016](https://github.com/stablyai/orca/pull/30016)）
- 按桌面端方式绘制聊天工具运行（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30135](https://github.com/stablyai/orca/pull/30135)）
- 在手机端为大型分支渲染 Source Control（[@nwparker](https://github.com/nwparker)，[#30215](https://github.com/stablyai/orca/pull/30215)）
- A session resumed from the phone's history shows its conversation before the first new turn (#10923)（[@nwparker](https://github.com/nwparker)，[#30283](https://github.com/stablyai/orca/pull/30283)）
- Break the transport and terminal-document import cycles, and gate cycles after mobile's install（[@nwparker](https://github.com/nwparker)，[#30290](https://github.com/stablyai/orca/pull/30290)）
- 横屏手机把会话标签放在顶栏（[@brennanb2025](https://github.com/brennanb2025)，[#29070](https://github.com/stablyai/orca/pull/29070)）

#### 工作区、侧栏与标签 {#v1-4-230-workspaces-sidebar-tabs}

> 保护不同机器上的同路径工作区，说明跨宿主操作，让快捷键落在聚焦分屏上，并使通知与标签预览更稳。

- Main produces per-workspace activity facts, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29980](https://github.com/stablyai/orca/pull/29980)）
- 停止：the notice stack flickering under a resting mouse, and fit the force-delete button to its notice（[@brennanb2025](https://github.com/brennanb2025)，[#29878](https://github.com/stablyai/orca/pull/29878)）
- ResolveOwner refuses folder and project-group twins instead of guessing this computer（[@nwparker](https://github.com/nwparker)，[#30009](https://github.com/stablyai/orca/pull/30009)）
- Main publishes desktop focus, pins, project and host order, and SSH/WSL host state, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30018](https://github.com/stablyai/orca/pull/30018)）
- Main keeps one live set of paired-server rows, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30027](https://github.com/stablyai/orca/pull/30027)）
- Main produces per-workspace PR facts, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30026](https://github.com/stablyai/orca/pull/30026)）
- Main keeps a registry of workspace creations in progress, checked against the window in dev and test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30021](https://github.com/stablyai/orca/pull/30021)）
- Ui.setCollapsed changes one section's collapse without undoing another device（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30044](https://github.com/stablyai/orca/pull/30044)）
- Say so when a project cannot join a group on another host（[@nwparker](https://github.com/nwparker)，[#30127](https://github.com/stablyai/orca/pull/30127)）
- Draw a project group once when two hosts publish it under one id（[@nwparker](https://github.com/nwparker)，[#30128](https://github.com/stablyai/orca/pull/30128)）
- A host-scoped purge leaves a surviving twin's tabs and edits alone（[@nwparker](https://github.com/nwparker)，[#30030](https://github.com/stablyai/orca/pull/30030)）
- Destructive host callers refuse an ambiguous owner instead of reading it as local（[@nwparker](https://github.com/nwparker)，[#30035](https://github.com/stablyai/orca/pull/30035)）
- Fold getExplicitRuntimeEnvironmentIdForWorktree callers into resolveOwner（[@nwparker](https://github.com/nwparker)，[#30059](https://github.com/stablyai/orca/pull/30059)）
- Confirm before sleeping a workspace that another host's copy shares（[@nwparker](https://github.com/nwparker)，[#30047](https://github.com/stablyai/orca/pull/30047)）
- Shrink twin-removal teardown to the attributed close actions（[@nwparker](https://github.com/nwparker)，[#30060](https://github.com/stablyai/orca/pull/30060)）
- Tighten the host-identity stack（[@nwparker](https://github.com/nwparker)，[#30124](https://github.com/stablyai/orca/pull/30124)）
- 停止：CLI-created worktrees flashing into a filtered sidebar（[@nwparker](https://github.com/nwparker)，[#30194](https://github.com/stablyai/orca/pull/30194)）
- Say a Linear task-status skip was for a multi-host workspace（[@nwparker](https://github.com/nwparker)，[#30243](https://github.com/stablyai/orca/pull/30243)）
- Apply Quick Command shortcuts and pane actions to the focused split（[@AmethystLiang](https://github.com/AmethystLiang)，[#30258](https://github.com/stablyai/orca/pull/30258)）
- 显示：when a paired server’s access is revoked or an update is required（[@nwparker](https://github.com/nwparker)，[#30280](https://github.com/stablyai/orca/pull/30280)）
- 等待：for the full hover delay before showing each tab preview（[@AmethystLiang](https://github.com/AmethystLiang)，[#30388](https://github.com/stablyai/orca/pull/30388)）

#### 编辑器、文件与 Markdown {#v1-4-230-editor-files-markdown}

> 从文件标题栏菜单在 Finder 中显示文件；仅当工作区属于本机时才运行 notebook 单元格。

- 从文件标题栏菜单在 Finder 中显示文件（[@nwparker](https://github.com/nwparker)，[#30129](https://github.com/stablyai/orca/pull/30129)）
- 仅当解析出的所有者是本机时才运行单元格（[@nwparker](https://github.com/nwparker)，[#30187](https://github.com/stablyai/orca/pull/30187)）

#### 浏览器 {#v1-4-230-browser}

> 用 Cmd/Ctrl+J 打开托管提供方网站，并在没有浏览器引擎的宿主上清理浏览器标签。

- 允许：Cmd+J open hosting-provider domains like github.io（[@AmethystLiang](https://github.com/AmethystLiang)，[#29989](https://github.com/stablyai/orca/pull/29989)）
- 在没有浏览器引擎的宿主上关闭客户端托管的幽灵标签（[@nwparker](https://github.com/nwparker)，[#30119](https://github.com/stablyai/orca/pull/30119)）

#### 性能与可靠性 {#v1-4-230-performance-reliability}

> 重试失败的 shell PATH 检查，并用钉住的 Bun 依赖加快开发期类型检查。

- 重试 shell PATH 检查，并在 shell 无法启动时回退（[@nwparker](https://github.com/nwparker)，[#30204](https://github.com/stablyai/orca/pull/30204)）
- 钉住：Bun as a devDependency and typecheck with it（[@nwparker](https://github.com/nwparker)，[#30149](https://github.com/stablyai/orca/pull/30149)）

#### 测试、CI 与维护 {#v1-4-230-tests-ci-maintenance}

> 回归覆盖、依赖更新与内部清理支撑上述改动。宿主拥有的布局与侧栏状态相关工作仍在关闭的构建开关之后，覆盖更广。

- Brand host-scoped worktree and repo keys for new code（[@nwparker](https://github.com/nwparker)，[#29990](https://github.com/stablyai/orca/pull/29990)）
- Agree with main on main-made terminal tabs and sleeping-agent records (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29967](https://github.com/stablyai/orca/pull/29967)）
- Agree with main on first-group ids, tab order and the preview flag (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29987](https://github.com/stablyai/orca/pull/29987)）
- Record chat tab opens and closes in main (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30019](https://github.com/stablyai/orca/pull/30019)）
- Record the chat pane the window picks in main (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30036](https://github.com/stablyai/orca/pull/30036)）
- 打开：into the window's emptied pane beside a split branch in one layout command (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30039](https://github.com/stablyai/orca/pull/30039)）
- Write no false preview flag on a new or promoted tab (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30041](https://github.com/stablyai/orca/pull/30041)）
- Record simulator tab opens and closes in main (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30034](https://github.com/stablyai/orca/pull/30034)）
- Put main's sidebar inputs behind the ORCA_SIDEBAR_INPUTS dark build switch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30050](https://github.com/stablyai/orca/pull/30050)）
- Main serves workspace icons as small data URLs for the phone (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30046](https://github.com/stablyai/orca/pull/30046)）
- Floating editor files keep one id from open (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30109](https://github.com/stablyai/orca/pull/30109)）
- Main keeps the list's time rules on one clock, checked against the window (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30104](https://github.com/stablyai/orca/pull/30104)）
- Main's layout Loader keeps one pane per terminal on restore (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30110](https://github.com/stablyai/orca/pull/30110)）
- Main records a Quick Command tab's label when the tab is created (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30112](https://github.com/stablyai/orca/pull/30112)）
- Save-divergence detector: skip empty workspaces, see dropped tab-bar entries and kept pane trees (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30125](https://github.com/stablyai/orca/pull/30125)）
- A background agent tab keeps its live title when another tab opens (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30131](https://github.com/stablyai/orca/pull/30131)）
- Dark phone feed of the sidebar inputs (sidebarInputs.read)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30161](https://github.com/stablyai/orca/pull/30161)）
- Pane titles stay layout: the window stops writing tab names as pane titles, and main loads them as the window does (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30136](https://github.com/stablyai/orca/pull/30136)）
- Main's temporal owner reads the catalog the way the window does (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30166](https://github.com/stablyai/orca/pull/30166)）
- Main produces this host's workspace rows, checked against the window (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30184](https://github.com/stablyai/orca/pull/30184)）
- One placement helper for drawn tab opens (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30174](https://github.com/stablyai/orca/pull/30174)）
- Main drops the layout of workspaces the catalog no longer validates (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30177](https://github.com/stablyai/orca/pull/30177)）
- Reopening a file in its open tab sends the main process the changed file record (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30197](https://github.com/stablyai/orca/pull/30197)）
- Main repairs a terminal stored in two panes once at startup (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30178](https://github.com/stablyai/orca/pull/30178)）
- Main records when a workspace's default tabs were applied (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30176](https://github.com/stablyai/orca/pull/30176)）
- Main keeps editor tabs under owned ids and in-place re-owns in step (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30206](https://github.com/stablyai/orca/pull/30206)）
- Refuse a layout change on a workspace a WSL move has paused (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30198](https://github.com/stablyai/orca/pull/30198)）
- Main routes folders by the window's host rule and never stops layout frames (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30201](https://github.com/stablyai/orca/pull/30201)）
- Phone and old-client tab lists keep editor tabs under owned ids (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30216](https://github.com/stablyai/orca/pull/30216)）
- One comparison-only worktreeIdentityKey replaces three key wrappers（[@nwparker](https://github.com/nwparker)，[#30217](https://github.com/stablyai/orca/pull/30217)）
- One worktree path equality; the ipc copy folded WSL ext4 tails（[@nwparker](https://github.com/nwparker)，[#30227](https://github.com/stablyai/orca/pull/30227)）
- The host that owns a workspace stamps its Recent and Smart keys (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30235](https://github.com/stablyai/orca/pull/30235)）
- After a restart, the host clears sort tiers nothing backs any more (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30259](https://github.com/stablyai/orca/pull/30259)）
- 去掉：the runtimeWorktreeIdsEqual alias; name the WSL hook relay gate for what it gates（[@nwparker](https://github.com/nwparker)，[#30264](https://github.com/stablyai/orca/pull/30264)）
- Main routes a project registered on two machines to the same owner the window saves to (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30196](https://github.com/stablyai/orca/pull/30196)）
- Window saves stop carrying tab and pane layout; main keeps its own (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30282](https://github.com/stablyai/orca/pull/30282)）
- The window's layout stream reconnects after a drop; a retried quit still sends resume records (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30380](https://github.com/stablyai/orca/pull/30380)）
- Only the tabs the window just changed wait for main's answer; the window-wide layout hold goes (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30384](https://github.com/stablyai/orca/pull/30384)）
- Sort Recent and Smart by the owning host's stamps, hold order under the pointer (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30284](https://github.com/stablyai/orca/pull/30284)）
- Renderer hydration cutoffs read main's status retention window（[@nwparker](https://github.com/nwparker)，[#30248](https://github.com/stablyai/orca/pull/30248)）
- One isRemoteExecutionHostPtyId, on prefix semantics（[@nwparker](https://github.com/nwparker)，[#30232](https://github.com/stablyai/orca/pull/30232)）
- 去掉：remote-pty checks the shared predicate already covers（[@nwparker](https://github.com/nwparker)，[#30256](https://github.com/stablyai/orca/pull/30256)）
- One isLocalExecutionHost in shared（[@nwparker](https://github.com/nwparker)，[#30241](https://github.com/stablyai/orca/pull/30241)）
- 导入：orcad helpers from their owning modules; delete the orcad-runtime-lifecycle re-export shim（[@nwparker](https://github.com/nwparker)，[#30265](https://github.com/stablyai/orca/pull/30265)）
- 移动：runtime/relay to runtime/mobile-cloud-relay（[@nwparker](https://github.com/nwparker)，[#30274](https://github.com/stablyai/orca/pull/30274)）
- 导入：mobile-cloud-relay and browser-host helpers from their owning modules（[@nwparker](https://github.com/nwparker)，[#30279](https://github.com/stablyai/orca/pull/30279)）
- SSH pane terminals and local-to-SSH tab moves reach main directly (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30281](https://github.com/stablyai/orca/pull/30281)）
- 导入：system-ssh and ssh -G modules directly; delete the ssh-system-fallback re-export shim（[@nwparker](https://github.com/nwparker)，[#30255](https://github.com/stablyai/orca/pull/30255)）
- Fence the legacy relay in ssh/legacy-relay/; live deploy primitives drop the relay name（[@nwparker](https://github.com/nwparker)，[#30292](https://github.com/stablyai/orca/pull/30292)）
- 移动：orcad activation into src/main/managed-server/activation/（[@nwparker](https://github.com/nwparker)，[#30320](https://github.com/stablyai/orca/pull/30320)）
- 移动：port forwarding and hostile-host test harnesses into their own folders（[@nwparker](https://github.com/nwparker)，[#30277](https://github.com/stablyai/orca/pull/30277)）
- 移动：the managed server's install and deploy code into src/main/managed-server/install/（[@nwparker](https://github.com/nwparker)，[#30335](https://github.com/stablyai/orca/pull/30335)）
- 移动：the managed server's lifecycle into src/main/managed-server/lifecycle/（[@nwparker](https://github.com/nwparker)，[#30343](https://github.com/stablyai/orca/pull/30343)）
- 移动：host state into src/main/managed-server/host-state/（[@nwparker](https://github.com/nwparker)，[#30347](https://github.com/stablyai/orca/pull/30347)）
- Group system-ssh transport, ssh config and remote exec into their own folders（[@nwparker](https://github.com/nwparker)，[#30355](https://github.com/stablyai/orca/pull/30355)）
- Group SSH and runtime-environment IPC handlers into ipc/ssh/ and ipc/runtime-environments/（[@nwparker](https://github.com/nwparker)，[#30362](https://github.com/stablyai/orca/pull/30362)）
- 导入：ipc helpers from their owning modules, not re-export shims（[@nwparker](https://github.com/nwparker)，[#30369](https://github.com/stablyai/orca/pull/30369)）
- 导入：renderer runtime, shared remote-runtime and orcad helpers from their owning modules（[@nwparker](https://github.com/nwparker)，[#30370](https://github.com/stablyai/orca/pull/30370)）
- 导入：runtime helpers from their owning modules, not re-export shims（[@nwparker](https://github.com/nwparker)，[#30373](https://github.com/stablyai/orca/pull/30373)）
- 导入：worktree, watcher and runtime-environment helpers from their owning modules（[@nwparker](https://github.com/nwparker)，[#30375](https://github.com/stablyai/orca/pull/30375)）
- 发送：a browser tab's window times to main with its open (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29988](https://github.com/stablyai/orca/pull/29988)）
- 移动：runtime/browser-host-* into runtime/browser-host/（[@nwparker](https://github.com/nwparker)，[#30275](https://github.com/stablyai/orca/pull/30275)）
- The common-dir check uses areWorktreePathsEqual（[@nwparker](https://github.com/nwparker)，[#30263](https://github.com/stablyai/orca/pull/30263)）
- Every build is the OTA shell; drop the native/OTA build switch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29969](https://github.com/stablyai/orca/pull/29969)）
- Delete native screens the OTA shell no longer reaches（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29979](https://github.com/stablyai/orca/pull/29979)）
- Name the vm transcript and mobile pending-write caps for what they count（[@nwparker](https://github.com/nwparker)，[#30251](https://github.com/stablyai/orca/pull/30251)）
- Host-twin fixture and twin isolation suite for destructive and selection actions（[@nwparker](https://github.com/nwparker)，[#29991](https://github.com/stablyai/orca/pull/29991)）
- Test that main and the window agree on a worktree identity rekey (tests only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30005](https://github.com/stablyai/orca/pull/30005)）
- Read isStructuredTab from the shared module the newest release defines it in（[@brennanb2025](https://github.com/brennanb2025)，[#30000](https://github.com/stablyai/orca/pull/30000)）
- 打开：and close 结构化聊天 tabs with an isolated Claude stand-in（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30011](https://github.com/stablyai/orca/pull/30011)）
- Ratchet importers of the deprecated runtime-owner resolvers（[@nwparker](https://github.com/nwparker)，[#30002](https://github.com/stablyai/orca/pull/30002)）
- 修复：a timing-dependent hang in the PTY launch race test (CI only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30132](https://github.com/stablyai/orca/pull/30132)）
- 更新：vulnerable dependencies and prune stale overrides（[@nwparker](https://github.com/nwparker)，[#30143](https://github.com/stablyai/orca/pull/30143)）
- Make the hidden split-pane exit test exit cleanly (test only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30162](https://github.com/stablyai/orca/pull/30162)）
- 等待：for git status before the discard confirmation test acts (test only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30165](https://github.com/stablyai/orca/pull/30165)）
- 减小：lint dependencies with Oxlint（[@nwparker](https://github.com/nwparker)，[#30180](https://github.com/stablyai/orca/pull/30180)）
- 钉住：the CocoaPods installer used by iOS releases（[@nwparker](https://github.com/nwparker)，[#30181](https://github.com/stablyai/orca/pull/30181)）
- Guard: older sessions' moved editor tabs get the right workspace id (tests only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30172](https://github.com/stablyai/orca/pull/30172)）
- Lock routine React Doctor and Knip execution（[@nwparker](https://github.com/nwparker)，[#30183](https://github.com/stablyai/orca/pull/30183)）
- 移除：unused desktop and mobile declarations（[@nwparker](https://github.com/nwparker)，[#30182](https://github.com/stablyai/orca/pull/30182)）
- Ship the locked skills installer instead of executing npx（[@nwparker](https://github.com/nwparker)，[#30185](https://github.com/stablyai/orca/pull/30185)）
- Simplify CocoaPods pin checks by reusing existing Ruby CI（[@nwparker](https://github.com/nwparker)，[#30208](https://github.com/stablyai/orca/pull/30208)）
- Start the managed-SSH lane for remote product changes no route names（[@nwparker](https://github.com/nwparker)，[#30210](https://github.com/stablyai/orca/pull/30210)）
- Revert bundled skills installer; restore pinned skills@1.7.2（[@nwparker](https://github.com/nwparker)，[#30207](https://github.com/stablyai/orca/pull/30207)）
- Fail when Electron and orcad wire the runtime differently without a reason（[@nwparker](https://github.com/nwparker)，[#30212](https://github.com/stablyai/orca/pull/30212)）
- Delete the rollout-flag module nothing reads（[@nwparker](https://github.com/nwparker)，[#30211](https://github.com/stablyai/orca/pull/30211)）
- Delete the never-served TLS branch of the LAN WebSocket server（[@nwparker](https://github.com/nwparker)，[#30220](https://github.com/stablyai/orca/pull/30220)）
- Freeze the clock in the explicit-binary timeout test（[@nwparker](https://github.com/nwparker)，[#30221](https://github.com/stablyai/orca/pull/30221)）
- Delete unimported SSH, renderer and orchestration modules（[@nwparker](https://github.com/nwparker)，[#30214](https://github.com/stablyai/orca/pull/30214)）
- ORCA_FEATURE_REMOTE_AGENT_HOOKS now only gates the WSL hook relay（[@nwparker](https://github.com/nwparker)，[#30223](https://github.com/stablyai/orca/pull/30223)）
- Fail when orca serve's serve-selection entry or its chunks stay packed (#27404 guard)（[@nwparker](https://github.com/nwparker)，[#30228](https://github.com/stablyai/orca/pull/30228)）
- Fail when CI config, workflows or e2e code name a src/ file that no longer exists（[@nwparker](https://github.com/nwparker)，[#30224](https://github.com/stablyai/orca/pull/30224)）
- Orca serve's command line makes orcad serve the web client (#30120 regression)（[@nwparker](https://github.com/nwparker)，[#30222](https://github.com/stablyai/orca/pull/30222)）
- Start the managed-SSH lane for every helper only its specs import（[@nwparker](https://github.com/nwparker)，[#30233](https://github.com/stablyai/orca/pull/30233)）
- Native-ignore watcher test waits on delivered events, not a fixed sleep（[@nwparker](https://github.com/nwparker)，[#30236](https://github.com/stablyai/orca/pull/30236)）
- Start the remote host lanes and cross-version job for the transport code they execute（[@nwparker](https://github.com/nwparker)，[#30239](https://github.com/stablyai/orca/pull/30239)）
- Windows CLI matrix convert cell uses the convert helper that exists（[@nwparker](https://github.com/nwparker)，[#30231](https://github.com/stablyai/orca/pull/30231)）
- 钉住：the 12 hand-kept error-code lists to their callers' policy（[@nwparker](https://github.com/nwparker)，[#30246](https://github.com/stablyai/orca/pull/30246)）
- Path-literal check scans live gate references; historical gate commands move to currentCommand（[@nwparker](https://github.com/nwparker)，[#30252](https://github.com/stablyai/orca/pull/30252)）
- ComposeWorktreeId plus a ratchet on hand-built worktree ids（[@nwparker](https://github.com/nwparker)，[#30238](https://github.com/stablyai/orca/pull/30238)）
- Resolve macOS tmpdir realpath in create-intent and clone tests（[@nwparker](https://github.com/nwparker)，[#30268](https://github.com/stablyai/orca/pull/30268)）
- Tighten the round-2 parity, serve and watcher tests（[@nwparker](https://github.com/nwparker)，[#30267](https://github.com/stablyai/orca/pull/30267)）
- Compatibility folders name their entry modules instead of an index barrel（[@nwparker](https://github.com/nwparker)，[#30269](https://github.com/stablyai/orca/pull/30269)）
- Ratchet type errors under tests/ so a broken spec import can't land unnoticed（[@nwparker](https://github.com/nwparker)，[#30286](https://github.com/stablyai/orca/pull/30286)）
- Ratchet the legacy relay fence (importers of ssh/legacy-relay/ and COMPAT seams)（[@nwparker](https://github.com/nwparker)，[#30317](https://github.com/stablyai/orca/pull/30317)）
- Format the resume and transcript files main left unformatted（[@brennanb2025](https://github.com/brennanb2025)，[#30137](https://github.com/stablyai/orca/pull/30137)）

### 新贡献者 {#v1-4-230-contributors}

- [@zhangxaochen](https://github.com/zhangxaochen) 首次贡献于 [#30033](https://github.com/stablyai/orca/pull/30033)
- [@maxmilian](https://github.com/maxmilian) 首次贡献于 [#30157](https://github.com/stablyai/orca/pull/30157)

**完整变更对照：** [v1.4.229...v1.4.230](https://github.com/stablyai/orca/compare/v1.4.229...v1.4.230)

## v1.4.229 实验性 Native Chat 可逐轮审查编辑，共享技能支持更多 Agent {#v1-4-229}

2026年10月17日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.229)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-229-short}

- **Native chat (experimental):** Review turn-by-turn edits inline, expand diagrams to pan and zoom, share chat visuals with a click, and see Claude goals and Codex context usage. Keyboard answers, an unread divider and Copy on Select make long conversations easier to navigate.
- **Shared skills:** Shared-skill installation now supports 20 additional agents, with broader WSL discovery and the right install locations for tools such as Kiro, Qoder and CodeBuddy.
- **Phone:** Workspace filters, grouping and sorting now follow the desktop’s shared choices. Long-press for linked issues and notes, work with server workspaces and browser pages, or continue a supported chat in a new terminal conversation.
- **SSH and remote terminals:** Reconnect fixes preserve split panes, paste order and managed-server project groups. Sleeping agents resume their conversations, and removing one machine’s project leaves its same-path counterpart alone.
- **Workspaces and everyday polish:** Open a website from Cmd/Ctrl+J, watch checkout progress as a worktree is created, and clean up workspaces with an explicit confirmation before stopping running agents.
- **Jira planning:** Switch between issue lists and boards, focus on the current sprint, reuse saved JQL and Jira favourites, and start workspaces from desktop or phone. Your agents can read and update Jira tickets through the Orca CLI, too.

### Known issues {#v1-4-229-known-issues}

**Native chat (experimental):** Features that depend on a remote host are available when that host supports them. Update the host alongside Orca to get the latest capabilities.

**The `orca` command on SSH hosts:** Existing hosts keep their saved Orca CLI control preference. To let agents there manage workspaces or control the desktop browser, turn on **Allow this host’s orca CLI to control Orca** under Settings → SSH Hosts → edit the host → Advanced Connection.

---

### 产品体验 {#v1-4-229-product}

#### 自动化 {#v1-4-229-automations}

> Create and edit automations on SSH projects with older paired servers, and keep scheduled work attached to the right host.

- 停止：offering Blank Terminal in agent-only pickers (automations)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26961](https://github.com/stablyai/orca/pull/26961)）
- Start server-run automations' agents through the launch executor（[@brennanb2025](https://github.com/brennanb2025)，[#26820](https://github.com/stablyai/orca/pull/26820)）
- 显示：valid multi-day automation schedules（[@nwparker](https://github.com/nwparker)，[#26850](https://github.com/stablyai/orca/pull/26850)）
- Automation runs, CLI tabs and folder-workspace browser tabs follow the owner（[@OrcaWin](https://github.com/OrcaWin)，[#27246](https://github.com/stablyai/orca/pull/27246)）
- Find folder-workspace targets on the Automations page（[@OrcaWin](https://github.com/OrcaWin)，[#27416](https://github.com/stablyai/orca/pull/27416)）
- 停止：offering Resume workspace for runs that never started an agent (STA-10103)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28179](https://github.com/stablyai/orca/pull/28179)）
- Format the jobs-file limit consistently（[@nwparker](https://github.com/nwparker)，[#28220](https://github.com/stablyai/orca/pull/28220)）
- 移除：Hermes automation support（[@AmethystLiang](https://github.com/AmethystLiang)，[#28519](https://github.com/stablyai/orca/pull/28519)）
- Sleep a finished run's terminal instead of closing it（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28838](https://github.com/stablyai/orca/pull/28838)）
- Run Now matches the managed server's setup after an SSH host moves（[@nwparker](https://github.com/nwparker)，[#29394](https://github.com/stablyai/orca/pull/29394)）
- Page automations runs so a paired server's history fits its replies（[@nwparker](https://github.com/nwparker)，[#29446](https://github.com/stablyai/orca/pull/29446)）
- Automations create/edit for an SSH project work against an older paired server（[@nwparker](https://github.com/nwparker)，[#29924](https://github.com/stablyai/orca/pull/29924)）

#### Native chat (experimental) {#v1-4-229-native-chat-experimental-}

> Review edits inline, expand diagrams, share visuals, follow Claude goals and Codex context usage, and keep long conversations easier to read and continue.

- Re-land Claude per-account folders (#24434, #26405) with the upgrade and proxy fixes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26801](https://github.com/stablyai/orca/pull/26801)）
- Save a new chat's first message during create（[@brennanb2025](https://github.com/brennanb2025)，[#26332](https://github.com/stablyai/orca/pull/26332)）
- A new Pi chat names the model it will run on its first frame（[@brennanb2025](https://github.com/brennanb2025)，[#26821](https://github.com/stablyai/orca/pull/26821)）
- Start orchestration workers as Native Chats for every agent that has Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#26776](https://github.com/stablyai/orca/pull/26776)）
- Highlight code blocks and shell commands（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26343](https://github.com/stablyai/orca/pull/26343)）
- 打开：a chat visual in its own tab instead of the sidebar（[@brennanb2025](https://github.com/brennanb2025)，[#26728](https://github.com/stablyai/orca/pull/26728)）
- 保持：Chat UI users with a Terminal default on the terminal, with a chat mode switch in the upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#26915](https://github.com/stablyai/orca/pull/26915)）
- 允许：a Codex chat stop a command it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#26780](https://github.com/stablyai/orca/pull/26780)）
- 新增："Copy sign-in link instead" for Claude accounts (STA-9912)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26990](https://github.com/stablyai/orca/pull/26990)）
- Every new-chat request opens its own chat（[@brennanb2025](https://github.com/brennanb2025)，[#26782](https://github.com/stablyai/orca/pull/26782)）
- Native chat: identify a paired device by its device id, never its credential（[@brennanb2025](https://github.com/brennanb2025)，[#26777](https://github.com/stablyai/orca/pull/26777)）
- Match model picker type to the options menu（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26349](https://github.com/stablyai/orca/pull/26349)）
- Every agent reports its learned default model once, when a chat starts（[@brennanb2025](https://github.com/brennanb2025)，[#26982](https://github.com/stablyai/orca/pull/26982)）
- Floating-workspace chats of every native-chat agent keep links in the folder they started in（[@brennanb2025](https://github.com/brennanb2025)，[#26981](https://github.com/stablyai/orca/pull/26981)）
- 保持：select-all and copy in a chat from reaching the terminal underneath（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26831](https://github.com/stablyai/orca/pull/26831)）
- Accept sends through their own receipt（[@brennanb2025](https://github.com/brennanb2025)，[#26672](https://github.com/stablyai/orca/pull/26672)）
- Edit a queued message in place, even while a question is open（[@brennanb2025](https://github.com/brennanb2025)，[#26886](https://github.com/stablyai/orca/pull/26886)）
- Settle a reply cut off by a server restart（[@brennanb2025](https://github.com/brennanb2025)，[#26460](https://github.com/stablyai/orca/pull/26460)）
- 隐藏：agent message controls while the turn runs（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26404](https://github.com/stablyai/orca/pull/26404)）
- 去掉：the redundant 'Waiting for your answer' line from queued cards（[@brennanb2025](https://github.com/brennanb2025)，[#27073](https://github.com/stablyai/orca/pull/27073)）
- 显示：attached files as filename pills in the composer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26409](https://github.com/stablyai/orca/pull/26409)）
- Offer Codex Ultrafast as a speed choice（[@brennanb2025](https://github.com/brennanb2025)，[#26962](https://github.com/stablyai/orca/pull/26962)）
- 允许：a Codex chat stop a sub-agent from the background-tasks strip（[@brennanb2025](https://github.com/brennanb2025)，[#27026](https://github.com/stablyai/orca/pull/27026)）
- Lazy WSL tier for Claude, Grok and omp lookup by id（[@OrcaWin](https://github.com/OrcaWin)，[#27082](https://github.com/stablyai/orca/pull/27082)）
- 恢复：a WSL session only in its own namespace, with a Linux Pi path（[@OrcaWin](https://github.com/OrcaWin)，[#27092](https://github.com/stablyai/orca/pull/27092)）
- 回收：the pending image bubble when the CLI records its path as text（[@OrcaWin](https://github.com/OrcaWin)，[#27095](https://github.com/stablyai/orca/pull/27095)）
- 回收：a first send's echo in transcript time, not this client's（[@OrcaWin](https://github.com/OrcaWin)，[#27099](https://github.com/stablyai/orca/pull/27099)）
- 减小：memory used to count Codex usage and avoid partial totals（[@nwparker](https://github.com/nwparker)，[#26966](https://github.com/stablyai/orca/pull/26966)）
- 更新：Claude usage without rereading the whole conversation（[@nwparker](https://github.com/nwparker)，[#26967](https://github.com/stablyai/orca/pull/26967)）
- 给予：each animation a reduced-motion state（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26276](https://github.com/stablyai/orca/pull/26276)）
- 允许：a Grok chat list and stop the commands it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27022](https://github.com/stablyai/orca/pull/27022)）
- 保留：running subagent rows in long chats（[@brennanb2025](https://github.com/brennanb2025)，[#26798](https://github.com/stablyai/orca/pull/26798)）
- Honor inactive Claude account retry deadlines（[@nwparker](https://github.com/nwparker)，[#26936](https://github.com/stablyai/orca/pull/26936)）
- Read ZCode conversations in their recorded order（[@nwparker](https://github.com/nwparker)，[#27142](https://github.com/stablyai/orca/pull/27142)）
- Register a short PostCompact hook command（[@vampik33](https://github.com/vampik33)，[#25211](https://github.com/stablyai/orca/pull/25211)）
- 修复：Codex usage bypassing configured proxy routing（[@nwparker](https://github.com/nwparker)，[#26942](https://github.com/stablyai/orca/pull/26942)）
- A new chat's model and effort pickers match their first frame before the agent starts（[@brennanb2025](https://github.com/brennanb2025)，[#27031](https://github.com/stablyai/orca/pull/27031)）
- A closed chat tab stays closed instead of coming back on the right（[@brennanb2025](https://github.com/brennanb2025)，[#27205](https://github.com/stablyai/orca/pull/27205)）
- Put Continue in the card that says the reply stopped（[@brennanb2025](https://github.com/brennanb2025)，[#27097](https://github.com/stablyai/orca/pull/27097)）
- One shared subagent tracker for Claude, Codex and Grok chat rows（[@brennanb2025](https://github.com/brennanb2025)，[#27228](https://github.com/stablyai/orca/pull/27228)）
- 允许：managed SSH Claude chats load the agent SDK（[@brennanb2025](https://github.com/brennanb2025)，[#26450](https://github.com/stablyai/orca/pull/26450)）
- Offer resume after restart for chats whose only work was in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27167](https://github.com/stablyai/orca/pull/27167)）
- Copy in remote Orca Server Codex sessions reaches your clipboard（[@OrcaWin](https://github.com/OrcaWin)，[#27605](https://github.com/stablyai/orca/pull/27605)）
- 保持：diagram source mounted and retire reveal history（[@brennanb2025](https://github.com/brennanb2025)，[#26690](https://github.com/stablyai/orca/pull/26690)）
- 保持：SSH chat providers alive after the desktop disconnects（[@brennanb2025](https://github.com/brennanb2025)，[#26473](https://github.com/stablyai/orca/pull/26473)）
- Native chat: queued-message actions and question answers accept through their own receipt（[@brennanb2025](https://github.com/brennanb2025)，[#26988](https://github.com/stablyai/orca/pull/26988)）
- One set of rules for chat text size, colour, hover and focus（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26685](https://github.com/stablyai/orca/pull/26685)）
- Use quote icon for Add to chat（[@brennanb2025](https://github.com/brennanb2025)，[#27631](https://github.com/stablyai/orca/pull/27631)）
- Jump to messages without scrolling animation（[@AmethystLiang](https://github.com/AmethystLiang)，[#27612](https://github.com/stablyai/orca/pull/27612)）
- Native chat: every agent launches through one composed launch path（[@brennanb2025](https://github.com/brennanb2025)，[#27204](https://github.com/stablyai/orca/pull/27204)）
- Offer Resume in New Native Chat only while the tab's agent is running（[@brennanb2025](https://github.com/brennanb2025)，[#27520](https://github.com/stablyai/orca/pull/27520)）
- 显示：hook failure details in error cards（[@nwparker](https://github.com/nwparker)，[#27824](https://github.com/stablyai/orca/pull/27824)）
- Honor Chat UI setting for worktree agent creation（[@brennanb2025](https://github.com/brennanb2025)，[#27796](https://github.com/stablyai/orca/pull/27796)）
- 显示：turn edit diffs inline in Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#27758](https://github.com/stablyai/orca/pull/27758)）
- Terminal header button: Resume in New Native Chat replaces Show chat view（[@brennanb2025](https://github.com/brennanb2025)，[#27184](https://github.com/stablyai/orca/pull/27184)）
- Message rail lights a message sent while the agent was working（[@brennanb2025](https://github.com/brennanb2025)，[#27821](https://github.com/stablyai/orca/pull/27821)）
- Name orchestration worker chat tabs after their task title（[@brennanb2025](https://github.com/brennanb2025)，[#28045](https://github.com/stablyai/orca/pull/28045)）
- Wrap long lines in code blocks（[@brennanb2025](https://github.com/brennanb2025)，[#26130](https://github.com/stablyai/orca/pull/26130)）
- Start the Codex usage probe off the main thread so focus doesn't freeze the UI（[@OrcaWin](https://github.com/OrcaWin)，[#27707](https://github.com/stablyai/orca/pull/27707)）
- Native chat: read one saved row per subagent (part 1 of 2)（[@brennanb2025](https://github.com/brennanb2025)，[#27914](https://github.com/stablyai/orca/pull/27914)）
- Name the agent when it refuses a message（[@brennanb2025](https://github.com/brennanb2025)，[#27946](https://github.com/stablyai/orca/pull/27946)）
- Require Codex 0.136.0 for chats（[@brennanb2025](https://github.com/brennanb2025)，[#26684](https://github.com/stablyai/orca/pull/26684)）
- 移动：Chat UI's chat settings from Experimental to the Chat page（[@brennanb2025](https://github.com/brennanb2025)，[#28050](https://github.com/stablyai/orca/pull/28050)）
- Register the Windows statusLine so usage updates without Git Bash（[@OrcaWin](https://github.com/OrcaWin)，[#27710](https://github.com/stablyai/orca/pull/27710)）
- Session History shows OpenCode, Grok, OMP and Pi chats as chats and refuses a second terminal writer（[@brennanb2025](https://github.com/brennanb2025)，[#27183](https://github.com/stablyai/orca/pull/27183)）
- 移动：the start-refusal table out so Lint passes on main（[@brennanb2025](https://github.com/brennanb2025)，[#28083](https://github.com/stablyai/orca/pull/28083)）
- Each Claude/Codex chat gets its own permission mode（[@brennanb2025](https://github.com/brennanb2025)，[#26116](https://github.com/stablyai/orca/pull/26116)）
- Replace chat upgrade switch with primary Enable Now button（[@nwparker](https://github.com/nwparker)，[#28113](https://github.com/stablyai/orca/pull/28113)）
- Native chat tabs show their recorded provider, not one guessed from the title（[@brennanb2025](https://github.com/brennanb2025)，[#28082](https://github.com/stablyai/orca/pull/28082)）
- Host writes one saved row per subagent（[@brennanb2025](https://github.com/brennanb2025)，[#27947](https://github.com/stablyai/orca/pull/27947)）
- Make Enable Now the full-width action in the chat upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#28199](https://github.com/stablyai/orca/pull/28199)）
- Seed the chat permission default from Claude's and Codex's own arguments（[@brennanb2025](https://github.com/brennanb2025)，[#28100](https://github.com/stablyai/orca/pull/28100)）
- 移动：Permissions for new chats into the Chat page's Behavior section（[@brennanb2025](https://github.com/brennanb2025)，[#28212](https://github.com/stablyai/orca/pull/28212)）
- 修复：delayed agent launches such as sleep 30 && claude（[@nwparker](https://github.com/nwparker)，[#28205](https://github.com/stablyai/orca/pull/28205)）
- 显示：Codex model capacity failures as red agent status（[@nwparker](https://github.com/nwparker)，[#28231](https://github.com/stablyai/orca/pull/28231)）
- Record the Codex capacity capture's known replay divergence（[@OrcaWin](https://github.com/OrcaWin)，[#28286](https://github.com/stablyai/orca/pull/28286)）
- 去掉：the duplicate Codex capacity replay baseline entry（[@OrcaWin](https://github.com/OrcaWin)，[#28295](https://github.com/stablyai/orca/pull/28295)）
- 去掉：the duplicate Codex capacity replay entry（[@OrcaWin](https://github.com/OrcaWin)，[#28297](https://github.com/stablyai/orca/pull/28297)）
- 恢复：the single Codex capacity replay entry（[@OrcaWin](https://github.com/OrcaWin)，[#28301](https://github.com/stablyai/orca/pull/28301)）
- Expand mermaid diagrams into a pan and zoom viewer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#27715](https://github.com/stablyai/orca/pull/27715)）
- Load long chats on the phone by keeping every update within its limit（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28203](https://github.com/stablyai/orca/pull/28203)）
- Chats from before permission modes keep the mode they were running with（[@brennanb2025](https://github.com/brennanb2025)，[#28099](https://github.com/stablyai/orca/pull/28099)）
- 恢复：in New Native Chat for Grok and OMP terminal conversations（[@brennanb2025](https://github.com/brennanb2025)，[#28049](https://github.com/stablyai/orca/pull/28049)）
- 停止：is saved before it acts, and a late or repeated Stop does nothing（[@brennanb2025](https://github.com/brennanb2025)，[#27076](https://github.com/stablyai/orca/pull/27076)）
- 显示：context usage in Codex chats（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28084](https://github.com/stablyai/orca/pull/28084)）
- Slash-menu command names no longer look oversized（[@brennanb2025](https://github.com/brennanb2025)，[#28461](https://github.com/stablyai/orca/pull/28461)）
- Copy the Codex TOML parser into packaged Orca（[@nwparker](https://github.com/nwparker)，[#28416](https://github.com/stablyai/orca/pull/28416)）
- Combine model and options into one picker（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#27972](https://github.com/stablyai/orca/pull/27972)）
- Phone Stop reaches a message the agent hasn't answered; unreadable task list reports unconfirmed（[@brennanb2025](https://github.com/brennanb2025)，[#28243](https://github.com/stablyai/orca/pull/28243)）
- A Claude model that's gone switches to the list's default when you send（[@brennanb2025](https://github.com/brennanb2025)，[#27826](https://github.com/stablyai/orca/pull/27826)）
- Store a chat's permission mode on its own, so a model pick can't reset it（[@brennanb2025](https://github.com/brennanb2025)，[#28268](https://github.com/stablyai/orca/pull/28268)）
- Pass the clock to a recorded option pick（[@nwparker](https://github.com/nwparker)，[#28571](https://github.com/stablyai/orca/pull/28571)）
- 去掉：the duplicate now key left by crossing fixes（[@nwparker](https://github.com/nwparker)，[#28599](https://github.com/stablyai/orca/pull/28599)）
- Questions an agent sends as permission requests are never auto-answered（[@brennanb2025](https://github.com/brennanb2025)，[#28449](https://github.com/stablyai/orca/pull/28449)）
- 恢复：in New Native Chat for OpenCode（[@brennanb2025](https://github.com/brennanb2025)，[#28072](https://github.com/stablyai/orca/pull/28072)）
- Native chat: a message stopped before the agent got it reaches the agent with your next send（[@brennanb2025](https://github.com/brennanb2025)，[#27623](https://github.com/stablyai/orca/pull/27623)）
- Native chat: record which agent run wrote each journal item (1/5, rebuild of #26867)（[@brennanb2025](https://github.com/brennanb2025)，[#28092](https://github.com/stablyai/orca/pull/28092)）
- 恢复：in New Native Chat for Pi（[@brennanb2025](https://github.com/brennanb2025)，[#28080](https://github.com/stablyai/orca/pull/28080)）
- Share a chat visual from the chat（[@brennanb2025](https://github.com/brennanb2025)，[#28479](https://github.com/stablyai/orca/pull/28479)）
- 恢复：in New CLI for OpenCode and OMP chats（[@brennanb2025](https://github.com/brennanb2025)，[#28075](https://github.com/stablyai/orca/pull/28075)）
- 新增：a "New" line above unseen messages（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28333](https://github.com/stablyai/orca/pull/28333)）
- 发送：typing after a click to the chat's composer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28728](https://github.com/stablyai/orca/pull/28728)）
- Copy chat selections when Copy on Select is on（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28737](https://github.com/stablyai/orca/pull/28737)）
- Chat scratch folders expire after 30 days unused（[@brennanb2025](https://github.com/brennanb2025)，[#28394](https://github.com/stablyai/orca/pull/28394)）
- Native chat: one current-work projection for every host reader, death recorded first (2/5, rebuild of #26867)（[@brennanb2025](https://github.com/brennanb2025)，[#28103](https://github.com/stablyai/orca/pull/28103)）
- Use short effort label in the Native Chat model pill（[@AmethystLiang](https://github.com/AmethystLiang)，[#29029](https://github.com/stablyai/orca/pull/29029)）
- Recognize missing history before chat creation（[@brennanb2025](https://github.com/brennanb2025)，[#28261](https://github.com/stablyai/orca/pull/28261)）
- Focus the composer after a keyboard switch between chats（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29152](https://github.com/stablyai/orca/pull/29152)）
- 显示：and focus the field in pi text dialogs（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28895](https://github.com/stablyai/orca/pull/28895)）
- 显示：Claude's /goal in the goal banner（[@brennanb2025](https://github.com/brennanb2025)，[#28923](https://github.com/stablyai/orca/pull/28923)）
- Start OMP on cmd.exe when setup runs first（[@brennanb2025](https://github.com/brennanb2025)，[#29176](https://github.com/stablyai/orca/pull/29176)）
- 保持：Claude skills tagged as skills after the agent changes folder（[@brennanb2025](https://github.com/brennanb2025)，[#29030](https://github.com/stablyai/orca/pull/29030)）
- 恢复：large terminal conversations in a new Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#29056](https://github.com/stablyai/orca/pull/29056)）
- Chat agents can declare a managed runtime that a start runs but never installs（[@brennanb2025](https://github.com/brennanb2025)，[#28460](https://github.com/stablyai/orca/pull/28460)）
- 打开：a Native Chat copy in the CLI without waiting for History（[@brennanb2025](https://github.com/brennanb2025)，[#29126](https://github.com/stablyai/orca/pull/29126)）
- One queue header that becomes the pause row; drop the composer Resume and the send dialog（[@brennanb2025](https://github.com/brennanb2025)，[#28654](https://github.com/stablyai/orca/pull/28654)）
- 支持：arrow-key answers in chat question cards（[@brennanb2025](https://github.com/brennanb2025)，[#28865](https://github.com/stablyai/orca/pull/28865)）
- Paste clipboard images into a chat on a managed SSH host or paired server（[@nwparker](https://github.com/nwparker)，[#29278](https://github.com/stablyai/orca/pull/29278)）
- 修复：terminal daemon restart leaving older Codex conversations locked（[@nwparker](https://github.com/nwparker)，[#29216](https://github.com/stablyai/orca/pull/29216)）
- Chat agents can run with their own temp folder, cleared when they exit（[@brennanb2025](https://github.com/brennanb2025)，[#28462](https://github.com/stablyai/orca/pull/28462)）
- A reclamation primitive removes all but the kept managed runtime release（[@brennanb2025](https://github.com/brennanb2025)，[#28507](https://github.com/stablyai/orca/pull/28507)）
- Settle acknowledged messages after a paged reconnect（[@brennanb2025](https://github.com/brennanb2025)，[#28993](https://github.com/stablyai/orca/pull/28993)）
- Acting on one chat no longer waits on checks of every other chat（[@brennanb2025](https://github.com/brennanb2025)，[#26555](https://github.com/stablyai/orca/pull/26555)）
- Link a bare file name once the chat's folder has it（[@brennanb2025](https://github.com/brennanb2025)，[#28818](https://github.com/stablyai/orca/pull/28818)）
- 修复：keyboard focus when revealing a chat in another pane（[@brennanb2025](https://github.com/brennanb2025)，[#28987](https://github.com/stablyai/orca/pull/28987)）
- Save agent prompts whole, bounded by what a chat message carries（[@brennanb2025](https://github.com/brennanb2025)，[#24488](https://github.com/stablyai/orca/pull/24488)）
- A slash command that starts a turn shows one Worked-for bar（[@brennanb2025](https://github.com/brennanb2025)，[#29013](https://github.com/stablyai/orca/pull/29013)）
- 保持：the "New" line in place when a turn is expanded（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29230](https://github.com/stablyai/orca/pull/29230)）
- Native chat: one settlement transaction for everything an ended run left (4/5, rebuild of #26867)（[@brennanb2025](https://github.com/brennanb2025)，[#28111](https://github.com/stablyai/orca/pull/28111)）
- 启用：Claude plugin images and bounded terminal file transport（[@nwparker](https://github.com/nwparker)，[#28200](https://github.com/stablyai/orca/pull/28200)）
- 保持：idle Claude sessions selected during nested Codex work（[@nwparker](https://github.com/nwparker)，[#29386](https://github.com/stablyai/orca/pull/29386)）
- Never run a chat on an older host with more access than Ask for approval allows（[@nwparker](https://github.com/nwparker)，[#29442](https://github.com/stablyai/orca/pull/29442)）
- A transcript lookup miss creates no Codex directories（[@nwparker](https://github.com/nwparker)，[#29557](https://github.com/stablyai/orca/pull/29557)）
- 保持：saved visuals from before the chat-scratch rename（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29717](https://github.com/stablyai/orca/pull/29717)）
- Offer Claude's own / commands (like /goal) in a chat before Claude starts（[@brennanb2025](https://github.com/brennanb2025)，[#29026](https://github.com/stablyai/orca/pull/29026)）
- 停止：following the end when the reader scrolls over a visual（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29116](https://github.com/stablyai/orca/pull/29116)）
- Offer actions for what you right-click in chat（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28729](https://github.com/stablyai/orca/pull/28729)）
- 修复：extra terminal during background native-chat setup（[@AmethystLiang](https://github.com/AmethystLiang)，[#29810](https://github.com/stablyai/orca/pull/29810)）
- 等待：for agent readiness without blocking Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#27925](https://github.com/stablyai/orca/pull/27925)）
- 保持：Claude's /color, /doctor and /reload-plugins in the chat / menu（[@brennanb2025](https://github.com/brennanb2025)，[#29784](https://github.com/stablyai/orca/pull/29784)）
- Identify the owner when resume creation is refused（[@brennanb2025](https://github.com/brennanb2025)，[#29119](https://github.com/stablyai/orca/pull/29119)）
- 保持：pending chat decisions available outside loaded history（[@brennanb2025](https://github.com/brennanb2025)，[#29121](https://github.com/stablyai/orca/pull/29121)）
- Dictate into the composer when it lacks focus（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29855](https://github.com/stablyai/orca/pull/29855)）
- OMP, OpenCode and Grok chats follow their own permission mode（[@brennanb2025](https://github.com/brennanb2025)，[#29335](https://github.com/stablyai/orca/pull/29335)）
- Decide provider failures by kind, never by searching the payload（[@brennanb2025](https://github.com/brennanb2025)，[#29092](https://github.com/stablyai/orca/pull/29092)）
- A managed runtime installs only when asked, with progress and cancel（[@brennanb2025](https://github.com/brennanb2025)，[#29023](https://github.com/stablyai/orca/pull/29023)）
- A dot between the queue header's label and its count（[@brennanb2025](https://github.com/brennanb2025)，[#29268](https://github.com/stablyai/orca/pull/29268)）
- Hosts install a managed runtime over RPC, and mark agents whose program Orca provides（[@brennanb2025](https://github.com/brennanb2025)，[#29024](https://github.com/stablyai/orca/pull/29024)）
- The app follows a host's managed runtime install state, shared by every surface（[@brennanb2025](https://github.com/brennanb2025)，[#29048](https://github.com/stablyai/orca/pull/29048)）
- Verify the actual CLI conversation during resume（[@brennanb2025](https://github.com/brennanb2025)，[#29124](https://github.com/stablyai/orca/pull/29124)）
- Idle cleanup and commands read the helpers the agent reported, not the capped status store（[@brennanb2025](https://github.com/brennanb2025)，[#29905](https://github.com/stablyai/orca/pull/29905)）
- One install row shows and drives a managed runtime install, for Settings and chat（[@brennanb2025](https://github.com/brennanb2025)，[#29049](https://github.com/stablyai/orca/pull/29049)）

#### Agents, integrations & orchestration {#v1-4-229-agents-integrations-orchestration}

> Plan work in Jira with boards, saved filters and current-sprint views, find the right task, and keep agent launches and session status consistent across machines.

- 报告：Kiro agent status and list Kiro sessions in history（[@w-felipe360](https://github.com/w-felipe360)，[#26695](https://github.com/stablyai/orca/pull/26695)）
- 显示：the usage unit once in the status bar（[@AmethystLiang](https://github.com/AmethystLiang)，[#26869](https://github.com/stablyai/orca/pull/26869)）
- Start plain new-tab agent launches through the host's agent.launch（[@brennanb2025](https://github.com/brennanb2025)，[#26489](https://github.com/stablyai/orca/pull/26489)）
- One host-routed agent-detection entry point（[@OrcaWin](https://github.com/OrcaWin)，[#27054](https://github.com/stablyai/orca/pull/27054)）
- Route the first-work branch rename by the repo's execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27080](https://github.com/stablyai/orca/pull/27080)）
- A session dropped on a pane edge splits the pane in paired-runtime workspaces（[@OrcaWin](https://github.com/OrcaWin)，[#27102](https://github.com/stablyai/orca/pull/27102)）
- Throttle and background last-status.json writes（[@nwparker](https://github.com/nwparker)，[#26822](https://github.com/stablyai/orca/pull/26822)）
- An old Windows or unknown-platform host asks to update instead of answering its default list（[@OrcaWin](https://github.com/OrcaWin)，[#27164](https://github.com/stablyai/orca/pull/27164)）
- Exclude label groups from assignable labels（[@nwparker](https://github.com/nwparker)，[#26861](https://github.com/stablyai/orca/pull/26861)）
- 显示：DeepSeek icon for observed Build sessions（[@nwparker](https://github.com/nwparker)，[#26863](https://github.com/stablyai/orca/pull/26863)）
- Name Agent Dashboard column regions（[@nwparker](https://github.com/nwparker)，[#26865](https://github.com/stablyai/orca/pull/26865)）
- One agent inventory per host and execution context（[@OrcaWin](https://github.com/OrcaWin)，[#27225](https://github.com/stablyai/orca/pull/27225)）
- Review providers resolve the repo on its host（[@OrcaWin](https://github.com/OrcaWin)，[#27247](https://github.com/stablyai/orca/pull/27247)）
- A server's late account result stays with that server（[@OrcaWin](https://github.com/OrcaWin)，[#27262](https://github.com/stablyai/orca/pull/27262)）
- GitHub Projects boards read from the task page's source host（[@OrcaWin](https://github.com/OrcaWin)，[#27270](https://github.com/stablyai/orca/pull/27270)）
- 保持：Coding Plan credentials and quota tied to the selected account（[@nwparker](https://github.com/nwparker)，[#24674](https://github.com/stablyai/orca/pull/24674)）
- 打开：ZCode sign-in in the existing setup terminal（[@nwparker](https://github.com/nwparker)，[#27321](https://github.com/stablyai/orca/pull/27321)）
- 移除：a rejected GLM key when restore fails（[@parkavenue9639](https://github.com/parkavenue9639)，[#24964](https://github.com/stablyai/orca/pull/24964)）
- 停止：feature branches from borrowing unrelated PRs（[@nwparker](https://github.com/nwparker)，[#27332](https://github.com/stablyai/orca/pull/27332)）
- 避免：downloading unchanged paired-runtime session history（[@nwparker](https://github.com/nwparker)，[#27383](https://github.com/stablyai/orca/pull/27383)）
- 保持：nested models off parent panes（[@nwparker](https://github.com/nwparker)，[#26846](https://github.com/stablyai/orca/pull/26846)）
- Session History: resume folder workspace chats in their own folder（[@brennanb2025](https://github.com/brennanb2025)，[#27209](https://github.com/stablyai/orca/pull/27209)）
- Account switchers and CLI cards follow the focused repo's host（[@nwparker](https://github.com/nwparker)，[#27687](https://github.com/stablyai/orca/pull/27687)）
- Edit agent launch settings on the workspace host（[@brennanb2025](https://github.com/brennanb2025)，[#26479](https://github.com/stablyai/orca/pull/26479)）
- Launch agents in existing workspaces（[@brennanb2025](https://github.com/brennanb2025)，[#27794](https://github.com/stablyai/orca/pull/27794)）
- Register forward-slash Windows hook paths for Grok, Devin, ZCode and Antigravity（[@OrcaWin](https://github.com/OrcaWin)，[#27713](https://github.com/stablyai/orca/pull/27713)）
- After a restart, an agent tab asks the terminal host what is running, never "Couldn't confirm the agent started"（[@brennanb2025](https://github.com/brennanb2025)，[#28043](https://github.com/stablyai/orca/pull/28043)）
- Cap Cursor's Retry-After at 24h and share one Retry-After parser（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28406](https://github.com/stablyai/orca/pull/28406)）
- Host plans agent launches with the window's runtime rule and one runtime fact (C1)（[@brennanb2025](https://github.com/brennanb2025)，[#27692](https://github.com/stablyai/orca/pull/27692)）
- 停止：retried failed worker starts from piling up live agents（[@brennanb2025](https://github.com/brennanb2025)，[#27795](https://github.com/stablyai/orca/pull/27795)）
- 显示："Network issue" for any provider whose usage request fails on the network（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28415](https://github.com/stablyai/orca/pull/28415)）
- Usage requests answer authenticated-proxy challenges on a cold start（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28411](https://github.com/stablyai/orca/pull/28411)）
- 保留：open chat status when terminals close（[@brennanb2025](https://github.com/brennanb2025)，[#28188](https://github.com/stablyai/orca/pull/28188)）
- A focused WSL host shows and switches its distro's accounts（[@nwparker](https://github.com/nwparker)，[#28465](https://github.com/stablyai/orca/pull/28465)）
- Launches a WSL host starts itself use the account selected for its distro（[@nwparker](https://github.com/nwparker)，[#28464](https://github.com/stablyai/orca/pull/28464)）
- 新增："None" agent option that opens only the setup script（[@leog](https://github.com/leog)，[#25617](https://github.com/stablyai/orca/pull/25617)）
- 回收：any restored agent row whose terminal died while Orca was closed (STA-10194)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28475](https://github.com/stablyai/orca/pull/28475)）
- Refresh Source Control only for the worktree whose git index changed（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26946](https://github.com/stablyai/orca/pull/26946)）
- 打开：a server agent's notification on its server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26518](https://github.com/stablyai/orca/pull/26518)）
- Refuse an agent whose WSL runtime needs repair under its own code, in the settings page's words（[@brennanb2025](https://github.com/brennanb2025)，[#28232](https://github.com/stablyai/orca/pull/28232)）
- 修复：CLI delivery and fresh launch environments for managed SSH agents（[@brennanb2025](https://github.com/brennanb2025)，[#26464](https://github.com/stablyai/orca/pull/26464)）
- AI-button and OpenCode-model tabs start their agent in their own terminal（[@brennanb2025](https://github.com/brennanb2025)，[#28210](https://github.com/stablyai/orca/pull/28210)）
- Refuse desktop resumes of chat-owned conversations（[@brennanb2025](https://github.com/brennanb2025)，[#28229](https://github.com/stablyai/orca/pull/28229)）
- Trust a WSL share path's distro in the agent list, over Orca's cached distro list（[@brennanb2025](https://github.com/brennanb2025)，[#28233](https://github.com/stablyai/orca/pull/28233)）
- 保持：status refresh for worktrees whose admin dirs differ only by case（[@nwparker](https://github.com/nwparker)，[#28586](https://github.com/stablyai/orca/pull/28586)）
- Clear agent selections in workspace creation and settings（[@nwparker](https://github.com/nwparker)，[#28543](https://github.com/stablyai/orca/pull/28543)）
- Finish agent-selection cleanup and restore merge validation（[@nwparker](https://github.com/nwparker)，[#28607](https://github.com/stablyai/orca/pull/28607)）
- 保持：issue titles readable in narrow panels（[@nwparker](https://github.com/nwparker)，[#28583](https://github.com/stablyai/orca/pull/28583)）
- 保持：description and comment hyperlinks clickable（[@nwparker](https://github.com/nwparker)，[#28584](https://github.com/stablyai/orca/pull/28584)）
- 允许：agents read and update Jira tickets safely（[@nwparker](https://github.com/nwparker)，[#28592](https://github.com/stablyai/orca/pull/28592)）
- 支持：scoped Cloud API tokens（[@nwparker](https://github.com/nwparker)，[#28604](https://github.com/stablyai/orca/pull/28604)）
- 保持：edits and comments visible while saving（[@nwparker](https://github.com/nwparker)，[#28585](https://github.com/stablyai/orca/pull/28585)）
- Generate issue titles on the connection host（[@nwparker](https://github.com/nwparker)，[#28625](https://github.com/stablyai/orca/pull/28625)）
- 修复：Jira Cloud All and classify presets by ticket status（[@nwparker](https://github.com/nwparker)，[#28579](https://github.com/stablyai/orca/pull/28579)）
- Resolve Jira keys in workspace references（[@nwparker](https://github.com/nwparker)，[#28619](https://github.com/stablyai/orca/pull/28619)）
- 显示：every linked Jira workspace and add a Has Workspace view（[@nwparker](https://github.com/nwparker)，[#28590](https://github.com/stablyai/orca/pull/28590)）
- Notice Jira and Linear state changes from other processes（[@nwparker](https://github.com/nwparker)，[#28594](https://github.com/stablyai/orca/pull/28594)）
- 新增：row quick copy and reusable prompt templates（[@nwparker](https://github.com/nwparker)，[#28618](https://github.com/stablyai/orca/pull/28618)）
- Save and reuse named Jira JQL filters on the execution host（[@nwparker](https://github.com/nwparker)，[#28600](https://github.com/stablyai/orca/pull/28600)）
- Choose planning columns in the issue list（[@nwparker](https://github.com/nwparker)，[#28615](https://github.com/stablyai/orca/pull/28615)）
- Choose Jira key casing and keep canonical Jira keys in review titles（[@nwparker](https://github.com/nwparker)，[#28596](https://github.com/stablyai/orca/pull/28596)）
- Collect required fields before changing status（[@nwparker](https://github.com/nwparker)，[#28588](https://github.com/stablyai/orca/pull/28588)）
- 恢复：Jira CI lint checks without changing behavior（[@nwparker](https://github.com/nwparker)，[#28717](https://github.com/stablyai/orca/pull/28717)）
- Make existing Jira assignees searchable and add Assign to me（[@nwparker](https://github.com/nwparker)，[#28612](https://github.com/stablyai/orca/pull/28612)）
- View Jira work on a board and filter the current sprint（[@nwparker](https://github.com/nwparker)，[#28633](https://github.com/stablyai/orca/pull/28633)）
- Load attachment images outside issue Markdown（[@nwparker](https://github.com/nwparker)，[#28631](https://github.com/stablyai/orca/pull/28631)）
- Remember repository project defaults（[@nwparker](https://github.com/nwparker)，[#28622](https://github.com/stablyai/orca/pull/28622)）
- Split Jira issue workspace hooks and IPC param checks（[@AmethystLiang](https://github.com/AmethystLiang)，[#28759](https://github.com/stablyai/orca/pull/28759)）
- Refuse a picked OpenCode model in any WSL share repo（[@brennanb2025](https://github.com/brennanb2025)，[#28236](https://github.com/stablyai/orca/pull/28236)）
- 显示：whole credit balances in usage displays（[@nwparker](https://github.com/nwparker)，[#28887](https://github.com/stablyai/orca/pull/28887)）
- Find a repo's project the way the window does（[@brennanb2025](https://github.com/brennanb2025)，[#28237](https://github.com/stablyai/orca/pull/28237)）
- 停止：Jira search loops when saved filters fail to load（[@nwparker](https://github.com/nwparker)，[#29011](https://github.com/stablyai/orca/pull/29011)）
- 新增：bounded site-specific favourite filter catalogue（[@nwparker](https://github.com/nwparker)，[#29028](https://github.com/stablyai/orca/pull/29028)）
- 避免：blank shells when launching new workspaces（[@brennanb2025](https://github.com/brennanb2025)，[#28451](https://github.com/stablyai/orca/pull/28451)）
- Use favourite filters within their source site（[@nwparker](https://github.com/nwparker)，[#29037](https://github.com/stablyai/orca/pull/29037)）
- 显示：linked workspaces in Has Workspace by matching the Jira login, not its label（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29201](https://github.com/stablyai/orca/pull/29201)）
- Session History: show the scan's progress in a strip under the search box（[@brennanb2025](https://github.com/brennanb2025)，[#28576](https://github.com/stablyai/orca/pull/28576)）
- 保持：collapsed sidebar agent cards steady when the child arrow appears（[@nwparker](https://github.com/nwparker)，[#29246](https://github.com/stablyai/orca/pull/29246)）
- Session History: let a scan run until it finishes instead of stopping it after 130 s（[@brennanb2025](https://github.com/brennanb2025)，[#29073](https://github.com/stablyai/orca/pull/29073)）
- 停止：nested reviews from collapsing Claude children（[@nwparker](https://github.com/nwparker)，[#29264](https://github.com/stablyai/orca/pull/29264)）
- Resolve SSH host aliases for account binding（[@orchardprior](https://github.com/orchardprior)，[#29018](https://github.com/stablyai/orca/pull/29018)）
- Clear a Claude permission wait when its approved tool fails（[@nwparker](https://github.com/nwparker)，[#29387](https://github.com/stablyai/orca/pull/29387)）
- 保持：scan notices from burying the session list（[@nwparker](https://github.com/nwparker)，[#29392](https://github.com/stablyai/orca/pull/29392)）
- 显示：usage from the host that owns the accounts（[@nwparker](https://github.com/nwparker)，[#29430](https://github.com/stablyai/orca/pull/29430)）
- Removing a worktree drops its sleeping-agent records（[@nwparker](https://github.com/nwparker)，[#29449](https://github.com/stablyai/orca/pull/29449)）
- Remote worker liveness reports exited when the host proves the agent gone（[@nwparker](https://github.com/nwparker)，[#29276](https://github.com/stablyai/orca/pull/29276)）
- Quote resume commands for a Windows SSH host's own shell（[@nwparker](https://github.com/nwparker)，[#29409](https://github.com/stablyai/orca/pull/29409)）
- Release a Claude permission wait that ended during an SSH disconnect（[@nwparker](https://github.com/nwparker)，[#29482](https://github.com/stablyai/orca/pull/29482)）
- The wake sweep no longer forks sessions owned by a disconnected SSH pane or a stale-workspace record（[@nwparker](https://github.com/nwparker)，[#29454](https://github.com/stablyai/orca/pull/29454)）
- A proven agent exit survives restarts, late hooks and same-second attaches（[@nwparker](https://github.com/nwparker)，[#29483](https://github.com/stablyai/orca/pull/29483)）
- 打开：disk usage in a separate window（[@nwparker](https://github.com/nwparker)，[#29513](https://github.com/stablyai/orca/pull/29513)）
- 打开：the browser for a WSL account sign-in（[@nwparker](https://github.com/nwparker)，[#29566](https://github.com/stablyai/orca/pull/29566)）
- 限制：retained agent exits（[@nwparker](https://github.com/nwparker)，[#29600](https://github.com/stablyai/orca/pull/29600)）
- New-agent shortcut, Explain and direct launches ask the workspace's own host for its agents（[@nwparker](https://github.com/nwparker)，[#29622](https://github.com/stablyai/orca/pull/29622)）
- A resumed agent's chat is readable on the phone before its first new turn（[@nwparker](https://github.com/nwparker)，[#29664](https://github.com/stablyai/orca/pull/29664)）
- Direct work-item and checks-fix launches quote for the execution host（[@nwparker](https://github.com/nwparker)，[#29716](https://github.com/stablyai/orca/pull/29716)）
- 允许：npm-installed agents generate commit messages on Windows（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29434](https://github.com/stablyai/orca/pull/29434)）
- Native-chat agents get their mail notice right away, the same way for every agent（[@brennanb2025](https://github.com/brennanb2025)，[#28540](https://github.com/stablyai/orca/pull/28540)）
- Session History: stop re-reading unchanged transcripts past 4,096 files（[@brennanb2025](https://github.com/brennanb2025)，[#28821](https://github.com/stablyai/orca/pull/28821)）
- Bold an agent row only while looking at it can clear it（[@brennanb2025](https://github.com/brennanb2025)，[#28830](https://github.com/stablyai/orca/pull/28830)）
- Session History: save the parse cache one row per transcript, so restarts re-read nothing（[@brennanb2025](https://github.com/brennanb2025)，[#29401](https://github.com/stablyai/orca/pull/29401)）
- Load MR reviewer choices from the paired server that owns the repo（[@nwparker](https://github.com/nwparker)，[#29917](https://github.com/stablyai/orca/pull/29917)）
- Fill the label and reviewer pickers and stop replacing issue assignees（[@zanmlakar](https://github.com/zanmlakar)，[#28776](https://github.com/stablyai/orca/pull/28776)）
- No false "Couldn't launch" toast while a new agent's terminal is still starting（[@brennanb2025](https://github.com/brennanb2025)，[#29911](https://github.com/stablyai/orca/pull/29911)）
- Delete the active or a running-agent workspace like a sidebar delete（[@brennanb2025](https://github.com/brennanb2025)，[#23593](https://github.com/stablyai/orca/pull/23593)）

#### SSH, managed servers & remote {#v1-4-229-ssh-managed-servers-remote}

> Reconnect after sleep or a network drop, recover split panes without losing their siblings, resume sleeping agents, and preserve each machine’s projects and running work.

- 显示：help before server startup（[@nwparker](https://github.com/nwparker)，[#26855](https://github.com/stablyai/orca/pull/26855)）
- Start AI commit messages from the same shell environment chats use（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26808](https://github.com/stablyai/orca/pull/26808)）
- Host registry stops minting client SSH hosts from a server's nested target（[@OrcaWin](https://github.com/OrcaWin)，[#26952](https://github.com/stablyai/orca/pull/26952)）
- Folder workspaces can answer "paired server"（[@OrcaWin](https://github.com/OrcaWin)，[#26958](https://github.com/stablyai/orca/pull/26958)）
- 保持：MCP repository settings on their selected host（[@nwparker](https://github.com/nwparker)，[#26859](https://github.com/stablyai/orca/pull/26859)）
- Extract subprocess handling into @orca/process-host（[@nwparker](https://github.com/nwparker)，[#26963](https://github.com/stablyai/orca/pull/26963)）
- 保持：a floating terminal floating when its cwd is inside a workspace（[@OrcaWin](https://github.com/OrcaWin)，[#27088](https://github.com/stablyai/orca/pull/27088)）
- Bounded OpenClaw discovery; title filter when a host's search is off（[@OrcaWin](https://github.com/OrcaWin)，[#27089](https://github.com/stablyai/orca/pull/27089)）
- A tab stream the host ends resubscribes on the retry backoff（[@OrcaWin](https://github.com/OrcaWin)，[#27098](https://github.com/stablyai/orca/pull/27098)）
- Automatic tab activation no longer wakes a worktree the host put to sleep（[@OrcaWin](https://github.com/OrcaWin)，[#27081](https://github.com/stablyai/orca/pull/27081)）
- A direct-SSH host republish no longer steals this view's tab selection（[@OrcaWin](https://github.com/OrcaWin)，[#27100](https://github.com/stablyai/orca/pull/27100)）
- A restored terminal row is retired only by its own host PTY（[@OrcaWin](https://github.com/OrcaWin)，[#27101](https://github.com/stablyai/orca/pull/27101)）
- Honor the OpenSSH DefaultShell on Windows SSH hosts running orcad（[@OrcaWin](https://github.com/OrcaWin)，[#27085](https://github.com/stablyai/orca/pull/27085)）
- A returning paired publisher is repaired by an authoritative census（[@OrcaWin](https://github.com/OrcaWin)，[#27094](https://github.com/stablyai/orca/pull/27094)）
- Implicit worktree selection is scoped to the caller's host（[@OrcaWin](https://github.com/OrcaWin)，[#27108](https://github.com/stablyai/orca/pull/27108)）
- The unresolved-owner sentinel is never routable（[@OrcaWin](https://github.com/OrcaWin)，[#27111](https://github.com/stablyai/orca/pull/27111)）
- Worktree create enforces the lineage host boundary（[@OrcaWin](https://github.com/OrcaWin)，[#27114](https://github.com/stablyai/orca/pull/27114)）
- Every repo catalog uses the host-catalog fence（[@OrcaWin](https://github.com/OrcaWin)，[#27116](https://github.com/stablyai/orca/pull/27116)）
- A terminal close commits in the session partition that holds the tab（[@OrcaWin](https://github.com/OrcaWin)，[#27119](https://github.com/stablyai/orca/pull/27119)）
- Closing a tab is never a silent no-op（[@OrcaWin](https://github.com/OrcaWin)，[#27132](https://github.com/stablyai/orca/pull/27132)）
- A server whose status answers is selectable while shared control connects（[@OrcaWin](https://github.com/OrcaWin)，[#27137](https://github.com/stablyai/orca/pull/27137)）
- Speed up process-host import enforcement in CI（[@nwparker](https://github.com/nwparker)，[#27124](https://github.com/stablyai/orca/pull/27124)）
- Advertise a key and fallback port the host can actually serve（[@OrcaWin](https://github.com/OrcaWin)，[#27158](https://github.com/stablyai/orca/pull/27158)）
- OS open actions follow the file's owner, not the focused server（[@OrcaWin](https://github.com/OrcaWin)，[#27165](https://github.com/stablyai/orca/pull/27165)）
- Deleting a project with live terminals warns and needs --force（[@OrcaWin](https://github.com/OrcaWin)，[#27172](https://github.com/stablyai/orca/pull/27172)）
- Servers publish a host descriptor（[@OrcaWin](https://github.com/OrcaWin)，[#27193](https://github.com/stablyai/orca/pull/27193)）
- Host-scoped port scan and stop on the server（[@OrcaWin](https://github.com/OrcaWin)，[#27188](https://github.com/stablyai/orca/pull/27188)）
- Check the runtime source before sending（[@OrcaWin](https://github.com/OrcaWin)，[#27206](https://github.com/stablyai/orca/pull/27206)）
- The host refuses a request meant for another runtime（[@OrcaWin](https://github.com/OrcaWin)，[#27224](https://github.com/stablyai/orca/pull/27224)）
- Terminal IDs, agent rows and dashboard rows follow the owner（[@OrcaWin](https://github.com/OrcaWin)，[#27243](https://github.com/stablyai/orca/pull/27243)）
- Dashboard terminal previews from the owning host（[@OrcaWin](https://github.com/OrcaWin)，[#27250](https://github.com/stablyai/orca/pull/27250)）
- The ports panel scans and stops on the workspace's own host（[@OrcaWin](https://github.com/OrcaWin)，[#27258](https://github.com/stablyai/orca/pull/27258)）
- Agent launch platform and shell come from the execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27259](https://github.com/stablyai/orca/pull/27259)）
- Resource Manager lists the owning host's processes（[@OrcaWin](https://github.com/OrcaWin)，[#27263](https://github.com/stablyai/orca/pull/27263)）
- Host-owned settings panes choose their host explicitly（[@OrcaWin](https://github.com/OrcaWin)，[#27265](https://github.com/stablyai/orca/pull/27265)）
- Install agent status hooks when a managed host starts（[@OrcaWin](https://github.com/OrcaWin)，[#27319](https://github.com/stablyai/orca/pull/27319)）
- Provide the orca CLI in Windows managed-host terminals（[@OrcaWin](https://github.com/OrcaWin)，[#27324](https://github.com/stablyai/orca/pull/27324)）
- Save runtime-started tabs in the tab bar before their terminal starts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27083](https://github.com/stablyai/orca/pull/27083)）
- A paired client can manage the server's own SSH hosts (ssh.target-management.v1)（[@OrcaWin](https://github.com/OrcaWin)，[#27329](https://github.com/stablyai/orca/pull/27329)）
- Create on a server's SSH project; Add Project SSH lists the server's targets（[@OrcaWin](https://github.com/OrcaWin)，[#27331](https://github.com/stablyai/orca/pull/27331)）
- 恢复：saved port forwards on managed hosts and show their Ports tab（[@OrcaWin](https://github.com/OrcaWin)，[#27361](https://github.com/stablyai/orca/pull/27361)）
- Reenable terminal link Actions after an old opt-out（[@nwparker](https://github.com/nwparker)，[#26853](https://github.com/stablyai/orca/pull/26853)）
- A recipe VM's SSH root runs on a managed Orca server（[@OrcaWin](https://github.com/OrcaWin)，[#27366](https://github.com/stablyai/orca/pull/27366)）
- A restore racing a disconnect never leaves a forward behind（[@OrcaWin](https://github.com/OrcaWin)，[#27368](https://github.com/stablyai/orca/pull/27368)）
- Refuse headless tab moves into a group the server doesn't have（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27381](https://github.com/stablyai/orca/pull/27381)）
- 允许：a paired desktop register its phones as phone devices（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26427](https://github.com/stablyai/orca/pull/26427)）
- 停止：dropping terminal output on a backed-up legacy connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26528](https://github.com/stablyai/orca/pull/26528)）
- 移动：tabs into a split-off group on the server too（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26522](https://github.com/stablyai/orca/pull/26522)）
- Reuse an Asia load principal set for shards past the fourth（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27403](https://github.com/stablyai/orca/pull/27403)）
- Unpack the orcad serve-selection entry so orca serve can run it（[@OrcaWin](https://github.com/OrcaWin)，[#27404](https://github.com/stablyai/orca/pull/27404)）
- Refresh open clients after project setup changes（[@nwparker](https://github.com/nwparker)，[#26941](https://github.com/stablyai/orca/pull/26941)）
- A fast remote folder listing no longer shows a false error（[@nwparker](https://github.com/nwparker)，[#26940](https://github.com/stablyai/orca/pull/26940)）
- 移除：the relay-only remote workspace sync so reconnect never sticks on pulling（[@OrcaWin](https://github.com/OrcaWin)，[#27409](https://github.com/stablyai/orca/pull/27409)）
- Only force-kill processes in the terminal's own Linux session（[@OrcaWin](https://github.com/OrcaWin)，[#27422](https://github.com/stablyai/orca/pull/27422)）
- Scope layout.unsubscribe to the caller's connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27423](https://github.com/stablyai/orca/pull/27423)）
- Observe-only fork gate for automatic terminal restores（[@OrcaWin](https://github.com/OrcaWin)，[#27424](https://github.com/stablyai/orca/pull/27424)）
- Launch the AppImage terminal daemon through its own mount（[@OrcaWin](https://github.com/OrcaWin)，[#27435](https://github.com/stablyai/orca/pull/27435)）
- Pace automatic terminal restores on headless hosts（[@OrcaWin](https://github.com/OrcaWin)，[#27428](https://github.com/stablyai/orca/pull/27428)）
- Pause automatic restores after a same-boot crash（[@OrcaWin](https://github.com/OrcaWin)，[#27433](https://github.com/stablyai/orca/pull/27433)）
- 报告：secrets unavailable instead of hanging on an unreachable macOS keychain（[@OrcaWin](https://github.com/OrcaWin)，[#27441](https://github.com/stablyai/orca/pull/27441)）
- Process-growth breaker that pauses automatic restores（[@OrcaWin](https://github.com/OrcaWin)，[#27437](https://github.com/stablyai/orca/pull/27437)）
- 去掉：a legacy daemon that can no longer accept a connection（[@OrcaWin](https://github.com/OrcaWin)，[#27436](https://github.com/stablyai/orca/pull/27436)）
- Count a claimed agent resume as automatic even without a history seed（[@OrcaWin](https://github.com/OrcaWin)，[#27442](https://github.com/stablyai/orca/pull/27442)）
- Reuse cached worktree rows when the admin probe cannot answer（[@OrcaWin](https://github.com/OrcaWin)，[#27445](https://github.com/stablyai/orca/pull/27445)）
- Phone wake reaches hibernated agent panes in place（[@OrcaWin](https://github.com/OrcaWin)，[#27450](https://github.com/stablyai/orca/pull/27450)）
- Accept a declared spawn intent from paired clients（[@OrcaWin](https://github.com/OrcaWin)，[#27452](https://github.com/stablyai/orca/pull/27452)）
- 保持：the isolated profile off the login keychain（[@OrcaWin](https://github.com/OrcaWin)，[#27463](https://github.com/stablyai/orca/pull/27463)）
- 停止：promising a manual update enables remote updates（[@OrcaWin](https://github.com/OrcaWin)，[#27464](https://github.com/stablyai/orca/pull/27464)）
- Install macOS orca serve updates instead of waiting on Squirrel forever（[@OrcaWin](https://github.com/OrcaWin)，[#27466](https://github.com/stablyai/orca/pull/27466)）
- Declare restore intent and keep deferred panes sleeping（[@OrcaWin](https://github.com/OrcaWin)，[#27455](https://github.com/stablyai/orca/pull/27455)）
- Decide a duplicate or doomed Electron serve before exec（[@OrcaWin](https://github.com/OrcaWin)，[#27472](https://github.com/stablyai/orca/pull/27472)）
- 允许：the owner resume paused automatic restores（[@OrcaWin](https://github.com/OrcaWin)，[#27459](https://github.com/stablyai/orca/pull/27459)）
- Cap terminals per execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27488](https://github.com/stablyai/orca/pull/27488)）
- One automatic-restore budget per execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27492](https://github.com/stablyai/orca/pull/27492)）
- Device-key authentication and per-installation key migration (host)（[@OrcaWin](https://github.com/OrcaWin)，[#27493](https://github.com/stablyai/orca/pull/27493)）
- 保持：tweetnacl out of the relocated Windows daemon-host graph; guard daemon externals at build（[@OrcaWin](https://github.com/OrcaWin)，[#27504](https://github.com/stablyai/orca/pull/27504)）
- The host keeps its own record of old-client restores it refuses（[@OrcaWin](https://github.com/OrcaWin)，[#27496](https://github.com/stablyai/orca/pull/27496)）
- 移除：a simulated terminal credit correctness check（[@nwparker](https://github.com/nwparker)，[#27507](https://github.com/stablyai/orca/pull/27507)）
- 保留：terminal permissions across app updates with a small signed helper（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27021](https://github.com/stablyai/orca/pull/27021)）
- 显示：terminal-host Full Disk Access, tag stable-copy daemons, and give Helpers folder strings（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27354](https://github.com/stablyai/orca/pull/27354)）
- Replace three copied new-terminal tab-order blocks with the shared helper（[@brennanb2025](https://github.com/brennanb2025)，[#26771](https://github.com/stablyai/orca/pull/26771)）
- Session-only browser keys and opt-in for pairing from plain-http pages (host)（[@OrcaWin](https://github.com/OrcaWin)，[#27540](https://github.com/stablyai/orca/pull/27540)）
- 打开：WSL paths in Cursor's WSL mode; ignore Windows-side CLIs in WSL hook setup（[@nwparker](https://github.com/nwparker)，[#27681](https://github.com/stablyai/orca/pull/27681)）
- 保持：remote servers usable when one saved record can't be read（[@nwparker](https://github.com/nwparker)，[#27685](https://github.com/stablyai/orca/pull/27685)）
- 恢复：Windows interop after another distro wipes it（[@nwparker](https://github.com/nwparker)，[#27682](https://github.com/stablyai/orca/pull/27682)）
- Don't duplicate terminals a newer Orca still runs after a downgrade（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27577](https://github.com/stablyai/orca/pull/27577)）
- 停止：booting stopped distros for background work（[@nwparker](https://github.com/nwparker)，[#27684](https://github.com/stablyai/orca/pull/27684)）
- Supervised mode for orca serve --supervise（[@OrcaWin](https://github.com/OrcaWin)，[#27716](https://github.com/stablyai/orca/pull/27716)）
- Auto-park registered serve supervisors during a desktop install（[@OrcaWin](https://github.com/OrcaWin)，[#27722](https://github.com/stablyai/orca/pull/27722)）
- End an older Orca's relay terminals from the connect refusal (STA-10166)（[@OrcaWin](https://github.com/OrcaWin)，[#27748](https://github.com/stablyai/orca/pull/27748)）
- Orca serve service install|status|uninstall（[@OrcaWin](https://github.com/OrcaWin)，[#27744](https://github.com/stablyai/orca/pull/27744)）
- Initialize the updater in headless Electron serve（[@OrcaWin](https://github.com/OrcaWin)，[#27771](https://github.com/stablyai/orca/pull/27771)）
- Opt-in OS ceiling on terminal processes, reported per host（[@OrcaWin](https://github.com/OrcaWin)，[#27769](https://github.com/stablyai/orca/pull/27769)）
- Quitting Claude or Codex in cmd.exe or Git Bash removes it from the running list（[@brennanb2025](https://github.com/brennanb2025)，[#27742](https://github.com/stablyai/orca/pull/27742)）
- 保持：1.4.224's running terminals working after the upgrade (legacy relay bridge)（[@OrcaWin](https://github.com/OrcaWin)，[#27787](https://github.com/stablyai/orca/pull/27787)）
- An old relay terminal's tab shows output again after a reconnect（[@OrcaWin](https://github.com/OrcaWin)，[#27951](https://github.com/stablyai/orca/pull/27951)）
- Never start a hidden orcad shell for a tab the legacy relay bridge serves（[@OrcaWin](https://github.com/OrcaWin)，[#27939](https://github.com/stablyai/orca/pull/27939)）
- Save Codex auth before a headless serve update restart（[@OrcaWin](https://github.com/OrcaWin)，[#28001](https://github.com/stablyai/orca/pull/28001)）
- Explain what to run when an SSH host's orca cannot start or install a server（[@OrcaWin](https://github.com/OrcaWin)，[#28003](https://github.com/stablyai/orca/pull/28003)）
- Run the --supervise supervisor from a copy outside the app（[@OrcaWin](https://github.com/OrcaWin)，[#28007](https://github.com/stablyai/orca/pull/28007)）
- 给予：the first AppImage serve one unpacking deadline and progress（[@OrcaWin](https://github.com/OrcaWin)，[#28015](https://github.com/stablyai/orca/pull/28015)）
- 停止：giving new terminals to a daemon whose AppImage files are gone（[@OrcaWin](https://github.com/OrcaWin)，[#28011](https://github.com/stablyai/orca/pull/28011)）
- Persistent banner to restart a terminal daemon whose files are gone（[@OrcaWin](https://github.com/OrcaWin)，[#28021](https://github.com/stablyai/orca/pull/28021)）
- Verify daemon PID identity from the native Windows process table, not PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#27703](https://github.com/stablyai/orca/pull/27703)）
- Start every host wsl.exe call through process-host so no console window flashes（[@OrcaWin](https://github.com/OrcaWin)，[#27628](https://github.com/stablyai/orca/pull/27628)）
- Save terminal rows in the tab groups' order（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28066](https://github.com/stablyai/orca/pull/28066)）
- 保持：the tab when a reattach finds its process gone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28067](https://github.com/stablyai/orca/pull/28067)）
- Speed up daemon smoke checks and keep compiler slots busy（[@nwparker](https://github.com/nwparker)，[#28106](https://github.com/stablyai/orca/pull/28106)）
- Identify instances by kernel start ticks, not drifting wall-clock start time（[@nwparker](https://github.com/nwparker)，[#28125](https://github.com/stablyai/orca/pull/28125)）
- Run WSL git with Windows Git line-ending settings on checkouts Windows Git wrote（[@nwparker](https://github.com/nwparker)，[#27778](https://github.com/stablyai/orca/pull/27778)）
- 停止：a project's terminals before the host forgets the project（[@nwparker](https://github.com/nwparker)，[#28024](https://github.com/stablyai/orca/pull/28024)）
- 保持：a named terminal's title across an orca serve restart（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28126](https://github.com/stablyai/orca/pull/28126)）
- 显示：a host-created setup split in the window that holds its tab（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28105](https://github.com/stablyai/orca/pull/28105)）
- Recheck watcher-reported paths with full stat on Windows Git drive checkouts（[@nwparker](https://github.com/nwparker)，[#27817](https://github.com/stablyai/orca/pull/27817)）
- 保持：the relocated Windows daemon host's conpty.dll under the path limit（[@nwparker](https://github.com/nwparker)，[#28156](https://github.com/stablyai/orca/pull/28156)）
- Orcad host transport over wsl.exe (WSL-via-orcad C1)（[@nwparker](https://github.com/nwparker)，[#27792](https://github.com/stablyai/orca/pull/27792)）
- Detached distro holder re-adopted from a pid file (WSL-via-orcad C3)（[@nwparker](https://github.com/nwparker)，[#27800](https://github.com/stablyai/orca/pull/27800)）
- 允许：existing profiles migrate without losing client history（[@nwparker](https://github.com/nwparker)，[#28141](https://github.com/stablyai/orca/pull/28141)）
- Pace automatic terminal restores on the desktop too（[@OrcaWin](https://github.com/OrcaWin)，[#28202](https://github.com/stablyai/orca/pull/28202)）
- 打开：the floating panel instead of blanking the main window on host reveals（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28184](https://github.com/stablyai/orca/pull/28184)）
- Clearer headless-display and supervisor messages on Linux（[@OrcaWin](https://github.com/OrcaWin)，[#28230](https://github.com/stablyai/orca/pull/28230)）
- Deploy and launch orcad inside a WSL distro (WSL-via-orcad C4)（[@nwparker](https://github.com/nwparker)，[#27819](https://github.com/stablyai/orca/pull/27819)）
- Direct AppImage serve honours the chosen profile and --supervise（[@OrcaWin](https://github.com/OrcaWin)，[#28227](https://github.com/stablyai/orca/pull/28227)）
- Name a new tab's first pane so its saved layout is never empty（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28168](https://github.com/stablyai/orca/pull/28168)）
- Route the worktree ready toast's host check by its owner, not the Active Server setting（[@nwparker](https://github.com/nwparker)，[#28265](https://github.com/stablyai/orca/pull/28265)）
- 显示：managed hosts once in the connection menu（[@nwparker](https://github.com/nwparker)，[#28277](https://github.com/stablyai/orca/pull/28277)）
- Run the AppImage terminal daemon off the mount, on the extracted copy's bundled Node（[@OrcaWin](https://github.com/OrcaWin)，[#28214](https://github.com/stablyai/orca/pull/28214)）
- A supervised serve run from the AppImage stays in place（[@OrcaWin](https://github.com/OrcaWin)，[#28270](https://github.com/stablyai/orca/pull/28270)）
- A supervised AppImage serve follows a replaced AppImage（[@OrcaWin](https://github.com/OrcaWin)，[#28244](https://github.com/stablyai/orca/pull/28244)）
- Status says live, exited or unverifiable, and shows the process ceiling（[@OrcaWin](https://github.com/OrcaWin)，[#28239](https://github.com/stablyai/orca/pull/28239)）
- A stop requested from outside never counts as a crash（[@OrcaWin](https://github.com/OrcaWin)，[#28307](https://github.com/stablyai/orca/pull/28307)）
- Connect to a WSL distro's orcad over wsl.exe stdio only (WSL-via-orcad C5)（[@nwparker](https://github.com/nwparker)，[#27834](https://github.com/stablyai/orca/pull/27834)）
- Unpack the AppImage copy in the background so the first daemon runs from it（[@OrcaWin](https://github.com/OrcaWin)，[#28311](https://github.com/stablyai/orca/pull/28311)）
- Liveness, failure classification and recovery for WSL orcad (WSL-via-orcad C6)（[@nwparker](https://github.com/nwparker)，[#27916](https://github.com/stablyai/orca/pull/27916)）
- Accounts shim for agents on a WSL orcad host (WSL-via-orcad C9)（[@nwparker](https://github.com/nwparker)，[#27874](https://github.com/stablyai/orca/pull/27874)）
- Account env for agent tabs on a WSL orcad host (WSL-via-orcad C9b)（[@nwparker](https://github.com/nwparker)，[#27940](https://github.com/stablyai/orca/pull/27940)）
- WSL distro hosts, main-process wiring and persistence (WSL-via-orcad C7a, experimental)（[@nwparker](https://github.com/nwparker)，[#27933](https://github.com/stablyai/orca/pull/27933)）
- 新增：WSL distro host UI and status (WSL-via-orcad C7b, experimental)（[@nwparker](https://github.com/nwparker)，[#27934](https://github.com/stablyai/orca/pull/27934)）
- Windows path actions for WSL hosts through one owner-routed capability (WSL-via-orcad C8)（[@nwparker](https://github.com/nwparker)，[#27955](https://github.com/stablyai/orca/pull/27955)）
- 保持：a paired pane when the desktop has not opened it yet（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28181](https://github.com/stablyai/orca/pull/28181)）
- 等待：for the desktop's terminal list before opening a terminal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28154](https://github.com/stablyai/orca/pull/28154)）
- A disconnect keeps an old relay terminal's tab on that terminal instead of starting a new shell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28344](https://github.com/stablyai/orca/pull/28344)）
- A slow window no longer makes `orca terminal create` fail and then duplicate（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28158](https://github.com/stablyai/orca/pull/28158)）
- A host whose ssh_config forwards a port can still open its server tunnel (STA-10471)（[@OrcaWin](https://github.com/OrcaWin)，[#28396](https://github.com/stablyai/orca/pull/28396)）
- Start a startup terminal while Orca's window is hidden instead of waiting for it to be shown（[@brennanb2025](https://github.com/brennanb2025)，[#28351](https://github.com/stablyai/orca/pull/28351)）
- An SSH host comes back after restarting Orca instead of staying offline (STA-10476)（[@OrcaWin](https://github.com/OrcaWin)，[#28398](https://github.com/stablyai/orca/pull/28398)）
- 发送：only the text a Linux IME commits, not the candidate key（[@nwparker](https://github.com/nwparker)，[#28275](https://github.com/stablyai/orca/pull/28275)）
- Cancel on an SSH password prompt no longer brings it straight back（[@OrcaWin](https://github.com/OrcaWin)，[#28402](https://github.com/stablyai/orca/pull/28402)）
- Accept string stdin in synchronous runs（[@nwparker](https://github.com/nwparker)，[#28225](https://github.com/stablyai/orca/pull/28225)）
- Orcad's own git sees the login shell's SSH agent, proxy and signing env（[@nwparker](https://github.com/nwparker)，[#28456](https://github.com/stablyai/orca/pull/28456)）
- Retain CRLF split across output chunks（[@nwparker](https://github.com/nwparker)，[#28224](https://github.com/stablyai/orca/pull/28224)）
- 保持：Codex status hooks in a managed account home on a WSL host, and list its sessions（[@nwparker](https://github.com/nwparker)，[#28469](https://github.com/stablyai/orca/pull/28469)）
- Decide every piece of project state and add a losslessness check (D1b-1)（[@nwparker](https://github.com/nwparker)，[#28459](https://github.com/stablyai/orca/pull/28459)）
- Accept local WSL projects on the migration wire, only in their own distro (D1b-2)（[@nwparker](https://github.com/nwparker)，[#28466](https://github.com/stablyai/orca/pull/28466)）
- A system-SSH host whose sshd refuses forwarding reaches its managed server over exec（[@OrcaWin](https://github.com/OrcaWin)，[#28408](https://github.com/stablyai/orca/pull/28408)）
- The stdio bridge clears an ssh -L an earlier Orca left on its port（[@OrcaWin](https://github.com/OrcaWin)，[#28509](https://github.com/stablyai/orca/pull/28509)）
- 允许：an app update reach a WSL host orcad (E1)（[@nwparker](https://github.com/nwparker)，[#28458](https://github.com/stablyai/orca/pull/28458)）
- Choose which projects a distro move takes and rewrite their paths (D1b-3)（[@nwparker](https://github.com/nwparker)，[#28473](https://github.com/stablyai/orca/pull/28473)）
- Bind the host to its distro registration and preflight every moved path (D1b-4)（[@nwparker](https://github.com/nwparker)，[#28542](https://github.com/stablyai/orca/pull/28542)）
- 保持：the text of an IME key pressed before a commit finalizes（[@nwparker](https://github.com/nwparker)，[#28441](https://github.com/stablyai/orca/pull/28441)）
- Stamp the build commit so orca skills install works on SSH and headless hosts（[@brennanb2025](https://github.com/brennanb2025)，[#28558](https://github.com/stablyai/orca/pull/28558)）
- A journal and fence for local WSL moves, on one shared journal store (D1b-5a)（[@nwparker](https://github.com/nwparker)，[#28536](https://github.com/stablyai/orca/pull/28536)）
- Don't report kitty releases for key presses the app never received（[@nwparker](https://github.com/nwparker)，[#28621](https://github.com/stablyai/orca/pull/28621)）
- Terminal gate, last-folder capture and exit proof for a WSL move (D1b-5b)（[@nwparker](https://github.com/nwparker)，[#28606](https://github.com/stablyai/orca/pull/28606)）
- Save a windowless host's chat tabs in its layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28354](https://github.com/stablyai/orca/pull/28354)）
- A new desktop can connect to a host already running a different Orca server version（[@OrcaWin](https://github.com/OrcaWin)，[#28642](https://github.com/stablyai/orca/pull/28642)）
- A password host no longer asks again after every reconnect（[@OrcaWin](https://github.com/OrcaWin)，[#28644](https://github.com/stablyai/orca/pull/28644)）
- Fence moving projects from new terminals and hide them once the host owns them (D1b-5c)（[@nwparker](https://github.com/nwparker)，[#28668](https://github.com/stablyai/orca/pull/28668)）
- The CLI, phone and paired clients no longer list a converted host's retained rows（[@nwparker](https://github.com/nwparker)，[#28754](https://github.com/stablyai/orca/pull/28754)）
- 恢复：a remote server's browser tabs after it restarts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28166](https://github.com/stablyai/orca/pull/28166)）
- Store the Terminal shell setting trimmed so agent tabs start like plain tabs（[@brennanb2025](https://github.com/brennanb2025)，[#28635](https://github.com/stablyai/orca/pull/28635)）
- Judge an agent's --shell against the runtime it runs in（[@brennanb2025](https://github.com/brennanb2025)，[#28234](https://github.com/stablyai/orca/pull/28234)）
- Name the fix that applies when --shell is refused（[@brennanb2025](https://github.com/brennanb2025)，[#28235](https://github.com/stablyai/orca/pull/28235)）
- Refuse edits to a project a WSL move is taking (D1b-5c-2)（[@nwparker](https://github.com/nwparker)，[#28761](https://github.com/stablyai/orca/pull/28761)）
- 报告：agent start failures the same way from every launch path（[@brennanb2025](https://github.com/brennanb2025)，[#28724](https://github.com/stablyai/orca/pull/28724)）
- Pause a moving project's terminals through Sleep and prove they exited (D1b-5d)（[@nwparker](https://github.com/nwparker)，[#28820](https://github.com/stablyai/orca/pull/28820)）
- Background writers step aside for a project a WSL move is taking (D1b-5c-3)（[@nwparker](https://github.com/nwparker)，[#28835](https://github.com/stablyai/orca/pull/28835)）
- 保持：every pane in main's layout through a terminal service restart（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28852](https://github.com/stablyai/orca/pull/28852)）
- 拒绝：a requested tab id that is already taken（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28841](https://github.com/stablyai/orca/pull/28841)）
- A capability-gated blob channel beside scrollback (D1b-6a)（[@nwparker](https://github.com/nwparker)，[#28866](https://github.com/stablyai/orca/pull/28866)）
- A moved pane reopens in its last folder on the WSL host (D1b-6b)（[@nwparker](https://github.com/nwparker)，[#28885](https://github.com/stablyai/orca/pull/28885)）
- Bring each pane back after a terminal service restart when it is shown（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28880](https://github.com/stablyai/orca/pull/28880)）
- The SSH password dialog no longer closes itself and comes back（[@OrcaWin](https://github.com/OrcaWin)，[#28883](https://github.com/stablyai/orca/pull/28883)）
- 允许：users close the profile storage delay warning（[@brennanb2025](https://github.com/brennanb2025)，[#28900](https://github.com/stablyai/orca/pull/28900)）
- Shell history moves with the project to the WSL host (D1b-6c-1)（[@nwparker](https://github.com/nwparker)，[#28902](https://github.com/stablyai/orca/pull/28902)）
- Reuse real launcher builds and avoid unused runtime RPC imports（[@nwparker](https://github.com/nwparker)，[#28905](https://github.com/stablyai/orca/pull/28905)）
- 去掉：a stored terminal row the tab bar already shows when loading the layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28889](https://github.com/stablyai/orca/pull/28889)）
- Overlap independent real PTY idle checks（[@nwparker](https://github.com/nwparker)，[#28932](https://github.com/stablyai/orca/pull/28932)）
- Publish each pane's live terminal title on the layout stream（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28928](https://github.com/stablyai/orca/pull/28928)）
- A relay-era desktop can join the server another desktop on the same login runs（[@OrcaWin](https://github.com/OrcaWin)，[#28886](https://github.com/stablyai/orca/pull/28886)）
- Run each terminal in its own systemd scope so one out-of-memory kill no longer closes every terminal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28871](https://github.com/stablyai/orca/pull/28871)）
- Start a managed server that stopped, on every connect path（[@OrcaWin](https://github.com/OrcaWin)，[#28996](https://github.com/stablyai/orca/pull/28996)）
- 停止：stale saved state from blocking an SSH host's move to a managed server（[@OrcaWin](https://github.com/OrcaWin)，[#29003](https://github.com/stablyai/orca/pull/29003)）
- Detect stalled terminal daemon I/O and offer restart review（[@nwparker](https://github.com/nwparker)，[#29087](https://github.com/stablyai/orca/pull/29087)）
- 修复：macOS terminal daemon restart leaving service registered（[@nwparker](https://github.com/nwparker)，[#29130](https://github.com/stablyai/orca/pull/29130)）
- A paused move to the managed server says so; servers show their real version; a gone server's project can be removed (#27267)（[@OrcaWin](https://github.com/OrcaWin)，[#29208](https://github.com/stablyai/orca/pull/29208)）
- 给予：each machine sharing one home its own managed server（[@OrcaWin](https://github.com/OrcaWin)，[#29214](https://github.com/stablyai/orca/pull/29214)）
- Reattach a healthy remote pane promptly after a worktree switch（[@OrcaWin](https://github.com/OrcaWin)，[#29210](https://github.com/stablyai/orca/pull/29210)）
- 跳过：the ps process-table read on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#29199](https://github.com/stablyai/orca/pull/29199)）
- 显示：the Reconnecting banner only when recovery outlasts a second（[@nwparker](https://github.com/nwparker)，[#29243](https://github.com/stablyai/orca/pull/29243)）
- 发送：typing held during a reattach at the host's subscribed reply（[@nwparker](https://github.com/nwparker)，[#29244](https://github.com/stablyai/orca/pull/29244)）
- A tall remote terminal pane gets a PTY of the same height（[@nwparker](https://github.com/nwparker)，[#29235](https://github.com/stablyai/orca/pull/29235)）
- Forward headless browser commands through startup（[@nwparker](https://github.com/nwparker)，[#29250](https://github.com/stablyai/orca/pull/29250)）
- A parked remote TUI keeps its screen on reveal instead of flashing its shell line（[@nwparker](https://github.com/nwparker)，[#29251](https://github.com/stablyai/orca/pull/29251)）
- 停止：a remote-typed terminal hidden on the host from reconnecting on every send（[@nwparker](https://github.com/nwparker)，[#29252](https://github.com/stablyai/orca/pull/29252)）
- 保持：live output flowing during resync and retry an unanswered one（[@nwparker](https://github.com/nwparker)，[#29236](https://github.com/stablyai/orca/pull/29236)）
- Hand the graph back to the headless host when its desktop window closes（[@nwparker](https://github.com/nwparker)，[#29273](https://github.com/stablyai/orca/pull/29273)）
- After a reboot, a connect that finds the host busy waits instead of failing on the terminal count（[@nwparker](https://github.com/nwparker)，[#29267](https://github.com/stablyai/orca/pull/29267)）
- Retry a stalled SSH reconnect when the machine wakes or the network returns（[@nwparker](https://github.com/nwparker)，[#29237](https://github.com/stablyai/orca/pull/29237)）
- Orca serve owns its Claude and Codex accounts again（[@OrcaWin](https://github.com/OrcaWin)，[#29209](https://github.com/stablyai/orca/pull/29209)）
- Ship the paired web client outside app.asar so a /tmp sweep cannot break it（[@nwparker](https://github.com/nwparker)，[#29277](https://github.com/stablyai/orca/pull/29277)）
- Hand macOS opens from the browser sidecar to the desktop app（[@nwparker](https://github.com/nwparker)，[#29258](https://github.com/stablyai/orca/pull/29258)）
- A worktree created from a remote branch tracks it（[@nwparker](https://github.com/nwparker)，[#29275](https://github.com/stablyai/orca/pull/29275)）
- Never leave an SSH host unconnectable after a refused move (phone users, #29083, Move anyway)（[@OrcaWin](https://github.com/OrcaWin)，[#29220](https://github.com/stablyai/orca/pull/29220)）
- A windowless host no longer lists no tabs for a workspace with live terminals（[@nwparker](https://github.com/nwparker)，[#29283](https://github.com/stablyai/orca/pull/29283)）
- Adopt the v47 terminal daemon the 1.4.227 release runs（[@brennanb2025](https://github.com/brennanb2025)，[#29191](https://github.com/stablyai/orca/pull/29191)）
- A paired client reopening a slept agent tab resumes its conversation（[@nwparker](https://github.com/nwparker)，[#29272](https://github.com/stablyai/orca/pull/29272)）
- Focus and hover reports no longer take a mirrored terminal's size（[@nwparker](https://github.com/nwparker)，[#29239](https://github.com/stablyai/orca/pull/29239)）
- Draw the host's saved screen when a reattached pane's first image is blank（[@nwparker](https://github.com/nwparker)，[#29261](https://github.com/stablyai/orca/pull/29261)）
- Start Linux headless serve on X11 so an inherited Wayland session can't abort it（[@nwparker](https://github.com/nwparker)，[#29260](https://github.com/stablyai/orca/pull/29260)）
- Switching back to a quiet remote terminal no longer refetches its snapshot（[@nwparker](https://github.com/nwparker)，[#29253](https://github.com/stablyai/orca/pull/29253)）
- 跳过：redundant process-host compilation during dev rebuilds（[@OrcaWin](https://github.com/OrcaWin)，[#29317](https://github.com/stablyai/orca/pull/29317)）
- No probe stall on the first remote action after a pause（[@nwparker](https://github.com/nwparker)，[#29240](https://github.com/stablyai/orca/pull/29240)）
- 隐藏：sleeping keeps a live remote workspace row through a transient PTY gap（[@nwparker](https://github.com/nwparker)，[#29325](https://github.com/stablyai/orca/pull/29325)）
- 保留：wake records after hibernation exit（[@nwparker](https://github.com/nwparker)，[#29288](https://github.com/stablyai/orca/pull/29288)）
- Overlap a reveal's stream open with its create, and claim the viewport once（[@nwparker](https://github.com/nwparker)，[#29269](https://github.com/stablyai/orca/pull/29269)）
- 给予：Macs sharing a home their own server, and make the shared-home claim exclusive（[@nwparker](https://github.com/nwparker)，[#29284](https://github.com/stablyai/orca/pull/29284)）
- Remote hosts honor the client's Nest Workspaces setting（[@nwparker](https://github.com/nwparker)，[#29404](https://github.com/stablyai/orca/pull/29404)）
- Never launch the orca-ide bash shim as the headless browser（[@nwparker](https://github.com/nwparker)，[#29363](https://github.com/stablyai/orca/pull/29363)）
- 保持：a CLI socket open while its request is still running（[@nwparker](https://github.com/nwparker)，[#29262](https://github.com/stablyai/orca/pull/29262)）
- Revealing a remote pane no longer triggers a second clear-and-repaint（[@nwparker](https://github.com/nwparker)，[#29285](https://github.com/stablyai/orca/pull/29285)）
- 防止：automatic replacement of host-mirrored agents（[@nwparker](https://github.com/nwparker)，[#29289](https://github.com/stablyai/orca/pull/29289)）
- A cold-parked terminal reveal paints once, at the pane's own size（[@nwparker](https://github.com/nwparker)，[#29331](https://github.com/stablyai/orca/pull/29331)）
- 报告：an unreachable host's worktree graph as unavailable, not empty（[@nwparker](https://github.com/nwparker)，[#29416](https://github.com/stablyai/orca/pull/29416)）
- 去掉：this desktop's rows for a paired host's project when it is removed（[@nwparker](https://github.com/nwparker)，[#29436](https://github.com/stablyai/orca/pull/29436)）
- A reveal after hidden output was dropped always restores it（[@nwparker](https://github.com/nwparker)，[#29342](https://github.com/stablyai/orca/pull/29342)）
- Route a CLI close of a paired host's terminal to that host（[@nwparker](https://github.com/nwparker)，[#29455](https://github.com/stablyai/orca/pull/29455)）
- A headless host keeps a parked terminal at its viewer's size（[@nwparker](https://github.com/nwparker)，[#29349](https://github.com/stablyai/orca/pull/29349)）
- Flag a macOS host whose managed server outlived its launching SSH session（[@nwparker](https://github.com/nwparker)，[#29371](https://github.com/stablyai/orca/pull/29371)）
- Ship @linear/sdk with the managed server so Linear works on SSH hosts（[@nwparker](https://github.com/nwparker)，[#29388](https://github.com/stablyai/orca/pull/29388)）
- A paired-client open leaves originless legacy resume records unresumed（[@nwparker](https://github.com/nwparker)，[#29389](https://github.com/stablyai/orca/pull/29389)）
- Reap orphaned processes when orca serve is PID 1（[@nwparker](https://github.com/nwparker)，[#29390](https://github.com/stablyai/orca/pull/29390)）
- Replace a retired macOS terminal service job that blocks new terminals（[@nwparker](https://github.com/nwparker)，[#29395](https://github.com/stablyai/orca/pull/29395)）
- Try the waiting ~/.ssh key before showing a password dialog（[@nwparker](https://github.com/nwparker)，[#29397](https://github.com/stablyai/orca/pull/29397)）
- A reconnect replay no longer re-fires task-complete notifications（[@nwparker](https://github.com/nwparker)，[#29410](https://github.com/stablyai/orca/pull/29410)）
- Seal integration credentials on the headless server instead of storing them in plaintext（[@nwparker](https://github.com/nwparker)，[#29412](https://github.com/stablyai/orca/pull/29412)）
- Opt-in per-terminal memory and swap limits on terminal hosts（[@nwparker](https://github.com/nwparker)，[#29413](https://github.com/stablyai/orca/pull/29413)）
- A Windows terminal read no longer shows PowerShell's history suggestion as typed input（[@nwparker](https://github.com/nwparker)，[#29415](https://github.com/stablyai/orca/pull/29415)）
- Restoring more than 32 remote terminals queues them instead of failing（[@nwparker](https://github.com/nwparker)，[#29417](https://github.com/stablyai/orca/pull/29417)）
- A terminal the old daemon still runs is never handed to the new daemon after an update（[@nwparker](https://github.com/nwparker)，[#29418](https://github.com/stablyai/orca/pull/29418)）
- 保持：remote typing in the fast paint lane by measuring each pane's echo delay（[@nwparker](https://github.com/nwparker)，[#29419](https://github.com/stablyai/orca/pull/29419)）
- Log and survive recoverable process errors, stop cleanly on fatal ones（[@nwparker](https://github.com/nwparker)，[#29423](https://github.com/stablyai/orca/pull/29423)）
- Resolve the install root through a symlinked launch script（[@nwparker](https://github.com/nwparker)，[#29424](https://github.com/stablyai/orca/pull/29424)）
- Classify remote_runtime_busy as recoverable（[@nwparker](https://github.com/nwparker)，[#29425](https://github.com/stablyai/orca/pull/29425)）
- 保持：port forwarding controls for an SSH host that moved to its managed server（[@nwparker](https://github.com/nwparker)，[#29427](https://github.com/stablyai/orca/pull/29427)）
- Hermes settles and first-work rename runs on a headless host（[@nwparker](https://github.com/nwparker)，[#29429](https://github.com/stablyai/orca/pull/29429)）
- A phone wake no longer resumes an agent whose terminal is still running（[@nwparker](https://github.com/nwparker)，[#29431](https://github.com/stablyai/orca/pull/29431)）
- Fail when an explicit --port is taken instead of serving on another port（[@nwparker](https://github.com/nwparker)，[#29432](https://github.com/stablyai/orca/pull/29432)）
- A paired tab closed right after a restart stays closed on the first sync（[@nwparker](https://github.com/nwparker)，[#29433](https://github.com/stablyai/orca/pull/29433)）
- 允许：an unfinished SSH access link be retried or cancelled（[@nwparker](https://github.com/nwparker)，[#29441](https://github.com/stablyai/orca/pull/29441)）
- A remote pane comes back on its own once its host answers again（[@nwparker](https://github.com/nwparker)，[#29444](https://github.com/stablyai/orca/pull/29444)）
- Pick up ~/.ssh/config changes at launch and when the hosts menu opens（[@nwparker](https://github.com/nwparker)，[#29451](https://github.com/stablyai/orca/pull/29451)）
- 给予：each Linux account its own Xvfb display instead of sharing :99（[@nwparker](https://github.com/nwparker)，[#29458](https://github.com/stablyai/orca/pull/29458)）
- 显示：a paired server's terminal in this desktop on terminal switch（[@Velm14](https://github.com/Velm14)，[#28023](https://github.com/stablyai/orca/pull/28023)）
- Removing a managed server's SSH host points to Stop or Forget（[@nwparker](https://github.com/nwparker)，[#29450](https://github.com/stablyai/orca/pull/29450)）
- Explain --environment in terminal help and on a stale handle（[@nwparker](https://github.com/nwparker)，[#29453](https://github.com/stablyai/orca/pull/29453)）
- 发送：again a tab close the paired host never received（[@nwparker](https://github.com/nwparker)，[#29468](https://github.com/stablyai/orca/pull/29468)）
- Paired servers honor the desktop's Keep Local Main Up to Date（[@nwparker](https://github.com/nwparker)，[#29469](https://github.com/stablyai/orca/pull/29469)）
- 报告：Claude's workspace trust dialog from terminal show's agent wait（[@nwparker](https://github.com/nwparker)，[#29488](https://github.com/stablyai/orca/pull/29488)）
- A slept remote workspace stays hidden after host updates and restarts（[@nwparker](https://github.com/nwparker)，[#29437](https://github.com/stablyai/orca/pull/29437)）
- Close the gaps in the macOS launch-session warning（[@nwparker](https://github.com/nwparker)，[#29487](https://github.com/stablyai/orca/pull/29487)）
- Agents on a managed SSH host can drive the desktop Orca browser again, behind the per-host switch（[@nwparker](https://github.com/nwparker)，[#29384](https://github.com/stablyai/orca/pull/29384)）
- An SSH host with a managed server lists its checkout once in Run on（[@nwparker](https://github.com/nwparker)，[#29518](https://github.com/stablyai/orca/pull/29518)）
- 发送：modifyOtherKeys Enter chords to apps that armed it, so pi's Shift/Option+Enter stop drifting (STA-7701)（[@nwparker](https://github.com/nwparker)，[#29528](https://github.com/stablyai/orca/pull/29528)）
- Hidden relay-era SSH panes stop sending every output chunk to the window（[@nwparker](https://github.com/nwparker)，[#29537](https://github.com/stablyai/orca/pull/29537)）
- A paired client no longer keeps a finished remote pane on working（[@nwparker](https://github.com/nwparker)，[#29538](https://github.com/stablyai/orca/pull/29538)）
- A managed SSH/WSL server falls back when port 6768 is taken; WSL lane skips the MSI on 3.0.1 images（[@nwparker](https://github.com/nwparker)，[#29522](https://github.com/stablyai/orca/pull/29522)）
- Offer the held-back challenge when a strict MaxAuthTries host drops the key retry（[@nwparker](https://github.com/nwparker)，[#29541](https://github.com/stablyai/orca/pull/29541)）
- Start a managed server whose active slot has no launch artifacts（[@SungsooKwon](https://github.com/SungsooKwon)，[#29532](https://github.com/stablyai/orca/pull/29532)）
- Resolve session tab workspace path aliases（[@nwparker](https://github.com/nwparker)，[#29543](https://github.com/stablyai/orca/pull/29543)）
- A disconnect during the legacy relay bridge wait no longer republishes connected（[@nwparker](https://github.com/nwparker)，[#29544](https://github.com/stablyai/orca/pull/29544)）
- Honour a paired-client close for every sleeping record shape（[@nwparker](https://github.com/nwparker)，[#29546](https://github.com/stablyai/orca/pull/29546)）
- Hidden agent restores past the host's cap resume in the background once it has room（[@nwparker](https://github.com/nwparker)，[#29547](https://github.com/stablyai/orca/pull/29547)）
- Windows orcad stops cleanly when its Electron browser sidecar's profile is still locked（[@nwparker](https://github.com/nwparker)，[#29562](https://github.com/stablyai/orca/pull/29562)）
- Resolve terminal authority from workspace owner evidence（[@OrcaWin](https://github.com/OrcaWin)，[#29565](https://github.com/stablyai/orca/pull/29565)）
- 限制：the line-ending sample's index scan, not just its matches（[@nwparker](https://github.com/nwparker)，[#29552](https://github.com/stablyai/orca/pull/29552)）
- Clear the macOS launch-session warning after this client relaunches the server（[@nwparker](https://github.com/nwparker)，[#29579](https://github.com/stablyai/orca/pull/29579)）
- Notify for a task that finished during an SSH disconnect（[@nwparker](https://github.com/nwparker)，[#29580](https://github.com/stablyai/orca/pull/29580)）
- End the paused-output gap exemption once a snapshot covers it（[@nwparker](https://github.com/nwparker)，[#29582](https://github.com/stablyai/orca/pull/29582)）
- Reconnecting a host after stopping its managed server no longer fails the move (#29560)（[@nwparker](https://github.com/nwparker)，[#29586](https://github.com/stablyai/orca/pull/29586)）
- Reopening a slept tab resumes when the other holder's agent has proven exited（[@nwparker](https://github.com/nwparker)，[#29588](https://github.com/stablyai/orca/pull/29588)）
- Prove the held-6768 fallback in e2e and keep the managed marker out of terminals（[@nwparker](https://github.com/nwparker)，[#29569](https://github.com/stablyai/orca/pull/29569)）
- Free a lock whose PID another user now owns, and explain a possibly reused PID（[@nwparker](https://github.com/nwparker)，[#29548](https://github.com/stablyai/orca/pull/29548)）
- 跳过：the moved shell-history pass on starts with nothing to install（[@nwparker](https://github.com/nwparker)，[#29556](https://github.com/stablyai/orca/pull/29556)）
- 保持：one workspace spelling for an early alias session-tabs stream（[@nwparker](https://github.com/nwparker)，[#29592](https://github.com/stablyai/orca/pull/29592)）
- Relay-era terminals' orca orchestration commands work again, behind the per-host switch (STA-10765)（[@nwparker](https://github.com/nwparker)，[#29571](https://github.com/stablyai/orca/pull/29571)）
- Bind relay-era legacy coordinators to their host and cap inbox reads (STA-10765 follow-up)（[@nwparker](https://github.com/nwparker)，[#29596](https://github.com/stablyai/orca/pull/29596)）
- A managed server restart no longer marks still-running agents done（[@nwparker](https://github.com/nwparker)，[#29604](https://github.com/stablyai/orca/pull/29604)）
- The ledgered desktop rewrite stage that finishes a committed move (D1b-7b)（[@nwparker](https://github.com/nwparker)，[#29597](https://github.com/stablyai/orca/pull/29597)）
- 停止：a relay-era shell when its bridged tab closes（[@nwparker](https://github.com/nwparker)，[#29620](https://github.com/stablyai/orca/pull/29620)）
- Explain a locked macOS Keychain to the user and recover Linear/Jira without a restart（[@nwparker](https://github.com/nwparker)，[#29608](https://github.com/stablyai/orca/pull/29608)）
- A restarted managed server keeps the tab titles of terminals it adopts（[@nwparker](https://github.com/nwparker)，[#29623](https://github.com/stablyai/orca/pull/29623)）
- 保持：desktop 2 connected with its live relay terminal when desktop 1 already moved the host (STA-10604)（[@nwparker](https://github.com/nwparker)，[#29625](https://github.com/stablyai/orca/pull/29625)）
- Classify integrationCredentials RPC ownership（[@nwparker](https://github.com/nwparker)，[#29638](https://github.com/stablyai/orca/pull/29638)）
- Load the bridge panes module lazily so SSH state effects have no import side effect (fixes main after #29625)（[@nwparker](https://github.com/nwparker)，[#29646](https://github.com/stablyai/orca/pull/29646)）
- Right-click pastes once into Codex（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29647](https://github.com/stablyai/orca/pull/29647)）
- Notify for a managed-server task that finished during an SSH disconnect（[@nwparker](https://github.com/nwparker)，[#29636](https://github.com/stablyai/orca/pull/29636)）
- A restarted managed server republishes restored tab titles right away（[@nwparker](https://github.com/nwparker)，[#29654](https://github.com/stablyai/orca/pull/29654)）
- 保留：paste order across remote recovery（[@nwparker](https://github.com/nwparker)，[#29635](https://github.com/stablyai/orca/pull/29635)）
- Tell panes their daemon died at once and say when typed input was lost（[@nwparker](https://github.com/nwparker)，[#29660](https://github.com/stablyai/orca/pull/29660)）
- Reopening a workspace-slept agent tab on a managed host resumes it, without widening its permissions（[@nwparker](https://github.com/nwparker)，[#29672](https://github.com/stablyai/orca/pull/29672)）
- A revealed paired terminal fits once, at its real size, on Linux（[@nwparker](https://github.com/nwparker)，[#29668](https://github.com/stablyai/orca/pull/29668)）
- Repaint the viewport after an inline image is added（[@nwparker](https://github.com/nwparker)，[#29713](https://github.com/stablyai/orca/pull/29713)）
- 保持：the WSL CLI status check from timing out on a cold or slow-profile distro（[@nwparker](https://github.com/nwparker)，[#29814](https://github.com/stablyai/orca/pull/29814)）
- 打开：the picked Windows shell on a managed host instead of typing it into PowerShell（[@nwparker](https://github.com/nwparker)，[#29836](https://github.com/stablyai/orca/pull/29836)）
- Do not bind a loopback port another runtime already serves on all interfaces（[@nwparker](https://github.com/nwparker)，[#29837](https://github.com/stablyai/orca/pull/29837)）
- Never hibernate floating-workspace terminals（[@brennanb2025](https://github.com/brennanb2025)，[#29790](https://github.com/stablyai/orca/pull/29790)）
- Pi and OMP agents started from the window in WSL report status from their first launch（[@brennanb2025](https://github.com/brennanb2025)，[#29780](https://github.com/stablyai/orca/pull/29780)）
- 保持：the integration credential key only in the owner-only key file（[@nwparker](https://github.com/nwparker)，[#29859](https://github.com/stablyai/orca/pull/29859)）
- Turn a host's orca CLI control on by default and stop resetting saved choices（[@nwparker](https://github.com/nwparker)，[#29856](https://github.com/stablyai/orca/pull/29856)）
- 保持：the pane when a recovery snapshot is unavailable（[@nwparker](https://github.com/nwparker)，[#29874](https://github.com/stablyai/orca/pull/29874)）
- Replay a viewport claim made during remote recovery before typing（[@nwparker](https://github.com/nwparker)，[#29892](https://github.com/stablyai/orca/pull/29892)）
- A restarted orcad adopts its running agents, and a windowless host resumes slept running agents（[@nwparker](https://github.com/nwparker)，[#29885](https://github.com/stablyai/orca/pull/29885)）
- Don't hand a stopped pre-claim server on a shared home to whichever machine connects first（[@nwparker](https://github.com/nwparker)，[#29883](https://github.com/stablyai/orca/pull/29883)）
- A failed or cancelled WSL host Add leaves no holder or host behind（[@nwparker](https://github.com/nwparker)，[#29889](https://github.com/stablyai/orca/pull/29889)）
- 保持：a converted SSH host hidden when another host shares its repo id（[@nwparker](https://github.com/nwparker)，[#29873](https://github.com/stablyai/orca/pull/29873)）
- Run wsl.exe probes from the system folder, never the profile（[@nwparker](https://github.com/nwparker)，[#29853](https://github.com/stablyai/orca/pull/29853)）
- Seed the first terminal when a warm empty worktree is selected again（[@nwparker](https://github.com/nwparker)，[#29893](https://github.com/stablyai/orca/pull/29893)）
- 移动：the open workspace to its managed server after the cold-start scan（[@nwparker](https://github.com/nwparker)，[#29894](https://github.com/stablyai/orca/pull/29894)）
- Folder workspaces can run scoped browser commands on a headless host（[@nwparker](https://github.com/nwparker)，[#29881](https://github.com/stablyai/orca/pull/29881)）
- Link a moved project only to the server machine's own checkout（[@nwparker](https://github.com/nwparker)，[#29896](https://github.com/stablyai/orca/pull/29896)）
- Never claim or reclaim another machine's server, and recover a stale lock without displacing a live one（[@nwparker](https://github.com/nwparker)，[#29902](https://github.com/stablyai/orca/pull/29902)）
- 显示：the Ports panel for folder workspaces on a managed SSH server（[@nwparker](https://github.com/nwparker)，[#29908](https://github.com/stablyai/orca/pull/29908)）
- Infer the repo for worktree create when the parent is host-scoped by identity（[@nwparker](https://github.com/nwparker)，[#29909](https://github.com/stablyai/orca/pull/29909)）
- Relay-era pane reattach keeps output printed after its screen, and an exited or abandoned pane never comes back（[@nwparker](https://github.com/nwparker)，[#29910](https://github.com/stablyai/orca/pull/29910)）
- Re-check a macOS host's ended launch-session warning so another desktop's restart can clear it（[@nwparker](https://github.com/nwparker)，[#29915](https://github.com/stablyai/orca/pull/29915)）
- Ship the mobile web page so phones paired to orcad get it（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29882](https://github.com/stablyai/orca/pull/29882)）
- A Disconnect or Remove during a background connect sticks（[@nwparker](https://github.com/nwparker)，[#29918](https://github.com/stablyai/orca/pull/29918)）
- 停止：offering a project on a paired server's SSH host, and say where to add it（[@nwparker](https://github.com/nwparker)，[#29919](https://github.com/stablyai/orca/pull/29919)）
- A failed removal no longer leaves the host stuck as "being removed"（[@nwparker](https://github.com/nwparker)，[#29921](https://github.com/stablyai/orca/pull/29921)）
- Sleep a twin-published workspace on the host each terminal names, or refuse（[@nwparker](https://github.com/nwparker)，[#29929](https://github.com/stablyai/orca/pull/29929)）
- A relay on another node of a shared network home is unverifiable, not exited（[@nwparker](https://github.com/nwparker)，[#29928](https://github.com/stablyai/orca/pull/29928)）
- Opening a slept running agent on a host with no window resumes it, never a fresh launch（[@nwparker](https://github.com/nwparker)，[#29950](https://github.com/stablyai/orca/pull/29950)）
- 保持：an artifact slot another machine's serve or daemon still runs from（[@nwparker](https://github.com/nwparker)，[#29952](https://github.com/stablyai/orca/pull/29952)）
- 保持：existing hosts' orca CLI control off after the on-by-default flip（[@nwparker](https://github.com/nwparker)，[#29949](https://github.com/stablyai/orca/pull/29949)）
- Removing one host's copy of a project keeps its same-path twin's shells, tabs and edits（[@nwparker](https://github.com/nwparker)，[#29954](https://github.com/stablyai/orca/pull/29954)）
- A client that reconnects during idle shutdown can still open terminals（[@nwparker](https://github.com/nwparker)，[#29958](https://github.com/stablyai/orca/pull/29958)）
- 保持：Vim scrolling inside shrunken panes（[@nwparker](https://github.com/nwparker)，[#29960](https://github.com/stablyai/orca/pull/29960)）
- Recovering one split pane keeps its healthy sibling（[@nwparker](https://github.com/nwparker)，[#29961](https://github.com/stablyai/orca/pull/29961)）
- Reconnecting a stopped managed host keeps the server's project groups（[@nwparker](https://github.com/nwparker)，[#29962](https://github.com/stablyai/orca/pull/29962)）
- The host stops a removed project's shells and agents itself（[@nwparker](https://github.com/nwparker)，[#29964](https://github.com/stablyai/orca/pull/29964)）

#### Phone {#v1-4-229-phone}

> Use shared workspace filters and sorting, browse linked issues and notes, work with server workspaces, and resume supported chats in a new CLI conversation.

- Size onboarding slides to the modal sheet on iPad（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26919](https://github.com/stablyai/orca/pull/26919)）
- One host sidebar on iPad, with the page owning the host area（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26761](https://github.com/stablyai/orca/pull/26761)）
- 保持：chat drafts and the sidebar reachable on iPad（[@brennanb2025](https://github.com/brennanb2025)，[#26096](https://github.com/stablyai/orca/pull/26096)）
- Usage and account switching come from the paired server（[@OrcaWin](https://github.com/OrcaWin)，[#27135](https://github.com/stablyai/orca/pull/27135)）
- Jira reaches the server（[@OrcaWin](https://github.com/OrcaWin)，[#27136](https://github.com/stablyai/orca/pull/27136)）
- 保持：tool results with the right command and reveal all results on mobile（[@nwparker](https://github.com/nwparker)，[#26968](https://github.com/stablyai/orca/pull/26968)）
- Preselect LAN for a signed-out desktop（[@OrcaWin](https://github.com/OrcaWin)，[#27145](https://github.com/stablyai/orca/pull/27145)）
- A new pairing scan supersedes a stale relay pairing journal（[@OrcaWin](https://github.com/OrcaWin)，[#27157](https://github.com/stablyai/orca/pull/27157)）
- Agents for workspaces another runtime owns show why（[@OrcaWin](https://github.com/OrcaWin)，[#27196](https://github.com/stablyai/orca/pull/27196)）
- The paired server is the web client's only host（[@OrcaWin](https://github.com/OrcaWin)，[#27266](https://github.com/stablyai/orca/pull/27266)）
- 显示：SSH host health on the workspace row badge（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26415](https://github.com/stablyai/orca/pull/26415)）
- Relay a paired phone's server-workspace requests through the desktop (hidden)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26435](https://github.com/stablyai/orca/pull/26435)）
- 允许：the desktop list its servers and their workspaces for the phone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26442](https://github.com/stablyai/orca/pull/26442)）
- Direct connections use v2 framing and never fall back once v2 is seen（[@OrcaWin](https://github.com/OrcaWin)，[#27473](https://github.com/stablyai/orca/pull/27473)）
- Verified https pairing links; custom scheme carries no secret（[@OrcaWin](https://github.com/OrcaWin)，[#27475](https://github.com/stablyai/orca/pull/27475)）
- Run focused checks for Mobile CI tool changes（[@nwparker](https://github.com/nwparker)，[#27532](https://github.com/stablyai/orca/pull/27532)）
- 打开：Grok, OpenCode, OMP and Pi chats on the phone（[@brennanb2025](https://github.com/brennanb2025)，[#27212](https://github.com/stablyai/orca/pull/27212)）
- Accept a fresh terminal snapshot after a stream ends（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27539](https://github.com/stablyai/orca/pull/27539)）
- The browser signs in with a non-extractable device key, or pairs for this session only（[@OrcaWin](https://github.com/OrcaWin)，[#27552](https://github.com/stablyai/orca/pull/27552)）
- 允许：the OTA page send extra top-level request fields（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27815](https://github.com/stablyai/orca/pull/27815)）
- 显示：the OTA download as a progress bar（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28056](https://github.com/stablyai/orca/pull/28056)）
- 去掉：the download bar glide so it always matches the MB counter（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28089](https://github.com/stablyai/orca/pull/28089)）
- 保持：a not-sent message in place on the phone, using the desktop's logic（[@brennanb2025](https://github.com/brennanb2025)，[#27936](https://github.com/stablyai/orca/pull/27936)）
- Copy complete chat replies and loaded markdown（[@brennanb2025](https://github.com/brennanb2025)，[#26152](https://github.com/stablyai/orca/pull/26152)）
- Load markdown tabs from any desktop split group; center load-error Retry（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28132](https://github.com/stablyai/orca/pull/28132)）
- Link the Android APK through a stable URL and bump it on release（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28143](https://github.com/stablyai/orca/pull/28143)）
- Auto-hide menu bar in web popups and re-layout when revealed（[@AmethystLiang](https://github.com/AmethystLiang)，[#28388](https://github.com/stablyai/orca/pull/28388)）
- 显示：and use the desktop's server workspaces on the phone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26501](https://github.com/stablyai/orca/pull/26501)）
- 避免：repeated mobile recording checks and slow download assertions（[@nwparker](https://github.com/nwparker)，[#28468](https://github.com/stablyai/orca/pull/28468)）
- Create workspaces on the desktop's servers from the phone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26533](https://github.com/stablyai/orca/pull/26533)）
- View and drive server browser pages the desktop renders（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27749](https://github.com/stablyai/orca/pull/27749)）
- 保持：the chat where the reader scrolled to（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28413](https://github.com/stablyai/orca/pull/28413)）
- Check a server workspace's SSH state on that server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26519](https://github.com/stablyai/orca/pull/26519)）
- List the desktop's server projects on the phone's Tasks screen（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27741](https://github.com/stablyai/orca/pull/27741)）
- Make mobile and desktop searches agree（[@nwparker](https://github.com/nwparker)，[#28580](https://github.com/stablyai/orca/pull/28580)）
- Browse Jira and start workspaces on mobile（[@nwparker](https://github.com/nwparker)，[#28616](https://github.com/stablyai/orca/pull/28616)）
- Workspace list host badge, "workspaces" wording, and search keyboard on the page（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28824](https://github.com/stablyai/orca/pull/28824)）
- Log OTA shell lifecycle to the connection diagnostics（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28840](https://github.com/stablyai/orca/pull/28840)）
- 保持：content clear of the side insets in landscape（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28749](https://github.com/stablyai/orca/pull/28749)）
- 打开：Create Workspace and Close issue from Tasks on iOS（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28855](https://github.com/stablyai/orca/pull/28855)）
- Phone server rows follow the desktop's other-client and sleeping filters（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28819](https://github.com/stablyai/orca/pull/28819)）
- Render markdown with markdown-it instead of a hand-written reader（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28858](https://github.com/stablyai/orca/pull/28858)）
- Group by Project with the desktop sidebar's own code（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28850](https://github.com/stablyai/orca/pull/28850)）
- Native chat: desktop and mobile read the host's working answer; plain refusal for a stopped agent's prompt (3/5, rebuild of #26867)（[@brennanb2025](https://github.com/brennanb2025)，[#28104](https://github.com/stablyai/orca/pull/28104)）
- 显示：skill commands you ran and draw warnings, errors and status lines as notices（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28899](https://github.com/stablyai/orca/pull/28899)）
- The phone filters and sorts with the desktop's shared Workspace options rules（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28986](https://github.com/stablyai/orca/pull/28986)）
- 显示：answered approvals and questions as receipts, and a waiting question as "Awaiting user input"（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28906](https://github.com/stablyai/orca/pull/28906)）
- Phones on a host with no window list each terminal once（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29085](https://github.com/stablyai/orca/pull/29085)）
- 保持：Jira saved and status filters in the browser client（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29203](https://github.com/stablyai/orca/pull/29203)）
- 打开：the OTA workspace page on iOS 18（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29197](https://github.com/stablyai/orca/pull/29197)）
- 停止："Opening workspace" spinning forever when the page never loads（[@nwparker](https://github.com/nwparker)，[#29274](https://github.com/stablyai/orca/pull/29274)）
- 打开：each chat at its newest message when switching chats（[@brennanb2025](https://github.com/brennanb2025)，[#29099](https://github.com/stablyai/orca/pull/29099)）
- The phone's Workspace options sheet, with every desktop option（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28997](https://github.com/stablyai/orca/pull/28997)）
- 显示：phone subagents and open the correct parent chat（[@brennanb2025](https://github.com/brennanb2025)，[#28686](https://github.com/stablyai/orca/pull/28686)）
- Long-press a workspace to see its linked PR, issues and notes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29225](https://github.com/stablyai/orca/pull/29225)）
- Say the host is unreachable and reload when it answers, instead of "Session restore failed"（[@nwparker](https://github.com/nwparker)，[#29460](https://github.com/stablyai/orca/pull/29460)）
- Agent Session History resumes sessions in SSH workspaces that can read them（[@nwparker](https://github.com/nwparker)，[#29461](https://github.com/stablyai/orca/pull/29461)）
- 保持：the app download going over a slow link instead of timing out each queued read（[@nwparker](https://github.com/nwparker)，[#29751](https://github.com/stablyai/orca/pull/29751)）
- 移除：only Orca's own adb forwards when an Android session stops（[@zanmlakar](https://github.com/zanmlakar)，[#28780](https://github.com/stablyai/orca/pull/28780)）
- 停止：phone reconnects from undoing a desktop take-back（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29465](https://github.com/stablyai/orca/pull/29465)）
- Draw your own messages as markdown, fold long ones and open attached pictures full size（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29075](https://github.com/stablyai/orca/pull/29075)）
- 停止：re-downloading a current OTA bundle on entry（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29860](https://github.com/stablyai/orca/pull/29860)）
- 恢复：in New CLI from a phone chat tab（[@brennanb2025](https://github.com/brennanb2025)，[#29783](https://github.com/stablyai/orca/pull/29783)）
- A streaming reply reveals word by word, like the desktop（[@brennanb2025](https://github.com/brennanb2025)，[#29148](https://github.com/stablyai/orca/pull/29148)）
- Re-read a server's capabilities when the server reconnects, not only the desktop（[@nwparker](https://github.com/nwparker)，[#29913](https://github.com/stablyai/orca/pull/29913)）
- 显示：message times, keep the long-press sheet open, and say when a conversation isn't found（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29105](https://github.com/stablyai/orca/pull/29105)）
- Order sidebar names the same on desktop, phone and server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29946](https://github.com/stablyai/orca/pull/29946)）
- 移除：the dead space around the chat composer（[@brennanb2025](https://github.com/brennanb2025)，[#29224](https://github.com/stablyai/orca/pull/29224)）
- Pair and stay paired from plain-http LAN and Tailscale pages again (partial revert of #27540)（[@nwparker](https://github.com/nwparker)，[#29984](https://github.com/stablyai/orca/pull/29984)）

#### Workspaces, sidebar & tabs {#v1-4-229-workspaces-sidebar-tabs}

> See checkout progress, clean up workspaces with clearer confirmation, and keep project ownership, sidebar order and restored tabs consistent.

- 打开：links and window.open in Orca tabs the way Chrome does（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26976](https://github.com/stablyai/orca/pull/26976)）
- Refs/heads/update-wechat-qr-code-2（[@AmethystLiang](https://github.com/AmethystLiang)，[#27036](https://github.com/stablyai/orca/pull/27036)）
- A session write cannot bring back a tab its partition recorded as closed（[@OrcaWin](https://github.com/OrcaWin)，[#27125](https://github.com/stablyai/orca/pull/27125)）
- Copy stable tab references（[@fabricedge](https://github.com/fabricedge)，[#26881](https://github.com/stablyai/orca/pull/26881)）
- 新增：CLI commands to manage and find workspace references（[@nwparker](https://github.com/nwparker)，[#26807](https://github.com/stablyai/orca/pull/26807)）
- Pairing with this same Orca profile is refused（[@OrcaWin](https://github.com/OrcaWin)，[#27166](https://github.com/stablyai/orca/pull/27166)）
- 修复：roadmap crash with plugin language packs（[@nwparker](https://github.com/nwparker)，[#26860](https://github.com/stablyai/orca/pull/26860)）
- 保留：Git history lanes through unrelated roots（[@nwparker](https://github.com/nwparker)，[#26932](https://github.com/stablyai/orca/pull/26932)）
- 保持：repository detection off the main registration thread（[@nwparker](https://github.com/nwparker)，[#26760](https://github.com/stablyai/orca/pull/26760)）
- Await Git checks while discovering and importing nested projects（[@nwparker](https://github.com/nwparker)，[#26790](https://github.com/stablyai/orca/pull/26790)）
- 保持：folder Git upgrades responsive and recheck project ownership（[@nwparker](https://github.com/nwparker)，[#26791](https://github.com/stablyai/orca/pull/26791)）
- Re-pairing the same server keeps its environment（[@OrcaWin](https://github.com/OrcaWin)，[#27197](https://github.com/stablyai/orca/pull/27197)）
- PR reads and actions follow the ownership table（[@OrcaWin](https://github.com/OrcaWin)，[#27248](https://github.com/stablyai/orca/pull/27248)）
- 保留：alias recovery while guarding destructive suggestions（[@nwparker](https://github.com/nwparker)，[#26934](https://github.com/stablyai/orca/pull/26934)）
- 保留：explicit workspace names after selecting tasks（[@nwparker](https://github.com/nwparker)，[#26937](https://github.com/stablyai/orca/pull/26937)）
- Return current preferences after slow updates（[@nwparker](https://github.com/nwparker)，[#27199](https://github.com/stablyai/orca/pull/27199)）
- List the cold-relaunch tab-order swap as known on main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27353](https://github.com/stablyai/orca/pull/27353)）
- Clean up completed permission helpers asynchronously（[@nwparker](https://github.com/nwparker)，[#27347](https://github.com/stablyai/orca/pull/27347)）
- 保持：NUL-separated source literals searchable（[@nwparker](https://github.com/nwparker)，[#26864](https://github.com/stablyai/orca/pull/26864)）
- Release macOS screenshot memory after each request（[@f8team](https://github.com/f8team)，[#27374](https://github.com/stablyai/orca/pull/27374)）
- 保持：Node-only Quick Open path accumulator out of the renderer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27372](https://github.com/stablyai/orca/pull/27372)）
- Require pointer rest before opening activity hover cards（[@AmethystLiang](https://github.com/AmethystLiang)，[#25931](https://github.com/stablyai/orca/pull/25931)）
- Accept a notification's workspace server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26516](https://github.com/stablyai/orca/pull/26516)）
- 保持：deferred line-init defined for plugins that call it by name（[@nwparker](https://github.com/nwparker)，[#26842](https://github.com/stablyai/orca/pull/26842)）
- 修复：cold proxy authentication in the desktop HTTP client（[@nwparker](https://github.com/nwparker)，[#26957](https://github.com/stablyai/orca/pull/26957)）
- 忽略：delayed PR/MR lookups after you change the form（[@nwparker](https://github.com/nwparker)，[#26954](https://github.com/stablyai/orca/pull/26954)）
- 新增：manual cleanup for worktree Electron storage（[@nwparker](https://github.com/nwparker)，[#27414](https://github.com/stablyai/orca/pull/27414)）
- 停止：the AppImage crashpad handler before the mount goes away（[@sergeytiron](https://github.com/sergeytiron)，[#23459](https://github.com/stablyai/orca/pull/23459)）
- 停止：a removed folder workspace from leaving a blank row（[@bbingz](https://github.com/bbingz)，[#26376](https://github.com/stablyai/orca/pull/26376)）
- A removed layout writer no longer fails other PRs' ratchet check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27557](https://github.com/stablyai/orca/pull/27557)）
- 保持：the 'worktree is ready' toast until dismissed（[@brennanb2025](https://github.com/brennanb2025)，[#27566](https://github.com/stablyai/orca/pull/27566)）
- Jump instead of smooth-scrolling under reduced motion（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26796](https://github.com/stablyai/orca/pull/26796)）
- Check real I/O progress during worktree deletion（[@nwparker](https://github.com/nwparker)，[#27620](https://github.com/stablyai/orca/pull/27620)）
- 恢复：dialog: show a finished resume as a result, not a picker（[@brennanb2025](https://github.com/brennanb2025)，[#27732](https://github.com/stablyai/orca/pull/27732)）
- 保持：Wayland clipboard text current（[@nwparker](https://github.com/nwparker)，[#27772](https://github.com/stablyai/orca/pull/27772)）
- 保持：extracted AppImage copies that something still runs from（[@OrcaWin](https://github.com/OrcaWin)，[#28002](https://github.com/stablyai/orca/pull/28002)）
- Clear a cancelled macOS install request before staging the next update（[@OrcaWin](https://github.com/OrcaWin)，[#28010](https://github.com/stablyai/orca/pull/28010)）
- Run Windows hooks without requiring PowerShell 7（[@OrcaWin](https://github.com/OrcaWin)，[#27626](https://github.com/stablyai/orca/pull/27626)）
- 保持：a "chats resumed" entry in the bottom bar until you've seen the result（[@brennanb2025](https://github.com/brennanb2025)，[#27580](https://github.com/stablyai/orca/pull/27580)）
- Point the main sync-spawn ratchet at the shared ratchet library（[@OrcaWin](https://github.com/OrcaWin)，[#28054](https://github.com/stablyai/orca/pull/28054)）
- 给予：Kimi a Windows .cmd status hook that cmd.exe can run（[@OrcaWin](https://github.com/OrcaWin)，[#27714](https://github.com/stablyai/orca/pull/27714)）
- 减小：transcript waits and redundant runner demand（[@nwparker](https://github.com/nwparker)，[#28060](https://github.com/stablyai/orca/pull/28060)）
- 停止：the workspace link icon lighting up on hover（[@brennanb2025](https://github.com/brennanb2025)，[#28078](https://github.com/stablyai/orca/pull/28078)）
- Warm only Linux for compiler recipe changes（[@nwparker](https://github.com/nwparker)，[#28081](https://github.com/stablyai/orca/pull/28081)）
- 停止：closed diff editors from leaking through Monaco's gutter menu（[@brennanb2025](https://github.com/brennanb2025)，[#27793](https://github.com/stablyai/orca/pull/27793)）
- Name the code behind a renderer out-of-memory crash（[@brennanb2025](https://github.com/brennanb2025)，[#27814](https://github.com/stablyai/orca/pull/27814)）
- 恢复：toast: say what happened and name its action（[@brennanb2025](https://github.com/brennanb2025)，[#28068](https://github.com/stablyai/orca/pull/28068)）
- 停止：only the named simulator's stream helper (STA-10307)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28176](https://github.com/stablyai/orca/pull/28176)）
- Close worktree ready notification when its workspace opens（[@nwparker](https://github.com/nwparker)，[#28238](https://github.com/stablyai/orca/pull/28238)）
- Register the stable launcher when serving from an extracted AppImage（[@OrcaWin](https://github.com/OrcaWin)，[#28241](https://github.com/stablyai/orca/pull/28241)）
- 显示：folder workspaces in the Cmd+J jump palette（[@AmethystLiang](https://github.com/AmethystLiang)，[#28175](https://github.com/stablyai/orca/pull/28175)）
- 恢复：the saved active group as a window does in the session-tabs projection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28174](https://github.com/stablyai/orca/pull/28174)）
- 移除：read macOS notifications from Notification Center by pane thread（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28425](https://github.com/stablyai/orca/pull/28425)）
- 更新：status bar and tray labels when language changes（[@nwparker](https://github.com/nwparker)，[#28226](https://github.com/stablyai/orca/pull/28226)）
- 保留：significant spaces in Explorer contents search（[@nwparker](https://github.com/nwparker)，[#28222](https://github.com/stablyai/orca/pull/28222)）
- 修复：linked reviews stuck loading on detached workspaces（[@nwparker](https://github.com/nwparker)，[#28228](https://github.com/stablyai/orca/pull/28228)）
- 支持：restarting Windows Orca as administrator（[@nwparker](https://github.com/nwparker)，[#28073](https://github.com/stablyai/orca/pull/28073)）
- 修复：Vercel recipe failures on stock macOS Bash（[@nwparker](https://github.com/nwparker)，[#28257](https://github.com/stablyai/orca/pull/28257)）
- Warn when a workspace status has no board column（[@nwparker](https://github.com/nwparker)，[#28264](https://github.com/stablyai/orca/pull/28264)）
- 区分：unreadable cookies from related import skips（[@nwparker](https://github.com/nwparker)，[#28269](https://github.com/stablyai/orca/pull/28269)）
- Release dictation window listeners after stop（[@nwparker](https://github.com/nwparker)，[#28260](https://github.com/stablyai/orca/pull/28260)）
- AI buttons stop writing a launch record（[@brennanb2025](https://github.com/brennanb2025)，[#28209](https://github.com/stablyai/orca/pull/28209)）
- 跳过：Windows security addon steps when the builder is missing（[@AmethystLiang](https://github.com/AmethystLiang)，[#28546](https://github.com/stablyai/orca/pull/28546)）
- 给予：Windows taskkill a 5s budget to reduce flaky tree cleanup（[@AmethystLiang](https://github.com/AmethystLiang)，[#28577](https://github.com/stablyai/orca/pull/28577)）
- 更新：WeChat Group 12 QR code [skip ci]（[@AmethystLiang](https://github.com/AmethystLiang)，[#28639](https://github.com/stablyai/orca/pull/28639)）
- Match modifier chords pressed during IME composition by physical key（[@nwparker](https://github.com/nwparker)，[#28620](https://github.com/stablyai/orca/pull/28620)）
- Require a unique full PR gate before merging（[@nwparker](https://github.com/nwparker)，[#28632](https://github.com/stablyai/orca/pull/28632)）
- 停止：orphaned background browsers from blocking Orca updates（[@nwparker](https://github.com/nwparker)，[#28562](https://github.com/stablyai/orca/pull/28562)）
- Search connected tasks by keyword from Cmd+J（[@nwparker](https://github.com/nwparker)，[#28617](https://github.com/stablyai/orca/pull/28617)）
- One owner for the cloud session; never drop a rotated token, stop after a 401（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28523](https://github.com/stablyai/orca/pull/28523)）
- Never delete a folder git no longer tracks（[@brennanb2025](https://github.com/brennanb2025)，[#25075](https://github.com/stablyai/orca/pull/25075)）
- Shorten worker sub-dispatch instructions（[@AmethystLiang](https://github.com/AmethystLiang)，[#28565](https://github.com/stablyai/orca/pull/28565)）
- A pane is read when it is on screen; closing a waiting tab clears its dot（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28637](https://github.com/stablyai/orca/pull/28637)）
- 保持：CI failure excerpts bounded and strip malformed ANSI controls linearly（[@AmethystLiang](https://github.com/AmethystLiang)，[#28671](https://github.com/stablyai/orca/pull/28671)）
- 跳过：reindexing unchanged transcripts on cold session list reads（[@AmethystLiang](https://github.com/AmethystLiang)，[#28798](https://github.com/stablyai/orca/pull/28798)）
- Reclaim idle worktree space automatically on dev startup（[@nwparker](https://github.com/nwparker)，[#28864](https://github.com/stablyai/orca/pull/28864)）
- 减小：import, frame-capture, teardown, and shard costs（[@nwparker](https://github.com/nwparker)，[#28879](https://github.com/stablyai/orca/pull/28879)）
- Prepare Windows natives with scoped compiler settings and measure servicing（[@nwparker](https://github.com/nwparker)，[#28881](https://github.com/stablyai/orca/pull/28881)）
- 减小：runner occupancy in release and contract jobs（[@nwparker](https://github.com/nwparker)，[#28930](https://github.com/stablyai/orca/pull/28930)）
- 跳过：packaging for verified unit harnesses（[@nwparker](https://github.com/nwparker)，[#28934](https://github.com/stablyai/orca/pull/28934)）
- Contain persistent transforms and trim model overhead（[@nwparker](https://github.com/nwparker)，[#28948](https://github.com/stablyai/orca/pull/28948)）
- Hidden workspaces stop notifying unless you opt in（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28870](https://github.com/stablyai/orca/pull/28870)）
- 保持：a tab in the group it names when loading an old saved layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28941](https://github.com/stablyai/orca/pull/28941)）
- 去掉：the pre-tab-bar session format; orphan recovery writes tab-bar entries（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28990](https://github.com/stablyai/orca/pull/28990)）
- One-time profile backup before startup rewrites saved data（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29016](https://github.com/stablyai/orca/pull/29016)）
- 升级：Electron to 43.7.8 to fix find-in-page looping（[@AmethystLiang](https://github.com/AmethystLiang)，[#28909](https://github.com/stablyai/orca/pull/28909)）
- 新增：bottom padding so last reply controls clear the composer（[@AmethystLiang](https://github.com/AmethystLiang)，[#29046](https://github.com/stablyai/orca/pull/29046)）
- Unify lineage child indentation across worktree cards（[@AmethystLiang](https://github.com/AmethystLiang)，[#29044](https://github.com/stablyai/orca/pull/29044)）
- Recover failed-job log retrieval onto main（[@AmethystLiang](https://github.com/AmethystLiang)，[#29180](https://github.com/stablyai/orca/pull/29180)）
- 保持：merge-tree's throwaway trees out of the real object store（[@brennanb2025](https://github.com/brennanb2025)，[#22356](https://github.com/stablyai/orca/pull/22356)）
- 允许：worktree parents across projects on the same machine（[@brennanb2025](https://github.com/brennanb2025)，[#28942](https://github.com/stablyai/orca/pull/28942)）
- 保持：recent worktree streams warm and stop resubscribing live ones（[@nwparker](https://github.com/nwparker)，[#29241](https://github.com/stablyai/orca/pull/29241)）
- Cancel superseded PR cache warmers（[@nwparker](https://github.com/nwparker)，[#29279](https://github.com/stablyai/orca/pull/29279)）
- 显示：checkout progress while a worktree is created（[@brennanb2025](https://github.com/brennanb2025)，[#24093](https://github.com/stablyai/orca/pull/24093)）
- 保持：the SQLite failure behind a startup open error across the writer worker（[@nwparker](https://github.com/nwparker)，[#29280](https://github.com/stablyai/orca/pull/29280)）
- 修复：first code block staying uncoloured on slow machines（[@nwparker](https://github.com/nwparker)，[#29290](https://github.com/stablyai/orca/pull/29290)）
- Publish a readable /usr/local/bin/orca symlink on macOS and repair unreadable ones（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29245](https://github.com/stablyai/orca/pull/29245)）
- 移动：panes and save divider sizes through main behind ORCA_LAYOUT_OWNER（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29192](https://github.com/stablyai/orca/pull/29192)）
- Render Kitty images at Unicode placeholder cells（[@nwparker](https://github.com/nwparker)，[#26031](https://github.com/stablyai/orca/pull/26031)）
- Cold-start Smart and Manual-fallback rows follow another client's order save（[@nwparker](https://github.com/nwparker)，[#29486](https://github.com/stablyai/orca/pull/29486)）
- Normalize CI log excerpts when check details arrive（[@AmethystLiang](https://github.com/AmethystLiang)，[#28694](https://github.com/stablyai/orca/pull/28694)）
- Offer always-delete option for preserved branches（[@nwparker](https://github.com/nwparker)，[#29505](https://github.com/stablyai/orca/pull/29505)）
- Make failed check details readable and easy to retry（[@AmethystLiang](https://github.com/AmethystLiang)，[#28702](https://github.com/stablyai/orca/pull/28702)）
- Make chart zoom and Finder reveal usable（[@nwparker](https://github.com/nwparker)，[#29567](https://github.com/stablyai/orca/pull/29567)）
- Adding a project through a symlink alias reuses the existing project（[@nwparker](https://github.com/nwparker)，[#29651](https://github.com/stablyai/orca/pull/29651)）
- Refuse a folder-to-Git type change that would hide folder workspaces（[@brennanb2025](https://github.com/brennanb2025)，[#29257](https://github.com/stablyai/orca/pull/29257)）
- 显示：a Keychain unlock on its own instead of leaving the locked notice up（[@nwparker](https://github.com/nwparker)，[#29815](https://github.com/stablyai/orca/pull/29815)）
- 保持：dedicated E2E specs out of general CI shard plan（[@AmethystLiang](https://github.com/AmethystLiang)，[#28161](https://github.com/stablyai/orca/pull/28161)）
- Run automated workspace setup in a dedicated Setup tab（[@AmethystLiang](https://github.com/AmethystLiang)，[#29819](https://github.com/stablyai/orca/pull/29819)）
- 显示：a PR found by Refresh, not "already exists"（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29231](https://github.com/stablyai/orca/pull/29231)）
- Paste CleanShot JPEG screenshots stored under the macOS PNG type（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29685](https://github.com/stablyai/orca/pull/29685)）
- Offer Force Delete with a plain warning when a checkout has submodules（[@brennanb2025](https://github.com/brennanb2025)，[#28878](https://github.com/stablyai/orca/pull/28878)）
- 移除：close-button tooltip（[@AmethystLiang](https://github.com/AmethystLiang)，[#29851](https://github.com/stablyai/orca/pull/29851)）
- A manual folder-to-Git change proves the folder is the Git root first（[@brennanb2025](https://github.com/brennanb2025)，[#29282](https://github.com/stablyai/orca/pull/29282)）
- Compact the Space window layout（[@nwparker](https://github.com/nwparker)，[#29857](https://github.com/stablyai/orca/pull/29857)）
- Catch up desktop chats from the newest page（[@brennanb2025](https://github.com/brennanb2025)，[#29125](https://github.com/stablyai/orca/pull/29125)）
- Never reclaim a create preparation another machine owns（[@nwparker](https://github.com/nwparker)，[#29957](https://github.com/stablyai/orca/pull/29957)）

#### Editor, files & Markdown {#v1-4-229-editor-files-markdown}

> 保持：files, previews and editor actions attached to the right workspace and machine.

- 允许：paired-server files to drop into their own terminals（[@nwparker](https://github.com/nwparker)，[#26931](https://github.com/stablyai/orca/pull/26931)）
- Orca file open and diff open name their owner（[@OrcaWin](https://github.com/OrcaWin)，[#27154](https://github.com/stablyai/orca/pull/27154)）
- A paired-server link outside its workspace opens in the host workspace that holds it（[@OrcaWin](https://github.com/OrcaWin)，[#27226](https://github.com/stablyai/orca/pull/27226)）
- Client drops on a remote composer upload through the import transaction（[@OrcaWin](https://github.com/OrcaWin)，[#27227](https://github.com/stablyai/orca/pull/27227)）
- Links to this computer in a remote terminal open on the client with trusted provenance（[@OrcaWin](https://github.com/OrcaWin)，[#27234](https://github.com/stablyai/orca/pull/27234)）
- A managed terminal links and opens a host file outside its workspace（[@OrcaWin](https://github.com/OrcaWin)，[#27364](https://github.com/stablyai/orca/pull/27364)）
- Paste a macOS image copied beside its file URL（[@benjaminb10](https://github.com/benjaminb10)，[#27346](https://github.com/stablyai/orca/pull/27346)）
- Save editor-only host sessions during quit（[@nwparker](https://github.com/nwparker)，[#26848](https://github.com/stablyai/orca/pull/26848)）
- Load authorized web fonts in HTML previews（[@nwparker](https://github.com/nwparker)，[#26849](https://github.com/stablyai/orca/pull/26849)）
- Editor: Nim and Typst on the shared TextMate layer, so a long line can't freeze the window（[@brennanb2025](https://github.com/brennanb2025)，[#26987](https://github.com/stablyai/orca/pull/26987)）
- Share any HTML file from the editor and the remote preview（[@brennanb2025](https://github.com/brennanb2025)，[#27608](https://github.com/stablyai/orca/pull/27608)）
- 修复：main CI failures in preview lint and history cleanup（[@nwparker](https://github.com/nwparker)，[#28108](https://github.com/stablyai/orca/pull/28108)）
- 保持：a pinned duplicate open on close and ignore setActiveFile for a missing file（[@BearMett](https://github.com/BearMett)，[#28120](https://github.com/stablyai/orca/pull/28120)）
- Restrict secure files in-process instead of spawning icacls（[@OrcaWin](https://github.com/OrcaWin)，[#28135](https://github.com/stablyai/orca/pull/28135)）
- 保留：valid terminal file links when another candidate fails（[@nwparker](https://github.com/nwparker)，[#28272](https://github.com/stablyai/orca/pull/28272)）
- Never write through a dangling symlink（[@brennanb2025](https://github.com/brennanb2025)，[#28385](https://github.com/stablyai/orca/pull/28385)）
- 打开：files at a requested line and column（[@nwparker](https://github.com/nwparker)，[#28240](https://github.com/stablyai/orca/pull/28240)）
- The host serves a chat's scratch folder as a file root（[@brennanb2025](https://github.com/brennanb2025)，[#28397](https://github.com/stablyai/orca/pull/28397)）
- Enter on a visited site's name opens the site, not a file（[@AmethystLiang](https://github.com/AmethystLiang)，[#28804](https://github.com/stablyai/orca/pull/28804)）
- Copy a file to the clipboard without a visible PowerShell window（[@zanmlakar](https://github.com/zanmlakar)，[#28781](https://github.com/stablyai/orca/pull/28781)）
- A local worktree's tabs stay on this machine when its project is also on a paired server（[@nwparker](https://github.com/nwparker)，[#29403](https://github.com/stablyai/orca/pull/29403)）
- 打开：large HTML, PDFs and images on a paired runtime（[@nwparker](https://github.com/nwparker)，[#29426](https://github.com/stablyai/orca/pull/29426)）

#### Browser, skills & feedback {#v1-4-229-browser-skills-feedback}

> 打开：typed websites from Cmd/Ctrl+J, share skills with more agents, and keep browser actions on the intended host.

- An absent editor or browser map is not a round-trip change（[@OrcaWin](https://github.com/OrcaWin)，[#27007](https://github.com/stablyai/orca/pull/27007)）
- 保持：browser tabs clickable after a drag that never starts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26986](https://github.com/stablyai/orca/pull/26986)）
- Return JPEG bytes for JPEG viewport screenshots（[@nwparker](https://github.com/nwparker)，[#26856](https://github.com/stablyai/orca/pull/26856)）
- Say an SSH repo was not scanned instead of dropping it silently（[@OrcaWin](https://github.com/OrcaWin)，[#27261](https://github.com/stablyai/orca/pull/27261)）
- Double-click in the address bar selects a word, like other browsers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27371](https://github.com/stablyai/orca/pull/27371)）
- Refuse web pages on the agent-browser CDP proxy（[@OrcaWin](https://github.com/OrcaWin)，[#27415](https://github.com/stablyai/orca/pull/27415)）
- Judge official skill updates by ownership, not snapshot matching（[@OrcaWin](https://github.com/OrcaWin)，[#27603](https://github.com/stablyai/orca/pull/27603)）
- End a page's mount admission whenever it leaves the store（[@brennanb2025](https://github.com/brennanb2025)，[#27755](https://github.com/stablyai/orca/pull/27755)）
- End a background page's mount admission after its first load（[@brennanb2025](https://github.com/brennanb2025)，[#27754](https://github.com/stablyai/orca/pull/27754)）
- Settle WSL tunnel reads so responses past 256 KiB complete（[@OrcaWin](https://github.com/OrcaWin)，[#27625](https://github.com/stablyai/orca/pull/27625)）
- Annotation card and outline follow the picked element（[@brennanb2025](https://github.com/brennanb2025)，[#27875](https://github.com/stablyai/orca/pull/27875)）
- Use a minimize icon in the Update skills dialog（[@nwparker](https://github.com/nwparker)，[#28107](https://github.com/stablyai/orca/pull/28107)）
- Collapse the annotation panel to one row（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28138](https://github.com/stablyai/orca/pull/28138)）
- Require a target for ambiguous keypress commands（[@nwparker](https://github.com/nwparker)，[#28221](https://github.com/stablyai/orca/pull/28221)）
- 修复：browser login popups and menu actions in native windows（[@AmethystLiang](https://github.com/AmethystLiang)，[#28474](https://github.com/stablyai/orca/pull/28474)）
- Agent bringToFront and activateTarget no longer take your keyboard (1/3)（[@nwparker](https://github.com/nwparker)，[#28452](https://github.com/stablyai/orca/pull/28452)）
- Agent keys and text go to the page, never into your terminal (2/3)（[@nwparker](https://github.com/nwparker)，[#28453](https://github.com/stablyai/orca/pull/28453)）
- Agent clicks give your keyboard back (3/3)（[@nwparker](https://github.com/nwparker)，[#28454](https://github.com/stablyai/orca/pull/28454)）
- Force git messages to English so skill updates work in translated locales（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28994](https://github.com/stablyai/orca/pull/28994)）
- Agent typing into a cross-site frame no longer borrows your keyboard（[@nwparker](https://github.com/nwparker)，[#29000](https://github.com/stablyai/orca/pull/29000)）
- End downloads that are waiting for a manual resume Orca never offers（[@brennanb2025](https://github.com/brennanb2025)，[#28936](https://github.com/stablyai/orca/pull/28936)）
- Settle client-hosted download toasts after their page closes（[@brennanb2025](https://github.com/brennanb2025)，[#28913](https://github.com/stablyai/orca/pull/28913)）
- 推导：skill discovery folders and home env overrides from the agent provider table（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29022](https://github.com/stablyai/orca/pull/29022)）
- Share again under an existing skill bundle name as a new version（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29090](https://github.com/stablyai/orca/pull/29090)）
- Install shared skills for 20 more agents and read every agent home in WSL（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29122](https://github.com/stablyai/orca/pull/29122)）
- Group skill update checks by operating system（[@nwparker](https://github.com/nwparker)，[#29021](https://github.com/stablyai/orca/pull/29021)）
- Managed SSH terminal links open in the Orca Browser again（[@OrcaWin](https://github.com/OrcaWin)，[#29215](https://github.com/stablyai/orca/pull/29215)）
- Always allow leaving when a page asks to confirm（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29142](https://github.com/stablyai/orca/pull/29142)）
- 推迟：capture cleanup until streamed tabs finish closing（[@OrcaWin](https://github.com/OrcaWin)，[#29365](https://github.com/stablyai/orca/pull/29365)）
- The remote browser tunnel goes through the server's outbound proxy（[@nwparker](https://github.com/nwparker)，[#29420](https://github.com/stablyai/orca/pull/29420)）
- Closing a headless server's browser tab no longer crashes the server（[@nwparker](https://github.com/nwparker)，[#29480](https://github.com/stablyai/orca/pull/29480)）
- List symlinked folders as folders in the remote Add Project browser（[@nwparker](https://github.com/nwparker)，[#29658](https://github.com/stablyai/orca/pull/29658)）
- 允许：Cmd+J open typed websites in a new browser tab（[@AmethystLiang](https://github.com/AmethystLiang)，[#29050](https://github.com/stablyai/orca/pull/29050)）

#### Performance & reliability {#v1-4-229-performance-reliability}

> 减小：repeated status subscriptions and session-stream work, avoid blocking WSL checks, and make workspace creation and switching smoother.

- 发送：PTY output to main as raw bytes, not NDJSON（[@outof-place](https://github.com/outof-place)，[#27006](https://github.com/stablyai/orca/pull/27006)）
- 保持：per-source usage caches off the main thread（[@outof-place](https://github.com/outof-place)，[#26980](https://github.com/stablyai/orca/pull/26980)）
- Resolve terminal names once per full process capture（[@nwparker](https://github.com/nwparker)，[#27146](https://github.com/stablyai/orca/pull/27146)）
- Pipeline fresh transcript discovery with bounded I/O（[@outof-place](https://github.com/outof-place)，[#27009](https://github.com/stablyai/orca/pull/27009)）
- 减小：terminal ANSI scanning work（[@nwparker](https://github.com/nwparker)，[#27344](https://github.com/stablyai/orca/pull/27344)）
- Release startup allocations held by journal sentinel（[@nwparker](https://github.com/nwparker)，[#27342](https://github.com/stablyai/orca/pull/27342)）
- 保留：Git scans when saving sort order（[@nwparker](https://github.com/nwparker)，[#27343](https://github.com/stablyai/orca/pull/27343)）
- 跳过：unchanged lineage after sidebar order saves（[@nwparker](https://github.com/nwparker)，[#27384](https://github.com/stablyai/orca/pull/27384)）
- Overlap Bun typechecking and skip redundant alias scans（[@nwparker](https://github.com/nwparker)，[#27382](https://github.com/stablyai/orca/pull/27382)）
- Yield between bounded slices of terminal output ingest（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27578](https://github.com/stablyai/orca/pull/27578)）
- Search Windows-drive projects with host ripgrep（[@nwparker](https://github.com/nwparker)，[#27690](https://github.com/stablyai/orca/pull/27690)）
- Use Zod 4.6 validation and compile ACP updates（[@nwparker](https://github.com/nwparker)，[#27735](https://github.com/stablyai/orca/pull/27735)）
- 停止：leaving stuck lsof processes behind on a dead network mount（[@brennanb2025](https://github.com/brennanb2025)，[#27729](https://github.com/stablyai/orca/pull/27729)）
- 停止：every Windows notification from freezing Orca（[@brennanb2025](https://github.com/brennanb2025)，[#27731](https://github.com/stablyai/orca/pull/27731)）
- 去掉：the extra PowerShell per hook event for Gemini, dsh, Kiro, Droid and Command Code（[@OrcaWin](https://github.com/OrcaWin)，[#27717](https://github.com/stablyai/orca/pull/27717)）
- Run the Windows status hook as a direct .cmd, faster and UTF-8 safe（[@OrcaWin](https://github.com/OrcaWin)，[#27718](https://github.com/stablyai/orca/pull/27718)）
- Check WSL working directories off the main thread（[@OrcaWin](https://github.com/OrcaWin)，[#27705](https://github.com/stablyai/orca/pull/27705)）
- Run the Windows Claude hook as a signed native claude-hook.exe（[@OrcaWin](https://github.com/OrcaWin)，[#27719](https://github.com/stablyai/orca/pull/27719)）
- 跳过：re-rendering unchanged worktree rows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28058](https://github.com/stablyai/orca/pull/28058)）
- 停止：re-sending the worktree list to mobile pollers on every terminal chunk（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28062](https://github.com/stablyai/orca/pull/28062)）
- Reuse verified Node and run the layout check with Bun（[@nwparker](https://github.com/nwparker)，[#28218](https://github.com/stablyai/orca/pull/28218)）
- Pooled wsl.exe command loops and orcad compile cache on the WSL wake path (C4 follow-up)（[@nwparker](https://github.com/nwparker)，[#27923](https://github.com/stablyai/orca/pull/27923)）
- 跳过：re-hashing unchanged orcad artifacts and guest Node runtime on the WSL wake path (C4c)（[@nwparker](https://github.com/nwparker)，[#27941](https://github.com/stablyai/orca/pull/27941)）
- 停止：a cancelled scan inside the file it is reading（[@brennanb2025](https://github.com/brennanb2025)，[#27952](https://github.com/stablyai/orca/pull/27952)）
- Read the composer's text and caret straight from the editor（[@brennanb2025](https://github.com/brennanb2025)，[#28064](https://github.com/stablyai/orca/pull/28064)）
- End a scan only when it stops making progress（[@brennanb2025](https://github.com/brennanb2025)，[#28434](https://github.com/stablyai/orca/pull/28434)）
- 保持：a timed-out scan's finished transcripts（[@brennanb2025](https://github.com/brennanb2025)，[#27937](https://github.com/stablyai/orca/pull/27937)）
- Fetch the base while the host's create picks a name（[@brennanb2025](https://github.com/brennanb2025)，[#26007](https://github.com/stablyai/orca/pull/26007)）
- Share concurrent Codex title-index reads（[@nwparker](https://github.com/nwparker)，[#28497](https://github.com/stablyai/orca/pull/28497)）
- Re-project only the written partition in the layout stream（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28845](https://github.com/stablyai/orca/pull/28845)）
- Load structured agent adapters when the host starts（[@nwparker](https://github.com/nwparker)，[#29086](https://github.com/stablyai/orca/pull/29086)）
- Release completed Windows pipe probe timers（[@nwparker](https://github.com/nwparker)，[#28560](https://github.com/stablyai/orca/pull/28560)）
- A paired desktop gets only the tab that changed, not the whole workspace（[@nwparker](https://github.com/nwparker)，[#29319](https://github.com/stablyai/orca/pull/29319)）
- A Smart-sort save on a paired host no longer refetches every repository or triggers the next save（[@nwparker](https://github.com/nwparker)，[#29333](https://github.com/stablyai/orca/pull/29333)）
- A headless host ignores a remote pane's unchanged layout write（[@nwparker](https://github.com/nwparker)，[#29347](https://github.com/stablyai/orca/pull/29347)）
- List a worktree's tabs over the ready shared socket, not a new one（[@nwparker](https://github.com/nwparker)，[#29360](https://github.com/stablyai/orca/pull/29360)）
- Read a remote server's SSH target states three at a time（[@nwparker](https://github.com/nwparker)，[#29393](https://github.com/stablyai/orca/pull/29393)）
- A parked web-mirror reveal reads its pane alongside the activation（[@nwparker](https://github.com/nwparker)，[#29472](https://github.com/stablyai/orca/pull/29472)）
- 避免：dev reloads for excluded package files（[@OrcaWin](https://github.com/OrcaWin)，[#29481](https://github.com/stablyai/orca/pull/29481)）
- 停止：re-inspecting the setup-script prompt on every worktree revisit（[@nwparker](https://github.com/nwparker)，[#29514](https://github.com/stablyai/orca/pull/29514)）
- 保持：warm session streams for every worktree whose terminals stay mounted（[@nwparker](https://github.com/nwparker)，[#29516](https://github.com/stablyai/orca/pull/29516)）
- 新增：an opt-in to skip main source maps during development（[@OrcaWin](https://github.com/OrcaWin)，[#29445](https://github.com/stablyai/orca/pull/29445)）
- 避免：notification settings page imports during onboarding（[@OrcaWin](https://github.com/OrcaWin)，[#29570](https://github.com/stablyai/orca/pull/29570)）
- 移除：per-match quality array filtering（[@nwparker](https://github.com/nwparker)，[#29785](https://github.com/stablyai/orca/pull/29785)）
- 减小：redundant sidebar agent status subscriptions（[@OrcaWin](https://github.com/OrcaWin)，[#29840](https://github.com/stablyai/orca/pull/29840)）
- Flush send transactions without flushing every streamed revision（[@brennanb2025](https://github.com/brennanb2025)，[#28966](https://github.com/stablyai/orca/pull/28966)）

#### Languages {#v1-4-229-languages}

> Updated translations and more consistent labels across the app.

- Correct Korean Finder menu label（[@nwparker](https://github.com/nwparker)，[#26866](https://github.com/stablyai/orca/pull/26866)）
- Correct Korean CI check translations（[@abruption](https://github.com/abruption)，[#27367](https://github.com/stablyai/orca/pull/27367)）
- Speed up import checks, localization extraction, and CI typechecking（[@nwparker](https://github.com/nwparker)，[#27727](https://github.com/stablyai/orca/pull/27727)）
- 去掉：chat-mode keys removed from en.json in #28113（[@nwparker](https://github.com/nwparker)，[#28131](https://github.com/stablyai/orca/pull/28131)）
- Correct Korean Settings translations（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28183](https://github.com/stablyai/orca/pull/28183)）
- Translate Settings help as whole sentences instead of fragments（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28185](https://github.com/stablyai/orca/pull/28185)）
- Nest settings translation keys for language packs（[@nwparker](https://github.com/nwparker)，[#28251](https://github.com/stablyai/orca/pull/28251)）
- Reuse import analysis and run localization coverage with Bun（[@nwparker](https://github.com/nwparker)，[#28463](https://github.com/stablyai/orca/pull/28463)）
- Translate 259 new keys to es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#28486](https://github.com/stablyai/orca/pull/28486)）
- Correct literal-sense Japanese mistranslations（[@sojiro-o](https://github.com/sojiro-o)，[#28535](https://github.com/stablyai/orca/pull/28535)）
- 去掉：setup-only keys and fix the default-tab test #28543 left red（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28603](https://github.com/stablyai/orca/pull/28603)）
- 去掉：catalog strings left behind by the automation removal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28810](https://github.com/stablyai/orca/pull/28810)）
- Correct the Japanese label for the Cleaned browser identity（[@sojiro-o](https://github.com/sojiro-o)，[#28526](https://github.com/stablyai/orca/pull/28526)）
- Use クリーンアップ in the Japanese VM cleanup stop dialog（[@sojiro-o](https://github.com/sojiro-o)，[#28533](https://github.com/stablyai/orca/pull/28533)）
- 移除：obsolete Hermes cron docs and translations（[@AmethystLiang](https://github.com/AmethystLiang)，[#28877](https://github.com/stablyai/orca/pull/28877)）
- Translate new keys to es/fr/ja/ko/zh (scan 2026-10-14)（[@AmethystLiang](https://github.com/AmethystLiang)，[#28896](https://github.com/stablyai/orca/pull/28896)）
- Refine release channel and chat input translations（[@AmethystLiang](https://github.com/AmethystLiang)，[#29027](https://github.com/stablyai/orca/pull/29027)）
- Translate new keys to es/fr/ja/ko/zh (scan 2026-10-15)（[@AmethystLiang](https://github.com/AmethystLiang)，[#29281](https://github.com/stablyai/orca/pull/29281)）

#### Relay service {#v1-4-229-relay-service}

> Connection routing, service recovery and relay operations receive reliability improvements.

- 钉住：staging c4 to image G for E-pre（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28854](https://github.com/stablyai/orca/pull/28854)）
- 钉住：staging c1, c5, c6 and c7 to image G for E-pre（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28872](https://github.com/stablyai/orca/pull/28872)）
- Split step-5 shadow compare and dry-run logs per cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28693](https://github.com/stablyai/orca/pull/28693)）
- Watch a reserve cell and flip it back on the first step 5 stop rule（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28698](https://github.com/stablyai/orca/pull/28698)）
- Log where the sticky lane's slot time goes, per pooled connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28908](https://github.com/stablyai/orca/pull/28908)）
- Check clock skew on every cell production.tfvars declares（[@zanmlakar](https://github.com/zanmlakar)，[#28786](https://github.com/stablyai/orca/pull/28786)）
- Destroy a pooled client whose session the server ended（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29573](https://github.com/stablyai/orca/pull/29573)）
- One ask-wait clamp and no needless exports（[@nwparker](https://github.com/nwparker)，[#29835](https://github.com/stablyai/orca/pull/29835)）

The remaining changes are listed in the [complete release notes](https://github.com/stablyai/orca/releases/download/v1.4.229/orca-v1.4.229-complete-changelog.md), with every title and contributor credit.

#### Reverted {#v1-4-229-reverted}

> Reverts and follow-up corrections included in this release.

- Revert "+" new-tab agent launches to the window route (reverts #26489)（[@brennanb2025](https://github.com/brennanb2025)，[#27173](https://github.com/stablyai/orca/pull/27173)）
- Revert "feat(mobile): verified https pairing links; custom scheme carries no secret" (#27475)（[@OrcaWin](https://github.com/OrcaWin)，[#27693](https://github.com/stablyai/orca/pull/27693)）

#### Tests, CI & maintenance {#v1-4-229-tests-ci-maintenance}

> regression coverage, build and release fixes, and internal cleanup support the changes above覆盖更广。

- 移动：the pure workspace-list builder into src/shared/sidebar-list (no visible change)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29906](https://github.com/stablyai/orca/pull/29906)）
- 保持：an editor tab Orca moved to its file's workspace across restart; record editor renames in main (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29930](https://github.com/stablyai/orca/pull/29930)）
- 发送：a terminal tab's own changes to main first, from every caller (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29904](https://github.com/stablyai/orca/pull/29904)）
- 移动：the sidebar's time rules into shared pure reducers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29943](https://github.com/stablyai/orca/pull/29943)）
- Golden for accented, mixed-case and numbered names（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29966](https://github.com/stablyai/orca/pull/29966)）
- 等待：for macOS build metadata after dispatch（[@nwparker](https://github.com/nwparker)，[#29974](https://github.com/stablyai/orca/pull/29974)）
- Merge the Android APK download bump automatically（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29981](https://github.com/stablyai/orca/pull/29981)）
- 允许：tag cuts when main requires pull requests（[@nwparker](https://github.com/nwparker)，[#29985](https://github.com/stablyai/orca/pull/29985)）

The remaining changes are listed in the [complete release notes](https://github.com/stablyai/orca/releases/download/v1.4.229/orca-v1.4.229-complete-changelog.md), with every title and contributor credit.

### 新贡献者 {#v1-4-229-contributors}

- [@w-felipe360](https://github.com/w-felipe360) 首次贡献于 [#26695](https://github.com/stablyai/orca/pull/26695)
- [@outof-place](https://github.com/outof-place) 首次贡献于 [#27006](https://github.com/stablyai/orca/pull/27006)
- [@fabricedge](https://github.com/fabricedge) 首次贡献于 [#26881](https://github.com/stablyai/orca/pull/26881)
- [@parkavenue9639](https://github.com/parkavenue9639) 首次贡献于 [#24964](https://github.com/stablyai/orca/pull/24964)
- [@abruption](https://github.com/abruption) 首次贡献于 [#27367](https://github.com/stablyai/orca/pull/27367)
- [@f8team](https://github.com/f8team) 首次贡献于 [#27374](https://github.com/stablyai/orca/pull/27374)
- [@vampik33](https://github.com/vampik33) 首次贡献于 [#25211](https://github.com/stablyai/orca/pull/25211)
- [@benjaminb10](https://github.com/benjaminb10) 首次贡献于 [#27346](https://github.com/stablyai/orca/pull/27346)
- [@sergeytiron](https://github.com/sergeytiron) 首次贡献于 [#23459](https://github.com/stablyai/orca/pull/23459)
- [@BearMett](https://github.com/BearMett) 首次贡献于 [#28120](https://github.com/stablyai/orca/pull/28120)
- [@leog](https://github.com/leog) 首次贡献于 [#25617](https://github.com/stablyai/orca/pull/25617)
- [@sojiro-o](https://github.com/sojiro-o) 首次贡献于 [#28535](https://github.com/stablyai/orca/pull/28535)
- [@zanmlakar](https://github.com/zanmlakar) 首次贡献于 [#28781](https://github.com/stablyai/orca/pull/28781)
- [@orchardprior](https://github.com/orchardprior) 首次贡献于 [#29018](https://github.com/stablyai/orca/pull/29018)
- [@Velm14](https://github.com/Velm14) 首次贡献于 [#28023](https://github.com/stablyai/orca/pull/28023)
- [@SungsooKwon](https://github.com/SungsooKwon) 首次贡献于 [#29532](https://github.com/stablyai/orca/pull/29532)

---

**完整变更对照：** [v1.4.227...v1.4.229](https://github.com/stablyai/orca/compare/v1.4.227...v1.4.229)

## v1.4.227 Native Chat 拥有独立权限模式，会话更易继续 {#v1-4-227}

2026年10月16日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.227)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-227-short}

- **Native chats have their own permission mode.** Choose permissions for each new Claude or Codex chat from Settings → Chat → Behavior; existing chats keep the mode they were already using, and changing models no longer resets it.
- **Native chat sessions are easier to continue.** You can resume large terminal conversations in a new Native Chat, recover chats whose only work ran in the background after a restart, and see every supported chat provider accurately in Session History.
- **Claude accounts and Codex chat setup are smoother.** Claude accounts again use separate folders, the sign-in link can be copied, Codex chats require version 0.136.0 or later, and Codex Ultrafast is available as a speed choice.
- **Browser automation gives your keyboard back reliably.** Agent browser commands target the intended page, and browser popups behave more like Chrome.
- **Also:** worktree cleanup is safer, read macOS notifications disappear from Notification Center, long chats load better on phones, and cold session-history reads avoid unnecessary reindexing.

---

### 产品体验 {#v1-4-227-product}

#### UI / workspace {#v1-4-227-ui-workspace}

> Safer worktree cleanup, tidier macOS notifications and small translation cleanup.

- 修复（worktrees）：never delete a folder git no longer tracks（[@brennanb2025](https://github.com/brennanb2025)，[#25075](https://github.com/stablyai/orca/pull/25075)）
- 修复（notifications）：remove read macOS notifications from Notification Center by pane thread（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28425](https://github.com/stablyai/orca/pull/28425)）
- 修复（i18n）：drop chat-mode keys removed from en.json in #28113（[@nwparker](https://github.com/nwparker)，[#28131](https://github.com/stablyai/orca/pull/28131)）

#### Orchestration {#v1-4-227-orchestration}

> Retries no longer leave failed worker starts piling up as live agents.

- 修复（orchestration）：stop retried failed worker starts from piling up live agents（[@brennanb2025](https://github.com/brennanb2025)，[#27795](https://github.com/stablyai/orca/pull/27795)）

#### Agent 与 Native Chat {#v1-4-227-native-chat}

> Each Claude and Codex chat keeps its own permission mode, chats are easier to resume and manage, Claude accounts return with safer sign-in, and chat settings and model handling are more consistent.

- 新增（native-chat）：each Claude/Codex chat gets its own permission mode（[@brennanb2025](https://github.com/brennanb2025)，[#26116](https://github.com/stablyai/orca/pull/26116)）
- 修复（native-chat）：chats from before permission modes keep the mode they were running with（[@brennanb2025](https://github.com/brennanb2025)，[#28099](https://github.com/stablyai/orca/pull/28099)）
- 修复（native-chat）：seed the chat permission default from Claude's and Codex's own arguments（[@brennanb2025](https://github.com/brennanb2025)，[#28100](https://github.com/stablyai/orca/pull/28100)）
- 新增（settings）：move Permissions for new chats into the Chat page's Behavior section（[@brennanb2025](https://github.com/brennanb2025)，[#28212](https://github.com/stablyai/orca/pull/28212)）
- 修复（native-chat）：store a chat's permission mode on its own, so a model pick can't reset it（[@brennanb2025](https://github.com/brennanb2025)，[#28268](https://github.com/stablyai/orca/pull/28268)）
- 新增（native-chat）：require Codex 0.136.0 for chats（[@brennanb2025](https://github.com/brennanb2025)，[#26684](https://github.com/stablyai/orca/pull/26684)）
- 新增（native-chat）：offer Codex Ultrafast as a speed choice（[@brennanb2025](https://github.com/brennanb2025)，[#26962](https://github.com/stablyai/orca/pull/26962)）
- Re-land Claude per-account folders (#24434, #26405) with the upgrade and proxy fixes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26801](https://github.com/stablyai/orca/pull/26801)）
- 新增："Copy sign-in link instead" for Claude accounts (STA-9912)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26990](https://github.com/stablyai/orca/pull/26990)）
- 修复（native-chat）：offer resume after restart for chats whose only work was in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27167](https://github.com/stablyai/orca/pull/27167)）
- 修复（native-chat）：resume large terminal conversations in a new Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#29056](https://github.com/stablyai/orca/pull/29056)）
- Terminal header button: Resume in New Native Chat replaces Show chat view（[@brennanb2025](https://github.com/brennanb2025)，[#27184](https://github.com/stablyai/orca/pull/27184)）
- 修复（tab-bar）：offer Resume in New Native Chat only while the tab's agent is running（[@brennanb2025](https://github.com/brennanb2025)，[#27520](https://github.com/stablyai/orca/pull/27520)）
- Session History shows OpenCode, Grok, OMP and Pi chats as chats and refuses a second terminal writer（[@brennanb2025](https://github.com/brennanb2025)，[#27183](https://github.com/stablyai/orca/pull/27183)）
- Session History: resume folder workspace chats in their own folder（[@brennanb2025](https://github.com/brennanb2025)，[#27209](https://github.com/stablyai/orca/pull/27209)）
- 恢复：dialog: show a finished resume as a result, not a picker（[@brennanb2025](https://github.com/brennanb2025)，[#27732](https://github.com/stablyai/orca/pull/27732)）
- Save a new chat's first message during create（[@brennanb2025](https://github.com/brennanb2025)，[#26332](https://github.com/stablyai/orca/pull/26332)）
- 修复（native-chat）：settle a reply cut off by a server restart（[@brennanb2025](https://github.com/brennanb2025)，[#26460](https://github.com/stablyai/orca/pull/26460)）
- 打开：a chat visual in its own tab instead of the sidebar（[@brennanb2025](https://github.com/brennanb2025)，[#26728](https://github.com/stablyai/orca/pull/26728)）
- 允许：a Codex chat stop a command it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#26780](https://github.com/stablyai/orca/pull/26780)）
- 修复（native-chat）：preserve running subagent rows in long chats（[@brennanb2025](https://github.com/brennanb2025)，[#26798](https://github.com/stablyai/orca/pull/26798)）
- A new Pi chat names the model it will run on its first frame（[@brennanb2025](https://github.com/brennanb2025)，[#26821](https://github.com/stablyai/orca/pull/26821)）
- 保持：Chat UI users with a Terminal default on the terminal, with a chat mode switch in the upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#26915](https://github.com/stablyai/orca/pull/26915)）
- Floating-workspace chats of every native-chat agent keep links in the folder they started in（[@brennanb2025](https://github.com/brennanb2025)，[#26981](https://github.com/stablyai/orca/pull/26981)）
- Every agent reports its learned default model once, when a chat starts（[@brennanb2025](https://github.com/brennanb2025)，[#26982](https://github.com/stablyai/orca/pull/26982)）
- 允许：a Grok chat list and stop the commands it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27022](https://github.com/stablyai/orca/pull/27022)）
- 允许：a Codex chat stop a sub-agent from the background-tasks strip（[@brennanb2025](https://github.com/brennanb2025)，[#27026](https://github.com/stablyai/orca/pull/27026)）
- 修复（native-chat）：a new chat's model and effort pickers match their first frame before the agent starts（[@brennanb2025](https://github.com/brennanb2025)，[#27031](https://github.com/stablyai/orca/pull/27031)）
- Native chat: every agent launches through one composed launch path（[@brennanb2025](https://github.com/brennanb2025)，[#27204](https://github.com/stablyai/orca/pull/27204)）
- Edit agent launch settings on the workspace host（[@brennanb2025](https://github.com/brennanb2025)，[#26479](https://github.com/stablyai/orca/pull/26479)）
- One shared subagent tracker for Claude, Codex and Grok chat rows（[@brennanb2025](https://github.com/brennanb2025)，[#27228](https://github.com/stablyai/orca/pull/27228)）
- Native chat: read one saved row per subagent (part 1 of 2)（[@brennanb2025](https://github.com/brennanb2025)，[#27914](https://github.com/stablyai/orca/pull/27914)）
- 新增（chat）：host writes one saved row per subagent（[@brennanb2025](https://github.com/brennanb2025)，[#27947](https://github.com/stablyai/orca/pull/27947)）
- 新增（settings）：move Chat UI's chat settings from Experimental to the Chat page（[@brennanb2025](https://github.com/brennanb2025)，[#28050](https://github.com/stablyai/orca/pull/28050)）
- 修复（tab-bar）：Native Chat tabs show their recorded provider, not one guessed from the title（[@brennanb2025](https://github.com/brennanb2025)，[#28082](https://github.com/stablyai/orca/pull/28082)）
- Replace chat upgrade switch with primary Enable Now button（[@nwparker](https://github.com/nwparker)，[#28113](https://github.com/stablyai/orca/pull/28113)）
- Make Enable Now the full-width action in the chat upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#28199](https://github.com/stablyai/orca/pull/28199)）

#### Remote server / SSH {#v1-4-227-remote-server-ssh}

> Paired devices are identified by their device ID instead of a credential.

- Native Chat: identify a paired device by its device id, never its credential（[@brennanb2025](https://github.com/brennanb2025)，[#26777](https://github.com/stablyai/orca/pull/26777)）

#### 浏览器 {#v1-4-227-browser}

> Popups follow Chrome’s behavior more closely, while agent browser actions stay focused on the intended page and return the keyboard when they finish.

- 打开：links and window.open in Orca tabs the way Chrome does（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26976](https://github.com/stablyai/orca/pull/26976)）
- 修复：browser login popups and menu actions in native windows（[@AmethystLiang](https://github.com/AmethystLiang)，[#28474](https://github.com/stablyai/orca/pull/28474)）
- Auto-hide menu bar in web popups and re-layout when revealed（[@AmethystLiang](https://github.com/AmethystLiang)，[#28388](https://github.com/stablyai/orca/pull/28388)）
- 修复（browser）：agent bringToFront and activateTarget no longer take your keyboard (1/3)（[@nwparker](https://github.com/nwparker)，[#28452](https://github.com/stablyai/orca/pull/28452)）
- 修复（browser）：agent keys and text go to the page, never into your terminal (2/3)（[@nwparker](https://github.com/nwparker)，[#28453](https://github.com/stablyai/orca/pull/28453)）
- 修复（browser）：agent clicks give your keyboard back (3/3)（[@nwparker](https://github.com/nwparker)，[#28454](https://github.com/stablyai/orca/pull/28454)）
- 修复（browser）：require a target for ambiguous keypress commands（[@nwparker](https://github.com/nwparker)，[#28221](https://github.com/stablyai/orca/pull/28221)）
- 修复（browser）：refuse web pages on the agent-browser CDP proxy（[@OrcaWin](https://github.com/OrcaWin)，[#27415](https://github.com/stablyai/orca/pull/27415)）

#### GitHub / source control {#v1-4-227-github-source-control}

> AI commit messages now start from the same shell environment that chats use.

- Start AI commit messages from the same shell environment chats use（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26808](https://github.com/stablyai/orca/pull/26808)）

#### 性能 {#v1-4-227-performance}

> Windows notifications no longer freeze Orca, and cold session-history reads skip unchanged transcript reindexing.

- 性能（notifications）：stop every Windows notification from freezing Orca（[@brennanb2025](https://github.com/brennanb2025)，[#27731](https://github.com/stablyai/orca/pull/27731)）
- 跳过：reindexing unchanged transcripts on cold session list reads（[@AmethystLiang](https://github.com/AmethystLiang)，[#28798](https://github.com/stablyai/orca/pull/28798)）

#### 移动端 {#v1-4-227-mobile}

> Long chats preserve each update within its limit, remember the reader’s place, and open every supported native-chat provider on the phone.

- 修复（native-chat）：load long chats on the phone by keeping every update within its limit（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#28203](https://github.com/stablyai/orca/pull/28203)）
- 修复（mobile）：keep the chat where the reader scrolled to（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28413](https://github.com/stablyai/orca/pull/28413)）
- 修复（mobile）：open Grok, OpenCode, OMP and Pi chats on the phone（[@brennanb2025](https://github.com/brennanb2025)，[#27212](https://github.com/stablyai/orca/pull/27212)）

**完整变更对照：** [v1.4.224...v1.4.227](https://github.com/stablyai/orca/compare/v1.4.224...v1.4.227)
