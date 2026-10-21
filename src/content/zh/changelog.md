# 更新日志 {#changelog}

本页保留最近五次桌面版的**完整中文日志**，不是一句话摘要。打开时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 版本索引 {#index}

| 版本 | 日期 | 标题 |
| --- | --- | --- |
| [v1.4.237](#v1-4-237) | 2026年10月21日 | - More done from your phone:… |
| [v1.4.235](#v1-4-235) | 2026年10月20日 | Use Rewind to here on a mess… |
| [v1.4.233](#v1-4-233) | 2026年10月20日 | - SSH & remote workspaces: C… |
| [v1.4.232](#v1-4-232) | 2026年10月20日 | - Auto permissions, in chat … |
| [v1.4.230](#v1-4-230) | 2026年10月19日 | 实验性 Native Chat 支持 Antigravity，可选择 Agent 并在聊天内安装 |

## 完整中文日志 {#full-notes}

## v1.4.237 - More done from your phone:… {#v1-4-237}

2026年10月21日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.237)

### 100,000 stars. Thank you! ⭐🐳 {#v1-4-237-100-000-stars-thank-you-}

Orca just crossed **100,000 stars on GitHub**! Every bug report, pull request, shared workflow and recommendation has helped us get here. Thank you for building with Orca and helping shape what comes next. ❤️

To celebrate, this release brings a more capable phone experience, more dependable agent conversations, and fixes that keep your work moving across desktops and remote machines.

### 简要说明 {#v1-4-237-short}

- **More done from your phone:** Create and edit notes, save Markdown on headless hosts, follow relative file links, and see embedded images. Buffered terminal drafts can now survive workspace navigation, too.
- **Chats you can come back to:** Codex chats reopen correctly after undo, Claude keeps its rewound context across Orca rollbacks, and screenshots stay with the conversation. Codex’s skill picker now reflects the skills Codex actually loaded.
- **Your work stays protected:** Discard pauses autosave of the same file across workspaces. Read-only Markdown and CSV views protect your unsaved edits, and new, unstaged Markdown documents open straight into the rich editor.
- **Voice beyond the desktop:** Phone dictation works again through headless `orca serve` hosts, with a CLI command to configure the host’s OpenAI key.
- **Smoother remote work:** Reconnect hidden terminal tabs after a restart, keep browser logins when hosts pair again, and search SSH configurations with thousands of hosts without freezing the interface.
- **Small details, better flow:** Phone tabs follow desktop order, landscape layouts show the session title, keyboard controls keep their height, and worktree safety sweeps skip unchanged workspaces.

**Phone updates:** Updating Orca on the computer serving your phone also updates the phone’s served interface. Persistent terminal drafts additionally require an updated mobile shell.

### Compatibility & upgrade notes {#v1-4-237-compatibility-upgrade-notes}

- **Native chat (experimental):** Update paired and SSH hosts alongside Orca to get the latest chat fixes. Exact Codex skill-file selection is available on desktop with a supporting host; phone selections and older hosts retain plain-text skill names. Send a skill as a new message for Codex to apply it at the start of a turn.
- **Headless dictation:** Save the OpenAI key on the host doing the transcription with `orca speech openai-key set` (reads the key from stdin). Installed-app `orca serve` hosts on Linux and macOS can also use the bundled on-device recognizer; Windows, managed SSH and WSL servers use cloud models.
- **CLI launch choice:** Explicit `--surface` choices require an updated execution host. Omitting the option keeps your existing defaults.

---

### 产品体验 {#v1-4-237-product}

#### Native chat (experimental) {#v1-4-237-native-chat-experimental-}

> Pick the skills Codex actually loaded, return to conversations with confidence, and keep your chat history and attachments intact.

- Use Codex’s own loaded-skill catalog in chat; desktop selections identify the exact skill file, including when names overlap（[@brennanb2025](https://github.com/brennanb2025)，[#30937](https://github.com/stablyai/orca/pull/30937)）
- Reopen Codex chats after undo and continue with the correct conversation history（[@brennanb2025](https://github.com/brennanb2025)，[#31041](https://github.com/stablyai/orca/pull/31041)）
- 保持：Claude’s rewound context intact even after rolling back Orca（[@nwparker](https://github.com/nwparker)，[#31231](https://github.com/stablyai/orca/pull/31231)）
- 显示：prompts sent mid-turn and `!` commands where Claude actually received them（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31204](https://github.com/stablyai/orca/pull/31204)）
- 保持：screenshots dragged into a chat available for the lifetime of that chat（[@brennanb2025](https://github.com/brennanb2025)，[#30419](https://github.com/stablyai/orca/pull/30419)）
- Retry failed chat names, show naming errors on the tab hover card, and offer **Regenerate name**（[@brennanb2025](https://github.com/brennanb2025)，[#30646](https://github.com/stablyai/orca/pull/30646)）
- 保持：resumed Claude chats ready to receive messages after settings updates（[@brennanb2025](https://github.com/brennanb2025)，[#30982](https://github.com/stablyai/orca/pull/30982)）
- 显示：**Working** only while Claude, Pi or ACP is handling work, while keeping Claude chat workers running（[@brennanb2025](https://github.com/brennanb2025)，[#30577](https://github.com/stablyai/orca/pull/30577)）
- 显示：sleeping native-chat workspaces as asleep and hide them when the sidebar filter calls for it（[@brennanb2025](https://github.com/brennanb2025)，[#28457](https://github.com/stablyai/orca/pull/28457)）
- Tie finished notifications to the correct hook-driven turn（[@brennanb2025](https://github.com/brennanb2025)，[#30620](https://github.com/stablyai/orca/pull/30620)）
- 澄清：how to continue conversations between chat and terminal agents（[@AmethystLiang](https://github.com/AmethystLiang)，[#31402](https://github.com/stablyai/orca/pull/31402)）

#### Phone {#v1-4-237-phone}

> 移动：between workspaces without losing your draft, work on Markdown without an open desktop window, and enjoy a more consistent interface.

- 打开：a worktree on the tab currently shown on desktop（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31215](https://github.com/stablyai/orca/pull/31215)）
- List session tabs in the same order as the desktop tab bar（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31269](https://github.com/stablyai/orca/pull/31269)）
- 保持：unsent buffered terminal commands when leaving and reopening a workspace（[@nwparker](https://github.com/nwparker)，[#31314](https://github.com/stablyai/orca/pull/31314)）
- Create and edit notes on headless hosts（[@nwparker](https://github.com/nwparker)，[#31291](https://github.com/stablyai/orca/pull/31291)）
- Read and save Markdown tabs without an open desktop window, with conflict checks that protect unsaved desktop edits（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31101](https://github.com/stablyai/orca/pull/31101)）
- 保持：a Markdown save on its original host if the workspace moves while saving（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31376](https://github.com/stablyai/orca/pull/31376)）
- 打开：relative file links from Markdown（[@nwparker](https://github.com/nwparker)，[#31298](https://github.com/stablyai/orca/pull/31298)）
- 显示：embedded images in Markdown previews（[@nwparker](https://github.com/nwparker)，[#31304](https://github.com/stablyai/orca/pull/31304)）
- Refresh staged files when returning from review（[@nwparker](https://github.com/nwparker)，[#31295](https://github.com/stablyai/orca/pull/31295)）
- 显示：the session title beside tabs when the phone is in landscape（[@brennanb2025](https://github.com/brennanb2025)，[#30879](https://github.com/stablyai/orca/pull/30879)）
- Blend the status-bar area into the workspace header（[@nwparker](https://github.com/nwparker)，[#31353](https://github.com/stablyai/orca/pull/31353)）
- Match the home-indicator area to the terminal input panel（[@nwparker](https://github.com/nwparker)，[#31354](https://github.com/stablyai/orca/pull/31354)）
- 保留：live terminal palettes when the selected theme has not changed（[@nwparker](https://github.com/nwparker)，[#31355](https://github.com/stablyai/orca/pull/31355)）
- 保持：Claude chats intact after renaming their pane（[@nwparker](https://github.com/nwparker)，[#31358](https://github.com/stablyai/orca/pull/31358)）
- 显示：the bundled whale icon on DeepSeek Build tabs（[@nwparker](https://github.com/nwparker)，[#31359](https://github.com/stablyai/orca/pull/31359)）
- 保持：the keyboard accessory row at a stable height when the dismiss button appears（[@nwparker](https://github.com/nwparker)，[#31363](https://github.com/stablyai/orca/pull/31363)）
- 保持：dictation controls in sync with the host’s settings（[@nwparker](https://github.com/nwparker)，[#31349](https://github.com/stablyai/orca/pull/31349)）
- Simplify chat by removing the Tools toggle and its open-everything mode（[@brennanb2025](https://github.com/brennanb2025)，[#31188](https://github.com/stablyai/orca/pull/31188)）

#### Voice & agent launches {#v1-4-237-voice-agent-launches}

> Dictate from your phone through a headless server, and choose chat or terminal for an individual CLI launch.

- 恢复：voice dictation on headless `orca serve` hosts, with cloud models on managed SSH, WSL and Windows servers（[@nwparker](https://github.com/nwparker)，[#31217](https://github.com/stablyai/orca/pull/31217)）
- Configure a headless host’s OpenAI dictation key with `orca speech openai-key status`, `set` and `clear`（[@nwparker](https://github.com/nwparker)，[#31230](https://github.com/stablyai/orca/pull/31230)）
- Choose `--surface chat` or `--surface terminal` for `orca agent launch` and agent-backed `orca worktree create`（[@brennanb2025](https://github.com/brennanb2025)，[#31191](https://github.com/stablyai/orca/pull/31191)）

#### Editor, files & performance {#v1-4-237-editor-files-performance}

> Protect unsaved work across tabs and workspaces, make new Markdown documents immediately editable, and reduce background activity.

- 打开：new, unstaged Markdown files from Source Control in the rich editor（[@AmethystLiang](https://github.com/AmethystLiang)，[#31399](https://github.com/stablyai/orca/pull/31399)）
- Pause autosave across workspaces during Source Control Discard, and prevent read-only Markdown or CSV tabs from overwriting unsaved edits（[@nwparker](https://github.com/nwparker)，[#31413](https://github.com/stablyai/orca/pull/31413)）
- 避免：an unnecessary reload of remote files after each restart（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31196](https://github.com/stablyai/orca/pull/31196)）
- 防止：restored-tab disk checks from looping or reporting false conflicts（[@nwparker](https://github.com/nwparker)，[#31250](https://github.com/stablyai/orca/pull/31250)）
- 跳过：unchanged worktrees during background safety sweeps（[@nwparker](https://github.com/nwparker)，[#31253](https://github.com/stablyai/orca/pull/31253)）
- Apply custom tab shortcuts immediately after switching worktrees with the keyboard（[@brennanb2025](https://github.com/brennanb2025)，[#30941](https://github.com/stablyai/orca/pull/30941)）

#### Terminals, SSH & remote servers {#v1-4-237-terminals-ssh-remote-servers}

> Reconnect to surviving sessions, handle large SSH configurations, and keep remote updates and browser logins dependable.

- Start agent terminals at their first real size without the previous 12-frame wait（[@brennanb2025](https://github.com/brennanb2025)，[#30442](https://github.com/stablyai/orca/pull/30442)）
- Attach to the successful connection when terminal reconnect attempts overlap（[@brennanb2025](https://github.com/brennanb2025)，[#30448](https://github.com/stablyai/orca/pull/30448)）
- Reconnect hidden terminal tabs to sessions that survived a restart（[@brennanb2025](https://github.com/brennanb2025)，[#31254](https://github.com/stablyai/orca/pull/31254)）
- 防止：a saved terminal folder on an unavailable network drive from freezing the window（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31381](https://github.com/stablyai/orca/pull/31381)）
- 保持：mobile terminal snapshots aligned after removing terminal queries（[@nwparker](https://github.com/nwparker)，[#31348](https://github.com/stablyai/orca/pull/31348)）
- 保持：the SSH Hosts list responsive and searchable with configurations containing 13,000 hosts（[@nwparker](https://github.com/nwparker)，[#31405](https://github.com/stablyai/orca/pull/31405)）
- Use the same bounded, searchable picker across host lists so large SSH configurations remain usable throughout Orca（[@nwparker](https://github.com/nwparker)，[#31426](https://github.com/stablyai/orca/pull/31426)）
- 保留：in-app browser logins when a WSL or managed SSH host pairs again（[@nwparker](https://github.com/nwparker)，[#29610](https://github.com/stablyai/orca/pull/29610)）
- Replace stale terminal daemons after they drain on Linux and WSL（[@nwparker](https://github.com/nwparker)，[#31235](https://github.com/stablyai/orca/pull/31235)）
- Restart the macOS serve supervisor from the updated app（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31200](https://github.com/stablyai/orca/pull/31200)）
- Prepare the macOS supervisor’s code copy in one step（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31303](https://github.com/stablyai/orca/pull/31303)）
- 防止：sidebar view settings from blocking SSH host migration（[@nwparker](https://github.com/nwparker)，[#31374](https://github.com/stablyai/orca/pull/31374)）
- Refuse new terminal creation while a server update is stopping the server（[@nwparker](https://github.com/nwparker)，[#29834](https://github.com/stablyai/orca/pull/29834)）
- 给予：Windows process-tree cleanup time to finish rather than leaving grandchildren behind（[@nwparker](https://github.com/nwparker)，[#29501](https://github.com/stablyai/orca/pull/29501)）
- Put sharing first in **Remote Orca Servers** settings（[@nwparker](https://github.com/nwparker)，[#31335](https://github.com/stablyai/orca/pull/31335)）

#### History, projects & source control {#v1-4-237-history-projects-source-control}

> Find conversations across machines more easily, and keep project actions tied to the host that owns them.

- 保持：scoped Session History working with very large transcript collections（[@brennanb2025](https://github.com/brennanb2025)，[#30905](https://github.com/stablyai/orca/pull/30905)）
- 给予：history searches through SSH-connected Orca servers the full all-hosts scan budget（[@nwparker](https://github.com/nwparker)，[#31226](https://github.com/stablyai/orca/pull/31226)）
- Include sessions saved under a symlinked workspace’s real path in Workspace history（[@nwparker](https://github.com/nwparker)，[#31244](https://github.com/stablyai/orca/pull/31244)）
- Label the source host when history search results span multiple machines（[@nwparker](https://github.com/nwparker)，[#31261](https://github.com/stablyai/orca/pull/31261)）
- 打开：PR cards, rows and dialogs on the host that returned the item when projects share a path（[@nwparker](https://github.com/nwparker)，[#31252](https://github.com/stablyai/orca/pull/31252)）
- 保持：GitLab items and project dialogs on their owning host（[@nwparker](https://github.com/nwparker)，[#31271](https://github.com/stablyai/orca/pull/31271)）
- Save issue-source changes to the selected project row（[@nwparker](https://github.com/nwparker)，[#31319](https://github.com/stablyai/orca/pull/31319)）
- Use the caller’s host for GitHub routing and task filters（[@nwparker](https://github.com/nwparker)，[#31263](https://github.com/stablyai/orca/pull/31263)）
- Separate work-item cache entries by project row and host（[@nwparker](https://github.com/nwparker)，[#31290](https://github.com/stablyai/orca/pull/31290)）
- Find registered projects by ID, path and host during refreshes（[@nwparker](https://github.com/nwparker)，[#31274](https://github.com/stablyai/orca/pull/31274)）
- Clear repository cache entries without evicting another live host’s project（[@nwparker](https://github.com/nwparker)，[#31312](https://github.com/stablyai/orca/pull/31312)）
- Refuse ambiguous legacy automations instead of guessing which host should run them（[@nwparker](https://github.com/nwparker)，[#31234](https://github.com/stablyai/orca/pull/31234)）
- 拒绝：workspace parents that would create a nesting loop, including before the worktree cache is loaded（[@brennanb2025](https://github.com/brennanb2025)，[#29340](https://github.com/stablyai/orca/pull/29340)）
- Fetch PR conflict-preview base branches through the shared fetch controller（[@brennanb2025](https://github.com/brennanb2025)，[#30654](https://github.com/stablyai/orca/pull/30654)）

#### Tests, builds & maintenance {#v1-4-237-tests-builds-maintenance}

> release builds, broader platform coverage, dependency checks and continued editor cleanup. The layout-owner work below remains behind disabled build switches and is not enabled in this release更快。

- CI（wsl）：run the WSL orcad lane on Debian 12 and Fedora 41 too（[@nwparker](https://github.com/nwparker)，[#29821](https://github.com/stablyai/orca/pull/29821)）
- Refactor AGENTS.md for clarity and conciseness（[@nwparker](https://github.com/nwparker)，[#31238](https://github.com/stablyai/orca/pull/31238)）
- 测试（skills）：synchronize Windows rename contention（[@nwparker](https://github.com/nwparker)，[#31237](https://github.com/stablyai/orca/pull/31237)）
- 杂项：remove CLAUDE.md（[@nwparker](https://github.com/nwparker)，[#31242](https://github.com/stablyai/orca/pull/31242)）
- 文档：load Git guidance on demand [skip ci]（[@nwparker](https://github.com/nwparker)，[#31245](https://github.com/stablyai/orca/pull/31245)）
- 文档：slim test agent instructions（[@nwparker](https://github.com/nwparker)，[#31246](https://github.com/stablyai/orca/pull/31246)）
- 文档：remove redundant max-lines agent instructions [skip ci]（[@nwparker](https://github.com/nwparker)，[#31247](https://github.com/stablyai/orca/pull/31247)）
- CI：stop running WSL host tests for UI-only changes（[@nwparker](https://github.com/nwparker)，[#31243](https://github.com/stablyai/orca/pull/31243)）
- 更新：AGENTS.md with Useful Commands section（[@nwparker](https://github.com/nwparker)，[#31248](https://github.com/stablyai/orca/pull/31248)）
- Editor tab state is written to its buffer record, not copied into it afterwards (phase 1a)（[@nwparker](https://github.com/nwparker)，[#31251](https://github.com/stablyai/orca/pull/31251)）
- 文档：clarify first-class platform, remote, and mobile priorities（[@nwparker](https://github.com/nwparker)，[#31265](https://github.com/stablyai/orca/pull/31265)）
- 测试（daemon）：run the stalled-reader backpressure test over a Unix socket, not TCP loopback（[@brennanb2025](https://github.com/brennanb2025)，[#31256](https://github.com/stablyai/orca/pull/31256)）
- 重构（protocol）：each area owns its published runtime capability list（[@brennanb2025](https://github.com/brennanb2025)，[#30641](https://github.com/stablyai/orca/pull/30641)）
- Native chat: remove unused journalCheckpoint and setConversationCommand（[@brennanb2025](https://github.com/brennanb2025)，[#30645](https://github.com/stablyai/orca/pull/30645)）
- 更新：AGENTS.md（[@nwparker](https://github.com/nwparker)，[#31288](https://github.com/stablyai/orca/pull/31288)）
- 构建（cli）：typecheck the CLI by following its imports, not a hand list（[@brennanb2025](https://github.com/brennanb2025)，[#30632](https://github.com/stablyai/orca/pull/30632)）
- Format AGENTS.md so main's formatting check passes（[@nwparker](https://github.com/nwparker)，[#31294](https://github.com/stablyai/orca/pull/31294)）
- 重构（wsl-hosts）：add flow in wsl-host-registration; liveness split into state, evidence and monitor（[@nwparker](https://github.com/nwparker)，[#29506](https://github.com/stablyai/orca/pull/29506)）
- 文档：add test anti-pattern reference（[@nwparker](https://github.com/nwparker)，[#31277](https://github.com/stablyai/orca/pull/31277)）
- 新增：the rules that decide which editor tabs are the same file (phase 1b-1, unused)（[@nwparker](https://github.com/nwparker)，[#31272](https://github.com/stablyai/orca/pull/31272)）
- Speed up adhoc releases with shared JavaScript and Blacksmith runners（[@nwparker](https://github.com/nwparker)，[#31297](https://github.com/stablyai/orca/pull/31297)）
- Close prompt, Discard, save flush and restart save each decided in one place per buffer record (phase 1b-2, no behaviour change)（[@nwparker](https://github.com/nwparker)，[#31313](https://github.com/stablyai/orca/pull/31313)）
- 修复（ci）：use one Zod identity in the E2E typecheck（[@nwparker](https://github.com/nwparker)，[#31320](https://github.com/stablyai/orca/pull/31320)）
- Overlap adhoc release gates and cache qualified server templates（[@nwparker](https://github.com/nwparker)，[#31300](https://github.com/stablyai/orca/pull/31300)）
- 修复（deps）：root and mobile resolve one zod, and CI fails if they drift（[@nwparker](https://github.com/nwparker)，[#31260](https://github.com/stablyai/orca/pull/31260)）
- Overlap native qualification setup with the mobile bundle build（[@nwparker](https://github.com/nwparker)，[#31336](https://github.com/stablyai/orca/pull/31336)）
- Batch macOS code signing for adhoc releases（[@nwparker](https://github.com/nwparker)，[#31340](https://github.com/stablyai/orca/pull/31340)）
- 文档（orca-cli）：teach agents cross-project parents and re-parenting（[@brennanb2025](https://github.com/brennanb2025)，[#29900](https://github.com/stablyai/orca/pull/29900)）
- 样式：format a test file so main passes the formatting check（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31378](https://github.com/stablyai/orca/pull/31378)）
- 测试（claude）：isolate real CLI fixtures and cover chat option requests（[@brennanb2025](https://github.com/brennanb2025)，[#31201](https://github.com/stablyai/orca/pull/31201)）
- Carry batched macOS signing and qualified-template caching into production（[@nwparker](https://github.com/nwparker)，[#31397](https://github.com/stablyai/orca/pull/31397)）
- 测试（vitest）：derive the Node SQLite test list from imports（[@brennanb2025](https://github.com/brennanb2025)，[#30647](https://github.com/stablyai/orca/pull/30647)）
- CI：one list for Windows boundary tests and one step for ratchets（[@brennanb2025](https://github.com/brennanb2025)，[#30643](https://github.com/stablyai/orca/pull/30643)）
- Build adhoc Mac architectures in parallel（[@nwparker](https://github.com/nwparker)，[#31415](https://github.com/stablyai/orca/pull/31415)）
- 修复（release）：avoid API rate limits waiting for the mobile bundle（[@nwparker](https://github.com/nwparker)，[#31431](https://github.com/stablyai/orca/pull/31431)）

#### Layout groundwork (disabled) {#v1-4-237-layout-groundwork-disabled-}

- Layout-owner build: main answers terminal questions from its own layout (A1, dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31187](https://github.com/stablyai/orca/pull/31187)）
- A CLI or phone file on a layout-owner server opens in the tab group a paired desktop shows (switch-on builds only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31264](https://github.com/stablyai/orca/pull/31264)）
- Layout-owner build: a CLI send, wait or read starts a saved pane that has no terminal yet (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31307](https://github.com/stablyai/orca/pull/31307)）
- The window shows tab, title, move and divider changes only from main's update, never drawing them itself (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31257](https://github.com/stablyai/orca/pull/31257)）
- Layout-owner build: phones see main's terminal and editor rows (A2, dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31276](https://github.com/stablyai/orca/pull/31276)）
- A paired desktop shows the held-terminal banner and Reopen for a server's held terminals (switch-on builds only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31275](https://github.com/stablyai/orca/pull/31275)）
- 钉住：why main's pane list republish waits for a microtask (switch-on builds only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31333](https://github.com/stablyai/orca/pull/31333)）
- 测试（layout）：pin the layout-owner save format for downgrade, and keep main's touched-records save with an exhaustive guard (dark, layout-owner build only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31341](https://github.com/stablyai/orca/pull/31341)）
- Layout groundwork (switched off): main starts every split and new pane, the window only attaches（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31258](https://github.com/stablyai/orca/pull/31258)）
- 修复（runtime）：a server with no window answers its first terminal create, not 'handle stale' (switch-on builds only)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31391](https://github.com/stablyai/orca/pull/31391)）
- Layout-owner build: main shows live terminals that lost their tab, at the same moments the window did (dark)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31430](https://github.com/stablyai/orca/pull/31430)）

**完整变更对照：** [v1.4.235...v1.4.237](https://github.com/stablyai/orca/compare/v1.4.235...v1.4.237)

## v1.4.235 Use Rewind to here on a mess… {#v1-4-235}

2026年10月20日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.235)

感谢使用 Orca，也感谢一直以来的支持。

This release makes conversations easier to revisit, keeps more of your agent's work, and cuts background editor activity when you're juggling workspaces.

### 简要说明 {#v1-4-235-short}

- **Rewind Claude chats:** Use **Rewind to here** on a message that started a turn, edit your prompt, and take the conversation in a new direction. Claude continues from the history you kept.
- **Your chat, your settings:** Each conversation remembers its own model, effort and Fast settings. Switching models keeps compatible choices, and changes to an agent's defaults no longer silently move a chat that has recorded its settings.
- **Keep more of your agent's work:** Completed replies and tool results are saved in full rather than cut off at the preview limit. Use **Show full output** on desktop or phone, or **Show full message** on phone, to load more content from shortened previews.
- **Less waiting, less background work:** New Chat opens the composer immediately, Codex chats get the time they need to start, and the workspace jump palette is preloaded. The editor watches active, recent and at-risk workspaces instead of every workspace with an open tab.
- **A better phone experience:** Live chats reconnect from where they left off, project groups stay in step with desktop, and ready cloud dictation models can be selected from the phone. Workspace creation starts preparing the checkout while you fill in the form.
- **Everyday polish:** Edit images in queued desktop messages, see machine labels only when project names collide, and get more reliable workspace lists, file-conflict handling and remote workflows.

**Phone updates:** Updating Orca on your desktop also updates the app on your connected phone—the phone loads it directly from your desktop.

### Compatibility & upgrade notes {#v1-4-235-compatibility-upgrade-notes}

**Native chat (experimental):** Keep paired and SSH hosts updated alongside Orca for the latest chat features. Full-content loading requires host support; content discarded by older versions cannot be recovered. Very large items may still be shortened for display or delivery.

**Cloud dictation:** Select a ready cloud model from the phone's dictation setup or **Settings → Voice**. Configure its API key on the computer serving the phone first.

---

### 产品体验 {#v1-4-235-product}

#### Native chat (experimental) {#v1-4-235-native-chat-experimental-}

> Revisit Claude conversations, keep each chat’s settings consistent, and work with images and long outputs more comfortably.

- Rewind Claude chats from messages that started a turn, continuing with the conversation you kept（[@brennanb2025](https://github.com/brennanb2025)，[#30400](https://github.com/stablyai/orca/pull/30400)）
- Remember model, effort, speed and Fast choices per conversation, including across restarts（[@brennanb2025](https://github.com/brennanb2025)，[#30561](https://github.com/stablyai/orca/pull/30561)）
- Save completed replies and tool results in full, with controls to load more from shortened previews（[@brennanb2025](https://github.com/brennanb2025)，[#29982](https://github.com/stablyai/orca/pull/29982)）
- Edit images in queued desktop messages: remove, paste, drop or attach（[@brennanb2025](https://github.com/brennanb2025)，[#30815](https://github.com/stablyai/orca/pull/30815)）
- 打开：the New Chat composer immediately while the host gets ready（[@brennanb2025](https://github.com/brennanb2025)，[#29358](https://github.com/stablyai/orca/pull/29358)）
- 等待：for Codex when opening or resuming a chat instead of failing after 30 seconds（[@brennanb2025](https://github.com/brennanb2025)，[#30395](https://github.com/stablyai/orca/pull/30395)）
- Name chats from the first message immediately, even if automatic title generation fails（[@brennanb2025](https://github.com/brennanb2025)，[#30392](https://github.com/stablyai/orca/pull/30392)）
- 避免：starting user MCP servers and hooks for background Claude runs（[@brennanb2025](https://github.com/brennanb2025)，[#30939](https://github.com/stablyai/orca/pull/30939)）
- 澄清：labels for switching agents between terminal and chat（[@AmethystLiang](https://github.com/AmethystLiang)，[#31134](https://github.com/stablyai/orca/pull/31134)）
- Polish the appearance of chat question options（[@AmethystLiang](https://github.com/AmethystLiang)，[#31219](https://github.com/stablyai/orca/pull/31219)）

#### Phone {#v1-4-235-phone}

> 保持：conversations and project groups current, create workspaces with less waiting, and select cloud dictation models directly from your phone.

- Reconnect a chat’s live feed from its last received row when the stream ends（[@brennanb2025](https://github.com/brennanb2025)，[#29007](https://github.com/stablyai/orca/pull/29007)）
- 更新：projects, project groups and workspace rows together so phone grouping stays in sync（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31102](https://github.com/stablyai/orca/pull/31102)）
- Prepare the worktree checkout while the new-workspace form is open（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31167](https://github.com/stablyai/orca/pull/31167)）
- Select ready cloud dictation models from setup and Settings → Voice（[@nwparker](https://github.com/nwparker)，[#31221](https://github.com/stablyai/orca/pull/31221)）
- 显示：mobile home statistics when connected to an `orca serve` host（[@nwparker](https://github.com/nwparker)，[#31197](https://github.com/stablyai/orca/pull/31197)）
- 保持：chat composer controls inside their row（[@brennanb2025](https://github.com/brennanb2025)，[#28983](https://github.com/stablyai/orca/pull/28983)）
- 保持：session tab icons full size beside long titles（[@AmoabaKelvin](https://github.com/AmoabaKelvin)，[#31169](https://github.com/stablyai/orca/pull/31169)）

#### Editor, performance & file safety {#v1-4-235-editor-performance-file-safety}

> 减小：background file watching, speed up workspace navigation, and make reloads and save conflicts more dependable across tabs and devices.

- Watch active, recent and at-risk workspaces; refresh open files when you return to an unwatched workspace（[@nwparker](https://github.com/nwparker)，[#30415](https://github.com/stablyai/orca/pull/30415)）
- Preload the workspace jump palette before first use（[@brennanb2025](https://github.com/brennanb2025)，[#30935](https://github.com/stablyai/orca/pull/30935)）
- 改进：save-conflict checks, Undo after reload, autosave during heavy file activity and chat-start error messages（[@nwparker](https://github.com/nwparker)，[#31216](https://github.com/stablyai/orca/pull/31216)）
- Release superseded and closed editor-tab watch probes and disk-check records（[@nwparker](https://github.com/nwparker)，[#31128](https://github.com/stablyai/orca/pull/31128)）
- 避免：reapplying terminal bindings that already match when saving state（[@AmethystLiang](https://github.com/AmethystLiang)，[#31033](https://github.com/stablyai/orca/pull/31033)）

#### Workspaces, SSH & remote servers {#v1-4-235-workspaces-ssh-remote-servers}

> 保持：workspace lists current, make same-named projects easier to distinguish, and improve remote server transitions and permissions.

- 显示：machine labels only when projects have the same name（[@nwparker](https://github.com/nwparker)，[#31233](https://github.com/stablyai/orca/pull/31233)）
- 保持：the desktop workspace list current while hidden and include workspaces created on paired servers or other clients（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31090](https://github.com/stablyai/orca/pull/31090)）
- Refuse ambiguous same-path project routing instead of following the Active Server selection（[@nwparker](https://github.com/nwparker)，[#31119](https://github.com/stablyai/orca/pull/31119)）
- 允许：an older SSH host to move to its managed server while a relay shell identified by its tab remains running（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31093](https://github.com/stablyai/orca/pull/31093)）
- Make `orca open-url` on a manually started server ask for a paired desktop rather than an SSH setting（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31120](https://github.com/stablyai/orca/pull/31120)）
- Respect the login umask for remote worktrees instead of making them owner-only（[@AmethystLiang](https://github.com/AmethystLiang)，[#31135](https://github.com/stablyai/orca/pull/31135)）
- 改进：WSL migration checks for path casing, panes without restore folders and stale agent records（[@nwparker](https://github.com/nwparker)，[#31211](https://github.com/stablyai/orca/pull/31211)）

#### Settings & security {#v1-4-235-settings-security}

> 保持：Experimental settings accessible after language updates and tighten permissions for newly created Codex configuration files.

- 防止：Experimental settings from crashing after language-pack updates（[@nwparker](https://github.com/nwparker)，[#31202](https://github.com/stablyai/orca/pull/31202)）
- Create new Codex `config.toml` files with owner-only permissions（[@nwparker](https://github.com/nwparker)，[#31228](https://github.com/stablyai/orca/pull/31228)）

#### Relay service {#v1-4-235-relay-service}

> 给予：each relay director revision its own instance limit during rollouts.

- Use a separate instance maximum per director revision rather than splitting a shared service cap（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31178](https://github.com/stablyai/orca/pull/31178)）

#### Tests, CI & maintenance {#v1-4-235-tests-ci-maintenance}

> compatibility and regression coverage, leaner release builds, and continued terminal-layout groundwork. Layout-owner changes below remain behind a feature switch and are not enabled product features in this release进一步增强。

- Layout groundwork (disabled): open CLI- and phone-requested files in the visible tab group（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31123](https://github.com/stablyai/orca/pull/31123)）
- Layout groundwork (disabled): surface running terminals without visible panes and determine startup reconnections（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31118](https://github.com/stablyai/orca/pull/31118)）
- Test custom terminal titles with older phone layouts（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31127](https://github.com/stablyai/orca/pull/31127)）
- Include headless server specs in the manually enabled layout CI run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31108](https://github.com/stablyai/orca/pull/31108)）
- Layout groundwork (disabled): advertise layout-change support to paired desktops（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31131](https://github.com/stablyai/orca/pull/31131)）
- Test terminal readiness after a layout-owner server restart loses a pane binding（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31132](https://github.com/stablyai/orca/pull/31132)）
- Test file opening from older phone layouts against a layout-owner build（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31138](https://github.com/stablyai/orca/pull/31138)）
- Layout groundwork (disabled): use consistent file identities in layout updates（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31140](https://github.com/stablyai/orca/pull/31140)）
- Test that windowless host reloads preserve terminals created by main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31144](https://github.com/stablyai/orca/pull/31144)）
- Layout groundwork (disabled): apply individual layout records instead of rebuilding the whole session（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31152](https://github.com/stablyai/orca/pull/31152)）
- Layout groundwork (disabled): render paired-server workspaces from the server’s layout stream（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31181](https://github.com/stablyai/orca/pull/31181)）
- Format the files changed by the full chat-output update（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31184](https://github.com/stablyai/orca/pull/31184)）
- Layout groundwork (disabled): let main create, start and close terminal tabs and panes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31130](https://github.com/stablyai/orca/pull/31130)）
- 更新：nine end-to-end specs to match intended product behavior（[@brennanb2025](https://github.com/brennanb2025)，[#30897](https://github.com/stablyai/orca/pull/30897)）
- 升级：the mobile app to 0.0.58 and Android versionCode to 22（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31194](https://github.com/stablyai/orca/pull/31194)）
- 保持：Windows daemon teardown tests from counting processes with reused parent IDs（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31192](https://github.com/stablyai/orca/pull/31192)）
- Layout groundwork (disabled): restore each terminal pane once at its saved size and identify sleeping or held panes（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#31171](https://github.com/stablyai/orca/pull/31171)）
- 新增：checks for host-aware repository routing and migrate existing callers（[@nwparker](https://github.com/nwparker)，[#31096](https://github.com/stablyai/orca/pull/31096)）
- Test that SSH health probes stay responsive while the SSH layer is stuck（[@nwparker](https://github.com/nwparker)，[#31193](https://github.com/stablyai/orca/pull/31193)）
- 更新：Zod to 4.6.7 for recursive schema type compatibility（[@nwparker](https://github.com/nwparker)，[#31222](https://github.com/stablyai/orca/pull/31222)）
- Test Claude dispatch metadata received after stopping a turn（[@nwparker](https://github.com/nwparker)，[#31229](https://github.com/stablyai/orca/pull/31229)）
- 减小：duplicate release builds and history downloads（[@nwparker](https://github.com/nwparker)，[#31227](https://github.com/stablyai/orca/pull/31227)）

**完整变更对照：** [v1.4.233...v1.4.235](https://github.com/stablyai/orca/compare/v1.4.233...v1.4.235)

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
