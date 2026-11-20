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

`orca open` 会启动 Orca，而不从你正在使用的应用夺走键盘焦点。如果已经有一个 Orca 窗口打开，它什么也不做。

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

结果包括本机、已注册的 [SSH 目标](/docs/ssh)，以及已配对的 [远程 Orca 服务器](/docs/remote-servers)。本机用 `--host local`，SSH 目标用 `--host ssh:<target-id>`，已配对服务器用 `--environment <server-name>`。SSH 行在目标连接后包含检测到的远程平台（`linux`、`darwin` 或 `win32`）；较旧或已断开的目标报告 `platform unknown`。它们也包含 `connected`，以及已知时的 SSH 生命周期 `connectionStatus`。如果你把机器名放在了错误的选择器上，Orca 会报告匹配的机器以及应使用的标志，而不是返回空结果。

`--host` 也接受 `name` 列显示的裸名称，在任一轴上——`--host trader-local` 到达与 `--host ssh:ssh-1783599077486-fyasux` 相同的机器。名称仅在唯一时解析：被两个 SSH 目标、两个已配对服务器、或各一个持有的名称会被拒绝，错误会把每个候选的 id 形式交还——SSH 目标用 `--host ssh:<target-id>`，已配对服务器用 `--host runtime:<environment-id>`。用那些来确定，因为 `--environment <server-name>` 无法区分两个同名的服务器。

用 `orca host list` 打印的 id 移除已保存的 SSH 目标：

```bash
orca host rm --host ssh:<target-id> --json
```

它以与 Settings 相同的方式移除目标，因此被动的 `~/.ssh/config` 导入不会在下次启动时把别名加回来。它只接受 `ssh:<target-id>` 形式，不接受裸名称，因为它会删除数据。它拒绝 `--host local`、已配对服务器（用 `orca environment rm`），以及这个 Orca 宿主没有的 id。

## 运行时命令 {#runtime-commands}

```bash
orca open --json
orca status --json
orca serve --port 6768 --bind 100.64.1.20 --pairing-address 100.64.1.20 --json
```

`orca serve` 在前台启动运行时服务器，不打开桌面窗口。用于 [远程 Orca 服务器](/docs/remote-servers) 或无头环境，用 `Ctrl-C` 停止。它接受来自 localhost、LAN 和 Tailscale 地址的客户端；加上 `--allow-public` 也接受公网地址。
用 `--bind <literal-ip>` 选择监听接口；`--pairing-address` 改变向客户端通告的地址。

## 仓库 {#repos}

```bash
orca repo list --json
orca repo add --path /abs/path/to/repo --json
orca repo add --path /abs/path/to/folder --kind folder --json
orca repo show --repo id:<repoId> --json
orca repo set-base-ref --repo id:<repoId> --ref origin/main --json
orca repo search-refs --repo id:<repoId> --query main --limit 10 --json
orca repo hide --repo id:<repoId> --json
orca repo unhide --repo id:<repoId> --json
```

在创建大量 worktree 之前设置仓库的 base ref，这样新任务默认会从正确的位置分出去。

`repo hide` 把项目从侧栏、项目选择器和工作区切换器里拿掉，但不停止任何东西：它的终端、Agent 和自动化继续运行，`repo list` 仍会列出它并带有 `hiddenAt`，点名它的命令仍然有效。隐藏作用于一台宿主上的那份项目；当它在多台机器上设置过时，加上 `--host <host>` 来选择哪一份。在已配对的 Orca 服务器上，该设置存在于那台服务器，因此在那里隐藏项目会对连接到它的每个人隐藏。`repo unhide`，或侧栏底部的 Hidden projects 列表，会再次显示它。

`repo add` 默认是 `--kind git`。用 `--kind folder` 把普通目录（包括含有多个独立 Git 仓库的仓库工具根目录）作为文件夹工作区打开，不使用 Git worktree 或源代码管理。使用 `--environment` 时，用该 Orca 服务器上的绝对路径。

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

传 `--branch DAT-111-fix-login` 可以自己命名 Git 分支，而不是套用已配置的分支前缀。`--name` 仍然设置工作区名称，`--base-branch` 仍然设置起始 ref。如果该分支已经存在且不能复用，或者工作区路径已被占用，Orca 会给两者都加上数字后缀，与新建工作区编辑器里一样，因此 `--name task --branch exact` 即使 `exact` 空闲也可能产生分支 `exact-2`。

`worktree set --unread` 会在侧栏的 workspace 上打上未读圆点，与 Agent 完成时 Orca 显示的那个相同；`--read` 清除它。

Agent 启动标志：

```bash
orca worktree create --name review-api --agent claude --setup run --json
orca worktree create --name quick-check --agent codex --prompt "Summarize the diff" --setup skip --json
orca worktree create --name hidden-setup --setup inherit --json
```

