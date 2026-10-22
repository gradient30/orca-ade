import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function appBasepath(): string | undefined {
  const raw = import.meta.env.BASE_URL || "/";
  const trimmed = raw.replace(/\/$/, "");
  return trimmed || undefined;
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    basepath: appBasepath(),
    // Hover/focus warms route chunks; MD bodies use prefetchMarkdown separately.
    defaultPreload: "intent",
    defaultPreloadDelay: 50,
    // Cheap cross-fade of main content (see styles.css view-transition rules).
    defaultViewTransition: true,
  });
}
