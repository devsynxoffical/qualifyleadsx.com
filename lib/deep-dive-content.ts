/**
 * Long-form content for indexed industry and service pages (Nov 9 content
 * upgrade, Site Growth Playbook templates). Every number comes from the
 * site's own benchmark pages or named case studies:
 *   /benchmarks/cost-per-booked-call  $90–$180 per qualified booked call ($3K–$25K offers)
 *   /benchmarks/close-rate            24–31% setter-qualified vs 9–14% unvetted ($5K–$10K)
 *   /benchmarks/show-rate             58.2% with email-only confirmations
 *   /benchmarks/meta-ads-cpm          ~$24.50 tier-1 average; Q4 $36.80–$54.20
 */
export type DeepDiveItem = { title: string; text: string };
export type DeepDiveSection = {
  eyebrow: string;
  title: string;
  lead?: string;
  items: DeepDiveItem[];
  numbered?: boolean;
  table?: { head: string[]; rows: string[][] };
  note?: string;
};
export type DeepDiveContent = {
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  sections: DeepDiveSection[];
  faqs: { q: string; a: string }[];
};

export const agenciesDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Client acquisition for agencies",
    title: "What a client acquisition agency does for a marketing agency",
    paragraphs: [
      "Most marketing agencies win clients through referrals and the founder's network. That works until about $30K–$50K a month, then growth stalls because referrals arrive when they arrive, not when you have capacity. QualifiedLeadsX is a client acquisition agency for agencies: we build and run the Meta ads, the case-study funnel, the application filter and the follow-up that put qualified retainer prospects on your calendar every week.",
      "It is the same system we run for coaches and consultants, adapted to how agencies sell. Your buyer has usually been burned by an agency before, so proof matters more than promises, and one closed retainer has to pay for weeks of ad spend. Below is how we handle both.",
    ],
  },
  sections: [
    {
      eyebrow: "Why agencies need a predictable channel",
      title: "Why referrals and cold email stop working past $50K a month",
      items: [
        { title: "Referrals don't scale with headcount", text: "When you hire a new account manager you need two or three new retainers within weeks. Referral flow doesn't respond to your hiring plan; paid acquisition does." },
        { title: "Cold email deliverability keeps getting worse", text: "Inbox providers keep tightening sending rules, so cold email now needs secondary domains, warm-up tools and constant list cleaning. Inbound buyers who raise their hand convert at much higher rates. See [cold outreach vs paid traffic](/blog/cold-outreach-vs-paid-traffic-high-ticket-b2b)." },
        { title: "Your buyers are already on Meta", text: "Owners of coaching businesses, clinics, ecommerce brands and local service firms use Facebook and Instagram every day. Broad targeting with strong creative finds them more cheaply than LinkedIn for most agency offers; tier-1 CPMs averaged about $24.50 in 2026 ([Meta ads CPM benchmarks](/benchmarks/meta-ads-cpm))." },
        { title: "One retainer pays for a lot of testing", text: "A qualified booked call for a $3,000–$5,000 monthly retainer usually costs $95–$160 in our accounts ([cost per booked call benchmarks](/benchmarks/cost-per-booked-call)). Two or three closed retainers cover a month of spend many times over." },
      ],
    },
    {
      eyebrow: "What we do for agencies",
      title: "The agency client acquisition system, step by step",
      numbered: true,
      items: [
        { title: "Niche and offer audit", text: "We pick the client niche your case studies can actually prove. \"Patient acquisition for med spas\" converts; \"full-service digital marketing\" doesn't." },
        { title: "Proof-led creative", text: "40 to 100+ ads: founder-to-camera videos, client results, screen recordings of real dashboards and objection-handling ads. Most agency ads fail on creative, not targeting." },
        { title: "Case-study funnel with a short VSL", text: "A 3 to 5 page funnel: a short video, two or three detailed case studies and an application. Built to answer \"why you and not the last agency\" before the call." },
        { title: "Application filter", text: "Questions on monthly revenue, current marketing spend, decision-maker status and timeline, so micro-businesses that can't afford a retainer never reach your calendar." },
        { title: "Speed to lead and booking", text: "Every applicant gets a reply in under 5 minutes by SMS, email and WhatsApp, and qualified applicants are booked straight into your calendar. See [appointment setting for agencies](/appointment-setting-for-agencies)." },
        { title: "Weekly optimization on cost per client", text: "We track cost per booked call, show rate and close rate, then change angles, audiences and follow-up, not just budgets." },
      ],
    },
    {
      eyebrow: "Opportunities",
      title: "Offers and angles agencies should test",
      items: [
        { title: "Niche-specific promises", text: "A specific audience plus a specific outcome (\"more booked consults for aesthetics clinics\") beats a list of services every time." },
        { title: "Result-led hooks", text: "A real number from a real client, used with permission, is the strongest hook an agency has." },
        { title: "Paid audits or workshops", text: "A low-priced audit or workshop can pay back ad spend before the retainer sale. See the [low-ticket offer case study](/case-studies/digital-media-agency-157k)." },
        { title: "Retargeting with proof", text: "Show case-study videos to people who watched half your VSL or started the application but didn't finish." },
      ],
    },
    {
      eyebrow: "Results",
      title: "Results from agency clients",
      lead: "Documented results from agency clients. Each links to the full case study.",
      items: [
        { title: "Service agency: $846,000 in 2025", text: "235 clients closed at a $3,600 average deal using Meta ads, qualification and structured follow-up. [Read the case study](/case-studies/b2b-agency-scaling-846k)." },
        { title: "Med spa marketing agency: $639,000 in two months", text: "With 1,116 conversations still open, from Meta ads, qualification and appointment setting. [Read the case study](/case-studies/med-spa-marketing-agency-639k)." },
        { title: "Agency client: an $85K month", text: "Tracking toward $95K+, broken down live in Ads Manager in a retargeting session. [Read the case study](/case-studies/strategic-consulting-85k)." },
      ],
    },
    {
      eyebrow: "Mistakes",
      title: "Five mistakes agencies make when they advertise themselves",
      numbered: true,
      items: [
        { title: "Selling services instead of outcomes", text: "\"SEO, ads and web design\" gives the buyer nothing to picture. A niche and a result do." },
        { title: "Sending cold traffic straight to a calendar", text: "Without an application step, unvetted bookings close at only 9–14% on $5K–$10K offers, against 24–31% for setter-qualified calls ([close rate benchmarks](/benchmarks/close-rate))." },
        { title: "Replying the next day", text: "An application left overnight is usually lost to the next agency the prospect talks to. Reply in under 5 minutes." },
        { title: "Running two or three ads", text: "Creative burns out within weeks. Agencies need the same creative pipeline they sell to clients." },
        { title: "Judging on cost per lead", text: "Cheap leads that never book cost more than expensive leads that close. Track cost per booked call and cost per signed retainer; model yours with the [CAC calculator](/tools/cac-calculator)." },
      ],
    },
  ],
  faqs: [
    { q: "What is a customer acquisition agency?", a: "A customer acquisition agency (or client acquisition agency) is responsible for the whole path from ad to booked sales call: offer positioning, ads, landing pages or funnel, follow-up, qualification and booking. A traditional ad agency usually stops at the click. QualifiedLeadsX runs the full path and reports on cost per booked call and cost per client, not just cost per lead." },
    { q: "How much does it cost to acquire an agency client with Meta ads?", a: "In our accounts a qualified booked call for a $3,000–$5,000 monthly retainer usually costs $95–$160. At a 25% close rate that is roughly $380–$640 in ad spend per signed retainer. Your numbers depend on offer, niche and proof; the CAC calculator on this site lets you model them." },
    { q: "Should an agency use LinkedIn or Meta ads to get clients?", a: "For agencies that sell to owner-led small and mid-size businesses, Meta usually books calls at a lower cost because the audience is larger and CPMs are lower. LinkedIn can make sense for agencies that only sell to enterprise marketing teams with large deal sizes." },
  ],
};

