import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

type DocRef = { href: string; label: string; tip: string };

type RoleCard = {
  id: string;
  role: string;
  subtitle: string;
  tone: string;
  border: string;
  mission: string;
  loop: string[];
  docs: DocRef[];
};

const ROLES: RoleCard[] = [
  {
    id: "pm",
    role: "产品经理 / 执行",
    subtitle: "把需求拆成可并行的 worktree，盯进度与交付",
    tone: "bg-accent/15 text-accent",
    border: "border-accent/50",
    mission: "用隔离的 git worktree 把功能/缺陷扇出给多个 Agent，在 Diff 与 PR 上做取舍，而不是自己写代码。",
    loop: [
      "开 worktree（按任务命名）→ 选 Agent",
      "并行赛跑或执行/复核分树",
      "看 Diff / 批注打回 → 提交推送 / 开 PR",
      "需要时用编排 Run / Task 管依赖与门禁",
    ],
    docs: [
      { href: "/docs/first-session", label: "第一次三 Agent 会话", tip: "五分钟跑通主路径" },
      { href: "/docs/model/worktrees", label: "Worktrees", tip: "一任务一树" },
      { href: "/docs/recipes/parallel-agents", label: "配方：赛跑", tip: "三模型同题" },
      { href: "/docs/review/diff-viewer", label: "Diff 查看器", tip: "认真审 AI 改动" },
      { href: "/docs/review/annotate-ai-diff", label: "批注 AI Diff", tip: "意见整批打回" },
      { href: "/docs/review/commit-push", label: "提交并推送", tip: "应用内发 PR" },
      { href: "/docs/review/linear", label: "Linear", tip: "议题 → worktree" },
      { href: "/docs/review/jira", label: "Jira", tip: "议题链到树" },
      { href: "/docs/cli/orchestration", label: "编排", tip: "Run / Task / 门禁" },
      { href: "/docs/activity", label: "Agents 动态", tip: "跨树进度一眼看完" },
    ],
  },
  {
    id: "qa",
    role: "测试管理 / 执行",
    subtitle: "独立复核树 + 探针仓，挡风险而不是跟执行者抢上下文",
    tone: "bg-destructive/15 text-destructive",
    border: "border-destructive/40",
    mission: "复核者拥有独立 worktree 与会话；探针仓写回归；Design Mode 把 UI 证据直接塞给 Agent。",
    loop: [
      "为执行分支另开复核 worktree（或恢复常驻 Codex）",
      "行内批注 → 打回执行 Agent",
      "探针仓另开树写回归 / 复现",
      "UI 问题：树内浏览器 + Design Mode 取证",
    ],
    docs: [
      { href: "/docs/quick-guide", label: "快速手册 §2–§5", tip: "执行/复核拆分" },
      { href: "/docs/recipes/review-ai-diff", label: "配方：审 Diff", tip: "逐步复核" },
      { href: "/docs/review/annotate-ai-diff", label: "批注 AI Diff", tip: "打回执行者" },
      { href: "/docs/agents/session-history", label: "会话历史", tip: "恢复常驻审核" },
      { href: "/docs/agents/hibernation", label: "Agent 休眠", tip: "空闲可暂停" },
      { href: "/docs/model/session-restore", label: "会话恢复", tip: "不要每次新建树" },
      { href: "/docs/browser/design-mode", label: "Design Mode", tip: "点选 UI 注入 Agent" },
      { href: "/docs/recipes/design-mode-fix", label: "配方：修 UI", tip: "浏览器就在树里" },
      { href: "/docs/recipes/parallel-agents", label: "配方：赛跑", tip: "多模型对照风险" },
      { href: "/docs/troubleshooting", label: "故障排除", tip: "常见卡住点" },
    ],
  },
  {
    id: "eng",
    role: "程序管理 / 执行",
    subtitle: "本机或远程算力上落地改动，终端与 CLI 一手抓",
    tone: "bg-bg-subtle text-fg",
    border: "border-border-strong",
    mission: "在 worktree 里跑 Claude / Codex / Cursor 等；本机不够就 SSH 或远程 Orca 服务器；用 CLI 脚本化重复动作。",
    loop: [
      "安装 → 加仓 → 开树 → 选 Agent",
      "终端里跑 CLI；需要时开 Native Chat",
      "远程：SSH 目标或 orca serve",
      "重复劳动：CLI / 自动化 / 编排技能",
    ],
    docs: [
      { href: "/docs/install", label: "安装", tip: "桌面端就绪" },
      { href: "/docs/agents/supported", label: "支持的 Agent", tip: "开箱列表" },
      { href: "/docs/agents/native-chat", label: "Native Chat", tip: "结构化聊天" },
      { href: "/docs/terminal", label: "终端", tip: "分屏与回滚" },
      { href: "/docs/editing/monaco", label: "编辑器", tip: "改文件与自动保存" },
      { href: "/docs/ways-to-run", label: "运行方式", tip: "本机 / SSH / 服务器" },
      { href: "/docs/ssh", label: "SSH Worktrees", tip: "远程跑 Agent" },
      { href: "/docs/remote-servers", label: "远程 Orca 服务器", tip: "持久运行时" },
      { href: "/docs/cli/overview", label: "CLI 概览", tip: "脚本化入口" },
      { href: "/docs/cli/commands", label: "命令使用", tip: "分类示例" },
      { href: "/docs/cli/automations", label: "定时自动化", tip: "计划任务" },
      { href: "/docs/settings", label: "设置", tip: "权限与实验开关" },
    ],
  },
];

