# Computer Use {#computer-use}

`orca computer` CLI 让 Agent 检查并控制原生桌面应用——列出正在运行的应用、读取无障碍树、点击控件、设置值、输入文本、滚动和截图。当任务需要操作操作系统或第三方应用，而不是终端或内置浏览器时使用它。

> **Beta**
> Computer use 按平台附带原生 helper，并需要 Accessibility 权限（macOS 上还需要 Screen Recording）。命令面已经稳定到技能可以对着它构建，但标志名称仍可能变动。

## 首次设置 {#first-time-setup}

检查运行时和权限：

```
orca status --json
orca computer permissions --json
orca computer capabilities --json
```

如果 `permissions` 报告有任何缺失，在 System Settings 里把 Accessibility（以及 macOS 上的 Screen Recording）授予 **Orca Computer Use**，然后重新运行 `permissions --json` 确认。

## 快照 → 操作 → 快照 {#snapshot-act-snapshot}

每次交互都走同一循环：读取应用当前状态，对某个具体元素执行操作，然后重新读取状态以验证结果。

```
orca computer list-apps --json
orca computer get-app-state --app com.spotify.client --json
orca computer click --app com.spotify.client --element-index 42 --json
```

元素索引限定在最近一次 `get-app-state` 结果里，并且可能是 **稀疏** 的。在 `--json` 输出中，从 `result.snapshot.treeText` 读取树。不要从 `elementCount` 臆造索引。在导航、焦点变化、滚动或任何应用重绘之后，重用索引前先刷新状态。

操作结果只返回自该窗口上次状态以来发生变化的无障碍树行（`~` 改变、`+` 新增、`-` 移除），由 `snapshot.treeDiff` 标出；传 `--full-tree` 获取整棵树。要在大窗口里找一个控件，`get-app-state --query <text>` 只打印匹配的元素及其祖先，`--max-elements <n>` 限制输出量。大于快照上限的窗口会在树被截断的地方显示 `... N more not shown (snapshot limit)`；`get-app-state --element-index <n>` 只读取该元素的子树，因此传入被截断子节点的父节点即可看到它们。

## 等待应用 {#waiting-for-the-app}

不要在操作之间 sleep，而是等待应用接下来应该显示的内容。`wait` 在条件成立时立即返回，打印匹配的元素或窗口，并在 `--timeout` 毫秒后以 `wait_timeout` 失败（默认 10000，最多 120000）：

```bash
orca computer wait --app com.apple.TextEdit --text "Saved" --json
orca computer wait --app com.apple.TextEdit --enabled "Continue" --json
orca computer wait --app com.apple.TextEdit --window-title "Save As" --json
```

`--text` 以与 `get-app-state --query` 相同的方式匹配元素行。`--enabled` 在包含该文本的元素存在、且其中没有一个被禁用时成立。`--window-title` 检查 `list-windows` 报告的窗口标题（在 Windows 上，只检查主窗口的）。`wait` 只读取应用，并在应用或窗口还不存在时继续检查。`--enabled` 需要其 provider 会标记禁用元素的运行时（`capabilities` 里的 `supports.observation.disabledState`）。

## 多窗口应用 {#multi-window-apps}

```bash
orca computer list-windows --app com.microsoft.edgemac --json
orca computer get-app-state --app com.microsoft.edgemac --window-id <id> --json
orca computer click --app com.microsoft.edgemac --window-id <id> --element-index 12 --json
```

列出的 id 不是 `none` 时优先用稳定的 `--window-id`；否则使用 `--window-index`。

## 选择应用 {#selecting-an-app}

优先使用 `list-apps` 返回的 bundle ID：

```
orca computer get-app-state --app com.microsoft.edgemac --json
```

应用名在无歧义时可用（`--app Spotify`）。仅当 bundle ID 和名称都冲突时，才使用 `--app pid:<number>`。

在 macOS 上，没有 Dock 图标的应用（例如菜单栏应用）在显示窗口时会被列出，并标记 `accessory: true`。

## 启动应用 {#starting-an-app}

`list-apps` 只显示正在运行的应用。要启动一个已关闭的应用，又不把你从正在做的事情里拉开，使用 `launch-app`：