export const coachesDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Client acquisition for coaches",
    title: "How high-ticket coaches get clients without cold DMs",
    paragraphs: [
      "Most coaches grow through content, referrals and DMs until their calendar is full of discovery calls with people who can't afford the program. QualifiedLeadsX builds the client acquisition system that fixes both problems: Meta ads that reach buyers who already want the result, a VSL funnel that pre-sells the program, an application that screens out tire-kickers, and follow-up that gets booked calls to actually show up.",
      "It works for business, executive, fitness and health coaches selling programs from about $3,000 to $25,000. If you are searching for coaching leads to buy, this is the alternative: instead of shared lead lists, you get your own pipeline of applicants who saw your offer, watched your video and chose to book.",
    ],
  },
  sections: [
    {
      eyebrow: "Why coaches need a system",
      title: "Why organic content and DMs stop scaling",
      items: [
        { title: "Content grows slowly and unevenly", text: "Organic reach rises and falls with the algorithm. Paid acquisition gives you a number you can plan around: booked calls per week at a known cost." },
        { title: "DMs fill the calendar with the wrong people", text: "Outbound DMs book calls with people who were curious, not ready. Without a filter, unvetted calls close at roughly 9–14% on $5K–$10K offers ([close rate benchmarks](/benchmarks/close-rate))." },
        { title: "Bought lead lists don't work for high-ticket coaching", text: "Shared or purchased coaching leads have never heard of you, have often been sold to several coaches, and rarely book. Coaches selling $3K+ programs need leads who chose them." },
        { title: "No-shows quietly kill revenue", text: "With email-only confirmations, the average show rate for high-ticket sales calls is 58.2% ([show rate benchmarks](/benchmarks/show-rate)). Fast SMS and WhatsApp follow-up lifts it substantially." },
      ],
    },
    {
      eyebrow: "Opportunities",
      title: "Angles and offers that work for coaches",
      items: [
        { title: "Transformation-specific hooks", text: "Speak to one situation (\"agency owners stuck at $30K a month\", \"executives preparing for a first C-suite role\") rather than \"coaching for everyone\"." },
        { title: "Low-ticket front ends", text: "A paid challenge, workshop or membership can cover ad spend and feed the high-ticket call. One fitness client turned this into $203,941 in 11 days ([case study](/case-studies/high-ticket-coaching-203k))." },
        { title: "Client story ads", text: "Short testimonial and before-and-after story videos (within Meta's health and personal-attribute rules) are the highest-converting creative format for coaches." },
        { title: "Application-first funnels", text: "Asking about budget and commitment before the booking page keeps your calendar for people who can say yes. See [how to qualify leads](/blog/how-to-qualify-leads)." },
      ],
    },
    {
      eyebrow: "Numbers to plan with",
      title: "What coaching client acquisition typically costs",
      lead: "Ranges from our own managed accounts. Use them as a starting point and replace them with your own data after the first month.",
      items: [],
      table: {
        head: ["Metric", "Typical range", "Where it comes from"],
        rows: [
          ["Cost per qualified booked call", "$95–$130 for ~$3K offers; $120–$160 for ~$5K offers", "[Cost per booked call benchmarks](/benchmarks/cost-per-booked-call)"],
          ["Close rate on setter-qualified calls", "28–36% ($3K–$5K); 24–31% ($5K–$10K)", "[Close rate benchmarks](/benchmarks/close-rate)"],
          ["Show rate, email-only confirmations", "58.2% average", "[Show rate benchmarks](/benchmarks/show-rate)"],
          ["Meta CPM, tier-1 countries", "~$24.50 average; $36.80–$54.20 in Q4", "[Meta ads CPM benchmarks](/benchmarks/meta-ads-cpm)"],
        ],
      },
      note: "Want your own numbers? Use the [cost per booked call calculator](/tools/cost-per-booked-call-calculator).",
    },
    {
      eyebrow: "Mistakes",
      title: "Mistakes coaches make with paid ads",
      numbered: true,
      items: [
        { title: "Sending ads to a free call", text: "\"Book a free call\" with no video and no application attracts the least committed buyers. Pre-sell first." },
        { title: "Boosting posts instead of running campaigns", text: "Boosted posts optimize for engagement, not booked calls. Run conversion campaigns that optimize for applications or bookings." },
        { title: "Judging after one week", text: "Meta needs data to learn. Judge creative on cost per booked call over two to four weeks, not on day-three cost per lead." },
        { title: "Doing every sales call yourself forever", text: "Once volume grows, a setter or closer protects your delivery time. See [outsourced sales closers](/outsourced-sales-closers)." },
      ],
    },
  ],
  faqs: [
    { q: "Where can I buy coaching leads?", a: "You can buy shared lead lists, but for coaching programs above about $3,000 they rarely convert: the people have never heard of you and are often sold to several coaches. Most high-ticket coaches get better results generating their own leads with Meta ads, a VSL and an application, so every lead has already chosen them." },
    { q: "How much does a booked sales call cost for a coaching program?", a: "In our managed accounts a qualified booked call for a ~$3,000 coaching offer averages $95–$130, and $120–$160 for ~$5,000 offers. Your cost depends on offer, niche, creative and how strictly you qualify." },
  ],
};

