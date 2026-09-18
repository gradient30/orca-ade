# 定时自动化 {#scheduled-automations}

Orca 自动化从 CLI 按计划运行一段 prompt，因此周期性的分诊、审查和维护任务可以在你不手动打开 worktree 的情况下启动。读完本页，你会创建一个已禁用的自动化、查看它，并在准备好时运行。

## 创建一份安全的首次自动化 {#create-a-safe-first-automation}

在你调整 prompt 和目标期间，先用 `--disabled` 起步：

```bash
orca automations create \
  --name "Weekday triage" \
  --trigger weekdays \
  --time 09:00 \
  --prompt "Triage new issues and summarize blockers" \
  --provider codex \
  --repo my-repo \
  --disabled \
  --json
```

`--trigger` 接受 `hourly`、`daily`、`weekdays` 和 `weekly` 这类预设，以及 cron 表达式或 RRULE 字符串。当计划应跟随特定 IANA 时区而不是运行时默认值时，使用 `--timezone <tz>`。

## 选择运行发生的位置 {#choose-where-runs-happen}

当每次运行应在某个仓库里创建或选择工作时，使用 `--repo <selector>`。当自动化应在已有的 Orca worktree 内运行时，改用 `--workspace <selector>`：

```bash
orca automations create \
  --name "Nightly status" \
  --trigger "0 18 * * 1-5" \
  --prompt "Summarize today's changes" \
  --provider claude \
  --workspace active \
  --disabled
```

两个目标标志都省略时，Orca 会在能够判断的情况下，从当前 shell 目录解析出包围它的 worktree。

## 运行前预检查 {#precheck-before-a-run}

当一次便宜的 shell 探测失败时跳过计划工作（非零退出会记录为一次跳过的运行）：

```bash
orca automations create \
  --name "PR review" \
  --trigger hourly \
  --precheck "gh pr list --json number -q .[0].number" \
  --prompt "Review requested PRs" \
  --provider codex \
  --repo my-repo \
  --disabled \
  --json
```

## 项目宿主 / setup 目标 {#project-host-setup-targets}

当自动化应跑在特定的项目宿主 setup 上，而不仅仅是 `--repo` / `--workspace` 时：

```bash
orca automations create \
  --name "Remote triage" \
  --trigger daily \
  --time 09:00 \
  --prompt "Triage open issues" \
  --provider claude \
  --project <projectId> \
  --host <hostId> \
  --disabled \
  --json
```

已有 setup id 时使用 `--project-host-setup <id>`。可选的 `--source-context '<json>'` 把任务/provider 数据钉到某个宿主/账号（编辑时传 `null` 以清除）。

## 跨宿主管理自动化 {#manage-automations-across-hosts}

桌面 **Automations** 页把本机以及已连接且受支持的 Orca 宿主上的计划加载到一张表里。**Host** 列显示每条自动化存储和调度的位置；用 **Filters → Host** 显示一个或多个宿主，或回到 **All hosts**。

在桌面 UI 里创建自动化时，**Create on** 会在你选择项目之前先选定宿主。随后项目选择器只显示该目的地上可用的项目。需要更新 Orca 服务器的已连接宿主仍会显示，但处于禁用状态，并带有 **Update server** 提示，而不是从选择器里消失。

## 错过运行的宽限 {#missed-run-grace}

```bash
orca automations edit <automationId> --missed-run-grace-minutes 30 --json
```

## 复用已有的自动化会话 {#reuse-an-existing-automation-session}

对于目标是已有 worktree 的自动化，加上 `--reuse-session`，让后续运行继续使用上一次仍活着的自动化终端，而不是每次从空白终端开始：

```bash
orca automations create \
  --name "Inbox digest" \
  --trigger hourly \
  --prompt "Summarize unread mail" \
  --provider codex \
  --workspace active \
  --reuse-session \
  --disabled
```

用 `orca automations edit <automationId> --fresh-session --json` 把自动化切回每次运行使用全新终端。

## 审查并启用 {#review-and-enable}

启用之前先列出并查看自动化：

```bash
orca automations list --json
orca automations show <automationId> --json
orca automations edit <automationId> --enabled --json
```

在桌面自动化列表里，计划很多时用搜索框按 **name**、**project** 或 **prompt** 文本过滤。住在 SSH 宿主上的外部自动化，在该宿主断开时仍会作为你可以管理（包括删除）的任务出现——删除一条计划并不需要一次活动的 SSH 会话。

用 **Filters** 按 **Host**、**Enabled** 或 **Paused** 状态、上次运行结果（**Failed**、**Succeeded** 或 **Never ran**），或一个或多个 **Agents** 收窄列表。列表很长时在 Agent 子菜单里搜索；活动过滤器会作为可移除的 pills 出现在表上方。表格显示每条自动化的宿主、上次运行结果和相对时间。点击 **Name** 或 **Last run** 列排序；名称按字母排序，上次运行默认最新在前。

自动化列表打开时，在搜索框里输入并按 **ArrowUp** 或 **ArrowDown**，即可在可见的匹配行之间移动选中项。列表会把选中行保持在视野内；正在修改或组合输入时保留其正常光标行为。

用 `edit` 改名称、prompt、provider、目标、计划或启用状态。`remove` 删除一条自动化及其运行历史。

## 按需运行 {#run-on-demand}

创建自动化之后，先手动触发一次，检查 prompt 和目标，而不必等到下一次计划时间：

```bash
orca automations run <automationId> --json
orca automations runs --id <automationId> --json
```

如果一次运行在打开工作区或重连到目标之前就失败了，在 Orca 里打开该次运行并点击 **Rerun**，为同一条自动化排队一次新的手动运行。

## 下一步 {#next-steps}

- [命令使用](/docs/cli/commands#automations) —— 当前 `orca help` 里的自动化命令卡片。
- [Orca CLI 概览](/docs/cli/overview) —— 查看 CLI 其余能力：worktree、终端和浏览器控制。
- [技能注册表与 MCP](/docs/cli/skills) —— 安装 Orca CLI 技能，让 Agent 能调用同一套命令。
