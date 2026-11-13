/**
 * Single source of truth for brand facts. lib/site.ts, schema (lib/schema.ts),
 * the About and founder pages, llms.txt / llms-full.txt and the footer read from
 * here. Change a fact once, here, and keep social profiles and directory
 * listings identical to it.
 */
export const brandFacts = {
  name: "QualifiedLeadsX",
  legalName: "Ecom Expertz LLC",
  url: "https://www.qualifiedleadsx.com",
  email: "hello@qualifiedleadsx.com",
  whatsappNumber: "919625695456",
  whatsappDisplay: "+91 96256 95456",
  foundedYear: 2022,
  address: {
    streetAddress: "1309 Coffeen Avenue STE 1200",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
    display: "1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801, USA",
    note: "Registered address, not an office open to visitors.",
  },
  areaServed: ["United States", "United Kingdom", "Canada", "Australia"],
  founder: {
    name: "Gaurav Kapoor",
    givenName: "Gaurav",
    familyName: "Kapoor",
    role: "Founder & Head of Acquisition",
    path: "/about/gaurav-kapoor",
    linkedin: "https://www.linkedin.com/in/gauravecom/",
    bio: "Gaurav Kapoor founded QualifiedLeadsX in 2022 after more than 12 years in paid media buying, direct-response copywriting and performance marketing. He leads campaign strategy, Meta ads and the acquisition systems the team builds for agencies, coaches, consultants and B2B service businesses.",
  },
  summary:
    "QualifiedLeadsX is a done-for-you client acquisition agency that books qualified sales calls for agency owners, high-ticket coaches, consultants and B2B service businesses using Meta ads, funnels and AI follow-up.",
  icp: "Agency owners, high-ticket coaches, consultants and B2B service businesses already doing $10,000+ a month with an offer of about $3,000 or more.",
  pricing: "Custom quoted. Every engagement is priced on niche, monthly ad budget, funnel scope and number of offers; there is no public price list.",
  guarantee: "90-day written guarantee: if the agreed milestones are not met by day 90, there is no management fee until they are.",
  services: [
    { name: "Lead generation agency", path: "/lead-generation-agency", line: "Done-for-you system from Meta ads to booked, qualified sales calls." },
    { name: "High-ticket lead generation", path: "/high-ticket-lead-generation", line: "Acquisition built for $3K to $25K offers." },
    { name: "B2B lead generation", path: "/b2b-lead-generation", line: "Qualified meetings for B2B service firms." },
    { name: "Meta ads agency", path: "/meta-ads-agency", line: "Facebook and Instagram ads, creative and media buying." },
    { name: "Appointment setting", path: "/appointment-setting", line: "Fast follow-up, qualification and booked calls." },
    { name: "AI speed to lead", path: "/speed-to-lead", line: "Replies to every new lead in under 5 minutes." },
    { name: "VSL funnels", path: "/vsl-funnels", line: "Video sales letter funnels that pre-sell before the call." },
    { name: "WhatsApp lead nurture", path: "/whatsapp-lead-nurture", line: "Follow-up and reminders on WhatsApp." },
    { name: "CRM automation", path: "/crm-automation", line: "Pipelines, calendars and automated reminders." },
    { name: "Outsourced sales closers", path: "/outsourced-sales-closers", line: "Commission-based closers for high-ticket calls." },
  ],
  sameAs: [
    "https://www.facebook.com/qualifiedleadsx/",
    "https://www.instagram.com/qualifiedleadsx/",
    "https://www.linkedin.com/in/gauravecom/",
    "https://www.youtube.com/@QualifiedLeadsX",
  ],
  bookingPath: "/book-your-call",
} as const;
