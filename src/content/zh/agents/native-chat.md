# Native Chat {#chat-ui-native-chat}

Chat UI 是带有 transcript、composer 和 Agent 控件的对话视图。你选择以聊天方式打开的受支持 Agent，会在 **结构化聊天** 中开始新会话，直接与 Agent 通信，而不是显示终端会话。其他 Agent 以及不受支持的执行环境会在终端中打开。

已有的终端支持聊天是运行在终端里的 Agent 之上的 transcript 视图。它们保持原来的形式；更改某个 Agent 的 Chat 或 CLI 选择不会转换已有会话。

终端仍可作为事实来源；Chat UI 提供结构化 transcript + composer。Transcript 解码覆盖 **Claude**、**Codex**、**Grok** 和 **OMP**——OMP 会话会像其他会话一样在 Chat UI 中打开，而不再只停留在原始终端。

## 选择聊天或终端 {#choose-chat-or-terminal}

Chat UI 对所有人可用。受支持的 Agent 会继承全局的 Chat 或 Terminal 默认，除非你为某个 Agent 另选。全新安装默认是 Terminal：

你也可以在 **Settings → Agents** 里为每个受支持 Agent 选择打开方式：已安装列表中每一行都有 **Chat | CLI**。选 **CLI** 会让其新会话在终端打开。聊天依赖 Orca 下载的程序的 Agent（例如 Antigravity）展开其行时，会显示该下载与聊天登录。

## 在聊天或终端中继续对话 {#continue-a-conversation-in-chat-or-the-terminal}

要把已保存的对话以另一种形式打开：

1. 打开右侧边栏的 **Agent Session History**。
1. 打开该对话的菜单。
1. 对受支持的 CLI 对话选择 **Resume in New Chat**，或对受支持的聊天对话选择 **Resume in New Terminal**。

两项操作都会用该对话的副本打开新标签；原对话不变。例如 **Resume in New Terminal** 会把 Claude 或 Codex 聊天复制到新的 CLI 会话。这些操作取决于 Agent、已保存对话与执行宿主，并非每个会话都可用。更早的 Orca 版本将其标为 **Resume in New Native Chat** 与 **Resume in New CLI**。

也可以右键打开的 Agent 标签：

- 在结构化聊天标签上，**Continue in terminal** 会用该对话的副本启动新的终端 Agent。
- 在受支持的终端 Agent 标签上，**Continue in chat** 会在新的结构化聊天中打开该对话。终端窗格标题栏上的聊天按钮提供同一操作。

这些续聊操作也适用于支持会话历史恢复的已配对 **Remote Orca Server** 上的对话。聊天及其历史留在该服务器上。没有 Orca 运行时的直连 SSH 工作区不支持此操作。若旧服务器上该操作不可用，请同时更新服务器与客户端。

若终端 Agent 仍拥有该对话，从 **Agent Session History** 继续前，Orca 会请你先停止或退出它。在 Chat 中继续不会强行终止终端 Agent。

## 切换已有的终端支持聊天 {#switch-an-existing-terminal-backed-chat}

结构化聊天标签没有原地终端视图；请改用上方的 **Continue in terminal**。

终端支持聊天是运行中终端 Agent 之上的视图，因此切换不会创建新会话。用窗格标题栏的 **Show terminal** 按钮，或其标签菜单中的 **Continue in terminal**，即可回到终端。在受支持的终端窗格内右键可选 **Continue in chat**，会把同一终端会话显示为 transcript，而不是创建新的结构化聊天。

也可以用 **Settings → Shortcuts** 中的 **Switch between Chat UI and terminal**（macOS 默认 `Cmd+Shift+J`，Windows/Linux 默认 `Ctrl+Shift+F11`）切换同一终端支持会话。在 Windows/Linux 上，当 **Search everything** 不使用 `Ctrl+Shift+J` 时，该组合键也会切换；或者在 terminal-first 快捷键策略下，从终端输入进行切换。

## Composer {#composer}

- 输入消息并发送（或停止正在进行的 turn）。主机支持时可以附加文件/图片。未发送的草稿文本和附件会随窗格在 disconnect/reconnect 后保留（若主机能恢复它们）。同一会话重连时，已稳定的 transcript 也会留在屏幕上，而不是空白等到重新加载完成（桌面和移动端共享这一保留行为）。
- 输入 `/` 可使用斜杠命令和已发现的 **skills**（尽可能按 Agent 过滤）。斜杠目录是 Agent 感知的（Claude 与 Codex 命令集不同），并与移动端 Chat UI 共享。
- 当 Agent 暴露它们时，使用 **model** 和选项 pills（thought level、mode、Agent 特定的会话选项）。**Claude** 的模型选项来自**该主机上已安装的 Claude CLI**（不是硬编码列表），因此更新 CLI 后新模型会出现。**Codex** 支持从 pill 直接选择模型（发送 `/model <id>`），单独的 `/model` 仍会打开 agent picker。**Grok** 暴露 **model**（启动时 `-m`，会话中 `/model`）和 **reasoning effort**（启动时 `--reasoning-effort`，会话中 `/effort`）；模型列表从已登录的 Grok CLI（`grok models`）探测，因此已退役的 id 会从选择器中消失。effort 选项跟随所选模型：Grok 4.6 包含 **Extra high**，而 Grok 4.5 止于 **High**。**在 Agent 进程启动之前**，composer 可以显示将在首次启动时生效的草稿启动选项；会话上线后，仅影响正在进行的 turn 的 pills 会保持禁用或带标签，直到会话就绪。在结构化聊天中，实时值发给 Agent 会话；在终端支持聊天中，发给该标签里的 CLI。

## 来自 Agent 的问题 {#questions-from-the-agent}

当 Claude 显示 **AskUserQuestion**（或类似的结构化 permission/question 卡片）时，Chat UI 应在 transcript 中渲染该问题卡片，让你可以从 composer 路径作答，而不是把它当作折叠的 tool call。在卡片上用 **Submit** 确认。这包括跑在已配对 [远程 Orca 服务器](/docs/remote-servers) / headless 主机上的 Agent——不只是本地窗格。

## 可用性 {#availability}

Chat UI 在桌面上为受支持的本地和远程（已配对服务器）Agent 会话提供。可用的 Agent 与操作取决于执行宿主与客户端能力；较旧的已配对宿主或不支持的启动仍可在终端中打开。[移动伴侣](/docs/mobile) 对配对会话复用 chat 风格的 transcript 模式；上方桌面菜单步骤描述的是桌面应用。

> **聊天或终端**
> 聊天显示对话：消息、工具活动、画面和文件链接。终端显示 Agent 打印的一切，包括每一条状态行。两者都完全受支持，你可以在 **Settings → Agents** 中把任意 Agent 在二者之间切换。
