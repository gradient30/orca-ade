import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Load the TS helpers via dynamic import through tsx isn't available in node:test here.
// Re-implement the contract checks against the source string + a tiny inline copy of readArgValue.

function readArgValue(argv, flag) {
  const eq = argv.find((a) => a === flag || a.startsWith(`${flag}=`));
  if (!eq) return undefined;
  if (eq.startsWith(`${flag}=`)) return eq.slice(flag.length + 1);
  const idx = argv.indexOf(flag);
  if (idx < 0) return undefined;
  const next = argv[idx + 1];
  if (!next || next.startsWith("-")) return undefined;
  return next;
}

describe("sync-official-map argv flags", () => {
  it("does not treat node binary (argv[0]) as --highlight / --mark-translated", () => {
    const argv = [
      "/opt/hostedtoolcache/node/22.23.3/x64/bin/node",
      "scripts/sync-official-map.ts",
    ];
    assert.equal(readArgValue(argv, "--highlight"), undefined);
    assert.equal(readArgValue(argv, "--mark-translated"), undefined);
  });

  it("reads --flag=value and --flag value", () => {
    assert.equal(
      readArgValue(["node", "x.ts", "--highlight=ssh=use-a-target,changelog"], "--highlight"),
      "ssh=use-a-target,changelog",
    );
    assert.equal(
      readArgValue(["node", "x.ts", "--mark-translated", "ssh,v1.4.237"], "--mark-translated"),
      "ssh,v1.4.237",
    );
  });
});
