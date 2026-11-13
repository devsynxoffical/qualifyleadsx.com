/**
 * Related-links rules (Site Growth Playbook, STEP 4).
 *
 * One block above the footer on every page, built from the page type:
 *   industry page  -> 6 sibling industries (same service, then same sector), 3 core services, 2 guides
 *   core service   -> 6 related services, 4 industries, 2 tools, 2 guides
 *   tool/benchmark -> all other tools, 2 matching services, 2 guides
 *   blog post      -> 3 related posts, then the services, industries and tools the post supports
 *   case study     -> 4 other case studies (rotated), 3 services, 2 guides
 * Location pages get "nearby locations" once real location pages exist.
 *
 * Every URL here exists under app/. Anchors are descriptive, never "click here".
 */
import { blogPosts } from "@/lib/blog-data";
import { caseStudyMeta } from "@/lib/case-study-meta";
import { industryPages, industryLabel, metaAdsIndustrySlugs, appointmentSettingIndustrySlugs } from "@/lib/industry-links";

export type Link = { href: string; label: string };
export type Group = { title: string; links: Link[] };

export const coreServices: Link[] = [
  { href: "/lead-generation-agency", label: "Lead generation agency" },
  { href: "/high-ticket-lead-generation", label: "High-ticket lead generation" },
  { href: "/b2b-lead-generation", label: "B2B lead generation" },
  { href: "/meta-ads-agency", label: "Meta ads agency" },
  { href: "/appointment-setting", label: "Appointment setting" },
  { href: "/speed-to-lead", label: "AI speed to lead" },
  { href: "/vsl-funnels", label: "VSL funnel agency" },
  { href: "/whatsapp-lead-nurture", label: "WhatsApp lead nurture" },
  { href: "/crm-automation", label: "CRM automation" },
  { href: "/outsourced-sales-closers", label: "Outsourced sales closers" },
];

export const tools: Link[] = [
  { href: "/tools/cac-calculator", label: "CAC calculator" },
  { href: "/tools/cost-per-booked-call-calculator", label: "Cost per booked call calculator" },
  { href: "/tools/ltv-cac-calculator", label: "LTV to CAC calculator" },
  { href: "/tools/roas-calculator", label: "ROAS & break-even calculator" },
  { href: "/tools/meta-ads-budget-calculator", label: "Meta ads budget calculator" },
  { href: "/tools/meta-ads-bid-strategy-calculator", label: "Meta ads bid strategy calculator" },
  { href: "/tools/show-rate-calculator", label: "Show-up rate calculator" },
  { href: "/tools/lead-scoring-template", label: "Lead scoring template" },
];

export const benchmarks: Link[] = [
  { href: "/benchmarks/cost-per-lead-by-industry", label: "Cost per lead by industry" },
  { href: "/benchmarks/cost-per-booked-call", label: "Cost per booked call benchmarks" },
  { href: "/benchmarks/meta-ads-cpm", label: "Meta ads CPM benchmarks" },
  { href: "/benchmarks/close-rate", label: "Close rate benchmarks" },
  { href: "/benchmarks/show-rate", label: "Show rate benchmarks" },
];

/** Services that sit closest to each service (for "related services"). */
const serviceNeighbours: Record<string, string[]> = {
  "/lead-generation-agency": ["/high-ticket-lead-generation", "/b2b-lead-generation", "/meta-ads-agency", "/appointment-setting", "/vsl-funnels", "/speed-to-lead"],
  "/high-ticket-lead-generation": ["/lead-generation-agency", "/vsl-funnels", "/meta-ads-agency", "/appointment-setting", "/outsourced-sales-closers", "/b2b-lead-generation"],
  "/b2b-lead-generation": ["/lead-generation-agency", "/appointment-setting", "/meta-ads-agency", "/crm-automation", "/speed-to-lead", "/high-ticket-lead-generation"],
  "/meta-ads-agency": ["/vsl-funnels", "/lead-generation-agency", "/high-ticket-lead-generation", "/appointment-setting", "/speed-to-lead", "/crm-automation"],
  "/appointment-setting": ["/speed-to-lead", "/whatsapp-lead-nurture", "/outsourced-sales-closers", "/crm-automation", "/meta-ads-agency", "/lead-generation-agency"],
  "/speed-to-lead": ["/appointment-setting", "/whatsapp-lead-nurture", "/crm-automation", "/outsourced-sales-closers", "/meta-ads-agency", "/b2b-lead-generation"],
  "/vsl-funnels": ["/meta-ads-agency", "/high-ticket-lead-generation", "/appointment-setting", "/lead-generation-agency", "/crm-automation", "/speed-to-lead"],
  "/whatsapp-lead-nurture": ["/speed-to-lead", "/appointment-setting", "/crm-automation", "/outsourced-sales-closers", "/vsl-funnels", "/lead-generation-agency"],
  "/crm-automation": ["/speed-to-lead", "/whatsapp-lead-nurture", "/appointment-setting", "/b2b-lead-generation", "/meta-ads-agency", "/lead-generation-agency"],
  "/outsourced-sales-closers": ["/appointment-setting", "/high-ticket-lead-generation", "/speed-to-lead", "/whatsapp-lead-nurture", "/lead-generation-agency", "/meta-ads-agency"],
};