`--agent` 在第一个终端里启动所选 Agent。`--prompt` 把初始工作发给该 Agent。`--setup run|skip|inherit` 控制仓库 setup hooks；`inherit` 跟随仓库策略。

用已有的 workspace 元数据链接 issue 和 review：

```bash
orca worktree create --repo id:<repoId> --name review-task --pr 123 --json
orca worktree create --repo id:<repoId> --name gitlab-task --gitlab-issue 42 --gitlab-mr 77 --json
orca worktree set --worktree active --gitlab-issue '#42' --gitlab-mr '!77' --json
orca worktree set --worktree active --gitlab-issue https://gitlab.example.com/group/project/-/work_items/42 --json
orca worktree set --worktree active --pr null --gitlab-mr null --json
```

`--pr` 是 GitHub pull request 编号。`--gitlab-issue` 接受 issue 编号或 `#42`；`--gitlab-mr` 接受 merge request 编号或 `!77`。编号必须是正的安全整数。GitLab 标志也接受 HTTP(S) 的 issue 或 merge request URL，包括自建实例和嵌套 group。URL 的 host 和 project 必须与 workspace 已存的 GitLab source context，或仓库已存的 remote 一致。身份缺失或不一致时，命令会在更新元数据之前失败。URL 不能改选另一个 project、更换 checkout，或拉取 review 分支。

省略某个标志则保留对应链接不变。在 `set` 上，字面量 `null` 只清除指名的链接；`create` 拒绝 `null`。每个 provider 有各自的字段，因此设置 GitLab issue 或 merge request 会保留 GitHub 和 Linear 链接。

基于文件夹的仓库可以用这些命令存数字链接，但编号本身不提供 provider 的 host 或 project。没有已有 source context 或已存 remote 时，粘贴的 GitLab URL 会被拒绝，provider 详情或可点击链接也可能不可用。这些标志使用运行时已经支持的字段；早于该字段的旧运行时可能忽略它，写到旧宿主后请用 `worktree show --json` 核对。

### 工作区清理 {#workspace-cleanup}

```bash
orca workspace cleanup preview --json
orca workspace cleanup run --json
orca workspace cleanup report --json
```

`preview` 显示你的清理规则现在会移除什么，以及为什么其他每个工作区都留下。`run` 现在应用这些规则：每个工作区在移除前都会再次检查，不会强制删除。`report` 列出最近的运行以及下一次何时到期。没有开启任何规则时，什么都不会移除。打开 **Delete agent history when a workspace is deleted**（Settings > Agents）时，`run` 还会删除已不存在的工作区里的 Orca、Claude Code 和 Codex 聊天。规则在 Orca 设置里配置；这些命令从不更改它们。加上 `--environment <id>` 在已配对服务器上运行它们。

## 端口 {#ports}

```bash
orca ports --json
orca ports --worktree branch:feature/login --json
orca ports --all
```

`ports` 列出 Orca 绑定到某个工作区的监听端口，来自该工作区运行所在的宿主。它默认是包含当前目录的工作区。每一行有 `port`、`pid`、`processName`、`connectHost`、`protocol`、Orca 如何匹配它（`owner.confidence`：`cwd` 或 `command`），以及开发服务器在 Orca 终端里打印过地址时的 `advertisedUrl`。`--all` 列出该宿主上的每一个监听者。原生文件夹工作区需要 `--all`，因为 Orca 不会把端口绑定到它们。如果设置了 `unavailableReason`，扫描无法在该宿主上运行；目前从桌面直接打开的 SSH 工作区会报告这一点，而托管 Orca 服务器上的工作区会在那台服务器上扫描。

## References {#references}

工作区可以链接多个审查和 issue，包括其仓库之外的来源。

```bash
orca reference list --worktree name:api --json
orca reference add https://github.com/acme/api/pull/5123 https://linear.app/acme/issue/STA-1234 --worktree name:api --json
orca reference remove https://github.com/acme/api/pull/5123 --worktree name:api --json
orca reference remove --key '<key-from-list>' --worktree name:api --json
orca worktree create --name fix --reference https://github.com/acme/api/pull/5123 --reference https://linear.app/acme/issue/STA-1234 --json
orca reference find STA-1234 --json
```

