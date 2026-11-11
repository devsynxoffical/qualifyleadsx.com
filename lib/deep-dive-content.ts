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

export const highTicketDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "High-ticket vs low-ticket",
    title: "Why high-ticket lead generation needs a different system",
    paragraphs: [
      "High-ticket lead generation means generating qualified sales conversations for offers priced at roughly $3,000 and above, where the sale happens on a call rather than at a checkout. Because each client is worth thousands, the goal is not the most leads at the lowest cost. It is the most qualified calls at a cost per client your margins can carry.",
      "That changes every part of the system: the offer and creative have to pre-sell, the funnel has to filter, follow-up has to be immediate, and success is measured in booked calls, show rate and signed clients rather than cost per lead.",
    ],
  },
  sections: [
    {
      eyebrow: "The difference in practice",
      title: "High-ticket vs low-ticket lead generation",
      items: [],
      table: {
        head: ["", "Low-ticket lead generation", "High-ticket lead generation"],
        rows: [
          ["Goal", "Cheap leads or direct purchases", "Qualified sales calls and signed clients"],
          ["Main metric", "Cost per lead", "Cost per booked call and cost per client"],
          ["Funnel", "Lead form or checkout", "VSL or case-study page, application, booking"],
          ["Follow-up", "Email sequence", "Reply in under 5 minutes by SMS, WhatsApp, call"],
          ["Qualification", "Little or none", "Budget, authority and timeline before booking"],
          ["Typical close rate", "Not applicable", "24–31% on setter-qualified calls for $5K–$10K offers ([benchmarks](/benchmarks/close-rate))"],
        ],
      },
    },
    {
      eyebrow: "Channels",
      title: "Which channels work for high-ticket offers",
      lead: "Most of our clients sell to owner-led businesses and individuals with buying power, so we usually start on Meta and add other channels once the funnel converts.",
      items: [
        { title: "Meta (Facebook and Instagram) ads", text: "The largest reach and the fastest feedback loop. Creative does the targeting; the application does the filtering. See [Meta ads agency](/meta-ads-agency)." },
        { title: "Google search ads", text: "Captures people already searching for a solution, at a higher cost per click and with less volume for niche offers. See [Meta ads vs Google ads for high-ticket](/compare/meta-ads-vs-google-ads-high-ticket)." },
        { title: "LinkedIn ads", text: "Precise job-title targeting for enterprise deals, at a much higher cost per lead." },
        { title: "Cold outreach and referrals", text: "Useful supplements, but harder to scale predictably. See [cold outreach vs paid traffic](/blog/cold-outreach-vs-paid-traffic-high-ticket-b2b)." },
      ],
    },
    {
      eyebrow: "Who it's for",
      title: "Industries we generate high-ticket leads for",
      lead: "High-ticket lead generation works where one client is worth several thousand dollars and the sale happens on a call: [coaches](/for/coaches), [consultants](/for/consultants), [marketing agencies](/for/agencies), [B2B service firms](/for/b2b-services), [B2B SaaS](/for/saas), [med spas](/for/med-spas), [financial advisors](/for/financial-advisors) and [law firms](/for/law-firms). See [all industries](/for).",
      items: [],
    },
    {
      eyebrow: "What it costs",
      title: "What a high-ticket booked call typically costs",
      items: [],
      table: {
        head: ["Offer size", "Cost per attended call", "Setter-qualified close rate"],
        rows: [
          ["~$3,000", "$95–$130", "28–36%"],
          ["~$5,000", "$120–$160", "24–31% ($5K–$10K)"],
          ["$10,000+", "$180–$280", "19–26% ($10K–$25K)"],
        ],
      },
      note: "From our [cost per booked call](/benchmarks/cost-per-booked-call) and [close rate](/benchmarks/close-rate) benchmarks. Model your own with the [cost per booked call calculator](/tools/cost-per-booked-call-calculator). We work remotely with clients in the US, UK, Canada and Australia.",
    },
  ],
  faqs: [
    { q: "What counts as a high-ticket lead?", a: "A high-ticket lead is a prospect for an offer priced at roughly $3,000 or more who has shown interest and passed basic qualification on budget, authority and timeline. For high-ticket offers the useful unit is a qualified booked call, not a raw lead." },
    { q: "Which industries are best for high-ticket lead generation?", a: "Coaching, consulting, marketing agencies, B2B services, B2B SaaS, med spas and aesthetics, financial advisors, law firms and other businesses where one client is worth thousands and the sale happens on a call." },
  ],
};