```
orca computer launch-app TextEdit --json
```

它请求 macOS 和 Windows 在后台启动该应用，并放过已经在运行的应用。有些应用仍会自己来到前面，因此结果里的 `delivery` 会说明应用最终是否在前面。`--activate` 则会把它带到前面。Linux 还不支持。

## 可用操作 {#available-actions}

```
orca computer click --app <app> --element-index <i> --json
orca computer set-value --app <app> --element-index <i> --value "text" --json
orca computer type-text --app <app> --text "text" --json
orca computer type-text --app <app> --element-index <i> --text "text" --json
orca computer press-key --app <app> --key Return --json
orca computer hotkey --app <app> --key CmdOrCtrl+A --json
orca computer paste-text --app <app> --text "text" --json
orca computer scroll --app <app> --element-index <i> --direction down --json
orca computer drag --app <app> --from-x 100 --from-y 100 --to-x 300 --to-y 300 --json
orca computer perform-secondary-action --app <app> --element-index <i> --action <name> --json
```

优先用语义操作（`click`、`set-value`、`perform-secondary-action`），而不是原始的 `type-text` 或 `press-key`——它们直接对准无障碍元素，能挺过键盘输入挺不过的焦点变化。

`hotkey` 和 `press-key` 会拒绝退出或关闭应用、登出、锁定屏幕、强制退出或结束会话的快捷键，例如 macOS 上的 `Cmd+Q`、`Shift+Cmd+Q`、`Ctrl+Cmd+Q` 和 `Option+Cmd+Esc`，Windows 上的 `Alt+F4` 和 `Win+L`，以及 Linux 上的 `Ctrl+Q`、`Alt+F4`、`Super+L` 和 `Ctrl+Alt+Delete`。错误码是 `system_shortcut_blocked`。传 `--allow-system-shortcut` 仍会发送其中一条。

`type-text --element-index <i>` 把文本插入该字段的光标处，而不聚焦它或把它的窗口带到前面。它在 macOS、Linux 和 Windows 上都能用。在 macOS 上，以及通过 UI Automation 值写入的 Windows 字段，不报告光标的字段会把文本加到末尾。应用仍可能作为响应把自己的窗口带到前面，因此请检查 `action.delivery`。

在 macOS 上，操作在后台运行：目标应用不会被带到前面，你最前面的应用和键窗口保持不动，指针也不会移动，因此 Agent 驱动另一个窗口时你可以继续工作。每个操作结果报告 `action.delivery`（`background` 或 `foreground`）。仅当应用忽略后台输入时才传 `--restore-window`，例如 Chromium 或 Electron 应用或游戏里的拖拽；它会把应用带到前面并使用真实的指针和键盘，除非你在此期间移动了指针，指针会回到原来的位置。不会接受焦点的窗口（例如某些启动窗口）在没有东西挡住该点时仍会收到点击，之后你的前台应用会回来，除非这次点击打开了什么。随附技能告诉 Agent 绝不要自行加上它：它们先问你，错误信息也这么说。弹出菜单和 web 的 `<select>` 控件用 `set-value` 设置，而不是点击。在 Linux 上，通过无障碍动作的元素点击、`set-value`、`type-text --element-index` 和次要动作在后台运行；需要真实指针或焦点窗口的动作会被拒绝，除非你传 `--restore-window`。在 Wayland 上即使传了也会被拒绝，因为合成输入到不了原生窗口。在 Windows 上，元素点击、`set-value`（包括滑块）、滚动和次要动作（`Invoke`、`Toggle`、`Select`、`Expand`、`Collapse`、`ScrollToVisible`）在控件支持时通过 UI Automation 完成，不移动指针也不发送按键。`type-text --element-index` 对文本框同样有效。有些应用在这样被驱动时仍会把自己的窗口带到前面（WPF 应用对其中大多数都会），因此只要目标窗口来到前面，`action.delivery` 就报告 `foreground`。需要真实鼠标的动作，例如坐标点击、右键和拖拽，会被拒绝，除非你传 `--restore-window`；那时只有目标窗口来到前面，指针会回到原来的位置。键盘输入（不带索引的 `type-text`、`press-key`、`hotkey`、`paste-text`）在窗口不在前面时同样会被拒绝。

