import { createFileRoute } from "@tanstack/react-router";

/** URL `/docs/$` — body rendered by root HandbookApp (stable DocsShell). */
export const Route = createFileRoute("/docs/$")({ component: () => null });
