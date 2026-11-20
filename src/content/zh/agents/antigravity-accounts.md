# Antigravity 账户 {#antigravity-accounts}

Orca 可以记住不止一个 Antigravity CLI（`agy`）账户，并在它们之间切换。与 [Codex](/docs/agents/codex-hot-swap) 不同，这是**切换同一个共享登录**，而不是并排运行相互隔离的账户。

## 保存账户 {#save-accounts}

1. 在运行你的 Agent 的那台机器的终端里运行 `agy`，并完成它的浏览器登录。
1. 打开 **Settings → AI Provider Accounts → Antigravity**，点击 **Save current account**。
1. 要添加另一个账户，在 `agy` 内运行 `/logout`，用下一个账户登录，点击 **Refresh accounts**，然后再次点击 **Save current account**。
1. 对每个账户重复上述步骤。

## 切换账户 {#switch-accounts}

在已保存的账户上点击 **Select**。Orca 会把该登录写入这台机器上 `agy` 自己的凭证存储，并检查 `agy` 现在报告的就是它。新的 `agy` 会话使用所选账户。已经在运行的会话可能会保留先前的账户，直到重启。

## 并发限制 {#concurrency-limits}

- `agy` 在每台机器上只保留一个登录，因此该机器上新的 Antigravity 终端都会使用当前所选的账户。正在运行的会话可能会保留先前的账户，但你不能同时把两个新会话固定到两个不同的账户上。
- 保存多个账户并不会给你并行、隔离的身份，Orca 也不会在它们之间汇集配额。
- 状态栏的 Antigravity 用量反映当前登录到 `agy` 的账户。选择另一个账户并刷新用量，即可看到它的配额。

## Antigravity 聊天 {#antigravity-chats}

[Chat UI](/docs/agents/native-chat) 中的 Antigravity 使用自己的登录，与你的 `agy` 账户分开。已保存的 `agy` 账户不会决定聊天使用哪个账户；请在同一 Settings 分区中，从 **Antigravity** 聊天行为聊天登录。

## 账户存放位置 {#where-accounts-live}

- 账户属于运行 `agy` 的那台机器。在 [远程 Orca 服务器](/docs/remote-servers) 上，请在该服务器上保存并选择它们。
- 在 Windows 上，Orca 管理的是 Windows 的 `agy` 登录，或被选为账户位置的 WSL distro 内的 `agy` 登录。每个 distro 保留自己已保存的账户。管理其账户之前先启动该 distro；Orca 不会替你启动它。
- 在 Linux 桌面上，`agy` 把登录保存在系统密钥环（Secret Service）中。Orca 需要 `secret-tool`（来自 `libsecret-tools`，或你的发行版中的对应包）以及一个已解锁的密钥环，才能切换它。密钥环无法访问、或没有默认 collection 的主机（例如无头服务器）、容器和 SSH 会话，则改用 `agy` 的凭证文件，与 `agy` 自身的做法相同。