export const consultantsDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Client acquisition for consultants",
    title: "A pipeline for consultants that doesn't depend on referrals",
    paragraphs: [
      "Strategy, operations and management consultants usually live on referrals and repeat work. That produces feast-and-famine revenue: a full bench one quarter and an empty pipeline the next. QualifiedLeadsX builds an inbound client acquisition system for consultants: authority content and ads that reach decision-makers, a funnel that explains your method, a gate that confirms budget and authority, and booking straight into your calendar.",
      "The system is designed for engagements from about $10,000 to $50,000+, where one signed client pays for months of acquisition. Its job is not volume; it is a steady flow of the right conversations with owners, partners and C-level buyers.",
    ],
  },
  sections: [
    {
      eyebrow: "Why consultants need it",
      title: "Why consulting pipelines run dry",
      items: [
        { title: "Referrals are lumpy", text: "Referral volume follows your past clients' calendars, not your capacity. A paid channel lets you add conversations when the bench empties." },
        { title: "Decision-makers ignore cold outreach", text: "Senior buyers receive dozens of cold emails a week. Inbound buyers who watched your briefing and applied are already halfway to yes. See [cold outreach vs paid traffic](/blog/cold-outreach-vs-paid-traffic-high-ticket-b2b)." },
        { title: "Long sales cycles need nurture", text: "Consulting decisions often take weeks. Email, SMS and WhatsApp nurture keep you present while the prospect gets internal sign-off. See [WhatsApp marketing for consultants](/blog/whatsapp-marketing-for-consultants)." },
        { title: "Enterprise calls cost more, but are worth more", text: "Larger consulting offers typically run $180–$280 per attended call in our accounts ([cost per booked call benchmarks](/benchmarks/cost-per-booked-call)). One signed engagement covers that many times over." },
      ],
    },
    {
      eyebrow: "What we do for consultants",
      title: "How the consulting acquisition system works",
      numbered: true,
      items: [
        { title: "Position a named method", text: "We turn \"we help with operations\" into a named, outcome-led method that a CFO or founder can repeat internally." },
        { title: "Authority VSL or briefing", text: "A short video or written briefing that walks through the problem, your method and a client example, so the first call starts with trust." },
        { title: "Decision-maker gate", text: "The application asks for company size, role, budget range and timeline, so junior researchers and students are filtered out before booking." },
        { title: "Pre-call proof pack", text: "Booked prospects receive case studies and a short agenda, which raises show rates and shortens the first call." },
        { title: "Measure cost per engagement", text: "We report on cost per booked call, show rate, proposal rate and signed engagements, so spend is judged on revenue." },
      ],
    },
    {
      eyebrow: "Opportunities",
      title: "Where consultants find demand",
      items: [
        { title: "Problem-led angles", text: "Lead with the painful, specific problem (\"margin leaking from manual ops in 50–200 person firms\"), not with your title." },
        { title: "Diagnostic offers", text: "A fixed-price diagnostic or workshop is an easy first yes and a natural bridge to a retainer." },
        { title: "Retargeting with long-form proof", text: "Prospects who watched your briefing respond to detailed case studies and founder interviews in retargeting." },
        { title: "Search phrases to support with content", text: "\"How to find consulting clients\", \"consulting lead generation\" and industry-specific problem searches are worth matching with guides on your site." },
      ],
    },
    {
      eyebrow: "Mistakes",
      title: "Mistakes consultants make with paid acquisition",
      numbered: true,
      items: [
        { title: "Advertising the firm instead of the problem", text: "Prospects don't search for consultancies; they search for solutions to problems." },
        { title: "No qualification", text: "Without a gate, consultants spend hours on calls with buyers who have no budget or authority." },
        { title: "Expecting a close on the first call", text: "Plan for a diagnostic or proposal step and nurture between them." },
        { title: "Measuring cost per lead", text: "For $10K+ engagements, cost per signed client is the only number that matters. Model it with the [LTV to CAC calculator](/tools/ltv-cac-calculator)." },
      ],
    },
  ],
  faqs: [
    { q: "How do consultants get clients without referrals?", a: "The most reliable non-referral channel for consultants is inbound: targeted ads or content that reach decision-makers, a short briefing that explains your method, and an application that confirms budget and authority before a call is booked. It produces a steady flow of conversations you can plan capacity around." },
    { q: "What does it cost to book a call with a consulting decision-maker?", a: "In our managed accounts, larger consulting and enterprise offers typically cost $180–$280 per attended call. Smaller $3K–$5K offers run lower. The cost per signed engagement is what to compare against your fee." },
  ],
};

