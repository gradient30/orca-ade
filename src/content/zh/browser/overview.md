# 每个 worktree 的浏览器 {#per-worktree-browser}

每个 Orca worktree 都有自己的浏览器。它是真正的 Chromium 窗口——地址栏、历史、devtools——嵌在一个窗格里。标签限定到该 worktree，所以你正在对着构建的应用不会挡到其他工作。

> **图示** 每个 worktree 的浏览器窗格，带地址栏和标签条

## 控件 {#controls}

- 带历史和模糊 URL 补全的地址栏。非 URL 文本用你的 [Default Search Engine](/docs/settings) 搜索——与 [new-tab omnibox](/docs/model/quick-open#new-tab-omnibox) 用的是同一引擎。在 **+** 字段里用 `?` 作为查询前缀可强制搜索。
- 后退 / 前进 / 重新加载 / 停止。悬停重新加载控件可看普通重新加载快捷键；右键（或长按）可看 **Reload** 和 **Hard Reload** 及其快捷键——hard reload 会绕过缓存，适合你在迭代本地前端资源时。
- `Cmd-F` — 页内查找。
- `Cmd-T` — 新标签，限定到此 worktree。
- `Cmd-Shift-T` — 重新打开上次关闭的标签。
- 使用 `target=_blank` 的页面链接和普通未命名弹窗会在新的 Orca 标签中打开，使用打开者标签的 browser profile。命名或 OAuth 风格的弹窗仍可能在单独窗口中打开。

## Worktree 限定 {#worktree-scoping}

标签按 worktree 过滤。切换 worktree 会恢复该 worktree 的浏览器标签和滚动位置。

## 远程工作区 {#remote-workspaces}

对于配对的 [Remote Orca Server](/docs/remote-servers) 上的工作区，新浏览器页面默认在此桌面渲染，而 HTTP(S)、WebSocket、DNS 和 loopback 流量仍走远程宿主。输入、选择和弹窗对本设备保持原生，而不改变页面的网络身份。浏览器工具栏里的宿主指示器显示流量去向。

在 [Settings → Browser → Remote server workspaces](/docs/settings) 下，选择 **This device** 或 **Server (streamed)**。该选择只适用于新页面；不会移动已经打开的页面。如果本地渲染的远程页面无法启动，**Reopen on server** 会在其上次地址打开一个新的服务器托管页面（登录或表单状态可能不同）。

对于 SSH 工作区，**Browse through SSH workspace hosts** 控制浏览器流量和 DNS 是走工作区的 SSH 宿主还是本设备。来自客户端托管远程页面的下载留在远程工作区宿主上，上传会在页面收到之前先在那里暂存。

## 链接路由 {#link-routing}

在 [Settings → Browser → Link Routing](/docs/settings) 下，选择来自终端、markdown 和编辑器的 http(s) 链接是在 Orca 每个 worktree 的浏览器中打开，还是在系统浏览器中打开。

嵌套的 **Hold Shift…** 开关会用平台修饰键把该默认对一次点击反转（macOS 上 `⇧⌘-click`，Windows / Linux 上 `Shift+Ctrl+click`）：

- 当链接在 **Orca** 中打开时，修饰键把这一条链接送到系统浏览器。
- 当链接在 **system browser** 中打开时，打开该开关，让修饰键改为在 Orca 内置浏览器中打开这一条链接（普通点击仍走系统）。

能力已验证的 paired runtime 可以为其终端链接提供同样的 Orca/系统浏览器选择。SSH 拥有的终端链接和来自较旧 runtime 的链接仍只走系统浏览器。见 [Terminal → Link actions](/docs/terminal#link-actions)。

## 下载 {#downloads}

浏览器下载在活动中或刚完成时出现在工具栏下的 shelf 里，带取消进行中下载、打开已完成文件、在文件夹中显示或关掉该行的操作。

## 作为 artifact 分享 {#share-as-artifact}

在 worktree 浏览器中打开的本地 HTML 文件可以用工具栏里的 **Share as artifact** 通过你已登录的 Orca 账户铸造公开查看链接（与 Markdown 相同的可选加入门槛和管理表面）。相对 HTML 资源不会上传——分享自包含文件，或使用绝对资源 URL。见 [Settings → Artifacts](/docs/settings#artifacts) 和 [CLI reference → Artifacts](/docs/cli/reference#artifacts)。

## 视口尺寸模拟 {#viewport-size-emulation}

在浏览器标签上设置自定义 viewport 尺寸，以测试响应式布局而不调整整个窗格。Orca 底层使用 Chrome DevTools Protocol 的设备模拟，因此页面在 `window.innerWidth` 和 media queries 中看到的是模拟后的尺寸。

## 自动化 {#automation}

浏览器也可以被 Agent 通过 [Orca CLI](/docs/cli/overview) 脚本化——`orca snapshot`、`orca click`、`orca fill` 等等。你交互的是同一浏览器、同一批标签。

## 下一步 {#next-steps}

- [Design Mode](/docs/browser/design-mode) — 把浏览器变成指针到代码的反馈循环。
- [Browser-use 配置档](/docs/browser/profiles) — 用特定登录或 cookie jar 运行浏览器。