当无障碍定位失败时，谨慎回退到坐标：

```bash
orca computer click --app com.apple.Safari --x 120 --y 340 --json
orca computer drag --app <app> --from-element-index 3 --to-element-index 9 --json
```

## 敏感输入 {#sensitive-input}

通过 stdin 传递密钥，这样它们不会进入 shell 历史：

```
printf '%s' "$TEXT" | orca computer set-value \
  --app com.apple.Safari --element-index 7 --value-stdin --json
```

`--text-stdin` 对 `type-text` 和 `paste-text` 同样有效。

在 Linux 和 Windows 上，操作载荷在 helper 运行期间还会短暂经过一个本地操作文件。stdin 能让密钥离开 shell 历史，但不能对每一个本地观察者隐藏它们；除非任务明确要求，否则不要发送密钥。

## 截图 {#screenshots}

`get-app-state` 返回一棵无障碍树，并且默认附带一张截图。使用 `--json` 时，图像字节写入磁盘，路径在 `screenshot.path` 中返回，而不是嵌进响应。不需要像素时传 `--no-screenshot`（更快、载荷更小）。要保留像素但少传字节，`--screenshot-scale 1` 把图像限制为每个窗口点一个像素（Retina 捕获否则是两个），`--screenshot-max-edge <px>` 限制较长的一边，`--screenshot-format jpeg` 把它编码为 JPEG；`screenshot.format` 和 `screenshot.scale` 说明实际返回了什么。在 macOS 上，最小化或隐藏的窗口没有像素，因此截图失败而无障碍树仍然返回；另一个 Space 上的窗口可以被捕获。

在 Wayland 上，截图在 KDE Plasma、Hyprland 和 Sway 上可用。在 Hyprland 和 Sway 上需要 `grim`、GdkPixbuf，以及 `hyprctl` 或 `swaymsg`；Orca 按进程 ID 和标题找到目标窗口并捕获它的区域，因此重叠的窗口可能出现在图像里。

在 KDE Plasma 上，Orca 向 KWin 询问窗口位置，通过 `xdg-desktop-portal`（配合 `xdg-desktop-portal-kde`）截取桌面，再裁剪到该窗口。门户把那张截图存在你的 Pictures 文件夹里；Orca 读取它然后删除它。第一次截图会让桌面询问应用是否可以截图。回答该提示，然后再次运行 `get-app-state`。如果在 `get-app-state` 放弃等待之后才回答提示，门户可能会把那一张截图留在 Pictures 里。如果你拒绝，截图会一直失败，直到你在桌面的权限设置里再次允许。被另一个窗口挡住的 KDE 窗口会返回截图错误，而不是另一扇窗口的图像。

GNOME 不会告诉应用窗口在哪里，因此它返回截图错误。在任何 Wayland 桌面上，当窗口被最小化、在另一个工作区、匹配到不止一个窗口，或尺寸与其无障碍边界不同时，`get-app-state` 返回无障碍树并附带截图错误。

## 从 Agent 使用 {#use-it-from-an-agent}

随附的 `orca-computer-use` 技能把同一套命令面连同安全指引打包。把它安装进 Agent 的技能目录：

```
npx skills add https://github.com/stablyai/orca --skill orca-computer-use
```

技能如何被拾取，见 [技能注册表与 MCP](/docs/cli/skills)。

## 下一步 {#next-steps}

- [命令使用](/docs/cli/commands#computer) —— 当前 `orca help` 里的 Computer Use 命令卡片。
- [Orca CLI 概览](/docs/cli/overview) —— CLI 的其余能力（worktree、终端、浏览器）。
- [技能注册表与 MCP](/docs/cli/skills) —— 把这套 CLI 分发给 Agent。

该技能以前名为 `computer-use`。使用该名称的现有 Orca CLI 请求仍然受支持。Agent 调用请使用 `$orca-computer-use`。Orca 通过其技能更新器迁移已验证、未编辑的安装，并保留已编辑的拷贝。旧的共享文件夹可能作为转发链接留下来，供现有 Agent 配置档使用。
