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
    "tag": "v1.4.249",
    "date": "2026-11-04",
    "dateLabel": "2026年11月4日",
    "title": "Pick Chat or Terminal during…",
    "highlights": [
      "**Setup & skills:** Pick Chat or Terminal during onboarding, use the updated agent picker and theme step, and install Chat skills for the selected provider on this computer. Empty newly added projects can open the chosen Chat agent when that route is supported.",
      "**Chat behavior:** Inputs and queued follow-ups are retained through uncertain delivery and Stop. New settings control 滚动位置 when sending and when idle chat agents stop. Loaded chat images stay visible across scrolling and workspace switches, and Pi compaction holds sends until it finishes.",
      "**Agent choices:** Managed Claude accounts keep later `/model` and effort 选项 当 defaults have not changed. Claude fallback is shown without changing saved model choices; OpenCode effort follows the selected model, and Claude chat adds Ultracode effort."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.249",
    "href": "/docs/changelog#v1-4-249"
  },
  {
    "tag": "v1.4.248",
    "date": "2026-11-04",
    "dateLabel": "2026年11月4日",
    "title": "Remote streams stay connecte…",
    "highlights": [
      "**Terminals:** Remote streams stay connected while output is flowing, agent identity survives daemon restarts, mobile input is pipelined in order, and long phone messages reach Windows Codex. Nerd Font symbols repaint 一次 fonts load, and closed terminal workers can reopen from their orchestration cards.",
      "**Chat continuity:** Streaming replies stay 在…之后 prompt they answer. Follow-ups remain queued after a failed turn, expired attachments are identified when a send is refused, and pasted text can be opened from 结构化聊天.",
      "**Agent startup & choices:** A final startup refusal is shown 在…之后 first attempt 而不是 repeated retries; temporary failures still recover. Chats preserve configured effort 当你 have not chosen an override, and 源码管理 text actions use Model and Effort menus."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.248",
    "href": "/docs/changelog#v1-4-248"
  },
  {
    "tag": "v1.4.247",
    "date": "2026-11-03",
    "dateLabel": "2026年11月3日",
    "title": "Choose Chat or CLI for each …",
    "highlights": [
      "**Chat UI:** Choose Chat or CLI for each agent directly in Chat UI settings. Permission choices stay visible, model and effort controls remain usable while options refresh, and focusing the composer keeps open overlays in place.",
      "**Conversation continuity:** Keep unsent text when moving from a terminal into chat, and preserve received replies and tool results while saving is busy. Turn on automatic continuation to resume a chat after its usage limit resets.",
      "**Phone source control:** Review each branch commit on its own page, jump between files, fold diff context, and read or add review comments alongside the code. The pull-request tab focuses on what blocks the merge, with clearer next actions and automatic refreshes."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.247",
    "href": "/docs/changelog#v1-4-247"
  },
  {
    "tag": "v1.4.246",
    "date": "2026-11-02",
    "dateLabel": "2026年11月2日",
    "title": "Mobile theme & language pick…",
    "highlights": [
      "**Mobile theme & language pickers:** Pick **Light, Dark or System** for 手机 app and choose your **display language** in Settings → Appearance and Language.",
      "**A refreshed phone app:** A Home screen focused on what needs you, compact top bars, bottom search, filter chips, clearer lists and smoother sheets. Workspace lists load with less data, images and Mermaid diagrams support pinch-to-zoom, and iOS can show inline HTML cards and previews. Run automations from your phone too.",
      "**Plugins:** The community catalog is visible 默认, with public install counts and clearer publisher information. Plugin authors get TypeScript and TSX without a separate build step, component-based panels, worker communication, hot reload and CLI tools for testing and screenshots."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.246",
    "href": "/docs/changelog#v1-4-246"
  },
  {
    "tag": "v1.4.245",
    "date": "2026-10-30",
    "dateLabel": "2026年10月30日",
    "title": "更快的 Orca、插件与后台电脑操控",
    "highlights": [
      "更快的 Orca：在数百个聊天下仍能顺畅启动，输入与切换标签时更少卡顿。",
      "插件：在 Settings → Plugins 添加图标主题、语法高亮与自定义编辑器；社区发布即将到来。",
      "Mac 后台电脑操控：Agent 可在 Chrome、Blender 等应用中工作，你仍可继续使用鼠标键盘。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.245",
    "href": "/docs/changelog#v1-4-245"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
