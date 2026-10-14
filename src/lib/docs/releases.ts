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
    "tag": "v1.4.225",
    "date": "2026-10-14",
    "dateLabel": "2026年10月14日",
    "title": "- SSH and managed servers: N…",
    "highlights": [
      "- **SSH and managed servers:** New SSH connections now use Orca's managed server. Terminals left running by v1.4.224 keep working in their existing tabs through the upgrade and reconnect; new terminals open on the managed server. Saved port forwards return, Windows managed-host terminals get the `orca` CLI, and managed Claude chats keep their provider running after the desktop disconnects. Hosts that cannot run the managed server show a clear reason; the old SSH fallback is no longer available.",
      "- **Native chat (experimental):** Code blocks and shell commands are highlighted, attached files show as filename pills, and you can edit a queued message even while the agent is asking a question. Codex offers Ultrafast and can stop background commands and subagents; Grok can list and stop its background commands too. A new chat saves its first message immediately, closed chats stay closed, and interrupted replies put **Continue** in the explanation card. Mermaid diagrams work better in dark mode, and chat visuals can open in their own tab.",
      "- **Agents and accounts:** Kiro reports agent status and appears in Session History. Claude accounts use separate folders and offer **Copy sign-in link instead**. Orchestration workers can start as Native Chats for supported agents, agent launch settings are edited on the workspace's own host, and account switching and MCP settings stay with the selected host."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.225",
    "href": "/docs/changelog#v1-4-225"
  },
  {
    "tag": "v1.4.224",
    "date": "2026-10-10",
    "dateLabel": "2026年10月10日",
    "title": "自动化可按次指定模型与 effort，SSH 主机改跑托管 Orca 服务器",
    "highlights": [
      "自动化现在可以为每次运行指定 Agent 的模型和 effort（在 Advanced 填 Extra agent arguments，或用 --extra-agent-args）。目前支持 Claude、Codex、Grok、CodeBuddy、Cursor 和 OMP，每次运行开启全新会话。已有工作区的定时任务会交给启动后读取的 Agent。",
      "SSH 主机现在运行 Orca 自带的托管服务器，连接时自动设置，不再因 Node 版本或缺少构建工具失败。无打开终端的主机下次连接时切换并带上项目和标签；有终端的提供 Move to a managed Orca server。可在 Settings → Managed servers 查看、更新、回滚、Recover 或 Forget。",
      "实验性 Native Chat：Chat UI 打开且默认为聊天时，支持的 Agent 默认以结构化聊天打开。可在标签右键或 Session History 中在聊天与终端间移动。OpenCode（含 2.x）、Pi、OMP 支持结构化聊天；可在回复内绘制图表（可关闭），Cmd/Ctrl+F 搜索，Add to chat 引用，数字键回答问题。"
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
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
