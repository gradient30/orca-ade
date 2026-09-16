import { useEffect, useState } from "react";
import { fetchOfficialDocsBlobs, type OfficialDocsFetch } from "./github-docs";
import { fetchDesktopReleases } from "./github-releases";
import { getMarkdown } from "./load";
import {
  MAP_SNAPSHOT,
  bakedTagsFromChangelog,
  compareDocs,
  compareReleases,
  sha256_12,
  type DocRow,
  type RelRow,
} from "./official-map";
import { RELEASES } from "./releases";

const CACHE_KEY = "orca-handbook-docs-map-v1";
const TTL_MS = 6 * 60 * 60 * 1000;

export type OfficialMapState = {
  docs: DocRow[];
  releases: RelRow[];
  bakedTags: string[];
  treeSha: string;
  source: "fallback" | "cache" | "live";
  syncedAt: string | null;
  loading: boolean;
  error: string | null;
};

type CacheShape = { at: number; treeSha: string; blobs: OfficialDocsFetch["blobs"]; releases: { tag: string; publishedAt: string; bodySha: string }[] };

const listeners = new Set<(s: OfficialMapState) => void>();

function fallbackState(): OfficialMapState {
  const bakedTags = bakedTagsFromChangelog(getMarkdown("changelog") ?? "");
  return {
    docs: compareDocs(MAP_SNAPSHOT, null),
    releases: compareReleases(
      MAP_SNAPSHOT,
      MAP_SNAPSHOT.releases.map((r) => ({
        tag: r.tag,
        publishedAt: r.publishedAt,
        bodySha: r.lastSeenBodySha,
      })),
      bakedTags,
      RELEASES.map((n) => n.tag),
    ),
    bakedTags,
    treeSha: MAP_SNAPSHOT.docsTreeSha,
    source: "fallback",
    syncedAt: null,
    loading: false,
    error: null,
  };
}

let snapshot: OfficialMapState = fallbackState();
let inflight: Promise<void> | null = null;

function emit() {
  for (const fn of listeners) fn(snapshot);
}

function readCache(): CacheShape | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheShape;
    if (!parsed?.blobs?.length || Date.now() - parsed.at > TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(value: CacheShape) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(value));
  } catch {
    /* quota / private mode */
  }
}

function apply(live: CacheShape, source: "cache" | "live") {
  const bakedTags = bakedTagsFromChangelog(getMarkdown("changelog") ?? "");
  snapshot = {
    docs: compareDocs(MAP_SNAPSHOT, live.blobs),
    releases: compareReleases(
      MAP_SNAPSHOT,
      live.releases,
      bakedTags,
      RELEASES.map((n) => n.tag),
    ),
    bakedTags,
    treeSha: live.treeSha,
    source,
    syncedAt: new Date(live.at).toISOString(),
    loading: false,
    error: null,
  };
  emit();
}

async function fetchLive(): Promise<CacheShape> {
  const [docs, releases] = await Promise.all([fetchOfficialDocsBlobs(), fetchDesktopReleases({ limit: 12 })]);
  const hashed = await Promise.all(
    releases.map(async (rel) => ({
      tag: rel.tag,
      publishedAt: rel.publishedAt.slice(0, 10),
      bodySha: await sha256_12(rel.body),
    })),
  );
  return { at: Date.now(), treeSha: docs.treeSha, blobs: docs.blobs, releases: hashed };
}

export function ensureOfficialMapLoaded(force = false) {
  if (inflight) return inflight;
  if (!force && snapshot.source === "live") return Promise.resolve();
  if (!force) {
    const cached = typeof localStorage !== "undefined" ? readCache() : null;
    if (cached) {
      apply(cached, "cache");
      return Promise.resolve();
    }
  }
  snapshot = { ...snapshot, loading: true, error: null };
  emit();
  inflight = fetchLive()
    .then((live) => {
      writeCache(live);
      apply(live, "live");
    })
    .catch((err: unknown) => {
      snapshot = {
        ...snapshot,
        loading: false,
        error: err instanceof Error ? err.message : "fetch failed",
      };
      emit();
    })
    .finally(() => {
      inflight = null;
    });
  return inflight;
}

export function refreshOfficialMap() {
  try {
    localStorage.removeItem(CACHE_KEY);
  } catch {
    /* ignore */
  }
  snapshot = { ...snapshot, source: "fallback" };
  return ensureOfficialMapLoaded(true);
}

export function useOfficialMap(): OfficialMapState {
  const [state, setState] = useState(snapshot);
  useEffect(() => {
    listeners.add(setState);
    void ensureOfficialMapLoaded();
    return () => {
      listeners.delete(setState);
    };
  }, []);
  return state;
}
