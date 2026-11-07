/**
 * Accurate, hand-written titles for the named case studies. The data file's
 * auto-assigned categories are unreliable (e.g. a fitness client tagged
 * "Home Services & Roofing"), so titles are written from what each case
 * actually describes.
 */
export const caseStudyMeta: Record<string, { title: string; h1: string; description: string }> = {
  "b2b-agency-scaling-846k": {
    title: "Agency Case Study: $846K and 235 Clients",
    h1: "Service Agency Case Study: $846,000 and 235 Clients Closed in 2025",
    description: "How a service agency closed 235 clients at a $3,600 average deal for $846,000 in 2025 using Meta ads, qualification and structured follow-up.",
  },
  "med-spa-marketing-agency-639k": {
    title: "Med Spa Agency: $639K in Two Months",
    h1: "Med Spa Marketing Agency Case Study: $639,000 in Two Months",
    description: "A med spa marketing agency crossed $639,000 in two months with 1,116 conversations still open, using Meta ads, qualification and appointment setting.",
  },
  "high-ticket-coaching-203k": {
    title: "Fitness Funnel: $203,941 in 11 Days",
    h1: "Fitness Coaching Funnel Case Study: $203,941 in 11 Days",
    description: "A fitness client turned a low-ticket membership funnel into $203,941 in 11 days: 1,566 memberships, 246 one-time offers and high-ticket upsells.",
  },
  "digital-media-agency-157k": {
    title: "LTO Funnel Case Study: $157,184 Revenue",
    h1: "Low-Ticket Offer Funnel Case Study: $157,184 in Stacked Revenue",
    description: "1,202 low-ticket offer sales, 193 order bumps and 28 mastermind enrollments stacked to $157,184 for an agency-training client.",
  },
  "executive-consulting-150k": {
    title: "$150,348 in 5 Days: LTO to High-Ticket",
    h1: "$150,348 in 5 Days: Low-Ticket to High-Ticket Funnel Case Study",
    description: "2,063 low-ticket memberships, 183 bundle upsells and 30 high-ticket done-for-you programs produced $150,348 in five days.",
  },
  "commercial-services-86k": {
    title: "Low-Ticket Offer Case Study: $86,275",
    h1: "Low-Ticket Offer Case Study: $86,275 in 19 Days",
    description: "How a so-called low-ticket offer generated $86,275 in 19 days, and the upsell path that made the funnel profitable to scale.",
  },
  "agency-backend-continuity-86k": {
    title: "$99/Month Offer: $86K and 810 Members",
    h1: "Continuity Offer Case Study: $86K Revenue and 810 Members in 30 Days",
    description: "$29K in Meta ad spend turned a $99/month offer into $86K in revenue and 810 paying members in 30 days, without a sales team.",
  },
  "strategic-consulting-85k": {
    title: "Agency Client Case Study: $85K Month",
    h1: "Agency Client Case Study: An $85K Month, Tracking Toward $95K",
    description: "Inside a done-with-you retargeting session with an agency client doing $85K a month and tracking to $95K+, broken down live in Ads Manager.",
  },
  "high-ticket-funnel-79k": {
    title: "$79,070 in 17 Days: Booking Funnel Case",
    h1: "$79,070 in 17 Days With a Low-Ticket-First Booking Funnel",
    description: "837 low-ticket sales and 376 high-ticket registrations produced $79,070 at 2.72 ROAS in 17 days from a low-ticket-first booking funnel.",
  },
  "b2b-technology-agency-71k": {
    title: "AI SaaS Case Study: $71,934 in 24 Days",
    h1: "AI SaaS Case Study: 320 Customers and $71,934 in 24 Days",
    description: "An AI calling and SMS SaaS added 320 customers and $71,934 in 24 days after fixing its ideal customer profile, ad angles and funnel.",
  },
};

/** Named case study links, highest revenue first, for internal linking. */
export const caseStudyLinks = Object.entries(caseStudyMeta).map(([slug, m]) => ({
  href: `/case-studies/${slug}`,
  label: m.title,
}));
