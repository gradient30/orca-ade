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
  },
  {
    "tag": "v1.4.242",
    "date": "2026-10-27",
    "dateLabel": "2026年10月27日",
    "title": "侧栏一点打开 Claude 子 Agent，Ask 模式先问再改，远程更记事",
    "highlights": [
      "侧栏打开 Claude 子 Agent：在侧栏或 Dashboard 点击子 Agent 行，于同一终端打开其 transcript，再点子项返回；眼睛标记当前查看项。",
      "聊天先问再改：Ask 模式下的 Codex 聊天编辑工作区前会先询问；已配对服务器上的远程 Claude 终端可续到 Chat；无法启动的聊天会说明原因。",
      "Agent 按你离开时的状态恢复：恢复的 Claude 会话保留 effort 与启动标志，Codex 保留上次权限，Session History 能在更多文件夹与服务器上找到聊天。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.242",
    "href": "/docs/changelog#v1-4-242"
  },
  {
    "tag": "v1.4.241",
    "date": "2026-10-26",
    "dateLabel": "2026年10月26日",
    "title": "聊天跟随 Agent 设置，内置浏览器更接近 Chrome",
    "highlights": [
      "聊天跟随你的设置：新聊天使用 Settings → Agents 里各 Agent 的权限；重命名会留在 Session History；终端仍在写同一对话时，聊天不会抢写。",
      "浏览器更接近 Chrome：可在窗格内停靠 DevTools、静音有声标签、悬停看链接 URL，并在页面内使用 Orca 快捷键与鼠标前进/后退。",
      "看着 Agent 浏览：光标与徽章显示 Agent 点击或输入的位置，聊天可跳到该页；终端与聊天里的链接在来源旁打开。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.241",
    "href": "/docs/changelog#v1-4-241"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