/** Two guides that support each service, tool or benchmark. */
const guidesFor: Record<string, string[]> = {
  "/lead-generation-agency": ["how-much-does-a-lead-generation-agency-cost", "cost-per-acquisition-vs-cost-per-lead"],
  "/high-ticket-lead-generation": ["high-ticket-lead-generation-strategies", "high-ticket-sales-how-to-get-high-ticket-clients"],
  "/b2b-lead-generation": ["cold-outreach-vs-paid-traffic-high-ticket-b2b", "b2b-client-acquisition-cost-cac-benchmarks-2026"],
  "/meta-ads-agency": ["meta-ads-for-high-ticket-b2b-broad-targeting", "how-much-does-meta-ads-cost"],
  "/appointment-setting": ["how-to-hire-an-appointment-setter", "b2b-appointment-setting-vs-in-house-sdr-teams"],
  "/speed-to-lead": ["speed-to-lead-statistics-response-time", "speed-to-lead"],
  "/vsl-funnels": ["how-to-write-a-vsl-script-12-minute-structure", "the-2026-vsl-funnel-blueprint-high-ticket-client-acquisition"],
  "/whatsapp-lead-nurture": ["ai-whatsapp-lead-nurture-pipeline-high-ticket", "whatsapp-marketing-for-consultants"],
  "/crm-automation": ["automated-lead-qualification-system-high-ticket", "why-leads-dont-show-up"],
  "/outsourced-sales-closers": ["high-ticket-sales-training-framework", "b2b-sales-closer-job-description"],
  "/mastermind": ["scaling-from-100k-to-500k-coaching", "meta-advantage-plus-for-b2b"],
  "/tools/cac-calculator": ["b2b-client-acquisition-cost-cac-benchmarks-2026", "cost-per-acquisition-vs-cost-per-lead"],
  "/tools/cost-per-booked-call-calculator": ["how-much-does-a-lead-generation-agency-cost", "b2b-roas-benchmarks-qualified-appointment-generation"],
  "/tools/ltv-cac-calculator": ["b2b-client-acquisition-cost-cac-benchmarks-2026", "scaling-from-100k-to-500k-coaching"],
  "/tools/roas-calculator": ["b2b-roas-benchmarks-qualified-appointment-generation", "how-much-does-meta-ads-cost"],
  "/tools/show-rate-calculator": ["how-to-increase-show-rate", "why-leads-dont-show-up"],
  "/tools/meta-ads-budget-calculator": ["how-much-does-meta-ads-cost", "meta-ads-for-high-ticket-b2b-broad-targeting"],
  "/tools/meta-ads-bid-strategy-calculator": ["meta-advantage-plus-for-b2b", "how-much-does-meta-ads-cost"],
  "/tools/lead-scoring-template": ["how-to-qualify-leads", "automated-lead-qualification-system-high-ticket"],
  "/benchmarks/close-rate": ["high-ticket-sales-training-framework", "b2b-sales-closer-job-description"],
  "/benchmarks/cost-per-booked-call": ["how-much-does-a-lead-generation-agency-cost", "b2b-roas-benchmarks-qualified-appointment-generation"],
  "/benchmarks/cost-per-lead-by-industry": ["cost-per-acquisition-vs-cost-per-lead", "how-much-does-meta-ads-cost"],
  "/benchmarks/meta-ads-cpm": ["how-much-does-meta-ads-cost", "meta-advantage-plus-for-b2b"],
  "/benchmarks/show-rate": ["how-to-increase-show-rate", "why-leads-dont-show-up"],
};

