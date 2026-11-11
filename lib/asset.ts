/**
 * Prefix a file in /public with the site's base path.
 * Empty for https://lugilugi.github.io/, but keeps links working if the site moves to a sub-path.
 */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path; // external URLs and relative paths pass through
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
