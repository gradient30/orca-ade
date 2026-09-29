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
    "tag": "v1.4.216",
    "date": "2026-09-28",
    "dateLabel": "2026年9月28日",
    "title": "窄窗口里状态栏保持单行",
    "highlights": [
      "状态栏：在较小的屏幕和窄窗口里，状态栏保持单行，不再换行或被裁切。"
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
  },
  {
    "tag": "v1.4.212",
    "date": "2026-09-25",
    "dateLabel": "2026年9月25日",
    "title": "Codex 0.157+ 在 Orca 管理 home 中正常启动",
    "highlights": [
      "修复（codex）：Codex 0.157+ 可在 Orca 管理的 home 中启动，不再因 SUN_LEN 失败。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.212",
    "href": "/docs/changelog#v1-4-212"
  },
  {
    "tag": "v1.4.211",
    "date": "2026-09-25",
    "dateLabel": "2026年9月25日",
    "title": "Muse Code 一等支持，Native Chat 保住实时工具状态",
    "highlights": [
      "Agent 与聊天：Native Chat 保持实时工具状态，在编写器上方显示 Codex 目标，并把仍在进行的子任务视为正在工作。Muse Code 现已成为一等支持的受监督 worker harness，并带有本地用量报告。",
      "工作区、编辑器与浏览器：大型本地工作区可以按文件名查找，预览标签可以关闭，过期的工作区列表不能退役刚创建的工作区，浏览器快捷键留在接收它们的分栏或浮动面板上。",
      "终端、远程与可靠性：后台创建的终端会回答启动查询，显式关闭会留给 daemon 足够的判定时间。亚洲中继容量在按 cell 设门和更安全的 rehome 下增长。移动端 OTA 支持设备返回键与按能力协商的 gzip 打包区间。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.211",
    "href": "/docs/changelog#v1-4-211"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
