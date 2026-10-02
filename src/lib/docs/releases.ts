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
    "tag": "v1.4.219",
    "date": "2026-10-02",
    "dateLabel": "2026年10月2日",
    "title": "When a Codex tab ends up sha…",
    "highlights": [
      "Codex terminals： When a Codex tab ends up sharing one background server with your other Codex tabs, a notice now appears at the top of that tab. On that server, closing one tab can end the others and agent status can be wrong. The notice offers a **Fix** that turns the sharing off and shows the exact command it runs. In a terminal that was opened before the update, it offers to open a new terminal instead. Typing `codex` in a plain fish tab now runs Codex on its own server, as it already did in zsh and bash. Opening a terminal no longer removes Orca's status hook from `~/.codex`. Orca no longer writes a second copy of a folder's trust entry into Codex's `config.toml`, which stopped every `codex` command from working, and it cleans up copies it already wrote. The background Codex usage check no longer clicks \"Update now\" in Codex's update prompt and leaves Codex broken. Codex also starts without a trust prompt in worktrees of a bare repository. A Codex pane no longer freezes for about a second while you type.",
      "Folder trust for agents： When Orca starts Claude Code, Codex, Cursor, Copilot, Qoder, or Antigravity in a folder, it now answers the agent's \"Do you trust this folder?\" question ahead of time. Orchestration workers, automations, and agents started from your phone no longer get stuck waiting at that prompt. You can turn this off in Settings → Agents → \"Trust the folder when Orca starts an agent\".",
      "Agent status： With several OpenCode 2 panes open, each pane now shows its own Working and Done, not another pane's. On Windows, Claude Code status works again when Claude runs its hooks in Windows PowerShell 5.1. A Codex row stays in the sidebar while Codex runs, even after Codex renames its tab. A freshly started Hermes is shown as ready, not busy."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.219",
    "href": "/docs/changelog#v1-4-219"
  },
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
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