- **写入：** 仅完整 URL；无自定义简写。`remove --key` 支持没有 URL 的旧条目。来源未知的旧链接无法匹配精确 URL；存储时原生 issue 键仍可搜索。重复添加和不存在的移除是空操作。无关链接和当前选择会被保留。没有安全增量合并的旧宿主会拒绝写入。
- **创建：** 重复 `--reference`；与 `--pr`、`--issue`、`--linear-issue`、`--gitlab-issue` 和 `--gitlab-mr` 不兼容。引用在设置或 Agent 启动前持久化。
- **查找：** 完整 URL 或原生 issue 键；裸数字被拒绝。键搜索所有匹配来源。读取存储的元数据，不向提供方请求或搜索对话。对话文本使用 `orca search`。
- **范围：** `--worktree` 选择 worktree 或文件夹工作区。查找也接受 `--repo` 代替，加上 `--include-archived` 和 `--limit`（默认 50 个工作区）。`truncated: true` 表示还有更多匹配。远程选择器指执行宿主；`current` 仅本地。
- **输出：** list 返回带不透明 `key` 和 `selected` 的 `references`；写入也返回 `changes`。Worktree show/list/ps 保留 `linkedItems`。Find 返回工作区匹配和带 `linked`、`liveness` 以及可用 `terminal`/`mailbox` 地址的 Agent。`linked: false` 表示所有权未知；共享工作区不是充分证据。

从 `find` 中选择一个 Agent，然后使用其精确地址：

```bash
orca orchestration send --to '<terminal-from-find>' --subject 'Status' --body 'Status?' --type question
orca orchestration send --to '<mailbox-from-find>' --subject 'Status' --body 'Status?' --type question
```

邮箱是 `dispatch:<id>` 或 `orca_session_id:<id>`；`run:<id>` 寻址协调器。Find 从不发送消息或分配所有权。从 shell 添加引用不会把该 shell 与 Agent 关联。

## 终端 {#terminals}

