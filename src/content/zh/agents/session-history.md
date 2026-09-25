# Agent 会话历史 {#agent-session-history}

Orca 会扫描受支持 Agent CLI 留在磁盘上的会话 transcript，并在右侧边栏的 **Agent Session History** 面板中列出。选中过去的会话，点击 **Resume**，Orca 会在新终端里运行该 Agent 的 resume 命令——同样的 `cwd`、同样的 session ID，无需手动折腾 `--resume` 标志。

## 打开面板 {#open-the-panel}

打开右侧边栏并切换到 **Agents** 标签。面板标题显示为 "Agent Session History"。

标题会显示类似 `12 shown · 47 recent` 的计数以及一个搜索框。输入即可按会话标题、工作目录、分支、模型或对话预览文本过滤。

## 范围 {#scope}

面板顶部的 scope 切换决定显示哪些会话：

- **Workspace** — 来自当前 workspace 或 worktree 的会话，取决于活动的 workspace 上下文。
- **Project** — 解析到当前 Orca project 的会话。
- **All** — Orca 在这台机器上为每个 Agent 找到的全部会话。

远程 workspace 可以浏览本地历史，但 resume 操作只从本地 workspace 运行——当活动 worktree 为远程时，Orca 会在面板中告知你。

## 视图选项 {#view-options}

视图选项菜单（在搜索框旁边）控制扫描哪些 Agent，以及排序和分组：

- **Agents** — 单独打开或关闭各个 CLI（Claude、Codex、Hermes、Pi、OMP、Prime Agent、Cursor、Gemini、Antigravity、Rovo Dev、Copilot、OpenCode、Grok、OpenClaw、Devin、Droid、Kimi、Muse）。禁用的 Agent 在扫描时会被跳过。使用 Agents 标题中的 **Select all** / **Clear** 可一次翻转所有 Agent——**Clear** 会让一个都不选，这样你可以只打开关心的 CLI，而不必取消勾选一长串。空选择会显示 **No agents selected**，而不是通常的空过滤消息。
- **Sort** — `Last updated` 或 `Created`。
- **Group** — `Project`、`Folder`（每个 `cwd` 一个标题），或 `Agent`（每个 CLI 一个标题）。
- **Hide empty sessions** — 丢掉零条已记录消息的会话。

## 恢复会话 {#resume-a-session}

点击会话行打开其详情：工作目录、分支、模型、消息数、**First prompt**，以及最近的对话回合。展开详情时，**First prompt** 会从 transcript 加载未经截断的第一条用户消息（列表行只保留一段短预览供搜索）。在该卡片上使用 **Copy** 可将完整提问放到剪贴板——便于复用长 prompt 而不必重新打开日志。你也可以把已启用的会话行拖进 workspace 来恢复它。从该行的操作中你可以：

- **Resume** — 在会话的 `cwd` 打开新终端，并运行该 Agent 的 resume 命令（例如 `claude --resume <id>`、`codex resume <id>`、`pi --session <session_file>`、`prime-agent --resume <path>`、`cursor-agent --resume <id>`、`acli rovodev run --restore <id>`）。当原始会话设置过 `CODEX_HOME` 时，Codex 会话还会重新导出它。

Pi 从其 hooks 报告的磁盘会话文件恢复（`--session <path>`），而不是从裸的 session id。如果该文件缺失，即使存在 session id，该行的 Resume 也不可用。

- **Copy resume command** — 把同一条 shell 命令复制到剪贴板，供外部终端使用。
- **Copy session ID** / **Copy log path** — 用于脚本，或把 transcript 附到缺陷报告。
- **Open log** / **Reveal log** — 在 Orca 中打开原始 transcript 文件，或在操作系统文件管理器中跳转到它。
- **Open cwd** — 将会话的工作目录作为 workspace 打开。

> **Resume 需要本地 workspace**
> Resume 在 Orca 正在渲染的那台机器上运行 Agent CLI。如果你已连接到远程 workspace，请先切回本地（或使用 **Copy resume command** 自己在远程运行）再点击 **Resume**。

## Transcript 从哪里来 {#where-the-transcripts-come-from}

Orca 读取每个 Agent 自己的磁盘会话存储——Codex 的 `~/.codex/sessions`、Claude 的 `~/.claude` 历史、Cursor 的会话日志、OpenCode 的遗留会话文件或 `~/.local/share/opencode/opencode.db`，等等。无需额外启用；只要 CLI 写出 transcript，下次扫描后就会出现在面板中。使用标题中的 **Refresh Session History** 按钮可按需重新扫描。

## 下一步 {#next-steps}

- [热切换 Codex 账户](/docs/agents/codex-hot-swap) — 在不重启活动会话的情况下切换其背后的 Codex 登录。
- [Hooks 与 Memory](/docs/agents/hooks-memory) — 控制 Agent 每次启动时拾取的上下文（包括已恢复的会话）。