export const speedToLeadDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Implementation",
    title: "How to measure and improve speed to lead",
    paragraphs: [
      "Speed to lead is the time between a lead submitting a form and your first meaningful response. For high-ticket offers the target is under 5 minutes, every time, including nights and weekends. The research behind that number is in our [speed to lead statistics](/blog/speed-to-lead-statistics-response-time); this section covers how to measure it and how to hit it.",
    ],
  },
  sections: [
    {
      eyebrow: "Measure it",
      title: "How to calculate your speed to lead",
      numbered: true,
      items: [
        { title: "Capture two timestamps", text: "The form submission time and the first outbound touch (call, SMS, WhatsApp or email) that the lead could actually see." },
        { title: "Use the median, not the average", text: "One lead answered after three days distorts an average. The median shows what a typical lead experiences." },
        { title: "Split by hour of day", text: "Most teams are fast at 11 am and slow at 9 pm. Report working hours and out-of-hours separately." },
        { title: "Track contact rate alongside it", text: "A fast automated text that nobody replies to is not a conversation. Measure how many leads you actually reach." },
      ],
    },
    {
      eyebrow: "Benchmarks",
      title: "What good speed to lead looks like",
      items: [],
      table: {
        head: ["First response", "What it usually means"],
        rows: [
          ["Under 5 minutes", "Lead is still on their phone and thinking about you. Highest contact and booking rates."],
          ["10–30 minutes", "Contact rate drops sharply; many leads are now talking to a competitor."],
          ["1–4 hours", "Lead has moved on; most attempts go to voicemail."],
          ["24+ hours", "Lead is effectively cold. Expect low contact and show rates."],
        ],
      },
    },
    {
      eyebrow: "Channels",
      title: "Which channel to reply on first",
      items: [
        { title: "SMS", text: "Fast to read and easy to reply to. A good first touch within seconds." },
        { title: "WhatsApp", text: "Preferred in many markets and strong for reminders. See [WhatsApp lead nurture](/whatsapp-lead-nurture)." },
        { title: "Phone call", text: "Highest booking rate when answered. Best within the first few minutes, triggered by the CRM." },
        { title: "Email", text: "Useful for the record and for details, but rarely the fastest way to start a conversation." },
      ],
      note: "Pair fast response with qualification and booking: see [appointment setting](/appointment-setting) and [CRM automation](/crm-automation).",
    },
  ],
  faqs: [
    { q: "What is a good speed to lead time?", a: "Under 5 minutes for the first response, for every lead, including outside working hours. Beyond about 30 minutes contact and booking rates fall sharply, which is why automated first responses are standard for high-ticket offers." },
    { q: "How do you calculate speed to lead?", a: "Subtract the form submission time from the time of the first outbound touch the lead could see, for every lead, and report the median. Split the result by working hours and out-of-hours to find where leads are waiting." },
  ],
};

export const leadGenAgencyDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Done-for-you",
    title: "What a done-for-you lead generation agency includes",
    paragraphs: [
      "A done-for-you lead generation agency builds and runs the whole path from ad to booked sales call, so your team only takes calls. With QualifiedLeadsX that means offer positioning, Meta ads and creative, a 3 to 5 page funnel, AI follow-up in under 5 minutes, qualification, CRM and calendar booking. You own every asset, and engagements carry a 90-day written guarantee.",
    ],
  },
  sections: [
    {
      eyebrow: "How to choose",
      title: "How to choose a lead generation agency",
      numbered: true,
      items: [
        { title: "Ask what they are measured on", text: "Cost per lead is easy to game. Look for agencies that report cost per booked call, show rate and cost per client." },
        { title: "Check who owns the assets", text: "Ad account, pixel, funnel, CRM and creatives should be in your name. If you leave, you should keep everything." },
        { title: "Look at follow-up, not just ads", text: "Most lost revenue happens after the click. Ask how fast leads are contacted and how they are qualified." },
        { title: "Ask for case studies in your price range", text: "A result for a $97 product says little about a $10,000 service. See our [case studies](/case-studies)." },
        { title: "Understand the pricing model", text: "Retainer, pay-per-lead, pay-per-appointment and performance models each shift risk differently. See [how much a lead generation agency costs](/blog/how-much-does-a-lead-generation-agency-cost)." },
        { title: "Read the guarantee", text: "Get the terms in writing: what is promised, by when, and what happens if it isn't met." },
      ],
    },
    {
      eyebrow: "Who it's for",
      title: "Who a done-for-you lead generation agency suits",
      lead: "Businesses with a proven offer of about $3,000 or more, doing $10,000+ a month, that want a predictable flow of qualified calls without hiring an in-house marketing team: [coaches](/for/coaches), [consultants](/for/consultants), [agencies](/for/agencies), [B2B services](/for/b2b-services) and more in [all industries](/for). If you'd rather build it yourself with guidance, see the [AI Client Acquisition Mastermind](/mastermind/hidden-facebook-interest).",
      items: [],
    },
  ],
  faqs: [
    { q: "Is a lead generation agency worth it?", a: "It is worth it when the agency is measured on booked calls and clients, you own the assets, and your offer already sells. Compare the agency fee plus ad spend with the cost per client it produces and the lifetime value of that client." },
  ],
};

