import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/cn";

type Status = "loading" | "ready" | "error";

function cssVar(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

function readThemeVariables() {
  const theme = document.documentElement.getAttribute("data-theme") || "dark";
  const fg = cssVar("--app-fg", "#e8edf4");
  const muted = cssVar("--app-fg-muted", "#93a0b3");
  const elevated = cssVar("--app-bg-elevated", "#141820");
  const subtle = cssVar("--app-bg-subtle", "#1a1f28");
  const bg = cssVar("--app-bg", "#0c0e12");
  const border = cssVar("--app-border", "#2a3340");
  const accent = cssVar("--app-accent", "#8fb4c8");
  return {
    darkMode: theme === "dark",
    background: elevated,
    fontFamily: '"IBM Plex Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", ui-sans-serif, system-ui, sans-serif',
    primaryColor: subtle,
    primaryTextColor: fg,
    primaryBorderColor: border,
    lineColor: accent,
    secondaryColor: bg,
    tertiaryColor: elevated,
    nodeTextColor: fg,
    mainBkg: elevated,
    clusterBkg: bg,
    clusterBorder: border,
    titleColor: fg,
    edgeLabelBackground: elevated,
    tertiaryTextColor: muted,
    textColor: fg,
    actorTextColor: fg,
    labelTextColor: fg,
  };
}

type MermaidApi = {
  initialize: (config: Record<string, unknown>) => void;
  render: (id: string, source: string) => Promise<{ svg: string }>;
};

let mermaidMod: MermaidApi | null = null;
let loadPromise: Promise<MermaidApi> | null = null;
let renderChain: Promise<unknown> = Promise.resolve();
let renderSeq = 0;

function loadMermaid(): Promise<MermaidApi> {
  if (mermaidMod) return Promise.resolve(mermaidMod);
  if (!loadPromise) {
    loadPromise = import("mermaid").then((mod) => {
      const api = (mod.default ?? mod) as MermaidApi;
      mermaidMod = api;
      return api;
    });
  }
  return loadPromise;
}

function renderDiagram(id: string, source: string): Promise<string> {
  const job = renderChain.then(async () => {
    const mermaid = await loadMermaid();
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      themeVariables: readThemeVariables(),
      fontFamily: '"IBM Plex Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", ui-sans-serif, system-ui, sans-serif',
      flowchart: {
        htmlLabels: true,
        curve: "basis",
        padding: 8,
        nodeSpacing: 20,
        rankSpacing: 28,
        wrappingWidth: 220,
        useMaxWidth: true,
      },
    });
    const { svg } = await mermaid.render(id, source);
    return svg;
  });
  renderChain = job.then(
    () => undefined,
    () => undefined,
  );
  return job;
}

export function MermaidBlock({ code }: { code: string }) {
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState("");
  const [status, setStatus] = useState<Status>("loading");
  const [themeTick, setThemeTick] = useState(0);

  useEffect(() => {
    const obs = new MutationObserver(() => setThemeTick((n) => n + 1));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    setStatus((prev) => (prev === "ready" ? prev : "loading"));
    const id = `mmd${reactId}${++renderSeq}`;
    void renderDiagram(id, code)
      .then((next) => {
        if (cancelled) return;
        setSvg(next);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
        setSvg("");
      });
    return () => {
      cancelled = true;
    };
  }, [code, reactId, themeTick]);

  if (status === "error") {
    return (
      <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-bg-elevated p-4 font-mono text-sm leading-6 text-fg">
        <code>{code}</code>
      </pre>
    );
  }

  return (
    <figure
      className={cn(
        "mermaid-block mt-6 overflow-x-auto rounded-md border border-border bg-bg-elevated p-3 sm:p-4",
        status === "loading" && !svg && "min-h-40",
      )}
      aria-label="流程图"
    >
      {status === "loading" && !svg ? (
        <p className="px-2 py-10 text-center text-sm text-fg-subtle">正在绘制图表…</p>
      ) : (
        <div
          className="mermaid-svg min-w-0 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      )}
    </figure>
  );
}
