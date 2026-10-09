# 在 Orca 中使用 Codex {#codex-in-orca}

Codex 是 OpenAI 的 agentic CLI。Orca 的 Codex 集成是应用中最深的之一——用量、热切换和重启都会保留账户身份。

## 设置 {#setup}

1. 按 OpenAI 文档安装 Codex。
1. 在任意终端登录。
1. Orca 从 `~/.codex` 读取账户和凭证。

## 启动 {#launching}

从 agent combobox 选择 **Codex**。Orca 以 worktree 为 `cwd` 启动 `codex`，并把 auth 路由到当前所选账户。

## 账户热切换 {#account-hot-swap}

许多 Codex 用户运行多个账户以拉伸速率限制。Orca 的 account switcher 无需重新登录或编辑配置即可切换活动账户。见 [热切换 Codex 账户](/docs/agents/codex-hot-swap)。

## System default 与额外账户 {#system-default-vs-extra-accounts}

**System default** 使用你真正的 `~/.codex` 登录（与在 Orca 外直接跑 `codex` 所用的 home 相同）。Orca 管理的额外账户在 Orca 的账户数据下拥有各自的 home，使凭证和 rollouts 保持隔离。新的 Codex 启动跟随活动账户；已经在跑的会话会保留启动时的 home，直到你重启它们。

## 嵌套的 Task subagents {#nested-task-subagents}

当 Codex 生成 Task subagents 时，Orca 可以在 worktree agent 列表和 [Agent Dashboard](/docs/model/agents-sessions#agent-dashboard) 上把它们显示为父 Agent 下的子行。展开 chevron 查看每个子项；点击子项会聚焦到父终端（subagents 并不拥有单独窗格）。

## 移交给另一个 Agent {#hand-off-to-another-agent}

从 Agent 终端的 header 或上下文菜单选择 **Hand Off to Another Agent**。Orca 启动一个全新的 Agent 会话（相同或不同的 CLI），并从先前的 transcript 或捕获的上下文注入一份篇幅受限的 handoff prompt。原会话不受影响——这不是 `codex resume`。

## 重启芯片 {#restart-chip}

Codex 退出后，重启芯片会用同一账户重新启动该 Agent。如果你在会话中途切换了账户并想用新账户重启，请先使用 account switcher，然后再重启。

## 用量与速率限制 {#usage-rate-limits}

Orca 读取活动账户的本地 Codex 用量状态，并在状态栏展示。见 [用量与速率限制跟踪](/docs/agents/usage-tracking)。

## Windows 上的 Codex（WSL） {#codex-on-windows-wsl}

在 Windows 上，Orca 既可以从主机安装运行 Codex，也可以从 WSL distro 运行。从 account switcher 添加一个 WSL 托管的 Codex 账户——Orca 会在 distro 内创建隔离的账户 home（位于 `~/.local/share/orca/codex-accounts/<id>/home`），把它映射回主机上的 `\\wsl.localhost\<distro>\...` 路径供 auth 读取，并把启动、热切换和速率限制获取路由到所选 distro。如果目标 distro 未安装 Codex，**Add account** 对话框会失败，并给出可操作的消息，告诉你哪个 distro 缺少该二进制。
