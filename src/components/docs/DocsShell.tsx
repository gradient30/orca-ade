import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Folder, FolderOpen, Layers, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV, neighbors, pageBySlug, type DocLink, type NavNode } from "@/lib/docs/catalog";
import { getMarkdown, peekMarkdown } from "@/lib/docs/load";
import { prefetchDocPage } from "@/lib/docs/prefetch-page";
import { sliceChangelogMarkdown } from "@/lib/docs/changelog-window";
import { DeferredMount } from "./DeferredMount";
import { searchDocs } from "@/lib/docs/search";
import { extractToc, Markdown } from "./Markdown";
import { ThemeSwitch } from "./ThemeSwitch";
import { UpdateEntry } from "./UpdateEntry";
import { SyncDot } from "./SyncDot";
import { readStoredTheme } from "@/lib/theme";
import { useOrcaReleases } from "@/lib/docs/use-releases";
import { CLI_COMMAND_TOC } from "@/lib/docs/cli-toc";
import {
  activeHighlightCount,
  groupHasHighlight,
  highlightedSections,
  isPageHighlighted,
  isSectionHighlighted,
} from "@/lib/docs/sync-highlights";
import { useSyncHighlights } from "@/lib/docs/use-sync-highlights";


const CommandCatalog = lazy(() =>
  import("./CommandCatalog").then((m) => ({ default: m.CommandCatalog })),
);
const SitemapBoard = lazy(() => import("./SitemapBoard").then((m) => ({ default: m.SitemapBoard })));
const RoleGuide = lazy(() => import("./RoleGuide").then((m) => ({ default: m.RoleGuide })));
const FeatureGuide = lazy(() =>
  import("./FeatureGuide").then((m) => ({ default: m.FeatureGuide })),
);


const SITEMAP_TOC = [
  { id: "how-to-use", text: "怎么用", level: 2 },
  { id: "map-docs", text: "手册页", level: 2 },
  { id: "map-releases", text: "Release", level: 2 },
  { id: "out-of-scope", text: "不纳入对照", level: 2 },
];

function hrefFor(slug: string) {
  return slug === "index" ? "/" : `/docs/${slug}`;
}

type NavHighlightProps = {
  pageHighlighted: (slug: string) => boolean;
  groupHighlighted: (childSlugs: string[]) => boolean;
  onVisitPage?: (slug: string) => void;
};

function NavList({
  current,
  onNavigate,
  pageHighlighted,
  groupHighlighted,
  onVisitPage,
}: {
  current: string;
  onNavigate?: () => void;
} & NavHighlightProps) {
  return (
    <nav className="space-y-4 pb-10">
      {NAV.map((node, i) => (
        <NavItem
          key={i}
          node={node}
          current={current}
          onNavigate={onNavigate}
          pageHighlighted={pageHighlighted}
          groupHighlighted={groupHighlighted}
          onVisitPage={onVisitPage}
        />
      ))}
    </nav>
  );
}

