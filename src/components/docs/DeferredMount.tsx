import { useEffect, useState, type ReactNode } from "react";

/** Paint markdown first; mount heavy boards on idle (or after a short tick). */
export function DeferredMount({
  children,
  fallback,
  delayMs = 0,
}: {
  children: ReactNode;
  fallback?: ReactNode;
  delayMs?: number;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const go = () => {
      if (!cancelled) setReady(true);
    };
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(go, { timeout: 400 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }
    const t = window.setTimeout(go, delayMs || 1);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [delayMs]);
  if (!ready) {
    return (
      fallback ?? (
        <div className="mt-8 h-36 animate-pulse rounded-lg border border-border bg-bg-subtle/50" aria-hidden />
      )
    );
  }
  return children;
}
