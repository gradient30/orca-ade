import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";

const DocsShell = lazy(() =>
  import("@/components/docs/DocsShell").then((m) => ({ default: m.DocsShell })),
);

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Suspense fallback={<p className="p-8 text-sm text-fg-subtle">正在载入手册…</p>}>
      <DocsShell slug="index" />
    </Suspense>
  );
}
