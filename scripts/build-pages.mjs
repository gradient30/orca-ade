#!/usr/bin/env node
/**
 * Static SPA build for GitHub Pages and Cloudflare Pages.
 * Does not change the live-preview `npm run dev` path.
 *
 * TanStack Start SPA emits client/ + server/. Hosts only need the client shell
 * at the artifact root. GitHub Pages uses 404.html for deep links; Cloudflare
 * Pages uses `_redirects` (/* → /index.html 200).
 *
 * Env:
 *   GITHUB_PAGES=1     → base /orca-ade/ (default when CLOUDFLARE_PAGES unset)
 *   CLOUDFLARE_PAGES=1 → base / (root on *.pages.dev)
 */
import { spawn, spawnSync } from "node:child_process";
import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const isCf = process.env.CLOUDFLARE_PAGES === "1";
if (!isCf) process.env.GITHUB_PAGES = "1";
process.env.VITE_AUTH_ENABLED = "false";

{
  const gen = spawnSync(process.execPath, ["scripts/generate-search-index.mjs"], {
    stdio: "inherit",
    env: process.env,
  });
  if (gen.status !== 0) process.exit(gen.status ?? 1);
}

const child = spawn(process.execPath, ["scripts/with-app-env.mjs", "vite", "build"], {
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code) => {
  if (code !== 0) process.exit(code ?? 1);

  const root = process.cwd();
  const publicDir = join(root, ".output", "public");
  const clientDir = join(publicDir, "client");
  const staging = join(root, ".output", "pages-staging");

  if (existsSync(clientDir)) {
    rmSync(staging, { recursive: true, force: true });
    cpSync(clientDir, staging, { recursive: true });
    rmSync(publicDir, { recursive: true, force: true });
    mkdirSync(publicDir, { recursive: true });
    cpSync(staging, publicDir, { recursive: true });
    rmSync(staging, { recursive: true, force: true });
  }

  const shell = join(publicDir, "_shell.html");
  const index = join(publicDir, "index.html");
  const notFound = join(publicDir, "404.html");
  if (existsSync(shell) && !existsSync(index)) {
    copyFileSync(shell, index);
  }
  if (!isCf && existsSync(index) && !existsSync(notFound)) {
    // GitHub Pages deep-link fallback.
    copyFileSync(index, notFound);
  }
  writeFileSync(join(publicDir, ".nojekyll"), "");
  if (isCf) {
    // Cloudflare Pages SPA rewrite (prefer over 404.html so status stays 200).
    writeFileSync(join(publicDir, "_redirects"), "/*    /index.html   200\n");
  }

  if (!existsSync(index)) {
    console.error("[build-pages] missing index.html in .output/public");
    process.exit(1);
  }
  process.exit(0);
});
