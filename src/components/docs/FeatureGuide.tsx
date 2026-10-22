import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

type DocChip = { href: string; label: string };

type FeatureCard = {
  id: string;
  title: string;
  blurb: string;
  why: string;
  docs: DocChip[];
};

type Tier = {
  id: "popular" | "core" | "official";
  label: string;
  hint: string;
  accent: string;
  items: FeatureCard[];
};

const TIERS: Tier[] = [
  {
    id: "popular",
    label: "高频特性",
    hint: "上手后出现最多、最容易只用一半的能力",
    accent: "border-accent/45 bg-accent/10",
    items: [
      {
        id: "worktree",
        title: "一任务一 Worktree",
        blurb: "仓库旁 + 创建真 git worktree；输家可一键删树带分支。",
        why: "隔离是并行的前提，不是可选美化。",
        docs: [
          { href: "/docs/model/worktrees", label: "Worktrees" },
          { href: "/docs/model/orca-yaml", label: "orca.yaml" },
        ],
      },
      {
        id: "race",
        title: "多 Agent 赛跑",
        blurb: "同一 prompt、多条分支、分屏对照，选出赢家再审。",
        why: "官方最短路径的核心动作。",
        docs: [
          { href: "/docs/first-session", label: "第一次三 Agent 会话" },
          { href: "/docs/recipes/parallel-agents", label: "配方：赛跑" },
          { href: "/docs/model/tabs-panes-splits", label: "分屏" },
        ],
      },
      {
        id: "diff",
        title: "Diff 批注打回",
        blurb: "行内评论整批 Send to agent；修完评论仍钉在原行。",
        why: "把「看过」变成可执行的审查闭环。",
        docs: [
          { href: "/docs/review/annotate-ai-diff", label: "批注 AI Diff" },
          { href: "/docs/recipes/review-ai-diff", label: "配方：审 Diff" },
          { href: "/docs/review/diff-viewer", label: "Diff 查看器" },
        ],
      },
      {
        id: "ship",
        title: "提交 · 推送 · PR",
        blurb: "在应用内交付；GitHub 状态与任务可一起看。",
        why: "审查完就能发出去，不必打断心流。",
        docs: [
          { href: "/docs/review/commit-push", label: "提交并推送" },
          { href: "/docs/review/github", label: "GitHub" },
        ],
      },
      {
        id: "jump",
        title: "Cmd-J 跳转",
        blurb: "在 worktree / 最近项之间跳；Shift-Enter 分屏打开。",
        why: "树一多，跳转比滚动侧栏便宜。",
        docs: [
          { href: "/docs/model/quick-open", label: "快速打开" },
          { href: "/docs/recipes/jump-worktrees", label: "跳转配方" },
        ],
      },
      {
        id: "design",
        title: "Design Mode",
        blurb: "本树浏览器点选元素，HTML/CSS/截图注入 Agent。",
        why: "UI 取证不必另开 Chrome 再截图。",
        docs: [
          { href: "/docs/browser/design-mode", label: "Design Mode" },
          { href: "/docs/recipes/design-mode-fix", label: "修 UI 配方" },
          { href: "/docs/browser/overview", label: "内置浏览器" },
        ],
      },
    ],
  },
  {
    id: "core",
    label: "核心特性",
    hint: "少了这些，多 Agent 只是多个终端窗口",
    accent: "border-border-strong bg-bg-subtle/60",
    items: [
      {
        id: "sessions",
        title: "Agent 与会话",
        blurb: "状态圆点、Restart 芯片、会话生命周期。",
        why: "你编排的是会话，不只是进程。",
        docs: [
          { href: "/docs/model/agents-sessions", label: "Agent 与会话" },
          { href: "/docs/agents/supported", label: "支持的 Agent" },
        ],
      },
      {
        id: "restore",
        title: "恢复 · 休眠 · 历史",
        blurb: "关窗口可恢复；空闲可休眠；transcript 可 Resume。",
        why: "常驻复核靠续会话，不靠每次冷启动。",
        docs: [
          { href: "/docs/model/session-restore", label: "会话恢复" },
          { href: "/docs/agents/hibernation", label: "休眠" },
          { href: "/docs/agents/session-history", label: "会话历史" },
        ],
      },
      {
        id: "terminal",
        title: "终端与编辑",
        blurb: "树内终端分屏回滚；Monaco 自动保存；文件树带 git 状态。",
        why: "实现与审查都在同一 worktree 上下文。",
        docs: [
          { href: "/docs/terminal", label: "终端" },
          { href: "/docs/editing/monaco", label: "编辑器" },
          { href: "/docs/editing/file-explorer", label: "文件浏览器" },
        ],
      },
      {
        id: "attribution",
        title: "归因",
        blurb: "看清一段改动来自哪个 Agent。",
        why: "多 Agent 合入前要分得清责任边界。",
        docs: [{ href: "/docs/review/attribution", label: "归因" }],
      },
      {
        id: "activity",
        title: "通知与动态",
        blurb: "完成、阻塞、预览的跨树时间线。",
        why: "并行时靠信号，不靠轮询。",
        docs: [
          { href: "/docs/notifications", label: "通知" },
          { href: "/docs/activity", label: "Agents 动态" },
        ],
      },
      {
        id: "remote",
        title: "远程算力（可选）",
        blurb: "SSH worktree、自托管服务器、按工作区环境——算力在你控制的机器上。",
        why: "笔记本不够时加层，不替换 IDE。",
        docs: [
          { href: "/docs/ways-to-run", label: "运行方式" },
          { href: "/docs/ssh", label: "SSH" },
          { href: "/docs/remote-servers", label: "远程服务器" },
        ],
      },
    ],
  },
  {
    id: "official",
    label: "官方推荐",
    hint: "文档反复强调的串法——不是新按钮",
    accent: "border-destructive/35 bg-destructive/10",
    items: [
      {
        id: "shortest",
        title: "先跑通最短路径",
        blurb: "加仓 → 开树 → Agent → 赛跑 → 分屏 → diff → 发出去。",
        why: "其他页都是其中某一步的深挖。",
        docs: [{ href: "/docs/first-session", label: "第一次三 Agent 会话" }],
      },
      {
        id: "split-roles",
        title: "执行 / 复核拆开",
        blurb: "执行者一棵树，复核者另一棵（或 Resume 换角色）。",
        why: "「改」和「挡」不要塞进同一提示。",
        docs: [
          { href: "/docs/quick-guide#2-execute-plus-review", label: "快速手册 §2" },
          { href: "/docs/model/agents-sessions", label: "Agent 与会话" },
        ],
      },
      {
        id: "standing-review",
        title: "常驻复核",
        blurb: "固定 review 树；Resume / 休眠，而不是每次新会话重喂规矩。",
        why: "额度、口径、速度差最多的一条。",
        docs: [
          { href: "/docs/quick-guide#4-standing-codex-review", label: "快速手册 §4" },
          { href: "/docs/agents/hibernation", label: "休眠" },
        ],
      },
      {
        id: "ui-first",
        title: "UI 是主路径",
        blurb: "日常创建树、分屏、diff、提交都在窗口里完成。",
        why: "CLI 给脚本化与 Agent 调工具，不是唯一入口。",
        docs: [
          { href: "/docs/quick-guide#7-ui-is-the-main-path", label: "快速手册 §7" },
          { href: "/docs/cli/overview", label: "CLI 概览" },
        ],
      },
      {
        id: "orch-on-demand",
        title: "编排按需",
        blurb: "未装编排技能仍可用 UI 派活；要门禁再装 orchestration。",
        why: "避免把「技能未安装」误读成不能开工。",
        docs: [
          { href: "/docs/cli/orchestration", label: "编排" },
          { href: "/docs/cli/skills", label: "技能注册表" },
        ],
      },
      {
        id: "issue-to-tree",
        title: "议题进树",
        blurb: "Linear / Jira 链到 worktree，规格有出处。",
        why: "标准 SE 路径从可追踪的议题开始。",
        docs: [
          { href: "/docs/review/linear", label: "Linear" },
          { href: "/docs/review/jira", label: "Jira" },
        ],
      },
    ],
  },
];