export const solarDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Solar appointments",
    title: "Buying solar appointments vs generating your own",
    paragraphs: [
      "Many solar installers start by buying solar appointments: preset, \"guaranteed\" or pay-per-appointment slots from a lead vendor. It's fast, but the appointment is usually set from a lead the vendor also sells or recycles, and you have no control over how it was qualified. QualifiedLeadsX takes the other route: we run Meta ads in your own ad account, qualify homeowners before booking, and set exclusive residential solar appointments that only your reps see.",
    ],
  },
  sections: [
    {
      eyebrow: "The difference",
      title: "Bought appointments vs your own appointment engine",
      items: [],
      table: {
        head: ["", "Bought / preset solar appointments", "Your own appointment engine"],
        rows: [
          ["Exclusivity", "Often shared, resold or recycled", "Exclusive to your company"],
          ["Qualification", "Set by the vendor's script", "Your criteria: homeownership, roof, bill size, credit"],
          ["\"Guaranteed\"", "Usually means a refund or replacement for no-shows, not a sale", "You own the funnel and fix the leak instead"],
          ["Data and assets", "The vendor keeps them", "Ad account, funnel, CRM and data stay yours"],
          ["Cost over time", "Price per appointment rarely falls", "Cost per appointment falls as creative and targeting improve"],
        ],
      },
    },
    {
      eyebrow: "Results",
      title: "What solar campaigns have produced",
      lead: "Two recent solar campaigns we ran on Meta:",
      items: [
        { title: "232 qualified homeowner leads in 15 days", text: "For roughly $6,000 in ad spend (about $26 per lead), from homeowners actively looking to switch to solar." },
        { title: "300 OTP-verified leads in 10 days, Texas", text: "At $14.71 per lead and a $50 CPM, while the client reported paying $80 to $100 CPMs before. Phone verification removes fake and mistyped numbers before a setter calls." },
      ],
      note: "Model what an appointment is worth to you with the [cost per booked call calculator](/tools/cost-per-booked-call-calculator), and see how fast follow-up protects sit rates on [speed to lead](/speed-to-lead).",
    },
    {
      eyebrow: "How we set solar appointments",
      title: "From ad to sat appointment",
      numbered: true,
      items: [
        { title: "Utility-bill angles, not hype", text: "Ads lead with rising electricity costs and honest savings, which attracts homeowners who have already done the maths." },
        { title: "Qualify before booking", text: "Homeownership, roof type, monthly bill and credit range are confirmed in the form or on the first call, so reps don't drive to renters." },
        { title: "Phone verification", text: "OTP verification keeps fake numbers out of the CRM." },
        { title: "Book within minutes", text: "Qualified homeowners get a call and text within 5 minutes and book an in-home or virtual consultation. See [appointment setting](/appointment-setting)." },
        { title: "Confirm and remind", text: "Reminders by SMS and WhatsApp before the appointment protect sit rates." },
      ],
    },
  ],
  faqs: [
    { q: "Should I buy solar appointments or generate my own?", a: "Buying appointments is fast but usually shared or recycled, and you can't control qualification. Generating your own with Meta ads and an in-house or outsourced setter gives you exclusive appointments, your own data, and a cost per appointment that falls as the campaign improves." },
    { q: "What does \"guaranteed solar appointments\" mean?", a: "It usually means the vendor will refund or replace appointments that don't sit, not that they will close. Ask how the homeowner was qualified, whether the lead is exclusive, and what counts as a valid appointment before you buy." },
    { q: "How much do solar leads cost on Facebook?", a: "In two recent campaigns we ran, solar leads cost about $26 (232 leads from roughly $6,000) and $14.71 (300 phone-verified leads in Texas). Costs vary by state, season and how strictly leads are qualified." },
  ],
};

