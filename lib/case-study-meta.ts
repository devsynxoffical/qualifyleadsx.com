/**
 * Accurate, hand-written titles for the named case studies. The data file's
 * auto-assigned categories are unreliable (e.g. a fitness client tagged
 * "Home Services & Roofing"), so titles are written from what each case
 * actually describes.
 */
export type CaseStudyAnalysis = { heading: string; body: string[]; bullets?: string[] };
export type CaseStudyMeta = {
  title: string;
  h1: string;
  description: string;
  /** Written breakdown built only from the numbers in the client's own post. */
  analysis?: CaseStudyAnalysis[];
  /** Industry and service pages this result supports. */
  related?: { href: string; label: string }[];
};

/** Named slug -> Instagram post ID in lib/case-studies-data.ts. Named slugs are the indexable URLs. */
export const caseStudyIds: Record<string, string> = {
  "b2b-agency-scaling-846k": "DS5sAimEqsT",
  "med-spa-marketing-agency-639k": "DZc5twGlC0M",
  "high-ticket-coaching-203k": "DUsaqlQEsYB",
  "digital-media-agency-157k": "DQ91hXmEoIm",
  "executive-consulting-150k": "DQsBVdEkxYc",
  "commercial-services-86k": "DSkbQyzkvbL",
  "agency-backend-continuity-86k": "DM3mUZsSNEJ",
  "strategic-consulting-85k": "DMgZ9YRSuz5",
  "high-ticket-funnel-79k": "DU71t8DER0c",
  "b2b-technology-agency-71k": "DT4yHdFkXhM",
  "nyc-med-spa-rf-microneedling-74k": "DM_Poo5z5hT",
  "florida-hvac-65k-cash-collected": "C7v8ZyxNAOa",
  "mva-personal-injury-leads-8810": "Ddjbsg8SUQv",
};

