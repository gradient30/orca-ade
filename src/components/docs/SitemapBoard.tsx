import { useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";
import { pageBySlug } from "@/lib/docs/catalog";
import {
  MAP_SNAPSHOT,
  SECTION_META,
  blobHref,
  formatDriftList,
  officialHref,
  shortSha,
  type DocRow,
  type RelStatus,
  type RelRow,
} from "@/lib/docs/official-map";
import { refreshOfficialMap, useOfficialMap } from "@/lib/docs/use-official-map";

const DOC_STATUS: Record<DocRow["status"], { label: string; tone: string }> = {
  match: { label: "一致", tone: "border-border text-fg-subtle" },
  stale: { label: "待更新", tone: "border-accent text-accent" },
  added: { label: "新页", tone: "border-accent bg-accent/10 text-accent" },
  removed: { label: "官方已删", tone: "border-destructive text-destructive" },
  additive: { label: "加页", tone: "border-border text-fg-muted" },
};

const REL_STATUS: Record<RelStatus, { label: string; tone: string }> = {
  baked: { label: "已汉化", tone: "border-border text-fg-subtle" },
  pending: { label: "待汉化", tone: "border-accent text-accent" },
  edited: { label: "正文有改动", tone: "border-accent bg-accent/10 text-accent" },
  yanked: { label: "已下架", tone: "border-border text-fg-subtle line-through" },
};

function Pill({ label, tone }: { label: string; tone: string }) {
  return (
    <span className={cn("inline-flex rounded-sm border px-1.5 py-0.5 font-mono text-[11px] leading-4", tone)}>
      {label}
    </span>
  );
}

function Card({
  label,
  value,
  hint,
  alert,
}: {
  label: string;
  value: string;
  hint?: string;
  alert?: boolean;
}) {
  return (
    <div className={cn("rounded-md border bg-bg-elevated px-3 py-3", alert ? "border-accent" : "border-border")}>
      <div className="text-[11px] tracking-wide text-fg-subtle uppercase">{label}</div>
      <div className="mt-1 font-display text-lg font-medium text-fg">{value}</div>
      {hint ? <div className="mt-0.5 text-xs text-fg-subtle">{hint}</div> : null}
    </div>
  );
}

export function SitemapBoard() {
  const state = useOfficialMap();
  const [onlyOpen, setOnlyOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const docRows = useMemo(
    () => (onlyOpen ? state.docs.filter((r) => r.status !== "match" && r.status !== "additive") : state.docs),
    [onlyOpen, state.docs],
  );
  const relRows = useMemo(
    () => (onlyOpen ? state.releases.filter((r) => r.status !== "baked") : state.releases),
    [onlyOpen, state.releases],
  );

  const docsOpen = state.docs.filter((r) => r.status === "stale" || r.status === "added" || r.status === "removed").length;
  const relOpen = state.releases.filter((r) => r.status === "pending" || r.status === "edited").length;
  const officialCount = state.docs.filter((r) => r.kind === "official").length;
  const grouped = useMemo(() => {
    return SECTION_META.map((section) => ({
      ...section,
      rows: docRows.filter((r) => r.section === section.id),
    })).filter((g) => g.rows.length > 0);
  }, [docRows]);

  const sourceLabel =
    state.source === "live"
      ? "已对照官网 SHA"
      : state.source === "cache"
        ? "本机缓存（6 小时内）"
        : state.loading
          ? "正在对照官网…"
          : state.error
            ? "官网暂时不可用，先显示底稿指纹"
            : "尚未连上官网，先显示底稿指纹";

  async function copyDrift() {
    const text = formatDriftList(state.docs, state.releases);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-8 max-w-5xl" data-sitemap-board data-docs-open={docsOpen} data-rel-open={relOpen}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Card label="公开手册" value={`${officialCount} 页`} hint="官网 docs/site/content/docs" />
        <Card
          label="手册待办"
          value={docsOpen === 0 ? "无" : `${docsOpen} 处`}
          hint={docsOpen === 0 ? "SHA 与译本一致" : "只改这些页，不必全站重翻"}
          alert={docsOpen > 0}
        />
        <Card
          label="Release 待办"
          value={relOpen === 0 ? "无" : `${relOpen} 个`}
          hint={relOpen === 0 ? "顶栏三次已有中文底稿" : "新 tag 或正文被改写"}
          alert={relOpen > 0}
        />
        <Card label="指纹日期" value={MAP_SNAPSHOT.capturedAt} hint={`树 ${shortSha(state.treeSha)}`} />
      </div>

      <p className="mt-4 text-xs text-fg-subtle" data-map-source={state.source}>
        {sourceLabel}
        {state.syncedAt ? ` · ${state.syncedAt.slice(0, 16).replace("T", " ")} UTC` : null}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setOnlyOpen(false)}
          className={cn(
            "h-11 rounded-md border px-3 text-sm",
            !onlyOpen ? "border-fg bg-bg-subtle text-fg" : "border-border text-fg-muted hover:text-fg",
          )}
        >
          全部
        </button>
        <button
          type="button"
          onClick={() => setOnlyOpen(true)}
          className={cn(
            "h-11 rounded-md border px-3 text-sm",
            onlyOpen ? "border-fg bg-bg-subtle text-fg" : "border-border text-fg-muted hover:text-fg",
          )}
        >
          只看待办
        </button>
        <button
          type="button"
          onClick={() => void copyDrift()}
          className="h-11 rounded-md border border-border px-3 text-sm text-fg-muted hover:text-fg"
        >
          {copied ? "已复制" : "复制待办"}
        </button>
        <button
          type="button"
          onClick={() => void refreshOfficialMap()}
          className="h-11 rounded-md border border-border px-3 text-sm text-fg-muted hover:text-fg"
        >
          {state.loading ? "对照中…" : "重新对照"}
        </button>
      </div>

      <h2 id="map-docs" className="mt-10 scroll-mt-24 border-b border-border pb-2 font-display text-xl font-semibold tracking-tight text-fg">
        手册页
      </h2>
      <p className="mt-3 text-sm leading-6 text-fg-muted">
        状态看 SHA，不看全文。官网 blob 一变，这一行变成「待更新」，旁边就是中文页和英文原文。
      </p>
      <div className="mt-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-bg-subtle text-xs tracking-wide text-fg-subtle">
            <tr>
              <th className="px-3 py-2 font-medium">分区</th>
              <th className="px-3 py-2 font-medium">手册</th>
              <th className="px-3 py-2 font-medium">官网路径</th>
              <th className="px-3 py-2 font-medium">SHA</th>
              <th className="px-3 py-2 font-medium">状态</th>
            </tr>
          </thead>
          <tbody>
            {grouped.flatMap((group) =>
              group.rows.map((row, i) => (
                <DocTr key={row.slug} row={row} section={i === 0 ? group.title : ""} />
              )),
            )}
          </tbody>
        </table>
      </div>
      {onlyOpen && docRows.length === 0 ? <p className="mt-3 text-sm text-fg-subtle">手册没有待办。</p> : null}

      <h2 id="map-releases" className="mt-10 scroll-mt-24 border-b border-border pb-2 font-display text-xl font-semibold tracking-tight text-fg">
        Release
      </h2>
      <p className="mt-3 text-sm leading-6 text-fg-muted">
        只跟桌面版 <span className="font-mono">v主.次.补</span>。新 tag、被改写的正文、官方下架，各占一行。已有中文底稿的版本不会被词表覆盖。
      </p>
      <div className="mt-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-bg-subtle text-xs tracking-wide text-fg-subtle">
            <tr>
              <th className="px-3 py-2 font-medium">版本</th>
              <th className="px-3 py-2 font-medium">日期</th>
              <th className="px-3 py-2 font-medium">顶栏</th>
              <th className="px-3 py-2 font-medium">正文指纹</th>
              <th className="px-3 py-2 font-medium">状态</th>
            </tr>
          </thead>
          <tbody>
            {relRows.map((row) => (
              <RelTr key={row.tag} row={row} />
            ))}
          </tbody>
        </table>
      </div>
      {onlyOpen && relRows.length === 0 ? <p className="mt-3 text-sm text-fg-subtle">Release 没有待办。</p> : null}

      <h2 id="out-of-scope" className="mt-10 scroll-mt-24 border-b border-border pb-2 font-display text-xl font-semibold tracking-tight text-fg">
        不纳入对照
      </h2>
      <p className="mt-3 text-sm leading-6 text-fg-muted">
        只对照公开手册 <span className="font-mono">docs/site/content/docs</span> 下的 57 个 mdx。
        <span className="font-mono"> docs/reference</span>、<span className="font-mono">docs/relay-region-correction</span>、
        <span className="font-mono">docs/review-evidence</span> 仍是内部材料，不会出现在这张表里，也不该被加进 1:1 译本。
      </p>
    </div>
  );
}

function HandbookLink({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: ReactNode;
}) {
  if (slug === "index") {
    return (
      <Link to="/" className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link to="/docs/$" params={{ _splat: slug }} className={className}>
      {children}
    </Link>
  );
}

function DocTr({ row, section }: { row: DocRow; section: string }) {
  const page = pageBySlug(row.slug);
  const tone = DOC_STATUS[row.status];
  const shaLabel =
    row.status === "stale" || row.status === "added"
      ? `${shortSha(row.translatedAtSha)} → ${shortSha(row.liveSha ?? row.lastSeenSha)}`
      : shortSha(row.liveSha ?? row.lastSeenSha ?? row.translatedAtSha);
  return (
    <tr className="border-t border-border" data-slug={row.slug} data-status={row.status}>
      <td className="px-3 py-2 align-top text-xs text-fg-subtle">{section}</td>
      <td className="px-3 py-2 align-top">
        <HandbookLink slug={row.slug} className="text-fg hover:text-accent">
          {page?.title ?? row.slug}
        </HandbookLink>
        <div className="font-mono text-[11px] text-fg-subtle">{row.slug}</div>
      </td>
      <td className="px-3 py-2 align-top font-mono text-[11px] leading-4 text-fg-muted">
        {row.officialPath ? (
          <span className="flex flex-col gap-1">
            <span>{row.officialPath.replace("docs/site/content/docs/", "")}</span>
            <span className="flex gap-2">
              <a href={officialHref(row.slug)} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                官网
              </a>
              <a href={blobHref(row.officialPath)} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                GitHub
              </a>
            </span>
          </span>
        ) : (
          "—"
        )}
      </td>
      <td className="px-3 py-2 align-top font-mono text-[11px] text-fg-muted">{row.kind === "additive" ? "—" : shaLabel}</td>
      <td className="px-3 py-2 align-top">
        <Pill label={tone.label} tone={tone.tone} />
      </td>
    </tr>
  );
}

function RelTr({ row }: { row: RelRow }) {
  const tone = REL_STATUS[row.status];
  const shaLabel =
    row.status === "edited"
      ? `${shortSha(row.translatedAtBodySha)} → ${shortSha(row.liveBodySha)}`
      : shortSha(row.liveBodySha ?? row.translatedAtBodySha);
  return (
    <tr className="border-t border-border" data-tag={row.tag} data-status={row.status}>
      <td className="px-3 py-2 align-top">
        <Link to="/docs/$" params={{ _splat: "changelog" }} className="font-mono text-fg hover:text-accent">
          {row.tag}
        </Link>
      </td>
      <td className="px-3 py-2 align-top text-xs text-fg-muted">{row.publishedAt || "—"}</td>
      <td className="px-3 py-2 align-top text-xs text-fg-muted">{row.inFeatured ? "顶栏三次" : "—"}</td>
      <td className="px-3 py-2 align-top font-mono text-[11px] text-fg-muted">{shaLabel}</td>
      <td className="px-3 py-2 align-top">
        <Pill label={tone.label} tone={tone.tone} />
      </td>
    </tr>
  );
}
