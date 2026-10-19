# 更新日志 {#changelog}

本页保留最近五次桌面版的**完整中文日志**，不是一句话摘要。打开时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 版本索引 {#index}

| 版本 | 日期 | 标题 |
| --- | --- | --- |
| [v1.4.230](#v1-4-230) | 2026年10月19日 | - Native chat (experimental)… |
| [v1.4.229](#v1-4-229) | 2026年10月17日 | 实验性 Native Chat 可逐轮审查编辑，共享技能支持更多 Agent |
| [v1.4.227](#v1-4-227) | 2026年10月16日 | Native Chat 拥有独立权限模式，会话更易继续 |
| [v1.4.224](#v1-4-224) | 2026年10月10日 | 自动化可按次指定模型与 effort，SSH 主机改跑托管 Orca 服务器 |
| [v1.4.223](#v1-4-223) | 2026年10月8日 | 实验性 Native Chat 可回退对话，SSH 重连后保留标签 |

## 完整中文日志 {#full-notes}

## v1.4.230 - Native chat (experimental)… {#v1-4-230}

2026年10月19日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.230)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-230-short}

- **Native chat (experimental):** Use Antigravity in chat, choose which agents open as chats, and install a missing agent from the chat itself. Paste copied files as attachments, queue images, and see clearer feedback while attachments and queue actions are pending.
- **Accounts & agents:** After switching Claude accounts, restart running sessions on the new account. Remove downloaded agent runtimes from Settings, and edit or delete Linear comments through the Orca CLI.
- **Phone:** Edit queued messages in place, follow tool runs with desktop-style cards, and see your conversation immediately when resuming from history. Landscape phones put session tabs in the top bar, and Tasks makes clear which desktop you’re using.
- **SSH & remote workspaces:** Disconnect stays disconnected, sleeping workspaces stay asleep, and closed tabs stay closed after reconnecting. Clearer server update and re-pairing messages help you recover a connection.
- **Everyday polish:** Quick Command shortcuts follow the focused split, tab previews wait for the full hover delay, and file headers offer Reveal in Finder. Workspace cleanup better protects same-path projects on other machines.

### Compatibility & upgrade notes {#v1-4-230-compatibility-upgrade-notes}

**Native chat (experimental):** Some chat features require support from the remote host. Keep the host updated alongside Orca to use the latest capabilities.

**The `orca` command on SSH hosts:** Existing hosts retain explicitly saved CLI control preferences; an unset preference is migrated to off. To allow commands on a connected SSH host to open and control this desktop’s Orca browser tabs for that host’s workspaces, enable **Allow this host’s orca CLI to control Orca** under Settings → SSH Hosts → edit the host → Advanced Connection.

---

### 产品体验 {#v1-4-230-product}

#### Native chat (experimental) {#v1-4-230-native-chat-experimental-}

> Choose which agents open as chats, use Antigravity, attach files and images more reliably, and see clearer queue, model and input-ownership feedback.

- Offer Install when a chat’s host is missing the agent it needs（[@brennanb2025](https://github.com/brennanb2025)，[#29051](https://github.com/stablyai/orca/pull/29051)）
- Chat: dropped files hold Send until they're attached（[@brennanb2025](https://github.com/brennanb2025)，[#29173](https://github.com/stablyai/orca/pull/29173)）
- A queue action still on its way greys its controls, like the phone（[@brennanb2025](https://github.com/brennanb2025)，[#29120](https://github.com/stablyai/orca/pull/29120)）
- Image messages wait in the queue like text（[@brennanb2025](https://github.com/brennanb2025)，[#28655](https://github.com/stablyai/orca/pull/28655)）
- Chat: pasting a copied file attaches it, like dropping it（[@brennanb2025](https://github.com/brennanb2025)，[#29089](https://github.com/stablyai/orca/pull/29089)）
- Choose which agents open in Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#29071](https://github.com/stablyai/orca/pull/29071)）
- A sign-in prompt on an ACP agent's error output ends the start or turn signed out（[@brennanb2025](https://github.com/brennanb2025)，[#28467](https://github.com/stablyai/orca/pull/28467)）
- An agent can run each chat's own permission mode itself（[@brennanb2025](https://github.com/brennanb2025)，[#28455](https://github.com/stablyai/orca/pull/28455)）
- 隐藏：Orca's chat-naming requests from Session History（[@nwparker](https://github.com/nwparker)，[#30029](https://github.com/stablyai/orca/pull/30029)）
- A running Claude chat keeps its model when two Claude Code versions list differently（[@brennanb2025](https://github.com/brennanb2025)，[#30022](https://github.com/stablyai/orca/pull/30022)）
- Use Antigravity in Native Chat through its ACP server（[@brennanb2025](https://github.com/brennanb2025)，[#28595](https://github.com/stablyai/orca/pull/28595)）
- A refused steer leaves its turn as the chat's latest request（[@brennanb2025](https://github.com/brennanb2025)，[#29907](https://github.com/stablyai/orca/pull/29907)）
- A Codex chat is Working only while Codex holds the send（[@brennanb2025](https://github.com/brennanb2025)，[#29922](https://github.com/stablyai/orca/pull/29922)）
- Pause an agent's chat starts while its shared sign-in changes（[@brennanb2025](https://github.com/brennanb2025)，[#28649](https://github.com/stablyai/orca/pull/28649)）
- The queue button you pressed shows a working spinner（[@brennanb2025](https://github.com/brennanb2025)，[#30010](https://github.com/stablyai/orca/pull/30010)）
- Mark each attached image as [Image #N] where it sits in the prompt（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#28736](https://github.com/stablyai/orca/pull/28736)）
- 保持：a restored agent’s status unconfirmed after 30 minutes instead of marking it done（[@nwparker](https://github.com/nwparker)，[#30186](https://github.com/stablyai/orca/pull/30186)）
- 显示：why the chat composer is locked and offer Take back when a phone holds the input（[@nwparker](https://github.com/nwparker)，[#30199](https://github.com/stablyai/orca/pull/30199)）
- Antigravity install: one clear message in the chat, with the message box staying in place（[@brennanb2025](https://github.com/brennanb2025)，[#30001](https://github.com/stablyai/orca/pull/30001)）
- Session History: the scan line under the search box no longer jumps during a refresh（[@brennanb2025](https://github.com/brennanb2025)，[#30158](https://github.com/stablyai/orca/pull/30158)）
- Sign in to Antigravity chats with the server’s own Google sign-in（[@brennanb2025](https://github.com/brennanb2025)，[#28650](https://github.com/stablyai/orca/pull/28650)）
- 移动：a chat visual's Open and Share buttons above it（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30356](https://github.com/stablyai/orca/pull/30356)）
- A Claude chat keeps a model its CLI stopped listing（[@brennanb2025](https://github.com/brennanb2025)，[#30436](https://github.com/stablyai/orca/pull/30436)）

#### Agents, integrations & accounts {#v1-4-230-agents-integrations-accounts}

> Switch Claude accounts with a restart offer, manage downloaded runtimes, edit Linear comments, and keep terminal sessions and GitLab task searches reliable.

- Edit and delete Linear comments from the Orca CLI（[@brennanb2025](https://github.com/brennanb2025)，[#30003](https://github.com/stablyai/orca/pull/30003)）
- 移除：a downloaded agent runtime from its Settings row（[@brennanb2025](https://github.com/brennanb2025)，[#29140](https://github.com/stablyai/orca/pull/29140)）
- Follow an Orca Claude account switch when the shell sets CLAUDE_CONFIG_DIR（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29890](https://github.com/stablyai/orca/pull/29890)）
- Offer to restart running Claude sessions on the new account after a switch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29898](https://github.com/stablyai/orca/pull/29898)）
- 移除：a downloaded agent runtime only after nothing on its host can still run it（[@brennanb2025](https://github.com/brennanb2025)，[#29139](https://github.com/stablyai/orca/pull/29139)）
- 允许：jcode's own client start its per-pane server（[@brennanb2025](https://github.com/brennanb2025)，[#30257](https://github.com/stablyai/orca/pull/30257)）
- Run the Antigravity usage check with agy's auto-update off（[@OrcaWin](https://github.com/OrcaWin)，[#30387](https://github.com/stablyai/orca/pull/30387)）
- Quit no longer warns about terminals a paired Orca server keeps running（[@nwparker](https://github.com/nwparker)，[#30006](https://github.com/stablyai/orca/pull/30006)）
- 恢复：a relaunched workspace's sleeping agents only when shown（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29459](https://github.com/stablyai/orca/pull/29459)）
- One spawn step writes a terminal's pane identity for both ways Orca opens terminals（[@brennanb2025](https://github.com/brennanb2025)，[#29884](https://github.com/stablyai/orca/pull/29884)）
- Tell users once that the diff panel in a Claude pane is Claude's own（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#29818](https://github.com/stablyai/orca/pull/29818)）
- 保持：OMP prompt markers from ending an agent’s turn so phone chat can find its session（[@nwparker](https://github.com/nwparker)，[#30273](https://github.com/stablyai/orca/pull/30273)）
- 避免：duplicate snapshot replays after reveal（[@nwparker](https://github.com/nwparker)，[#30205](https://github.com/stablyai/orca/pull/30205)）
- 保持：OMP prompt markers from triggering unnecessary terminal repair（[@nwparker](https://github.com/nwparker)，[#30285](https://github.com/stablyai/orca/pull/30285)）
- Limit concurrent GitLab project requests to keep task searches within the queue limit（[@maxmilian](https://github.com/maxmilian)，[#30157](https://github.com/stablyai/orca/pull/30157)）

#### SSH, managed servers & remote {#v1-4-230-ssh-managed-servers-remote}

> 保持：disconnects, sleeping workspaces and closed tabs consistent, preserve workspace identity during server moves, and recover with clearer update and re-pairing guidance.

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

#### Phone {#v1-4-230-phone}

> Edit queued messages in place, follow tool runs, resume conversations with their history visible, and navigate files, Tasks and landscape session tabs more smoothly.

- Edit queued messages in place（[@brennanb2025](https://github.com/brennanb2025)，[#28646](https://github.com/stablyai/orca/pull/28646)）
- One Working line in every chat; drop the floating 'Agent is working' pill（[@brennanb2025](https://github.com/brennanb2025)，[#29972](https://github.com/stablyai/orca/pull/29972)）
- The chat's Working line uses desktop's spinner（[@brennanb2025](https://github.com/brennanb2025)，[#30008](https://github.com/stablyai/orca/pull/30008)）
- 保持：a headless host's chat tab through snapshot rebuilds（[@nwparker](https://github.com/nwparker)，[#30028](https://github.com/stablyai/orca/pull/30028)）
- 防止：markdown and file tab reload and screen flicker on retap and revisit（[@zhangxaochen](https://github.com/zhangxaochen)，[#30033](https://github.com/stablyai/orca/pull/30033)）
- 显示：the update screen instead of native screens when the desktop has no page（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#29956](https://github.com/stablyai/orca/pull/29956)）
- 允许：Markdown refresh during desktop tab snapshots（[@nwparker](https://github.com/nwparker)，[#30040](https://github.com/stablyai/orca/pull/30040)）
- Draw the host Accounts screen from the desktop's page（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30020](https://github.com/stablyai/orca/pull/30020)）
- Ask which desktop to open Tasks on when several are connected（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30048](https://github.com/stablyai/orca/pull/30048)）
- 显示：which desktop the mobile Tasks screen is for（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#30105](https://github.com/stablyai/orca/pull/30105)）
- A compact phone queue: shorter header, a capped scrolling list, and an editor that fits the card（[@brennanb2025](https://github.com/brennanb2025)，[#30016](https://github.com/stablyai/orca/pull/30016)）
- Draw chat tool runs the way desktop does（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#30135](https://github.com/stablyai/orca/pull/30135)）
- Render Source Control on the phone for large branches（[@nwparker](https://github.com/nwparker)，[#30215](https://github.com/stablyai/orca/pull/30215)）
- A session resumed from the phone's history shows its conversation before the first new turn (#10923)（[@nwparker](https://github.com/nwparker)，[#30283](https://github.com/stablyai/orca/pull/30283)）
- Break the transport and terminal-document import cycles, and gate cycles after mobile's install（[@nwparker](https://github.com/nwparker)，[#30290](https://github.com/stablyai/orca/pull/30290)）
- Put the session tabs in the top bar on a landscape phone（[@brennanb2025](https://github.com/brennanb2025)，[#29070](https://github.com/stablyai/orca/pull/29070)）

#### Workspaces, sidebar & tabs {#v1-4-230-workspaces-sidebar-tabs}

> Protect same-path workspaces on different machines, explain cross-host actions, keep shortcuts on the focused split, and make notices and tab previews steadier.

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

#### Editor, files & Markdown {#v1-4-230-editor-files-markdown}

> Reveal files from their header menu and run notebook cells only when their workspace belongs to this computer.

- Reveal a file in Finder from its header menu（[@nwparker](https://github.com/nwparker)，[#30129](https://github.com/stablyai/orca/pull/30129)）
- Run cells only when the resolved owner is this computer（[@nwparker](https://github.com/nwparker)，[#30187](https://github.com/stablyai/orca/pull/30187)）

#### 浏览器 {#v1-4-230-browser}

> 打开：hosting-provider websites from Cmd/Ctrl+J and clean up browser tabs on hosts without a browser engine.

- 允许：Cmd+J open hosting-provider domains like github.io（[@AmethystLiang](https://github.com/AmethystLiang)，[#29989](https://github.com/stablyai/orca/pull/29989)）
- A client-hosted ghost tab closes on a host with no browser engine（[@nwparker](https://github.com/nwparker)，[#30119](https://github.com/stablyai/orca/pull/30119)）

#### Performance & reliability {#v1-4-230-performance-reliability}

> Retry failed shell PATH checks and speed up development typechecking with a pinned Bun dependency.

- Retry the shell PATH check and fall back when the shell cannot launch（[@nwparker](https://github.com/nwparker)，[#30204](https://github.com/stablyai/orca/pull/30204)）
- 钉住：Bun as a devDependency and typecheck with it（[@nwparker](https://github.com/nwparker)，[#30149](https://github.com/stablyai/orca/pull/30149)）

#### Tests, CI & maintenance {#v1-4-230-tests-ci-maintenance}

> regression coverage, dependency updates and internal cleanup support the changes above. Work on host-owned layouts and sidebar state remains behind disabled build switches覆盖更广。

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

## v1.4.224 自动化可按次指定模型与 effort，SSH 主机改跑托管 Orca 服务器 {#v1-4-224}

2026年10月10日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.224)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-224-short}

- **Automations can now set the agent's model and effort for each run.** In the automation editor, open Advanced and fill in **Extra agent arguments** (or use `--extra-agent-args` with `orca automations create` and `edit`), for example `-model haiku --effort high`. This works today for Claude, Codex, Grok and CodeBuddy (model and effort), Cursor (model, which carries its effort) and OMP (model), and support for more agents is coming soon. Each run starts a fresh session, and your other automations keep the host's defaults. Separately, scheduled runs in an existing workspace on an Orca server now hand the task to agents that read it after they start, such as Aider, Goose and Amp, instead of leaving them idle.
- **SSH hosts now run a managed Orca server.** Orca ships its own runtime and sets it up when you connect, so connections no longer fail because a host has the wrong Node version or no build tools. A host with no open terminals switches on its next connect and brings its projects, folders and open editor tabs along. A host with open terminals keeps working as before and offers **Move to a managed Orca server**, which restarts those terminals. A host that can't run it keeps its current connection, and Settings → SSH Hosts says why. You can see, update, roll back, **Recover** or **Forget** each server in Settings → Managed servers.
- **Native chat (experimental):** If you turned on Chat UI with chat as your default view, supported agents now open in the 结构化聊天 by default. If Terminal was your default, new agent tabs stay in the terminal, and a one-time tip explains the change and lets you turn chat mode on. You can move a conversation between chat and a terminal from the tab's right-click menu or from Agent Session History (**Resume in New CLI** / **Resume in New Native Chat**).
- **More in Native Chat:** Recent versions of OpenCode (including 2.x), Pi and OMP open as 结构化聊天 on this computer. Agents can draw charts, diagrams and mockups right inside a reply, on desktop and phone (switch it off under Settings → Chat → Inline visuals). Cmd/Ctrl+F searches a chat, you can quote part of a reply with **Add to chat**, Up/Down recalls every prompt you sent, number keys answer an agent's questions, and long messages and runs of tool calls fold into one row. The model picker no longer waits for the agent to start, Codex and Pi say they're signed out before you send, and a reply Orca had to cut off says why and offers **Continue**. Grok shows its subagents, and Grok, OpenCode and OMP can `/compact`.
- **SSH and remote terminals:** Keys you type during a network outage arrive exactly once and in order, scrollback and pane size survive a reconnect, and open tabs reattach after a managed server update. Shell startup files that print text, folders with tens of thousands of entries and 64-bit ARM Linux servers no longer break or drop the connection. Files, browser tabs, links and drag-and-drop stay on the machine they belong to when two machines share a path. `orca serve` now loads its SSH hosts, and quitting a window on a serving machine no longer stops the server.
- **Phone:** A browser tab opened on the phone loads while the desktop is minimized or in its screen saver, chat visuals and subagents show in the phone's Native Chat, and videos and music files play in previews.
- **Workspaces and editing:** You can attach several pull requests, merge requests and tasks to one workspace. Hovering a tab shows its full title with icon and program, Force Delete can remember **Always force delete**, and **Continue in New Session** is now **Hand Off to Another Agent**. Markdown shows GitHub-style callouts such as `> [!NOTE]`, PDFs zoom with pinch and Cmd/Ctrl+`=`/`-`, and files dragged in from Finder or File Explorer land in the exact pane, folder or editor you drop them on.
- **Also:** The usage meters in the status bar now default to a shorter Compact view unless you chose one (Detailed is still available), Stage All stages every change even when the list is capped at 1,000, and Orca detects the GitHub CLI even when a `gh` launcher hangs.

### Known issues {#v1-4-224-known-issues}

**The `orca` command on SSH hosts:** By default, `orca` commands run on an SSH host reach only that host's own terminals and orchestration messages. To let agents there create worktrees, open terminals or dispatch work through `orca`, turn on **Allow this host's orca CLI to control Orca** for that host (Settings → SSH Hosts → edit the host → Advanced Connection) (#26483).

**Downgrading to v1.4.223:** Terminals started in v1.4.224 can't be reached from v1.4.223 until you update again. Extra pull requests, merge requests and tasks you attached to a folder workspace are removed. If Chat UI was on, it may be off after you update again; turn it back on in Settings → Experimental. SSH hosts that moved to a managed server work over the old connection in v1.4.223; if you add or remove projects there, the host shows "Changed on an older Orca" after you update and offers **Move the new projects**. Orca still refuses to install versions older than v1.4.214 from its version picker. To go back to one of those, run `orca profile state rollback --latest-json` with Orca closed, then install the old version by hand (#23262).

**Terminals after updating:** This version starts a new terminal background service for new terminals. Terminals that were already open keep running on the previous one, so changes in this release apply only to terminals opened after the update.

**Native chats from v1.4.217 or older:** If you used Native Chat (experimental) on v1.4.217 or older and update straight to v1.4.224, your earlier Native Chats won't appear. Their files stay on disk (#26038).

**Relaunching from shell history:** When an agent's launch command is long or spans several lines, the shell history holds a short one-time line instead, so pressing up-arrow and Enter does not start the agent again (#23962).

**Workspaces created from the phone:** Creating a workspace from an issue, pull request or Linear item with an agent on the phone still moves the desktop to that workspace (#26025).

**Windows on ARM:** The ARM64 package ships an x64 `orca.exe` command-line tool. Windows 11 on ARM runs it under emulation. Windows 10 on ARM can't run it, so the `orca` command does not work there (#24094).

**OpenCode 2:** If you update from v1.4.219 or earlier, OpenCode 2 panes that were already running may show no status until you restart OpenCode in them. If you downgrade Orca after updating, duplicate OpenCode status plugins are left behind. After `opencode run` exits, its pane can keep showing "Done"; a fix is pending in #24472.

**Claude folder trust:** Folder pre-trust is on by default (Settings → Agents → "Trust the folder when Orca starts an agent"). On Alpine WSL, Orca can't copy the file permissions it needs, so Claude shows its own trust prompt instead (#23744).

---

### 产品体验 {#v1-4-224-product}

#### 自动化 {#v1-4-224-automations}

> Each automation can set its own model and effort, and server-run automations in an existing workspace now deliver their task to agents that read it after they start.

- 允许：automations pass extra agent arguments on each run（[@AmethystLiang](https://github.com/AmethystLiang)，[#26659](https://github.com/stablyai/orca/pull/26659)）
- 发送：scheduled automation prompts to agents that read them after they start（[@brennanb2025](https://github.com/brennanb2025)，[#26703](https://github.com/stablyai/orca/pull/26703)）

#### Native chat (experimental) {#v1-4-224-native-chat-experimental-}

> Structured chat becomes the Chat UI default (Terminal-default users stay put), OpenCode, Pi and OMP join as 结构化聊天, agents can show inline visuals, and chats gain find, quoting, prompt recall, tidier tool rows, clearer sign-in and stop messages, and a steadier message queue.

- Default experimental Native Chat to 结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#22933](https://github.com/stablyai/orca/pull/22933)）
- 保持：Chat UI users with a Terminal default on the terminal, with a chat mode switch in the upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#26915](https://github.com/stablyai/orca/pull/26915)）
- 显示：pre-upgrade Experimental Chat UI users a one-time Native Chat upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#26710](https://github.com/stablyai/orca/pull/26710)）
- Offer Resume in New CLI / Native Chat from the tab right-click menu（[@brennanb2025](https://github.com/brennanb2025)，[#26705](https://github.com/stablyai/orca/pull/26705)）
- 新增（session-history）：Resume in New CLI forks a Native Chat's conversation into the terminal（[@brennanb2025](https://github.com/brennanb2025)，[#26336](https://github.com/stablyai/orca/pull/26336)）
- OpenCode 结构化聊天 over the Agent Client Protocol（[@brennanb2025](https://github.com/brennanb2025)，[#25845](https://github.com/stablyai/orca/pull/25845)）
- 新增（opencode）：open OpenCode 2.x in the 结构化聊天 too（[@brennanb2025](https://github.com/brennanb2025)，[#26395](https://github.com/stablyai/orca/pull/26395)）
- 新增：Pi structured Native Chat through its RPC mode（[@brennanb2025](https://github.com/brennanb2025)，[#25851](https://github.com/stablyai/orca/pull/25851)）
- 新增（omp）：open OMP in the 结构化聊天 over ACP（[@brennanb2025](https://github.com/brennanb2025)，[#26401](https://github.com/stablyai/orca/pull/26401)）
- 显示：model and effort choices for every agent before its session starts（[@brennanb2025](https://github.com/brennanb2025)，[#26407](https://github.com/stablyai/orca/pull/26407)）
- 修复（native-chat）：return focus to the composer after picking a model or effort（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26574](https://github.com/stablyai/orca/pull/26574)）
- 新增（native-chat）：show agent-written visuals inline in 结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#26103](https://github.com/stablyai/orca/pull/26103)）
- 新增（native-chat）：teach chat agents to show inline visuals in their own folder（[@brennanb2025](https://github.com/brennanb2025)，[#26099](https://github.com/stablyai/orca/pull/26099)）
- Native chat: add an inline visuals switch and simplify the skill（[@brennanb2025](https://github.com/brennanb2025)，[#26358](https://github.com/stablyai/orca/pull/26358)）
- Native chat: inline visuals for Grok, OpenCode and OMP chats（[@brennanb2025](https://github.com/brennanb2025)，[#26530](https://github.com/stablyai/orca/pull/26530)）
- 允许：in-page links switch sections inside a chat visual（[@brennanb2025](https://github.com/brennanb2025)，[#26729](https://github.com/stablyai/orca/pull/26729)）
- Native chat: Cmd/Ctrl+F finds in the chat（[@brennanb2025](https://github.com/brennanb2025)，[#26517](https://github.com/stablyai/orca/pull/26517)）
- 新增（native-chat）：quote a selection from an agent reply into the composer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26018](https://github.com/stablyai/orca/pull/26018)）
- 修复（native-chat）：recall every sent prompt with Up/Down in the composer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26044](https://github.com/stablyai/orca/pull/26044)）
- 新增（native-chat）：fold long sent messages behind a toggle（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#25996](https://github.com/stablyai/orca/pull/25996)）
- 修复（native-chat）：read a queued message in full（[@brennanb2025](https://github.com/brennanb2025)，[#26004](https://github.com/stablyai/orca/pull/26004)）
- 修复（native-chat）：fold thoughts and tool calls between replies into one row（[@brennanb2025](https://github.com/brennanb2025)，[#26048](https://github.com/stablyai/orca/pull/26048)）
- 新增（native-chat）：compact tool runs with a bounded call list（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26285](https://github.com/stablyai/orca/pull/26285)）
- 新增（native-chat）：preview each rail tick with its reply, and land jumps at the top（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26056](https://github.com/stablyai/orca/pull/26056)）
- 新增（native-chat）：number keys and auto-advance for questions（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26288](https://github.com/stablyai/orca/pull/26288)）
- 新增（native-chat）：make Native Chat replies flow in and the transcript glide when following（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26238](https://github.com/stablyai/orca/pull/26238)）
- 修复：Mermaid diagrams that stay on error after replies finish（[@brennanb2025](https://github.com/brennanb2025)，[#26480](https://github.com/stablyai/orca/pull/26480)）
- Native chat: open files from tool rows through the terminal's file link menu（[@brennanb2025](https://github.com/brennanb2025)，[#26511](https://github.com/stablyai/orca/pull/26511)）
- 修复（native-chat）：underline a file path only once its workspace confirms it exists（[@brennanb2025](https://github.com/brennanb2025)，[#26675](https://github.com/stablyai/orca/pull/26675)）
- 修复（native-chat）：show right-click Copy and Paste only where they apply（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26207](https://github.com/stablyai/orca/pull/26207)）
- 新增（acp）：compact Grok, OpenCode and OMP chats（[@brennanb2025](https://github.com/brennanb2025)，[#26502](https://github.com/stablyai/orca/pull/26502)）
- 新增（grok）：show Grok's subagents as subagent rows（[@brennanb2025](https://github.com/brennanb2025)，[#26508](https://github.com/stablyai/orca/pull/26508)）
- 修复（omp）：show exit 0 for a command that finished normally（[@brennanb2025](https://github.com/brennanb2025)，[#26494](https://github.com/stablyai/orca/pull/26494)）
- 修复（acp）：keep OMP replies that follow its reasoning（[@brennanb2025](https://github.com/brennanb2025)，[#26658](https://github.com/stablyai/orca/pull/26658)）
- 修复（acp）：start chats for agents that report no model（[@brennanb2025](https://github.com/brennanb2025)，[#26587](https://github.com/stablyai/orca/pull/26587)）
- 修复（acp）：show agent details when a chat message fails（[@brennanb2025](https://github.com/brennanb2025)，[#26666](https://github.com/stablyai/orca/pull/26666)）
- Native chat: say when Codex is signed out or the agent isn't installed, without disabling Send（[@brennanb2025](https://github.com/brennanb2025)，[#25666](https://github.com/stablyai/orca/pull/25666)）
- 显示："Pi isn't signed in" in Native Chat before the first send（[@brennanb2025](https://github.com/brennanb2025)，[#26743](https://github.com/stablyai/orca/pull/26743)）
- 显示：sign-in guidance for all Native Chat agents（[@brennanb2025](https://github.com/brennanb2025)，[#26544](https://github.com/stablyai/orca/pull/26544)）
- 显示：OMP sign-in guidance when OMP reports no model selected（[@brennanb2025](https://github.com/brennanb2025)，[#26649](https://github.com/stablyai/orca/pull/26649)）
- 新增（native-chat）：say in the chat why Orca stopped a reply, and offer Continue（[@brennanb2025](https://github.com/brennanb2025)，[#25675](https://github.com/stablyai/orca/pull/25675)）
- 新增（native-chat）：show each interrupted chat's workspace as its read-only sidebar card（[@brennanb2025](https://github.com/brennanb2025)，[#25652](https://github.com/stablyai/orca/pull/25652)）
- 新增（native-chat）：show each chat's resume as it happens, and start more at once（[@brennanb2025](https://github.com/brennanb2025)，[#26361](https://github.com/stablyai/orca/pull/26361)）
- Hold messages in the host until a chat's agent has finished starting（[@brennanb2025](https://github.com/brennanb2025)，[#26416](https://github.com/stablyai/orca/pull/26416)）
- 修复（native-chat）：a local chat this computer can't run opens the agent in a terminal（[@brennanb2025](https://github.com/brennanb2025)，[#25947](https://github.com/stablyai/orca/pull/25947)）
- 新增（native-chat）：attach files to a 结构化聊天 on a paired server（[@brennanb2025](https://github.com/brennanb2025)，[#25146](https://github.com/stablyai/orca/pull/25146)）
- 修复（native-chat）：show an SSH session's chat history on the phone and desktop（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26334](https://github.com/stablyai/orca/pull/26334)）
- 修复（native-chat）：no saved outbox on the desktop; one send at a time, and the host owns what it accepted（[@brennanb2025](https://github.com/brennanb2025)，[#25959](https://github.com/stablyai/orca/pull/25959)）
- 修复（native-chat）：a message kept after a quit or close waits in order and follows the chat's next turn（[@brennanb2025](https://github.com/brennanb2025)，[#25960](https://github.com/stablyai/orca/pull/25960)）
- 修复（native-chat）：never refuse a queued card because 20 were waiting, and keep the queue from covering the chat（[@brennanb2025](https://github.com/brennanb2025)，[#26553](https://github.com/stablyai/orca/pull/26553)）
- 修复（native-chat）：never refuse a user's write because the retry record is full（[@brennanb2025](https://github.com/brennanb2025)，[#26543](https://github.com/stablyai/orca/pull/26543)）
- 修复（native-chat）：a /compact sent while the agent works waits in line instead of being refused（[@brennanb2025](https://github.com/brennanb2025)，[#25704](https://github.com/stablyai/orca/pull/25704)）
- Label a message stopped before the agent began on it plainly as "Stopped"（[@brennanb2025](https://github.com/brennanb2025)，[#26381](https://github.com/stablyai/orca/pull/26381)）
- 新增（native-chat）：show an agent message's sender by its current title, clickable on the queued card too（[@brennanb2025](https://github.com/brennanb2025)，[#26357](https://github.com/stablyai/orca/pull/26357)）
- 保持：Native Chat /clear in the same conversation（[@brennanb2025](https://github.com/brennanb2025)，[#26579](https://github.com/stablyai/orca/pull/26579)）
- 停止：Native Chat jumping when Codex starts a foreground command（[@brennanb2025](https://github.com/brennanb2025)，[#26503](https://github.com/stablyai/orca/pull/26503)）
- 修复（native-chat）：show host outages in the notice card（[@brennanb2025](https://github.com/brennanb2025)，[#26161](https://github.com/stablyai/orca/pull/26161)）
- 保持：picked skills and pending uploads when Native Chat composers close（[@brennanb2025](https://github.com/brennanb2025)，[#26538](https://github.com/stablyai/orca/pull/26538)）
- Release clipboard previews when the chat composer closes（[@nwparker](https://github.com/nwparker)，[#26234](https://github.com/stablyai/orca/pull/26234)）
- 修复（native-chat）：settle a dead agent's leftover work in one write that always fits（[@brennanb2025](https://github.com/brennanb2025)，[#26664](https://github.com/stablyai/orca/pull/26664)）
- Resolve Native Chat workspaces from catalog snapshots（[@AmethystLiang](https://github.com/AmethystLiang)，[#26428](https://github.com/stablyai/orca/pull/26428)）

#### Agents, integrations & orchestration {#v1-4-224-agents-integrations-orchestration}

> Session hand-off gets a clearer name, DeepSeek Harness reports when it is idle, OpenCode 2 resumes keep their launch mode, phone and CLI workspace creates match the desktop, and Windows agent hooks start faster.

- Detect installed GitHub CLI behind hung launchers（[@OrcaWin](https://github.com/OrcaWin)，[#25183](https://github.com/stablyai/orca/pull/25183)）
- 新增（agent-sessions）：rename "Continue in New Session" to "Hand Off to Another Agent"（[@brennanb2025](https://github.com/brennanb2025)，[#26375](https://github.com/stablyai/orca/pull/26375)）
- 修复（runtime）：settle DSH tui-idle on its hook-store done（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26481](https://github.com/stablyai/orca/pull/26481)）
- Honor OpenCode 2 launch mode when resuming sessions（[@nwparker](https://github.com/nwparker)，[#26843](https://github.com/stablyai/orca/pull/26843)）
- Start worktree.create's agent through the launch executor（[@brennanb2025](https://github.com/brennanb2025)，[#26709](https://github.com/stablyai/orca/pull/26709)）
- Start orchestration workers and remote workers through the launch executor（[@brennanb2025](https://github.com/brennanb2025)，[#26724](https://github.com/stablyai/orca/pull/26724)）
- 修复（worktrees）：a phone or CLI create keeps a sparse preset only when its folders match（[@brennanb2025](https://github.com/brennanb2025)，[#26104](https://github.com/stablyai/orca/pull/26104)）
- 修复（worktrees）：a phone or CLI create puts the agent in the first orca.yaml default tab, as the desktop does（[@brennanb2025](https://github.com/brennanb2025)，[#26106](https://github.com/stablyai/orca/pull/26106)）
- 修复：dispatch Muse Windows hooks directly on safe profile paths（[@nwparker](https://github.com/nwparker)，[#26755](https://github.com/stablyai/orca/pull/26755)）
- 修复（hooks）：speed up guarded Unicode Windows hook launches（[@OrcaWin](https://github.com/OrcaWin)，[#26382](https://github.com/stablyai/orca/pull/26382)）
- 性能：skip unused Grok login-shell probe when installing agent hooks（[@nwparker](https://github.com/nwparker)，[#26241](https://github.com/stablyai/orca/pull/26241)）

#### SSH, managed servers & remote {#v1-4-224-ssh-managed-servers-remote}

> SSH hosts move to a managed Orca server, remote terminals keep typed input, scrollback and size across outages, and files, links, browser tabs and drops stay on the machine they belong to.

- Phase 3: every SSH host runs a managed Orca server (orcad), replacing the relay, and orca serve runs on it（[@OrcaWin](https://github.com/OrcaWin)，[#24863](https://github.com/stablyai/orca/pull/24863)）
- Phase 3.5: fix the top SSH/remote issues at the root cause（[@OrcaWin](https://github.com/OrcaWin)，[#26483](https://github.com/stablyai/orca/pull/26483)）
- Phase 3.7: fix SSH/remote failures found by adversarial real-host testing（[@OrcaWin](https://github.com/OrcaWin)，[#26847](https://github.com/stablyai/orca/pull/26847)）
- 修复（remote-terminal）：keep the disconnected-input grace honest across retries（[@OrcaWin](https://github.com/OrcaWin)，[#26871](https://github.com/stablyai/orca/pull/26871)）
- Provide Orca CLI on managed Linux and macOS servers（[@nwparker](https://github.com/nwparker)，[#26539](https://github.com/stablyai/orca/pull/26539)）
- 保持：managed servers unverifiable until they answer（[@nwparker](https://github.com/nwparker)，[#26637](https://github.com/stablyai/orca/pull/26637)）
- 避免：claiming an unverifiable managed server has stopped（[@nwparker](https://github.com/nwparker)，[#26663](https://github.com/stablyai/orca/pull/26663)）
- Reconnect managed servers through the current SSH connection（[@nwparker](https://github.com/nwparker)，[#26645](https://github.com/stablyai/orca/pull/26645)）
- Refresh SSH status after manual managed-server updates（[@nwparker](https://github.com/nwparker)，[#26665](https://github.com/stablyai/orca/pull/26665)）
- Explain the Active Server stop refusal in Settings（[@nwparker](https://github.com/nwparker)，[#26584](https://github.com/stablyai/orca/pull/26584)）
- 保持：open Remote Settings in sync with saved servers（[@nwparker](https://github.com/nwparker)，[#26581](https://github.com/stablyai/orca/pull/26581)）
- Retry failed catalog reads when SSH hosts move to Remote（[@nwparker](https://github.com/nwparker)，[#26531](https://github.com/stablyai/orca/pull/26531)）
- 保持：migrated folder workspaces under their Remote host（[@nwparker](https://github.com/nwparker)，[#26535](https://github.com/stablyai/orca/pull/26535)）
- 保持：remote folder sidebar rows distinct across execution hosts（[@nwparker](https://github.com/nwparker)，[#26634](https://github.com/stablyai/orca/pull/26634)）
- 保持：Git identity probes from blocking SSH host reconversion（[@nwparker](https://github.com/nwparker)，[#26578](https://github.com/stablyai/orca/pull/26578)）
- 报告：browser placement support from the installed provider（[@nwparker](https://github.com/nwparker)，[#26559](https://github.com/stablyai/orca/pull/26559)）
- 保持：new browser tabs on SSH routing after managed conversion（[@nwparker](https://github.com/nwparker)，[#26570](https://github.com/stablyai/orca/pull/26570)）
- 保留：retained desktop browser pages during SSH conversion（[@nwparker](https://github.com/nwparker)，[#26572](https://github.com/stablyai/orca/pull/26572)）
- 区分：remote browser failures from server connection failures（[@nwparker](https://github.com/nwparker)，[#26573](https://github.com/stablyai/orca/pull/26573)）
- 等待：for editor ownership before listing remote Markdown（[@nwparker](https://github.com/nwparker)，[#26590](https://github.com/stablyai/orca/pull/26590)）
- 保留：editor file identity during SSH host conversion（[@nwparker](https://github.com/nwparker)，[#26593](https://github.com/stablyai/orca/pull/26593)）
- 恢复：editor file watching when remote host contact returns（[@nwparker](https://github.com/nwparker)，[#26606](https://github.com/stablyai/orca/pull/26606)）
- 恢复：remote explorer updates after server recovery（[@nwparker](https://github.com/nwparker)，[#26612](https://github.com/stablyai/orca/pull/26612)）
- 保持：explorer file watches on the selected remote host（[@nwparker](https://github.com/nwparker)，[#26616](https://github.com/stablyai/orca/pull/26616)）
- Reset explorer files when switching remote hosts at the same path（[@nwparker](https://github.com/nwparker)，[#26627](https://github.com/stablyai/orca/pull/26627)）
- 移动：shared file watches when the selected remote host changes（[@nwparker](https://github.com/nwparker)，[#26632](https://github.com/stablyai/orca/pull/26632)）
- 保持：managed workspace paths out of desktop editor launches（[@nwparker](https://github.com/nwparker)，[#26668](https://github.com/stablyai/orca/pull/26668)）
- 保持：managed status warnings out of desktop gitignore writes（[@nwparker](https://github.com/nwparker)，[#26671](https://github.com/stablyai/orca/pull/26671)）
- 等待：for managed editor saves before discarding Git changes（[@nwparker](https://github.com/nwparker)，[#26677](https://github.com/stablyai/orca/pull/26677)）
- 保持：remote file deletion from saving and closing desktop drafts（[@nwparker](https://github.com/nwparker)，[#26679](https://github.com/stablyai/orca/pull/26679)）
- 保持：managed file Copy from selecting a desktop file（[@nwparker](https://github.com/nwparker)，[#26682](https://github.com/stablyai/orca/pull/26682)）
- 保持：remote terminal path links on their own host（[@nwparker](https://github.com/nwparker)，[#26696](https://github.com/stablyai/orca/pull/26696)）
- 保持：remote file drops from opening desktop browser files（[@nwparker](https://github.com/nwparker)，[#26698](https://github.com/stablyai/orca/pull/26698)）
- 保持：workspace file drops on the terminal's host（[@nwparker](https://github.com/nwparker)，[#26830](https://github.com/stablyai/orca/pull/26830)）
- 保持：an unplaceable workspace owner out of desktop Open in launches（[@OrcaWin](https://github.com/OrcaWin)，[#26797](https://github.com/stablyai/orca/pull/26797)）
- 修复：admit relay bulk frames once under backpressure（[@nwparker](https://github.com/nwparker)，[#26333](https://github.com/stablyai/orca/pull/26333)）
- 修复（serve）：restore the saved active tab group after a cold start（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26089](https://github.com/stablyai/orca/pull/26089)）

#### Phone {#v1-4-224-phone}

> Browser tabs stream while the desktop sleeps, chat visuals and subagents show on the phone, media files play, and big images and Markdown use less time and memory.

- 修复（browser）：keep the desktop drawing while a phone streams a browser tab（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26284](https://github.com/stablyai/orca/pull/26284)）
- 修复（window）：stop a covered window drawing after a phone stream, and keep a streamed foreground tab live（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26657](https://github.com/stablyai/orca/pull/26657)）
- 新增（mobile）：show chat visuals inline in the phone's Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#26071](https://github.com/stablyai/orca/pull/26071)）
- 新增（mobile）：show a Native Chat's subagents like desktop（[@brennanb2025](https://github.com/brennanb2025)，[#26125](https://github.com/stablyai/orca/pull/26125)）
- 允许：another phone send after delivery is unconfirmed（[@brennanb2025](https://github.com/brennanb2025)，[#26392](https://github.com/stablyai/orca/pull/26392)）
- 新增：play video and music files in mobile previews（[@nwparker](https://github.com/nwparker)，[#26148](https://github.com/stablyai/orca/pull/26148)）
- Release closed Markdown documents on mobile（[@nwparker](https://github.com/nwparker)，[#26159](https://github.com/stablyai/orca/pull/26159)）
- Use native Base64 encoding for mobile image bytes when available（[@nwparker](https://github.com/nwparker)，[#26165](https://github.com/stablyai/orca/pull/26165)）
- Use browser crypto to speed up mobile image fingerprints（[@nwparker](https://github.com/nwparker)，[#26170](https://github.com/stablyai/orca/pull/26170)）
- 避免：rebuilding committed mobile files while typing（[@nwparker](https://github.com/nwparker)，[#26196](https://github.com/stablyai/orca/pull/26196)）
- 停止：repeated GitLab detail requests on mobile（[@nwparker](https://github.com/nwparker)，[#26197](https://github.com/stablyai/orca/pull/26197)）
- 重构（mobile）：remove the hybrid-shell toggle; the build decides（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26825](https://github.com/stablyai/orca/pull/26825)）

#### Workspaces, sidebar & tabs {#v1-4-224-workspaces-sidebar-tabs}

> Tab hover cards show full titles, Force Delete can remember your choice, the usage bar defaults to Compact, and sidebar headers and workspace refreshes behave better.

- 显示：whole-tab hover cards with icons and smooth tab-to-tab slides（[@nwparker](https://github.com/nwparker)，[#26811](https://github.com/stablyai/orca/pull/26811)）
- 修复（sidebar）：keep project headers from overlapping the pinned host（[@AmethystLiang](https://github.com/AmethystLiang)，[#26775](https://github.com/stablyai/orca/pull/26775)）
- 修复：keep workspace search filter button on one line（[@genni613](https://github.com/genni613)，[#26580](https://github.com/stablyai/orca/pull/26580)）
- 新增：saved force-delete preference to workspace deletion menu（[@nwparker](https://github.com/nwparker)，[#26425](https://github.com/stablyai/orca/pull/26425)）
- 新增：Always force delete dropdown to the workspace deletion dialog（[@nwparker](https://github.com/nwparker)，[#26476](https://github.com/stablyai/orca/pull/26476)）
- 移除：local branch deletion success notification（[@nwparker](https://github.com/nwparker)，[#26422](https://github.com/stablyai/orca/pull/26422)）
- 保持：one local project after concurrent registration（[@nwparker](https://github.com/nwparker)，[#26789](https://github.com/stablyai/orca/pull/26789)）
- Default status-bar usage to Compact and explain the change once（[@AmethystLiang](https://github.com/AmethystLiang)，[#26726](https://github.com/stablyai/orca/pull/26726)）
- 修复：Compact usage notice focus and older-host compatibility（[@AmethystLiang](https://github.com/AmethystLiang)，[#26747](https://github.com/stablyai/orca/pull/26747)）
- 保持：usage overflow chip width stable as hidden count changes（[@AmethystLiang](https://github.com/AmethystLiang)，[#26873](https://github.com/stablyai/orca/pull/26873)）
- 修复（floating-workspace）：keep file links from blanking the main window（[@brennanb2025](https://github.com/brennanb2025)，[#26655](https://github.com/stablyai/orca/pull/26655)）
- 避免：refreshing GitHub accounts while editing project names（[@nwparker](https://github.com/nwparker)，[#26228](https://github.com/stablyai/orca/pull/26228)）
- 避免：repeated session copies when deleting project groups（[@nwparker](https://github.com/nwparker)，[#26230](https://github.com/stablyai/orca/pull/26230)）
- 避免：refreshing every repository after deleting one worktree（[@nwparker](https://github.com/nwparker)，[#26253](https://github.com/stablyai/orca/pull/26253)）
- 性能：preserve unrelated authorization roots after desktop removal（[@nwparker](https://github.com/nwparker)，[#26294](https://github.com/stablyai/orca/pull/26294)）
- 性能：group Space decision inputs by workspace（[@nwparker](https://github.com/nwparker)，[#26297](https://github.com/stablyai/orca/pull/26297)）

#### Editor, files & Markdown {#v1-4-224-editor-files-markdown}

> GitHub-style callouts, PDF zoom, large Markdown with HTML in rich mode, live Markdown links, OS file drops that land where you drop them, and faster notebooks and Markdown.

- 新增（markdown）：render GitHub-style callouts（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26255](https://github.com/stablyai/orca/pull/26255)）
- 修复（editor）：route zoom gestures and app zoom to the PDF viewer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26652](https://github.com/stablyai/orca/pull/26652)）
- 允许：large markdown documents with HTML in rich mode（[@AmethystLiang](https://github.com/AmethystLiang)，[#26331](https://github.com/stablyai/orca/pull/26331)）
- 修复：alternate browser clicks in rich Markdown（[@nwparker](https://github.com/nwparker)，[#26920](https://github.com/stablyai/orca/pull/26920)）
- Refresh rich Markdown links when document metadata changes（[@nwparker](https://github.com/nwparker)，[#26595](https://github.com/stablyai/orca/pull/26595)）
- Refresh open Markdown links when workspace files change（[@nwparker](https://github.com/nwparker)，[#26599](https://github.com/stablyai/orca/pull/26599)）
- 修复（file-drop）：explorer, project sidebar, tab strip and editor own OS file drops (STA-6940 PR5)（[@brennanb2025](https://github.com/brennanb2025)，[#26133](https://github.com/stablyai/orca/pull/26133)）
- 修复（file-drop）：deliver terminal files to the pane under the cursor (STA-6940 PR4/6)（[@brennanb2025](https://github.com/brennanb2025)，[#26008](https://github.com/stablyai/orca/pull/26008)）
- [STA-6940] Deliver chat, workspace composer, and feedback file drops at their elements (3/6)（[@brennanb2025](https://github.com/brennanb2025)，[#25781](https://github.com/stablyai/orca/pull/25781)）
- 移除：legacy OS file-drop routing (STA-6940 PR6/6)（[@brennanb2025](https://github.com/brennanb2025)，[#26385](https://github.com/stablyai/orca/pull/26385)）
- 性能：save completed notebook runs in one document update（[@nwparker](https://github.com/nwparker)，[#26254](https://github.com/stablyai/orca/pull/26254)）
- 避免：rescanning accumulated notebook stream output（[@nwparker](https://github.com/nwparker)，[#26123](https://github.com/stablyai/orca/pull/26123)）
- 跳过：repeated ANSI parsing scans for plain notebook output（[@nwparker](https://github.com/nwparker)，[#26124](https://github.com/stablyai/orca/pull/26124)）
- Scan Markdown inline-code spans once when highlighting links（[@nwparker](https://github.com/nwparker)，[#26126](https://github.com/stablyai/orca/pull/26126)）
- 性能：skip redundant image scans in image-free Markdown previews（[@nwparker](https://github.com/nwparker)，[#26240](https://github.com/stablyai/orca/pull/26240)）
- 性能：skip Markdown fence scans when no toggle opens（[@nwparker](https://github.com/nwparker)，[#26324](https://github.com/stablyai/orca/pull/26324)）
- Filter unrelated workspace events before Explorer defers them（[@nwparker](https://github.com/nwparker)，[#26265](https://github.com/stablyai/orca/pull/26265)）
- 避免：repeatedly extracting source text for the copy-context hint（[@nwparker](https://github.com/nwparker)，[#26115](https://github.com/stablyai/orca/pull/26115)）

#### Browser, skills & feedback {#v1-4-224-browser-skills-feedback}

> The browser comment box no longer covers what you annotate, and cookie imports, browser commands, feedback and skill downloads clean up after themselves.

- 修复（browser）：keep the annotation composer off the element it annotates（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26596](https://github.com/stablyai/orca/pull/26596)）
- Release cookie snapshots when import preparation fails（[@nwparker](https://github.com/nwparker)，[#26218](https://github.com/stablyai/orca/pull/26218)）
- Release completed browser helper drain timers（[@nwparker](https://github.com/nwparker)，[#26210](https://github.com/stablyai/orca/pull/26210)）
- Release feedback requests after response handling completes（[@nwparker](https://github.com/nwparker)，[#26274](https://github.com/stablyai/orca/pull/26274)）
- Cancel abandoned skill package download responses（[@nwparker](https://github.com/nwparker)，[#26169](https://github.com/stablyai/orca/pull/26169)）
- 修复（skills）：keep archive abort errors observed before reading（[@nwparker](https://github.com/nwparker)，[#26246](https://github.com/stablyai/orca/pull/26246)）
- 性能（skills）：avoid repeated placement scans during batch deletion（[@nwparker](https://github.com/nwparker)，[#26223](https://github.com/stablyai/orca/pull/26223)）

#### Performance & reliability {#v1-4-224-performance-reliability}

> Less CPU and memory for terminal redraws, checkpoints, Codex output and chat recovery, and profile saves that warn instead of failing on a slow disk.

- 避免：retaining an unused OpenCode database worker（[@nwparker](https://github.com/nwparker)，[#26113](https://github.com/stablyai/orca/pull/26113)）
- Close rejected optional OpenCode billing requests（[@nwparker](https://github.com/nwparker)，[#26236](https://github.com/stablyai/orca/pull/26236)）
- 移除：repeated row copying from terminal redraw ingestion（[@nwparker](https://github.com/nwparker)，[#26118](https://github.com/stablyai/orca/pull/26118)）
- 减小：terminal checkpoint stalls with bounded native JSON encoding（[@nwparker](https://github.com/nwparker)，[#26177](https://github.com/stablyai/orca/pull/26177)）
- 避免：rescanning unfinished records while tailing agent logs（[@nwparker](https://github.com/nwparker)，[#26132](https://github.com/stablyai/orca/pull/26132)）
- 性能：reuse chat tab ownership across unrelated app updates（[@nwparker](https://github.com/nwparker)，[#26150](https://github.com/stablyai/orca/pull/26150)）
- 避免：repeated history serialization during recovery（[@nwparker](https://github.com/nwparker)，[#26160](https://github.com/stablyai/orca/pull/26160)）
- 性能：avoid copying Codex output between saved checkpoints（[@nwparker](https://github.com/nwparker)，[#26199](https://github.com/stablyai/orca/pull/26199)）
- Release completed provider write payloads（[@nwparker](https://github.com/nwparker)，[#26208](https://github.com/stablyai/orca/pull/26208)）
- Drain queued SQLite replies before faulting after a main-loop stall（[@nwparker](https://github.com/nwparker)，[#26444](https://github.com/stablyai/orca/pull/26444)）
- Warn on slow profile saves instead of failing them（[@AmethystLiang](https://github.com/AmethystLiang)，[#26447](https://github.com/stablyai/orca/pull/26447)）
- Abort failed runtime downloads after cleanup（[@nwparker](https://github.com/nwparker)，[#26269](https://github.com/stablyai/orca/pull/26269)）

#### Languages {#v1-4-224-languages}

> New screens are translated into Spanish, French, Japanese, Korean and Chinese.

- 杂项（i18n）：translate 176 new keys to es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#26365](https://github.com/stablyai/orca/pull/26365)）

#### Relay service {#v1-4-224-relay-service}

> Server-side capacity, deploy and monitoring work for Orca's relay service.

- 新增（relay）：slower same-cap drain paces (15 and 20 min) for every cell class（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26350](https://github.com/stablyai/orca/pull/26350)）
- 修复（relay-ops）：let the pre-drain auth gate tolerate an isolated auth 5xx（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26353](https://github.com/stablyai/orca/pull/26353)）
- 修复（relay）：skip idle rehome for hosts that reconnected under 3 minutes ago（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26355](https://github.com/stablyai/orca/pull/26355)）
- 修复（relay）：refuse host hellos fast when the database pool is timing them out; renewals jump the queue（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26362](https://github.com/stablyai/orca/pull/26362)）
- 新增（relay）：alert on cell disconnect bursts and database pool herds（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26363](https://github.com/stablyai/orca/pull/26363)）
- 修复（relay）：throttle the connection-reservations autovacuum so a run stops evicting the shared database cache（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26370](https://github.com/stablyai/orca/pull/26370)）
- 修复（relay）：latch rehome off only on a sql failure breach that outlasts a DB stall（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26371](https://github.com/stablyai/orca/pull/26371)）
- 修复（relay）：let the same-cap roll's post-roll verify outlast one DB stall（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26372](https://github.com/stablyai/orca/pull/26372)）

#### Reverted {#v1-4-224-reverted}

> Per-account Claude folders, the Node 24 requirement for remote hosts and the Windows hang watchdog were taken back out before release.

- 修复（claude）：activate account profiles and remove credential replay (Step 4 of 4)（[@brennanb2025](https://github.com/brennanb2025)，[#24434](https://github.com/stablyai/orca/pull/24434)）
- 修复（claude）：drop the repeated sign-in line in the account menu and name the right Settings page（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26405](https://github.com/stablyai/orca/pull/26405)）
- Revert Claude per-account folders (#24434, #26405) before release（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26638](https://github.com/stablyai/orca/pull/26638)）
- 新增（runtime）：require Node 24 for servers and remote hosts（[@nwparker](https://github.com/nwparker)，[#26171](https://github.com/stablyai/orca/pull/26171)）
- 回退（runtime）：temporarily restore the previous host Node minimum（[@nwparker](https://github.com/nwparker)，[#26823](https://github.com/stablyai/orca/pull/26823)）
- [CI] Enable the existing Windows hang watchdog and preserve restart evidence（[@nwparker](https://github.com/nwparker)，[#26763](https://github.com/stablyai/orca/pull/26763)）
- Roll back Windows hang watchdog activation（[@nwparker](https://github.com/nwparker)，[#26804](https://github.com/stablyai/orca/pull/26804)）

#### Tests, CI & maintenance {#v1-4-224-tests-ci-maintenance}

> Groundwork that is not switched on yet (folder-workspace agent launch, chat receipts, terminal layout checks), cleanup of the managed-server code, and faster, steadier test runs.

- 新增（agent-launch）：create a folder workspace and start its agent in one host operation（[@brennanb2025](https://github.com/brennanb2025)，[#26083](https://github.com/stablyai/orca/pull/26083)）
- 新增（native-chat）：add a chat-owned command receipt store（[@brennanb2025](https://github.com/brennanb2025)，[#26653](https://github.com/stablyai/orca/pull/26653)）
- 新增（runtime）：isolate the server behind a compatibility launcher（[@nwparker](https://github.com/nwparker)，[#26374](https://github.com/stablyai/orca/pull/26374)）
- 测试（terminal）：pin layout invariants the mirror refactor must keep（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26073](https://github.com/stablyai/orca/pull/26073)）
- terminal: window says where each new terminal goes (no behavior change)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26078](https://github.com/stablyai/orca/pull/26078)）
- 测试（terminal）：check the runtime's workspace layout against structural rules（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26673](https://github.com/stablyai/orca/pull/26673)）
- 测试（e2e）：layout oracle scenarios with window, headless serve and SSH（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26674](https://github.com/stablyai/orca/pull/26674)）
- 重构（tabs）：reuse the shared tab-order helper instead of three copies（[@brennanb2025](https://github.com/brennanb2025)，[#26704](https://github.com/stablyai/orca/pull/26704)）
- 重构（ssh-relay-runtime）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26889](https://github.com/stablyai/orca/pull/26889)）
- 重构（ssh-connect-managed）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26890](https://github.com/stablyai/orca/pull/26890)）
- 重构（ssh-orcad-lifecycle）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26891](https://github.com/stablyai/orca/pull/26891)）
- 重构（orcad-daemon-startup-cli）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26892](https://github.com/stablyai/orca/pull/26892)）
- 文档：remove stale internal reference documentation（[@nwparker](https://github.com/nwparker)，[#26328](https://github.com/stablyai/orca/pull/26328)）
- 修复（lint）：move the macOS input-source probe out of app.ts（[@brennanb2025](https://github.com/brennanb2025)，[#26643](https://github.com/stablyai/orca/pull/26643)）
- 修复（lint）：move knownAgentIds out of the session host（[@brennanb2025](https://github.com/brennanb2025)，[#26648](https://github.com/stablyai/orca/pull/26648)）
- 测试（native-chat）：fix main typecheck after the batched journal commit（[@brennanb2025](https://github.com/brennanb2025)，[#26781](https://github.com/stablyai/orca/pull/26781)）
- 修复：journal receipt test typecheck（[@AmethystLiang](https://github.com/AmethystLiang)，[#26788](https://github.com/stablyai/orca/pull/26788)）
- Run only the intended performance contract suites（[@nwparker](https://github.com/nwparker)，[#26121](https://github.com/stablyai/orca/pull/26121)）
- [CI] Speed up composer decision tests by reusing their narrow module（[@nwparker](https://github.com/nwparker)，[#26179](https://github.com/stablyai/orca/pull/26179)）
- [CI] Reduce repeated persistence imports in UI-state tests（[@nwparker](https://github.com/nwparker)，[#26185](https://github.com/stablyai/orca/pull/26185)）
- [CI] Make SSH permission probe fixture independent of real PID reuse（[@nwparker](https://github.com/nwparker)，[#26190](https://github.com/stablyai/orca/pull/26190)）
- [CI] test: make remote upload cases independent of clocks and initial writes（[@nwparker](https://github.com/nwparker)，[#26202](https://github.com/stablyai/orca/pull/26202)）
- [CI] test: avoid loading the full Store for renderer fixture builders（[@nwparker](https://github.com/nwparker)，[#26217](https://github.com/stablyai/orca/pull/26217)）
- [CI] test: advance retry clocks instead of waiting in real time（[@nwparker](https://github.com/nwparker)，[#26220](https://github.com/stablyai/orca/pull/26220)）
- [CI] test: keep real SSH command contracts on Node（[@nwparker](https://github.com/nwparker)，[#26226](https://github.com/stablyai/orca/pull/26226)）
- [CI] test: load Activity fixture builders without importing the page（[@nwparker](https://github.com/nwparker)，[#26229](https://github.com/stablyai/orca/pull/26229)）
- [CI] Reuse first SQLite fixture construction in five persistence suites（[@nwparker](https://github.com/nwparker)，[#26231](https://github.com/stablyai/orca/pull/26231)）
- [CI] Import Activity functions directly in eight test suites（[@nwparker](https://github.com/nwparker)，[#26237](https://github.com/stablyai/orca/pull/26237)）
- [CI] test(persistence): reuse first constructors in six more suites（[@nwparker](https://github.com/nwparker)，[#26250](https://github.com/stablyai/orca/pull/26250)）
- 性能（renderer）：load Radix primitives through public package entries（[@nwparker](https://github.com/nwparker)，[#26256](https://github.com/stablyai/orca/pull/26256)）
- [CI] test(runtime): advance injected teardown policy clocks（[@nwparker](https://github.com/nwparker)，[#26267](https://github.com/stablyai/orca/pull/26267)）
- [CI] test(startup): advance mocked display readiness polling（[@nwparker](https://github.com/nwparker)，[#26283](https://github.com/stablyai/orca/pull/26283)）
- [CI] ci: run full pull-request unit tests across ten shards（[@nwparker](https://github.com/nwparker)，[#26295](https://github.com/stablyai/orca/pull/26295)）
- [CI] Keep native watcher contracts in Node and reset runtime test caches（[@nwparker](https://github.com/nwparker)，[#26315](https://github.com/stablyai/orca/pull/26315)）
- [CI] Speed up terminal probe tests with controlled policy clocks（[@nwparker](https://github.com/nwparker)，[#26327](https://github.com/stablyai/orca/pull/26327)）
- CI（e2e）：move apt off the Azure mirror on runner images that use a mirror list（[@OrcaWin](https://github.com/OrcaWin)，[#26335](https://github.com/stablyai/orca/pull/26335)）
- [CI] Keep the structured-session compatibility manifest within the file limit（[@nwparker](https://github.com/nwparker)，[#26342](https://github.com/stablyai/orca/pull/26342)）
- [CI] Reset the canonical PR stack cache in GraphQL test fixtures（[@nwparker](https://github.com/nwparker)，[#26346](https://github.com/stablyai/orca/pull/26346)）
- [CI] test: remove repeated idle polling from PTY cleanup（[@nwparker](https://github.com/nwparker)，[#26360](https://github.com/stablyai/orca/pull/26360)）
- 测试：isolate hook fixture connections from fake timers（[@brennanb2025](https://github.com/brennanb2025)，[#26369](https://github.com/stablyai/orca/pull/26369)）
- [CI] test: remove idle polling from compaction contracts（[@nwparker](https://github.com/nwparker)，[#26373](https://github.com/stablyai/orca/pull/26373)）
- [CI] test: load GitHub operations from their public modules（[@nwparker](https://github.com/nwparker)，[#26384](https://github.com/stablyai/orca/pull/26384)）
- [CI] test: keep relay correction fixtures alive through the minimum connection age（[@nwparker](https://github.com/nwparker)，[#26389](https://github.com/stablyai/orca/pull/26389)）
- [CI] test: speed terminal comparisons and retry-policy checks（[@nwparker](https://github.com/nwparker)，[#26396](https://github.com/stablyai/orca/pull/26396)）
- [CI] ci: stop cache-test edits from starting five warm-up runners（[@nwparker](https://github.com/nwparker)，[#26399](https://github.com/stablyai/orca/pull/26399)）
- [CI] ci: restore five unit runners and prune source-only tests（[@nwparker](https://github.com/nwparker)，[#26437](https://github.com/stablyai/orca/pull/26437)）
- 测试（native-chat）：make the in-place transcript replacement test deterministic（[@OrcaWin](https://github.com/OrcaWin)，[#26532](https://github.com/stablyai/orca/pull/26532)）
- [CI] test: remove duplicated cases and source-text checks（[@nwparker](https://github.com/nwparker)，[#26546](https://github.com/stablyai/orca/pull/26546)）
- 测试（e2e）：retry Hangul-digit attempts the input method never delivered（[@OrcaWin](https://github.com/OrcaWin)，[#26566](https://github.com/stablyai/orca/pull/26566)）
- [CI] test: reduce session imports and mocked recovery waits（[@nwparker](https://github.com/nwparker)，[#26567](https://github.com/stablyai/orca/pull/26567)）
- [CI] ci: avoid package and browser jobs for a shared unit fixture（[@nwparker](https://github.com/nwparker)，[#26575](https://github.com/stablyai/orca/pull/26575)）
- [CI] Reduce repeated test work and fix Windows cleanup and IME confirmation（[@nwparker](https://github.com/nwparker)，[#26608](https://github.com/stablyai/orca/pull/26608)）
- [CI] Revert library patches introduced by test optimization（[@nwparker](https://github.com/nwparker)，[#26727](https://github.com/stablyai/orca/pull/26727)）
- [CI] Reduce repeated test work and skip unrelated server matrices（[@nwparker](https://github.com/nwparker)，[#26711](https://github.com/stablyai/orca/pull/26711)）
- [CI] Reduce repeated test work and use pinned Bun for localization extraction（[@nwparker](https://github.com/nwparker)，[#26806](https://github.com/stablyai/orca/pull/26806)）
- 测试（e2e）：keep two host sections in the catalog-retry reconnect test（[@OrcaWin](https://github.com/OrcaWin)，[#26838](https://github.com/stablyai/orca/pull/26838)）
- [CI] Consolidate related tests and advance transcript waits with the existing virtual clock（[@nwparker](https://github.com/nwparker)，[#26874](https://github.com/stablyai/orca/pull/26874)）
- [CI] Run mobile Vitest tests in stock Node worker threads（[@nwparker](https://github.com/nwparker)，[#26899](https://github.com/stablyai/orca/pull/26899)）

### 新贡献者 {#v1-4-224-contributors}

- [@genni613](https://github.com/genni613) 首次贡献于 [#26580](https://github.com/stablyai/orca/pull/26580)

---

**完整变更对照：** [v1.4.223...v1.4.224](https://github.com/stablyai/orca/compare/v1.4.223...v1.4.224)

## v1.4.223 实验性 Native Chat 可回退对话，SSH 重连后保留标签 {#v1-4-223}

2026年10月8日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.223)

感谢使用 Orca，也感谢一直以来的支持。

Orca Server 2.0 is coming soon, with improvements to make remote work more reliable. The current Remote Server remains experimental and may have bugs.

### 简要说明 {#v1-4-223-short}

- **Native chat (experimental):** With "Use updated structured Native Chat" turned on (Settings → Chat UI), Grok now opens as a 结构化聊天 on this computer and on paired Orca servers; SSH and WSL keep the terminal chat. You can rewind a conversation to an earlier message, search the model list, pick workspace files by typing `@`, and set text size, code size, width and contrast, or match your terminal, on a new Settings → Chat page. Chats are named after their first message, alert you when they stop to ask for approval, keep an unsent draft through a reload or quit, and use the Command and Arguments saved in Settings → Agents. Claude chats now open for API-key users, and Windows chats no longer refuse to start.
- **SSH workspaces:** Open files, live agent tabs and paused Claude or Codex resume offers survive an SSH reconnect and a restart, and tabs you closed long ago no longer come back as empty shells. Clicking an SSH worktree whose last tab you closed opens a terminal again.
- **Remote servers and the phone:** A paired terminal accepts typing again after its host app relaunches, remote browser tabs come back after a network drop, and the phone keeps every terminal after `orca serve` restarts. Starting an agent from the phone shows its tab right away and no longer moves your desktop window; creating a workspace on a remote host no longer pulls other connected desktops to it.
- **Agents and terminals:** Long or multi-line agent launch commands on macOS and Linux reach the agent whole instead of being cut off or run line by line, and startup commands now use a real Enter. A pane you close just before quitting no longer comes back, and a pane dragged into its own tab no longer appears in two tabs. Claude's spinner clears when you cancel with Escape, and Codex keeps its working status when Escape only closes search. Orca no longer rewrites your `~/.codex` hooks on every Codex launch, and helper processes it starts for Claude, Codex and OpenCode stop when Orca quits or crashes.
- **Accounts and agents:** Switching Claude accounts keeps your MCP server sign-ins. Pi and OMP show their background helpers as rows, Rovo Dev is detected through `acli`, and Grok 4.7 is in the model list.
- **Sidebar and workspaces:** Orca remembers whether the left sidebar was open. The agent activity view gets filters, a right-click menu and multi-select. A workspace that contains nested worktrees can be deleted together with them, in the background. Revealing a remote workspace no longer expands your local sections, and the Dock badge clears when you visit the workspace.
- **Files and search:** Audio and video files play in Orca. Quarto and R Markdown files are highlighted. You can reveal a changed file in Source Control, or a file path in a terminal, in Finder or File Explorer. Quick Open matches multi-part queries and opens files at the requested location, and abandoned searches stop.
- **Tasks and review:** GitHub Projects Board views show as a kanban you can drag cards across, private Linear images in task descriptions load, and GitLab merge request and issue actions in SSH workspaces reach the right server.
- **Also:** A completion sound now plays for an agent that finishes right after another, and screenshot markup has an eraser.

### Known issues {#v1-4-223-known-issues}

**Native chats from v1.4.217 or older** *(release manager: drop this item if it does not apply)*: If you used Native Chat (experimental) on v1.4.217 or older and update straight to v1.4.223, your earlier Native Chats won't appear. Their files stay on disk (#26038).

**Terminals after updating:** This version starts a new terminal background service for new terminals. Terminals that were already open keep running on the previous one, so changes such as whole long launch commands apply only to terminals opened after the update. This also means the OpenCode, Pi and Qoder detection improvements from v1.4.222 now work in new terminals without restarting anything.

**Relaunching from shell history:** When an agent's launch command is long or spans several lines, the shell history holds a short one-time line instead, so pressing up-arrow and Enter does not start the agent again (#23962).

**Workspaces created from the phone:** Creating a workspace from an issue, pull request or Linear item with an agent on the phone still moves the desktop to that workspace (#26025).

**Downgrading:** Orca now refuses to install versions older than v1.4.214 from its version picker. To go back to one of those, run `orca profile state rollback --latest-json` with Orca closed, then install the old version by hand (#23262).

**Windows on ARM:** The ARM64 package ships an x64 `orca.exe` command-line tool. Windows 11 on ARM runs it under emulation. Windows 10 on ARM can't run it, so the `orca` command does not work there (#24094).

**OpenCode 2:** If you update from v1.4.219 or earlier, OpenCode 2 panes that were already running may show no status until you restart OpenCode in them. If you downgrade Orca after updating, duplicate OpenCode status plugins are left behind. After `opencode run` exits, its pane can keep showing "Done"; a fix is pending in #24472.

**Claude folder trust:** Folder pre-trust is on by default (Settings → Agents → "Trust the folder when Orca starts an agent"). On Alpine WSL, Orca can't copy the file permissions it needs, so Claude shows its own trust prompt instead (#23744).

---

### 产品体验 {#v1-4-223-product}

#### Native chat (experimental) {#v1-4-223-native-chat-experimental-}

> Grok can run as a 结构化聊天, you can rewind a conversation, search models, mention files with @ and tune how chats look, chats get names and approval alerts, drafts and Stops keep your text, and chats start more reliably for Codex, API-key Claude users, Windows and custom agent commands.

- 修复（native-chat）：reasoning rows with a real open/finished state, and readable Claude thinking（[@brennanb2025](https://github.com/brennanb2025)，[#19221](https://github.com/stablyai/orca/pull/19221)）
- 新增：confirmed conversation rewind from 结构化聊天 messages（[@brennanb2025](https://github.com/brennanb2025)，[#19338](https://github.com/stablyai/orca/pull/19338)）
- 新增（native-chat）：Grok as a 结构化聊天 over the Agent Client Protocol（[@brennanb2025](https://github.com/brennanb2025)，[#25225](https://github.com/stablyai/orca/pull/25225)）
- 新增（native-chat）：record fresh sessions after failed restoration（[@brennanb2025](https://github.com/brennanb2025)，[#25747](https://github.com/stablyai/orca/pull/25747)）
- 新增（native-chat）：searchable model picker（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26011](https://github.com/stablyai/orca/pull/26011)）
- 新增（native-chat）：suggest files on @ and name the triggers（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26017](https://github.com/stablyai/orca/pull/26017)）
- 新增：chat appearance settings: text size, code size, width（[@brennanb2025](https://github.com/brennanb2025)，[#25657](https://github.com/stablyai/orca/pull/25657)）
- 新增：chat contrast and "Match terminal interface"（[@brennanb2025](https://github.com/brennanb2025)，[#25659](https://github.com/stablyai/orca/pull/25659)）
- 新增：a Chat settings page for structured Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#25685](https://github.com/stablyai/orca/pull/25685)）
- Soften Native Chat colors and code surfaces（[@brennanb2025](https://github.com/brennanb2025)，[#25651](https://github.com/stablyai/orca/pull/25651)）
- 显示：Native Chat tool calls as plain sentences（[@brennanb2025](https://github.com/brennanb2025)，[#25654](https://github.com/stablyai/orca/pull/25654)）
- 修复（native-chat）：let code blocks grow to their full height（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26021](https://github.com/stablyai/orca/pull/26021)）
- 修复（native-chat）：show the message rail from the first user message（[@brennanb2025](https://github.com/brennanb2025)，[#25707](https://github.com/stablyai/orca/pull/25707)）
- 新增（native-chat）：a solid, fading Jump to latest（[@brennanb2025](https://github.com/brennanb2025)，[#25759](https://github.com/stablyai/orca/pull/25759)）
- Name native Claude and Codex chats after their first message（[@brennanb2025](https://github.com/brennanb2025)，[#25724](https://github.com/stablyai/orca/pull/25724)）
- 给予：Native Chat names one source for tabs, sidebar and AI Vault (list and search)（[@brennanb2025](https://github.com/brennanb2025)，[#25986](https://github.com/stablyai/orca/pull/25986)）
- 修复（native-chat）：alert when a 结构化聊天 asks for approval or input mid-turn（[@brennanb2025](https://github.com/brennanb2025)，[#25766](https://github.com/stablyai/orca/pull/25766)）
- 修复（native-chat）：an unsent draft survives a reload or quit（[@brennanb2025](https://github.com/brennanb2025)，[#24905](https://github.com/stablyai/orca/pull/24905)）
- 新增（native-chat）：the chat reads "Stopping…" from your Stop until the turn actually ends（[@brennanb2025](https://github.com/brennanb2025)，[#24369](https://github.com/stablyai/orca/pull/24369)）
- 新增（native-chat）：keep a message a Stop took back on screen, with one stop row after it（[@brennanb2025](https://github.com/brennanb2025)，[#25051](https://github.com/stablyai/orca/pull/25051)）
- 修复（native-chat）：keep a Stop's note with the turn it waited for and stopped（[@brennanb2025](https://github.com/brennanb2025)，[#25056](https://github.com/stablyai/orca/pull/25056)）
- 新增（native-chat）：publish where each submission was sent and the turn a stopped one was answered into（[@brennanb2025](https://github.com/brennanb2025)，[#25073](https://github.com/stablyai/orca/pull/25073)）
- 修复（native-chat）：hold a queued message until the turn ahead opens (follow-up to the Stop-event plan, fixes STA-9348)（[@brennanb2025](https://github.com/brennanb2025)，[#25217](https://github.com/stablyai/orca/pull/25217)）
- 修复（native-chat）：a Stop Codex took settles the message whose turn never opened (follow-up to #25217)（[@brennanb2025](https://github.com/brennanb2025)，[#26105](https://github.com/stablyai/orca/pull/26105)）
- 修复（native-chat）：queued messages carry on in order after any turn, and nothing sends by itself after a restart（[@brennanb2025](https://github.com/brennanb2025)，[#24586](https://github.com/stablyai/orca/pull/24586)）
- 修复（native-chat）：keep a message accepted before a quit or crash as a held card（[@brennanb2025](https://github.com/brennanb2025)，[#24660](https://github.com/stablyai/orca/pull/24660)）
- 修复（native-chat）：the agent's exit ends its record, and an unconfirmed stop is joined instead of held（[@brennanb2025](https://github.com/brennanb2025)，[#24862](https://github.com/stablyai/orca/pull/24862)）
- 显示：a tool call you stopped as interrupted, not failed（[@brennanb2025](https://github.com/brennanb2025)，[#25181](https://github.com/stablyai/orca/pull/25181)）
- 修复（native-chat）：a long reply keeps its Working bar and Stop after a reload, from the host's turn（[@brennanb2025](https://github.com/brennanb2025)，[#25751](https://github.com/stablyai/orca/pull/25751)）
- 修复（native-chat）：a prompt card owns the chat input until its answer lands (terminal-backed chat, desktop and phone)（[@brennanb2025](https://github.com/brennanb2025)，[#25761](https://github.com/stablyai/orca/pull/25761)）
- 修复（native-chat）：sending brings the latest into view and follows the reply（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24514](https://github.com/stablyai/orca/pull/24514)）
- 修复（native-chat）：a chat you return to drops background tasks that finished while it was hidden（[@brennanb2025](https://github.com/brennanb2025)，[#24305](https://github.com/stablyai/orca/pull/24305)）
- 修复（native-chat）：stop flashing a reconnecting line on a stream drop（[@brennanb2025](https://github.com/brennanb2025)，[#24898](https://github.com/stablyai/orca/pull/24898)）
- 修复（native-chat）：mark a chat whose start failed on its tab and workspace row（[@brennanb2025](https://github.com/brennanb2025)，[#24904](https://github.com/stablyai/orca/pull/24904)）
- 修复（native-chat）：say each chat outcome once and drop internal-only surfaces（[@brennanb2025](https://github.com/brennanb2025)，[#24595](https://github.com/stablyai/orca/pull/24595)）
- 修复（native-chat）：chat copy that promised a retry, an update, or a coming change（[@brennanb2025](https://github.com/brennanb2025)，[#25157](https://github.com/stablyai/orca/pull/25157)）
- 新增（native-chat）：one notice card above the message box for the chat's own errors（[@brennanb2025](https://github.com/brennanb2025)，[#25835](https://github.com/stablyai/orca/pull/25835)）
- 修复（native-chat）：say which retry a Claude retry is on and what it last failed with（[@brennanb2025](https://github.com/brennanb2025)，[#25818](https://github.com/stablyai/orca/pull/25818)）
- 修复（native-chat）：a sent image no longer flickers to its "Pasted image" placeholder while the agent works（[@brennanb2025](https://github.com/brennanb2025)，[#25664](https://github.com/stablyai/orca/pull/25664)）
- 新增（native-chat）：attach several files from one picker selection（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23956](https://github.com/stablyai/orca/pull/23956)）
- 新增（native-chat）：copy chat images from the right-click menu（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24161](https://github.com/stablyai/orca/pull/24161)）
- 新增（native-chat）：answer /context in chat view for OpenClaude and OMP（[@brennanb2025](https://github.com/brennanb2025)，[#22294](https://github.com/stablyai/orca/pull/22294)）
- 新增（floating-workspace）：render the floating panel through the shared workspace surface（[@brennanb2025](https://github.com/brennanb2025)，[#22302](https://github.com/stablyai/orca/pull/22302)）
- 修复（native-chat）：start a Codex chat without waiting on the background model probe（[@brennanb2025](https://github.com/brennanb2025)，[#23831](https://github.com/stablyai/orca/pull/23831)）
- 修复：Codex chat creation after its own model listing fails（[@brennanb2025](https://github.com/brennanb2025)，[#25754](https://github.com/stablyai/orca/pull/25754)）
- 修复（claude）：start a Claude chat with its saved options and send the first message at once（[@brennanb2025](https://github.com/brennanb2025)，[#25152](https://github.com/stablyai/orca/pull/25152)）
- 修复（claude）：API-key Claude users are told they're not signed in（[@brennanb2025](https://github.com/brennanb2025)，[#25163](https://github.com/stablyai/orca/pull/25163)）
- 修复（native-chat）：start Windows chats without reading process creation times（[@brennanb2025](https://github.com/brennanb2025)，[#25718](https://github.com/stablyai/orca/pull/25718)）
- 修复（native-chat）：ignore the terminal launch command when starting a Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#25720](https://github.com/stablyai/orca/pull/25720)）
- 修复（native-chat）：honor saved agent Command and Arguments（[@brennanb2025](https://github.com/brennanb2025)，[#25721](https://github.com/stablyai/orca/pull/25721)）
- 修复（native-chat）：refuse a Command that can't run instead of silently running the stock CLI（[@brennanb2025](https://github.com/brennanb2025)，[#25667](https://github.com/stablyai/orca/pull/25667)）
- 修复：transcript replacements racing chat publication（[@nwparker](https://github.com/nwparker)，[#25965](https://github.com/stablyai/orca/pull/25965)）
- 修复（mobile-chat）：a failed message's text is added to the draft, and an expired resend no longer blocks that text（[@brennanb2025](https://github.com/brennanb2025)，[#25149](https://github.com/stablyai/orca/pull/25149)）

#### Orchestration & agent launch {#v1-4-223-orchestration-agent-launch}

> Agents started from the phone get their tab at once and leave the desktop where it is, an existing chat can be an orchestration worker, and finished workers stop being recovered over and over.

- 新增（agent-launch）：show an agent's tab at once, where the caller asked（[@brennanb2025](https://github.com/brennanb2025)，[#25430](https://github.com/stablyai/orca/pull/25430)）
- 修复（agent-launch）：a phone's launch leaves the desktop window where it is（[@brennanb2025](https://github.com/brennanb2025)，[#26025](https://github.com/stablyai/orca/pull/26025)）
- 新增（agent-launch）：host-assigned caller identity and a launch record written when the tab exists (unification 1 of 3)（[@brennanb2025](https://github.com/brennanb2025)，[#24934](https://github.com/stablyai/orca/pull/24934)）
- 新增（orchestration）：a Native Chat can be a dispatch worker, like a terminal agent（[@brennanb2025](https://github.com/brennanb2025)，[#22972](https://github.com/stablyai/orca/pull/22972)）
- 新增（orchestration）：a Native Chat gets the orchestration pointer a CLI agent gets, through the same send as your messages（[@brennanb2025](https://github.com/brennanb2025)，[#25078](https://github.com/stablyai/orca/pull/25078)）
- 新增（native-chat）：show which agent a chat message is from, and open it（[@brennanb2025](https://github.com/brennanb2025)，[#25888](https://github.com/stablyai/orca/pull/25888)）
- 修复（orchestration）：serve a /clear'd native-chat worker through the session running it（[@brennanb2025](https://github.com/brennanb2025)，[#25875](https://github.com/stablyai/orca/pull/25875)）
- 修复（orchestration）：word the worker brief for a chat worker（[@brennanb2025](https://github.com/brennanb2025)，[#26036](https://github.com/stablyai/orca/pull/26036)）
- 停止：repeated recovery of finished workers（[@nwparker](https://github.com/nwparker)，[#25679](https://github.com/stablyai/orca/pull/25679)）

#### Agents, accounts & integrations {#v1-4-223-agents-accounts-integrations}

> Switching Claude accounts keeps MCP sign-ins, Codex hook approval no longer rewrites ~/.codex on every launch, Escape no longer leaves Claude or Codex status wrong, helper processes stop when Orca quits, Pi and OMP show their background helpers, Rovo Dev is detected, and Grok 4.7 is listed.

- 修复（claude-accounts）：preserve shared MCP OAuth credentials across an account switch（[@tomarai85](https://github.com/tomarai85)，[#21931](https://github.com/stablyai/orca/pull/21931)）
- 修复（codex）：write Orca's hook into ~/.codex only when something changed（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25743](https://github.com/stablyai/orca/pull/25743)）
- 修复（codex）：approve Orca's hook in managed Codex homes with Codex's own hash（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25742](https://github.com/stablyai/orca/pull/25742)）
- 修复（codex）：never write a Codex config.toml that Codex can't load, and approve both symlink spellings（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25741](https://github.com/stablyai/orca/pull/25741)）
- 修复：Claude's stuck spinner after Escape cancellation（[@nwparker](https://github.com/nwparker)，[#25846](https://github.com/stablyai/orca/pull/25846)）
- 修复（codex）：keep working status when Escape closes search or permissions（[@nwparker](https://github.com/nwparker)，[#25769](https://github.com/stablyai/orca/pull/25769)）
- 等待：for Codex's live composer before pasting linked issue drafts（[@nwparker](https://github.com/nwparker)，[#25779](https://github.com/stablyai/orca/pull/25779)）
- 修复：premature Claude automation completion and inherited CI failures（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24878](https://github.com/stablyai/orca/pull/24878)）
- 新增（pi）：show Pi and OMP background children as rows（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23201](https://github.com/stablyai/orca/pull/23201)）
- 修复（omp）：stop the tab spinner sticking after subagents finish（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23662](https://github.com/stablyai/orca/pull/23662)）
- 修复（agent-status）：retire a removed worktree's hook-status rows（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23881](https://github.com/stablyai/orca/pull/23881)）
- 修复：stop Claude and agent helper processes when Orca quits or crashes (STA-9254, 1 of 2)（[@brennanb2025](https://github.com/brennanb2025)，[#25715](https://github.com/stablyai/orca/pull/25715)）
- 修复：stop Codex and OpenCode helper servers when Orca quits or crashes (STA-9254, 2 of 2)（[@brennanb2025](https://github.com/brennanb2025)，[#25753](https://github.com/stablyai/orca/pull/25753)）
- 修复（rovo）：detect and launch Rovo Dev through acli（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25981](https://github.com/stablyai/orca/pull/25981)）
- 修复（grok）：add Grok 4.7 to the fallback model catalog（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25976](https://github.com/stablyai/orca/pull/25976)）

#### 终端 {#v1-4-223-terminal}

> Long agent launch commands arrive whole, startup commands use a real Enter, and closed or dragged-out panes no longer come back or appear twice.

- Stage long agent launch lines where they are typed, so they arrive whole (step 2 of 7)（[@brennanb2025](https://github.com/brennanb2025)，[#23962](https://github.com/stablyai/orca/pull/23962)）
- 修复（terminal）：submit startup commands with Enter on every platform（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23672](https://github.com/stablyai/orca/pull/23672)）
- 修复（terminal）：keep a pane closed just before quit from coming back on relaunch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25711](https://github.com/stablyai/orca/pull/25711)）
- 重构（terminal）：move a dragged-out pane in main before the window opens its tab（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25380](https://github.com/stablyai/orca/pull/25380)）
- 修复：ownership for terminal and chat file drops (STA-6940, PR 1/6)（[@brennanb2025](https://github.com/brennanb2025)，[#25749](https://github.com/stablyai/orca/pull/25749)）

#### SSH, remote servers & phone {#v1-4-223-ssh-remote-servers-phone}

> SSH workspaces keep their tabs, open files and resume offers across reconnects and restarts, and paired terminals, remote browser tabs and phone terminal lists recover after a host restarts or the network drops.

- 修复（session）：at startup, a local copy never overrides an SSH-owned workspace's own copy（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26098](https://github.com/stablyai/orca/pull/26098)）
- 修复（ssh）：bind reattached SSH panes into the target's own session partition（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26088](https://github.com/stablyai/orca/pull/26088)）
- 修复（ssh）：open a terminal in an emptied worktree when the host holds a tab this client can't place（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23213](https://github.com/stablyai/orca/pull/23213)）
- 修复（ai-vault）：resume sessions whose worktree was deleted（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24236](https://github.com/stablyai/orca/pull/24236)）
- 修复（remote-runtime）：a paired terminal accepts input again after its host app relaunches（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25736](https://github.com/stablyai/orca/pull/25736)）
- 修复（remote-browser）：host client browser pages again when a paired host comes back after an outage（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25827](https://github.com/stablyai/orca/pull/25827)）
- 修复（serve）：keep every terminal on the phone after orca serve restarts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26022](https://github.com/stablyai/orca/pull/26022)）
- 修复（runtime）：build the host terminal model when a phone opens an idle terminal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25780](https://github.com/stablyai/orca/pull/25780)）
- 保持：remote worktree creation from navigating paired clients（[@nwparker](https://github.com/nwparker)，[#25793](https://github.com/stablyai/orca/pull/25793)）
- 修复：recover deleted Active Server defaults and preserve editor hosts（[@nwparker](https://github.com/nwparker)，[#25938](https://github.com/stablyai/orca/pull/25938)）

#### Workspaces, sidebar & tabs {#v1-4-223-workspaces-sidebar-tabs}

> The sidebar remembers if it was open, the activity view gets filters and multi-select, nested worktrees can be deleted, host sections collapse independently, and tab tooltips and scrolling are calmer.

- 修复（sidebar）：remember whether the left sidebar is open across restarts（[@INatsukiI](https://github.com/INatsukiI)，[#22682](https://github.com/stablyai/orca/pull/22682)）
- 新增（activity）：filters, matching header, row right-click menu, and stay in the activity view（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25376](https://github.com/stablyai/orca/pull/25376)）
- 新增（activity）：multi-select agent rows with a bulk right-click menu（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25486](https://github.com/stablyai/orca/pull/25486)）
- 新增：confirmed deletion of nested worktrees（[@nwparker](https://github.com/nwparker)，[#25668](https://github.com/stablyai/orca/pull/25668)）
- Run nested workspace deletion in the background（[@nwparker](https://github.com/nwparker)，[#25975](https://github.com/stablyai/orca/pull/25975)）
- 保持：local pins collapsed when revealing a remote workspace（[@nwparker](https://github.com/nwparker)，[#25836](https://github.com/stablyai/orca/pull/25836)）
- 保持：sidebar section collapse independent across execution hosts（[@nwparker](https://github.com/nwparker)，[#25944](https://github.com/stablyai/orca/pull/25944)）
- 修复：send picker reveal under collapsed hosts and parents（[@nwparker](https://github.com/nwparker)，[#25950](https://github.com/stablyai/orca/pull/25950)）
- 修复（dock）：clear stale workspace unread counts（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24877](https://github.com/stablyai/orca/pull/24877)）
- 修复（worktrees）：decide setup before git worktree add on the host's create（[@brennanb2025](https://github.com/brennanb2025)，[#26006](https://github.com/stablyai/orca/pull/26006)）
- 修复（worktrees）：when the host can't fetch a remote base, create from the local branch and say so（[@brennanb2025](https://github.com/brennanb2025)，[#26009](https://github.com/stablyai/orca/pull/26009)）
- 修复（repos）：stop reporting clones that never ran as successful（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23770](https://github.com/stablyai/orca/pull/23770)）
- 修复（tabs）：stop tab and close tooltips firing while grazing the strip（[@AmethystLiang](https://github.com/AmethystLiang)，[#25808](https://github.com/stablyai/orca/pull/25808)）
- 性能（tab-bar）：scrolling the tab strip no longer re-renders every tab（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24240](https://github.com/stablyai/orca/pull/24240)）

#### Editor, files & search {#v1-4-223-editor-files-search}

> Audio and video files play in Orca, Quarto and R Markdown are highlighted, files can be revealed in your file manager, and Quick Open finds and opens files more precisely.

- 新增：stream desktop audio and video previews with native controls（[@nwparker](https://github.com/nwparker)，[#26120](https://github.com/stablyai/orca/pull/26120)）
- 新增（editor）：highlight Quarto and R Markdown files instead of plain text（[@ykunisato](https://github.com/ykunisato)，[#17772](https://github.com/stablyai/orca/pull/17772)）
- 新增（files）：reveal Source Control files and terminal file links in the file manager（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24502](https://github.com/stablyai/orca/pull/24502)）
- 改进：Quick Open matching, file locations and recent history（[@nwparker](https://github.com/nwparker)，[#25371](https://github.com/stablyai/orca/pull/25371)）
- Cancel abandoned file searches and prevent stale results（[@nwparker](https://github.com/nwparker)，[#25370](https://github.com/stablyai/orca/pull/25370)）
- 限制：file-search inventories and release abandoned Markdown data（[@nwparker](https://github.com/nwparker)，[#25369](https://github.com/stablyai/orca/pull/25369)）
- 修复（markdown）：strengthen dark table grid lines（[@nwparker](https://github.com/nwparker)，[#25653](https://github.com/stablyai/orca/pull/25653)）

#### Source control, tasks & issues {#v1-4-223-source-control-tasks-issues}

> GitHub Projects Board views work as a kanban, review cards poll GitHub less, private Linear images load, and GitLab writes in SSH workspaces reach the right server.

- 新增（github-projects）：render Board project views as a kanban with drag-and-drop（[@NaoyaTatetsu](https://github.com/NaoyaTatetsu)，[#19074](https://github.com/stablyai/orca/pull/19074)）
- Refresh visible reviews automatically and stop settled merged polling（[@nwparker](https://github.com/nwparker)，[#25788](https://github.com/stablyai/orca/pull/25788)）
- 修复：private Linear images in task descriptions（[@nwparker](https://github.com/nwparker)，[#25849](https://github.com/stablyai/orca/pull/25849)）
- 修复（jira）：tolerate malformed nested Jira status fields（[@brennanb2025](https://github.com/brennanb2025)，[#25656](https://github.com/stablyai/orca/pull/25656)）
- 修复（git）：fall back to branch-safe author names for prefixes（[@nwparker](https://github.com/nwparker)，[#25984](https://github.com/stablyai/orca/pull/25984)）
- 修复（gitlab）：route SSH workspace writes through GITLAB_HOST（[@nwparker](https://github.com/nwparker)，[#25985](https://github.com/stablyai/orca/pull/25985)）

#### Browser, feedback & notifications {#v1-4-223-browser-feedback-notifications}

> Screenshot markup gets an eraser, Comet is found on Windows, every completion sound plays, and oversized feedback screenshots are re-encoded to fit without losing detail.

- 新增（browser）：add an eraser to screenshot markup（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24801](https://github.com/stablyai/orca/pull/24801)）
- 修复（browser）：detect Comet in its Windows vendor directory（[@nwparker](https://github.com/nwparker)，[#25983](https://github.com/stablyai/orca/pull/25983)）
- 修复（notifications）：replay completion sounds reliably（[@DEOWL-kan](https://github.com/DEOWL-kan)，[#15940](https://github.com/stablyai/orca/pull/15940)）
- 修复（feedback）：optimize oversized screenshots without losing detail（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23664](https://github.com/stablyai/orca/pull/23664)）

#### Profiles, settings & languages {#v1-4-223-profiles-settings-languages}

> Profiles save with less work at quit and update and keep saving after the app stalls, and Japanese and Chinese wording is fixed and translated.

- 回收：automatic profile JSON snapshots with safe recovery and downgrade（[@OrcaWin](https://github.com/OrcaWin)，[#23262](https://github.com/stablyai/orca/pull/23262)）
- 保持：profile saving alive after a stalled main loop（[@AmethystLiang](https://github.com/AmethystLiang)，[#25318](https://github.com/stablyai/orca/pull/25318)）
- 修复（i18n）：polish Japanese onboarding checklist copy（[@tb-soshiro](https://github.com/tb-soshiro)，[#19035](https://github.com/stablyai/orca/pull/19035)）
- 修复（i18n）：fix garbled Japanese name suggestion and reversed ja/zh quotes（[@pinelibg](https://github.com/pinelibg)，[#25255](https://github.com/stablyai/orca/pull/25255)）
- 杂项（i18n）：translate 76 new keys to es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#25719](https://github.com/stablyai/orca/pull/25719)）
- 杂项（i18n）：use 智能体 for Chinese Agent copy（[@AmethystLiang](https://github.com/AmethystLiang)，[#25767](https://github.com/stablyai/orca/pull/25767)）

#### Relay service {#v1-4-223-relay-service}

> Server-side capacity, deploy and monitoring work for Orca's relay service.

- 新增（relay）：drain pace window as a reviewed same-cap input, with drain-aware 503 gates（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25639](https://github.com/stablyai/orca/pull/25639)）
- 新增（relay）：report lane service times, 503 causes, per-site hold p99 and a director-vs-cell lock-wait split（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25645](https://github.com/stablyai/orca/pull/25645)）
- 修复（relay）：commit the cell counter in one round trip; cells boot without the database（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25765](https://github.com/stablyai/orca/pull/25765)）
- 修复（relay）：read reconcile's counter units after the cell lock（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25638](https://github.com/stablyai/orca/pull/25638)）
- 新增（relay）：one-command director deploy driver（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25642](https://github.com/stablyai/orca/pull/25642)）
- 修复（relay）：deploy driver builds the checked commit, prompts on their own line, summarises progress（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25755](https://github.com/stablyai/orca/pull/25755)）
- 新增（relay）：give Asia cell c34 a promotion wave so it can become a general cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25757](https://github.com/stablyai/orca/pull/25757)）
- 杂项（relay）：move Asia cell c34 to the general same-cap lists after promotion（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25758](https://github.com/stablyai/orca/pull/25758)）

#### Tests, CI & maintenance {#v1-4-223-tests-ci-maintenance}

> Groundwork that is not switched on yet (Claude account profiles, terminal layout changes), the shared building blocks behind Grok's 结构化聊天, faster and cheaper test runs, fixes that kept main building, and a limit on how far shared YAML defaults can expand.

- 新增（claude）：prepare account profiles and shared history (Step 1 of 4)（[@brennanb2025](https://github.com/brennanb2025)，[#24300](https://github.com/stablyai/orca/pull/24300)）
- Claude account profiles: dormant routing and consumers (Step 2 of 4)（[@brennanb2025](https://github.com/brennanb2025)，[#24351](https://github.com/stablyai/orca/pull/24351)）
- Claude account profiles: dormant WSL guest setup (Step 3 of 4)（[@brennanb2025](https://github.com/brennanb2025)，[#24384](https://github.com/stablyai/orca/pull/24384)）
- 修复（claude）：share account history on Windows with junctions and a same-drive hardlink（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26067](https://github.com/stablyai/orca/pull/26067)）
- Extract provider process supervision and stream reading from Codex（[@brennanb2025](https://github.com/brennanb2025)，[#24989](https://github.com/stablyai/orca/pull/24989)）
- 新增：standalone Agent Client Protocol client layer（[@brennanb2025](https://github.com/brennanb2025)，[#24990](https://github.com/stablyai/orca/pull/24990)）
- 重构（native-chat）：keep the provider resume handle opaque to shared code（[@brennanb2025](https://github.com/brennanb2025)，[#24991](https://github.com/stablyai/orca/pull/24991)）
- 重构（native-chat）：structured agents declare their capabilities instead of shared code naming Claude and Codex（[@brennanb2025](https://github.com/brennanb2025)，[#25076](https://github.com/stablyai/orca/pull/25076)）
- 新增（native-chat）：open 结构化聊天's wire and stored records to registered agents, behind a negotiated capability（[@brennanb2025](https://github.com/brennanb2025)，[#25159](https://github.com/stablyai/orca/pull/25159)）
- Share the managed process lifecycle for structured providers（[@brennanb2025](https://github.com/brennanb2025)，[#25204](https://github.com/stablyai/orca/pull/25204)）
- Admit one provider event's journal writes as one queued operation, decided when it runs（[@brennanb2025](https://github.com/brennanb2025)，[#25141](https://github.com/stablyai/orca/pull/25141)）
- 新增：a shared timeline assembler for structured agent chats (not wired yet)（[@brennanb2025](https://github.com/brennanb2025)，[#25064](https://github.com/stablyai/orca/pull/25064)）
- Translate ACP traffic into shared timeline events（[@brennanb2025](https://github.com/brennanb2025)，[#25090](https://github.com/stablyai/orca/pull/25090)）
- 允许：ACP connections own their agent processes（[@brennanb2025](https://github.com/brennanb2025)，[#25810](https://github.com/stablyai/orca/pull/25810)）
- 重构（native-chat）：remove the records-file and per-chat journal imports（[@brennanb2025](https://github.com/brennanb2025)，[#26038](https://github.com/stablyai/orca/pull/26038)）
- 新增（agent-launch）：the desktop AI buttons start their agent through agent.launch（[@brennanb2025](https://github.com/brennanb2025)，[#25624](https://github.com/stablyai/orca/pull/25624)）
- 重构（composer）：delete the full-create path no caller reaches（[@brennanb2025](https://github.com/brennanb2025)，[#26052](https://github.com/stablyai/orca/pull/26052)）
- [STA-6940] Prepare file drops for element owners (PR 2 of 6)（[@brennanb2025](https://github.com/brennanb2025)，[#25748](https://github.com/stablyai/orca/pull/25748)）
- 重构（codex）：remove code the ~/.codex hook rework left unused（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25744](https://github.com/stablyai/orca/pull/25744)）
- 重构（terminal）：add in-place pane layout geometry apply (unused)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25671](https://github.com/stablyai/orca/pull/25671)）
- 重构（terminal）：report breaches of the two layout invariants; add an unrun load repair（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25673](https://github.com/stablyai/orca/pull/25673)）
- 重构（terminal）：carry pane placement on terminal start, report-only（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25677](https://github.com/stablyai/orca/pull/25677)）
- 重构（terminal）：mark layout updates from user gestures（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25680](https://github.com/stablyai/orca/pull/25680)）
- 重构（terminal）：project main's terminal layout after each save (no reader yet)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25682](https://github.com/stablyai/orca/pull/25682)）
- 测试（e2e）：terminal layout parity check against main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25681](https://github.com/stablyai/orca/pull/25681)）
- 限制：YAML merge conversion and close SQLite routing review gaps（[@nwparker](https://github.com/nwparker)，[#25998](https://github.com/stablyai/orca/pull/25998)）
- 修复（windows）：keep generated skills and snapshots LF（[@nwparker](https://github.com/nwparker)，[#25972](https://github.com/stablyai/orca/pull/25972)）
- 测试：check structured-chat code for Electron imports even before the runtime loads it（[@brennanb2025](https://github.com/brennanb2025)，[#24988](https://github.com/stablyai/orca/pull/24988)）
- 测试（native-chat）：cover paired runtime launch compatibility（[@brennanb2025](https://github.com/brennanb2025)，[#25072](https://github.com/stablyai/orca/pull/25072)）
- 减小：localization audit and relay setup work in CI（[@nwparker](https://github.com/nwparker)，[#25665](https://github.com/stablyai/orca/pull/25665)）
- 修复（ci）：unblock main's static analysis after the nested-worktree delete dialog（[@brennanb2025](https://github.com/brennanb2025)，[#25683](https://github.com/stablyai/orca/pull/25683)）
- 修复：restore main's lint and localization checks after the nested-worktree delete dialog（[@brennanb2025](https://github.com/brennanb2025)，[#25684](https://github.com/stablyai/orca/pull/25684)）
- 修复（test）：use the current provider handle shape in the stop-note test (unbreaks main typecheck)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25706](https://github.com/stablyai/orca/pull/25706)）
- 修复（test）：use the current provider handle shape in the submission-positions test (unbreaks main typecheck)（[@brennanb2025](https://github.com/brennanb2025)，[#25709](https://github.com/stablyai/orca/pull/25709)）
- 测试（ratchet）：require src/main/provider-process now that it has landed（[@brennanb2025](https://github.com/brennanb2025)，[#25710](https://github.com/stablyai/orca/pull/25710)）
- 修复（test）：drop the duplicate codexProviderHandle import that breaks main's typecheck（[@brennanb2025](https://github.com/brennanb2025)，[#25713](https://github.com/stablyai/orca/pull/25713)）
- 测试：drop the duplicate codexProviderHandle import two main fixes both added（[@brennanb2025](https://github.com/brennanb2025)，[#25717](https://github.com/stablyai/orca/pull/25717)）
- 修复（test）：restore the codexProviderHandle import in the submission-positions test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25722](https://github.com/stablyai/orca/pull/25722)）
- 修复（test）：restore the codexProviderHandle import the #25078 merge removed（[@brennanb2025](https://github.com/brennanb2025)，[#25728](https://github.com/stablyai/orca/pull/25728)）
- 测试（cross-version）：load releases that import a package main dropped（[@brennanb2025](https://github.com/brennanb2025)，[#25731](https://github.com/stablyai/orca/pull/25731)）
- 测试（agent-launch）：keep the carry control on a prompt that still cannot ride the line after #23672（[@brennanb2025](https://github.com/brennanb2025)，[#25734](https://github.com/stablyai/orca/pull/25734)）
- Pause Pullfrog while the CI runner queue recovers（[@nwparker](https://github.com/nwparker)，[#25760](https://github.com/stablyai/orca/pull/25760)）
- 减小：CI work by removing low-value tests and duplicate fuzz comparisons（[@nwparker](https://github.com/nwparker)，[#25791](https://github.com/stablyai/orca/pull/25791)）
- 减小：redundant tests and unnecessary CI waits（[@nwparker](https://github.com/nwparker)，[#25806](https://github.com/stablyai/orca/pull/25806)）
- Build SSH host compatibility slots in parallel（[@nwparker](https://github.com/nwparker)，[#25821](https://github.com/stablyai/orca/pull/25821)）
- 性能（ci）：compile release JavaScript once for all packaging hosts（[@nwparker](https://github.com/nwparker)，[#25828](https://github.com/stablyai/orca/pull/25828)）
- 停止：expensive checks when an unmerged PR closes（[@nwparker](https://github.com/nwparker)，[#25829](https://github.com/stablyai/orca/pull/25829)）
- 修复：main CI line-limit failure in protocol capability registry（[@nwparker](https://github.com/nwparker)，[#25839](https://github.com/stablyai/orca/pull/25839)）
- Run Vitest on Bun with Node runtime contracts（[@nwparker](https://github.com/nwparker)，[#25840](https://github.com/stablyai/orca/pull/25840)）
- 测试（mobile）：split the turn-disclosure test under the 800-line test limit（[@brennanb2025](https://github.com/brennanb2025)，[#25933](https://github.com/stablyai/orca/pull/25933)）
- 修复（ci）：restore main's typecheck and lint after #25751 and #24369（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25949](https://github.com/stablyai/orca/pull/25949)）
- Speed up unit tests with cross-runtime duration scheduling（[@nwparker](https://github.com/nwparker)，[#25967](https://github.com/stablyai/orca/pull/25967)）
- 修复（test）：restore main typecheck — pass resolveLaunchArgs in the record store slot test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25970](https://github.com/stablyai/orca/pull/25970)）
- 修复（test）：restore main typecheck — pass resolveLaunchArgs in the Codex stopped-send-order test（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25977](https://github.com/stablyai/orca/pull/25977)）
- Simplify reveal and test fixture cleanup（[@nwparker](https://github.com/nwparker)，[#25978](https://github.com/stablyai/orca/pull/25978)）
- 修复（test）：drop the duplicate resolveLaunchArgs that breaks main's lint（[@brennanb2025](https://github.com/brennanb2025)，[#25997](https://github.com/stablyai/orca/pull/25997)）
- Run localization catalog checks on Bun (26% less time)（[@nwparker](https://github.com/nwparker)，[#25999](https://github.com/stablyai/orca/pull/25999)）
- Speed up expensive test fixtures (23–82% less time)（[@nwparker](https://github.com/nwparker)，[#26000](https://github.com/stablyai/orca/pull/26000)）
- 测试（codex）：turning status hooks off always wins over a turn-on still in flight（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26001](https://github.com/stablyai/orca/pull/26001)）
- 测试（e2e）：keep the Source Control reveal golden off older release tags（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26005](https://github.com/stablyai/orca/pull/26005)）
- 修复（ci）：run three new SQLite-backed tests in the Node runtime project（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26010](https://github.com/stablyai/orca/pull/26010)）
- Run the SQLite responsiveness test after other suites（[@nwparker](https://github.com/nwparker)，[#26015](https://github.com/stablyai/orca/pull/26015)）
- 测试（vitest）：run agent-launch-instant-tab in the SQLite runtime project（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26028](https://github.com/stablyai/orca/pull/26028)）
- 保持：native contracts on Node and wait for Git upgrade completion（[@nwparker](https://github.com/nwparker)，[#26034](https://github.com/stablyai/orca/pull/26034)）
- 测试：bound memory used by the runtime Electron audit（[@nwparker](https://github.com/nwparker)，[#26049](https://github.com/stablyai/orca/pull/26049)）
- 修复（lint）：bring structured-agent-session-host back under max-lines（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26050](https://github.com/stablyai/orca/pull/26050)）
- 修复：unsafe test fixtures and the Bun version pin（[@nwparker](https://github.com/nwparker)，[#26051](https://github.com/stablyai/orca/pull/26051)）
- 修复（native-chat）：split the attachment failure words out so Lint passes on main（[@brennanb2025](https://github.com/brennanb2025)，[#26079](https://github.com/stablyai/orca/pull/26079)）
- 修复（ci）：actually exclude Electron probes from the headless node-server lanes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26093](https://github.com/stablyai/orca/pull/26093)）
- 修复（acp）：repair main's typecheck after the legacy journal-path removal（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26094](https://github.com/stablyai/orca/pull/26094)）
- 性能（tests）：reuse Vitest transforms between test runs（[@nwparker](https://github.com/nwparker)，[#26095](https://github.com/stablyai/orca/pull/26095)）
- 修复（native-chat）：repair main's web typecheck after the @-mention prop rename（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26097](https://github.com/stablyai/orca/pull/26097)）
- 性能（tests）：avoid repeated persistence imports in automation fixtures（[@nwparker](https://github.com/nwparker)，[#26111](https://github.com/stablyai/orca/pull/26111)）
- 性能（tests）：release stale pane migration listeners between cases（[@nwparker](https://github.com/nwparker)，[#26131](https://github.com/stablyai/orca/pull/26131)）
- Advance mocked test clocks instead of waiting in real time（[@nwparker](https://github.com/nwparker)，[#26135](https://github.com/stablyai/orca/pull/26135)）
- 减小：repeated UI imports in draft storage tests（[@nwparker](https://github.com/nwparker)，[#26145](https://github.com/stablyai/orca/pull/26145)）
- 测试：reduce replay oracle time by 20.93% with scratch cell reuse（[@nwparker](https://github.com/nwparker)，[#26162](https://github.com/stablyai/orca/pull/26162)）
- 测试：reduce terminal topology suite time by 40.98%（[@nwparker](https://github.com/nwparker)，[#26166](https://github.com/stablyai/orca/pull/26166)）
### 新贡献者 {#v1-4-223-contributors}

- [@DEOWL-kan](https://github.com/DEOWL-kan) 首次贡献于 [#15940](https://github.com/stablyai/orca/pull/15940)
- [@ykunisato](https://github.com/ykunisato) 首次贡献于 [#17772](https://github.com/stablyai/orca/pull/17772)
- [@tomarai85](https://github.com/tomarai85) 首次贡献于 [#21931](https://github.com/stablyai/orca/pull/21931)
- [@INatsukiI](https://github.com/INatsukiI) 首次贡献于 [#22682](https://github.com/stablyai/orca/pull/22682)
- [@pinelibg](https://github.com/pinelibg) 首次贡献于 [#25255](https://github.com/stablyai/orca/pull/25255)

---

**完整变更对照：** [v1.4.222...v1.4.223](https://github.com/stablyai/orca/compare/v1.4.222...v1.4.223)
