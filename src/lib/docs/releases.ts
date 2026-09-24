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
  },
  {
    "tag": "v1.4.206",
    "date": "2026-09-20",
    "dateLabel": "2026年9月20日",
    "title": "会话历史可搜，OpenCode 2，用量扫描进 worker",
    "highlights": [
      "Agent 与聊天：可在历史面板、跨机器、以及 `orca search` 里搜 Agent 会话。现已支持 **OpenCode 2**。Native Chat 把计划当计划渲染，重启时还在跑的聊天可以重连；OMP 能在桌面和移动端选模型。Source Control AI 可用 OMP 生成。",
      "工作区、编辑器与源码管理：编写器里紧凑分支选择器回来了；New Workspace 可选 base ref；diff 可折叠未改区域。审查评论支持多行范围。创建 worktree 优先 Git；WSL 删除不会带走孪生分支。",
      "终端与远程：可选默认终端 shell；搜索有匹配计数且与 Cmd+F 对齐；可配置点 URL / 中键。Windows 终端会真的启动你要的 shell。Claude、Codex 与 OpenCode 的用量扫描改在 worker 线程跑。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.206",
    "href": "/docs/changelog#v1-4-206"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
