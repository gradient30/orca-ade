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
    "tag": "v1.4.261",
    "date": "2026-11-16",
    "dateLabel": "2026年11月16日",
    "title": "Customizable + menu, a faster chat store & brows…",
    "highlights": [
      "**Agents work without taking over your screen:** Computer use can launch apps, type into and click Windows controls, and read minimized or other-Space macOS windows without bringing them forward. Print dialogs, Windows Hello prompts, popups and extension tabs that Agent sets off stay out of your view.",
      "**Quieter notifications:** Choose **Silent** to keep banners without sound. Orca's own notification sounds now respect macOS Focus and Windows Focus Assist.",
      "**Browser profiles per project and fewer PR checks:** Pick which 浏览器配置 a repo's new tabs open in. Settings → 源码管理 → **PR Updates** offers Automatic, Less often or Manual polling."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.261",
    "href": "/docs/changelog#v1-4-261"
  },
  {
    "tag": "v1.4.259",
    "date": "2026-11-14",
    "dateLabel": "2026年11月14日",
    "title": "Major performance improvements, automatic cleanu…",
    "highlights": [
      "**Keep working while agents use tools:** Agent-created terminal splits keep your keyboard where it was. Browser popups and new-tab links opened by agents stay 在后台. A server agent’s new browser tab can open on your 配对桌面; without a 配对桌面, it stays on the server.",
      "**Organize without stopping work:** Hide a project from 侧栏 在其…时 agents, terminals and automations keep running. Find it again under **Hidden projects**. On a shared 已配对服务器, hiding its project applies to everyone connected there.",
      "**Inspect long runs:** Expanded 工具运行s draw the visible rows while preserving Find, copying and keyboard navigation. Subagent rosters show each agent’s model, current work and result."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.259",
    "href": "/docs/changelog#v1-4-259"
  },
  {
    "tag": "v1.4.258",
    "date": "2026-11-13",
    "dateLabel": "2026年11月13日",
    "title": "Smoother workspaces, restored phone scrolling & …",
    "highlights": [
      "**Keep conversations moving:** Usage-limit **Hand Off to Another Agent** includes the full saved conversation. Generated images stay beside the final answer, and closing a window with a replying chat uses the running-work confirmation. Answer worker permission prompts from the coordinator, with pending requests above the composer and receipts in conversation order.",
      "**Browse, review and open files:** Extensions are enabled 默认 in **Settings → Browser**. Git Graph reduces repeated work while scrolling and paging; idle editors stop polling copy hints. Unsupported document tabs offer **Open with default app**, downloading a copy first for SSH or paired-host files.",
      "**Switch Claude accounts remotely:** Under **Ask**, a phone or CLI switch resumes terminal sessions on the selected account without a desktop dialog. Busy sessions finish their turn first; **Never restart** still keeps them as they are."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.258",
    "href": "/docs/changelog#v1-4-258"
  },
  {
    "tag": "v1.4.257",
    "date": "2026-11-12",
    "dateLabel": "2026年11月12日",
    "title": "Smoother long chats, saved feedback and better d…",
    "highlights": [
      "**Find what belongs in a split pane:** Press `/` in an empty split pane to search for Agent or file. Use the arrow keys and Enter to open your selection without leaving the keyboard.",
      "**Keep your chosen Claude model:** The Chat UI picker keeps your latest selection when replies from an earlier turn arrive, rather than snapping back to their model.",
      "**See the images you asked Codex to make:** Generated images remain visible after a turn finishes, without expanding its tool details. For remote chats, update both 宿主 and client to get this behavior."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.257",
    "href": "/docs/changelog#v1-4-257"
  },
  {
    "tag": "v1.4.256",
    "date": "2026-11-10",
    "dateLabel": "2026年11月10日",
    "title": "Smoother performance, easier dictation, saved ph…",
    "highlights": [
      "**Voice & dictation:** Speech-model updates are offered in the dictation pill 当你 start dictating, with download progress, cancellation and retry. Language-based setup suggestions, model quality information, a Use GPU switch, personal and repository vocabulary, and support for OpenAI-compatible transcription services. The dictation pill shows committed and pending words; failed recordings can be retried. Pressing Send or Enter while dictating waits for the words before sending.",
      "**Phone & recovery:** Saved chat messages and draft text return after a relaunch. Home opens with last-known workspaces, visited terminals stay mounted for quicker switching, and page assets load on demand. Folder workspaces have 源码管理 在手机上, and large-file diffs retain unchanged lines.",
      "**Chat & agents:** Copy and other reply actions stay visible on the latest response, while older replies reveal them on hover or keyboard focus. Account usage shows Used, Left and time until reset. Claude chat names use the CLI's titles, questions can show option previews, Codex failures give actionable advice, and a New divider is available in Settings. Usage-limited chats that are due can continue in one pass, with automatic retries stopping after five consecutive failures."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.256",
    "href": "/docs/changelog#v1-4-256"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