export const setterVsVaDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Virtual appointment setters",
    title: "What is a virtual appointment setter?",
    paragraphs: [
      "A virtual appointment setter is a remote team member whose only job is to contact new leads, qualify them and book them into your sales calendar, by phone, SMS, WhatsApp or DM. A virtual assistant (VA) is a remote generalist who handles admin: inbox, scheduling, data entry and research. Some VAs also set appointments, which is where most hiring mistakes start: setting appointments for a high-ticket offer is a sales skill, not an admin task.",
    ],
  },
  sections: [
    {
      eyebrow: "Side by side",
      title: "VA appointment setter vs dedicated appointment setter",
      items: [],
      table: {
        head: ["", "Virtual assistant setting appointments", "Dedicated appointment setter"],
        rows: [
          ["Main job", "Admin, with booking as one task", "Contacting, qualifying and booking leads"],
          ["Speed to lead", "Depends on what else is in the queue", "Measured on replying within 5 minutes"],
          ["Qualification", "Usually books whoever asks", "Confirms budget, authority and timeline first"],
          ["Measured on", "Tasks completed", "Booking rate, show rate and qualified rate"],
          ["Best for", "Low lead volume, simple offers, admin-heavy roles", "High-ticket offers and steady lead flow"],
        ],
      },
    },
    {
      eyebrow: "Choosing",
      title: "When a VA is enough, and when you need a setter",
      items: [
        { title: "A VA is enough when", text: "Leads arrive slowly, the offer is low-priced, and booking is mostly scheduling people who already want to buy." },
        { title: "You need a setter when", text: "You sell a high-ticket offer, leads arrive daily, and every booked call costs real ad spend. A setter protects your closer's time and your show rate." },
        { title: "Or combine them", text: "AI follow-up handles the first reply in seconds; a setter handles the conversations; a VA handles admin. See [AI speed to lead](/speed-to-lead)." },
      ],
      note: "Hiring one? Read [how to hire an appointment setter](/blog/how-to-hire-an-appointment-setter) and compare [setter compensation models](/blog/appointment-setter-compensation-models).",
    },
  ],
  faqs: [
    { q: "What is a virtual appointment setter?", a: "A virtual appointment setter is a remote team member who contacts new leads, qualifies them on budget, authority and timeline, and books qualified prospects into a closer's calendar. Unlike a general virtual assistant, they are measured on booking rate, show rate and qualified rate." },
    { q: "Can a virtual assistant be an appointment setter?", a: "Yes, for simple offers and low lead volume. For high-ticket offers a VA usually needs sales training, a qualification script and clear targets, otherwise they tend to book anyone who asks and show rates suffer." },
  ],
};

export const lawFirmsMetaDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Facebook ads for personal injury law firms",
    title: "Why law firms are replacing bought leads with their own Meta ads",
    paragraphs: [
      "Most personal injury firms buy motor vehicle accident (MVA) leads from pay-per-lead vendors. The leads are often shared with other firms, expensive and hard to verify. Running Facebook and Instagram ads in the firm's own account, with phone verification and fast intake, produces exclusive leads at a fraction of the price. The results below come from campaigns QualifiedLeadsX runs for law firms and MVA lead buyers.",
    ],
  },
  sections: [
    {
      eyebrow: "Results",
      title: "What Meta ads have produced for law firms",
      items: [
        { title: "MVA client: $388,000 from $20,324 in 30 days", text: "The client had been buying leads at $150–$180 each. Its own campaign produced 1,079 phone-verified leads at $18.94, a 62% show rate (669 attended), a 29% close rate (194 clients) at about $2,000 per client, for $388,000 in revenue and a 19.09x return on ad spend." },
        { title: "Texas personal injury firm: 530 verified leads in 7 days", text: "$14,270 in spend, $26.90 per lead, every lead confirmed by an SMS code (OTP) so the phone number belongs to a real person." },
        { title: "387 exclusive MVA appointments in 24 days", text: "At $19.62 per appointment, with no shared or recycled leads." },
        { title: "8,810 MVA leads at $7.61", text: "A pay-per-lead agency campaign focused on accidents from the last 30 days. [Read the case study](/case-studies/mva-personal-injury-leads-8810)." },
      ],
    },
    {
      eyebrow: "How it works",
      title: "The personal injury intake system",
      numbered: true,
      items: [
        { title: "Recency-focused ads", text: "Creative and questions built around recent accidents, because fresh intent signs at a far higher rate than old data." },
        { title: "Phone verification", text: "OTP verification stops fake and mistyped numbers before intake spends time on them." },
        { title: "Qualifying questions", text: "Date of accident, injury and treatment, fault and existing representation, so intake only calls viable cases." },
        { title: "Contact within minutes", text: "Accident victims talk to the first firm that calls back. See [AI speed to lead](/speed-to-lead)." },
        { title: "Track to signed case", text: "Measure cost per signed case, not cost per lead. See [cost per acquisition vs cost per lead](/blog/cost-per-acquisition-vs-cost-per-lead)." },
      ],
    },
  ],
  faqs: [
    { q: "How much do MVA leads cost on Facebook?", a: "In our recent law firm campaigns, phone-verified MVA leads cost between $7.61 and $26.90, against the $150–$180 per lead one client was paying a lead vendor before. Cost depends on state, targeting and how strictly leads are qualified." },
    { q: "Are Facebook ads allowed for personal injury law firms?", a: "Yes. Law firms can advertise on Meta as long as ads follow Meta's advertising policies and the state bar's advertising rules, for example avoiding guaranteed outcomes. We build creative around those rules." },
  ],
};