/** Two services that match each tool or benchmark. */
const servicesForTool: Record<string, string[]> = {
  "/tools/cac-calculator": ["/lead-generation-agency", "/meta-ads-agency"],
  "/tools/cost-per-booked-call-calculator": ["/appointment-setting", "/meta-ads-agency"],
  "/tools/ltv-cac-calculator": ["/lead-generation-agency", "/high-ticket-lead-generation"],
  "/tools/roas-calculator": ["/meta-ads-agency", "/vsl-funnels"],
  "/tools/show-rate-calculator": ["/appointment-setting", "/whatsapp-lead-nurture"],
  "/tools/meta-ads-budget-calculator": ["/meta-ads-agency", "/appointment-setting"],
  "/tools/meta-ads-bid-strategy-calculator": ["/meta-ads-agency", "/lead-generation-agency"],
  "/tools/lead-scoring-template": ["/appointment-setting", "/crm-automation"],
  "/benchmarks/close-rate": ["/outsourced-sales-closers", "/appointment-setting"],
  "/benchmarks/cost-per-booked-call": ["/appointment-setting", "/meta-ads-agency"],
  "/benchmarks/cost-per-lead-by-industry": ["/lead-generation-agency", "/meta-ads-agency"],
  "/benchmarks/meta-ads-cpm": ["/meta-ads-agency", "/vsl-funnels"],
  "/benchmarks/show-rate": ["/appointment-setting", "/whatsapp-lead-nurture"],
};

/** Industry sectors, so siblings from the same sector come first. */
const sectors: string[][] = [
  ["coaches", "fitness-coaches", "course-creators"],
  ["agencies", "consultants", "b2b-services", "saas", "recruitment-agencies"],
  ["med-spas", "financial-advisors", "insurance-agencies", "law-firms", "real-estate-investors", "home-improvement", "solar-companies"],
];

/** Two guides per industry (falls back to general guides). */
const industryGuides: Record<string, string[]> = {
  coaches: ["meta-ads-for-coaches-guide", "scaling-from-100k-to-500k-coaching"],
  "fitness-coaches": ["meta-ads-for-coaches-guide", "high-ticket-funnel-examples"],
  "course-creators": ["high-ticket-funnel-examples", "vsl-script-template-high-ticket"],
  consultants: ["whatsapp-marketing-for-consultants", "cold-outreach-vs-paid-traffic-high-ticket-b2b"],
  agencies: ["facebook-ads-agency-vs-in-house-media-buyer", "how-much-does-a-lead-generation-agency-cost"],
  "b2b-services": ["b2b-client-acquisition-cost-cac-benchmarks-2026", "cold-outreach-vs-paid-traffic-high-ticket-b2b"],
  saas: ["b2b-appointment-setting-vs-in-house-sdr-teams", "meta-advantage-plus-for-b2b"],
  "recruitment-agencies": ["b2b-appointment-setting-vs-in-house-sdr-teams", "how-to-qualify-leads"],
  "home-improvement": ["facebook-ads-for-hvac-companies", "how-to-increase-show-rate"],
  "solar-companies": ["facebook-ads-for-hvac-companies", "how-to-qualify-leads"],
};
const defaultGuides = ["high-ticket-lead-generation-strategies", "how-to-qualify-leads"];

const postBySlug = new Map(blogPosts.map((p) => [p.slug, p]));
const guide = (slug: string): Link | null => {
  const p = postBySlug.get(slug);
  return p ? { href: `/blog/${slug}`, label: p.seoTitle ?? p.title } : null;
};
const guides = (slugs: string[]) => slugs.map(guide).filter((l): l is Link => Boolean(l));
const service = (href: string) => coreServices.find((s) => s.href === href);
const services = (hrefs: string[]) => hrefs.map(service).filter((l): l is Link => Boolean(l));

function industryLinksFor(slug: string, count: number): Link[] {
  const sector = sectors.find((s) => s.includes(slug)) ?? [];
  const order = [...sector.filter((s) => s !== slug), ...industryPages.map((p) => p.slug).filter((s) => s !== slug && !sector.includes(s))];
  return order.slice(0, count).map((s) => ({ href: `/for/${s}`, label: `Lead generation for ${industryLabel(s).toLowerCase()}` }));
}

