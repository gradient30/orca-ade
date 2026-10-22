import { Link } from "@tanstack/react-router";
import { ScrollText } from "lucide-react";
import { LATEST_RELEASE } from "@/lib/docs/releases";

/**
 * Header chip — uses baked LATEST_RELEASE only.
 * Live GitHub sync runs on the changelog page (see DocsShell + useOrcaReleases({ autoload: true })).
 */
export function UpdateEntry() {
  const tag = LATEST_RELEASE.tag;
  return (
    <Link
      to="/docs/$"
      params={{ _splat: "changelog" }}
      aria-label={`更新日志 ${tag}，打开完整中文译本`}
      className="flex h-11 items-center gap-1.5 rounded-md border border-border bg-bg-elevated px-2.5 text-xs text-fg-subtle hover:border-border-strong hover:text-fg"
      data-latest-tag={tag}
      data-release-source="fallback"
    >
      <ScrollText className="size-3.5 shrink-0" aria-hidden />
      <span className="hidden md:inline">更新</span>
      <span className="font-mono text-accent">{tag}</span>
    </Link>
  );
}
