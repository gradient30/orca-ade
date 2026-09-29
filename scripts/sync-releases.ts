#!/usr/bin/env node
/**
 * Fetch latest desktop Orca releases and refresh baked Chinese fallback files.
 * Used by GitHub Actions (cron + Pages build). Safe to run locally.
 *
 * Skips the write when the official top-5 tags already match src/lib/docs/releases.ts
 * so a hand-tuned Chinese page is not overwritten. Set FORCE_SYNC=1 to rewrite anyway.
 * Each kept release is the full note, not a one-line summary.
 */
import { writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { fetchDesktopReleases, FEATURED_RELEASE_COUNT } from "../src/lib/docs/github-releases.ts";
import { RELEASES } from "../src/lib/docs/releases.ts";
import { buildChangelogMarkdown, toReleaseNote } from "../src/lib/docs/translate-release.ts";

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

async function main() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || undefined;
  const releases = await fetchDesktopReleases({ token, limit: FEATURED_RELEASE_COUNT });
  if (releases.length < 1) throw new Error("no desktop releases");
  const existing = readFileSync(join(root, "src/content/zh/changelog.md"), "utf8");
  const notes = releases.map((rel) => RELEASES.find((n) => n.tag === rel.tag) ?? toReleaseNote(rel));
  const prev = RELEASES.map((n) => n.tag).join(",");
  const next = notes.map((n) => n.tag).join(",");
  if (prev === next && process.env.FORCE_SYNC !== "1") {
    console.log("up to date", next);
    return;
  }
  writeFileSync(join(root, "src/lib/docs/releases.ts"), formatNotes(notes));
  writeFileSync(join(root, "src/content/zh/changelog.md"), buildChangelogMarkdown(releases, existing, RELEASES));
  console.log("synced", next);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
