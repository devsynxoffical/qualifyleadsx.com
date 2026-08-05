export const site = {
  name: "QualifiedLeadsX™",
  legalName: "Qualified LeadsX",
  url: "https://www.qualifiedleadsx.com",
  bookCallUrl: "/book-your-call/",
  email: "hello@qualifiedleadsx.com",
  phone: "+1 (800) 555-0148",
  founded: 2022,
  location: {
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
  description:
    "QualifiedLeadsX™ installs a done-for-you client acquisition funnel system for high-ticket coaches, consultants and service providers — generating $100K+ months of qualified sales calls on your calendar.",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/qualifiedleadsx" },
    { label: "Instagram", href: "https://www.instagram.com/qualifiedleadsx" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/qualifiedleadsx" },
    { label: "YouTube", href: "https://www.youtube.com/@qualifiedleadsx" },
  ],
} as const;

export const nav = [
  { label: "System", href: "#different" },
  { label: "Results", href: "#results" },
  { label: "Industries", href: "#industries" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "FAQ", href: "#faq" },
] as const;

export const navCta = {
  label: "Book Free Strategy Call",
  href: site.bookCallUrl,
} as const;
