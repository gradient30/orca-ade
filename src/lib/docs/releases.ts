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
  }
];
