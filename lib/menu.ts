/**
 * Site menus (20 Nov 2026). One source for the header dropdowns and the footer,
 * so both stay in sync. `featured` items show in the header dropdown and the
 * footer columns; `all` lists every page in the group for the footer's
 * "Browse all pages" section (keeps every page linked for crawlers).
 */
export type MenuLink = { label: string; href: string; desc?: string };
export type MenuGroup = { title: string; href: string; featured: MenuLink[]; all: MenuLink[] };

export const servicesMenu: MenuGroup = {
  title: "Services",
  href: "/services",
  featured: [
    { label: "Appointment Setting Services", href: "/appointment-setting", desc: "Qualified sales appointments booked on your calendar" },
    { label: "Pay-Per-Appointment Lead Gen", href: "/pay-per-appointment", desc: "Lead generation measured on booked appointments" },
    { label: "Done-for-You Lead Generation", href: "/lead-generation-agency", desc: "Ads, funnel, follow-up and booking, run for you" },
    { label: "Meta Ads Agency", href: "/meta-ads-agency", desc: "Facebook and Instagram ads for high-ticket offers" },
    { label: "AI Speed to Lead", href: "/speed-to-lead", desc: "Every lead contacted within minutes" },
    { label: "High-Ticket Lead Generation", href: "/high-ticket-lead-generation", desc: "Booked calls for $3K–$25K offers" },
  ],
  all: [
    { label: "All services", href: "/services" },
    { label: "Appointment setting services", href: "/appointment-setting" },
    { label: "Pay-per-appointment lead generation", href: "/pay-per-appointment" },
    { label: "Done-for-you lead generation", href: "/lead-generation-agency" },
    { label: "Qualified B2B leads", href: "/b2b-lead-generation" },
    { label: "High-ticket lead generation", href: "/high-ticket-lead-generation" },
    { label: "Meta ads agency", href: "/meta-ads-agency" },
    { label: "AI speed to lead", href: "/speed-to-lead" },
    { label: "VSL funnels", href: "/vsl-funnels" },
    { label: "WhatsApp lead nurture", href: "/whatsapp-lead-nurture" },
    { label: "CRM automation", href: "/crm-automation" },
    { label: "Outsourced sales closers", href: "/outsourced-sales-closers" },
    { label: "Appointment setting for agencies", href: "/appointment-setting-for-agencies" },
    { label: "Appointment setting for consultants", href: "/appointment-setting-for-consultants" },
    { label: "Facebook ads for coaches", href: "/meta-ads-for-coaches" },
    { label: "Facebook ads for consultants", href: "/meta-ads-for-consultants" },
    { label: "Facebook ads for financial advisors", href: "/meta-ads-for-financial-advisors" },
    { label: "Facebook ads for med spas", href: "/meta-ads-for-med-spas" },
    { label: "Facebook ads for SaaS", href: "/meta-ads-for-saas" },
  ],
};

export const industriesMenu: MenuGroup = {
  title: "Industries",
  href: "/for",
  featured: [
    { label: "Coaches", href: "/for/coaches" },
    { label: "Consultants", href: "/for/consultants" },
    { label: "Financial Advisors", href: "/for/financial-advisors" },
    { label: "Insurance Agents", href: "/for/insurance-agencies" },
    { label: "Marketing Agencies", href: "/for/agencies" },
    { label: "B2B Service Firms", href: "/for/b2b-services" },
    { label: "Med Spas", href: "/for/med-spas" },
    { label: "Real Estate Investors", href: "/for/real-estate-investors" },
  ],
  all: [
    { label: "All industries", href: "/for" },
    { label: "Lead generation for coaches", href: "/for/coaches" },
    { label: "Lead generation for consultants", href: "/for/consultants" },
    { label: "Lead generation for financial advisors", href: "/for/financial-advisors" },
    { label: "Lead generation for insurance agents", href: "/for/insurance-agencies" },
    { label: "Lead generation for agencies", href: "/for/agencies" },
    { label: "B2B service firms", href: "/for/b2b-services" },
    { label: "B2B SaaS", href: "/for/saas" },
    { label: "Med spas", href: "/for/med-spas" },
    { label: "Course creators", href: "/for/course-creators" },
    { label: "Online fitness coaches", href: "/for/fitness-coaches" },
    { label: "Motivated seller leads", href: "/for/real-estate-investors" },
    { label: "Solar appointment setting", href: "/for/solar-companies" },
    { label: "Home improvement leads", href: "/for/home-improvement" },
    { label: "HVAC leads", href: "/hvac-leads" },
    { label: "Mortgage leads", href: "/mortgage-leads" },
    { label: "Final expense leads", href: "/final-expense-leads" },
  ],
};

export const toolsLinks: MenuLink[] = [
  { label: "All free tools", href: "/tools" },
  { label: "Meta ads budget calculator", href: "/tools/meta-ads-budget-calculator" },
  { label: "Cost per booked call calculator", href: "/tools/cost-per-booked-call-calculator" },
  { label: "ROAS & break-even calculator", href: "/tools/roas-calculator" },
  { label: "B2B CAC calculator", href: "/tools/cac-calculator" },
  { label: "LTV to CAC calculator", href: "/tools/ltv-cac-calculator" },
  { label: "Lead conversion rate calculator", href: "/tools/lead-conversion-rate-calculator" },
  { label: "Show-up rate calculator", href: "/tools/show-rate-calculator" },
  { label: "Meta ads bid strategy calculator", href: "/tools/meta-ads-bid-strategy-calculator" },
  { label: "MER calculator", href: "/tools/mer-calculator" },
  { label: "Ad frequency calculator", href: "/tools/ad-frequency-calculator" },
  { label: "Lead scoring template", href: "/tools/lead-scoring-template" },
];

