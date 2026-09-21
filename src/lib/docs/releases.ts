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
    "tag": "v1.4.206",
    "date": "2026-09-20",
    "dateLabel": "2026年9月20日",
    "title": "会话历史可搜，OpenCode 2，用量扫描进 worker",
    "highlights": [
      "Agent 与聊天：可在历史面板、跨机器、以及 `orca search` 里搜 Agent 会话。现已支持 **OpenCode 2**。Native Chat 把计划当计划渲染，重启时还在跑的聊天可以重连；OMP 能在桌面和移动端选模型。Source Control AI 可用 OMP 生成。",
      "工作区、编辑器与源码管理：编写器里紧凑分支选择器回来了；New Workspace 可选 base ref；diff 可折叠未改区域。审查评论支持多行范围。创建 worktree 优先 Git；WSL 删除不会带走孪生分支。",
      "终端与远程：可选默认终端 shell；搜索有匹配计数且与 Cmd+F 对齐；可配置点 URL / 中键。Windows 终端会真的启动你要的 shell。Claude、Codex 与 OpenCode 的用量扫描改在 worker 线程跑。"
    ],
    "url": "https://github.com/stablyai/orca/releases/tag/v1.4.206",
    "href": "/docs/changelog#v1-4-206"
  },
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
  }
];

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
