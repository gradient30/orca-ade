export type DocLink = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export type NavNode =
  | { kind: "label"; title: string }
  | { kind: "link"; slug: string; title: string; href: string }
  | { kind: "folder"; title: string; children: DocLink[] };

export const PAGES: DocLink[] = [
  {
    slug: "quick-guide",
    title: "快速手册",
    description: "核心能力与日常最高频用法：真实示例、场景和收益。",
    href: "/docs/quick-guide",
  },
  {
    slug: "changelog",
    title: "更新日志",
    description: "自动抓取官方最近三次 Release，译成完整中文日志。",
    href: "/docs/changelog",
  },
  {
    slug: "architecture",
    title: "本站架构",
    description: "手册页面怎么拼起来，以及更新日志如何跟着官方 Release 走。",
    href: "/docs/architecture",
  },
  {
    slug: "sitemap",
    title: "对照表",
    description: "官网 57 页与 Release 的指纹对照：SHA 一变就能定位要改哪一页。",
    href: "/docs/sitemap",
  },
  { slug: "index", title: "Orca 是什么？", description: "60 秒说明：Orca 为谁而做、何时该用。", href: "/" },
  { slug: "install", title: "安装", description: "下载 macOS、Windows 或 Linux 版本，并可选加入 RC 构建。", href: "/docs/install" },
  { slug: "first-session", title: "第一次三 Agent 会话", description: "从空应用到三个 Agent 并行，五分钟内发出一个 PR。", href: "/docs/first-session" },
  { slug: "model/worktrees", title: "Worktrees", description: "Orca 如何把每个功能或缺陷变成独立的 git worktree。", href: "/docs/model/worktrees" },
  { slug: "model/tabs-panes-splits", title: "标签、窗格与分屏", description: "在一个 worktree 里安排终端、编辑器和浏览器。", href: "/docs/model/tabs-panes-splits" },
  { slug: "model/agents-sessions", title: "Agent 与会话", description: "状态圆点、重启芯片，以及一次 Agent 会话的生命周期。", href: "/docs/model/agents-sessions" },
  { slug: "model/session-restore", title: "会话恢复", description: "退出再打开，worktree、分屏、回滚缓冲和焦点原样回来。", href: "/docs/model/session-restore" },
  { slug: "model/quick-open", title: "快速打开与跳转面板", description: "用 Cmd-J 在 worktree、最近项和标签之间跳转。", href: "/docs/model/quick-open" },
  { slug: "agents/supported", title: "支持的 Agent", description: "Orca 开箱即用的全部 Agent。", href: "/docs/agents/supported" },
  { slug: "agents/claude-code", title: "在 Orca 中使用 Claude Code", description: "账户感知启动、用量跟踪与账户热切换。", href: "/docs/agents/claude-code" },
  { slug: "agents/glm-agent", title: "在 Orca ADE 中使用 GLM-5.2", description: "通过已有 CLI harness 在 worktree 里跑 GLM-5.2。", href: "/docs/agents/glm-agent" },
  { slug: "agents/codex", title: "在 Orca 中使用 Codex", description: "把 OpenAI Codex CLI 作为一等终端 Agent 运行。", href: "/docs/agents/codex" },
  { slug: "agents/cursor-cli", title: "Cursor CLI", description: "在 Orca 里启动 Cursor 的 CLI Agent。", href: "/docs/agents/cursor-cli" },
  { slug: "agents/codex-hot-swap", title: "热切换 Codex 账户", description: "在不中断会话的情况下切换 Codex 账户。", href: "/docs/agents/codex-hot-swap" },
  { slug: "agents/native-chat", title: "Native Chat", description: "结构化聊天界面，而不是纯终端。", href: "/docs/agents/native-chat" },
  { slug: "agents/session-history", title: "Agent 会话历史", description: "从磁盘 transcript 恢复过去的会话。", href: "/docs/agents/session-history" },
  { slug: "agents/hibernation", title: "Agent 休眠", description: "空闲终端自动暂停，重新打开时恢复同一会话。", href: "/docs/agents/hibernation" },
  { slug: "agents/usage-tracking", title: "用量与速率限制跟踪", description: "查看 Claude 与 Codex 用量及重置时间。", href: "/docs/agents/usage-tracking" },
  { slug: "agents/hooks-memory", title: "Hooks 与 Memory", description: "各仓 hooks、记忆文件如何被 Orca 中的 Agent 读取。", href: "/docs/agents/hooks-memory" },
  { slug: "review/diff-viewer", title: "Diff 查看器", description: "认真审查 AI 生成的代码，而不是扫一眼。", href: "/docs/review/diff-viewer" },
  { slug: "review/annotate-ai-diff", title: "批注 AI Diff", description: "在 diff 行上留下评论并打回给 Agent。", href: "/docs/review/annotate-ai-diff" },
  { slug: "review/attribution", title: "归因", description: "看清一段改动来自哪个 Agent。", href: "/docs/review/attribution" },
  { slug: "review/commit-push", title: "从 Orca 提交并推送", description: "在应用内提交、推送并打开 PR。", href: "/docs/review/commit-push" },
  { slug: "review/github", title: "GitHub 集成", description: "在 Orca 中浏览 PR、检查状态与任务。", href: "/docs/review/github" },
  { slug: "review/linear", title: "Linear 集成", description: "从 Linear 议题直接打开 worktree。", href: "/docs/review/linear" },
  { slug: "review/jira", title: "Jira 集成", description: "把 Jira 议题链到 worktree。", href: "/docs/review/jira" },
  { slug: "editing/monaco", title: "编辑器", description: "带自动保存的 VS Code 风格编辑器。", href: "/docs/editing/monaco" },
  { slug: "editing/markdown", title: "Markdown", description: "仓库文档的富预览与编辑。", href: "/docs/editing/markdown" },
  { slug: "editing/viewers", title: "富预览", description: "内联预览 Markdown、图片、PDF 与仓库文档。", href: "/docs/editing/viewers" },
  { slug: "editing/file-explorer", title: "文件浏览器", description: "实时文件树、拖放与 git 状态。", href: "/docs/editing/file-explorer" },
  { slug: "browser/overview", title: "内置浏览器", description: "每个 worktree 的 Chromium 标签。", href: "/docs/browser/overview" },
  { slug: "browser/design-mode", title: "Design Mode", description: "点击页面元素，把 HTML/CSS/截图注入 Agent。", href: "/docs/browser/design-mode" },
  { slug: "browser/profiles", title: "浏览器配置档", description: "隔离 cookie 与登录态。", href: "/docs/browser/profiles" },
  { slug: "terminal", title: "终端", description: "Ghostty 级终端：WebGL、无限分屏、持久回滚。", href: "/docs/terminal" },
  { slug: "ways-to-run", title: "运行 Orca 的方式", description: "本机、SSH、自托管服务器与按工作区云虚拟机。", href: "/docs/ways-to-run" },
  { slug: "ssh", title: "SSH Worktrees", description: "在远程机器上跑 Agent，本机保留编辑与 diff。", href: "/docs/ssh" },
  { slug: "remote-servers", title: "远程 Orca 服务器", description: "把桌面或 orca serve 作为持久运行时。", href: "/docs/remote-servers" },
  { slug: "cli/overview", title: "Orca CLI 概览", description: "用命令脚本化 worktree、终端与内置浏览器。", href: "/docs/cli/overview" },
  { slug: "cli/commands", title: "命令使用", description: "按 orca help 分类的全部命令：中文说明、用法和真实示例。", href: "/docs/cli/commands" },
  { slug: "cli/reference", title: "Orca CLI 参考", description: "选择器、setup 标志、父子 worktree 与完整命令表。", href: "/docs/cli/reference" },
  { slug: "cli/orchestration", title: "编排", description: "用 Run、任务、受监督 worker、消息与决策门协调 Agent。", href: "/docs/cli/orchestration" },
  { slug: "cli/automations", title: "定时自动化", description: "创建、检查、运行和删除计划任务。", href: "/docs/cli/automations" },
  { slug: "cli/computer-use", title: "Computer Use", description: "通过无障碍树安全操作桌面应用。", href: "/docs/cli/computer-use" },
  { slug: "cli/worktree-checkpoints", title: "Worktree 检查点", description: "给 worktree 打快照并回滚。", href: "/docs/cli/worktree-checkpoints" },
  { slug: "cli/skills", title: "技能注册表与 MCP", description: "安装 orca-cli、orchestration、computer-use。", href: "/docs/cli/skills" },
  { slug: "mobile", title: "移动伴侣", description: "从手机监视并引导 Agent。", href: "/docs/mobile" },
  { slug: "android-apk", title: "Android APK", description: "安装 Android 伴侣应用。", href: "/docs/android-apk" },
  { slug: "notifications", title: "通知", description: "Agent 完成或需要你时发出通知。", href: "/docs/notifications" },
  { slug: "activity", title: "Agents 动态", description: "跨 worktree 的完成、阻塞与预览时间线。", href: "/docs/activity" },
  { slug: "recipes/parallel-agents", title: "让三个 Agent 赛跑同一任务", description: "同一 prompt、三条分支、选出赢家。", href: "/docs/recipes/parallel-agents" },
  { slug: "recipes/review-ai-diff", title: "审查 AI Diff", description: "用批注把意见打回 Agent。", href: "/docs/recipes/review-ai-diff" },
  { slug: "recipes/jump-worktrees", title: "在 Worktree 之间跳转", description: "用跳转面板快速切换上下文。", href: "/docs/recipes/jump-worktrees" },
  { slug: "recipes/design-mode-fix", title: "用 Design Mode 修 UI", description: "点击元素，把上下文交给 Agent。", href: "/docs/recipes/design-mode-fix" },
  { slug: "recipes/remote-worktrees", title: "通过 SSH 在远程机器上工作", description: "远程执行、本机审查。", href: "/docs/recipes/remote-worktrees" },
  { slug: "settings", title: "设置参考", description: "General、Agents、Terminal、SSH、Experimental。", href: "/docs/settings" },
  { slug: "telemetry", title: "遥测与隐私", description: "Orca 收集什么、不收集什么。", href: "/docs/telemetry" },
  { slug: "troubleshooting", title: "故障排除与 FAQ", description: "Agent 起不来、diff 卡住、CLI 找不到。", href: "/docs/troubleshooting" },
  { slug: "github-errors", title: "GitHub 错误排查", description: "速率限制、鉴权失败与 Tasks 刷新问题。", href: "/docs/github-errors" },
];

