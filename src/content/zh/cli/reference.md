# Orca CLI 参考 {#orca-cli-reference}

`orca` CLI 与正在运行的 Orca 运行时通信。当 shell 脚本或 Agent 需要查看 worktree、启动终端、打开文件、自动化内置浏览器，或把进度回报进 Orca 时使用它。

> 与当前 `orca help` 对齐的命令卡片（中文说明、用法、可跑示例）见 [命令使用](/docs/cli/commands)。本页保留选择器和专题标志；帮助里没写的子命令（例如 `orca artifacts`、`orca agent hooks`、Linear MCP）不会出现在命令使用页。

## 验证运行时 {#verify-the-runtime}

在 [Settings → General → Orca CLI](/docs/settings) 下注册 CLI，然后确认它能连上 Orca。

> **Linux 上命令是 orca-ide**
> GNOME Orca——大多数 GNOME 桌面自带的屏幕阅读器——已经占用 `/usr/bin/orca`，因此 Orca 的 Linux CLI 安装为 `orca-ide`。不要用 `command -v orca` 来检查：它在 GNOME 桌面上会成功，并解析到屏幕阅读器，而不是 Orca。本页通篇写 `orca`——在 Linux 上请读成 `orca-ide`。见 [安装 → Linux](/docs/install#linux)。

在 macOS 和 Windows 上：

```bash
command -v orca
orca status --json
```

在 Linux 上：

```bash
command -v orca-ide
orca-ide status --json
```

如果 Orca 还没有在运行：

```bash
orca open --json
orca status --json
```

当另一个工具要解析结果时使用 `--json`。人类可读输出用于快速终端检查。

## 选择器 {#selectors}

大多数命令接受选择器，而不要求很长的 ID：

```bash
orca repo show --repo id:<repoId> --json
orca worktree show --worktree active --json
orca worktree show --worktree path:/abs/path/to/worktree --json
orca worktree show --worktree branch:feature-name --json
orca worktree show --worktree issue:123 --json
```

`active` 和 `current` 会从 shell 的当前目录或终端上下文解析到包围它的、由 Orca 管理的 worktree。在可能跑在目标 worktree 之外的脚本里使用显式选择器。对于远程运行时，优先用完整的服务端选择器，例如 `id:<repoId>::<absolute-worktree-path>` 或 `path:<absolute-server-path>`，因为本地 shell 的当前目录在运行时宿主上可能不存在。

## 选择宿主 {#choose-a-host}

列出当前 Orca 宿主能瞄准的每一台机器，以及每一台的选择器：

```bash
orca host list --json
```

结果包括本机、已注册的 [SSH 目标](/docs/ssh)，以及已配对的 [远程 Orca 服务器](/docs/remote-servers)。本机用 `--host local`，SSH 目标用 `--host ssh:<target-id>`，已配对服务器用 `--environment <server-name>`。SSH 行在目标连接后包含检测到的远程平台（`linux`、`darwin` 或 `win32`）；较旧或已断开的目标报告 `platform unknown`。它们也包含 `connected`，以及已知时的 SSH 生命周期 `connectionStatus`。SSH 标签和已配对服务器名称在唯一时也能解析；名称冲突时使用 `host list` 里的 ID。如果你把机器名放在了错误的选择器上，Orca 会报告匹配的机器以及应使用的标志，而不是返回空结果。

## 运行时命令 {#runtime-commands}

```bash
orca open --json
orca status --json
orca serve --port 6768 --pairing-address 100.64.1.20 --json
```

`orca serve` 在前台启动运行时服务器，不打开桌面窗口。用于 [远程 Orca 服务器](/docs/remote-servers) 或无头环境，用 `Ctrl-C` 停止。

## 仓库 {#repos}

```bash
orca repo list --json
orca repo add --path /abs/path/to/repo --json
orca repo show --repo id:<repoId> --json
orca repo set-base-ref --repo id:<repoId> --ref origin/main --json
orca repo search-refs --repo id:<repoId> --query main --limit 10 --json
```

在创建大量 worktree 之前设置仓库的 base ref，这样新任务默认会从正确的位置分出去。

## Worktrees {#worktrees}

```bash
orca worktree list --repo id:<repoId> --json
orca worktree ps --json
orca worktree current --json
orca worktree show --worktree active --json
orca worktree create --repo id:<repoId> --name fix-login --json
orca worktree create --name child-task --agent codex --prompt "Investigate the flaky login test" --json
orca worktree set --worktree active --comment "reproduced failure; testing token refresh fix" --json
orca worktree rm --worktree id:<worktreeId> --force --json
```

当 `worktree create` 从 Orca 管理的 worktree 内部运行时，Orca 在能推断关系的情况下会把新 worktree 记录为子项。传 `--parent-worktree active` 以明确指定，或在新工作独立时传 `--no-parent`。

Agent 启动标志：

```bash
orca worktree create --name review-api --agent claude --setup run --json
orca worktree create --name quick-check --agent codex --prompt "Summarize the diff" --setup skip --json
orca worktree create --name hidden-setup --setup inherit --json
```

`--agent` 在第一个终端里启动所选 Agent。`--prompt` 把初始工作发给该 Agent。`--setup run|skip|inherit` 控制仓库 setup hooks；`inherit` 跟随仓库策略。

## 终端 {#terminals}

```bash
orca terminal list --worktree active --json
orca terminal show --terminal <handle> --json
orca terminal read --terminal <handle> --json
orca terminal read --terminal <handle> --screen --json
orca terminal read --terminal <handle> --cursor <cursor> --limit 1000 --json
orca terminal send --terminal <handle> --text "continue" --enter --json
orca terminal wait --terminal <handle> --for tui-idle --timeout-ms 300000 --json
orca terminal create --worktree active --title "tests" --command "npm test" --json
orca terminal split --terminal <handle> --direction horizontal --command "npm run dev" --json
orca terminal rename --terminal <handle> --title "runner" --json
orca terminal switch --terminal <handle> --json
orca terminal close --terminal <handle> --json
orca terminal close --worktree active --all --json
```

省略 `--terminal` 时瞄准当前 worktree 里的活动终端。不确定终端在等什么时，先读再发。

Close 在移除终端的同时停止进程。用 `--terminal <handle>` 针对一个终端，或用 `--worktree <selector> --all` 持久关闭恰好该工作区里的每一个终端，包括它保存的布局和 Agent 恢复记录。当这些终端以后还应恢复时，使用工作区 Sleep。如果执行宿主无法确认每一个 PTY 都已停止，批量 close 会返回失败的 `unverifiable` 结果，而不是声称进程已退出。`terminal stop` 仅为与旧工具兼容而保留。

> **终端句柄**
> 终端句柄是运行时范围的。如果 Orca 重启，或某条命令报告句柄已过期，运行 `orca terminal list --json` 并重新获取句柄。

`terminal list` 在 Orca 能验证时报告每个终端的 `executionHostId`，外加结果级的 `hostScope`，其中包含已覆盖和已省略的宿主 ID。把缺失的宿主身份或范围当作 **unverifiable**，而不是本地。仅当其执行宿主列在 `hostScope.hostIds` 中时，缺失的终端才是它已退出的证据。

默认情况下，`terminal read` 返回去掉终端转义后的累积输出流。因此会重绘行的程序可能表现为堆叠的片段。需要当前渲染帧时使用 `--screen`；响应的 `source` 标识 `stream`、`screen` 或 `screen-unavailable`。屏幕读取没有可分页的历史，因此 `--screen` 和 `--cursor` 互斥。

对于长输出，使用 cursor 读取。保存一次流读取的 `nextCursor`，然后用 `--cursor` 传回去，只获取新输出。

## 文件 {#files}

```bash
orca file open src/App.tsx --worktree active --json
orca file diff src/App.tsx --staged --worktree active --json
orca file open-changed --mode both --worktree active --json
```

路径相对于所选 worktree。`open-changed` 读取 git status，并以 edit、diff 或两者模式打开已更改的文件。

## 内置浏览器 {#built-in-browser}

浏览器命令控制所选 worktree 的 Orca 内嵌浏览器标签。它们不控制 Chrome、Safari 或 Orca 桌面 UI。

使用 snapshot -> act -> snapshot 循环：

```bash
orca goto --url http://localhost:3000 --worktree active --json
orca snapshot --worktree active --json
orca click --element @e3 --worktree active --json
orca fill --element @e1 --value "user@example.com" --worktree active --json
orca wait --text "Welcome" --worktree active --json
orca screenshot --worktree active --json
```

诸如 `@e3` 的引用出自 `snapshot`。在导航、切换标签、会改页面的点击，以及任何过期引用错误之后，重新 snapshot。

标签与捕获命令：

```bash
orca tab list --worktree active --json
orca tab create --url http://localhost:3000 --worktree active --json
orca tab switch --index 1 --worktree active --json
orca capture start --worktree active --json
orca console --limit 50 --worktree active --json
orca network --limit 50 --worktree active --json
orca full-screenshot --worktree active --json
orca pdf --worktree active --json
```

仅当浏览器动作还没有对应的类型化 Orca 命令时，才使用 `orca exec --command "<agent-browser command>" --json`。

浏览器设备模拟：

```bash
orca set device --name "iPhone 12" --worktree active --json
orca screenshot --worktree active --json
```

## 桌面 Computer Use {#desktop-computer-use}

对内置浏览器之外的原生桌面应用使用 `orca computer`：

```bash
orca computer permissions --json
orca computer list-apps --json
orca computer get-app-state --app com.apple.Safari --json
orca computer click --app com.apple.Safari --element-index 12 --json
orca computer paste-text --app com.apple.Safari --text "hello" --json
```

完整工作流和权限设置见 [Computer Use](/docs/cli/computer-use)。

## 移动模拟器 {#mobile-emulator}

移动模拟器命令通过 Orca 的 worktree 范围桥接控制 iOS Simulator 设备。当 Agent 从 Orca 内部操作时，用它们代替原始的 `serve-sim` 或 `simctl`，这样生命周期和活动设备状态会附着在当前 worktree 上。

```bash
orca emulator list --worktree active --json
orca emulator attach "<device-name-or-udid>" --worktree active --json
orca emulator tap 0.5 0.7 --worktree active --json
orca emulator type "hello" --worktree active --json
orca emulator gesture '[{"type":"begin","x":0.5,"y":0.8},{"type":"move","x":0.5,"y":0.4},{"type":"end","x":0.5,"y":0.2}]' --worktree active --json
orca emulator button home --worktree active --json
orca emulator rotate landscape_left --worktree active --json
orca emulator exec --command "tap 0.5 0.7" --worktree active --json
orca emulator kill --worktree active --json
orca emulator shutdown --worktree active --json
```

坐标从 `0` 到 `1` 归一化。单击优先用 `tap`，拖拽或多步触摸输入用 `gesture`。当脚本必须瞄准特定模拟器而不是该 worktree 的活动模拟器时，传 `--device <udid-or-name>` 或 `--emulator <id>`。

## Linear {#linear}

`orca linear` 面是 Agent 通过 `orca-linear` 技能使用的接口（旧安装名 `linear-tickets` 仍然有效）。优先 `--json`。已链接的 worktree 用 `--current` 解析。

### 读取 {#read}

```bash
orca linear issue --current --full --json
orca linear issue ENG-123 --comments --children --relations --activity --json
orca linear search "auth bug" --workspace all --json
orca linear list --filter assigned --limit 10 --json
orca linear list-issues --team ENG --state started --assignee me --json
orca linear list-issues --query auth --updated-at -P7D --cursor <cursor> --workspace <id> --json
orca linear team list --json
orca linear team states --team ENG --json
orca linear team labels --team ENG --json
orca linear project list --query launch --json
```

`--full` 展开评论、子项、附件、关系和动态。分段标志（`--comments`、`--children`、`--attachments`、`--relations`、`--activity`）可单独使用。

### MCP 风格写入 {#mcp-style-write}

```bash
# Create or update (omit id/--current to create; requires --team and --title on create)
orca linear save-issue --team ENG --title "Fix auth" --priority high --json
orca linear save-issue ENG-123 --state "In Progress" --assignee me --json
orca linear save-issue --current --project null --due-date null --json

orca linear relation add ENG-1 --related ENG-2 --type blocks --json
orca linear relation remove ENG-1 --related ENG-2 --type related --json
```

`save-issue` 的 labels **替换** 完整标签集（Linear MCP `save_issue` 语义）。字面量 `null` 清除 assignee、estimate、截止日期、project 或 parent。

### 字段助手（仍然有效） {#field-helpers-still-valid}

```bash
orca linear status set --current --to "In Progress" --json
orca linear assignee set --current --me --json
orca linear priority set ENG-123 --to high --json
orca linear estimate set --current --to 3 --json
orca linear due-date set --current --to 2026-08-01 --json
orca linear label add --current --label backend --json
orca linear comment add --current --body "Investigating regression" --json
orca linear attach --current --url https://example.com/repro --title "Repro" --json
orca linear create --title "Flaky login test" --team ENG --priority high --json
```

运行 `orca linear --help` 或 `orca skills get orca-linear` 获取版本匹配的列表。当脚本可能跑在未与 Orca 链接的 worktree 之外时，传入显式的 issue id（例如 `ENG-123`）。

## 技能（本地，不需要运行时） {#skills-local-no-runtime-required}

列出捆绑指南、打印版本匹配的指南，或在没有桌面 Settings UI 的情况下安装/更新混合技能包：

```bash
orca skills list
orca skills get orca-cli
orca skills get orchestration --references
orca skills get orchestration --reference recovery-and-cleanup
orca skills get orchestration --full
orca skills install --skill orca-cli --skill orchestration
orca skills install --all --dry-run
orca skills update --all
```

`install` / `update` 会 shell 到 Settings 使用的同一套 `npx skills` 命令。它们不联系 Orca 运行时。见 [Orca 技能](/docs/cli/skills#keep-skills-up-to-date)。

## 账号（宿主本地运行时） {#account-host-local-runtime}

在运行 Orca 的无头宿主上（`orca serve` 或桌面应用），当远程客户端无法使用 **Add account** 时（远程运行时范围会禁用该按钮），添加受管理的 Claude/Codex 账号：

```bash
orca account list
orca account add                 # Claude by default
orca account add --agent codex
```

`account add` 在宿主的 **这个** 终端里运行 `claude login` / `codex login`，然后把捕获的凭证注册到本地运行时。Codex 使用设备授权，因此浏览器可以在另一台机器上完成。在拥有这些账号的那台机器上运行——不要通过仅客户端的远程会话。

## Artifacts {#artifacts}

通过已登录的 Orca 账号发布 HTML 或 Markdown。查看公开链接不需要登录；create/list/update/delete 需要。**发布默认关闭** —— 必须由人在该设备上启用 **Settings → Artifacts → Allow publishing public artifact links**。没有能打开这道门的 CLI 标志。`list`、`unshare` 和 `delete` 仍然可用，以便你在关闭发布之后审计或撤销链接。

```bash
orca artifacts share ./report.html --json
orca artifacts share ./notes.md --json
orca artifacts update ./notes.md --json
orca artifacts unshare ./notes.md --json
orca artifacts list --json
orca artifacts list --cursor <cursor> --json
orca artifacts delete <id> --json
```

- 接受的文件：`.html`、`.htm`、`.md`、`.markdown`。
- `share` 把编辑令牌存在活动的 Orca 配置档里，并且不打印它。`update` / `unshare` 按最初分享该文件的同一本地路径和配置档解析。
- `list` 是分页的（`nextCursor` → `--cursor`）。`delete` 取 `list` 里的 artifact id，不需要原始文件。
- 相对 HTML 资源不会上传——分享自包含的 HTML 或绝对资源 URL。
- 被拒绝的发布/更新以 `artifact_sharing_disabled` 失败；去改 Settings，而不是重试。
- 桌面：打开本地 HTML 或 Markdown 文件并使用 **Share as artifact**，或从侧栏 **Artifacts** 页管理链接。

## 自动化、环境与 hooks {#automations-environments-and-hooks}

计划 prompt：

```bash
orca automations list --json
orca automations create --name "Daily review" --trigger daily --time 09:00 --prompt "Review open changes" --provider codex --repo id:<repoId> --disabled --json
orca automations run <automationId> --json
```

远程运行时环境：

```bash
orca environment add --name work-laptop --pairing-code "orca://pair?code=..." --json
orca environment list --json
orca environment rm --environment <selector> --json
```

Agent 状态 hooks：

```bash
orca agent hooks status --json
orca agent hooks on --json
orca agent hooks off --json
```

## Agent 习惯 {#agent-habits}

- 自动化和 Agent 调用优先 `--json`。
- 优先用选择器，而不是解析 UI 标签。
- 除非下一次输入很明显，否则先读终端状态再发送输入。
- 用 worktree comments 做进度检查点。见 [Worktree 检查点](/docs/cli/worktree-checkpoints)。
- 对有跟踪的多 Agent 派发使用 [编排](/docs/cli/orchestration)，而不是临时的终端 prompt。
