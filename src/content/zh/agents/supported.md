# 支持的 Agent {#supported-agents}

Orca 可与**任意 CLI agent** 配合——agent combobox 只是在终端里启动一个进程。下列 Agent 已预配置在内置 agent picker 中，支持一键启动/配置；更深的 hooks、状态、用量跟踪和账户切换会在支持处注明。

> **权限安全**
> 下方默认会在新启动时传入每个 Agent 的 permission-bypass 标志。worktree 是隔离的 checkout，不是安全沙箱：Agent 仍可访问其进程能拿到的文件和网络资源。除非你有意信任该 Agent 和任务，否则请在 **Settings → Agents → Agent Permissions** 中选择 **Manual**。

## 权限默认值 {#permissions-default}

新启动时，Orca 会为每个受支持 CLI 预填 permission-bypass 标志——Claude 用 `--dangerously-skip-permissions`，Codex 用 `--dangerously-bypass-approvals-and-sandbox`，Gemini / Cursor / Crush / Kimi / Rovo Dev / Hermes / GitHub Copilot / Command Code 用 `--yolo`，再加上其他所有暴露了等价标志的 Agent 的对应标志。这些标志允许 Agent 在不确认每条 shell 命令的情况下行动；使用前请审视信任边界。

若要把所有未自定义的 Agent 在 **Yolo** 与 **Manual** 启动之间切换，使用 **Settings → Agents → Agent Permissions**。如果你已经覆盖了某个 Agent 的启动参数或环境，Orca 会放过该 Agent，以免全局开关擦掉你的自定义命令。

若只想为一个 Agent 恢复确认提示，请在 Settings 中编辑该 Agent 的默认参数或环境。Orca 把非空的自定义值视为显式覆盖，并使该 Agent 退出后续的 permission-mode 迁移。

| Agent              | 说明                                                                                                                       | 文档                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Claude Code        | 深度集成：用量、热切换、hooks                                                                                              | [Anthropic](https://docs.anthropic.com/claude/docs/claude-code)                                   |
| Claude Agent Teams | 默认关闭 — 在 Settings → Agents 下启用，通过 `orca claude-teams` 启动，并为每位 teammate 提供原生窗格                      | [Anthropic](https://code.claude.com/docs/agent-teams)                                             |
| Codex              | 深度集成：用量、热切换                                                                                                     | [OpenAI](https://github.com/openai/codex)                                                         |
| Grok               | 自动配置                                                                                                                 | [xAI](https://x.ai/cli)                                                                           |
| GitHub Copilot CLI | 自动配置                                                                                                                 | [GitHub](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)                   |
| OpenCode           | 自动配置、状态                                                                                                           | [OpenCode](https://opencode.ai/docs/cli/)                                                         |
| Pi                 | 自动配置、hooks、状态                                                                                                    | [Pi](https://pi.dev)                                                                              |
| OMP                | 自动配置、hooks、状态                                                                                                    | [OMP](https://omp.sh)                                                                             |
| Prime Agent        | 自动配置、hooks、状态、会话历史                                                                                          | [Prime](https://docs.primeintellect.ai/prime-cli)                                                 |
| Gemini             | 自动配置                                                                                                                 | [Google](https://github.com/google-gemini/gemini-cli)                                             |
| Antigravity        | 自动配置、hooks、状态                                                                                                    | [Google](https://antigravity.google/docs/cli-overview)                                            |
| Ante               | 自动配置、状态                                                                                                           | [Ante](https://github.com/AntigmaLabs/ante-preview)                                               |
| Aider              | 自动配置                                                                                                                 | [Aider](https://aider.chat)                                                                       |
| Goose              | 自动配置                                                                                                                 | [Goose](https://block.github.io/goose)                                                            |
| Amp                | 自动配置                                                                                                                 | [Amp](https://ampcode.com)                                                                        |
| Kilocode           | 自动配置                                                                                                                 | [Kilocode](https://kilocode.ai)                                                                   |
| Kiro               | 自动配置                                                                                                                 | [Kiro](https://kiro.dev)                                                                          |
| Charm Crush        | 自动配置                                                                                                                 | [Charm](https://github.com/charmbracelet/crush)                                                   |
| Auggie             | 自动配置                                                                                                                 | [Augment](https://docs.augmentcode.com/cli/overview)                                              |
| Autohand           | 自动配置                                                                                                                 | [Autohand](https://github.com/autohandai/code-cli)                                                |
| Cline              | 自动配置                                                                                                                 | [Cline](https://docs.cline.bot/cline-cli/overview)                                                |
| Codebuff           | 自动配置                                                                                                                 | [Codebuff](https://www.codebuff.com/docs/help/quick-start)                                        |
| Freebuff           | 自动配置                                                                                                                 | [Freebuff](https://freebuff.com/cli)                                                              |
| Command Code       | 自动配置、状态                                                                                                           | [Command Code](https://commandcode.ai/docs/quickstart)                                            |
| Continue           | 自动配置                                                                                                                 | [Continue](https://docs.continue.dev/guides/cli)                                                  |
| Cursor CLI         | 深度集成                                                                                                                   | [Cursor](https://cursor.com/cli)                                                                  |
| Devin              | 自动配置                                                                                                                 | [Devin](https://devin.ai/cli)                                                                     |
| Droid (Factory)    | 自动配置、hooks、状态                                                                                                    | [Factory](https://docs.factory.ai/cli/getting-started/quickstart)                                 |
| Kimi               | 自动配置                                                                                                                 | [Moonshot](https://www.kimi.com/code/docs/en/kimi-code-cli/getting-started.html)                  |
| Mistral Vibe       | 自动配置                                                                                                                 | [Mistral](https://github.com/mistralai/mistral-vibe)                                              |
| MiniMax            | 自动配置、用量跟踪、速率限制跟踪                                                                                         | [MiniMax](https://www.minimax.chat)                                                               |
| Qwen Code          | 通过已安装的 `qwen` 可执行文件自动配置                                                                                   | [Qwen](https://github.com/QwenLM/qwen-code)                                                       |
| Rovo Dev           | 自动配置                                                                                                                 | [Atlassian](https://support.atlassian.com/rovo/docs/install-and-run-rovo-dev-cli-on-your-device/) |
| Hermes             | 自动配置                                                                                                                 | [Nous](https://hermes-agent.nousresearch.com/docs/)                                               |
| OpenClaw           | 自动配置                                                                                                                 | [OpenClaw](https://github.com/openclaw/openclaw)                                                  |
| Trae               | 通过 `traecli`（TRAE CN CLI）自动配置                                                                                    | [Trae](https://www.trae.ai/)                                                                      |
