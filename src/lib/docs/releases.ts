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
  },
  {
    "tag": "v1.4.238",
    "date": "2026-10-23",
    "dateLabel": "2026年10月23日",
    "title": "- Your edits stay together: …",
    "highlights": [
      "- **Your edits stay together:** Tabs of the same file share unsaved text across workspaces. Conflict review sees that live text, workspace deletion lists unsaved files, and stale Markdown or notebook edits no longer overwrite newer work.",
      "- **Chats that keep up:** Codex and Pi show turns made outside the chat. Long pastes can become text attachments, Codex questions get answer cards, and OMP gains image sending and actionable plan-review cards.",
      "- **More control over agents:** Pick chat or terminal when creating a workspace, set that choice for your default agent, add Claude and Codex accounts on supported remote servers, and install shared skills for 11 more agents."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.238",
    "href": "/docs/changelog#v1-4-238"
  },
  {
    "tag": "v1.4.237",
    "date": "2026-10-21",
    "dateLabel": "2026年10月21日",
    "title": "手机端能做的更多：笔记、无头 Markdown，以及更稳的聊天与远程",
    "highlights": [
      "手机端能做的更多：创建和编辑笔记，在无头宿主上保存 Markdown，跟随相对文件链接，并查看内嵌图片。缓冲的终端草稿在切换工作区后也能保留。",
      "聊完还能回来：Codex 聊天在撤销后能正确重开，Claude 在 Orca 回滚后仍保留已 Rewind 的上下文，截图会跟着对话走。Codex 技能选择器现在反映 Codex 实际加载的技能。",
      "工作更受保护：Discard 会暂停跨工作区对同一文件的自动保存。只读 Markdown / CSV 视图保护未保存编辑；新建、未暂存的 Markdown 会直接进入富文本编辑器。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.237",
    "href": "/docs/changelog#v1-4-237"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
