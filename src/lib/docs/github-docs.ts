import {
  OFFICIAL_DOCS_PARENT_API,
  officialTreeApi,
  type OfficialBlob,
} from "./official-map.ts";

const UA = "orca-handbook (https://github.com/gradient30/orca-ade)";

type ContentsItem = {
  name: string;
  path: string;
  sha: string;
  type: "file" | "dir";
};

type TreePayload = {
  sha: string;
  truncated?: boolean;
  tree: { path: string; sha: string; type: string; size?: number }[];
};

async function githubGet<T>(url: string, token?: string): Promise<T> {
  const headers: Record<string, string> = {};
  const inBrowser = typeof window !== "undefined";
  if (!inBrowser) {
    headers.Accept = "application/vnd.github+json";
    headers["User-Agent"] = UA;
    headers["X-GitHub-Api-Version"] = "2022-11-28";
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 12_000);
  try {
    const res = await fetch(url, { headers, signal: ctrl.signal });
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    return (await res.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

export type OfficialDocsFetch = {
  treeSha: string;
  blobs: OfficialBlob[];
};

/** Two public GETs: contents of docs/site/content, then the docs/ tree recursive. */
export async function fetchOfficialDocsBlobs(opts?: { token?: string }): Promise<OfficialDocsFetch> {
  const parent = await githubGet<ContentsItem[]>(OFFICIAL_DOCS_PARENT_API, opts?.token);
  if (!Array.isArray(parent)) throw new Error("GitHub docs parent: unexpected payload");
  const docsDir = parent.find((item) => item.name === "docs" && item.type === "dir");
  if (!docsDir?.sha) throw new Error("GitHub docs tree missing");
  const tree = await githubGet<TreePayload>(officialTreeApi(docsDir.sha), opts?.token);
  if (!Array.isArray(tree.tree)) throw new Error("GitHub docs tree: unexpected payload");
  const blobs: OfficialBlob[] = tree.tree
    .filter((node) => node.type === "blob" && node.path.endsWith(".mdx"))
    .map((node) => ({ path: node.path, sha: node.sha, size: node.size ?? 0 }));
  return { treeSha: docsDir.sha, blobs };
}
