export type ReleaseNote = {
  tag: string;
  date: string;
  dateLabel: string;
  title: string;
  highlights: string[];
  url: string;
  href: string;
};

/** Latest 3 desktop releases. Refreshed by scripts/sync-releases.ts from GitHub. */
export const RELEASES: ReleaseNote[] = [
  {
    "tag": "v1.4.212",
    "date": "2026-09-25",
    "dateLabel": "2026年9月25日",
    "title": "官方更新",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.212",
    "href": "/docs/changelog#v1-4-212"
  },
  {
    "tag": "v1.4.211",
    "date": "2026-09-25",
    "dateLabel": "2026年9月25日",
    "title": "Native chat keeps its live t…",
    "highlights": [
      "Agents & chat： Native chat keeps its live tool state intact, shows Codex goals above the composer, and treats active child work as working. Muse Code is now a first-class supervised-worker harness with local usage reporting.",
      "Workspaces, editor & browser： Large local workspaces can find files by name, preview tabs can be turned off, stale workspace listings cannot retire newly created workspaces, and browser shortcuts stay with the split or floating panel that received them.",
      "Terminal, remote & reliability： Background-created terminals answer startup queries, explicit closes get enough time for a daemon verdict, and macOS adoption and folder-denial events carry code-identity telemetry. Asia relay capacity grows safely with cell-specific gates, lock-convoy alerts, and safer rehoming."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.211",
    "href": "/docs/changelog#v1-4-211"
  },
  {
    "tag": "v1.4.210",
    "date": "2026-09-24",
    "dateLabel": "2026年9月24日",
    "title": "已完成聊天折叠为答案，失败回合不再挂起",
    "highlights": [
      "Agent 与聊天：已完成聊天折叠到答案，失败回合结束而不是挂起，结构化聊天完成时点亮未读，重启恢复留在状态栏。Antigravity 可作为受监督 worker 运行，终端启动会回报所创建的窗格。",
      "终端、编辑器与工作区：终端主题选择覆盖 Ghostty 颜色，Linux daemon 在服务重启后仍存活并干净收割，macOS 会告知如何修复文件夹访问。大 artifact 与冲突列表已虚拟化，搜索列表不再闪旧结果，Monaco 失败被隔离。",
      "远程与可靠性：WSL 访客保留 OpenCode agent variant，重建的 SSH 目标保留 generation floor，同容量中继波次清理失败模板时不触碰后端服务。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.210",
    "href": "/docs/changelog#v1-4-210"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
