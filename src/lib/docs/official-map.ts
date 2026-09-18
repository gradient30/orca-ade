import raw from "./official-map.json" with { type: "json" };

export const OFFICIAL_OWNER = "stablyai";
export const OFFICIAL_REPO = "orca";
export const OFFICIAL_DOCS_PREFIX = "docs/site/content/docs";
export const OFFICIAL_DOCS_SITE = "https://www.onorca.dev/docs";
export const OFFICIAL_BLOB_BASE = "https://github.com/stablyai/orca/blob/main";
export const OFFICIAL_DOCS_PARENT_API =
  "https://api.github.com/repos/stablyai/orca/contents/docs/site/content?ref=main";

export type DocKind = "official" | "additive";

export type DocFingerprint = {
  slug: string;
  section: string;
  kind: DocKind;
  officialPath: string | null;
  size: number | null;
  lastSeenSha: string | null;
  translatedAtSha: string | null;
};

export type ReleaseFingerprint = {
  tag: string;
  publishedAt: string;
  lastSeenBodySha: string | null;
  translatedAtBodySha: string | null;
  yanked: boolean;
};

export type MapSnapshot = {
  capturedAt: string;
  officialRef: string;
  docsTreeSha: string;
  docs: DocFingerprint[];
  releases: ReleaseFingerprint[];
};

export const MAP_SNAPSHOT = raw as MapSnapshot;

export const SECTION_META: { id: string; title: string }[] = [
  { id: "additive", title: "本站加页" },
  { id: "start", title: "从这里开始" },
  { id: "model", title: "Orca 模型" },
  { id: "agents", title: "使用 Agent" },
  { id: "review", title: "审查与交付" },
  { id: "editing", title: "在 Orca 中编辑" },
  { id: "browser", title: "浏览器与 Design Mode" },
  { id: "terminal", title: "终端" },
  { id: "remote", title: "远程与 SSH" },
  { id: "cli", title: "CLI 与自动化" },
  { id: "mobile", title: "移动端" },
  { id: "notify", title: "通知与收件箱" },
  { id: "recipes", title: "配方" },
  { id: "settings", title: "设置参考" },
  { id: "privacy", title: "隐私与遥测" },
  { id: "trouble", title: "故障排除" },
  { id: "other", title: "未分区" },
];

const START_SLUGS = ["index", "install", "first-session"];

export type OfficialBlob = { path: string; sha: string; size: number };

export type DocStatus = "match" | "stale" | "added" | "removed" | "additive";

export type DocRow = {
  slug: string;
  section: string;
  kind: DocKind;
  officialPath: string | null;
  liveSha: string | null;
  lastSeenSha: string | null;
  translatedAtSha: string | null;
  size: number | null;
  status: DocStatus;
};

export type LiveReleaseFinger = {
  tag: string;
  publishedAt: string;
  bodySha: string | null;
};

export type RelStatus = "baked" | "pending" | "edited" | "yanked";

export type RelRow = {
  tag: string;
  publishedAt: string;
  liveBodySha: string | null;
  translatedAtBodySha: string | null;
  status: RelStatus;
  inFeatured: boolean;
  yanked: boolean;
};

export function officialTreeApi(sha: string): string {
  return `https://api.github.com/repos/${OFFICIAL_OWNER}/${OFFICIAL_REPO}/git/trees/${sha}?recursive=1`;
}

export function pathToSlug(relPath: string): string {
  const trimmed = relPath.replace(/^\/+/, "");
  const noExt = trimmed.replace(/\.mdx$/i, "");
  return noExt === "index" ? "index" : noExt;
}

export function sectionOf(slug: string): string {
  if (slug === "quick-guide" || slug === "changelog" || slug === "architecture" || slug === "sitemap" || slug === "cli/commands") return "additive";
  if (slug === "index" || slug === "install" || slug === "first-session") return "start";
  if (slug.startsWith("model/")) return "model";
  if (slug.startsWith("agents/")) return "agents";
  if (slug.startsWith("review/")) return "review";
  if (slug.startsWith("editing/")) return "editing";
  if (slug.startsWith("browser/")) return "browser";
  if (slug === "terminal") return "terminal";
  if (slug === "ways-to-run" || slug === "ssh" || slug === "remote-servers") return "remote";
  if (slug.startsWith("cli/")) return "cli";
  if (slug === "mobile" || slug === "android-apk") return "mobile";
  if (slug === "notifications" || slug === "activity") return "notify";
  if (slug.startsWith("recipes/")) return "recipes";
  if (slug === "settings") return "settings";
  if (slug === "telemetry") return "privacy";
  if (slug === "troubleshooting" || slug === "github-errors") return "trouble";
  return "other";
}