export const benchmarkLinks: MenuLink[] = [
  { label: "All benchmarks", href: "/benchmarks" },
  { label: "Cost per lead by industry", href: "/benchmarks/cost-per-lead-by-industry" },
  { label: "Cost per booked call", href: "/benchmarks/cost-per-booked-call" },
  { label: "Show rate benchmarks", href: "/benchmarks/show-rate" },
  { label: "Close rate benchmarks", href: "/benchmarks/close-rate" },
  { label: "Meta ads CPM benchmarks", href: "/benchmarks/meta-ads-cpm" },
];

export const guideLinks: MenuLink[] = [
  { label: "Blog & guides", href: "/blog" },
  { label: "Funnel strategy", href: "/blog/category/funnel-strategy" },
  { label: "Paid advertising", href: "/blog/category/paid-advertising" },
  { label: "Lead qualification", href: "/blog/category/lead-qualification" },
  { label: "Scaling & economics", href: "/blog/category/scaling-economics" },
  { label: "Client acquisition glossary", href: "/glossary" },
];

export const compareLinks: MenuLink[] = [
  { label: "Meta ads vs Google ads", href: "/compare/meta-ads-vs-google-ads-high-ticket" },
  { label: "Done-for-you vs done-with-you", href: "/compare/done-for-you-vs-done-with-you-lead-generation" },
  { label: "Appointment setter vs VA", href: "/compare/appointment-setter-vs-va" },
  { label: "QualifiedLeadsX alternatives", href: "/compare/qualifiedleadsx-alternatives" },
];

export const resourcesMenu: MenuGroup = {
  title: "Resources",
  href: "/tools",
  featured: [
    { label: "Free Tools & Calculators", href: "/tools", desc: "Budget, ROAS, CAC and cost-per-call calculators" },
    { label: "Benchmarks", href: "/benchmarks", desc: "Cost per lead, show rate and close rate data" },
    { label: "Blog & Guides", href: "/blog", desc: "Playbooks for getting more qualified calls" },
    { label: "Comparisons", href: "/compare/qualifiedleadsx-alternatives", desc: "How we compare with other options" },
    { label: "Glossary", href: "/glossary", desc: "Client acquisition terms explained" },
  ],
  all: [...toolsLinks, ...benchmarkLinks, ...guideLinks, ...compareLinks],
};

export const mastermindMenu: MenuGroup = {
  title: "Mastermind",
  href: "/mastermind",
  featured: [
    { label: "AI Client Acquisition Mastermind", href: "/mastermind/hidden-facebook-interest", desc: "6-week Meta ads and AI program" },
    { label: "7 Days Paid Trial", href: "/mastermind/7-days-paid-trial", desc: "Self-liquidating Meta ads playbook" },
    { label: "LTO Funnel to $847K", href: "/mastermind/lto-funnel-scale", desc: "How a low-ticket funnel was scaled" },
    { label: "Personal Injury Sniper Method", href: "/mastermind/personal-injury-facebook-ads", desc: "Hidden Facebook audiences for PI cases" },
  ],
  all: [
    { label: "Mastermind overview", href: "/mastermind" },
    { label: "AI Client Acquisition Mastermind", href: "/mastermind/hidden-facebook-interest" },
    { label: "7 Days Paid Trial", href: "/mastermind/7-days-paid-trial" },
    { label: "LTO funnel to $847K", href: "/mastermind/lto-funnel-scale" },
    { label: "Personal Injury Sniper Method", href: "/mastermind/personal-injury-facebook-ads" },
  ],
};

export const companyLinks: MenuLink[] = [
  { label: "Case studies", href: "/case-studies" },
  { label: "About us", href: "/about" },
  { label: "Gaurav Kapoor, founder", href: "/about/gaurav-kapoor" },
  { label: "Mastermind", href: "/mastermind" },
  { label: "Book a strategy call", href: "/book-your-call#book" },
  { label: "Pick a time on the calendar", href: "/book-your-call/schedule#calendar" },
];

export const caseStudyLinksMenu: MenuLink[] = [
  { label: "All case studies", href: "/case-studies" },
  { label: "$846K agency", href: "/case-studies/b2b-agency-scaling-846k" },
  { label: "$639K med spa agency", href: "/case-studies/med-spa-marketing-agency-639k" },
  { label: "$203K fitness funnel", href: "/case-studies/high-ticket-coaching-203k" },
  { label: "$65K Florida HVAC", href: "/case-studies/florida-hvac-65k-cash-collected" },
  { label: "$74K NYC med spa", href: "/case-studies/nyc-med-spa-rf-microneedling-74k" },
];

export const profileLinks: MenuLink[] = [
  { label: "Google Business Profile", href: "https://maps.google.com/maps?cid=12897087509369850560" },
  { label: "Clutch", href: "https://clutch.co/profile/qualifiedleadsx" },
  { label: "Trustpilot", href: "https://www.trustpilot.com/review/qualifiedleadsx.com" },
  { label: "Crunchbase", href: "https://www.crunchbase.com/organization/qualifiedleadsx" },
  { label: "Sortlist", href: "https://www.sortlist.com/agency/qualifiedleadsx" },
  { label: "Agency Spotter", href: "https://www.agencyspotter.com/qualifiedleadsx" },
];

export const legalLinks: MenuLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "RSS", href: "/feed.xml" },
];
