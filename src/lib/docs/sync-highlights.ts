import raw from "./sync-highlights.json" with { type: "json" };

export type SyncHighlightPage = {
  slug: string;
  /** Heading ids (`{#id}`) that were added or materially changed in this sync. Empty = page-level only. */
  sections: string[];
};

export type SyncHighlightBatch = {
  id: string;
  label: string;
  at: string;
  summary: string;
  pages: SyncHighlightPage[];
};

export const SYNC_HIGHLIGHTS = raw as SyncHighlightBatch;

const STORAGE_PREFIX = "orca-handbook-sync-seen:";

export type SyncSeenState = {
  /** Entire batch dismissed by the reader. */
  dismissed: boolean;
  /** Slugs whose sidebar dots the reader cleared by visiting / dismissing. */
  pages: string[];
  /** Per-slug section ids the reader has acknowledged. */
  sections: Record<string, string[]>;
};

function storageKey(batchId: string): string {
  return `${STORAGE_PREFIX}${batchId}`;
}

export function emptySeen(): SyncSeenState {
  return { dismissed: false, pages: [], sections: {} };
}

export function readSyncSeen(batchId: string): SyncSeenState {
  if (typeof localStorage === "undefined") return emptySeen();
  try {
    const raw = localStorage.getItem(storageKey(batchId));
    if (!raw) return emptySeen();
    const parsed = JSON.parse(raw) as Partial<SyncSeenState>;
    return {
      dismissed: Boolean(parsed.dismissed),
      pages: Array.isArray(parsed.pages) ? parsed.pages.filter((s) => typeof s === "string") : [],
      sections:
        parsed.sections && typeof parsed.sections === "object"
          ? Object.fromEntries(
              Object.entries(parsed.sections).map(([slug, ids]) => [
                slug,
                Array.isArray(ids) ? ids.filter((s) => typeof s === "string") : [],
              ]),
            )
          : {},
    };
  } catch {
    return emptySeen();
  }
}

export function writeSyncSeen(batchId: string, state: SyncSeenState): void {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(storageKey(batchId), JSON.stringify(state));
  } catch {
    /* quota / private mode */
  }
}

export function pageEntry(batch: SyncHighlightBatch, slug: string): SyncHighlightPage | undefined {
  return batch.pages.find((p) => p.slug === slug);
}

export function isPageHighlighted(batch: SyncHighlightBatch, seen: SyncSeenState, slug: string): boolean {
  if (seen.dismissed) return false;
  if (!pageEntry(batch, slug)) return false;
  return !seen.pages.includes(slug);
}

export function highlightedSections(
  batch: SyncHighlightBatch,
  seen: SyncSeenState,
  slug: string,
): string[] {
  if (seen.dismissed) return [];
  const entry = pageEntry(batch, slug);
  if (!entry) return [];
  const cleared = new Set(seen.sections[slug] ?? []);
  return entry.sections.filter((id) => !cleared.has(id));
}

export function isSectionHighlighted(
  batch: SyncHighlightBatch,
  seen: SyncSeenState,
  slug: string,
  sectionId: string,
): boolean {
  return highlightedSections(batch, seen, slug).includes(sectionId);
}

export function groupHasHighlight(
  batch: SyncHighlightBatch,
  seen: SyncSeenState,
  childSlugs: string[],
): boolean {
  return childSlugs.some((slug) => isPageHighlighted(batch, seen, slug));
}

export function markPageSeen(batchId: string, slug: string): SyncSeenState {
  const prev = readSyncSeen(batchId);
  if (prev.dismissed || prev.pages.includes(slug)) return prev;
  const next = { ...prev, pages: [...prev.pages, slug] };
  writeSyncSeen(batchId, next);
  return next;
}

export function markSectionSeen(batchId: string, slug: string, sectionId: string): SyncSeenState {
  const prev = readSyncSeen(batchId);
  if (prev.dismissed) return prev;
  const existing = prev.sections[slug] ?? [];
  if (existing.includes(sectionId)) return prev;
  const next: SyncSeenState = {
    ...prev,
    sections: { ...prev.sections, [slug]: [...existing, sectionId] },
  };
  writeSyncSeen(batchId, next);
  return next;
}

export function dismissSyncBatch(batchId: string): SyncSeenState {
  const next = { dismissed: true, pages: [], sections: {} };
  writeSyncSeen(batchId, next);
  return next;
}

export function activeHighlightCount(batch: SyncHighlightBatch, seen: SyncSeenState): number {
  if (seen.dismissed) return 0;
  return batch.pages.filter((p) => !seen.pages.includes(p.slug)).length;
}
