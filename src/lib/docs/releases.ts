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
    "tag": "v1.4.253",
    "date": "2026-11-07",
    "dateLabel": "2026年11月7日",
    "title": "A little update ✨",
    "highlights": [
      "We released two updates today! Check out the [v1.4.252 release notes](https://github.com/stablyai/orca/releases/tag/v1.4.252) for chat forking and Plan mode, a smoother phone experience, and workspace organization across machines.",
      "A small release with a few minor improvements. A bigger one is coming later 🫣"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.253",
    "href": "/docs/changelog#v1-4-253"
  },
  {
    "tag": "v1.4.252",
    "date": "2026-11-07",
    "dateLabel": "2026年11月7日",
    "title": "Fork chats from any reply, Plan mode & a faster …",
    "highlights": [
      "**Chat:** Fork from any finished response, use Plan mode in Claude and Codex chats, and open a running subagent from Agents strip. Codex approvals show the proposed files and diffs, OpenCode can ask choice questions, and Claude's built-in server tools show as normal tool cards. Holding Cmd/Ctrl in a busy chat shows what Cmd/Ctrl+Enter will do, app shortcuts work from the chat editor, and oversized pasted images shrink to fit 而不失败. Signed-out OpenCode, Pi and OMP chats offer a Sign in button.",
      "**Phone:** Markdown is easier to read and renders math, GitHub alerts, task boxes and images. Rename a workspace from its menu, see automatic continue and Switch Account on 用量限制 notices, and keep chat sends, PR text, review notes and Tasks drafts when a 连接断开. The phone dials the relay 立即 when that worked last time, keeps terminal output across a network switch, and streams busy terminals without falling behind.",
      "**Agents & accounts:** Antigravity Chat can sign in with Gemini Enterprise, reports quota for every saved account and manages accounts inside WSL. `orca account` can select and remove any saved account. Antigravity IDE joins the Open In presets."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.252",
    "href": "/docs/changelog#v1-4-252"
  },
  {
    "tag": "v1.4.251",
    "date": "2026-11-06",
    "dateLabel": "2026年11月6日",
    "title": "Richer phone chats, add-to-chat from anywhere & …",
    "highlights": [
      "**Chat:** Add a file, Markdown preview or terminal selection to a chat. Agent messages use one-line cards 在桌面与手机上, Native Chats appear in Cmd+J recents and title search, and Cmd/Ctrl+Enter on an empty composer steers the first queued message. Claude chats keep effort changeable 在…之后 first reply and clear a stuck \"needs permission\" status when Claude ends the request itself. Codex chats show `/usage` and subagent task names.",
      "**Phone:** Rewind and continue chats, pin the plan, paste images and long text, set and manage goals, see the context usage ring, follow 后台任务s, copy or share images, copy file paths, choose where links open, and sign in from a signed-out chat.",
      "**Orchestration:** Workers can start their own workers, keep messaging their coordinator 在…之后y finish, and stop their helpers when stopped. Mail waits for a draft you are typing, including in OpenCode and 重启后."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.251",
    "href": "/docs/changelog#v1-4-251"
  },
  {
    "tag": "v1.4.250",
    "date": "2026-11-05",
    "dateLabel": "2026年11月5日",
    "title": "Lower terminal memory use, clearer chat changes …",
    "highlights": [
      "**性能：** Worktree switching is faster. Terminal ligatures no longer parse an entire font for every terminal. In the PR’s Windows test with Commit Mono, 32 terminals relaunched without the previous out-of-memory crash; results depend on fonts and workload. Closing a tool in a long agent turn also avoids scanning every other live tool.",
      "**Chat:** Successful Claude and Codex edits appear as changed-file summaries in the conversation, with patch details loaded on selection. Chat UI no longer interrupts an otherwise healthy agent turn 当它 exceeds 128 live text or tool entries. Codex chats show requested wait durations and support goal pause, resume and clear.",
      "**Browser:** Save and fill logins in Orca’s browser and manage them in browser settings. Passwords use OS-backed encryption; the vault is unavailable when secure storage is unavailable."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.250",
    "href": "/docs/changelog#v1-4-250"
  },
  {
    "tag": "v1.4.249",
    "date": "2026-11-04",
    "dateLabel": "2026年11月4日",
    "title": "更轻松的设置、更可控的聊天与更整洁的工作区 ✨",
    "highlights": [
      "**设置与技能：** 引导时可选择聊天或终端，使用更新的 Agent 选择器与主题步骤，并在本机为所选提供方安装聊天技能。在路由支持时，新添加的空项目可打开所选聊天 Agent。",
      "**聊天行为：** 在投递不确定与 Stop 时保留输入与排队的后续消息。新设置可控制发送时的滚动位置，以及空闲聊天 Agent 何时停止。已加载的聊天图片在滚动与切换工作区时保持可见；Pi 压缩会挂起发送直至完成。",
      "**Agent 选择：** 托管 Claude 账户在默认值未改时会保留之后的 `/model` 与 effort 选择。显示 Claude 回退时不改动已保存的模型选择；OpenCode 的 effort 跟随所选模型；Claude 聊天新增 Ultracode effort。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.249",
    "href": "/docs/changelog#v1-4-249"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