const SE_STEPS: {
  n: number;
  title: string;
  detail: string;
  docs: DocChip[];
}[] = [
  {
    n: 1,
    title: "规格 / 议题",
    detail: "议题或可引用说明进 Orca；任务名也可当摘要。",
    docs: [
      { href: "/docs/review/linear", label: "Linear" },
      { href: "/docs/review/jira", label: "Jira" },
    ],
  },
  {
    n: 2,
    title: "一任务一树",
    detail: "从 base ref 开 worktree；需要时用 orca.yaml setup。",
    docs: [
      { href: "/docs/model/worktrees", label: "Worktrees" },
      { href: "/docs/model/orca-yaml", label: "orca.yaml" },
    ],
  },
  {
    n: 3,
    title: "选 Agent 实现",
    detail: "在树内启动执行 Agent（终端或 Native Chat）。",
    docs: [
      { href: "/docs/agents/supported", label: "支持的 Agent" },
      { href: "/docs/agents/native-chat", label: "Native Chat" },
    ],
  },
  {
    n: 4,
    title: "并行或分角色",
    detail: "同题赛跑，或执行树 / 复核树拆开。",
    docs: [
      { href: "/docs/recipes/parallel-agents", label: "赛跑" },
      { href: "/docs/quick-guide#2-execute-plus-review", label: "执行/复核" },
    ],
  },
  {
    n: 5,
    title: "Diff 批注闭环",
    detail: "审 diff，意见整批打回，再改到可合。",
    docs: [
      { href: "/docs/review/annotate-ai-diff", label: "批注" },
      { href: "/docs/review/diff-viewer", label: "Diff" },
    ],
  },
  {
    n: 6,
    title: "提交推送开 PR",
    detail: "在赢家树上交付；看 GitHub 检查。",
    docs: [
      { href: "/docs/review/commit-push", label: "提交并推送" },
      { href: "/docs/review/github", label: "GitHub" },
    ],
  },
  {
    n: 7,
    title: "盯进度 · 清场",
    detail: "通知/动态看完成与阻塞；删淘汰树。",
    docs: [
      { href: "/docs/notifications", label: "通知" },
      { href: "/docs/activity", label: "动态" },
    ],
  },
  {
    n: 8,
    title: "门禁 / 远程（可选）",
    detail: "依赖门用编排；算力不够再 SSH / 远程服务器。",
    docs: [
      { href: "/docs/cli/orchestration", label: "编排" },
      { href: "/docs/ssh", label: "SSH" },
    ],
  },
];