export const NAV: NavNode[] = [
  { kind: "label", title: "从这里开始" },
  { kind: "link", slug: "quick-guide", title: "快速手册", href: "/docs/quick-guide" },
  { kind: "link", slug: "changelog", title: "更新日志", href: "/docs/changelog" },
  { kind: "link", slug: "architecture", title: "本站架构", href: "/docs/architecture" },
  { kind: "link", slug: "sitemap", title: "对照表", href: "/docs/sitemap" },
  { kind: "link", slug: "index", title: "Orca 是什么？", href: "/" },
  { kind: "link", slug: "install", title: "安装", href: "/docs/install" },
  { kind: "link", slug: "first-session", title: "第一次三 Agent 会话", href: "/docs/first-session" },
  { kind: "folder", title: "Orca 模型", children: PAGES.filter((p) => p.slug.startsWith("model/")) },
  { kind: "folder", title: "使用 Agent", children: PAGES.filter((p) => p.slug.startsWith("agents/")) },
  { kind: "folder", title: "审查与交付", children: PAGES.filter((p) => p.slug.startsWith("review/")) },
  { kind: "folder", title: "在 Orca 中编辑", children: PAGES.filter((p) => p.slug.startsWith("editing/")) },
  { kind: "folder", title: "浏览器与 Design Mode", children: PAGES.filter((p) => p.slug.startsWith("browser/")) },
  { kind: "label", title: "终端" },
  { kind: "link", slug: "terminal", title: "终端", href: "/docs/terminal" },
  { kind: "label", title: "远程与 SSH" },
  { kind: "link", slug: "ways-to-run", title: "运行 Orca 的方式", href: "/docs/ways-to-run" },
  { kind: "link", slug: "ssh", title: "SSH Worktrees", href: "/docs/ssh" },
  { kind: "link", slug: "remote-servers", title: "远程 Orca 服务器", href: "/docs/remote-servers" },
  { kind: "label", title: "CLI 与自动化" },
  { kind: "folder", title: "Orca CLI 与技能", children: PAGES.filter((p) => p.slug.startsWith("cli/")) },
  { kind: "label", title: "移动端" },
  { kind: "link", slug: "mobile", title: "移动伴侣", href: "/docs/mobile" },
  { kind: "link", slug: "android-apk", title: "Android APK", href: "/docs/android-apk" },
  { kind: "label", title: "通知与收件箱" },
  { kind: "link", slug: "notifications", title: "通知", href: "/docs/notifications" },
  { kind: "link", slug: "activity", title: "Agents 动态", href: "/docs/activity" },
  { kind: "folder", title: "配方", children: PAGES.filter((p) => p.slug.startsWith("recipes/")) },
  { kind: "label", title: "设置参考" },
  { kind: "link", slug: "settings", title: "设置", href: "/docs/settings" },
  { kind: "label", title: "隐私与遥测" },
  { kind: "link", slug: "telemetry", title: "遥测与隐私", href: "/docs/telemetry" },
  { kind: "label", title: "故障排除" },
  { kind: "link", slug: "troubleshooting", title: "故障排除与 FAQ", href: "/docs/troubleshooting" },
  { kind: "link", slug: "github-errors", title: "GitHub 错误排查", href: "/docs/github-errors" },
];

export function pageBySlug(slug: string): DocLink | undefined {
  const key = slug === "" || slug === "docs" ? "index" : slug.replace(/\/$/, "");
  return PAGES.find((p) => p.slug === key);
}

export function neighbors(slug: string): { prev?: DocLink; next?: DocLink } {
  const i = PAGES.findIndex((p) => p.slug === slug);
  if (i < 0) return {};
  return { prev: PAGES[i - 1], next: PAGES[i + 1] };
}
