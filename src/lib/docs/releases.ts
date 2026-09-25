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
  },
  {
    "tag": "v1.4.209",
    "date": "2026-09-23",
    "dateLabel": "2026年9月23日",
    "title": "会话搜索按最新排序，启动提示直达终端 Agent，用量计价更新",
    "highlights": [
      "Agent 与聊天：会话搜索优先显示最新活动，启动提示直接送到终端 Agent。OpenCode、Claude、Pi、Antigravity 与 Devin 启动更可靠。用量总计支持 GPT-6、Opus 5.5 与 Fable 5.1 计价，Codex 用量重置后不再过时。",
      "终端、编辑器与工作区：拖拽选择在重绘时保持稳定，中键粘贴在鼠标跟踪 TUI 中可用，远程窗格重启后保留滚动缓冲。PDF 缩放跨标签与重启保持，新建 worktree 对话框滚动时按钮仍可见，大 artifact 与冲突列表保持流畅。",
      "远程与可靠性：WSL、SSH 与 Windows 设置恢复更干净，中继 rehome 与 cell 滚动在失败时不会拖垮整个 cell。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.209",
    "href": "/docs/changelog#v1-4-209"
  },
  {
    "tag": "v1.4.207",
    "date": "2026-09-22",
    "dateLabel": "2026年9月22日",
    "title": "文件搜索不再闪现旧结果",
    "highlights": [
      "文件搜索：Quick Open 与文件浏览器在加载新搜索时不再闪现上一次的结果。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.207",
    "href": "/docs/changelog#v1-4-207"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
