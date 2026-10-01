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
    "tag": "v1.4.218",
    "date": "2026-09-30",
    "dateLabel": "2026年9月30日",
    "title": "Codex 终端可独立服务器，内置更多 Agent",
    "highlights": [
      "Codex 终端：Settings → Agents 新增 **「Run each Codex terminal on its own server」** 开关，默认打开。关掉则回到 Codex 共用服务器。从 cmd.exe、完整路径或等待安装完成后启动的 Codex 也会走独立服务器。忙碌的 0.150–0.157 标签不再显示空闲。",
      "更多 Agent：内置 DeepSeek Harness、Freebuff、Qoder、CodeBuddy，侧栏显示状态；ZCode CLI 会话进历史，Coding Plan 额度进用量。",
      "终端：右键新增 **Reset Terminal** 清除崩溃程序留下的键盘/鼠标模式；不再误关仍在运行程序的模式。SSH 清理与本地一致；保存失败不再误报磁盘已满。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.218",
    "href": "/docs/changelog#v1-4-218"
  },
  {
    "tag": "v1.4.217",
    "date": "2026-09-29",
    "dateLabel": "2026年9月29日",
    "title": "Codex 0.158 worker 恢复启动，标签各自独立运行",
    "highlights": [
      "Codex：在当前 Codex（0.158）上 worker 恢复启动。Orca 不再等待 0.158 已去掉的欢迎屏标签，改为识别空输入框；带着模型或推理力度启动也不会卡住。",
      "Codex 标签各自独立：0.157+ 上每个 Orca 终端里的 Codex 标签各自跑自己的服务器，关掉一个不会拖垮其他标签。更新后新开终端立即生效。若要共用服务器，在 shell 启动文件加 `export ORCA_CODEX_ISOLATE=0`。代价是桌面/IDE 会话看不到 Orca 里启动的会话，多标签更占内存。",
      "状态栏与工作区：小屏幕上多余 Agent 先收进「+N」，再缩成图标；紧凑行强调未读；浮动终端 Agent 的活动线程打开右侧窗格。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.217",
    "href": "/docs/changelog#v1-4-217"
  },
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
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
