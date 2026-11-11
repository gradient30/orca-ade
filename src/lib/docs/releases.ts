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
  },
  {
    "tag": "v1.4.255",
    "date": "2026-11-09",
    "dateLabel": "2026年11月9日",
    "title": "session search, agents on your phone & smoother …",
    "highlights": [
      "**Session History & performance:** Large histories stay responsive while search runs in a worker. Workspace and Project filters query their own sessions, unchanged history rows avoid extra rendering, and search indexing and profile saves do less disk work.",
      "**Chat & agents:** Open Codex chats follow account switches, newly installed skills appear in Codex’s `$` menu before your 第一条消息, and Antigravity Chat shows installed skills. OpenCode 2 starts with the model you picked. Clearing a chat hides the old transcript immediately, and a failed model or effort change affects its message rather than the whole chat.",
      "**Phone & remote hosts:** The Agents tab brings activity across desktops into one place. Pages open sooner through prewarming, Review refreshes branch comparisons when Git changes, and the file-preview restore bar stays above the keyboard. A stalled LAN reconnect can fall back to Relay, and resumed VMs keep their device pairing when 宿主 key is unchanged."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.255",
    "href": "/docs/changelog#v1-4-255"
  },
  {
    "tag": "v1.4.254",
    "date": "2026-11-08",
    "dateLabel": "2026年11月8日",
    "title": "Git Graph, on-phone dictation & side questions 在…",
    "highlights": [
      "**Chat:** `/btw` asks a side question in a fork and `/fork` forks from the latest response, with a spinner 在…时 fork opens. Chats show CI results for the pull requests they opened or pushed to, and every waiting message, command and steer now sits in one ordered queue you can move, delete or send from.",
      "**Phone:** Send 在…时 desktop is offline, keep drafts, attachments, file edits and automation drafts across app kills, and see the workspace list, session tabs and Review from memory 在…时y refresh. Large folders load 500 entries at a time with Search all, Review prefetches the next and previous file, and a thin line under the header shows when cached data is refreshing.",
      "**Dictation:** Phones can transcribe on the device, and every device can dictate at 一次. On desktop the speech model loads before your first dictation (a new setting chooses when to unload it), dictation stops after 一分钟静音 and keeps what you said, dictated text gets a space before it, and text that can't be inserted is copied instead. The paired web client can dictate through 宿主."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.254",
    "href": "/docs/changelog#v1-4-254"
  },
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
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
