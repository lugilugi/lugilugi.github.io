/**
 * Prefix a file in /public with the site's base path.
 * Needed on GitHub Pages, where the site lives under /personal-website/.
 *   asset("/images/s2-a.jpg") → "/personal-website/images/s2-a.jpg"
 */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path; // external URLs and relative paths pass through
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
