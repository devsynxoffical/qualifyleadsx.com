import Link from "next/link";
import routeLastmod from "@/lib/route-lastmod.json";
import { brandFacts } from "@/lib/brand-facts";

const lastmod = routeLastmod as Record<string, string>;

function formatDate(iso: string) {
  const d = new Date(`${iso.slice(0, 10)}T12:00:00Z`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

/**
 * Visible byline and "Last updated" date for guides, case studies, comparisons and
 * benchmark pages. The date is the page's real last-modified date: pass `updated`
 * (blog posts) or `path` to read it from lib/route-lastmod.json (git history).
 */
export function PageByline({ path, updated, className = "" }: { path?: string; updated?: string; className?: string }) {
  const date =
    updated ?? (path ? lastmod[path] ?? (path.startsWith("/case-studies/") ? lastmod["/case-studies/*"] : undefined) : undefined);
  return (
    <p className={`text-xs font-mono text-dim ${className}`}>
      By the {brandFacts.name} team, led by{" "}
      <Link href={brandFacts.founder.path} className="text-mist underline underline-offset-2 hover:text-lime">
        {brandFacts.founder.name}
      </Link>
      {date ? (
        <>
          {" "}· Last updated <time dateTime={date.slice(0, 10)}>{formatDate(date)}</time>
        </>
      ) : null}
    </p>
  );
}
