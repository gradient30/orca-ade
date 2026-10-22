import { prefetchMarkdown } from "./load";

/** Sidebar「从这里开始」and other heavy first-visit pages. */
const START_SLUGS = new Set([
  "features",
  "roles",
  "quick-guide",
  "changelog",
  "architecture",
  "sitemap",
  "index",
  "install",
  "first-session",
]);

let mermaidWarm: Promise<unknown> | null = null;

function warmMermaid() {
  if (!mermaidWarm) mermaidWarm = import("mermaid");
  return mermaidWarm;
}

/** Fire-and-forget: MD body + route-specific JS (boards / mermaid). */
export function prefetchDocPage(slug: string): void {
  prefetchMarkdown(slug);
  if (slug === "features") {
    void import("@/components/docs/FeatureGuide");
    void warmMermaid();
  } else if (slug === "roles") {
    void import("@/components/docs/RoleGuide");
    void warmMermaid();
  } else if (slug === "sitemap") {
    void import("@/components/docs/SitemapBoard");
  } else if (slug === "architecture") {
    void warmMermaid();
  } else if (slug === "cli/commands") {
    void import("@/components/docs/CommandCatalog");
  }
}

export function isStartNavSlug(slug: string): boolean {
  return START_SLUGS.has(slug);
}
