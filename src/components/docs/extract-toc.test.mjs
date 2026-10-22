import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Inline the same uniquify + extract contract used by Markdown.tsx (keep in sync).
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[`*_]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function extractToc(source, { minLevel = 2, maxLevel = 3 } = {}) {
  const used = new Map();
  const items = [];
  for (const line of source.replace(/\r\n/g, "\n").split("\n")) {
    const m = line.match(/^(#{1,4})\s+(.+)$/);
    if (!m) continue;
    const level = m[1].length;
    if (level < minLevel || level > maxLevel) continue;
    let text = m[2].trim();
    let id = "";
    const idm = text.match(/^(.*?)\s*\{#([A-Za-z0-9_-]+)\}\s*$/);
    if (idm) {
      text = idm[1].trim();
      id = idm[2];
    } else id = slugify(text);
    const n = (used.get(id) ?? 0) + 1;
    used.set(id, n);
    if (n > 1) id = `${id}-${n}`;
    items.push({ id, text: text.replace(/[*`]/g, ""), level });
  }
  return items;
}

describe("extractToc uniquify", () => {
  it("gives distinct ids to repeated 已知问题 / Known issues anchors", () => {
    const md = `
## v1
### 已知问题 {#v1-known-issues}
### Known issues {#v1-known-issues}
## v2
### 已知问题 {#v2-known-issues}
`;
    const toc = extractToc(md);
    const ids = toc.map((t) => t.id);
    assert.deepEqual(ids, ["v1", "v1-known-issues", "v1-known-issues-2", "v2", "v2-known-issues"]);
    assert.equal(new Set(ids).size, ids.length);
  });

  it("changelog H2-only filter avoids flooding 已知问题 in the right rail", () => {
    const root = join(dirname(fileURLToPath(import.meta.url)), "../../../");
    const md = readFileSync(join(root, "src/content/zh/changelog.md"), "utf8");
    const all = extractToc(md);
    const h2 = extractToc(md, { minLevel: 2, maxLevel: 2 });
    assert.ok(all.some((t) => t.text.includes("已知问题")));
    assert.ok(h2.every((t) => !t.text.includes("已知问题")));
    assert.ok(h2.length >= 5);
    assert.equal(new Set(h2.map((t) => t.id)).size, h2.length);
  });
});
