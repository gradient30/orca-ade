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
  },
  {
    "tag": "v1.4.227",
    "date": "2026-10-16",
    "dateLabel": "2026年10月16日",
    "title": "Native Chat 拥有独立权限模式，会话更易继续",
    "highlights": [
      "Native Chat 拥有自己的权限模式。从 Settings → Chat → Behavior 为每个新的 Claude 或 Codex 聊天选择权限；现有聊天保持已使用的模式，更换模型不再重置它。",
      "Native Chat 会话更容易继续。可以在新 Native Chat 中恢复大型终端对话，恢复后台工作的聊天，并在 Session History 中准确显示每一个支持的聊天提供方。",
      "Claude 账户和 Codex 聊天设置更顺畅。Claude 账户再次使用单独文件夹，可复制登录链接，Codex"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.227",
    "href": "/docs/changelog#v1-4-227"
  },
  {
    "tag": "v1.4.224",
    "date": "2026-10-10",
    "dateLabel": "2026年10月10日",
    "title": "- Automations can now set th…",
    "highlights": [
      "- **Automations can now set the agent's model and effort for each run.** In the automation editor, open Advanced and fill in **Extra agent arguments** (or use `--extra-agent-args` with `orca automations create` and `edit`), for example `-model haiku --effort high`. This works today for Claude, Codex, Grok and CodeBuddy (model and effort), Cursor (model, which carries its effort) and OMP (model), and support for more agents is coming soon. Each run starts a fresh session, and your other automations keep the host's defaults. Separately, scheduled runs in an existing workspace on an Orca server now hand the task to agents that read it after they start, such as Aider, Goose and Amp, instead of leaving them idle.",
      "- **SSH hosts now run a managed Orca server.** Orca ships its own runtime and sets it up when you connect, so connections no longer fail because a host has the wrong Node version or no build tools. A host with no open terminals switches on its next connect and brings its projects, folders and open editor tabs along. A host with open terminals keeps working as before and offers **Move to a managed Orca server**, which restarts those terminals. A host that can't run it keeps its current connection, and Settings → SSH Hosts says why. You can see, update, roll back, **Recover** or **Forget** each server in Settings → Managed servers.",
      "- **Native chat (experimental):** If you turned on Chat UI with chat as your default view, supported agents now open in the 结构化聊天 by default. If Terminal was your default, new agent tabs stay in the terminal, and a one-time tip explains the change and lets you turn chat mode on. You can move a conversation between chat and a terminal from the tab's right-click menu or from Agent Session History (**Resume in New CLI** / **Resume in New Native Chat**)."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.224",
    "href": "/docs/changelog#v1-4-224"
  },
  {
    "tag": "v1.4.223",
    "date": "2026-10-08",
    "dateLabel": "2026年10月8日",
    "title": "- Native chat (experimental)…",
    "highlights": [
      "- **Native chat (experimental):** With \"Use updated structured Native Chat\" turned on (Settings → Chat UI), Grok now opens as a 结构化聊天 on this computer and on paired Orca servers; SSH and WSL keep the terminal chat. You can rewind a conversation to an earlier message, search the model list, pick workspace files by typing `@`, and set text size, code size, width and contrast, or match your terminal, on a new Settings → Chat page. Chats are named after their first message, alert you when they stop to ask for approval, keep an unsent draft through a reload or quit, and use the Command and Arguments saved in Settings → Agents. Claude chats now open for API-key users, and Windows chats no longer refuse to start.",
      "- **SSH workspaces:** Open files, live agent tabs and paused Claude or Codex resume offers survive an SSH reconnect and a restart, and tabs you closed long ago no longer come back as empty shells. Clicking an SSH worktree whose last tab you closed opens a terminal again.",
      "- **Remote servers and the phone:** A paired terminal accepts typing again after its host app relaunches, remote browser tabs come back after a network drop, and the phone keeps every terminal after `orca serve` restarts. Starting an agent from the phone shows its tab right away and no longer moves your desktop window; creating a workspace on a remote host no longer pulls other connected desktops to it."
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.223",
    "href": "/docs/changelog#v1-4-223"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
