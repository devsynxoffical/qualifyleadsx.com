/**
 * Client-acquisition glossary. Each term links out to the guide and service page
 * that treat it in depth, so /glossary acts as an internal-linking hub for
 * definitional search queries ("what is speed to lead", "what is a VSL funnel").
 */
export interface GlossaryTerm {
  slug: string;
  term: string;
  /** Short, quotable definition (first sentence is the AEO answer). */
  definition: string;
  /** Optional second paragraph with context or a benchmark. */
  detail?: string;
  /** Blog slugs that cover the term in depth, most relevant first. */
  guides: string[];
  /** Service / hub page most relevant to the term. */
  service?: { label: string; href: string };
  /** Other glossary slugs worth cross-linking. */
  related?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "appointment-setting",
    term: "Appointment Setting",
    definition:
      "Appointment setting is the process of turning inbound leads into booked, qualified sales calls on a closer's calendar, usually through automated follow-up, qualification questions and self-booking links.",
    detail:
      "Done well, it separates lead generation from selling: the setter or automation owns speed to lead, qualification and show-up rate, while the closer only speaks to people who meet revenue, budget and authority criteria.",
    guides: ["b2b-appointment-setting-vs-in-house-sdr-teams", "automated-lead-qualification-system-high-ticket"],
    service: { label: "Appointment setting system", href: "/appointment-setting" },
    related: ["speed-to-lead", "lead-qualification", "sdr"],
  },
  {
    slug: "blended-cac",
    term: "Blended CAC",
    definition:
      "Blended customer acquisition cost is total acquisition spend (ad budget plus agency or team fees plus tools) divided by the number of new clients closed in the same period.",
    detail:
      "For high-ticket offers in tier-1 markets, blended CAC typically lands between $800 and $2,200 per client on Meta ads when the funnel qualifies leads before the call.",
    guides: ["b2b-client-acquisition-cost-cac-benchmarks-2026", "how-much-does-a-lead-generation-agency-cost"],
    service: { label: "Meta ads agency", href: "/meta-ads-agency" },
    related: ["cost-per-qualified-call", "ltv-to-cac-ratio", "roas"],
  },
  {
    slug: "broad-targeting",
    term: "Broad Targeting",
    definition:
      "Broad targeting is running Meta ads with minimal audience restrictions and letting the algorithm find buyers based on who engages with the creative, instead of stacking interests or lookalike audiences.",
    detail:
      "In 2026 the ad creative does the targeting: qualifying statements in the first five seconds route impressions toward decision-makers and repel bargain hunters.",
    guides: ["meta-ads-for-high-ticket-b2b-broad-targeting", "facebook-ads-agency-vs-in-house-media-buyer"],
    service: { label: "Meta ads agency", href: "/meta-ads-agency" },
    related: ["creative-testing", "lookalike-audience", "meta-ads"],
  },
  {
    slug: "close-rate",
    term: "Close Rate",
    definition:
      "Close rate is the percentage of sales calls that end in a signed client. It should be measured per stage: show-up rate, offer-presentation rate and close-to-offer rate.",
    detail:
      "Unvetted leads close at 8% to 12%. Pre-qualified, pre-indoctrinated strategy calls close at 22% to 35%.",
    guides: ["high-ticket-sales-training-framework", "high-ticket-sales-how-to-get-high-ticket-clients"],
    service: { label: "Appointment setting system", href: "/appointment-setting" },
    related: ["show-up-rate", "lead-qualification", "high-ticket-sales"],
  },
  {
    slug: "cost-per-qualified-call",
    term: "Cost Per Qualified Call",
    definition:
      "Cost per qualified call is ad spend divided by the number of booked calls that meet your written qualification criteria. It is the most useful top-of-funnel metric for high-ticket offers because raw cost per lead is easy to game.",
    detail: "Benchmark for tier-1 English-speaking markets on Meta in 2026: $90 to $180 per qualified call.",
    guides: ["b2b-client-acquisition-cost-cac-benchmarks-2026", "b2b-roas-benchmarks-qualified-appointment-generation"],
    service: { label: "Appointment setting system", href: "/appointment-setting" },
    related: ["blended-cac", "lead-qualification", "cost-per-lead"],
  },
  {
    slug: "cost-per-lead",
    term: "Cost Per Lead (CPL)",
    definition:
      "Cost per lead is ad spend divided by the number of contacts captured (form fills, opt-ins, quiz completions), regardless of quality.",
    detail:
      "High-ticket B2B and coaching offers typically see $20 to $80 CPL on Meta. Judge campaigns on cost per qualified call and blended CAC instead.",
    guides: ["how-much-does-a-lead-generation-agency-cost", "b2b-client-acquisition-cost-cac-benchmarks-2026"],
    service: { label: "Meta ads agency", href: "/meta-ads-agency" },
    related: ["cost-per-qualified-call", "pay-per-lead"],
  },
  {
    slug: "creative-testing",
    term: "Creative Testing",
    definition:
      "Creative testing is the systematic production and launch of many ad variations (hooks, angles, formats) so the algorithm can identify winners before fatigue sets in.",
    detail:
      "High-performing high-ticket accounts launch 40 to 100+ variations per month. Accounts launching fewer than 10 typically see cost per call rise 40% to 70% by week eight.",
    guides: ["facebook-ads-agency-vs-in-house-media-buyer", "meta-ads-for-high-ticket-b2b-broad-targeting"],
    service: { label: "Meta ads agency", href: "/meta-ads-agency" },
    related: ["broad-targeting", "ad-fatigue", "meta-ads"],
  },
  {
    slug: "ad-fatigue",
    term: "Ad Fatigue",
    definition:
      "Ad fatigue is the decline in click-through rate and rise in cost per result that happens when the same audience sees the same creative too often.",
    detail: "The fix is creative velocity, not audience changes: refresh hooks and formats weekly and retire creatives once frequency climbs and CTR drops.",
    guides: ["meta-ads-for-high-ticket-b2b-broad-targeting", "facebook-ads-agency-vs-in-house-media-buyer"],
    service: { label: "Meta ads agency", href: "/meta-ads-agency" },
    related: ["creative-testing", "broad-targeting"],
  },
  {
    slug: "done-for-you",
    term: "Done-For-You (DFY) Client Acquisition",
    definition:
      "Done-for-you client acquisition is a model where one provider builds and runs the entire pipeline: ad creative, media buying, funnel, qualification, follow-up and calendar booking, measured on qualified booked calls rather than cost per lead.",
    guides: ["how-much-does-a-lead-generation-agency-cost", "high-ticket-sales-how-to-get-high-ticket-clients"],
    service: { label: "See the full system", href: "/for/agencies" },
    related: ["appointment-setting", "lead-generation-agency"],
  },
  {
    slug: "high-ticket-sales",
    term: "High-Ticket Sales",
    definition:
      "High-ticket sales is selling premium services, programs or retainers priced at roughly $3,000 or more (or $1,000+ per month) through a consultative conversation rather than a self-serve checkout.",
    guides: ["high-ticket-sales-how-to-get-high-ticket-clients", "high-ticket-sales-training-framework"],
    service: { label: "Lead generation for coaches", href: "/for/coaches" },
    related: ["close-rate", "vsl-funnel", "strategy-call"],
  },
  {
    slug: "lead-generation-agency",
    term: "Lead Generation Agency",
    definition:
      "A lead generation agency runs paid or outbound campaigns to produce leads or booked appointments for a client, charged as a monthly retainer, pay-per-lead, pay-per-appointment or performance fee.",
    detail: "2026 benchmarks: $2,000 to $10,000+ per month in fees plus ad spend; pay-per-appointment runs $150 to $600 per booked call.",
    guides: ["how-much-does-a-lead-generation-agency-cost", "facebook-ads-agency-vs-in-house-media-buyer"],
    service: { label: "Lead generation agency for high-ticket offers", href: "/" },
    related: ["pay-per-lead", "pay-per-appointment", "done-for-you"],
  },
  {
    slug: "lead-qualification",
    term: "Lead Qualification",
    definition:
      "Lead qualification is filtering prospects against written criteria (revenue, budget, timeline, decision authority) before they can access a sales calendar, so closers only speak with people who can buy.",
    detail: "A multi-tier application typically removes 60% to 75% of raw inquiries and lifts close rates to 25% to 35%.",
    guides: ["automated-lead-qualification-system-high-ticket", "high-ticket-sales-training-framework"],
    service: { label: "Appointment setting system", href: "/appointment-setting" },
    related: ["appointment-setting", "close-rate", "cost-per-qualified-call"],
  },
  {
    slug: "lookalike-audience",
    term: "Lookalike Audience",
    definition:
      "A lookalike audience is a Meta targeting option that finds users statistically similar to a seed list such as past buyers or website visitors.",
    detail: "For high-ticket B2B offers, broad targeting with qualifying creative now consistently outperforms lookalikes on cost per qualified call.",
    guides: ["meta-ads-for-high-ticket-b2b-broad-targeting"],
    service: { label: "Meta ads agency", href: "/meta-ads-agency" },
    related: ["broad-targeting", "meta-ads"],
  },
  {
    slug: "ltv-to-cac-ratio",
    term: "LTV:CAC Ratio",
    definition:
      "The LTV:CAC ratio compares a client's lifetime value with the blended cost to acquire them. A ratio of 3:1 or higher is the usual threshold for scaling paid acquisition.",
    guides: ["b2b-client-acquisition-cost-cac-benchmarks-2026", "b2b-roas-benchmarks-qualified-appointment-generation"],
    service: { label: "Lead generation for consultants", href: "/for/consultants" },
    related: ["blended-cac", "roas"],
  },
  {
    slug: "meta-ads",
    term: "Meta Ads",
    definition:
      "Meta ads are paid placements across Facebook, Instagram, Messenger and the Audience Network, bought through Meta Ads Manager. For high-ticket offers they are the primary cold-traffic source feeding VSL funnels.",
    guides: ["meta-ads-for-high-ticket-b2b-broad-targeting", "facebook-ads-agency-vs-in-house-media-buyer"],
    service: { label: "Meta ads agency", href: "/meta-ads-agency" },
    related: ["broad-targeting", "creative-testing", "roas"],
  },
  {
    slug: "pay-per-appointment",
    term: "Pay-Per-Appointment",
    definition:
      "Pay-per-appointment is an agency pricing model where the client pays only for booked (and often showed) sales calls that meet agreed qualification criteria, typically $150 to $600 per appointment for high-ticket offers.",
    guides: ["how-much-does-a-lead-generation-agency-cost", "b2b-appointment-setting-vs-in-house-sdr-teams"],
    service: { label: "Appointment setting system", href: "/appointment-setting" },
    related: ["pay-per-lead", "lead-generation-agency"],
  },
  {
    slug: "pay-per-lead",
    term: "Pay-Per-Lead",
    definition:
      "Pay-per-lead is an agency pricing model where the client pays a fixed price for every contact captured, regardless of quality. It looks cheap but shifts the qualification burden onto the sales team.",
    guides: ["how-much-does-a-lead-generation-agency-cost"],
    service: { label: "Appointment setting system", href: "/appointment-setting" },
    related: ["pay-per-appointment", "cost-per-lead"],
  },
  {
    slug: "roas",
    term: "ROAS (Return on Ad Spend)",
    definition:
      "Return on ad spend is revenue attributed to advertising divided by the ad spend that produced it. High-ticket B2B teams track both front-end collected ROAS (cash within 30 days) and blended pipeline ROAS.",
    detail: "Benchmarks: 4.5x to 7.2x for high-ticket coaching; 3.2x to 5.5x front-end for consulting; 3.0x to 4.8x 30-day for agency retainers.",
    guides: ["b2b-roas-benchmarks-qualified-appointment-generation", "b2b-client-acquisition-cost-cac-benchmarks-2026"],
    service: { label: "Meta ads agency", href: "/meta-ads-agency" },
    related: ["blended-cac", "ltv-to-cac-ratio", "meta-ads"],
  },
  {
    slug: "sdr",
    term: "SDR (Sales Development Representative)",
    definition:
      "An SDR is an in-house salesperson who prospects, qualifies and books meetings for closers, usually through cold calls, cold email and LinkedIn outreach.",
    detail: "Fully loaded, an SDR costs $85,000 to $100,000+ per year once salary, benefits, tools and replacement are counted, with an average tenure of about 14 months.",
    guides: ["b2b-appointment-setting-vs-in-house-sdr-teams", "cold-outreach-vs-paid-traffic-high-ticket-b2b"],
    service: { label: "Appointment setting system", href: "/appointment-setting" },
    related: ["appointment-setting", "cold-outreach"],
  },
  {
    slug: "cold-outreach",
    term: "Cold Outreach",
    definition:
      "Cold outreach is unsolicited prospecting by email, phone or LinkedIn direct message to people who have not expressed interest. Deliverability limits and inbox fatigue have pushed its cost per qualified conversation steadily upward.",
    guides: ["cold-outreach-vs-paid-traffic-high-ticket-b2b", "b2b-appointment-setting-vs-in-house-sdr-teams"],
    service: { label: "Lead generation for consultants", href: "/for/consultants" },
    related: ["sdr", "meta-ads"],
  },
  {
    slug: "self-liquidating-offer",
    term: "Self-Liquidating Offer (SLO)",
    definition:
      "A self-liquidating offer is a low-ticket front-end product (often $7 to $29, such as a paid trial) priced so that its sales recover the ad spend used to acquire buyers, making the high-ticket backend effectively free to fill.",
    guides: ["high-ticket-sales-how-to-get-high-ticket-clients"],
    service: { label: "7-day paid trial playbook", href: "/mastermind/7-days-paid-trial" },
    related: ["roas", "vsl-funnel"],
  },
  {
    slug: "show-up-rate",
    term: "Show-Up Rate",
    definition:
      "Show-up rate is the percentage of booked sales calls where the prospect actually attends. Automated WhatsApp, SMS and email confirmation sequences push it above 80%.",
    guides: ["ai-whatsapp-lead-nurture-pipeline-high-ticket", "automated-lead-qualification-system-high-ticket"],
    service: { label: "Appointment setting system", href: "/appointment-setting" },
    related: ["speed-to-lead", "close-rate"],
  },
  {
    slug: "speed-to-lead",
    term: "Speed to Lead",
    definition:
      "Speed to lead is the time between a prospect submitting an inquiry and the first meaningful response. Contacting a lead within five minutes dramatically raises the odds of qualifying and booking them compared with waiting an hour or more.",
    detail: "Automated multi-channel follow-up (WhatsApp, SMS, email) within 60 seconds is the standard in high-performing high-ticket funnels.",
    guides: ["speed-to-lead-statistics-response-time", "ai-whatsapp-lead-nurture-pipeline-high-ticket"],
    service: { label: "Appointment setting with AI follow-up", href: "/appointment-setting" },
    related: ["appointment-setting", "show-up-rate", "whatsapp-nurture"],
  },
  {
    slug: "strategy-call",
    term: "Strategy Call",
    definition:
      "A strategy call is a consultative sales conversation, usually 30 to 60 minutes, where a qualified prospect's situation is diagnosed and a solution is proposed. It replaces the pitch-heavy demo in high-ticket selling.",
    guides: ["high-ticket-sales-training-framework", "high-ticket-sales-how-to-get-high-ticket-clients"],
    service: { label: "Book a free strategy call", href: "/book-your-call" },
    related: ["close-rate", "high-ticket-sales"],
  },
  {
    slug: "vsl-funnel",
    term: "VSL Funnel",
    definition:
      "A VSL (video sales letter) funnel is a landing page built around an 8 to 14 minute video that explains the problem, the unique mechanism and the proof, followed by a qualification application and a calendar booking step.",
    detail: "Benchmarks: 58%+ video completion, 14% to 18% page-to-application conversion for well-built high-ticket VSL funnels.",
    guides: ["the-2026-vsl-funnel-blueprint-high-ticket-client-acquisition", "how-to-write-a-vsl-script-12-minute-structure"],
    service: { label: "Full-service growth system", href: "/appointment-setting" },
    related: ["vsl-script", "lead-qualification", "high-ticket-sales"],
  },
  {
    slug: "vsl-script",
    term: "VSL Script",
    definition:
      "A VSL script is the written structure of a video sales letter: hook, problem agitation, failure of alternatives, unique mechanism, proof and a filtered call to action, delivered in roughly 12 minutes.",
    guides: ["how-to-write-a-vsl-script-12-minute-structure", "the-2026-vsl-funnel-blueprint-high-ticket-client-acquisition"],
    service: { label: "Full-service growth system", href: "/appointment-setting" },
    related: ["vsl-funnel", "unique-mechanism"],
  },
  {
    slug: "unique-mechanism",
    term: "Unique Mechanism",
    definition:
      "A unique mechanism is the named, proprietary method that explains why your offer works where alternatives failed. It is the centrepiece of a VSL script and the main defence against being compared on price.",
    guides: ["how-to-write-a-vsl-script-12-minute-structure", "the-2026-vsl-funnel-blueprint-high-ticket-client-acquisition"],
    service: { label: "Full-service growth system", href: "/appointment-setting" },
    related: ["vsl-script", "high-ticket-sales"],
  },
  {
    slug: "whatsapp-nurture",
    term: "WhatsApp Nurture",
    definition:
      "WhatsApp nurture is an automated sequence of personalised messages, case studies and reminders sent between booking and the live call. With 98% open rates it is the highest-attention channel for show-up and pre-sell.",
    guides: ["ai-whatsapp-lead-nurture-pipeline-high-ticket", "speed-to-lead-statistics-response-time"],
    service: { label: "Appointment setting with AI follow-up", href: "/appointment-setting" },
    related: ["speed-to-lead", "show-up-rate"],
  },
  {
    slug: "conversions-api",
    term: "Conversions API (CAPI)",
    definition:
      "The Meta Conversions API sends conversion events (applications, bookings, purchases) from your server directly to Meta, so the algorithm optimises on real pipeline events rather than browser pixel fires that are blocked or lost.",
    guides: ["meta-ads-for-high-ticket-b2b-broad-targeting", "b2b-roas-benchmarks-qualified-appointment-generation"],
    service: { label: "Meta ads agency", href: "/meta-ads-agency" },
    related: ["meta-ads", "roas"],
  },
];

export function getGlossaryTerm(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug);
}
