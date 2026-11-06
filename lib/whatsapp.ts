/**
 * Page-aware WhatsApp opening messages.
 *
 * Every WhatsApp button on the site opens a chat with a first message that
 * matches the page the visitor is on (service, industry, guide, case study,
 * tool...) and ends with the page link, so the team knows where the lead
 * came from before replying.
 */

import { site } from "./site";

export const WHATSAPP_NUMBER = site.whatsappNumber;
const SITE_URL = site.url;
const GREETING = "Hi QualifiedLeadsX team!";

/** Industry slugs used in /for/*, /meta-ads-for-* and /appointment-setting-for-* routes. */
const INDUSTRY: Record<string, string> = {
  agencies: "marketing agency",
  "b2b-services": "B2B services",
  "business-coaches": "business coaching",
  coaches: "coaching",
  consultants: "consulting",
  "course-creators": "online course",
  "executive-coaches": "executive coaching",
  "financial-advisors": "financial advisory",
  "fitness-coaches": "fitness coaching",
  "home-improvement": "home improvement",
  "insurance-agencies": "insurance agency",
  "law-firms": "law firm",
  "med-spas": "med spa",
  "online-education": "online education",
  "real-estate-investors": "real estate investing",
  "recruitment-agencies": "recruitment agency",
  saas: "SaaS",
  "solar-companies": "solar",
};

/** Exact-path messages (without greeting and page link). */
const EXACT: Record<string, string> = {
  "/": "I'm on your website and want to scale my client acquisition. Can we talk about how your system would work for my business?",
  "/book-your-call": "I'm on your booking page and have a quick question before booking my free strategy call.",
  "/book-your-call/schedule": "I'm looking at your calendar to book a strategy call and have a quick question first.",
  "/meta-ads-agency": "I'm interested in your Meta ads management for my business. Can you tell me more?",
  "/appointment-setting": "I'm interested in your appointment setting system and want more qualified calls on my calendar.",
  "/lead-generation-agency": "I'm looking for a lead generation agency and would like to know how you work.",
  "/high-ticket-lead-generation": "I sell a high-ticket offer and want more qualified leads. Can we talk?",
  "/b2b-lead-generation": "I'm interested in B2B lead generation for my business. Can you tell me more?",
  "/speed-to-lead": "I'm interested in your AI speed-to-lead follow-up so we respond to every lead instantly.",
  "/whatsapp-lead-nurture": "I'm interested in WhatsApp lead nurture for my business. Can you tell me how it works?",
  "/crm-automation": "I'm interested in CRM automation for my sales pipeline. Can you tell me more?",
  "/vsl-funnels": "I'm interested in a VSL funnel for my offer. Can you tell me more?",
  "/outsourced-sales-closers": "I'm interested in outsourced sales closers for my business. Can you tell me more?",
  "/services": "I'm looking through your services and want to know which one fits my business.",
  "/case-studies": "I've been looking at your case studies and want similar results for my business.",
  "/blog": "I've been reading your growth guides and have a question about my client acquisition.",
  "/glossary": "I was reading your client acquisition glossary and have a question.",
  "/benchmarks": "I was looking at your marketing benchmarks and want to see how my numbers compare.",
  "/tools": "I was using your free calculators and want help improving my numbers.",
  "/compare": "I'm comparing lead generation options and have a few questions.",
  "/mastermind": "I'm interested in your 8-figure mastermind and would like to know more.",
  "/about": "I was reading about QualifiedLeadsX and want to learn how you can help my business.",
  "/for": "I want to know how your client acquisition system works for my industry.",
};

/** "Show-Up Rate Calculator | QualifiedLeadsX™" -> "Show-Up Rate Calculator" */
export function cleanTitle(title: string | undefined | null): string {
  if (!title) return "";
  return title
    .replace(/\s*[|–—-]\s*(?:QualifiedLeadsX|QLX)\b.*$/i, "")
    .replace(/™/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function humanize(slug: string): string {
  return slug.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function industryOf(slug: string): string {
  return INDUSTRY[slug] ?? humanize(slug);
}

/**
 * Build the opening message for a page.
 * @param pathname e.g. "/for/med-spas"
 * @param pageTitle optional document title (preferred for guides and case studies)
 * @param name optional visitor first name (e.g. after the booking form)
 * @param heading optional visible page heading (preferred for tools, benchmarks,
 *   comparisons and mastermind pages, whose titles can be generic)
 */
export function whatsappMessageFor(pathname: string, pageTitle?: string, name?: string, heading?: string): string {
  const path = (pathname || "/").split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  const parts = path.split("/").filter(Boolean);
  const cleanTitleText = cleanTitle(pageTitle);
  const cleanHeading = cleanTitle(heading);
  const headingFirst = ["tools", "benchmarks", "compare", "mastermind"].includes(parts[0] ?? "");
  const title = headingFirst ? cleanHeading || cleanTitleText : cleanTitleText || cleanHeading;
  let body: string;

  const quoted = (fallbackSlug: string) => `"${title || humanize(fallbackSlug)}"`;

  if (EXACT[path]) {
    body = EXACT[path];
  } else if (parts[0] === "for" && parts[1]) {
    body = `I run a ${industryOf(parts[1])} business and want more qualified clients. Can you tell me how your system works for my industry?`;
  } else if (/^meta-ads-for-/.test(parts[0] ?? "")) {
    body = `I'm interested in Meta ads for my ${industryOf(parts[0].replace(/^meta-ads-for-/, ""))} business. Can you tell me more?`;
  } else if (/^appointment-setting-for-/.test(parts[0] ?? "")) {
    body = `I'm interested in appointment setting for my ${industryOf(parts[0].replace(/^appointment-setting-for-/, ""))} business. Can you tell me more?`;
  } else if (parts[0] === "blog" && parts[1] === "category" && parts[2]) {
    body = `I've been reading your ${humanize(parts[2])} guides and have a question about my client acquisition.`;
  } else if (parts[0] === "blog" && parts[1]) {
    body = `I just read your guide ${quoted(parts[1])} and have a question about applying it to my business.`;
  } else if (parts[0] === "case-studies" && parts[1]) {
    body = `I saw your case study ${quoted(parts[1])} and want similar results for my business.`;
  } else if (parts[0] === "tools" && parts[1]) {
    body = `I was using your ${title || humanize(parts[1])} and want help improving my numbers.`;
  } else if (parts[0] === "benchmarks" && parts[1]) {
    body = `I was looking at your ${title || humanize(parts[1]) + " benchmarks"} and want to see how my numbers compare.`;
  } else if (parts[0] === "compare" && parts[1]) {
    body = `I read your comparison ${quoted(parts[1])} and have a few questions.`;
  } else if (parts[0] === "mastermind" && parts[1]) {
    body = `I watched your mastermind breakdown ${quoted(parts[1])} and would like to know more.`;
  } else if (title) {
    body = `I'm on your page "${title}" and have a question.`;
  } else {
    body = EXACT["/"];
  }

  const greeting = name ? `Hi QualifiedLeadsX team, this is ${name}!` : GREETING;
  const pageUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  return `${greeting} ${body}\n\n(Page: ${pageUrl})`;
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
