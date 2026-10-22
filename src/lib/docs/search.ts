import raw from "./search-index.json" with { type: "json" };

export type SearchHit = {
  slug: string;
  titleLine: string;
  snippet: string;
  hash?: string;
};

type IndexDoc = {
  kind: "doc" | "cli";
  slug: string;
  title: string;
  headings: string[];
  blurb: string;
  hash?: string;
};

type IndexFile = { generatedAt: string; docs: IndexDoc[]; cli: IndexDoc[] };

const index = raw as IndexFile;

export function searchDocs(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const cliHits: SearchHit[] = [];
  for (const row of index.cli) {
    const hay = `${row.title}\n${row.blurb}`.toLowerCase();
    if (!hay.includes(q) && !(row.hash ?? "").includes(q.replace(/\s+/g, "-"))) continue;
    cliHits.push({
      slug: row.slug,
      titleLine: row.title,
      snippet: row.blurb,
      hash: row.hash,
    });
  }
  cliHits.sort((a, b) => {
    const ae = a.titleLine.toLowerCase() === q || a.titleLine.toLowerCase() === `orca ${q}` ? 0 : 1;
    const be = b.titleLine.toLowerCase() === q || b.titleLine.toLowerCase() === `orca ${q}` ? 0 : 1;
    if (ae !== be) return ae - be;
    const as = a.titleLine.toLowerCase().includes(q) ? 0 : 1;
    const bs = b.titleLine.toLowerCase().includes(q) ? 0 : 1;
    if (as !== bs) return as - bs;
    return a.titleLine.localeCompare(b.titleLine);
  });

  const mdHits: SearchHit[] = [];
  for (const row of index.docs) {
    const hay = `${row.title}\n${row.headings.join("\n")}\n${row.blurb}\n${row.slug}`.toLowerCase();
    if (!hay.includes(q)) continue;
    mdHits.push({
      slug: row.slug,
      titleLine: row.title,
      snippet: row.blurb || row.headings.slice(0, 3).join(" · "),
    });
  }

  const out: SearchHit[] = [];
  const seen = new Set<string>();
  const push = (hit: SearchHit) => {
    const key = hit.hash ? `${hit.slug}#${hit.hash}` : hit.slug;
    if (seen.has(key)) return;
    seen.add(key);
    out.push(hit);
  };
  for (const hit of cliHits.slice(0, 12)) push(hit);
  for (const hit of mdHits) push(hit);
  return out.slice(0, 24);
}