export function officialHref(slug: string): string {
  return slug === "index" ? `${OFFICIAL_DOCS_SITE}` : `${OFFICIAL_DOCS_SITE}/${slug}`;
}

export function handbookHref(slug: string): string {
  return slug === "index" ? "/" : `/docs/${slug}`;
}

export function blobHref(officialPath: string): string {
  return `${OFFICIAL_BLOB_BASE}/${officialPath}`;
}

export function shortSha(sha: string | null | undefined): string {
  if (!sha) return "—";
  return sha.slice(0, 7);
}

export function parseTag(tag: string): [number, number, number] | null {
  const m = /^v(\d+)\.(\d+)\.(\d+)$/.exec(tag);
  if (!m) return null;
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

export function cmpTag(a: string, b: string): number {
  const pa = parseTag(a);
  const pb = parseTag(b);
  if (!pa || !pb) return a.localeCompare(b);
  return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2];
}

export async function sha256_12(text: string): Promise<string> {
  const buf = await globalThis.crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, 12);
}

export function compareDocs(snapshot: MapSnapshot, liveBlobs: OfficialBlob[] | null): DocRow[] {
  const liveBySlug = new Map<string, OfficialBlob>();
  if (liveBlobs) {
    for (const blob of liveBlobs) liveBySlug.set(pathToSlug(blob.path), blob);
  }
  const rows: DocRow[] = [];
  const seen = new Set<string>();

  for (const doc of snapshot.docs) {
    seen.add(doc.slug);
    if (doc.kind === "additive") {
      rows.push({
        slug: doc.slug,
        section: doc.section,
        kind: "additive",
        officialPath: null,
        liveSha: null,
        lastSeenSha: null,
        translatedAtSha: null,
        size: null,
        status: "additive",
      });
      continue;
    }
    const live = liveBlobs ? liveBySlug.get(doc.slug) : undefined;
    const compareSha = live?.sha ?? doc.lastSeenSha;
    let status: DocStatus;
    if (liveBlobs && !live) status = "removed";
    else if (!doc.translatedAtSha) status = "stale";
    else if (compareSha && compareSha !== doc.translatedAtSha) status = "stale";
    else status = "match";
    rows.push({
      slug: doc.slug,
      section: doc.section,
      kind: "official",
      officialPath: doc.officialPath,
      liveSha: live?.sha ?? null,
      lastSeenSha: doc.lastSeenSha,
      translatedAtSha: doc.translatedAtSha,
      size: live?.size ?? doc.size,
      status,
    });
  }

  if (liveBlobs) {
    for (const blob of liveBlobs) {
      const slug = pathToSlug(blob.path);
      if (seen.has(slug)) continue;
      rows.push({
        slug,
        section: sectionOf(slug),
        kind: "official",
        officialPath: `${OFFICIAL_DOCS_PREFIX}/${blob.path}`,
        liveSha: blob.sha,
        lastSeenSha: null,
        translatedAtSha: null,
        size: blob.size,
        status: "added",
      });
    }
  }

  return sortDocRows(rows);
}

