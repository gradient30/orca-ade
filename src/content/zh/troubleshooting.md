# 故障排除与 FAQ {#troubleshooting-faq}

## Agent 无法启动 {#agent-won-t-start}

- 打开终端，手动运行该 Agent 的 CLI。如果在那里失败，那是 CLI 自身的鉴权或安装问题——不是 Orca。
- 确保 CLI 位于 Orca 看到的 `PATH` 上（检查 [Settings → Agents](/docs/settings)）。
- 试试标签上的 **Restart** 芯片。

## Diff 视图看起来不对 / 卡住 {#diff-view-looks-wrong-stuck}

- 点击 diff 工具栏上的刷新图标——Orca 会重新读取 worktree。
- 外部 `git` 操作（rebase、reset）可能落在两次刷新之间。

## Worktree 创建失败 {#worktree-creation-fails}

- start-from ref 可能还没 fetch。在仓库里打开终端，运行 `git fetch origin`。
- 目标目录可能已经有该分支的 worktree——删掉它，或换一个新分支名。

## Orca CLI 提示 "command not found" {#orca-cli-says-command-not-found}

在 [Settings → General → Orca CLI](/docs/settings) 下注册 CLI。在 macOS 上它会把 shim 装到 `~/.local/bin`；确保它在你 shell 的 `PATH` 上。

## SSH 能连上但远程终端失败 {#ssh-connects-but-remote-terminals-fail}

- 首次连接到 SSH 主机或 WSL distro 时，Orca 会在那里安装其服务器需要的 Node.js 版本。它在这台计算机上下载；若失败，则在主机上下载。如果你的网络拦截了 nodejs.org，把 **Settings → Advanced → Network → Node.js Download Mirror** 设为 `nodejs.org/dist` 的一份副本，或者在另一台机器上下载错误信息里点名的文件，并复制到错误信息给出的、这台计算机上的路径。然后再次连接。
- 在 Linux 上，如果终端始终无法生成，安装 C/C++ 工具链：make、g++/clang++、python3（见 [SSH worktrees](/docs/ssh)）。
- 安装工具后重连，以便 Orca 重新安装原生模块。

## SSH 对文件可用，但没有 “Download Folder” {#ssh-works-for-files-but-not-download-folder}

文件夹下载需要递归 SFTP 传输。仅系统 SSH 的连接上，文件下载可能仍然可用。可用终端 `tar`/`scp` 作为回退。

## “Open in VS Code, Cursor, or Zed” 被禁用或仅为 Local only {#open-in-vs-code-cursor-or-zed-is-disabled-or-local-only}

- 使用 SSH worktree（而不是 Remote Orca Server 活动运行时）。
- 把 Open-in 命令设为 VS Code / Insiders、Cursor 或 Zed，而不是多参数 shell 命令。
- 如果主机已被移除，刷新 SSH 目标。

## Kerberos 登录失败 {#kerberos-login-fails}

- 确保 `klist` 显示该主机 realm 的有效 ticket。
- 确认 OpenSSH 配置里该 Host 有 `GSSAPIAuthentication yes`，然后在 Settings → SSH 中重新导入或重新测试该目标。

## 浏览器提示 `browser_no_tab` {#browser-says-browser-no-tab}

当前 worktree 里没有打开的标签。用 `orca tab create --url ...` 打开一个，或手动打开浏览器窗格并导航。

## 性能与内存 {#performance-memory}

- 关掉你没有在用的 worktree。每个 worktree 都会保持文件监视器活着。
- 带许多浏览器标签的分屏布局是最大的 RAM 用户——关掉不需要的浏览器。

## Windows：RAM 消失了但没有应用在使用它 {#windows-ram-disappears-but-no-app-is-using-it}

Orca 的工作负载会启动许多短命进程（hooks、`git status` 轮询、Agent CLI）。如果有问题的内核驱动对每一个退出的进程都保留引用，已退出的进程就永远不会被释放：RAM 流入 Task Manager 无法归给任何应用的内核内存，启动新进程也会变慢，于是 Orca 常常被怪罪。

- **快速检查：** Task Manager → Details → **PID** 列。Windows 会复用已释放进程的 PID，所以它们通常停在几万以内；进程数量正常但 PID 到了几十万或更高，可能表示已退出的进程在堆积。[RAMMap](https://learn.microsoft.com/en-us/sysinternals/downloads/rammap) 里巨大的 **Page Table**（通常只有几百 MB）是另一个迹象。
- **一个已知原因：** AMD 集成 GPU 驱动 `amdkmdag.sys`（在 `31.0.24002.92`、Adrenalin 24.1.1 中泄漏）。请核对你实际的 `amdkmdag.sys` 版本，因为 OEM 包按日期可以更新，但仍会泄漏。测试过的版本、检查脚本和变通办法见 [#28293](https://github.com/stablyai/orca/issues/28293)。
- **修复：** 安装 AMD 自己的驱动（`32.0.21045.5002` 经测试无泄漏）。在带 MUX 开关的笔记本上，Discrete GPU 模式也会止住泄漏（功耗更高，电池续航更短）。该模式下 AMD 的 Auto-Detect 看不到 iGPU，所以安装 AMD 驱动之前先切换到 Hybrid 并重启。
- **收回内存：** 用 **Restart** 而不是 Shut down：启用 Fast Startup 时，Shut down 会保留内核状态，泄漏的内存也会留下来。

## GitHub PR 面板 / checks / Tasks 错误 {#github-pr-panel-checks-tasks-errors}

速率限制、错误的 `gh` 鉴权、缺少 scopes，以及仓库访问问题都会出现在 Source Control 和 PR Checks 面板。完整矩阵见 **[GitHub 错误排查](/docs/github-errors)**（包括为什么 Settings 里的 **GitHub API Budget** 看起来正常，REST 却仍被挡住）。

快速检查：

```bash
gh auth status -h github.com
gh api user
gh api rate_limit --jq '.resources.core'
```

## 日志 {#logs}

**Help → Open Logs** 打开存放 Orca 日志的目录。提交缺陷时附上它们。

## 报告问题 {#reporting-issues}

- **Help → Send Feedback**（应用内）— 把截图粘贴或拖进对话框，或挑选图片文件；提交前会显示缩略图。缺陷难以复现时附上 [日志](#logs)。
- [GitHub Issues](https://github.com/stablyai/orca/issues) — 缺陷和功能请求。
- [Discord](https://discord.gg/fzjDKHxv8Q) — 实时帮助。
