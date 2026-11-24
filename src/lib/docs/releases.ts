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
    "tag": "v1.4.273",
    "date": "2026-11-24",
    "dateLabel": "2026年11月24日",
    "title": "Clearer bot items, more controls 在手机上 & smoother…",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.273",
    "href": "/docs/changelog#v1-4-273"
  },
  {
    "tag": "v1.4.272",
    "date": "2026-11-23",
    "dateLabel": "2026年11月23日",
    "title": "bots that pick up where they left off ✨更可靠。",
    "highlights": [
      "🤖 **Bots recover more reliably after interruptions.** Conversations paused by usage limits can continue automatically after an account switch or restart. Resume works for chats interrupted by a crash or restart, and with **Resume work on restart** enabled, terminal workers can return to their saved conversations even if their terminals were lost. [Usage-limit recovery](https://github.com/stablyai/orca/pull/47221) · [Chat recovery](https://github.com/stablyai/orca/pull/47284) · [Worker recovery](https://github.com/stablyai/orca/pull/46643)",
      "🌐 **Use the same browser tools across machines.** Extensions such as 1Password now work in SSH workspace tabs and paired-server tabs opened on **This device**. Drop files from your desktop into server-streamed pages, and let agents on SSH 宿主 or 已配对服务器 upload and download files using paths on their own host. [Extensions](https://github.com/stablyai/orca/pull/47347) · [Drag and drop](https://github.com/stablyai/orca/pull/47357) · [SSH files](https://github.com/stablyai/orca/pull/47399) · [Paired-server files](https://github.com/stablyai/orca/pull/47264)",
      "💬 **Take a quick detour 在聊天中.** On supported agents, type `/btw` or `/side` to mark a draft as a side chat. The composer’s worker count now reflects who’s actively working. [Side chat](https://github.com/stablyai/orca/pull/42129) · [Worker count](https://github.com/stablyai/orca/pull/47432)"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.272",
    "href": "/docs/changelog#v1-4-272"
  },
  {
    "tag": "v1.4.271",
    "date": "2026-11-22",
    "dateLabel": "2026年11月22日",
    "title": "Bots across computers, a phone that runs your ag…",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.271",
    "href": "/docs/changelog#v1-4-271"
  },
  {
    "tag": "v1.4.269",
    "date": "2026-11-21",
    "dateLabel": "2026年11月21日",
    "title": "Bots on eight more agents, a fuller phone & a qu…",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.269",
    "href": "/docs/changelog#v1-4-269"
  },
  {
    "tag": "v1.4.268",
    "date": "2026-11-21",
    "dateLabel": "2026年11月21日",
    "title": "Bots on more agents, richer Slack & a faster Orc…",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.268",
    "href": "/docs/changelog#v1-4-268"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
