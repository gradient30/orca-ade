import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  SYNC_HIGHLIGHTS,
  activeHighlightCount,
  emptySeen,
  groupHasHighlight,
  highlightedSections,
  isPageHighlighted,
  isSectionHighlighted,
  type SyncSeenState,
} from "./sync-highlights.ts";

describe("sync-highlights batch", () => {
  it("ships the restore/sync pages with section anchors", () => {
    const slugs = SYNC_HIGHLIGHTS.pages.map((p) => p.slug).sort();
    assert.deepEqual(slugs, [
      "changelog",
      "cli/reference",
      "remote-servers",
      "review/commit-push",
      "ssh",
      "telemetry",
    ]);
    const remote = SYNC_HIGHLIGHTS.pages.find((p) => p.slug === "remote-servers");
    assert.ok(remote?.sections.includes("limit-terminal-memory-on-a-linux-server"));
  });
});

describe("highlight visibility", () => {
  it("hides dismissed batches and seen pages/sections", () => {
    const seen = emptySeen();
    assert.equal(isPageHighlighted(SYNC_HIGHLIGHTS, seen, "ssh"), true);
    assert.equal(isSectionHighlighted(SYNC_HIGHLIGHTS, seen, "ssh", "macos-hosts-local-network-access"), true);

    const afterPage: SyncSeenState = { ...seen, pages: ["ssh"] };
    assert.equal(isPageHighlighted(SYNC_HIGHLIGHTS, afterPage, "ssh"), false);
    // body/toc section dots remain until section cleared
    assert.equal(
      isSectionHighlighted(SYNC_HIGHLIGHTS, afterPage, "ssh", "macos-hosts-local-network-access"),
      true,
    );

    const afterSection: SyncSeenState = {
      ...afterPage,
      sections: { ssh: ["macos-hosts-local-network-access"] },
    };
    assert.deepEqual(highlightedSections(SYNC_HIGHLIGHTS, afterSection, "ssh"), []);

    const dismissed: SyncSeenState = { dismissed: true, pages: [], sections: {} };
    assert.equal(activeHighlightCount(SYNC_HIGHLIGHTS, dismissed), 0);
    assert.equal(groupHasHighlight(SYNC_HIGHLIGHTS, dismissed, ["ssh", "remote-servers"]), false);
    assert.equal(groupHasHighlight(SYNC_HIGHLIGHTS, seen, ["ssh", "install"]), true);
  });
});
