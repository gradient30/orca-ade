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
    "tag": "v1.4.280",
    "date": "2026-11-27",
    "dateLabel": "2026年11月27日",
    "title": "Rename bot threads, answer 在聊天中 & grab browser a…",
    "highlights": [
      "🧠 **Using Antigravity (agy)? Update to v1.4.280.** Use Antigravity only through the `agy` CLI or in Orca chat. To align with Antigravity’s guidance on supported integrations, this release removes support for using `agy` to check quota in the standalone usage meter, generate bot avatars, or write source control text such as 提交信息.",
      "🤖 **Make bot spaces your own.** Rename group rooms and threads right from their tabs. A pinned amber gauge makes it easier to see when a bot has paused at its usage limit.",
      "💬 **Better bot follow-ups in Slack.** Bots can follow up in the thread or DM where you asked them to start background work. Orca also does less work to send everyday replies."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.280",
    "href": "/docs/changelog#v1-4-280"
  },
  {
    "tag": "v1.4.279",
    "date": "2026-11-27",
    "dateLabel": "2026年11月27日",
    "title": "Cleaner Git review and easier browser annotation…",
    "highlights": [
      "Made the Git diff review side panel cleaner, brought Graph into Changes, and made the browser annotation palette movable.",
      "🔀 **Cleaner Git review:** Find Create PR beside the branch name and file-list controls beside the files they affect. Open Graph from the Changes menu.",
      "🌐 **Annotate where you work:** Move the annotation palette beside the part of the page you want to discuss, then select an element or draw on a screenshot."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.279",
    "href": "/docs/changelog#v1-4-279"
  },
  {
    "tag": "v1.4.278",
    "date": "2026-11-26",
    "dateLabel": "2026年11月26日",
    "title": "Smoother long replies, Antigravity on agy, six n…",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.278",
    "href": "/docs/changelog#v1-4-278"
  },
  {
    "tag": "v1.4.277",
    "date": "2026-11-26",
    "dateLabel": "2026年11月26日",
    "title": "Even better Agy support, cleaner phone screens &…",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.277",
    "href": "/docs/changelog#v1-4-277"
  },
  {
    "tag": "v1.4.274",
    "date": "2026-11-24",
    "dateLabel": "2026年11月24日",
    "title": "App Rail is 默认开启 for new users",
    "highlights": [
      "This minor update enables App Rail for new Orca users. App Rail saves sidebar space by putting app navigation in a compact icon rail. Existing users can turn it on under **Settings > Experimental > App rail**.",
      "![App Rail in the Orca sidebar](https://github.com/stablyai/orca/releases/download/v1.4.274/app-rail.png)"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.274",
    "href": "/docs/changelog#v1-4-274"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