export function RoleGuide() {
  return (
    <div className="mt-8 space-y-8" data-role-guide>
      <section aria-labelledby="role-matrix-title">
        <h2 id="role-matrix-title" className="scroll-mt-24 text-xl font-semibold tracking-tight text-fg">
          三角色对照矩阵
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-fg-muted">
          同一套 Orca 能力，三条上手路径。卡片只链到本站已有中文页——不发明功能。先认自己的列，再点深挖。
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {ROLES.map((r) => (
            <article
              key={r.id}
              id={`role-${r.id}`}
              className={cn("flex flex-col rounded-lg border bg-bg-elevated p-4 shadow-sm", r.border)}
            >
              <div className={cn("inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-medium", r.tone)}>
                {r.role}
              </div>
              <h3 className="mt-3 text-base font-semibold text-fg">{r.subtitle}</h3>
              <p className="mt-2 text-xs leading-5 text-fg-muted">{r.mission}</p>
              <ol className="mt-3 list-decimal space-y-1 pl-4 text-xs leading-5 text-fg">
                {r.loop.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="mt-4 border-t border-border pt-3">
                <div className="text-[11px] tracking-wide text-fg-subtle uppercase">手册深挖</div>
                <ul className="mt-2 space-y-1.5">
                  {r.docs.map((d) => (
                    <li key={d.href}>
                      <Link
                        to={d.href}
                        className="group flex items-baseline justify-between gap-2 text-xs text-accent hover:underline"
                      >
                        <span className="font-medium">{d.label}</span>
                        <span className="shrink-0 text-fg-subtle group-hover:text-fg-muted">{d.tip}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="role-shared-title" className="rounded-lg border border-border bg-bg-subtle/40 px-4 py-4">
        <h2 id="role-shared-title" className="text-sm font-semibold text-fg">
          三人共用的底座
        </h2>
        <p className="mt-1 text-xs leading-5 text-fg-muted">
          不管哪个角色，都先建立同一心智模型：Orca 编排你已付费的 Agent CLI，每件事一块真正的 git worktree。
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {[
            { href: "/", label: "Orca 是什么？" },
            { href: "/docs/quick-guide", label: "快速手册" },
            { href: "/docs/model/worktrees", label: "Worktrees" },
            { href: "/docs/model/agents-sessions", label: "Agent 与会话" },
            { href: "/docs/notifications", label: "通知" },
          ].map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-fg-muted hover:border-border-strong hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
