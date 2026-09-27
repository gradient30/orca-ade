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
    "tag": "v1.4.215",
    "date": "2026-09-27",
    "dateLabel": "2026年9月27日",
    "title": "When the JSON and SQLite cop…",
    "highlights": [
      "Profile： When the JSON and SQLite copies of your profile disagree, Orca asks whether to keep SQLite or JSON and applies that choice for you.",
      "---"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.215",
    "href": "/docs/changelog#v1-4-215"
  },
  {
    "tag": "v1.4.214",
    "date": "2026-09-26",
    "dateLabel": "2026年9月26日",
    "title": "Interactive `.ipynb` noteboo…",
    "highlights": [
      "Notebooks： Interactive `.ipynb` notebooks now render natively with click-to-edit cells, backed by a persistent Jupyter kernel, automatic virtual environment setup when pip is locked out, and trust boundaries before workspace interpreter execution.",
      "Agents & chat： Native chat displays real-time context window usage in the composer, adds a hover copy button to sent messages, auto-loads older history on scroll, and lets Codex 0.157+ start cleanly in Orca-managed homes without path-length failures (`SUN_LEN`). Subagent and child work status is tracked across Codex, Claude, Pi, and Grok, while ZCode joins as a first-class supported harness.",
      "Terminal, editor & workspaces： Single terminal panes gain an explicit close button, remounted SSH tabs keep spawning their shell, and managed WSL terminals automatically provide the Orca CLI. Workspace folder toggles are instant, AI notes UI is revamped, and large file identities on Windows stay distinct."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.214",
    "href": "/docs/changelog#v1-4-214"
  },
  {
    "tag": "v1.4.212",
    "date": "2026-09-25",
    "dateLabel": "2026年9月25日",
    "title": "官方更新",
    "highlights": [
      "详见下方完整中文日志。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.212",
    "href": "/docs/changelog#v1-4-212"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
