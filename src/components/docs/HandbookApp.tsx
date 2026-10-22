import { lazy, Suspense, useMemo } from "react";
import { useRouterState } from "@tanstack/react-router";
import { slugFromPathname } from "@/lib/docs/load";

const DocsShell = lazy(() =>
  import("./DocsShell").then((m) => ({ default: m.DocsShell })),
);

/**
 * Owns the single DocsShell for the whole SPA so / ↔ /docs/* does not remount
 * chrome (sidebar scroll, theme observer, ⌘K, sync-highlight state).
 */
export function HandbookApp() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const slug = useMemo(() => slugFromPathname(pathname), [pathname]);
  return (
    <Suspense fallback={<p className="p-8 text-sm text-fg-subtle">正在载入手册…</p>}>
      <DocsShell slug={slug} />
    </Suspense>
  );
}
