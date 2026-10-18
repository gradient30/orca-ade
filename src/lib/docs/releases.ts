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
    "tag": "v1.4.229",
    "date": "2026-10-17",
    "dateLabel": "2026年10月17日",
    "title": "实验性 Native Chat 可逐轮审查编辑，共享技能支持更多 Agent",
    "highlights": [
      "实验性 Native Chat：可在对话内逐轮审查编辑、展开图表平移缩放、一键分享聊天视觉内容，并查看 Claude 目标与 Codex 上下文用量。键盘回答、未读分隔线与选中复制让长对话更易浏览。",
      "共享技能：共享技能安装现支持额外 20 个 Agent，WSL 发现范围更广，并为 Kiro、Qoder、CodeBuddy 等工具提供正确安装位置。",
      "手机端：工作区筛选、分组与排序跟随桌面共享选择。长按查看关联问题与笔记，可操作服务器工作区与浏览器页面，或在新终端对话中继续支持的聊天。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.229",
    "href": "/docs/changelog#v1-4-229"
  },
  {
    "tag": "v1.4.227",
    "date": "2026-10-16",
    "dateLabel": "2026年10月16日",
    "title": "Native Chat 拥有独立权限模式，会话更易继续",
    "highlights": [
      "Native Chat 拥有自己的权限模式。从 Settings → Chat → Behavior 为每个新的 Claude 或 Codex 聊天选择权限；现有聊天保持已使用的模式，更换模型不再重置它。",
      "Native Chat 会话更容易继续。可以在新 Native Chat 中恢复大型终端对话，恢复后台工作的聊天，并在 Session History 中准确显示每一个支持的聊天提供方。",
      "Claude 账户和 Codex 聊天设置更顺畅。Claude 账户再次使用单独文件夹，可复制登录链接，Codex 聊天要求 0.136.0 或更高，Codex Ultrafast 可作为速度选择。浏览器自动化可靠归还键盘。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.227",
    "href": "/docs/changelog#v1-4-227"
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
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