function industryGroups(path: string): Group[] | null {
  const m =
    path.match(/^\/for\/([a-z0-9-]+)$/) ||
    path.match(/^\/meta-ads-for-([a-z0-9-]+)$/) ||
    path.match(/^\/appointment-setting-for-([a-z0-9-]+)$/);
  if (!m) return null;
  const slug = m[1];
  const variants: Link[] = [];
  if (industryPages.some((p) => p.slug === slug)) variants.push({ href: `/for/${slug}`, label: `Lead generation for ${industryLabel(slug).toLowerCase()}` });
  if ((metaAdsIndustrySlugs as readonly string[]).includes(slug)) variants.push({ href: `/meta-ads-for-${slug}`, label: `Meta ads for ${industryLabel(slug).toLowerCase()}` });
  if ((appointmentSettingIndustrySlugs as readonly string[]).includes(slug)) variants.push({ href: `/appointment-setting-for-${slug}`, label: `Appointment setting for ${industryLabel(slug).toLowerCase()}` });
  const coreFill = services(path.startsWith("/meta-ads-for-") ? ["/meta-ads-agency", "/vsl-funnels", "/lead-generation-agency"] : path.startsWith("/appointment-setting-for-") ? ["/appointment-setting", "/speed-to-lead", "/lead-generation-agency"] : ["/lead-generation-agency", "/meta-ads-agency", "/appointment-setting"]);
  const svc = [...variants.filter((v) => v.href !== path), ...coreFill].slice(0, 3 + Math.max(0, variants.length - 1));
  // Sibling pages of the same service (meta ads for X, appointment setting for X) come first.
  const rotate = (list: readonly string[]) => {
    const i = list.indexOf(slug);
    return [...list.slice(i + 1), ...list.slice(0, Math.max(0, i))];
  };
  const sameService: Link[] = path.startsWith("/meta-ads-for-")
    ? rotate(metaAdsIndustrySlugs).map((s) => ({ href: `/meta-ads-for-${s}`, label: `Meta ads for ${industryLabel(s).toLowerCase()}` }))
    : path.startsWith("/appointment-setting-for-")
      ? rotate(appointmentSettingIndustrySlugs).map((s) => ({ href: `/appointment-setting-for-${s}`, label: `Appointment setting for ${industryLabel(s).toLowerCase()}` }))
      : [];
  const siblings = [...sameService, ...industryLinksFor(slug, 6)].slice(0, 6);
  // Case studies whose curated "related" pages include this industry.
  const results: Link[] = Object.entries(caseStudyMeta)
    .filter(([, m]) => m.related?.some((r) => r.href === `/for/${slug}` || r.href === path))
    .map(([cs, m]) => ({ href: `/case-studies/${cs}`, label: m.title }));
  return [
    { title: `Services for ${industryLabel(slug).toLowerCase()}`, links: svc },
    { title: "Similar industries", links: siblings },
    { title: "Guides", links: guides(industryGuides[slug] ?? defaultGuides) },
    ...(results.length ? [{ title: "Results in this industry", links: results }] : []),
  ];
}

/** Four industry pages for a core service, using that service's own industry pages when they exist. */
function industriesForService(path: string): Link[] {
  if (path === "/meta-ads-agency")
    return metaAdsIndustrySlugs.slice(0, 4).map((s) => ({ href: `/meta-ads-for-${s}`, label: `Meta ads for ${industryLabel(s).toLowerCase()}` }));
  if (path === "/appointment-setting")
    return appointmentSettingIndustrySlugs.slice(0, 4).map((s) => ({ href: `/appointment-setting-for-${s}`, label: `Appointment setting for ${industryLabel(s).toLowerCase()}` }));
  // Rotate by service so every industry page is linked from at least one service page.
  const i = Math.max(0, Object.keys(serviceNeighbours).indexOf(path)) * 4;
  return Array.from({ length: 4 }, (_, k) => industryPages[(i + k) % industryPages.length]).map((p) => ({ href: `/for/${p.slug}`, label: `Lead generation for ${p.label.toLowerCase()}` }));
}

function serviceGroups(path: string): Group[] | null {
  const neighbours = serviceNeighbours[path];
  if (!neighbours) return null;
  const toolPicks = path === "/appointment-setting" || path === "/speed-to-lead" || path === "/whatsapp-lead-nurture"
    ? ["/tools/show-rate-calculator", "/tools/cost-per-booked-call-calculator"]
    : path === "/meta-ads-agency" || path === "/vsl-funnels"
      ? ["/tools/meta-ads-budget-calculator", "/tools/roas-calculator"]
      : ["/tools/cac-calculator", "/tools/ltv-cac-calculator"];
  return [
    { title: "Related services", links: services(neighbours) },
    { title: "Industries we serve", links: industriesForService(path) },
    { title: "Free tools", links: toolPicks.map((h) => tools.find((t) => t.href === h)!).filter(Boolean) },
    { title: "Guides", links: guides(guidesFor[path] ?? defaultGuides) },
  ];
}

