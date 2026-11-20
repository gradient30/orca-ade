# 热切换 Codex 账户 {#hot-swap-codex-accounts}

运行多个 Codex 账户以最大化 tokens 很常见。Orca 让你把每个账户添加一次，然后一键切换活动账户，无需编辑配置。

## 添加账户 {#add-accounts}

1. 打开 [Settings → AI Provider Accounts → Codex](/docs/settings#ai-provider-accounts)。
1. 点击 **Add Account**，并在浏览器中完成 Codex 登录。
1. 对每个账户重复。Orca 添加的每个账户都保留自己的登录上下文，因此添加一个绝不会把另一个登出。

账户是可选的：一个都没有时，Orca 使用你平时的 Codex 登录（**System default**）。

## 切换账户 {#swap-accounts}

点击状态栏中的 Codex chip 打开 account switcher，或在 Settings 里选择一个账户。此后启动的任何新 Codex 会话都会使用它，已打开的 Codex 聊天会在下一条消息之前切到它（已经在进行的回复会先完成）。已经在跑的终端会话会保留原来的账户，直到重启。

## 并排运行账户 {#running-accounts-side-by-side}

因为每个添加的账户都有自己的隔离 home，两个 Codex 终端会话可以同时在不同账户下运行：先启动一个，切换账户，再启动下一个。每个终端会话保留它启动时所用的账户；聊天始终跟随所选账户。用量仍计入每个账户自己的套餐；Orca 不会跨账户合并配额。

## System default {#system-default}

**System default** 行是你当前主机在 `~/.codex` 下的 Codex 登录。在 Orca 中添加的账户不会改写该登录；它们运行在隔离的 home 中。想让启动与 Orca 外终端里的 `codex` 一致时，选择 System default。

## 当配置编辑看起来被忽略时 {#when-config-edits-seem-ignored}

对于托管的 Codex 账户，Orca 会把你真正的 `~/.codex/config.toml` 中的设置镜像到活动的 runtime home。如果该源文件缺失、为空（例如 cloud-sync 仍在下载）或不可读，Accounts 会显示警告：Codex 会保留**上次成功同步**的设置，直到源文件恢复健康。请修复横幅中给出的路径上的文件，然后重新启动或重新选择该账户。

## 规则与注意点 {#rules-gotchas}

- 切换不会重新鉴权；Orca 在所选账户的 home 中启动新会话。
- 现有的 Codex 终端进程会保留当前账户，直到重启。聊天在下一条消息时切换。
- 状态栏中的用量读数跟随当前活动账户。
- 重启芯片会保留重启时的活动账户。
- 账户属于运行该 Agent 的机器。在 [Remote Orca Server](/docs/remote-servers) 上，要在那台服务器上添加它们。

## 其他 provider {#other-providers}

- **Claude Code** 账户以相同方式在 **Settings → AI Provider Accounts → Claude** 下添加，切换作用于你下一次启动的 Claude。
- **Antigravity** 的做法不同：它切换的是一个共享的 `agy` 登录，而不是运行隔离的账户。见 [Antigravity 账户](/docs/agents/antigravity-accounts)。