```bash
orca terminal list --worktree active --json
orca terminal show --terminal <handle> --json
orca terminal read --terminal <handle> --json
orca terminal read --terminal <handle> --screen --json
orca terminal read --terminal <handle> --cursor <cursor> --limit 1000 --json
orca terminal send --terminal <handle> --text "npm test" --enter --json
orca terminal wait --terminal <handle> --for tui-idle --timeout-ms 300000 --json
orca terminal create --worktree active --title "tests" --command "npm test" --json
orca terminal split --terminal <handle> --direction horizontal --command "npm run dev" --json
orca terminal rename --terminal <handle> --title "runner" --json
orca terminal set-pane-title --terminal <handle> --title "reviewer" --json
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

## 已安装的 Agent {#installed-agents}

```bash
orca agent installed --json
orca agent installed --worktree active
```

列出 Orca 在宿主上检测到、可以启动的 Agent CLI：在 Settings → Agents 里关掉的 Agent 会被排除，在那里用自定义命令设置的会被包含。每个 `id` 就是 `orca agent launch` 和 `orca worktree create` 里 `--agent` 接受的值，`default` 标出默认 Agent。正在运行的 Agent 用 `agent list`。`--worktree` 检查该工作区在哪里运行 Agent，例如它的 SSH 宿主或 WSL 发行版；已停止的 WSL 发行版不会为了检查而被启动。

## 按 ID 查看 Agent {#agents-by-id}

```bash
orca agent list --json
orca agent show orca_session_id:3540ecf3-47c3-4876-b825-81bf5d6b3595 --json
orca agent read orca_session_id:3540ecf3-47c3-4876-b825-81bf5d6b3595 --limit 10
orca agent read orca_session_id:3540ecf3-47c3-4876-b825-81bf5d6b3595 --json
```

每个 Agent，无论聊天还是终端，都有一个 Orca session ID（`orca_session_id:<id>`），也就是 Copy Orca Session ID 所复制的内容。`agent list` 列出这个宿主工作区里的 Agent 及其 ID；终端 Agent 在第一次向 Orca 报告之前不显示 ID。聊天在 `/clear` 之后仍保留其 ID；终端 Agent 会得到一个新的。ID 属于运行该 Agent 的宿主：其他宿主上的 Agent 不会列出，输出会点名那些宿主以及列出它们的 `--environment`。已结束的终端 Agent 在休眠时仍以 `done` 列出，即使 Orca 重启之后也是如此，除非它被重新打开并在做任何新事情之前再次休眠。在一轮进行中被休眠的 Agent 不会列出。重新打开之后，终端 Agent 只有在向 Orca 报告后才会重新出现（对 Codex 来说，是在它的下一轮）。`agent read` 在所有这些情况下仍然能读它。`agent show` 显示已列出的休眠 Agent 的最后状态，以及它的工作区重新打开时在哪里醒来。

`agent read` 读的是对话，不是屏幕：聊天的历史，或终端 Agent 自己的记录。Agent 不必正在运行，读取也从不会启动它。只要 Orca 知道其记录在哪里，就可以读取终端 Agent（它是打开的，或在某个工作区里休眠；在 Windows 上，休眠的 WSL Agent 只有在其标签重新打开后才能读）。读取可以以一个状态开头（`--json` 里的 `state`），对应它自己的历史记录的最新一轮：`working` 表示该历史显示一轮未完成，因此它的回复可能还不在；`done` 表示该轮已结束，回复在这次读取里。在一轮中途退出的终端 Agent 可能继续读出 `working`；用 `orca agent show` 核对。没有状态表示未知，绝不是 done。`agent list` 和 `agent show` 报告 Orca 已知的最后状态，两者可能不同。要给 Agent 发消息，对终端 Agent 用其终端句柄、对聊天用 `orca_session_id:<id>`，通过 `orca orchestration send`，而不是 `orca terminal send`；休眠的终端 Agent 无法被发消息，所以先重新打开它的工作区。

## 聊天 {#chats}

```bash
orca chat rename --session <sessionId> --name "Release notes" --json
orca chat rename --name "Migrate auth"
```

重命名一个聊天标签，与手工重命名相同。`--session` 接受 `orca agent launch` 打印的 `sessionId`。在聊天内部运行时，它默认是该聊天；使用 `--environment` 时则必须提供。

## 文件 {#files}

```bash
orca file open src/App.tsx --worktree active --json
orca file diff src/App.tsx --staged --worktree active --json
orca file open-changed --mode both --worktree active --json
```

路径相对于所选 worktree。`open-changed` 读取 git status，并以 edit、diff 或两者模式打开已更改的文件。标签打开时不会改变你正在看的内容；加上 `--focus` 才会把你带到它们。

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

`snapshot --interactive` 只列出控件和链接，`--delta` 只返回自上次 `--delta` snapshot 以来变化的内容，`--selector <css>` 或 `--depth <n>` 缩小树的范围。`screenshot` 和 `full-screenshot` 把图像保存到 CLI 运行的位置并打印其路径；`screenshot` 在 Orca 桌面浏览器里以 CSS 像素为单位。

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
orca computer launch-app Safari --json
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

### 连接 {#connect}

每个 Orca 宿主保留自己的 Linear 连接。从 shell 连接无头服务器或配方 VM，API key 放在 stdin 上：

```bash
printf %s "$LINEAR_API_KEY" | orca linear connect
printf %s "$LINEAR_API_KEY" | orca linear connect --environment build-vm --json
# PowerShell
$env:LINEAR_API_KEY | orca linear connect
```

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

`install` / `update` 在运行它们的那台机器上运行 Orca 自己的技能安装器，与应用的 **Update skills** 使用同一套规划器。它们不联系 Orca 运行时，也不需要 `npx`。见 [Orca 技能](/docs/cli/skills#keep-skills-up-to-date)。

## 账号（宿主本地运行时） {#account-host-local-runtime}

在运行 Orca 的无头宿主上（`orca serve` 或桌面应用），当远程客户端无法使用 **Add account** 时（远程运行时范围会禁用该按钮），添加受管理的 Claude/Codex 账号：

```bash
orca account list
orca account add                 # Claude by default
orca account add --agent codex
```

`account add` 在宿主的 **这个** 终端里运行 `claude login` / `codex login`，然后把捕获的凭证注册到本地运行时。Codex 使用设备授权，因此浏览器可以在另一台机器上完成。在拥有这些账号的那台机器上运行——不要通过仅客户端的远程会话。

切换新 Agent 启动时使用哪一个已保存账号，适用于任何有已保存账号的 provider（Claude、Codex、OpenCode、Devin、Antigravity）：

```bash
orca account list                                               # ids, emails/labels, and the active one
orca account select --agent claude --account you@example.com    # id, email or label
orca worktree create --name task --agent claude --prompt "..."
orca account select --agent claude --account system             # back to your own sign-in
orca account rm --agent codex --account old@example.com         # forget a saved account
```

一次选择适用于之后在该宿主上启动的该 provider 的每一个 Agent——与状态栏账号菜单是同一个开关——而不是单个工作区。被多个账号共用的邮箱（一次登录属于两个组织）会被拒绝；改传 id。Antigravity 没有 `system` 默认值，`account rm` 也从不会移除 system 凭证。

## Artifacts {#artifacts}

通过已登录的 Orca 账号发布 HTML 或 Markdown。查看公开链接不需要登录；create/list/update/delete 需要。发布遵循设备上的 **Settings → Artifacts → Allow publishing public artifact links**：新配置档默认开启，而在此默认值之前创建的配置档保留原先的设置。只有人能更改它；没有能打开这道门的 CLI 标志。`list`、`unshare` 和 `delete` 仍然可用，以便你在关闭发布之后审计或撤销链接。

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
- 无头 Orca 服务器没有 Orca 云登录，因此那里的 artifact 和技能分享命令会以 `sharing_unavailable_on_host` 失败；从桌面应用分享。
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
