/**
 * Per-slug markdown loaders. Bodies are NOT eager-bundled into the shell —
 * each page is its own async chunk via import.meta.glob.
 */
const modules = import.meta.glob("../../content/zh/**/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

function normalize(path: string): string {
  const marker = "/content/zh/";
  const i = path.indexOf(marker);
  const rel = i >= 0 ? path.slice(i + marker.length) : path;
  return rel.replace(/\.md$/, "").replace(/\\/g, "/");
}

const bySlug = new Map<string, () => Promise<string>>();
for (const [path, loader] of Object.entries(modules)) {
  bySlug.set(normalize(path), loader);
}

const cache = new Map<string, string>();

function keyOf(slug: string): string {
  return slug === "" || slug === "docs" ? "index" : slug.replace(/\/$/, "");
}

export function listDocSlugs(): string[] {
  return [...bySlug.keys()].sort();
}

/** Sync read of an already-fetched body (nav revisits / hover prefetch hits). */
export function peekMarkdown(slug: string): string | undefined {
  return cache.get(keyOf(slug));
}

/** Fire-and-forget warm of a slug chunk into cache. Safe to call on hover/focus. */
export function prefetchMarkdown(slug: string): void {
  void getMarkdown(slug);
}

export async function getMarkdown(slug: string): Promise<string | undefined> {
  const key = keyOf(slug);
  const hit = cache.get(key);
  if (hit !== undefined) return hit;
  const loader = bySlug.get(key);
  if (!loader) return undefined;
  const body = await loader();
  cache.set(key, body);
  return body;
}

/** Drop a cached body (e.g. after live changelog rebuild replaces display source). */
export function invalidateMarkdown(slug: string): void {
  cache.delete(keyOf(slug));
}

/** Map router pathname (basepath already stripped) → handbook slug. */
export function slugFromPathname(pathname: string): string {
  const p = pathname.replace(/\/$/, "") || "/";
  if (p === "/" || p === "") return "index";
  if (p === "/docs") return "index";
  if (p.startsWith("/docs/")) {
    const rest = p.slice("/docs/".length);
    return rest || "index";
  }
  return "index";
}