function ChipLink({ href, label }: DocChip) {
  const hashIdx = href.indexOf("#");
  const path = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
  const hash = hashIdx >= 0 ? href.slice(hashIdx + 1) : undefined;
  return (
    <Link
      to={path}
      {...(hash ? { hash } : {})}
      className="rounded-full border border-border bg-bg-elevated px-2 py-0.5 text-[11px] text-accent hover:border-border-strong hover:underline"
    >
      {label}
    </Link>
  );
}

export function FeatureGuide() {
  const [tierId, setTierId] = useState<Tier["id"]>("popular");
  const [step, setStep] = useState(1);
  const tier = useMemo(() => TIERS.find((t) => t.id === tierId) ?? TIERS[0], [tierId]);
  const activeStep = useMemo(() => SE_STEPS.find((s) => s.n === step) ?? SE_STEPS[0], [step]);

  return (
    <div className="mt-8 space-y-10" data-feature-guide>
      <section aria-labelledby="feature-tiers-title">
        <h2 id="feature-tiers-title" className="scroll-mt-24 text-xl font-semibold tracking-tight text-fg">
          三层特性看板
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-fg-muted">
          高频是你天天点的；核心是心智模型；官方推荐是串法。卡片只链到本站已有中文页。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {TIERS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTierId(t.id)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-xs font-medium transition-colors",
                tierId === t.id
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-border bg-bg-elevated text-fg-muted hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-fg-subtle">{tier.hint}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {tier.items.map((item) => (
            <article
              key={item.id}
              className={cn("flex flex-col rounded-lg border p-4 shadow-sm", tier.accent)}
            >
              <h3 className="text-sm font-semibold text-fg">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-fg-muted">{item.blurb}</p>
              <p className="mt-2 text-[11px] leading-4 text-fg-subtle">为什么重要：{item.why}</p>
              <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
                {item.docs.map((d) => (
                  <ChipLink key={d.href} {...d} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="se-pipeline-title">
        <h2 id="se-pipeline-title" className="scroll-mt-24 text-xl font-semibold tracking-tight text-fg">
          标准 SE 路径 · 逐步点开
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-fg-muted">
          从规格到 PR 的八步。每一步都映射到真实手册页——把「多 Agent + 贴规格」补成可审查、可恢复的工程闭环。
        </p>

        {/* Pipeline rail */}
        <ol className="mt-5 flex gap-1 overflow-x-auto pb-2">
          {SE_STEPS.map((s, i) => (
            <li key={s.n} className="flex min-w-0 flex-1 items-stretch gap-1">
              <button
                type="button"
                onClick={() => setStep(s.n)}
                className={cn(
                  "flex w-full min-w-[4.5rem] flex-col items-start rounded-md border px-2 py-2 text-left transition-colors",
                  step === s.n
                    ? "border-accent bg-accent/15 text-fg"
                    : "border-border bg-bg-elevated text-fg-muted hover:border-border-strong hover:text-fg",
                )}
              >
                <span className="font-mono text-[10px] text-accent">0{s.n}</span>
                <span className="mt-0.5 line-clamp-2 text-[11px] font-medium leading-4">{s.title}</span>
              </button>
              {i < SE_STEPS.length - 1 ? (
                <span className="hidden shrink-0 self-center text-fg-subtle sm:inline" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="mt-3 rounded-lg border border-border bg-bg-elevated p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-fg">
              <span className="font-mono text-accent">步骤 {activeStep.n}</span>
              <span className="mx-2 text-fg-subtle">·</span>
              {activeStep.title}
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={step <= 1}
                onClick={() => setStep((n) => Math.max(1, n - 1))}
                className="rounded-md border border-border px-2.5 py-1 text-xs text-fg-muted enabled:hover:text-fg disabled:opacity-40"
              >
                上一步
              </button>
              <button
                type="button"
                disabled={step >= SE_STEPS.length}
                onClick={() => setStep((n) => Math.min(SE_STEPS.length, n + 1))}
                className="rounded-md border border-border px-2.5 py-1 text-xs text-fg-muted enabled:hover:text-fg disabled:opacity-40"
              >
                下一步
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm leading-6 text-fg-muted">{activeStep.detail}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {activeStep.docs.map((d) => (
              <ChipLink key={d.href} {...d} />
            ))}
          </div>

          {/* Simple progress bars — visual weight, not analytics vanity */}
          <div className="mt-5 grid gap-2 sm:grid-cols-8">
            {SE_STEPS.map((s) => (
              <div key={s.n} className="space-y-1">
                <div className="h-1.5 overflow-hidden rounded-full bg-bg-subtle">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      s.n <= step ? "w-full bg-accent" : "w-0 bg-transparent",
                    )}
                  />
                </div>
                <div className="truncate text-[10px] text-fg-subtle">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="feature-map-title"
        className="rounded-lg border border-border bg-bg-subtle/40 px-4 py-4"
      >
        <h2 id="feature-map-title" className="text-sm font-semibold text-fg">
          和本站其它入口的关系
        </h2>
        <p className="mt-1 text-xs leading-5 text-fg-muted">
          特性手册讲「用哪些能力、按什么工程顺序」；快速手册讲「每天最高频 8 件事」；按角色上手讲「我是谁先点哪几篇」。
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {[
            { href: "/docs/features", label: "本页 · 特性手册" },
            { href: "/docs/quick-guide", label: "快速手册" },
            { href: "/docs/roles", label: "按角色上手" },
            { href: "/docs/first-session", label: "第一次三 Agent 会话" },
            { href: "/", label: "Orca 是什么？" },
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