export const appointmentSettingDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Appointment setting agency",
    title: "What our appointment setting service includes",
    paragraphs: [
      "QualifiedLeadsX is an appointment setting agency for high-ticket businesses: we reply to every new lead in under 5 minutes, qualify them on budget, authority and timeline, and book the right ones into your closers' calendars. AI handles the first reply and reminders around the clock; human setters handle the conversations that need judgment.",
      "You can use it on its own with your existing lead flow, or as part of Full-Service Growth, where we also run the Meta ads and funnel that create the leads.",
    ],
  },
  sections: [
    {
      eyebrow: "What's included",
      title: "Everything in the appointment setting system",
      items: [
        { title: "Sub-5-minute first response", text: "SMS, email and WhatsApp replies to every new lead, day or night. See [speed to lead](/speed-to-lead)." },
        { title: "Qualification scripts", text: "Budget, decision-maker, timeline and fit questions, written for your offer and refined from call recordings." },
        { title: "Human setters for live conversations", text: "Setters call and message leads who need a conversation before they book." },
        { title: "Calendar booking and routing", text: "Qualified leads book directly into the right closer's calendar; unqualified leads go to a nurture sequence instead." },
        { title: "Reminders and no-show recovery", text: "Confirmation and reminder sequences, plus rebooking for anyone who misses a call. See [WhatsApp lead nurture](/whatsapp-lead-nurture)." },
        { title: "CRM setup and reporting", text: "Pipeline stages, tags and a weekly report on contact rate, booking rate, show rate and qualified rate. See [CRM automation](/crm-automation)." },
      ],
    },
    {
      eyebrow: "Pricing",
      title: "How appointment setting is priced",
      lead: "Appointment setting is part of our Full-Service Growth plan and is priced as a custom quote after a free 30-minute strategy call. The quote depends on lead volume, the hours of human coverage you need, how many closers we route to, and whether we also run your ads and funnel. Ad spend, if we run ads, is paid by you directly to Meta.",
      items: [],
      note: "Comparing options? See [appointment setter vs virtual assistant](/compare/appointment-setter-vs-va) and [B2B appointment setting vs in-house SDR teams](/blog/b2b-appointment-setting-vs-in-house-sdr-teams).",
    },
    {
      eyebrow: "The numbers",
      title: "What good appointment setting looks like in numbers",
      items: [],
      table: {
        head: ["Metric", "Benchmark", "Source"],
        rows: [
          ["Show rate with email-only confirmations", "58.2% average", "[Show rate benchmarks](/benchmarks/show-rate)"],
          ["Close rate, unvetted bookings ($5K–$10K offers)", "9–14%", "[Close rate benchmarks](/benchmarks/close-rate)"],
          ["Close rate, setter-qualified calls ($5K–$10K offers)", "24–31%", "[Close rate benchmarks](/benchmarks/close-rate)"],
          ["Cost per qualified booked call ($3K–$25K offers)", "$90–$180", "[Cost per booked call benchmarks](/benchmarks/cost-per-booked-call)"],
        ],
      },
      note: "Model your own show rate with the [show rate calculator](/tools/show-rate-calculator).",
    },
    {
      eyebrow: "Where we work",
      title: "Appointment setting for US, UK, Canadian and Australian businesses",
      lead: "We work fully remotely for clients in the United States, United Kingdom, Canada and Australia. Calls are booked into your calendar in your own time zone, and automated follow-up runs around the clock.",
      items: [],
    },
  ],
  faqs: [
    { q: "What does an appointment setting agency do?", a: "An appointment setting agency contacts your new leads, qualifies them and books the qualified ones into your sales team's calendar. A good one also runs reminders and no-show recovery and reports on show rate and qualified rate, not just the number of bookings." },
    { q: "How much does an appointment setting agency cost?", a: "Pricing models vary: monthly retainers, per-appointment fees and commission on closed deals are all common. QualifiedLeadsX quotes appointment setting as part of Full-Service Growth after a free strategy call, based on lead volume, coverage hours and the number of closers." },
    { q: "Is appointment setting worth it for small teams?", a: "If you get more leads than you can contact within 5 minutes, or more than about a third of your booked calls don't show, appointment setting usually pays for itself by lifting the number of qualified calls your closers take." },
  ],
};
