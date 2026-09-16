import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  bakedTagsFromChangelog,
  cmpTag,
  compareDocs,
  compareReleases,
  formatDriftList,
  pathToSlug,
  type MapSnapshot,
} from "./official-map.ts";

const snap: MapSnapshot = {
  capturedAt: "2026-09-16",
  officialRef: "main",
  docsTreeSha: "aaa",
  docs: [
    {
      slug: "quick-guide",
      section: "additive",
      kind: "additive",
      officialPath: null,
      size: null,
      lastSeenSha: null,
      translatedAtSha: null,
    },
    {
      slug: "browser/profiles",
      section: "browser",
      kind: "official",
      officialPath: "docs/site/content/docs/browser/profiles.mdx",
      size: 100,
      lastSeenSha: "sha-old",
      translatedAtSha: "sha-old",
    },
    {
      slug: "cli/orchestration",
      section: "cli",
      kind: "official",
      officialPath: "docs/site/content/docs/cli/orchestration.mdx",
      size: 200,
      lastSeenSha: "sha-orch",
      translatedAtSha: "sha-orch",
    },
  ],
  releases: [
    {
      tag: "v1.4.203",
      publishedAt: "2026-09-15",
      lastSeenBodySha: "body-203",
      translatedAtBodySha: "body-203",
      yanked: false,
    },
    {
      tag: "v1.4.202",
      publishedAt: "2026-09-14",
      lastSeenBodySha: null,
      translatedAtBodySha: null,
      yanked: true,
    },
  ],
};

describe("pathToSlug", () => {
  it("strips mdx and maps index", () => {
    assert.equal(pathToSlug("index.mdx"), "index");
    assert.equal(pathToSlug("agents/native-chat.mdx"), "agents/native-chat");
  });
});

describe("compareDocs", () => {
  it("marks only the sha that moved", () => {
    const rows = compareDocs(snap, [
      { path: "browser/profiles.mdx", sha: "sha-new", size: 110 },
      { path: "cli/orchestration.mdx", sha: "sha-orch", size: 200 },
    ]);
    const profiles = rows.find((r) => r.slug === "browser/profiles");
    const orch = rows.find((r) => r.slug === "cli/orchestration");
    const additive = rows.find((r) => r.slug === "quick-guide");
    assert.equal(profiles?.status, "stale");
    assert.equal(orch?.status, "match");
    assert.equal(additive?.status, "additive");
  });

  it("flags a brand-new official page without scanning others", () => {
    const rows = compareDocs(snap, [
      { path: "browser/profiles.mdx", sha: "sha-old", size: 100 },
      { path: "cli/orchestration.mdx", sha: "sha-orch", size: 200 },
      { path: "agents/new-thing.mdx", sha: "sha-new-page", size: 50 },
    ]);
    const added = rows.find((r) => r.slug === "agents/new-thing");
    assert.equal(added?.status, "added");
    assert.equal(rows.filter((r) => r.status === "match").length, 2);
  });

  it("flags a removed official page", () => {
    const rows = compareDocs(snap, [{ path: "browser/profiles.mdx", sha: "sha-old", size: 100 }]);
    assert.equal(rows.find((r) => r.slug === "cli/orchestration")?.status, "removed");
  });
});

describe("compareReleases", () => {
  it("spots a newer tag and a yanked archive", () => {
    const rows = compareReleases(
      snap,
      [
        { tag: "v1.4.204", publishedAt: "2026-09-16", bodySha: "body-204" },
        { tag: "v1.4.203", publishedAt: "2026-09-15", bodySha: "body-203" },
        { tag: "v1.4.201", publishedAt: "2026-09-13", bodySha: "body-201" },
      ],
      ["v1.4.203", "v1.4.202"],
      ["v1.4.203", "v1.4.201"],
    );
    assert.equal(rows.find((r) => r.tag === "v1.4.204")?.status, "pending");
    assert.equal(rows.find((r) => r.tag === "v1.4.203")?.status, "baked");
    assert.equal(rows.find((r) => r.tag === "v1.4.202")?.status, "yanked");
    assert.equal(rows.find((r) => r.tag === "v1.4.203")?.inFeatured, true);
  });

  it("spots an in-place body edit on a baked tag", () => {
    const rows = compareReleases(
      snap,
      [{ tag: "v1.4.203", publishedAt: "2026-09-15", bodySha: "body-203-recut" }],
      ["v1.4.203"],
      ["v1.4.203"],
    );
    assert.equal(rows.find((r) => r.tag === "v1.4.203")?.status, "edited");
  });
});

describe("helpers", () => {
  it("orders tags and extracts baked headings", () => {
    assert.ok(cmpTag("v1.4.203", "v1.4.201") > 0);
    assert.deepEqual(
      bakedTagsFromChangelog("## v1.4.203 title\n\n## v1.4.202 archive\n### v1.4.202 · skip\n"),
      ["v1.4.203", "v1.4.202"],
    );
  });

  it("formats a drift list that names only the deltas", () => {
    const docs = compareDocs(snap, [
      { path: "browser/profiles.mdx", sha: "sha-new", size: 110 },
      { path: "cli/orchestration.mdx", sha: "sha-orch", size: 200 },
    ]);
    const rels = compareReleases(
      snap,
      [
        { tag: "v1.4.204", publishedAt: "2026-09-16", bodySha: "x" },
        { tag: "v1.4.203", publishedAt: "2026-09-15", bodySha: "body-203" },
      ],
      ["v1.4.203"],
      ["v1.4.204", "v1.4.203"],
    );
    const text = formatDriftList(docs, rels);
    assert.match(text, /browser\/profiles/);
    assert.match(text, /v1\.4\.204/);
    assert.doesNotMatch(text, /orchestration/);
  });
});
