# 终端 {#terminal}

Orca 的终端与 VS Code 使用的 xterm.js 终端相同，并针对 AI Agent 工作流做了若干增强。

## 窗格与标签 {#panes-tabs}

终端就是标签——见 [标签、窗格与分屏](/docs/model/tabs-panes-splits)。把终端窗格一分为二，就能并排开两个 shell。

Agent 终端标签会显示 Agent 身份以及实时状态：working、waiting for input、completed，或 completed-but-unread。对于 Claude 和 Codex，当 Orca 能把窗格映射到该会话时，标签标题还可以显示 **AI Vault conversation name**（自定义标题 / 线程名）——手动重命名仍然优先。

## TUI 剪贴板 (OSC 52) {#tui-clipboard-osc-52}

许多终端 UI（Zellij、tmux、Neovim、fzf、Grok）通过 **OSC 52** 复制，而不是操作系统剪贴板 API。Orca **默认允许**这些写入，因此从远程 / TUI 复制在 SSH 上与本机表现一致。

开关：[Settings → Terminal → Allow TUI Clipboard Writes (OSC 52)](/docs/settings)。

## 搜索 {#search}

`Cmd-F` 打开回滚缓冲查找。匹配高亮、大小写、正则以及匹配导航全部支持。

## 链接操作 {#link-actions}

