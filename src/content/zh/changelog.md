# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；打开本页会**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases) 并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.203](#v1-4-203) | 2026年9月15日 | Electron 安全修复，侧栏嵌套，移动推送回归 |
| [v1.4.201](#v1-4-201) | 2026年9月13日 | Native Chat 斜杠命令、后台任务与子 Agent |
| [v1.4.200](#v1-4-200) | 2026年9月11日 | Native Chat 看见子 Agent，编排从创建起就有主人 |

### v1.4.203 · Electron 安全修复，侧栏嵌套，移动推送回归 {#v1-4-203-summary}

2026年9月15日 · [本页全文](#v1-4-203) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.203)

- 可靠性与安全：Electron 已升级以修复 glibc environ use-after-free；浏览器 cookie 迁移更稳；worktree 创建即使后续步骤失败也能干净完成。
- Agent 与聊天：Native Chat 能根据提供方历史恢复因重启滞留的发送；Agent 状态不再依赖运行时保留的行存储。
- 工作区与移动端：文件夹工作区保留已保存的名称与分组；侧栏嵌套更好用；移动端恢复推送、冷启动、通知与 Markdown 行为。

### v1.4.201 · Native Chat 斜杠命令、后台任务与子 Agent {#v1-4-201-summary}

2026年9月13日 · [本页全文](#v1-4-201) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.201)

- Native Chat：任意位置的 `/` 选择器、后台任务条显示正在运行的内容、子 Agent 出现在侧栏子行。
- 桌面端与移动端原生推送曾接入后又撤回，待投递问题排查。
- 中继按区域放置、空闲切换后重连；终端与聊天只挂载可见内容。

### v1.4.200 · Native Chat 看见子 Agent，编排从创建起就有主人 {#v1-4-200-summary}

2026年9月11日 · [本页全文](#v1-4-200) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.200)

- Native Chat：Claude 子 Agent 活动与 Codex 后台任务会显示在聊天里；完成的回合列出变更文件，任务更新流入编写器。
- 编排：Worker 终端从创建起就有主人；启动、移动端输入与旧联邦协调器增加恢复保护。
- 工作区与浏览器：后台浏览器标签打开即加载；创建聊天时保留当前 worktree。

## 完整中文日志 {#full-notes}

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

## v1.4.202 Electron 安全修复，侧栏嵌套，移动推送回归 {#v1-4-202}

> 官方随后下架 v1.4.202，以 [v1.4.203](#v1-4-203) 取代（对照区间 `v1.4.201...v1.4.203`）。下面保留当时的中文底稿便于对照。

2026年9月14日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.202)

### 简要说明 {#v1-4-202-short}

**Electron 与 cookie 的静默丢失修好了。** 桌面端升到 Electron 43.7.0，修复 glibc environ use-after-free；浏览器解码 Chromium SameSite 存储，避免每个配置大约 135 个 cookie 被静默丢掉，cookie 作用域也不再依赖 psl 过期的后缀表。

**侧栏嵌套更容易，worktree 创建更扛得住。** 嵌套保留动画重排；创建后即使后续步骤抛错也会把 worktree 做完。

**移动端推送回来了。** 冷启动关闭一并修掉。本版本还有一轮覆盖聊天、终端、移动端、Git 与中继的大规模性能优化。

### 稳定性：Electron、浏览器与工作区 {#v1-4-202-stability}

> 这些修复改变的是「不会悄悄坏掉」，而不只是看起来更快。

- 修复（deps）：升级 Electron 43.7.0，修复 glibc environ use-after-free（#20081）（[@nwparker](https://github.com/nwparker)，[#20089](https://github.com/stablyai/orca/pull/20089)）
- 修复（browser）：解码 Chromium SameSite 存储值（每个配置约 135 个 cookie 被静默丢失）（[@brennanb2025](https://github.com/brennanb2025)，[#20076](https://github.com/stablyai/orca/pull/20076)）
- 修复（terminal）：计划在激活中途安装时，重新运行推迟的标签准入（[@brennanb2025](https://github.com/brennanb2025)，[#20176](https://github.com/stablyai/orca/pull/20176)）
- 修复（workspaces）：后续步骤抛错时仍完成 worktree 创建（[@brennanb2025](https://github.com/brennanb2025)，[#20175](https://github.com/stablyai/orca/pull/20175)）
- 让侧栏嵌套更容易，同时保留动画重排（[@nwparker](https://github.com/nwparker)，[#20412](https://github.com/stablyai/orca/pull/20412)）
- 修复（browser）：把 cookie 作用域从 psl 过期的后缀表上移开（[@nwparker](https://github.com/nwparker)，[#20421](https://github.com/stablyai/orca/pull/20421)）
- 重构（preload）：删除未使用的原始 electron IPC 桥（[@nwparker](https://github.com/nwparker)，[#20419](https://github.com/stablyai/orca/pull/20419)）
- 修复（tabs）：窗口失焦时取消分屏拖拽（[@OrcaWin](https://github.com/OrcaWin)，[#20323](https://github.com/stablyai/orca/pull/20323)）
- 修复落地页页脚菜单位置（[@nwparker](https://github.com/nwparker)，[#20360](https://github.com/stablyai/orca/pull/20360)）
- 修复（claude-accounts）：路径解析不再创建配置目录（[@makoto-developer](https://github.com/makoto-developer)，[#12309](https://github.com/stablyai/orca/pull/12309)）
- 修复（resource-manager）：显示已保存文件夹的工作区名称与分组（[@OrcaWin](https://github.com/OrcaWin)，[#20324](https://github.com/stablyai/orca/pull/20324)）
- 修复（updater）：从状态栏打开后台检查错误（[@OrcaWin](https://github.com/OrcaWin)，[#20270](https://github.com/stablyai/orca/pull/20270)）
### Native Chat 与 Agent {#v1-4-202-native-chat}

- 重构（agent-status）：删除运行时保留的行 store（PR 1b）（[@brennanb2025](https://github.com/brennanb2025)，[#19785](https://github.com/stablyai/orca/pull/19785)）
- 修复（native-chat）：缩小技能药丸文字（[@brennanb2025](https://github.com/brennanb2025)，[#20254](https://github.com/stablyai/orca/pull/20254)）
- 修复（claude）：拒绝提供方未列出的结构化模型（[@brennanb2025](https://github.com/brennanb2025)，[#19946](https://github.com/stablyai/orca/pull/19946)）
- 重构（native-chat）：让每个结构化分发状态只有一个含义（[@brennanb2025](https://github.com/brennanb2025)，[#20133](https://github.com/stablyai/orca/pull/20133)）
- 新增（native-chat）：对照提供方历史判定因重启滞留的发送（[@brennanb2025](https://github.com/brennanb2025)，[#20139](https://github.com/stablyai/orca/pull/20139)）
- 修复（hooks）：阻止孤立的托管标记消耗用户 TOML（[@nwparker](https://github.com/nwparker)，[#20148](https://github.com/stablyai/orca/pull/20148)）
- 修复（codex）：通过配置镜像对账 marketplace 与插件表（[@nwparker](https://github.com/nwparker)，[#20150](https://github.com/stablyai/orca/pull/20150)）
- 修复（runtime）：仅名称的 Agent 标题不再满足 tui-idle（[@nwparker](https://github.com/nwparker)，[#20155](https://github.com/stablyai/orca/pull/20155)）
- 修复（agent-hooks）：导航 Escape 不再被推断为完成（[@nwparker](https://github.com/nwparker)，[#20149](https://github.com/stablyai/orca/pull/20149)）
- 修复（sidebar）：工作区激活前就显示 Agent 活动（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20398](https://github.com/stablyai/orca/pull/20398)）
- 修复（runtime）：回收已过期的「已证明不存在」叶子 PTY 判定（[@innocarpe](https://github.com/innocarpe)，[#12810](https://github.com/stablyai/orca/pull/12810)）
- 修复（editor）：消除持续数秒的 Markdown 空白段扫描（[@nwparker](https://github.com/nwparker)，[#20231](https://github.com/stablyai/orca/pull/20231)）
- 修复（chat）：按实时历史限制 journal 回放内存（[@nwparker](https://github.com/nwparker)，[#20247](https://github.com/stablyai/orca/pull/20247)）
### 移动端与推送 {#v1-4-202-mobile}

> 上一版撤回的移动端推送在本版本恢复。

- 恢复移动端推送，并修复冷启动关闭（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20068](https://github.com/stablyai/orca/pull/20068)）
- 新增（mobile）：添加带类型的 RPC 操作，并围栏原始请求（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20018](https://github.com/stablyai/orca/pull/20018)）
- 修复：防止移动端 Markdown 渲染陷入无限循环（[@nwparker](https://github.com/nwparker)，[#20313](https://github.com/stablyai/orca/pull/20313)）
- 修复（mobile）：点击通知时复用当前工作区（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20310](https://github.com/stablyai/orca/pull/20310)）
- 性能：消除移动端审查表分隔符的回溯（[@nwparker](https://github.com/nwparker)，[#20317](https://github.com/stablyai/orca/pull/20317)）
- 性能：消除移动端 Markdown 链接后缀的重复扫描（[@nwparker](https://github.com/nwparker)，[#20322](https://github.com/stablyai/orca/pull/20322)）
### 中继、云端与搜索 {#v1-4-202-relay}

- 新增（relay）：在单元放量门禁中支持协议 3（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20174](https://github.com/stablyai/orca/pull/20174)）
- 修复（relay）：限制空闲重新归属轮询，并跳过已禁用的扫描（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20203](https://github.com/stablyai/orca/pull/20203)）
- 修复（relay）：在已完成的放量批次间复用 canary（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20214](https://github.com/stablyai/orca/pull/20214)）
- 修复（cloud）：容忍放量监视中稀疏的 director 错误（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20238](https://github.com/stablyai/orca/pull/20238)）
- 修复（cloud）：诊断被包装的中继信任探测失败（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20403](https://github.com/stablyai/orca/pull/20403)）
- 新增（ai-vault-search）：在索引上运行会话搜索查询引擎（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20029](https://github.com/stablyai/orca/pull/20029)）
### 性能：界面与工作区 {#v1-4-202-perf-ui}

- 性能：推迟已关闭菜单，加快冷启动 worktree 切换（[@nwparker](https://github.com/nwparker)，[#20311](https://github.com/stablyai/orca/pull/20311)）
- 性能（browser）：一次 stdin 编辑填入纯文本字段（[@nwparker](https://github.com/nwparker)，[#20364](https://github.com/stablyai/orca/pull/20364)）
- 性能：每次标签搜索只规范化一次标题证据（[@nwparker](https://github.com/nwparker)，[#20331](https://github.com/stablyai/orca/pull/20331)）
- 性能（files）：跳过未使用的 Quick Open 字节记账（[@OrcaWin](https://github.com/OrcaWin)，[#20216](https://github.com/stablyai/orca/pull/20216)）
- 性能（relay）：复用主机数据附件所有者，不再拷贝清单（[@nwparker](https://github.com/nwparker)，[#20219](https://github.com/stablyai/orca/pull/20219)）
- 性能（browser）：跳过不必要的清单压缩规划（[@OrcaWin](https://github.com/OrcaWin)，[#20221](https://github.com/stablyai/orca/pull/20221)）
- 性能（session）：复用已持久化的标签页成员集合（[@OrcaWin](https://github.com/OrcaWin)，[#20223](https://github.com/stablyai/orca/pull/20223)）
- 性能：JSON 结构检查时跳过普通字符串（[@OrcaWin](https://github.com/OrcaWin)，[#20232](https://github.com/stablyai/orca/pull/20232)）
- 性能：避免重扫不完整的浏览器 sidecar 响应（[@OrcaWin](https://github.com/OrcaWin)，[#20242](https://github.com/stablyai/orca/pull/20242)）
- 性能：增量统计本地 RPC 请求字节（[@OrcaWin](https://github.com/OrcaWin)，[#20243](https://github.com/stablyai/orca/pull/20243)）
- 性能：在请求的出现次数处停止标题查找（[@OrcaWin](https://github.com/OrcaWin)，[#20246](https://github.com/stablyai/orca/pull/20246)）
- 性能：匹配后再格式化浏览器搜索行（[@OrcaWin](https://github.com/OrcaWin)，[#20248](https://github.com/stablyai/orca/pull/20248)）
- 性能：停止准备超出上限的面板查询（[@OrcaWin](https://github.com/OrcaWin)，[#20250](https://github.com/stablyai/orca/pull/20250)）
- 性能：避免重复的仓库目录探测（[@OrcaWin](https://github.com/OrcaWin)，[#20253](https://github.com/stablyai/orca/pull/20253)）
- 性能：嵌套仓库忽略模式只编译一次（[@OrcaWin](https://github.com/OrcaWin)，[#20256](https://github.com/stablyai/orca/pull/20256)）
- 性能：避免反复规范化模型定价名称（[@OrcaWin](https://github.com/OrcaWin)，[#20257](https://github.com/stablyai/orca/pull/20257)）
- 性能（skills）：每次发现为源所有权计数建索引（[@OrcaWin](https://github.com/OrcaWin)，[#20259](https://github.com/stablyai/orca/pull/20259)）
- 性能（plugins）：达到消息大小限制时停止集合遍历（[@nwparker](https://github.com/nwparker)，[#20260](https://github.com/stablyai/orca/pull/20260)）
- 性能：规范化字节一致时复用技能文件摘要（[@OrcaWin](https://github.com/OrcaWin)，[#20268](https://github.com/stablyai/orca/pull/20268)）
- 性能：跳过解码已丢弃的诊断错误体（[@OrcaWin](https://github.com/OrcaWin)，[#20276](https://github.com/stablyai/orca/pull/20276)）
- 性能：智能排序存活检查时避免展平标签页（[@OrcaWin](https://github.com/OrcaWin)，[#20279](https://github.com/stablyai/orca/pull/20279)）
- 性能：接受符合最坏字节上界的 UTF-8 文本（[@OrcaWin](https://github.com/OrcaWin)，[#20286](https://github.com/stablyai/orca/pull/20286)）
- 性能：限制富 Markdown 注释检测与保留扫描（[@nwparker](https://github.com/nwparker)，[#20287](https://github.com/stablyai/orca/pull/20287)）
- 性能：复用诊断包字节计数（[@OrcaWin](https://github.com/OrcaWin)，[#20292](https://github.com/stablyai/orca/pull/20292)）
- 性能：清单文本文件只规范化一次（[@OrcaWin](https://github.com/OrcaWin)，[#20294](https://github.com/stablyai/orca/pull/20294)）
- 性能：重置时间戳转换时复用格式化器（[@OrcaWin](https://github.com/OrcaWin)，[#20295](https://github.com/stablyai/orca/pull/20295)）
- 性能：需要时再建立回滚修剪索引（[@OrcaWin](https://github.com/OrcaWin)，[#20297](https://github.com/stablyai/orca/pull/20297)）
- 性能（browser）：为 iframe 会话引用建索引以便快照查找（[@nwparker](https://github.com/nwparker)，[#20300](https://github.com/stablyai/orca/pull/20300)）
- 性能：投影时复用已计算的项目身份（[@OrcaWin](https://github.com/OrcaWin)，[#20303](https://github.com/stablyai/orca/pull/20303)）
- 性能：超出预算即停止归档大小扫描（[@OrcaWin](https://github.com/OrcaWin)，[#20304](https://github.com/stablyai/orca/pull/20304)）
- 性能：日志投影中避免按条目分配数组（[@OrcaWin](https://github.com/OrcaWin)，[#20305](https://github.com/stablyai/orca/pull/20305)）
- 性能：合并时复用 Windows PATH 规范化（[@OrcaWin](https://github.com/OrcaWin)，[#20309](https://github.com/stablyai/orca/pull/20309)）
- 性能：查找路径 basename 时不拆分全部段（[@OrcaWin](https://github.com/OrcaWin)，[#20312](https://github.com/stablyai/orca/pull/20312)）
- 性能：无转义的 Windows 参数走快速路径（[@OrcaWin](https://github.com/OrcaWin)，[#20318](https://github.com/stablyai/orca/pull/20318)）
- 性能（checks）：限制日志摘录的字节上限检查（[@OrcaWin](https://github.com/OrcaWin)，[#20319](https://github.com/stablyai/orca/pull/20319)）
- 性能：用原生换行搜索剥离富 Markdown 代码（[@nwparker](https://github.com/nwparker)，[#20320](https://github.com/stablyai/orca/pull/20320)）
- 性能：解析编辑补丁前先拒绝文件计数标签（[@OrcaWin](https://github.com/OrcaWin)，[#20330](https://github.com/stablyai/orca/pull/20330)）
- 性能：选择匹配的模型 ID 时不排序（[@OrcaWin](https://github.com/OrcaWin)，[#20334](https://github.com/stablyai/orca/pull/20334)）
- 性能：搜索收尾时去掉重复的空文件过滤（[@OrcaWin](https://github.com/OrcaWin)，[#20335](https://github.com/stablyai/orca/pull/20335)）
- 性能：复用已接受的项目组 ID 做父级校验（[@OrcaWin](https://github.com/OrcaWin)，[#20341](https://github.com/stablyai/orca/pull/20341)）
- 性能：每次排序只计算一次检查严重性（[@OrcaWin](https://github.com/OrcaWin)，[#20342](https://github.com/stablyai/orca/pull/20342)）
- 性能：统计机器人评论时不产生过滤数组（[@OrcaWin](https://github.com/OrcaWin)，[#20343](https://github.com/stablyai/orca/pull/20343)）
- 性能：中继排空迁移清单只索引一次（[@nwparker](https://github.com/nwparker)，[#20344](https://github.com/stablyai/orca/pull/20344)）
- 性能：共享 SHA-256 块中避免类型化数组迭代（[@OrcaWin](https://github.com/OrcaWin)，[#20346](https://github.com/stablyai/orca/pull/20346)）
- 性能：渲染器回退复用共享 SHA-256（[@OrcaWin](https://github.com/OrcaWin)，[#20347](https://github.com/stablyai/orca/pull/20347)）
- 性能（computer）：避免重扫分片的原生提供方回复（[@OrcaWin](https://github.com/OrcaWin)，[#20348](https://github.com/stablyai/orca/pull/20348)）
- 性能：Quick Open 打分时跳过不匹配的跨度（[@nwparker](https://github.com/nwparker)，[#20349](https://github.com/stablyai/orca/pull/20349)）
- 性能：跳过被支配的快捷命令搜索字段（[@nwparker](https://github.com/nwparker)，[#20352](https://github.com/stablyai/orca/pull/20352)）
- 性能：Agent 识别时复用规范化的可执行文件（[@OrcaWin](https://github.com/OrcaWin)，[#20353](https://github.com/stablyai/orca/pull/20353)）
- 性能（localization）：正则匹配前预过滤缺失品牌（[@OrcaWin](https://github.com/OrcaWin)，[#20354](https://github.com/stablyai/orca/pull/20354)）
- 性能：避免拷贝单 chunk 进程输出（[@OrcaWin](https://github.com/OrcaWin)，[#20355](https://github.com/stablyai/orca/pull/20355)）
- 性能（checks）：限制更早错误上下文的收集（[@OrcaWin](https://github.com/OrcaWin)，[#20211](https://github.com/stablyai/orca/pull/20211)）
- 性能（agents）：避免克隆谱系祖先集合（[@OrcaWin](https://github.com/OrcaWin)，[#20236](https://github.com/stablyai/orca/pull/20236)）
- 性能（plugins）：每个所有者只对账一次快捷键冲突（[@nwparker](https://github.com/nwparker)，[#20237](https://github.com/stablyai/orca/pull/20237)）
- 性能：避免重扫不完整的 transcript 记录（[@OrcaWin](https://github.com/OrcaWin)，[#20239](https://github.com/stablyai/orca/pull/20239)）
- 性能：用原生换行搜索 Markdown 审查摘录（[@nwparker](https://github.com/nwparker)，[#20245](https://github.com/stablyai/orca/pull/20245)）
- 性能：审查确认摘要在第一行可读处停止（[@nwparker](https://github.com/nwparker)，[#20263](https://github.com/stablyai/orca/pull/20263)）
- 性能：消除面板短语放置的二次方扫描（[@nwparker](https://github.com/nwparker)，[#20306](https://github.com/stablyai/orca/pull/20306)）
- 性能（plugins）：按命令为贡献的键绑定建索引（[@nwparker](https://github.com/nwparker)，[#20241](https://github.com/stablyai/orca/pull/20241)）
- 性能：循环 Agent 谱系清理中去掉重复的兄弟扫描（[@nwparker](https://github.com/nwparker)，[#20302](https://github.com/stablyai/orca/pull/20302)）
- 性能：复用待处理文件系统监视器的防抖定时器（[@OrcaWin](https://github.com/OrcaWin)，[#20264](https://github.com/stablyai/orca/pull/20264)）
- 性能：避免重扫不完整的 Windows 桌面响应（[@OrcaWin](https://github.com/OrcaWin)，[#20235](https://github.com/stablyai/orca/pull/20235)）
- 性能：编码时跳过不可能的行内 HTML 注释匹配（[@nwparker](https://github.com/nwparker)，[#20293](https://github.com/stablyai/orca/pull/20293)）
- 性能：限制工具预览的空白规范化（[@nwparker](https://github.com/nwparker)，[#20332](https://github.com/stablyai/orca/pull/20332)）
- 性能（relay）：每对百分位只排序一次延迟样本（[@nwparker](https://github.com/nwparker)，[#20427](https://github.com/stablyai/orca/pull/20427)）
- 性能（skills）：测试 Agent 所有权时不建去重列表（[@nwparker](https://github.com/nwparker)，[#20428](https://github.com/stablyai/orca/pull/20428)）
- 性能：加速可取消的远程 transcript 行扫描（[@OrcaWin](https://github.com/OrcaWin)，[#20351](https://github.com/stablyai/orca/pull/20351)）
- 性能（tooling）：源扫描时复用目录条目类型（[@OrcaWin](https://github.com/OrcaWin)，[#20212](https://github.com/stablyai/orca/pull/20212)）
### 性能：终端、SSH 与运行时 {#v1-4-202-perf-terminal}

- 性能（wsl）：释放环境探测截止定时器（[@OrcaWin](https://github.com/OrcaWin)，[#20207](https://github.com/stablyai/orca/pull/20207)）
- 性能（daemon）：限制立即刷新队列扫描（[@OrcaWin](https://github.com/OrcaWin)，[#20209](https://github.com/stablyai/orca/pull/20209)）
- 性能：为待处理的终端重连标签查找建索引（[@OrcaWin](https://github.com/OrcaWin)，[#20229](https://github.com/stablyai/orca/pull/20229)）
- 性能（native）：避免对快照值做两次消毒（[@nwparker](https://github.com/nwparker)，[#20271](https://github.com/stablyai/orca/pull/20271)）
- 性能（ipc）：限制 SSH ACK 批选择扫描（[@nwparker](https://github.com/nwparker)，[#20288](https://github.com/stablyai/orca/pull/20288)）
- 性能：避免拷贝已完成的终端源范围（[@OrcaWin](https://github.com/OrcaWin)，[#20289](https://github.com/stablyai/orca/pull/20289)）
- 性能（ssh）：跳过等待 ACK 发布的终端源跨度（[@OrcaWin](https://github.com/OrcaWin)，[#20290](https://github.com/stablyai/orca/pull/20290)）
- 性能（daemon）：复用已编码的未拆分 NDJSON 帧（[@nwparker](https://github.com/nwparker)，[#20298](https://github.com/stablyai/orca/pull/20298)）
- 性能（ssh）：清理标签映射只拷贝一次（[@OrcaWin](https://github.com/OrcaWin)，[#20315](https://github.com/stablyai/orca/pull/20315)）
- 性能（terminal）：复用有界的原生快照字节检查（[@OrcaWin](https://github.com/OrcaWin)，[#20333](https://github.com/stablyai/orca/pull/20333)）
- 性能：收集终端快照回放时不使用包装数组（[@OrcaWin](https://github.com/OrcaWin)，[#20338](https://github.com/stablyai/orca/pull/20338)）
- 性能（android）：排队分片的 scrcpy 视频包（[@OrcaWin](https://github.com/OrcaWin)，[#20230](https://github.com/stablyai/orca/pull/20230)）
- 性能（mobile）：释放已消费的终端写队列槽位（[@nwparker](https://github.com/nwparker)，[#20430](https://github.com/stablyai/orca/pull/20430)）
- 性能：过滤仅原生路径时跳过 WSL 发现（[@OrcaWin](https://github.com/OrcaWin)，[#20266](https://github.com/stablyai/orca/pull/20266)）
### 性能：移动端、聊天与数据 {#v1-4-202-perf-data}

- 性能：为 Hermes 会话关联建索引，不再重扫历史（[@nwparker](https://github.com/nwparker)，[#20275](https://github.com/stablyai/orca/pull/20275)）
- 性能（mobile）：每个候选项只规范化一次历史作用域路径（[@nwparker](https://github.com/nwparker)，[#20210](https://github.com/stablyai/orca/pull/20210)）
- 性能（automations）：仅计数的 Hermes 历史跳过排序（[@OrcaWin](https://github.com/OrcaWin)，[#20213](https://github.com/stablyai/orca/pull/20213)）
- 性能（chat）：复用流式 delta 的字节长度（[@OrcaWin](https://github.com/OrcaWin)，[#20215](https://github.com/stablyai/orca/pull/20215)）
- 性能（mobile）：退格时避免物化输入字符（[@OrcaWin](https://github.com/OrcaWin)，[#20220](https://github.com/stablyai/orca/pull/20220)）
- 性能（usage）：空明细时跳过会话扫描（[@OrcaWin](https://github.com/OrcaWin)，[#20222](https://github.com/stablyai/orca/pull/20222)）
- 性能（diff）：搜索时跳过未使用的扩展名提取（[@OrcaWin](https://github.com/OrcaWin)，[#20225](https://github.com/stablyai/orca/pull/20225)）
- 性能（mobile）：限制自动完成子串保留（[@OrcaWin](https://github.com/OrcaWin)，[#20226](https://github.com/stablyai/orca/pull/20226)）
- 性能（history）：缓存数值型 transcript 时间线边界（[@OrcaWin](https://github.com/OrcaWin)，[#20244](https://github.com/stablyai/orca/pull/20244)）
- 性能（history）：线性扫描旧的备用屏幕标记（[@OrcaWin](https://github.com/OrcaWin)，[#20267](https://github.com/stablyai/orca/pull/20267)）
- 性能：技能 Git 树排序键只编码一次（[@OrcaWin](https://github.com/OrcaWin)，[#20272](https://github.com/stablyai/orca/pull/20272)）
- 性能：超出预览上限后停止构建聊天 diff 分区（[@OrcaWin](https://github.com/OrcaWin)，[#20321](https://github.com/stablyai/orca/pull/20321)）
- 性能：统计聊天工具调用时不产生过滤数组（[@OrcaWin](https://github.com/OrcaWin)，[#20328](https://github.com/stablyai/orca/pull/20328)）
- 性能：避免反复序列化历史页字节（[@nwparker](https://github.com/nwparker)，[#20337](https://github.com/stablyai/orca/pull/20337)）
- 性能：从最后一行开始扫描聊天活动文本（[@nwparker](https://github.com/nwparker)，[#20356](https://github.com/stablyai/orca/pull/20356)）
- 性能（mobile）：诊断时复用 UTF-8 前缀截断（[@OrcaWin](https://github.com/OrcaWin)，[#20358](https://github.com/stablyai/orca/pull/20358)）
- 性能（mobile）：源代码管理排序间复用数值 collator（[@nwparker](https://github.com/nwparker)，[#20224](https://github.com/stablyai/orca/pull/20224)）
- 性能（mobile）：预计算任务排序键并复用仓库对照（[@nwparker](https://github.com/nwparker)，[#20233](https://github.com/stablyai/orca/pull/20233)）
- 性能（ai-vault）：增量去重会话扫描批次（[@OrcaWin](https://github.com/OrcaWin)，[#20255](https://github.com/stablyai/orca/pull/20255)）
- 性能（git）：批量丢弃路径只分类一次（[@nwparker](https://github.com/nwparker)，[#20274](https://github.com/stablyai/orca/pull/20274)）
- 性能：避免移动端审查中反复扫描未闭合标签（[@nwparker](https://github.com/nwparker)，[#20329](https://github.com/stablyai/orca/pull/20329)）
- 性能（mobile）：预计算 Linear 议题排序键（[@nwparker](https://github.com/nwparker)，[#20249](https://github.com/stablyai/orca/pull/20249)）
- 性能（chat）：在记录边界拼接 transcript 行片段（[@OrcaWin](https://github.com/OrcaWin)，[#20278](https://github.com/stablyai/orca/pull/20278)）
- 性能（cmd-j）：单调扫描短语词边界（[@nwparker](https://github.com/nwparker)，[#20282](https://github.com/stablyai/orca/pull/20282)）
- 性能（ai-vault）：为扫描截止统计最近会话（[@OrcaWin](https://github.com/OrcaWin)，[#20301](https://github.com/stablyai/orca/pull/20301)）
- 性能（mobile）：跳过成功的重复连接日志保存（[@nwparker](https://github.com/nwparker)，[#20252](https://github.com/stablyai/orca/pull/20252)）
- 性能（git）：排序远程前拒绝非 HEAD 引用（[@nwparker](https://github.com/nwparker)，[#20429](https://github.com/stablyai/orca/pull/20429)）
- 性能（git）：每次操作只规范化一次被跟踪的丢弃路径（[@nwparker](https://github.com/nwparker)，[#20299](https://github.com/stablyai/orca/pull/20299)）
- 性能（mobile）：在列表与看板间复用 Linear 分组（[@nwparker](https://github.com/nwparker)，[#20431](https://github.com/stablyai/orca/pull/20431)）
- 性能（mobile）：在列表与看板分组间复用 Linear 排序（[@nwparker](https://github.com/nwparker)，[#20314](https://github.com/stablyai/orca/pull/20314)）
- 性能（ai-vault）：无限制会话扫描中限制每行簿记（[@nwparker](https://github.com/nwparker)，[#20291](https://github.com/stablyai/orca/pull/20291)）
### 可靠性、CI 与维护 {#v1-4-202-reliability}

- 修复（e2e）：去掉四处真实 flaky 来源和一处光标竞态（[@brennanb2025](https://github.com/brennanb2025)，[#20169](https://github.com/stablyai/orca/pull/20169)）
- 修复（source-control）：把 Antigravity 提示传给 agy --print（[@nwparker](https://github.com/nwparker)，[#20147](https://github.com/stablyai/orca/pull/20147)）
- 修复（e2e）：在已映射窗口上运行 worktree 首屏探测（[@brennanb2025](https://github.com/brennanb2025)，[#20197](https://github.com/stablyai/orca/pull/20197)）
- 测试：用可观察的就绪替换固定 UI 等待（[@nwparker](https://github.com/nwparker)，[#20369](https://github.com/stablyai/orca/pull/20369)）
- CI：在关闭检查间复用不可变的包安装（[@nwparker](https://github.com/nwparker)，[#20368](https://github.com/stablyai/orca/pull/20368)）
- CI：收窄 pnpm 缓存键，并使用浅克隆开发检出（[@nwparker](https://github.com/nwparker)，[#20370](https://github.com/stablyai/orca/pull/20370)）
- CI：按已记录耗时均衡现有单元与 E2E 分片（[@nwparker](https://github.com/nwparker)，[#20367](https://github.com/stablyai/orca/pull/20367)）
- 重构（renderer）：改进 IPC 错误处理，区分钳位与非钳位变体（[@AmethystLiang](https://github.com/AmethystLiang)，[#20340](https://github.com/stablyai/orca/pull/20340)）
- 修复（ai-vault）：query_only 设置失败时关闭 OpenCode 句柄（[@bbingz](https://github.com/bbingz)，[#14134](https://github.com/stablyai/orca/pull/14134)）
- 杂项：删除 20.7 MiB 重复且未使用的媒体（[@nwparker](https://github.com/nwparker)，[#20416](https://github.com/stablyai/orca/pull/20416)）
- 重构（windows）：把注册表插件作为 @orca/windows-registry 内置（[@nwparker](https://github.com/nwparker)，[#20438](https://github.com/stablyai/orca/pull/20438)）
- 测试（relay）：为单次遍历的主机数据所有者查找提供差分覆盖（[@nwparker](https://github.com/nwparker)，[#20426](https://github.com/stablyai/orca/pull/20426)）
- 杂项（deps）：将 serve-sim 钉到精确版本（[@nwparker](https://github.com/nwparker)，[#20446](https://github.com/stablyai/orca/pull/20446)）
- 为类型断言添加代码质量 lint（[@AmethystLiang](https://github.com/AmethystLiang)，[#19462](https://github.com/stablyai/orca/pull/19462)）
- 修复（ci）：在 node-gyp 实际写入处缓存内置插件（[@nwparker](https://github.com/nwparker)，[#20445](https://github.com/stablyai/orca/pull/20445)）
- 修复（ci）：匹配被截断的 windows-process-tree 虚拟存储目录（[@nwparker](https://github.com/nwparker)，[#20447](https://github.com/stablyai/orca/pull/20447)）
- 构建（macos）：并行化原生辅助程序，并支持完整取消（[@espetro](https://github.com/espetro)，[#19651](https://github.com/stablyai/orca/pull/19651)）
- 将原生依赖安装缩减到当前主机平台（[@nwparker](https://github.com/nwparker)，[#20420](https://github.com/stablyai/orca/pull/20420)）
- 修复（skills）：驱逐已移除的运行时发现缓存（[@bbingz](https://github.com/bbingz)，[#11489](https://github.com/stablyai/orca/pull/11489)）
- 修复（automations）：隔离调度器 tick，并拒绝过大的 cron 步长（[@nwparker](https://github.com/nwparker)，[#20152](https://github.com/stablyai/orca/pull/20152)）
- 修复（ai-vault）：transcript 被改写为原大小时重新读取（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20261](https://github.com/stablyai/orca/pull/20261)）
- 测试（rpc）：添加编译期参数目录对等门禁（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20281](https://github.com/stablyai/orca/pull/20281)）
- 测试（scripts）：加宽 Windows shim 棘轮，以捕获 package bin 启动（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20285](https://github.com/stablyai/orca/pull/20285)）
### 新贡献者 {#v1-4-202-contributors}

- [@espetro](https://github.com/espetro) 首次贡献于 [#19651](https://github.com/stablyai/orca/pull/19651)

**完整变更对照：** [v1.4.201...v1.4.202](https://github.com/stablyai/orca/compare/v1.4.201...v1.4.202)

## v1.4.201 Native Chat 斜杠命令、后台任务与子 Agent {#v1-4-201}

2026年9月13日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.201)

### 简要说明 {#v1-4-201-short}

**Native Chat 更能读懂 Agent 在做什么。** 提示任意位置都是同一个 `/` 选择器；后台任务条会写出正在运行的内容；子 Agent 出现在侧栏子行，和 CLI Agent 一样。发送起就显示 Claude 正在工作，Thinking 表示推理。

**移动端推送曾接入后又撤回。** 桌面端与配对手机走过原生推送网关（1/3、2/3），本版本因投递问题整段回退，不包含在可用功能里。

**中继按区域放置，空闲切换后重连。** 终端在 worktree 切换时只挂载可见窗格；聊天只挂载视口附近的 transcript 行。

### Native Chat 与 Agent {#v1-4-201-native-chat}

> 斜杠命令、后台任务、子 Agent 与回合状态都在对话里可见。

- 修复（native-chat）：从发送起就显示 Claude 正在工作，而不是等提供方回显（[@brennanb2025](https://github.com/brennanb2025)，[#19822](https://github.com/stablyai/orca/pull/19822)）
- 修复（native-chat）：每个 Agent、提示任意位置都用同一个 / 选择器（[@brennanb2025](https://github.com/brennanb2025)，[#19832](https://github.com/stablyai/orca/pull/19832)）
- 新增（native-chat）：后台任务条会说明正在运行什么（[@brennanb2025](https://github.com/brennanb2025)，[#19311](https://github.com/stablyai/orca/pull/19311)）
- 修复（native-chat）：防止旧页面在 transcript 上打出空洞（[@nwparker](https://github.com/nwparker)，[#19845](https://github.com/stablyai/orca/pull/19845)）
- 重构（agent-status）：将结构化会话发布到 hook 服务器 store（[@brennanb2025](https://github.com/brennanb2025)，[#19683](https://github.com/stablyai/orca/pull/19683)）
- 新增（native-chat）：显示实时后台工作，并按类型命名每一行（[@brennanb2025](https://github.com/brennanb2025)，[#19705](https://github.com/stablyai/orca/pull/19705)）
- 新增（sidebar）：将 Native Chat 子 Agent 显示为侧栏子行，与 CLI Agent 一致（[@brennanb2025](https://github.com/brennanb2025)，[#19807](https://github.com/stablyai/orca/pull/19807)）
- 新增（native-chat）：聊天出现时聚焦消息框（[@brennanb2025](https://github.com/brennanb2025)，[#19868](https://github.com/stablyai/orca/pull/19868)）
- 测试（native-chat）：按结构化问题拆分 fixture（[@brennanb2025](https://github.com/brennanb2025)，[#19924](https://github.com/stablyai/orca/pull/19924)）
- 使结构化回合生命周期行持久化，以便完成时长得以保留（[@brennanb2025](https://github.com/brennanb2025)，[#19695](https://github.com/stablyai/orca/pull/19695)）
- 重构（native-chat）：统一 Agent 会话启动，并在结构化聊天中打开草稿（[@brennanb2025](https://github.com/brennanb2025)，[#19681](https://github.com/stablyai/orca/pull/19681)）
- 修复（native-chat）：绝不把未列出的模型收为启动默认（[@brennanb2025](https://github.com/brennanb2025)，[#19854](https://github.com/stablyai/orca/pull/19854)）
- 修复（native-chat）：在准入时结算结构化发送，而不是等提供方回显（[@brennanb2025](https://github.com/brennanb2025)，[#19863](https://github.com/stablyai/orca/pull/19863)）
- 修复（sidebar）：允许 Agent 行显示提供方自己的会话标题（[@brennanb2025](https://github.com/brennanb2025)，[#19936](https://github.com/stablyai/orca/pull/19936)）
- 新增（native-chat）：记录 Agent 会话的提供方名称（[@brennanb2025](https://github.com/brennanb2025)，[#19908](https://github.com/stablyai/orca/pull/19908)）
- 修复（native-chat）：把 Agent 实现的斜杠命令转交给 Agent（[@brennanb2025](https://github.com/brennanb2025)，[#19929](https://github.com/stablyai/orca/pull/19929)）
- 新增（native-chat）：用提供方自己的报告描述斜杠命令（[@brennanb2025](https://github.com/brennanb2025)，[#19928](https://github.com/stablyai/orca/pull/19928)）
- 性能（native-chat）：只挂载视口附近的 transcript 行（[@brennanb2025](https://github.com/brennanb2025)，[#19869](https://github.com/stablyai/orca/pull/19869)）
- 性能（native-chat）：限制结构化会话路径上保留的条目（[@nwparker](https://github.com/nwparker)，[#19841](https://github.com/stablyai/orca/pull/19841)）
- 修复（native-chat）：只显示一个进行中回合指示器，并将 Thinking 表示为推理（[@brennanb2025](https://github.com/brennanb2025)，[#19977](https://github.com/stablyai/orca/pull/19977)）
- 新增（native-chat）：显示 Codex 目标被设置、更改或清除（[@brennanb2025](https://github.com/brennanb2025)，[#19923](https://github.com/stablyai/orca/pull/19923)）
### 移动端与推送 {#v1-4-201-mobile}

> 原生推送合入后又整段撤回，待投递问题排查——不在本构建的可用功能中。

- 修复（mobile）：Native Chat 在 iOS 上启用无需补丁的文本选择（[@brennanb2025](https://github.com/brennanb2025)，[#19769](https://github.com/stablyai/orca/pull/19769)）
- 修复（push）：隔离部署，并在激活前校验候选（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19771](https://github.com/stablyai/orca/pull/19771)）
- 新增（cloud）：原生推送网关与专用基础设施（1/3）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19912](https://github.com/stablyai/orca/pull/19912)）
- 重构（mobile）：从路由中抽出设置、诊断与编辑器文档屏幕（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19675](https://github.com/stablyai/orca/pull/19675)）
- 新增（desktop）：原生移动推送集成（2/3）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19935](https://github.com/stablyai/orca/pull/19935)）
- 重构（mobile）：为手写的 RPC 接受策略调用点命名（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19960](https://github.com/stablyai/orca/pull/19960)）
- 新增（mobile）：从已配对桌面接收原生推送通知（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19951](https://github.com/stablyai/orca/pull/19951)）
- 回退移动端推送放量，待投递问题排查（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20040](https://github.com/stablyai/orca/pull/20040)）
- 修复（push）：离线时保留互不相同的 Android 提醒（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20066](https://github.com/stablyai/orca/pull/20066)）
- 修复（mobile）：露出主机创建警告与终端创建错误（[@brennanb2025](https://github.com/brennanb2025)，[#20125](https://github.com/stablyai/orca/pull/20125)）
### 中继、云端与编排 {#v1-4-201-relay}

- 修复（relay）：失败的重新归属轮询不计入持久失败预算（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19915](https://github.com/stablyai/orca/pull/19915)）
- 修复（orchestration）：将 @ 组地址限定到发送方的 Run（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19783](https://github.com/stablyai/orca/pull/19783)）
- 修复（orchestration）：重新校验尝试的 Enter，而不是再次发送（[@brennanb2025](https://github.com/brennanb2025)，[#19911](https://github.com/stablyai/orca/pull/19911)）
- 新增（relay）：仅在源空闲时校正区域放置（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20105](https://github.com/stablyai/orca/pull/20105)）
- 测试（relay）：加固区域重新归属的竞态覆盖（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20136](https://github.com/stablyai/orca/pull/20136)）
- 新增（desktop）：测量中继区域，并在空闲切换后重连（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20106](https://github.com/stablyai/orca/pull/20106)）
- 修复（runtime）：由连接自行负责主机状态恢复（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20003](https://github.com/stablyai/orca/pull/20003)）
- 修复远程托管审查的浏览器路由（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20030](https://github.com/stablyai/orca/pull/20030)）
### 工作区、浏览器与编辑器 {#v1-4-201-workspaces}

- 修复（browser）：恢复 Chrome 形态的浏览器身份（STA-7147）（[@brennanb2025](https://github.com/brennanb2025)，[#19927](https://github.com/stablyai/orca/pull/19927)）
- 修复（editor）：让 Markdown 图片行内化，使段落保持 schema 有效（[@OrcaWin](https://github.com/OrcaWin)，[#19746](https://github.com/stablyai/orca/pull/19746)）
- 重构（renderer）：共享路径头部省略（[@AmethystLiang](https://github.com/AmethystLiang)，[#19938](https://github.com/stablyai/orca/pull/19938)）
- 新增（cmd-j）：紧凑的面板位置布局（[@AmethystLiang](https://github.com/AmethystLiang)，[#19939](https://github.com/stablyai/orca/pull/19939)）
- 修复（workspaces）：仅在空白选择时播种 shell（[@brennanb2025](https://github.com/brennanb2025)，[#19940](https://github.com/stablyai/orca/pull/19940)）
- 对已配对的 Web 客户端隐藏桌面主题导入（[@OrcaWin](https://github.com/OrcaWin)，[#20015](https://github.com/stablyai/orca/pull/20015)）
- 修复（worktrees）：删除时关闭空闲的结构化聊天，而不是拒绝（[@brennanb2025](https://github.com/brennanb2025)，[#19762](https://github.com/stablyai/orca/pull/19762)）
### 终端与运行时 {#v1-4-201-terminal}

- 性能（terminal）：越过已携带的帧继续搜索 OSC 终止符（[@nwparker](https://github.com/nwparker)，[#19839](https://github.com/stablyai/orca/pull/19839)）
- 性能（terminal）：两个扫描器共用一张 ESC 分发表（[@nwparker](https://github.com/nwparker)，[#19842](https://github.com/stablyai/orca/pull/19842)）
- 性能（terminal）：worktree 切换时停止重建每个工作区的集合（[@nwparker](https://github.com/nwparker)，[#19975](https://github.com/stablyai/orca/pull/19975)）
- 性能（terminal）：对回放为空的窗格不再花费 reveal-restore 帧（[@nwparker](https://github.com/nwparker)，[#19972](https://github.com/stablyai/orca/pull/19972)）
- 修复（daemon）：为持久化的终端历史固定仅所有者模式（[@nwparker](https://github.com/nwparker)，[#19954](https://github.com/stablyai/orca/pull/19954)）
- 修复（pi）：跨重载退役过期的 spinner 与提示定时器（[@nwparker](https://github.com/nwparker)，[#20035](https://github.com/stablyai/orca/pull/20035)）
- 修复（terminal）：阻止恢复预算在重新挂载时自我擦除（[@OrcaWin](https://github.com/OrcaWin)，[#19745](https://github.com/stablyai/orca/pull/19745)）
- 修复（monaco）：限制 svelte/astro/vue 语法中的嵌入语言递归（[@OrcaWin](https://github.com/OrcaWin)，[#19748](https://github.com/stablyai/orca/pull/19748)）
- 修复（runtime）：与 Agent 无关的 wait-blocked 原因（[@OrcaWin](https://github.com/OrcaWin)，[#19749](https://github.com/stablyai/orca/pull/19749)）
- 性能（terminal）：worktree 切换时只挂载可见窗格（[@nwparker](https://github.com/nwparker)，[#20034](https://github.com/stablyai/orca/pull/20034)）
- 修复（pi）：继承的所有者 PID 已死时认领状态窗格（STA-5245）（[@brennanb2025](https://github.com/brennanb2025)，[#16631](https://github.com/stablyai/orca/pull/16631)）
- 修复（pi）：为源代码管理生成加载扩展提供方（[@nwparker](https://github.com/nwparker)，[#20070](https://github.com/stablyai/orca/pull/20070)）
- 修复（terminal）：故意休眠的工作区保持冷态，直到被唤醒（[@nwparker](https://github.com/nwparker)，[#20075](https://github.com/stablyai/orca/pull/20075)）
- 性能（daemon）：停止扫描每个单元格去找不可能存在的 OSC 链接（[@nwparker](https://github.com/nwparker)，[#20077](https://github.com/stablyai/orca/pull/20077)）
- 修复（terminal）：把恢复账本移到标签行，并以观察到的结果为门禁（[@nwparker](https://github.com/nwparker)，[#20025](https://github.com/stablyai/orca/pull/20025)）
### 搜索、RPC 与维护 {#v1-4-201-search}

- 修复：每个版本只提示一次意外登出的 Cloud 用户（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19966](https://github.com/stablyai/orca/pull/19966)）
- 新增（ai-vault-search）：将会话搜索索引作为 transcript 读取器的消费者（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19687](https://github.com/stablyai/orca/pull/19687)）
- 新增（rpc）：从主机注册表生成共享参数目录，以解析对等为门禁（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19961](https://github.com/stablyai/orca/pull/19961)）
- 新增（ai-vault-search）：在索引上运行会话搜索查询引擎（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19750](https://github.com/stablyai/orca/pull/19750)）
- 重构（shared）：从 TuiAgent 派生 WellKnownAgentType（[@AmethystLiang](https://github.com/AmethystLiang)，[#19645](https://github.com/stablyai/orca/pull/19645)）
- 回退「新增（ai-vault-search）：在索引上运行会话搜索查询引擎（#19750）」（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20023](https://github.com/stablyai/orca/pull/20023)）
- 新增（ai-vault-search）：会话搜索索引库，负责回填、对账与保留（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19751](https://github.com/stablyai/orca/pull/19751)）
- 重构（rpc）：让 defineMethod 保留方法名与处理结果（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20016](https://github.com/stablyai/orca/pull/20016)）
- 修复（release）：把三项发布门禁修复移植到 main，避免裁剪再次继承（[@brennanb2025](https://github.com/brennanb2025)，[#19945](https://github.com/stablyai/orca/pull/19945)）
- 本地化：使文件显示标签可翻译（[@OrcaWin](https://github.com/OrcaWin)，[#20010](https://github.com/stablyai/orca/pull/20010)）
- 修复（i18n）：从运行时目录删除过期的 TerminalPane.minimumContrast 条目（main 再次变红）（[@nwparker](https://github.com/nwparker)，[#19575](https://github.com/stablyai/orca/pull/19575)）
- 测试（monaco）：驱动真正的 Monarch 分词器，而不是遍历规则表（[@nwparker](https://github.com/nwparker)，[#19981](https://github.com/stablyai/orca/pull/19981)）
- 测试（runtime）：捕获真实 Antigravity transcript——检测器在实时输出上是反的（[@nwparker](https://github.com/nwparker)，[#19983](https://github.com/stablyai/orca/pull/19983)）

**完整变更对照：** [v1.4.200...v1.4.201](https://github.com/stablyai/orca/compare/v1.4.200...v1.4.201)

## v1.4.200 Native Chat 看见子 Agent，编排从创建起就有主人 {#v1-4-200}

2026年9月11日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.200)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-200-short}

**Native Chat：Claude 子 Agent 活动与 Codex 后台任务会显示在聊天里。** 完成的回合会列出变更文件，任务更新会流入编写器。

**编排：Worker 终端从创建起就有主人。** 启动、移动端输入以及旧联邦协调器增加了恢复保护。

**工作区与浏览器：后台浏览器标签打开即加载；创建聊天时保留当前 worktree。**

### 产品体验 {#v1-4-200-product}

#### 工作区、标签页与浏览器 {#v1-4-200-workspaces-tabs}

> 保持当前 worktree 选中；新打开的浏览器标签在你访问时已经就绪。

**标签页与浏览器**

- 修复（browser）：新打开的后台标签页在访问时已加载（[@brennanb2025](https://github.com/brennanb2025)，[#19633](https://github.com/stablyai/orca/pull/19633)）
- 统一工作区激活时的标签页表面选择（[@brennanb2025](https://github.com/brennanb2025)，[#19635](https://github.com/stablyai/orca/pull/19635)）
- 修复（native-chat）：创建聊天时保持当前 worktree 处于活动状态（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19753](https://github.com/stablyai/orca/pull/19753)）
### Agent 与工作流 {#v1-4-200-agents-workflow}

#### Native Chat {#v1-4-200-native-chat}

> 对话能更清楚地告诉你：Agent 做了什么、正在做什么、以及委托了什么。

**Agent 活动与结果**

- 新增（native-chat）：在共享载体上显示 Claude 子 Agent 活动（[@brennanb2025](https://github.com/brennanb2025)，[#18806](https://github.com/stablyai/orca/pull/18806)）
- 新增（native-chat）：在聊天条中报告 Codex 后台任务（[@brennanb2025](https://github.com/brennanb2025)，[#19346](https://github.com/stablyai/orca/pull/19346)）
- 汇总回合文件变更，并保留已解析的提示回执（[@brennanb2025](https://github.com/brennanb2025)，[#19229](https://github.com/stablyai/orca/pull/19229)）
- 渲染带更新 diff 的任务清单，以及编写器进度面板（[@brennanb2025](https://github.com/brennanb2025)，[#19230](https://github.com/stablyai/orca/pull/19230)）

**编写器与控件**

- 修复（native-chat）：将 effort 放到模型选择器右侧（[@brennanb2025](https://github.com/brennanb2025)，[#19617](https://github.com/stablyai/orca/pull/19617)）
- 将选择器选中的 Native Chat 技能显示为药丸标签（[@brennanb2025](https://github.com/brennanb2025)，[#19616](https://github.com/stablyai/orca/pull/19616)）
- 修复（native-chat）：展开随附件发送的 Claude 斜杠命令（[@brennanb2025](https://github.com/brennanb2025)，[#19654](https://github.com/stablyai/orca/pull/19654)）
- 修复（native-chat）：仅在键盘聚焦时显示消息装饰，而非任意焦点（[@brennanb2025](https://github.com/brennanb2025)，[#19426](https://github.com/stablyai/orca/pull/19426)）
- 修复（native-chat）：折叠箭头保持在标题文字旁边（[@brennanb2025](https://github.com/brennanb2025)，[#19656](https://github.com/stablyai/orca/pull/19656)）
- 修复（renderer）：对齐 Native Chat 窗格层级（[@brennanb2025](https://github.com/brennanb2025)，[#19626](https://github.com/stablyai/orca/pull/19626)）

**聊天与工作区路由**

- 统一 Native Chat 与工作区标签页的命令分发（[@brennanb2025](https://github.com/brennanb2025)，[#19621](https://github.com/stablyai/orca/pull/19621)）
- 修复（native-chat）：统一启动路由并支持结构化 worker 放置（[@brennanb2025](https://github.com/brennanb2025)，[#19431](https://github.com/stablyai/orca/pull/19431)）
#### 自动化 {#v1-4-200-automations}

> Worker 从诞生起就有更明确的主人，在恢复、联邦或移动端使用时更不容易滞留。

- 修复（orchestration）：从创建起就拥有 worker 终端，而不是等启动完成（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19608](https://github.com/stablyai/orca/pull/19608)）
- 修复（orchestration）：移动端按键时围栏 worker 释放（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19337](https://github.com/stablyai/orca/pull/19337)）
- 修复（orchestration）：worker 启动以观察到的回合开始判定就绪，而非写入被接受（[@brennanb2025](https://github.com/brennanb2025)，[#19423](https://github.com/stablyai/orca/pull/19423)）
- 修复（orchestration）：统一 worktree ps 与侧栏的结构化会话状态（[@brennanb2025](https://github.com/brennanb2025)，[#19217](https://github.com/stablyai/orca/pull/19217)）
- 修复（orchestration）：接受旧联邦协调器缺失的 Run id（[@brennanb2025](https://github.com/brennanb2025)，[#19689](https://github.com/stablyai/orca/pull/19689)）
- 修复（orchestration）：将无 Run 终端的邮件归档到未绑定 Run 下（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19696](https://github.com/stablyai/orca/pull/19696)）
- 测试（orchestration）：固定未绑定直接邮件的 Run 必需契约（[@brennanb2025](https://github.com/brennanb2025)，[#19684](https://github.com/stablyai/orca/pull/19684)）
### 质量与交付 {#v1-4-200-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能：界面、聊天与工作区 {#v1-4-200-perf-ui-chat}

- 性能：文档标题未变时保留 store 状态（[@OrcaWin](https://github.com/OrcaWin)，[#19459](https://github.com/stablyai/orca/pull/19459)）
- 性能：为文档历史的工作区与路径身份建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19461](https://github.com/stablyai/orca/pull/19461)）
- 性能：为浏览器面板条目的统一标签页建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19464](https://github.com/stablyai/orca/pull/19464)）
- 性能：向自有项目源列表追加时不再反复拷贝（[@OrcaWin](https://github.com/OrcaWin)，[#19465](https://github.com/stablyai/orca/pull/19465)）
- 性能：终端绑定回放时惰性索引工作区标签页（[@OrcaWin](https://github.com/OrcaWin)，[#19466](https://github.com/stablyai/orca/pull/19466)）
- 性能：用 FIFO 游标回放待处理的聊天询问（[@OrcaWin](https://github.com/OrcaWin)，[#19496](https://github.com/stablyai/orca/pull/19496)）
- 性能：在结果窗口内惰性分组聊天历史序列（[@OrcaWin](https://github.com/OrcaWin)，[#19501](https://github.com/stablyai/orca/pull/19501)）
- 性能：排序删除锚点前只测量一次侧栏行几何（[@OrcaWin](https://github.com/OrcaWin)，[#19503](https://github.com/stablyai/orca/pull/19503)）
- 性能：为发现的技能 ID 与名称建索引以便批量选择（[@OrcaWin](https://github.com/OrcaWin)，[#19507](https://github.com/stablyai/orca/pull/19507)）
- 性能：精确文件匹配已填满窗口时跳过模糊排序（[@OrcaWin](https://github.com/OrcaWin)，[#19509](https://github.com/stablyai/orca/pull/19509)）
- 性能：在变基权威会话时为标签页成员关系建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19510](https://github.com/stablyai/orca/pull/19510)）
- 性能：排序已发现技能时复用 collator（[@OrcaWin](https://github.com/OrcaWin)，[#19440](https://github.com/stablyai/orca/pull/19440)）
- 性能：扫描 Warp 主题时复用 collator（[@OrcaWin](https://github.com/OrcaWin)，[#19441](https://github.com/stablyai/orca/pull/19441)）
- 性能：侧栏拖拽时为所选祖先覆盖范围建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19443](https://github.com/stablyai/orca/pull/19443)）
- 性能：为 Resource Manager 标签与累计工作区行建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19480](https://github.com/stablyai/orca/pull/19480)）
- 性能：将激活清单限定到所属主机与工作区（[@OrcaWin](https://github.com/OrcaWin)，[#19447](https://github.com/stablyai/orca/pull/19447)）
- 性能：焦点清理时为已关闭的浏览器页面 ID 建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19449](https://github.com/stablyai/orca/pull/19449)）
- 性能：按锁定名称索引可观察的技能安装（[@OrcaWin](https://github.com/OrcaWin)，[#19451](https://github.com/stablyai/orca/pull/19451)）
- 性能（runtime）：没有已完成 Agent 时跳过休眠清单（[@nwparker](https://github.com/nwparker)，[#19391](https://github.com/stablyai/orca/pull/19391)）
- 性能（workspaces）：跳过未变化的心跳订阅者工作（[@nwparker](https://github.com/nwparker)，[#19392](https://github.com/stablyai/orca/pull/19392)）
- 性能：目录扫描前先解析当前工作区的文档地址（[@OrcaWin](https://github.com/OrcaWin)，[#19495](https://github.com/stablyai/orca/pull/19495)）
- 性能：只物化请求的最近插件审计行（[@OrcaWin](https://github.com/OrcaWin)，[#19498](https://github.com/stablyai/orca/pull/19498)）
- 性能：待处理队列达到上限后停止合并操作系统打开的文件（[@OrcaWin](https://github.com/OrcaWin)，[#19508](https://github.com/stablyai/orca/pull/19508)）

#### 性能：终端、隧道与运行时 {#v1-4-200-perf-term-runtime}

- 性能：跟踪窗格别名的单例或歧义，不再拷贝桶（[@OrcaWin](https://github.com/OrcaWin)，[#19479](https://github.com/stablyai/orca/pull/19479)）
- 性能：从主机均衡列表中退役已耗尽的桶（[@OrcaWin](https://github.com/OrcaWin)，[#19493](https://github.com/stablyai/orca/pull/19493)）
- 性能：避免反复拷贝待处理的 SOCKS 载荷（[@OrcaWin](https://github.com/OrcaWin)，[#19439](https://github.com/stablyai/orca/pull/19439)）
- 性能（terminal）：输出突发时避免二次方的状态标记扫描（[@nwparker](https://github.com/nwparker)，[#19373](https://github.com/stablyai/orca/pull/19373)）
- 性能：按 PTY 为所选主机的 SSH 租约建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19467](https://github.com/stablyai/orca/pull/19467)）
- 性能：保留序列化文本前丢弃过大的诊断记录（[@OrcaWin](https://github.com/OrcaWin)，[#19445](https://github.com/stablyai/orca/pull/19445)）
- 性能：限制工具配对，并避免未使用的归属数组（[@OrcaWin](https://github.com/OrcaWin)，[#19468](https://github.com/stablyai/orca/pull/19468)）
- 性能：用分组集合校验终端收养的 MRU 成员关系（[@OrcaWin](https://github.com/OrcaWin)，[#19482](https://github.com/stablyai/orca/pull/19482)）
- 性能：为终端邻居顺序与剩余成员关系建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19453](https://github.com/stablyai/orca/pull/19453)）
- 性能：统计命令行转义时不产生正则匹配数组（[@OrcaWin](https://github.com/OrcaWin)，[#19499](https://github.com/stablyai/orca/pull/19499)）
- 性能：扩展范围前先检查回填日期基数（[@OrcaWin](https://github.com/OrcaWin)，[#19456](https://github.com/stablyai/orca/pull/19456)）
- 性能：探测请求的窗格键，而不是枚举全部记录（[@OrcaWin](https://github.com/OrcaWin)，[#19494](https://github.com/stablyai/orca/pull/19494)）
- 性能（terminal）：跳过部分转义序列之间的纯文本（[@nwparker](https://github.com/nwparker)，[#19393](https://github.com/stablyai/orca/pull/19393)）
- 性能（terminal）：释放待处理控件背后过大的底层字符串（[@nwparker](https://github.com/nwparker)，[#19396](https://github.com/stablyai/orca/pull/19396)）
- 性能（terminal）：预览控件扫描时跳过普通输出（[@nwparker](https://github.com/nwparker)，[#19400](https://github.com/stablyai/orca/pull/19400)）
- 性能（terminal）：自有保留的尾部行，避免钉住其 chunk（[@nwparker](https://github.com/nwparker)，[#19528](https://github.com/stablyai/orca/pull/19528)）
- 性能：拷贝帧载荷前先检查隧道队列容量（[@OrcaWin](https://github.com/OrcaWin)，[#19497](https://github.com/stablyai/orca/pull/19497)）
- 性能：监视器取消后停止排队的元数据工作（[@OrcaWin](https://github.com/OrcaWin)，[#19446](https://github.com/stablyai/orca/pull/19446)）

#### 性能：数据与集成 {#v1-4-200-perf-data}

- 性能：仅在条目可能过期时修剪元数据缓存（[@OrcaWin](https://github.com/OrcaWin)，[#19450](https://github.com/stablyai/orca/pull/19450)）
- 性能：单独仓库导入时跳过文件夹作用域构造（[@OrcaWin](https://github.com/OrcaWin)，[#19452](https://github.com/stablyai/orca/pull/19452)）
- 性能：聚合与合并时为用量会话明细建索引（[@OrcaWin](https://github.com/OrcaWin)，[#19487](https://github.com/stablyai/orca/pull/19487)）
- 性能：复用 AI-vault 路径匹配器以及查询与排序键（[@OrcaWin](https://github.com/OrcaWin)，[#19469](https://github.com/stablyai/orca/pull/19469)）
- 性能：按主机与 cwd 缓存 AI-vault 项目归属（[@OrcaWin](https://github.com/OrcaWin)，[#19470](https://github.com/stablyai/orca/pull/19470)）
- 性能：一次遍历选定 checks 面板的工作区归属（[@OrcaWin](https://github.com/OrcaWin)，[#19471](https://github.com/stablyai/orca/pull/19471)）
- 性能：缓存 Linear 与 Jira 结果排序的更新时间戳（[@OrcaWin](https://github.com/OrcaWin)，[#19473](https://github.com/stablyai/orca/pull/19473)）
- 性能：复用自然有序的唯一 Codex 信任范围（[@OrcaWin](https://github.com/OrcaWin)，[#19492](https://github.com/stablyai/orca/pull/19492)）
- 性能：复用规范化的任务页仓库选择（[@OrcaWin](https://github.com/OrcaWin)，[#19454](https://github.com/stablyai/orca/pull/19454)）

#### 可靠性与维护 {#v1-4-200-reliability}

- 测试（ci）：用有界轮询替换固定的拆除等待（[@nwparker](https://github.com/nwparker)，[#19720](https://github.com/stablyai/orca/pull/19720)）
- 修复（lint）：保留有意的 collator 基准基线（[@brennanb2025](https://github.com/brennanb2025)，[#19686](https://github.com/stablyai/orca/pull/19686)）
- 修复（native-chat）：合并重复的 native-chat-types 导入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19698](https://github.com/stablyai/orca/pull/19698)）
- 重构（ai-vault）：将会话扫描器拆成 transcript 读取器与消费者（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19666](https://github.com/stablyai/orca/pull/19666)）

**完整变更对照：** [v1.4.199...v1.4.200](https://github.com/stablyai/orca/compare/v1.4.199...v1.4.200)

## v1.4.199 Create 入口回来了，Structured Chat 更像对话 {#v1-4-199}

2026年9月9日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.199)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-199-short}

**「Add project」又回到你找得到的地方了。** 过去侧边栏会按窗口宽度，把 *New workspace* 和 *Add project* 藏在不同入口后面。现在统一为一个 **Create** 按钮，两者都在其中——同样的标签、同样的位置，任意窗口尺寸皆如此。

**Structured Chat 更成熟了。** 在 Experimental 设置中开启 *Structured Chat* 后，Agent 输出会像对话一样可读：工具调用按批次分组、可展开的执行详情、Codex 子 Agent 活动而非原始 opcode、`/clear` 与 `/compact`、可重命名的标签页、悬停时间戳，以及直接从 Agent Session History 恢复。Native Windows 也支持结构化的 Codex 聊天。

**远程工作更稳了。** 桌面端与云端的中继区域选择、重新归属与重连更可靠。终端在恢复、重启与滚动回放过程中会保留输入、输出与身份。

**更快了。** 一轮大规模优化去掉了渲染器、侧边栏、终端、Git 解析与目录索引中多余的重渲染、重新扫描与分配。

**有两项被撤回。** 移动端中继连接速度相关改动与后台移动推送已回退，待后续再处理——不包含在本版本中。

---

### 产品体验 {#v1-4-199-product}

#### 工作区与项目 {#v1-4-199-workspaces}

> 侧边栏新建操作现已统一为单个 **Create** 按钮，且侧边栏不再丢失你的筛选条件、主机与项目列表。

**统一 Create 按钮**

- 将侧边栏创建操作统一为单个下拉菜单（[@AmethystLiang](https://github.com/AmethystLiang)，[#19375](https://github.com/stablyai/orca/pull/19375)）

**侧边栏保持位置**

- 修复（sidebar）：展开折叠的工作区时不清除筛选条件（[@nwparker](https://github.com/nwparker)，[#19398](https://github.com/stablyai/orca/pull/19398)）
- 修复（ui）：检测 overlay 时忽略持久化工作区列表（[@nwparker](https://github.com/nwparker)，[#18881](https://github.com/stablyai/orca/pull/18881)）
- 将 agents 侧边栏搜索可见性持久化为 pairing 本地偏好（[@AmethystLiang](https://github.com/AmethystLiang)，[#19313](https://github.com/stablyai/orca/pull/19313)）
- 修复（sidebar）：在多主机侧边栏中为固定行标注所属主机（[@nwparker](https://github.com/nwparker)，[#19351](https://github.com/stablyai/orca/pull/19351)）
- 修复（ui）：在窄侧边栏中保持源代码管理标题可读（[@nwparker](https://github.com/nwparker)，[#19146](https://github.com/stablyai/orca/pull/19146)）

**项目与 worktree**

- 修复（runtime）：阻止首次状态发布中止进行中的 worktree 扫描（[@nwparker](https://github.com/nwparker)，[#19357](https://github.com/stablyai/orca/pull/19357)）
- 修复：目录刷新时避免重复的仓库分组（[@kiendle](https://github.com/kiendle)，[#19170](https://github.com/stablyai/orca/pull/19170)）

#### 编辑器、浏览器与界面 {#v1-4-199-editor-ui}

> ⌘J 能找到你真正想要的内容，浏览器与地址栏表现正常，活动列表按需要你关注的内容排序。

**命令面板（⌘J）**

- 根据侧边栏作用域预填 Cmd-J 筛选条件（[@AmethystLiang](https://github.com/AmethystLiang)，[#19036](https://github.com/stablyai/orca/pull/19036)）
- 改进 cmd j 排序（[@AmethystLiang](https://github.com/AmethystLiang)，[#19005](https://github.com/stablyai/orca/pull/19005)）
- 修复（cmd-j）：将浏览器标签页所有权传入面板搜索（[@nwparker](https://github.com/nwparker)，[#18925](https://github.com/stablyai/orca/pull/18925)）
- 修复（cmd-j）：移除重复的浏览器所有权输入（[@nwparker](https://github.com/nwparker)，[#19172](https://github.com/stablyai/orca/pull/19172)）

**浏览器**

- 修复（browser）：首次点击地址栏时选中完整 URL（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19118](https://github.com/stablyai/orca/pull/19118)）
- 修复：避免仅为重置不存在的会话而启动浏览器 helper（[@nwparker](https://github.com/nwparker)，[#18952](https://github.com/stablyai/orca/pull/18952)）
- 修复：将浏览器恢复限定在 attach inventory 放置范围内（[@nwparker](https://github.com/nwparker)，[#18910](https://github.com/stablyai/orca/pull/18910)）
- 修复：在客户端托管页面更新期间保留 renderer 浏览器发布（[@nwparker](https://github.com/nwparker)，[#18961](https://github.com/stablyai/orca/pull/18961)）
- 在 worktree 切换时延迟非活动浏览器页面（[@AmethystLiang](https://github.com/AmethystLiang)，[#19326](https://github.com/stablyai/orca/pull/19326)）

**编辑器与 diff**

- 修复（editor）：在合并 diff 中支持 Shift+滚轮滚动（[@brohoya](https://github.com/brohoya)，[#11756](https://github.com/stablyai/orca/pull/11756)）
- 修复：在上下文菜单释放焦点后打开编辑器重命名（[@nwparker](https://github.com/nwparker)，[#18934](https://github.com/stablyai/orca/pull/18934)）
- 在可见性变化时恢复分支比较（[@AmethystLiang](https://github.com/AmethystLiang)，[#19021](https://github.com/stablyai/orca/pull/19021)）

**活动视图**

- 按关注级别对活动状态分组排序（[@AmethystLiang](https://github.com/AmethystLiang)，[#19329](https://github.com/stablyai/orca/pull/19329)）
- 修复（activity）：通过为进行中的 turn 提供已读回执，使工作中的 agent 在「仅未读」下可见（[@AmethystLiang](https://github.com/AmethystLiang)，[#19535](https://github.com/stablyai/orca/pull/19535)）
- 将活动菜单整理为筛选与视图分区（[@AmethystLiang](https://github.com/AmethystLiang)，[#19547](https://github.com/stablyai/orca/pull/19547)）

**端口、日志与诊断**

- 修复（ports）：合并 advertised URL 的刷新突发（[@nwparker](https://github.com/nwparker)，[#19150](https://github.com/stablyai/orca/pull/19150)）
- 修复（gh）：在 gh/glab 因超时被终止时记录日志（[@nwparker](https://github.com/nwparker)，[#18555](https://github.com/stablyai/orca/pull/18555)）
- 在会话终止失败时记录错误详情（[@AmethystLiang](https://github.com/AmethystLiang)，[#19381](https://github.com/stablyai/orca/pull/19381)）

#### 设置与本地化 {#v1-4-199-settings}

> 更多界面内容支持你的语言。

- 为活动视图与侧边栏添加本地化（[@OrcaWin](https://github.com/OrcaWin)，[#18589](https://github.com/stablyai/orca/pull/18589)）
- 修复（i18n）：删除导致 main 静态分析失败的孤立 TerminalPane.minimumContrast 条目（[@nwparker](https://github.com/nwparker)，[#19566](https://github.com/stablyai/orca/pull/19566)）

### Agent 与工作流 {#v1-4-199-agents-workflow}

#### Agent 与 Native Chat {#v1-4-199-native-chat}

> 结构化聊天（设置 → 实验性功能 → **Structured Chat**）读起来像对话，而不再是协议转储。

**阅读对话**

- feat(native-chat): 将工具批处理作为一组读取（[@brennanb2025](https://github.com/brennanb2025)，[#19372](https://github.com/stablyai/orca/pull/19372)）
- feat(native-chat): 添加执行详情与工具行标识（[@brennanb2025](https://github.com/brennanb2025)，[#19226](https://github.com/stablyai/orca/pull/19226)）
- feat(native-chat): 显示 Codex 子 Agent 活动，而非操作码行（[@brennanb2025](https://github.com/brennanb2025)，[#18773](https://github.com/stablyai/orca/pull/18773)）
- fix(native-chat): 渲染压缩通知、计划文档与图片（[@brennanb2025](https://github.com/brennanb2025)，[#19228](https://github.com/stablyai/orca/pull/19228)）
- 悬停时显示 native chat 消息时间戳（[@brennanb2025](https://github.com/brennanb2025)，[#19218](https://github.com/stablyai/orca/pull/19218)）
- 在聊天回合尾部显示提供方活动（[@brennanb2025](https://github.com/brennanb2025)，[#19055](https://github.com/stablyai/orca/pull/19055)）
- 添加持久的回合作用域聊天活动指示器（[@brennanb2025](https://github.com/brennanb2025)，[#19044](https://github.com/stablyai/orca/pull/19044)）
- 稳定滚动条槽位，防止消息列表布局偏移（[@AmethystLiang](https://github.com/AmethystLiang)，[#19332](https://github.com/stablyai/orca/pull/19332)）
- feat(native-chat): 为聊天链接提供链接操作弹出框（[@brennanb2025](https://github.com/brennanb2025)，[#19130](https://github.com/stablyai/orca/pull/19130)）
- fix(native-chat): 抑制 Claude 与 Codex 中的提供方用户回显（[@brennanb2025](https://github.com/brennanb2025)，[#19136](https://github.com/stablyai/orca/pull/19136)）

**引导会话**

- feat(chat): 支持结构化的 /clear 与 /compact 命令（[@brennanb2025](https://github.com/brennanb2025)，[#19164](https://github.com/stablyai/orca/pull/19164)）
- feat(native-chat): 将 Agent Session History 行恢复为新的结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#19176](https://github.com/stablyai/orca/pull/19176)）
- fix(native-chat): 使结构化聊天标签可重命名（[@brennanb2025](https://github.com/brennanb2025)，[#19153](https://github.com/stablyai/orca/pull/19153)）
- fix(native-chat): 记住结构化聊天的模型与 effort 选择（[@brennanb2025](https://github.com/brennanb2025)，[#19147](https://github.com/stablyai/orca/pull/19147)）
- fix(native-chat): 列出结构化 Claude 会话实际加载的斜杠命令与技能（[@brennanb2025](https://github.com/brennanb2025)，[#19127](https://github.com/stablyai/orca/pull/19127)）
- fix(native-chat): 在结构化聊天的首个回合自动重命名工作区（[@brennanb2025](https://github.com/brennanb2025)，[#19138](https://github.com/stablyai/orca/pull/19138)）
- 修复 native chat 完成排序与恢复后的活动时间戳（[@brennanb2025](https://github.com/brennanb2025)，[#19144](https://github.com/stablyai/orca/pull/19144)）
- feat(chat): 添加结构化会话回退后端（[@brennanb2025](https://github.com/brennanb2025)，[#19235](https://github.com/stablyai/orca/pull/19235)）

**曾经卡住的回合**

- fix(native-chat): 在确认窗口之后，若提供方证明已收到，则结算结构化发送（[@brennanb2025](https://github.com/brennanb2025)，[#19140](https://github.com/stablyai/orca/pull/19140)）
- fix(native-chat): 结算因重启而滞留的结构化聊天回合（[@brennanb2025](https://github.com/brennanb2025)，[#19122](https://github.com/stablyai/orca/pull/19122)）
- fix(native-chat): 停止在创建聊天时旁侧植入多余终端（[@brennanb2025](https://github.com/brennanb2025)，[#19123](https://github.com/stablyai/orca/pull/19123)）
- fix(native-chat): 停止将未应答主机解读为拒绝结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#19321](https://github.com/stablyai/orca/pull/19321)）
- fix(native-chat): 将编辑器文件拖放限定到接收它们的窗格（[@brennanb2025](https://github.com/brennanb2025)，[#19328](https://github.com/stablyai/orca/pull/19328)）
- fix(runtime): 将 structured-chat 设置应用于每个 RPC 调用方（[@brennanb2025](https://github.com/brennanb2025)，[#18700](https://github.com/stablyai/orca/pull/18700)）
- fix(codex): 保持大型 app-server 回复存活（[@brennanb2025](https://github.com/brennanb2025)，[#18590](https://github.com/stablyai/orca/pull/18590)）
- fix(chat): 阻止终端焦点恢复在 Chat UI 中抢占 Cmd+C（[@brennanb2025](https://github.com/brennanb2025)，[#18751](https://github.com/stablyai/orca/pull/18751)）
- fix: 为结构化 native chat 恢复完整的侧边栏 agent 行（[@brennanb2025](https://github.com/brennanb2025)，[#19137](https://github.com/stablyai/orca/pull/19137)）
- fix(agent-status): 阻止过期的自拟 agent 标题伪装成待处理问题（[@brennanb2025](https://github.com/brennanb2025)，[#19237](https://github.com/stablyai/orca/pull/19237)）
- fix(pi): 将输入模态显示为等待而非工作中（[@mmarabel](https://github.com/mmarabel)，[#18836](https://github.com/stablyai/orca/pull/18836)）
- fix(pi): 在每个界面完成对话框等待信号（[@nwparker](https://github.com/nwparker)，[#19533](https://github.com/stablyai/orca/pull/19533)）

**提供方与账户**

- 修复 MiniMax 中国用量路由与凭据处理（[@weekbin](https://github.com/weekbin)，[#14929](https://github.com/stablyai/orca/pull/14929)）
- 修复 MiniMax 凭据过期报告、区域同步与刷新（[@nwparker](https://github.com/nwparker)，[#19250](https://github.com/stablyai/orca/pull/19250)）
- fix(codex): 区分共享同一邮箱的个人与企业账户（[@nwparker](https://github.com/nwparker)，[#19279](https://github.com/stablyai/orca/pull/19279)）
- fix(rate-limits): 当 API 省略百分比时，停止将 Grok 用量报告为 0%（[@TimothyVang](https://github.com/TimothyVang)，[#17936](https://github.com/stablyai/orca/pull/17936)）
- fix: 将 kimi-code 进程识别为 kimi agent（[@Aladex](https://github.com/Aladex)，[#18634](https://github.com/stablyai/orca/pull/18634)）

#### 自动化 {#v1-4-199-automations}

> 多 Agent 运行可在应用重启后继续存活，保留其 worker 谱系，并拒绝那些曾经导致任务滞留的操作。

**持久性与谱系**

- feat(orchestration): 使多 Agent 工作流具备持久性（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#16904](https://github.com/stablyai/orca/pull/16904)）
- fix(orchestration): 在应用重启后保留 worker 谱系（STA-6366）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19121](https://github.com/stablyai/orca/pull/19121)）
- 移除已结算 worker 的自动恢复与休眠围栏（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19544](https://github.com/stablyai/orca/pull/19544)）

**调度、邮件与任务**

- fix(orchestration): 将联邦 worker 邮件归档到协调器 Run 下（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19542](https://github.com/stablyai/orca/pull/19542)）
- fix(orchestration): 拒绝在活跃 worker 下重新打开 Task；允许对滞留行重新下发 stop（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19551](https://github.com/stablyai/orca/pull/19551)）
- feat(orchestration): 编排原生诞生的结构化聊天会话（[@brennanb2025](https://github.com/brennanb2025)，[#18827](https://github.com/stablyai/orca/pull/18827)）

**状态与标题**

- fix(orchestration): 在完成标题竞态后恢复 Codex 空闲状态（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19243](https://github.com/stablyai/orca/pull/19243)）
- fix(orchestration): 避免在工作中终端标题上做全量消息扫描（[@brennanb2025](https://github.com/brennanb2025)，[#19390](https://github.com/stablyai/orca/pull/19390)）

#### 终端与 CLI {#v1-4-199-terminal-cli}

> 减少窗格丢失你的输入、输出或自身的途径。

**你的输入与输出得以保留**

- fix: 在终端回滚重放期间保留用户输入（[@nwparker](https://github.com/nwparker)，[#19075](https://github.com/stablyai/orca/pull/19075)）
- fix: 在应答恢复截止后重绘隐藏的输出溢出（[@nwparker](https://github.com/nwparker)，[#18904](https://github.com/stablyai/orca/pull/18904)）
- fix: 消除全屏滚动期间的二次空白裁剪（[@nwparker](https://github.com/nwparker)，[#19214](https://github.com/stablyai/orca/pull/19214)）
- fix: 跨控制帧保留终端命令探测（[@nwparker](https://github.com/nwparker)，[#19006](https://github.com/stablyai/orca/pull/19006)）
- fix(terminal): 保留普通前台命令名称（[@nwparker](https://github.com/nwparker)，[#18882](https://github.com/stablyai/orca/pull/18882)）

**窗格恢复与退役**

- fix: 在隐藏终端恢复期间优先使用保留的提供方快照（[@nwparker](https://github.com/nwparker)，[#18972](https://github.com/stablyai/orca/pull/18972)）
- fix(terminal): 重新挂载因 spawn 未返回 PTY id 而处于未绑定状态的窗格（[@brennanb2025](https://github.com/brennanb2025)，[#19223](https://github.com/stablyai/orca/pull/19223)）
- fix: 跨渲染器发布保留终端退役证明（[@nwparker](https://github.com/nwparker)，[#19002](https://github.com/stablyai/orca/pull/19002)）
- 修复原生 PTY I/O 失败导致会话终止被禁用（[@AmethystLiang](https://github.com/AmethystLiang)，[#19523](https://github.com/stablyai/orca/pull/19523)）
- fix: 将 macOS shell 所有权证明保持在恢复预算内（[@nwparker](https://github.com/nwparker)，[#18932](https://github.com/stablyai/orca/pull/18932)）
- fix: 在终端挂载与布局期间保留覆盖层焦点（[@nwparker](https://github.com/nwparker)，[#18982](https://github.com/stablyai/orca/pull/18982)）

**渲染与可读性**

- feat(terminal): 使对比度下限可由用户配置（#10754）（[@nwparker](https://github.com/nwparker)，[#18126](https://github.com/stablyai/orca/pull/18126)）
- fix(xterm): 按标识移除回滚装饰（[@bbingz](https://github.com/bbingz)，[#13178](https://github.com/stablyai/orca/pull/13178)）
- fix: 在关闭时释放浮动终端 WebGL 上下文（[@nwparker](https://github.com/nwparker)，[#19000](https://github.com/stablyai/orca/pull/19000)）
- fix(terminal): 在部分转义尾部中实现折叠安全的 CAN/SUB 与双 ESC 处理（[@nwparker](https://github.com/nwparker)，[#19521](https://github.com/stablyai/orca/pull/19521)）

### 远程与平台 {#v1-4-199-remote}

#### SSH、中继与远程 {#v1-4-199-ssh-relay}

> 手机与远程主机会选择合理的中继区域、正确完成 rehome，并在重连后保留各自的窗格。

**区域选择与 rehome**

- 修复（relay）：冷启动首次探测时不再拒绝近距离区域（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19233](https://github.com/stablyai/orca/pull/19233)）
- 修复（relay）：绝不缓存来自单区域目录的区域提示（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19349](https://github.com/stablyai/orca/pull/19349)）
- 修复（relay）：双向将主机 rehome 到其首选区域（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19241](https://github.com/stablyai/orca/pull/19241)）
- 修复（relay-ops）：让 rehome 信任探测批准 asia-east2 单元（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19275](https://github.com/stablyai/orca/pull/19275)）
- relay：为 asia-east2 单元赋予区域 rehome 身份（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19239](https://github.com/stablyai/orca/pull/19239)）
- 新增（relay）：在远单元放置与区域提示偏斜时发出告警（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19253](https://github.com/stablyai/orca/pull/19253)）

**连接与控制通道**

- 修复（relay）：在 accept 跨越控制通道 rebind 时仍能挂接手机（桌面侧）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19238](https://github.com/stablyai/orca/pull/19238)）
- 修复（relay）：向声明该能力的主机发出 pending-conn 详情（单元侧）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19266](https://github.com/stablyai/orca/pull/19266)）
- 修复（relay）：按每次 ping 与每次 flush 窗口限制控制通道 RTT 采样（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19268](https://github.com/stablyai/orca/pull/19268)）
- 新增（relay）：为成功的客户端 accept 与控制通道往返计时（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19232](https://github.com/stablyai/orca/pull/19232)）
- 修复（ssh-relay）：由守护进程持有端点凭证；失败的启动不会轮换该凭证（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19052](https://github.com/stablyai/orca/pull/19052)）
- 新增（relay）：记录区域探测并标出已分配单元名称（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19307](https://github.com/stablyai/orca/pull/19307)）
- 性能（mobile）：缩短中继重连关键路径，并更快认定失效套接字（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19236](https://github.com/stablyai/orca/pull/19236)）
- 回退（mobile）：暂缓中继重连路径与 cache-first 重连，留待单独的移动端合入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19265](https://github.com/stablyai/orca/pull/19265)）

**远程窗格与标签页**

- 修复：在调用方客户端中兑现远程终端插入（[@nwparker](https://github.com/nwparker)，[#18995](https://github.com/stablyai/orca/pull/18995)）
- 修复：在 runtime 终端回退后仍保持配对标签页更新为实时（[@nwparker](https://github.com/nwparker)，[#19022](https://github.com/stablyai/orca/pull/19022)）
- 修复（remote）：在孤儿恢复后继续同步终端标签页（[@shaharmor](https://github.com/shaharmor)，[#19065](https://github.com/stablyai/orca/pull/19065)）
- 修复（terminal）：移除配对远程分屏中主机已退役的幽灵窗格（#17770）（[@nwparker](https://github.com/nwparker)，[#19365](https://github.com/stablyai/orca/pull/19365)）
- 修复：在启动残留清理期间保留配对的主机会话（[@nwparker](https://github.com/nwparker)，[#18922](https://github.com/stablyai/orca/pull/18922)）
- 修复：在大型 SSH PTY 恢复期间避免 credit 死锁（[@nwparker](https://github.com/nwparker)，[#19026](https://github.com/stablyai/orca/pull/19026)）
- 修复（clipboard）：将 runtime 拥有的 SSH 图片粘贴经 runtime 路由（[@nwparker](https://github.com/nwparker)，[#19352](https://github.com/stablyai/orca/pull/19352)）

#### Windows 与 WSL {#v1-4-199-windows-wsl}

> 结构化 Codex 聊天可在原生 Windows 上运行；WSL1 与 MSYS shell 可被正确识别。

**原生 Windows 上的结构化聊天**

- 新增（windows）：在原生 Windows 上启用结构化 Codex 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#18519](https://github.com/stablyai/orca/pull/18519)）
- 修复（windows）：通过暴露进程创建时间，解除结构化原生聊天阻塞（[@brennanb2025](https://github.com/brennanb2025)，[#18986](https://github.com/stablyai/orca/pull/18986)）

**进程与 shell**

- 修复（windows）：拒绝关闭快照中过期的父 PID 链接（[@brennanb2025](https://github.com/brennanb2025)，[#19149](https://github.com/stablyai/orca/pull/19149)）
- 修复：将 MSYS shell 子进程保留在其终端 job 中（[@nwparker](https://github.com/nwparker)，[#19068](https://github.com/stablyai/orca/pull/19068)）
- 修复：在无 WSL2 内核时仍能识别可用的 WSL1（[@nwparker](https://github.com/nwparker)，[#19061](https://github.com/stablyai/orca/pull/19061)）
- 修复（agent-hooks）：在读取 stdin 之前守卫每一处 Windows 缺失目标回退（[@nwparker](https://github.com/nwparker)，[#19415](https://github.com/stablyai/orca/pull/19415)）

#### 移动端 {#v1-4-199-mobile}

> 结构化原生 Claude 聊天落地。另有两项较大改动已撤回，待下一轮合入。

**已发布**

- 新增（mobile）：结构化原生 Claude 聊天（[@brennanb2025](https://github.com/brennanb2025)，[#18741](https://github.com/stablyai/orca/pull/18741)）
- 修复（mobile）：停止对历史行中的提交时间戳双重缩放（[@blade035](https://github.com/blade035)，[#17731](https://github.com/stablyai/orca/pull/17731)）

**已合入后又撤回、待进一步处理 — 不在本构建中**

- 新增：移动应用的真实后台推送通知（#8129）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18554](https://github.com/stablyai/orca/pull/18554)）
- 回退：暂缓移动端推送功能以供用户测试（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19203](https://github.com/stablyai/orca/pull/19203)）
- 新增（mobile）：会话重连时绘制上次已知的标签栏（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19258](https://github.com/stablyai/orca/pull/19258)）
- 新增（mobile）：会话重连时绘制上次已知的标签栏（移动端合入）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19281](https://github.com/stablyai/orca/pull/19281)）
- 新增（mobile）：为中继拨号各阶段计时，使诊断能指出慢连接卡在何处（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19245](https://github.com/stablyai/orca/pull/19245)）
- 回退（mobile）：撤回中继连接速度的移动端合入，待更小、已验证的版本再重新合入（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19348](https://github.com/stablyai/orca/pull/19348)）

### 质量与交付 {#v1-4-199-quality}

> 这里的改动不会改变你看到的内容——它们改变的是交付有多快、发布有多稳。若需要细节，展开如下。

#### 性能：界面与工作区 {#v1-4-199-perf-ui}

- perf(store): 在 workspace 水合过程中保持仓库列表的 identity（[@nwparker](https://github.com/nwparker)，[#19057](https://github.com/stablyai/orca/pull/19057)）
- perf(tabs): 在 reconciliation 改动其他内容时保持 tab-model 的 identity（[@nwparker](https://github.com/nwparker)，[#19063](https://github.com/stablyai/orca/pull/19063)）
- perf(mobile): 在无变化时跳过 agent-status 投影 join（[@nwparker](https://github.com/nwparker)，[#19115](https://github.com/stablyai/orca/pull/19115)）
- perf(worktrees): 阻止 worktree 移除替换其从未触及的 map（[@nwparker](https://github.com/nwparker)，[#19058](https://github.com/stablyai/orca/pull/19058)）
- perf(selectors): 阻止两个始终挂载的 selector 在每次 store 写入时分配（[@nwparker](https://github.com/nwparker)，[#19113](https://github.com/stablyai/orca/pull/19113)）
- perf(store): 检测当前审计无法看到的 Zustand 重渲染 churn（[@nwparker](https://github.com/nwparker)，[#19059](https://github.com/stablyai/orca/pull/19059)）
- perf(agent-status): 阻止无操作的 retirement 重建 retired-pane-key map（[@nwparker](https://github.com/nwparker)，[#19142](https://github.com/stablyai/orca/pull/19142)）
- perf(worktrees): 阻止 worktree 拆除替换其从未触及的数组与 map（[@nwparker](https://github.com/nwparker)，[#19145](https://github.com/stablyai/orca/pull/19145)）
- perf(renderer): 避免每秒触发 spinner 动画事件（[@OrcaWin](https://github.com/OrcaWin)，[#19407](https://github.com/stablyai/orca/pull/19407)）
- perf: 在选择前台 agent 时记忆化 ancestry（[@OrcaWin](https://github.com/OrcaWin)，[#19502](https://github.com/stablyai/orca/pull/19502)）

#### 性能：终端与远程 {#v1-4-199-perf-terminal}

- perf(terminals): 阻止关闭标签页时替换其从未触及的 map（[@nwparker](https://github.com/nwparker)，[#19060](https://github.com/stablyai/orca/pull/19060)）
- perf(terminals): 在无需清空时保持 shutdown map 的 identity（[@nwparker](https://github.com/nwparker)，[#19112](https://github.com/stablyai/orca/pull/19112)）
- perf(mobile): 缩短中继重连关键路径并更快认定失效套接字（mobile 专项）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19280](https://github.com/stablyai/orca/pull/19280)）
- perf(mobile): 以并行启动 RPC 与预热终端引擎打开会话（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19260](https://github.com/stablyai/orca/pull/19260)）
- perf(mobile): 每次重连从 t=0 起竞速直连与中继拨号（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19308](https://github.com/stablyai/orca/pull/19308)）
- perf(native-chat): 在分页追赶期间限制 journal 读取（[@nwparker](https://github.com/nwparker)，[#19360](https://github.com/stablyai/orca/pull/19360)）
- perf(native-chat): 在流式传输时保留历史 tool 行（[@nwparker](https://github.com/nwparker)，[#19364](https://github.com/stablyai/orca/pull/19364)）

#### 性能：核心与基础设施 {#v1-4-199-perf-core}

- perf: 索引所选 team ID 并在单次遍历中选定主 team（[@OrcaWin](https://github.com/OrcaWin)，[#19504](https://github.com/stablyai/orca/pull/19504)）
- perf: 在无合格编辑器时跳过 Git-status 索引（[@OrcaWin](https://github.com/OrcaWin)，[#19437](https://github.com/stablyai/orca/pull/19437)）
- perf: 在首个匹配 root 处停止文件系统授权（[@OrcaWin](https://github.com/OrcaWin)，[#19438](https://github.com/stablyai/orca/pull/19438)）
- perf: 索引编辑器归属与已恢复的 workspace 投影（[@OrcaWin](https://github.com/OrcaWin)，[#19444](https://github.com/stablyai/orca/pull/19444)）
- perf: 索引项目表选项与迭代顺序（[@OrcaWin](https://github.com/OrcaWin)，[#19476](https://github.com/stablyai/orca/pull/19476)）
- perf: 在首个可用源处停止 clone URL 发现（[@OrcaWin](https://github.com/OrcaWin)，[#19477](https://github.com/stablyai/orca/pull/19477)）
- perf: 仅克隆已变更的 work-item 页面（[@OrcaWin](https://github.com/OrcaWin)，[#19478](https://github.com/stablyai/orca/pull/19478)）
- perf: 对 worker transcript roster 双生使用计数成员关系（[@OrcaWin](https://github.com/OrcaWin)，[#19484](https://github.com/stablyai/orca/pull/19484)）
- perf: 当全部最终自动化运行均可容纳时跳过排序（[@OrcaWin](https://github.com/OrcaWin)，[#19485](https://github.com/stablyai/orca/pull/19485)）
- perf: 解析 Git 历史头而不拆分 commit 正文（[@OrcaWin](https://github.com/OrcaWin)，[#19486](https://github.com/stablyai/orca/pull/19486)）
- perf: 为有界序数保留索引已遗忘的 Codex turn（[@OrcaWin](https://github.com/OrcaWin)，[#19488](https://github.com/stablyai/orca/pull/19488)）
- perf: 缓存已匹配与未匹配的 Claude 用量 cwd 归属（[@OrcaWin](https://github.com/OrcaWin)，[#19489](https://github.com/stablyai/orca/pull/19489)）
- perf: 汇总省略的 workspace 大小且不生成中间对象（[@OrcaWin](https://github.com/OrcaWin)，[#19491](https://github.com/stablyai/orca/pull/19491)）
- perf: 索引 VM 功能恢复并预计算排序 identity（[@OrcaWin](https://github.com/OrcaWin)，[#19457](https://github.com/stablyai/orca/pull/19457)）
- perf: 为批量删除复用规范化路径匹配器（[@OrcaWin](https://github.com/OrcaWin)，[#19458](https://github.com/stablyai/orca/pull/19458)）
- perf: 仅规范化保留的浏览器历史候选项（[@OrcaWin](https://github.com/OrcaWin)，[#19460](https://github.com/stablyai/orca/pull/19460)）
- perf: 在项目 identity 继承期间索引先前成员关系（[@OrcaWin](https://github.com/OrcaWin)，[#19463](https://github.com/stablyai/orca/pull/19463)）
- perf: 预计算 Jira 优先级与时间戳排序键（[@OrcaWin](https://github.com/OrcaWin)，[#19472](https://github.com/stablyai/orca/pull/19472)）
- perf: 每个运行仅解析一次外部自动化日期（[@OrcaWin](https://github.com/OrcaWin)，[#19474](https://github.com/stablyai/orca/pull/19474)）
- perf: 惰性索引不区分大小写的 Windows 环境键（[@OrcaWin](https://github.com/OrcaWin)，[#19483](https://github.com/stablyai/orca/pull/19483)）
- perf: 在不全量排序的情况下选出最高用量合计（[@OrcaWin](https://github.com/OrcaWin)，[#19490](https://github.com/stablyai/orca/pull/19490)）
- perf: 统计 GitLab diff 行前缀而不拆分全部行（[@OrcaWin](https://github.com/OrcaWin)，[#19505](https://github.com/stablyai/orca/pull/19505)）

#### 测试与可靠性 {#v1-4-199-testing}

- test: 在定时 CI 中演练打包浏览器兼容性（[@nwparker](https://github.com/nwparker)，[#19157](https://github.com/stablyai/orca/pull/19157)）
- test: 刷新 palette identity 与 structured-session journal fixture（[@nwparker](https://github.com/nwparker)，[#19165](https://github.com/stablyai/orca/pull/19165)）
- test: 刷新成对 palette 的主机限定行定位器（[@nwparker](https://github.com/nwparker)，[#19175](https://github.com/stablyai/orca/pull/19175)）
- test: 在隔离 CI 中覆盖原生 Wayland Hangul（[@nwparker](https://github.com/nwparker)，[#19174](https://github.com/stablyai/orca/pull/19174)）
- test(e2e): 将成对预览链接检查限定到确认环节（[@nwparker](https://github.com/nwparker)，[#18924](https://github.com/stablyai/orca/pull/18924)）
- test: 在检查镜像前等待已渲染的远程 agent 放置完成（[@nwparker](https://github.com/nwparker)，[#18983](https://github.com/stablyai/orca/pull/18983)）
- test: 将所选 runtime 项目断言限定到侧边栏（[@nwparker](https://github.com/nwparker)，[#19003](https://github.com/stablyai/orca/pull/19003)）
- test: 在关闭标签页时确认正在运行命令的提示（[@nwparker](https://github.com/nwparker)，[#18965](https://github.com/stablyai/orca/pull/18965)）
- test: 为 Linux CI 有界面规格启用软件 WebGL（[@nwparker](https://github.com/nwparker)，[#19001](https://github.com/stablyai/orca/pull/19001)）
- test: 在排空水合 FIFO 前恢复快照路径（[@nwparker](https://github.com/nwparker)，[#19186](https://github.com/stablyai/orca/pull/19186)）
- test: 从成功轮询返回成对浏览器状态（[@nwparker](https://github.com/nwparker)，[#19189](https://github.com/stablyai/orca/pull/19189)）
- test: 使 worker 恢复 fixture 与归属策略对齐（[@nwparker](https://github.com/nwparker)，[#19190](https://github.com/stablyai/orca/pull/19190)）
- fix(test): 修复 main——让 adoption-replay 创建 fixture 通过 structured-chat 门禁（[@nwparker](https://github.com/nwparker)，[#19246](https://github.com/stablyai/orca/pull/19246)）
- fix(test): 为 federation 测试提供真正的读后写同步屏障（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19262](https://github.com/stablyai/orca/pull/19262)）
- test(relay): 证明 pending-conn capability 头能到达 acceptControl（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19274](https://github.com/stablyai/orca/pull/19274)）
- test(ssh): 将 MFA fixture 与开发者真实的 ~/.ssh 隔离（[@brennanb2025](https://github.com/brennanb2025)，[#19300](https://github.com/stablyai/orca/pull/19300)）
- 修复侧边栏创建菜单 E2E 竞态（[@AmethystLiang](https://github.com/AmethystLiang)，[#19448](https://github.com/stablyai/orca/pull/19448)）
- test: 覆盖五个同时洪泛的 SSH 窗格中的输入（[@nwparker](https://github.com/nwparker)，[#19071](https://github.com/stablyai/orca/pull/19071)）
- test: 修复自动化与浏览器 reconciliation 的 e2e 测试（[@AmethystLiang](https://github.com/AmethystLiang)，[#19530](https://github.com/stablyai/orca/pull/19530)）

#### 发布、CI 与文档 {#v1-4-199-release-ci}

- docs(orchestration): 绝不选用用户未点名的 worker 模型（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19109](https://github.com/stablyai/orca/pull/19109)）
- skills: 重写并精简七份非编排指南（未经 Jinwoo 确认勿合并）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18724](https://github.com/stablyai/orca/pull/18724)）
- fix(ci): 阻止 Android 发布说明超出 GitHub body 限制（[@brennanb2025](https://github.com/brennanb2025)，[#19114](https://github.com/stablyai/orca/pull/19114)）
- 更新 mobile 0.0.48 Android 下载链接（[@brennanb2025](https://github.com/brennanb2025)，[#19117](https://github.com/stablyai/orca/pull/19117)）
- 回退「skills: 将七份非编排指南重写为以结果为先的统一标准 (#18724)」（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19126](https://github.com/stablyai/orca/pull/19126)）
- skills: 重写并精简七份非编排指南（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19128](https://github.com/stablyai/orca/pull/19128)）
- 恢复独立的 push gateway 部署（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19225](https://github.com/stablyai/orca/pull/19225)）
- 修复 push 部署源归档路径（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19231](https://github.com/stablyai/orca/pull/19231)）
- 重组 MiniMax 模块并去重共享测试状态（[@nwparker](https://github.com/nwparker)，[#19197](https://github.com/stablyai/orca/pull/19197)）
- tools: 新增 phone-vantage 中继连接基准测试（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19251](https://github.com/stablyai/orca/pull/19251)）
- chore(mobile): 移除过时的 max-lines 例外（[@nwparker](https://github.com/nwparker)，[#19366](https://github.com/stablyai/orca/pull/19366)）
- fix(deps): 更新桌面端解析器以提升安全性并限制资源使用（[@OrcaWin](https://github.com/OrcaWin)，[#19361](https://github.com/stablyai/orca/pull/19361)）
- fix(deps): 加固 cloud HTTP、WebSocket 与构建依赖（[@OrcaWin](https://github.com/OrcaWin)，[#19362](https://github.com/stablyai/orca/pull/19362)）
- chore(mobile): 修补 plist 工具中的 XML 解析器安全问题（[@OrcaWin](https://github.com/OrcaWin)，[#19380](https://github.com/stablyai/orca/pull/19380)）
- chore(docs): 修补花括号展开导致的资源耗尽修复（[@OrcaWin](https://github.com/OrcaWin)，[#19382](https://github.com/stablyai/orca/pull/19382)）
- fix(deps): 更新 react-i18next 以支持 TypeScript 7 与翻译解析（[@OrcaWin](https://github.com/OrcaWin)，[#19378](https://github.com/stablyai/orca/pull/19378)）
- fix(deps): 更新 DOMPurify 以修复 sanitizer 与 document-context 问题（[@OrcaWin](https://github.com/OrcaWin)，[#19377](https://github.com/stablyai/orca/pull/19377)）
- fix(ci): 读取变更路径列表时越过第一个管道缓冲区（[@nwparker](https://github.com/nwparker)，[#19409](https://github.com/stablyai/orca/pull/19409)）
- fix(deps): 将 Electron 升级至 43.6 以改善启动性能并修复崩溃（[@OrcaWin](https://github.com/OrcaWin)，[#19369](https://github.com/stablyai/orca/pull/19369)）
- 在做出更改前于 PR 检查修复提示中核实失败因果关系（[@AmethystLiang](https://github.com/AmethystLiang)，[#19435](https://github.com/stablyai/orca/pull/19435)）

### 新贡献者 {#v1-4-199-contributors}

> 本版本中有六位贡献者向 Orca 提交了首次改动。感谢你们！

- [@Aladex](https://github.com/Aladex) 首次贡献于 [#18634](https://github.com/stablyai/orca/pull/18634)
- [@weekbin](https://github.com/weekbin) 首次贡献于 [#14929](https://github.com/stablyai/orca/pull/14929)
- [@TimothyVang](https://github.com/TimothyVang) 首次贡献于 [#17936](https://github.com/stablyai/orca/pull/17936)
- [@brohoya](https://github.com/brohoya) 首次贡献于 [#11756](https://github.com/stablyai/orca/pull/11756)
- [@blade035](https://github.com/blade035) 首次贡献于 [#17731](https://github.com/stablyai/orca/pull/17731)
- [@kiendle](https://github.com/kiendle) 首次贡献于 [#19170](https://github.com/stablyai/orca/pull/19170)

**完整变更对照：** [v1.4.198...v1.4.199](https://github.com/stablyai/orca/compare/v1.4.198...v1.4.199)

## v1.4.198 结构化聊天与 GitHub 路线图 {#v1-4-198}

2026年9月8日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.198)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 重点变化 {#v1-4-198-notable}

- 在实验设置中开启 **Structured Chat** 后，可使用改进的 Codex 聊天界面：行内文件 diff、窗格操作、更清晰的工具输出、单独停止任务，以及移动端结构化 Codex 聊天。
- GitHub Projects 的 Roadmap 视图改为时间线；桌面端增加标签滚动、更窄标签，并刷新了通知。
- 工作区、渲染器、编辑器、终端、Git 与远程操作更快；SSH 中继和 Windows/WSL 恢复更稳。

### 产品体验 {#v1-4-198-product}

#### 工作区与项目 {#v1-4-198-workspaces}

- 修复创建工作区项目导览目标（[@AmethystLiang](https://github.com/AmethystLiang)，[#18502](https://github.com/stablyai/orca/pull/18502)）
- 修复（worktrees）：路由托管 worktree 的移除 按 已解析的执行主机（[@nwparker](https://github.com/nwparker)，[#18529](https://github.com/stablyai/orca/pull/18529)）
- 修复（worktrees）：解析执行主机 在两处 创建 worktree 的入口（[@nwparker](https://github.com/nwparker)，[#18545](https://github.com/stablyai/orca/pull/18545)）
- 保持浮动工作区 置于 正在工作的 Native Chat 窗格（[@brennanb2025](https://github.com/brennanb2025)，[#18692](https://github.com/stablyai/orca/pull/18692)）
- 修复（ui）：卸载项目选择器，先于 Add Project 交接（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18730](https://github.com/stablyai/orca/pull/18730)）
- 修复（sidebar）：确认筛选重置，先于露出当前工作区（[@nwparker](https://github.com/nwparker)，[#18708](https://github.com/stablyai/orca/pull/18708)）
- 修复（sidebar）：停止 ⌘⇧↓ worktree 导航跳到 第一行（[@nwparker](https://github.com/nwparker)，[#18804](https://github.com/stablyai/orca/pull/18804)）
- 停止已驱逐和过期的 worktree 预备（[@nwparker](https://github.com/nwparker)，[#18951](https://github.com/stablyai/orca/pull/18951)）
- 允许 worktree 创建在…期间继续过期预备回收（[@nwparker](https://github.com/nwparker)，[#18967](https://github.com/stablyai/orca/pull/18967)）
- 新增（github-projects）：渲染 Roadmap 项目视图为时间线（[@NaoyaTatetsu](https://github.com/NaoyaTatetsu)，[#17795](https://github.com/stablyai/orca/pull/17795)）
- 修复（runtime）：允许限定范围的 worktree 列表 报告未能覆盖的主机（[@nwparker](https://github.com/nwparker)，[#18645](https://github.com/stablyai/orca/pull/18645)）

#### 编辑器、浏览器与界面 {#v1-4-198-editor-ui}

- 回退"docs: add 乌克兰语 README 译本（[@OrcaWin](https://github.com/OrcaWin)，[#18570](https://github.com/stablyai/orca/pull/18570)）
- 回退"docs: 记录本地化工作流 （AGENTS.md）（[@OrcaWin](https://github.com/OrcaWin)，[#18571](https://github.com/stablyai/orca/pull/18571)）
- 保持选中行时注意力图标挖空为白色 （行被选中时）（[@AmethystLiang](https://github.com/AmethystLiang)，[#18679](https://github.com/stablyai/orca/pull/18679)）
- 增加标签滚动条（[@AmethystLiang](https://github.com/AmethystLiang)，[#18526](https://github.com/stablyai/orca/pull/18526)）
- 修复 Smart create 保留 任务检出哈希，配合 Create more（[@nwparker](https://github.com/nwparker)，[#18727](https://github.com/stablyai/orca/pull/18727)）
- 修复（browser）：让加载表面跟上 Orca 主题（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18738](https://github.com/stablyai/orca/pull/18738)）
- 修复（browser）：出示 Electron 自己的 User-Agent，以便 Cloudflare Turnstile 通过（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18749](https://github.com/stablyai/orca/pull/18749)）
- 减小标签最小宽度 从 88px 降到 72px（[@AmethystLiang](https://github.com/AmethystLiang)，[#18871](https://github.com/stablyai/orca/pull/18871)）
- 修复跨…保留 favicon：同源导航（[@AmethystLiang](https://github.com/AmethystLiang)，[#18879](https://github.com/stablyai/orca/pull/18879)）
- 修复（ci）：把已审核引用存进 reftable，以便大小写成对分支 don't fail fetch（[@nwparker](https://github.com/nwparker)，[#18970](https://github.com/stablyai/orca/pull/18970)）
- 打开 open new link should not 离开当前链接（[@AmethystLiang](https://github.com/AmethystLiang)，[#18873](https://github.com/stablyai/orca/pull/18873)）
- 支持更新已有的草稿 Release 在重新生成说明时（[@AmethystLiang](https://github.com/AmethystLiang)，[#19014](https://github.com/stablyai/orca/pull/19014)）
- 修复（source-control）：stack Retry below 「变更过多」提示（[@nwparker](https://github.com/nwparker)，[#19037](https://github.com/stablyai/orca/pull/19037)）
- 修复：显示 Agent 命令 once，且不 启动轮询（[@nwparker](https://github.com/nwparker)，[#18729](https://github.com/stablyai/orca/pull/18729)）

#### 设置与本地化 {#v1-4-198-settings}

- 修复（settings）：indent Agent 休眠 "Sleep after" sub-setting（[@brennanb2025](https://github.com/brennanb2025)，[#18379](https://github.com/stablyai/orca/pull/18379)）
- 修复（i18n）：提取 translateSearchKeyword 调用，以便设置搜索关键词 进入 en.json（[@imgusev](https://github.com/imgusev)，[#18040](https://github.com/stablyai/orca/pull/18040)）
- 修复（i18n）：区分 Duplicate 与 Copy（简体中文）（[@weibiansanjue](https://github.com/weibiansanjue)，[#18065](https://github.com/stablyai/orca/pull/18065)）
- 修复（i18n）：本地化剩余的新手引导界面（[@mors119](https://github.com/mors119)，[#17992](https://github.com/stablyai/orca/pull/17992)）
- 修复（i18n）：随包提供 新手引导 新手引导集成能力文案到启动目录（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18539](https://github.com/stablyai/orca/pull/18539)）
- 新增（i18n）：本地化 Orca Account settings and 导航 to Korean（[@hwantage](https://github.com/hwantage)，[#15849](https://github.com/stablyai/orca/pull/15849)）
- 新增（i18n）：增加 French UI locale（[@foXaCe](https://github.com/foXaCe)，[#16455](https://github.com/stablyai/orca/pull/16455)）
- 修复（i18n）：修复法语界面 漂移导致静态分析失败（[@nwparker](https://github.com/nwparker)，[#18550](https://github.com/stablyai/orca/pull/18550)）
- 修复（startup）：apply HTTP/1.1 兼容开关 for 已迁移的配置档, and stop parsing settings file pre-ready（[@nwparker](https://github.com/nwparker)，[#18621](https://github.com/stablyai/orca/pull/18621)）
- 新增（i18n）：本地化新手引导流程 为日语（[@tb-soshiro](https://github.com/tb-soshiro)，[#18787](https://github.com/stablyai/orca/pull/18787)）
- 改进通知视图（[@AmethystLiang](https://github.com/AmethystLiang)，[#18699](https://github.com/stablyai/orca/pull/18699)）
- 修复（source-control）：stack 创建 PR 提示's settings link below its message（[@nwparker](https://github.com/nwparker)，[#19046](https://github.com/stablyai/orca/pull/19046)）

### Agent 与工作流 {#v1-4-198-agents-workflow}

#### Agent 与 Native Chat {#v1-4-198-native-chat}

- Answer 结构化会话支持探测 无需安装 host（[@brennanb2025](https://github.com/brennanb2025)，[#18695](https://github.com/stablyai/orca/pull/18695)）
- 新增（native-chat）：restore 终端/聊天切换 for 桥接聊天 only（[@brennanb2025](https://github.com/brennanb2025)，[#18532](https://github.com/stablyai/orca/pull/18532)）
- 修复（native-chat）：clarify 当前进度（[@brennanb2025](https://github.com/brennanb2025)，[#18705](https://github.com/stablyai/orca/pull/18705)）
- 新增（claude）：移动结构化 Native Chat onto Claude Agent SDK and enable it on macOS and Linux（[@brennanb2025](https://github.com/brennanb2025)，[#18560](https://github.com/stablyai/orca/pull/18560)）
- 新增（native-chat）：expose split and 移到窗格操作 in Chat UI 模式（[@brennanb2025](https://github.com/brennanb2025)，[#18714](https://github.com/stablyai/orca/pull/18714)）
- 修复（native-chat）：渲染 Claude 结构化聊天 through same UI as Codex（[@brennanb2025](https://github.com/brennanb2025)，[#18743](https://github.com/stablyai/orca/pull/18743)）
- 修复（native-chat）：让文档路径和链接可点击 in chat（[@brennanb2025](https://github.com/brennanb2025)，[#18712](https://github.com/stablyai/orca/pull/18712)）
- 新增（native-chat）：渲染 Agent 文件编辑 as 行内 diff 卡片（[@brennanb2025](https://github.com/brennanb2025)，[#18765](https://github.com/stablyai/orca/pull/18765)）
- 显示 Claude 后台任务状态 in Native Chat（[@brennanb2025](https://github.com/brennanb2025)，[#18757](https://github.com/stablyai/orca/pull/18757)）
- 修复（agent-session）：拒绝 提交前的结构化创建 并用 envelope 说明（[@brennanb2025](https://github.com/brennanb2025)，[#18697](https://github.com/stablyai/orca/pull/18697)）
- 修复（native-chat）：say when structured launch 回退到终端（[@brennanb2025](https://github.com/brennanb2025)，[#18762](https://github.com/stablyai/orca/pull/18762)）
- 修复（native-chat）：避免 settling 交接 throwing 未处理的 Promise 拒绝 at teardown（[@nwparker](https://github.com/nwparker)，[#18824](https://github.com/stablyai/orca/pull/18824)）
- 修复（claude）：让恢复屏障 cover exit still climbing close ladder（[@nwparker](https://github.com/nwparker)，[#18826](https://github.com/stablyai/orca/pull/18826)）
- 新增（native-chat）：为 Codex 工具行标注 按 what command actually did（[@brennanb2025](https://github.com/brennanb2025)，[#18760](https://github.com/stablyai/orca/pull/18760)）
- 新增（native-chat）：model Codex MCP and 网页搜索条目，而不是泄漏操作码（[@brennanb2025](https://github.com/brennanb2025)，[#18763](https://github.com/stablyai/orca/pull/18763)）
- 修复（native-chat）：publish 结构化会话状态 from host so sidebar never goes stale（[@brennanb2025](https://github.com/brennanb2025)，[#18776](https://github.com/stablyai/orca/pull/18776)）
- 新增（native-chat）：单独停止被监视的任务（[@brennanb2025](https://github.com/brennanb2025)，[#18807](https://github.com/stablyai/orca/pull/18807)）
- 修复（native-chat）：tell SQLite 之前的聊天 how to carry on（[@brennanb2025](https://github.com/brennanb2025)，[#18808](https://github.com/stablyai/orca/pull/18808)）
- 修复（agent-session）：never open 旁路终端 on unproven create（[@brennanb2025](https://github.com/brennanb2025)，[#18735](https://github.com/stablyai/orca/pull/18735)）
- 修复（native-chat）：修复 结构化聊天 tab permanently fenced 按 inherited 发布纪元（[@brennanb2025](https://github.com/brennanb2025)，[#18906](https://github.com/stablyai/orca/pull/18906)）
- 修复（native-chat）：resume 结构化聊天 from Agent 会话历史（[@OrcaWin](https://github.com/OrcaWin)，[#18933](https://github.com/stablyai/orca/pull/18933)）
- 修复（native-chat）：honor structured routing，配合 已保存的选项（[@brennanb2025](https://github.com/brennanb2025)，[#19040](https://github.com/stablyai/orca/pull/19040)）

#### 自动化 {#v1-4-198-automations}

- 新增（automations）：restore 列排序 on list（[@nwparker](https://github.com/nwparker)，[#18885](https://github.com/stablyai/orca/pull/18885)）
- Shorten 编排技能描述 under Agent Skills 1024 字符上限（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18683](https://github.com/stablyai/orca/pull/18683)）
- 修复（orchestration）：fence dispatch CLI 前导 so it stops rendering as headings（[@brennanb2025](https://github.com/brennanb2025)，[#18718](https://github.com/stablyai/orca/pull/18718)）
- 修复（orchestration）：带类型的错误码 for dispatch and worker 启动拒绝（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18902](https://github.com/stablyai/orca/pull/18902)）
- 修复（automation）：保持显式后台启动 off screen（[@nwparker](https://github.com/nwparker)，[#18898](https://github.com/stablyai/orca/pull/18898)）

#### 终端与 CLI {#v1-4-198-terminal-cli}

- 修复：use 回退 shell 就绪 and assert fish 启动时序（[@nwparker](https://github.com/nwparker)，[#18755](https://github.com/stablyai/orca/pull/18755)）
- 修复（terminal）：释放暂停闩锁时冲掉 xterm 停住的渲染器缩放（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18510](https://github.com/stablyai/orca/pull/18510)）
- 修复（cli）：reject 运行时选择器 on `host list` and `environment list` (#18105)（[@nwparker](https://github.com/nwparker)，[#18405](https://github.com/stablyai/orca/pull/18405)）
- 修复（terminal）：让折行搜索 rewind iterative and bound its scans（[@nwparker](https://github.com/nwparker)，[#18402](https://github.com/stablyai/orca/pull/18402)）
- 修复（terminals）：增加 equality bailouts to 标签窗格展开操作（[@nwparker](https://github.com/nwparker)，[#18332](https://github.com/stablyai/orca/pull/18332)）
- 修复状态栏渲染循环 in runtime target hook（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18685](https://github.com/stablyai/orca/pull/18685)）
- 修复（agents）：detect agent CLIs installed outside 版本管理器（[@nwparker](https://github.com/nwparker)，[#18336](https://github.com/stablyai/orca/pull/18336)）
- 修复（worktrees）：避免 failed worktree scan from being recorded as 权威空列表（[@nwparker](https://github.com/nwparker)，[#18456](https://github.com/stablyai/orca/pull/18456)）
- 修复（browser-pane）：避免已死的客户端托管页面 from killing workbench（[@nwparker](https://github.com/nwparker)，[#18334](https://github.com/stablyai/orca/pull/18334)）
- 修复（terminal）：避免 hidden pane's unmeasured 80x24 from overwriting 活动 PTY's size on reattach（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18706](https://github.com/stablyai/orca/pull/18706)）
- 修复（runtime）：bound terminal-wait 阻塞提示规则 to 当前屏幕底部（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18817](https://github.com/stablyai/orca/pull/18817)）

### 远程与平台 {#v1-4-198-remote}

#### SSH、中继与远程 {#v1-4-198-ssh-relay}

- 修复（relay）：停止 self-closing 控制套接字 on 未知消息（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18400](https://github.com/stablyai/orca/pull/18400)）
- 修复（dashboard）：打开远程会话 from every agent reveal path（[@nwparker](https://github.com/nwparker)，[#18403](https://github.com/stablyai/orca/pull/18403)）
- 修复（cli）：报告 worktree 列表的主机覆盖 and stop 行数上限 starving remote hosts (#18104)（[@nwparker](https://github.com/nwparker)，[#18417](https://github.com/stablyai/orca/pull/18417)）
- 修复（ssh）：measure 窗格空闲 in unit sweep's kill operates on（[@nwparker](https://github.com/nwparker)，[#18415](https://github.com/stablyai/orca/pull/18415)）
- 修复（ssh）：停止窗格接管 certifying death from relay's not-found union（[@nwparker](https://github.com/nwparker)，[#18531](https://github.com/stablyai/orca/pull/18531)）
- 修复（ssh）：close macOS relay's per-terminal pty 文件描述符泄漏（[@nwparker](https://github.com/nwparker)，[#18534](https://github.com/stablyai/orca/pull/18534)）
- 修复（ssh）：解析 pane's binding from target partition, not 过期的本地副本（[@nwparker](https://github.com/nwparker)，[#18546](https://github.com/stablyai/orca/pull/18546)）
- 修复（relay）：reject 畸形百分号转义 on upgrade，而不是 throwing（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18547](https://github.com/stablyai/orca/pull/18547)）
- 修复（ssh）：避免 daemon's own services from blocking 被取代中继的回收（[@nwparker](https://github.com/nwparker)，[#18586](https://github.com/stablyai/orca/pull/18586)）
- 修复（terminal）：warn about remote work when closing window or quitting（[@nwparker](https://github.com/nwparker)，[#18593](https://github.com/stablyai/orca/pull/18593)）
- 修复（relay）：停止 taking 集群 cell 清单锁 on 按连接的路径（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18606](https://github.com/stablyai/orca/pull/18606)）
- 修复（hosts）：解析 文件夹工作区's SSH host from repo's host, not its raw connectionId（[@nwparker](https://github.com/nwparker)，[#18598](https://github.com/stablyai/orca/pull/18598)）
- 修复（remote）：避免 disclosure list latching 镜像完整门闩（[@nwparker](https://github.com/nwparker)，[#18619](https://github.com/stablyai/orca/pull/18619)）
- 新增（relay-infra）：动态 NAT 端口 and alerts for 2026-09-04 停滞信号（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18693](https://github.com/stablyai/orca/pull/18693)）
- 新增（relay）：tell phone when its desktop is 已登出（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18698](https://github.com/stablyai/orca/pull/18698)）
- 新增（relay-infra）：cell 崩溃率告警 and 事故看板（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18717](https://github.com/stablyai/orca/pull/18717)）
- 新增（relay）：允许 cells dial Cloud SQL over 私有 IP（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18720](https://github.com/stablyai/orca/pull/18720)）
- 修复（desktop）：never replay 刷新令牌 after timeout; jitter 中继租约续期（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18719](https://github.com/stablyai/orca/pull/18719)）
- 修复（relay-ops）：thrown 健康检查请求 is not health reading; 鉴权探测 does not require /ready（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18723](https://github.com/stablyai/orca/pull/18723)）
- 基础设施（relay）：去掉 unapplied 区域标签 from 运行时日志指标（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18734](https://github.com/stablyai/orca/pull/18734)）
- 修复（relay-ops）：retry failed MIG 清单 read once，先于 calling cell's 电源状态未知（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18740](https://github.com/stablyai/orca/pull/18740)）
- 修复（relay-ops）：accept monitor evidence from 祖先提交，配合 identical monitor code（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18754](https://github.com/stablyai/orca/pull/18754)）
- 修复（relay-ops）：retry transient 管理端点失败 in 同容量校验 and 迁移任务（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18769](https://github.com/stablyai/orca/pull/18769)）
- 修复（relay-ops）：retry freshness-only 预检失败 on first same-cap wave too（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18778](https://github.com/stablyai/orca/pull/18778)）
- 修复（relay-ops）：align cloud-data freshness bar，配合 Cloud Monitoring 发布延迟（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18798](https://github.com/stablyai/orca/pull/18798)）
- 修复：recover from 备用 shell 安装, and close relay 重复回显缺口（[@nwparker](https://github.com/nwparker)，[#18796](https://github.com/stablyai/orca/pull/18796)）
- 修复（ssh）：compile node-pty from host's own Node 头文件，而不是 nodejs.org (STA-6674)（[@nwparker](https://github.com/nwparker)，[#18774](https://github.com/stablyai/orca/pull/18774)）
- 修复（ssh）：允许 host say whether it armed shell 就绪标记（[@nwparker](https://github.com/nwparker)，[#18802](https://github.com/stablyai/orca/pull/18802)）
- 修复（relay-ops）：分区域 cell 延迟 bar and attributable 预检失败（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18877](https://github.com/stablyai/orca/pull/18877)）
- 新增（cli）：报告 SSH 主机平台（[@nwparker](https://github.com/nwparker)，[#18896](https://github.com/stablyai/orca/pull/18896)）
- 修复（relay）：abandon 死亡客户端 accept, jitter and lengthen 控制租约, fail 直连探测 fast（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18959](https://github.com/stablyai/orca/pull/18959)）
- 修复（sidebar）：避免漏掉的 pointerup from hiding 远程主机分区（[@nwparker](https://github.com/nwparker)，[#19032](https://github.com/stablyai/orca/pull/19032)）
- 修复（mobile）：分阶段的中继拨号 bound so slow cell is not hung up on（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18518](https://github.com/stablyai/orca/pull/18518)）
- 修复（mobile）：停止 host streams after 中继订阅取消（[@nwparker](https://github.com/nwparker)，[#18926](https://github.com/stablyai/orca/pull/18926)）

#### Windows 与 WSL {#v1-4-198-windows-wsl}

- 修复（windows）：让安装目录 ACL 修复 rescue launch it runs in（[@nwparker](https://github.com/nwparker)，[#18361](https://github.com/stablyai/orca/pull/18361)）
- 修复（ssh）：移动 Windows 文件写入 off PowerShell 5.1 stdin onto sftp（[@nwparker](https://github.com/nwparker)，[#18596](https://github.com/stablyai/orca/pull/18596)）
- 修复（relay）：release ConPTY conin 句柄 after teardown, not，先于 it（[@nwparker](https://github.com/nwparker)，[#18601](https://github.com/stablyai/orca/pull/18601)）
- 修复（relay）：observe Windows PTY 子进程，而不是 answering false（[@nwparker](https://github.com/nwparker)，[#18591](https://github.com/stablyai/orca/pull/18591)）
- 修复（pty）：close 伪控制台 and dispose conout 工作线程 on Windows self-exit (F24)（[@nwparker](https://github.com/nwparker)，[#18635](https://github.com/stablyai/orca/pull/18635)）
- 修复（renderer）：避免 Node-only 进程表模块 blanking app at boot（[@nwparker](https://github.com/nwparker)，[#18814](https://github.com/stablyai/orca/pull/18814)）
- 修复（windows）：copy daemon 主机可执行文件 verbatim，而不是 renaming it (MDE T1036)（[@OrcaWin](https://github.com/OrcaWin)，[#17865](https://github.com/stablyai/orca/pull/17865)）
- 修复（computer-use）：run Windows runtime as one 常驻助手（[@OrcaWin](https://github.com/OrcaWin)，[#17858](https://github.com/stablyai/orca/pull/17858)）
- 修复（windows）：去掉 EDR-flagged -ExecutionPolicy Bypass from 编码后的 PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#17880](https://github.com/stablyai/orca/pull/17880)）
- 修复（windows）：read 从内核读取命令行, not each process's PEB（[@OrcaWin](https://github.com/OrcaWin)，[#17886](https://github.com/stablyai/orca/pull/17886)）
- 修复（windows）：用原生方式扫描端口，而不是编码后的 PowerShell（[@OrcaWin](https://github.com/OrcaWin)，[#17861](https://github.com/stablyai/orca/pull/17861)）
- 修复（windows）：解析 npm/pnpm ..cmd 垫片 past cmd.exe（[@OrcaWin](https://github.com/OrcaWin)，[#17869](https://github.com/stablyai/orca/pull/17869)）
- 修复（windows）：sign NSIS 卸载器 via SignPath（[@OrcaWin](https://github.com/OrcaWin)，[#17868](https://github.com/stablyai/orca/pull/17868)）
- 修复（windows）：去掉 no-op -ExecutionPolicy Bypass from -Command spawns（[@OrcaWin](https://github.com/OrcaWin)，[#17873](https://github.com/stablyai/orca/pull/17873)）

#### 移动端 {#v1-4-198-mobile}

- 新增（mobile）：structured native Codex chat（[@brennanb2025](https://github.com/brennanb2025)，[#18074](https://github.com/stablyai/orca/pull/18074)）
- 修复（mobile）：restore terminal input when reopening worktrees（[@shaharmor](https://github.com/shaharmor)，[#16239](https://github.com/stablyai/orca/pull/16239)）
- 修复（mobile）：separate image attachment paths from following prompt text (STA-4847)（[@brennanb2025](https://github.com/brennanb2025)，[#15690](https://github.com/stablyai/orca/pull/15690)）
- 修复（native-chat）：tell old mobile builds why 结构化聊天 is missing（[@brennanb2025](https://github.com/brennanb2025)，[#18756](https://github.com/stablyai/orca/pull/18756)）
- 新增（mobile）：port restructured native-chat turn status and 实时工具进度（[@brennanb2025](https://github.com/brennanb2025)，[#18761](https://github.com/stablyai/orca/pull/18761)）
- 升级 mobile app.json to 0.0.48（[@brennanb2025](https://github.com/brennanb2025)，[#18801](https://github.com/stablyai/orca/pull/18801)）
- 修复（mobile）：preserve iPad 硬件键盘焦点（[@ramarivera](https://github.com/ramarivera)，[#12772](https://github.com/stablyai/orca/pull/12772)）
- 升级 mobile Android versionCode to 16 to 匹配 0.0.48 release（[@brennanb2025](https://github.com/brennanb2025)，[#19101](https://github.com/stablyai/orca/pull/19101)）

### 质量与交付 {#v1-4-198-quality}

#### 性能：界面与工作区 {#v1-4-198-perf-ui}

- 性能：find mobile Markdown 占位前缀 in one scan（[@nwparker](https://github.com/nwparker)，[#18914](https://github.com/stablyai/orca/pull/18914)）
- 性能（ipc）：index worktree 所有者，而不是 rescanning repo list per lookup（[@nwparker](https://github.com/nwparker)，[#18416](https://github.com/stablyai/orca/pull/18416)）
- 性能（worktrees）：converge 回收清扫，而不是 re-walking doomed trees（[@nwparker](https://github.com/nwparker)，[#18429](https://github.com/stablyai/orca/pull/18429)）
- 性能（source-control）：sort 分支条目，先于 filtering, gate projections 按 视图模式（[@nwparker](https://github.com/nwparker)，[#18426](https://github.com/stablyai/orca/pull/18426)）
- 性能（persistence）：停止 writing every worktree 元数据行 twice（[@nwparker](https://github.com/nwparker)，[#18451](https://github.com/stablyai/orca/pull/18451)）
- 性能（sidebar）：停止 building 主机投影 row model throws away（[@nwparker](https://github.com/nwparker)，[#18638](https://github.com/stablyai/orca/pull/18638)）
- 性能（sidebar）：share one natural-worktree-id scan and drop redundant 行键连接（[@nwparker](https://github.com/nwparker)，[#18647](https://github.com/stablyai/orca/pull/18647)）
- 性能（renderer）：index four projections that rescanned their inputs per keystroke（[@nwparker](https://github.com/nwparker)，[#18747](https://github.com/stablyai/orca/pull/18747)）
- 性能（worktree）：overlap base refresh，配合 预备检出（[@nwparker](https://github.com/nwparker)，[#18998](https://github.com/stablyai/orca/pull/18998)）
- 性能（startup）：overlap runtime capability refresh，配合 session-tabs inventory（[@nwparker](https://github.com/nwparker)，[#18460](https://github.com/stablyai/orca/pull/18460)）
- 性能（editor）：build closing-fence pattern once per fence, not once per line（[@nwparker](https://github.com/nwparker)，[#18629](https://github.com/stablyai/orca/pull/18629)）
- 性能（right-sidebar）：cache active checks status，而不是 rebuilding its cache keys per store write（[@nwparker](https://github.com/nwparker)，[#18631](https://github.com/stablyai/orca/pull/18631)）
- 性能（renderer）：停止 two store selectors allocating on every write（[@nwparker](https://github.com/nwparker)，[#18632](https://github.com/stablyai/orca/pull/18632)）
- 性能（source-control）：停止 reconciling selection on every panel render（[@nwparker](https://github.com/nwparker)，[#18637](https://github.com/stablyai/orca/pull/18637)）
- 性能（browser）：assemble fragmented tunnel frames once（[@nwparker](https://github.com/nwparker)，[#18893](https://github.com/stablyai/orca/pull/18893)）
- 性能（editor）：reuse Markdown source blocks while positioning review notes（[@nwparker](https://github.com/nwparker)，[#18895](https://github.com/stablyai/orca/pull/18895)）
- 性能（editor）：reuse live Markdown search matches 跨越 unrelated renders（[@nwparker](https://github.com/nwparker)，[#18903](https://github.com/stablyai/orca/pull/18903)）
- 性能（explorer）：remove redundant dotfile path filter allocation（[@nwparker](https://github.com/nwparker)，[#18929](https://github.com/stablyai/orca/pull/18929)）
- 性能（browser）：reuse decoded single-chunk upload buffers（[@nwparker](https://github.com/nwparker)，[#18960](https://github.com/stablyai/orca/pull/18960)）
- 性能（tabs）：index saved tab order 期间 hydration repair（[@nwparker](https://github.com/nwparker)，[#18964](https://github.com/stablyai/orca/pull/18964)）
- 性能（palette）：reuse allowed quality arrays 期间 matching（[@nwparker](https://github.com/nwparker)，[#18966](https://github.com/stablyai/orca/pull/18966)）
- 性能（renderer）：gate tab strip's worktree subscriptions and fix orchestration batch's self-invalidating cache（[@nwparker](https://github.com/nwparker)，[#18428](https://github.com/stablyai/orca/pull/18428)）
- 性能（renderer）：load project-location and feedback dialogs on click（[@nwparker](https://github.com/nwparker)，[#18440](https://github.com/stablyai/orca/pull/18440)）
- 性能（renderer）：narrow App-root badge and terminal pty-set subscriptions（[@nwparker](https://github.com/nwparker)，[#18444](https://github.com/stablyai/orca/pull/18444)）
- 性能（worktree）：remove redundant 创建 and terminal startup work（[@nwparker](https://github.com/nwparker)，[#18793](https://github.com/stablyai/orca/pull/18793)）
- 性能（worktrees）：classify each worktree once, defer SSH meta index, drop conflict-path probe（[@nwparker](https://github.com/nwparker)，[#18433](https://github.com/stablyai/orca/pull/18433)）
- 性能（remote）：read repo catalog once per publish, not once per worktree（[@nwparker](https://github.com/nwparker)，[#18410](https://github.com/stablyai/orca/pull/18410)）
- 性能（ssh）：coalesce concurrent git.listWorktrees reads（[@nwparker](https://github.com/nwparker)，[#18419](https://github.com/stablyai/orca/pull/18419)）
- 性能（worktree）：skip remote probes，配合 no possible result（[@nwparker](https://github.com/nwparker)，[#18821](https://github.com/stablyai/orca/pull/18821)）

#### 性能：终端与远程 {#v1-4-198-perf-terminal}

- 性能（orchestration）：bound worker terminal archive in linear time（[@nwparker](https://github.com/nwparker)，[#18622](https://github.com/stablyai/orca/pull/18622)）
- 性能（terminal）：scan only new tail lines for wait-blocked sentinel（[@nwparker](https://github.com/nwparker)，[#18437](https://github.com/stablyai/orca/pull/18437)）
- 性能（terminals）：spend one inspection start on whole cadence round（[@nwparker](https://github.com/nwparker)，[#18438](https://github.com/stablyai/orca/pull/18438)）
- 性能（terminal）：停止 copying every PTY chunk for two startup-error detectors（[@nwparker](https://github.com/nwparker)，[#18626](https://github.com/stablyai/orca/pull/18626)）
- 性能（terminal）：use real event-loop yields between chunked writes（[@nwparker](https://github.com/nwparker)，[#18627](https://github.com/stablyai/orca/pull/18627)）
- 性能（terminal）：skip partial-escape-tail walk on ESC-free PTY chunks（[@nwparker](https://github.com/nwparker)，[#18748](https://github.com/stablyai/orca/pull/18748)）
- 性能（persistence）：skip rewriting unchanged terminal scrollback snapshots（[@nwparker](https://github.com/nwparker)，[#18764](https://github.com/stablyai/orca/pull/18764)）
- 性能（terminal）：cheap-tier process inspection for anchored local agent panes（[@nwparker](https://github.com/nwparker)，[#18780](https://github.com/stablyai/orca/pull/18780)）
- 性能（persistence）：停止 dead SSH leases pinning metadata, retire unreachable tombstones（[@nwparker](https://github.com/nwparker)，[#18430](https://github.com/stablyai/orca/pull/18430)）
- 性能（runtime）：避免 expired-SSH-lease sweep from rescanning every tab layout（[@nwparker](https://github.com/nwparker)，[#18409](https://github.com/stablyai/orca/pull/18409)）
- 性能（relay）：per-cell inventory locks, delta counters, and pool statement timeout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18722](https://github.com/stablyai/orca/pull/18722)）
- 性能（relay）：bound symlink directory probes remote readDir fans out（[@nwparker](https://github.com/nwparker)，[#18752](https://github.com/stablyai/orca/pull/18752)）
- 性能（relay）：drain fragmented frame buffers in linear time（[@nwparker](https://github.com/nwparker)，[#18891](https://github.com/stablyai/orca/pull/18891)）
- 性能（ssh）：reuse and release relay startup buffers（[@nwparker](https://github.com/nwparker)，[#18953](https://github.com/stablyai/orca/pull/18953)）
- 性能（ssh）：reuse streamed response idle timers（[@nwparker](https://github.com/nwparker)，[#18956](https://github.com/stablyai/orca/pull/18956)）
- 性能（terminal）：gate Command Code banner scan，先于 building its scan windows（[@nwparker](https://github.com/nwparker)，[#18628](https://github.com/stablyai/orca/pull/18628)）
- 性能（terminals）：允许 idle panes share one process-table capture，而不是 forking their own（[@nwparker](https://github.com/nwparker)，[#18742](https://github.com/stablyai/orca/pull/18742)）

#### 性能：核心与基础设施 {#v1-4-198-perf-core}

- 性能（mobile）：cancel 直连探测 when their owner stops（[@nwparker](https://github.com/nwparker)，[#18940](https://github.com/stablyai/orca/pull/18940)）
- 性能（speech）：reuse model download idle timer（[@nwparker](https://github.com/nwparker)，[#18945](https://github.com/stablyai/orca/pull/18945)）
- 性能（paths）：guard no-op regex passes on path-comparison hot path（[@nwparker](https://github.com/nwparker)，[#18418](https://github.com/stablyai/orca/pull/18418)）
- 性能（images）：probe raster headers，而不是 decoding whole payloads, memoize repo icon validation（[@nwparker](https://github.com/nwparker)，[#18421](https://github.com/stablyai/orca/pull/18421)）
- 性能（startup）：避免 persistence startup milestone from timing its own details closure（[@nwparker](https://github.com/nwparker)，[#18439](https://github.com/stablyai/orca/pull/18439)）
- 性能（persistence）：停止 double-traversing persisted session at load（[@nwparker](https://github.com/nwparker)，[#18458](https://github.com/stablyai/orca/pull/18458)）
- 性能（main）：take idle owner 随包提供 poll off main thread and batch pending marker probes（[@nwparker](https://github.com/nwparker)，[#18425](https://github.com/stablyai/orca/pull/18425)）
- 性能（ipc）：build filesystem allowed-root list once per authorization（[@nwparker](https://github.com/nwparker)，[#18423](https://github.com/stablyai/orca/pull/18423)）
- 性能（git）：overlap three independent submodule status reads（[@nwparker](https://github.com/nwparker)，[#18623](https://github.com/stablyai/orca/pull/18623)）
- 性能（ports）：serve unchanged macOS listeners from remembered metadata（[@nwparker](https://github.com/nwparker)，[#18650](https://github.com/stablyai/orca/pull/18650)）
- 性能（persistence）：避免 session write re-scanning and rebuilding unchanged state（[@nwparker](https://github.com/nwparker)，[#18739](https://github.com/stablyai/orca/pull/18739)）
- 性能（repos）：avoid quadratic icon source scans（[@nwparker](https://github.com/nwparker)，[#18892](https://github.com/stablyai/orca/pull/18892)）
- 性能（watcher）：skip remaining filesystem checks after cancellation（[@nwparker](https://github.com/nwparker)，[#18931](https://github.com/stablyai/orca/pull/18931)）
- 性能（skills）：skip symlink probes beyond discovery depth（[@nwparker](https://github.com/nwparker)，[#18937](https://github.com/stablyai/orca/pull/18937)）
- 性能（jira）：preserve replacement attachment download singleflight（[@nwparker](https://github.com/nwparker)，[#18944](https://github.com/stablyai/orca/pull/18944)）
- 性能（search）：assemble fragmented subprocess lines incrementally（[@nwparker](https://github.com/nwparker)，[#18973](https://github.com/stablyai/orca/pull/18973)）
- 性能（startup）：停止 queueing window 创建 behind proxy apply and i18n（[@nwparker](https://github.com/nwparker)，[#18436](https://github.com/stablyai/orca/pull/18436)）
- 性能（settings）：commit free-text account settings on debounce, not per keystroke（[@nwparker](https://github.com/nwparker)，[#18651](https://github.com/stablyai/orca/pull/18651)）
- 性能（claude-usage）：reject non-assistant transcript lines，先于 parsing them（[@nwparker](https://github.com/nwparker)，[#18640](https://github.com/stablyai/orca/pull/18640)）
- 性能（native-chat）：停止 rebuilding every transcript row on every stream frame（[@nwparker](https://github.com/nwparker)，[#18744](https://github.com/stablyai/orca/pull/18744)）
- 性能（automations）：reuse collation setup when sorting names（[@nwparker](https://github.com/nwparker)，[#18823](https://github.com/stablyai/orca/pull/18823)）
- 性能（orchestration）：project explicit columns so graph publish stops recompiling SQL（[@nwparker](https://github.com/nwparker)，[#18420](https://github.com/stablyai/orca/pull/18420)）
- 性能（orchestration）：project task columns so task reads hit statement cache（[@nwparker](https://github.com/nwparker)，[#18641](https://github.com/stablyai/orca/pull/18641)）
- 性能（agent-hooks）：find spool newlines，配合 Buffer.indexOf, not per-byte loop（[@nwparker](https://github.com/nwparker)，[#18639](https://github.com/stablyai/orca/pull/18639)）
- 性能（agent-hooks）：停止 cloning whole status roster on every hook event（[@nwparker](https://github.com/nwparker)，[#18642](https://github.com/stablyai/orca/pull/18642)）
- 性能（cli）：skip feature formatters 期间 help and error startup（[@nwparker](https://github.com/nwparker)，[#18923](https://github.com/stablyai/orca/pull/18923)）
- 性能（hooks）：use native reverse search for transcript lines（[@nwparker](https://github.com/nwparker)，[#18936](https://github.com/stablyai/orca/pull/18936)）
- 性能（cli）：skip impossible typo distance comparisons（[@nwparker](https://github.com/nwparker)，[#18977](https://github.com/stablyai/orca/pull/18977)）
- 性能（windows）：split process table into two flag sets（[@OrcaWin](https://github.com/OrcaWin)，[#17866](https://github.com/stablyai/orca/pull/17866)）
- 新增（perf）：lint repeated sort setup and schedule regression contracts（[@nwparker](https://github.com/nwparker)，[#18822](https://github.com/stablyai/orca/pull/18822)）
- 性能：decode fragmented CLI replies，且不 repeated scans（[@nwparker](https://github.com/nwparker)，[#18909](https://github.com/stablyai/orca/pull/18909)）
- 性能：avoid file-to-file scans when selecting deletion roots（[@nwparker](https://github.com/nwparker)，[#18913](https://github.com/stablyai/orca/pull/18913)）
- 性能：avoid repeated Quick Open exclusion string allocations（[@nwparker](https://github.com/nwparker)，[#18916](https://github.com/stablyai/orca/pull/18916)）
- 性能：skip unrelated shared symlink probes 期间 Git status（[@nwparker](https://github.com/nwparker)，[#18918](https://github.com/stablyai/orca/pull/18918)）
- 性能：avoid splitting every path 期间 file autocomplete（[@nwparker](https://github.com/nwparker)，[#18919](https://github.com/stablyai/orca/pull/18919)）
- 性能：avoid rescanning emitted source in analysis guards（[@nwparker](https://github.com/nwparker)，[#18920](https://github.com/stablyai/orca/pull/18920)）
- 性能：remember equivalent session tab source identities（[@nwparker](https://github.com/nwparker)，[#18976](https://github.com/stablyai/orca/pull/18976)）
- 性能：avoid repeated whitespace scans in diagnostic redaction（[@nwparker](https://github.com/nwparker)，[#18908](https://github.com/stablyai/orca/pull/18908)）

#### 测试与可靠性 {#v1-4-198-testing}

- 测试（e2e）：follow current sidebar project and activity actions（[@nwparker](https://github.com/nwparker)，[#18878](https://github.com/stablyai/orca/pull/18878)）
- 测试（renderer）：pin runtime-target selector identity stability that #18685 fixed（[@nwparker](https://github.com/nwparker)，[#18625](https://github.com/stablyai/orca/pull/18625)）
- 测试（child-process）：lower DIRECT_IMPORTER_PIN to ground two PRs took（[@OrcaWin](https://github.com/OrcaWin)，[#19009](https://github.com/stablyai/orca/pull/19009)）
- 测试（pty）：让 F24 patch pins catch regressions they name（[@nwparker](https://github.com/nwparker)，[#18660](https://github.com/stablyai/orca/pull/18660)）
- 测试（e2e）：stabilize terminal launch and rename menu fixtures（[@nwparker](https://github.com/nwparker)，[#18928](https://github.com/stablyai/orca/pull/18928)）
- 测试（cloud）：derive both reachability directions for relay inventory census（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18524](https://github.com/stablyai/orca/pull/18524)）
- 测试（e2e）：fence SSH recovery and release exited Electron pipes（[@nwparker](https://github.com/nwparker)，[#18880](https://github.com/stablyai/orca/pull/18880)）
- 修复（cloud）：run rehome control job under pipefail（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18537](https://github.com/stablyai/orca/pull/18537)）
- 修复（ports）：路由 status-bar popover scan to workspace's host（[@iverJisty](https://github.com/iverJisty)，[#17048](https://github.com/stablyai/orca/pull/17048)）
- 修复（crash-reporting）：bound replay-guard wedge bursts in ring，且不 losing their spans（[@nwparker](https://github.com/nwparker)，[#18441](https://github.com/stablyai/orca/pull/18441)）
- 修复（crash-reporting）：停止 claiming kills that never landed, and leave proof when own-Chromium pid set is unreadable（[@nwparker](https://github.com/nwparker)，[#18578](https://github.com/stablyai/orca/pull/18578)）
- 修复（crash-reporting）：sample system memory，先于 process is gone（[@nwparker](https://github.com/nwparker)，[#18356](https://github.com/stablyai/orca/pull/18356)）
- 修复（orca-profiles）：tell renderer when cloud session is revoked（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18694](https://github.com/stablyai/orca/pull/18694)）
- 修复（crash-reporting）：让 own-Chromium gate real choke point, and stop refusal leaking root（[@nwparker](https://github.com/nwparker)，[#18459](https://github.com/stablyai/orca/pull/18459)）
- 修复（recovery）：fail renderer recovery reload that never loads,，而不是 leaving dead window（[@nwparker](https://github.com/nwparker)，[#18466](https://github.com/stablyai/orca/pull/18466)）
- 修复（test）：停止 detached git maintenance racing divergence fixture teardown（[@nwparker](https://github.com/nwparker)，[#18810](https://github.com/stablyai/orca/pull/18810)）
- 修复（cloud）：允许 same-cap roll isolate Asia cells（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18811](https://github.com/stablyai/orca/pull/18811)）
- 修复（cloud）：validate protocol-0 same-cap cell plans，且不 rehome trust lines（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18818](https://github.com/stablyai/orca/pull/18818)）
- 修复（cloud）：bound and yield relay's global cell-inventory lock（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18521](https://github.com/stablyai/orca/pull/18521)）
- 修复（cloud）：retry committed-winner collision codes in relay schema startup（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18553](https://github.com/stablyai/orca/pull/18553)）
- 修复（cloud）：recalibrate relay monitor's exhausted-retry freeze to measured bar（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18569](https://github.com/stablyai/orca/pull/18569)）
- 修复（cloud）：recalibrate relay monitor's postgres-retry freeze to measured bar（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18580](https://github.com/stablyai/orca/pull/18580)）
- 修复（git）：share one failed-command error-text reader between local and SSH relay（[@nwparker](https://github.com/nwparker)，[#18398](https://github.com/stablyai/orca/pull/18398)）
- 测试：preserve Docker context in isolated VM recipes（[@nwparker](https://github.com/nwparker)，[#18884](https://github.com/stablyai/orca/pull/18884)）
- 测试：isolate native crash restoration and refresh stale fixtures（[@nwparker](https://github.com/nwparker)，[#18883](https://github.com/stablyai/orca/pull/18883)）
- 测试：pin worker visibility fixture command and handle（[@nwparker](https://github.com/nwparker)，[#18897](https://github.com/stablyai/orca/pull/18897)）
- 测试：canonicalize setup fixture paths，先于 worktree lookup（[@nwparker](https://github.com/nwparker)，[#18912](https://github.com/stablyai/orca/pull/18912)）
- 测试：align desktop platform oracles，配合 native behavior（[@nwparker](https://github.com/nwparker)，[#18915](https://github.com/stablyai/orca/pull/18915)）
- 测试：follow sidebar reveal confirmation，配合 stable workspace target（[@nwparker](https://github.com/nwparker)，[#18921](https://github.com/stablyai/orca/pull/18921)）
- 测试：pin terminal Codex home to explicit managed account（[@nwparker](https://github.com/nwparker)，[#18935](https://github.com/stablyai/orca/pull/18935)）
- 测试：deliver real terminal input and preserve setup reports（[@nwparker](https://github.com/nwparker)，[#18939](https://github.com/stablyai/orca/pull/18939)）
- 测试：isolate skill cloud fixture ports 跨越 workers（[@nwparker](https://github.com/nwparker)，[#18942](https://github.com/stablyai/orca/pull/18942)）
- 测试：align Source Control AI generation fixtures（[@nwparker](https://github.com/nwparker)，[#18941](https://github.com/stablyai/orca/pull/18941)）
- 测试：保持 artifact share fixtures unexpired 跨越 calendar dates（[@nwparker](https://github.com/nwparker)，[#18955](https://github.com/stablyai/orca/pull/18955)）
- 测试：让 SSH artifact regression fixtures reliable at narrow widths（[@nwparker](https://github.com/nwparker)，[#18947](https://github.com/stablyai/orca/pull/18947)）
- 测试：order restart fixture readiness around daemon recovery（[@nwparker](https://github.com/nwparker)，[#18949](https://github.com/stablyai/orca/pull/18949)）
- 测试：isolate Source Control generation from shared repository remotes（[@nwparker](https://github.com/nwparker)，[#18962](https://github.com/stablyai/orca/pull/18962)）
- 修复（hooks）：register Claude hook script directly on Windows (#18875)（[@OrcaWin](https://github.com/OrcaWin)，[#18905](https://github.com/stablyai/orca/pull/18905)）
- 测试：drain project menu focus restoration，先于 teardown（[@nwparker](https://github.com/nwparker)，[#18971](https://github.com/stablyai/orca/pull/18971)）
- 测试：honor background mode in paired client window helpers（[@nwparker](https://github.com/nwparker)，[#18978](https://github.com/stablyai/orca/pull/18978)）
- 测试：bound release checkout fixtures and gate delayed imports（[@nwparker](https://github.com/nwparker)，[#18981](https://github.com/stablyai/orca/pull/18981)）
- 测试：isolate window mocks from inherited launch flags（[@nwparker](https://github.com/nwparker)，[#18989](https://github.com/stablyai/orca/pull/18989)）
- 测试：匹配 explorer filenames independently of git badges（[@nwparker](https://github.com/nwparker)，[#18997](https://github.com/stablyai/orca/pull/18997)）
- 测试：synchronize large repository recovery，配合 Retry request（[@nwparker](https://github.com/nwparker)，[#18999](https://github.com/stablyai/orca/pull/18999)）
- 修复（tests）：stabilize divider viewport and pointer-capture event ordering（[@nwparker](https://github.com/nwparker)，[#19004](https://github.com/stablyai/orca/pull/19004)）
- 修复（tests）：provide window manager for Linux Electron CI（[@nwparker](https://github.com/nwparker)，[#19007](https://github.com/stablyai/orca/pull/19007)）
- 测试：lower child-process import pin after ACL migration（[@nwparker](https://github.com/nwparker)，[#19012](https://github.com/stablyai/orca/pull/19012)）
- 修复（tests）：complete hidden SSH dialog exits 期间 cleanup（[@nwparker](https://github.com/nwparker)，[#18993](https://github.com/stablyai/orca/pull/18993)）
- 测试：use valid repo filter in workspace reveal coverage（[@nwparker](https://github.com/nwparker)，[#19017](https://github.com/stablyai/orca/pull/19017)）
- 测试：cover native X11 Hangul-plus-digit PTY bytes in CI（[@nwparker](https://github.com/nwparker)，[#19013](https://github.com/stablyai/orca/pull/19013)）
- 测试：await fresh inventory after headless terminal materialization（[@nwparker](https://github.com/nwparker)，[#19028](https://github.com/stablyai/orca/pull/19028)）
- 测试：wait for board pointer readiness，先于 marquee selection（[@nwparker](https://github.com/nwparker)，[#19029](https://github.com/stablyai/orca/pull/19029)）
- 测试：await reattach replay，先于 checking mouse reset（[@nwparker](https://github.com/nwparker)，[#19039](https://github.com/stablyai/orca/pull/19039)）
- 测试：require recorded Git activity in polling regression（[@nwparker](https://github.com/nwparker)，[#19041](https://github.com/stablyai/orca/pull/19041)）
- 测试：preserve Windows golden command failures（[@nwparker](https://github.com/nwparker)，[#19047](https://github.com/stablyai/orca/pull/19047)）
- 测试：canonicalize Windows fresh-profile fixture path（[@nwparker](https://github.com/nwparker)，[#19049](https://github.com/stablyai/orca/pull/19049)）
- 测试：修复 Windows paste setup and newline expectations（[@nwparker](https://github.com/nwparker)，[#19050](https://github.com/stablyai/orca/pull/19050)）
- 测试：align Windows shell icons，配合 project runtime ownership（[@nwparker](https://github.com/nwparker)，[#19053](https://github.com/stablyai/orca/pull/19053)）
- 测试：exercise supported ConPTY keyboard protocol reset（[@nwparker](https://github.com/nwparker)，[#19054](https://github.com/stablyai/orca/pull/19054)）
- 测试：reject unsupported app-server in golden agent fixture（[@nwparker](https://github.com/nwparker)，[#19056](https://github.com/stablyai/orca/pull/19056)）
- 测试：reject unsupported app-server in WSL golden stub（[@nwparker](https://github.com/nwparker)，[#19062](https://github.com/stablyai/orca/pull/19062)）
- 测试：canonicalize native Windows paths 期间 repository teardown（[@nwparker](https://github.com/nwparker)，[#19064](https://github.com/stablyai/orca/pull/19064)）
- 测试：run real WSL terminal launch and paste in PR CI（[@nwparker](https://github.com/nwparker)，[#19072](https://github.com/stablyai/orca/pull/19072)）
- 测试：restore SSH bulk-open freeze coverage in headed CI（[@nwparker](https://github.com/nwparker)，[#19081](https://github.com/stablyai/orca/pull/19081)）
- 测试：enable direct and client-hosted SSH browser coverage（[@nwparker](https://github.com/nwparker)，[#19090](https://github.com/stablyai/orca/pull/19090)）
- 测试：reconnect after replacing same-ID runtime pairing（[@nwparker](https://github.com/nwparker)，[#19094](https://github.com/stablyai/orca/pull/19094)）
- 测试：enable Docker SSH browser network 路由 coverage in CI（[@nwparker](https://github.com/nwparker)，[#19095](https://github.com/stablyai/orca/pull/19095)）
- 测试：修复 nested SSH fixture after HUB restart（[@nwparker](https://github.com/nwparker)，[#19098](https://github.com/stablyai/orca/pull/19098)）
- 测试：enable localhost SSH terminal and hook journey in CI（[@nwparker](https://github.com/nwparker)，[#19097](https://github.com/stablyai/orca/pull/19097)）
- 测试：reuse authoritative SSH connection readiness in localhost fixture（[@nwparker](https://github.com/nwparker)，[#19102](https://github.com/stablyai/orca/pull/19102)）
- 测试：follow retained Activity sidebar 期间 pane selection（[@nwparker](https://github.com/nwparker)，[#19107](https://github.com/stablyai/orca/pull/19107)）
- 测试：isolate source-control generation repositories per scenario（[@nwparker](https://github.com/nwparker)，[#19105](https://github.com/stablyai/orca/pull/19105)）
- 测试：cover SSH reattach replay and enable deterministic Codex CI（[@nwparker](https://github.com/nwparker)，[#19106](https://github.com/stablyai/orca/pull/19106)）

#### 发布、CI 与文档 {#v1-4-198-release-ci}

- 杂项：update in-app Android APK link to 0.0.47（[@AmethystLiang](https://github.com/AmethystLiang)，[#18745](https://github.com/stablyai/orca/pull/18745)）
- 杂项（cloud）：close Workload Identity cutover onto stablyai/orca（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18509](https://github.com/stablyai/orca/pull/18509)）
- 重构（agents）：one pane-identity resolver behind six thin adapters (tranche 0)（[@brennanb2025](https://github.com/brennanb2025)，[#18243](https://github.com/stablyai/orca/pull/18243)）
- 文档（cloud）：reconcile 2026-08-23 retry figure，配合 gate metric（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18581](https://github.com/stablyai/orca/pull/18581)）
- CI（package）：retry apt fetches and docker builds behind Ubuntu mirror（[@nwparker](https://github.com/nwparker)，[#18797](https://github.com/stablyai/orca/pull/18797)）
- 重构（agent-session-journal）：移动 session journal onto SQLite（[@brennanb2025](https://github.com/brennanb2025)，[#18652](https://github.com/stablyai/orca/pull/18652)）
- 重构（agent-session）：consolidate wire type imports below lint limit（[@nwparker](https://github.com/nwparker)，[#18930](https://github.com/stablyai/orca/pull/18930)）
- 杂项（cloud）：pin staging relay c3 to director's image（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18508](https://github.com/stablyai/orca/pull/18508)）
- 重构（git）：share push-target resolution between local and SSH relay（[@nwparker](https://github.com/nwparker)，[#18406](https://github.com/stablyai/orca/pull/18406)）
- 文档（relay）：2026-09 reconnect findings, checklist, roadmap, and Roll 2 plan（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18958](https://github.com/stablyai/orca/pull/18958)）
- 文档（relay）：record Roll 2 phase 0/1 (code merge, image, director deploy)（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18979](https://github.com/stablyai/orca/pull/18979)）
- 文档（relay）：Roll 2 cell roll record and checklist ticks（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19096](https://github.com/stablyai/orca/pull/19096)）
- 文档（relay）：correct why ConPTY teardown asset diverges from desktop patch（[@nwparker](https://github.com/nwparker)，[#18636](https://github.com/stablyai/orca/pull/18636)）
- 修复（release）：restore version and harden staging confirmation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18515](https://github.com/stablyai/orca/pull/18515)）
- 文档：记录本地化工作流 （AGENTS.md）（[@tmchow](https://github.com/tmchow)，[#6204](https://github.com/stablyai/orca/pull/6204)）
- 文档：增加乌克兰语 README 译本（[@iho](https://github.com/iho)，[#16124](https://github.com/stablyai/orca/pull/16124)）
- 文档：增加微信群 9 二维码（[@AmethystLiang](https://github.com/AmethystLiang)，[#18608](https://github.com/stablyai/orca/pull/18608)）
- CI：减小运行器开销 and disposable package compression（[@nwparker](https://github.com/nwparker)，[#18948](https://github.com/stablyai/orca/pull/18948)）
- CI：skip 空闲 Mac 分配 and redundant native compiler setup（[@nwparker](https://github.com/nwparker)，[#18954](https://github.com/stablyai/orca/pull/18954)）
- CI：减小 dependency, checkout, and test deadline overhead（[@nwparker](https://github.com/nwparker)，[#18968](https://github.com/stablyai/orca/pull/18968)）
- CI：preserve 大小写成对的 Release 引用 through checkout and verify trust（[@nwparker](https://github.com/nwparker)，[#18980](https://github.com/stablyai/orca/pull/18980)）
- CI：expose existing E2E 用例选择 for 手动触发（[@nwparker](https://github.com/nwparker)，[#18987](https://github.com/stablyai/orca/pull/18987)）
- 修复（security）：apply Windows 路径加固 ACL that never ran（[@OrcaWin](https://github.com/OrcaWin)，[#17884](https://github.com/stablyai/orca/pull/17884)）
- 修复（release）：停止 shipping 未签名的 elevate.exe on Windows（[@OrcaWin](https://github.com/OrcaWin)，[#18044](https://github.com/stablyai/orca/pull/18044)）
- 修复（release）：revalidate draft state，先于 patching generated notes（[@AmethystLiang](https://github.com/AmethystLiang)，[#19019](https://github.com/stablyai/orca/pull/19019)）
- 修复（build）：pin config/relay-assets LF so 一次发布对应一个中继哈希（[@OrcaWin](https://github.com/OrcaWin)，[#19024](https://github.com/stablyai/orca/pull/19024)）
- 修复（packaging）：随包提供 Claude Agent SDK，配合 桌面构建（[@brennanb2025](https://github.com/brennanb2025)，[#19042](https://github.com/stablyai/orca/pull/19042)）

### 新贡献者 {#v1-4-198-contributors}

-  @imgusev made their first contribution [#18040](https://github.com/stablyai/orca/pull/18040)
-  @mors119 made their first contribution [#17992](https://github.com/stablyai/orca/pull/17992)
-  @foXaCe made their first contribution [#16455](https://github.com/stablyai/orca/pull/16455)
-  @iho made their first contribution [#16124](https://github.com/stablyai/orca/pull/16124)
-  @iverJisty made their first contribution [#17048](https://github.com/stablyai/orca/pull/17048)
-  @tb-soshiro made their first contribution [#18787](https://github.com/stablyai/orca/pull/18787)
-  @NaoyaTatetsu made their first contribution [#17795](https://github.com/stablyai/orca/pull/17795)
-  @ramarivera made their first contribution [#12772](https://github.com/stablyai/orca/pull/12772)

**完整变更对照：** [v1.4.197...v1.4.198](https://github.com/stablyai/orca/compare/v1.4.197...v1.4.198)

## v1.4.197 工作树与会话更稳更快 {#v1-4-197}

2026年9月4日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.197)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 重点变化 {#v1-4-197-notable}

- 本地与远程工作区的 worktree、渲染器、编辑器、浏览器、终端和 Git 操作更快。
- Agent 会话、Native Chat、SSH 中继恢复以及 Windows/WSL 执行更抗故障。
- 工作区、终端、CLI、云端与跨平台可靠性进一步增强。

### 界面与工作区 {#v1-4-197-ui-workspaces}

- 修复（task-page）：恢复界面拆分时丢掉的行为（[@nwparker](https://github.com/nwparker)，[#17926](https://github.com/stablyai/orca/pull/17926)）
- 修复（renderer）：恢复界面拆分丢掉的行为（[@nwparker](https://github.com/nwparker)，[#18002](https://github.com/stablyai/orca/pull/18002)）
- 重构（task-page）：把任务页折成一棵按 provider 分组的树（[@nwparker](https://github.com/nwparker)，[#18008](https://github.com/stablyai/orca/pull/18008)）
- 修复（palette）：运行时状态变化时重算快捷操作可用性（[@nwparker](https://github.com/nwparker)，[#18027](https://github.com/stablyai/orca/pull/18027)）
- 新增（app）：从操作系统把 Markdown 文件打开到浮动工作区（[@nwparker](https://github.com/nwparker)，[#17906](https://github.com/stablyai/orca/pull/17906)）
- 修复（review-notes）：分类发送失败与镜像标签（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18023](https://github.com/stablyai/orca/pull/18023)）
- 修复（github-project）：空字段值在两个方向都排到最后并分组（[@nwparker](https://github.com/nwparker)，[#17921](https://github.com/stablyai/orca/pull/17921)）
- 性能（git-common）：限制 worktree 轮询里的 fs-stat 扇出（[@nwparker](https://github.com/nwparker)，[#17839](https://github.com/stablyai/orca/pull/17839)）
- 修复（worktree）：模块拆分后恢复过期清理信号（[@nwparker](https://github.com/nwparker)，[#18058](https://github.com/stablyai/orca/pull/18058)）
- 性能（git）：对从不读取 sparse 的 worktree 列表跳过探测（[@nwparker](https://github.com/nwparker)，[#18050](https://github.com/stablyai/orca/pull/18050)）
- 修复（worktree）：事件批溢出时放宽 git-common 监视（[@nwparker](https://github.com/nwparker)，[#17916](https://github.com/stablyai/orca/pull/17916)）
- 性能（worktree）：修正预备检出命中率，并让未命中可见（[@nwparker](https://github.com/nwparker)，[#17863](https://github.com/stablyai/orca/pull/17863)）
- 修复（session）：禁止两台主机共用一个工作区会话桶（[@nwparker](https://github.com/nwparker)，[#17912](https://github.com/stablyai/orca/pull/17912)）
- 阻止已删工作区的浏览器快照复活（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17779](https://github.com/stablyai/orca/pull/17779)）
- 性能（worktrees）：worktree 元数据清理按证据触发，而不是每次列表（[@nwparker](https://github.com/nwparker)，[#18034](https://github.com/stablyai/orca/pull/18034)）
- 打开新 Markdown 时自动聚焦编辑器（[@AmethystLiang](https://github.com/AmethystLiang)，[#18071](https://github.com/stablyai/orca/pull/18071)）
- 修复（automations）：无法核实的进程丢失报 lost，不报 failed（[@nwparker](https://github.com/nwparker)，[#17967](https://github.com/stablyai/orca/pull/17967)）
- 新增（editor）：Diff 查看器增加「显示空白」开关（[@hwantage](https://github.com/hwantage)，[#15120](https://github.com/stablyai/orca/pull/15120)）
- 性能（renderer）：为 worktree 所有者查找建索引，不再扫遍每个工作区（[@nwparker](https://github.com/nwparker)，[#18130](https://github.com/stablyai/orca/pull/18130)）
- 浏览器网站条目显示 favicon（[@AmethystLiang](https://github.com/AmethystLiang)，[#18099](https://github.com/stablyai/orca/pull/18099)）
- 性能（editor,source-control）：批处理关闭标签的模型清扫，去掉 40 个 store 订阅（[@nwparker](https://github.com/nwparker)，[#18144](https://github.com/stablyai/orca/pull/18144)）
- 性能（renderer）：避免三个常驻选择器每次写入都重扫 store（[@nwparker](https://github.com/nwparker)，[#18136](https://github.com/stablyai/orca/pull/18136)）
- 性能（renderer）：一次 store 写入对齐已水合工作区（[@nwparker](https://github.com/nwparker)，[#18150](https://github.com/stablyai/orca/pull/18150)）
- 测试（editor）：隔离批处理模型清扫的前缀泄漏，删除无效导出（[@nwparker](https://github.com/nwparker)，[#18240](https://github.com/stablyai/orca/pull/18240)）
- 性能（renderer）：useRef 种子只建一次，不要每次渲染（[@nwparker](https://github.com/nwparker)，[#18159](https://github.com/stablyai/orca/pull/18159)）
- 性能（renderer）：把 react-markdown 和 emoji 目录移出启动路径（少 371 KB 急切 JS）（[@nwparker](https://github.com/nwparker)，[#18149](https://github.com/stablyai/orca/pull/18149)）
- 性能（renderer）：隐藏窗口后停止六个定时器（[@nwparker](https://github.com/nwparker)，[#18134](https://github.com/stablyai/orca/pull/18134)）
- 性能（sidebar）：避免每次重算重新分配 423 个工作区描述符和 193 个桶投影（[@nwparker](https://github.com/nwparker)，[#18241](https://github.com/stablyai/orca/pull/18241)）
- 修复（worktrees）：已解析 worktree 快照不再替从未见过的仓库作答（[@nwparker](https://github.com/nwparker)，[#18295](https://github.com/stablyai/orca/pull/18295)）
- 性能（file-explorer）：目录刷新时不再把可见树重建两遍（[@nwparker](https://github.com/nwparker)，[#18319](https://github.com/stablyai/orca/pull/18319)）
- 性能（browser-pane）：客户端托管页面叠加层共用一个 rAF 循环（[@nwparker](https://github.com/nwparker)，[#18313](https://github.com/stablyai/orca/pull/18313)）
- 修复（cleanup）：工作区清理按已解析执行主机路由，不用仓库 connectionId（[@nwparker](https://github.com/nwparker)，[#18358](https://github.com/stablyai/orca/pull/18358)）
- 性能（editor）：避免每次渲染都重新分类整篇 Markdown（[@nwparker](https://github.com/nwparker)，[#18324](https://github.com/stablyai/orca/pull/18324)）
- 修复（source-control）：托管审查按已解析执行主机路由（[@nwparker](https://github.com/nwparker)，[#18382](https://github.com/stablyai/orca/pull/18382)）
- 性能（renderer）：为 diff 评论建索引，跳过空水合，去掉重复 normalize（[@nwparker](https://github.com/nwparker)，[#18375](https://github.com/stablyai/orca/pull/18375)）
- 修复（crash-reporting）：记录 Orca 发起的进程树终止，以便判定被杀的渲染器（[@nwparker](https://github.com/nwparker)，[#18367](https://github.com/stablyai/orca/pull/18367)）
- 性能（renderer）：把保险库和编辑器订阅移出每次写入路径（[@nwparker](https://github.com/nwparker)，[#18374](https://github.com/stablyai/orca/pull/18374)）
- 性能（renderer）：隐藏窗口时挂起休眠和面板看门狗工作（[@nwparker](https://github.com/nwparker)，[#18373](https://github.com/stablyai/orca/pull/18373)）

### Agent 与 Native Chat {#v1-4-197-native-chat}

- 修复（native-chat）：忽略过期的已恢复 working 状态（[@brennanb2025](https://github.com/brennanb2025)，[#17995](https://github.com/stablyai/orca/pull/17995)）
- 测试（orchestration）：意外的第二次探测调用要明确失败（[@nwparker](https://github.com/nwparker)，[#18037](https://github.com/stablyai/orca/pull/18037)）
- 修复（runtime）：从主机清单回收被围栏的 agent-session 拉起（[@nwparker](https://github.com/nwparker)，[#17976](https://github.com/stablyai/orca/pull/17976)）
- 回退（native-chat）：去掉推测性的 Fable 模型切换探测（[@brennanb2025](https://github.com/brennanb2025)，[#18215](https://github.com/stablyai/orca/pull/18215)）
- 修复（agents）：防止更深的厂商助手抢走窗格的 Agent 身份（[@brennanb2025](https://github.com/brennanb2025)，[#18062](https://github.com/stablyai/orca/pull/18062)）
- 修复 Agent 看板的设置配置（[@AmethystLiang](https://github.com/AmethystLiang)，[#18245](https://github.com/stablyai/orca/pull/18245)）
- 修复（native-chat）：保存过程中显示粘贴图片，并允许预览（[@brennanb2025](https://github.com/brennanb2025)，[#18118](https://github.com/stablyai/orca/pull/18118)）
- 修复（native-chat）：在 Codex 结构化聊天中显示图片（[@brennanb2025](https://github.com/brennanb2025)，[#18266](https://github.com/stablyai/orca/pull/18266)）
- 修复（native-chat）：让结构化 Codex 启动抗竞态（[@brennanb2025](https://github.com/brennanb2025)，[#18251](https://github.com/stablyai/orca/pull/18251)）
- 修复：macOS 的 $USER 含 @ 时 Claude 配额显示不可用（[@rudironsoni](https://github.com/rudironsoni)，[#16673](https://github.com/stablyai/orca/pull/16673)）
- 性能（agent-status）：缓存窗格路由与新鲜度下限，每笔事务只克隆一次暂存状态（[@nwparker](https://github.com/nwparker)，[#18323](https://github.com/stablyai/orca/pull/18323)）
- 新增（native-chat）：统一本地 Agent 入口路由（[@brennanb2025](https://github.com/brennanb2025)，[#18248](https://github.com/stablyai/orca/pull/18248)）

### 终端 {#v1-4-197-terminal}

- 修复（linux）：AppImage 只解压一次，给 CLI 单一入口（[@nwparker](https://github.com/nwparker)，[#15081](https://github.com/stablyai/orca/pull/15081)）
- 终端标签增加「复制 Session ID」菜单项（[@AmethystLiang](https://github.com/AmethystLiang)，[#18039](https://github.com/stablyai/orca/pull/18039)）
- 修复（terminal）：恢复的 PTY 所有者无法核实时仍保留窗格（[@brennanb2025](https://github.com/brennanb2025)，[#17860](https://github.com/stablyai/orca/pull/17860)）
- 修复（relay）：说明 node-pty 加载失败原因，而不是一次猜四个（[@nwparker](https://github.com/nwparker)，[#17891](https://github.com/stablyai/orca/pull/17891)）
- 修复（agent-status）：仍持有 PTY 的过期窗格报 unverifiable，不报 idle（[@nwparker](https://github.com/nwparker)，[#18012](https://github.com/stablyai/orca/pull/18012)）
- 修复（ssh）：可重建的 node-pty 失败只修一次，不再让用户重连（[@nwparker](https://github.com/nwparker)，[#17907](https://github.com/stablyai/orca/pull/17907)）
- 文档（win）：PTY OSC 133 引导继续用 -EncodedCommand（MDE 发现已拒绝）（[@OrcaWin](https://github.com/OrcaWin)，[#17875](https://github.com/stablyai/orca/pull/17875)）
- 修复（remote-terminal）：去掉三个只能被永远不会到来的事件清掉的闩锁（[@nwparker](https://github.com/nwparker)，[#17945](https://github.com/stablyai/orca/pull/17945)）
- 修复（terminal）：避免重启的客户端把自己的 SSH 重挂身份发布掉（[@nwparker](https://github.com/nwparker)，[#17881](https://github.com/stablyai/orca/pull/17881)）
- 修复（native-chat）：Claude 选择器不展示已禁用的 CLI 模型（[@brennanb2025](https://github.com/brennanb2025)，[#18055](https://github.com/stablyai/orca/pull/18055)）
- 修复（pty,remote）：关闭 pty master 描述符泄漏，以及两处远程终端缺陷（[@nwparker](https://github.com/nwparker)，[#17914](https://github.com/stablyai/orca/pull/17914)）
- 修复（settings）：展示 CLI 注册失败原因（[@nwparker](https://github.com/nwparker)，[#18125](https://github.com/stablyai/orca/pull/18125)）
- 修复（ssh）：中继主机上也关闭 pty master 描述符泄漏（[@nwparker](https://github.com/nwparker)，[#17920](https://github.com/stablyai/orca/pull/17920)）
- 性能（sidebar,terminal）：缓存终端标题的 Agent 分类和谱系投影（[@nwparker](https://github.com/nwparker)，[#18148](https://github.com/stablyai/orca/pull/18148)）
- 性能（terminal）：不再把每一帧 Agent 旋转标题送到渲染器（[@nwparker](https://github.com/nwparker)，[#18155](https://github.com/stablyai/orca/pull/18155)）
- 性能（terminal）：每次监视走一遍注册表，而不是每个工作区一遍（[@nwparker](https://github.com/nwparker)，[#18157](https://github.com/stablyai/orca/pull/18157)）
- Sta 6308 终端标签上下文菜单增加复制 Session ID（[@AmethystLiang](https://github.com/AmethystLiang)，[#18070](https://github.com/stablyai/orca/pull/18070)）
- 修复（terminal）：隐藏窗格确定地停止光标闪烁（[@nwparker](https://github.com/nwparker)，[#18152](https://github.com/stablyai/orca/pull/18152)）
- 性能（startup）：不可达 SSH 主机不再挡住本地终端恢复（[@nwparker](https://github.com/nwparker)，[#18164](https://github.com/stablyai/orca/pull/18164)）
- 性能（pty）：避免启动历史 GC 让主进程卡住数秒（[@nwparker](https://github.com/nwparker)，[#18165](https://github.com/stablyai/orca/pull/18165)）
- 性能（terminal）：只重绘 Agent 重画碰到的行（[@nwparker](https://github.com/nwparker)，[#18169](https://github.com/stablyai/orca/pull/18169)）
- 终端错误浮层改为不透明（[@brennanb2025](https://github.com/brennanb2025)，[#18231](https://github.com/stablyai/orca/pull/18231)）
- 修复（terminal）：把 Agent 提示降级前确认未识别的前台（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18238](https://github.com/stablyai/orca/pull/18238)）
- 修复（terminal）：按主机网格回放成对运行时快照（[@nwparker](https://github.com/nwparker)，[#18132](https://github.com/stablyai/orca/pull/18132)）
- 修复（remote-terminal）：未确认额度时保持流停滞截止武装（[@nwparker](https://github.com/nwparker)，[#17871](https://github.com/stablyai/orca/pull/17871)）
- 修复（ssh）：中继刚证明还活着的 PTY 上不要再拉起 Agent（[@nwparker](https://github.com/nwparker)，[#17951](https://github.com/stablyai/orca/pull/17951)）
- 修复（remote）：避免冲突路径键、死冲突状态、移除活动 PTY 导致丢标签（[@nwparker](https://github.com/nwparker)，[#17948](https://github.com/stablyai/orca/pull/17948)）
- 修复（ssh）：租约与运行时 pty id 用同一种形式比较，以便窗格恢复（[@nwparker](https://github.com/nwparker)，[#17969](https://github.com/stablyai/orca/pull/17969)）
- 修复（relay）：不要把 PTY 恢复进主机上已经不存在的目录（[@nwparker](https://github.com/nwparker)，[#18351](https://github.com/stablyai/orca/pull/18351)）
- 修复（memory）：补上两个按 id 的回收缺口，并收紧 pty 退出回收（[@nwparker](https://github.com/nwparker)，[#18320](https://github.com/stablyai/orca/pull/18320)）
- 性能（terminal）：每窗格 store 监听从 48 降到 17（[@nwparker](https://github.com/nwparker)，[#18322](https://github.com/stablyai/orca/pull/18322)）
- 性能（main）：共用一次 terminal-wait 扫描，SIGWINCH 的 ps fork 减半，分块携带 wait-blocked，上提重绘正则（[@nwparker](https://github.com/nwparker)，[#18315](https://github.com/stablyai/orca/pull/18315)）
- 性能（renderer）：把英文目录和 xterm WebGL 插件移出启动图（[@nwparker](https://github.com/nwparker)，[#18326](https://github.com/stablyai/orca/pull/18326)）
- 新增（cli）：让关闭终端成为规范的工作区拆除路径（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18073](https://github.com/stablyai/orca/pull/18073)）
- 修复（terminal）：释放暂停闩锁时冲掉 xterm 停住的渲染器缩放（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18510](https://github.com/stablyai/orca/pull/18510)）

### Windows、远程服务器与 SSH {#v1-4-197-windows-ssh}

- 修复（ssh）：未应答的 native-deps 探测不再清掉健康中继（[@nwparker](https://github.com/nwparker)，[#17979](https://github.com/stablyai/orca/pull/17979)）
- 修复（daemon）：挂接取消跟在客户端超时之后（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#17816](https://github.com/stablyai/orca/pull/17816)）
- 性能（worktree）：批量远程冲突探测，并重新武装预备检出（[@nwparker](https://github.com/nwparker)，[#17829](https://github.com/stablyai/orca/pull/17829)）
- 测试（relay）：测试 WebSocket 服务器绑到 loopback（[@nwparker](https://github.com/nwparker)，[#18045](https://github.com/stablyai/orca/pull/18045)）
- 新增（telemetry）：度量 macOS 过期 daemon 接管与 cwd 拒绝（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18043](https://github.com/stablyai/orca/pull/18043)）
- 修复（daemon）：创建可以等正在进行的会话拆除结束（[@OrcaWin](https://github.com/OrcaWin)，[#18063](https://github.com/stablyai/orca/pull/18063)）
- CI（release）：让 Windows 发布门禁可确定（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18067](https://github.com/stablyai/orca/pull/18067)）
- 修复（ssh）：失败的 worktree 扫描不再发布权威空结果（[@nwparker](https://github.com/nwparker)，[#17833](https://github.com/stablyai/orca/pull/17833)）
- 修复（preload）：为 ssh terminateSessions 桥接结果补类型（[@nwparker](https://github.com/nwparker)，[#18079](https://github.com/stablyai/orca/pull/18079)）
- 修复（ssh）：端点被接管时不要把活动中继变成孤儿（[@nwparker](https://github.com/nwparker)，[#17821](https://github.com/stablyai/orca/pull/17821)）
- 修复（ssh）：强制停止抛错时不要让 relay-reset 租约过期（[@nwparker](https://github.com/nwparker)，[#17962](https://github.com/stablyai/orca/pull/17962)）
- 测试（ssh）：中继重挂失败退出标成未核实，而不是已证实（[@nwparker](https://github.com/nwparker)，[#17963](https://github.com/stablyai/orca/pull/17963)）
- 修复（remote）：无标签清单和回放行不得授权销毁（[@nwparker](https://github.com/nwparker)，[#17981](https://github.com/stablyai/orca/pull/17981)）
- 性能（worktree）：fork PR 远程创建从创建时推迟到首次使用（[@nwparker](https://github.com/nwparker)，[#17922](https://github.com/stablyai/orca/pull/17922)）
- 修复（ssh）：无标记的 native-deps 探测不得删除两个原生模块（[@nwparker](https://github.com/nwparker)，[#18011](https://github.com/stablyai/orca/pull/18011)）
- 性能（ssh）：跨包共用中继原生依赖，不要按安装目录重编（[@nwparker](https://github.com/nwparker)，[#18033](https://github.com/stablyai/orca/pull/18033)）
- 文档（windows）：记录 EDR 信号面（[@OrcaWin](https://github.com/OrcaWin)，[#17856](https://github.com/stablyai/orca/pull/17856)）
- 修复（build）：把 config/scripts 固定为 LF，以便 Windows 跑测试（[@OrcaWin](https://github.com/OrcaWin)，[#18056](https://github.com/stablyai/orca/pull/18056)）
- 测试（ci）：把 Windows 门禁测试收进两份注册列表（[@OrcaWin](https://github.com/OrcaWin)，[#18047](https://github.com/stablyai/orca/pull/18047)）
- 修复（tooling）：不靠 Windows .cmd 垫片跑 oxlint 门禁（[@OrcaWin](https://github.com/OrcaWin)，[#17894](https://github.com/stablyai/orca/pull/17894)）
- 修复（relay）：守住三条投递释放路径，并说明正在恢复的来源（[@nwparker](https://github.com/nwparker)，[#18038](https://github.com/stablyai/orca/pull/18038)）
- 测试（ssh）：容器化中继故障注入并带判定断言（[@nwparker](https://github.com/nwparker)，[#18017](https://github.com/stablyai/orca/pull/18017)）
- 文档（ssh）：记录应用更新会把中继终端置于 `unverifiable`（[@nwparker](https://github.com/nwparker)，[#17972](https://github.com/stablyai/orca/pull/17972)）
- 修复（relay）：过大响应要失败，而不是关掉客户端（[@nwparker](https://github.com/nwparker)，[#17968](https://github.com/stablyai/orca/pull/17968)）
- 修复（ssh）：远程 PowerShell 命令保持在 sshd 的 cmd.exe 能接受的范围内（[@nwparker](https://github.com/nwparker)，[#17947](https://github.com/stablyai/orca/pull/17947)）
- 修复（wsl）：为 wsl.exe 拉起指定明确的 Windows cwd（[@nwparker](https://github.com/nwparker)，[#17834](https://github.com/stablyai/orca/pull/17834)）
- 修复（orcad）：不再要求只有 macOS 构建才有的 spawn-helper（[@nwparker](https://github.com/nwparker)，[#18122](https://github.com/stablyai/orca/pull/18122)）
- 修复（relay）：过大的 fs.listFiles 回复改为流式，而不是拒绝（[@nwparker](https://github.com/nwparker)，[#17954](https://github.com/stablyai/orca/pull/17954)）
- 测试：把远程窗格链接路由简化为服务器托管放置（[@AmethystLiang](https://github.com/AmethystLiang)，[#18219](https://github.com/stablyai/orca/pull/18219)）
- 性能（git）：远程 URL 问题用一个子进程回答，不要每个远程一个（[@nwparker](https://github.com/nwparker)，[#18158](https://github.com/stablyai/orca/pull/18158)）
- 性能（windows）：去掉未读 Memory 标志，每个快照共用一份进程表投影（[@nwparker](https://github.com/nwparker)，[#18151](https://github.com/stablyai/orca/pull/18151)）
- 性能（remote）：把无证据巡检节奏用到远程窗格（每空闲窗格每分钟 30 次往返降到 4 次）（[@nwparker](https://github.com/nwparker)，[#18146](https://github.com/stablyai/orca/pull/18146)）
- 修复（ssh）：仅在主机证明下回收客户端已确认丢失的中继 PTY（[@nwparker](https://github.com/nwparker)，[#17831](https://github.com/stablyai/orca/pull/17831)）
- 修复（ssh）：避免迟到的 SFTP 流错误打崩 main，中继套接字保持在 sun_path 内（[@nwparker](https://github.com/nwparker)，[#17862](https://github.com/stablyai/orca/pull/17862)）
- 修复（watcher）：中继 watch-root 容量拒绝走慢梯，不走快梯（[@nwparker](https://github.com/nwparker)，[#17950](https://github.com/stablyai/orca/pull/17950)）
- 修复（ssh）：未应答的 native-deps 探测要记日志，不要静默启动（[@nwparker](https://github.com/nwparker)，[#18000](https://github.com/stablyai/orca/pull/18000)）
- 修复（ssh）：卡住的中继链路标为丢失，沉默不再当判定（[@nwparker](https://github.com/nwparker)，[#17817](https://github.com/stablyai/orca/pull/17817)）
- 修复（remote-runtime）：让每一条已宣传的恢复路径都能走到，并去掉两个恢复闩锁（[@nwparker](https://github.com/nwparker)，[#17822](https://github.com/stablyai/orca/pull/17822)）
- 修复（relay）：回收主机证明已不在的 PTY，并停止两次每轮扫描风暴（[@nwparker](https://github.com/nwparker)，[#17832](https://github.com/stablyai/orca/pull/17832)）
- 修复（ssh）：应答每一段 MFA，停止拨打未认领别名，并说明 clone 失败位置（[@nwparker](https://github.com/nwparker)，[#17946](https://github.com/stablyai/orca/pull/17946)）
- 修复（relay）：用容量丢失发信号，而不是丢、挂或截断（[@nwparker](https://github.com/nwparker)，[#17870](https://github.com/stablyai/orca/pull/17870)）
- 测试（e2e）：修好 SSH 冻结复现，并探测两处无人覆盖的失败模式（[@nwparker](https://github.com/nwparker)，[#17940](https://github.com/stablyai/orca/pull/17940)）
- 修复（ssh）：解析 worktree 的执行主机，不要从一行仓库记录猜（[@nwparker](https://github.com/nwparker)，[#17909](https://github.com/stablyai/orca/pull/17909)）
- 修复（ssh）：四处主机盲区改走已解析执行主机（[@nwparker](https://github.com/nwparker)，[#17919](https://github.com/stablyai/orca/pull/17919)）
- 修复（ssh）：远程/本地由已解析执行主机决定，不用原始字段（[@nwparker](https://github.com/nwparker)，[#18294](https://github.com/stablyai/orca/pull/18294)）
- 修复（ssh）：只有客户端缺失证据时不要重新拉起窗格（[@nwparker](https://github.com/nwparker)，[#17957](https://github.com/stablyai/orca/pull/17957)）
- 性能（relay）：去掉长会话 SSH 变慢背后的两项无界增长（[@nwparker](https://github.com/nwparker)，[#17818](https://github.com/stablyai/orca/pull/17818)）
- 修复（remote）：解析拉起 cwd、node 管理目录、保险库主机和回滚种子（[@nwparker](https://github.com/nwparker)，[#17952](https://github.com/stablyai/orca/pull/17952)）
- 修复（wsl）：runWslProcess 不再继承可移除的拉起目录（[@nwparker](https://github.com/nwparker)，[#17837](https://github.com/stablyai/orca/pull/17837)）
- 修复（ssh）：过期租约可以重新挂上孤儿，而不是丢下（[@nwparker](https://github.com/nwparker)，[#17965](https://github.com/stablyai/orca/pull/17965)）
- 修复（ssh）：取代与 id 回收使用各自的租约标记（[@nwparker](https://github.com/nwparker)，[#17966](https://github.com/stablyai/orca/pull/17966)）
- 修复（ssh）：重建窗格前需要主机死亡证明，并松开卡住的过期租约（[@nwparker](https://github.com/nwparker)，[#18013](https://github.com/stablyai/orca/pull/18013)）
- 新增（ssh）：带主机戳的远程前台身份（[@brennanb2025](https://github.com/brennanb2025)，[#18078](https://github.com/stablyai/orca/pull/18078)）
- 修复（ssh）：挑选合格的过期租约，不是第一个匹配窗格的（[@nwparker](https://github.com/nwparker)，[#18366](https://github.com/stablyai/orca/pull/18366)）
- 修复（repos）：图标与远程身份探测按已解析执行主机路由（[@nwparker](https://github.com/nwparker)，[#18377](https://github.com/stablyai/orca/pull/18377)）
- 文档（ssh）：记录 keep-alive-until-reset as default grace（[@nwparker](https://github.com/nwparker)，[#18383](https://github.com/stablyai/orca/pull/18383)）
- 修复（ssh）：路由 remaining expired-lease readers through reattach predicate（[@nwparker](https://github.com/nwparker)，[#18378](https://github.com/stablyai/orca/pull/18378)）
- 修复（git）：share worktree-list and unmerged-entry porcelain parsers，配合 SSH relay（[@nwparker](https://github.com/nwparker)，[#18389](https://github.com/stablyai/orca/pull/18389)）
- 杂项（cloud）：增加 relay fence broker, ops console, Terraform root, scripts, and 24 cloud-* workflows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18413](https://github.com/stablyai/orca/pull/18413)）
- 修复（cloud）：停止 asking setup-node to cache pnpm store in relay workflows（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18432](https://github.com/stablyai/orca/pull/18432)）
- 修复（cloud）：停止 passing manage_artifact_dns to relay root（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#18442](https://github.com/stablyai/orca/pull/18442)）

### 移动端 {#v1-4-197-mobile}

- 回退 mobile search button floating layout（[@AmethystLiang](https://github.com/AmethystLiang)，[#17990](https://github.com/stablyai/orca/pull/17990)）
- 重构（mobile）：pin terminal WebView payload and split its widest slice（[@nwparker](https://github.com/nwparker)，[#18028](https://github.com/stablyai/orca/pull/18028)）
- 杂项（deps）：解析 81 of 83 Dependabot alerts in docs/site and mobile（[@nwparker](https://github.com/nwparker)，[#18061](https://github.com/stablyai/orca/pull/18061)）
- Update WeChat community to group 8（[@AmethystLiang](https://github.com/AmethystLiang)，[#18095](https://github.com/stablyai/orca/pull/18095)）
- 性能（renderer）：避免 mobile sync key rehashing every dirty file on each keystroke（[@nwparker](https://github.com/nwparker)，[#18154](https://github.com/stablyai/orca/pull/18154)）
- Align worktree host labels 跨越 desktop and mobile（[@brennanb2025](https://github.com/brennanb2025)，[#18237](https://github.com/stablyai/orca/pull/18237)）
- 文档：update localized Android APK links to 0.0.47（[@AmethystLiang](https://github.com/AmethystLiang)，[#18292](https://github.com/stablyai/orca/pull/18292)）

### 性能与可靠性 {#v1-4-197-perf-reliability}

- 重构：name split modules for what they contain（[@nwparker](https://github.com/nwparker)，[#17927](https://github.com/stablyai/orca/pull/17927)）
- 修复（worktrees）：reclaim orphaned pr-* fork remotes（[@nwparker](https://github.com/nwparker)，[#17842](https://github.com/stablyai/orca/pull/17842)）
- 测试（child-process）：让 import ratchet able to fail（[@nwparker](https://github.com/nwparker)，[#18026](https://github.com/stablyai/orca/pull/18026)）
- 修复（git）：recover commit ref badges on Git older than 2.43（[@nwparker](https://github.com/nwparker)，[#17923](https://github.com/stablyai/orca/pull/17923)）
- 修复（agents）：clear unread completion marker when acknowledging agents（[@nwparker](https://github.com/nwparker)，[#17924](https://github.com/stablyai/orca/pull/17924)）
- 修复（dev）：保持 shared Electron dist writable for dev app（[@nwparker](https://github.com/nwparker)，[#18035](https://github.com/stablyai/orca/pull/18035)）
- 修复（worktrees）：retire runtime-host metadata scan proved gone（[@nwparker](https://github.com/nwparker)，[#17901](https://github.com/stablyai/orca/pull/17901)）
- 测试：停止 two suites failing for reasons unrelated to their subject（[@nwparker](https://github.com/nwparker)，[#18036](https://github.com/stablyai/orca/pull/18036)）
- 修复（preload）：让 dropped bridge key compile error（[@nwparker](https://github.com/nwparker)，[#18025](https://github.com/stablyai/orca/pull/18025)）
- 性能（git）：pack loose refs Orca's own fetches leave behind（[@nwparker](https://github.com/nwparker)，[#17857](https://github.com/stablyai/orca/pull/17857)）
- 修复（runtime）：scope create-dedupe inventory to owning host（[@nwparker](https://github.com/nwparker)，[#17983](https://github.com/stablyai/orca/pull/17983)）
- 修复（runtime）：scope both reconcile call sites to owning host uniformly（[@nwparker](https://github.com/nwparker)，[#18004](https://github.com/stablyai/orca/pull/18004)）
- 修复 incorrect open file cmd: prevent file 创建 for spaced input（[@AmethystLiang](https://github.com/AmethystLiang)，[#18054](https://github.com/stablyai/orca/pull/18054)）
- 修复（web）：declare socket dead even when its probe cannot be sent（[@nwparker](https://github.com/nwparker)，[#17838](https://github.com/stablyai/orca/pull/17838)）
- 修复（linux）：land reviewed Linux packaging stack on main（[@nwparker](https://github.com/nwparker)，[#18100](https://github.com/stablyai/orca/pull/18100)）
- 文档（linux）：say which package to install and how updates arrive（[@nwparker](https://github.com/nwparker)，[#18123](https://github.com/stablyai/orca/pull/18123)）
- Graduate Agents activity view，配合 filtering, persistence, and performance improvements（[@AmethystLiang](https://github.com/AmethystLiang)，[#18222](https://github.com/stablyai/orca/pull/18222)）
- CI：checkout PR head for reusable E2E（[@AmethystLiang](https://github.com/AmethystLiang)，[#18230](https://github.com/stablyai/orca/pull/18230)）
- 修复（diff-comments）：停止 review refreshes from blanking inline comment cards（[@nwparker](https://github.com/nwparker)，[#18142](https://github.com/stablyai/orca/pull/18142)）
- 性能（keybindings）：停止 recomputing shortcut labels on every render（[@nwparker](https://github.com/nwparker)，[#18145](https://github.com/stablyai/orca/pull/18145)）
- 性能（persistence）：build state file once per save，而不是 seven times（[@nwparker](https://github.com/nwparker)，[#18161](https://github.com/stablyai/orca/pull/18161)）
- 性能（platform）：解析 immutable platform payload once，而不是~19x/sec（[@nwparker](https://github.com/nwparker)，[#18135](https://github.com/stablyai/orca/pull/18135)）
- 性能（sidebar）：停止 rebuilding per-card selector records on every store write（[@nwparker](https://github.com/nwparker)，[#18133](https://github.com/stablyai/orca/pull/18133)）
- 修复（process-table）：fail short `ps` capture loudly, and stop resume spending 49 of them（[@nwparker](https://github.com/nwparker)，[#18166](https://github.com/stablyai/orca/pull/18166)）
- 性能（diff）：停止 redrawing whole 合并 diff file tree on every section load（[@nwparker](https://github.com/nwparker)，[#18140](https://github.com/stablyai/orca/pull/18140)）
- 修复（github）：bound and coalesce Orca star check so gh children cannot pile up（[@nwparker](https://github.com/nwparker)，[#18239](https://github.com/stablyai/orca/pull/18239)）
- 增加 automation runs dashboard，配合 pagination and filtering（[@AmethystLiang](https://github.com/AmethystLiang)，[#18226](https://github.com/stablyai/orca/pull/18226)）
- 重构（process-table）：extract correlation indexes into their own module（[@nwparker](https://github.com/nwparker)，[#18246](https://github.com/stablyai/orca/pull/18246)）
- Auto e2e tests autofix scheduled ci 1h run 32 20260902T0700（[@AmethystLiang](https://github.com/AmethystLiang)，[#18227](https://github.com/stablyai/orca/pull/18227)）
- 修复（i18n）：补上 #18245 漏掉的三条 activity 英文键（[@nwparker](https://github.com/nwparker)，[#18250](https://github.com/stablyai/orca/pull/18250)）
- 性能（diff）：大型审查时对合并 diff 文件树行做窗口化（[@nwparker](https://github.com/nwparker)，[#18236](https://github.com/stablyai/orca/pull/18236)）
- 修复（gh）：POSIX 上到期时回收整个 gh/glab 进程树（[@nwparker](https://github.com/nwparker)，[#18258](https://github.com/stablyai/orca/pull/18258)）
- 测试（e2e）：在冻结复现里把 testInfo 传给 startDockerSshRelayTarget（[@nwparker](https://github.com/nwparker)，[#18257](https://github.com/stablyai/orca/pull/18257)）
- 修复（activity）：持久化 Agent 未读筛选与分组（[@AmethystLiang](https://github.com/AmethystLiang)，[#18255](https://github.com/stablyai/orca/pull/18255)）
- 修复（path）：避免注入的用户 bin 目录压过继承的 PATH（[@nwparker](https://github.com/nwparker)，[#18265](https://github.com/stablyai/orca/pull/18265)）
- 新增（providers）：按执行主机分发 git 与文件系统 provider（[@nwparker](https://github.com/nwparker)，[#18296](https://github.com/stablyai/orca/pull/18296)）
- 修复（runtime）：运行时 Git 按已解析执行主机路由，不用仓库 connectionId（[@nwparker](https://github.com/nwparker)，[#18307](https://github.com/stablyai/orca/pull/18307)）
- 修复（runtime）：运行时文件系统命令按已解析执行主机路由（[@nwparker](https://github.com/nwparker)，[#18325](https://github.com/stablyai/orca/pull/18325)）
- 把域名路径当 URL，不当新文件（[@AmethystLiang](https://github.com/AmethystLiang)，[#18340](https://github.com/stablyai/orca/pull/18340)）
- 性能（history-gc）：用 dirent、去掉仅用于日志的大小扫描，减少 12,259 次启动系统调用（[@nwparker](https://github.com/nwparker)，[#18314](https://github.com/stablyai/orca/pull/18314)）
- 性能（sidebar）：缓存谱系祖先索引并预计算排序标签（[@nwparker](https://github.com/nwparker)，[#18318](https://github.com/stablyai/orca/pull/18318)）
- 性能（combined-diff）：避免每次加载分区都重建整段派生状态（[@nwparker](https://github.com/nwparker)，[#18321](https://github.com/stablyai/orca/pull/18321)）
- 性能（persistence）：停止在配置档存储里重写多余字节（[@nwparker](https://github.com/nwparker)，[#18317](https://github.com/stablyai/orca/pull/18317)）
- 杂项（workspaces）：删除无效的 workspaceCleanup:hasKillableLocalProcesses IPC（[@nwparker](https://github.com/nwparker)，[#18386](https://github.com/stablyai/orca/pull/18386)）
- 性能（hot-paths）：删掉排序、资源管理器、Monaco、RPC、快照里的纯分配工作（[@nwparker](https://github.com/nwparker)，[#18372](https://github.com/stablyai/orca/pull/18372)）
- 用不透明背景修表头透明（[@AmethystLiang](https://github.com/AmethystLiang)，[#18499](https://github.com/stablyai/orca/pull/18499)）

### 新贡献者 {#v1-4-197-contributors}

-  @rudironsoni made their first contribution [#16673](https://github.com/stablyai/orca/pull/16673)

**完整变更对照：** [v1.4.196...v1.4.197](https://github.com/stablyai/orca/compare/v1.4.196...v1.4.197)
