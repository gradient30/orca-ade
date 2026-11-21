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
    "tag": "v1.4.269",
    "date": "2026-11-21",
    "dateLabel": "2026年11月21日",
    "title": "Bots on eight more agents, a fuller phone & a qu…",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.269",
    "href": "/docs/changelog#v1-4-269"
  },
  {
    "tag": "v1.4.268",
    "date": "2026-11-21",
    "dateLabel": "2026年11月21日",
    "title": "Bots on more agents, richer Slack & a faster Orc…",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.268",
    "href": "/docs/changelog#v1-4-268"
  },
  {
    "tag": "v1.4.267",
    "date": "2026-11-20",
    "dateLabel": "2026年11月20日",
    "title": "What's new in 1.4.267",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.267",
    "href": "/docs/changelog#v1-4-267"
  },
  {
    "tag": "v1.4.266",
    "date": "2026-11-20",
    "dateLabel": "2026年11月20日",
    "title": "Orca Bot 成为正式队友，Antigravity 可自选登录",
    "highlights": [
      "**每个 Bot 会话都有工具和身份。** 托管 Agent 会话不再只限 Claude 和 Codex。Bot 可以像所有者一样分享。Slack 线程会显示这一轮在做什么，长回复整段送达。Gmail 触发器匹配真实发件地址。连接前，访问确认对话框会写明你允许什么。",
      "**Antigravity 可自选登录。** 可用 Gemini API key 或 Google Agent Platform（ADC）。新聊天跑在已登录的 agy 上，聊天、额度和所选账户一致。主机上没有 OpenCode、Cursor、Copilot、Grok、Kimi Code 或 OMP 时，Orca 会安装自己的副本。",
      "**配对服务器与更轻的桌面。** SSH 和已配对主机上的 localhost 链接，在该主机的 Orca 浏览器打开。会话保存不会改写未变条目。无头服务器不再宣传它做不到的更新。装桌面版不会更新手机应用。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.266",
    "href": "/docs/changelog#v1-4-266"
  },
  {
    "tag": "v1.4.265",
    "date": "2026-11-19",
    "dateLabel": "2026年11月19日",
    "title": "推出 Orca Bot，繁忙聊天时桌面更轻",
    "highlights": [
      "**Bot、连接器与访问。** 连接器选择更快，并带分类图标。Slack 连接对话框更短，装好后说明如何提及 Bot。访问控制警告更清楚。Agent 上下文里的其他对话仅供参考，Bot 只盯住被问到的那一个。",
      "**繁忙时桌面更轻。** 长标签条只渲染可见区域。会话保存只写改过的条目。其他聊天还在流式输出时，新消息也能发出。修复了可能冻住窗口的终端滚动循环。",
      "**可以自动更新桌面版。** 在 Settings → General → About 打开 Automatic updates 后，Orca 按你的节奏、通道和延迟下载、安装并重启。默认关闭。若会关掉正在运行的终端、WSL 正在迁移，或窗口状态存不下，自动安装会等待。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.265",
    "href": "/docs/changelog#v1-4-265"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
