import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/cn";
import { CLI_CATEGORIES, CLI_COMMAND_COUNT, type CliCommand } from "@/lib/docs/cli-commands";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="h-11 shrink-0 rounded-md border border-border px-3 text-xs text-fg-subtle hover:border-border-strong hover:text-fg"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1200);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? "已复制" : "复制用法"}
    </button>
  );
}

function CommandCard({ command }: { command: CliCommand }) {
  return (
    <article
      id={command.id}
      data-cli-command={command.bin}
      className="scroll-mt-16 rounded-md border border-border bg-bg-elevated px-4 py-4"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-mono text-sm font-medium text-fg">{command.bin}</h3>
        <div className="flex items-center gap-2">
          {command.retired ? (
            <span className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[11px] text-fg-subtle">
              已退役
            </span>
          ) : null}
          <CopyButton text={command.usage} />
        </div>
      </div>
      <div className="mt-3">
        <div className="text-[11px] tracking-wide text-fg-subtle uppercase">说明</div>
        <p className="mt-1 text-sm leading-6 text-fg-muted">{command.summary}</p>
        {command.note ? <p className="mt-1 text-xs leading-5 text-fg-subtle">{command.note}</p> : null}
      </div>
      <div className="mt-3">
        <div className="text-[11px] tracking-wide text-fg-subtle uppercase">用法</div>
        <pre className="mt-1 overflow-x-auto rounded-sm bg-bg-subtle px-3 py-2 font-mono text-xs leading-5 text-fg">
          <code>{command.usage}</code>
        </pre>
      </div>
      <div className="mt-3">
        <div className="text-[11px] tracking-wide text-fg-subtle uppercase">示例</div>
        <pre className="mt-1 overflow-x-auto rounded-sm bg-bg-subtle px-3 py-2 font-mono text-xs leading-5 text-fg">
          <code>{command.examples.join("\n")}</code>
        </pre>
      </div>
    </article>
  );
}

export function CommandCatalog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return CLI_CATEGORIES.map((section) => ({
      ...section,
      commands: section.commands.filter((command) => {
        if (cat !== "all" && section.id !== cat) return false;
        if (!needle) return true;
        return (
          command.bin.toLowerCase().includes(needle) ||
          command.summary.toLowerCase().includes(needle) ||
          command.usage.toLowerCase().includes(needle) ||
          command.examples.some((ex) => ex.toLowerCase().includes(needle))
        );
      }),
    })).filter((section) => section.commands.length > 0);
  }, [q, cat]);

  const shown = filtered.reduce((n, section) => n + section.commands.length, 0);

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!id) return;
    const node = document.getElementById(id);
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="mt-8 max-w-5xl" data-command-catalog data-command-count={CLI_COMMAND_COUNT}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-md border border-border bg-bg-elevated px-3">
          <Search className="size-4 shrink-0 text-fg-subtle" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="过滤命令、说明或示例…"
            className="h-11 w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle"
            aria-label="过滤命令"
          />
        </div>
        <div className="text-xs text-fg-subtle sm:shrink-0">
          {shown} / {CLI_COMMAND_COUNT} 条
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setCat("all")}
          className={cn(
            "h-11 rounded-md border px-3 text-xs",
            cat === "all" ? "border-accent bg-accent/10 text-fg" : "border-border text-fg-subtle hover:text-fg",
          )}
        >
          全部
        </button>
        {CLI_CATEGORIES.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setCat(section.id)}
            className={cn(
              "h-11 rounded-md border px-3 text-xs",
              cat === section.id ? "border-accent bg-accent/10 text-fg" : "border-border text-fg-subtle hover:text-fg",
            )}
          >
            {section.title}
            <span className="ml-1 font-mono text-fg-subtle">{section.commands.length}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-10">
        {filtered.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2 id={section.id} className="scroll-mt-16 font-display text-lg font-medium text-fg">
              {section.title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-fg-muted">{section.blurb}</p>
            <div className="mt-4 space-y-3">
              {section.commands.map((command) => (
                <CommandCard key={command.id} command={command} />
              ))}
            </div>
          </section>
        ))}
        {filtered.length === 0 ? <p className="text-sm text-fg-subtle">没有匹配的命令。</p> : null}
      </div>
    </div>
  );
}
