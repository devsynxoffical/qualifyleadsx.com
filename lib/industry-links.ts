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
  { slug: "fitness-coaches", label: "Fitness Coaches" },
  { slug: "consultants", label: "B2B Consultants" },
  { slug: "course-creators", label: "Course Creators" },
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
