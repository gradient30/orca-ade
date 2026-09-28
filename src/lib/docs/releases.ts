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
    "tag": "v1.4.216",
    "date": "2026-09-28",
    "dateLabel": "2026年9月28日",
    "title": "On smaller screens and narro…",
    "highlights": [
      "Status bar： On smaller screens and narrow windows, the status bar now stays on a single line instead of wrapping or getting cut off.",
      "---"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.216",
    "href": "/docs/changelog#v1-4-216"
  },
  {
    "tag": "v1.4.215",
    "date": "2026-09-27",
    "dateLabel": "2026年9月27日",
    "title": "Profile 双副本冲突时让用户选择保留哪一份",
    "highlights": [
      "Profile：当 JSON 与 SQLite 两份 profile 不一致时，Orca 会询问你保留 SQLite 还是 JSON，并按你的选择应用。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.215",
    "href": "/docs/changelog#v1-4-215"
  },
  {
    "tag": "v1.4.214",
    "date": "2026-09-26",
    "dateLabel": "2026年9月26日",
    "title": "原生交互式 .ipynb 笔记本与 Native Chat 增强",
    "highlights": [
      "笔记本：交互式 `.ipynb` 笔记本现已原生渲染，支持点击编辑单元格，由持久的 Jupyter kernel 驱动；pip 被锁时会自动创建虚拟环境，并在工作区解释器执行前尊重信任边界。",
      "Agent 与聊天：Native Chat 在编写器里实时显示上下文窗口用量，已发送消息可悬停复制，滚动时自动加载更早的历史；Codex 0.157+ 可以在 Orca 管理的 home 里干净启动，不再因路径长度失败（`SUN_LEN`）。Codex、Claude、Pi、Grok 都会跟踪子 Agent 与子任务状态，ZCode 成为一等支持的 harness。",
      "终端、编辑器与工作区：单终端窗格增加明确的关闭按钮；重新挂载的 SSH 标签会继续启动 shell；托管的 WSL 终端自动提供 Orca CLI。工作区文件夹开关即时生效，AI notes 界面更新，Windows 上的大文件身份保持区分。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.214",
    "href": "/docs/changelog#v1-4-214"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
