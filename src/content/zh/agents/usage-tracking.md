# 用量与速率限制跟踪 {#usage-rate-limit-tracking}

Orca 获取 Claude Code、Codex、Gemini、OpenCode Go、Kimi Code、MiniMax、Grok、Antigravity、Cursor 和 GLM Coding Plan 的用量，并在状态栏展示，这样你就能在 Agent 卡住之前知道自己离速率限制有多近。

## 显示什么 {#whats-shown}

- 当前用量相对活动账户套餐的占比。
- 5 小时、每日、每周以及 Claude Fable 每周窗口的重置时间（若适用）。
- 越过某项限制 80% 时出现的警告 chip。

## 工作原理 {#how-it-works}

Orca 通过网络向每个 provider 询问你的用量，使用该 Agent 已经拥有的登录，或你在 Orca Settings 中添加的 key 或会话 cookie。

### Claude 用量轮询 {#claude-usage-polling}

**Settings → Accounts → Claude → Claude usage polling** 默认开启。关掉它会停止 Orca 对 `https://api.anthropic.com/api/oauth/usage` 的请求，包括手动刷新、账户切换、非活动账户预览，以及来自移动端或 Web 客户端的刷新。关掉会取消待处理的用量请求并移除其缓存数字，同时保留实时终端读数。已经发出的请求无法撤回。

关闭轮询后，计量使用 Claude Code 的 [status-line 数据](https://code.claude.com/docs/en/statusline#rate-limit-usage)：五小时与每周的百分比和重置时间。这需要受支持的 Claude Code 版本，以及 Orca 的 status-line feed。Orca 会保留用户自己的 status line，因此那些会话不会提供这份 feed。没有读数时，用量不可用，直到某个终端会话上报它。按模型区分的每周窗口、credits，以及非活动账户的读数需要轮询。

持久化的设置是 `claudeOAuthUsageEnabled: false`，用于禁用轮询。它作用于运行这些 Agent 的主机，包括无头 Orca server；请分别配置每台主机。隐藏 Claude 状态栏项会独立控制可见性。

开启轮询时，Orca 使用你现有 Claude Code 登录中的 token。触发条件包括：

- 启动后一旦 Orca 窗口处于活动状态，之后只要它保持可见且聚焦，大约每 15 分钟一次。
- 把窗口带回前台，且上次检查已超过 5 分钟（检查失败后会更早）。
- 切换活动的 Claude 账户，或它运行所在的 runtime。
- 从 **Usage** popover 刷新用量，或使用会刷新全部用量的 Settings 控件，或更改 OpenCode Go、MiniMax 或 GLM Coding Plan 的用量凭据或设置。这些会刷新每一个 provider，包括 Claude。
- 展开状态栏里 Claude account switcher 的账户列表，这会获取你其他已保存的 Claude 账户。某个账户需要登录时，列表会以展开状态打开。
- Orca Mobile 或 Web 客户端连接到此主机或刷新用量时，也会获取你其他已保存的 Claude 账户。

## 多账户记账 {#multi-account-accounting}

状态栏始终反映*当前*账户。其他已配置账户可在 account switcher 中看到各自的用量。

## 用量名册 {#usage-roster}

点击状态栏中的用量段打开 **Usage** popover。它列出每个被跟踪的 provider（图标 · 名称 · 套餐 · 最近重置 · 各窗口条），按最紧的限制排在最前。使用标题中的刷新控件可再次获取用量。

- **Detailed** — 每个窗口的完整条、标签和百分比
- **Compact** — 每个 provider 只显示最紧的窗口

在 [Settings → Appearance](/docs/settings) 下，选择 **% used** 或 **% remaining** 来决定这些数字如何读。

没有实时数字的行会改为显示简短状态：**Loading usage…**、**not signed in**、**Usage unavailable**、**No usage data**，或 provider 特定的错误。Claude 和 Codex 行可以深入到账户切换；**Manage accounts** 会打开 Settings。

### 移动端 {#mobile}

在伴侣应用中，打开主机的 **Accounts** 屏幕即可看到同一套 switcher/用量读数。当 Codex 赚到 **rate-limit reset** 额度时，从该屏幕花掉一张（见 [移动伴侣](/docs/mobile)）。

## 估计费用（Stats） {#estimated-cost-stats}

Stats 分解可能会为已知模型家族显示 **estimated cost**（包括 Claude 5-class 和 Codex GPT-5.6 行）。标有 **• inferred pricing** 的行使用 Orca 的本地价格表，而不是来自 provider 的实时账单。权威花费请以 provider 控制台为准。
