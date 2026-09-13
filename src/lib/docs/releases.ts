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
    "tag": "v1.4.201",
    "date": "2026-09-13",
    "dateLabel": "2026年9月13日",
    "title": "官方更新",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.201",
    "href": "/docs/changelog#v1-4-201"
  },
  {
    "tag": "v1.4.200",
    "date": "2026-09-11",
    "dateLabel": "2026年9月11日",
    "title": "Native chat:",
    "highlights": [
      "Native chat:",
      "Orchestration:",
      "Workspace & browser:"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.200",
    "href": "/docs/changelog#v1-4-200"
  },
  {
    "tag": "v1.4.199",
    "date": "2026-09-09",
    "dateLabel": "2026年9月9日",
    "title": "Create 入口回来了，Structured Chat 更像对话",
    "highlights": [
      "侧栏「新建工作区」和「添加项目」合并进同一个 Create 按钮，任意窗口宽度都在同一位置。",
      "实验设置打开 Structured Chat 后，工具调用按批次分组、可展开执行细节、Codex 子 Agent 动态，以及 /clear、/compact；Native Windows 也支持。",
      "远程中继选区、迁移和重连更稳；终端恢复时保住输入与身份。渲染与 Git 解析更快。移动端中继测速和后台推送本版本已撤下。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.199",
    "href": "/docs/changelog#v1-4-199"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
