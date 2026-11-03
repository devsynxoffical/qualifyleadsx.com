import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders a plain string with lightweight inline markup:
 *   [link text](/internal/path)  -> Next <Link>
 *   [link text](https://...)     -> external <a> (nofollow-free, opens in new tab)
 *   **bold**                     -> <strong>
 *
 * Used for blog body copy so editorial content in lib/blog-data.ts can carry
 * contextual internal links without embedding JSX in the data file.
 */
const TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*)/g;

export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(TOKEN).filter(Boolean);

  const nodes: ReactNode[] = parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const isInternal = href.startsWith("/");
      return isInternal ? (
        <Link
          key={i}
          href={href}
          className={
            className ??
            "font-medium text-lime underline decoration-lime/40 underline-offset-4 transition-colors hover:text-lime-soft hover:decoration-lime"
          }
        >
          {label}
        </Link>
      ) : (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            className ??
            "font-medium text-lime underline decoration-lime/40 underline-offset-4 transition-colors hover:text-lime-soft hover:decoration-lime"
          }
        >
          {label}
        </a>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={i} className="font-semibold text-fog">
          {bold[1]}
        </strong>
      );
    }
    return part;
  });

  return <>{nodes}</>;
}

/** Strip inline markup for plain-text contexts (schema.org, meta tags, word counts). */
export function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1");
}
