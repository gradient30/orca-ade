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
  },
  {
    "tag": "v1.4.227",
    "date": "2026-10-16",
    "dateLabel": "2026年10月16日",
    "title": "Native Chat 拥有独立权限模式，会话更易继续",
    "highlights": [
      "Native Chat 拥有自己的权限模式。从 Settings → Chat → Behavior 为每个新的 Claude 或 Codex 聊天选择权限；现有聊天保持已使用的模式，更换模型不再重置它。",
      "Native Chat 会话更容易继续。可以在新 Native Chat 中恢复大型终端对话，恢复后台工作的聊天，并在 Session History 中准确显示每一个支持的聊天提供方。",
      "Claude 账户和 Codex 聊天设置更顺畅。Claude 账户再次使用单独文件夹，可复制登录链接，Codex 聊天要求 0.136.0 或更高，Codex Ultrafast 可作为速度选择。浏览器自动化可靠归还键盘。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.227",
    "href": "/docs/changelog#v1-4-227"
  },
  {
    "tag": "v1.4.224",
    "date": "2026-10-10",
    "dateLabel": "2026年10月10日",
    "title": "自动化可按次指定模型与 effort，SSH 主机改跑托管 Orca 服务器",
    "highlights": [
      "自动化现在可以为每次运行指定 Agent 的模型和 effort（在 Advanced 填 Extra agent arguments，或用 --extra-agent-args）。目前支持 Claude、Codex、Grok、CodeBuddy、Cursor 和 OMP，每次运行开启全新会话。已有工作区的定时任务会交给启动后读取的 Agent。",
      "SSH 主机现在运行 Orca 自带的托管服务器，连接时自动设置，不再因 Node 版本或缺少构建工具失败。无打开终端的主机下次连接时切换并带上项目和标签；有终端的提供 Move to a managed Orca server。可在 Settings → Managed servers 查看、更新、回滚、Recover 或 Forget。",
      "实验性 Native Chat：Chat UI 打开且默认为聊天时，支持的 Agent 默认以结构化聊天打开。可在标签右键或 Session History 中在聊天与终端间移动。OpenCode（含 2.x）、Pi、OMP 支持结构化聊天；可在回复内绘制图表（可关闭），Cmd/Ctrl+F 搜索，Add to chat 引用，数字键回答问题。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.224",
    "href": "/docs/changelog#v1-4-224"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
