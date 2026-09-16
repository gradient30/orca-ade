#!/usr/bin/env node
/**
 * Refresh official docs + release fingerprints in src/lib/docs/official-map.json.
 *
 * - Updates lastSeenSha / lastSeenBodySha / docsTreeSha when GitHub moved.
 * - Never changes translatedAtSha / translatedAtBodySha (those mark a finished 汉化).
 * - --mark-translated slug,v1.4.204   copy lastSeen* → translatedAt* for those keys.
 * - Skip write when last-seen fingerprints already match, unless FORCE_SYNC=1.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { fetchOfficialDocsBlobs } from "../src/lib/docs/github-docs.ts";
import { fetchDesktopReleases } from "../src/lib/docs/github-releases.ts";
import {
  OFFICIAL_DOCS_PREFIX,
  type DocFingerprint,
  type MapSnapshot,
  type ReleaseFingerprint,
  pathToSlug,
  sectionOf,
  sha256_12,
} from "../src/lib/docs/official-map.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const file = join(root, "src/lib/docs/official-map.json");

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function markSet(): { slugs: Set<string>; tags: Set<string> } {
  const arg = process.argv.find((a) => a.startsWith("--mark-translated")) ?? "";
  const value = arg.includes("=") ? arg.slice(arg.indexOf("=") + 1) : process.argv[process.argv.indexOf("--mark-translated") + 1];
  const slugs = new Set<string>();
  const tags = new Set<string>();
  if (!value || value.startsWith("-")) return { slugs, tags };
  for (const token of value.split(",").map((s) => s.trim()).filter(Boolean)) {
    if (/^v\d+\.\d+\.\d+$/.test(token)) tags.add(token);
    else slugs.add(token);
  }
  return { slugs, tags };
}

function fingerprintKey(snap: MapSnapshot): string {
  const docs = snap.docs
    .filter((d) => d.kind === "official")
    .map((d) => `${d.slug}:${d.lastSeenSha ?? ""}`)
    .sort()
    .join("|");
  const rels = snap.releases.map((r) => `${r.tag}:${r.lastSeenBodySha ?? ""}:${r.yanked ? 1 : 0}`).join("|");
  return `${snap.docsTreeSha}\n${docs}\n${rels}`;
}

async function main() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || undefined;
  const existing = JSON.parse(readFileSync(file, "utf8")) as MapSnapshot;
  const marks = markSet();

  const [tree, liveReleases] = await Promise.all([
    fetchOfficialDocsBlobs({ token }),
    fetchDesktopReleases({ token, limit: 12 }),
  ]);

  const liveBySlug = new Map(tree.blobs.map((b) => [pathToSlug(b.path), b]));
  const nextDocs: DocFingerprint[] = existing.docs.map((doc) => {
    if (doc.kind !== "official") return doc;
    const live = liveBySlug.get(doc.slug);
    const lastSeenSha = live?.sha ?? doc.lastSeenSha;
    const size = live?.size ?? doc.size;
    const translatedAtSha = marks.slugs.has(doc.slug) ? lastSeenSha : doc.translatedAtSha;
    return { ...doc, lastSeenSha, size, translatedAtSha };
  });

  const known = new Set(nextDocs.map((d) => d.slug));
  for (const blob of tree.blobs) {
    const slug = pathToSlug(blob.path);
    if (known.has(slug)) continue;
    nextDocs.push({
      slug,
      section: sectionOf(slug),
      kind: "official",
      officialPath: `${OFFICIAL_DOCS_PREFIX}/${blob.path}`,
      size: blob.size,
      lastSeenSha: blob.sha,
      translatedAtSha: marks.slugs.has(slug) ? blob.sha : null,
    });
    known.add(slug);
  }

  const hashed = await Promise.all(
    liveReleases.map(async (rel) => ({
      tag: rel.tag,
      publishedAt: rel.publishedAt.slice(0, 10),
      bodySha: await sha256_12(rel.body),
    })),
  );
  const liveTags = new Set(hashed.map((r) => r.tag));
  const nextReleases: ReleaseFingerprint[] = [];
  const seenRel = new Set<string>();

  for (const live of hashed) {
    const prev = existing.releases.find((r) => r.tag === live.tag);
    nextReleases.push({
      tag: live.tag,
      publishedAt: live.publishedAt,
      lastSeenBodySha: live.bodySha,
      translatedAtBodySha: marks.tags.has(live.tag) ? live.bodySha : (prev?.translatedAtBodySha ?? null),
      yanked: false,
    });
    seenRel.add(live.tag);
  }
  for (const prev of existing.releases) {
    if (seenRel.has(prev.tag)) continue;
    nextReleases.push({
      ...prev,
      yanked: prev.yanked || !liveTags.has(prev.tag),
      translatedAtBodySha: marks.tags.has(prev.tag) ? prev.lastSeenBodySha : prev.translatedAtBodySha,
    });
    seenRel.add(prev.tag);
  }

  const next: MapSnapshot = {
    capturedAt: today(),
    officialRef: existing.officialRef,
    docsTreeSha: tree.treeSha,
    docs: nextDocs,
    releases: nextReleases,
  };

  const staleDocs = nextDocs.filter((d) => d.kind === "official" && d.lastSeenSha && d.lastSeenSha !== d.translatedAtSha);
  const pendingRel = nextReleases.filter((r) => !r.yanked && r.lastSeenBodySha && r.lastSeenBodySha !== r.translatedAtBodySha);
  const added = nextDocs.filter((d) => d.kind === "official" && !d.translatedAtSha);

  if (staleDocs.length) {
    console.log("docs stale", staleDocs.map((d) => d.slug).join(","));
  } else {
    console.log("docs match", nextDocs.filter((d) => d.kind === "official").length);
  }
  if (added.length) console.log("docs added", added.map((d) => d.slug).join(","));
  if (pendingRel.length) console.log("releases pending", pendingRel.map((r) => r.tag).join(","));
  else console.log("releases tracked", nextReleases.map((r) => r.tag).slice(0, 5).join(","));

  const changed = fingerprintKey(existing) !== fingerprintKey(next) || marks.slugs.size > 0 || marks.tags.size > 0;
  if (!changed && process.env.FORCE_SYNC !== "1") {
    console.log("up to date", next.docsTreeSha.slice(0, 7));
    return;
  }
  writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  console.log("wrote", file);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
