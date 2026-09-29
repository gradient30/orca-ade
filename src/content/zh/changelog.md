# 更新日志 {#changelog}

本页保留最近五次桌面版的**完整中文日志**，不是一句话摘要。打开时自动抓取官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 版本索引 {#index}

| 版本 | 日期 | 标题 |
| --- | --- | --- |
| [v1.4.217](#v1-4-217) | 2026年9月29日 | Codex workers start again on… |
| [v1.4.216](#v1-4-216) | 2026年9月28日 | 窄窗口里状态栏保持单行 |
| [v1.4.215](#v1-4-215) | 2026年9月27日 | Profile 双副本冲突时让用户选择保留哪一份 |
| [v1.4.214](#v1-4-214) | 2026年9月26日 | 原生交互式 .ipynb 笔记本与 Native Chat 增强 |
| [v1.4.212](#v1-4-212) | 2026年9月25日 | Codex 0.157+ 在 Orca 管理 home 中正常启动 |

## 完整中文日志 {#full-notes}

## v1.4.217 Codex workers start again on… {#v1-4-217}

2026年9月29日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.217)

感谢使用 Orca，也感谢一直以来的支持。

This patch is built from the September 27 daily build plus fixes picked from main. Pull requests that landed on main after that are not in this build.

### 简要说明 {#v1-4-217-short}

**Codex:** Codex workers start again on current Codex (0.158). Orca had been waiting for a welcome-screen label that Codex 0.158 removed, so every Codex worker timed out; Orca now recognizes Codex's empty input box instead. Starting a Codex worker with a model or reasoning effort no longer hangs either.

**Codex tabs run on their own:** On Codex 0.157 and newer, every Codex tab in Orca shared one background server started by the first tab, so status and results were credited to the wrong tab and closing the first tab dropped all the others. Each Codex tab in an Orca terminal now runs its own server, so closing one no longer drops the others. New terminals opened after updating get this; terminals already open keep the old behavior until reopened. To keep the shared server, add `export ORCA_CODEX_ISOLATE=0` to your shell startup file. The trade-off of the default: Codex "Run in background", `codex agents`, and opening a session from the Codex desktop app or an IDE won't see sessions started in Orca, and many open tabs use more memory.

**Status bar & workspace UI:** The status bar fits small screens: extra agents fold into a "+N" badge before status labels shrink to icons. Compact agent rows show unread emphasis, and activity threads from floating terminal agents open the right pane.

**Remote & SSH:** SSH hosts that ask for a verification code or other multi-factor prompt are supported, remote file access follows repository ownership, and interrupted remote installs recover without deleting files still in use.

**Editor & browser:** Solidity, Typst, and Twig files are highlighted, Markdown source survives rich-text edits, and browser tools fold into a menu on narrow screens.

**Reliability:** Orchestration workers whose terminal can no longer be found are stopped properly instead of piling up, and many background tasks clean up after themselves when a window reloads or a request is cancelled.

---

### 产品体验 {#v1-4-217-product}

#### Codex & orchestration {#v1-4-217-codex-orchestration}

> Codex workers start again on Codex 0.158, each Codex tab in an Orca terminal runs on its own, and stopping a worker reliably ends its process.

- 修复（terminal）：run Codex in Orca terminals without the shared background server（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23900](https://github.com/stablyai/orca/pull/23900)）
- 修复（daemon）：roll Codex no-daemon shell launch into a fresh v37 daemon（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23907](https://github.com/stablyai/orca/pull/23907)）
- 修复（runtime）：settle a quiet Codex composer as ready on every version（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23765](https://github.com/stablyai/orca/pull/23765)）
- 修复（runtime）：read Codex readiness from the live screen（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23475](https://github.com/stablyai/orca/pull/23475)）
- 修复：await queued Codex trust preflight completion（[@nwparker](https://github.com/nwparker)，[#23148](https://github.com/stablyai/orca/pull/23148)）
- 修复（orchestration）：reland process-incarnation reap for stale worker terminal handles（[@brennanb2025](https://github.com/brennanb2025)，[#23583](https://github.com/stablyai/orca/pull/23583)）
- 修复（orchestration）：deliver dispatch mail and replies to the current lead（[@nwparker](https://github.com/nwparker)，[#23325](https://github.com/stablyai/orca/pull/23325)）

#### Other agents & Native Chat {#v1-4-217-other-agents-native-chat}

> OpenCode, Hermes, Kimi, Grok, and Claude integrations handle edge cases more safely, and long questions in Native Chat can be expanded.

- 修复：dispose OpenCode 2 hooks after prompt setup and cleanup failures（[@nwparker](https://github.com/nwparker)，[#23209](https://github.com/stablyai/orca/pull/23209)）
- Respect disabled OpenCode variants and refresh WSL settings safely（[@nwparker](https://github.com/nwparker)，[#23328](https://github.com/stablyai/orca/pull/23328)）
- 保留：Hermes YAML configuration during hook installation（[@nwparker](https://github.com/nwparker)，[#23324](https://github.com/stablyai/orca/pull/23324)）
- 修复（kimi）：don't crash if config.toml is deleted mid-write（[@nwparker](https://github.com/nwparker)，[#23293](https://github.com/stablyai/orca/pull/23293)）
- 修复（grok）：show zero usage for an explicit zero quota（[@nwparker](https://github.com/nwparker)，[#23321](https://github.com/stablyai/orca/pull/23321)）
- 修复（native-chat）：let the "Asked" row unfold a long question（[@brennanb2025](https://github.com/brennanb2025)，[#22941](https://github.com/stablyai/orca/pull/22941)）
- 修复（claude）：release permission prompt abort listeners（[@OrcaWin](https://github.com/OrcaWin)，[#23195](https://github.com/stablyai/orca/pull/23195)）
- 性能（native-chat）：release obsolete transcript viewers after reloads（[@nwparker](https://github.com/nwparker)，[#22982](https://github.com/stablyai/orca/pull/22982)）

#### Status bar, sidebar & activity {#v1-4-217-status-bar-sidebar-activity}

> The status bar fits small screens, compact agent rows show unread state, and activity threads open floating terminal agents.

- 修复（status-bar）：fold agents into +N before status labels go icon-only（[@AmethystLiang](https://github.com/AmethystLiang)，[#23689](https://github.com/stablyai/orca/pull/23689)）
- 修复（sidebar）：show unread emphasis in compact agent rows（[@nwparker](https://github.com/nwparker)，[#23327](https://github.com/stablyai/orca/pull/23327)）
- 修复（sidebar）：preserve list focus when selecting workspaces（[@nwparker](https://github.com/nwparker)，[#23320](https://github.com/stablyai/orca/pull/23320)）
- 新增（activity）：reveal threads in floating terminal workspace（[@AmethystLiang](https://github.com/AmethystLiang)，[#23239](https://github.com/stablyai/orca/pull/23239)）

#### 终端 {#v1-4-217-terminal}

> Git Bash is detected by its install layout, Japanese file links stay intact, and Windows terminals are more robust.

- 修复（terminal）：recognize a Git Bash launcher by its install layout（[@nwparker](https://github.com/nwparker)，[#23308](https://github.com/stablyai/orca/pull/23308)）
- 修复（terminal）：retain Japanese middle dots and tildes in file links（[@nwparker](https://github.com/nwparker)，[#23322](https://github.com/stablyai/orca/pull/23322)）
- 修复（windows）：preserve relocated terminals and native process scans（[@OrcaWin](https://github.com/OrcaWin)，[#22872](https://github.com/stablyai/orca/pull/22872)）
- 修复（windows）：synchronize native terminal table lifetime（[@OrcaWin](https://github.com/OrcaWin)，[#23257](https://github.com/stablyai/orca/pull/23257)）
- 性能：cap shared-path scans and synchronize Windows PTY access（[@nwparker](https://github.com/nwparker)，[#23194](https://github.com/stablyai/orca/pull/23194)）
- 性能：preserve terminal previews across unrelated settings updates（[@nwparker](https://github.com/nwparker)，[#23099](https://github.com/stablyai/orca/pull/23099)）

#### Editor, search & files {#v1-4-217-editor-search-files}

> Solidity, Typst, and Twig get syntax highlighting, Markdown source survives rich edits, and grouped search filters keep their commas.

- 修复（editor）：highlight Solidity files（[@anajuliabit](https://github.com/anajuliabit)，[#20928](https://github.com/stablyai/orca/pull/20928)）
- 新增（editor）：highlight Typst files and diffs（[@nwparker](https://github.com/nwparker)，[#23323](https://github.com/stablyai/orca/pull/23323)）
- 修复（editor）：highlight Twig templates in files and diffs（[@nwparker](https://github.com/nwparker)，[#23366](https://github.com/stablyai/orca/pull/23366)）
- 修复（editor）：recognize all bundled Monaco language associations（[@nwparker](https://github.com/nwparker)，[#23371](https://github.com/stablyai/orca/pull/23371)）
- 修复（editor）：preserve Markdown source across rich edits（[@nwparker](https://github.com/nwparker)，[#23280](https://github.com/stablyai/orca/pull/23280)）
- 修复（search）：keep commas inside grouped file filters（[@nwparker](https://github.com/nwparker)，[#23319](https://github.com/stablyai/orca/pull/23319)）
- 修复：remove PDF export temp files after setup failures（[@nwparker](https://github.com/nwparker)，[#23130](https://github.com/stablyai/orca/pull/23130)）
- 性能：avoid rescanning partial notebook output frames（[@nwparker](https://github.com/nwparker)，[#23138](https://github.com/stablyai/orca/pull/23138)）

#### 浏览器 {#v1-4-217-browser}

> Browser tools fold into a menu on narrow screens, and addresses with explicit ports open correctly.

- Implement responsive toolbar overflow with tool folding（[@AmethystLiang](https://github.com/AmethystLiang)，[#23265](https://github.com/stablyai/orca/pull/23265)）
- 修复（browser）：open domains with explicit ports（[@nwparker](https://github.com/nwparker)，[#23318](https://github.com/stablyai/orca/pull/23318)）

#### Remote, SSH & WSL {#v1-4-217-remote-ssh-wsl}

> SSH supports multi-factor (keyboard-interactive) sign-in, remote file access respects repository ownership, and remote installs recover cleanly.

- 新增（ssh）：support keyboard-interactive authentication (MFA)（[@Chihen-Tai](https://github.com/Chihen-Tai)，[#15588](https://github.com/stablyai/orca/pull/15588)）
- 保持：SSH terminals parked after their own workspace updates（[@OrcaWin](https://github.com/OrcaWin)，[#23193](https://github.com/stablyai/orca/pull/23193)）
- 修复：exclude canonical SSH roots from local file access（[@nwparker](https://github.com/nwparker)，[#23196](https://github.com/stablyai/orca/pull/23196)）
- 修复：honor canonical SSH ownership in worktree listings（[@nwparker](https://github.com/nwparker)，[#23198](https://github.com/stablyai/orca/pull/23198)）
- 修复：bind filesystem root grants to their repository owner（[@nwparker](https://github.com/nwparker)，[#23206](https://github.com/stablyai/orca/pull/23206)）
- 修复（ssh）：preserve interrupted installation outcomes through retries（[@OrcaWin](https://github.com/OrcaWin)，[#23273](https://github.com/stablyai/orca/pull/23273)）
- 修复（ssh）：recover abandoned caches without deleting live dependencies（[@OrcaWin](https://github.com/OrcaWin)，[#23281](https://github.com/stablyai/orca/pull/23281)）
- 修复（ssh）：name the missing unzip when Bun archive extraction cannot start（[@nwparker](https://github.com/nwparker)，[#23298](https://github.com/stablyai/orca/pull/23298)）
- 避免：store updates for unchanged SSH repository catalogs（[@nwparker](https://github.com/nwparker)，[#23034](https://github.com/stablyai/orca/pull/23034)）
- 修复（worktrees）：clear orphan cleanup on BusyBox WSL distros（[@nwparker](https://github.com/nwparker)，[#23296](https://github.com/stablyai/orca/pull/23296)）
- 修复（projects）：enrich git remote identity for runtime-addressed repo rows（[@nwparker](https://github.com/nwparker)，[#23300](https://github.com/stablyai/orca/pull/23300)）
- 修复（persistence）：report a discarded cross-host repo update instead of failing silently（[@nwparker](https://github.com/nwparker)，[#23379](https://github.com/stablyai/orca/pull/23379)）

#### Source control & code review {#v1-4-217-source-control-code-review}

> Pull request and review lookups keep the newest result, and Gitea lookups refresh correctly.

- 修复：refresh strict Gitea lookups and synchronize Windows PTY access（[@nwparker](https://github.com/nwparker)，[#23162](https://github.com/stablyai/orca/pull/23162)）
- 性能（github）：coalesce stronger refreshes after pending requests（[@nwparker](https://github.com/nwparker)，[#22970](https://github.com/stablyai/orca/pull/22970)）
- 修复：preserve newer pull request lookup ownership（[@nwparker](https://github.com/nwparker)，[#23119](https://github.com/stablyai/orca/pull/23119)）
- 修复：preserve newer hosted review lookup ownership（[@nwparker](https://github.com/nwparker)，[#23126](https://github.com/stablyai/orca/pull/23126)）
- 修复：observe linked-issue failures during review generation（[@nwparker](https://github.com/nwparker)，[#23166](https://github.com/stablyai/orca/pull/23166)）
- 修复：retire stale review lookups after cache invalidation（[@nwparker](https://github.com/nwparker)，[#23182](https://github.com/stablyai/orca/pull/23182)）

#### Reliability & performance {#v1-4-217-reliability-performance}

> Orca releases abandoned work, listeners, and streams after reloads or cancellations, and skips redundant scans and updates.

- 性能（emulator）：stop obsolete video streams after renderer reloads（[@nwparker](https://github.com/nwparker)，[#22967](https://github.com/stablyai/orca/pull/22967)）
- 性能（mobile）：coalesce stalled connection log persistence（[@nwparker](https://github.com/nwparker)，[#22973](https://github.com/stablyai/orca/pull/22973)）
- Cancel abandoned relay search work（[@nwparker](https://github.com/nwparker)，[#22997](https://github.com/stablyai/orca/pull/22997)）
- 性能（push）：keep retention sweeps from overlapping without slowing the drain（[@nwparker](https://github.com/nwparker)，[#23001](https://github.com/stablyai/orca/pull/23001)）
- 性能（relay）：release rejected first-frame connections [trade-off]（[@nwparker](https://github.com/nwparker)，[#23011](https://github.com/stablyai/orca/pull/23011)）
- 性能（relay）：release canceled AI Vault startup requests（[@nwparker](https://github.com/nwparker)，[#23027](https://github.com/stablyai/orca/pull/23027)）
- 性能（history）：coalesce tombstone directory rescans（[@nwparker](https://github.com/nwparker)，[#23031](https://github.com/stablyai/orca/pull/23031)）
- Scope relay capacity checks to the requested cell（[@nwparker](https://github.com/nwparker)，[#23036](https://github.com/stablyai/orca/pull/23036)）
- 性能：avoid repeatedly encoding retained VM recipe output（[@nwparker](https://github.com/nwparker)，[#23048](https://github.com/stablyai/orca/pull/23048)）
- 修复：close abandoned PDF.js development asset streams（[@nwparker](https://github.com/nwparker)，[#23054](https://github.com/stablyai/orca/pull/23054)）
- 修复：release file watches when their renderer document ends（[@nwparker](https://github.com/nwparker)，[#23055](https://github.com/stablyai/orca/pull/23055)）
- 修复：close abandoned static web asset readers（[@nwparker](https://github.com/nwparker)，[#23062](https://github.com/stablyai/orca/pull/23062)）
- 修复：stop stale runtime event work after renderer cleanup（[@nwparker](https://github.com/nwparker)，[#23066](https://github.com/stablyai/orca/pull/23066)）
- 修复：release dictation session listeners when speech workers exit（[@nwparker](https://github.com/nwparker)，[#23077](https://github.com/stablyai/orca/pull/23077)）
- 性能：skip unused Linux accessibility child enumeration（[@nwparker](https://github.com/nwparker)，[#23085](https://github.com/stablyai/orca/pull/23085)）
- 性能：skip store notifications for unchanged project and folder catalogs（[@nwparker](https://github.com/nwparker)，[#23104](https://github.com/stablyai/orca/pull/23104)）
- 性能：skip macOS DNS probes for unrelated errors（[@nwparker](https://github.com/nwparker)，[#23121](https://github.com/stablyai/orca/pull/23121)）
- 性能：share pending plugin translation startup requests（[@nwparker](https://github.com/nwparker)，[#23133](https://github.com/stablyai/orca/pull/23133)）
- 性能：bound wildcard segment work in nested repository scans（[@nwparker](https://github.com/nwparker)，[#23149](https://github.com/stablyai/orca/pull/23149)）
- 修复（relay）：release capacity wait abort listeners（[@OrcaWin](https://github.com/OrcaWin)，[#23188](https://github.com/stablyai/orca/pull/23188)）
- 修复（daemon）：release terminal attach cancellation listeners（[@OrcaWin](https://github.com/OrcaWin)，[#23191](https://github.com/stablyai/orca/pull/23191)）

#### 国际化（i18n） {#v1-4-217-internationalization-i18n-}

> Diff note wording is clearer.

- 修复（i18n）：clarify the recipient of diff notes（[@OrcaWin](https://github.com/OrcaWin)，[#23256](https://github.com/stablyai/orca/pull/23256)）

#### Tests, CI & maintenance {#v1-4-217-tests-ci-maintenance}

> CI runs faster and more in parallel, formatting and packaging are tidied up, and a short-lived mouse Back/Forward shortcut change was reverted.

- 支持：mouse Back/Forward buttons in shortcuts（[@nwparker](https://github.com/nwparker)，[#23287](https://github.com/stablyai/orca/pull/23287)）
- 回退「支持：mouse Back/Forward buttons in shortcuts」（[@AmethystLiang](https://github.com/AmethystLiang)，[#23350](https://github.com/stablyai/orca/pull/23350)）
- 修复（design-system）：replace hand-rolled diff draft-card shadow with shadow-xs（[@nwparker](https://github.com/nwparker)，[#23307](https://github.com/stablyai/orca/pull/23307)）
- 修复（packaging）：exclude root notes from app files（[@nwparker](https://github.com/nwparker)，[#23326](https://github.com/stablyai/orca/pull/23326)）
- 修复（homebrew）：remove deprecated URL verification parameter（[@nwparker](https://github.com/nwparker)，[#23365](https://github.com/stablyai/orca/pull/23365)）
- 样式：settle oxfmt 0.70 drift and stop formatting vendored licences（[@nwparker](https://github.com/nwparker)，[#23377](https://github.com/stablyai/orca/pull/23377)）
- 测试：target writer timeouts and diagnose Bun startup stalls（[@OrcaWin](https://github.com/OrcaWin)，[#23267](https://github.com/stablyai/orca/pull/23267)）
- 修复（ci）：preserve focused Playwright file selection（[@OrcaWin](https://github.com/OrcaWin)，[#23270](https://github.com/stablyai/orca/pull/23270)）
- CI：shard SSH tests, remove duplicate runs, and warm Windows caches（[@OrcaWin](https://github.com/OrcaWin)，[#23286](https://github.com/stablyai/orca/pull/23286)）
- CI：reuse test fixtures, native builds, and package images（[@OrcaWin](https://github.com/OrcaWin)，[#23291](https://github.com/stablyai/orca/pull/23291)）
- CI：scope orcad smoke and parallelize Linux packages（[@OrcaWin](https://github.com/OrcaWin)，[#23314](https://github.com/stablyai/orca/pull/23314)）
- CI：reuse mobile web route analysis and skip unrelated mobile tests（[@OrcaWin](https://github.com/OrcaWin)，[#23329](https://github.com/stablyai/orca/pull/23329)）
- Reuse mobile recording compilation and refresh desktop CI timings（[@OrcaWin](https://github.com/OrcaWin)，[#23343](https://github.com/stablyai/orca/pull/23343)）
- Run independent CI checks with native parallel Actions steps（[@OrcaWin](https://github.com/OrcaWin)，[#23351](https://github.com/stablyai/orca/pull/23351)）
- CI：overlap package and security preparation and share localization parsing（[@OrcaWin](https://github.com/OrcaWin)，[#23364](https://github.com/stablyai/orca/pull/23364)）
- CI：overlap shell, localization, and mobile route preparation（[@OrcaWin](https://github.com/OrcaWin)，[#23368](https://github.com/stablyai/orca/pull/23368)）
- CI：use ARM unit runners, overlap web builds, and reuse verifier fixtures（[@OrcaWin](https://github.com/OrcaWin)，[#23376](https://github.com/stablyai/orca/pull/23376)）
- CI：build independent Electron targets together for E2E（[@OrcaWin](https://github.com/OrcaWin)，[#23378](https://github.com/stablyai/orca/pull/23378)）
- CI：compile the E2E CLI once for all consumers（[@OrcaWin](https://github.com/OrcaWin)，[#23384](https://github.com/stablyai/orca/pull/23384)）

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

## v1.4.214 原生交互式 .ipynb 笔记本与 Native Chat 增强 {#v1-4-214}

2026年9月26日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.214)

感谢使用 Orca，也感谢一直以来的支持。

### 简要说明 {#v1-4-214-short}

**笔记本：** 交互式 `.ipynb` 笔记本现已原生渲染，支持点击编辑单元格，由持久的 Jupyter kernel 驱动；pip 被锁时会自动创建虚拟环境，并在工作区解释器执行前尊重信任边界。

**Agent 与聊天：** Native Chat 在编写器里实时显示上下文窗口用量，已发送消息可悬停复制，滚动时自动加载更早的历史；Codex 0.157+ 可以在 Orca 管理的 home 里干净启动，不再因路径长度失败（`SUN_LEN`）。Codex、Claude、Pi、Grok 都会跟踪子 Agent 与子任务状态，ZCode 成为一等支持的 harness。

**终端、编辑器与工作区：** 单终端窗格增加明确的关闭按钮；重新挂载的 SSH 标签会继续启动 shell；托管的 WSL 终端自动提供 Orca CLI。工作区文件夹开关即时生效，AI notes 界面更新，Windows 上的大文件身份保持区分。

**持久化与性能：** Profile 存储迁到 SQLite，写入放在后台，无头 Orca 捆绑 Bun。捆绑的 ripgrep 负责本地、WSL 和 SSH 搜索；并发 transcript 读取、就绪探测和终端标记扫描的延迟明显下降。

**远程、中继与浏览器：** 区域 rehome 操作员接受更新的生产 cell；中继排空时间避免连接被掐断；浏览器像素捕获只在必要时等待。

**移动端：** 移动端 OTA 体验由页面自己拥有原生安全区，流式浏览器窗格更顺，Android 实时输入的回显已修复，配对后机器名称会保留。

---

### 产品体验 {#v1-4-214-product}

#### 笔记本 {#v1-4-214-notebooks}

> 交互式笔记本以可编辑单元格渲染，跑在持久的 Jupyter kernel 里，自动准备虚拟环境，并尊重工作区信任。

- 新增（ipynb）：像笔记本一样渲染，单元格可无缝点击编辑（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22519](https://github.com/stablyai/orca/pull/22519)）
- 新增（ipynb）：在持久的 Jupyter kernel 里运行笔记本单元格（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22581](https://github.com/stablyai/orca/pull/22581)）
- 新增（ipynb）：pip 被锁时创建 .venv，并显示 ipykernel 安装进度（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22710](https://github.com/stablyai/orca/pull/22710)）
- 修复（ipynb）：笔记本被信任之前，不运行工作区解释器（[@brennanb2025](https://github.com/brennanb2025)，[#22962](https://github.com/stablyai/orca/pull/22962)）

#### Agent、聊天与启动 {#v1-4-214-agents-chat-launches}

> 上下文窗口用量直接出现在编写器里；Codex 0.157+ 能在 Orca 管理的 home 中干净启动；子任务和子 Agent 保持可见；ZCode 成为受支持的 harness。

- 修复（ai-vault-search）：分离缓冲的 transcript 行（[@OrcaWin](https://github.com/OrcaWin)，[#22545](https://github.com/stablyai/orca/pull/22545)）
- 修复（native-chat）：只给点击能处理的文件链接加下划线（[@brennanb2025](https://github.com/brennanb2025)，[#22370](https://github.com/stablyai/orca/pull/22370)）
- 修复（opencode2）：会话所属的每个表单都会挡住窗格（[@nwparker](https://github.com/nwparker)，[#22548](https://github.com/stablyai/orca/pull/22548)）
- 新增（native-chat）：所有 Structured Chat 共用一项 shell 环境设置（[@brennanb2025](https://github.com/brennanb2025)，[#22387](https://github.com/stablyai/orca/pull/22387)）
- 修复（ai-vault-search）：缓冲的 transcript 行先取得所有权，再钉住父级（[@nwparker](https://github.com/nwparker)，[#22563](https://github.com/stablyai/orca/pull/22563)）
- 新增（agent-launch）：允许调用方预留聊天会话，并按会话选择启动终端（[@brennanb2025](https://github.com/brennanb2025)，[#22523](https://github.com/stablyai/orca/pull/22523)）
- 修复（native-chat）：把任务条停靠在目标标签上（[@brennanb2025](https://github.com/brennanb2025)，[#22530](https://github.com/stablyai/orca/pull/22530)）
- 修复（opencode-usage）：合并迁移会话后同一列的两行（[@nwparker](https://github.com/nwparker)，[#22550](https://github.com/stablyai/orca/pull/22550)）
- 新增（agent-status）：在合并行状态旁发布主 Agent 自己的状态（[@brennanb2025](https://github.com/brennanb2025)，[#22452](https://github.com/stablyai/orca/pull/22452)）
- 修复（opencode）：给 opencode2 状态插件一个独立 id（[@nwparker](https://github.com/nwparker)，[#22544](https://github.com/stablyai/orca/pull/22544)）
- 修复（agents）：未确认的 OpenCode 交接不再报成功（[@nwparker](https://github.com/nwparker)，[#22546](https://github.com/stablyai/orca/pull/22546)）
- 修复（claude）：从真正的最新消息恢复 Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#22395](https://github.com/stablyai/orca/pull/22395)）
- 修复（opencode2）：解析子 Agent 会话谱系，避免子任务抢走窗格（[@nwparker](https://github.com/nwparker)，[#22444](https://github.com/stablyai/orca/pull/22444)）
- 修复（rate-limits）：用 Go API key 读取 OpenCode Go 用量（[@nwparker](https://github.com/nwparker)，[#22551](https://github.com/stablyai/orca/pull/22551)）
- 修复（native-chat）：消息轨道显示每一条用户消息，而不只是已加载的（[@brennanb2025](https://github.com/brennanb2025)，[#22558](https://github.com/stablyai/orca/pull/22558)）
- 修复（native-chat）：恢复失败的聊天留在状态栏，并说明该怎么做（[@brennanb2025](https://github.com/brennanb2025)，[#22448](https://github.com/stablyai/orca/pull/22448)）
- 新增（agent-status）：通过共享的主 Agent 状态折叠，合并 Codex 子任务（[@brennanb2025](https://github.com/brennanb2025)，[#22475](https://github.com/stablyai/orca/pull/22475)）
- 修复（orchestration）：把请求打在粘贴的 dispatch 简报之前，让 Claude worker 照做（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22582](https://github.com/stablyai/orca/pull/22582)）
- 修复（opencode）：根回合结束时退役子 Agent 的阻塞项（[@nwparker](https://github.com/nwparker)，[#22604](https://github.com/stablyai/orca/pull/22604)）
- 新增（native-chat）：在编写器里显示上下文窗口用量（[@brennanb2025](https://github.com/brennanb2025)，[#22301](https://github.com/stablyai/orca/pull/22301)）
- 修复（agent-status）：统计只计 Agent 工作，并把 Grok 后台子 Agent 视为正在工作（[@brennanb2025](https://github.com/brennanb2025)，[#22474](https://github.com/stablyai/orca/pull/22474)）
- 修复（native-chat）：阅读者到顶之前自动加载更早的消息（[@brennanb2025](https://github.com/brennanb2025)，[#22541](https://github.com/stablyai/orca/pull/22541)）
- 修复（native-chat）：记录每一条 journal 行是哪个 Codex agent 产生的（[@brennanb2025](https://github.com/brennanb2025)，[#22532](https://github.com/stablyai/orca/pull/22532)）
- 新增（native-chat）：已发送消息增加悬停复制按钮（[@brennanb2025](https://github.com/brennanb2025)，[#22721](https://github.com/stablyai/orca/pull/22721)）
- 新增（agent-session）：由宿主拥有聊天的 tab id，创建时可以预留（[@brennanb2025](https://github.com/brennanb2025)，[#22616](https://github.com/stablyai/orca/pull/22616)）
- 修复（claude）：打开 Structured Chat 不再有启动时限，Retry 改为全新开始（[@brennanb2025](https://github.com/brennanb2025)，[#22364](https://github.com/stablyai/orca/pull/22364)）
- 修复（skills）：识别符号链接的提供方 skill 根目录（[@aaryanporwal](https://github.com/aaryanporwal)，[#22606](https://github.com/stablyai/orca/pull/22606)）
- 修复（native-chat）：会话日期按自身生命周期，而不是子 Agent 的工作（[@brennanb2025](https://github.com/brennanb2025)，[#22520](https://github.com/stablyai/orca/pull/22520)）
- 修复（agent-launch）：工作区根目录的 cwd 不再强制开终端（[@brennanb2025](https://github.com/brennanb2025)，[#22729](https://github.com/stablyai/orca/pull/22729)）
- 修复（pi）：pi-subagents 工作流不再把窗格钉在 working（[@mmarabel](https://github.com/mmarabel)，[#22533](https://github.com/stablyai/orca/pull/22533)）
- 修复（agent-history）：在 Workspace 和 Project 视图列出更早的 Pi 会话（[@mmarabel](https://github.com/mmarabel)，[#22482](https://github.com/stablyai/orca/pull/22482)）
- 修复（agent-status）：API 错误中止时结束 Claude helper 的回合（[@brennanb2025](https://github.com/brennanb2025)，[#22745](https://github.com/stablyai/orca/pull/22745)）
- 修复（pi）：在新终端里隔离状态所有权（[@mmarabel](https://github.com/mmarabel)，[#22717](https://github.com/stablyai/orca/pull/22717)）
- 修复（agent-status）：取消操作不再藏起仍在进行的工作（[@brennanb2025](https://github.com/brennanb2025)，[#22476](https://github.com/stablyai/orca/pull/22476)）
- 修复（codex）：从未发过消息的 Codex Native Chat 重启后仍能重新打开（[@brennanb2025](https://github.com/brennanb2025)，[#22639](https://github.com/stablyai/orca/pull/22639)）
- 新增（agent-status）：子任务记录写明它在做什么、如何结束、何时结束（[@brennanb2025](https://github.com/brennanb2025)，[#22521](https://github.com/stablyai/orca/pull/22521)）
- 修复（native-chat）：聊天一打开就显示 Codex 和 Claude 的模型选择器（[@brennanb2025](https://github.com/brennanb2025)，[#22756](https://github.com/stablyai/orca/pull/22756)）
- 修复（native-chat）：每个当时正在工作的聊天都提供恢复，并说明它在做什么（[@brennanb2025](https://github.com/brennanb2025)，[#22560](https://github.com/stablyai/orca/pull/22560)）
- 修复（terminal）：Codex 重启改为替换窗格进程，而不是重新附着（[@brennanb2025](https://github.com/brennanb2025)，[#22737](https://github.com/stablyai/orca/pull/22737)）
- 修复（native-chat）：后台任务条保持在待发送提问卡片之上（[@brennanb2025](https://github.com/brennanb2025)，[#22779](https://github.com/stablyai/orca/pull/22779)）
- 新增（agents）：把 ZCode 作为一等支持的 harness（[@nwparker](https://github.com/nwparker)，[#22464](https://github.com/stablyai/orca/pull/22464)）
- 新增（zcode）：说明没有终端 UI 的 ZCode 构建（[@nwparker](https://github.com/nwparker)，[#22730](https://github.com/stablyai/orca/pull/22730)）
- 重构（native-chat）：移除未使用的终端交接（[@brennanb2025](https://github.com/brennanb2025)，[#22783](https://github.com/stablyai/orca/pull/22783)）
- 修复（claude）：根进程带着无法核验的后代退出后，Claude 聊天仍能再次启动（[@brennanb2025](https://github.com/brennanb2025)，[#22802](https://github.com/stablyai/orca/pull/22802)）
- 修复（native-chat）：子 Agent 或后台命令还在跑时，保持空闲聊天存活（[@brennanb2025](https://github.com/brennanb2025)，[#22794](https://github.com/stablyai/orca/pull/22794)）
- 新增（native-chat）：Claude 会话把子 Agent 写入宿主状态存储（[@brennanb2025](https://github.com/brennanb2025)，[#22536](https://github.com/stablyai/orca/pull/22536)）
- 新增（feature-tips）：Agent 会话搜索的一次性提示（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22923](https://github.com/stablyai/orca/pull/22923)）
- 修复（codex）：Codex 0.157+ 可在 Orca 管理的 home 中启动，不再因 SUN_LEN 失败（[@OrcaWin](https://github.com/OrcaWin)，[#22878](https://github.com/stablyai/orca/pull/22878)）
- 修复（claude）：子进程随聊天退出时，证明已停止聊天的子进程已经消失（[@brennanb2025](https://github.com/brennanb2025)，[#22918](https://github.com/stablyai/orca/pull/22918)）
- 修复（native-chat）：把键入的问题答案作为结构化答案发送，而不是选项 id（[@brennanb2025](https://github.com/brennanb2025)，[#22793](https://github.com/stablyai/orca/pull/22793)）
- 重构（agent-session）：每个聊天标签显示哪段对话，收进一张宿主表（[@brennanb2025](https://github.com/brennanb2025)，[#22709](https://github.com/stablyai/orca/pull/22709)）
- 修复（claude）：即使有后代存活，也在根进程退出时结束 Claude 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#22946](https://github.com/stablyai/orca/pull/22946)）
- 修复（native-chat）：每一次 journal 追加都能到达已打开的聊天（[@brennanb2025](https://github.com/brennanb2025)，[#22811](https://github.com/stablyai/orca/pull/22811)）
- 修复（native-chat）：聊天主人取自记录，而不是正在跑的 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#22808](https://github.com/stablyai/orca/pull/22808)）
- 修复（native-chat）：聊天写入按目标命名，而不是主人代数（[@brennanb2025](https://github.com/brennanb2025)，[#22812](https://github.com/stablyai/orca/pull/22812)）
- 新增（rate-limits）：增加 Cursor 用量跟踪（[@nwparker](https://github.com/nwparker)，[#22633](https://github.com/stablyai/orca/pull/22633)）
- 修复（native-chat）：保持终端窗格的聊天所有权稳定（[@OrcaWin](https://github.com/OrcaWin)，[#22984](https://github.com/stablyai/orca/pull/22984)）
- 修复（native-chat）：切换和恢复时保留当前窗格所有权（[@OrcaWin](https://github.com/OrcaWin)，[#23049](https://github.com/stablyai/orca/pull/23049)）
- 接受 Agent hooks 里重复的前导 BOM（[@nwparker](https://github.com/nwparker)，[#22414](https://github.com/stablyai/orca/pull/22414)）
- 修复（agents）：生成命令尊重环境变量前缀（[@nwparker](https://github.com/nwparker)，[#22427](https://github.com/stablyai/orca/pull/22427)）
- 修复（native-chat）：每个租约闩锁都有消亡路径（[@brennanb2025](https://github.com/brennanb2025)，[#22820](https://github.com/stablyai/orca/pull/22820)）
- 修复（codex）：保留运行时 MCP 条目，同时不丢失撤销（[@nwparker](https://github.com/nwparker)，[#22426](https://github.com/stablyai/orca/pull/22426)）
- 修复（native-chat）：分离窗格时聊天仍然可见（[@OrcaWin](https://github.com/OrcaWin)，[#23096](https://github.com/stablyai/orca/pull/23096)）
- 修复（vault）：在 WSL 和 SSH 主机里读取 OpenCode SQLite（[@OrcaWin](https://github.com/OrcaWin)，[#23128](https://github.com/stablyai/orca/pull/23128)）
- 改进 AI notes 的添加界面（[@AmethystLiang](https://github.com/AmethystLiang)，[#21719](https://github.com/stablyai/orca/pull/21719)）

#### 终端 {#v1-4-214-terminal}

> 单窗格增加明确的关闭按钮；重新挂载的 SSH 标签会继续启动 shell；Linux 输入法处理候选预编辑；托管的 WSL 终端自动提供 Orca CLI。

- 重构（tabs）：删除终端标签上已失效的 adopted-session 字段（[@brennanb2025](https://github.com/brennanb2025)，[#22557](https://github.com/stablyai/orca/pull/22557)）
- 修复（terminal）：Linux 输入法保留它自己预编辑所占用的候选键（[@nwparker](https://github.com/nwparker)，[#22607](https://github.com/stablyai/orca/pull/22607)）
- 修复（daemon）：把持久检查点重定基到当前终端（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22732](https://github.com/stablyai/orca/pull/22732)）
- 修复（terminal）：已知或已证实的进程边界共用同一套判定（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22735](https://github.com/stablyai/orca/pull/22735)）
- 修复（terminal）：程序在普通屏幕带着输入模式死去时，给出边界判定（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22739](https://github.com/stablyai/orca/pull/22739)）
- 修复（terminal）：通过 bin 启动器证明空闲的 Git Bash 提示符（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22752](https://github.com/stablyai/orca/pull/22752)）
- 修复（terminal）：列宽缩小后只序列化可见宽度（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22586](https://github.com/stablyai/orca/pull/22586)）
- 修复（terminal）：不再丢掉被标成隐藏缩放重绘的可见备用屏幕输出（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22587](https://github.com/stablyai/orca/pull/22587)）
- 单终端窗格显示关闭按钮（[@AmethystLiang](https://github.com/AmethystLiang)，[#22770](https://github.com/stablyai/orca/pull/22770)）
- 托管的 WSL 终端自动提供 Orca CLI（[@OrcaWin](https://github.com/OrcaWin)，[#22761](https://github.com/stablyai/orca/pull/22761)）
- 修复（terminal）：抑制慢到无法突发的 park-verdict 抖动（[@OrcaWin](https://github.com/OrcaWin)，[#20851](https://github.com/stablyai/orca/pull/20851)）
- 测试 Ctrl-Z 之前，先等待前台作业就绪（[@OrcaWin](https://github.com/OrcaWin)，[#23158](https://github.com/stablyai/orca/pull/23158)）
- 重构（pty）：无头运行时可以把渲染器投递设为可选（[@OrcaWin](https://github.com/OrcaWin)，[#23117](https://github.com/stablyai/orca/pull/23117)）

#### 编辑器、工作区与启动 {#v1-4-214-editor-workspaces-startup}

> 文件夹开关即时响应；启动窗口激活和中日韩 Windows ACL 更稳；worktree 目录带版本；Windows 与远程运行时的机器身份保持区分。

- 修复：侧栏只解释一次被 Xcode 拦住的 Git，返回时重新扫描（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22552](https://github.com/stablyai/orca/pull/22552)）
- 新增：给运行时机器命名（[@brennanb2025](https://github.com/brennanb2025)，[#22094](https://github.com/stablyai/orca/pull/22094)）
- 回退：#18790（编排 incarnation 回收回退，以及捆绑的 Freebuff agent）（[@brennanb2025](https://github.com/brennanb2025)，[#22601](https://github.com/stablyai/orca/pull/22601)）
- 修复（file-explorer）：点击名称立即展开或折叠文件夹（[@LesleyMurfin](https://github.com/LesleyMurfin)，[#22325](https://github.com/stablyai/orca/pull/22325)）
- 修复（worktrees）：给每次目录发布加版本，过期列表不能撤销一次创建（[@brennanb2025](https://github.com/brennanb2025)，[#22507](https://github.com/stablyai/orca/pull/22507)）
- 修复（floating-workspace）：Agent 启动不再挪走主窗口的标签（[@brennanb2025](https://github.com/brennanb2025)，[#22603](https://github.com/stablyai/orca/pull/22603)）
- 重构（orchestration）：给结构化会话增加编排参与者列（[@brennanb2025](https://github.com/brennanb2025)，[#22522](https://github.com/stablyai/orca/pull/22522)）
- 修复（feedback）：截图超过上传限制时只发送文字报告（[@mmarabel](https://github.com/mmarabel)，[#22508](https://github.com/stablyai/orca/pull/22508)）
- 修复（desktop）：离开 Native Chat 时释放它，以便空闲计时可以开始（[@brennanb2025](https://github.com/brennanb2025)，[#22801](https://github.com/stablyai/orca/pull/22801)）
- 修复（runtime-environments）：通过 CLI 移除的服务器仍有响应时不再崩溃（[@mmarabel](https://github.com/mmarabel)，[#22517](https://github.com/stablyai/orca/pull/22517)）
- 重构（orchestration）：把每个调用方和目标解析成一个编排参与方，以 Orca session id 为键（[@brennanb2025](https://github.com/brennanb2025)，[#22555](https://github.com/stablyai/orca/pull/22555)）
- 修复（worktrees）：失败的孤立项清理可以重试（[@nwparker](https://github.com/nwparker)，[#22409](https://github.com/stablyai/orca/pull/22409)）
- 修复：停止进程树循环（[@nwparker](https://github.com/nwparker)，[#22411](https://github.com/stablyai/orca/pull/22411)）
- 修复（editor）：桌面和移动端高亮带作用域的 dotenv 文件名（[@nwparker](https://github.com/nwparker)，[#22416](https://github.com/stablyai/orca/pull/22416)）
- 修复（editor）：使用捆绑的 ABAP 语法（[@nwparker](https://github.com/nwparker)，[#22417](https://github.com/stablyai/orca/pull/22417)）
- 修复（cli）：添加托管账户时保留 WSL 发行版（[@nwparker](https://github.com/nwparker)，[#22418](https://github.com/stablyai/orca/pull/22418)）
- 修复（jira）：显式刷新时绕过集合缓存（[@nwparker](https://github.com/nwparker)，[#22419](https://github.com/stablyai/orca/pull/22419)）
- 修复（pdf）：搜索计数与当前选中的匹配保持同步（[@nwparker](https://github.com/nwparker)，[#22420](https://github.com/stablyai/orca/pull/22420)）
- 修复（projects）：充实过程中刷新过期的自动 GitHub 图标（[@nwparker](https://github.com/nwparker)，[#22421](https://github.com/stablyai/orca/pull/22421)）
- 保留 Kimi 配置文件权限（[@nwparker](https://github.com/nwparker)，[#22422](https://github.com/stablyai/orca/pull/22422)）
- 修复（toast）：文件夹错误保持在标准模态背景之上（[@nwparker](https://github.com/nwparker)，[#22423](https://github.com/stablyai/orca/pull/22423)）
- 让 Windows 上的大文件身份保持区分（[@nwparker](https://github.com/nwparker)，[#22424](https://github.com/stablyai/orca/pull/22424)）
- 修复（tasks）：把损坏的已保存 Linear 团队选择读成 sticky-all，而不是让页面崩溃（[@OrcaWin](https://github.com/OrcaWin)，[#22279](https://github.com/stablyai/orca/pull/22279)）
- 修复（types）：独立于 Expo 全局变量描述命令环境（[@OrcaWin](https://github.com/OrcaWin)，[#23073](https://github.com/stablyai/orca/pull/23073)）
- 打开工作区优先于准备替换 checkout（[@nwparker](https://github.com/nwparker)，[#23013](https://github.com/stablyai/orca/pull/23013)）
- 修复（sidebar）：「Hide default branch」会藏起文件夹项目的根工作区（[@OrcaWin](https://github.com/OrcaWin)，[#22744](https://github.com/stablyai/orca/pull/22744)）
- 修复（startup）：启动窗口存在之前，暂缓桌面激活（[@OrcaWin](https://github.com/OrcaWin)，[#22495](https://github.com/stablyai/orca/pull/22495)）
- 修复（startup）：把安装目录的包 ACL 读成 SDDL，修复后的文件夹在中文/日文/韩文 Windows 上读起来是干净的（[@OrcaWin](https://github.com/OrcaWin)，[#22490](https://github.com/stablyai/orca/pull/22490)）
- 修复（windows）：所有手写转义都复用共享的 PowerShell 字面量引号（[@OrcaWin](https://github.com/OrcaWin)，[#23083](https://github.com/stablyai/orca/pull/23083)）
- 默认不绑定 Open Settings（[@nwparker](https://github.com/nwparker)，[#23136](https://github.com/stablyai/orca/pull/23136)）
- 修复（markdown）：从查找栏把焦点交还编辑器（[@nwparker](https://github.com/nwparker)，[#23175](https://github.com/stablyai/orca/pull/23175)）
- 修复：hook 文件按其存储的仓库主人路由（[@nwparker](https://github.com/nwparker)，[#23184](https://github.com/stablyai/orca/pull/23184)）
- 修复：已退役的文件夹监视器不再启动 Git 升级（[@nwparker](https://github.com/nwparker)，[#23144](https://github.com/stablyai/orca/pull/23144)）
- 修复：本地导入创建失败时保留冲突文件夹（[@nwparker](https://github.com/nwparker)，[#23101](https://github.com/stablyai/orca/pull/23101)）
- 修复：拒绝已过期的更新源选择（[@nwparker](https://github.com/nwparker)，[#23160](https://github.com/stablyai/orca/pull/23160)）
- 修复：编写器卸载后停止被放弃的本地附件检查（[@nwparker](https://github.com/nwparker)，[#23075](https://github.com/stablyai/orca/pull/23075)）

#### 持久化与性能 {#v1-4-214-persistence-performance}

> Profile 存储改为带后台写入的 SQLite，并捆绑 Bun；并发读取和就绪探测会去重；残留的文件监视器和缓存会被干净释放。

- 用 SQLite 和后台写入持久化 profile 状态（[@OrcaWin](https://github.com/OrcaWin)，[#22612](https://github.com/stablyai/orca/pull/22612)）
- 性能（ci）：不靠付费 runner 降低队列压力（[@OrcaWin](https://github.com/OrcaWin)，[#23053](https://github.com/stablyai/orca/pull/23053)）
- 为无头 Orca 和 profile 持久化捆绑 Bun（[@OrcaWin](https://github.com/OrcaWin)，[#22635](https://github.com/stablyai/orca/pull/22635)）
- 修复（persistence）：PID 复用后收回 Windows profile 锁（[@OrcaWin](https://github.com/OrcaWin)，[#23122](https://github.com/stablyai/orca/pull/23122)）
- 性能（chat）：共享相同的并发 transcript 读取（[@nwparker](https://github.com/nwparker)，[#23172](https://github.com/stablyai/orca/pull/23172)）
- 性能（editor）：跳过未变化的草稿发布（[@nwparker](https://github.com/nwparker)，[#23173](https://github.com/stablyai/orca/pull/23173)）
- 修复（renderer）：从选择器缓存释放已退役的 store 快照（[@OrcaWin](https://github.com/OrcaWin)，[#23187](https://github.com/stablyai/orca/pull/23187)）
- 取消被放弃的、由渲染器持有的读取（[@nwparker](https://github.com/nwparker)，[#22986](https://github.com/stablyai/orca/pull/22986)）
- 性能（terminal）：避免中间的历史帧缓冲（[@nwparker](https://github.com/nwparker)，[#23005](https://github.com/stablyai/orca/pull/23005)）
- 性能（terminal）：以线性工作量扫描同步标记（[@nwparker](https://github.com/nwparker)，[#23015](https://github.com/stablyai/orca/pull/23015)）
- 性能（editor）：跳过未变化的光标行 store 写入（[@nwparker](https://github.com/nwparker)，[#22983](https://github.com/stablyai/orca/pull/22983)）
- 重构（persistence）：退役普通的 JSON profile 写入（[@OrcaWin](https://github.com/OrcaWin)，[#23202](https://github.com/stablyai/orca/pull/23202)）
- 释放失败的文件系统监视器安装记录（[@nwparker](https://github.com/nwparker)，[#22995](https://github.com/stablyai/orca/pull/22995)）
- 性能（renderer）：缓存保存时释放无关状态（[@nwparker](https://github.com/nwparker)，[#23021](https://github.com/stablyai/orca/pull/23021)）
- 性能：避免复制未变化的 artifact 分享记录（[@nwparker](https://github.com/nwparker)，[#23141](https://github.com/stablyai/orca/pull/23141)）
- 性能：在每次快照内复用 Muse 用量过滤器（[@nwparker](https://github.com/nwparker)，[#23179](https://github.com/stablyai/orca/pull/23179)）
- 性能：在文件夹谱系过滤内复用目标成员关系（[@nwparker](https://github.com/nwparker)，[#23185](https://github.com/stablyai/orca/pull/23185)）
- 修复：分块下载资源随其渲染器一起释放（[@nwparker](https://github.com/nwparker)，[#23108](https://github.com/stablyai/orca/pull/23108)）
- 修复：写入失败后关闭文件监视器探测（[@nwparker](https://github.com/nwparker)，[#23124](https://github.com/stablyai/orca/pull/23124)）
- 性能：清掉已删除 worktree 的 head 失败标记（[@nwparker](https://github.com/nwparker)，[#23135](https://github.com/stablyai/orca/pull/23135)）
- 光标位置随编辑器标签所有权一起释放（[@nwparker](https://github.com/nwparker)，[#22988](https://github.com/stablyai/orca/pull/22988)）
- 性能（persistence）：选择性 SQLite 保存只序列化一次（[@nwparker](https://github.com/nwparker)，[#23171](https://github.com/stablyai/orca/pull/23171)）
- 启动失败时释放 SQLite 事务队列（[@nwparker](https://github.com/nwparker)，[#22993](https://github.com/stablyai/orca/pull/22993)）
- 性能：无关过期时复用新鲜的已选文件夹检查（[@nwparker](https://github.com/nwparker)，[#23087](https://github.com/stablyai/orca/pull/23087)）

#### 远程、SSH 与中继 {#v1-4-214-remote-ssh-relay}

> 区域 rehome 操作员接受更新的生产 cell；中继排空时间避免连接被掐断；SSH 上尚未提交的布局能挺过重连。

- 修复（relay）：区域 rehome 操作员接受超过 c29 的生产 cell（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22518](https://github.com/stablyai/orca/pull/22518)）
- 修复（relay）：同等容量的 cell 排空 5 分钟，而不是 2 分钟（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22584](https://github.com/stablyai/orca/pull/22584)）
- 新增（search）：为本地、WSL 和 SSH 搜索捆绑 ripgrep（[@nwparker](https://github.com/nwparker)，[#22396](https://github.com/stablyai/orca/pull/22396)）
- 修复（web）：没有 crypto.randomUUID 时，Remote Web 仍能在纯 HTTP 上加载（[@mmarabel](https://github.com/mmarabel)，[#22516](https://github.com/stablyai/orca/pull/22516)）
- 保留待处理的 SSH 终端布局编辑（[@OrcaWin](https://github.com/OrcaWin)，[#22991](https://github.com/stablyai/orca/pull/22991)）
- 修复（terminal）：重新挂载的新 SSH 标签会继续启动旧窗格还在拉起的 shell（[@OrcaWin](https://github.com/OrcaWin)，[#22578](https://github.com/stablyai/orca/pull/22578)）
- 性能（relay）：共享并发的就绪探测（[@nwparker](https://github.com/nwparker)，[#23012](https://github.com/stablyai/orca/pull/23012)）
- 性能（relay）：跳过已放弃的排队控制激活（[@nwparker](https://github.com/nwparker)，[#23029](https://github.com/stablyai/orca/pull/23029)）
- 性能：避免 SSH 上传时重复做 base64 解码（[@nwparker](https://github.com/nwparker)，[#23093](https://github.com/stablyai/orca/pull/23093)）
- 修复：已退役的中继负载连接不再重新安排刷新（[@nwparker](https://github.com/nwparker)，[#23071](https://github.com/stablyai/orca/pull/23071)）

#### 浏览器 {#v1-4-214-browser}

> 像素捕获只在必要时等待；空值的 Chromium cookie 能干净导入；设置搜索目录避免重复劳动。

- 修复（browser）：只有像素捕获命令才等待页面绘制完成（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22528](https://github.com/stablyai/orca/pull/22528)）
- 修复（browser）：像素捕获自己保持页面已绘制，不依赖桌面窗口（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22534](https://github.com/stablyai/orca/pull/22534)）
- 重构（browser）：移除未使用的截图准备可见性辅助函数（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22526](https://github.com/stablyai/orca/pull/22526)）
- 修复（browser）：导入空值的 Chromium cookie，而不是它们的域名哈希（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22719](https://github.com/stablyai/orca/pull/22719)）
- 性能：每次渲染只构建一次浏览器设置搜索目录（[@nwparker](https://github.com/nwparker)，[#23155](https://github.com/stablyai/orca/pull/23155)）
- 性能：在 CI 里流式计算打包浏览器安装包的校验和（[@nwparker](https://github.com/nwparker)，[#23082](https://github.com/stablyai/orca/pull/23082)）

#### 移动端（OTA 页面） {#v1-4-214-mobile-ota-page-}

> 空中更新页面拥有原生安全区，流式浏览器窗格更顺，Android 实时输入已修复，配对后机器名称会保留。

- 修复（mobile）：把 shell 的窗口 inset 挡在页面 WebView 之外（OTA phase C 后续）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22549](https://github.com/stablyai/orca/pull/22549)）
- 修复（mobile）：底部抽屉的键盘走平台接缝（OTA phase C 后续）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22556](https://github.com/stablyai/orca/pull/22556)）
- 修复（mobile-web）：页面输入去掉浏览器焦点环，发丝线按一个设备像素绘制（OTA phase C 后续）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22569](https://github.com/stablyai/orca/pull/22569)）
- 新增（mobile）：页面像原生屏幕一样拥有自己的安全区（OTA phase C 后续）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22570](https://github.com/stablyai/orca/pull/22570)）
- 测试（mobile）：#22570 之后把录制语料重钉到 main 顶端（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22576](https://github.com/stablyai/orca/pull/22576)）
- 修复（mobile）：慢手机上流式浏览器窗格继续翻转，并阻止双击（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22392](https://github.com/stablyai/orca/pull/22392)）
- 测试（mobile）：#22392 之后重钉 RPC 录制语料和会话关闭（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22702](https://github.com/stablyai/orca/pull/22702)）
- 修复（mobile）：每次回到应用都重启流式浏览器窗格（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22694](https://github.com/stablyai/orca/pull/22694)）
- 文档：把翻译过的 Android APK 链接更新到 0.0.50（[@AmethystLiang](https://github.com/AmethystLiang)，[#22740](https://github.com/stablyai/orca/pull/22740)）
- 新增（mobile）：配对后给机器命名（[@brennanb2025](https://github.com/brennanb2025)，[#22104](https://github.com/stablyai/orca/pull/22104)）
- 修复（mobile）：页面终端在命令坞上方显示最后几行（OTA phase C 后续）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22806](https://github.com/stablyai/orca/pull/22806)）
- 修复（mobile）：重新打开 worktree 时终端输入仍然可用（[@shaharmor](https://github.com/shaharmor)，[#22505](https://github.com/stablyai/orca/pull/22505)）
- 修复（mobile）：Android 上页面的 Live 输入按键入逐字回显（OTA phase C 后续）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22958](https://github.com/stablyai/orca/pull/22958)）
- 修复（mobile）：终端按手机尺寸只打开一次，页面和原生都如此（OTA phase C 后续）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22960](https://github.com/stablyai/orca/pull/22960)）
- 修复（mobile）：因安全公告更新 fflate（[@nwparker](https://github.com/nwparker)，[#22961](https://github.com/stablyai/orca/pull/22961)）
- 修复（mobile）：每个主机字段只有一个写入者，中继路由不能撤回编辑（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22956](https://github.com/stablyai/orca/pull/22956)）
- 重构（mobile）：实时输入的组字范围来自一对平台接缝（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23037](https://github.com/stablyai/orca/pull/23037)）
- 测试（mobile）：#22956 squash 之后把 RPC golden 重钉到 main（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23046](https://github.com/stablyai/orca/pull/23046)）
- 修复（mobile）：用共享的 Tailscale 检查标记直连路径（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23039](https://github.com/stablyai/orca/pull/23039)）

#### 国际化（i18n） {#v1-4-214-internationalization-i18n-}

> 西班牙语、法语、日语、韩语和中文的翻译继续补齐，并修正了回合状态和本地化的 artifact 搜索。

- 修复（i18n）：补上 artifact 和浏览的缺失翻译（[@AmethystLiang](https://github.com/AmethystLiang)，[#22697](https://github.com/stablyai/orca/pull/22697)）
- 修复（i18n）：韩语 artifact 搜索关键词与值覆盖对齐（[@AmethystLiang](https://github.com/AmethystLiang)，[#22711](https://github.com/stablyai/orca/pull/22711)）
- 文档：恢复被过期 APK 版本号回退掉的翻译 README 资源（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22755](https://github.com/stablyai/orca/pull/22755)）
- 修复（docs）：更新翻译过的 readme 资源和微信链接（[@AmethystLiang](https://github.com/AmethystLiang)，[#22763](https://github.com/stablyai/orca/pull/22763)）
- 杂项（i18n）：把 85 个新键译成 es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#22746](https://github.com/stablyai/orca/pull/22746)）
- 杂项（i18n）：把 113 个新键译成 es/fr/ja/ko/zh（[@AmethystLiang](https://github.com/AmethystLiang)，[#23067](https://github.com/stablyai/orca/pull/23067)）
- 修复（i18n）：修正各语言的时长和回合状态文案（[@AmethystLiang](https://github.com/AmethystLiang)，[#23243](https://github.com/stablyai/orca/pull/23243)）

#### 测试、CI 与文档 {#v1-4-214-tests-ci-documentation}

> 多余的 CI 工作流和 runner 队列被裁掉，worktree 与运行时的测试隔离更好，文档也已更新。

- 测试（file-search）：按真实运行时形状钉住 request-key 列表（[@AmethystLiang](https://github.com/AmethystLiang)，[#22312](https://github.com/stablyai/orca/pull/22312)）
- 测试（runtime）：worker 恢复重试不再扫进后续测试（[@nwparker](https://github.com/nwparker)，[#22567](https://github.com/stablyai/orca/pull/22567)）
- 文档：从 README 去掉重复的 Muse 徽章（[@FumingPower3925](https://github.com/FumingPower3925)，[#22497](https://github.com/stablyai/orca/pull/22497)）
- 测试（runtime）：把每个仓库的 worktree 扫描过期从共享计时器队列隔离开（[@brennanb2025](https://github.com/brennanb2025)，[#22575](https://github.com/stablyai/orca/pull/22575)）
- 测试（opencode）：覆盖 opencode2 的 host-env 分支，并停止继承 ORCA_OPENCODE_AGENT（[@nwparker](https://github.com/nwparker)，[#22547](https://github.com/stablyai/orca/pull/22547)）
- 文档（tui-agent-config）：更正 OpenCode 就绪预算的理由（[@nwparker](https://github.com/nwparker)，[#22593](https://github.com/stablyai/orca/pull/22593)）
- 测试（terminal）：把 Option 组合货币符号钉在标点键上（[@nwparker](https://github.com/nwparker)，[#22608](https://github.com/stablyai/orca/pull/22608)）
- 测试：去掉多余的移动端和 GitLab 检查（[@AmethystLiang](https://github.com/AmethystLiang)，[#22748](https://github.com/stablyai/orca/pull/22748)）
- 修复（release）：发布门禁跑该标签自己的 skill 新鲜度清单测试（[@brennanb2025](https://github.com/brennanb2025)，[#22775](https://github.com/stablyai/orca/pull/22775)）
- 修复（lint）：行数限制检查包含 .mts 和 .cts（[@nwparker](https://github.com/nwparker)，[#22413](https://github.com/stablyai/orca/pull/22413)）
- 把 onboarding 测试里的 .map().flat() 简化为 .flatMap()（[@AmethystLiang](https://github.com/AmethystLiang)，[#22917](https://github.com/stablyai/orca/pull/22917)）
- 杂项（deps）：刷新仍在维护的依赖（[@nwparker](https://github.com/nwparker)，[#22964](https://github.com/stablyai/orca/pull/22964)）
- 测试（terminal）：越过 #23049 重新钉住窗格 hook 顺序的一致性（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#23090](https://github.com/stablyai/orca/pull/23090)）
- CI：核对移动端销毁，并平衡单元测试成本（[@OrcaWin](https://github.com/OrcaWin)，[#23114](https://github.com/stablyai/orca/pull/23114)）
- 减少多余的 CI 运行、pnpm 上传和 fixture 启动（[@OrcaWin](https://github.com/OrcaWin)，[#23145](https://github.com/stablyai/orca/pull/23145)）
- 改进 pull request 模板里的 issue 关联（[@nwparker](https://github.com/nwparker)，[d3434a2](https://github.com/stablyai/orca/commit/d3434a2)）
- 优化 CI 后续工作流（[@OrcaWin](https://github.com/OrcaWin)，[#23190](https://github.com/stablyai/orca/pull/23190)）
- 把 filter-flatMap 模式简化为单次 flatMap（[@AmethystLiang](https://github.com/AmethystLiang)，[#23242](https://github.com/stablyai/orca/pull/23242)）

### 新贡献者 {#v1-4-214-contributors}

- [@FumingPower3925](https://github.com/FumingPower3925) 首次贡献于 [#22497](https://github.com/stablyai/orca/pull/22497)
- [@aaryanporwal](https://github.com/aaryanporwal) 首次贡献于 [#22606](https://github.com/stablyai/orca/pull/22606)

**完整变更对照：** [v1.4.212...v1.4.214](https://github.com/stablyai/orca/compare/v1.4.212...v1.4.214)

## v1.4.212 Codex 0.157+ 在 Orca 管理 home 中正常启动 {#v1-4-212}

2026年9月25日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.212)

### Agent 与 Native Chat {#v1-4-212-native-chat}

- 修复（codex）：Codex 0.157+ 可在 Orca 管理的 home 中启动，不再因 SUN_LEN 失败（[@OrcaWin](https://github.com/OrcaWin)，[#22878](https://github.com/stablyai/orca/pull/22878)）

**完整变更对照：** [v1.4.211...v1.4.212](https://github.com/stablyai/orca/compare/v1.4.211...v1.4.212)
