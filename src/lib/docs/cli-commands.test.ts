import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { CLI_CATEGORIES, CLI_COMMANDS, CLI_COMMAND_COUNT, CLI_COMMAND_TOC } from "./cli-commands.ts";

/** Exact `orca help` Commands list from the 2026-09 user dump. Do not add extras. */
const HELP_BINS = [
  "orca open",
  "orca serve",
  "orca status",
  "orca diagnostics memory",
  "orca agent-context",
  "orca account add",
  "orca account list",
  "orca skills installed",
  "orca skills share",
  "orca skills list",
  "orca skills get",
  "orca skills install",
  "orca skills update",
  "orca host list",
  "orca environment add",
  "orca environment list",
  "orca environment show",
  "orca environment rm",
  "orca vm recipe doctor",
  "orca automations list",
  "orca automations show",
  "orca automations create",
  "orca automations edit",
  "orca automations remove",
  "orca automations run",
  "orca automations runs",
  "orca project list",
  "orca project setups",
  "orca project setup-existing-folder",
  "orca project setup-clone",
  "orca project setup-create",
  "orca project setup-update",
  "orca project setup-delete",
  "orca repo list",
  "orca repo add",
  "orca repo show",
  "orca repo set-base-ref",
  "orca repo search-refs",
  "orca worktree list",
  "orca worktree show",
  "orca worktree current",
  "orca worktree create",
  "orca worktree set",
  "orca worktree rm",
  "orca worktree ps",
  "orca file open",
  "orca file diff",
  "orca file open-changed",
  "orca terminal list",
  "orca terminal show",
  "orca terminal read",
  "orca terminal send",
  "orca terminal wait",
  "orca terminal create",
  "orca terminal rename",
  "orca terminal split",
  "orca terminal switch",
  "orca terminal focus",
  "orca terminal close",
  "orca orchestration run-create",
  "orca orchestration run-use",
  "orca orchestration run-current",
  "orca orchestration run-list",
  "orca orchestration run-show",
  "orca orchestration send",
  "orca orchestration check",
  "orca orchestration ask",
  "orca orchestration reply",
  "orca orchestration inbox",
  "orca orchestration task-create",
  "orca orchestration task-list",
  "orca orchestration task-update",
  "orca orchestration dispatch",
  "orca orchestration dispatch-show",
  "orca orchestration worker-start",
  "orca orchestration worker-show",
  "orca orchestration worker-read",
  "orca orchestration worker-stop",
  "orca orchestration worker-abandon",
  "orca orchestration worker-release",
  "orca orchestration worker-retain",
  "orca orchestration worker-list",
  "orca orchestration coordinator-start",
  "orca orchestration coordinator-stop",
  "orca orchestration gate-create",
  "orca orchestration gate-resolve",
  "orca orchestration gate-list",
  "orca orchestration reset",
  "orca computer capabilities",
  "orca computer permissions",
  "orca computer list-apps",
  "orca computer list-windows",
  "orca computer get-app-state",
  "orca computer click",
  "orca computer perform-secondary-action",
  "orca computer scroll",
  "orca computer drag",
  "orca computer type-text",
  "orca computer press-key",
  "orca computer hotkey",
  "orca computer paste-text",
  "orca computer set-value",
  "orca linear",
  "orca emulator list",
  "orca emulator attach",
  "orca emulator tap",
  "orca emulator type",
  "orca emulator gesture",
  "orca emulator button",
  "orca emulator rotate",
  "orca emulator exec",
  "orca emulator kill",
  "orca tab create",
  "orca tab list",
  "orca tab show",
  "orca tab current",
  "orca tab profile list",
  "orca tab profile create",
  "orca tab profile delete",
  "orca tab profile set",
  "orca tab profile show",
  "orca tab profile use-default",
  "orca tab profile clone",
  "orca tab switch",
  "orca tab close",
  "orca snapshot",
  "orca goto",
  "orca click",
  "orca fill",
  "orca type",
  "orca select",
  "orca hover",
  "orca keypress",
  "orca scroll",
  "orca back",
  "orca reload",
  "orca screenshot",
  "orca eval",
  "orca wait",
  "orca check",
  "orca uncheck",
  "orca focus",
  "orca clear",
  "orca drag",
  "orca upload",
  "orca dblclick",
  "orca forward",
  "orca scrollintoview",
  "orca get",
  "orca is",
  "orca inserttext",
  "orca mouse move",
  "orca mouse down",
  "orca mouse up",
  "orca mouse wheel",
  "orca find",
  "orca set device",
  "orca set offline",
  "orca set headers",
  "orca set credentials",
  "orca set media",
  "orca clipboard read",
  "orca clipboard write",
  "orca dialog accept",
  "orca dialog dismiss",
  "orca storage local get",
  "orca storage local set",
  "orca storage local clear",
  "orca storage session get",
  "orca storage session set",
  "orca storage session clear",
  "orca download",
  "orca highlight",
  "orca exec",
];

