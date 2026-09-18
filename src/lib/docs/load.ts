import { CLI_COMMANDS } from "./cli-commands";

const files = import.meta.glob("../../content/zh/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function normalize(path: string): string {
  const marker = "/content/zh/";
  const i = path.indexOf(marker);
  const rel = i >= 0 ? path.slice(i + marker.length) : path;
  return rel.replace(/\.md$/, "").replace(/\\/g, "/");
}

const bySlug = new Map<string, string>();
for (const [path, body] of Object.entries(files)) {
  bySlug.set(normalize(path), body);
}

function titleOf(body: string, slug: string): string {
  const line = body.split("\n").find((l) => l.startsWith("# "));
  return (line?.slice(2) ?? slug).replace(/\s+\{#[^}]+\}\s*$/, "").trim();
}

export function getMarkdown(slug: string): string | undefined {
  const key = slug === "" || slug === "docs" ? "index" : slug;
  return bySlug.get(key);
}

export type SearchHit = {
  slug: string;
  titleLine: string;
  snippet: string;
  hash?: string;
};

export function searchDocs(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const cmdHits: SearchHit[] = [];
  for (const cmd of CLI_COMMANDS) {
    const hay = `${cmd.bin}\n${cmd.summary}\n${cmd.usage}\n${cmd.examples.join("\n")}`.toLowerCase();
    if (!hay.includes(q) && !cmd.id.includes(q.replace(/\s+/g, "-"))) continue;
    cmdHits.push({
      slug: "cli/commands",
      titleLine: cmd.bin,
      snippet: cmd.summary,
      hash: cmd.id,
    });
  }
  cmdHits.sort((a, b) => {
    const ae = a.titleLine.toLowerCase() === q || a.titleLine.toLowerCase() === `orca ${q}` ? 0 : 1;
    const be = b.titleLine.toLowerCase() === q || b.titleLine.toLowerCase() === `orca ${q}` ? 0 : 1;
    if (ae !== be) return ae - be;
    const as = a.titleLine.toLowerCase().includes(q) ? 0 : 1;
    const bs = b.titleLine.toLowerCase().includes(q) ? 0 : 1;
    if (as !== bs) return as - bs;
    return a.titleLine.localeCompare(b.titleLine);
  });

  const mdHits: SearchHit[] = [];
  for (const [slug, body] of bySlug) {
    const stripped = body.replace(/\s+\{#[A-Za-z0-9_-]+\}/g, "").replace(/\*\*/g, "");
    const lower = stripped.toLowerCase();
    const idx = lower.indexOf(q);
    if (idx < 0 && !slug.toLowerCase().includes(q)) continue;
    const start = Math.max(0, idx < 0 ? 0 : idx - 40);
    const snippet = stripped.slice(start, start + 140).replace(/\n/g, " ");
    mdHits.push({ slug, titleLine: titleOf(body, slug), snippet });
  }

  const out: SearchHit[] = [];
  const seen = new Set<string>();
  const push = (hit: SearchHit) => {
    const key = hit.hash ? `${hit.slug}#${hit.hash}` : hit.slug;
    if (seen.has(key)) return;
    seen.add(key);
    out.push(hit);
  };
  for (const hit of cmdHits.slice(0, 12)) push(hit);
  for (const hit of mdHits) push(hit);
  return out.slice(0, 24);
}
