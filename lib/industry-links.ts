/**
 * Single source for the industry landing pages and the service x industry
 * pages, used to build internal links (homepage, hubs, service pages and the
 * related-pages block on each industry page). Every page listed here exists
 * under app/.
 */

/** /for/[slug] industry pages */
export const industryPages: { slug: string; label: string }[] = [
  { slug: "agencies", label: "Marketing & Growth Agencies" },
  { slug: "coaches", label: "High-Ticket Coaches" },
  { slug: "business-coaches", label: "Business Coaches" },
  { slug: "executive-coaches", label: "Executive Coaches" },
  { slug: "fitness-coaches", label: "Fitness Coaches" },
  { slug: "consultants", label: "B2B Consultants" },
  { slug: "course-creators", label: "Course Creators" },
  { slug: "online-education", label: "Online Education" },
  { slug: "b2b-services", label: "B2B Service Companies" },
  { slug: "saas", label: "B2B SaaS" },
  { slug: "med-spas", label: "Med Spas & Aesthetics" },
  { slug: "financial-advisors", label: "Financial Advisors" },
  { slug: "insurance-agencies", label: "Insurance Agencies" },
  { slug: "law-firms", label: "Law Firms" },
  { slug: "real-estate-investors", label: "Real Estate Investors" },
  { slug: "recruitment-agencies", label: "Recruitment Agencies" },
  { slug: "home-improvement", label: "Home Improvement & Roofing" },
  { slug: "solar-companies", label: "Solar Companies" },
];

/** /meta-ads-for-[slug] pages */
export const metaAdsIndustrySlugs = [
  "coaches",
  "consultants",
  "course-creators",
  "financial-advisors",
  "law-firms",
  "med-spas",
  "real-estate-investors",
  "saas",
] as const;

/** /appointment-setting-for-[slug] pages */
export const appointmentSettingIndustrySlugs = ["agencies", "coaches", "consultants", "saas"] as const;

const LABEL: Record<string, string> = Object.fromEntries(industryPages.map((p) => [p.slug, p.label]));
export const industryLabel = (slug: string) => LABEL[slug] ?? slug.replace(/-/g, " ");

export const metaAdsIndustryLinks = metaAdsIndustrySlugs.map((s) => ({
  href: `/meta-ads-for-${s}`,
  label: `Meta Ads for ${industryLabel(s)}`,
}));

export const appointmentSettingIndustryLinks = appointmentSettingIndustrySlugs.map((s) => ({
  href: `/appointment-setting-for-${s}`,
  label: `Appointment Setting for ${industryLabel(s)}`,
}));

/** Which industry a path belongs to, for /for/x, /meta-ads-for-x and /appointment-setting-for-x. */
export function industryFromPath(pathname: string): string | null {
  const p = pathname.replace(/\/+$/, "");
  const m =
    p.match(/^\/for\/([a-z0-9-]+)$/) ||
    p.match(/^\/meta-ads-for-([a-z0-9-]+)$/) ||
    p.match(/^\/appointment-setting-for-([a-z0-9-]+)$/);
  return m ? m[1] : null;
}

/** Related pages for an industry: its other service variants plus sibling industries. */
export function relatedIndustryLinks(pathname: string) {
  const slug = industryFromPath(pathname);
  if (!slug) return null;
  const same: { href: string; label: string }[] = [];
  if (LABEL[slug]) same.push({ href: `/for/${slug}`, label: `Lead Generation for ${industryLabel(slug)}` });
  if ((metaAdsIndustrySlugs as readonly string[]).includes(slug))
    same.push({ href: `/meta-ads-for-${slug}`, label: `Meta Ads for ${industryLabel(slug)}` });
  if ((appointmentSettingIndustrySlugs as readonly string[]).includes(slug))
    same.push({ href: `/appointment-setting-for-${slug}`, label: `Appointment Setting for ${industryLabel(slug)}` });
  const here = pathname.replace(/\/+$/, "");
  const sameFiltered = same.filter((l) => l.href !== here);

  // Five sibling industries, rotated by position so every industry page gets inbound links.
  const idx = Math.max(0, industryPages.findIndex((p) => p.slug === slug));
  const siblings = Array.from({ length: 5 }, (_, i) => industryPages[(idx + 1 + i) % industryPages.length])
    .filter((p) => p.slug !== slug)
    .map((p) => ({ href: `/for/${p.slug}`, label: p.label }));

  return { industry: industryLabel(slug), same: sameFiltered, siblings };
}