const CATEGORY_COUNTS: Record<string, number> = {
  startup: 3,
  diagnostics: 1,
  "agent-discovery": 1,
  accounts: 2,
  skills: 6,
  hosts: 1,
  environments: 4,
  recipes: 1,
  automations: 7,
  projects: 7,
  repos: 5,
  worktrees: 7,
  files: 3,
  terminals: 11,
  orchestration: 29,
  computer: 14,
  "linear-cli": 1,
  emulator: 9,
  browser: 62,
};

describe("cli command catalog", () => {
  it("matches the 174 unique commands from orca help, no extras", () => {
    assert.equal(HELP_BINS.length, 174);
    assert.equal(CLI_COMMAND_COUNT, 174);
    assert.equal(CLI_COMMANDS.length, 174);
    assert.deepEqual(
      [...CLI_COMMANDS.map((c) => c.bin)].sort(),
      [...HELP_BINS].sort(),
    );
    assert.equal(new Set(CLI_COMMANDS.map((c) => c.id)).size, 174);
    assert.equal(new Set(CLI_COMMANDS.map((c) => c.bin)).size, 174);
  });

  it("covers every help group with the expected sizes", () => {
    const ids = CLI_CATEGORIES.map((c) => c.id);
    assert.deepEqual(ids, Object.keys(CATEGORY_COUNTS));
    for (const cat of CLI_CATEGORIES) {
      assert.equal(cat.commands.length, CATEGORY_COUNTS[cat.id], cat.id);
    }
    assert.equal(
      CLI_COMMANDS.filter((c) => c.bin.startsWith("orca orchestration ")).length,
      29,
    );
    assert.equal(CLI_COMMANDS.filter((c) => c.bin.startsWith("orca computer ")).length, 14);
    assert.equal(CLI_COMMANDS.filter((c) => c.bin.startsWith("orca emulator ")).length, 9);
    assert.equal(CLI_COMMANDS.filter((c) => c.bin === "orca linear").length, 1);
    assert.equal(CLI_COMMANDS.filter((c) => c.bin.startsWith("orca linear ")).length, 0);
    assert.ok(CLI_COMMANDS.some((c) => c.bin === "orca terminal focus" && c.note));
    assert.ok(CLI_COMMANDS.some((c) => c.bin === "orca orchestration coordinator-start" && c.retired));
    assert.ok(CLI_COMMANDS.some((c) => c.bin === "orca orchestration coordinator-stop" && c.retired));
  });

  it("keeps command ids distinct from category heading ids", () => {
    const heading = new Set(CLI_CATEGORIES.map((c) => c.id));
    heading.add("conventions");
    heading.add("cli-commands");
    for (const cmd of CLI_COMMANDS) {
      assert.equal(heading.has(cmd.id), false, cmd.id);
    }
    assert.ok(CLI_COMMAND_TOC.some((t) => t.id === "conventions"));
    assert.equal(CLI_COMMAND_TOC.length, CLI_CATEGORIES.length + 1);
  });

  it("does not invent flags or commands absent from orca help", () => {
    const banned = [
      "--screen",
      "artifacts",
      "emulator shutdown",
      "agent hooks",
      "full-screenshot",
      "save-issue",
      "list-issues",
      "coordinator-run",
    ];
    const blob = JSON.stringify(CLI_COMMANDS);
    for (const token of banned) {
      assert.equal(blob.includes(token), false, token);
    }
    assert.equal(
      CLI_COMMANDS.some((c) => c.bin === "orca artifacts" || c.bin.startsWith("orca artifacts ")),
      false,
    );
    assert.equal(
      CLI_COMMANDS.some((c) => c.bin === "orca agent hooks" || c.bin.startsWith("orca agent hooks")),
      false,
    );
    assert.equal(
      CLI_COMMANDS.some((c) => c.bin === "orca emulator shutdown"),
      false,
    );
  });

  it("gives every command Chinese summary, usage, and at least one example", () => {
    for (const cmd of CLI_COMMANDS) {
      assert.ok(cmd.summary.trim().length > 0, cmd.bin);
      assert.match(cmd.summary, /[\u4e00-\u9fff]/, cmd.bin);
      assert.ok(cmd.usage.startsWith(cmd.bin), cmd.bin);
      assert.ok(cmd.examples.length >= 1, cmd.bin);
      for (const ex of cmd.examples) {
        assert.ok(ex.startsWith("orca ") || ex.startsWith("orca-ide "), `${cmd.bin} example ${ex}`);
      }
    }
  });
});
