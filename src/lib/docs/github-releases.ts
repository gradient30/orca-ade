export type GithubRelease = {
  tag_name: string;
  name: string | null;
  body: string | null;
  html_url: string;
  published_at: string | null;
  draft: boolean;
  prerelease: boolean;
};

export type LiveRelease = {
  tag: string;
  name: string;
  body: string;
  url: string;
  publishedAt: string;
};

export const ORCA_RELEASES_API = "https://api.github.com/repos/stablyai/orca/releases?per_page=20";
const UA = "orca-handbook (https://github.com/gradient30/orca-ade)";

/** Handbook keeps this many newest desktop releases, in full — not a one-line digest. */
export const FEATURED_RELEASE_COUNT = 5;

export function isDesktopRelease(r: GithubRelease): boolean {
  if (r.draft || r.prerelease) return false;
  const tag = r.tag_name ?? "";
  if (/android|mobile|ios|apk/i.test(tag) || /android|mobile|ios/i.test(r.name ?? "")) return false;
  return /^v\d+\.\d+\.\d+$/.test(tag);
}

export function toLiveRelease(r: GithubRelease): LiveRelease {
  return {
    tag: r.tag_name,
    name: (r.name || r.tag_name).trim(),
    body: r.body ?? "",
    url: r.html_url,
    publishedAt: r.published_at ?? "",
  };
}

export function selectDesktopReleases(raw: GithubRelease[], limit = FEATURED_RELEASE_COUNT): LiveRelease[] {
  return raw.filter(isDesktopRelease).slice(0, limit).map(toLiveRelease);
}

/**
 * Browser: simple GET (no custom headers) so CORS stays a single request.
 * Node / CI: User-Agent + optional token, as GitHub requires UA for unauthenticated calls.
 */
export async function fetchDesktopReleases(opts?: { token?: string; limit?: number }): Promise<LiveRelease[]> {
  const limit = opts?.limit ?? FEATURED_RELEASE_COUNT;
  const headers: Record<string, string> = {};
  const inBrowser = typeof window !== "undefined";
  if (!inBrowser) {
    headers.Accept = "application/vnd.github+json";
    headers["User-Agent"] = UA;
    headers["X-GitHub-Api-Version"] = "2022-11-28";
    if (opts?.token) headers.Authorization = `Bearer ${opts.token}`;
  }
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 10_000);
  try {
    const res = await fetch(ORCA_RELEASES_API, { headers, signal: ctrl.signal });
    if (!res.ok) throw new Error(`GitHub Releases ${res.status}`);
    const raw = (await res.json()) as GithubRelease[];
    if (!Array.isArray(raw)) throw new Error("GitHub Releases: unexpected payload");
    return selectDesktopReleases(raw, limit);
  } finally {
    clearTimeout(timer);
  }
}