function NavItem({
  node,
  current,
  onNavigate,
  pageHighlighted,
  groupHighlighted,
  onVisitPage,
}: {
  node: NavNode;
  current: string;
  onNavigate?: () => void;
} & NavHighlightProps) {
  if (node.kind === "label") {
    return (
      <div
        className="mt-1 flex items-center gap-2 px-3 pb-1 pt-3 text-[11px] font-bold tracking-[0.12em] text-accent uppercase"
        role="presentation"
      >
        <Layers className="size-3.5 shrink-0 opacity-90" aria-hidden />
        <span className="min-w-0 truncate">{node.title}</span>
      </div>
    );
  }
  if (node.kind === "link") {
    const active = current === node.slug;
    const hot = pageHighlighted(node.slug);
    return (
      <Link
        to={node.href}
        preload="intent"
        onMouseEnter={() => prefetchDocPage(node.slug)}
        onFocus={() => prefetchDocPage(node.slug)}
        onClick={() => {
          onVisitPage?.(node.slug);
          onNavigate?.();
        }}
        className={cn(
          "flex items-center gap-2 rounded-sm px-3 py-2 text-sm leading-5",
          active ? "bg-bg-subtle text-fg" : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
        )}
      >
        <span className="min-w-0 flex-1 truncate">{node.title}</span>
        {hot ? <SyncDot size="lg" /> : null}
      </Link>
    );
  }
  const openDefault = node.children.some((c) => c.slug === current);
  const [open, setOpen] = useState(openDefault);
  useEffect(() => {
    if (openDefault) setOpen(true);
  }, [openDefault]);
  const childSlugs = node.children.map((c) => c.slug);
  const groupHot = groupHighlighted(childSlugs);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-11 w-full items-center justify-between gap-2 rounded-sm px-3 py-2 text-left text-sm font-semibold text-accent hover:bg-bg-subtle hover:text-accent"
      >
        <span className="inline-flex min-w-0 items-center gap-2">
          {open ? (
            <FolderOpen className="size-4 shrink-0 opacity-90" aria-hidden />
          ) : (
            <Folder className="size-4 shrink-0 opacity-90" aria-hidden />
          )}
          <span className="truncate">{node.title}</span>
          {groupHot ? <SyncDot size="lg" /> : null}
        </span>
        <ChevronDown
          className={cn("size-3.5 shrink-0 text-accent/80 transition-transform", open ? "rotate-0" : "-rotate-90")}
          aria-hidden
        />
      </button>
      {open ? (
        <div className="ml-2 border-l border-border pl-1">
          {node.children.map((c) => {
            const hot = pageHighlighted(c.slug);
            return (
              <Link
                key={c.slug}
                to={c.href}
                preload="intent"
                onMouseEnter={() => prefetchDocPage(c.slug)}
                onFocus={() => prefetchDocPage(c.slug)}
                onClick={() => {
                  onVisitPage?.(c.slug);
                  onNavigate?.();
                }}
                className={cn(
                  "flex items-center gap-2 rounded-sm px-3 py-2 text-sm leading-5",
                  current === c.slug ? "bg-bg-subtle text-fg" : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
                )}
              >
                <span className="min-w-0 flex-1 truncate">{c.title}</span>
                {hot ? <SyncDot size="lg" /> : null}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const hits = useMemo(() => searchDocs(q), [q]);
  useEffect(() => {
    if (!open) setQ("");
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-bg/70 px-3 pt-[12vh]" onClick={onClose}>
      <div
        className="w-full max-w-xl overflow-hidden rounded-lg border border-border bg-bg-elevated shadow-overlay"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border px-3">
          <Search className="size-4 text-fg-subtle" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="搜索手册…"
            className="h-12 w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle"
          />
          <kbd className="hidden rounded-xs border border-border px-1.5 py-0.5 text-xs text-fg-subtle sm:block">
            ESC
          </kbd>
        </div>
        <div className="max-h-[50vh] overflow-y-auto py-2">
          {q && hits.length === 0 ? (
            <p className="px-4 py-6 text-sm text-fg-subtle">没有匹配的章节。</p>
          ) : (
            hits.map((h) => (
              <Link
                key={h.hash ? `${h.slug}#${h.hash}` : h.slug}
                to={hrefFor(h.slug)}
                hash={h.hash ?? ""}
                preload="intent"
                onMouseEnter={() => prefetchDocPage(h.slug)}
                onFocus={() => prefetchDocPage(h.slug)}
                onClick={onClose}
                className="block px-4 py-2.5 hover:bg-bg-subtle"
              >
                <div className="text-sm text-fg">{h.titleLine}</div>
                <div className="mt-0.5 line-clamp-2 text-xs text-fg-subtle">{h.snippet}</div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function scrollToHash(raw: string) {
  const id = decodeURIComponent(raw.replace(/^#/, ""));
  if (!id) {
    window.scrollTo({ top: 0 });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function DocsShell({ slug }: { slug: string }) {
  const page = pageBySlug(slug);
  const live = useOrcaReleases({ autoload: slug === "changelog" });
  const [baked, setBaked] = useState<string>(() => peekMarkdown(slug) ?? "");
  const [mdLoading, setMdLoading] = useState(() => peekMarkdown(slug) === undefined);
  const mainRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const cached = peekMarkdown(slug);
    if (cached !== undefined) {
      setBaked(cached);
      setMdLoading(false);
      return;
    }
    let cancelled = false;
    setMdLoading(true);
    setBaked("");
    void getMarkdown(slug).then((body) => {
      if (cancelled) return;
      setBaked(body ?? `# 未找到\n\n该章节尚未载入。`);
      setMdLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);
  const fullMd = slug === "changelog" && live.markdown ? live.markdown : baked;
  const [changelogExpanded, setChangelogExpanded] = useState(false);
  useEffect(() => {
    setChangelogExpanded(false);
  }, [slug]);
  const changelogSlice = useMemo(() => {
    if (slug !== "changelog" || !fullMd) return null;
    return sliceChangelogMarkdown(fullMd);
  }, [slug, fullMd]);
  const md =
    slug === "changelog" && changelogSlice && !changelogExpanded
      ? changelogSlice.preview
      : fullMd;
  const toc = useMemo(() => {
    if (!md) return [];
    if (slug === "sitemap") return SITEMAP_TOC;
    if (slug === "cli/commands") return CLI_COMMAND_TOC;
    if (slug === "roles" || slug === "features") return extractToc(md, { minLevel: 2, maxLevel: 2 });
    // Changelog has many repeated 「已知问题」 H3s — right rail only lists version (H2) titles.
    if (slug === "changelog") return extractToc(md, { minLevel: 2, maxLevel: 2 });
    return extractToc(md);
  }, [md, slug]);
  const { prev, next } = neighbors(slug);
  useEffect(() => {
    if (prev) prefetchDocPage(prev.slug);
    if (next) prefetchDocPage(next.slug);
  }, [slug, prev, next]);
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);
  const [colorful, setColorful] = useState(false);
  const hash = useRouterState({ select: (s) => s.location.hash });
  const { batch, seen, dismiss, seePage, seeSection } = useSyncHighlights();
  const pageHot = useMemo(() => isPageHighlighted(batch, seen, slug), [batch, seen, slug]);
  const sectionHotIds = useMemo(() => highlightedSections(batch, seen, slug), [batch, seen, slug]);
  const sectionHotSet = useMemo(() => new Set(sectionHotIds), [sectionHotIds]);
  const openHighlightCount = useMemo(() => activeHighlightCount(batch, seen), [batch, seen]);
  const pageHighlighted = useCallback((s: string) => isPageHighlighted(batch, seen, s), [batch, seen]);
  const groupHighlighted = useCallback(
    (childSlugs: string[]) => groupHasHighlight(batch, seen, childSlugs),
    [batch, seen],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
      if (e.key === "Escape") {
        setSearch(false);
        setDrawer(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setDrawer(false);
  }, [slug]);

  // Visiting a highlighted page clears its sidebar red dot (banner / deep links / pager too).
  useEffect(() => {
    if (isPageHighlighted(batch, seen, slug)) seePage(slug);
  }, [slug, batch, seen, seePage]);

  useEffect(() => {
    const raw = hash || (typeof window !== "undefined" ? window.location.hash : "");
    const id = decodeURIComponent(raw.replace(/^#/, ""));
    if (!id && mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    const t = window.setTimeout(() => scrollToHash(raw), 40);
    return () => window.clearTimeout(t);
  }, [slug, hash, md]);

  useEffect(() => {
    const id = decodeURIComponent((hash || "").replace(/^#/, ""));
    if (id && sectionHotSet.has(id)) seeSection(slug, id);
  }, [hash, slug, sectionHotSet, seeSection]);

  useEffect(() => {
    const onHash = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const sync = () => setColorful(readStoredTheme() === "color");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-svh flex-col overflow-hidden bg-bg text-fg">
      <header
        className={cn(
          "z-40 flex h-12 shrink-0 items-center gap-2 overflow-visible border-b bg-bg/90 px-2 backdrop-blur-md sm:gap-3 sm:px-3 md:px-4",
          colorful ? "border-accent" : "border-border",
        )}
      >
        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center rounded-sm text-fg-muted hover:bg-bg-subtle md:hidden"
          onClick={() => setDrawer(true)}
          aria-label="打开目录"
        >
          <Menu className="size-5" />
        </button>
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-sm border border-border bg-bg-elevated">
            <svg viewBox="0 0 24 24" className="size-4 text-accent" fill="currentColor" aria-hidden>
              <path d="M4 14c2-6 6-9 10-9 5 0 8 3 8 7-2 1-4 1-6 0-1 3-4 5-7 5-3 0-4-1-5-3z" />
            </svg>
          </span>
          <span className="hidden truncate font-medium tracking-tight sm:inline">Orca 手册</span>
        </Link>
        <span className="hidden text-xs text-fg-subtle lg:inline">社区文档中文版</span>
        <div className="ml-auto flex min-w-0 items-center gap-1.5 sm:gap-2">
          <UpdateEntry />
          <ThemeSwitch />
          <button
            type="button"
            onClick={() => setSearch(true)}
            className="flex size-11 shrink-0 items-center justify-center gap-2 rounded-md border border-border bg-bg-elevated text-xs text-fg-subtle hover:text-fg sm:h-11 sm:w-auto sm:px-3"
          >
            <Search className="size-3.5" />
            <span className="hidden sm:inline">搜索</span>
            <kbd className="hidden rounded-xs border border-border px-1 font-mono text-xs md:inline">⌘K</kbd>
          </button>
          <a
            href="https://www.onorca.dev/docs"
            target="_blank"
            rel="noreferrer"
            className="hidden h-11 items-center rounded-md px-2 text-xs text-fg-subtle hover:text-fg lg:flex"
          >
            英文原文
          </a>
        </div>
      </header>

      <div className="mx-auto flex min-h-0 w-full max-w-[1320px] flex-1 overflow-hidden">
        <aside className="hidden h-full w-64 shrink-0 overflow-y-auto border-r border-border px-2 py-5 md:block">
          <NavList
            current={slug}
            pageHighlighted={pageHighlighted}
            groupHighlighted={groupHighlighted}
            onVisitPage={seePage}
          />
        </aside>

        {drawer ? (
          <div className="fixed inset-0 z-50 md:hidden">
            <button className="absolute inset-0 bg-bg/70" aria-label="关闭目录" onClick={() => setDrawer(false)} />
            <div className="absolute inset-y-0 left-0 w-[min(20rem,86vw)] overflow-y-auto border-r border-border bg-bg px-2 py-4">
              <div className="mb-3 flex items-center justify-between px-2">
                <span className="text-sm font-medium">目录</span>
                <button type="button" className="flex size-11 items-center justify-center" onClick={() => setDrawer(false)}>
                  <X className="size-5" />
                </button>
              </div>
              <NavList
                current={slug}
                onNavigate={() => setDrawer(false)}
                pageHighlighted={pageHighlighted}
                groupHighlighted={groupHighlighted}
                onVisitPage={seePage}
              />
            </div>
          </div>
        ) : null}

        <main ref={mainRef} className="docs-main min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain px-4 py-8 sm:px-8 lg:px-10">
          {page ? <p className="text-xs tracking-wide text-fg-subtle">{page.description}</p> : null}
          {slug === "changelog" ? (
            <p className="mt-1 text-xs text-fg-subtle" data-release-source={live.source}>
              {live.source === "live"
                ? `已自动抓取官方 Releases · 当前 ${live.latestTag}`
                : live.source === "cache"
                  ? `本机缓存（6 小时内）· 当前 ${live.latestTag}`
                  : live.loading
                    ? "正在同步官方最新 Release…"
                    : live.error
                      ? "官方源暂时不可用，先显示内置译本"
                      : "尚未连上官方源，先显示内置译本"}
            </p>
          ) : null}
          {openHighlightCount > 0 ? (
            <div
              className="mt-4 flex flex-wrap items-start gap-3 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2.5 text-sm text-fg"
              data-sync-highlight-banner={batch.id}
            >
              <SyncDot size="md" className="mt-1.5" />
              <div className="min-w-0 flex-1">
                <div className="font-medium">{batch.label} · 还有 {openHighlightCount} 页未读</div>
                <p className="mt-0.5 text-xs text-fg-muted">
                  本次同步有更新的页面（点链接跳转；打开后该页左侧红点会消失）：
                </p>
                <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                  {batch.pages.map((pg) => {
                    const cleared = seen.dismissed || seen.pages.includes(pg.slug);
                    const meta = pageBySlug(pg.slug);
                    const title = meta?.title ?? pg.slug;
                    return (
                      <li key={pg.slug}>
                        <Link
                          to={hrefFor(pg.slug)}
                          preload="intent"
                          onMouseEnter={() => prefetchDocPage(pg.slug)}
                          onFocus={() => prefetchDocPage(pg.slug)}
                          onClick={() => seePage(pg.slug)}
                          className={
                            cleared
                              ? "text-fg-subtle line-through"
                              : "font-medium text-accent underline-offset-2 hover:underline"
                          }
                        >
                          {title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {pageHot || sectionHotIds.length > 0 ? (
                  <p className="mt-1.5 text-xs text-fg-subtle">
                    本页右侧「本页」目录与正文标题旁的红点标出改动章节；点击对应条目即可清除。
                  </p>
                ) : (
                  <p className="mt-1.5 text-xs text-fg-subtle">左侧目录大红点标出未读更新页。</p>
                )}
              </div>
              <button
                type="button"
                onClick={dismiss}
                className="h-9 shrink-0 rounded-md border border-border bg-bg-elevated px-2.5 text-xs text-fg-muted hover:text-fg"
              >
                清除全部红点
              </button>
            </div>
          ) : null}
          {mdLoading && !md ? (
            <div className="mt-8 space-y-3" aria-busy="true" aria-label="正在载入章节">
              <div className="h-3 w-40 animate-pulse rounded bg-bg-subtle" />
              <div className="h-8 w-3/4 max-w-md animate-pulse rounded bg-bg-subtle" />
              <div className="h-3 w-full animate-pulse rounded bg-bg-subtle" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-bg-subtle" />
              <div className="h-3 w-2/3 animate-pulse rounded bg-bg-subtle" />
              <div className="mt-6 h-40 animate-pulse rounded-lg border border-border bg-bg-subtle/40" />
            </div>
          ) : (
            <Markdown source={md} highlightSectionIds={sectionHotSet} />
          )}
          {slug === "changelog" && changelogSlice && changelogSlice.totalVersions > changelogSlice.shownVersions ? (
            <div className="mt-8 max-w-3xl rounded-md border border-border bg-bg-elevated px-4 py-3">
              {changelogExpanded ? (
                <button
                  type="button"
                  onClick={() => setChangelogExpanded(false)}
                  className="text-sm text-accent hover:underline"
                >
                  收起更早版本（仅保留置顶 {changelogSlice.shownVersions} 版全文）
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setChangelogExpanded(true)}
                  className="text-sm text-accent hover:underline"
                >
                  展开全部历史译本（另 {changelogSlice.totalVersions - changelogSlice.shownVersions} 个版本 · 正文较大，可能稍慢）
                </button>
              )}
              <p className="mt-1 text-xs text-fg-subtle">
                版本索引表仍列出全部条目；默认只渲染置顶全文，避免一次挂载整页 ~700KB 正文。
              </p>
            </div>
          ) : null}
          <Suspense fallback={null}>
            {slug === "cli/commands" ? (
              <DeferredMount>
                <CommandCatalog />
              </DeferredMount>
            ) : null}
            {slug === "sitemap" ? (
              <DeferredMount>
                <SitemapBoard />
              </DeferredMount>
            ) : null}
            {slug === "roles" ? (
              <DeferredMount>
                <RoleGuide />
              </DeferredMount>
            ) : null}
            {slug === "features" ? (
              <DeferredMount>
                <FeatureGuide />
              </DeferredMount>
            ) : null}
          </Suspense>
          <Pager prev={prev} next={next} current={slug} />
        </main>

        <aside className="hidden h-full w-52 shrink-0 overflow-y-auto overscroll-contain py-8 pr-4 xl:block">
          <div className="text-xs font-medium tracking-[0.14em] text-fg-subtle uppercase">本页</div>
          {/* key=slug forces full replace on route change — never append leftover TOC nodes */}
          <ul key={slug} className="mt-3 space-y-1.5">
            {toc.map((item, index) => {
              const hot = isSectionHighlighted(batch, seen, slug, item.id);
              return (
                <li key={`${slug}:${item.id}:${index}`}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => {
                      if (hot) seeSection(slug, item.id);
                    }}
                    className={cn(
                      "flex items-start gap-1.5 text-xs leading-5 text-fg-subtle hover:text-fg",
                      item.level === 3 && "pl-3",
                    )}
                  >
                    <span className="min-w-0 flex-1">{item.text}</span>
                    {hot ? <SyncDot size="md" className="mt-1" /> : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
      <SearchModal open={search} onClose={() => setSearch(false)} />
    </div>
  );
}

function Pager({ prev, next, current }: { prev?: DocLink; next?: DocLink; current: string }) {
  return (
    <div className="mt-14 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
      {prev && prev.slug !== current ? (
        <Link
          to={prev.href}
          preload="intent"
          onMouseEnter={() => prefetchDocPage(prev.slug)}
          onFocus={() => prefetchDocPage(prev.slug)}
          className="rounded-md border border-border bg-bg-elevated px-4 py-3 hover:border-border-strong"
        >
          <div className="text-xs text-fg-subtle">上一篇</div>
          <div className="mt-1 text-sm text-fg">{prev.title}</div>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? (
        <Link
          to={next.href}
          preload="intent"
          onMouseEnter={() => prefetchDocPage(next.slug)}
          onFocus={() => prefetchDocPage(next.slug)}
          className="rounded-md border border-border bg-bg-elevated px-4 py-3 text-right hover:border-border-strong"
        >
          <div className="text-xs text-fg-subtle">下一篇</div>
          <div className="mt-1 text-sm text-fg">{next.title}</div>
        </Link>
      ) : null}
    </div>
  );
}
