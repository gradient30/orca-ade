# 更新日志 {#changelog}

顶栏「更新」显示最近三次核心摘要；本页在打开时**自动抓取**官方 [Releases](https://github.com/stablyai/orca/releases)，并译成中文。命令、产品名、模块 scope 与 PR 编号保持英文。

> 非官方译本。数据源：`stablyai/orca` 的 GitHub Releases（跳过 mobile / android 与预发布）。已有中文底稿的版本不会被英文机翻覆盖。

## 核心摘要 {#highlights}

| 版本 | 日期 | 一句话 |
| --- | --- | --- |
| [v1.4.205](#v1-4-205) | 2026年9月17日 | 聊天消息轨道，归档失败拦截删除，Codex 扫描提速 |
| [v1.4.204](#v1-4-204) | 2026年9月16日 | 聊天拖放与 Fast 模式，工作区恢复 |
| [v1.4.203](#v1-4-203) | 2026年9月15日 | Electron 安全修复，侧栏嵌套，移动推送回归 |

### v1.4.205 · 聊天消息轨道，归档失败拦截删除，Codex 扫描提速 {#v1-4-205-summary}

2026年9月17日 · [本页全文](#v1-4-205) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.205)

- Agent 与聊天：Native Chat 增加提问跳转轨道，恢复的对话钉在末尾；超时 hook 会真正终止进程树。
- 工作区、编辑器与源码管理：归档 hook 失败会拦住 worktree 删除；暂存失败可重试；代码块可复制。
- 终端与远程：终端重命名与 PTY 句柄在轮换后仍保留；中继失败可按阶段诊断。Codex 冷扫描从数分钟降到一分钟内。

### v1.4.204 · 聊天拖放与 Fast 模式，工作区恢复 {#v1-4-204-summary}

2026年9月16日 · [本页全文](#v1-4-204) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.204)

- Agent 与聊天：Native Chat 支持文件拖放和按提供方区分的 Fast 模式；重启后能干净恢复结构化聊天。
- 工作区与移动端：工作区在选择 Agent 后重新播种，能从激活失败中恢复；移动端继续 typed-RPC 迁移。
- 性能：终端文件链接改为批量检查，浏览器输入在进程内派发，并限制 WSL skill 发现范围。

### v1.4.203 · Electron 安全修复，侧栏嵌套，移动推送回归 {#v1-4-203-summary}

2026年9月15日 · [本页全文](#v1-4-203) · [官方 Release](https://github.com/stablyai/orca/releases/tag/v1.4.203)

- 可靠性与安全：Electron 已升级以修复 glibc environ use-after-free；浏览器 cookie 迁移更稳；worktree 创建即使后续步骤失败也能干净完成。
- Agent 与聊天：Native Chat 能根据提供方历史恢复因重启滞留的发送；Agent 状态不再依赖运行时保留的行存储。
- 工作区与移动端：文件夹工作区保留已保存的名称与分组；侧栏嵌套更好用；移动端恢复推送、冷启动、通知与 Markdown 行为。

## 完整中文日志 {#full-notes}

## v1.4.205 聊天消息轨道，归档失败拦截删除，Codex 扫描提速 {#v1-4-205}

2026年9月17日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.205)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-205-short}

**Agent 与聊天：** Native Chat 增加了在提问之间跳转的消息轨道；恢复的对话会钉在末尾；消息变长时保持分离阅读位置；能精确取消待发送的提问。OMP 对话会按保存的名称从会话历史恢复；Agent 状态入口收束到单一准入点；超时的 hook 现在会真正终止其进程树。

**工作区、编辑器与源码管理：** 归档 hook 失败时会拦截 worktree 删除，而不是照删不误；worktree 登记能挺过可修剪的 git 文件状态。暂存 / 取消暂存 / 丢弃失败会带重试入口；自动化修复了 cron 步长展开，并把 tick 延迟排除出错过运行的宽限期；代码块增加复制按钮；Tiptap 升级并加了 Markdown 兼容防护。

**终端与远程：** 终端重命名能挺过窗格水合；句柄在 PTY 实例轮换后仍保留；子进程检查在无法核实时保持不确定结论，而不是猜测。中继失败可按获取阶段与执行阶段诊断；远程流式记录有上限。

**性能：** Codex 用量扫描的工作量大幅下降——每次扫描只解析一次归属，增长中的 rollout 从上次解析字节续扫——一次大型冷扫描从数分钟降到一分钟以内。扫描仍在主进程运行；迁到 worker 线程会在后续版本落地。

---

### 产品体验 {#v1-4-205-product}

#### 工作区、标签页与编辑器 {#v1-4-205-workspaces-tabs-editor}

> worktree 删除更安全，失败提示更清楚，Tiptap 升级并加了 Markdown 兼容防护。

- 新增：给代码块加上复制按钮（[@AmethystLiang](https://github.com/AmethystLiang)，[#20357](https://github.com/stablyai/orca/pull/20357)）
- 修复（composer）：说清楚附件拖放失败的原因（[@AmethystLiang](https://github.com/AmethystLiang)，[#20704](https://github.com/stablyai/orca/pull/20704)）
- 区分窗格加载失败和空状态（[@AmethystLiang](https://github.com/AmethystLiang)，[#20735](https://github.com/stablyai/orca/pull/20735)）
- 修复（worktrees）：安全移除可修剪的 git-file 登记（[@nwparker](https://github.com/nwparker)，[#20617](https://github.com/stablyai/orca/pull/20617)）
- 修复（worktrees）：保留无法核实的磁盘见证（[@AmethystLiang](https://github.com/AmethystLiang)，[#20713](https://github.com/stablyai/orca/pull/20713)）
- 修复（worktree）：归档 hook 失败时拦截删除（[@nwparker](https://github.com/nwparker)，[#20153](https://github.com/stablyai/orca/pull/20153)）
- 修复（automations）：修复 cron 步长展开和日期限制 [HELD — semantic half]（[@nwparker](https://github.com/nwparker)，[#20202](https://github.com/stablyai/orca/pull/20202)）
- 修复（automations）：tick 延迟不再计入错过运行的宽限期（[@nwparker](https://github.com/nwparker)，[#20819](https://github.com/stablyai/orca/pull/20819)）
- 改进：麦克风权限错误与拖放失败提示（[@AmethystLiang](https://github.com/AmethystLiang)，[#20801](https://github.com/stablyai/orca/pull/20801)）
- 报告剪贴板和编写器拖放失败（[@AmethystLiang](https://github.com/AmethystLiang)，[#20795](https://github.com/stablyai/orca/pull/20795)）
- 修复（deps）：迁移 Tiptap 安全更新，并加 Markdown 兼容防护（[@OrcaWin](https://github.com/OrcaWin)，[#19376](https://github.com/stablyai/orca/pull/19376)）
- 新增（design-system）：用 @shadcn/lint 门禁渲染器 UI（[@nwparker](https://github.com/nwparker)，[#20731](https://github.com/stablyai/orca/pull/20731)）
- 修复（ui）：限制空闲光标绘制，避免 Agent 窗格空转烧 CPU（[@innocarpe](https://github.com/innocarpe)，[#10554](https://github.com/stablyai/orca/pull/10554)）

#### 源码管理 {#v1-4-205-source-control}

> 暂存失败可恢复，Git 启动错误会说明真正原因。

- 暂存、取消暂存和丢弃失败时给出重试入口（[@AmethystLiang](https://github.com/AmethystLiang)，[#20423](https://github.com/stablyai/orca/pull/20423)）
- 修复（source-control）：防止分区标题和操作按钮文字换行（[@AmethystLiang](https://github.com/AmethystLiang)，[#20046](https://github.com/stablyai/orca/pull/20046)）
- 修复（git）：区分二进制不存在和 spawn ENOENT 时缺少 cwd（[@AmethystLiang](https://github.com/AmethystLiang)，[#20798](https://github.com/stablyai/orca/pull/20798)）

### Agent 与工作流 {#v1-4-205-agents-workflow}

#### Agent 可靠性与 Native Chat {#v1-4-205-agent-reliability}

> 聊天导航和对话定位更好，Agent 状态改由单一入口上报。

- 修复（native-chat）：在写入 journal 行之前限制 dispatch reason（[@brennanb2025](https://github.com/brennanb2025)，[#20654](https://github.com/stablyai/orca/pull/20654)）
- 修复（native-chat）：恢复的对话始终钉在末尾（[@brennanb2025](https://github.com/brennanb2025)，[#20651](https://github.com/stablyai/orca/pull/20651)）
- 修复（codex）：在准入时结算结构化发送，并停止铸造冲突的身份（[@brennanb2025](https://github.com/brennanb2025)，[#20138](https://github.com/stablyai/orca/pull/20138)）
- 修复（omp）：终端标题所有者改写后仍保留状态（[@nwparker](https://github.com/nwparker)，[#20610](https://github.com/stablyai/orca/pull/20610)）
- 修复（agents）：用完整项目名查找 OMP（[@nwparker](https://github.com/nwparker)，[#20647](https://github.com/stablyai/orca/pull/20647)）
- 修复（omp）：在会话历史中保留已保存的对话名称（[@nwparker](https://github.com/nwparker)，[#20636](https://github.com/stablyai/orca/pull/20636)）
- 修复（agent-session）：在界面释放时遵守备份恢复围栏下限（[@brennanb2025](https://github.com/brennanb2025)，[#20708](https://github.com/stablyai/orca/pull/20708)）
- 修复（hooks）：真正终止超时 hook 的进程树（[@nwparker](https://github.com/nwparker)，[#20576](https://github.com/stablyai/orca/pull/20576)）
- 修复（native-chat）：精确取消待发送的提问（[@brennanb2025](https://github.com/brennanb2025)，[#20601](https://github.com/stablyai/orca/pull/20601)）
- 修复：从会话历史恢复 OMP 子对话（[@nwparker](https://github.com/nwparker)，[#20629](https://github.com/stablyai/orca/pull/20629)）
- 修复（ai-vault）：展开嵌套的 OMP 会话历史（[@nwparker](https://github.com/nwparker)，[#20663](https://github.com/stablyai/orca/pull/20663)）
- 修复（native-chat）：让阅读位置停在最新消息上方（[@brennanb2025](https://github.com/brennanb2025)，[#20709](https://github.com/stablyai/orca/pull/20709)）
- 修复（native-chat）：对话增长时保留分离阅读位置（[@brennanb2025](https://github.com/brennanb2025)，[#20710](https://github.com/stablyai/orca/pull/20710)）
- 新增（native-chat）：增加在提问之间跳转的消息轨道（[@brennanb2025](https://github.com/brennanb2025)，[#20719](https://github.com/stablyai/orca/pull/20719)）
- 重构（agent-status）：把遗留状态入口隔离到单一准入点（[@brennanb2025](https://github.com/brennanb2025)，[#20716](https://github.com/stablyai/orca/pull/20716)）
- 修复（runtime）：把 tui-idle 证据排序应用到邮箱投递（[@nwparker](https://github.com/nwparker)，[#20578](https://github.com/stablyai/orca/pull/20578)）
- 修复（orchestration）：要求已登记的窗格键来证明结构化 worker 身份（[@brennanb2025](https://github.com/brennanb2025)，[#20664](https://github.com/stablyai/orca/pull/20664)）

#### 终端 {#v1-4-205-terminal}

> 重命名、句柄和 PTY 判定能挺过轮换、水合和不确定状态。

- 修复（omp）：保留带全局别名的 zsh 启动（[@nwparker](https://github.com/nwparker)，[#20621](https://github.com/stablyai/orca/pull/20621)）
- 修复（terminal）：在渲染器窗格水合之前保留重命名（[@nwparker](https://github.com/nwparker)，[#20619](https://github.com/stablyai/orca/pull/20619)）
- 修复：文件夹工作区变成 Git 仓库时仍保留 OMP 终端（[@nwparker](https://github.com/nwparker)，[#20653](https://github.com/stablyai/orca/pull/20653)）
- 修复：PTY 子进程判定保留无法核实的状态（[@AmethystLiang](https://github.com/AmethystLiang)，[#20729](https://github.com/stablyai/orca/pull/20729)）
- 修复（runtime）：PTY 实例轮换时保留终端句柄（[@nwparker](https://github.com/nwparker)，[#20779](https://github.com/stablyai/orca/pull/20779)）
- 修复（pty）：保留子进程检查的不确定性（[@AmethystLiang](https://github.com/AmethystLiang)，[#20756](https://github.com/stablyai/orca/pull/20756)）

#### 移动端 {#v1-4-205-mobile}

> 移动端继续 typed-RPC 迁移。

- 将移动端 app.json 升到 0.0.50（[@brennanb2025](https://github.com/brennanb2025)，[#20661](https://github.com/stablyai/orca/pull/20661)）
- 重构（mobile）：把小域迁到 RpcOperation（第 4 步）（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20705](https://github.com/stablyai/orca/pull/20705)）

#### 中继与云端 {#v1-4-205-relay-cloud}

> 中继失败可按阶段诊断，远程流式记录有上限。

- 修复（ai-vault）：限制远程 JSONL 流式记录（[@nwparker](https://github.com/nwparker)，[#20700](https://github.com/stablyai/orca/pull/20700)）
- 新增（runtime）：流式上传文件，而不是整文件缓冲（[@mmarabel](https://github.com/mmarabel)，[#16106](https://github.com/stablyai/orca/pull/16106)）
- 暴露预加载的 PostgreSQL 语句统计，用于中继诊断（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20712](https://github.com/stablyai/orca/pull/20712)）
- 按获取阶段与执行阶段诊断中继 PostgreSQL 失败（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20749](https://github.com/stablyai/orca/pull/20749)）
- 修复（relay）：在分离 Windows stdio 时打开真正的空设备（[@nwparker](https://github.com/nwparker)，[#20808](https://github.com/stablyai/orca/pull/20808)）

### 质量与交付 {#v1-4-205-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能改进 {#v1-4-205-perf-improvements}

> 针对性优化去掉了 Codex、OpenCode 和 Claude 用量扫描以及空操作 store 更新中的重复工作。这些降低了扫描成本，但还没有把扫描移出主进程。

其中包括：每次扫描只解析一次各 cwd 的 worktree（而不是每个事件都解析）；增长中的 Codex rollout 在边界摘要和 inode 检查后从上次解析字节续扫；空操作更新路径保持状态身份，避免 selector 反复跑。

- 修复（store）：阻止两次空写导致应用里每个 selector 重跑（[@OrcaWin](https://github.com/OrcaWin)，[#20641](https://github.com/stablyai/orca/pull/20641)）
- 修复（store）：空操作更新路径保持状态身份（[@nwparker](https://github.com/nwparker)，[#20703](https://github.com/stablyai/orca/pull/20703)）
- 性能（usage）：每次扫描只解析一次各 cwd 的 worktree（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21130](https://github.com/stablyai/orca/pull/21130)）
- 性能（codex-usage）：从上次解析字节续扫 rollout（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#21102](https://github.com/stablyai/orca/pull/21102)）

#### 可靠性、测试与交付 {#v1-4-205-reliability-tests}

- 修复（ci）：阻止小时版本落到低于已打 tag 或已发布的构建（[@nwparker](https://github.com/nwparker)，[#20699](https://github.com/stablyai/orca/pull/20699)）
- 测试：增加已验证的 OMP Native Chat mock 场景（[@nwparker](https://github.com/nwparker)，[#20655](https://github.com/stablyai/orca/pull/20655)）
- 测试（mobile）：把每条 RPC golden 钉到能到达它的 recorder 输入，而不是整个目录（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20662](https://github.com/stablyai/orca/pull/20662)）
- CI：把基线 Git 构建排除出兼容性矩阵通道（[@nwparker](https://github.com/nwparker)，[#20733](https://github.com/stablyai/orca/pull/20733)）
- 修复（ci）：不再在条件分支里定义 pilot mutant 测试（[@nwparker](https://github.com/nwparker)，[#20755](https://github.com/stablyai/orca/pull/20755)）
- 测试（native-chat）：把窗口测试工具从套件中拆出（[@nwparker](https://github.com/nwparker)，[#20773](https://github.com/stablyai/orca/pull/20773)）
- 杂项（lint）：加入 anti-slop oxlint 插件（钉版本，规则全关）（[@nwparker](https://github.com/nwparker)，[#20726](https://github.com/stablyai/orca/pull/20726)）
- 杂项（lint）：启用 anti-slop 的 no-reduce-accumulator-copy 和 no-widen-then-assert（[@nwparker](https://github.com/nwparker)，[#20780](https://github.com/stablyai/orca/pull/20780)）
- 修复（lint）：保持根 postinstall 作为唯一的 Electron 二进制安装负责人（[@nwparker](https://github.com/nwparker)，[#20788](https://github.com/stablyai/orca/pull/20788)）
- 测试（package）：让 postinstall 契约允许无关的串联步骤（[@nwparker](https://github.com/nwparker)，[#20787](https://github.com/stablyai/orca/pull/20787)）
- 修复（lint）：启用 anti-slop/no-unknown-type-aliases（[@nwparker](https://github.com/nwparker)，[#20784](https://github.com/stablyai/orca/pull/20784)）
- 重构（lint）：启用 anti-slop/no-reflect-apply（[@nwparker](https://github.com/nwparker)，[#20782](https://github.com/stablyai/orca/pull/20782)）
- 修复（lint）：启用 anti-slop/no-module-mocking（[@nwparker](https://github.com/nwparker)，[#20783](https://github.com/stablyai/orca/pull/20783)）
- 测试（package）：按精确命令拒绝 Electron 安装接管（[@nwparker](https://github.com/nwparker)，[#20799](https://github.com/stablyai/orca/pull/20799)）
- 修复（lint）：启用 anti-slop/no-reflect-get（[@nwparker](https://github.com/nwparker)，[#20786](https://github.com/stablyai/orca/pull/20786)）
- 修复（lint）：启用 anti-slop/no-object-parameters（[@nwparker](https://github.com/nwparker)，[#20781](https://github.com/stablyai/orca/pull/20781)）
- 修复（lint）：启用 anti-slop/no-shape-in-symbol-names（[@nwparker](https://github.com/nwparker)，[#20785](https://github.com/stablyai/orca/pull/20785)）
- 修复（git）：命令退出后避免 Windows 上的 tree 强杀（[@nwparker](https://github.com/nwparker)，[#20606](https://github.com/stablyai/orca/pull/20606)）
- 构建（release）：编译 Windows 中继 process-table 插件（[@nwparker](https://github.com/nwparker)，[#20809](https://github.com/stablyai/orca/pull/20809)）

**完整变更对照：** [v1.4.204...v1.4.205](https://github.com/stablyai/orca/compare/v1.4.204...v1.4.205)

## v1.4.204 聊天拖放与 Fast 模式，工作区恢复 {#v1-4-204}

2026年9月16日 发布 · [官方原文](https://github.com/stablyai/orca/releases/tag/v1.4.204)

感谢使用 Orca，也感谢一直以来的支持。

说明：合入的 PR 通常要 48–72 小时才会随版本放出（P0+ 修复除外）。后续版本还有更多改动。

### 简要说明 {#v1-4-204-short}

**Agent 与聊天：** Native Chat 支持文件拖放和按提供方区分的 Fast 模式；重启后能干净恢复结构化聊天；隐藏空闲活动；修复了尾读游标和 Claude 回合重开。Grok 的完成/hook 归属与 Claude SessionEnd 处理更准确；Agent 状态按 agent 而不是窗格来索引行。

**工作区与移动端：** 工作区在选择 Agent 后会重新播种，能从激活失败中恢复，并回收无子聊天的标签。移动端继续把设置、源码管理与工作区创建迁到带类型的 RPC，同时保住投递并修复流式跳动。

**性能：** 终端文件链接检查改为批量；浏览器输入在进程内派发；避免重复的远程能力探测；跳过多余的持久化刷新；限制 WSL skill 发现范围。

---

### 产品体验 {#v1-4-204-product}

#### 工作区、标签页与浏览器 {#v1-4-204-workspaces-tabs}

> 工作区恢复更安全，浏览器输入更跟手，项目视图更清楚。

- 修复（worktrees）：工作区消失时，回收没有子聊天的聊天标签（[@brennanb2025](https://github.com/brennanb2025)，[#19970](https://github.com/stablyai/orca/pull/19970)）
- 修复（browser）：通过美式布局 CDP 键表按键，而不是每次按键开一个子进程（[@atreidesend](https://github.com/atreidesend)，[#15310](https://github.com/stablyai/orca/pull/15310)）
- 修复（workspaces）：Agent 选择后，对门禁报告的空工作区重新播种（[@brennanb2025](https://github.com/brennanb2025)，[#20182](https://github.com/stablyai/orca/pull/20182)）
- 修复（workspaces）：无计划的 Agent 创建在激活抛错时，恢复真正的终端（[@brennanb2025](https://github.com/brennanb2025)，[#20190](https://github.com/stablyai/orca/pull/20190)）
- 修复（github）：未过滤的空项目视图用自己的名字，而不是怪过滤器（[@nwparker](https://github.com/nwparker)，[#20588](https://github.com/stablyai/orca/pull/20588)）

### Agent 与工作流 {#v1-4-204-agents-workflow}

#### Agent 可靠性与 Native Chat {#v1-4-204-agent-reliability}

> 聊天增加拖放和 Fast 模式，恢复更从容，Agent 状态上报更准。

- 修复（native-chat）：在解析创建启动路由前，等待运行时能力探测（[@brennanb2025](https://github.com/brennanb2025)，[#19819](https://github.com/stablyai/orca/pull/19819)）
- 新增（ai-vault-search）：公开的会话搜索契约与传输（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20277](https://github.com/stablyai/orca/pull/20277)）
- 修复（tasks）：在 GitHub 搜索配额下仍保留仓库结果（[@OrcaWin](https://github.com/OrcaWin)，[#20460](https://github.com/stablyai/orca/pull/20460)）
- 修复（ai-vault）：流式传输过大的远程会话 transcript（[@OrcaWin](https://github.com/OrcaWin)，[#20455](https://github.com/stablyai/orca/pull/20455)）
- 修复（grok）：阻止重放的 Claude/Cursor hook 把 Grok 窗格报成 Claude（[@brennanb2025](https://github.com/brennanb2025)，[#20507](https://github.com/stablyai/orca/pull/20507)）
- 新增（native-chat）：支持文件拖放（[@brennanb2025](https://github.com/brennanb2025)，[#20494](https://github.com/stablyai/orca/pull/20494)）
- 重构（attention）：把 Agent 注意力边界从终端窗格上移开（[@brennanb2025](https://github.com/brennanb2025)，[#20525](https://github.com/stablyai/orca/pull/20525)）
- 修复（grok）：把托管 hook 窗格守卫的展开推迟到 shell（[@brennanb2025](https://github.com/brennanb2025)，[#20534](https://github.com/stablyai/orca/pull/20534)）
- 重构（orchestration）：从消息推导投递资格（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#19837](https://github.com/stablyai/orca/pull/19837)）
- 修复（grok）：只在 Grok 真正完成时宣告一次完成（[@brennanb2025](https://github.com/brennanb2025)，[#20523](https://github.com/stablyai/orca/pull/20523)）
- 新增（native-chat）：增加按提供方区分的 Fast 模式（[@brennanb2025](https://github.com/brennanb2025)，[#20506](https://github.com/stablyai/orca/pull/20506)）
- 修复（claude）：在有能力的版本上订阅 SessionEnd，并修正一处错误注释（[@brennanb2025](https://github.com/brennanb2025)，[#20530](https://github.com/stablyai/orca/pull/20530)）
- 新增（agent-status）：用 run-identity 类型按 agent 而不是窗格索引行（[@brennanb2025](https://github.com/brennanb2025)，[#20531](https://github.com/stablyai/orca/pull/20531)）
- 修复（hooks）：把超时 hook 报为无法核实，并终止其进程树（[@nwparker](https://github.com/nwparker)，[#20559](https://github.com/stablyai/orca/pull/20559)）
- 修复（session-search）：在 Windows 上读取过大的数字文件 ID（[@OrcaWin](https://github.com/OrcaWin)，[#20551](https://github.com/stablyai/orca/pull/20551)）
- 新增（native-chat）：在整个聊天窗格显示拖放目标（[@brennanb2025](https://github.com/brennanb2025)，[#20561](https://github.com/stablyai/orca/pull/20561)）
- 修复（native-chat）：允许提供方重开它自己恢复的 Claude 回合（[@brennanb2025](https://github.com/brennanb2025)，[#20518](https://github.com/stablyai/orca/pull/20518)）
- 修复（native-chat）：重启后干净恢复结构化聊天（[@brennanb2025](https://github.com/brennanb2025)，[#20509](https://github.com/stablyai/orca/pull/20509)）
- 修复（ai-vault）：忽略非绝对路径的 agent 扫描根环境覆盖（[@manuaudio](https://github.com/manuaudio)，[#13118](https://github.com/stablyai/orca/pull/13118)）
- 修复（grok）：阻止 SessionStart 的 orca-status hook 挂起 10 秒（[@bjornrun](https://github.com/bjornrun)，[#20090](https://github.com/stablyai/orca/pull/20090)）
- 修复（native-chat）：阻止有界尾读把聊天游标移过尚未应用的行（[@brennanb2025](https://github.com/brennanb2025)，[#20581](https://github.com/stablyai/orca/pull/20581)）
- 新增（ai-vault-search）：在扫描服务中、设置开关后构建会话搜索索引器（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20516](https://github.com/stablyai/orca/pull/20516)）
- 修复（native-chat）：等待输入时隐藏活动（[@brennanb2025](https://github.com/brennanb2025)，[#20496](https://github.com/stablyai/orca/pull/20496)）

#### 移动端 {#v1-4-204-mobile}

> 移动端继续 typed-RPC 迁移，同时保持投递和流式稳定。

- 重构（mobile）：把设置读取迁到 RpcOperation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20499](https://github.com/stablyai/orca/pull/20499)）
- 修复（mobile）：给 Native Chat 一个尾随所有者，避免流式跳动（[@brennanb2025](https://github.com/brennanb2025)，[#20493](https://github.com/stablyai/orca/pull/20493)）
- 修复（mobile）：在传输切换期间保留投递的歧义（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20280](https://github.com/stablyai/orca/pull/20280)）
- 测试（mobile）：整合 RPC 迁移的验证基础设施（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20521](https://github.com/stablyai/orca/pull/20521)）
- 重构（mobile）：把源码管理域走带类型的 RpcOperation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20544](https://github.com/stablyai/orca/pull/20544)）
- 修复（mobile）：修了 RPC 迁移保留下来的两个已知主线问题（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20563](https://github.com/stablyai/orca/pull/20563)）
- 测试（mobile）：把每条 RPC golden 钉到自己的场景输入，而不是整个清单（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20562](https://github.com/stablyai/orca/pull/20562)）
- 重构（mobile）：把任务工作区创建域走带类型的 RpcOperation（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20568](https://github.com/stablyai/orca/pull/20568)）

#### 中继与云端 {#v1-4-204-relay-cloud}

> 探测和身份校验的边界更紧，失败处理更好。

- 修复（rpc）：校验 TaskProviderIdentity 中提供方特有字段（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20284](https://github.com/stablyai/orca/pull/20284)）
- 修复（ssh）：限制中继在任 lsof 探测（[@kaluli123123](https://github.com/kaluli123123)，[#18304](https://github.com/stablyai/orca/pull/18304)）

### 质量与交付 {#v1-4-204-quality}

> 这里的改动不会改变你看到的内容——它们改变的是 Orca 在真实负载下有多顺。需要细节可展开。

#### 性能改进 {#v1-4-204-perf-improvements}

> 针对性优化减少了终端、浏览器、远程、持久化和 skill 发现路径上的多余工作。

其中包括：在所属主机上批量检查终端文件链接、进程内派发浏览器指针、文件导入时减少远程能力探测、终端重新挂接时跳过多余的整状态刷新，以及有界的 WSL skill 发现。

- 性能（terminal）：在所属主机上批量检查文件链接（[@OrcaWin](https://github.com/OrcaWin)，[#20463](https://github.com/stablyai/orca/pull/20463)）
- 性能（skills）：限制 WSL 已安装 skill 的发现范围（[@PPP-JH](https://github.com/PPP-JH)，[#12314](https://github.com/stablyai/orca/pull/12314)）
- 性能（remote）：文件导入时避免重复的能力探测（[@dngur6344](https://github.com/dngur6344)，[#14555](https://github.com/stablyai/orca/pull/14555)）
- 性能（persistence）：终端重新挂接时跳过多余的整状态刷新（[@AmethystLiang](https://github.com/AmethystLiang)，[#20137](https://github.com/stablyai/orca/pull/20137)）
- 性能（browser）：在进程内派发坐标指针输入，而不是每个事件一个子进程（[@nwparker](https://github.com/nwparker)，[#20593](https://github.com/stablyai/orca/pull/20593)）

#### 可靠性、测试与交付 {#v1-4-204-reliability-tests}

- 修复（runtime）：拒绝畸形的文件 Base64 填充（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20283](https://github.com/stablyai/orca/pull/20283)）
- 修复：跨版本只显示一次意外退出登录提示（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20526](https://github.com/stablyai/orca/pull/20526)）
- 修复（auth）：把回调失败报为失败而不是取消（[@Jinwoo-H](https://github.com/Jinwoo-H)，[#20535](https://github.com/stablyai/orca/pull/20535)）
- 修复（git）：远程不存在时跳过上游远程探测（[@innocarpe](https://github.com/innocarpe)，[#18455](https://github.com/stablyai/orca/pull/18455)）
- 修复（terminal）：从复制的选区里去掉 Agent 槽位 (#19770)（[@nwparker](https://github.com/nwparker)，[#20545](https://github.com/stablyai/orca/pull/20545)）
- 修复（pty）：放缓 EAGAIN 写重试，避免卡住的读取把守护线程打满（[@nireak](https://github.com/nireak)，[#15319](https://github.com/stablyai/orca/pull/15319)）

### 新贡献者 {#v1-4-204-contributors}

- [@atreidesend](https://github.com/atreidesend) 首次贡献于 [#15310](https://github.com/stablyai/orca/pull/15310)
- [@PPP-JH](https://github.com/PPP-JH) 首次贡献于 [#12314](https://github.com/stablyai/orca/pull/12314)
- [@manuaudio](https://github.com/manuaudio) 首次贡献于 [#13118](https://github.com/stablyai/orca/pull/13118)
- [@bjornrun](https://github.com/bjornrun) 首次贡献于 [#20090](https://github.com/stablyai/orca/pull/20090)
- [@nireak](https://github.com/nireak) 首次贡献于 [#15319](https://github.com/stablyai/orca/pull/15319)

**完整变更对照：** [v1.4.203...v1.4.204](https://github.com/stablyai/orca/compare/v1.4.203...v1.4.204)

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
