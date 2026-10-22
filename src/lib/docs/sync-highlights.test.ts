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
  it("ships human-friendly summary without process paths", () => {
    assert.match(SYNC_HIGHLIGHTS.summary, /本次同步/);
    assert.doesNotMatch(SYNC_HIGHLIGHTS.summary, /hostedtoolcache|\/node\b|\\node\b/);
    assert.doesNotMatch(SYNC_HIGHLIGHTS.summary, /^已汉化：\//);
    const slugs = SYNC_HIGHLIGHTS.pages.map((p) => p.slug).sort();
    assert.ok(slugs.includes("ssh"));
    assert.ok(slugs.includes("changelog"));
    for (const slug of slugs) {
      assert.doesNotMatch(slug, /^\//);
      assert.doesNotMatch(slug, /hostedtoolcache/);
    }
  });
});

describe("highlight visibility", () => {
  it("hides dismissed batches and seen pages/sections", () => {
    const seen = emptySeen();
    assert.equal(isPageHighlighted(SYNC_HIGHLIGHTS, seen, "ssh"), true);
    const sshSecs = SYNC_HIGHLIGHTS.pages.find((p) => p.slug === "ssh")?.sections ?? [];
    assert.ok(sshSecs.length > 0);
    assert.equal(isSectionHighlighted(SYNC_HIGHLIGHTS, seen, "ssh", sshSecs[0]!), true);

    const afterPage: SyncSeenState = { ...seen, pages: ["ssh"] };
    assert.equal(isPageHighlighted(SYNC_HIGHLIGHTS, afterPage, "ssh"), false);
    // body/toc section dots remain until section cleared
    assert.equal(isSectionHighlighted(SYNC_HIGHLIGHTS, afterPage, "ssh", sshSecs[0]!), true);

    const afterSection: SyncSeenState = {
      ...afterPage,
      sections: { ssh: [...sshSecs] },
    };
    assert.deepEqual(highlightedSections(SYNC_HIGHLIGHTS, afterSection, "ssh"), []);

    const dismissed: SyncSeenState = { dismissed: true, pages: [], sections: {} };
    assert.equal(activeHighlightCount(SYNC_HIGHLIGHTS, dismissed), 0);
    assert.equal(groupHasHighlight(SYNC_HIGHLIGHTS, dismissed, ["ssh", "changelog"]), false);
    assert.equal(groupHasHighlight(SYNC_HIGHLIGHTS, seen, ["ssh", "install"]), true);
  });
});
