import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";

const DocsShell = lazy(() =>
  import("@/components/docs/DocsShell").then((m) => ({ default: m.DocsShell })),
);

export const Route = createFileRoute("/docs/$")({ component: DocPage });

function DocPage() {
  const { _splat } = Route.useParams();
  const slug = (_splat ?? "index").replace(/\/$/, "");
  return (
    <Suspense fallback={<p className="p-8 text-sm text-fg-subtle">正在载入章节…</p>}>
      <DocsShell slug={slug || "index"} />
    </Suspense>
  );
}