export const medSpasMetaDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Facebook ads for med spas",
    title: "Facebook ads that fill treatment chairs, not just inboxes",
    paragraphs: [
      "Med spas usually have no shortage of leads. The problem is leads that never book, bookings that never show, and no way to see which ads produced paying clients. The fix is a single-treatment offer, fast confirmation and tracking from ad to paid treatment. Here is what that has produced for med spa clients.",
    ],
  },
  sections: [
    {
      eyebrow: "Results",
      title: "What Meta ads have produced for med spas",
      items: [
        { title: "3 New York clinics: $74,100 from $10,387", text: "453 RF microneedling appointments at $22.93 each, a 67% show rate, 247 paying clients at about $42 each. [Read the case study](/case-studies/nyc-med-spa-rf-microneedling-74k)." },
        { title: "Med spa marketing agency: $639,000 in two months", text: "With 1,116 conversations still open, using Meta ads, qualification and appointment setting. [Read the case study](/case-studies/med-spa-marketing-agency-639k)." },
      ],
    },
    {
      eyebrow: "Best practices",
      title: "How to run Facebook ads for a med spa",
      numbered: true,
      items: [
        { title: "Lead with one treatment", text: "One clearly explained treatment per campaign keeps the promise consistent from ad to booking." },
        { title: "Stay inside Meta's health policies", text: "Talk about the treatment and the result, not the person's flaws, and avoid before-and-after claims Meta restricts." },
        { title: "Book, then confirm fast", text: "Confirm by SMS or WhatsApp within minutes and remind before the appointment; show rate decides profit." },
        { title: "Measure cost per paying client", text: "Track appointments, shows and paid treatments, not just leads. Model it with the [show rate calculator](/tools/show-rate-calculator)." },
      ],
    },
  ],
  faqs: [
    { q: "How much does a med spa appointment cost from Facebook ads?", a: "In one recent campaign for three New York clinics, appointments cost $22.93 each and paying clients about $42 each. Costs depend on treatment, city and how quickly bookings are confirmed." },
  ],
};

