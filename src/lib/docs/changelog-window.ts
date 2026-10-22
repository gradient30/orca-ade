/** Keep in sync with FEATURED_RELEASE_COUNT in github-releases.ts (top-of-page note). */
const DEFAULT_FEATURED = 5;

const VERSION_H2 = /^##\s+v\d/i;

/**
 * Changelog MD is ~700KB / thousands of lines. First paint only needs the
 * index + the featured (top N) version bodies; older notes stay one click away.
 */
export function sliceChangelogMarkdown(
  source: string,
  limit = DEFAULT_FEATURED,
): { preview: string; totalVersions: number; shownVersions: number } {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const versionStarts: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    if (VERSION_H2.test(lines[i] ?? "")) versionStarts.push(i);
  }
  const totalVersions = versionStarts.length;
  if (totalVersions <= limit) {
    return { preview: source, totalVersions, shownVersions: totalVersions };
  }
  const cutAt = versionStarts[limit];
  if (cutAt === undefined) {
    return { preview: source, totalVersions, shownVersions: totalVersions };
  }
  const preview = `${lines.slice(0, cutAt).join("\n").trimEnd()}\n`;
  return { preview, totalVersions, shownVersions: limit };
}