export function compareReleases(
  snapshot: MapSnapshot,
  live: LiveReleaseFinger[] | null,
  bakedTags: string[],
  featuredTags: string[],
): RelRow[] {
  const baked = new Set(bakedTags);
  const featured = new Set(featuredTags);
  const snapByTag = new Map(snapshot.releases.map((r) => [r.tag, r]));
  const liveByTag = new Map((live ?? []).map((r) => [r.tag, r]));
  const newestBaked = bakedTags.reduce((best, tag) => (best && cmpTag(tag, best) <= 0 ? best : tag), "");
  const liveTop3 = new Set((live ?? []).slice(0, 3).map((r) => r.tag));

  const tags: string[] = [];
  const seen = new Set<string>();
  const push = (tag: string) => {
    if (!tag || seen.has(tag)) return;
    seen.add(tag);
    tags.push(tag);
  };
  for (const item of live ?? []) push(item.tag);
  for (const item of snapshot.releases) {
    if (item.yanked || baked.has(item.tag)) push(item.tag);
  }

  const rows: RelRow[] = [];
  for (const tag of tags) {
    const liveItem = liveByTag.get(tag);
    const snap = snapByTag.get(tag);
    const isYanked = Boolean(snap?.yanked) || Boolean(live && !liveItem && baked.has(tag) && newestBaked && cmpTag(tag, newestBaked) < 0);
    let status: RelStatus;
    if (isYanked) status = "yanked";
    else if (!baked.has(tag)) {
      const inWindow = liveTop3.has(tag) || Boolean(newestBaked && cmpTag(tag, newestBaked) > 0);
      if (!inWindow) continue;
      status = "pending";
    } else if (
      liveItem?.bodySha &&
      snap?.translatedAtBodySha &&
      liveItem.bodySha !== snap.translatedAtBodySha
    ) {
      status = "edited";
    } else {
      status = "baked";
    }
    rows.push({
      tag,
      publishedAt: liveItem?.publishedAt || snap?.publishedAt || "",
      liveBodySha: liveItem?.bodySha ?? null,
      translatedAtBodySha: snap?.translatedAtBodySha ?? null,
      status,
      inFeatured: featured.has(tag),
      yanked: isYanked,
    });
  }
  return rows;
}

export function sortDocRows(rows: DocRow[]): DocRow[] {
  const sectionRank = new Map(SECTION_META.map((s, i) => [s.id, i]));
  return [...rows].sort((a, b) => {
    const sa = sectionRank.get(a.section) ?? 99;
    const sb = sectionRank.get(b.section) ?? 99;
    if (sa !== sb) return sa - sb;
    if (a.section === "start") {
      const ia = START_SLUGS.indexOf(a.slug);
      const ib = START_SLUGS.indexOf(b.slug);
      if (ia >= 0 || ib >= 0) return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    }
    return a.slug.localeCompare(b.slug);
  });
}

export function docsSummary(rows: DocRow[]) {
  return {
    official: rows.filter((r) => r.kind === "official").length,
    match: rows.filter((r) => r.status === "match").length,
    stale: rows.filter((r) => r.status === "stale").length,
    added: rows.filter((r) => r.status === "added").length,
    removed: rows.filter((r) => r.status === "removed").length,
    additive: rows.filter((r) => r.status === "additive").length,
  };
}

export function releasesSummary(rows: RelRow[]) {
  return {
    pending: rows.filter((r) => r.status === "pending").length,
    edited: rows.filter((r) => r.status === "edited").length,
    yanked: rows.filter((r) => r.status === "yanked").length,
    baked: rows.filter((r) => r.status === "baked").length,
  };
}

export function formatDriftList(docs: DocRow[], releases: RelRow[]): string {
  const lines: string[] = [];
  const stale = docs.filter((d) => d.status === "stale" || d.status === "added" || d.status === "removed");
  const relOpen = releases.filter((r) => r.status === "pending" || r.status === "edited");
  if (stale.length === 0 && relOpen.length === 0) return "对照表：手册与 Release 均无待办。";
  if (stale.length) {
    lines.push("手册待办：");
    for (const row of stale) {
      const from = shortSha(row.translatedAtSha);
      const to = shortSha(row.liveSha ?? row.lastSeenSha);
      lines.push(`- ${row.status === "added" ? "新页" : row.status === "removed" ? "已删" : "待更新"} ${row.slug}  ${from} → ${to}`);
    }
  }
  if (relOpen.length) {
    lines.push("Release 待办：");
    for (const row of relOpen) {
      lines.push(`- ${row.status === "pending" ? "待汉化" : "正文有改动"} ${row.tag}`);
    }
  }
  return lines.join("\n");
}

export function bakedTagsFromChangelog(md: string): string[] {
  const tags: string[] = [];
  const re = /^## (v\d+\.\d+\.\d+) /gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) {
    const tag = m[1];
    if (tag && !tags.includes(tag)) tags.push(tag);
  }
  return tags;
}
