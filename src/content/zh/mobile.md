# 移动伴侣 {#mobile-companion}

Orca 移动伴侣是一款 iOS/Android 应用，与你的桌面 Orca 配对，让你监视并控制正在运行的 Agent——Agent 状态、最近的终端回滚缓冲、终端输入、源代码管理，以及 Agent 账户。配对会建立对所选主机的持久访问；桌面仍然是事实来源。

> **测试版**
> 移动伴侣处于测试版。从 [App Store](https://apps.apple.com/us/app/orca-ide/id6766130217) 安装 iOS，或从 [Google Play](https://play.google.com/store/apps/details?id=dev.orca.app) 安装 Android。如果设备上没有 Google Play，安装 [当前 APK](https://orca.dev/download/android)。

## 在移动端能做什么 {#what-you-can-do-from-mobile}

- 查看每个 worktree、它的 Agent 以及当前状态（working / done / waiting on input）。移动端在单一视图中列出你已连接的每个主机上的 worktree（本地桌面和远程 Orca 服务器），因此在它们之间切换不必换设备。
- 从移动端浏览工作区的完整文件树——包括很深的嵌套路径——这样你可以跳进任意文件，而不必等桌面。
- 在 **Chat UI**（聊天式 transcript）或原始终端中打开受支持的 Agent 会话。在 Settings → Chat UI 下设置设备默认，或长按会话标签只切换该标签。
- 灌入最近的终端回滚缓冲，以便阅读 Agent 做了什么或问了什么。聊天式视图中的 Markdown 在消息包含时可以渲染 **Mermaid** 图。
- 从移动终端视图选择、复制和粘贴文本——长按选择，用分享表把内容粘贴回回复。
- 使用终端附属行处理手机键盘上别扭的按键，包括 `Tab` 和 `Shift+Tab`，或切换到 **Live**，让每个键入的字符直接进入活动终端。
- 当 Agent 在等待输入时发送短回复（`continue`、`yes`、自由文本），附加照片或文件，或点麦克风口述回复。在 **Live** 模式下，口述文本会插入活动终端，而不会替你按 Return。在 Chat UI 中，附加的图片在你的消息上显示为缩略图，可以带或不带文本发送。
- 从会话标签条运行 **Quick Commands**——与桌面列表同步的已保存终端命令或 Agent prompt。
- 长按会话标签进行批量关闭操作（**Close Other Tabs**、**Close Tabs to the Left**、**Close Tabs to the Right**）。未保存的 markdown 标签和已钉住的标签会被跳过。
- 需要在手机上检查响应式页面时，以 **Web** 或 **Mobile** 视图打开浏览器会话。
- 打开 worktree 的 Source Control，审查已更改文件、暂存或取消暂存，并从手机提交。
- 切换活动 Agent 账户，并随时查看用量 / 速率限制状态。当 Codex 赚到了 reset credits，可从账户屏幕花掉一个。
- 从移动端创建工作区，Smart 源模式与桌面相同：Smart、GitHub、Linear、GitLab、Branch 和 Name。在有 **多台已连接桌面** 时，**New Workspace** 会先问由哪台主机创建（只有一台已连接主机则跳过选择器）。
- 打开主机卡片的 **⋯** 菜单，进行 **Edit**、**Connect**、**Remove** 及相关操作（长按仍可作为快捷方式）。
- 无需重新配对即可编辑已保存主机的显示名称或连接地址（例如桌面在家庭 LAN 和 Tailscale 之间移动时）。
- 在 Agent 完成时收到推送通知，镜像 [桌面通知](/docs/notifications)。

移动应用有意不是完整编辑器——它是你已经在运行的桌面的遥控器。

## 配对 {#pairing}

1. 在桌面上，从账户 / 状态菜单打开 Orca 的配对流程。Orca 显示配对码。把它当作机密，只分享给你要授权的那台设备。
1. 在移动端，打开 Orca 伴侣应用，选择 **Pair**，然后粘贴该码。（你也可以从桌面跟随深层链接直接进入移动配对屏幕。）
1. 可用时优先用 **Orca Relay** 配对——只有 Relay 需要登录。Relay 上本地网络地址选择器是可选的（想要 LAN 快速路径时再展开）；LAN 配对仍然需要地址。
1. 配对交换为该手机建立设备令牌；让桌面在你选择的路径上保持可达。

关闭桌面应用会断开直连 / LAN 会话，直到你重新打开。由 Relay 支持的配对跟随桌面的 Relay 连接——如果主机离线，重新打开桌面。

当前桌面 UI 的配对邀请对移动端在 10 分钟后过期，对运行时客户端在一小时后过期。已配对设备的授权在该邀请过期之后仍然有效，直到被撤销。无头邀请和较旧版本的有效期可能不同；不要假设每个码都是一次性的，或会自动过期。如果未使用的码可能已经泄露，请重新生成。

### 访问与信任 {#access-and-trust}

已配对的手机可以读取工作区文件、发送终端输入，并在已配对主机以及通过它提供的已连接远程运行时上控制 Agent。配对不是企业级只读或按仓库的沙箱。请使用访问权限与手机用户相称的主机账户，并用操作系统锁屏以及你所在组织的设备管控来保护手机。

已配对的桌面可以独立于移动商店更新来交付移动端 Web UI 和 JavaScript。这些资源经过已鉴权的配对连接传输，并对照清单哈希进行校验。桌面属于手机信任边界的一部分；这些校验并不为每一个下载的 UI 包提供单独的发布者签名或商店审核。

### 撤销手机或应对丢失的设备 {#revoke-a-phone-or-respond-to-a-lost-device}

1. 在每台已配对的桌面上，打开 Mobile 设置，从已配对设备列表中移除该手机。确认操作成功；在手机上移除已保存的主机并不能代替主机侧撤销。
1. 主机侧撤销会移除该设备授权，并关闭它在该主机上的活动连接。Relay 凭据清理会被持久排队，并需要连通性才能到达该服务。远程运行时在同步成功时会收到更新后的委托设备授权。如果某台主机离线，或清理尚未完成，在确认撤销之前限制其网络访问；无法保证对离线主机立即撤销。
1. 对于丢失的手机，用你的设备管理工具锁定或擦除它，并审查任何另行授予的主机或提供方访问。撤销 Orca 访问并不会远程擦除已经保存在手机上的文件、截图、剪贴板内容或其他数据。
1. 如果你怀疑配对码已被分享，请重新生成它，并在配对一台替换手机之前，审查受影响主机上的已配对设备。

## Chat UI {#chat-ui}

对于具备聊天能力的 Agent（Claude、Codex，以及 Orca 识别的其他 Agent），移动端可以在 **Chat UI** 而不是原始终端中打开会话——与桌面的 [Chat UI](/docs/agents/native-chat) 同一思路：可读的 transcript、撰写器、权限/问题，以及图片附件。

- **设备默认** — 首次启动时，移动端会询问此手机上会话应如何打开。之后可在 **Settings → Chat UI → Open sessions in Chat UI** 下更改。在你选择 Chat UI 之前，默认是终端。
- **按会话** — 长按会话标签，选择 **Switch to chat** 或 **Switch to terminal**。该覆盖只粘在该标签上，不改变设备默认。
- **撰写器** — 输入回复、`@` 提及工作区文件、使用来自共享目录的 Agent 感知 `/` slash 命令（Claude vs Codex 集合，带描述）、附加照片，或口述。附加的图片显示为可移除缩略图，并随发送一起走（包括仅图片发送和多图附件）。
- **模型和会话选项** — 撰写器显示当前模型和会话选项的药丸行。点它即可挑选模型或选项（包括直接选择 Codex 模型），而不掉进原始终端。
- **桌面仍然拥有 Agent** — Chat UI 是配对桌面会话上的视图，不是单独的云端 Agent。

## Quick Commands {#quick-commands}

在 worktree 会话中，从会话标签条打开 **Quick Commands**（在新建终端旁边）。命令与桌面是同一份已保存列表，双向同步。

- **Terminal Command** — 在新标签中粘贴或运行 shell 命令（可选不按 Enter，以便先编辑）。
- **Agent Prompt** — 用已保存的 prompt 正文打开选定的 Agent。
- 从该行的复制控件把命令正文复制到剪贴板（正文为空时禁用）。
- 把命令限定为全局或当前项目。从面板添加、编辑和删除；桌面主机强制共享列表上限。

如果配对的桌面太旧，启动器会禁用，直到你更新桌面。

## 会话标签 {#session-tabs}

在会话条中长按标签可进行标签操作，包括 **Close**、**Close Other Tabs**、**Close Tabs to the Left** 和 **Close Tabs to the Right**。批量关闭会跳过脏 markdown 标签（移动端关闭时没有保存提示）和已钉住的标签。对于具备聊天能力的 Agent 标签，同一长按面板可以在 Chat UI ↔ 终端之间切换。

## 账户切换器 {#account-switcher}

移动应用暴露与桌面状态栏相同的账户切换器，包括非活动账户的内联用量。当提供方为其会话或每周窗口报告重置时间戳时，账户屏幕会显示重置倒计时。在这里切换就是在配对的桌面上切换。

当活动的 Codex 账户赚到了 **rate-limit reset** credits，账户屏幕会显示有多少可用（以及下一个何时过期），并提供 **Use reset** 操作。确认会为当前 Codex 目标（主机或 WSL distro）花掉一个 credit，并刷新符合条件的速率限制窗口。手机会记录这次尝试，这样在连接不稳后重试不会重复花费。结果包括成功、没有可重置的内容、没有剩余 credit，或已经应用过一次 reset。另见 [用量与速率限制跟踪](/docs/agents/usage-tracking)。

## 创建工作区 {#create-a-workspace}

从移动端主屏幕打开 **Create Workspace** / **New Workspace** 并选择源模式。**Smart** 会跨受支持的任务提供方和分支搜索；提供方特定模式把创建收窄到 GitHub、Linear、GitLab、分支或普通工作区名称。选定源之后，用 **Advanced** 做命名和分支控制，然后在配对的桌面上创建工作区。如果连接了不止一台桌面，先选主机（选择器显示每个端点，以便相似名称仍可区分）。没有已连接桌面时，该操作保持禁用。

## 编辑已配对主机 {#edit-a-paired-host}

在主机列表上，点主机卡片的 **⋯** 按钮（或长按卡片），选择 **Edit host**。

- **Name** — 仅此手机上的显示名称。
- **Address** — IP、`host:port`，或 `ws://` / `wss://`。缺少端口则保留当前端口（或默认 `6768`）。地址编辑只改变此手机连接的位置；**不会** 重新配对。当同一桌面可在不同路径到达时使用（例如家庭 LAN vs Tailscale）。

保存地址更改会重连到新端点。配对令牌保持不变。

## 移动端源代码管理 {#source-control-on-mobile}

在 worktree 会话中，点分支图标打开 Source Control。用于小的跟进：查看分支状态、检查已更改路径、暂存或取消暂存文件，并在暂存集就绪后提交。如果分支已经有 GitHub pull request，从空的 PR 状态使用 **Link an existing PR** 附着它，而不是新建一个。

## 移动端浏览器视图 {#browser-view-on-mobile}

移动浏览器窗格有 **Web / Mobile** 开关。用 **Web** 看普通页面，用 **Mobile** 让配对的桌面浏览器给出手机尺寸的响应式视口。

## 终端设置 {#terminal-settings}

移动终端有专门的 **Terminal settings** 屏幕（Settings → Terminal）：

- **Text size** — WebView 在适应宽度之上应用的 50%–200% 基线缩放。在终端里双指缩放会对齐到相同预设并持久保存。该设置按设备，不会改变桌面终端。
- **Autocomplete & autocorrect** — 默认关闭，以免操作系统改写命令栏里的命令、标志或路径。需要手机式输入时再打开；实时键盘捕获输入无论哪种方式都仍会流式发送原始按键。

## 故障排除 {#troubleshooting}

- **worktree 上转圈卡住** — 手机跟踪来自桌面 Agent 进程的心跳。如果桌面说 idle 但手机显示 working，强制刷新 worktree 行以同步状态。
- **配对失败** — Relay 需要桌面登录；仅本地配对需要可达的 LAN 或 Tailscale 端点。如果邀请已过期，请生成新的码，并检查连接模式和主机地址。
- **Authentication failed / pairing invalid** — 桌面不再接受此设备令牌（例如桌面清除了已配对设备之后）。先点横幅上的 **Retry**（瞬时拒绝可以在不重新配对的情况下恢复）。如果一直失败，从桌面使用 **Re-pair**，或 **Remove** 该主机再配对一次。
- **Update Orca Mobile / Update Orca on your computer** — 手机和桌面使用带版本的移动协议。如果任一侧太旧，移动端会阻止该主机，并指向 App Store（iOS）、[GitHub Releases](https://github.com/stablyai/orca/releases)（Android APK 或桌面），然后回到主机。更新后刷新连接；如果消息还在，移除主机再配对。
- **聊天标签显示 Update mobile** — 该会话是在桌面 Chat UI 中启动的，而这台手机的应用太旧，无法显示它（标签会打开成空窗格）。更新移动应用，然后重新连接到主机，以便它看到新应用。如果应用已经是最新，重新连接后标签仍显示 Update mobile，请连同你的移动应用版本和桌面 Orca 版本一起报告。
- **Quick Commands unavailable** — 更新配对的桌面，让它声明 quick-commands 能力。
- **无法到达桌面** — 手机和桌面必须共享网络路径（LAN、Tailscale，或你使用的配对路径）。关闭桌面应用会断开连接；重新打开桌面后手机会自动重连。

> **下一步**
> 把移动通知与 [桌面通知](/docs/notifications) 配对，让 Agent 完成提醒到达正确的设备。对于无头机器，使用 [Remote Orca Server](/docs/remote-servers) 移动配对。在桌面和移动端跟踪提供方用量，见 [用量与速率限制跟踪](/docs/agents/usage-tracking)。
