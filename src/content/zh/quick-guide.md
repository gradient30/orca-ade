# 快速手册 {#quick-guide}

这份页面是日常入口，不是官网目录的替代。命令、设置路径、产品名保持英文；深挖请点文内 `/docs/...` 链到 1:1 中文正文。

适合已经把仓库加进 Orca、不想把整本手册读完再开工的人。

## 30 秒定位 {#30-second-orientation}

Orca 不是模型，也不替你写 git。它是一台 **并排跑多个 AI 编程 Agent 的桌面 IDE**：每个任务一份真正的 `git worktree`、自己的终端、自己的浏览器标签。Claude Code、Codex、Cursor CLI、Kimi / GLM 等你已经付费的 CLI，都在这里编排。

| 你想做的事 | 用哪一块 | 深挖 |
| --- | --- | --- |
| 同一缺陷让三个 Agent 赛跑 | worktree + 分屏 | [第一次三 Agent 会话](/docs/first-session) |
| 主仓执行、另一 Agent 复核 | 两个 worktree，或同一 worktree 里恢复会话 | [Agent 与会话](/docs/model/agents-sessions) |
| 把意见打回 Agent | Diff 行内批注 | [批注 AI Diff](/docs/review/annotate-ai-diff) |
| 侧栏「编排技能 未安装」 | 装 `orchestration` 技能并打开实验开关 | [技能注册表](/docs/cli/skills) · [编排](/docs/cli/orchestration) |
| 侧栏里的「孩子们」 | 父/子 **worktree 嵌套**，不是子进程 | [Worktrees → 侧栏布局](/docs/model/worktrees#sidebar-layout) |
| 常驻 Codex 审核太贵、像新会话 | 恢复同一会话，不要每次新建 worktree | [会话恢复](/docs/model/session-restore) · [休眠](/docs/agents/hibernation) |

## 核心能力地图 {#core-capability-map}

```text
仓库 (base ref, 通常 origin/main)
  └─ worktree A  执行 Agent（Kimi / Claude / Cursor…）
  └─ worktree B  复核 Agent（Codex）—— 可常驻、可休眠、可 resume
  └─ worktree C  探针 / 并行赛跑
        ├─ 终端（Agent CLI + 普通 shell）
        ├─ Diff / 批注 / 提交推送 / PR
        └─ 每棵树自己的浏览器 + Design Mode
```

四条支柱：

1. **隔离** — 每件事一块磁盘上的 git worktree，文件不会互相踩。[Worktrees](/docs/model/worktrees)
2. **并行** — 同一 prompt 三条分支，分屏盯着，选出赢家。[配方：赛跑](/docs/recipes/parallel-agents)
3. **审查** — 认真看 AI diff，行内批注整批打回。[审查与交付](/docs/review/diff-viewer)
4. **编排** — 需要所有权、依赖、门禁时用 Run / Task / Dispatch；一次性口头指令用 UI 或 `orca terminal send`。[编排](/docs/cli/orchestration)

远程算力是可选层：本机不够就 [SSH](/docs/ssh) 或 [远程 Orca 服务器](/docs/remote-servers)。Orca **不卖** VPS。

## 日常最高频 8 件事 {#daily-high-frequency}

每一条都按 **用法 / 真实示例 / 应用场景 / 价值收益** 写。先会这 8 件，再按需翻后面的参考页。

### 1. 给每个任务一个 worktree {#1-one-worktree-per-task}

**用法**
点击仓库旁的 **+**。填任务名（如 `fix-login-race`），选 **start-from**（多数时候是 `origin/main`），选 Agent，创建。对话框立刻关掉，`git fetch` / `git worktree add` 在后台跑，侧栏出现进度行。

**真实示例**
主仓要修登录竞态：worktree 名叫 `fix-login-race`，start-from `origin/main`，Agent 选执行者。探针仓要加一条回归：另开 `probe-login-race`，指向探针仓库。

**应用场景**
功能、缺陷、探针、实验互不 stash。主线落地和探针仓库是两个 repo，就加两个项目，各开各的树。

**价值收益**
不用切分支、不用怕执行 Agent 改到复核 Agent 的文件。删树是一键（目录 + 分支一起走）。见 [Worktrees](/docs/model/worktrees)。

### 2. 执行 + 复核：两个角色，不要混在同一提示里 {#2-execute-plus-review}

**用法**
- **隔离复核（推荐默认）：** 执行者一个 worktree，复核者另一个。复核者的 start-from 可以是执行者的分支，用来审他刚推的提交。
- **同一树上接力：** 执行者跑完，用 [会话历史](/docs/agents/session-history) 或 **Restart** 芯片换成 / 恢复 Codex，把 diff 批注打给他。
- **赛跑：** 三个 worktree、三个 Agent、同一 prompt，见 [配方](/docs/recipes/parallel-agents)。

**真实示例**
主仓 QASai：Kimi（或 GLM / Claude）在 `qasai-feat-x` 落地；Codex 在 `qasai-feat-x-review` 只读审 diff、写风险清单。探针仓 qasai-probes：Cursor CLI 在 `probe-x` 写探针，阶段结束再让 Codex 审探针 diff。

**应用场景**
「执行者负责改、复核者负责挡」的双 Agent 流水线；或同一任务三模型投票。

**价值收益**
复核有独立磁盘和独立会话，不会被执行者的上下文带偏。 Concord 的地方可直接合；分歧的地方就是难点。

### 3. 侧栏里的「孩子们」不是子进程 {#3-children-are-worktrees}

**用法**
创建 worktree 时打开 **Advanced**，把 **Parent workspace** 设成当前这棵树。侧栏会把新树挂在父节点下面，看起来像「2 个孩子」。这只改变 **Orca 侧栏嵌套**，**不改 git 历史、不创建进程树**。

**真实示例**
主 worktree `qasai-main` 下面挂 `pilot-a1-kimi`、`pilot-b1-codex`。点开孩子，各自是完整的 git worktree + Agent 终端。

**应用场景**
一次史诗下的多个试点、父子任务、想在侧栏里收拢相关树。

**价值收益**
视觉分组，不等于「子进程」。杀父节点不会 SIGKILL 孩子里的 Agent；删除仍是 worktree 删除。嵌套规则见 [Worktrees](/docs/model/worktrees#sidebar-layout)。

### 4. 常驻 Codex 审核：不要每次都开新会话 {#4-standing-codex-review}

这是额度、质量和速度差最多的一条。

**用法**
- **同一 worktree 留着。** 关掉 Orca 窗口 ≠ 杀掉 Agent：后台 daemon 握着 PTY，下次打开会 [会话恢复](/docs/model/session-restore)。
- **空闲就休眠，回来再 resume。** 打开 [Settings → Experimental → Agent hibernation](/docs/agents/hibernation) 后，做完且足够久没碰的可恢复 Agent（含 Codex）会暂停；再打开 worktree 时用 `codex resume <id>` 同一会话。默认空闲窗 30 分钟。
- **手动回到旧会话：** [Agent 会话历史](/docs/agents/session-history) 里按 Workspace / Project / All 过滤，点 Resume。
- **不要**为每一次复核 `+` 一棵新树再贴一遍仓库规矩——那是新会话，要把上下文重新喂进去。

**真实示例**
给 Codex 一棵长期 `qasai-review` 树。第一次把审查清单、风险口径、禁止事项讲清楚。之后每次执行者推完，只在这棵树里 **Resume** 或等休眠自动恢复，说「审 `feat/x` 相对 `origin/main` 的 diff」。

**应用场景**
固定复核者、跨很多 PR 的同一套标准、不想每次重讲项目规矩。

**价值收益**

| 做法 | 额度 | 质量 | 速度 |
| --- | --- | --- | --- |
| 每次新 worktree + 新会话 | 高（重复喂上下文） | 口径容易漂 | 慢（冷启动） |
| 同一 worktree Resume / 休眠恢复 | 低（续上一段） | 口径稳定 | 快 |
| 笔记本重启（daemon 死） | 布局还在，进程没了 | 用会话历史 Resume 仍可续 | 中 |

限制：Cursor CLI 等不可恢复的 Agent **不会**被休眠，会一直占着。Codex / Claude 可以。热切换 Codex 账户不必重开会话，见 [热切换](/docs/agents/codex-hot-swap)。

### 5. 审查 diff，把意见整批打回 {#5-review-diff-and-send-back}

**用法**
打开该 worktree 的 diff。`j` / `k` 换文件，`c` 在行上留评论，最后 **Send to agent**。Orca 把全部评论打成一批 prompt。修完再打开 diff，评论还钉在原行。

**真实示例**
Codex 在复核树里看 Kimi 的 diff：三处过宽的异常处理各留一句，点 Send。Kimi 那边也可以是被打回的对象——批注属于 **当前这棵树的 Agent**。

**应用场景**
任何你不准备亲自手改、但要 Agent 按你的标准改的 AI 产出。

**价值收益**
不用抄行号、不用切聊天。循环见 [配方：审查 AI Diff](/docs/recipes/review-ai-diff) 和 [批注](/docs/review/annotate-ai-diff)。干净了再 [提交并推送](/docs/review/commit-push)。

### 6. 「编排技能 未安装」时怎么办 {#6-orchestration-skill-missing}

侧栏或 Settings 显示 **编排技能 未安装**，表示 Agent 还没装到 `orchestration` 这份技能，**不是**必须先在系统里装一套单独的 CLI 才能点按钮。

**用法**
1. 先注册 CLI：[Settings → General → Orca CLI](/docs/settings)。Linux 上二进制是 **`orca-ide`**（GNOME 屏幕阅读器已经占用了 `orca`），见 [安装 → Linux](/docs/install#linux)。
2. 给 Agent 装技能（全局一份即可）：

```bash
npx skills add https://github.com/stablyai/orca --skill orca-cli --global
npx skills add https://github.com/stablyai/orca --skill orchestration --global
# 无头 / 没有 Settings UI：
orca skills install --skill orca-cli --skill orchestration
```

3. 打开 [Settings → Experimental](/docs/settings) 里的编排。CLI 必须先能 `orca status --json`（Linux：`orca-ide status --json`）。
4. 默认 Agent 设置通常还会装 `computer-use`。过期时用 Settings 里的 **Update skills**，或 `npx skills update orca-cli orchestration --global`。

**真实示例**
你只想在 UI 里给 Kimi 派活、给 Codex 派复核：**可以不敲编排命令**。点 worktree、选 Agent、贴 prompt 即可。只有要 Run / Task / Dispatch、依赖门、多 worker 所有权时，才需要编排技能。

**应用场景**
多 Agent 流水线、定时分流、要回执和决策门的任务。一次性「修这个按钮」走普通终端就行。

**价值收益**
技能是 **发现用 stub**：短 `SKILL.md` 告诉 Agent 何时调用，完整旗帜从正在跑的 `orca skills get orchestration --full` 读，不会和 App 版本漂移。见 [技能](/docs/cli/skills) 与 [编排](/docs/cli/orchestration)。

### 7. 不必只靠命令：UI 就是主路径 {#7-ui-is-the-main-path}

**用法**
日常创建 worktree、选 Agent、分屏、看 diff、提交，全部在窗口里完成。CLI 用来脚本化、给 Agent 调工具、跑定时自动化。

高频快捷键：

| 快捷键 | 作用 |
| --- | --- |
| `Cmd-J` | Worktree 跳转面板；Shift-Enter 分屏打开 |
| `Cmd-P` | 快速打开文件 |
| `Cmd-T` | 当前 worktree 新终端标签 |
| `j` / `k` / `c` | Diff 里下/上文件、留评论 |

**真实示例**
早会：`Cmd-J` 输入 `probe`，跳到探针树；黄点先处理（Agent 在等你）；绿点让它继续跑。笔记本休眠回来，用 **Restart** 芯片批量拉起已退出的 Agent。见 [跳转配方](/docs/recipes/jump-worktrees)。

**应用场景**
十棵以上 worktree、执行/复核/探针同时开。

**价值收益**
状态点 + 通知铃铛比自己轮询终端便宜。见 [通知](/docs/notifications) 和 [Agents 动态](/docs/activity)。

### 8. 修 UI：浏览器就在这棵树里 {#8-fix-ui-in-the-worktree-browser}

**用法**
打开该 worktree 的浏览器 → 打开 [Design Mode](/docs/browser/design-mode) → 点有问题的元素 → 用一句话说明要改什么。Agent 拿到 HTML、计算 CSS 和裁剪截图。

**真实示例**
探针报告页 padding 太紧：点那张卡片，「加大到和上面卡片一致」。热重载后同一标签里验证。

**应用场景**
前端、内部平台、任何 localhost 预览。每棵树自己的标签，互不串 cookie（要用独立登录就建 [浏览器配置档](/docs/browser/profiles)）。

**价值收益**
不用截图、不用抄选择器。配方：[用 Design Mode 修 UI](/docs/recipes/design-mode-fix)。

## 推荐工作流（主仓 + 探针仓） {#recommended-two-repo-flow}

和「主仓落地 + 探针仓验证、阶段结束再打包复核」对齐的一种拆法：

1. **两个项目。** QASai 与 qasai-probes 各自 Add Repo，base ref 设好。
2. **执行树。** 主仓 `feat/…` worktree，执行者（Kimi / Claude / Cursor）只改主线。
3. **探针树。** 探针仓对应 worktree，Cursor CLI 写/跑探针。不要和主仓共用一棵树。
4. **常驻复核树。** 主仓另开 `review` worktree，Codex 长期住在这里。用 Resume / 休眠，而不是每次新会话。阶段结束：执行树提交 → 复核树 Resume → 批注打回或放行。
5. **需要门禁时再开编排。** 例如「探针绿了才允许开 PR」：Experimental 打开编排，装好技能，用 Task 依赖 + Dispatch；否则 UI 里人工点就够。
6. **发出去。** 赢家树上 [提交、推送、开 PR](/docs/review/commit-push)。失败者一键删树。

这不是官网规定的唯一拆法，只是把官方能力接到这条流水线上。官方最短路径仍是 [第一次三 Agent 会话](/docs/first-session)。

## 先不要做的事 {#dont-do-these-first}

- 不要用 AGENTS.md 代替 Orca 的 worktree / 会话模型——文档规则管 Agent 怎么说话，不管磁盘隔离和会话恢复。
- 不要把「孩子们」理解成进程：那是侧栏分组。
- 不要为每一次审核新建 Codex 会话，除非你故意要冷启动。
- 不要在 Linux 上用 `command -v orca` 判断 CLI 装好了——那经常是屏幕阅读器。用 `orca-ide`。
- 不要把编排 CLI 当成唯一派活方式；未装技能时，UI 照样能跑 Agent。

## 下一步 {#next-steps}

- 还没装： [安装](/docs/install)
- 还没跑通过： [第一次三 Agent 会话](/docs/first-session)
- 要把 Agent 挪下笔记本： [运行 Orca 的方式](/docs/ways-to-run)
- 当前 CLI 全表（按 `orca help`）： [命令使用](/docs/cli/commands)
- 命令和选择器全表： [Orca CLI 参考](/docs/cli/reference)
