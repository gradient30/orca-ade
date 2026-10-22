import { useEffect, useState } from "react";
import { FEATURED_RELEASE_COUNT, type LiveRelease } from "./github-releases";
import { RELEASES, type ReleaseNote } from "./releases";

const CACHE_KEY = "orca-handbook-releases-v7";
const TTL_MS = 6 * 60 * 60 * 1000;

export type ReleasesState = {
  notes: ReleaseNote[];
  markdown: string | null;
  latestTag: string;
  source: "fallback" | "cache" | "live";
  syncedAt: string | null;
  loading: boolean;
  error: string | null;
};

type CacheShape = { at: number; releases: LiveRelease[] };

const listeners = new Set<(s: ReleasesState) => void>();
let snapshot: ReleasesState = {
  notes: RELEASES,
  markdown: null,
  latestTag: RELEASES[0]?.tag ?? "",
  source: "fallback",
  syncedAt: null,
  loading: false,
  error: null,
};
let inflight: Promise<void> | null = null;

function emit() {
  for (const fn of listeners) fn(snapshot);
}

function readCache(): CacheShape | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheShape;
    if (!parsed?.releases?.length || Date.now() - parsed.at > TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(releases: LiveRelease[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), releases } satisfies CacheShape));
  } catch {
    /* quota / private mode */
  }
}

async function applyFrom(releases: LiveRelease[], source: "cache" | "live", at: number) {
  const { getMarkdown } = await import("./load");
  const { buildChangelogMarkdown, extractVersionSection, toReleaseNote } = await import("./translate-release");
  const existing = (await getMarkdown("changelog")) ?? "";
  const allBaked = releases.every((r) => !!extractVersionSection(existing, r.tag));
  snapshot = {
    notes: releases.map((r) => RELEASES.find((n) => n.tag === r.tag) ?? toReleaseNote(r)),
    markdown: allBaked ? null : buildChangelogMarkdown(releases, existing, RELEASES),
    latestTag: releases[0]?.tag ?? snapshot.latestTag,
    source,
    syncedAt: new Date(at).toISOString(),
    loading: false,
    error: null,
  };
  emit();
}

/** Fetch/cache desktop releases. Safe to call multiple times; only runs when needed. */
export function ensureReleasesLoaded() {
  if (inflight) return inflight;
  if (snapshot.source === "live") return Promise.resolve();
  const cached = typeof localStorage !== "undefined" ? readCache() : null;
  if (cached) {
    inflight = applyFrom(cached.releases, "cache", cached.at).finally(() => {
      inflight = null;
    });
    return inflight;
  }
  snapshot = { ...snapshot, loading: true };
  emit();
  inflight = import("./github-releases")
    .then(({ fetchDesktopReleases }) => fetchDesktopReleases({ limit: FEATURED_RELEASE_COUNT }))
    .then(async (releases) => {
      if (!releases.length) throw new Error("empty");
      writeCache(releases);
      await applyFrom(releases, "live", Date.now());
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

/**
 * Subscribe to release snapshot. Does NOT fetch unless `autoload` is true
 * (changelog page / explicit refresh). Header chips should pass autoload=false.
 */
export function useOrcaReleases(opts: { autoload?: boolean } = {}): ReleasesState {
  const autoload = Boolean(opts.autoload);
  const [state, setState] = useState(snapshot);
  useEffect(() => {
    listeners.add(setState);
    if (autoload) void ensureReleasesLoaded();
    return () => {
      listeners.delete(setState);
    };
  }, [autoload]);
  return state;
}
