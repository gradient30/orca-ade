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
    "tag": "v1.4.205",
    "date": "2026-09-17",
    "dateLabel": "2026年9月17日",
    "title": "聊天消息轨道，归档失败拦截删除，Codex 扫描提速",
    "highlights": [
      "Agent 与聊天：Native Chat 增加提问跳转轨道，恢复的对话钉在末尾；超时 hook 会真正终止进程树。",
      "工作区、编辑器与源码管理：归档 hook 失败会拦住 worktree 删除；暂存失败可重试；代码块可复制。",
      "终端与远程：终端重命名与 PTY 句柄在轮换后仍保留；中继失败可按阶段诊断。Codex 冷扫描从数分钟降到一分钟内。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.205",
    "href": "/docs/changelog#v1-4-205"
  },
  {
    "tag": "v1.4.204",
    "date": "2026-09-16",
    "dateLabel": "2026年9月16日",
    "title": "聊天拖放与 Fast 模式，工作区恢复",
    "highlights": [
      "Agent 与聊天：Native Chat 支持文件拖放和按提供方区分的 Fast 模式；重启后能干净恢复结构化聊天。",
      "工作区与移动端：工作区在选择 Agent 后重新播种，能从激活失败中恢复；移动端继续 typed-RPC 迁移。",
      "性能：终端文件链接改为批量检查，浏览器输入在进程内派发，并限制 WSL skill 发现范围。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.204",
    "href": "/docs/changelog#v1-4-204"
  },
  {
    "tag": "v1.4.203",
    "date": "2026-09-15",
    "dateLabel": "2026年9月15日",
    "title": "Electron 安全修复，侧栏嵌套，移动推送回归",
    "highlights": [
      "可靠性与安全：Electron 已升级以修复 glibc environ use-after-free；浏览器 cookie 迁移更稳；worktree 创建即使后续步骤失败也能干净完成。",
      "Agent 与聊天：Native Chat 能根据提供方历史恢复因重启滞留的发送；Agent 状态不再依赖运行时保留的行存储。",
      "工作区与移动端：文件夹工作区保留已保存的名称与分组；侧栏嵌套更好用；移动端恢复推送、冷启动、通知与 Markdown 行为。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.203",
    "href": "/docs/changelog#v1-4-203"
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
