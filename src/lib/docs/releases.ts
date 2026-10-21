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
    "tag": "v1.4.235",
    "date": "2026-10-20",
    "dateLabel": "2026年10月20日",
    "title": "Use Rewind to here on a mess…",
    "highlights": [
      "- **Rewind Claude chats:** Use **Rewind to here** on a message that started a turn, edit your prompt, and take the conversation in a new direction. Claude continues from the history you kept.",
      "- **Your chat, your settings:** Each conversation remembers its own model, effort and Fast settings. Switching models keeps compatible choices, and changes to an agent's defaults no longer silently move a chat that has recorded its settings.",
      "- **Keep more of your agent's work:** Completed replies and tool results are saved in full rather than cut off at the preview limit. Use **Show full output** on desktop or phone, or **Show full message** on phone, to load more content from shortened previews."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.235",
    "href": "/docs/changelog#v1-4-235"
  },
  {
    "tag": "v1.4.233",
    "date": "2026-10-20",
    "dateLabel": "2026年10月20日",
    "title": "- SSH & remote workspaces: C…",
    "highlights": [
      "- **SSH & remote workspaces:** Connecting to an SSH host works when neither machine can download Node.js, with a one-click mirror Orca remembers and retries. Older Windows hosts (Windows 10 1809 and Server 2019) can run Orca's server, and tunnels recover when a port is held by an old SSH connection.",
      "- **Remote servers in Settings:** Remote Orca Servers is one list instead of six sections, and SSH hosts can be removed in bulk and stay removed. Orca tells you when the same server was saved twice, and adding a server you already saved updates it instead.",
      "- **Phone:** Creating a workspace from the phone is much faster, the workspace list stays in step with the desktop, and session tab icons keep their size beside long titles."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.233",
    "href": "/docs/changelog#v1-4-233"
  },
  {
    "tag": "v1.4.232",
    "date": "2026-10-20",
    "dateLabel": "2026年10月20日",
    "title": "- Auto permissions, in chat …",
    "highlights": [
      "- **Auto permissions, in chat and terminal:** Choose **Manual | Auto | Yolo** in Settings → Agents. Auto lets supported Claude and Codex agents handle approvals, and new Native Chats follow your choice too. You can choose a separate permission mode for other agents; existing chats keep their own settings.",
      "- **Native chat (experimental):** Open OpenCode 2 directly in chat, find Codex skills by typing `$`, and pan and zoom image previews. Rewind works in long conversations, and usage limits show when they reset with a **Continue** button to pick the conversation back up.",
      "- **A better phone composer:** Attach files as well as photos, insert skills inline, and choose model, effort and permissions from one sheet. Faster recovery after switching apps and more responsive terminal scrolling make it easier to keep working away from your desk."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.232",
    "href": "/docs/changelog#v1-4-232"
  },
  {
    "tag": "v1.4.230",
    "date": "2026-10-19",
    "dateLabel": "2026年10月19日",
    "title": "实验性 Native Chat 支持 Antigravity，可选择 Agent 并在聊天内安装",
    "highlights": [
      "实验性 Native Chat：在聊天中使用 Antigravity，选择哪些 Agent 以聊天形式打开，并在聊天内安装缺失的 Agent。将复制的文件粘贴为附件、排队图片，并在附件与队列操作进行中看到更清晰的反馈。",
      "账号与 Agent：切换 Claude 账号后，重启正在运行的会话到新账号。从 Settings 移除已下载的 Agent 运行时，并通过 Orca CLI 编辑或删除 Linear 评论。",
      "手机端：就地编辑队列中的消息，用桌面风格卡片跟随工具运行，从历史恢复时立即看到对话。横屏手机把会话标签放在顶栏，Tasks 清楚显示你正在使用哪个桌面。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.230",
    "href": "/docs/changelog#v1-4-230"
  },
  {
    "tag": "v1.4.229",
    "date": "2026-10-17",
    "dateLabel": "2026年10月17日",
    "title": "实验性 Native Chat 可逐轮审查编辑，共享技能支持更多 Agent",
    "highlights": [
      "实验性 Native Chat：可在对话内逐轮审查编辑、展开图表平移缩放、一键分享聊天视觉内容，并查看 Claude 目标与 Codex 上下文用量。键盘回答、未读分隔线与选中复制让长对话更易浏览。",
      "共享技能：共享技能安装现支持额外 20 个 Agent，WSL 发现范围更广，并为 Kiro、Qoder、CodeBuddy 等工具提供正确安装位置。",
      "手机端：工作区筛选、分组与排序跟随桌面共享选择。长按查看关联问题与笔记，可操作服务器工作区与浏览器页面，或在新终端对话中继续支持的聊天。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.229",
    "href": "/docs/changelog#v1-4-229"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
