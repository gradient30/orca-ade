import assert from "node:assert/strict";
import { test } from "node:test";
import {
  englishResidualRatio,
  extractHighlights,
  buildChangelogMarkdown,
  isChineseDenseNote,
} from "./translate-release.ts";
import type { LiveRelease } from "./github-releases.ts";

test("englishResidualRatio scores Chinese lower than English", () => {
  assert.ok(englishResidualRatio("在数百个聊天下仍能顺畅启动") < 0.2);
  assert.ok(englishResidualRatio("Launch smoothly with hundreds of chats") > 0.8);
});

test("extractHighlights reads Highlights dash bullets with emoji hero fallback", () => {
  const body = `## A faster Orca, plugins & background computer use ⚡

- ⚡ **A faster Orca:** Launch smoothly with hundreds of chats, with less lag as you type and switch tabs.
- 🧩 **Customize Orca** with icon themes, syntax highlighting and custom editors.

## Highlights

- **A faster Orca:** Fast app with hundreds of chats. Typing stays more responsive, and hidden chats do less work while you use other tabs.
- **Plugins:** Add icon themes, syntax highlighting and custom editors from Settings → Plugins. Community publishing is coming soon, so you'll be able to share your own plugins.
- **Chats:** Send again after Stop and preview links in chat.
`;
  const hs = extractHighlights(body);
  assert.equal(hs.length, 3);
  assert.match(hs[0]!, /[\u4e00-\u9fff]/);
  assert.match(hs[1]!, /[\u4e00-\u9fff]/);
  assert.ok(englishResidualRatio(hs.join("\n")) < 0.45);
});

test("buildChangelogMarkdown localizes dash-bullet marketing surface", () => {
  const rel: LiveRelease = {
    tag: "v1.4.245",
    name: "v1.4.245",
    url: "https://github.com/stablyai/orca/releases/tag/v1.4.245",
    publishedAt: "2026-10-30T00:00:00Z",
    body: `## A faster Orca, plugins & background computer use ⚡

- ⚡ **A faster Orca:** Launch smoothly with hundreds of chats, with less lag as you type and switch tabs.
- 🧩 **Customize Orca** with icon themes, syntax highlighting and custom editors.

## Highlights

- **A faster Orca:** Fast app with hundreds of chats. Typing stays more responsive, and hidden chats do less work while you use other tabs.
- **Plugins:** Add icon themes, syntax highlighting and custom editors from Settings → Plugins. Community publishing is coming soon, so you'll be able to share your own plugins.

## Compatibility & upgrade notes

- **New terminal host:** This release starts a fresh terminal host for new terminals. Terminals already open before the update keep running on the previous host and stay attached. The new running terminal limit setting needs the new host, and so do fixes such as the ble.sh startup fix and lighter process checks on macOS. Those apply to terminals you open after updating.

## Product experience

* Fix something obscure by @someone in https://github.com/stablyai/orca/pull/1
`,
  };
  const md = buildChangelogMarkdown([rel], "", []);
  assert.match(md, /重点亮点/);
  assert.match(md, /兼容与升级说明/);
  assert.match(md, /更快的 Orca/);
  assert.match(md, /全新终端宿主/);
  // marketing surface should be Chinese-dense
  const surface = md.split("## 产品体验")[0] ?? md;
  assert.ok(englishResidualRatio(surface) < 0.35, `residual ${englishResidualRatio(surface)}`);
});

test("isChineseDenseNote rejects placeholders", () => {
  assert.equal(
    isChineseDenseNote({
      tag: "v1.4.245",
      date: "2026-10-30",
      dateLabel: "2026年10月30日",
      title: "官方更新",
      highlights: ["详见下方完整中文日志。"],
      url: "https://example.com",
      href: "/docs/changelog#v1-4-245",
    }),
    false,
  );
});
