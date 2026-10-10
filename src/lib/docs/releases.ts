export type ReleaseNote = {
  tag: string;
  date: string;
  dateLabel: string;
  title: string;
  highlights: string[];
  url: string;
  href: string;
};

/** Latest 5 desktop releases. Refreshed by scripts/sync-releases.ts from GitHub. */
export const RELEASES: ReleaseNote[] = [
  {
    "tag": "v1.4.224",
    "date": "2026-10-10",
    "dateLabel": "2026年10月10日",
    "title": "- Automations can now set th…",
    "highlights": [
      "- **Automations can now set the agent's model and effort for each run.** In the automation editor, open Advanced and fill in **Extra agent arguments** (or use `--extra-agent-args` with `orca automations create` and `edit`), for example `-model haiku --effort high`. This works today for Claude, Codex, Grok and CodeBuddy (model and effort), Cursor (model, which carries its effort) and OMP (model), and support for more agents is coming soon. Each run starts a fresh session, and your other automations keep the host's defaults. Separately, scheduled runs in an existing workspace on an Orca server now hand the task to agents that read it after they start, such as Aider, Goose and Amp, instead of leaving them idle.",
      "- **SSH hosts now run a managed Orca server.** Orca ships its own runtime and sets it up when you connect, so connections no longer fail because a host has the wrong Node version or no build tools. A host with no open terminals switches on its next connect and brings its projects, folders and open editor tabs along. A host with open terminals keeps working as before and offers **Move to a managed Orca server**, which restarts those terminals. A host that can't run it keeps its current connection, and Settings → SSH Hosts says why. You can see, update, roll back, **Recover** or **Forget** each server in Settings → Managed servers.",
      "- **Native chat (experimental):** If you turned on Chat UI with chat as your default view, supported agents now open in the 结构化聊天 by default. If Terminal was your default, new agent tabs stay in the terminal, and a one-time tip explains the change and lets you turn chat mode on. You can move a conversation between chat and a terminal from the tab's right-click menu or from Agent Session History (**Resume in New CLI** / **Resume in New Native Chat**)."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.224",
    "href": "/docs/changelog#v1-4-224"
  },
  {
    "tag": "v1.4.223",
    "date": "2026-10-08",
    "dateLabel": "2026年10月8日",
    "title": "实验性 Native Chat 可回退对话，SSH 重连后保留标签",
    "highlights": [
      "打开「Use updated structured native chat」后，Grok 在本机和已配对服务器上以结构化聊天打开；SSH 和 WSL 仍用终端聊天。可回退到更早消息、搜索模型、用 @ 选工作区文件，并在设置 → Chat 调整文字、代码、宽度、对比度或匹配终端。聊天按第一条消息命名，请求批准时会提醒，草稿在重载或退出后仍在，并使用已保存的 Command 和 Arguments。API key 用户可打开 Claude 聊天，Windows 也不再拒绝启动。",
      "SSH 工作区在重连和重启后仍保留打开的文件、正在运行的 Agent 标签和暂停的 Claude 或 Codex 恢复提议。很久以前关掉的标签不再以空壳回来。最后那个标签已关掉的 SSH worktree，点开后会再开一个终端。",
      "宿主应用重启后已配对终端又能输入；断网后远程浏览器标签会回来；`orca serve` 重启后手机仍保留每个终端。从手机启动 Agent 会立刻显示标签，也不再挪动桌面窗口。在远程宿主上创建工作区，不再把其他已连接桌面拉过去。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.223",
    "href": "/docs/changelog#v1-4-223"
  },
  {
    "tag": "v1.4.222",
    "date": "2026-10-07",
    "dateLabel": "2026年10月7日",
    "title": "OpenCode worker 等可提交后再交任务，大 CSV 可表格编辑",
    "highlights": [
      "OpenCode worker 会等到 OpenCode 能提交再交任务，不再把任务留在输入框。可用指定模型而不改其他启动的默认；OpenCode 2.0.12 自己发首条 prompt，插件装到该终端实际读取设置的位置。",
      "侧栏里显示的远程计算机在保存设置时不再消失。折叠子项的工作区可以拖动且不再把侧栏拖崩；删除对话框不再跳动；Create worktree 立刻关闭，设置脚本在后台检查。",
      "大 CSV 不必一次载入整文件，可调列宽、打开链接、编辑单元格、增删行列、复制粘贴和排序筛选，并记住列宽。确认日文、中文或韩文的 Enter 不再同时提交字段。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.222",
    "href": "/docs/changelog#v1-4-222"
  },
  {
    "tag": "v1.4.221",
    "date": "2026-10-05",
    "dateLabel": "2026年10月5日",
    "title": "Copilot 配置改为仅所有者可读，Windows Codex 改用 ~/.codex",
    "highlights": [
      "Copilot 安全修复：信任文件夹时不再把 ~/.copilot/config.json 留成其他用户可读。v1.4.219 和 v1.4.220 在 SSH 主机上也会这样；现在写入后只对所有者可读，旧文件会在下次添加文件夹时修好。",
      "Windows 上的 Codex 改用你自己的 ~/.codex，与 Orca 外一致。只在 Orca 里的登录会复制过去；仅 Orca 有的 MCP 需要重加。更新前已打开的终端继续用旧文件夹，不再提示重启。",
      "worker-start 接受尚未列出的 Codex 模型的 max 和 ultra effort。Qoder、Qwen Code 与独立 GLM Coding Plans 可用；OpenCode 和 Devin 可分开保留账户配置。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.221",
    "href": "/docs/changelog#v1-4-221"
  },
  {
    "tag": "v1.4.220",
    "date": "2026-10-04",
    "dateLabel": "2026年10月4日",
    "title": "Native Chat 的 Stop 会结束进程，SSH 可选自带运行时",
    "highlights": [
      "Native Chat（实验性）：Stop 会结束 Claude 的进程，包括后台命令和子 Agent。Codex 拒绝或不应答停止时，Orca 也会结束它。未发送的消息保持未发送直到 Retry，被插入的消息不会重复发送。",
      "SSH 主机：可选的 Orca 运行时不需要主机上的 Node、npm 或编译器；Auto 仍是默认。标准 Windows SSH 账户可用，重连期间的按键会保留。",
      "工作区与拖放：大仓库创建更快，删除不再卡住聊天或文件，后台完成不再切换视图。Mac 截图缩略图拖进本地 Claude Code 终端时，Agent 能读到可读副本。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.220",
    "href": "/docs/changelog#v1-4-220"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
