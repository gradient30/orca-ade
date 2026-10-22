import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";
import { SyncDot } from "./SyncDot";
import { MermaidBlock } from "./MermaidBlock";

type Block =
  | { t: "h"; level: number; text: string; id: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "quote"; text: string }
  | { t: "code"; lang: string; code: string }
  | { t: "table"; headers: string[]; rows: string[][] }
  | { t: "img"; src: string; alt: string }
  | { t: "hr" };

function slugify(s: string): string {
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

export type TocItem = { id: string; text: string; level: number };

/** Build TOC from headings. IDs are uniquified so React keys never collide across repeats
 *  (e.g. many 「已知问题」 / Known issues sections in the changelog). */
export function extractToc(
  source: string,
  opts: { minLevel?: number; maxLevel?: number } = {},
): TocItem[] {
  const minLevel = opts.minLevel ?? 2;
  const maxLevel = opts.maxLevel ?? 3;
  return parse(source)
    .filter((b): b is Extract<Block, { t: "h" }> => b.t === "h" && b.level >= minLevel && b.level <= maxLevel)
    .map((b) => ({ id: b.id, text: b.text.replace(/[*`]/g, ""), level: b.level }));
}

function parseHeading(line: string): Extract<Block, { t: "h" }> | null {
  const m = line.match(/^(#{1,4})\s+(.+)$/);
  if (!m) return null;
  const level = m[1]?.length ?? 1;
  let text = (m[2] ?? "").trim();
  let id = "";
  const idm = text.match(/^(.*?)\s*\{#([A-Za-z0-9_-]+)\}\s*$/);
  if (idm) {
    text = (idm[1] ?? "").trim();
    id = idm[2] ?? "";
  } else {
    id = slugify(text);
  }
  return { t: "h", level, text, id };
}

function uniquifyId(raw: string, used: Map<string, number>): string {
  const base = raw || "section";
  const n = (used.get(base) ?? 0) + 1;
  used.set(base, n);
  return n === 1 ? base : `${base}-${n}`;
}

function parse(src: string): Block[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  const usedIds = new Map<string, number>();
  let i = 0;
  while (i < lines.length) {
    const line = lines[i] ?? "";
    if (!line.trim()) {
      i += 1;
      continue;
    }
    if (line.startsWith("<ImagePlaceholder")) {
      let buf = line;
      while (i < lines.length && !buf.includes("/>")) {
        i += 1;
        buf += "\n" + (lines[i] ?? "");
      }
      const srcM = buf.match(/src="([^"]+)"/);
      const capM = buf.match(/caption="([^"]*)"/);
      if (srcM) blocks.push({ t: "img", src: srcM[1] ?? "", alt: capM?.[1] ?? "" });
      else if (capM) blocks.push({ t: "quote", text: `**图示** ${capM[1]}` });
      i += 1;
      continue;
    }
    const img = line.match(/^!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (img) {
      blocks.push({ t: "img", src: img[2] ?? "", alt: img[1] ?? "" });
      i += 1;
      continue;
    }
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const buf: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i]?.startsWith("```")) {
        buf.push(lines[i] ?? "");
        i += 1;
      }
      i += 1;
      blocks.push({ t: "code", lang, code: buf.join("\n") });
      continue;
    }
    const heading = parseHeading(line);
    if (heading) {
      blocks.push({ ...heading, id: uniquifyId(heading.id, usedIds) });
      i += 1;
      continue;
    }
    if (line.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && (lines[i]?.startsWith(">") ?? false)) {
        buf.push((lines[i] ?? "").replace(/^>\s?/, ""));
        i += 1;
      }
      blocks.push({ t: "quote", text: buf.join("\n") });
      continue;
    }
    if (/^\|/.test(line) && lines[i + 1]?.includes("---")) {
      const headers = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && /^\|/.test(lines[i] ?? "")) {
        rows.push(splitRow(lines[i] ?? ""));
        i += 1;
      }
      blocks.push({ t: "table", headers, rows });
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(/^[-*] /, ""));
        i += 1;
      }
      blocks.push({ t: "ul", items });
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(/^\d+\. /, ""));
        i += 1;
      }
      blocks.push({ t: "ol", items });
      continue;
    }
    if (/^---+$/.test(line.trim())) {
      blocks.push({ t: "hr" });
      i += 1;
      continue;
    }
    const buf: string[] = [line];
    i += 1;
    while (i < lines.length && (lines[i] ?? "").trim() && !/^(#{1,4} |```|> |\| |[-*] |\d+\. |---)/.test(lines[i] ?? "")) {
      buf.push(lines[i] ?? "");
      i += 1;
    }
    blocks.push({ t: "p", text: buf.join("\n") });
  }
  return blocks;
}

function splitRow(line: string): string[] {
  return line
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => c.trim());
}

