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
    "tag": "v1.4.205",
    "date": "2026-09-17",
    "dateLabel": "2026年9月17日",
    "title": "Agent 与聊天：",
    "highlights": [
      "Agent 与聊天：",
      "Workspaces, editor & source control:",
      "Terminal & remote:"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.205",
    "href": "/docs/changelog#v1-4-205"
  },
  {
    "tag": "v1.4.204",
    "date": "2026-09-16",
    "dateLabel": "2026年9月16日",
    "title": "Agent 与聊天：",
    "highlights": [
      "Agent 与聊天：",
      "工作区与移动端：",
      "Performance:"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.204",
    "href": "/docs/changelog#v1-4-204"
  },
  {
    "tag": "v1.4.203",
    "date": "2026-09-15",
    "dateLabel": "2026年9月15日",
    "title": "Electron 安全修复，侧栏嵌套，移动推送回归",
    "highlights": [
      "可靠性与安全：Electron 已升级以修复 glibc environ use-after-free；浏览器 cookie 迁移更稳；worktree 创建即使后续步骤失败也能干净完成。",
      "Agent 与聊天：Native Chat 能根据提供方历史恢复因重启滞留的发送；Agent 状态不再依赖运行时保留的行存储。",
      "工作区与移动端：文件夹工作区保留已保存的名称与分组；侧栏嵌套更好用；移动端恢复推送、冷启动、通知与 Markdown 行为。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.203",
    "href": "/docs/changelog#v1-4-203"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