在终端链接上普通单击（HTTP/OSC 8 URL、文件路径、workspace、terminal 或 task handle）会打开紧凑的操作弹出层，而不是立即跳转。本机网页链接以及由能力校验通过的配对运行时拥有的链接会提供 **Orca Browser** 和 **System Browser**；SSH 拥有的链接以及较旧的运行时仍仅走系统浏览器。网页链接还会提供 **Copy link**，把解析后的 URL（包括隐藏的 OSC 8 目标）复制到剪贴板而不关闭弹出层——文件和 workspace 目标保持不变。`Cmd`-click（macOS）/ `Ctrl`-click（Windows / Linux）仍然直接打开，`Shift+Cmd` / `Shift+Ctrl`-click 仍然使用 [链接路由](/docs/browser/overview#link-routing) 的备选方式。

可预览的 HTML 文件链接可以在本机、SSH 和配对运行时工作区中从 Orca 打开；远程文件行还会提供 **Download & open with default app**。如果被链接的文件已在同级工作区标签中打开，Orca 会激活该标签而不是再开一份。见 [HTML 查看器](/docs/editing/viewers#html)。

可在 [Settings → Browser → Show terminal link actions](/docs/settings) 关闭弹出层。关闭后，打开链接需要按住修饰键再点。

## 复制终端上下文 {#copy-terminal-context}

在终端上右键，选择 **Copy Context**，即可复制该窗格的一段有界 transcript。适合把最近的 Agent 输出粘贴到别的工具，而不必在 Orca 里再开一个 fork。

## 主题 {#themes}

终端配色主题可在 [Settings → Terminal](/docs/settings) 配置。Orca 自带一组常用主题，也可以自定义其中任意一个。

## Ghostty 导入 {#ghostty-import}

如果你用 Ghostty，Orca 可以在首次启动时导入其主题、字体和光标配置。之后也可以从 [Settings → Terminal → Import from Ghostty](/docs/settings) 再跑一遍导入。

## Warp 主题导入 {#warp-theme-import}

如果你在 Warp 里攒了一批主题，在 [Settings → Terminal](/docs/settings) 的终端主题选择器里点 **Import themes from Warp**，即可把它们变成 Orca 终端主题。Orca 会扫描当前操作系统的 Warp 主题目录（macOS 上是 `~/.warp/themes`，Linux 上是 `$XDG_DATA_HOME/warp-terminal/themes`，Windows 上是 `%APPDATA%\warp\Warp\data\themes`），让你挑选要导入哪些 YAML 主题。旁边的 **Import from YAML** 使用同一个选择器，但指向任意包含 Warp 格式 `.yaml`/`.yml` 文件的文件夹——主题不在默认位置时很有用。

导入的主题会出现在主题下拉菜单里，与 Orca 内置主题并列。

## macOS 与 Linux shell {#macos-and-linux-shell}

默认情况下，macOS 和 Linux 上的本地终端窗格会以 **login shell**（`-l`）打开系统 shell（`$SHELL`）。使用默认参数时：

- **zsh** 按顺序读取 `.zshenv`、`.zprofile`、`.zshrc` 和 `.zlogin`，来自 `$ZDOTDIR`；未设置时用家目录（`~`）。每个用户文件都跟在对应的系统文件之后（`zshenv`、`zprofile`、`zshrc`、`zlogin`），通常在 `/etc` 或 `/etc/zsh`。
- **bash** 读取 `/etc/profile`，然后读取 `~/.bash_profile`、`~/.bash_login` 或 `~/.profile` 中第一个存在的文件。它**不会**自行读取 `~/.bashrc`。如果 `PATH` 或版本管理器（nvm、asdf、mise）写在 `~/.bashrc`，请从该 login 文件 source 它；许多发行版默认的 `~/.profile` 或 `~/.bash_profile` 已经这样做：

  ```bash
  [ -n "${BASH_VERSION:-}" ] && [ -f "$HOME/.bashrc" ] && . "$HOME/.bashrc"
  ```

  这个守卫避免同样会读 `~/.profile` 的非 bash shell 加载只适用于 bash 的设置，即使开了 `set -u` 也安全。仅当 bash 实际读取的 login 文件还没有 source `~/.bashrc` 时才加上。

当 Orca 使用 bash integration wrapper 时，它用 `--rcfile` 而不是 `-l` 启动 bash。wrapper 会 source 同样的 login 文件，但不会另外 source `~/.bashrc`；bash 本身不处于 login 模式。

要换一个 shell，在 [Settings → Terminal → Terminal shell](/docs/settings) 选择 **Custom shell**。在 **Advanced → Custom args** 里每行一个参数，用来替换普通本地窗格的默认 `-l`。空列表表示不要参数：未包装的交互式 bash 随后会读 `~/.bashrc`，而不是 login 文件。终端 daemon 不可用时，Orca 的 bash 或 zsh integration 可以覆盖自定义参数并保留 login 启动。Agent 启动、startup commands 和一次性 shell 选择不使用这组参数设置。

## Windows shell {#windows-shell}

Windows 上的默认 shell 可在 PowerShell、Command Prompt 和 WSL 之间配置，见 [Settings → Terminal](/docs/settings)。当 `wsl.exe --status` 成功时会自动提供 WSL。标签栏上的 **+** 下拉还会显示子菜单，方便你开一次性标签用任意 shell，而不改默认值。

对于位于 WSL 文件系统（`\\wsl.localhost\...`）上的仓库，Orca 通过 `wsl.exe -d <distro>` 启动。对于在 WSL 中打开的 Windows 路径仓库，Orca 会把 cwd 翻译成 `/mnt/<drive>/...`，并让你进入 login bash。

## 快捷键 {#shortcuts}

- `Cmd-T` — 在当前 worktree 中新建终端标签。
- `Cmd-Alt-T`（macOS）— 用你的默认 Agent 新建 Agent 标签。Linux 和 Windows 上这个组合默认未绑定；在 [Settings → Shortcuts](/docs/settings) 里分配（搜索 "New agent tab"）。每个受支持的 Agent 还有自己的 per-agent "New agent tab" 动作——绑定组合键即可直接启动特定 CLI，而不经过默认项。
- `Cmd-W` — 关闭当前标签。
- `Cmd-\` — 向右分屏。
- `Cmd-Shift-\` — 向下分屏。

## 原生按键绑定 {#native-key-bindings}

Orca 会通告 kitty keyboard protocol，因此终端应用能看到真正的 `Shift+Enter`、`Ctrl+Enter` 以及其他带修饰键的按键——这些绑定在 Orca 里与 Ghostty、WezTerm 或你的原生终端一致。

对于 macOS 上的日文 JIS 键盘，如果希望物理 Yen 键在终端会话中发送反斜杠，请启用 **Settings → Terminal → JIS Yen (¥) to Backslash (\\)**。

## 浮动终端 {#floating-terminal}

浮动终端是一个全局 shell 表面，无论你在哪个 worktree 或标签上，都只需一个组合键即可到达。新安装默认开启。

- 用 `Cmd+Option+A`（macOS）/ `Ctrl+Alt+A`（Linux/Windows）切换。同一个组合键：面板已打开则聚焦它，已聚焦则关闭它。
- 点击窗口边缘的浮动按钮，或在 [Settings → Terminal → Floating terminal](/docs/settings) 把触发器移到状态栏。
- 在同一设置项下指定起始工作目录（默认 `~`），这样新的浮动标签会落在你期望的位置。
- 浮动面板有自己的标签，并支持编排 setup——无需占用 worktree 窗格即可启动后台运行。

## Quick Commands {#quick-commands}

Quick Commands 保存你经常运行的终端命令，例如 `npm run dev`、`pnpm test`，或项目特定的 setup 脚本。它们也可以保存可复用的 Agent prompt，供 Claude、Codex 这类启动时带 prompt 的 Agent 使用。从 **Settings → Quick Commands** 或标签栏的 **Add command** 按钮创建，然后从 worktree 标签栏的 Quick Commands 拆分按钮或终端上下文菜单运行。

每条命令都有 label、command text 和 scope。用 **Global** 表示处处适用的命令，或用 **Project** 让命令只出现在特定仓库的 worktree 中。标签栏按钮会打开一个新终端标签并运行命令；终端上下文菜单可以把命令插入当前终端。使用命令行上的复制控件（Settings 列表、标签栏菜单，或 [移动端 Quick Commands](/docs/mobile#quick-commands)）把命令正文放到剪贴板。

当你与配对的 [Remote Orca Server](/docs/remote-servers)（或其他执行主机）一起工作时，选择器可以并排显示 **local and remote** 集合，并按主机标注（例如 _Local Mac_ 和 _Orca Server_）。**Saved on** 表示命令存储在哪里；运行命令仍然在你调用它的终端或工作区里执行——因此客户端拥有的命令可以在远程 worktree 里跑。不声明多主机 Quick Commands 的旧服务器会回退到仅本机列表。