export const realEstateMetaDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Facebook ads for investors",
    title: "How Facebook ads work for real estate investors",
    paragraphs: [
      "Facebook and Instagram ads reach homeowners before they start searching, which makes them a volume channel for wholesalers and investors. Two things decide whether they work: offers that speak to a seller's situation, and campaigns built inside Meta's Housing Special Ad Category rules. These results come from campaigns QualifiedLeadsX ran for real estate investors.",
    ],
  },
  sections: [
    {
      eyebrow: "Results",
      title: "What Meta ads have produced for real estate investors",
      items: [
        { title: "157 motivated seller leads in 7 days", text: "$4,397 in spend, $28 per lead, from cold traffic." },
        { title: "Texas real estate business: 2,279 verified leads in 3 months", text: "Ad spend scaled from $4,069 in the first month to over $22,000 a month while cost per lead stayed between $16.48 and $22.78. In total, $49,888 produced 2,279 phone-verified, pre-qualified leads." },
      ],
    },
    {
      eyebrow: "Offers that work",
      title: "Seller offers that turn cold clicks into leads",
      items: [
        { title: "Cash offer in 24 hours", text: "Fast and no-obligation: speaks to sellers who need speed." },
        { title: "Sell as-is", text: "No repairs, no fees: removes the biggest objection." },
        { title: "What is my home worth?", text: "A free instant quote draws in sellers who are still deciding." },
        { title: "No agent, no commissions", text: "Sell direct: appeals to owners avoiding agent fees." },
      ],
      note: "Pair the offer with phone verification and fast follow-up; see [AI speed to lead](/speed-to-lead) and [lead generation for real estate investors](/for/real-estate-investors).",
    },
    {
      eyebrow: "Compliance",
      title: "Meta's Housing Special Ad Category",
      lead: "Most seller-acquisition ads fall under Meta's Housing Special Ad Category. That means no targeting by age, gender or ZIP code, a minimum location radius, and restricted lookalike audiences. Campaigns have to win with offer and creative rather than narrow targeting, which is why the seller offers above matter so much.",
      items: [],
    },
  ],
  faqs: [
    { q: "Do Facebook ads work for real estate investors?", a: "Yes, when the offer speaks to a seller's situation and the campaign follows Meta's Housing Special Ad Category rules. In our campaigns seller leads cost $16.48 to $28, and one Texas business held cost per lead under $23 while scaling spend fivefold." },
    { q: "How much do motivated seller leads cost on Facebook?", a: "In our recent investor campaigns, $16.48 to $28 per lead, with cost per lead held under $23 while monthly spend scaled past $22,000." },
  ],
};

export const realEstateInvestorsDeepDive: DeepDiveContent = {
  intro: {
    eyebrow: "Motivated seller leads",
    title: "Buying from an investor lead broker vs generating your own seller leads",
    paragraphs: [
      "Most real estate investors start by buying motivated seller leads from an investor lead broker or a pay-per-lead service. It's quick, but the same lead is often sold to several investors, and you can't see how the seller was qualified. Generating your own pre-qualified investor leads with paid ads and fast follow-up gives you exclusive sellers and a cost per deal you control.",
    ],
  },
  sections: [
    {
      eyebrow: "Compare",
      title: "Lead broker vs your own seller lead engine",
      items: [],
      table: {
        head: ["", "Bought from a lead broker", "Your own seller lead engine"],
        rows: [
          ["Exclusivity", "Often shared with other investors", "Exclusive to you"],
          ["Qualification", "The broker's criteria", "Your criteria: condition, timeline, equity, motivation"],
          ["Price", "Fixed per lead, whatever the quality", "Falls as offers and creative improve"],
          ["Data", "Stays with the broker", "Your ad account, CRM and data"],
        ],
      },
    },
    {
      eyebrow: "Results",
      title: "What seller lead campaigns have produced",
      items: [
        { title: "157 motivated seller leads in 7 days", text: "$4,397 in ad spend, $28 per lead, from cold traffic." },
        { title: "2,279 phone-verified leads in 3 months", text: "A Texas real estate business scaled from $4,069 to over $22,000 a month in ad spend while cost per lead stayed between $16.48 and $22.78." },
      ],
      note: "Full campaign details on [Facebook ads for real estate investors](/meta-ads-for-real-estate-investors).",
    },
    {
      eyebrow: "Qualify",
      title: "How to qualify motivated sellers before the call",
      numbered: true,
      items: [
        { title: "Property and condition", text: "Ask about repairs needed and property type, so acquisitions only calls deals that fit." },
        { title: "Timeline", text: "Sellers who need to move within weeks convert far better than those \"thinking about it\"." },
        { title: "Reason for selling", text: "Inherited property, relocation, repairs or financial pressure signal real motivation." },
        { title: "Phone verification and fast contact", text: "Verify the number and call within minutes; see [AI speed to lead](/speed-to-lead)." },
      ],
    },
  ],
  faqs: [
    { q: "Should I buy motivated seller leads or generate my own?", a: "Leads from an investor lead broker are fast but usually shared with other investors. Generating your own seller leads gives you exclusive sellers you qualify yourself; in our campaigns they cost $16.48 to $28 per lead, including phone-verified leads at scale." },
    { q: "What are pre-qualified investor leads?", a: "Pre-qualified investor leads are seller leads that have already answered questions about property condition, timeline and reason for selling, and whose phone number has been verified, so your acquisitions team only calls sellers who fit your buy box." },
  ],
};
