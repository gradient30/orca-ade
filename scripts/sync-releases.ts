#!/usr/bin/env node
/**
 * Fetch latest desktop Orca releases and refresh baked Chinese fallback files.
 * Used by GitHub Actions (cron + Pages build). Safe to run locally.
 *
 * Localization pipeline (no per-run LLM):
 *  1. featured-surface-phrases.ts — full EN→CN for title / short / Highlights / Compat
 *  2. translate-release PHRASES + HEADINGS + structured rewrite for PR dumps
 *  3. Prefer existing changelog section when it is already more Chinese
 *
 * Skips the write when the official top-5 tags already match src/lib/docs/releases.ts
 * AND notes look Chinese-dense. Set FORCE_SYNC=1 to rewrite anyway.
 *
 * Changelog history is incremental: featured top-5 refresh; older ## vX.Y.Z kept.
 */
import { writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { fetchDesktopReleases, FEATURED_RELEASE_COUNT } from "../src/lib/docs/github-releases.ts";
import { RELEASES } from "../src/lib/docs/releases.ts";
import {
  buildChangelogMarkdown,
  toReleaseNote,
  isChineseDenseNote,
  englishResidualRatio,
  extractVersionSection,
  rewriteChangelogProductBullets,
} from "../src/lib/docs/translate-release.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function formatNotes(notes: ReturnType<typeof toReleaseNote>[]): string {
  const body = JSON.stringify(notes, null, 2);
  return `export type ReleaseNote = {
  tag: string;
  date: string;
  dateLabel: string;
  title: string;
  highlights: string[];
  url: string;
  href: string;
};

/** Latest ${FEATURED_RELEASE_COUNT} desktop releases. Refreshed by scripts/sync-releases.ts from GitHub. */
export const RELEASES: ReleaseNote[] = ${body};

export const RELEASES_INDEX_URL = "https://github.com/stablyai/orca/releases";

export const LATEST_RELEASE = RELEASES[0]!;

export const CHANGELOG_HREF = "/docs/changelog";
`;
}

function productExperienceBlock(section: string, opts: { includeTests?: boolean } = {}): string {
  const lines = section.split("\n");
  const out: string[] = [];
  let inP = false;
  let skipMod = false;
  for (const line of lines) {
    if (/^###\s+/.test(line) && !line.startsWith("####")) {
      inP = /产品体验|Product experience/.test(line);
      skipMod = false;
      continue;
    }
    if (inP && /^####\s+/.test(line)) {
      skipMod =
        !opts.includeTests &&
        /测试|构建与维护|All test|Tests, builds/.test(line);
    }
    if (inP && /^###\s+/.test(line) && !line.startsWith("####")) break;
    if (inP && !skipMod) out.push(line);
  }
  return out.join("\n");
}

/** Marketing surface ≈ lines until Product / Agents / … PR dump sections. */
function marketingSurface(section: string): string {
  const lines = section.split("\n");
  const out: string[] = [];
  for (const line of lines) {
    if (
      /^###?\s+(产品体验|Agent|终端|远程|Windows|移动|质量|性能|测试|发布|界面|工作区|编辑器|设置|自动化|源码|浏览器|修复|本版本|Native|Product|Agents|Terminal|Remote|Windows|Mobile|Quality|Performance|Testing|Release|UI |What's)/i.test(
        line,
      ) &&
      out.length > 8
    ) {
      break;
    }
    out.push(line);
    if (out.length > 120) break;
  }
  return out.join("\n");
}

async function main() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || undefined;
  const releases = await fetchDesktopReleases({ token, limit: FEATURED_RELEASE_COUNT });
  if (releases.length < 1) throw new Error("no desktop releases");
  const existing = readFileSync(join(root, "src/content/zh/changelog.md"), "utf8");
  const notes = releases.map((rel) => {
    const baked = RELEASES.find((n) => n.tag === rel.tag);
    const fresh = toReleaseNote(rel);
    // Keep hand-tuned card (title/highlights) when already Chinese-dense.
    // Changelog body still rebuilds from phrase dictionary + structured rewrite.
    if (baked && isChineseDenseNote(baked)) {
      return { ...fresh, title: baked.title, highlights: baked.highlights };
    }
    return fresh;
  });
  const prev = RELEASES.map((n) => n.tag).join(",");
  const next = notes.map((n) => n.tag).join(",");
  const needsNoteRefresh = notes.some((n, i) => {
    const prevNote = RELEASES[i];
    return !prevNote || prevNote.title !== n.title || JSON.stringify(prevNote.highlights) !== JSON.stringify(n.highlights);
  });
  if (prev === next && !needsNoteRefresh && process.env.FORCE_SYNC !== "1") {
    console.log("up to date", next);
    return;
  }
  writeFileSync(join(root, "src/lib/docs/releases.ts"), formatNotes(notes));
  let md = buildChangelogMarkdown(releases, existing, notes);
  md = rewriteChangelogProductBullets(md);
  writeFileSync(join(root, "src/content/zh/changelog.md"), md);
  console.log("synced", next);
  for (const rel of releases) {
    const sec = extractVersionSection(md, rel.tag) ?? "";
    const surface = marketingSurface(sec);
    const mRatio = englishResidualRatio(surface);
    const prod = productExperienceBlock(sec);
    const prodAll = productExperienceBlock(sec, { includeTests: true });
    const pRatio = englishResidualRatio(prod);
    const flag = pRatio > 0.55 ? "WARN" : "ok";
    const pAll = englishResidualRatio(prodAll);
    if (rel.tag === releases[0]?.tag) {
      const modRe = /^####\s+(.+?)\s*\{#/gm;
      let mm: RegExpExecArray | null;
      const mods: { name: string; start: number }[] = [];
      while ((mm = modRe.exec(prod))) {
        mods.push({ name: mm[1]!, start: mm.index });
      }
      for (let i = 0; i < mods.length; i++) {
        const a = mods[i]!;
        const b = mods[i + 1];
        const slice = prod.slice(a.start, b ? b.start : undefined);
        const bullets = slice.split("\n").filter((l) => /^[-*]\s+/.test(l));
        const good = bullets.filter((l) => {
          const core = l.replace(/^[-*]\s+/, "").replace(/（\[@.+$/, "");
          return englishResidualRatio(core) < 0.45;
        }).length;
        console.log(`    · ${a.name}: ${good}/${bullets.length} localized`);
      }
    }

    console.log(
      `  ${rel.tag} marketing=${mRatio.toFixed(2)} product=${pRatio.toFixed(2)} product+tests=${pAll.toFixed(2)} ${flag}`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