function DocLink({ href, label }: { href: string; label: string }) {
  const [path, hash] = href.split("#");
  const external = href.startsWith("http");
  if (!path && hash) {
    return (
      <a href={`#${hash}`} className="text-accent underline-offset-2 hover:underline">
        {label}
      </a>
    );
  }
  if (!external && (path === "/" || path.startsWith("/docs"))) {
    return (
      <Link to={path} hash={hash} className="text-accent underline-offset-2 hover:underline">
        {label}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="text-accent underline-offset-2 hover:underline"
    >
      {label}
    </a>
  );
}

function Inline({ text }: { text: string }) {
  const parts: Array<string | { href: string; label: string } | { code: string } | { strong: string }> = [];
  const re = /(\[([^\]]+)\]\(([^)]+)\))|(`([^`]+)`)|(\*\*([^*]+)\*\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push({ href: m[3] ?? "", label: m[2] ?? "" });
    else if (m[4]) parts.push({ code: m[5] ?? "" });
    else if (m[6]) parts.push({ strong: m[7] ?? "" });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === "string") return <span key={i}>{p}</span>;
        if ("code" in p)
          return (
            <code key={i} className="rounded-xs bg-bg-subtle px-1 py-0.5 font-mono text-sm text-accent">
              {p.code}
            </code>
          );
        if ("strong" in p)
          return (
            <strong key={i} className="font-medium text-fg">
              {p.strong}
            </strong>
          );
        return <DocLink key={i} href={p.href} label={p.label} />;
      })}
    </>
  );
}

const hClass: Record<number, string> = {
  1: "font-display text-3xl font-semibold tracking-tight text-fg",
  2: "mt-10 border-b border-border pb-2 font-display text-xl font-semibold tracking-tight text-fg",
  3: "mt-8 font-display text-lg font-medium text-fg",
  4: "mt-6 text-base font-medium text-fg",
};

export function Markdown({
  source,
  highlightSectionIds,
}: {
  source: string;
  /** Heading ids from the current sync-highlights batch. */
  highlightSectionIds?: ReadonlySet<string> | string[];
}) {
  const blocks = parse(source);
  const highlighted = highlightSectionIds
    ? highlightSectionIds instanceof Set
      ? highlightSectionIds
      : new Set(highlightSectionIds)
    : null;
  return (
    <div className="docs-prose max-w-3xl">
      {blocks.map((b, i) => {
        if (b.t === "h") {
          const Tag = (`h${b.level}` as unknown) as "h1";
          const showDot = Boolean(highlighted?.has(b.id));
          return (
            <Tag key={i} id={b.id} className={cn("scroll-mt-24", hClass[b.level])}>
              <span className="inline-flex items-center gap-2">
                <Inline text={b.text} />
                {showDot ? <SyncDot size="md" label="本次同步更新了此章节" /> : null}
              </span>
            </Tag>
          );
        }
        if (b.t === "p")
          return (
            <p key={i} className="mt-4 text-base leading-7 text-fg-muted">
              <Inline text={b.text} />
            </p>
          );
        if (b.t === "ul")
          return (
            <ul key={i} className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-7 text-fg-muted">
              {b.items.map((it, j) => (
                <li key={j}>
                  <Inline text={it} />
                </li>
              ))}
            </ul>
          );
        if (b.t === "ol")
          return (
            <ol key={i} className="mt-3 list-decimal space-y-1.5 pl-5 text-base leading-7 text-fg-muted">
              {b.items.map((it, j) => (
                <li key={j}>
                  <Inline text={it} />
                </li>
              ))}
            </ol>
          );
        if (b.t === "quote")
          return (
            <blockquote
              key={i}
              className="mt-5 rounded-md border border-border border-l-[3px] border-l-accent bg-bg-elevated px-4 py-3 text-sm leading-6 text-fg-muted"
            >
              {b.text.split("\n").map((ln, j) => (
                <p key={j} className={j ? "mt-1" : ""}>
                  <Inline text={ln} />
                </p>
              ))}
            </blockquote>
          );
        if (b.t === "code") {
          if (b.lang.trim().toLowerCase() === "mermaid") {
            return <MermaidBlock key={i} code={b.code} />;
          }
          return (
            <pre
              key={i}
              className="mt-4 overflow-x-auto rounded-md border border-border bg-bg-elevated p-4 font-mono text-sm leading-6 text-fg"
            >
              <code>{b.code}</code>
            </pre>
          );
        }
        if (b.t === "img")
          return (
            <figure key={i} className="mt-6 overflow-hidden rounded-md border border-border bg-bg-elevated">
              <img src={b.src} alt={b.alt} className="w-full" />
              {b.alt ? <figcaption className="px-3 py-2 text-sm text-fg-subtle">{b.alt}</figcaption> : null}
            </figure>
          );
        if (b.t === "table")
          return (
            <div key={i} className="mt-4 overflow-x-auto rounded-md border border-border">
              <table className="w-full min-w-lg text-left text-sm">
                <thead className="bg-bg-subtle text-fg-muted">
                  <tr>
                    {b.headers.map((h, j) => (
                      <th key={j} className="px-3 py-2 font-medium">
                        <Inline text={h} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((row, r) => (
                    <tr key={r} className="border-t border-border">
                      {row.map((c, j) => (
                        <td key={j} className="px-3 py-2 align-top text-fg-muted">
                          <Inline text={c} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        return <hr key={i} className="my-8 border-border" />;
      })}
    </div>
  );
}
