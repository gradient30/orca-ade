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
    "tag": "v1.4.247",
    "date": "2026-11-03",
    "dateLabel": "2026年11月3日",
    "title": "Choose Chat or CLI for each …",
    "highlights": [
      "**Chat UI:** Choose Chat or CLI for each agent directly in Chat UI settings. Permission choices stay visible, model and effort controls remain usable while options refresh, and focusing the composer keeps open overlays in place.",
      "**Conversation continuity:** Keep unsent text when moving from a terminal into chat, and preserve received replies and tool results while saving is busy. Turn on automatic continuation to resume a chat after its usage limit resets.",
      "**Phone source control:** Review each branch commit on its own page, jump between files, fold diff context, and read or add review comments alongside the code. The pull-request tab focuses on what blocks the merge, with clearer next actions and automatic refreshes."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.247",
    "href": "/docs/changelog#v1-4-247"
  },
  {
    "tag": "v1.4.246",
    "date": "2026-11-02",
    "dateLabel": "2026年11月2日",
    "title": "Mobile theme & language pick…",
    "highlights": [
      "**Mobile theme & language pickers:** Pick **Light, Dark or System** for 手机 app and choose your **display language** in Settings → Appearance and Language.",
      "**A refreshed phone app:** A Home screen focused on what needs you, compact top bars, bottom search, filter chips, clearer lists and smoother sheets. Workspace lists load with less data, images and Mermaid diagrams support pinch-to-zoom, and iOS can show inline HTML cards and previews. Run automations from your phone too.",
      "**Plugins:** The community catalog is visible 默认, with public install counts and clearer publisher information. Plugin authors get TypeScript and TSX without a separate build step, component-based panels, worker communication, hot reload and CLI tools for testing and screenshots."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.246",
    "href": "/docs/changelog#v1-4-246"
  },
  {
    "tag": "v1.4.245",
    "date": "2026-10-30",
    "dateLabel": "2026年10月30日",
    "title": "更快的 Orca、插件与后台电脑操控",
    "highlights": [
      "更快的 Orca：在数百个聊天下仍能顺畅启动，输入与切换标签时更少卡顿。",
      "插件：在 Settings → Plugins 添加图标主题、语法高亮与自定义编辑器；社区发布即将到来。",
      "Mac 后台电脑操控：Agent 可在 Chrome、Blender 等应用中工作，你仍可继续使用鼠标键盘。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.245",
    "href": "/docs/changelog#v1-4-245"
  },
  {
    "tag": "v1.4.244",
    "date": "2026-10-29",
    "dateLabel": "2026年10月29日",
    "title": "更多界面语言、更快切换工作区，远程文件像本地一样好用",
    "highlights": [
      "四种新语言：德语、俄语、土耳其语与繁体中文加入语言选择器，更多对话框、菜单与快捷键已翻译。德语为机器翻译，欢迎母语者审阅。",
      "更快切换工作区：侧栏悬停会预热目标工作区，相邻工作区保持热态，切换本身更轻；拖拽行不会触发切换。",
      "远程文件像本地一样：可在 SSH 宿主与已配对服务器上播放音视频、保存最大 50 MB 的远程文本、滚动打开超大文件夹，且不会把远程二进制当文本打开。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.244",
    "href": "/docs/changelog#v1-4-244"
  },
  {
    "tag": "v1.4.243",
    "date": "2026-10-28",
    "dateLabel": "2026年10月28日",
    "title": "浏览器可装 Chrome 扩展，终端 Agent 会话可现场续到 Chat",
    "highlights": [
      "Chrome 扩展（实验性）：用 **Add to Orca** 从 Chrome Web Store 添加扩展，Bitwarden、1Password 等密码管理器可在 Orca 浏览器里填登录。默认关闭。",
      "终端 Agent 会话现场续到 Chat：退出终端里的 Claude 或 Codex 后，同一对话可在 Chat 继续，终端标签仍保留。Claude 聊天在换模型时保留已保存的审批选择；关闭仍在工作的聊天会先确认。",
      "重启后更快看到 worktree：本地 worktree 在终端恢复前先加载，侧栏会提示仍在发现，而不是空白列表。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.243",
    "href": "/docs/changelog#v1-4-243"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
