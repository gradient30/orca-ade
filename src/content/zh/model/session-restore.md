# 会话恢复 {#session-restore}

关掉 Orca 后，下次启动会把整个工作区原样恢复：每一个打开的 worktree、每一次终端分屏、每个窗格里的回滚缓冲，以及你当时聚焦的标签。你不必记住哪些 Agent 跑在哪些分支上——那是 Orca 的工作。

## 会恢复什么 {#what-gets-restored}

- **打开的 worktree** — 侧栏里你当时打开的每一个 worktree。
- **标签和分屏** — 每个 worktree 的窗格布局，包括嵌套分屏以及当时聚焦的标签。
- **正在运行的 Agent 进程** — 你当时在跑的 Agent 在退出 Orca 后继续跑。后台 daemon 拥有 PTY，所以关掉应用窗口不会在任务中途杀掉 Claude Code、Codex 或其他 Agent CLI。下次启动时，Orca 会热重连到同一批进程。若要改为结束它们，请使用 **Quit Completely**（见 [何时运行恢复](#when-restore-runs)）。
- **终端回滚缓冲** — 每个终端里的缓冲区，包括 Orca 关闭期间产生的输出。
- **聚焦的 worktree 和标签** — Orca 打开到你关闭时的同一视图。

## 不会恢复什么 {#what-doesnt-get-restored}

主机倒下时 daemon 也会死，所以任何让整台机器停掉的事情——重启、操作系统更新、内核恐慌、硬关机——都会结束每一个正在运行的 Agent。下次启动时，worktree、标签、分屏和最后已知的回滚缓冲会回来，但 Agent 进程本身没了。在任意标签里重新运行该 Agent 即可继续。

Orca 关闭期间发生 daemon 崩溃，对它当时持有的会话有同样效果，但布局和回滚缓冲仍会在下次启动时恢复。

## 何时运行恢复 {#when-restore-runs}

每次启动都会跑会话恢复。会恢复什么，取决于 Orca 退出时以及关闭期间 **daemon** 及其会话发生了什么：

**Daemon 存活 → Agent 继续运行：**

- **Cmd-Q** — 正常退出方式。Agent 在后台继续干活。
- **自动更新器重新启动** — Orca 重启以安装更新；Agent 不受影响。
- **应用崩溃** — 如果 Orca 自己崩溃，daemon 会让你的会话活着，供下次启动热重连。

**Daemon 死亡 → Agent 没了，布局仍恢复：**

- **主机重启** — 笔记本重启、操作系统更新、内核恐慌、硬关机。worktree、标签、分屏和最后持久化的回滚缓冲仍会在下次启动时回来。

**退出前会话已停止 → Agent 和终端标签没了：**

- **Quit Completely** — 你确认之后，Orca 会关闭每一个终端标签并停止其会话，做法与 **Settings → Terminal → Manage Sessions → Kill all sessions** 相同，然后退出。项目和 worktree 留在侧栏；已关闭的终端标签下次启动时不会回来。

这一项在 macOS 上位于 Orca 菜单，在 Windows 和 Linux 上位于应用程序菜单（标题栏里的 **···** 按钮）中的 **File** 下。它也在 macOS 的菜单栏图标菜单和 Windows 的托盘图标菜单里。远程主机上的终端会话可能继续在那里运行，而来自已配对 Orca server 的标签，如果该服务器从未收到关闭，仍可能回来。如果这台计算机上的某个会话无法停止，Orca 会显示错误并保持打开。

> **从头开始**
> 若想要干净的起点，退出前显式关闭 worktree。没有“在新会话中打开”模式——Orca 始终恢复。已关闭的 worktree 保持关闭。

## 下一步 {#next-steps}

- [Agent 与会话](/docs/model/agents-sessions) — 状态圆点和一次 Agent 会话的生命周期。
- [标签、窗格与分屏](/docs/model/tabs-panes-splits) — 你将要恢复的布局最初是怎么搭起来的。
