import { useCallback, useEffect, useState } from "react";
import {
  SYNC_HIGHLIGHTS,
  dismissSyncBatch,
  markPageSeen,
  markSectionSeen,
  readSyncSeen,
  type SyncSeenState,
} from "./sync-highlights";

export function useSyncHighlights() {
  const batch = SYNC_HIGHLIGHTS;
  const [seen, setSeen] = useState<SyncSeenState>(() =>
    typeof window === "undefined" ? { dismissed: false, pages: [], sections: {} } : readSyncSeen(batch.id),
  );

  useEffect(() => {
    setSeen(readSyncSeen(batch.id));
  }, [batch.id]);

  const dismiss = useCallback(() => {
    setSeen(dismissSyncBatch(batch.id));
  }, [batch.id]);

  const seePage = useCallback(
    (slug: string) => {
      setSeen(markPageSeen(batch.id, slug));
    },
    [batch.id],
  );

  const seeSection = useCallback(
    (slug: string, sectionId: string) => {
      setSeen(markSectionSeen(batch.id, slug, sectionId));
    },
    [batch.id],
  );

  return { batch, seen, dismiss, seePage, seeSection };
}
