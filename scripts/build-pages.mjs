#!/usr/bin/env node
/**
 * GitHub Pages static build. Does not change the live-preview `npm run dev` path.
 *
 * TanStack Start SPA emits client/ + server/. Pages only needs the client shell
 * at the artifact root, plus 404.html so /docs/... deep links hydrate.
 */
import { spawn, spawnSync } from "node:child_process";
import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

process.env.GITHUB_PAGES = "1";
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
  if (existsSync(index) && !existsSync(notFound)) {
    copyFileSync(index, notFound);
  }
  writeFileSync(join(publicDir, ".nojekyll"), "");

  if (!existsSync(index)) {
    console.error("[build-pages] missing index.html in .output/public");
    process.exit(1);
  }
  process.exit(0);
});
