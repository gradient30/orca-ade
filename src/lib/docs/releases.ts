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
    "tag": "v1.4.264",
    "date": "2026-11-19",
    "dateLabel": "2026年11月19日",
    "title": "Chat commands find their workspace ✨",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.264",
    "href": "/docs/changelog#v1-4-264"
  },
  {
    "tag": "v1.4.263",
    "date": "2026-11-18",
    "dateLabel": "2026年11月18日",
    "title": "Lighter ch在启动时, Hermes in Chat & browser extensi…",
    "highlights": [
      "**Connect Linear from the command line:** `orca linear connect` accepts an API key through stdin and connects 宿主 you target, including a headless server. Each host keeps its own connection. Linear issue and project lists now return all results 当你 omit `--limit`.",
      "**Set up agents 在 Windows 上:** Claude and Codex chats offer **Install** when Agent is missing, then **Check again** to detect the installation. `orca agent installed` also lists enabled agent CLIs on the current host for scripts and launch setup."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.263",
    "href": "/docs/changelog#v1-4-263"
  },
  {
    "tag": "v1.4.262",
    "date": "2026-11-17",
    "dateLabel": "2026年11月17日",
    "title": "chat switching, lower memory use & git blame ✨更快…",
    "highlights": [
      "**Set up Agent in one card:** Choose Agent, model and supported effort or Fast options together, then use **Open as chat** or **Open as terminal**. Where offered, **Default** effort lets Agent choose its own level.",
      "**Control interruptions:** Right-click a workspace to mute its notifications while keeping its unread dot. Sleeping workspaces stay asleep after relaunch, and the workspace-card preview lets you try different styles.",
      "**Use your language and plugins:** Discover community translations in Settings or onboarding. Plugin update reviews name the added access and can group approvals; eligible updates can be approved from their notification."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.262",
    "href": "/docs/changelog#v1-4-262"
  },
  {
    "tag": "v1.4.261",
    "date": "2026-11-16",
    "dateLabel": "2026年11月16日",
    "title": "Major performance improvements, Cursor Chat & a …",
    "highlights": [
      "**More room for active work:** Memory Saver also applies to browser tabs on an updated `orca serve` host. Desktop tabs retain their title, history, cookies and saved site data. Settings → Browser lets you change the idle interval or turn Memory Saver off.",
      "**More agent choices:** Antigravity Chat works 在 Windows 上, and Pi Chat shows subagents. Ordinary Orca CLI commands avoid Electron startup on supported Macs; macOS 13.4 retains the existing launcher.",
      "**Workspaces at a glance:** Experimental workspace cards show activity, unread results, failures and offline hosts. Choose Classic or Experimental from Workspace options. Agents whose panes are asleep keep showing Done."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.261",
    "href": "/docs/changelog#v1-4-261"
  },
  {
    "tag": "v1.4.259",
    "date": "2026-11-14",
    "dateLabel": "2026年11月14日",
    "title": "Major performance improvements, automatic cleanu…",
    "highlights": [
      "**Keep working while agents use tools:** Agent-created terminal splits keep your keyboard where it was. Browser popups and new-tab links opened by agents stay 在后台. A server agent’s new browser tab can open on your 配对桌面; without a 配对桌面, it stays on the server.",
      "**Organize without stopping work:** Hide a project from 侧栏 在其…时 agents, terminals and automations keep running. Find it again under **Hidden projects**. On a shared 已配对服务器, hiding its project applies to everyone connected there.",
      "**Inspect long runs:** Expanded 工具运行s draw the visible rows while preserving Find, copying and keyboard navigation. Subagent rosters show each agent’s model, current work and result."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.259",
    "href": "/docs/changelog#v1-4-259"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
