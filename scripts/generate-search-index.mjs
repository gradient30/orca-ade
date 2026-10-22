#!/usr/bin/env node
/**
 * Build a light search index from zh markdown + CLI summaries.
 * Keeps titles/headings/blurbs only — NOT full page bodies — so the client
 * need not eager-load ~1MB of handbook text for ⌘K.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const zhRoot = join(root, "src/content/zh");
const outFile = join(root, "src/lib/docs/search-index.json");

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith(".md")) acc.push(p);
  }
  return acc;
}

function slugOf(file) {
  return relative(zhRoot, file).replace(/\\/g, "/").replace(/\.md$/, "");
}

function titleOf(body, slug) {
  const line = body.split("\n").find((l) => l.startsWith("# "));
  return (line?.slice(2) ?? slug).replace(/\s+\{#[^}]+\}\s*$/, "").trim();
}

function headingsOf(body) {
  const out = [];
  for (const line of body.split("\n")) {
    const m = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!m) continue;
    out.push(m[2].replace(/\s*\{#[^}]+\}\s*$/, "").replace(/[*`]/g, "").trim());
  }
  return out.slice(0, 40);
}

function blurbOf(body) {
  const stripped = body
    .replace(/^---[\s\S]*?---\n/, "")
    .replace(/^#.+$/m, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\s+\{#[A-Za-z0-9_-]+\}/g, "")
    .replace(/[*_`>#|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.slice(0, 180);
}

const docs = [];
for (const file of walk(zhRoot).sort()) {
  const body = readFileSync(file, "utf8");
  const slug = slugOf(file);
  docs.push({
    kind: "doc",
    slug,
    title: titleOf(body, slug),
    headings: headingsOf(body),
    blurb: blurbOf(body),
  });
}

// CLI entries from cli-commands.ts — parse lightly via dynamic import of built... 
// Instead read the TS source for cmd("orca ...", "summary" patterns to avoid TS load.
const cliSrc = readFileSync(join(root, "src/lib/docs/cli-commands.ts"), "utf8");
const cliRe = /cmd\(\s*"([^"]+)"\s*,\s*"([^"]+)"/g;
const cli = [];
let m;
while ((m = cliRe.exec(cliSrc))) {
  const bin = m[1];
  const summary = m[2];
  cli.push({
    kind: "cli",
    slug: "cli/commands",
    title: bin,
    headings: [],
    blurb: summary,
    hash: bin.replace(/^orca\s+/, "").replace(/\s+/g, "-"),
  });
}

const payload = { generatedAt: new Date().toISOString().slice(0, 10), docs, cli };
writeFileSync(outFile, `${JSON.stringify(payload)}\n`);
const bytes = Buffer.byteLength(JSON.stringify(payload));
console.log(
  `search-index: ${docs.length} docs, ${cli.length} cli, ${(bytes / 1024).toFixed(1)} KB → ${relative(root, outFile)}`,
);
