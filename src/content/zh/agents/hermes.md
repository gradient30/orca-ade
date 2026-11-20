# Hermes Agent 设置 {#hermes-agent-setup}

Orca 在终端中，或在其 [Chat 视图](/docs/agents/native-chat) 中运行 [Hermes Agent](https://hermes-agent.nousresearch.com/docs/)。Chat 通过 `hermes acp` 与 Hermes 通信；`hermes acp` 是 Hermes 的 Agent Client Protocol 服务器，并且需要 Hermes 0.23.0 或更高版本。

## 安装并登录 {#install-and-sign-in}

在运行该工作区的机器上安装 Hermes：

```sh
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

安装程序把 `hermes` 命令放在 `~/.local/bin`（在 Windows 上，放在 `%LOCALAPPDATA%\hermes` 的 `bin` 文件夹中）。即使该文件夹不在你的 `PATH` 上，Orca 也会到那里查找。

然后选择一个模型提供方并登录：

```sh
hermes model
```

在 Hermes 还没有提供方时启动的聊天会显示一张 **Sign in** 卡片，它会运行同一条命令。要在不启动聊天的情况下检查安装，运行 `hermes acp --version` 和 `hermes acp --check`。

## 在 Chat 中使用 {#use-it-in-chat}

打开 **Settings → Agents**，在 **Hermes** 行上选择 **Chat**，让新的 Hermes 标签以聊天形式打开；也可以从 **New Tab** 菜单选择 **Hermes → Launch chat**。

模型和 reasoning effort 选择器列出 Hermes 为其当前提供方所报告的内容。自定义的 OpenAI 兼容端点只列出它所设定的那个模型。

权限模式映射到 Hermes 自己的审批设置：

| Orca 模式 | Hermes 的行为 |
| --- | --- |
| Ask for approval | 在每次文件编辑之前询问，并在其审批规则所标记的命令之前询问。 |
| Accept edits | 允许工作区内部和临时文件夹中的编辑；对敏感路径和被标记的命令仍然询问。 |
| Full access | 允许文件编辑，并且 Orca 会批准 Hermes 仍然发出的每一个请求。 |

哪些命令需要批准，是 Hermes 的 profile 设置（`config.yaml` 中的 `approvals.mode`），不是按聊天单独设置的。Orca 从不以 `--yolo` 启动 Hermes，因此把聊天切回 **Ask for approval** 会再次询问。

**/compact** 会运行 Hermes 的 `/compress`，**/clear** 会开始一段新对话。Hermes 的其他斜杠命令会出现在 composer 的命令菜单中，但 `/reset` 除外，它会清空该聊天 transcript 下的对话。

## Hermes gateway {#the-hermes-gateway}

Hermes 在按 profile 划分的 gateway 进程中运行对话及其工具。第一次 `hermes acp` 会启动它，并且在最后一个客户端离开后，它还会继续运行大约十分钟。这会带来几个影响：

- gateway 停止后的第一次聊天可能要一分钟才能启动。
- 工具使用的是启动该 gateway 的那个进程的环境，因此你加到 Hermes 行 **Environment** 中的变量，只有在 gateway 重启后才会到达工具。用 `hermes gateway stop` 停止它。
- 关闭聊天或按下 **Stop** 会取消它在 gateway 中的这一轮。
- Hermes 聊天不携带 Orca 的调用方身份，因为一个 gateway 服务于该 profile 上的每一个聊天。因此 Hermes 工具内部的 `orca` 命令不能充当运行它的那个聊天。

## 远程主机 {#remote-hosts}

在运行该工作区的机器上安装并登录 Hermes，例如 [远程 Orca 服务器](/docs/remote-servers)。SSH 工作区无法使用 Chat。

## 已知限制 {#known-limits}

- Hermes 不通过 ACP 提供它的 question 工具，因此它不能在 Chat 里提出选择题。
- `delegate_task` 子 Agent 在后台运行，并在稍后的一轮中回报；Chat 显示这次调用，而不是一张子 Agent 卡片。
- Session History 还不会列出 Hermes 0.23 的会话，因此已关闭的 Hermes 聊天不能从那里重新打开。
