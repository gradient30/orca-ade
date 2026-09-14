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
    tag: "v1.4.202",
    date: "2026-09-14",
    dateLabel: "2026年9月14日",
    title: "Electron 安全修复，侧栏嵌套，移动推送回归",
    highlights: [
      "Electron 升级到 43.7.0，修复 glibc environ use-after-free；浏览器解码 Chromium SameSite cookie，避免每个配置静默丢失约 135 个 cookie。",
      "侧栏嵌套更轻松，同时保留动画重排；worktree 创建即使后续步骤抛错也能完成。",
      "恢复移动端推送并修复冷启动关闭；Native Chat、终端、移动端与 Git 有一轮大规模性能优化。",
    ],
    url: "https://github.com/stablyai/orca/releases/tag/v1.4.202",
    href: "/docs/changelog#v1-4-202",
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
