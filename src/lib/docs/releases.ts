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
    "tag": "v1.4.243",
    "date": "2026-10-28",
    "dateLabel": "2026年10月28日",
    "title": "- Chrome extensions (experim…",
    "highlights": [
      "- **Chrome extensions (experimental):** Add extensions from the Chrome Web Store with **Add to Orca**, so password managers like Bitwarden and 1Password can fill logins in Orca’s browser. Off by default.",
      "- **Convert a terminal agent session live into a chat ui:** Once you quit Claude or Codex in a terminal, the same conversation can continue in Chat while the terminal tab stays open. Claude chats also keep their saved approval choice across model changes, and closing a chat that’s still working asks first.",
      "- **Worktrees sooner after a restart:** Local worktrees load before terminals restore, and the sidebar says discovery is still running instead of showing an empty list."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.243",
    "href": "/docs/changelog#v1-4-243"
  },
  {
    "tag": "v1.4.242",
    "date": "2026-10-27",
    "dateLabel": "2026年10月27日",
    "title": "- Open Claude subagents from…",
    "highlights": [
      "- **Open Claude subagents from the sidebar:** Click a Claude subagent row in the sidebar or dashboard to open its transcript in the same terminal, then click the parent to go back. An eye marks the one you’re viewing.",
      "- **Chats that ask first:** Codex chats in Ask mode now ask before editing your workspace, remote Claude terminals on paired servers can continue in Chat, and chats that can’t start tell you why.",
      "- **Agents resume as you left them:** Resumed Claude sessions keep their effort level and launch flags, Codex keeps the permission you last gave it, and Session History finds chats in more folders and on servers."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.242",
    "href": "/docs/changelog#v1-4-242"
  },
  {
    "tag": "v1.4.241",
    "date": "2026-10-26",
    "dateLabel": "2026年10月26日",
    "title": "- Chats that follow your set…",
    "highlights": [
      "- **Chats that follow your settings:** New chats use each agent’s permission from Settings → Agents, renamed chats keep their names in Session History, and a chat won’t write a conversation a terminal is still running.",
      "- **A browser closer to Chrome:** Dock DevTools inside the pane, mute tabs playing sound, see a link’s URL on hover, and use Orca shortcuts and mouse back/forward inside pages.",
      "- **Watch agents browse:** A cursor and badge show where an agent is clicking or typing, chat jumps you to the page, and links from terminals and chat open beside their source."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.241",
    "href": "/docs/changelog#v1-4-241"
  },
  {
    "tag": "v1.4.240",
    "date": "2026-10-25",
    "dateLabel": "2026年10月25日",
    "title": "- Conversations that stay wi…",
    "highlights": [
      "- **Conversations that stay with you:** Claude chats now show turns made outside Orca. Retained messages return after reconnect without reopening the chat, and crash recovery no longer guesses that a sent message was undelivered.",
      "- **A browser with a better memory:** Search your browsing history, reopen pages, remove unwanted suggestions, and clear history with Undo. Pages can also use files you pick, save or drop through File System Access.",
      "- **Remote work with fewer interruptions:** Slow connections survive missed wake probes, reconnect notices explain what is happening, SSH terminals wait for sign-in, and new splits stay on the paired server."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.240",
    "href": "/docs/changelog#v1-4-240"
  },
  {
    "tag": "v1.4.239",
    "date": "2026-10-24",
    "dateLabel": "2026年10月24日",
    "title": "- Skills, ready wherever you…",
    "highlights": [
      "- **Skills, ready wherever you work:** Install Orca’s skills in one click from setup screens, and install or update them on paired servers and SSH hosts with Orca’s own installer.",
      "- **A browser that fits your projects:** Choose shared, per-repo or per-workspace profiles for new tabs. Keep local app logins separate, use a familiar page context menu, and get clearer explanations when a page cannot load.",
      "- **More fluid agent conversations:** Split into a fresh chat beside your current one, continue with a terminal agent from the pane header, and keep queued messages and multiple 图片附件 intact."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.239",
    "href": "/docs/changelog#v1-4-239"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
