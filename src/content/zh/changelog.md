# 更新日志 {#changelog}

本页保留最近五次桌面版的**完整中文日志**，不是一句话摘要。打开时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 版本索引 {#index}

| 版本 | 日期 | 标题 |
| --- | --- | --- |
| [v1.4.225](#v1-4-225) | 2026年10月14日 | - SSH and managed servers: N… |
| [v1.4.224](#v1-4-224) | 2026年10月10日 | 自动化可按次指定模型与 effort，SSH 主机改跑托管 Orca 服务器 |
| [v1.4.223](#v1-4-223) | 2026年10月8日 | 实验性 Native Chat 可回退对话，SSH 重连后保留标签 |
| [v1.4.222](#v1-4-222) | 2026年10月7日 | OpenCode worker 等可提交后再交任务，大 CSV 可表格编辑 |
| [v1.4.221](#v1-4-221) | 2026年10月5日 | Copilot 配置改为仅所有者可读，Windows Codex 改用 ~/.codex |

## 完整中文日志 {#full-notes}

## v1.4.225 - SSH and managed servers: N… {#v1-4-225}

2026年10月14日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.225)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-225-short}

- **SSH and managed servers:** New SSH connections now use Orca's managed server. Terminals left running by v1.4.224 keep working in their existing tabs through the upgrade and reconnect; new terminals open on the managed server. Saved port forwards return, Windows managed-host terminals get the `orca` CLI, and managed Claude chats keep their provider running after the desktop disconnects. Hosts that cannot run the managed server show a clear reason; the old SSH fallback is no longer available.
- **Native chat (experimental):** Code blocks and shell commands are highlighted, attached files show as filename pills, and you can edit a queued message even while the agent is asking a question. Codex offers Ultrafast and can stop background commands and subagents; Grok can list and stop its background commands too. A new chat saves its first message immediately, closed chats stay closed, and interrupted replies put **Continue** in the explanation card. Mermaid diagrams work better in dark mode, and chat visuals can open in their own tab.
- **Agents and accounts:** Kiro reports agent status and appears in Session History. Claude accounts use separate folders and offer **Copy sign-in link instead**. Orchestration workers can start as Native Chats for supported agents, agent launch settings are edited on the workspace's own host, and account switching and MCP settings stay with the selected host.
- **Remote work:** The Ports panel scans and stops ports on the workspace's own computer, Resource Manager lists that host's processes, and Agent Dashboard can show terminal previews from the owning host. Files, project creation, pull request and merge request actions, account results and settings follow the computer that owns them. Re-pairing the same server keeps its environment, and one unreadable saved record no longer makes the whole server unusable.
- **Serving and updates:** `orca serve --supervise` gains a supervisor that runs from a copy outside the app, and `orca serve service install`, `status` and `uninstall` manage a service. Updates preserve Codex sign-in before a headless restart, macOS terminal permissions survive app updates, and automatic terminal restores are paced and limited to avoid runaway restarts. Linux keeps AppImage copies that are still in use and shows a persistent restart banner if a terminal background service's files are gone.
- **Phone and iPad:** Grok, OpenCode, OMP and Pi chats open on the phone. iPad keeps chat drafts and the host sidebar reachable, workspace badges show SSH host health, tool results stay with the right command, and terminal views accept a fresh snapshot after a stream ends.
- **Workspaces and automations:** You can copy stable tab references and manage workspace references from the CLI, and launch an agent in an existing workspace from the CLI. Folder workspaces appear as automation targets, multi-day schedules display correctly, removed folder workspaces no longer leave blank sidebar rows, and the **worktree is ready** notification stays until you dismiss it. Feature branches no longer borrow unrelated pull requests.
- **Windows, WSL and Linux:** Windows notifications no longer freeze Orca, CodeBuddy hooks work without PowerShell 7, and quitting Claude or Codex in cmd.exe or Git Bash removes it from the running list. WSL paths open in Cursor's WSL mode, background work leaves stopped distributions asleep, Windows-drive searches use the host's ripgrep, and Wayland clipboard text stays current.
- **Reliability and performance:** Orca is more reliable and responsive, with safer terminal restores, stronger connection recovery, less main-thread work, and faster background and CI workflows.
- **Also:** Nim and Typst highlighting no longer lets a long line freeze the window, HTML previews load authorized web fonts, links open in Orca tabs like they do in Chrome, cancelled browser-tab drags leave tabs clickable, and terminal output, usage counting and project discovery do less work on the main thread.

### Known issues {#v1-4-225-known-issues}

**SSH hosts that cannot run the managed server:** This version no longer falls back to the old SSH runtime. If the host is unsupported, Settings → SSH Hosts explains why. Use an older Orca version to keep connecting to a host the managed server cannot support (#27214).

**The `orca` command in older SSH terminals:** Terminals kept running from v1.4.224 still accept typing, output and resizing, but `orca` commands are unavailable inside those older terminals. Run them in a new terminal on the same host (#27787).

**Tab order after a cold restart:** If the terminal background process is killed before Orca reopens, the saved terminal-tab order can disagree with the tab bar. This remains a known layout issue (#27353).

**OpenCode 2:** If you update from v1.4.219 or earlier, OpenCode 2 panes that were already running may show no status until you restart OpenCode in them. If you downgrade Orca after updating, duplicate OpenCode status plugins are left behind. After `opencode run` exits, its pane can keep showing "Done"; a fix is pending in #24472.

---

### 产品体验 {#v1-4-225-product}

#### Native chat (experimental) {#v1-4-225-native-chat-experimental-}

> Code blocks and commands are highlighted, attachments appear as filename pills, queued messages can be edited while a question is open, and interrupted replies offer Continue in the explanation card. Codex and Grok can stop their background work, chats keep their first message and stay closed after you close them, and diagrams work better in dark mode.

- Save a new chat's first message during create（[@brennanb2025](https://github.com/brennanb2025)，[#26332](https://github.com/stablyai/orca/pull/26332)）
- A new Pi chat names the model it will run on its first frame（[@brennanb2025](https://github.com/brennanb2025)，[#26821](https://github.com/stablyai/orca/pull/26821)）
- 新增（native-chat）：highlight code blocks and shell commands（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26343](https://github.com/stablyai/orca/pull/26343)）
- 打开：a chat visual in its own tab instead of the sidebar（[@brennanb2025](https://github.com/brennanb2025)，[#26728](https://github.com/stablyai/orca/pull/26728)）
- 保持：Chat UI users with a Terminal default on the terminal, with a chat mode switch in the upgrade tip（[@brennanb2025](https://github.com/brennanb2025)，[#26915](https://github.com/stablyai/orca/pull/26915)）
- 允许：a Codex chat stop a command it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#26780](https://github.com/stablyai/orca/pull/26780)）
- 修复（native-chat）：every new-chat request opens its own chat（[@brennanb2025](https://github.com/brennanb2025)，[#26782](https://github.com/stablyai/orca/pull/26782)）
- Native Chat: identify a paired device by its device id, never its credential（[@brennanb2025](https://github.com/brennanb2025)，[#26777](https://github.com/stablyai/orca/pull/26777)）
- 修复（native-chat）：match model picker type to the options menu（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26349](https://github.com/stablyai/orca/pull/26349)）
- Every agent reports its learned default model once, when a chat starts（[@brennanb2025](https://github.com/brennanb2025)，[#26982](https://github.com/stablyai/orca/pull/26982)）
- Floating-workspace chats of every native-chat agent keep links in the folder they started in（[@brennanb2025](https://github.com/brennanb2025)，[#26981](https://github.com/stablyai/orca/pull/26981)）
- 保持：select-all and copy in a chat from reaching the terminal underneath（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26831](https://github.com/stablyai/orca/pull/26831)）
- 修复（native-chat）：accept sends through their own receipt（[@brennanb2025](https://github.com/brennanb2025)，[#26672](https://github.com/stablyai/orca/pull/26672)）
- 修复（native-chat）：edit a queued message in place, even while a question is open（[@brennanb2025](https://github.com/brennanb2025)，[#26886](https://github.com/stablyai/orca/pull/26886)）
- 修复（native-chat）：settle a reply cut off by a server restart（[@brennanb2025](https://github.com/brennanb2025)，[#26460](https://github.com/stablyai/orca/pull/26460)）
- 修复（native-chat）：hide agent message controls while the turn runs（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26404](https://github.com/stablyai/orca/pull/26404)）
- 修复（native-chat）：drop the redundant 'Waiting for your answer' line from queued cards（[@brennanb2025](https://github.com/brennanb2025)，[#27073](https://github.com/stablyai/orca/pull/27073)）
- 新增（native-chat）：show attached files as filename pills in the composer（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26409](https://github.com/stablyai/orca/pull/26409)）
- 新增（native-chat）：offer Codex Ultrafast as a speed choice（[@brennanb2025](https://github.com/brennanb2025)，[#26962](https://github.com/stablyai/orca/pull/26962)）
- 允许：a Codex chat stop a sub-agent from the background-tasks strip（[@brennanb2025](https://github.com/brennanb2025)，[#27026](https://github.com/stablyai/orca/pull/27026)）
- 修复（native-chat）：lazy WSL tier for Claude, Grok and omp lookup by id（[@OrcaWin](https://github.com/OrcaWin)，[#27082](https://github.com/stablyai/orca/pull/27082)）
- 修复（native-chat）：retire the pending image bubble when the CLI records its path as text（[@OrcaWin](https://github.com/OrcaWin)，[#27095](https://github.com/stablyai/orca/pull/27095)）
- 修复（native-chat）：retire a first send's echo in transcript time, not this client's（[@OrcaWin](https://github.com/OrcaWin)，[#27099](https://github.com/stablyai/orca/pull/27099)）
- 保持：tool results with the right command and reveal all results on mobile（[@nwparker](https://github.com/nwparker)，[#26968](https://github.com/stablyai/orca/pull/26968)）
- 修复（native-chat）：give each animation a reduced-motion state（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26276](https://github.com/stablyai/orca/pull/26276)）
- 允许：a Grok chat list and stop the commands it left running in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27022](https://github.com/stablyai/orca/pull/27022)）
- 修复（native-chat）：preserve running subagent rows in long chats（[@brennanb2025](https://github.com/brennanb2025)，[#26798](https://github.com/stablyai/orca/pull/26798)）
- 修复（native-chat）：read ZCode conversations in their recorded order（[@nwparker](https://github.com/nwparker)，[#27142](https://github.com/stablyai/orca/pull/27142)）
- 修复（native-chat）：a new chat's model and effort pickers match their first frame before the agent starts（[@brennanb2025](https://github.com/brennanb2025)，[#27031](https://github.com/stablyai/orca/pull/27031)）
- A closed chat tab stays closed instead of coming back on the right（[@brennanb2025](https://github.com/brennanb2025)，[#27205](https://github.com/stablyai/orca/pull/27205)）
- Theme Mermaid diagrams for dark mode（[@AmethystLiang](https://github.com/AmethystLiang)，[#27398](https://github.com/stablyai/orca/pull/27398)）
- 修复（native-chat）：put Continue in the card that says the reply stopped（[@brennanb2025](https://github.com/brennanb2025)，[#27097](https://github.com/stablyai/orca/pull/27097)）
- One shared subagent tracker for Claude, Codex and Grok chat rows（[@brennanb2025](https://github.com/brennanb2025)，[#27228](https://github.com/stablyai/orca/pull/27228)）
- Session History: resume folder workspace chats in their own folder（[@brennanb2025](https://github.com/brennanb2025)，[#27209](https://github.com/stablyai/orca/pull/27209)）
- 修复（native-chat）：offer resume after restart for chats whose only work was in the background（[@brennanb2025](https://github.com/brennanb2025)，[#27167](https://github.com/stablyai/orca/pull/27167)）
- 修复（native-chat）：keep diagram source mounted and retire reveal history（[@brennanb2025](https://github.com/brennanb2025)，[#26690](https://github.com/stablyai/orca/pull/26690)）
- Native Chat: queued-message actions and question answers accept through their own receipt（[@brennanb2025](https://github.com/brennanb2025)，[#26988](https://github.com/stablyai/orca/pull/26988)）
- 修复（native-chat）：one set of rules for chat text size, colour, hover and focus（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26685](https://github.com/stablyai/orca/pull/26685)）
- 修复（native-chat）：use quote icon for Add to chat（[@brennanb2025](https://github.com/brennanb2025)，[#27631](https://github.com/stablyai/orca/pull/27631)）
- 修复（chat）：jump to messages without scrolling animation（[@AmethystLiang](https://github.com/AmethystLiang)，[#27612](https://github.com/stablyai/orca/pull/27612)）
- Native chat: every agent launches through one composed launch path（[@brennanb2025](https://github.com/brennanb2025)，[#27204](https://github.com/stablyai/orca/pull/27204)）
- 修复（tab-bar）：offer Resume in New Native Chat only while the tab's agent is running（[@brennanb2025](https://github.com/brennanb2025)，[#27520](https://github.com/stablyai/orca/pull/27520)）
- 修复（chat）：show hook failure details in error cards（[@nwparker](https://github.com/nwparker)，[#27824](https://github.com/stablyai/orca/pull/27824)）
- 恢复：dialog: show a finished resume as a result, not a picker（[@brennanb2025](https://github.com/brennanb2025)，[#27732](https://github.com/stablyai/orca/pull/27732)）

#### Agents, accounts & orchestration {#v1-4-225-agents-accounts-orchestration}

> Kiro reports its status and appears in Session History, Claude accounts use separate folders and offer a sign-in link you can copy, and orchestration workers can start as Native Chats. Agent settings, account results and MCP settings stay with the computer that runs the work.

- 新增（kiro）：report Kiro agent status and list Kiro sessions in history（[@w-felipe360](https://github.com/w-felipe360)，[#26695](https://github.com/stablyai/orca/pull/26695)）
- Re-land Claude per-account folders (#24434, #26405) with the upgrade and proxy fixes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26801](https://github.com/stablyai/orca/pull/26801)）
- Start orchestration workers as Native Chats for every agent that has Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#26776](https://github.com/stablyai/orca/pull/26776)）
- 新增："Copy sign-in link instead" for Claude accounts (STA-9912)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26990](https://github.com/stablyai/orca/pull/26990)）
- 保持：MCP repository settings on their selected host（[@nwparker](https://github.com/nwparker)，[#26859](https://github.com/stablyai/orca/pull/26859)）
- 修复（agents）：one host-routed agent-detection entry point（[@OrcaWin](https://github.com/OrcaWin)，[#27054](https://github.com/stablyai/orca/pull/27054)）
- 修复（agent-hooks）：route the first-work branch rename by the repo's execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27080](https://github.com/stablyai/orca/pull/27080)）
- 修复（ai-vault）：bounded OpenClaw discovery; title filter when a host's search is off（[@OrcaWin](https://github.com/OrcaWin)，[#27089](https://github.com/stablyai/orca/pull/27089)）
- 修复（ai-vault）：resume a WSL session only in its own namespace, with a Linux Pi path（[@OrcaWin](https://github.com/OrcaWin)，[#27092](https://github.com/stablyai/orca/pull/27092)）
- 修复（pi）：name workflow child rows by their step key, not only the agent（[@mmarabel](https://github.com/mmarabel)，[#26909](https://github.com/stablyai/orca/pull/26909)）
- 修复（agents）：show DeepSeek icon for observed Build sessions（[@nwparker](https://github.com/nwparker)，[#26863](https://github.com/stablyai/orca/pull/26863)）
- 修复（zcode）：keep Coding Plan credentials and quota tied to the selected account（[@nwparker](https://github.com/nwparker)，[#24674](https://github.com/stablyai/orca/pull/24674)）
- 新增（accounts）：open ZCode sign-in in the existing setup terminal（[@nwparker](https://github.com/nwparker)，[#27321](https://github.com/stablyai/orca/pull/27321)）
- Honor inactive Claude account retry deadlines（[@nwparker](https://github.com/nwparker)，[#26936](https://github.com/stablyai/orca/pull/26936)）
- 修复（accounts）：remove a rejected GLM key when restore fails（[@parkavenue9639](https://github.com/parkavenue9639)，[#24964](https://github.com/stablyai/orca/pull/24964)）
- 修复（orcad）：install agent status hooks when a managed host starts（[@OrcaWin](https://github.com/OrcaWin)，[#27319](https://github.com/stablyai/orca/pull/27319)）
- 修复（claude）：register a short PostCompact hook command（[@vampik33](https://github.com/vampik33)，[#25211](https://github.com/stablyai/orca/pull/25211)）
- 修复（agent-status）：keep nested models off parent panes（[@nwparker](https://github.com/nwparker)，[#26846](https://github.com/stablyai/orca/pull/26846)）
- 修复（zsh）：keep deferred line-init defined for plugins that call it by name（[@nwparker](https://github.com/nwparker)，[#26842](https://github.com/stablyai/orca/pull/26842)）
- 修复：Codex usage bypassing configured proxy routing（[@nwparker](https://github.com/nwparker)，[#26942](https://github.com/stablyai/orca/pull/26942)）
- 修复：cold proxy authentication in the desktop HTTP client（[@nwparker](https://github.com/nwparker)，[#26957](https://github.com/stablyai/orca/pull/26957)）
- 修复（renderer）：account switchers and CLI cards follow the focused repo's host（[@nwparker](https://github.com/nwparker)，[#27687](https://github.com/stablyai/orca/pull/27687)）
- Edit agent launch settings on the workspace host（[@brennanb2025](https://github.com/brennanb2025)，[#26479](https://github.com/stablyai/orca/pull/26479)）

#### SSH, managed servers & remote {#v1-4-225-ssh-managed-servers-remote}

> New SSH connections use the managed Orca server, while terminals left running by v1.4.224 keep working in their existing tabs. Saved port forwards return, remote files open on their own computer, and projects, reviews, settings, ports and processes follow the host that owns them.

- 修复（hosts）：host registry stops minting client SSH hosts from a server's nested target（[@OrcaWin](https://github.com/OrcaWin)，[#26952](https://github.com/stablyai/orca/pull/26952)）
- 修复（folders）：folder workspaces can answer "paired server"（[@OrcaWin](https://github.com/OrcaWin)，[#26958](https://github.com/stablyai/orca/pull/26958)）
- 允许：paired-server files to drop into their own terminals（[@nwparker](https://github.com/nwparker)，[#26931](https://github.com/stablyai/orca/pull/26931)）
- 修复（session-tabs）：a tab stream the host ends resubscribes on the retry backoff（[@OrcaWin](https://github.com/OrcaWin)，[#27098](https://github.com/stablyai/orca/pull/27098)）
- 修复（ssh）：a direct-SSH host republish no longer steals this view's tab selection（[@OrcaWin](https://github.com/OrcaWin)，[#27100](https://github.com/stablyai/orca/pull/27100)）
- 修复（session-tabs）：a restored terminal row is retired only by its own host PTY（[@OrcaWin](https://github.com/OrcaWin)，[#27101](https://github.com/stablyai/orca/pull/27101)）
- 修复（terminal）：honor the OpenSSH DefaultShell on Windows SSH hosts running orcad（[@OrcaWin](https://github.com/OrcaWin)，[#27085](https://github.com/stablyai/orca/pull/27085)）
- 修复（session-tabs）：a returning paired publisher is repaired by an authoritative census（[@OrcaWin](https://github.com/OrcaWin)，[#27094](https://github.com/stablyai/orca/pull/27094)）
- 修复（hosts）：the unresolved-owner sentinel is never routable（[@OrcaWin](https://github.com/OrcaWin)，[#27111](https://github.com/stablyai/orca/pull/27111)）
- 修复（runtime）：worktree create enforces the lineage host boundary（[@OrcaWin](https://github.com/OrcaWin)，[#27114](https://github.com/stablyai/orca/pull/27114)）
- 修复（repos）：every repo catalog uses the host-catalog fence（[@OrcaWin](https://github.com/OrcaWin)，[#27116](https://github.com/stablyai/orca/pull/27116)）
- 修复（web）：usage and account switching come from the paired server（[@OrcaWin](https://github.com/OrcaWin)，[#27135](https://github.com/stablyai/orca/pull/27135)）
- 修复（web）：Jira reaches the server（[@OrcaWin](https://github.com/OrcaWin)，[#27136](https://github.com/stablyai/orca/pull/27136)）
- 修复（hosts）：a server whose status answers is selectable while shared control connects（[@OrcaWin](https://github.com/OrcaWin)，[#27137](https://github.com/stablyai/orca/pull/27137)）
- 修复（cli）：orca file open and diff open name their owner（[@OrcaWin](https://github.com/OrcaWin)，[#27154](https://github.com/stablyai/orca/pull/27154)）
- 修复（agents）：an old Windows or unknown-platform host asks to update instead of answering its default list（[@OrcaWin](https://github.com/OrcaWin)，[#27164](https://github.com/stablyai/orca/pull/27164)）
- 修复（pairing）：advertise a key and fallback port the host can actually serve（[@OrcaWin](https://github.com/OrcaWin)，[#27158](https://github.com/stablyai/orca/pull/27158)）
- 修复（shell）：OS open actions follow the file's owner, not the focused server（[@OrcaWin](https://github.com/OrcaWin)，[#27165](https://github.com/stablyai/orca/pull/27165)）
- 修复（pairing）：pairing with this same Orca profile is refused（[@OrcaWin](https://github.com/OrcaWin)，[#27166](https://github.com/stablyai/orca/pull/27166)）
- 新增（hosts）：servers publish a host descriptor（[@OrcaWin](https://github.com/OrcaWin)，[#27193](https://github.com/stablyai/orca/pull/27193)）
- 新增（ports）：host-scoped port scan and stop on the server（[@OrcaWin](https://github.com/OrcaWin)，[#27188](https://github.com/stablyai/orca/pull/27188)）
- 新增（pairing）：re-pairing the same server keeps its environment（[@OrcaWin](https://github.com/OrcaWin)，[#27197](https://github.com/stablyai/orca/pull/27197)）
- 修复（cli）：check the runtime source before sending（[@OrcaWin](https://github.com/OrcaWin)，[#27206](https://github.com/stablyai/orca/pull/27206)）
- 新增（runtime）：the host refuses a request meant for another runtime（[@OrcaWin](https://github.com/OrcaWin)，[#27224](https://github.com/stablyai/orca/pull/27224)）
- 修复（agents）：one agent inventory per host and execution context（[@OrcaWin](https://github.com/OrcaWin)，[#27225](https://github.com/stablyai/orca/pull/27225)）
- 修复（files）：a paired-server link outside its workspace opens in the host workspace that holds it（[@OrcaWin](https://github.com/OrcaWin)，[#27226](https://github.com/stablyai/orca/pull/27226)）
- 修复（files）：client drops on a remote composer upload through the import transaction（[@OrcaWin](https://github.com/OrcaWin)，[#27227](https://github.com/stablyai/orca/pull/27227)）
- 修复（files）：links to this computer in a remote terminal open on the client with trusted provenance（[@OrcaWin](https://github.com/OrcaWin)，[#27234](https://github.com/stablyai/orca/pull/27234)）
- 修复（terminals）：terminal IDs, agent rows and dashboard rows follow the owner（[@OrcaWin](https://github.com/OrcaWin)，[#27243](https://github.com/stablyai/orca/pull/27243)）
- 修复（terminals）：automation runs, CLI tabs and folder-workspace browser tabs follow the owner（[@OrcaWin](https://github.com/OrcaWin)，[#27246](https://github.com/stablyai/orca/pull/27246)）
- 修复（review）：review providers resolve the repo on its host（[@OrcaWin](https://github.com/OrcaWin)，[#27247](https://github.com/stablyai/orca/pull/27247)）
- 修复（review）：PR reads and actions follow the ownership table（[@OrcaWin](https://github.com/OrcaWin)，[#27248](https://github.com/stablyai/orca/pull/27248)）
- 新增（terminals）：dashboard terminal previews from the owning host（[@OrcaWin](https://github.com/OrcaWin)，[#27250](https://github.com/stablyai/orca/pull/27250)）
- 修复（ports）：the ports panel scans and stops on the workspace's own host（[@OrcaWin](https://github.com/OrcaWin)，[#27258](https://github.com/stablyai/orca/pull/27258)）
- 修复（skills）：say an SSH repo was not scanned instead of dropping it silently（[@OrcaWin](https://github.com/OrcaWin)，[#27261](https://github.com/stablyai/orca/pull/27261)）
- 修复（hosts）：agent launch platform and shell come from the execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27259](https://github.com/stablyai/orca/pull/27259)）
- 修复（accounts）：a server's late account result stays with that server（[@OrcaWin](https://github.com/OrcaWin)，[#27262](https://github.com/stablyai/orca/pull/27262)）
- 新增（hosts）：Resource Manager lists the owning host's processes（[@OrcaWin](https://github.com/OrcaWin)，[#27263](https://github.com/stablyai/orca/pull/27263)）
- 新增（settings）：host-owned settings panes choose their host explicitly（[@OrcaWin](https://github.com/OrcaWin)，[#27265](https://github.com/stablyai/orca/pull/27265)）
- 修复（web）：the paired server is the web client's only host（[@OrcaWin](https://github.com/OrcaWin)，[#27266](https://github.com/stablyai/orca/pull/27266)）
- 修复（sources）：GitHub Projects boards read from the task page's source host（[@OrcaWin](https://github.com/OrcaWin)，[#27270](https://github.com/stablyai/orca/pull/27270)）
- 修复（orcad）：provide the orca CLI in Windows managed-host terminals（[@OrcaWin](https://github.com/OrcaWin)，[#27324](https://github.com/stablyai/orca/pull/27324)）
- 新增（ssh）：a paired client can manage the server's own SSH hosts (ssh.target-management.v1)（[@OrcaWin](https://github.com/OrcaWin)，[#27329](https://github.com/stablyai/orca/pull/27329)）
- 修复（projects）：create on a server's SSH project; Add Project SSH lists the server's targets（[@OrcaWin](https://github.com/OrcaWin)，[#27331](https://github.com/stablyai/orca/pull/27331)）
- 修复（ssh）：restore saved port forwards on managed hosts and show their Ports tab（[@OrcaWin](https://github.com/OrcaWin)，[#27361](https://github.com/stablyai/orca/pull/27361)）
- 修复（files）：a managed terminal links and opens a host file outside its workspace（[@OrcaWin](https://github.com/OrcaWin)，[#27364](https://github.com/stablyai/orca/pull/27364)）
- 修复（vm）：a recipe VM's SSH root runs on a managed Orca server（[@OrcaWin](https://github.com/OrcaWin)，[#27366](https://github.com/stablyai/orca/pull/27366)）
- 修复（ssh）：a restore racing a disconnect never leaves a forward behind（[@OrcaWin](https://github.com/OrcaWin)，[#27368](https://github.com/stablyai/orca/pull/27368)）
- 重构（ssh）：connect fails for hosts orcad can't serve; remove the relay client path（[@OrcaWin](https://github.com/OrcaWin)，[#27214](https://github.com/stablyai/orca/pull/27214)）
- 修复（e2ee）：stop dropping terminal output on a backed-up legacy connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26528](https://github.com/stablyai/orca/pull/26528)）
- 修复（remote）：move tabs into a split-off group on the server too（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26522](https://github.com/stablyai/orca/pull/26522)）
- 修复（runtime）：refresh open clients after project setup changes（[@nwparker](https://github.com/nwparker)，[#26941](https://github.com/stablyai/orca/pull/26941)）
- 修复（ssh）：a fast remote folder listing no longer shows a false error（[@nwparker](https://github.com/nwparker)，[#26940](https://github.com/stablyai/orca/pull/26940)）
- 修复（ssh）：remove the relay-only remote workspace sync so reconnect never sticks on pulling（[@OrcaWin](https://github.com/OrcaWin)，[#27409](https://github.com/stablyai/orca/pull/27409)）
- 修复（browser）：refuse web pages on the agent-browser CDP proxy（[@OrcaWin](https://github.com/OrcaWin)，[#27415](https://github.com/stablyai/orca/pull/27415)）
- 修复（pty）：only force-kill processes in the terminal's own Linux session（[@OrcaWin](https://github.com/OrcaWin)，[#27422](https://github.com/stablyai/orca/pull/27422)）
- 修复（runtime）：reuse cached worktree rows when the admin probe cannot answer（[@OrcaWin](https://github.com/OrcaWin)，[#27445](https://github.com/stablyai/orca/pull/27445)）
- 新增（runtime）：device-key authentication and per-installation key migration (host)（[@OrcaWin](https://github.com/OrcaWin)，[#27493](https://github.com/stablyai/orca/pull/27493)）
- 修复：let managed SSH Claude chats load the agent SDK（[@brennanb2025](https://github.com/brennanb2025)，[#26450](https://github.com/stablyai/orca/pull/26450)）
- 新增（runtime）：session-only browser keys and opt-in for pairing from plain-http pages (host)（[@OrcaWin](https://github.com/OrcaWin)，[#27540](https://github.com/stablyai/orca/pull/27540)）
- 新增（web）：the browser signs in with a non-extractable device key, or pairs for this session only（[@OrcaWin](https://github.com/OrcaWin)，[#27552](https://github.com/stablyai/orca/pull/27552)）
- 修复（codex）：copy in remote Orca Server Codex sessions reaches your clipboard（[@OrcaWin](https://github.com/OrcaWin)，[#27605](https://github.com/stablyai/orca/pull/27605)）
- 保持：SSH chat providers alive after the desktop disconnects（[@brennanb2025](https://github.com/brennanb2025)，[#26473](https://github.com/stablyai/orca/pull/26473)）
- 修复（runtime）：keep remote servers usable when one saved record can't be read（[@nwparker](https://github.com/nwparker)，[#27685](https://github.com/stablyai/orca/pull/27685)）
- 修复（ssh）：keep 1.4.224's running terminals working after the upgrade (legacy relay bridge)（[@OrcaWin](https://github.com/OrcaWin)，[#27787](https://github.com/stablyai/orca/pull/27787)）
- 修复（ssh）：an old relay terminal's tab shows output again after a reconnect（[@OrcaWin](https://github.com/OrcaWin)，[#27951](https://github.com/stablyai/orca/pull/27951)）
- 修复（ssh）：never start a hidden orcad shell for a tab the legacy relay bridge serves（[@OrcaWin](https://github.com/OrcaWin)，[#27939](https://github.com/stablyai/orca/pull/27939)）

#### Serving, updates & terminal recovery {#v1-4-225-serving-updates-terminal-recovery}

> orca serve gains supervised operation and service management, automatic terminal restores are paced and limited, and updates preserve more of the server and terminal state. macOS terminal permissions survive app updates, and Linux shows a persistent recovery banner when a terminal background service loses its AppImage files.

- 修复（orcad）：show help before server startup（[@nwparker](https://github.com/nwparker)，[#26855](https://github.com/stablyai/orca/pull/26855)）
- 修复（packaging）：unpack the orcad serve-selection entry so orca serve can run it（[@OrcaWin](https://github.com/OrcaWin)，[#27404](https://github.com/stablyai/orca/pull/27404)）
- 修复（linux）：stop the AppImage crashpad handler before the mount goes away（[@sergeytiron](https://github.com/sergeytiron)，[#23459](https://github.com/stablyai/orca/pull/23459)）
- 新增（daemon）：observe-only fork gate for automatic terminal restores（[@OrcaWin](https://github.com/OrcaWin)，[#27424](https://github.com/stablyai/orca/pull/27424)）
- 修复（linux）：launch the AppImage terminal daemon through its own mount（[@OrcaWin](https://github.com/OrcaWin)，[#27435](https://github.com/stablyai/orca/pull/27435)）
- 新增（daemon）：pace automatic terminal restores on headless hosts（[@OrcaWin](https://github.com/OrcaWin)，[#27428](https://github.com/stablyai/orca/pull/27428)）
- 新增（daemon）：pause automatic restores after a same-boot crash（[@OrcaWin](https://github.com/OrcaWin)，[#27433](https://github.com/stablyai/orca/pull/27433)）
- 修复（serve）：report secrets unavailable instead of hanging on an unreachable macOS keychain（[@OrcaWin](https://github.com/OrcaWin)，[#27441](https://github.com/stablyai/orca/pull/27441)）
- 新增（daemon）：process-growth breaker that pauses automatic restores（[@OrcaWin](https://github.com/OrcaWin)，[#27437](https://github.com/stablyai/orca/pull/27437)）
- 修复（daemon）：drop a legacy daemon that can no longer accept a connection（[@OrcaWin](https://github.com/OrcaWin)，[#27436](https://github.com/stablyai/orca/pull/27436)）
- 修复（daemon）：count a claimed agent resume as automatic even without a history seed（[@OrcaWin](https://github.com/OrcaWin)，[#27442](https://github.com/stablyai/orca/pull/27442)）
- 修复（serve）：keep the isolated profile off the login keychain（[@OrcaWin](https://github.com/OrcaWin)，[#27463](https://github.com/stablyai/orca/pull/27463)）
- 修复（updater）：stop promising a manual update enables remote updates（[@OrcaWin](https://github.com/OrcaWin)，[#27464](https://github.com/stablyai/orca/pull/27464)）
- 修复（updater）：install macOS orca serve updates instead of waiting on Squirrel forever（[@OrcaWin](https://github.com/OrcaWin)，[#27466](https://github.com/stablyai/orca/pull/27466)）
- 新增（terminal）：declare restore intent and keep deferred panes sleeping（[@OrcaWin](https://github.com/OrcaWin)，[#27455](https://github.com/stablyai/orca/pull/27455)）
- 修复（serve）：decide a duplicate or doomed Electron serve before exec（[@OrcaWin](https://github.com/OrcaWin)，[#27472](https://github.com/stablyai/orca/pull/27472)）
- 新增（serve）：let the owner resume paused automatic restores（[@OrcaWin](https://github.com/OrcaWin)，[#27459](https://github.com/stablyai/orca/pull/27459)）
- 新增（daemon）：cap terminals per execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27488](https://github.com/stablyai/orca/pull/27488)）
- 新增（daemon）：one automatic-restore budget per execution host（[@OrcaWin](https://github.com/OrcaWin)，[#27492](https://github.com/stablyai/orca/pull/27492)）
- 修复（daemon）：keep tweetnacl out of the relocated Windows daemon-host graph; guard daemon externals at build（[@OrcaWin](https://github.com/OrcaWin)，[#27504](https://github.com/stablyai/orca/pull/27504)）
- 新增（daemon）：the host keeps its own record of old-client restores it refuses（[@OrcaWin](https://github.com/OrcaWin)，[#27496](https://github.com/stablyai/orca/pull/27496)）
- 修复（macos）：preserve terminal permissions across app updates with a small signed helper（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27021](https://github.com/stablyai/orca/pull/27021)）
- 新增（macos）：show terminal-host Full Disk Access, tag stable-copy daemons, and give Helpers folder strings（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27354](https://github.com/stablyai/orca/pull/27354)）
- 修复（terminal）：don't duplicate terminals a newer Orca still runs after a downgrade（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27577](https://github.com/stablyai/orca/pull/27577)）
- 新增（serve）：supervised mode for orca serve --supervise（[@OrcaWin](https://github.com/OrcaWin)，[#27716](https://github.com/stablyai/orca/pull/27716)）
- 新增（updater）：auto-park registered serve supervisors during a desktop install（[@OrcaWin](https://github.com/OrcaWin)，[#27722](https://github.com/stablyai/orca/pull/27722)）
- 新增（serve）：orca serve service install|status|uninstall（[@OrcaWin](https://github.com/OrcaWin)，[#27744](https://github.com/stablyai/orca/pull/27744)）
- 修复（serve）：initialize the updater in headless Electron serve（[@OrcaWin](https://github.com/OrcaWin)，[#27771](https://github.com/stablyai/orca/pull/27771)）
- 新增（daemon）：opt-in OS ceiling on terminal processes, reported per host（[@OrcaWin](https://github.com/OrcaWin)，[#27769](https://github.com/stablyai/orca/pull/27769)）
- 修复（serve）：save Codex auth before a headless serve update restart（[@OrcaWin](https://github.com/OrcaWin)，[#28001](https://github.com/stablyai/orca/pull/28001)）
- 修复（serve）：explain what to run when an SSH host's orca cannot start or install a server（[@OrcaWin](https://github.com/OrcaWin)，[#28003](https://github.com/stablyai/orca/pull/28003)）
- 修复（linux）：keep extracted AppImage copies that something still runs from（[@OrcaWin](https://github.com/OrcaWin)，[#28002](https://github.com/stablyai/orca/pull/28002)）
- 修复（updater）：clear a cancelled macOS install request before staging the next update（[@OrcaWin](https://github.com/OrcaWin)，[#28010](https://github.com/stablyai/orca/pull/28010)）
- 新增（serve）：run the --supervise supervisor from a copy outside the app（[@OrcaWin](https://github.com/OrcaWin)，[#28007](https://github.com/stablyai/orca/pull/28007)）
- 修复（serve）：give the first AppImage serve one unpacking deadline and progress（[@OrcaWin](https://github.com/OrcaWin)，[#28015](https://github.com/stablyai/orca/pull/28015)）
- 修复（daemon）：stop giving new terminals to a daemon whose AppImage files are gone（[@OrcaWin](https://github.com/OrcaWin)，[#28011](https://github.com/stablyai/orca/pull/28011)）
- 新增（terminal）：persistent banner to restart a terminal daemon whose files are gone（[@OrcaWin](https://github.com/OrcaWin)，[#28021](https://github.com/stablyai/orca/pull/28021)）

#### Phone & paired clients {#v1-4-225-phone-paired-clients}

> Grok, OpenCode, OMP and Pi chats open on the phone, iPad keeps drafts and the sidebar reachable, SSH workspace badges show host health, and phone terminals accept fresh snapshots after their stream ends.

- 修复（mobile）：size onboarding slides to the modal sheet on iPad（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26919](https://github.com/stablyai/orca/pull/26919)）
- 修复（mobile）：one host sidebar on iPad, with the page owning the host area（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26761](https://github.com/stablyai/orca/pull/26761)）
- 修复（mobile）：keep chat drafts and the sidebar reachable on iPad（[@brennanb2025](https://github.com/brennanb2025)，[#26096](https://github.com/stablyai/orca/pull/26096)）
- 修复（mobile-pairing）：preselect LAN for a signed-out desktop（[@OrcaWin](https://github.com/OrcaWin)，[#27145](https://github.com/stablyai/orca/pull/27145)）
- 修复（mobile）：a new pairing scan supersedes a stale relay pairing journal（[@OrcaWin](https://github.com/OrcaWin)，[#27157](https://github.com/stablyai/orca/pull/27157)）
- 修复（mobile）：agents for workspaces another runtime owns show why（[@OrcaWin](https://github.com/OrcaWin)，[#27196](https://github.com/stablyai/orca/pull/27196)）
- 新增（push）：accept a notification's workspace server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26516](https://github.com/stablyai/orca/pull/26516)）
- 新增（mobile）：show SSH host health on the workspace row badge（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26415](https://github.com/stablyai/orca/pull/26415)）
- 新增（runtime）：let a paired desktop register its phones as phone devices（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26427](https://github.com/stablyai/orca/pull/26427)）
- 新增（mobile）：relay a paired phone's server-workspace requests through the desktop (hidden)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26435](https://github.com/stablyai/orca/pull/26435)）
- 新增（mobile）：let the desktop list its servers and their workspaces for the phone（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26442](https://github.com/stablyai/orca/pull/26442)）
- 修复（terminal）：phone wake reaches hibernated agent panes in place（[@OrcaWin](https://github.com/OrcaWin)，[#27450](https://github.com/stablyai/orca/pull/27450)）
- 修复（mobile）：direct connections use v2 framing and never fall back once v2 is seen（[@OrcaWin](https://github.com/OrcaWin)，[#27473](https://github.com/stablyai/orca/pull/27473)）
- 修复（mobile）：open Grok, OpenCode, OMP and Pi chats on the phone（[@brennanb2025](https://github.com/brennanb2025)，[#27212](https://github.com/stablyai/orca/pull/27212)）
- 修复（mobile）：accept a fresh terminal snapshot after a stream ends（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27539](https://github.com/stablyai/orca/pull/27539)）
- 新增（mobile）：let the OTA page send extra top-level request fields（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27815](https://github.com/stablyai/orca/pull/27815)）

#### Workspaces, sidebar & tabs {#v1-4-225-workspaces-sidebar-tabs}

> Tabs have stable references you can copy, the CLI can manage workspace references and launch agents in an existing workspace, closed tabs stay closed, and the worktree-ready notification stays until you dismiss it.

- 修复（runtime）：keep a floating terminal floating when its cwd is inside a workspace（[@OrcaWin](https://github.com/OrcaWin)，[#27088](https://github.com/stablyai/orca/pull/27088)）
- 修复（runtime）：automatic tab activation no longer wakes a worktree the host put to sleep（[@OrcaWin](https://github.com/OrcaWin)，[#27081](https://github.com/stablyai/orca/pull/27081)）
- 修复（agents）：a session dropped on a pane edge splits the pane in paired-runtime workspaces（[@OrcaWin](https://github.com/OrcaWin)，[#27102](https://github.com/stablyai/orca/pull/27102)）
- 修复（cli）：implicit worktree selection is scoped to the caller's host（[@OrcaWin](https://github.com/OrcaWin)，[#27108](https://github.com/stablyai/orca/pull/27108)）
- 修复（runtime）：a terminal close commits in the session partition that holds the tab（[@OrcaWin](https://github.com/OrcaWin)，[#27119](https://github.com/stablyai/orca/pull/27119)）
- 修复（terminal）：closing a tab is never a silent no-op（[@OrcaWin](https://github.com/OrcaWin)，[#27132](https://github.com/stablyai/orca/pull/27132)）
- 修复（persistence）：a session write cannot bring back a tab its partition recorded as closed（[@OrcaWin](https://github.com/OrcaWin)，[#27125](https://github.com/stablyai/orca/pull/27125)）
- 新增（tabs）：copy stable tab references（[@fabricedge](https://github.com/fabricedge)，[#26881](https://github.com/stablyai/orca/pull/26881)）
- 新增：CLI commands to manage and find workspace references（[@nwparker](https://github.com/nwparker)，[#26807](https://github.com/stablyai/orca/pull/26807)）
- 修复（repos）：deleting a project with live terminals warns and needs --force（[@OrcaWin](https://github.com/OrcaWin)，[#27172](https://github.com/stablyai/orca/pull/27172)）
- 修复（composer）：preserve explicit workspace names after selecting tasks（[@nwparker](https://github.com/nwparker)，[#26937](https://github.com/stablyai/orca/pull/26937)）
- 修复（settings）：return current preferences after slow updates（[@nwparker](https://github.com/nwparker)，[#27199](https://github.com/stablyai/orca/pull/27199)）
- Save runtime-started tabs in the tab bar before their terminal starts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27083](https://github.com/stablyai/orca/pull/27083)）
- 修复（runtime）：refuse headless tab moves into a group the server doesn't have（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27381](https://github.com/stablyai/orca/pull/27381)）
- 修复：save editor-only host sessions during quit（[@nwparker](https://github.com/nwparker)，[#26848](https://github.com/stablyai/orca/pull/26848)）
- 修复（sidebar）：stop a removed folder workspace from leaving a blank row（[@bbingz](https://github.com/bbingz)，[#26376](https://github.com/stablyai/orca/pull/26376)）
- 保持：the 'worktree is ready' toast until dismissed（[@brennanb2025](https://github.com/brennanb2025)，[#27566](https://github.com/stablyai/orca/pull/27566)）
- 新增（cli）：launch agents in existing workspaces（[@brennanb2025](https://github.com/brennanb2025)，[#27794](https://github.com/stablyai/orca/pull/27794)）
- 修复（cli）：honor Chat UI setting for worktree agent creation（[@brennanb2025](https://github.com/brennanb2025)，[#27796](https://github.com/stablyai/orca/pull/27796)）

#### Automations, tasks & source control {#v1-4-225-automations-tasks-source-control}

> Folder workspaces appear as automation targets, multi-day schedules display correctly, selected task names survive composer updates, unrelated pull requests stay off feature branches, and Git history lanes survive unrelated roots.

- Start AI commit messages from the same shell environment chats use（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26808](https://github.com/stablyai/orca/pull/26808)）
- 停止：offering Blank Terminal in agent-only pickers (automations)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26961](https://github.com/stablyai/orca/pull/26961)）
- Start server-run automations' agents through the launch executor（[@brennanb2025](https://github.com/brennanb2025)，[#26820](https://github.com/stablyai/orca/pull/26820)）
- 显示：valid multi-day automation schedules（[@nwparker](https://github.com/nwparker)，[#26850](https://github.com/stablyai/orca/pull/26850)）
- 修复：roadmap crash with plugin language packs（[@nwparker](https://github.com/nwparker)，[#26860](https://github.com/stablyai/orca/pull/26860)）
- 修复（linear）：exclude label groups from assignable labels（[@nwparker](https://github.com/nwparker)，[#26861](https://github.com/stablyai/orca/pull/26861)）
- 保留：Git history lanes through unrelated roots（[@nwparker](https://github.com/nwparker)，[#26932](https://github.com/stablyai/orca/pull/26932)）
- 修复（github）：stop feature branches from borrowing unrelated PRs（[@nwparker](https://github.com/nwparker)，[#27332](https://github.com/stablyai/orca/pull/27332)）
- 修复（composer）：ignore delayed PR/MR lookups after you change the form（[@nwparker](https://github.com/nwparker)，[#26954](https://github.com/stablyai/orca/pull/26954)）
- 修复（automations）：find folder-workspace targets on the Automations page（[@OrcaWin](https://github.com/OrcaWin)，[#27416](https://github.com/stablyai/orca/pull/27416)）

#### Editor, files & clipboard {#v1-4-225-editor-files-clipboard}

> Nim and Typst highlighting no longer lets a long line freeze the window, HTML previews load authorized web fonts, editor-only sessions save on quit, and image pastes on macOS and clipboard text on Wayland are more reliable.

- 修复（clipboard）：paste a macOS image copied beside its file URL（[@benjaminb10](https://github.com/benjaminb10)，[#27346](https://github.com/stablyai/orca/pull/27346)）
- 修复（doc-preview）：load authorized web fonts in HTML previews（[@nwparker](https://github.com/nwparker)，[#26849](https://github.com/stablyai/orca/pull/26849)）
- Editor: Nim and Typst on the shared TextMate layer, so a long line can't freeze the window（[@brennanb2025](https://github.com/brennanb2025)，[#26987](https://github.com/stablyai/orca/pull/26987)）
- 修复（linux）：keep Wayland clipboard text current（[@nwparker](https://github.com/nwparker)，[#27772](https://github.com/stablyai/orca/pull/27772)）

#### Browser, skills & feedback {#v1-4-225-browser-skills-feedback}

> Links open in Orca tabs like they do in Chrome, cancelled drags leave browser tabs clickable, double-click selects a word in the address bar, and skill updates are checked against their ownership.

- 打开：links and window.open in Orca tabs the way Chrome does（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26976](https://github.com/stablyai/orca/pull/26976)）
- 保持：browser tabs clickable after a drag that never starts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26986](https://github.com/stablyai/orca/pull/26986)）
- refs/heads/update-wechat-qr-code-2（[@AmethystLiang](https://github.com/AmethystLiang)，[#27036](https://github.com/stablyai/orca/pull/27036)）
- 修复（browser）：return JPEG bytes for JPEG viewport screenshots（[@nwparker](https://github.com/nwparker)，[#26856](https://github.com/stablyai/orca/pull/26856)）
- 修复（settings）：reenable terminal link Actions after an old opt-out（[@nwparker](https://github.com/nwparker)，[#26853](https://github.com/stablyai/orca/pull/26853)）
- Require pointer rest before opening activity hover cards（[@AmethystLiang](https://github.com/AmethystLiang)，[#25931](https://github.com/stablyai/orca/pull/25931)）
- 修复（browser）：double-click in the address bar selects a word, like other browsers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27371](https://github.com/stablyai/orca/pull/27371)）
- 修复（skills）：judge official skill updates by ownership, not snapshot matching（[@OrcaWin](https://github.com/OrcaWin)，[#27603](https://github.com/stablyai/orca/pull/27603)）
- 修复（browser）：end a page's mount admission whenever it leaves the store（[@brennanb2025](https://github.com/brennanb2025)，[#27755](https://github.com/stablyai/orca/pull/27755)）
- 修复（browser）：end a background page's mount admission after its first load（[@brennanb2025](https://github.com/brennanb2025)，[#27754](https://github.com/stablyai/orca/pull/27754)）

#### Windows, WSL & languages {#v1-4-225-windows-wsl-languages}

> WSL files open in Cursor’s WSL mode, background work leaves stopped distributions asleep, Windows-drive searches use the host’s ripgrep, and CodeBuddy hooks work without PowerShell 7. Korean menu and check labels are corrected.

- 修复（i18n）：correct Korean Finder menu label（[@nwparker](https://github.com/nwparker)，[#26866](https://github.com/stablyai/orca/pull/26866)）
- 修复（i18n）：correct Korean CI check translations（[@abruption](https://github.com/abruption)，[#27367](https://github.com/stablyai/orca/pull/27367)）
- 修复（wsl）：open WSL paths in Cursor's WSL mode; ignore Windows-side CLIs in WSL hook setup（[@nwparker](https://github.com/nwparker)，[#27681](https://github.com/stablyai/orca/pull/27681)）
- 修复（wsl）：restore Windows interop after another distro wipes it（[@nwparker](https://github.com/nwparker)，[#27682](https://github.com/stablyai/orca/pull/27682)）
- 性能（wsl）：search Windows-drive projects with host ripgrep（[@nwparker](https://github.com/nwparker)，[#27690](https://github.com/stablyai/orca/pull/27690)）
- 修复（wsl）：stop booting stopped distros for background work（[@nwparker](https://github.com/nwparker)，[#27684](https://github.com/stablyai/orca/pull/27684)）
- 修复（terminal-pane）：quitting Claude or Codex in cmd.exe or Git Bash removes it from the running list（[@brennanb2025](https://github.com/brennanb2025)，[#27742](https://github.com/stablyai/orca/pull/27742)）
- 修复（codebuddy）：run Windows hooks without requiring PowerShell 7（[@OrcaWin](https://github.com/OrcaWin)，[#27626](https://github.com/stablyai/orca/pull/27626)）

#### Performance & reliability {#v1-4-225-performance-reliability}

> Terminal output and usage counting do less work on the main thread, project discovery and Git checks stay responsive, Windows notifications stop freezing the app, and port scans stop leaving stuck lsof processes behind.

- 显示：the usage unit once in the status bar（[@AmethystLiang](https://github.com/AmethystLiang)，[#26869](https://github.com/stablyai/orca/pull/26869)）
- 性能（daemon）：send PTY output to main as raw bytes, not NDJSON（[@outof-place](https://github.com/outof-place)，[#27006](https://github.com/stablyai/orca/pull/27006)）
- 性能（usage）：keep per-source usage caches off the main thread（[@outof-place](https://github.com/outof-place)，[#26980](https://github.com/stablyai/orca/pull/26980)）
- 减小：memory used to count Codex usage and avoid partial totals（[@nwparker](https://github.com/nwparker)，[#26966](https://github.com/stablyai/orca/pull/26966)）
- 更新：Claude usage without rereading the whole conversation（[@nwparker](https://github.com/nwparker)，[#26967](https://github.com/stablyai/orca/pull/26967)）
- 修复（agent-hooks）：throttle and background last-status.json writes（[@nwparker](https://github.com/nwparker)，[#26822](https://github.com/stablyai/orca/pull/26822)）
- 修复（a11y）：name Agent Dashboard column regions（[@nwparker](https://github.com/nwparker)，[#26865](https://github.com/stablyai/orca/pull/26865)）
- 保持：repository detection off the main registration thread（[@nwparker](https://github.com/nwparker)，[#26760](https://github.com/stablyai/orca/pull/26760)）
- Await Git checks while discovering and importing nested projects（[@nwparker](https://github.com/nwparker)，[#26790](https://github.com/stablyai/orca/pull/26790)）
- 保持：folder Git upgrades responsive and recheck project ownership（[@nwparker](https://github.com/nwparker)，[#26791](https://github.com/stablyai/orca/pull/26791)）
- 性能（mac）：resolve terminal names once per full process capture（[@nwparker](https://github.com/nwparker)，[#27146](https://github.com/stablyai/orca/pull/27146)）
- 性能（ai-vault）：pipeline fresh transcript discovery with bounded I/O（[@outof-place](https://github.com/outof-place)，[#27009](https://github.com/stablyai/orca/pull/27009)）
- 修复（computer-use）：clean up completed permission helpers asynchronously（[@nwparker](https://github.com/nwparker)，[#27347](https://github.com/stablyai/orca/pull/27347)）
- 性能（runtime）：reduce terminal ANSI scanning work（[@nwparker](https://github.com/nwparker)，[#27344](https://github.com/stablyai/orca/pull/27344)）
- 性能（main）：release startup allocations held by journal sentinel（[@nwparker](https://github.com/nwparker)，[#27342](https://github.com/stablyai/orca/pull/27342)）
- 修复（computer-use）：release macOS screenshot memory after each request（[@f8team](https://github.com/f8team)，[#27374](https://github.com/stablyai/orca/pull/27374)）
- 性能（worktrees）：preserve Git scans when saving sort order（[@nwparker](https://github.com/nwparker)，[#27343](https://github.com/stablyai/orca/pull/27343)）
- 性能（worktrees）：skip unchanged lineage after sidebar order saves（[@nwparker](https://github.com/nwparker)，[#27384](https://github.com/stablyai/orca/pull/27384)）
- 避免：downloading unchanged paired-runtime session history（[@nwparker](https://github.com/nwparker)，[#27383](https://github.com/stablyai/orca/pull/27383)）
- 修复（renderer）：jump instead of smooth-scrolling under reduced motion（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26796](https://github.com/stablyai/orca/pull/26796)）
- 性能（daemon）：yield between bounded slices of terminal output ingest（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27578](https://github.com/stablyai/orca/pull/27578)）
- 性能（zod）：use Zod 4.6 validation and compile ACP updates（[@nwparker](https://github.com/nwparker)，[#27735](https://github.com/stablyai/orca/pull/27735)）
- 性能（ports）：stop leaving stuck lsof processes behind on a dead network mount（[@brennanb2025](https://github.com/brennanb2025)，[#27729](https://github.com/stablyai/orca/pull/27729)）
- 性能（notifications）：stop every Windows notification from freezing Orca（[@brennanb2025](https://github.com/brennanb2025)，[#27731](https://github.com/stablyai/orca/pull/27731)）

#### Relay service {#v1-4-225-relay-service}

> Relay service work improves reconnect handling, database-fault recovery, authentication during outages, capacity placement, staging checks and operational alerts. Several reserve-mode changes remain disabled or preparatory, as noted in their PR titles.

- 修复（relay）：spread drain placement over a load band instead of one empty cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26802](https://github.com/stablyai/orca/pull/26802)）
- 修复（relay）：a database fault reaching unhandledRejection no longer kills the process（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26817](https://github.com/stablyai/orca/pull/26817)）
- 新增（relay）：read-only seat feed on cells for the directors' shadow directory（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26803](https://github.com/stablyai/orca/pull/26803)）
- 新增（relay）：Cloud Storage bucket for the per-cell runtime switch files (targeted apply only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26835](https://github.com/stablyai/orca/pull/26835)）
- 新增（relay）：one-cell flag write workflow with dry run, compare-and-swap and read-back（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26837](https://github.com/stablyai/orca/pull/26837)）
- 修复（relay）：a lost database reply ends its connection within statement timeout + 10 s（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26829](https://github.com/stablyai/orca/pull/26829)）
- 新增（relay）：per-cell runtime switches read from Cloud Storage every 5 s（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26805](https://github.com/stablyai/orca/pull/26805)）
- 新增（relay）：log metrics and alerts for fenced and fatal rejections and the lease shadow (evidence code)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26839](https://github.com/stablyai/orca/pull/26839)）
- 新增（relay）：local /ready behind the per-cell readinessLocal switch (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26812](https://github.com/stablyai/orca/pull/26812)）
- 新增（relay）：dark shadow seat directory poller on directors (step 3)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26810](https://github.com/stablyai/orca/pull/26810)）
- 新增（relay）：key id on assignment leases; cells shadow-check the lease (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26815](https://github.com/stablyai/orca/pull/26815)）
- 新增（relay）：dark shadow seat compare on sticky verify and /v1/resolve (step 3)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26813](https://github.com/stablyai/orca/pull/26813)）
- 新增（relay）：read-only /v1/admin/host-whereabouts on directors (step 3)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26816](https://github.com/stablyai/orca/pull/26816)）
- 重构（relay）：share one retry schedule and identity key（[@OrcaWin](https://github.com/OrcaWin)，[#27139](https://github.com/stablyai/orca/pull/27139)）
- 修复（relay）：wait through a scheduled reconnect and name why Relay is not ready（[@OrcaWin](https://github.com/OrcaWin)，[#27141](https://github.com/stablyai/orca/pull/27141)）
- 修复（relay）：a switch-file read cut off mid-body is asked for again（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27049](https://github.com/stablyai/orca/pull/27049)）
- 新增（relay）：per-cell switches for the rejection fence and the lost-reply margin（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27057](https://github.com/stablyai/orca/pull/27057)）
- 新增（relay）：step-5 reserve core: the cell's booking book and the director's placer (inert)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27038](https://github.com/stablyai/orca/pull/27038)）
- 新增（relay）：cell reserve mode: book, admit and demote without the database (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27041](https://github.com/stablyai/orca/pull/27041)）
- 新增（relay）：flip a reserve-mode cell back without disconnecting anyone (E-mix)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27043](https://github.com/stablyai/orca/pull/27043)）
- 修复（relay）：read control-error in every state and pace repeated rate limits（[@OrcaWin](https://github.com/OrcaWin)，[#27160](https://github.com/stablyai/orca/pull/27160)）
- 修复（relay）：install the desktop Relay provider on demand（[@OrcaWin](https://github.com/OrcaWin)，[#27159](https://github.com/stablyai/orca/pull/27159)）
- 新增（relay）：directors place on reserve-mode cells from memory (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27047](https://github.com/stablyai/orca/pull/27047)）
- 修复（relay）：cells without a seat feed stay out of shadow coverage and switch state（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27058](https://github.com/stablyai/orca/pull/27058)）
- 新增（relay）：the director that booked a join writes its row about a second later (off)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27048](https://github.com/stablyai/orca/pull/27048)）
- 修复（relay）：database sweeps and ops reads skip reserve-mode cells (step-5 census, inert)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27046](https://github.com/stablyai/orca/pull/27046)）
- 新增（relay）：log metric and console alert for unreadable cell switch files (evidence code)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27024](https://github.com/stablyai/orca/pull/27024)）
- 新增（relay）：alert when a reserve-mode cell trips its dead-man（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27096](https://github.com/stablyai/orca/pull/27096)）
- 修复（relay）：the cell switch tool changes only the named switches（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27056](https://github.com/stablyai/orca/pull/27056)）
- 修复（relay）：staging director deploys run as relay-dir with rehome identity, and can register one cell's cap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27118](https://github.com/stablyai/orca/pull/27118)）
- 修复（relay）：staging director deploys set the admin identity the director trusts to gha-relay（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27121](https://github.com/stablyai/orca/pull/27121)）
- 基础设施（relay）：staging c1 gets a 600/60 cap, and c1/c4 get rehome trust, for the step-5 e2e（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27117](https://github.com/stablyai/orca/pull/27117)）
- 新增（relay）：a staging cell-flags workflow, trusted by the staging relay deploy identity（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27113](https://github.com/stablyai/orca/pull/27113)）
- 新增（relay）：a free-form staging load mode on Prove Relay Asia Staging（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27115](https://github.com/stablyai/orca/pull/27115)）
- 修复（relay）：staging sleep runs under the admission selector instead of refusing（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27126](https://github.com/stablyai/orca/pull/27126)）
- 基础设施（relay）：pin staging c1, c2 and c4 to the step-5 image for the staging e2e（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27339](https://github.com/stablyai/orca/pull/27339)）
- 基础设施（relay）：keep staging c4 on the serving director image until the director identity bootstrap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27351](https://github.com/stablyai/orca/pull/27351)）
- 基础设施（relay）：pin staging c4 to the step-5 image again after the director identity bootstrap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27352](https://github.com/stablyai/orca/pull/27352)）
- 基础设施（relay）：point the staging deploy at the pre-step-5 image for the reserve guard drill（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27357](https://github.com/stablyai/orca/pull/27357)）
- 基础设施（relay）：pin staging c4 to the step-5 image again after the reserve guard drill（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27360](https://github.com/stablyai/orca/pull/27360)）
- 重构（relay）：delete the SSH 中继 server, its build assets and tests（[@OrcaWin](https://github.com/OrcaWin)，[#27215](https://github.com/stablyai/orca/pull/27215)）
- 修复（relay-load）：reuse an Asia load principal set for shards past the fourth（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27403](https://github.com/stablyai/orca/pull/27403)）
- 修复（relay）：report event-loop freezes and keep seat polls off the cell-list read（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27405](https://github.com/stablyai/orca/pull/27405)）
- 修复（relay）：director reaches Cloud SQL through a proxy sidecar (staging), adoptable deploy shape, event-loop stall alert（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27406](https://github.com/stablyai/orca/pull/27406)）
- 杂项（relay-staging）：declare staging C4 on image E so the director can deploy it（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27462](https://github.com/stablyai/orca/pull/27462)）
- 基础设施（relay）：add staging cells c5-c7 at c2's shape for the dead-cell guard e2e（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27476](https://github.com/stablyai/orca/pull/27476)）
- 修复（relay）：cell-flags tool refuses reserve without readinessLocal=true（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27460](https://github.com/stablyai/orca/pull/27460)）
- 文档（relay）：director Cloud SQL sidecar enablement and rollback（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27461](https://github.com/stablyai/orca/pull/27461)）
- 修复（relay）：let the staging admission workflow register and promote c5-c7（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27491](https://github.com/stablyai/orca/pull/27491)）
- 修复（relay）：let a host leave a dead reserve cell without an operator fence（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27458](https://github.com/stablyai/orca/pull/27458)）
- 修复（relay）：a resumed host control adopts the token its hello proved（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27487](https://github.com/stablyai/orca/pull/27487)）
- 修复（relay）：keep verifying host tokens from the last served keys while auth is down（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27490](https://github.com/stablyai/orca/pull/27490)）
- 杂项（relay）：move the staging cells onto image F（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27570](https://github.com/stablyai/orca/pull/27570)）
- 杂项（relay）：turn on the director Cloud SQL proxy sidecar and stall alert in production（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27697](https://github.com/stablyai/orca/pull/27697)）
- 新增（relay）：declare Asia spare cell c35 as migration-only（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27695](https://github.com/stablyai/orca/pull/27695)）
- 新增（relay）：promotion path for Asia spare cell c35（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27733](https://github.com/stablyai/orca/pull/27733)）
- 杂项（relay）：move Asia cell c35 to the general same-cap lists after promotion（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27761](https://github.com/stablyai/orca/pull/27761)）

#### Reverted {#v1-4-225-reverted}

> The new-tab launch routing change and verified mobile pairing links were reverted. The older-SSH-terminal refusal and stop action were superseded by the compatibility bridge that keeps those terminals running.

- Start plain new-tab agent launches through the host's agent.launch（[@brennanb2025](https://github.com/brennanb2025)，[#26489](https://github.com/stablyai/orca/pull/26489)）
- 新增（mobile）：verified https pairing links; custom scheme carries no secret（[@OrcaWin](https://github.com/OrcaWin)，[#27475](https://github.com/stablyai/orca/pull/27475)）
- Revert "+" new-tab agent launches to the window route (reverts #26489)（[@brennanb2025](https://github.com/brennanb2025)，[#27173](https://github.com/stablyai/orca/pull/27173)）
- Revert "feat(mobile): verified https pairing links; custom scheme carries no secret" (#27475)（[@OrcaWin](https://github.com/OrcaWin)，[#27693](https://github.com/stablyai/orca/pull/27693)）
- 修复（ssh）：end an older Orca's relay terminals from the connect refusal (STA-10166)（[@OrcaWin](https://github.com/OrcaWin)，[#27748](https://github.com/stablyai/orca/pull/27748)）

#### Tests, CI & maintenance {#v1-4-225-tests-ci-maintenance}

> Checks spend less time on repeated setup and waits, layout tests cover managed SSH and mixed-version clients, and internal routing and layout preparation are consolidated. Inert or unused layout work listed here does not enable a new workspace layout in this release.

- 重构（runtime-core）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26894](https://github.com/stablyai/orca/pull/26894)）
- 重构（execution-host）：one connection-to-host helper（[@OrcaWin](https://github.com/OrcaWin)，[#26929](https://github.com/stablyai/orca/pull/26929)）
- 重构（pty）：one remote-runtime PTY id predicate（[@OrcaWin](https://github.com/OrcaWin)，[#26930](https://github.com/stablyai/orca/pull/26930)）
- 重构（runtime-rpc-terminal-io）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26895](https://github.com/stablyai/orca/pull/26895)）
- 测试（e2e）：headless layout oracle covers tab moves between groups（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26857](https://github.com/stablyai/orca/pull/26857)）
- 新增：the inert workspace layout model, Loader and Serializer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26748](https://github.com/stablyai/orca/pull/26748)）
- 重构（renderer-terminal-runtime）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26900](https://github.com/stablyai/orca/pull/26900)）
- 新增：inert layout commands and runtime transitions（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26749](https://github.com/stablyai/orca/pull/26749)）
- 重构（ipc-persistence-shared）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26902](https://github.com/stablyai/orca/pull/26902)）
- 重构（renderer-ui-store）：clean up Phase 3-3.8 code（[@OrcaWin](https://github.com/OrcaWin)，[#26903](https://github.com/stablyai/orca/pull/26903)）
- [CI] Consolidate Activity tests and remove real-time quiescence wait（[@nwparker](https://github.com/nwparker)，[#26949](https://github.com/stablyai/orca/pull/26949)）
- 重构（providers）：local git provider behind the host router（[@OrcaWin](https://github.com/OrcaWin)，[#26955](https://github.com/stablyai/orca/pull/26955)）
- 重构（runtime）：runtime git commands use a provider for every host（[@OrcaWin](https://github.com/OrcaWin)，[#26965](https://github.com/stablyai/orca/pull/26965)）
- 新增：an inert read-only layout stream and the layout round-trip self-check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26964](https://github.com/stablyai/orca/pull/26964)）
- 杂项（providers）：neutral router rationale and typed provider generation（[@OrcaWin](https://github.com/OrcaWin)，[#26925](https://github.com/stablyai/orca/pull/26925)）
- 重构（runtime）：runtime file commands use a provider for every host（[@OrcaWin](https://github.com/OrcaWin)，[#26994](https://github.com/stablyai/orca/pull/26994)）
- 重构（pty）：key the PTY registry by execution host（[@OrcaWin](https://github.com/OrcaWin)，[#26995](https://github.com/stablyai/orca/pull/26995)）
- [CI] Advance debounce clocks and simplify test fixtures（[@nwparker](https://github.com/nwparker)，[#26996](https://github.com/stablyai/orca/pull/26996)）
- 修复（layout）：an absent editor or browser map is not a round-trip change（[@OrcaWin](https://github.com/OrcaWin)，[#27007](https://github.com/stablyai/orca/pull/27007)）
- 重构（pty）：PTY controller inventory and startup waits take a host id（[@OrcaWin](https://github.com/OrcaWin)，[#26998](https://github.com/stablyai/orca/pull/26998)）
- 测试（search）：keep Kiro out of older hosts' expected history-search agents（[@brennanb2025](https://github.com/brennanb2025)，[#27002](https://github.com/stablyai/orca/pull/27002)）
- 新增：the inert layout client for local and remote runtimes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27000](https://github.com/stablyai/orca/pull/27000)）
- 重构（ssh）：register each SSH host's providers as one set（[@OrcaWin](https://github.com/OrcaWin)，[#27044](https://github.com/stablyai/orca/pull/27044)）
- 重构（ipc）：route filesystem git handlers through the host router（[@OrcaWin](https://github.com/OrcaWin)，[#27059](https://github.com/stablyai/orca/pull/27059)）
- [CI] Reduce fixture work and consolidate related tests（[@nwparker](https://github.com/nwparker)，[#27063](https://github.com/stablyai/orca/pull/27063)）
- 重构（main）：route git probe and terminal-artifact provider checks through the host router（[@OrcaWin](https://github.com/OrcaWin)，[#27066](https://github.com/stablyai/orca/pull/27066)）
- Extract subprocess handling into @orca/process-host（[@nwparker](https://github.com/nwparker)，[#26963](https://github.com/stablyai/orca/pull/26963)）
- 重构（ai-vault, native-chat）：one per-call agent root table（[@OrcaWin](https://github.com/OrcaWin)，[#27079](https://github.com/stablyai/orca/pull/27079)）
- 重构（session-tabs）：one authority-repair lane shared by every session-tabs mirror（[@OrcaWin](https://github.com/OrcaWin)，[#27093](https://github.com/stablyai/orca/pull/27093)）
- CI：skip build:packages on release tags that predate it（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27110](https://github.com/stablyai/orca/pull/27110)）
- CI（release）：read the watcher child from the supervisor's slot in the fault harness（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27120](https://github.com/stablyai/orca/pull/27120)）
- [CI] Consolidate tests, retire static scans, and update evidence（[@nwparker](https://github.com/nwparker)，[#27109](https://github.com/stablyai/orca/pull/27109)）
- Speed up process-host import enforcement in CI（[@nwparker](https://github.com/nwparker)，[#27124](https://github.com/stablyai/orca/pull/27124)）
- 重构（shell）：the local-open guard takes an owner, not settings（[@OrcaWin](https://github.com/OrcaWin)，[#27144](https://github.com/stablyai/orca/pull/27144)）
- 测试（tabs）：mock the Copy icon the tab context menu now imports（[@OrcaWin](https://github.com/OrcaWin)，[#27162](https://github.com/stablyai/orca/pull/27162)）
- 测试（wire）：give the preflight downgrade journey a non-Windows old host（[@OrcaWin](https://github.com/OrcaWin)，[#27177](https://github.com/stablyai/orca/pull/27177)）
- 杂项：remove verified unused Orca code（[@nwparker](https://github.com/nwparker)，[#27175](https://github.com/stablyai/orca/pull/27175)）
- [CI] Overlap independent process waits and remove two static tests（[@nwparker](https://github.com/nwparker)，[#27198](https://github.com/stablyai/orca/pull/27198)）
- 重构（wsl）：move the WSL guest bundle sources out of src/relay（[@OrcaWin](https://github.com/OrcaWin)，[#27174](https://github.com/stablyai/orca/pull/27174)）
- 重构（hosts）：host authorities and owner resolution（[@OrcaWin](https://github.com/OrcaWin)，[#27176](https://github.com/stablyai/orca/pull/27176)）
- 重构（hosts）：one ingest adapter for fetched rows（[@OrcaWin](https://github.com/OrcaWin)，[#27216](https://github.com/stablyai/orca/pull/27216)）
- 重构（hosts）：stamp events and optimistic rows at ingest（[@OrcaWin](https://github.com/OrcaWin)，[#27223](https://github.com/stablyai/orca/pull/27223)）
- 重构（runtime）：route adapter, split fences, ownership table, combined ratchet（[@OrcaWin](https://github.com/OrcaWin)，[#27218](https://github.com/stablyai/orca/pull/27218)）
- [CI] Reduce repeated test imports and unrelated runner allocations（[@nwparker](https://github.com/nwparker)，[#27222](https://github.com/stablyai/orca/pull/27222)）
- [CI] Reduce test teardown waits and duplicate CI setup（[@nwparker](https://github.com/nwparker)，[#27253](https://github.com/stablyai/orca/pull/27253)）
- 重构（runtime）：owner transports, the creation default and a focus-read ratchet（[@OrcaWin](https://github.com/OrcaWin)，[#27275](https://github.com/stablyai/orca/pull/27275)）
- 重构（forge）：forge reads and edits route by the repo's owner or the task source（[@OrcaWin](https://github.com/OrcaWin)，[#27276](https://github.com/stablyai/orca/pull/27276)）
- 重构（files）：file reads and edits route by the file's owner（[@OrcaWin](https://github.com/OrcaWin)，[#27278](https://github.com/stablyai/orca/pull/27278)）
- 重构（terminals）：terminal input and inspection route by the PTY's owner（[@OrcaWin](https://github.com/OrcaWin)，[#27279](https://github.com/stablyai/orca/pull/27279)）
- 重构（agents）：agent, session and port calls route by their workspace owner（[@OrcaWin](https://github.com/OrcaWin)，[#27283](https://github.com/stablyai/orca/pull/27283)）
- 重构（github）：PR and work-item calls carry the repo owner's host（[@OrcaWin](https://github.com/OrcaWin)，[#27289](https://github.com/stablyai/orca/pull/27289)）
- 重构（sources）：row-less sources and host-less surfaces name their host（[@OrcaWin](https://github.com/OrcaWin)，[#27290](https://github.com/stablyai/orca/pull/27290)）
- 重构（projects）：repo, project group and folder catalog calls route by their owner（[@OrcaWin](https://github.com/OrcaWin)，[#27288](https://github.com/stablyai/orca/pull/27288)）
- [CI] Reduce repeated test setup and real CLI waits（[@nwparker](https://github.com/nwparker)，[#27297](https://github.com/stablyai/orca/pull/27297)）
- 重构（git）：git calls route by the worktree's owner（[@OrcaWin](https://github.com/OrcaWin)，[#27291](https://github.com/stablyai/orca/pull/27291)）
- [CI] Reduce repeated test setup and unnecessary packaging（[@nwparker](https://github.com/nwparker)，[#27308](https://github.com/stablyai/orca/pull/27308)）
- 重构（worktrees）：worktree create, listing, removal and repo hook/ref reads route by their owner（[@OrcaWin](https://github.com/OrcaWin)，[#27298](https://github.com/stablyai/orca/pull/27298)）
- 杂项（lint）：bypassing owner routing fails lint（[@OrcaWin](https://github.com/OrcaWin)，[#27313](https://github.com/stablyai/orca/pull/27313)）
- 杂项（settings）：rename "Active Server" to "Default host for new projects"（[@OrcaWin](https://github.com/OrcaWin)，[#27286](https://github.com/stablyai/orca/pull/27286)）
- [CI] Refresh unit timing weights and reduce repeated test setup（[@nwparker](https://github.com/nwparker)，[#27315](https://github.com/stablyai/orca/pull/27315)）
- 修复（cli）：preserve alias recovery while guarding destructive suggestions（[@nwparker](https://github.com/nwparker)，[#26934](https://github.com/stablyai/orca/pull/26934)）
- 文档（rpc）：a paired client runs commands as you; say so when pairing（[@OrcaWin](https://github.com/OrcaWin)，[#27317](https://github.com/stablyai/orca/pull/27317)）
- CI（e2e）：run the layout oracle on PRs that change layout writers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27103](https://github.com/stablyai/orca/pull/27103)）
- 测试（relay）：deterministic step-5 simulation with invariants 1-8（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27040](https://github.com/stablyai/orca/pull/27040)）
- 测试（e2e）：pass the catalog owner to the remaining fetchRepos callers（[@OrcaWin](https://github.com/OrcaWin)，[#27325](https://github.com/stablyai/orca/pull/27325)）
- 测试（relay）：load generator can send two concurrent assigns per host (--duplicate-assign-probes)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27107](https://github.com/stablyai/orca/pull/27107)）
- 测试（e2e）：pass the catalog owner to the remaining catalog fetches and creates（[@OrcaWin](https://github.com/OrcaWin)，[#27338](https://github.com/stablyai/orca/pull/27338)）
- 测试（e2e）：cover SSH user journeys on an orcad-managed host（[@OrcaWin](https://github.com/OrcaWin)，[#27323](https://github.com/stablyai/orca/pull/27323)）
- List the cold-relaunch tab-order swap as known on main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27353](https://github.com/stablyai/orca/pull/27353)）
- 测试（native-chat）：unmount the cut-turn notice hooks after each test（[@OrcaWin](https://github.com/OrcaWin)，[#27358](https://github.com/stablyai/orca/pull/27358)）
- Record a display-only snapshot of each paired server's tabs (inert)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27359](https://github.com/stablyai/orca/pull/27359)）
- 修复：keep NUL-separated source literals searchable（[@nwparker](https://github.com/nwparker)，[#26864](https://github.com/stablyai/orca/pull/26864)）
- [CI] Fix test fixtures and reduce unnecessary test setup（[@nwparker](https://github.com/nwparker)，[#27330](https://github.com/stablyai/orca/pull/27330)）
- 测试（main）：fail if the journal's shared no-row error returns (follow-up to #27342)（[@nwparker](https://github.com/nwparker)，[#27375](https://github.com/stablyai/orca/pull/27375)）
- 测试（runtime）：enforce ANSI preview-final pre-filter invariant（[@nwparker](https://github.com/nwparker)，[#27376](https://github.com/stablyai/orca/pull/27376)）
- 修复（dev）：keep Node-only Quick Open path accumulator out of the renderer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27372](https://github.com/stablyai/orca/pull/27372)）
- 测试（e2e）：reusable phone-mirror test setup and baseline specs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26412](https://github.com/stablyai/orca/pull/26412)）
- [CI] Reduce test teardown and scope server qualification（[@nwparker](https://github.com/nwparker)，[#27380](https://github.com/stablyai/orca/pull/27380)）
- 性能（ci）：overlap Bun typechecking and skip redundant alias scans（[@nwparker](https://github.com/nwparker)，[#27382](https://github.com/stablyai/orca/pull/27382)）
- CI（relay-staging）：asia-east2 staging load from a hosted runner（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27393](https://github.com/stablyai/orca/pull/27393)）
- 测试（ci）：point server-scope qualification fixtures at SSH after relay deletion（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27392](https://github.com/stablyai/orca/pull/27392)）
- CI（relay-staging）：split the staging load across two hosted runners（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27402](https://github.com/stablyai/orca/pull/27402)）
- 测试（relay）：load generator can reopen a closed phone splice instead of failing the run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27379](https://github.com/stablyai/orca/pull/27379)）
- 重构（runtime）：compose typed file search and listing ownership（[@nwparker](https://github.com/nwparker)，[#27396](https://github.com/stablyai/orca/pull/27396)）
- CI：ship the managed SSH server (orcad template) in hourly and daily builds（[@OrcaWin](https://github.com/OrcaWin)，[#27407](https://github.com/stablyai/orca/pull/27407)）
- 测试（e2e）：delete helpers orphaned by relay deletion（[@OrcaWin](https://github.com/OrcaWin)，[#27411](https://github.com/stablyai/orca/pull/27411)）
- CI：drop the relay Windows process-tree job from desktop packaging（[@OrcaWin](https://github.com/OrcaWin)，[#27412](https://github.com/stablyai/orca/pull/27412)）
- 重构（runtime）：remove unused text-search spawn hook（[@nwparker](https://github.com/nwparker)，[#27418](https://github.com/stablyai/orca/pull/27418)）
- 测试（ssh）：hostile-host cells state managed-orcad expectations only（[@OrcaWin](https://github.com/OrcaWin)，[#27419](https://github.com/stablyai/orca/pull/27419)）
- 新增：manual cleanup for worktree Electron storage（[@nwparker](https://github.com/nwparker)，[#27414](https://github.com/stablyai/orca/pull/27414)）
- 杂项（ratchet）：one focus-read ratchet（[@OrcaWin](https://github.com/OrcaWin)，[#27426](https://github.com/stablyai/orca/pull/27426)）
- 修复（runtime）：scope layout.unsubscribe to the caller's connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27423](https://github.com/stablyai/orca/pull/27423)）
- 测试（ssh）：Windows host lane drops relay cells（[@OrcaWin](https://github.com/OrcaWin)，[#27421](https://github.com/stablyai/orca/pull/27421)）
- 重构（renderer）：delete dead owner and settings shims（[@OrcaWin](https://github.com/OrcaWin)，[#27430](https://github.com/stablyai/orca/pull/27430)）
- 杂项：delete verified-unused modules and exports（[@OrcaWin](https://github.com/OrcaWin)，[#27438](https://github.com/stablyai/orca/pull/27438)）
- 重构（rpc）：delete the SSH-bridge caller scope（[@OrcaWin](https://github.com/OrcaWin)，[#27440](https://github.com/stablyai/orca/pull/27440)）
- 重构（rpc）：name the terminal.subscribe modules（[@OrcaWin](https://github.com/OrcaWin)，[#27444](https://github.com/stablyai/orca/pull/27444)）
- 重构（cli）：extract the serve supervisor's after-exit decision into a pure policy（[@OrcaWin](https://github.com/OrcaWin)，[#27446](https://github.com/stablyai/orca/pull/27446)）
- 重构（orcad）：shared serve-option validation; no daemon barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27443](https://github.com/stablyai/orca/pull/27443)）
- [CI] Remove copied probes and advance queued-card test waits（[@nwparker](https://github.com/nwparker)，[#27447](https://github.com/stablyai/orca/pull/27447)）
- 测试（e2e）：one posixShellQuote; docker-ssh-host fixture names (Phase 3.99 0.11b)（[@OrcaWin](https://github.com/OrcaWin)，[#27449](https://github.com/stablyai/orca/pull/27449)）
- 新增（runtime）：accept a declared spawn intent from paired clients（[@OrcaWin](https://github.com/OrcaWin)，[#27452](https://github.com/stablyai/orca/pull/27452)）
- 测试（e2e）：one managed-host setup path and skip gate for the ssh-orcad specs (Phase 3.99 0.11a)（[@OrcaWin](https://github.com/OrcaWin)，[#27465](https://github.com/stablyai/orca/pull/27465)）
- 重构（ssh）：drop the legacy-relay bridge and the relay branch of the terminal gate（[@OrcaWin](https://github.com/OrcaWin)，[#27471](https://github.com/stablyai/orca/pull/27471)）
- 重构（providers）：an ssh: route carries no provider and throws one typed error（[@OrcaWin](https://github.com/OrcaWin)，[#27477](https://github.com/stablyai/orca/pull/27477)）
- [CI] Clean up runtime test callbacks（[@nwparker](https://github.com/nwparker)，[#27483](https://github.com/stablyai/orca/pull/27483)）
- 重构（runtime）：paired sockets authenticate to a device principal（[@OrcaWin](https://github.com/OrcaWin)，[#27480](https://github.com/stablyai/orca/pull/27480)）
- 重构（rpc）：one dispatcher（[@OrcaWin](https://github.com/OrcaWin)，[#27486](https://github.com/stablyai/orca/pull/27486)）
- 重构（terminal）：panes have two transports, local or remote runtime（[@OrcaWin](https://github.com/OrcaWin)，[#27489](https://github.com/stablyai/orca/pull/27489)）
- 重构（runtime）：runtime git and file callers drop SSH arms（[@OrcaWin](https://github.com/OrcaWin)，[#27501](https://github.com/stablyai/orca/pull/27501)）
- [CI] Remove duplicate terminal backlog test replays（[@nwparker](https://github.com/nwparker)，[#27503](https://github.com/stablyai/orca/pull/27503)）
- 重构（pty）：delete the SSH PTY provider and its registry slot（[@OrcaWin](https://github.com/OrcaWin)，[#27499](https://github.com/stablyai/orca/pull/27499)）
- [CI] Remove a simulated terminal credit correctness check（[@nwparker](https://github.com/nwparker)，[#27507](https://github.com/stablyai/orca/pull/27507)）
- 重构（main）：agent detection, automations, skills, AI vault and ephemeral VM drop SSH provider arms（[@OrcaWin](https://github.com/OrcaWin)，[#27511](https://github.com/stablyai/orca/pull/27511)）
- [CI] Wait for delayed Codex answers before test cleanup（[@nwparker](https://github.com/nwparker)，[#27516](https://github.com/stablyai/orca/pull/27516)）
- 重构（pty）：delete relay-fed SSH output intake and projection threading（[@OrcaWin](https://github.com/OrcaWin)，[#27515](https://github.com/stablyai/orca/pull/27515)）
- [CI] Speed up Mobile test execution（[@nwparker](https://github.com/nwparker)，[#27521](https://github.com/stablyai/orca/pull/27521)）
- 重构（terminal）：move the mounted-terminal registry out of the graph file（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27427](https://github.com/stablyai/orca/pull/27427)）
- 重构（layout）：add the pane start, exit, first-surface and rename rules (unused)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27432](https://github.com/stablyai/orca/pull/27432)）
- 重构（ipc）：worktree handlers are local or runtime only（[@OrcaWin](https://github.com/OrcaWin)，[#27528](https://github.com/stablyai/orca/pull/27528)）
- [CI] Run focused checks for Mobile CI tool changes（[@nwparker](https://github.com/nwparker)，[#27532](https://github.com/stablyai/orca/pull/27532)）
- 杂项（ratchet）：layout-writer ratchets for main and renderer（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27431](https://github.com/stablyai/orca/pull/27431)）
- 重构（pty）：drop SSH spawn, liveness and kill branches（[@OrcaWin](https://github.com/OrcaWin)，[#27529](https://github.com/stablyai/orca/pull/27529)）
- 新增（workspace-layout）：pure old-client translators for layout methods (inert)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27534](https://github.com/stablyai/orca/pull/27534)）
- 重构（remote）：one paired E2EE handshake core for desktop, CLI, web and mobile clients（[@OrcaWin](https://github.com/OrcaWin)，[#27523](https://github.com/stablyai/orca/pull/27523)）
- 重构（layout）：drop unused snapshot receipt fields and add the snapshot read method（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27536](https://github.com/stablyai/orca/pull/27536)）
- 重构（terminal）：keep mobile content-fact caches in their producers（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27537](https://github.com/stablyai/orca/pull/27537)）
- 重构（layout）：add the per-view store, pane status and runtime leaf-record projection (unused)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27535](https://github.com/stablyai/orca/pull/27535)）
- 修复（ci）：a removed layout writer no longer fails other PRs' ratchet check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27557](https://github.com/stablyai/orca/pull/27557)）
- 杂项（ratchet）：prune main layout-writer baseline after #27529（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27554](https://github.com/stablyai/orca/pull/27554)）
- 重构（persistence）：retire the dead SSH PTY lease writers（[@OrcaWin](https://github.com/OrcaWin)，[#27555](https://github.com/stablyai/orca/pull/27555)）
- 重构（layout）：add the editor tab view type to the layout model (unused)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27541](https://github.com/stablyai/orca/pull/27541)）
- 重构（rpc）：delete host-side terminal source-range acks（[@OrcaWin](https://github.com/OrcaWin)，[#27546](https://github.com/stablyai/orca/pull/27546)）
- 重构（layout）：keep compatibility code in named folders behind one entry（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27556](https://github.com/stablyai/orca/pull/27556)）
- 测试（perf）：layout latency instruments and a main baseline（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27538](https://github.com/stablyai/orca/pull/27538)）
- [CI] Freeze legacy journal partition receipts to reduce test work（[@nwparker](https://github.com/nwparker)，[#27559](https://github.com/stablyai/orca/pull/27559)）
- 重构（terminal）：drop the relay-held error token（[@OrcaWin](https://github.com/OrcaWin)，[#27564](https://github.com/stablyai/orca/pull/27564)）
- 重构（store）：delete direct-SSH terminal ledgers（[@OrcaWin](https://github.com/OrcaWin)，[#27569](https://github.com/stablyai/orca/pull/27569)）
- 重构（terminal）：paste reads the live transport（[@OrcaWin](https://github.com/OrcaWin)，[#27572](https://github.com/stablyai/orca/pull/27572)）
- [CI] Improve test clocks and dependency fixtures（[@nwparker](https://github.com/nwparker)，[#27574](https://github.com/stablyai/orca/pull/27574)）
- 重构（remote）：clients connect through a paired-connection handle, not a pairing offer（[@OrcaWin](https://github.com/OrcaWin)，[#27533](https://github.com/stablyai/orca/pull/27533)）
- Replace three copied new-terminal tab-order blocks with the shared helper（[@brennanb2025](https://github.com/brennanb2025)，[#26771](https://github.com/stablyai/orca/pull/26771)）
- 测试（e2e）：layout oracle reads the live runtime layout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27560](https://github.com/stablyai/orca/pull/27560)）
- 测试（native-chat）：keep #26586's path-link cases as regression tests（[@brennanb2025](https://github.com/brennanb2025)，[#26819](https://github.com/stablyai/orca/pull/26819)）
- 重构（renderer）：delete the direct-SSH authority and reconnect coordinator（[@OrcaWin](https://github.com/OrcaWin)，[#27587](https://github.com/stablyai/orca/pull/27587)）
- [CI] Narrow daemon fixture checks and advance coordinator test clocks（[@nwparker](https://github.com/nwparker)，[#27592](https://github.com/stablyai/orca/pull/27592)）
- 重构（renderer）：no client SSH operation arms in project creation or Native Chat（[@OrcaWin](https://github.com/OrcaWin)，[#27593](https://github.com/stablyai/orca/pull/27593)）
- 测试（e2e）：open the oracle's headless layout stream with a paired connection（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27601](https://github.com/stablyai/orca/pull/27601)）
- 重构（ssh）：SSH status copy lives in renderer/src/ssh and says what the build does（[@OrcaWin](https://github.com/OrcaWin)，[#27604](https://github.com/stablyai/orca/pull/27604)）
- 杂项（layout）：delete the dev-only layout round-trip watch（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27597](https://github.com/stablyai/orca/pull/27597)）
- 重构（renderer）：no rebound-settings owner pattern（[@OrcaWin](https://github.com/OrcaWin)，[#27607](https://github.com/stablyai/orca/pull/27607)）
- 重构（ipc）：filesystem and repo handlers are local or runtime only（[@OrcaWin](https://github.com/OrcaWin)，[#27609](https://github.com/stablyai/orca/pull/27609)）
- 重构（renderer）：one default-host read; one catalog fan-out（[@OrcaWin](https://github.com/OrcaWin)，[#27613](https://github.com/stablyai/orca/pull/27613)）
- [CI] Check real I/O progress during worktree deletion（[@nwparker](https://github.com/nwparker)，[#27620](https://github.com/stablyai/orca/pull/27620)）
- CI：the layout oracle gates merges（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27600](https://github.com/stablyai/orca/pull/27600)）
- 测试（launch）：pin what each agent launcher produces on main today（[@brennanb2025](https://github.com/brennanb2025)，[#27189](https://github.com/stablyai/orca/pull/27189)）
- 测试（pty）：pin launch race fixes on both spawn paths before merging them（[@brennanb2025](https://github.com/brennanb2025)，[#27187](https://github.com/stablyai/orca/pull/27187)）
- 测试：run a 结构化聊天 against the packaged headless server（[@brennanb2025](https://github.com/brennanb2025)，[#26527](https://github.com/stablyai/orca/pull/26527)）
- 重构（providers）：delete the SSH git and filesystem providers and relay-only wiring（[@OrcaWin](https://github.com/OrcaWin)，[#27644](https://github.com/stablyai/orca/pull/27644)）
- 重构（settings）：one settings host-scope type and label（[@OrcaWin](https://github.com/OrcaWin)，[#27629](https://github.com/stablyai/orca/pull/27629)）
- 测试（e2e）：mixed-version, two-client and phone layout baselines recorded on main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#27688](https://github.com/stablyai/orca/pull/27688)）
- CI（e2e）：one managed-SSH lane and routing regex; no relay build in e2e setup（[@OrcaWin](https://github.com/OrcaWin)，[#27640](https://github.com/stablyai/orca/pull/27640)）
- 重构（orcad）：deploy and serve orcad through a host transport interface（[@nwparker](https://github.com/nwparker)，[#27686](https://github.com/stablyai/orca/pull/27686)）
- [CI] Fix account fixture timestamps and SSH listing assertions（[@nwparker](https://github.com/nwparker)，[#27704](https://github.com/stablyai/orca/pull/27704)）
- 重构（ssh）：one pinned-runtime host target（[@OrcaWin](https://github.com/OrcaWin)，[#27709](https://github.com/stablyai/orca/pull/27709)）
- 重构（startup）：one agent-hook runtime binding set for every host（[@OrcaWin](https://github.com/OrcaWin)，[#27720](https://github.com/stablyai/orca/pull/27720)）
- 修复（bench）：load benchmark sources as file URLs so they run on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#27621](https://github.com/stablyai/orca/pull/27621)）
- 修复（bench）：make bench:idle-cpu build, sample CPU and parse the process table on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#27622](https://github.com/stablyai/orca/pull/27622)）
- [CI] Replace Codex fixture executables atomically（[@nwparker](https://github.com/nwparker)，[#27747](https://github.com/stablyai/orca/pull/27747)）
- Speed up import checks, localization extraction, and CI typechecking（[@nwparker](https://github.com/nwparker)，[#27727](https://github.com/stablyai/orca/pull/27727)）
- 重构（orcad）：transport-neutral command channel and generic stdio bridge listener（[@nwparker](https://github.com/nwparker)，[#27689](https://github.com/stablyai/orca/pull/27689)）
- Share historical test source and add manual cache cleanup（[@nwparker](https://github.com/nwparker)，[#27743](https://github.com/stablyai/orca/pull/27743)）
- 测试（launch）：pin what the "+" launchers produce on main today（[@brennanb2025](https://github.com/brennanb2025)，[#27691](https://github.com/stablyai/orca/pull/27691)）
- 测试（renderer）：one runtime-environment bridge fixture（[@OrcaWin](https://github.com/OrcaWin)，[#27780](https://github.com/stablyai/orca/pull/27780)）
- 重构（terminal）：one remote input hold（[@OrcaWin](https://github.com/OrcaWin)，[#27781](https://github.com/stablyai/orca/pull/27781)）
- 重构（shared）：dedupe the local-default connection-to-host conversion and the trim helpers（[@OrcaWin](https://github.com/OrcaWin)，[#27797](https://github.com/stablyai/orca/pull/27797)）
- 重构（pty）：no ipc/pty.ts barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27798](https://github.com/stablyai/orca/pull/27798)）
- 杂项（ratchet）：one ratchet baseline library（[@OrcaWin](https://github.com/OrcaWin)，[#27788](https://github.com/stablyai/orca/pull/27788)）
- 重构（providers）：import provider contracts directly (main)（[@OrcaWin](https://github.com/OrcaWin)，[#27813](https://github.com/stablyai/orca/pull/27813)）
- 测试（daemon）：remove clock jitter from startup-budget check（[@nwparker](https://github.com/nwparker)，[#27850](https://github.com/stablyai/orca/pull/27850)）
- 重构（ssh）：delete relay-only GC, takeover and install remnants（[@OrcaWin](https://github.com/OrcaWin)，[#27770](https://github.com/stablyai/orca/pull/27770)）
- 重构（cli）：serve children spawn through process-host（[@OrcaWin](https://github.com/OrcaWin)，[#27760](https://github.com/stablyai/orca/pull/27760)）
- 重构（ssh）：remove the ssh-relay-deploy-helpers re-export module（[@OrcaWin](https://github.com/OrcaWin)，[#27961](https://github.com/stablyai/orca/pull/27961)）
- 重构（build）：relay survivors named for what they are（[@OrcaWin](https://github.com/OrcaWin)，[#27962](https://github.com/stablyai/orca/pull/27962)）
- 重构（orcad）：orcad artifacts live under orcad/ and node-runtime/（[@OrcaWin](https://github.com/OrcaWin)，[#27963](https://github.com/stablyai/orca/pull/27963)）
- 重构（providers）：import provider contracts directly (runtime)（[@OrcaWin](https://github.com/OrcaWin)，[#27965](https://github.com/stablyai/orca/pull/27965)）
- 重构（providers）：import provider contracts directly (ipc); delete the barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27966](https://github.com/stablyai/orca/pull/27966)）
- 重构（renderer）：remove the web-runtime-session barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27967](https://github.com/stablyai/orca/pull/27967)）
- 重构（renderer）：remove the web-session-tabs-sync barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27969](https://github.com/stablyai/orca/pull/27969)）
- 重构（renderer）：remove the runtime-file-client barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27975](https://github.com/stablyai/orca/pull/27975)）
- 重构（renderer）：remove the runtime-git-client barrel（[@OrcaWin](https://github.com/OrcaWin)，[#27977](https://github.com/stablyai/orca/pull/27977)）
- 重构（renderer）：remove the web-terminal-surface-id re-export（[@OrcaWin](https://github.com/OrcaWin)，[#27981](https://github.com/stablyai/orca/pull/27981)）
- 重构（renderer）：remove the keyboard-handlers barrel and partial re-exports（[@OrcaWin](https://github.com/OrcaWin)，[#27986](https://github.com/stablyai/orca/pull/27986)）
- 重构（renderer）：name target converters by meaning; drop re-export shims（[@OrcaWin](https://github.com/OrcaWin)，[#27992](https://github.com/stablyai/orca/pull/27992)）
- CI：stop new main-process code from freezing Orca with synchronous launches（[@brennanb2025](https://github.com/brennanb2025)，[#27756](https://github.com/stablyai/orca/pull/27756)）

### 新贡献者 {#v1-4-225-contributors}

- [@w-felipe360](https://github.com/w-felipe360) 首次贡献于 [#26695](https://github.com/stablyai/orca/pull/26695)
- [@outof-place](https://github.com/outof-place) 首次贡献于 [#27006](https://github.com/stablyai/orca/pull/27006)
- [@fabricedge](https://github.com/fabricedge) 首次贡献于 [#26881](https://github.com/stablyai/orca/pull/26881)
- [@parkavenue9639](https://github.com/parkavenue9639) 首次贡献于 [#24964](https://github.com/stablyai/orca/pull/24964)
- [@abruption](https://github.com/abruption) 首次贡献于 [#27367](https://github.com/stablyai/orca/pull/27367)
- [@f8team](https://github.com/f8team) 首次贡献于 [#27374](https://github.com/stablyai/orca/pull/27374)
- [@vampik33](https://github.com/vampik33) 首次贡献于 [#25211](https://github.com/stablyai/orca/pull/25211)
- [@benjaminb10](https://github.com/benjaminb10) 首次贡献于 [#27346](https://github.com/stablyai/orca/pull/27346)
- [@sergeytiron](https://github.com/sergeytiron) 首次贡献于 [#23459](https://github.com/stablyai/orca/pull/23459)

---

**完整变更对照：** [v1.4.224...v1.4.225](https://github.com/stablyai/orca/compare/v1.4.224...v1.4.225)

## v1.4.224 自动化可按次指定模型与 effort，SSH 主机改跑托管 Orca 服务器 {#v1-4-224}

2026年10月10日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.224)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-224-short}

- **自动化现在可以为每次运行指定 Agent 的模型和 effort。** 在自动化编辑器里打开 Advanced，填入 **Extra agent arguments**（或在 `orca automations create` 与 `edit` 时使用 `--extra-agent-args`），例如 `-model haiku --effort high`。目前对 Claude、Codex、Grok 和 CodeBuddy（模型和 effort）、Cursor（模型，effort 随之）和 OMP（模型）有效，更多 Agent 支持即将到来。每次运行都会开启全新会话，其他自动化仍保持宿主默认。另外，在已有工作区的 Orca 服务器上定时运行时，任务现在会交给启动后才读取它的 Agent（如 Aider、Goose 和 Amp），不再让它们空等。
- **SSH 主机现在运行托管的 Orca 服务器。** Orca 自带运行时，连接时自动设置，不再因为主机 Node 版本不对或缺少构建工具而失败。没有打开终端的主机会在下次连接时切换，并带上项目、文件夹和已打开的编辑器标签。有打开终端的主机继续按原方式工作，并提供 **Move to a managed Orca server**，会重启那些终端。无法运行的主机保持现有连接，Settings → SSH Hosts 会说明原因。你可以在 Settings → Managed servers 里查看、更新、回滚、**Recover** 或 **Forget** 每一台服务器。
- **Native Chat（实验性）：** 如果已打开 Chat UI 且默认视图是聊天，支持的 Agent 现在默认以结构化聊天打开。如果默认是 Terminal，新的 Agent 标签仍留在终端，并有一次性提示说明变化、允许打开聊天模式。你可以从标签右键菜单或 Agent Session History（**Resume in New CLI** / **Resume in New Native Chat**）在聊天和终端之间移动对话。
- **Native Chat 更多内容：** 近期版本的 OpenCode（包括 2.x）、Pi 和 OMP 在这台计算机上以结构化聊天打开。Agent 可以在回复里直接绘制图表、示意图和原型（桌面和手机均可，可在 Settings → Chat → Inline visuals 关闭）。Cmd/Ctrl+F 搜索聊天，可以用 **Add to chat** 引用回复的一部分，上下方向键回忆你发送过的每一条 prompt，数字键回答 Agent 的问题，长消息和工具调用序列折叠成一行。模型选择器不再等待 Agent 启动，Codex 和 Pi 在你发送前就会说明未登录，被 Orca 中断的回复会说明原因并提供 **Continue**。Grok 会显示其子 Agent，Grok、OpenCode 和 OMP 支持 `/compact`。
- **SSH 与远程终端：** 网络中断期间你输入的按键会按顺序精确送达一次，回滚和窗格大小在重连后仍在，打开的标签在托管服务器更新后会重新附着。打印文字的 shell 启动文件、有数万条目的文件夹和 64 位 ARM Linux 服务器不再导致连接失败或断开。当两台机器共享路径时，文件、浏览器标签、链接和拖放会留在它们所属的机器上。`orca serve` 现在会加载它的 SSH 主机，在服务机器上退出窗口不再停止服务器。
- **手机：** 在手机上打开的浏览器标签会在桌面最小化或屏保时继续加载，聊天可视化和子 Agent 会显示在手机的 Native Chat 里，视频和音乐文件可以在预览中播放。
- **工作区与编辑：** 你可以把多个 pull request、merge request 和任务附加到同一个工作区。悬停标签会显示带图标和程序的完整标题，Force Delete 可以记住 **Always force delete**，**Continue in New Session** 现在改为 **Hand Off to Another Agent**。Markdown 会显示 GitHub 风格的 callout（如 `> [!NOTE]`），PDF 可以用捏合和 Cmd/Ctrl+`=`/`-` 缩放，从 Finder 或文件资源管理器拖入的文件会精确落到你放下的窗格、文件夹或编辑器。
- **其他：** 状态栏的用量仪表现在默认使用更短的 Compact 视图（除非你已选择过，Detailed 仍可用），Stage All 即使列表上限为 1000 也会暂存所有更改，即使 `gh` 启动器卡住，Orca 也能检测到 GitHub CLI。

### 已知问题 {#v1-4-224-known-issues}

**SSH 主机上的 `orca` 命令：** 默认情况下，在 SSH 主机上运行的 `orca` 命令只能触及该主机自己的终端和编排消息。要让那里的 Agent 通过 `orca` 创建 worktree、打开终端或分发工作，请为该主机打开 **Allow this host's orca CLI to control Orca**（Settings → SSH Hosts → 编辑主机 → Advanced Connection）（#26483）。

**降级到 v1.4.223：** 在 v1.4.224 启动的终端，在你再次更新之前，v1.4.223 无法触及。附加到文件夹工作区的额外 pull request、merge request 和任务会被移除。如果 Chat UI 是打开的，再次更新后可能会关闭；请在 Settings → Experimental 里重新打开。已移动到托管服务器的 SSH 主机在 v1.4.223 里通过旧连接工作；如果你在那里添加或移除项目，更新后主机会显示 "Changed on an older Orca" 并提供 **Move the new projects**。Orca 仍拒绝从版本选择器安装早于 v1.4.214 的版本。要回到那些版本，先关掉 Orca，运行 `orca profile state rollback --latest-json`，再手动安装旧版本（#23262）。

**更新后的终端：** 这一版为新终端启动新的终端后台服务。已经打开的终端继续跑在前一个服务上，因此本版本的改动只作用于更新后打开的终端。

**来自 v1.4.217 或更早版本的 Native Chat：** 如果你在 v1.4.217 或更早版本用过实验性 Native Chat，并直接更新到 v1.4.224，更早的 Native Chat 不会出现。它们的文件仍在磁盘上（#26038）。

**从 shell 历史重新启动：** 当 Agent 的启动命令很长或跨越多行时，shell 历史里保存的是一条短的一次性命令，因此按上方向键再按 Enter 不会再次启动该 Agent（#23962）。

**从手机创建的工作区：** 在手机上从 issue、pull request 或 Linear 条目创建带 Agent 的工作区，仍会把桌面移到该工作区（#26025）。
### 产品体验 {#v1-4-224-product}

#### 自动化 {#v1-4-224-automations}

> 每个自动化可以设置自己的模型和 effort，已有工作区里由服务器运行的自动化现在会把任务交给启动后才读取它的 Agent。

- 允许自动化每次运行传递额外的 Agent 参数（[@AmethystLiang](https://github.com/AmethystLiang)，[#26659](https://github.com/stablyai/orca/pull/26659)）
- 把定时自动化的 prompt 发送给启动后才读取它的 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#26703](https://github.com/stablyai/orca/pull/26703)）

#### Native Chat（实验性） {#v1-4-224-native-chat-experimental}

> 结构化聊天成为 Chat UI 默认（Terminal 默认用户保持不变），OpenCode、Pi 和 OMP 加入结构化聊天，Agent 可以显示内联可视化，聊天获得查找、引用、prompt 回忆、更整齐的工具行、更清晰的登录和停止消息，以及更稳定的消息队列。

- 把实验性 Native Chat 默认设为结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#22933](https://github.com/stablyai/orca/pull/22933)）
- 保持 Chat UI 用户默认 Terminal 时仍用终端，并在升级提示中提供聊天模式开关（[@brennanb2025](https://github.com/brennanb2025)，[#26915](https://github.com/stablyai/orca/pull/26915)）
- 为升级前已开启 Experimental Chat UI 的用户显示一次性 Native Chat 升级提示（[@brennanb2025](https://github.com/brennanb2025)，[#26710](https://github.com/stablyai/orca/pull/26710)）
- 从标签右键菜单提供 Resume in New CLI / Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#26705](https://github.com/stablyai/orca/pull/26705)）
- 新增（session-history）：Resume in New CLI 把 Native Chat 的对话分叉到终端（[@brennanb2025](https://github.com/brennanb2025)，[#26336](https://github.com/stablyai/orca/pull/26336)）
- 通过 Agent Client Protocol 打开 OpenCode 结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#25845](https://github.com/stablyai/orca/pull/25845)）
- 新增（opencode）：也在结构化聊天中打开 OpenCode 2.x（[@brennanb2025](https://github.com/brennanb2025)，[#26395](https://github.com/stablyai/orca/pull/26395)）
- 新增：通过 RPC 模式打开 Pi 的结构化 Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#25851](https://github.com/stablyai/orca/pull/25851)）
- 新增（omp）：通过 ACP 在结构化聊天中打开 OMP（[@brennanb2025](https://github.com/brennanb2025)，[#26401](https://github.com/stablyai/orca/pull/26401)）
- 在每个 Agent 会话启动前显示模型和 effort 选项（[@brennanb2025](https://github.com/brennanb2025)，[#26407](https://github.com/stablyai/orca/pull/26407)）
- 修复（native-chat）：选择模型或 effort 后把焦点返回编写器（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26574](https://github.com/stablyai/orca/pull/26574)）
- 新增（native-chat）：在结构化聊天中内联显示 Agent 绘制的可视化内容（[@brennanb2025](https://github.com/brennanb2025)，[#26103](https://github.com/stablyai/orca/pull/26103)）
- 新增（native-chat）：教聊天 Agent 在自己的文件夹中显示内联可视化（[@brennanb2025](https://github.com/brennanb2025)，[#26099](https://github.com/stablyai/orca/pull/26099)）
- Native Chat：添加内联可视化开关并简化技能（[@brennanb2025](https://github.com/brennanb2025)，[#26358](https://github.com/stablyai/orca/pull/26358)）
- Native Chat：为 Grok、OpenCode 和 OMP 聊天提供内联可视化（[@brennanb2025](https://github.com/brennanb2025)，[#26530](https://github.com/stablyai/orca/pull/26530)）
- 允许页面内链接切换聊天可视化中的章节（[@brennanb2025](https://github.com/brennanb2025)，[#26729](https://github.com/stablyai/orca/pull/26729)）
- Native Chat：Cmd/Ctrl+F 在聊天中查找（[@brennanb2025](https://github.com/brennanb2025)，[#26517](https://github.com/stablyai/orca/pull/26517)）
- 新增（native-chat）：把 Agent 回复的选中部分引用到编写器（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26018](https://github.com/stablyai/orca/pull/26018)）
- 修复（native-chat）：在编写器用上下方向键回忆每一条已发送的 prompt（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26044](https://github.com/stablyai/orca/pull/26044)）
- 新增（native-chat）：用开关折叠长的已发送消息（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#25996](https://github.com/stablyai/orca/pull/25996)）
- 修复（native-chat）：完整阅读排队中的消息（[@brennanb2025](https://github.com/brennanb2025)，[#26004](https://github.com/stablyai/orca/pull/26004)）
- 修复（native-chat）：把回复之间的思考和工具调用折叠成一行（[@brennanb2025](https://github.com/brennanb2025)，[#26048](https://github.com/stablyai/orca/pull/26048)）
- 新增（native-chat）：用有界调用列表压缩工具运行（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26285](https://github.com/stablyai/orca/pull/26285)）
- 新增（native-chat）：用回复预览每个轨道刻度，并让跳转落在顶部（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26056](https://github.com/stablyai/orca/pull/26056)）
- 新增（native-chat）：为问题提供数字键和自动前进（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26288](https://github.com/stablyai/orca/pull/26288)）
- 新增（native-chat）：让 Native Chat 回复流入，跟随时代码本滑动（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26238](https://github.com/stablyai/orca/pull/26238)）
- 修复回复结束后仍停留在错误状态的 Mermaid 图表（[@brennanb2025](https://github.com/brennanb2025)，[#26480](https://github.com/stablyai/orca/pull/26480)）
- Native Chat：通过终端的文件链接菜单从工具行打开文件（[@brennanb2025](https://github.com/brennanb2025)，[#26511](https://github.com/stablyai/orca/pull/26511)）
- 修复（native-chat）：只有工作区确认文件路径存在后才下划线（[@brennanb2025](https://github.com/brennanb2025)，[#26675](https://github.com/stablyai/orca/pull/26675)）
- 修复（native-chat）：只在适用的地方显示右键复制和粘贴（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26207](https://github.com/stablyai/orca/pull/26207)）
- 新增（acp）：压缩 Grok、OpenCode 和 OMP 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#26502](https://github.com/stablyai/orca/pull/26502)）
- 新增（grok）：把 Grok 的子 Agent 显示为子 Agent 行（[@brennanb2025](https://github.com/brennanb2025)，[#26508](https://github.com/stablyai/orca/pull/26508)）
- 修复（omp）：正常结束的命令显示 exit 0（[@brennanb2025](https://github.com/brennanb2025)，[#26494](https://github.com/stablyai/orca/pull/26494)）
- 修复（acp）：保留跟随其推理的 OMP 回复（[@brennanb2025](https://github.com/brennanb2025)，[#26658](https://github.com/stablyai/orca/pull/26658)）
- 修复（acp）：为报告无模型的 Agent 启动聊天（[@brennanb2025](https://github.com/brennanb2025)，[#26587](https://github.com/stablyai/orca/pull/26587)）
- 修复（acp）：聊天消息失败时显示 Agent 详情（[@brennanb2025](https://github.com/brennanb2025)，[#26666](https://github.com/stablyai/orca/pull/26666)）
- Native Chat：当 Codex 未登录或 Agent 未安装时说明原因，而不禁用 Send（[@brennanb2025](https://github.com/brennanb2025)，[#25666](https://github.com/stablyai/orca/pull/25666)）
- 在 Native Chat 第一次发送前显示 "Pi isn't signed in"（[@brennanb2025](https://github.com/brennanb2025)，[#26743](https://github.com/stablyai/orca/pull/26743)）
- 为所有 Native Chat Agent 显示登录引导（[@brennanb2025](https://github.com/brennanb2025)，[#26544](https://github.com/stablyai/orca/pull/26544)）
- 当 OMP 报告未选择模型时显示 OMP 登录引导（[@brennanb2025](https://github.com/brennanb2025)，[#26649](https://github.com/stablyai/orca/pull/26649)）
- 新增（native-chat）：在聊天中说明 Orca 为何中断回复，并提供 Continue（[@brennanb2025](https://github.com/brennanb2025)，[#25675](https://github.com/stablyai/orca/pull/25675)）
- 新增（native-chat）：把每个被中断聊天的工作区显示为其只读侧栏卡片（[@brennanb2025](https://github.com/brennanb2025)，[#25652](https://github.com/stablyai/orca/pull/25652)）
- 新增（native-chat）：在恢复发生时显示每个聊天的恢复，并同时启动更多（[@brennanb2025](https://github.com/brennanb2025)，[#26361](https://github.com/stablyai/orca/pull/26361)）
- 在聊天的 Agent 完成启动前，把消息留在宿主中（[@brennanb2025](https://github.com/brennanb2025)，[#26416](https://github.com/stablyai/orca/pull/26416)）
- 修复（native-chat）：本机无法运行的本地聊天会在终端中打开 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#25947](https://github.com/stablyai/orca/pull/25947)）
- 新增（native-chat）：在已配对服务器上的结构化聊天中附加文件（[@brennanb2025](https://github.com/brennanb2025)，[#25146](https://github.com/stablyai/orca/pull/25146)）
- 修复（native-chat）：在手机和桌面上显示 SSH 会话的聊天历史（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26334](https://github.com/stablyai/orca/pull/26334)）
- 修复（native-chat）：桌面不保存发件箱；一次只发送一条，宿主拥有它已接受的内容（[@brennanb2025](https://github.com/brennanb2025)，[#25959](https://github.com/stablyai/orca/pull/25959)）
- 修复（native-chat）：退出或关闭后保留的消息按顺序等待，并跟随聊天的下一轮（[@brennanb2025](https://github.com/brennanb2025)，[#25960](https://github.com/stablyai/orca/pull/25960)）
- 修复（native-chat）：不因已有 20 条等待而拒绝排队卡片，并防止队列覆盖聊天（[@brennanb2025](https://github.com/brennanb2025)，[#26553](https://github.com/stablyai/orca/pull/26553)）
- 修复（native-chat）：不因重试记录已满而拒绝用户的写入（[@brennanb2025](https://github.com/brennanb2025)，[#26543](https://github.com/stablyai/orca/pull/26543)）
- 修复（native-chat）：Agent 工作时发送的 /compact 会排队等待而不是被拒绝（[@brennanb2025](https://github.com/brennanb2025)，[#25704](https://github.com/stablyai/orca/pull/25704)）
- 把在 Agent 开始处理前就停止的消息明确标记为 "Stopped"（[@brennanb2025](https://github.com/brennanb2025)，[#26381](https://github.com/stablyai/orca/pull/26381)）
- 新增（native-chat）：用当前标题显示 Agent 消息的发送者，排队卡片上也可点击（[@brennanb2025](https://github.com/brennanb2025)，[#26357](https://github.com/stablyai/orca/pull/26357)）
- 保持 Native Chat 的 /clear 在同一对话中（[@brennanb2025](https://github.com/brennanb2025)，[#26579](https://github.com/stablyai/orca/pull/26579)）
- 停止 Codex 启动前台命令时 Native Chat 跳动（[@brennanb2025](https://github.com/brennanb2025)，[#26503](https://github.com/stablyai/orca/pull/26503)）
- 修复（native-chat）：在通知卡片中显示宿主中断（[@brennanb2025](https://github.com/brennanb2025)，[#26161](https://github.com/stablyai/orca/pull/26161)）
- 关闭 Native Chat 编写器时保持已选技能和待上传项（[@brennanb2025](https://github.com/brennanb2025)，[#26538](https://github.com/stablyai/orca/pull/26538)）
- 关闭聊天编写器时释放剪贴板预览（[@nwparker](https://github.com/nwparker)，[#26234](https://github.com/stablyai/orca/pull/26234)）
- 修复（native-chat）：用一次总能放得下的写入结算已死 Agent 的剩余工作（[@brennanb2025](https://github.com/brennanb2025)，[#26664](https://github.com/stablyai/orca/pull/26664)）
- 从目录快照解析 Native Chat 工作区（[@AmethystLiang](https://github.com/AmethystLiang)，[#26428](https://github.com/stablyai/orca/pull/26428)）

#### Agent、集成与编排 {#v1-4-224-agents-integrations-orchestration}

> 会话交接有了更清晰的名称，DeepSeek Harness 会报告空闲，OpenCode 2 恢复时保持其启动模式，手机和 CLI 创建工作区与桌面一致，Windows Agent hooks 启动更快。

- 检测卡住的启动器背后已安装的 GitHub CLI（[@OrcaWin](https://github.com/OrcaWin)，[#25183](https://github.com/stablyai/orca/pull/25183)）
- 新增（agent-sessions）：把 "Continue in New Session" 重命名为 "Hand Off to Another Agent"（[@brennanb2025](https://github.com/brennanb2025)，[#26375](https://github.com/stablyai/orca/pull/26375)）
- 修复（runtime）：在其 hook-store 完成时结算 DSH tui-idle（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26481](https://github.com/stablyai/orca/pull/26481)）
- 恢复会话时尊重 OpenCode 2 的启动模式（[@nwparker](https://github.com/nwparker)，[#26843](https://github.com/stablyai/orca/pull/26843)）
- 通过启动执行器启动 worktree.create 的 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#26709](https://github.com/stablyai/orca/pull/26709)）
- 通过启动执行器启动编排 worker 和远程 worker（[@brennanb2025](https://github.com/brennanb2025)，[#26724](https://github.com/stablyai/orca/pull/26724)）
- 修复（worktrees）：手机或 CLI 创建仅在文件夹匹配时才保留稀疏预设（[@brennanb2025](https://github.com/brennanb2025)，[#26104](https://github.com/stablyai/orca/pull/26104)）
- 修复（worktrees）：手机或 CLI 创建时像桌面一样把 Agent 放到 orca.yaml 的第一个默认标签（[@brennanb2025](https://github.com/brennanb2025)，[#26106](https://github.com/stablyai/orca/pull/26106)）
- 修复：在安全的配置文件路径上直接分发 Muse Windows hooks（[@nwparker](https://github.com/nwparker)，[#26755](https://github.com/stablyai/orca/pull/26755)）
- 修复（hooks）：加速受保护的 Unicode Windows hook 启动（[@OrcaWin](https://github.com/OrcaWin)，[#26382](https://github.com/stablyai/orca/pull/26382)）
- 性能：安装 Agent hooks 时跳过未使用的 Grok login-shell 探测（[@nwparker](https://github.com/nwparker)，[#26241](https://github.com/stablyai/orca/pull/26241)）

#### SSH、托管服务器与远程 {#v1-4-224-ssh-managed-servers-remote}

> SSH 主机迁移到托管的 Orca 服务器，远程终端在中断期间保留输入、回滚和大小，文件、链接、浏览器标签和拖放留在它们所属的机器上。

- Phase 3：每台 SSH 主机运行托管的 Orca 服务器（orcad），替换中继，且 orca serve 在其上运行（[@OrcaWin](https://github.com/OrcaWin)，[#24863](https://github.com/stablyai/orca/pull/24863)）
- Phase 3.5：从根因修复顶级 SSH/远程问题（[@OrcaWin](https://github.com/OrcaWin)，[#26483](https://github.com/stablyai/orca/pull/26483)）
- Phase 3.7：修复对抗性真实主机测试发现的 SSH/远程失败（[@OrcaWin](https://github.com/OrcaWin)，[#26847](https://github.com/stablyai/orca/pull/26847)）
- 修复（remote-terminal）：在重试中保持断开输入宽限期的诚实（[@OrcaWin](https://github.com/OrcaWin)，[#26871](https://github.com/stablyai/orca/pull/26871)）
- 在托管的 Linux 和 macOS 服务器上提供 Orca CLI（[@nwparker](https://github.com/nwparker)，[#26539](https://github.com/stablyai/orca/pull/26539)）
- 保持托管服务器在应答前不可验证（[@nwparker](https://github.com/nwparker)，[#26637](https://github.com/stablyai/orca/pull/26637)）
- 避免声称不可验证的托管服务器已停止（[@nwparker](https://github.com/nwparker)，[#26663](https://github.com/stablyai/orca/pull/26663)）
- 通过当前 SSH 连接重新连接托管服务器（[@nwparker](https://github.com/nwparker)，[#26645](https://github.com/stablyai/orca/pull/26645)）
- 手动更新托管服务器后刷新 SSH 状态（[@nwparker](https://github.com/nwparker)，[#26665](https://github.com/stablyai/orca/pull/26665)）
- 在 Settings 中解释 Active Server 停止拒绝（[@nwparker](https://github.com/nwparker)，[#26584](https://github.com/stablyai/orca/pull/26584)）
- 保持打开的 Remote Settings 与已保存服务器同步（[@nwparker](https://github.com/nwparker)，[#26581](https://github.com/stablyai/orca/pull/26581)）
- 当 SSH 主机移动到 Remote 时重试失败的目录读取（[@nwparker](https://github.com/nwparker)，[#26531](https://github.com/stablyai/orca/pull/26531)）
- 保持已迁移的文件夹工作区在其 Remote 宿主下（[@nwparker](https://github.com/nwparker)，[#26535](https://github.com/stablyai/orca/pull/26535)）
- 保持远程文件夹侧栏行在不同执行宿主间区分（[@nwparker](https://github.com/nwparker)，[#26634](https://github.com/stablyai/orca/pull/26634)）
- 保持 Git 身份探测不阻止 SSH 主机重新转换（[@nwparker](https://github.com/nwparker)，[#26578](https://github.com/stablyai/orca/pull/26578)）
- 从已安装的提供方报告浏览器放置支持（[@nwparker](https://github.com/nwparker)，[#26559](https://github.com/stablyai/orca/pull/26559)）
- 托管转换后保持新浏览器标签在 SSH 路由上（[@nwparker](https://github.com/nwparker)，[#26570](https://github.com/stablyai/orca/pull/26570)）
- SSH 转换期间保留已保留的桌面浏览器页面（[@nwparker](https://github.com/nwparker)，[#26572](https://github.com/stablyai/orca/pull/26572)）
- 区分远程浏览器失败与服务器连接失败（[@nwparker](https://github.com/nwparker)，[#26573](https://github.com/stablyai/orca/pull/26573)）
- 列出远程 Markdown 前等待编辑器所有权（[@nwparker](https://github.com/nwparker)，[#26590](https://github.com/stablyai/orca/pull/26590)）
- SSH 主机转换期间保留编辑器文件身份（[@nwparker](https://github.com/nwparker)，[#26593](https://github.com/stablyai/orca/pull/26593)）
- 远程宿主联系恢复时恢复编辑器文件监视（[@nwparker](https://github.com/nwparker)，[#26606](https://github.com/stablyai/orca/pull/26606)）
- 服务器恢复后恢复远程资源管理器更新（[@nwparker](https://github.com/nwparker)，[#26612](https://github.com/stablyai/orca/pull/26612)）
- 保持资源管理器文件监视在选定的远程宿主上（[@nwparker](https://github.com/nwparker)，[#26616](https://github.com/stablyai/orca/pull/26616)）
- 在同一路径切换远程宿主时重置资源管理器文件（[@nwparker](https://github.com/nwparker)，[#26627](https://github.com/stablyai/orca/pull/26627)）
- 选定远程宿主改变时移动共享文件监视（[@nwparker](https://github.com/nwparker)，[#26632](https://github.com/stablyai/orca/pull/26632)）
- 保持托管工作区路径不进入桌面编辑器启动（[@nwparker](https://github.com/nwparker)，[#26668](https://github.com/stablyai/orca/pull/26668)）
- 保持托管状态警告不进入桌面 gitignore 写入（[@nwparker](https://github.com/nwparker)，[#26671](https://github.com/stablyai/orca/pull/26671)）
- 丢弃 Git 更改前等待托管编辑器保存（[@nwparker](https://github.com/nwparker)，[#26677](https://github.com/stablyai/orca/pull/26677)）
- 保持远程文件删除不保存和关闭桌面草稿（[@nwparker](https://github.com/nwparker)，[#26679](https://github.com/stablyai/orca/pull/26679)）
- 保持托管文件 Copy 不选择桌面文件（[@nwparker](https://github.com/nwparker)，[#26682](https://github.com/stablyai/orca/pull/26682)）
- 保持远程终端路径链接在它们自己的宿主上（[@nwparker](https://github.com/nwparker)，[#26696](https://github.com/stablyai/orca/pull/26696)）
- 保持远程文件拖放不打开桌面浏览器文件（[@nwparker](https://github.com/nwparker)，[#26698](https://github.com/stablyai/orca/pull/26698)）
- 保持工作区文件拖放在终端的宿主上（[@nwparker](https://github.com/nwparker)，[#26830](https://github.com/stablyai/orca/pull/26830)）
- 保持无法放置的工作区所有者不进入桌面 Open in 启动（[@OrcaWin](https://github.com/OrcaWin)，[#26797](https://github.com/stablyai/orca/pull/26797)）
- 修复：在背压下一次只接受中继批量帧（[@nwparker](https://github.com/nwparker)，[#26333](https://github.com/stablyai/orca/pull/26333)）
- 修复（serve）：冷启动后恢复已保存的活动标签组（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26089](https://github.com/stablyai/orca/pull/26089)）

#### 手机 {#v1-4-224-phone}

> 桌面休眠时浏览器标签继续流式加载，聊天可视化和子 Agent 显示在手机上，媒体文件可播放，大图片和 Markdown 使用更少时间和内存。

- 修复（browser）：手机流式传输浏览器标签时保持桌面绘制（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26284](https://github.com/stablyai/orca/pull/26284)）
- 修复（window）：手机流式传输后停止被覆盖窗口的绘制，并保持流式前台标签活跃（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26657](https://github.com/stablyai/orca/pull/26657)）
- 新增（mobile）：在手机的 Native Chat 中内联显示聊天可视化（[@brennanb2025](https://github.com/brennanb2025)，[#26071](https://github.com/stablyai/orca/pull/26071)）
- 新增（mobile）：像桌面一样显示 Native Chat 的子 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#26125](https://github.com/stablyai/orca/pull/26125)）
- 允许在投递未确认后另一台手机发送（[@brennanb2025](https://github.com/brennanb2025)，[#26392](https://github.com/stablyai/orca/pull/26392)）
- 新增：在手机预览中播放视频和音乐文件（[@nwparker](https://github.com/nwparker)，[#26148](https://github.com/stablyai/orca/pull/26148)）
- 在手机上释放已关闭的 Markdown 文档（[@nwparker](https://github.com/nwparker)，[#26159](https://github.com/stablyai/orca/pull/26159)）
- 可用时对手机图片字节使用原生 Base64 编码（[@nwparker](https://github.com/nwparker)，[#26165](https://github.com/stablyai/orca/pull/26165)）
- 使用浏览器 crypto 加速手机图片指纹（[@nwparker](https://github.com/nwparker)，[#26170](https://github.com/stablyai/orca/pull/26170)）
- 避免在输入时重建已提交的手机文件（[@nwparker](https://github.com/nwparker)，[#26196](https://github.com/stablyai/orca/pull/26196)）
- 停止手机上重复的 GitLab 详情请求（[@nwparker](https://github.com/nwparker)，[#26197](https://github.com/stablyai/orca/pull/26197)）
- 重构（mobile）：移除 hybrid-shell 开关；由构建决定（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26825](https://github.com/stablyai/orca/pull/26825)）

#### 工作区、侧栏与标签 {#v1-4-224-workspaces-sidebar-tabs}

> 标签悬停卡片显示完整标题，Force Delete 可以记住你的选择，用量条默认 Compact，侧栏标题和工作区刷新表现更好。

- 显示带图标和标签间平滑滑动的整标签悬停卡片（[@nwparker](https://github.com/nwparker)，[#26811](https://github.com/stablyai/orca/pull/26811)）
- 修复（sidebar）：防止项目标题与固定宿主重叠（[@AmethystLiang](https://github.com/AmethystLiang)，[#26775](https://github.com/stablyai/orca/pull/26775)）
- 修复：保持工作区搜索过滤按钮在一行（[@genni613](https://github.com/genni613)，[#26580](https://github.com/stablyai/orca/pull/26580)）
- 新增：把已保存的强制删除偏好加入工作区删除菜单（[@nwparker](https://github.com/nwparker)，[#26425](https://github.com/stablyai/orca/pull/26425)）
- 新增：在工作区删除对话框中加入 Always force delete 下拉（[@nwparker](https://github.com/nwparker)，[#26476](https://github.com/stablyai/orca/pull/26476)）
- 移除本地分支删除成功通知（[@nwparker](https://github.com/nwparker)，[#26422](https://github.com/stablyai/orca/pull/26422)）
- 保持并发注册后只有一个本地项目（[@nwparker](https://github.com/nwparker)，[#26789](https://github.com/stablyai/orca/pull/26789)）
- 把状态栏用量默认设为 Compact 并一次性说明变化（[@AmethystLiang](https://github.com/AmethystLiang)，[#26726](https://github.com/stablyai/orca/pull/26726)）
- 修复 Compact 用量通知焦点和旧宿主兼容性（[@AmethystLiang](https://github.com/AmethystLiang)，[#26747](https://github.com/stablyai/orca/pull/26747)）
- 保持用量溢出芯片宽度在隐藏计数变化时稳定（[@AmethystLiang](https://github.com/AmethystLiang)，[#26873](https://github.com/stablyai/orca/pull/26873)）
- 修复（floating-workspace）：防止文件链接使主窗口空白（[@brennanb2025](https://github.com/brennanb2025)，[#26655](https://github.com/stablyai/orca/pull/26655)）
- 避免在编辑项目名称时刷新 GitHub 账户（[@nwparker](https://github.com/nwparker)，[#26228](https://github.com/stablyai/orca/pull/26228)）
- 避免删除项目组时重复会话复制（[@nwparker](https://github.com/nwparker)，[#26230](https://github.com/stablyai/orca/pull/26230)）
- 避免删除一个 worktree 后刷新每个仓库（[@nwparker](https://github.com/nwparker)，[#26253](https://github.com/stablyai/orca/pull/26253)）
- 性能：桌面移除后保留无关的授权根（[@nwparker](https://github.com/nwparker)，[#26294](https://github.com/stablyai/orca/pull/26294)）
- 性能：按工作区分组 Space 决策输入（[@nwparker](https://github.com/nwparker)，[#26297](https://github.com/stablyai/orca/pull/26297)）

#### 编辑器、文件与 Markdown {#v1-4-224-editor-files-markdown}

> GitHub 风格 callout、PDF 缩放、富模式下带 HTML 的大 Markdown、实时 Markdown 链接、精确落地的操作系统文件拖放，以及更快的笔记本和 Markdown。

- 新增（markdown）：渲染 GitHub 风格 callout（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26255](https://github.com/stablyai/orca/pull/26255)）
- 修复（editor）：把缩放手势和应用缩放路由到 PDF 查看器（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26652](https://github.com/stablyai/orca/pull/26652)）
- 允许富模式下带 HTML 的大 Markdown 文档（[@AmethystLiang](https://github.com/AmethystLiang)，[#26331](https://github.com/stablyai/orca/pull/26331)）
- 修复富 Markdown 中的交替浏览器点击（[@nwparker](https://github.com/nwparker)，[#26920](https://github.com/stablyai/orca/pull/26920)）
- 文档元数据变化时刷新富 Markdown 链接（[@nwparker](https://github.com/nwparker)，[#26595](https://github.com/stablyai/orca/pull/26595)）
- 工作区文件变化时刷新打开的 Markdown 链接（[@nwparker](https://github.com/nwparker)，[#26599](https://github.com/stablyai/orca/pull/26599)）
- 修复（file-drop）：资源管理器、项目侧栏、标签条和编辑器拥有操作系统文件拖放（STA-6940 PR5）（[@brennanb2025](https://github.com/brennanb2025)，[#26133](https://github.com/stablyai/orca/pull/26133)）
- 修复（file-drop）：把终端文件交付到光标下的窗格（STA-6940 PR4/6）（[@brennanb2025](https://github.com/brennanb2025)，[#26008](https://github.com/stablyai/orca/pull/26008)）
- [STA-6940] 在其元素处交付聊天、工作区编写器和反馈文件拖放（3/6）（[@brennanb2025](https://github.com/brennanb2025)，[#25781](https://github.com/stablyai/orca/pull/25781)）
- 移除旧的操作系统文件拖放路由（STA-6940 PR6/6）（[@brennanb2025](https://github.com/brennanb2025)，[#26385](https://github.com/stablyai/orca/pull/26385)）
- 性能：在一次文档更新中保存已完成的笔记本运行（[@nwparker](https://github.com/nwparker)，[#26254](https://github.com/stablyai/orca/pull/26254)）
- 避免重新扫描累积的笔记本流输出（[@nwparker](https://github.com/nwparker)，[#26123](https://github.com/stablyai/orca/pull/26123)）
- 跳过对纯文本笔记本输出的重复 ANSI 解析扫描（[@nwparker](https://github.com/nwparker)，[#26124](https://github.com/stablyai/orca/pull/26124)）
- 高亮链接时只扫描一次 Markdown 行内代码跨度（[@nwparker](https://github.com/nwparker)，[#26126](https://github.com/stablyai/orca/pull/26126)）
- 性能：在无图片的 Markdown 预览中跳过冗余图片扫描（[@nwparker](https://github.com/nwparker)，[#26240](https://github.com/stablyai/orca/pull/26240)）
- 性能：无开关打开时跳过 Markdown 围栏扫描（[@nwparker](https://github.com/nwparker)，[#26324](https://github.com/stablyai/orca/pull/26324)）
- 在资源管理器延迟它们之前过滤无关的工作区事件（[@nwparker](https://github.com/nwparker)，[#26265](https://github.com/stablyai/orca/pull/26265)）
- 避免反复提取源文本用于复制上下文提示（[@nwparker](https://github.com/nwparker)，[#26115](https://github.com/stablyai/orca/pull/26115)）

#### 浏览器、技能与反馈 {#v1-4-224-browser-skills-feedback}

> 浏览器评论框不再覆盖你标注的内容，cookie 导入、浏览器命令、反馈和技能下载会自行清理。

- 修复（browser）：保持注释编写器不覆盖它标注的元素（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26596](https://github.com/stablyai/orca/pull/26596)）
- 导入准备失败时释放 cookie 快照（[@nwparker](https://github.com/nwparker)，[#26218](https://github.com/stablyai/orca/pull/26218)）
- 释放已完成的浏览器辅助排空计时器（[@nwparker](https://github.com/nwparker)，[#26210](https://github.com/stablyai/orca/pull/26210)）
- 响应处理完成后释放反馈请求（[@nwparker](https://github.com/nwparker)，[#26274](https://github.com/stablyai/orca/pull/26274)）
- 取消被放弃的技能包下载响应（[@nwparker](https://github.com/nwparker)，[#26169](https://github.com/stablyai/orca/pull/26169)）
- 修复（skills）：在读取前保持观察到的归档中止错误（[@nwparker](https://github.com/nwparker)，[#26246](https://github.com/stablyai/orca/pull/26246)）
- 性能（skills）：批量删除期间避免重复放置扫描（[@nwparker](https://github.com/nwparker)，[#26223](https://github.com/stablyai/orca/pull/26223)）

#### 性能与可靠性 {#v1-4-224-performance-reliability}

> 终端重绘、检查点、Codex 输出和聊天恢复使用更少 CPU 和内存，配置文件保存在磁盘慢时警告而不是失败。

- 避免保留未使用的 OpenCode 数据库 worker（[@nwparker](https://github.com/nwparker)，[#26113](https://github.com/stablyai/orca/pull/26113)）
- 关闭被拒绝的可选 OpenCode 计费请求（[@nwparker](https://github.com/nwparker)，[#26236](https://github.com/stablyai/orca/pull/26236)）
- 移除终端重绘摄入中的重复行复制（[@nwparker](https://github.com/nwparker)，[#26118](https://github.com/stablyai/orca/pull/26118)）
- 减小：用有界原生 JSON 编码减少终端检查点停滞（[@nwparker](https://github.com/nwparker)，[#26177](https://github.com/stablyai/orca/pull/26177)）
- 避免在跟踪 Agent 日志时重新扫描未完成记录（[@nwparker](https://github.com/nwparker)，[#26132](https://github.com/stablyai/orca/pull/26132)）
- 性能：在无关应用更新中复用聊天标签所有权（[@nwparker](https://github.com/nwparker)，[#26150](https://github.com/stablyai/orca/pull/26150)）
- 避免恢复期间重复历史序列化（[@nwparker](https://github.com/nwparker)，[#26160](https://github.com/stablyai/orca/pull/26160)）
- 性能：避免在已保存检查点之间复制 Codex 输出（[@nwparker](https://github.com/nwparker)，[#26199](https://github.com/stablyai/orca/pull/26199)）
- 释放已完成的提供方写入负载（[@nwparker](https://github.com/nwparker)，[#26208](https://github.com/stablyai/orca/pull/26208)）
- 主循环停滞故障前排空排队的 SQLite 回复（[@nwparker](https://github.com/nwparker)，[#26444](https://github.com/stablyai/orca/pull/26444)）
- 配置文件保存慢时警告而不是失败（[@AmethystLiang](https://github.com/AmethystLiang)，[#26447](https://github.com/stablyai/orca/pull/26447)）
- 清理后中止失败的运行时下载（[@nwparker](https://github.com/nwparker)，[#26269](https://github.com/stablyai/orca/pull/26269)）

#### 语言 {#v1-4-224-languages}

> 新界面已翻译成西班牙语、法语、日语、韩语和中文。

- 杂项（i18n）：把 176 个新键翻译成 es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#26365](https://github.com/stablyai/orca/pull/26365)）

#### 中继服务 {#v1-4-224-relay-service}

> Orca 中继服务的服务器端容量、部署和监控工作。

- 新增（relay）：为每个单元格类提供更慢的同容量排空节奏（15 和 20 分钟）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26350](https://github.com/stablyai/orca/pull/26350)）
- 修复（relay-ops）：让预排空认证门容忍孤立的认证 5xx（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26353](https://github.com/stablyai/orca/pull/26353)）
- 修复（relay）：跳过 3 分钟内重新连接的宿主的空闲重新安置（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26355](https://github.com/stablyai/orca/pull/26355)）
- 修复（relay）：数据库池超时时快速拒绝宿主 hello；续期跳过队列（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26362](https://github.com/stablyai/orca/pull/26362)）
- 新增（relay）：在单元格断开突发和数据库池聚集时告警（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26363](https://github.com/stablyai/orca/pull/26363)）
- 修复（relay）：节流连接预留自动清理，使一次运行停止驱逐共享数据库缓存（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26370](https://github.com/stablyai/orca/pull/26370)）
- 修复（relay）：仅在超过 DB 停滞的 SQL 失败突破时锁定重新安置关闭（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26371](https://github.com/stablyai/orca/pull/26371)）
- 修复（relay）：让同容量滚动的滚动后验证超过一次 DB 停滞（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26372](https://github.com/stablyai/orca/pull/26372)）

#### 已回退 {#v1-4-224-reverted}

> 每账户 Claude 文件夹、远程主机的 Node 24 要求以及 Windows 挂起看门狗在发布前被撤回。

- 修复（claude）：激活账户配置文件并移除凭证重放（第 4 步，共 4 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24434](https://github.com/stablyai/orca/pull/24434)）
- 修复（claude）：去掉账户菜单中重复的登录行，并命名正确的 Settings 页（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26405](https://github.com/stablyai/orca/pull/26405)）
- 发布前回退 Claude 每账户文件夹（#24434, #26405）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26638](https://github.com/stablyai/orca/pull/26638)）
- 新增（runtime）：要求服务器和远程宿主使用 Node 24（[@nwparker](https://github.com/nwparker)，[#26171](https://github.com/stablyai/orca/pull/26171)）
- 回退（runtime）：临时恢复之前的宿主 Node 最低版本（[@nwparker](https://github.com/nwparker)，[#26823](https://github.com/stablyai/orca/pull/26823)）
- [CI] 启用现有的 Windows 挂起看门狗并保留重启证据（[@nwparker](https://github.com/nwparker)，[#26763](https://github.com/stablyai/orca/pull/26763)）
- 回滚 Windows 挂起看门狗激活（[@nwparker](https://github.com/nwparker)，[#26804](https://github.com/stablyai/orca/pull/26804)）

#### 测试、CI 与维护 {#v1-4-224-tests-ci-maintenance}

> 尚未开启的基础工作（文件夹工作区 Agent 启动、聊天回执、终端布局检查）、托管服务器代码清理，以及更快更稳定的测试运行。

- 新增（agent-launch）：在一次宿主操作中创建文件夹工作区并启动其 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#26083](https://github.com/stablyai/orca/pull/26083)）
- 新增（native-chat）：添加聊天拥有的命令回执存储（[@brennanb2025](https://github.com/brennanb2025)，[#26653](https://github.com/stablyai/orca/pull/26653)）
- 新增（runtime）：把服务器隔离在兼容性启动器后面（[@nwparker](https://github.com/nwparker)，[#26374](https://github.com/stablyai/orca/pull/26374)）
- 测试（terminal）：固定镜像重构必须保持的布局不变量（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26073](https://github.com/stablyai/orca/pull/26073)）
- terminal：窗口说明每个新终端的去向（无行为变化）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26078](https://github.com/stablyai/orca/pull/26078)）
- 测试（terminal）：对照结构规则检查运行时的工作区布局（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26673](https://github.com/stablyai/orca/pull/26673)）
- 测试（e2e）：带窗口、无头 serve 和 SSH 的布局预言场景（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26674](https://github.com/stablyai/orca/pull/26674)）
- 重构（tabs）：复用共享的标签顺序辅助器而不是三个副本（[@brennanb2025](https://github.com/brennanb2025)，[#26704](https://github.com/stablyai/orca/pull/26704)）
- 重构（ssh-relay-runtime）：清理 Phase 3-3.8 代码（[@OrcaWin](https://github.com/OrcaWin)，[#26889](https://github.com/stablyai/orca/pull/26889)）
- 重构（ssh-connect-managed）：清理 Phase 3-3.8 代码（[@OrcaWin](https://github.com/OrcaWin)，[#26890](https://github.com/stablyai/orca/pull/26890)）
- 重构（ssh-orcad-lifecycle）：清理 Phase 3-3.8 代码（[@OrcaWin](https://github.com/OrcaWin)，[#26891](https://github.com/stablyai/orca/pull/26891)）
- 重构（orcad-daemon-startup-cli）：清理 Phase 3-3.8 代码（[@OrcaWin](https://github.com/OrcaWin)，[#26892](https://github.com/stablyai/orca/pull/26892)）
- 文档：移除过时的内部参考文档（[@nwparker](https://github.com/nwparker)，[#26328](https://github.com/stablyai/orca/pull/26328)）
- 修复（lint）：把 macOS 输入源探测移出 app.ts（[@brennanb2025](https://github.com/brennanb2025)，[#26643](https://github.com/stablyai/orca/pull/26643)）
- 修复（lint）：把 knownAgentIds 移出会话宿主（[@brennanb2025](https://github.com/brennanb2025)，[#26648](https://github.com/stablyai/orca/pull/26648)）
- 测试（native-chat）：批量日志提交后修复主类型检查（[@brennanb2025](https://github.com/brennanb2025)，[#26781](https://github.com/stablyai/orca/pull/26781)）
- 修复日志回执测试类型检查（[@AmethystLiang](https://github.com/AmethystLiang)，[#26788](https://github.com/stablyai/orca/pull/26788)）
- 只运行预期的性能契约套件（[@nwparker](https://github.com/nwparker)，[#26121](https://github.com/stablyai/orca/pull/26121)）
- [CI] 通过复用其狭窄模块加速编写器决策测试（[@nwparker](https://github.com/nwparker)，[#26179](https://github.com/stablyai/orca/pull/26179)）
- [CI] 减少 UI 状态测试中的重复持久化导入（[@nwparker](https://github.com/nwparker)，[#26185](https://github.com/stablyai/orca/pull/26185)）
- [CI] 使 SSH 权限探测夹具独立于真实 PID 复用（[@nwparker](https://github.com/nwparker)，[#26190](https://github.com/stablyai/orca/pull/26190)）
- [CI] 测试：使远程上传用例独立于时钟和初始写入（[@nwparker](https://github.com/nwparker)，[#26202](https://github.com/stablyai/orca/pull/26202)）
- [CI] 测试：避免为渲染器夹具构建器加载完整 Store（[@nwparker](https://github.com/nwparker)，[#26217](https://github.com/stablyai/orca/pull/26217)）
- [CI] 测试：推进重试时钟而不是实时等待（[@nwparker](https://github.com/nwparker)，[#26220](https://github.com/stablyai/orca/pull/26220)）
- [CI] 测试：在 Node 上保持真实 SSH 命令契约（[@nwparker](https://github.com/nwparker)，[#26226](https://github.com/stablyai/orca/pull/26226)）
- [CI] 测试：加载 Activity 夹具构建器而不导入页面（[@nwparker](https://github.com/nwparker)，[#26229](https://github.com/stablyai/orca/pull/26229)）
- [CI] 在五个持久化套件中复用首次 SQLite 夹具构建（[@nwparker](https://github.com/nwparker)，[#26231](https://github.com/stablyai/orca/pull/26231)）
- [CI] 在八个测试套件中直接导入 Activity 函数（[@nwparker](https://github.com/nwparker)，[#26237](https://github.com/stablyai/orca/pull/26237)）
- [CI] 测试（persistence）：在另外六个套件中复用首次构造器（[@nwparker](https://github.com/nwparker)，[#26250](https://github.com/stablyai/orca/pull/26250)）
- 性能（renderer）：通过公共包入口加载 Radix 原语（[@nwparker](https://github.com/nwparker)，[#26256](https://github.com/stablyai/orca/pull/26256)）
- [CI] 测试（runtime）：推进注入的拆卸策略时钟（[@nwparker](https://github.com/nwparker)，[#26267](https://github.com/stablyai/orca/pull/26267)）
- [CI] 测试（startup）：推进模拟的显示就绪轮询（[@nwparker](https://github.com/nwparker)，[#26283](https://github.com/stablyai/orca/pull/26283)）
- [CI] ci：在十个分片上运行完整的 pull request 单元测试（[@nwparker](https://github.com/nwparker)，[#26295](https://github.com/stablyai/orca/pull/26295)）
- [CI] 在 Node 中保持原生监视器契约并重置运行时测试缓存（[@nwparker](https://github.com/nwparker)，[#26315](https://github.com/stablyai/orca/pull/26315)）
- [CI] 用受控策略时钟加速终端探测测试（[@nwparker](https://github.com/nwparker)，[#26327](https://github.com/stablyai/orca/pull/26327)）
- CI（e2e）：在使用镜像列表的运行器镜像上把 apt 移出 Azure 镜像（[@OrcaWin](https://github.com/OrcaWin)，[#26335](https://github.com/stablyai/orca/pull/26335)）
- [CI] 保持结构化会话兼容性清单在文件限制内（[@nwparker](https://github.com/nwparker)，[#26342](https://github.com/stablyai/orca/pull/26342)）
- [CI] 在 GraphQL 测试夹具中重置规范 PR 堆栈缓存（[@nwparker](https://github.com/nwparker)，[#26346](https://github.com/stablyai/orca/pull/26346)）
- [CI] 测试：从 PTY 清理中移除重复的空闲轮询（[@nwparker](https://github.com/nwparker)，[#26360](https://github.com/stablyai/orca/pull/26360)）
- 测试：把 hook 夹具连接与假计时器隔离（[@brennanb2025](https://github.com/brennanb2025)，[#26369](https://github.com/stablyai/orca/pull/26369)）
- [CI] 测试：从压缩契约中移除空闲轮询（[@nwparker](https://github.com/nwparker)，[#26373](https://github.com/stablyai/orca/pull/26373)）
- [CI] 测试：从它们的公共模块加载 GitHub 操作（[@nwparker](https://github.com/nwparker)，[#26384](https://github.com/stablyai/orca/pull/26384)）
- [CI] 测试：让中继校正夹具存活超过最小连接年龄（[@nwparker](https://github.com/nwparker)，[#26389](https://github.com/stablyai/orca/pull/26389)）
- [CI] 测试：加速终端比较和重试策略检查（[@nwparker](https://github.com/nwparker)，[#26396](https://github.com/stablyai/orca/pull/26396)）
- [CI] ci：阻止缓存测试编辑启动五个预热运行器（[@nwparker](https://github.com/nwparker)，[#26399](https://github.com/stablyai/orca/pull/26399)）
- [CI] ci：恢复五个单元运行器并修剪仅源码测试（[@nwparker](https://github.com/nwparker)，[#26437](https://github.com/stablyai/orca/pull/26437)）
- 测试（native-chat）：使原地转录替换测试确定化（[@OrcaWin](https://github.com/OrcaWin)，[#26532](https://github.com/stablyai/orca/pull/26532)）
- [CI] 测试：移除重复用例和源文本检查（[@nwparker](https://github.com/nwparker)，[#26546](https://github.com/stablyai/orca/pull/26546)）
- 测试（e2e）：重试输入法从未交付的韩文数字尝试（[@OrcaWin](https://github.com/OrcaWin)，[#26566](https://github.com/stablyai/orca/pull/26566)）
- [CI] 测试：减少会话导入和模拟恢复等待（[@nwparker](https://github.com/nwparker)，[#26567](https://github.com/stablyai/orca/pull/26567)）
- [CI] ci：为共享单元夹具避免包和浏览器作业（[@nwparker](https://github.com/nwparker)，[#26575](https://github.com/stablyai/orca/pull/26575)）
- [CI] 减少重复测试工作并修复 Windows 清理和 IME 确认（[@nwparker](https://github.com/nwparker)，[#26608](https://github.com/stablyai/orca/pull/26608)）
- [CI] 回退测试优化引入的库补丁（[@nwparker](https://github.com/nwparker)，[#26727](https://github.com/stablyai/orca/pull/26727)）
- [CI] 减少重复测试工作并跳过无关服务器矩阵（[@nwparker](https://github.com/nwparker)，[#26711](https://github.com/stablyai/orca/pull/26711)）
- [CI] 减少重复测试工作并使用固定 Bun 进行本地化提取（[@nwparker](https://github.com/nwparker)，[#26806](https://github.com/stablyai/orca/pull/26806)）
- 测试（e2e）：在目录重试重连测试中保持两个宿主部分（[@OrcaWin](https://github.com/OrcaWin)，[#26838](https://github.com/stablyai/orca/pull/26838)）
- [CI] 整合相关测试并用现有虚拟时钟推进转录等待（[@nwparker](https://github.com/nwparker)，[#26874](https://github.com/stablyai/orca/pull/26874)）
- [CI] 在标准 Node worker 线程中运行移动 Vitest 测试（[@nwparker](https://github.com/nwparker)，[#26899](https://github.com/stablyai/orca/pull/26899)）

### 新贡献者 {#v1-4-224-contributors}

- [@genni613](https://github.com/genni613) 首次贡献于 [#26580](https://github.com/stablyai/orca/pull/26580)

---

**完整变更对照：** [v1.4.223...v1.4.224](https://github.com/stablyai/orca/compare/v1.4.223...v1.4.224)

## v1.4.223 实验性 Native Chat 可回退对话，SSH 重连后保留标签 {#v1-4-223}

2026年10月8日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.223)

感谢使用 Orca，也感谢一直以来的支持。

Orca Server 2.0 即将推出，会让远程工作更可靠。当前 Remote Server 仍是实验功能，可能有 bug。

### 简要说明 {#v1-4-223-short}

- **实验性 Native Chat：** 在设置 → Chat UI 打开「Use updated structured native chat」后，Grok 在这台计算机和已配对的 Orca 服务器上会以结构化聊天打开；SSH 和 WSL 仍用终端聊天。你可以把对话回退到更早的消息、搜索模型列表、输入 `@` 挑选工作区文件，并在新的设置 → Chat 页调整文字大小、代码大小、宽度和对比度，或匹配终端。聊天按第一条消息命名，停下来请求批准时会提醒你，未发送的草稿在重新加载或退出后仍在，并使用设置 → Agents 里保存的 Command 和 Arguments。使用 API key 的用户现在可以打开 Claude 聊天，Windows 聊天也不再拒绝启动。
- **SSH 工作区：** 打开的文件、正在运行的 Agent 标签，以及暂停的 Claude 或 Codex 恢复提议，在 SSH 重连和重启后仍在。很久以前关掉的标签不再以空壳回来。点击一个最后那个标签已被关掉的 SSH worktree，会再次打开终端。
- **远程服务器与手机：** 宿主应用重新启动后，已配对终端再次接受输入。网络中断后远程浏览器标签会回来。`orca serve` 重启后，手机仍保留每一个终端。从手机启动 Agent 会立刻显示它的标签，也不再挪动桌面窗口。在远程宿主上创建工作区，不再把其他已连接的桌面拉过去。
- **Agent 与终端：** macOS 和 Linux 上很长或多行的 Agent 启动命令会完整到达 Agent，而不是被截断或逐行执行。启动命令现在使用真正的 Enter。退出前刚关掉的窗格不再回来，拖进自己标签的窗格不再出现在两个标签里。用 Escape 取消时 Claude 的转圈会清掉；Escape 只关掉搜索时，Codex 仍保持正在工作的状态。Orca 不再在每次启动 Codex 时重写 `~/.codex` 的 hook。它为 Claude、Codex 和 OpenCode 启动的辅助进程会在 Orca 退出或崩溃时停掉。
- **账户与 Agent：** 切换 Claude 账户会保留 MCP 服务器登录。Pi 和 OMP 把后台辅助项显示为行。Rovo Dev 通过 `acli` 检测。模型列表里有 Grok 4.7。
- **侧栏与工作区：** Orca 会记住左侧栏是否打开。Agent 活动视图有过滤器、右键菜单和多选。包含嵌套 worktree 的工作区可以连它们一起在后台删除。显示远程工作区不再展开本地分区。访问该工作区时 Dock 角标会清掉。
- **文件与搜索：** 音频和视频文件可以在 Orca 里播放。Quarto 和 R Markdown 文件会高亮。你可以在 Finder 或文件资源管理器里显示源码管理中已改动的文件，或终端里的文件路径。Quick Open 能匹配多段查询，并在请求的位置打开文件。已放弃的搜索会停掉。
- **任务与审查：** GitHub Projects 的 Board 视图显示为可以拖动卡片的看板。任务描述里的私有 Linear 图片能加载。SSH 工作区里的 GitLab 合并请求和 issue 操作会到达正确的服务器。
- **其他：** 一个 Agent 紧接在另一个之后完成时，完成音现在也会播放。截图标注有了橡皮擦。
### 已知问题 {#v1-4-223-known-issues}

**来自 v1.4.217 或更早版本的 Native Chat：** 如果在 v1.4.217 或更早版本用过实验性 Native Chat，并直接更新到 v1.4.223，更早的 Native Chat 不会出现。它们的文件仍在磁盘上（#26038）。

**更新后的终端：** 这一版为新终端启动新的终端后台服务。已经打开的终端继续跑在前一个服务上，因此「完整的长启动命令」这类改动只作用于更新后打开的终端。这也意味着 v1.4.222 对 OpenCode、Pi 和 Qoder 检测的改进，在新终端里无需再重启任何东西即可生效。

**从 shell 历史重新启动：** 当 Agent 的启动命令很长或跨越多行时，shell 历史里保存的是一条短的一次性命令，因此按上方向键再按 Enter 不会再次启动该 Agent（#23962）。

**从手机创建的工作区：** 在手机上从 issue、pull request 或 Linear 条目创建带 Agent 的工作区，仍会把桌面移到该工作区（#26025）。

**降级：** Orca 现在拒绝从版本选择器安装早于 v1.4.214 的版本。要回到那些版本，先关掉 Orca，运行 `orca profile state rollback --latest-json`，再手动安装旧版本（#23262）。

**Windows on ARM：** ARM64 包装的是 x64 的 `orca.exe` 命令行工具。Windows 11 on ARM 会用模拟运行它。Windows 10 on ARM 跑不了，所以那里的 `orca` 命令不可用（#24094）。

**OpenCode 2：** 如果从 v1.4.219 或更早版本更新，已经在跑的 OpenCode 2 窗格可能要在里面重启 OpenCode 之后才有状态。这次更新之后如果降级 Orca，会留下重复的 OpenCode 状态插件。`opencode run` 退出后，窗格可能一直显示「Done」；修复还在 #24472 中等待。

**Claude 文件夹信任：** 文件夹预信任默认开启（设置 → Agents → 「Trust the folder when Orca starts an agent」）。在 Alpine WSL 上，Orca 无法复制它需要的文件权限，因此 Claude 会显示自己的信任提示（#23744）。

### 产品体验 {#v1-4-223-product}

#### 实验性 Native Chat {#v1-4-223-native-chat-experimental-}

> Grok 可以作为结构化聊天运行。你可以回退对话、搜索模型、用 @ 提及文件并调整聊天外观。聊天会有名称和批准提醒，草稿和 Stop 会留住你的文字。Codex、使用 API key 的 Claude 用户、Windows 和自定义 Agent 命令的聊天启动也更可靠。

- 修复（native-chat）：推理行有真正的展开/完成状态，Claude 的思考内容可读（[@brennanb2025](https://github.com/brennanb2025)，[#19221](https://github.com/stablyai/orca/pull/19221)）
- 可从结构化聊天消息确认后回退一段对话（[@brennanb2025](https://github.com/brennanb2025)，[#19338](https://github.com/stablyai/orca/pull/19338)）
- 新增（native-chat）：Grok 经 Agent Client Protocol 作为结构化聊天运行（[@brennanb2025](https://github.com/brennanb2025)，[#25225](https://github.com/stablyai/orca/pull/25225)）
- 新增（native-chat）：恢复失败后仍记录新会话（[@brennanb2025](https://github.com/brennanb2025)，[#25747](https://github.com/stablyai/orca/pull/25747)）
- 新增（native-chat）：可搜索的模型选择器（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26011](https://github.com/stablyai/orca/pull/26011)）
- 新增（native-chat）：输入 @ 时建议文件，并给这些触发器命名（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26017](https://github.com/stablyai/orca/pull/26017)）
- 增加聊天外观设置：文字大小、代码大小、宽度（[@brennanb2025](https://github.com/brennanb2025)，[#25657](https://github.com/stablyai/orca/pull/25657)）
- 增加聊天对比度，以及「Match terminal interface」（[@brennanb2025](https://github.com/brennanb2025)，[#25659](https://github.com/stablyai/orca/pull/25659)）
- 为结构化 Native Chat 增加 Chat 设置页（[@brennanb2025](https://github.com/brennanb2025)，[#25685](https://github.com/stablyai/orca/pull/25685)）
- 放柔 Native Chat 的颜色和代码表面（[@brennanb2025](https://github.com/brennanb2025)，[#25651](https://github.com/stablyai/orca/pull/25651)）
- 把 Native Chat 的工具调用显示成普通句子（[@brennanb2025](https://github.com/brennanb2025)，[#25654](https://github.com/stablyai/orca/pull/25654)）
- 修复（native-chat）：代码块可以长到完整高度（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#26021](https://github.com/stablyai/orca/pull/26021)）
- 修复（native-chat）：消息轨从第一条用户消息开始显示（[@brennanb2025](https://github.com/brennanb2025)，[#25707](https://github.com/stablyai/orca/pull/25707)）
- 新增（native-chat）：实心、渐隐的 Jump to latest（[@brennanb2025](https://github.com/brennanb2025)，[#25759](https://github.com/stablyai/orca/pull/25759)）
- Native Claude 和 Codex 聊天按第一条消息命名（[@brennanb2025](https://github.com/brennanb2025)，[#25724](https://github.com/stablyai/orca/pull/25724)）
- 标签、侧栏和 AI Vault（列表与搜索）共用同一套 Native Chat 名称来源（[@brennanb2025](https://github.com/brennanb2025)，[#25986](https://github.com/stablyai/orca/pull/25986)）
- 修复（native-chat）：结构化聊天在一轮中途请求批准或输入时发出提醒（[@brennanb2025](https://github.com/brennanb2025)，[#25766](https://github.com/stablyai/orca/pull/25766)）
- 修复（native-chat）：未发送的草稿在重新加载或退出后仍在（[@brennanb2025](https://github.com/brennanb2025)，[#24905](https://github.com/stablyai/orca/pull/24905)）
- 新增（native-chat）：从你按下 Stop 起，聊天显示「Stopping…」，直到这一轮真正结束（[@brennanb2025](https://github.com/brennanb2025)，[#24369](https://github.com/stablyai/orca/pull/24369)）
- 新增（native-chat）：被 Stop 收回的消息仍留在屏幕上，后面只跟一行停止记录（[@brennanb2025](https://github.com/brennanb2025)，[#25051](https://github.com/stablyai/orca/pull/25051)）
- 修复（native-chat）：Stop 的说明留在它等待并停掉的那一轮上（[@brennanb2025](https://github.com/brennanb2025)，[#25056](https://github.com/stablyai/orca/pull/25056)）
- 新增（native-chat）：公布每条提交发到了哪里，以及被停止的那条最终回答进了哪一轮（[@brennanb2025](https://github.com/brennanb2025)，[#25073](https://github.com/stablyai/orca/pull/25073)）
- 修复（native-chat）：排队消息一直等到前面的一轮打开（Stop 事件方案的后续，修复 STA-9348）（[@brennanb2025](https://github.com/brennanb2025)，[#25217](https://github.com/stablyai/orca/pull/25217)）
- 修复（native-chat）：Codex 接受的 Stop 会结算那条从未打开轮次的消息（#25217 的后续）（[@brennanb2025](https://github.com/brennanb2025)，[#26105](https://github.com/stablyai/orca/pull/26105)）
- 修复（native-chat）：排队消息在任意一轮之后按顺序继续，重启后不会自己发出去（[@brennanb2025](https://github.com/brennanb2025)，[#24586](https://github.com/stablyai/orca/pull/24586)）
- 修复（native-chat）：退出或崩溃前已接受的消息保留为一张暂扣卡片（[@brennanb2025](https://github.com/brennanb2025)，[#24660](https://github.com/stablyai/orca/pull/24660)）
- 修复（native-chat）：Agent 退出会结束它的记录；未确认的停止改为并入，而不是暂扣（[@brennanb2025](https://github.com/brennanb2025)，[#24862](https://github.com/stablyai/orca/pull/24862)）
- 你停掉的工具调用显示为已中断，而不是失败（[@brennanb2025](https://github.com/brennanb2025)，[#25181](https://github.com/stablyai/orca/pull/25181)）
- 修复（native-chat）：长回复在重新加载后仍保留 Working 条和 Stop，状态来自宿主上的那一轮（[@brennanb2025](https://github.com/brennanb2025)，[#25751](https://github.com/stablyai/orca/pull/25751)）
- 修复（native-chat）：回答落地前，prompt 卡片占住聊天输入（终端支撑的聊天，桌面和手机）（[@brennanb2025](https://github.com/brennanb2025)，[#25761](https://github.com/stablyai/orca/pull/25761)）
- 修复（native-chat）：发送后把最新内容带进视野，并跟随回复（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24514](https://github.com/stablyai/orca/pull/24514)）
- 修复（native-chat）：回到聊天时丢掉它隐藏期间已经完成的后台任务（[@brennanb2025](https://github.com/brennanb2025)，[#24305](https://github.com/stablyai/orca/pull/24305)）
- 修复（native-chat）：流中断时不再闪一下正在重连（[@brennanb2025](https://github.com/brennanb2025)，[#24898](https://github.com/stablyai/orca/pull/24898)）
- 修复（native-chat）：启动失败的聊天在标签和工作区行上标出（[@brennanb2025](https://github.com/brennanb2025)，[#24904](https://github.com/stablyai/orca/pull/24904)）
- 修复（native-chat）：每种聊天结果只说一次，并去掉仅内部使用的表面（[@brennanb2025](https://github.com/brennanb2025)，[#24595](https://github.com/stablyai/orca/pull/24595)）
- 修复（native-chat）：改掉承诺会重试、会更新或即将变化的聊天文案（[@brennanb2025](https://github.com/brennanb2025)，[#25157](https://github.com/stablyai/orca/pull/25157)）
- 新增（native-chat）：消息框上方用一张通知卡片显示聊天自己的错误（[@brennanb2025](https://github.com/brennanb2025)，[#25835](https://github.com/stablyai/orca/pull/25835)）
- 修复（native-chat）：说明 Claude 重试进行到第几次，以及上次失败的原因（[@brennanb2025](https://github.com/brennanb2025)，[#25818](https://github.com/stablyai/orca/pull/25818)）
- 修复（native-chat）：已发送的图片在 Agent 工作时不再闪成「Pasted image」占位（[@brennanb2025](https://github.com/brennanb2025)，[#25664](https://github.com/stablyai/orca/pull/25664)）
- 新增（native-chat）：一次选择器选择可以附上多个文件（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23956](https://github.com/stablyai/orca/pull/23956)）
- 新增（native-chat）：可从右键菜单复制聊天图片（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24161](https://github.com/stablyai/orca/pull/24161)）
- 新增（native-chat）：在 OpenClaude 和 OMP 的聊天视图里回答 /context（[@brennanb2025](https://github.com/brennanb2025)，[#22294](https://github.com/stablyai/orca/pull/22294)）
- 新增（floating-workspace）：浮动面板走共用的工作区表面渲染（[@brennanb2025](https://github.com/brennanb2025)，[#22302](https://github.com/stablyai/orca/pull/22302)）
- 修复（native-chat）：启动 Codex 聊天时不再等待后台模型探测（[@brennanb2025](https://github.com/brennanb2025)，[#23831](https://github.com/stablyai/orca/pull/23831)）
- Codex 自己的模型列表失败后仍可创建 Codex 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#25754](https://github.com/stablyai/orca/pull/25754)）
- 修复（claude）：用已保存的选项启动 Claude 聊天，并立刻发送第一条消息（[@brennanb2025](https://github.com/brennanb2025)，[#25152](https://github.com/stablyai/orca/pull/25152)）
- 修复（claude）：使用 API key 的 Claude 用户不再被告知未登录（[@brennanb2025](https://github.com/brennanb2025)，[#25163](https://github.com/stablyai/orca/pull/25163)）
- 修复（native-chat）：启动 Windows 聊天时不再读取进程创建时间（[@brennanb2025](https://github.com/brennanb2025)，[#25718](https://github.com/stablyai/orca/pull/25718)）
- 修复（native-chat）：启动 Native Chat 时忽略终端启动命令（[@brennanb2025](https://github.com/brennanb2025)，[#25720](https://github.com/stablyai/orca/pull/25720)）
- 修复（native-chat）：遵守已保存的 Agent Command 和 Arguments（[@brennanb2025](https://github.com/brennanb2025)，[#25721](https://github.com/stablyai/orca/pull/25721)）
- 修复（native-chat）：无法运行的 Command 会被拒绝，而不是悄悄跑库存 CLI（[@brennanb2025](https://github.com/brennanb2025)，[#25667](https://github.com/stablyai/orca/pull/25667)）
- 修复 transcript 替换与聊天发布之间的竞态（[@nwparker](https://github.com/nwparker)，[#25965](https://github.com/stablyai/orca/pull/25965)）
- 修复（mobile-chat）：失败消息的文本加回草稿，过期的重发不再挡住这段文本（[@brennanb2025](https://github.com/brennanb2025)，[#25149](https://github.com/stablyai/orca/pull/25149)）
#### 编排与 Agent 启动 {#v1-4-223-orchestration-agent-launch}

> 从手机启动的 Agent 会立刻得到标签，并让桌面留在原地。已有聊天可以做编排 worker，已经结束的 worker 不再被反复恢复。

- 新增（agent-launch）：立刻在调用方要求的位置显示 Agent 标签（[@brennanb2025](https://github.com/brennanb2025)，[#25430](https://github.com/stablyai/orca/pull/25430)）
- 修复（agent-launch）：手机上的启动不再挪动桌面窗口（[@brennanb2025](https://github.com/brennanb2025)，[#26025](https://github.com/stablyai/orca/pull/26025)）
- 新增（agent-launch）：宿主分配调用方身份，并在标签存在时写下启动记录（统一方案 1/3）（[@brennanb2025](https://github.com/brennanb2025)，[#24934](https://github.com/stablyai/orca/pull/24934)）
- 新增（orchestration）：Native Chat 可以像终端 Agent 一样做分发 worker（[@brennanb2025](https://github.com/brennanb2025)，[#22972](https://github.com/stablyai/orca/pull/22972)）
- 新增（orchestration）：Native Chat 通过和你的消息同一条发送，拿到 CLI Agent 那种编排指针（[@brennanb2025](https://github.com/brennanb2025)，[#25078](https://github.com/stablyai/orca/pull/25078)）
- 新增（native-chat）：显示聊天消息来自哪个 Agent，并可打开它（[@brennanb2025](https://github.com/brennanb2025)，[#25888](https://github.com/stablyai/orca/pull/25888)）
- 修复（orchestration）：经过 /clear 的 Native Chat worker 由正在跑它的会话提供服务（[@brennanb2025](https://github.com/brennanb2025)，[#25875](https://github.com/stablyai/orca/pull/25875)）
- 修复（orchestration）：按聊天 worker 来写 worker 简报（[@brennanb2025](https://github.com/brennanb2025)，[#26036](https://github.com/stablyai/orca/pull/26036)）
- 不再反复恢复已经结束的 worker（[@nwparker](https://github.com/nwparker)，[#25679](https://github.com/stablyai/orca/pull/25679)）
#### Agent、账户与集成 {#v1-4-223-agents-accounts-integrations}

> 切换 Claude 账户会保留 MCP 登录。Codex hook 批准不再在每次启动时重写 ~/.codex。Escape 不再让 Claude 或 Codex 的状态出错。Orca 退出时辅助进程会停掉。Pi 和 OMP 会显示后台辅助项。Rovo Dev 能被检测到，Grok 4.7 也在模型列表里。

- 修复（claude-accounts）：切换账户时保留共用的 MCP OAuth 凭证（[@tomarai85](https://github.com/tomarai85)，[#21931](https://github.com/stablyai/orca/pull/21931)）
- 修复（codex）：只有内容有变化时才把 Orca 的 hook 写入 ~/.codex（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25743](https://github.com/stablyai/orca/pull/25743)）
- 修复（codex）：用 Codex 自己的哈希批准托管 Codex home 里的 Orca hook（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25742](https://github.com/stablyai/orca/pull/25742)）
- 修复（codex）：不再写出 Codex 无法加载的 config.toml，并同时批准两种符号链接写法（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25741](https://github.com/stablyai/orca/pull/25741)）
- 修复 Escape 取消后 Claude 转圈停不下来（[@nwparker](https://github.com/nwparker)，[#25846](https://github.com/stablyai/orca/pull/25846)）
- 修复（codex）：Escape 只关掉搜索或权限时，保留正在工作的状态（[@nwparker](https://github.com/nwparker)，[#25769](https://github.com/stablyai/orca/pull/25769)）
- 等 Codex 的实时编写器就绪后再粘贴关联 issue 草稿（[@nwparker](https://github.com/nwparker)，[#25779](https://github.com/stablyai/orca/pull/25779)）
- 修复 Claude 自动化过早完成，以及继承来的 CI 失败（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24878](https://github.com/stablyai/orca/pull/24878)）
- 新增（pi）：把 Pi 和 OMP 的后台子项显示为行（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23201](https://github.com/stablyai/orca/pull/23201)）
- 修复（omp）：子 Agent 结束后标签转圈不再粘住（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23662](https://github.com/stablyai/orca/pull/23662)）
- 修复（agent-status）：撤下已删除 worktree 的 hook 状态行（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23881](https://github.com/stablyai/orca/pull/23881)）
- 修复：Orca 退出或崩溃时停掉 Claude 和 Agent 辅助进程（STA-9254，1/2）（[@brennanb2025](https://github.com/brennanb2025)，[#25715](https://github.com/stablyai/orca/pull/25715)）
- 修复：Orca 退出或崩溃时停掉 Codex 和 OpenCode 辅助服务（STA-9254，2/2）（[@brennanb2025](https://github.com/brennanb2025)，[#25753](https://github.com/stablyai/orca/pull/25753)）
- 修复（rovo）：通过 acli 检测并启动 Rovo Dev（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25981](https://github.com/stablyai/orca/pull/25981)）
- 修复（grok）：把 Grok 4.7 加进后备模型目录（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25976](https://github.com/stablyai/orca/pull/25976)）
#### 终端 {#v1-4-223-terminal}

> 很长的 Agent 启动命令会完整到达，启动命令使用真正的 Enter。刚关掉或拖出的窗格不再回来，也不会出现两次。

- 在输入处暂存很长的 Agent 启动行，使它们完整到达（7 步中的第 2 步）（[@brennanb2025](https://github.com/brennanb2025)，[#23962](https://github.com/stablyai/orca/pull/23962)）
- 修复（terminal）：在所有平台上用 Enter 提交启动命令（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23672](https://github.com/stablyai/orca/pull/23672)）
- 修复（terminal）：退出前刚关掉的窗格在重新启动时不再回来（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25711](https://github.com/stablyai/orca/pull/25711)）
- 重构（terminal）：在窗口打开标签之前，先在主进程里移走拖出的窗格（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25380](https://github.com/stablyai/orca/pull/25380)）
- 修复终端和聊天文件拖放的归属（STA-6940，PR 1/6）（[@brennanb2025](https://github.com/brennanb2025)，[#25749](https://github.com/stablyai/orca/pull/25749)）
#### SSH、远程服务器与手机 {#v1-4-223-ssh-remote-servers-phone}

> SSH 工作区在重连和重启后仍保留标签、打开的文件和恢复提议。宿主重启或网络中断后，已配对终端、远程浏览器标签和手机上的终端列表会恢复。

- 修复（session）：启动时，本地副本不再覆盖 SSH 拥有的工作区自己的副本（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26098](https://github.com/stablyai/orca/pull/26098)）
- 修复（ssh）：把重新挂上的 SSH 窗格绑进目标自己的会话分区（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26088](https://github.com/stablyai/orca/pull/26088)）
- 修复（ssh）：宿主持有本客户端放不下的标签时，在被清空的 worktree 里打开终端（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23213](https://github.com/stablyai/orca/pull/23213)）
- 修复（ai-vault）：worktree 已删除的会话仍可恢复（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24236](https://github.com/stablyai/orca/pull/24236)）
- 修复（remote-runtime）：宿主应用重新启动后，已配对终端再次接受输入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25736](https://github.com/stablyai/orca/pull/25736)）
- 修复（remote-browser）：配对宿主在中断后回来时，再次托管客户端浏览器页（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25827](https://github.com/stablyai/orca/pull/25827)）
- 修复（serve）：orca serve 重启后，手机上仍保留每一个终端（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26022](https://github.com/stablyai/orca/pull/26022)）
- 修复（runtime）：手机打开空闲终端时构建宿主终端模型（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25780](https://github.com/stablyai/orca/pull/25780)）
- 创建远程 worktree 时不再把已配对客户端导航过去（[@nwparker](https://github.com/nwparker)，[#25793](https://github.com/stablyai/orca/pull/25793)）
- 修复：恢复被删的 Active Server 默认值，并保留编辑器宿主（[@nwparker](https://github.com/nwparker)，[#25938](https://github.com/stablyai/orca/pull/25938)）
#### 工作区、侧栏与标签 {#v1-4-223-workspaces-sidebar-tabs}

> 侧栏会记住自己是否打开。活动视图有过滤器和多选。嵌套 worktree 可以删除。宿主分区独立折叠。标签 tooltip 和滚动更安静。

- 修复（sidebar）：重启后记住左侧栏是否打开（[@INatsukiI](https://github.com/INatsukiI)，[#22682](https://github.com/stablyai/orca/pull/22682)）
- 新增（activity）：过滤器、匹配的标题、行右键菜单，并留在活动视图里（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25376](https://github.com/stablyai/orca/pull/25376)）
- 新增（activity）：多选 Agent 行，并带批量右键菜单（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25486](https://github.com/stablyai/orca/pull/25486)）
- 增加需确认的嵌套 worktree 删除（[@nwparker](https://github.com/nwparker)，[#25668](https://github.com/stablyai/orca/pull/25668)）
- 在后台运行嵌套工作区删除（[@nwparker](https://github.com/nwparker)，[#25975](https://github.com/stablyai/orca/pull/25975)）
- 显示远程工作区时不再展开本地固定项（[@nwparker](https://github.com/nwparker)，[#25836](https://github.com/stablyai/orca/pull/25836)）
- 侧栏分区的折叠在各执行宿主之间保持独立（[@nwparker](https://github.com/nwparker)，[#25944](https://github.com/stablyai/orca/pull/25944)）
- 修复折叠宿主和父项下的发送选择器显示（[@nwparker](https://github.com/nwparker)，[#25950](https://github.com/stablyai/orca/pull/25950)）
- 修复（dock）：清掉过期的工作区未读计数（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24877](https://github.com/stablyai/orca/pull/24877)）
- 修复（worktrees）：在宿主创建时，git worktree add 之前先决定 setup（[@brennanb2025](https://github.com/brennanb2025)，[#26006](https://github.com/stablyai/orca/pull/26006)）
- 修复（worktrees）：宿主取不到远程基线时，从本地分支创建并说明这一点（[@brennanb2025](https://github.com/brennanb2025)，[#26009](https://github.com/stablyai/orca/pull/26009)）
- 修复（repos）：不再把从未运行的克隆报成成功（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23770](https://github.com/stablyai/orca/pull/23770)）
- 修复（tabs）：掠过标签条时不再弹出标签和关闭的 tooltip（[@AmethystLiang](https://github.com/AmethystLiang)，[#25808](https://github.com/stablyai/orca/pull/25808)）
- 性能（tab-bar）：滚动标签条不再重渲染每一个标签（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24240](https://github.com/stablyai/orca/pull/24240)）
#### 编辑器、文件与搜索 {#v1-4-223-editor-files-search}

> 音频和视频文件可以在 Orca 里播放。Quarto 和 R Markdown 会高亮。文件可以在文件管理器里显示。Quick Open 能更精确地找到并打开文件。

- 新增：用原生控件流式预览桌面音频和视频（[@nwparker](https://github.com/nwparker)，[#26120](https://github.com/stablyai/orca/pull/26120)）
- 新增（editor）：Quarto 和 R Markdown 文件按语法高亮，而不是纯文本（[@ykunisato](https://github.com/ykunisato)，[#17772](https://github.com/stablyai/orca/pull/17772)）
- 新增（files）：在文件管理器里显示源码管理中的文件和终端里的文件链接（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24502](https://github.com/stablyai/orca/pull/24502)）
- 改进 Quick Open 的匹配、文件位置和最近历史（[@nwparker](https://github.com/nwparker)，[#25371](https://github.com/stablyai/orca/pull/25371)）
- 取消已放弃的文件搜索，并防止过期结果（[@nwparker](https://github.com/nwparker)，[#25370](https://github.com/stablyai/orca/pull/25370)）
- 限制文件搜索的并发和内存（[@nwparker](https://github.com/nwparker)，[#25369](https://github.com/stablyai/orca/pull/25369)）
- 修复（markdown）：加深暗色表格网格线（[@nwparker](https://github.com/nwparker)，[#25653](https://github.com/stablyai/orca/pull/25653)）
#### 源码管理、任务与 issue {#v1-4-223-source-control-tasks-issues}

> GitHub Projects 的 Board 视图可以作为看板使用。审查卡片更少轮询 GitHub。私有 Linear 图片能加载。SSH 工作区里的 GitLab 写入会到达正确的服务器。

- 新增（github-projects）：把 Board 项目视图渲染成可拖放的看板（[@NaoyaTatetsu](https://github.com/NaoyaTatetsu)，[#19074](https://github.com/stablyai/orca/pull/19074)）
- 自动刷新可见的审查，并停止对已合并项的轮询（[@nwparker](https://github.com/nwparker)，[#25788](https://github.com/stablyai/orca/pull/25788)）
- 修复任务描述里的私有 Linear 图片（[@nwparker](https://github.com/nwparker)，[#25849](https://github.com/stablyai/orca/pull/25849)）
- 修复（jira）：容忍格式错误的嵌套 Jira 状态字段（[@brennanb2025](https://github.com/brennanb2025)，[#25656](https://github.com/stablyai/orca/pull/25656)）
- 修复（git）：前缀退回到对分支安全的作者名（[@nwparker](https://github.com/nwparker)，[#25984](https://github.com/stablyai/orca/pull/25984)）
- 修复（gitlab）：SSH 工作区的写入走 GITLAB_HOST（[@nwparker](https://github.com/nwparker)，[#25985](https://github.com/stablyai/orca/pull/25985)）
#### 浏览器、反馈与通知 {#v1-4-223-browser-feedback-notifications}

> 截图标注有了橡皮擦。Windows 上能找到 Comet。每一次完成音都会播放。过大的反馈截图会重新编码以适配，且不丢失细节。

- 新增（browser）：截图标注增加橡皮擦（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24801](https://github.com/stablyai/orca/pull/24801)）
- 修复（browser）：在 Windows 厂商目录里检测 Comet（[@nwparker](https://github.com/nwparker)，[#25983](https://github.com/stablyai/orca/pull/25983)）
- 修复（notifications）：可靠地重放完成音（[@DEOWL-kan](https://github.com/DEOWL-kan)，[#15940](https://github.com/stablyai/orca/pull/15940)）
- 修复（feedback）：压缩过大的截图且不丢失细节（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#23664](https://github.com/stablyai/orca/pull/23664)）
#### 配置档、设置与语言 {#v1-4-223-profiles-settings-languages}

> 退出和更新时 profile 保存的工作更少，应用卡住后仍会继续保存。日文和中文文案得到修复和翻译。

- 用安全恢复和降级取代自动的 profile JSON 快照（[@OrcaWin](https://github.com/OrcaWin)，[#23262](https://github.com/stablyai/orca/pull/23262)）
- 主循环卡住之后，profile 保存仍继续（[@AmethystLiang](https://github.com/AmethystLiang)，[#25318](https://github.com/stablyai/orca/pull/25318)）
- 修复（i18n）：润色日文上手清单文案（[@tb-soshiro](https://github.com/tb-soshiro)，[#19035](https://github.com/stablyai/orca/pull/19035)）
- 修复（i18n）：修复乱码的日文名称建议，以及颠倒的 ja/zh 引号（[@pinelibg](https://github.com/pinelibg)，[#25255](https://github.com/stablyai/orca/pull/25255)）
- 杂项（i18n）：把 76 个新 key 译成 es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#25719](https://github.com/stablyai/orca/pull/25719)）
- 杂项（i18n）：中文 Agent 文案使用「智能体」（[@AmethystLiang](https://github.com/AmethystLiang)，[#25767](https://github.com/stablyai/orca/pull/25767)）
#### Relay 服务 {#v1-4-223-relay-service}

> Orca relay 服务的服务端容量、部署和监控改动。

- 新增（relay）：把排空节奏窗口作为已审查的同容量输入，并加上感知排空的 503 门（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25639](https://github.com/stablyai/orca/pull/25639)）
- 新增（relay）：报告通道服务时间、503 原因、各站点持有 p99，以及 director 与 cell 的锁等待拆分（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25645](https://github.com/stablyai/orca/pull/25645)）
- 修复（relay）：一次往返提交 cell 计数器；cell 启动不再依赖数据库（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25765](https://github.com/stablyai/orca/pull/25765)）
- 修复（relay）：在 cell 锁之后读取对账的计数器单位（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25638](https://github.com/stablyai/orca/pull/25638)）
- 新增（relay）：一条命令的 director 部署驱动（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25642](https://github.com/stablyai/orca/pull/25642)）
- 修复（relay）：部署驱动构建已检出的提交，提示单独成行，并汇总进度（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25755](https://github.com/stablyai/orca/pull/25755)）
- 新增（relay）：给亚洲 cell c34 一个提升波次，使它可以成为通用 cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25757](https://github.com/stablyai/orca/pull/25757)）
- 杂项（relay）：提升后把亚洲 cell c34 移到通用同容量列表（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25758](https://github.com/stablyai/orca/pull/25758)）
#### 测试、CI 与维护 {#v1-4-223-tests-ci-maintenance}

> 尚未打开的地基（Claude 账户 profile、终端布局改动）、Grok 结构化聊天背后的共用构件、更快更省的测试运行、让 main 能继续构建的修复，以及对共享 YAML 默认值能展开多远的限制。

- 新增（claude）：准备账户 profile 和共享历史（4 步中的第 1 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24300](https://github.com/stablyai/orca/pull/24300)）
- Claude 账户 profile：休眠中的路由和消费方（4 步中的第 2 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24351](https://github.com/stablyai/orca/pull/24351)）
- Claude 账户 profile：休眠中的 WSL guest 设置（4 步中的第 3 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24384](https://github.com/stablyai/orca/pull/24384)）
- 修复（claude）：在 Windows 上用 junction 和同盘硬链接共享账户历史（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26067](https://github.com/stablyai/orca/pull/26067)）
- 从 Codex 抽出提供方进程监管和流读取（[@brennanb2025](https://github.com/brennanb2025)，[#24989](https://github.com/stablyai/orca/pull/24989)）
- 增加独立的 Agent Client Protocol 客户端层（[@brennanb2025](https://github.com/brennanb2025)，[#24990](https://github.com/stablyai/orca/pull/24990)）
- 重构（native-chat）：提供方的 resume 句柄对共享代码保持不透明（[@brennanb2025](https://github.com/brennanb2025)，[#24991](https://github.com/stablyai/orca/pull/24991)）
- 重构（native-chat）：结构化 Agent 自己声明能力，而不是共享代码点名 Claude 和 Codex（[@brennanb2025](https://github.com/brennanb2025)，[#25076](https://github.com/stablyai/orca/pull/25076)）
- 新增（native-chat）：在协商出的能力之后，向已注册 Agent 开放结构化聊天的线路和存储记录（[@brennanb2025](https://github.com/brennanb2025)，[#25159](https://github.com/stablyai/orca/pull/25159)）
- 结构化提供方共用托管进程生命周期（[@brennanb2025](https://github.com/brennanb2025)，[#25204](https://github.com/stablyai/orca/pull/25204)）
- 把一个提供方事件的日志写入收成一次排队操作，执行时再决定（[@brennanb2025](https://github.com/brennanb2025)，[#25141](https://github.com/stablyai/orca/pull/25141)）
- 为结构化 Agent 聊天增加共用时间线组装器（尚未接通）（[@brennanb2025](https://github.com/brennanb2025)，[#25064](https://github.com/stablyai/orca/pull/25064)）
- 把 ACP 流量译成共用时间线事件（[@brennanb2025](https://github.com/brennanb2025)，[#25090](https://github.com/stablyai/orca/pull/25090)）
- 让 ACP 连接拥有自己的 Agent 进程（[@brennanb2025](https://github.com/brennanb2025)，[#25810](https://github.com/stablyai/orca/pull/25810)）
- 重构（native-chat）：去掉记录文件和按聊天日志的导入（[@brennanb2025](https://github.com/brennanb2025)，[#26038](https://github.com/stablyai/orca/pull/26038)）
- 新增（agent-launch）：桌面 AI 按钮通过 agent.launch 启动 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#25624](https://github.com/stablyai/orca/pull/25624)）
- 重构（composer）：删掉没有任何调用方能走到的完整创建路径（[@brennanb2025](https://github.com/brennanb2025)，[#26052](https://github.com/stablyai/orca/pull/26052)）
- [STA-6940] 为元素所有者准备文件拖放（6 个 PR 中的第 2 个）（[@brennanb2025](https://github.com/brennanb2025)，[#25748](https://github.com/stablyai/orca/pull/25748)）
- 重构（codex）：删掉 ~/.codex hook 重做后留下的无用代码（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25744](https://github.com/stablyai/orca/pull/25744)）
- 重构（terminal）：增加就地应用窗格布局几何（尚未使用）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25671](https://github.com/stablyai/orca/pull/25671)）
- 重构（terminal）：报告两条布局不变量被打破的情况，并增加未运行的加载修复（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25673](https://github.com/stablyai/orca/pull/25673)）
- 重构（terminal）：终端启动时携带窗格位置，仅报告（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25677](https://github.com/stablyai/orca/pull/25677)）
- 重构（terminal）：标出来自用户手势的布局更新（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25680](https://github.com/stablyai/orca/pull/25680)）
- 重构（terminal）：每次保存后投影主进程的终端布局（尚无读取方）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25682](https://github.com/stablyai/orca/pull/25682)）
- 测试（e2e）：对照 main 检查终端布局是否一致（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25681](https://github.com/stablyai/orca/pull/25681)）
- 限制 YAML 合并转换，并补上 SQLite 路由审查缺口（[@nwparker](https://github.com/nwparker)，[#25998](https://github.com/stablyai/orca/pull/25998)）
- 修复（windows）：生成的技能和快照保持 LF（[@nwparker](https://github.com/nwparker)，[#25972](https://github.com/stablyai/orca/pull/25972)）
- 测试：即使运行时尚未加载，也检查结构化聊天代码是否引入 Electron（[@brennanb2025](https://github.com/brennanb2025)，[#24988](https://github.com/stablyai/orca/pull/24988)）
- 测试（native-chat）：覆盖已配对运行时的启动兼容（[@brennanb2025](https://github.com/brennanb2025)，[#25072](https://github.com/stablyai/orca/pull/25072)）
- 减少 CI 里的本地化审计和 relay 设置工作（[@nwparker](https://github.com/nwparker)，[#25665](https://github.com/stablyai/orca/pull/25665)）
- 修复（ci）：嵌套 worktree 删除对话框之后，解开 main 的静态分析（[@brennanb2025](https://github.com/brennanb2025)，[#25683](https://github.com/stablyai/orca/pull/25683)）
- 修复：嵌套 worktree 删除对话框之后，恢复 main 的 lint 和本地化检查（[@brennanb2025](https://github.com/brennanb2025)，[#25684](https://github.com/stablyai/orca/pull/25684)）
- 修复（test）：停止说明测试使用当前的提供方句柄形状（解开 main 的类型检查）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25706](https://github.com/stablyai/orca/pull/25706)）
- 修复（test）：提交位置测试使用当前的提供方句柄形状（解开 main 的类型检查）（[@brennanb2025](https://github.com/brennanb2025)，[#25709](https://github.com/stablyai/orca/pull/25709)）
- 测试（ratchet）：既然 src/main/provider-process 已落地，就要求它存在（[@brennanb2025](https://github.com/brennanb2025)，[#25710](https://github.com/stablyai/orca/pull/25710)）
- 修复（test）：去掉破坏 main 类型检查的重复 codexProviderHandle 导入（[@brennanb2025](https://github.com/brennanb2025)，[#25713](https://github.com/stablyai/orca/pull/25713)）
- 测试：去掉两次 main 修复都加进来的重复 codexProviderHandle 导入（[@brennanb2025](https://github.com/brennanb2025)，[#25717](https://github.com/stablyai/orca/pull/25717)）
- 修复（test）：在提交位置测试里恢复 codexProviderHandle 导入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25722](https://github.com/stablyai/orca/pull/25722)）
- 修复（test）：恢复被 #25078 合并去掉的 codexProviderHandle 导入（[@brennanb2025](https://github.com/brennanb2025)，[#25728](https://github.com/stablyai/orca/pull/25728)）
- 测试（cross-version）：加载那些会导入 main 已删除包的发行版（[@brennanb2025](https://github.com/brennanb2025)，[#25731](https://github.com/stablyai/orca/pull/25731)）
- 测试（agent-launch）：在 #23672 之后仍不能搭上该行的 prompt 上保留携带控制（[@brennanb2025](https://github.com/brennanb2025)，[#25734](https://github.com/stablyai/orca/pull/25734)）
- CI runner 队列恢复期间暂停 Pullfrog（[@nwparker](https://github.com/nwparker)，[#25760](https://github.com/stablyai/orca/pull/25760)）
- 删掉低价值测试和重复的模糊比较，以减少 CI 工作（[@nwparker](https://github.com/nwparker)，[#25791](https://github.com/stablyai/orca/pull/25791)）
- 减少重复测试和不必要的 CI 等待（[@nwparker](https://github.com/nwparker)，[#25806](https://github.com/stablyai/orca/pull/25806)）
- 并行构建 SSH 宿主兼容槽（[@nwparker](https://github.com/nwparker)，[#25821](https://github.com/stablyai/orca/pull/25821)）
- 性能（ci）：所有打包宿主只编译一次发布用 JavaScript（[@nwparker](https://github.com/nwparker)，[#25828](https://github.com/stablyai/orca/pull/25828)）
- 未合并的 PR 关闭后停止昂贵检查（[@nwparker](https://github.com/nwparker)，[#25829](https://github.com/stablyai/orca/pull/25829)）
- 修复 main CI 在协议能力注册表上的行数限制失败（[@nwparker](https://github.com/nwparker)，[#25839](https://github.com/stablyai/orca/pull/25839)）
- 在 Node 运行时契约下用 Bun 跑 Vitest（[@nwparker](https://github.com/nwparker)，[#25840](https://github.com/stablyai/orca/pull/25840)）
- 测试（mobile）：把轮次披露测试拆到 800 行测试限制以下（[@brennanb2025](https://github.com/brennanb2025)，[#25933](https://github.com/stablyai/orca/pull/25933)）
- 修复（ci）：#25751 和 #24369 之后恢复 main 的类型检查和 lint（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25949](https://github.com/stablyai/orca/pull/25949)）
- 用跨运行时的时长调度加快单元测试（[@nwparker](https://github.com/nwparker)，[#25967](https://github.com/stablyai/orca/pull/25967)）
- 修复（test）：恢复 main 类型检查——在记录存储槽测试里传入 resolveLaunchArgs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25970](https://github.com/stablyai/orca/pull/25970)）
- 修复（test）：恢复 main 类型检查——在 Codex 停止发送顺序测试里传入 resolveLaunchArgs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25977](https://github.com/stablyai/orca/pull/25977)）
- 简化显示和测试夹具清理（[@nwparker](https://github.com/nwparker)，[#25978](https://github.com/stablyai/orca/pull/25978)）
- 修复（test）：去掉破坏 main lint 的重复 resolveLaunchArgs（[@brennanb2025](https://github.com/brennanb2025)，[#25997](https://github.com/stablyai/orca/pull/25997)）
- 在 Bun 上跑本地化目录检查（时间少 26%）（[@nwparker](https://github.com/nwparker)，[#25999](https://github.com/stablyai/orca/pull/25999)）
- 加快昂贵的测试夹具（时间少 23–82%）（[@nwparker](https://github.com/nwparker)，[#26000](https://github.com/stablyai/orca/pull/26000)）
- 测试（codex）：关掉状态 hook 始终压过仍在进行的打开（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26001](https://github.com/stablyai/orca/pull/26001)）
- 测试（e2e）：源码管理显示的黄金文件不跟到更早的发行标签（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26005](https://github.com/stablyai/orca/pull/26005)）
- 修复（ci）：在 Node 运行时项目里跑三个新的 SQLite 支撑测试（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26010](https://github.com/stablyai/orca/pull/26010)）
- 在其他套件之后跑 SQLite 响应性测试（[@nwparker](https://github.com/nwparker)，[#26015](https://github.com/stablyai/orca/pull/26015)）
- 测试（vitest）：在 SQLite 运行时项目里跑 agent-launch-instant-tab（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26028](https://github.com/stablyai/orca/pull/26028)）
- 把原生契约留在 Node 上，并等待 Git 升级完成（[@nwparker](https://github.com/nwparker)，[#26034](https://github.com/stablyai/orca/pull/26034)）
- 测试：限制运行时 Electron 审计使用的内存（[@nwparker](https://github.com/nwparker)，[#26049](https://github.com/stablyai/orca/pull/26049)）
- 修复（lint）：把 structured-agent-session-host 拉回最大行数以内（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26050](https://github.com/stablyai/orca/pull/26050)）
- 修复不安全的测试夹具和 Bun 版本钉扎（[@nwparker](https://github.com/nwparker)，[#26051](https://github.com/stablyai/orca/pull/26051)）
- 修复（native-chat）：把附件失败文案拆出去，使 Lint 能在 main 上通过（[@brennanb2025](https://github.com/brennanb2025)，[#26079](https://github.com/stablyai/orca/pull/26079)）
- 修复（ci）：真正把 Electron 探测排除出无头 node-server 通道（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26093](https://github.com/stablyai/orca/pull/26093)）
- 修复（acp）：去掉旧日志路径之后，修复 main 的类型检查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26094](https://github.com/stablyai/orca/pull/26094)）
- 性能（tests）：测试运行之间复用 Vitest transform（[@nwparker](https://github.com/nwparker)，[#26095](https://github.com/stablyai/orca/pull/26095)）
- 修复（native-chat）：@ 提及属性改名之后，修复 main 的 web 类型检查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#26097](https://github.com/stablyai/orca/pull/26097)）
- 性能（tests）：自动化夹具里避免重复导入持久化（[@nwparker](https://github.com/nwparker)，[#26111](https://github.com/stablyai/orca/pull/26111)）
- 性能（tests）：用例之间释放过期的窗格迁移监听器（[@nwparker](https://github.com/nwparker)，[#26131](https://github.com/stablyai/orca/pull/26131)）
- 推进模拟测试时钟，而不是按真实时间等待（[@nwparker](https://github.com/nwparker)，[#26135](https://github.com/stablyai/orca/pull/26135)）
- 减少草稿存储测试里重复的 UI 导入（[@nwparker](https://github.com/nwparker)，[#26145](https://github.com/stablyai/orca/pull/26145)）
- 测试：用暂存单元格复用把回放预言时间减少 20.93%（[@nwparker](https://github.com/nwparker)，[#26162](https://github.com/stablyai/orca/pull/26162)）
- 测试：把终端拓扑套件时间减少 40.98%（[@nwparker](https://github.com/nwparker)，[#26166](https://github.com/stablyai/orca/pull/26166)）
### 新贡献者 {#v1-4-223-contributors}

- [@DEOWL-kan](https://github.com/DEOWL-kan) 首次贡献于 [#15940](https://github.com/stablyai/orca/pull/15940)
- [@ykunisato](https://github.com/ykunisato) 首次贡献于 [#17772](https://github.com/stablyai/orca/pull/17772)
- [@tomarai85](https://github.com/tomarai85) 首次贡献于 [#21931](https://github.com/stablyai/orca/pull/21931)
- [@INatsukiI](https://github.com/INatsukiI) 首次贡献于 [#22682](https://github.com/stablyai/orca/pull/22682)
- [@pinelibg](https://github.com/pinelibg) 首次贡献于 [#25255](https://github.com/stablyai/orca/pull/25255)
**完整变更对照：** [v1.4.222...v1.4.223](https://github.com/stablyai/orca/compare/v1.4.222...v1.4.223)

## v1.4.222 OpenCode worker 等可提交后再交任务，大 CSV 可表格编辑 {#v1-4-222}

2026年10月7日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.222)

感谢使用 Orca，也感谢一直以来的支持。

Orca Server 2.0 即将推出，会让远程工作更可靠。当前 Remote Server 仍是实验功能，可能有 bug。

### 简要说明 {#v1-4-222-short}

- **OpenCode worker：** 用 `orca orchestration worker-start --agent opencode` 启动的 worker，在忙碌机器上不再把任务留在 OpenCode 输入框里不发送；Orca 会等到 OpenCode 真正能提交再交给它。worker 可以使用请求的模型，而不改你其他启动的默认模型。OpenCode 2.0.12 会自己发出第一条 prompt，Orca 的 OpenCode 插件会装到该终端的 OpenCode 实际读取设置的位置。
- **侧栏与工作区：** 你在侧栏里显示的远程计算机，不会在 Orca 保存设置时再次消失。拖动子项已折叠的工作区现在会真正移动它；拖动工作区不再能把侧栏拖崩。删除对话框在检查加载时不再跳动。Create worktree 会马上关闭，设置脚本在后台检查。
- **CSV 文件：** 大 CSV 不必一次载入整个文件即可打开。可以调整列宽、打开链接、编辑单元格、增删行列、复制粘贴区域、排序或筛选，列宽会被记住。
- **编辑器：** 项目以外文件的标签，重启后不再变回 “Access denied”。不同计算机上路径相同的文件，各自保留文本和 Undo 历史。图片粘贴和大段 Markdown 粘贴会落在你开始粘贴的位置，notebook 单元格会跟上磁盘上的改动。
- **日文、中文或韩文输入：** 按 Enter 确认文字时，不会再同时提交该字段、创建文件或发送评论。Orca 各处都是如此。
- **Native Chat（实验性）：** 打开聊天绝不会删掉它的历史，即使这份历史是较新的 Orca 保存的。消息在宿主确认前显示 “Sending…”，投递失败则显示 “Not sent” 并给出原因。Stop 只标记它真正停掉的那一轮。启动失败不再挡住新聊天。模型列表来自真正跑聊天的那台机器。被崩溃或退出截断的回复，会显示为已完成，并附一条说明。
- **Agent 与账户：** 用量菜单会在用量上限旁边显示 Claude 用量额度、OpenCode Zen 余额和 Codex 额度。切换 Codex 账户后重启，会继续同一段对话，而不是留下空白终端。已保存的模型选择和配置好的 Agent 参数不再重复发送同一个 flag，也就不会因此启动失败。Cursor 用量会读到正确的账户。
- **远程终端：** 回到正在跑 Claude Code 的远程标签时，不会再透过 Claude 的画面看到旧的 shell 输出。
- **Jira：** 创建 Jira issue 时可以选择 assignee。

### 已知问题 {#v1-4-222-known-issues}

**更新后的 Agent 检测：** 如果从 v1.4.221 更新，OpenCode、Pi 和 Qoder 检测的改进要等终端后台服务重启后才生效。已经打开的终端会在这次更新中继续运行。

**Windows on ARM：** ARM64 包装的是 x64 的 `orca.exe` 命令行工具。Windows 11 on ARM 会用模拟运行它。Windows 10 on ARM 跑不了，所以那里的 `orca` 命令不可用（#24094）。

**OpenCode 2：** 如果从 v1.4.219 或更早版本更新，已经在跑的 OpenCode 2 窗格可能要在里面重启 OpenCode 之后才有状态。这次更新之后如果降级 Orca，会留下重复的 OpenCode 状态插件。`opencode run` 退出后，窗格可能一直显示 “Done”；修复还在 #24472。

**Codex：** 升级之后，在 Codex 批准 Orca 的新状态 hook 之前，Codex 启动会使用 Orca 托管的 Codex home。恢复一个使用 `~/.codex` 的窗格，可能停顿最多 30 秒（#23552）。

**Claude 文件夹信任：** 文件夹预信任默认开启（Settings → Agents → “Trust the folder when Orca starts an agent”）。在 Alpine WSL 上，Orca 复制不了它需要的文件权限，所以 Claude 会改显示自己的信任提示（#23744）。

### 产品体验 {#v1-4-222-product}

#### Codex 与编排 {#v1-4-222-codex-orchestration}

> OpenCode worker 会在 OpenCode 能提交时才收到任务，也可以使用自己的模型。从手机发起的长启动 prompt 会在 Agent 就绪后粘贴一次。切换 Codex 账户会继续同一段对话。

- 修复（orchestration）：只在 OpenCode 能提交时才把任务交给 OpenCode worker（[@OrcaWin](https://github.com/OrcaWin)，[#25101](https://github.com/stablyai/orca/pull/25101)）
- 在执行主机上校验 OpenCode worker 的模型偏好（[@nwparker](https://github.com/nwparker)，[#24624](https://github.com/stablyai/orca/pull/24624)）
- OpenCode worker 的模型选择与默认模型分开保留（[@nwparker](https://github.com/nwparker)，[#24768](https://github.com/stablyai/orca/pull/24768)）
- 新增（agent-launch）：长 prompt 不放在启动命令行上，就绪后再粘贴（7 步中的第 1 步）（[@brennanb2025](https://github.com/brennanb2025)，[#24257](https://github.com/stablyai/orca/pull/24257)）
- 修复（codex）：切换账户后继续会话，而不把终端清空（[@nwparker](https://github.com/nwparker)，[#25485](https://github.com/stablyai/orca/pull/25485)）

#### Native Chat {#v1-4-222-native-chat}

> 打开聊天绝不会删掉历史。消息会显示是否已发送。Stop 和启动失败的行为正确。模型列表来自真正跑聊天的那台机器。

- 修复（native-chat）：读取时绝不删除聊天历史；Orca 载入不了的聊天只说明一次原因（[@brennanb2025](https://github.com/brennanb2025)，[#24576](https://github.com/stablyai/orca/pull/24576)）
- 修复（native-chat）：消息在宿主确认前显示 “Sending…”（[@brennanb2025](https://github.com/brennanb2025)，[#24606](https://github.com/stablyai/orca/pull/24606)）
- 修复（native-chat）：Orca 已接受但随后投递失败的消息，在聊天里显示为 “Not sent”（[@brennanb2025](https://github.com/brennanb2025)，[#24710](https://github.com/stablyai/orca/pull/24710)）
- 重发的聊天消息拿到的是已记录的回答，而不是过早拒绝或编造的记录（[@brennanb2025](https://github.com/brennanb2025)，[#25158](https://github.com/stablyai/orca/pull/25158)）
- 修复（native-chat）：Stop 只绑定它真正停掉的那一轮（[@brennanb2025](https://github.com/brennanb2025)，[#24864](https://github.com/stablyai/orca/pull/24864)）
- 修复（native-chat）：更早的启动失败之后仍可开始新聊天（[@brennanb2025](https://github.com/brennanb2025)，[#24917](https://github.com/stablyai/orca/pull/24917)）
- 修复（native-chat）：被 Orca 崩溃或退出截断的回复，按已完成的一轮显示，并附一条说明（[@brennanb2025](https://github.com/brennanb2025)，[#25043](https://github.com/stablyai/orca/pull/25043)）
- 修复（native-chat）：新的结构化聊天的模型列表来自真正跑它的那台机器（[@brennanb2025](https://github.com/brennanb2025)，[#25143](https://github.com/stablyai/orca/pull/25143)）
- 修复（native-chat）：聊天的完成轮次提醒来自标签上记录的宿主，而不是工作区 id（[@brennanb2025](https://github.com/brennanb2025)，[#25081](https://github.com/stablyai/orca/pull/25081)）

#### Agent、账户与集成 {#v1-4-222-agents-accounts-integrations}

> 额度余额会出现在用量上限旁边。OpenCode 更可靠地装上插件并发出第一条 prompt。Agent 不再因重复 flag 而启动失败。Cursor 用量读到正确账户。

- 在用量上限旁边显示提供方额度余额（[@nwparker](https://github.com/nwparker)，[#25408](https://github.com/stablyai/orca/pull/25408)）
- 修复重复的会话选项 flag，并保留参数值（[@AmethystLiang](https://github.com/AmethystLiang)，[#25382](https://github.com/stablyai/orca/pull/25382)）
- 修复（cursor）：把用量 cookie 留在已解析的账户上（[@nwparker](https://github.com/nwparker)，[#25243](https://github.com/stablyai/orca/pull/25243)）
- 通过原生启动插件提交 OpenCode 2.0.12 的初始 prompt（[@nwparker](https://github.com/nwparker)，[#25428](https://github.com/stablyai/orca/pull/25428)）
- 把 OpenCode hook 装到该终端的配置目录（[@nwparker](https://github.com/nwparker)，[#25296](https://github.com/stablyai/orca/pull/25296)）
- 增加仓库级 OpenCode 权限默认值（[@nwparker](https://github.com/nwparker)，[#25326](https://github.com/stablyai/orca/pull/25326)）
- 修复（opencode）：脱离的服务不再使前台终端失效（[@nwparker](https://github.com/nwparker)，[#25378](https://github.com/stablyai/orca/pull/25378)）
- 限制 OpenCode 历史读取和重复的 worker 失败（[@nwparker](https://github.com/nwparker)，[#25292](https://github.com/stablyai/orca/pull/25292)）

#### 终端 {#v1-4-222-terminal}

> 正在跑 Claude Code 的远程标签不再透过它的画面显示旧输出。手机控制终端时显示的卡片更简单。

- 修复（terminal）：回到远程标签时，旧输出不再渗进 Claude 的画面（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24926](https://github.com/stablyai/orca/pull/24926)）
- 简化手机控制和手机尺寸的终端对话框（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25307](https://github.com/stablyai/orca/pull/25307)）

#### 移动应用与已配对客户端 {#v1-4-222-mobile-app-paired-clients}

> Android 聊天滚动时不再选中词语。工作指示环继续转动。置顶工作区跟随桌面设置。应用内 Android 下载链接指向 0.0.52。

- 修复（mobile）：Android 滚动聊天记录时不再选中词语（[@chokolademilch7](https://github.com/chokolademilch7)，[#22871](https://github.com/stablyai/orca/pull/22871)）
- 修复（mobile）：OTA 页面上的工作指示环继续转动（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25299](https://github.com/stablyai/orca/pull/25299)）
- 修复（mobile）：遵从桌面端置顶 worktree 的位置设置（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25301](https://github.com/stablyai/orca/pull/25301)）
- 增加共享工作区设置说明，并防止过滤器弹层展开（[@AmethystLiang](https://github.com/AmethystLiang)，[#25300](https://github.com/stablyai/orca/pull/25300)）
- 把应用内 Android APK 链接更新到 mobile 0.0.52（[@brennanb2025](https://github.com/brennanb2025)，[#25168](https://github.com/stablyai/orca/pull/25168)）

#### 工作区与侧栏 {#v1-4-222-workspaces-sidebar}

> 显示出来的远程计算机保持可见。子项已折叠的工作区可以重新排序且不崩溃。删除对话框保持稳定。Create worktree 不再等待脚本检查。Activity 预览保持简短。

- 修复（sidebar）：过期的 UI 更新不再盖掉远程主机的可见性（[@nwparker](https://github.com/nwparker)，[#25737](https://github.com/stablyai/orca/pull/25737)）
- 修复子项已折叠的工作区重新排序（[@nwparker](https://github.com/nwparker)，[#25302](https://github.com/stablyai/orca/pull/25302)）
- 修复：在 store 里落定 sortEpoch，避免 React 更新深度超限（[@AmethystLiang](https://github.com/AmethystLiang)，[#25313](https://github.com/stablyai/orca/pull/25313)）
- 变更加载时保持工作区删除对话框稳定（[@nwparker](https://github.com/nwparker)，[#25321](https://github.com/stablyai/orca/pull/25321)）
- 修复：慢速脚本检查之前先关闭 worktree 对话框（[@nwparker](https://github.com/nwparker)，[#25472](https://github.com/stablyai/orca/pull/25472)）
- 修复（activity）：行预览里的代码块不再渲染成滚动框（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25410](https://github.com/stablyai/orca/pull/25410)）

#### 输入、设置与语言 {#v1-4-222-input-settings-languages}

> 用来确认日文、中文或韩文的 Enter 不再提交字段。防休眠说明会解释各平台合盖后做什么。终端 shell 设置已有译文。

- 修复：防止 IME 的 Enter 在 Orca 各处提交文本字段（[@nwparker](https://github.com/nwparker)，[#25480](https://github.com/stablyai/orca/pull/25480)）
- 修复（ui）：在工作区详情里恢复对 IME Enter 的防护（[@setodeve](https://github.com/setodeve)，[#24099](https://github.com/stablyai/orca/pull/24099)）
- 更新 Caffeinate 提示文案，说明 MacBook 合盖行为（[@AmethystLiang](https://github.com/AmethystLiang)，[#23091](https://github.com/stablyai/orca/pull/23091)）
- 按平台说清防休眠提示的行为（[@AmethystLiang](https://github.com/AmethystLiang)，[#25323](https://github.com/stablyai/orca/pull/25323)）
- 为终端 shell 设置补充译文（[@AmethystLiang](https://github.com/AmethystLiang)，[#25418](https://github.com/stablyai/orca/pull/25418)）

#### 编辑器、文件与搜索 {#v1-4-222-editor-files-search}

> 大 CSV 打开更快，可以当表格编辑。项目以外文件的标签重启后能重新打开。不同计算机上路径相同的文件保持分开。粘贴落在开始的位置。搜索预览占用更少内存。

- 让大 CSV 预览保持响应，并加上列宽调整和链接（[@nwparker](https://github.com/nwparker)，[#25381](https://github.com/stablyai/orca/pull/25381)）
- 直接编辑 CSV 表格，并记住列宽（[@nwparker](https://github.com/nwparker)，[#25442](https://github.com/stablyai/orca/pull/25442)）
- 修复（editor）：项目以外文件恢复的标签不再以 Access denied 失败（[@brennanb2025](https://github.com/brennanb2025)，[#24489](https://github.com/stablyai/orca/pull/24489)）
- 按执行主机隔离代码编辑器的文本和 Undo 历史（[@nwparker](https://github.com/nwparker)，[#25174](https://github.com/stablyai/orca/pull/25174)）
- 编辑器变化时保留图片剪贴板目标和内容（[@nwparker](https://github.com/nwparker)，[#25176](https://github.com/stablyai/orca/pull/25176)）
- 大段 Markdown 粘贴保持在原来的选区（[@nwparker](https://github.com/nwparker)，[#25177](https://github.com/stablyai/orca/pull/25177)）
- 选中文本导航不再改写文档链接（[@nwparker](https://github.com/nwparker)，[#25175](https://github.com/stablyai/orca/pull/25175)）
- Markdown 审阅选区复用源行计算（[@nwparker](https://github.com/nwparker)，[#25173](https://github.com/stablyai/orca/pull/25173)）
- 外部重新加载后，保持当前的 notebook 单元格仍是活动单元格（[@nwparker](https://github.com/nwparker)，[#25172](https://github.com/stablyai/orca/pull/25172)）
- 限制搜索预览内存，并停掉已取消的 SSH 扫描（[@nwparker](https://github.com/nwparker)，[#25303](https://github.com/stablyai/orca/pull/25303)）
- 用 stream-json 替换打过补丁的 JSON 解析器（[@nwparker](https://github.com/nwparker)，[#25202](https://github.com/stablyai/orca/pull/25202)）

#### 任务与 issue {#v1-4-222-tasks-issues}

> 创建 Jira issue 时可以选择 assignee。已配对的网页客户端能处理缺失的 Jira 状态。

- 新增（jira）：创建 issue 时选择 assignee——Automatic、me，或任何人（[@kazuki-hanai](https://github.com/kazuki-hanai)，[#24376](https://github.com/stablyai/orca/pull/24376)）
- 修复（jira）：已配对网页客户端不再因缺失的 Jira 状态崩溃（[@brennanb2025](https://github.com/brennanb2025)，[#25579](https://github.com/stablyai/orca/pull/25579)）

#### Relay 服务 {#v1-4-222-relay-service}

> Orca relay 服务的服务端容量与清理工作。

- 新增（relay）：把亚洲备用单元 c34 声明为仅用于迁移（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25336](https://github.com/stablyai/orca/pull/25336)）
- 杂项（relay）：提升后把美国单元 c32 和 c33 移入通用同容量列表（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25367](https://github.com/stablyai/orca/pull/25367)）
- 修复（relay）：没有单元符合条件时，跳过死单元清扫的主机扫描（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25350](https://github.com/stablyai/orca/pull/25350)）
- 修复（relay）：按有界批次修剪已释放的控制连接预留（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25352](https://github.com/stablyai/orca/pull/25352)）
- 修复（relay）：确认结果保留一周，审计事件保留 90 天（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25353](https://github.com/stablyai/orca/pull/25353)）
- 重构（relay）：不再创建三张没有任何写入的表（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25354](https://github.com/stablyai/orca/pull/25354)）

#### 测试、CI 与维护 {#v1-4-222-tests-ci-maintenance}

> PR 检查在准备和失败运行上花的时间更少。贡献者文档与 PR 模板一致。代码重组，行为不变。

- 减少 PR 检查和 SSH 测试准备里可避免的工作（[@nwparker](https://github.com/nwparker)，[#25309](https://github.com/stablyai/orca/pull/25309)）
- 在接纳较短的必需检查之前，先等 PR preflight（[@nwparker](https://github.com/nwparker)，[#25317](https://github.com/stablyai/orca/pull/25317)）
- 减少重复的 CI 准备，并错开移动端类型检查（[@nwparker](https://github.com/nwparker)，[#25359](https://github.com/stablyai/orca/pull/25359)）
- 减少重复的终端扫描和未使用的 Qoder 测试导入（[@nwparker](https://github.com/nwparker)，[#25425](https://github.com/stablyai/orca/pull/25425)）
- 修复（test）：在图片插入访问测试里传入 getInsertionRange（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25351](https://github.com/stablyai/orca/pull/25351)）
- 修复（test）：给图片插入的 store 替身一份打开文件列表（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25357](https://github.com/stablyai/orca/pull/25357)）
- 测试（linear）：覆盖以数字开头的 issue 标识（[@kenfdev](https://github.com/kenfdev)，[#10241](https://github.com/stablyai/orca/pull/10241)）
- 重构（terminal）：终端拓扑关闭收成一个 commit 模块，并加上边界检查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25329](https://github.com/stablyai/orca/pull/25329)）
- 把 CSV 编辑器代码归到自己的文件夹（[@nwparker](https://github.com/nwparker)，[#25476](https://github.com/stablyai/orca/pull/25476)）
- 移除已完成的 SSH 选择器 E2E 计划（[@kazooooo-ma](https://github.com/kazooooo-ma)，[#24824](https://github.com/stablyai/orca/pull/24824)）
- 文档：让贡献者指引与 PR 模板一致（[@pqminh27](https://github.com/pqminh27)，[#25034](https://github.com/stablyai/orca/pull/25034)）

### 新贡献者 {#v1-4-222-contributors}

- [@chokolademilch7](https://github.com/chokolademilch7) 的首次贡献是 [#22871](https://github.com/stablyai/orca/pull/22871)
- [@setodeve](https://github.com/setodeve) 的首次贡献是 [#24099](https://github.com/stablyai/orca/pull/24099)
- [@kazuki-hanai](https://github.com/kazuki-hanai) 的首次贡献是 [#24376](https://github.com/stablyai/orca/pull/24376)
- [@kazooooo-ma](https://github.com/kazooooo-ma) 的首次贡献是 [#24824](https://github.com/stablyai/orca/pull/24824)
- [@pqminh27](https://github.com/pqminh27) 的首次贡献是 [#25034](https://github.com/stablyai/orca/pull/25034)

**完整变更对照：** [v1.4.221...v1.4.222](https://github.com/stablyai/orca/compare/v1.4.221...v1.4.222)

## v1.4.221 Copilot 配置改为仅所有者可读，Windows Codex 改用 ~/.codex {#v1-4-221}

2026年10月5日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.221)

感谢使用 Orca，也感谢一直以来的支持。

Remote Server 仍是实验功能，可能有 bug。Remote Server 2.0 将于本周推出，会消掉其中大部分问题。

### 简要说明 {#v1-4-221-short}

- **Copilot 安全修复：** Orca 把文件夹标成 GitHub Copilot 已信任时，可能把 `~/.copilot/config.json` 留成同机其他用户也可读。该文件可以存放 Copilot 登录令牌。v1.4.219 和 v1.4.220 在 SSH 主机上也会这样，而那些机器经常多人共用。现在 Orca 写入之后，文件只对所有者可读。旧版 Orca 已经放开的文件，会在下次 Orca 往里添加新文件夹时修好。
- **Windows 上的 Codex 改用你自己的 `~/.codex`：** Orca 里的 Codex 现在和 Orca 外的 Codex 使用同一文件夹，macOS 和 Linux 本来就是这样。如果只在 Orca 里登录过，这次会把登录状态复制过去，所以仍然保持登录。Codex 可能会再次要求信任文件夹或批准命令；只在 Orca 里添加的 MCP 服务器需要重新添加。一次性提示会说明这件事。更新前已经打开的 Codex 终端继续用 Orca 的旧文件夹，保留仅 Orca 有的 MCP 服务器，也不再弹出重启对话框。
- **Codex worker：** `worker-start` 现在接受 Orca 尚未列出的 Codex 模型的 `max` 和 `ultra` effort，例如 gpt-6.x，不再直接拒绝。
- **更多 Agent 与账户：** Qoder 对话会出现在会话历史和搜索里。Orca 可以启动 Qoder CLI China 和 Qwen Code，GLM Coding Plans 可以不经过 ZCode 直接关联。OpenCode 和 Devin 可以各自保留账户配置。Antigravity 有了 Accounts 卡片，Antigravity IDE 和 2.0 的对话可以在新的 CLI 对话里继续。
- **Native Chat（实验性）：** 已配对 Orca 服务器上的工作区，在聊天是默认时会打开结构化聊天。OpenCode 会话可以使用 Chat。正在等权限提示的 Claude 子 Agent 会显示为等待中。聊天错误用直白措辞，不再闪一下加载，也不会重复上报。
- **Agent 状态与编排：** Codex 的 “Implement this plan?” 菜单和未关闭的 Agent 提问现在算作在等你，发出的文字不会再落到菜单上。OMP 18.4 worker 可以启动。即使 shell 启动文件把更旧的全局安装放在前面，Agent 也会使用 Orca 自带的 `orca` 命令。
- **文件、Markdown 与搜索：** 分号分隔的 CSV 会按列显示。大 Markdown 预览加载更快，里面的 Find 打开更快，超大表格也可读。Find 开着时打字不再跳动光标。搜索能找到正确文件，完不成时会告诉你；SSH 重连或文件夹被替换后，文件更新会恢复。
- **工作区与通知：** 桌面通知可以按机器关闭。git 没能删完的 worktree 会留在列表里，方便重试；`C:\` 上 WSL 运行时项目里的工作区又可以删除了。Create PR 会让 Agent 在已经推送的分支上写 PR 说明。Jira 搜索接受普通词语。
- **更新与内存：** 在 macOS 上，Update & Restart 不再先关掉 Orca，再一直等后台 Orca 服务器。Orca 会告诉你该关什么，并允许重试。多处修复让 Orca 释放已关闭标签、预览、手机画面和空闲缓存占用的内存。

**已经打开的终端：** 更新会启动新的终端后台服务。更新前打开的终端继续跑在原来的服务上。新开的终端使用新服务，并得到这次的终端修复，包括上面的 `orca` 命令修复、OpenCode 和 Devin 的账户配置，以及 jcode、Qoder CLI China、Qwen Code 和 Cursor 的 Agent 检测与恢复。

### 已知问题 {#v1-4-221-known-issues}

**Windows on ARM：** ARM64 包装的是 x64 的 `orca.exe` 命令行工具。Windows 11 on ARM 会用模拟运行它。Windows 10 on ARM 跑不了，所以那里的 `orca` 命令不可用（#24094）。

**OpenCode 2：** 如果从 v1.4.219 或更早版本更新，已经在跑的 OpenCode 2 窗格可能要在里面重启 OpenCode 之后才有状态。这次更新之后如果降级 Orca，会留下重复的 OpenCode 状态插件。`opencode run` 退出后，窗格可能一直显示 “Done”；修复还在 #24472。

**OpenCode worker：** 机器忙的时候，用 `orca orchestration worker-start` 启动的 OpenCode worker，或带着提示启动的 OpenCode 标签，偶尔会把任务留在 OpenCode 输入框里没有发出。在那个窗格里按 Enter 就会发送。修复（#25101）已在 main 上，会随后续版本发布。

**Codex：** 升级之后，在 Codex 批准 Orca 的新状态 hook 之前，Codex 启动会使用 Orca 托管的 Codex home。使用 `~/.codex` 的已恢复窗格最多可能停顿 30 秒（#23552）。

**Claude 文件夹信任：** 文件夹预信任默认开启（Settings → Agents → “Trust the folder when Orca starts an agent”）。在 Alpine WSL 上，Orca 复制不了所需的文件权限，所以 Claude 仍会显示自己的信任提示（#23744）。

---

### 产品体验 {#v1-4-221-product}

#### Codex 与编排 {#v1-4-221-codex-orchestration}

> Windows 上的 Codex 现在跑在你自己的 `~/.codex` 上，已经打开的终端不再提示重启。Codex worker 接受较新模型的 max 和 ultra effort。编排能认出 Codex 的计划菜单、未关闭的 Agent 提问，以及 OMP 18.4。

- 新增（codex）：在 Windows 上用真正的 ~/.codex 运行 Codex（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24356](https://github.com/stablyai/orca/pull/24356)）
- 修复（codex）：刷新保留的共享 home 时，保留仅 Orca 有的 MCP 服务器（[@OrcaWin](https://github.com/OrcaWin)，[#24983](https://github.com/stablyai/orca/pull/24983)）
- 新增（codex）：向 Windows 用户提示一次，Orca 里的 Codex 现在共用 ~/.codex（[@OrcaWin](https://github.com/OrcaWin)，[#24916](https://github.com/stablyai/orca/pull/24916)）
- 修复（codex）：只有 home 变化时，不再提示重启 Codex（[@OrcaWin](https://github.com/OrcaWin)，[#25421](https://github.com/stablyai/orca/pull/25421)）
- 修复（codex）：Codex 会话索引读不了时，跳过 hook 信任 RPC（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24604](https://github.com/stablyai/orca/pull/24604)）
- 修复：关掉 Codex 账户提示，并把焦点交回终端（[@nwparker](https://github.com/nwparker)，[#24683](https://github.com/stablyai/orca/pull/24683)）
- 修复（orchestration）：对 Orca 尚未列出的 Codex 模型接受 max 和 ultra effort（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25375](https://github.com/stablyai/orca/pull/25375)）
- 修复（runtime）：把 Codex 的 “Implement this plan?” 菜单读成阻塞（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24536](https://github.com/stablyai/orca/pull/24536)）
- 修复（runtime）：把未关闭的 Agent 提问作为阻塞报告给 tui-idle 等待（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24533](https://github.com/stablyai/orca/pull/24533)）
- 修复（runtime）：Codex 的 tui-idle 等待在 hook 完成时结束，仍在工作的行交给规则处理（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24541](https://github.com/stablyai/orca/pull/24541)）
- 修复（runtime）：让 OMP 18.4 worker 在编写器处就绪，过期标题的清除只影响显示（[@brennanb2025](https://github.com/brennanb2025)，[#24295](https://github.com/stablyai/orca/pull/24295)）
- 等待：第一次派发之前，先等 OpenCode worker 的输入（[@nwparker](https://github.com/nwparker)，[#24601](https://github.com/stablyai/orca/pull/24601)）
- 解析 worker 上显式配置的命令别名（[@nwparker](https://github.com/nwparker)，[#24648](https://github.com/stablyai/orca/pull/24648)）
- 新增：Agent 状态规则的实时更新（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24387](https://github.com/stablyai/orca/pull/24387)）
- 修复：为回滚安全调整旧版 worker 恢复快照的时机（[@AmethystLiang](https://github.com/AmethystLiang)，[#25413](https://github.com/stablyai/orca/pull/25413)）
- 内部 worker 检查复用预编译语句（[@nwparker](https://github.com/nwparker)，[#24573](https://github.com/stablyai/orca/pull/24573)）
- 修复（orchestration）：提升任务时避免加载任务描述（[@OrcaWin](https://github.com/OrcaWin)，[#24781](https://github.com/stablyai/orca/pull/24781)）
- 修复（codex）：释放已完成子预览后面的完整消息（[@OrcaWin](https://github.com/OrcaWin)，[#24740](https://github.com/stablyai/orca/pull/24740)）

#### Native Chat {#v1-4-221-native-chat}

> 结构化聊天会在拥有该工作区的已配对 Orca 服务器上打开。正在等权限的 Claude 子 Agent 显示为等待中。OpenCode 会话可以使用 Chat。错误用直白措辞，不再闪一下加载。

- 修复（native-chat）：桌面端向已配对的 Orca 服务器声明支持结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#24204](https://github.com/stablyai/orca/pull/24204)）
- 新增（native-chat）：在拥有该工作区的已配对 Orca 服务器上打开结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#24205](https://github.com/stablyai/orca/pull/24205)）
- 新增（native-chat）：正在等权限提示的 Claude 子 Agent 显示为等待中（[@brennanb2025](https://github.com/brennanb2025)，[#22634](https://github.com/stablyai/orca/pull/22634)）
- 支持：在原生 Chat 中使用真正的 OpenCode 会话（[@nwparker](https://github.com/nwparker)，[#24647](https://github.com/stablyai/orca/pull/24647)）
- 保留：原生历史里的 OpenCode 推理过程和已记录补丁（[@nwparker](https://github.com/nwparker)，[#24790](https://github.com/stablyai/orca/pull/24790)）
- 修复（native-chat）：日志只由一个按序写入器负责（[@brennanb2025](https://github.com/brennanb2025)，[#24127](https://github.com/stablyai/orca/pull/24127)）
- 修复（native-chat）：去掉聊天启动时一闪而过的 “still starting” 提示（[@brennanb2025](https://github.com/brennanb2025)，[#24564](https://github.com/stablyai/orca/pull/24564)）
- 修复（native-chat）：打开时不再闪加载，启动失败只上报一次，不再显示 “Not reported” 说明（[@brennanb2025](https://github.com/brennanb2025)，[#24588](https://github.com/stablyai/orca/pull/24588)）
- 修复（native-chat）：聊天错误和状态行改用直白措辞（[@brennanb2025](https://github.com/brennanb2025)，[#24594](https://github.com/stablyai/orca/pull/24594)）
- 修复：接纳稍后出现的 Claude 提问行，并做真实 CLI 校验（[@nwparker](https://github.com/nwparker)，[#25119](https://github.com/stablyai/orca/pull/25119)）
- Native Chat 的等待消息只分类一次（[@nwparker](https://github.com/nwparker)，[#24771](https://github.com/stablyai/orca/pull/24771)）
- 追加子 Agent 交接时，不再复制整份消息列表（[@nwparker](https://github.com/nwparker)，[#24672](https://github.com/stablyai/orca/pull/24672)）
- 修复（claude）：检查子工具 ID 时不再重建其输出（[@OrcaWin](https://github.com/OrcaWin)，[#24707](https://github.com/stablyai/orca/pull/24707)）
- 修复（journal）：只编码保留下来的工具输出预览（[@OrcaWin](https://github.com/OrcaWin)，[#24696](https://github.com/stablyai/orca/pull/24696)）
- 修复（chat）：流式输出溢出时，只编码保留的前缀（[@OrcaWin](https://github.com/OrcaWin)，[#24799](https://github.com/stablyai/orca/pull/24799)）
- 修复（chat）：空闲的会话读取器可以释放已退役的日志折叠（[@OrcaWin](https://github.com/OrcaWin)，[#24842](https://github.com/stablyai/orca/pull/24842)）

#### Agent、账户与集成 {#v1-4-221-agents-accounts-integrations}

> Copilot 的设置文件保持私有。Qoder、Qwen Code 和 GLM Coding Plans 加入受支持的 Agent 与账户。OpenCode 和 Devin 可以各自保留账户配置。Antigravity、Cursor、OpenCode 和 jcode 的集成更可靠。

- 修复（agents）：Orca 信任文件夹时，把 ~/.copilot/config.json 保持为仅所有者可读（[@brennanb2025](https://github.com/brennanb2025)，[#25087](https://github.com/stablyai/orca/pull/25087)）
- 新增：Qoder 会话历史与搜索（[@nwparker](https://github.com/nwparker)，[#24614](https://github.com/stablyai/orca/pull/24614)）
- 注册受监督的 Qoder China 和 Qwen Code（[@nwparker](https://github.com/nwparker)，[#24616](https://github.com/stablyai/orca/pull/24616)）
- 新增（accounts）：关联独立的 GLM Coding Plans（[@nwparker](https://github.com/nwparker)，[#24618](https://github.com/stablyai/orca/pull/24618)）
- 新增：由主机持有的 OpenCode 和 Devin 托管账户配置（[@nwparker](https://github.com/nwparker)，[#24636](https://github.com/stablyai/orca/pull/24636)）
- 保留：登记出错后仍保存已有账户凭据（[@nwparker](https://github.com/nwparker)，[#25059](https://github.com/stablyai/orca/pull/25059)）
- 移除：大写注册 ID 的规范账户目录（[@nwparker](https://github.com/nwparker)，[#25126](https://github.com/stablyai/orca/pull/25126)）
- 保持：已保存的 OpenCode Go 密钥留在 main 持有的存储里（[@nwparker](https://github.com/nwparker)，[#24615](https://github.com/stablyai/orca/pull/24615)）
- 修复（opencode-go）：凭据数据库读不了时，不再回退到 OPENCODE_API_KEY（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24605](https://github.com/stablyai/orca/pull/24605)）
- 从当前选中的账户读取 OpenCode Go 用量（[@nwparker](https://github.com/nwparker)，[#24770](https://github.com/stablyai/orca/pull/24770)）
- 新增：在所属运行时上提供已校验的原生 Antigravity Accounts（[@nwparker](https://github.com/nwparker)，[#24691](https://github.com/stablyai/orca/pull/24691)）
- 在新的 CLI 对话里继续 Antigravity IDE 和 2.0 的历史（[@nwparker](https://github.com/nwparker)，[#24692](https://github.com/stablyai/orca/pull/24692)）
- 修复（antigravity）：在所属运行时上限制 Windows hook 的标准输入（[@nwparker](https://github.com/nwparker)，[#24622](https://github.com/stablyai/orca/pull/24622)）
- 修复（cursor）：启动状态回放之后，恢复到确切的对话（[@nwparker](https://github.com/nwparker)，[#24670](https://github.com/stablyai/orca/pull/24670)）
- 修复（cursor）：在紧凑用量里显示主模型池（[@nwparker](https://github.com/nwparker)，[#24830](https://github.com/stablyai/orca/pull/24830)）
- 修复（opencode）：在主线程之外读取绑定器的会话存储，并在 orcad 中带上读取 worker（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24638](https://github.com/stablyai/orca/pull/24638)）
- 按执行主机版本选择 OpenCode 插件导出（[@nwparker](https://github.com/nwparker)，[#24662](https://github.com/stablyai/orca/pull/24662)）
- 修复（opencode）：重试超时的 SSH 插件更新（[@nwparker](https://github.com/nwparker)，[#24666](https://github.com/stablyai/orca/pull/24666)）
- 修复（opencode）：提交已接纳的原生启动简报时，不覆盖输入（[@nwparker](https://github.com/nwparker)，[#24762](https://github.com/stablyai/orca/pull/24762)）
- 修复（opencode）：覆盖清单的清理留在自有目录内（[@nwparker](https://github.com/nwparker)，[#24763](https://github.com/stablyai/orca/pull/24763)）
- 修复（opencode）：TUI 设置无效时也能完成状态安装（[@nwparker](https://github.com/nwparker)，[#25031](https://github.com/stablyai/orca/pull/25031)）
- 修复（opencode）：共享会话的 TUI 活动留在所属窗格（[@nwparker](https://github.com/nwparker)，[#24962](https://github.com/stablyai/orca/pull/24962)）
- 把包装过的 OpenCode run 提示作为位置参数消息传入（[@nwparker](https://github.com/nwparker)，[#25001](https://github.com/stablyai/orca/pull/25001)）
- 安全清理已退役的 OpenCode 配置副本（[@nwparker](https://github.com/nwparker)，[#25222](https://github.com/stablyai/orca/pull/25222)）
- 修复（jcode）：加固 Windows hook，并协商远程历史（[@nwparker](https://github.com/nwparker)，[#24998](https://github.com/stablyai/orca/pull/24998)）
- 修复（jcode）：报告缺失和过期的托管 hook（[@NicholasTing](https://github.com/NicholasTing)，[#25135](https://github.com/stablyai/orca/pull/25135)）

#### 终端 {#v1-4-221-terminal}

> shell 启动之后，Agent 仍优先使用 Orca 自带的 CLI。终端优先模式下，OpenCode 能收到自己的编辑快捷键。单个标签的变化不再重绘每一个标签。关闭的终端会释放内存。

- 修复（daemon）：把终端 daemon 协议升到 v40（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#25291](https://github.com/stablyai/orca/pull/25291)）
- 保持：shell 启动之后，Orca CLI 仍排在前面（[@nwparker](https://github.com/nwparker)，[#25130](https://github.com/stablyai/orca/pull/25130)）
- 允许：终端优先模式推迟 OpenCode 的编辑快捷键（[@nwparker](https://github.com/nwparker)，[#24640](https://github.com/stablyai/orca/pull/24640)）
- 性能（tab-bar）：一个标签变化时，不再重渲染每一个标签（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24261](https://github.com/stablyai/orca/pull/24261)）
- 就绪扫描时复用终端缓冲区单元格（[@nwparker](https://github.com/nwparker)，[#25161](https://github.com/stablyai/orca/pull/25161)）
- 终端关闭时取消尚未完成的光标更新（[@nwparker](https://github.com/nwparker)，[#24566](https://github.com/stablyai/orca/pull/24566)）
- 修复（terminal）：从 Agent 类型缓存里释放已退役的状态来源（[@OrcaWin](https://github.com/OrcaWin)，[#24669](https://github.com/stablyai/orca/pull/24669)）
- 修复（terminal）：从状态路由里释放已退役的回滚布局（[@OrcaWin](https://github.com/OrcaWin)，[#24686](https://github.com/stablyai/orca/pull/24686)）
- 修复（terminal）：揭示帧暂停时释放已关闭的布局（[@OrcaWin](https://github.com/OrcaWin)，[#24721](https://github.com/stablyai/orca/pull/24721)）
- 修复（terminal）：窗格关闭时取消视口重试（[@OrcaWin](https://github.com/OrcaWin)，[#24745](https://github.com/stablyai/orca/pull/24745)）
- 预览关闭时取消终端预览的适配帧（[@nwparker](https://github.com/nwparker)，[#24712](https://github.com/stablyai/orca/pull/24712)）
- 终端副作用送达之后即释放（[@nwparker](https://github.com/nwparker)，[#24548](https://github.com/stablyai/orca/pull/24548)）
- 检查 daemon 空闲状态时，不再构建会被丢弃的终端清单（[@nwparker](https://github.com/nwparker)，[#24749](https://github.com/stablyai/orca/pull/24749)）

#### SSH 与远程主机 {#v1-4-221-ssh-remote-hosts}

> 短暂的 SSH 重连之后文件更新仍然在。Git 保留 SSH 设置和审阅上下文。较旧的 Orca 服务器上搜索仍然可用。

- 修复（files）：SSH 重连竞态期间保持监视流（[@nwparker](https://github.com/nwparker)，[#24722](https://github.com/stablyai/orca/pull/24722)）
- 修复（git）：保留 SSH 审阅上下文和 worktree 归属（[@nwparker](https://github.com/nwparker)，[#24945](https://github.com/stablyai/orca/pull/24945)）
- 修复（search）：保留旧主机搜索，并协商 Agent 支持（[@nwparker](https://github.com/nwparker)，[#25009](https://github.com/stablyai/orca/pull/25009)）
- 保留：除非缺少 pwsh，否则保留 Windows SSH 上传失败信息（[@nwparker](https://github.com/nwparker)，[#25185](https://github.com/stablyai/orca/pull/25185)）
- 修复（ssh）：失败的工作区同步状态里不再带上终端缓冲区（[@OrcaWin](https://github.com/OrcaWin)，[#24833](https://github.com/stablyai/orca/pull/24833)）
- 修复（ssh）：接收端接受响应块之后即释放（[@OrcaWin](https://github.com/OrcaWin)，[#24719](https://github.com/stablyai/orca/pull/24719)）
- 中继监视器通知多个客户端时，复用事件字节大小（[@nwparker](https://github.com/nwparker)，[#24558](https://github.com/stablyai/orca/pull/24558)）
- 避免：中继列表里把终端 Agent 所有者克隆两次（[@nwparker](https://github.com/nwparker)，[#24713](https://github.com/stablyai/orca/pull/24713)）
- 修复（reconnect）：释放 handle-gap 监视器持有的过期应用状态（[@OrcaWin](https://github.com/OrcaWin)，[#24815](https://github.com/stablyai/orca/pull/24815)）

#### 移动应用与已配对客户端 {#v1-4-221-mobile-app-paired-clients}

> 离开之后，手机会停下还在跑的信息流和画面，图片、文件和终端追赶更省内存。Android APK 链接指向 0.0.52。

- 修复（mobile）：从传输层释放通知和账户流（[@brennanb2025](https://github.com/brennanb2025)，[#23032](https://github.com/stablyai/orca/pull/23032)）
- 移动订阅启动失败时，释放还在等待的终端输出（[@nwparker](https://github.com/nwparker)，[#24547](https://github.com/stablyai/orca/pull/24547)）
- 修复（mobile）：释放被取消的流仍然持有的回调（[@OrcaWin](https://github.com/OrcaWin)，[#24625](https://github.com/stablyai/orca/pull/24625)）
- 修复（mobile）：标签关闭后释放文件预览（[@OrcaWin](https://github.com/OrcaWin)，[#24655](https://github.com/stablyai/orca/pull/24655)）
- 修复（clipboard）：解码上传的图片时，不再把所有块拼在一起（[@OrcaWin](https://github.com/OrcaWin)，[#24653](https://github.com/stablyai/orca/pull/24653)）
- 修复（mobile）：减少加密文本帧的 base64 分配（[@OrcaWin](https://github.com/OrcaWin)，[#24665](https://github.com/stablyai/orca/pull/24665)）
- 修复（mobile）：合并终端积压时，不再反复扫描不断变长的字符串（[@OrcaWin](https://github.com/OrcaWin)，[#24680](https://github.com/stablyai/orca/pull/24680)）
- 修复（files）：空闲时释放过期的移动端路径清单（[@OrcaWin](https://github.com/OrcaWin)，[#24694](https://github.com/stablyai/orca/pull/24694)）
- 修复（mobile）：编辑 Markdown 时避免反引号匹配数组（[@OrcaWin](https://github.com/OrcaWin)，[#24778](https://github.com/stablyai/orca/pull/24778)）
- 写入失败后删除没有交还的剪贴板缓存文件（[@nwparker](https://github.com/nwparker)，[#24599](https://github.com/stablyai/orca/pull/24599)）
- 避免：移动中继链接已关闭后还重启错误计时器（[@nwparker](https://github.com/nwparker)，[#24567](https://github.com/stablyai/orca/pull/24567)）
- 避免：移动中继配对关闭后再重启错误计时器（[@nwparker](https://github.com/nwparker)，[#24568](https://github.com/stablyai/orca/pull/24568)）
- 跳过：反馈所有者清理之后再做新的移动端 toast（[@nwparker](https://github.com/nwparker)，[#24759](https://github.com/stablyai/orca/pull/24759)）
- 跳过：移动搜索清理之后再做新的旧版文件清单（[@nwparker](https://github.com/nwparker)，[#24792](https://github.com/stablyai/orca/pull/24792)）
- 跳过：移动网页浏览器请求里用不到的图片尺寸计算（[@nwparker](https://github.com/nwparker)，[#24941](https://github.com/stablyai/orca/pull/24941)）
- 构建移动端 Agent 行时复用祖先路径（[@nwparker](https://github.com/nwparker)，[#24539](https://github.com/stablyai/orca/pull/24539)）
- 过滤移动卡片时，每个项目仓库只检查一次（[@nwparker](https://github.com/nwparker)，[#24540](https://github.com/stablyai/orca/pull/24540)）
- 文档：把 Android APK 链接更新到 0.0.52（[@AmethystLiang](https://github.com/AmethystLiang)，[#25107](https://github.com/stablyai/orca/pull/25107)）

#### 浏览器、笔记本与 Computer Use {#v1-4-221-browser-notebooks-computer-use}

> 浏览器标签、屏幕串流、上传和文档预览占用更少内存。关闭笔记本时，会取消仍在启动的内核。

- 修复（browser）：避免再复制一份实时屏幕串流图片（[@OrcaWin](https://github.com/OrcaWin)，[#24851](https://github.com/stablyai/orca/pull/24851)）
- 修复（browser）：避免再复制一份文档预览字节（[@OrcaWin](https://github.com/OrcaWin)，[#24861](https://github.com/stablyai/orca/pull/24861)）
- 修复（browser）：原生暂存之后释放上传缓冲区（[@OrcaWin](https://github.com/OrcaWin)，[#24869](https://github.com/stablyai/orca/pull/24869)）
- 修复（browser）：关闭回放期间释放过期状态（[@OrcaWin](https://github.com/OrcaWin)，[#24892](https://github.com/stablyai/orca/pull/24892)）
- 停止：附加之前复制每一份保留的浏览器页面（[@nwparker](https://github.com/nwparker)，[#24553](https://github.com/stablyai/orca/pull/24553)）
- 跳过：请求已经结束后的渲染器回调（[@nwparker](https://github.com/nwparker)，[#24631](https://github.com/stablyai/orca/pull/24631)）
- 跳过：表面关闭之后迟到的浏览器抓取 toast（[@nwparker](https://github.com/nwparker)，[#24727](https://github.com/stablyai/orca/pull/24727)）
- 修复（notebook）：笔记本关闭时取消仍在启动的内核（[@OrcaWin](https://github.com/OrcaWin)，[#24858](https://github.com/stablyai/orca/pull/24858)）
- 避免：在 Mac 快照里搜索无关的滚动操作（[@nwparker](https://github.com/nwparker)，[#24731](https://github.com/stablyai/orca/pull/24731)）

#### 工作区、侧栏与通知 {#v1-4-221-workspaces-sidebar-notifications}

> 桌面通知可以按机器开关。git 没能删完的 worktree 会留在列表里以便重试。`C:\` 上的 WSL 运行时项目可以删除。子工作区有了快捷键。

- 按机器打开或关闭桌面通知（[@brennanb2025](https://github.com/brennanb2025)，[#24518](https://github.com/stablyai/orca/pull/24518)）
- 修复（worktrees）：git 删到一半失败的 worktree 仍留在列表里，并且可以重试（[@brennanb2025](https://github.com/brennanb2025)，[#23952](https://github.com/stablyai/orca/pull/23952)）
- 修复（filesystem）：在 WSL 运行时的 `C:\` 项目里删除工作区时，不再报 “outside allowed directories”（[@brennanb2025](https://github.com/brennanb2025)，[#24242](https://github.com/stablyai/orca/pull/24242)）
- 修复（worktrees）：git 把同一文件夹报两次时，只列出一次（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24357](https://github.com/stablyai/orca/pull/24357)）
- 新增（sidebar）：可绑定的快捷键，用来显示或隐藏子工作区（[@mmarabel](https://github.com/mmarabel)，[#24165](https://github.com/stablyai/orca/pull/24165)）
- 排序侧栏时，项目活动只读一次（[@nwparker](https://github.com/nwparker)，[#24549](https://github.com/stablyai/orca/pull/24549)）
- 避免：终端移除后清单没变时，仍渲染 Resource Manager（[@nwparker](https://github.com/nwparker)，[#24806](https://github.com/stablyai/orca/pull/24806)）
- 修复（activity）：撤销窗口期间释放无关的编辑器状态（[@OrcaWin](https://github.com/OrcaWin)，[#24838](https://github.com/stablyai/orca/pull/24838)）
- 每个过滤后的列表只准备一次 Activity 搜索查询（[@nwparker](https://github.com/nwparker)，[#24701](https://github.com/stablyai/orca/pull/24701)）
- 跳过：空选择上已经被丢弃的看板裁剪（[@nwparker](https://github.com/nwparker)，[#24782](https://github.com/stablyai/orca/pull/24782)）
- 杂项（worktree）：工作区创建事件带上创建耗时和备用结果（[@brennanb2025](https://github.com/brennanb2025)，[#24483](https://github.com/stablyai/orca/pull/24483)）

#### 编辑器、文件与源码管理 {#v1-4-221-editor-files-source-control}

> 分号 CSV 按列显示。大 Markdown 预览和 Find 保持轻快。搜索会报告完整结果。文件夹被替换后，文件监视会恢复。Create PR 会在已经推送的分支上写 PR 说明。

- 新增（csv-viewer）：识别分号分隔的 CSV（[@kbsali](https://github.com/kbsali)，[#19894](https://github.com/stablyai/orca/pull/19894)）
- 保持：大 Markdown 预览仍然跟手（[@nwparker](https://github.com/nwparker)，[#24880](https://github.com/stablyai/orca/pull/24880)）
- 加快大 Markdown 的 Find，并渲染超大表格（[@nwparker](https://github.com/nwparker)，[#24948](https://github.com/stablyai/orca/pull/24948)）
- 移除：Markdown 解析器补丁，并简化预览处理（[@nwparker](https://github.com/nwparker)，[#24919](https://github.com/stablyai/orca/pull/24919)）
- 修复：Markdown Find 编辑时不再移动光标或视口（[@nwparker](https://github.com/nwparker)，[#25144](https://github.com/stablyai/orca/pull/25144)）
- 修复（markdown）：减少普通文本 Find 的内存（[@OrcaWin](https://github.com/OrcaWin)，[#24635](https://github.com/stablyai/orca/pull/24635)）
- Markdown 预览关闭时，取消审阅动画和计时器（[@nwparker](https://github.com/nwparker)，[#24644](https://github.com/stablyai/orca/pull/24644)）
- 修复（editor）：编辑器空闲时让已保存文件的快照过期（[@OrcaWin](https://github.com/OrcaWin)，[#24657](https://github.com/stablyai/orca/pull/24657)）
- 修复（editor）：保存 LF Markdown 时避免换行匹配数组（[@OrcaWin](https://github.com/OrcaWin)，[#24795](https://github.com/stablyai/orca/pull/24795)）
- 修复（editor）：关闭后释放 Markdown 选区监听器（[@OrcaWin](https://github.com/OrcaWin)，[#24875](https://github.com/stablyai/orca/pull/24875)）
- 减小：在源头按文件名过滤，缩小 Markdown 发现输出（[@nwparker](https://github.com/nwparker)，[#25148](https://github.com/stablyai/orca/pull/25148)）
- 修复：ripgrep 结果完整性、文件名处理和搜索错误（[@nwparker](https://github.com/nwparker)，[#25156](https://github.com/stablyai/orca/pull/25156)）
- 避免：为完整文件清单重复跑 ripgrep 扫描（[@nwparker](https://github.com/nwparker)，[#23490](https://github.com/stablyai/orca/pull/23490)）
- 避免：单行选择时重建可见文件路径（[@nwparker](https://github.com/nwparker)，[#24743](https://github.com/stablyai/orca/pull/24743)）
- 修复（quick-open）：空闲时释放过期的旧版文件清单（[@OrcaWin](https://github.com/OrcaWin)，[#24805](https://github.com/stablyai/orca/pull/24805)）
- 修复（files）：原生失败后替换监视器订阅（[@nwparker](https://github.com/nwparker)，[#24723](https://github.com/stablyai/orca/pull/24723)）
- 修复（files）：浅层目录监视替换失败时重试（[@nwparker](https://github.com/nwparker)，[#24724](https://github.com/stablyai/orca/pull/24724)）
- 修复（git）：避免重复的监视器调和轮询（[@nwparker](https://github.com/nwparker)，[#24725](https://github.com/stablyai/orca/pull/24725)）
- 修复（plugins）：文件夹替换后恢复开发监视器（[@nwparker](https://github.com/nwparker)，[#24726](https://github.com/stablyai/orca/pull/24726)）
- 修复（watchers）：检查替换时保留目录身份（[@nwparker](https://github.com/nwparker)，[#24888](https://github.com/stablyai/orca/pull/24888)）
- 修复（cli）：`orca file open` 像文件资源管理器一样打开 PDF 和其他二进制文件（[@AmethystLiang](https://github.com/AmethystLiang)，[#24445](https://github.com/stablyai/orca/pull/24445)）
- 修复（source-control）：在已就绪的分支上，Create PR 之前先生成 PR 说明（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#24215](https://github.com/stablyai/orca/pull/24215)）
- 修复（source-control）：Codex 默认改为 GPT-5.6 Terra low（[@BeamNawapat](https://github.com/BeamNawapat)，[#24495](https://github.com/stablyai/orca/pull/24495)）
- 修复（source-control）：在本地和 SSH 上生成干净的 OpenCode 消息（[@nwparker](https://github.com/nwparker)，[#24613](https://github.com/stablyai/orca/pull/24613)）
- 修复（git）：减少查询，并在不同执行主机之间保留数据（[@nwparker](https://github.com/nwparker)，[#24602](https://github.com/stablyai/orca/pull/24602)）
- 性能（git）：复用查询，并停止已取消的目录扫描（[@nwparker](https://github.com/nwparker)，[#24923](https://github.com/stablyai/orca/pull/24923)）
- 跳过：结果已经被丢弃之后的 diff 分析（[@nwparker](https://github.com/nwparker)，[#24711](https://github.com/stablyai/orca/pull/24711)）
- 获取被替换时，取消插件重试计时器（[@nwparker](https://github.com/nwparker)，[#24700](https://github.com/stablyai/orca/pull/24700)）

#### 任务、议题与自动化 {#v1-4-221-tasks-issues-automations}

> Jira 搜索接受普通词语。Fork 的议题留在你选中的仓库里。工作项刷新没有变化时，应用不再把一切重新检查一遍。关闭的 Jira 页面和自动化行会释放内存。

- 修复（jira）：任务搜索输入不是 JQL 时，按普通文本搜索（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#22900](https://github.com/stablyai/orca/pull/22900)）
- 保持：Fork 议题的详情和编辑留在选中的仓库（[@nwparker](https://github.com/nwparker)，[#24729](https://github.com/stablyai/orca/pull/24729)）
- 跳过：刷新后的工作项没有变化时，不再通知存储（[@nwparker](https://github.com/nwparker)，[#24530](https://github.com/stablyai/orca/pull/24530)）
- 修复（jira）：空闲时让缓存的附件图片过期（[@OrcaWin](https://github.com/OrcaWin)，[#24678](https://github.com/stablyai/orca/pull/24678)）
- 修复（jira）：关闭议题后丢弃详情回复（[@OrcaWin](https://github.com/OrcaWin)，[#24835](https://github.com/stablyai/orca/pull/24835)）
- 修复（automations）：从仪表盘行释放未使用的运行输出（[@OrcaWin](https://github.com/OrcaWin)，[#24847](https://github.com/stablyai/orca/pull/24847)）

#### 会话历史 {#v1-4-221-session-history}

> 已保存的 Agent 对话加载和搜索更省内存。很大的历史缓存不再让 Orca 停顿。

- 限制：限制 AI Vault 缓存加载，并让原子保存保持响应（[@nwparker](https://github.com/nwparker)，[#24789](https://github.com/stablyai/orca/pull/24789)）
- 搜索已保存的 Agent 对话时复用预编译读取（[@nwparker](https://github.com/nwparker)，[#24535](https://github.com/stablyai/orca/pull/24535)）
- 修复（ai-vault）：拼接消息块之前限制转录文本（[@OrcaWin](https://github.com/OrcaWin)，[#24659](https://github.com/stablyai/orca/pull/24659)）
- 修复（ai-vault）：空闲时释放过期的主机结果（[@OrcaWin](https://github.com/OrcaWin)，[#24766](https://github.com/stablyai/orca/pull/24766)）
- 在中继 worker 里丢弃已完成的 AI Vault 取消 ID（[@nwparker](https://github.com/nwparker)，[#24820](https://github.com/stablyai/orca/pull/24820)）
- 解码完整转录行时不再复制其字节（[@nwparker](https://github.com/nwparker)，[#24546](https://github.com/stablyai/orca/pull/24546)）
- 解码单段已保存会话尾部时不再复制（[@nwparker](https://github.com/nwparker)，[#24632](https://github.com/stablyai/orca/pull/24632)）
- 重构（ai-vault）：删除未使用的会话扫描 worker 线程（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24607](https://github.com/stablyai/orca/pull/24607)）

#### 更新与可靠性 {#v1-4-221-updates-reliability}

> 在 macOS 上，Update & Restart 不再关掉 Orca 后一直等后台 Orca 服务器。空闲的更新器和语音计时器会被释放。

- 修复（updater）：后台实例挡住更新时，macOS 上的 Orca 保持打开（[@OrcaWin](https://github.com/OrcaWin)，[#24952](https://github.com/stablyai/orca/pull/24952)）
- 释放已完成的更新器准备计时器和回调（[@nwparker](https://github.com/nwparker)，[#24920](https://github.com/stablyai/orca/pull/24920)）
- 出错和退出后清掉未使用的语音 worker 计时器（[@nwparker](https://github.com/nwparker)，[#24924](https://github.com/stablyai/orca/pull/24924)）

#### 中继服务 {#v1-4-221-relay-service}

> Orca 中继和推送服务的服务端清理。

- 主机连接离开时释放中继握手计时器（[@nwparker](https://github.com/nwparker)，[#24554](https://github.com/stablyai/orca/pull/24554)）
- 租用推送投递时复用已解析的通知（[@nwparker](https://github.com/nwparker)，[#24645](https://github.com/stablyai/orca/pull/24645)）

#### 测试、CI 与维护 {#v1-4-221-tests-ci-maintenance}

> 从较旧代码切出的补丁版本也能发布构建。CI 在准备和等待上花的时间更少。若干不稳定测试已修复。

- CI（release）：对早于 orcad 模板的 tag 跳过该模板（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24872](https://github.com/stablyai/orca/pull/24872)）
- CI（release）：跳过 orcad 模板之后仍然发布（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24882](https://github.com/stablyai/orca/pull/24882)）
- 移动：在 runner 退役前把 ARM Mac CI 迁到 macOS 15（[@nwparker](https://github.com/nwparker)，[#24760](https://github.com/stablyai/orca/pull/24760)）
- 允许：Windows ARM CI 上冷启动 node-pty 准备（[@nwparker](https://github.com/nwparker)，[#24997](https://github.com/stablyai/orca/pull/24997)）
- 让 ARM SSH 准备和彼此独立的观察等待重叠进行（[@nwparker](https://github.com/nwparker)，[#24714](https://github.com/stablyai/orca/pull/24714)）
- 跳过：已知无头构建输入的依赖安装（[@nwparker](https://github.com/nwparker)，[#24716](https://github.com/stablyai/orca/pull/24716)）
- 避免：在纯 Node 构建守卫里反复扫描共享 chunk（[@nwparker](https://github.com/nwparker)，[#24717](https://github.com/stablyai/orca/pull/24717)）
- 静态遍历时复用已发现的移动端 chunk（[@nwparker](https://github.com/nwparker)，[#24774](https://github.com/stablyai/orca/pull/24774)）
- 修复（ci）：移动端类型检查期间避免并发的 pnpm 刷新（[@nwparker](https://github.com/nwparker)，[#24776](https://github.com/stablyai/orca/pull/24776)）
- 一次遍历选出最新的稳定发布 tag（[@nwparker](https://github.com/nwparker)，[#24786](https://github.com/stablyai/orca/pull/24786)）
- 在 Alpine CI 里复用 pnpm 校验记录（[@nwparker](https://github.com/nwparker)，[#24817](https://github.com/stablyai/orca/pull/24817)）
- 减小：定时 CI 缓存预热改为每六小时一次（[@nwparker](https://github.com/nwparker)，[#24881](https://github.com/stablyai/orca/pull/24881)）
- 跳过：CI 里较慢的 Windows 根包存储恢复（[@nwparker](https://github.com/nwparker)，[#24885](https://github.com/stablyai/orca/pull/24885)）
- 跳过：Linux PR 任务里较慢的根包存储恢复（[@nwparker](https://github.com/nwparker)，[#24896](https://github.com/stablyai/orca/pull/24896)）
- 跳过：macOS PR 任务里较慢的根包存储恢复（[@nwparker](https://github.com/nwparker)，[#24908](https://github.com/stablyai/orca/pull/24908)）
- 避免：缓存生产者重复下载 pnpm 归档（[@nwparker](https://github.com/nwparker)，[#24927](https://github.com/stablyai/orca/pull/24927)）
- 在托管的根 CI 里自动使用测得的 pnpm 查找策略（[@nwparker](https://github.com/nwparker)，[#24951](https://github.com/stablyai/orca/pull/24951)）
- 复用无头检测器编译器，不再安装全部依赖（[@nwparker](https://github.com/nwparker)，[#24895](https://github.com/stablyai/orca/pull/24895)）
- 停止：让模拟的渲染器导入影响合格的无头 CI（[@nwparker](https://github.com/nwparker)，[#24902](https://github.com/stablyai/orca/pull/24902)）
- 让彼此独立的 Linux 无头运行时构建重叠进行（[@nwparker](https://github.com/nwparker)，[#24910](https://github.com/stablyai/orca/pull/24910)）
- 当前 Terminal Perf 运行复用更快的 Electron 准备（[@nwparker](https://github.com/nwparker)，[#24968](https://github.com/stablyai/orca/pull/24968)）
- 共享 PR 预检准备，降低 runner 需求（[@nwparker](https://github.com/nwparker)，[#25150](https://github.com/stablyai/orca/pull/25150)）
- 校验共享预检选择，并记录完整的单元测试耗时（[@nwparker](https://github.com/nwparker)，[#25239](https://github.com/stablyai/orca/pull/25239)）
- 全量单元测试失败时收集测试选择证据（[@nwparker](https://github.com/nwparker)，[#24955](https://github.com/stablyai/orca/pull/24955)）
- 缩短存储、Git 争用和就绪测试的 CI 时间（[@nwparker](https://github.com/nwparker)，[#25147](https://github.com/stablyai/orca/pull/25147)）
- 减小：终端测试开销，同时保留完整的对等检查（[@nwparker](https://github.com/nwparker)，[#25151](https://github.com/stablyai/orca/pull/25151)）
- 避免：CI 里重复导入运行时和重复播种恢复夹具（[@nwparker](https://github.com/nwparker)，[#25155](https://github.com/stablyai/orca/pull/25155)）
- 减小：单元测试等待、字节比较和导入开销（[@nwparker](https://github.com/nwparker)，[#25187](https://github.com/stablyai/orca/pull/25187)）
- 分片选择校验期间，已发现的测试文件只索引一次（[@nwparker](https://github.com/nwparker)，[#24532](https://github.com/stablyai/orca/pull/24532)）
- 检查变更代码诊断时，基准源只规范化一次（[@nwparker](https://github.com/nwparker)，[#24557](https://github.com/stablyai/orca/pull/24557)）
- 停止：在测试规划器里构建用不到的导入候选（[@nwparker](https://github.com/nwparker)，[#24611](https://github.com/stablyai/orca/pull/24611)）
- CPU 采样失败时清掉 watchdog 基准心跳（[@nwparker](https://github.com/nwparker)，[#24802](https://github.com/stablyai/orca/pull/24802)）
- 跳过：文档搜索结果里不可能的链接和标签匹配（[@nwparker](https://github.com/nwparker)，[#24646](https://github.com/stablyai/orca/pull/24646)）
- 结果导航时复用文档搜索摘录（[@nwparker](https://github.com/nwparker)，[#24574](https://github.com/stablyai/orca/pull/24574)）
- 修复（tests）：用当前代码跑监视器崩溃测试夹具（[@nwparker](https://github.com/nwparker)，[#24705](https://github.com/stablyai/orca/pull/24705)）
- 测试：数据库拆卸前取消日志导入采样器（[@nwparker](https://github.com/nwparker)，[#24767](https://github.com/stablyai/orca/pull/24767)）
- 等待：测试超时前，先等真正的备份 worker 就绪（[@nwparker](https://github.com/nwparker)，[#24793](https://github.com/stablyai/orca/pull/24793)）
- 测试：用已提交的捕获重放 OpenCode 重绘（[@nwparker](https://github.com/nwparker)，[#24811](https://github.com/stablyai/orca/pull/24811)）
- 在模拟的 Codex 测试里推进完整关闭截止时间（[@nwparker](https://github.com/nwparker)，[#24893](https://github.com/stablyai/orca/pull/24893)）
- 推进模拟的 Claude 子进程退出截止时间（[@nwparker](https://github.com/nwparker)，[#24897](https://github.com/stablyai/orca/pull/24897)）
- 测试：恢复 fish 终端夹具的启动前提（[@nwparker](https://github.com/nwparker)，[#24947](https://github.com/stablyai/orca/pull/24947)）
- 允许：检查已退役缓存归属前，先等垃圾回收稳定（[@nwparker](https://github.com/nwparker)，[#24967](https://github.com/stablyai/orca/pull/24967)）
- 等待：删除目录前，先等移除夹具持久化（[@nwparker](https://github.com/nwparker)，[#24977](https://github.com/stablyai/orca/pull/24977)）
- 修复（ci）：E2E 检查要求精确的 shell 和 SSH 包名（[@nwparker](https://github.com/nwparker)，[#24995](https://github.com/stablyai/orca/pull/24995)）
- 修复（ci）：等待片段导航策略报告（[@nwparker](https://github.com/nwparker)，[#25017](https://github.com/stablyai/orca/pull/25017)）
- 测试（windows）：记录原生 PTY 压力测试的生命周期节点（[@nwparker](https://github.com/nwparker)，[#25042](https://github.com/stablyai/orca/pull/25042)）
- CI：聊天发送构建器或 RPC 请求路径变化时，跑跨版本测试（[@brennanb2025](https://github.com/brennanb2025)，[#25061](https://github.com/stablyai/orca/pull/25061)）
- 重构（cursor）：把桌面登录读取挪到共享的外部 SQLite 读取 worker（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#24603](https://github.com/stablyai/orca/pull/24603)）
- 用统一的 removeAgentArgs 取代 agentArgsOverride（[@AmethystLiang](https://github.com/AmethystLiang)，[#25091](https://github.com/stablyai/orca/pull/25091)）
- 重构（orchestration）：六种 Agent 对 Agent 发送收成一个函数（[@brennanb2025](https://github.com/brennanb2025)，[#24901](https://github.com/stablyai/orca/pull/24901)）
- 删除 docs/reference/jcode-hook-events.md（[@nwparker](https://github.com/nwparker)，[#25288](https://github.com/stablyai/orca/pull/25288)）

### 新贡献者 {#v1-4-221-contributors}

- [@kbsali](https://github.com/kbsali) 首次贡献于 [#19894](https://github.com/stablyai/orca/pull/19894)
- [@BeamNawapat](https://github.com/BeamNawapat) 首次贡献于 [#24495](https://github.com/stablyai/orca/pull/24495)
- [@NicholasTing](https://github.com/NicholasTing) 首次贡献于 [#25135](https://github.com/stablyai/orca/pull/25135)

---

**完整变更对照：** [v1.4.220...v1.4.221](https://github.com/stablyai/orca/compare/v1.4.220...v1.4.221)