export const caseStudyMeta: Record<string, CaseStudyMeta> = {
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
  "nyc-med-spa-rf-microneedling-74k": {
    title: "Med Spa Case Study: $74,100 From $10K Ads",
    h1: "Multi-Location Med Spa Case Study: $74,100 From $10,387 in Meta Ads",
    description: "A 3-clinic New York med spa booked 453 RF microneedling appointments at $22.93 each and closed 247 clients for $74,100 from $10,387 in ad spend.",
    analysis: [
      {
        heading: "The numbers, step by step",
        body: ["A New York med spa brand with three clinics ran a single treatment offer, RF microneedling, through a full-funnel system: Meta ads, booking and follow-up. These are the figures from the campaign:"],
        bullets: [
          "Ad spend: $10,387",
          "Appointments booked: 453, at $22.93 per appointment",
          "Show-up rate: 67%, so 303 people attended",
          "Clients closed: 247, or about 82% of attendees",
          "Revenue: $74,100, about 7.1x the ad spend",
          "Cost per paying client: about $42",
        ],
      },
      {
        heading: "Why it worked",
        body: [
          "One treatment, not a menu. Advertising a single, clearly explained treatment gave every ad, landing page and confirmation message the same promise, which keeps the people who book aligned with what the clinic sells.",
          "Bookings were measured to the chair, not to the form. The campaign was judged on appointments, shows and paying clients rather than cost per lead, which is how the clinic could see that a $22.93 appointment turned into a $42 paying client.",
          "Show rate was protected. A 67% show rate is above the 58.2% average we see with email-only confirmations. Fast, multi-channel reminders are the usual lever; see [how to increase show rate](/blog/how-to-increase-show-rate).",
        ],
      },
      {
        heading: "What other clinics can take from it",
        body: ["Multi-location clinics can run one campaign structure across locations and compare cost per paying client by clinic. Start with one high-demand treatment, track every step from booking to payment, and fix the weakest step before adding budget. Model your own numbers with the [cost per booked call calculator](/tools/cost-per-booked-call-calculator)."],
      },
    ],
    related: [
      { href: "/for/med-spas", label: "Lead generation for med spas" },
      { href: "/meta-ads-for-med-spas", label: "Meta ads for med spas" },
      { href: "/appointment-setting", label: "Appointment setting" },
    ],
  },
  "florida-hvac-65k-cash-collected": {
    title: "HVAC Case Study: $65,872 Net Cash, 12.7 ROAS",
    h1: "Florida HVAC Case Study: $65,872 Net Cash Collected at 12.70 ROAS",
    description: "$5,628 in Meta ads booked 125 HVAC appointments and 13 new installations worth $71,500, for $65,872 net cash collected and a 12.70 ROAS.",
    analysis: [
      {
        heading: "The full funnel, with the cost of every step",
        body: ["This Florida HVAC company tracked every stage of its acquisition funnel, from booked appointment to installed system. The numbers:"],
        bullets: [
          "Ad spend: $5,628",
          "Booked appointments: 125, at $45 each",
          "Connected calls: 60 (48% show), at $93.80 each",
          "Offers made: 45 (75% of connected calls), at $125 each",
          "New installations: 13 (about 29% of offers), at $432.92 each",
          "Installation value: $5,500, so $71,500 collected",
          "Net cash collected: $71,500 − $5,628 = $65,872; collected ROAS 12.70",
        ],
      },
      {
        heading: "Why tracking every stage matters",
        body: [
          "Most home-service owners only see cost per lead. This client could see that the biggest leak was attendance: fewer than half of booked appointments turned into a connected call. Improving show rate from 48% toward 60% would add roughly 15 more conversations from the same ad spend, without touching the ads.",
          "Knowing the $432.92 cost per installation against a $5,500 job also tells the owner how far budget can scale before the economics break, which is the number to watch, not cost per lead.",
        ],
      },
      {
        heading: "How to apply this to your home-service business",
        body: ["Write down your own funnel in the same format: booked, showed, offered, closed, average job value. Then use the [ROAS and break-even calculator](/tools/roas-calculator) to see how much you can pay per installation, and the [show rate calculator](/tools/show-rate-calculator) to size the gain from better reminders."],
      },
    ],
    related: [
      { href: "/for/home-improvement", label: "Lead generation for home improvement" },
      { href: "/speed-to-lead", label: "AI speed to lead" },
      { href: "/meta-ads-agency", label: "Meta ads agency" },
    ],
  },
  "mva-personal-injury-leads-8810": {
    title: "MVA Leads Case Study: 8,810 Leads at $7.61",
    h1: "Personal Injury (MVA) Case Study: 8,810 Leads at $7.61 Each",
    description: "A motor vehicle accident (MVA) lead campaign for a pay-per-lead agency produced 8,810 leads at $7.61 each from $67,013 in Meta ads in under 3 months.",
    analysis: [
      {
        heading: "Campaign results",
        body: ["This campaign was run for a pay-per-lead (PPL) agency that supplies motor vehicle accident (MVA) leads to personal injury firms. Between July 1 and September 19, 2026:"],
        bullets: ["Ad spend: $67,013.43", "Leads generated: 8,810", "Cost per lead: $7.61"],
      },
      {
        heading: "What made the volume possible",
        body: [
          "Recency, not reach. The campaign focused on people involved in an accident in the last 30 days, so the ads and qualifying questions were built around fresh accident intent rather than recycled or aged data.",
          "Qualification inside the funnel. Scaling to thousands of leads without CPL climbing depends on the targeting, qualification questions and acquisition system working together, so budget increases bring more of the same kind of lead.",
        ],
      },
      {
        heading: "What personal injury firms should measure",
        body: ["For law firms, cost per lead is only the first number. Track how many leads are contacted within minutes, how many qualify, and how many sign. Read [cost per acquisition vs cost per lead](/blog/cost-per-acquisition-vs-cost-per-lead) for why cheap leads only matter if they turn into signed cases."],
      },
    ],
    related: [
      { href: "/for/law-firms", label: "Lead generation for law firms" },
      { href: "/meta-ads-for-law-firms", label: "Meta ads for law firms" },
      { href: "/speed-to-lead", label: "AI speed to lead" },
    ],
  },
};

/** Named case study links, highest revenue first, for internal linking. */
export const caseStudyLinks = Object.entries(caseStudyMeta).map(([slug, m]) => ({
  href: `/case-studies/${slug}`,
  label: m.title,
}));
