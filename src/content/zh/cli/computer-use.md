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

## 可用操作 {#available-actions}

```
orca computer click --app <app> --element-index <i> --json
orca computer set-value --app <app> --element-index <i> --value "text" --json
orca computer type-text --app <app> --text "text" --json
orca computer press-key --app <app> --key Return --json
orca computer hotkey --app <app> --key CmdOrCtrl+A --json
orca computer paste-text --app <app> --text "text" --json
orca computer scroll --app <app> --element-index <i> --direction down --json
orca computer drag --app <app> --from-x 100 --from-y 100 --to-x 300 --to-y 300 --json
orca computer perform-secondary-action --app <app> --element-index <i> --action <name> --json
```

优先用语义操作（`click`、`set-value`、`perform-secondary-action`），而不是原始的 `type-text` 或 `press-key`——它们直接对准无障碍元素，能挺过键盘输入挺不过的焦点变化。

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

`get-app-state` 返回一棵无障碍树，并且默认附带一张截图。使用 `--json` 时，图像字节写入磁盘，路径在 `screenshot.path` 中返回，而不是嵌进响应。不需要像素时传 `--no-screenshot`（更快、载荷更小）。传 `--restore-window` 可在捕获前把隐藏或最小化的窗口带到前台。

## 从 Agent 使用 {#use-it-from-an-agent}

随附的 `computer-use` 技能把同一套命令面连同安全指引打包。把它安装进 Agent 的技能目录：

```
npx skills add https://github.com/stablyai/orca --skill computer-use
```

技能如何被拾取，见 [技能注册表与 MCP](/docs/cli/skills)。

## 下一步 {#next-steps}

- [命令使用](/docs/cli/commands#computer) —— 当前 `orca help` 里的 Computer Use 命令卡片。
- [Orca CLI 概览](/docs/cli/overview) —— CLI 的其余能力（worktree、终端、浏览器）。
- [技能注册表与 MCP](/docs/cli/skills) —— 把这套 CLI 分发给 Agent。
