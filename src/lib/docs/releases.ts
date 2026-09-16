export type ReleaseNote = {
  tag: string;
  date: string;
  dateLabel: string;
  title: string;
  highlights: string[];
  url: string;
  href: string;
};

/** Latest 3 desktop releases. Highlights = 核心摘要; href = 完整中文页锚点. */
export const RELEASES: ReleaseNote[] = [
  {
    tag: "v1.4.203",
    date: "2026-09-15",
    dateLabel: "2026年9月15日",
    title: "Electron 安全修复，侧栏嵌套，移动推送回归",
    highlights: [
      "可靠性与安全：Electron 已升级以修复 glibc environ use-after-free；浏览器 cookie 迁移更稳；worktree 创建即使后续步骤失败也能干净完成。",
      "Agent 与聊天：Native Chat 能根据提供方历史恢复因重启滞留的发送；Agent 状态不再依赖运行时保留的行存储。",
      "工作区与移动端：文件夹工作区保留已保存的名称与分组；侧栏嵌套更好用；移动端恢复推送、冷启动、通知与 Markdown 行为。",
    ],
    url: "https://github.com/stablyai/orca/releases/tag/v1.4.203",
    href: "/docs/changelog#v1-4-203",
  },
  {
    tag: "v1.4.201",
    date: "2026-09-13",
    dateLabel: "2026年9月13日",
    title: "Native Chat 斜杠命令、后台任务与子 Agent",
    highlights: [
      "Native Chat：任意位置的 `/` 选择器、后台任务条显示正在运行的内容、子 Agent 出现在侧栏子行。",
      "桌面端与移动端原生推送曾接入后又撤回，待投递问题排查。",
      "中继按区域放置、空闲切换后重连；终端与聊天只挂载可见内容。",
    ],
    url: "https://github.com/stablyai/orca/releases/tag/v1.4.201",
    href: "/docs/changelog#v1-4-201",
  },
  {
    tag: "v1.4.200",
    date: "2026-09-11",
    dateLabel: "2026年9月11日",
    title: "Native Chat 看见子 Agent，编排从创建起就有主人",
    highlights: [
      "Native Chat：Claude 子 Agent 活动与 Codex 后台任务会显示在聊天里；完成的回合列出变更文件，任务更新流入编写器。",
      "编排：Worker 终端从创建起就有主人；启动、移动端输入与旧联邦协调器增加恢复保护。",
      "工作区与浏览器：后台浏览器标签打开即加载；创建聊天时保留当前 worktree。",
    ],
    url: "https://github.com/stablyai/orca/releases/tag/v1.4.200",
    href: "/docs/changelog#v1-4-200",
  },
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
