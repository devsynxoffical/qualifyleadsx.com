export const site = {
  name: "QualifiedLeadsX",
  legalName: "Ecom Expertz LLC",
  legalAddress: "1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801",
  url: "https://www.qualifiedleadsx.com",
  bookCallUrl: "/book-your-call",
  email: "hello@qualifiedleadsx.com",
  phone: "",
  whatsappNumber: "919625695456",
  whatsappDisplay: "+91 96256 95456",
  founded: 2022,
  location: {
    streetAddress: "1309 Coffeen Avenue STE 1200",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  description:
    "QualifiedLeadsX™ installs a done-for-you client acquisition funnel system for high-ticket coaches, consultants and service providers - generating $100K+ months of qualified sales calls on your calendar.",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/qualifiedleadsx/" },
    { label: "Instagram", href: "https://www.instagram.com/qualifiedleadsx/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gauravecom/" },
  ],
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/for" },
  { label: "Benchmarks", href: "/benchmarks" },
  { label: "Tools", href: "/tools" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Mastermind", href: "/mastermind" },
] as const;

export const navCta = {
  label: "Book Free Strategy Call",
  href: site.bookCallUrl,
} as const;
