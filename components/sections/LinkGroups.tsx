import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface LinkGroup {
  title: string;
  links: { href: string; label: string }[];
}

/**
 * Compact, crawlable groups of internal links ("Explore by industry",
 * "Meta ads by industry"...). Server-rendered plain <a> tags so search engines
 * can discover and weigh every target page.
 */
export function LinkGroups({
  eyebrow,
  title,
  groups,
  id,
}: {
  eyebrow?: string;
  title: string;
  groups: LinkGroup[];
  id?: string;
}) {
  const visible = groups.filter((g) => g.links.length > 0);
  if (visible.length === 0) return null;
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="border-t border-line bg-ink py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="mb-2 text-xs font-mono uppercase tracking-wider text-lime">{eyebrow}</p>}
        <h2 id={id ? `${id}-title` : undefined} className="text-2xl font-bold font-heading tracking-tight text-fog sm:text-3xl">
          {title}
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {visible.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-dim">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-panel px-4 py-2 text-sm text-mist transition-colors hover:border-lime/40 hover:text-lime"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
