import { createFileRoute } from "@tanstack/react-router";

/** URL `/` — body rendered by root HandbookApp (stable DocsShell). */
export const Route = createFileRoute("/")({ component: () => null });