function toolGroups(path: string): Group[] | null {
  const isTool = path.startsWith("/tools/");
  const isBench = path.startsWith("/benchmarks/");
  if (!isTool && !isBench) return null;
  const own = isTool ? tools : benchmarks;
  return [
    { title: isTool ? "Other free tools" : "Other benchmarks", links: own.filter((t) => t.href !== path) },
    { title: isTool ? "Benchmarks" : "Free tools", links: (isTool ? benchmarks : tools).slice(0, 3) },
    { title: "Services", links: services(servicesForTool[path] ?? ["/lead-generation-agency", "/meta-ads-agency"]) },
    { title: "Guides", links: guides(guidesFor[path] ?? defaultGuides) },
  ];
}

function blogGroups(path: string): Group[] | null {
  const m = path.match(/^\/blog\/([a-z0-9-]+)$/);
  if (!m || !postBySlug.has(m[1])) return null;
  const slug = m[1];
  const supported = Object.entries(guidesFor)
    .filter(([href, slugs]) => slugs.includes(slug) && !href.startsWith("/tools/") && !href.startsWith("/benchmarks/"))
    .map(([href]) => href);
  const category = postBySlug.get(slug)!.category;
  const byCategory: Record<string, string[]> = {
    "Paid Advertising": ["/meta-ads-agency", "/vsl-funnels"],
    "Lead Qualification": ["/appointment-setting", "/speed-to-lead"],
    "Funnel Strategy": ["/vsl-funnels", "/high-ticket-lead-generation"],
    "Scaling & Economics": ["/lead-generation-agency", "/high-ticket-lead-generation"],
  };
  const svc = services([...new Set([...supported, ...(byCategory[category] ?? [])])]).slice(0, 3);
  const inds = industryPages
    .filter((p) => slug.includes(p.slug.replace(/s$/, "")))
    .map((p) => ({ href: `/for/${p.slug}`, label: `Lead generation for ${p.label.toLowerCase()}` }));
  const toolPick = Object.entries(guidesFor).filter(([href, slugs]) => slugs.includes(slug) && (href.startsWith("/tools/") || href.startsWith("/benchmarks/"))).map(([href]) => href);
  const toolLinks = [...tools, ...benchmarks].filter((t) => toolPick.includes(t.href)).slice(0, 2);
  const sameCat = blogPosts.filter((p) => p.category === category);
  const at = sameCat.findIndex((p) => p.slug === slug);
  const related = Array.from({ length: Math.min(3, sameCat.length - 1) }, (_, k) => sameCat[(at + 1 + k) % sameCat.length]).map((p) => ({ href: `/blog/${p.slug}`, label: p.seoTitle ?? p.title }));
  return [
    { title: "Related guides", links: related },
    { title: "Services this guide supports", links: svc },
    { title: "Industries", links: inds.length ? inds : industryLinksFor("agencies", 3) },
    { title: "Free tools", links: toolLinks.length ? toolLinks : [tools[0], tools[1]] },
  ];
}

function caseStudyGroups(path: string): Group[] | null {
  const m = path.match(/^\/case-studies\/([A-Za-z0-9_-]+)$/);
  if (!m) return null;
  const all = Object.entries(caseStudyMeta);
  const at = all.findIndex(([s]) => `/case-studies/${s}` === path);
  const others = Array.from({ length: 4 }, (_, k) => all[(at + 1 + k + all.length) % all.length])
    .filter(([s]) => `/case-studies/${s}` !== path)
    .map(([s, v]) => ({ href: `/case-studies/${s}`, label: v.title }));
  return [
    { title: "More case studies", links: others },
    { title: "Services behind these results", links: services(["/lead-generation-agency", "/meta-ads-agency", "/appointment-setting"]) },
    { title: "Guides", links: guides(["high-ticket-funnel-examples", "high-ticket-sales-how-to-get-high-ticket-clients"]) },
  ];
}

function compareGroups(path: string): Group[] | null {
  if (!path.startsWith("/compare/") && !path.startsWith("/mastermind")) return null;
  return [
    { title: "Services", links: coreServices.slice(0, 6) },
    { title: "Free tools", links: [tools[0], tools[3]] },
    { title: "Guides", links: guides(guidesFor["/mastermind"] ?? defaultGuides) },
  ];
}

/** Groups for a path, or null for pages that get no block (home, hubs, legal, booking). */
export function relatedGroupsFor(pathname: string): Group[] | null {
  const path = pathname.replace(/\/+$/, "") || "/";
  for (const fn of [industryGroups, serviceGroups, toolGroups, blogGroups, caseStudyGroups, compareGroups]) {
    const g = fn(path);
    if (g) return g.map((x) => ({ ...x, links: x.links.filter((l) => l.href !== path) })).filter((x) => x.links.length > 0);
  }
  return null;
}
