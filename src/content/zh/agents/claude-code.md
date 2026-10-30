# 在 Orca 中使用 Claude Code {#claude-code-in-orca}

Claude Code 是 Anthropic 的 agentic CLI。Orca 把它作为一等终端 Agent 运行，带账户感知的会话启动、用量跟踪和账户热切换。

## 设置 {#setup}

1. 安装 Claude Code（`npm i -g @anthropic-ai/claude-code` 或遵循 Anthropic 的文档）。
1. 在任意终端登录一次。
1. Orca 会自动拾取 `~/.claude`——无需额外配置。

## 启动 {#launching}

在任意 worktree 中打开终端，从 agent combobox 选择 **Claude Code**。Orca 以该 worktree 为工作目录启动它，并挂上一条 status-line hook，发出 Orca 用来驱动状态圆点的 OSC title 事件。

## 用量与速率限制 {#usage-rate-limits}

Orca 读取本地 `~/.claude` 用量状态，并在状态栏显示当前用量以及距离速率限制的接近程度。见 [用量与速率限制跟踪](/docs/agents/usage-tracking)。

## 账户热切换 {#account-hot-swap}

Orca 支持多个 Claude 账户，并可一键在它们之间切换，与 Codex 流程一致。即使有正在运行的 Claude 会话，切换账户仍然有效——Orca 会把进行中的切换放在守卫后面，以免触发重叠的 auth 刷新。见 [热切换 Codex 账户](/docs/agents/codex-hot-swap)——Claude 的流程在形态上完全相同。

## 子 Agent 与 teams {#subagents-and-teams}

后台 subagents 和 Agent Teams 的 teammates 可以在 worktree agent 列表和 [Agent Dashboard](/docs/model/agents-sessions#agent-dashboard) 中，作为主 Agent 下可展开的子行显示。选中子项会聚焦到主终端；在支持的版本中，还可在同一终端中打开该子 Agent 的 transcript，再点回主 Agent。

## Hooks 与 memory {#hooks-memory}

Claude Code 支持各仓 hooks 和 memory 文件。Orca 在 [Hooks 与 Memory](/docs/agents/hooks-memory) 下展示它们。
