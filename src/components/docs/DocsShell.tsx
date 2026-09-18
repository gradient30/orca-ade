import { useEffect, useMemo, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV, neighbors, pageBySlug, type DocLink, type NavNode } from "@/lib/docs/catalog";
import { getMarkdown, searchDocs } from "@/lib/docs/load";
import { extractToc, Markdown } from "./Markdown";
import { ThemeSwitch } from "./ThemeSwitch";
import { UpdateEntry } from "./UpdateEntry";
import { SitemapBoard } from "./SitemapBoard";
import { CommandCatalog } from "./CommandCatalog";
import { readStoredTheme } from "@/lib/theme";
import { useOrcaReleases } from "@/lib/docs/use-releases";
import { CLI_COMMAND_TOC } from "@/lib/docs/cli-commands";

const SITEMAP_TOC = [
  { id: "how-to-use", text: "怎么用", level: 2 },
  { id: "map-docs", text: "手册页", level: 2 },
  { id: "map-releases", text: "Release", level: 2 },
  { id: "out-of-scope", text: "不纳入对照", level: 2 },
];

function hrefFor(slug: string) {
  return slug === "index" ? "/" : `/docs/${slug}`;
}

function NavList({ current, onNavigate }: { current: string; onNavigate?: () => void }) {
  return (
    <nav className="space-y-4 pb-10">
      {NAV.map((node, i) => (
        <NavItem key={i} node={node} current={current} onNavigate={onNavigate} />
      ))}
    </nav>
  );
}

function NavItem({
  node,
  current,
  onNavigate,
}: {
  node: NavNode;
  current: string;
  onNavigate?: () => void;
}) {
  if (node.kind === "label") {
    return (
      <div className="px-3 pt-2 text-xs font-medium tracking-[0.14em] text-fg-subtle uppercase">
        {node.title}
      </div>
    );
  }
  if (node.kind === "link") {
    const active = current === node.slug;
    return (
      <Link
        to={node.href}
        onClick={onNavigate}
        className={cn(
          "block rounded-sm px-3 py-2 text-sm leading-5",
          active ? "bg-bg-subtle text-fg" : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
        )}
      >
        {node.title}
      </Link>
    );
  }
  const openDefault = node.children.some((c) => c.slug === current);
  const [open, setOpen] = useState(openDefault);
  useEffect(() => {
    if (openDefault) setOpen(true);
  }, [openDefault]);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-11 w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm text-fg-muted hover:text-fg"
      >
        {node.title}
        <ChevronDown className={cn("size-3.5 transition-transform", open ? "rotate-0" : "-rotate-90")} />
      </button>
      {open ? (
        <div className="ml-2 border-l border-border pl-1">
          {node.children.map((c) => (
            <Link
              key={c.slug}
              to={c.href}
              onClick={onNavigate}
              className={cn(
                "block rounded-sm px-3 py-2 text-sm leading-5",
                current === c.slug ? "bg-bg-subtle text-fg" : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
              )}
            >
              {c.title}
            </Link>
          ))}
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
  const baked = getMarkdown(slug) ?? `# 未找到\n\n该章节尚未载入。`;
  const live = useOrcaReleases();
  const md = slug === "changelog" && live.markdown ? live.markdown : baked;
  const toc = useMemo(() => {
    if (slug === "sitemap") return SITEMAP_TOC;
    if (slug === "cli/commands") return CLI_COMMAND_TOC;
    return extractToc(md);
  }, [md, slug]);
  const { prev, next } = neighbors(slug);
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);
  const [colorful, setColorful] = useState(false);
  const hash = useRouterState({ select: (s) => s.location.hash });

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

  useEffect(() => {
    const t = window.setTimeout(() => scrollToHash(hash || window.location.hash), 40);
    return () => window.clearTimeout(t);
  }, [slug, hash, md]);

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
    <div className="min-h-svh overflow-x-hidden bg-bg text-fg">
      <header
        className={cn(
          "sticky top-0 z-40 flex h-12 items-center gap-2 overflow-visible border-b bg-bg/90 px-2 backdrop-blur-md sm:gap-3 sm:px-3 md:px-4",
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
        <span className="hidden text-xs text-fg-subtle lg:inline">官方文档中文版</span>
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

      <div className="mx-auto flex max-w-[1320px]">
        <aside className="sticky top-12 hidden h-[calc(100svh-3rem)] w-64 shrink-0 overflow-y-auto border-r border-border px-2 py-5 md:block">
          <NavList current={slug} />
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
              <NavList current={slug} onNavigate={() => setDrawer(false)} />
            </div>
          </div>
        ) : null}

        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-10">
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
          <Markdown source={md} />
          {slug === "cli/commands" ? <CommandCatalog /> : null}
          {slug === "sitemap" ? <SitemapBoard /> : null}
          <Pager prev={prev} next={next} current={slug} />
        </main>

        <aside className="sticky top-12 hidden h-[calc(100svh-3rem)] w-52 shrink-0 overflow-y-auto py-8 pr-4 xl:block">
          <div className="text-xs font-medium tracking-[0.14em] text-fg-subtle uppercase">本页</div>
          <ul className="mt-3 space-y-1.5">
            {toc.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className={cn("block text-xs leading-5 text-fg-subtle hover:text-fg", t.level === 3 && "pl-3")}
                >
                  {t.text}
                </a>
              </li>
            ))}
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
        <Link to={prev.href} className="rounded-md border border-border bg-bg-elevated px-4 py-3 hover:border-border-strong">
          <div className="text-xs text-fg-subtle">上一篇</div>
          <div className="mt-1 text-sm text-fg">{prev.title}</div>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? (
        <Link
          to={next.href}
          className="rounded-md border border-border bg-bg-elevated px-4 py-3 text-right hover:border-border-strong"
        >
          <div className="text-xs text-fg-subtle">下一篇</div>
          <div className="mt-1 text-sm text-fg">{next.title}</div>
        </Link>
      ) : null}
    </div>
  );
}
