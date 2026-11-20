# 通知与收件箱 {#notifications-inbox}

Orca 运行的是 Agent，而不只是终端，所以它知道 Agent 是真正完成了，还是只是暂停。通知依赖这个信号，让你可以排队三个 Agent、走开，等第一个完成时再回来。

## Agent 完成提示 {#agent-finished-pings}

当 Agent 从 working 转到 idle，Orca 会发出通知——系统通知、声音，以及 worktree 上的芯片。

## 常驻铃铛 {#persistent-bell}

顶栏铃铛显示所有 worktree 的未读通知。点击一条通知会跳到对应的 worktree 和窗格。

在 macOS 上，同样的未读数会镜像到 Dock 图标角标，这样不用把 Orca 拉到前台也能发现待处理的 Agent 提示。

## 标为未读 {#mark-unread}

右键通知可标为未读——已经分拣过、但还想稍后再看时很有用。

## 调校 {#tuning}

可在 [Settings → Notifications](/docs/settings) 关闭特定类别（system、sound、chip-only）。

## 自定义声音 {#custom-sounds}

可在 [Settings → Notifications](/docs/settings) 按类别选择自定义桌面通知声音——指向磁盘上的任意音频文件，或从 Orca 内置集合里挑选。适合让 Agent 完成提示从系统邮件和 Slack 里脱颖而出。

支持的格式：MP3、WAV、OGG、M4A、AAC、FLAC。一个文件应用于所有已送达的桌面通知。

使用自定义声音时，可在同一设置窗格里设置播放音量。

## 从主机禁用移动推送 {#disable-mobile-push-from-a-host}

在每台发送移动推送的桌面或远程运行时的环境中设置 `ORCA_MOBILE_PUSH_MODE`，然后重启该主机：

- `full`（默认）：现有通知标题、正文和导航标识符。
- `disabled`：该主机不发送提醒或测试，也不做新的推送注册。已有注册的删除以及已排队的清理仍会运行。这本身不会擦除历史的网关/提供方记录，也不会禁用应用内的实时事件。

无法识别的非空值会禁用推送投递。这是主机配置，不是集中强制执行的组织策略。能控制主机环境的用户可以更改它。它作用于该主机的推送网关流量，而不是本地桌面通知或直连/Relay 的应用内容。每台发送主机都需要这项设置；较旧的 Orca 版本没有实现它。操作系统通知权限和锁屏预览设置是另外的控件。

没有通用内容模式：启用的推送可能包含项目/Agent 文本和标识符。关闭手机锁屏预览并不会阻止这些内容到达推送网关以及 APNs/FCM。
