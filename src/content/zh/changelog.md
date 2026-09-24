# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.209](#v1-4-209) | 2026年9月23日 | 会话搜索按最新排序，启动提示直达终端 Agent，用量计价更新 |
| [v1.4.207](#v1-4-207) | 2026年9月22日 | 文件搜索不再闪现旧结果 |
| [v1.4.206](#v1-4-206) | 2026年9月20日 | 会话历史可搜，OpenCode 2，用量扫描进 worker |

### v1.4.209 · 会话搜索按最新排序，启动提示直达终端 Agent，用量计价更新 {#v1-4-209-summary}

2026年9月23日 · [本页全文](#v1-4-209) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.209)

- Agent 与聊天：会话搜索优先显示最新活动，启动提示直接送到终端 Agent。OpenCode、Claude、Pi、Antigravity 与 Devin 启动更可靠。用量总计支持 GPT-6、Opus 5.5 与 Fable 5.1 计价，Codex 用量重置后不再过时。
- 终端、编辑器与工作区：拖拽选择在重绘时保持稳定，中键粘贴在鼠标跟踪 TUI 中可用，远程窗格重启后保留滚动缓冲。PDF 缩放跨标签与重启保持，新建 worktree 对话框滚动时按钮仍可见，大 artifact 与冲突列表保持流畅。
- 远程与可靠性：WSL、SSH 与 Windows 设置恢复更干净，中继 rehome 与 cell 滚动在失败时不会拖垮整个 cell。

### v1.4.207 · 文件搜索不再闪现旧结果 {#v1-4-207-summary}

2026年9月22日 · [本页全文](#v1-4-207) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.207)

- 文件搜索：Quick Open 与文件浏览器在加载新搜索时不再闪现上一次的结果。

### v1.4.206 · 会话历史可搜，OpenCode 2，用量扫描进 worker {#v1-4-206-summary}

2026年9月20日 · [本页全文](#v1-4-206) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.206)

- Agent 与聊天：可在历史面板、跨机器、以及 `orca search` 里搜 Agent 会话。现已支持 **OpenCode 2**。Native Chat 把计划当计划渲染，重启时还在跑的聊天可以重连；OMP 能在桌面和移动端选模型。Source Control AI 可用 OMP 生成。
- 工作区、编辑器与源码管理：编写器里紧凑分支选择器回来了；New Workspace 可选 base ref；diff 可折叠未改区域。审查评论支持多行范围。创建 worktree 优先 Git；WSL 删除不会带走孪生分支。
- 终端与远程：可选默认终端 shell；搜索有匹配计数且与 Cmd+F 对齐；可配置点 URL / 中键。Windows 终端会真的启动你要的 shell。Claude、Codex 与 OpenCode 的用量扫描改在 worker 线程跑。

## 完整中文日志 {#full-notes}

## v1.4.209 会话搜索按最新排序，启动提示直达终端 Agent，用量计价更新 {#v1-4-209}

2026年9月23日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.209)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-209-short}

**Agent 与聊天：** 会话搜索现在优先显示最新活动，启动提示直接送到终端 Agent。OpenCode、Claude、Pi、Antigravity 与 Devin 的启动更可靠。用量总计现已支持 GPT-6、Opus 5.5 与 Fable 5.1 的计价，Codex 用量在重置后不再过时。

**终端、编辑器与工作区：** 拖拽选择在重绘时保持稳定，中键粘贴在鼠标跟踪 TUI 中可用，远程窗格在硬重启后仍保留滚动缓冲。PDF 缩放跨标签与重启保持，新建 worktree 对话框在滚动时仍能看到操作按钮，大 artifact 列表与冲突文件树保持流畅。

**远程与可靠性：** WSL、SSH 与 Windows 设置恢复更干净，中继 rehome 与 cell 滚动在失败时不会拖垮整个 cell。

---

### 产品体验 {#v1-4-209-product}

#### Agent、聊天与搜索 {#v1-4-209-agents-chat-search}

> 搜索更可信，Agent 启动更直接，大工作区列表保持响应。

- 新增（agent-launch）：把启动提示送到终端 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#21891](https://github.com/stablyai/orca/pull/21891)）
- 新增（session-search）：搜索结果按最新排序，相关度相同时用最近活动打破平局（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21863](https://github.com/stablyai/orca/pull/21863)）
- 用可复用组件虚拟化 artifacts 列表（[@AmethystLiang](https://github.com/AmethystLiang)，[#22061](https://github.com/stablyai/orca/pull/22061)）
- 虚拟化大型冲突文件树（[@AmethystLiang](https://github.com/AmethystLiang)，[#21920](https://github.com/stablyai/orca/pull/21920)）
- 重构：冲突审查改用通用 VirtualizedList（[@AmethystLiang](https://github.com/AmethystLiang)，[#22092](https://github.com/stablyai/orca/pull/22092)）
- 修复：搜索查询变化时列表仍显示旧结果（[@AmethystLiang](https://github.com/AmethystLiang)，[#22173](https://github.com/stablyai/orca/pull/22173)）
- 重构（agent-status）：去掉两个已被替代的 Codex attention 变通（[@brennanb2025](https://github.com/brennanb2025)，[#21844](https://github.com/stablyai/orca/pull/21844)）
- 修复（native-chat）：工具行的悬停揭示范围限定到该行（[@brennanb2025](https://github.com/brennanb2025)，[#21918](https://github.com/stablyai/orca/pull/21918)）
- 成功投递后清除网站标注（[@AmethystLiang](https://github.com/AmethystLiang)，[#22060](https://github.com/stablyai/orca/pull/22060)）

#### 用量报告 {#v1-4-209-usage}

> Codex、OpenCode 与 Claude 的费用总计更完整、保持新鲜。

- 修复：重置后 Codex 用量仍过时（[@OrcaWin](https://github.com/OrcaWin)，[#21748](https://github.com/stablyai/orca/pull/21748)）
- 修复：从 console API 读取 OpenCode Go 用量（[@innocarpe](https://github.com/innocarpe)，[#21462](https://github.com/stablyai/orca/pull/21462)）
- 修复（opencode）：计入 cache 读与写的用量总计（[@nwparker](https://github.com/nwparker)，[#21886](https://github.com/stablyai/orca/pull/21886)）
- 修复（usage）：为 GPT-6 Astra 计价，并声明 Codex 费用总计何时遗漏某模型（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22073](https://github.com/stablyai/orca/pull/22073)）
- 修复（usage）：为 GPT-6 Sol/Luna、Opus 5.5 与 Fable 5.1 计价，并修正 GPT-5.6 费率（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#22350](https://github.com/stablyai/orca/pull/22350)）

#### 终端 {#v1-4-209-terminal}

> 输入、选择、粘贴、组合文本与远程滚动缓冲更一致。

- 修复（terminal）：在打开的同步帧中保持 Pi 输入可见（以及后续 release-branch 修复，见 v1.4.207...v1.4.209）
- 修复（terminal）：重绘时保持拖拽选择稳定（[@nwparker](https://github.com/nwparker)）
- 修复（terminal）：在鼠标跟踪 TUI 中对中键启用原生粘贴抑制（[@buf0-bot](https://github.com/buf0-bot)，[#21834](https://github.com/stablyai/orca/pull/21834)）
- 修复（terminal）：在鼠标跟踪窗格中允许 Shift+中键粘贴（[@buf0-bot](https://github.com/buf0-bot)，[#21858](https://github.com/stablyai/orca/pull/21858)）
- 新增（terminal）：可配置交互式 Unix shell 参数（[@nwparker](https://github.com/nwparker)，[#21904](https://github.com/stablyai/orca/pull/21904)）
- 修复（terminal）：硬重启后保留已停靠远程窗格的滚动缓冲（[#21295](https://github.com/stablyai/orca/pull/21295) by [@nwparker](https://github.com/nwparker) in [#21367](https://github.com/stablyai/orca/pull/21367)）
- 修复（mobile）：让 OMP 终端动量与刷新率无关（[@nwparker](https://github.com/nwparker)，[#21687](https://github.com/stablyai/orca/pull/21687)）

#### 编辑器、工作区与源码管理 {#v1-4-209-editor-workspaces}

> PDF 操作、Markdown 导航、worktree 对话框与源码管理悬停状态更一致。

- 修复（editor）：跨标签与重启保持 PDF 缩放（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21879](https://github.com/stablyai/orca/pull/21879)）
- 修复（editor）：在富 Markdown 模式下打开普通 details 块（[@SahilZ0810](https://github.com/SahilZ0810)，[#19784](https://github.com/stablyai/orca/pull/19784)）
- 修复（editor）：跟随 wiki 链接时保留 Markdown 预览（[@SahilZ0810](https://github.com/SahilZ0810)，[#19790](https://github.com/stablyai/orca/pull/19790)）
- 新建 worktree 对话框滚动时仍保持操作可见（[@nwparker](https://github.com/nwparker)，[#21915](https://github.com/stablyai/orca/pull/21915)）
- 合并源码管理 tooltip，消除重复悬停文案（[@AmethystLiang](https://github.com/AmethystLiang)，[#21733](https://github.com/stablyai/orca/pull/21733)）
- 修复 Antigravity 源码管理模型发现与已退役默认值（[@nwparker](https://github.com/nwparker)，[#21606](https://github.com/stablyai/orca/pull/21606)）

#### 提供方与助手 {#v1-4-209-providers}

> OpenCode、Claude、Pi、Antigravity 与 Devin 启动行为更好。

- 修复（opencode）：保留全局配置发现（[@nwparker](https://github.com/nwparker)，[#21854](https://github.com/stablyai/orca/pull/21854)）
- 修复（opencode）：把共享服务器会话归属到对应窗格（[@werlang](https://github.com/werlang)，[#21577](https://github.com/stablyai/orca/pull/21577)）
- 修复（opencode）：隔离 v1/v2 插件并保留 WSL 配置（[@nwparker](https://github.com/nwparker)，[#21900](https://github.com/stablyai/orca/pull/21900)）
- 修复（opencode）：在纯可执行名下支持 v2 插件（release-branch 修复）
- 修复（opencode2）：自动提交快速命令提示（release-branch 修复）
- 修复（claude）：流式传输提供方历史窗口（[@nwparker](https://github.com/nwparker)，[#21742](https://github.com/stablyai/orca/pull/21742)）
- 修复（claude）：为手动提交预填延续上下文（[@nwparker](https://github.com/nwparker)，[#21912](https://github.com/stablyai/orca/pull/21912)）
- 修复（pi）：异步子 Agent 运行时仍保持窗格可用（[@nwparker](https://github.com/nwparker)，[#21882](https://github.com/stablyai/orca/pull/21882)）
- 修复（orchestration）：Antigravity 多行粘贴的行稳定延迟（[@seonghobae](https://github.com/seonghobae)，[#21665](https://github.com/stablyai/orca/pull/21665)）
- 修复（antigravity）：识别非 Gemini 的 tui-idle 提示（[@innocarpe](https://github.com/innocarpe)，[#21231](https://github.com/stablyai/orca/pull/21231)）
- 修复（devin）：Orca 启动时跳过工作区信任（[@nwparker](https://github.com/nwparker)，[#21925](https://github.com/stablyai/orca/pull/21925)）

#### 远程、SSH、WSL 与 Windows {#v1-4-209-remote}

> 客户材料化、配置文件、重建与连接地板更有韧性。

- （相关远程与可靠性修复已合入，详见官方 Full Changelog）

#### 移动端 {#v1-4-209-mobile}

> 继续 OTA phase C 迁移：浏览器、终端、会话屏、媒体与路由更多走页面壳与平台缝。

- 多项 feat/fix（mobile）：浏览器帧预算、输入走 web 缝、媒体动词、会话屏输入/链接/剪贴板、终端快照、haptics、Mermaid、HTML 预览、听写、源码管理与审查路由、catch-all 页面等（[@Jinwoo-H](https://github.com/Jinwoo-H) 系列 PR）

#### 本地化 {#v1-4-209-i18n}

> 翻译字符串与代码改动保持同步。

- 修复（i18n）：重新生成运行时目录并本地化 cookie 示例（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21889](https://github.com/stablyai/orca/pull/21889)）
- 修复（i18n）：为源码管理 tooltip 键重新生成运行时所需目录（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21942](https://github.com/stablyai/orca/pull/21942)）

**完整变更日志**：[v1.4.207...v1.4.209](https://github.com/stablyai/orca/compare/v1.4.207...v1.4.209)

## v1.4.207 文件搜索不再闪现旧结果 {#v1-4-207}

2026年9月22日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.207)

感谢使用 Orca，也感谢一直以来的支持。

这是 v1.4.206 之上的补丁。

### 简要说明 {#v1-4-207-short}

**文件搜索：** Quick Open 与文件浏览器在加载新搜索时不再闪现上一次的结果。

---

### 产品体验 {#v1-4-207-product}

#### 文件搜索 {#v1-4-207-file-search}

> 新查询在结果到达前不会显示上一次的内容。

- 修复：搜索查询变化时列表仍显示旧结果（[@AmethystLiang](https://github.com/AmethystLiang)，[#22173](https://github.com/stablyai/orca/pull/22173)）

**完整变更日志**：[v1.4.206...v1.4.207](https://github.com/stablyai/orca/compare/v1.4.206...v1.4.207)

## v1.4.206 会话历史可搜，OpenCode 2，用量扫描进 worker {#v1-4-206}
