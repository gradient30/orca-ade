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

export function listDocSlugs(): string[] {
  return [...bySlug.keys()].sort();
}

export async function getMarkdown(slug: string): Promise<string | undefined> {
  const key = slug === "" || slug === "docs" ? "index" : slug.replace(/\/$/, "");
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
  cache.delete(slug === "" || slug === "docs" ? "index" : slug.replace(/\/$/, ""));
}
