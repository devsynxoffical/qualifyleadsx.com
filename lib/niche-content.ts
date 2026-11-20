import type { DeepDiveContent } from "@/lib/deep-dive-content";

/**
 * Niche landing pages (18 Nov 2026). Every number is from a campaign published
 * in lib/case-studies-data.ts (QualifiedLeadsX Instagram case studies) or the
 * /case-studies/mva-personal-injury-leads-8810 page. No invented benchmarks.
 */

/* ------------------------------------------------------------------ MVA */
export const mvaLeadsContent: DeepDiveContent = {
  intro: {
    eyebrow: "MVA lead generation",
    title: "Exclusive MVA leads from fresh accidents, verified before they reach you",
    paragraphs: [
      "Motor vehicle accident (MVA) leads lose value by the hour. The claimant fills in a form, then talks to whichever firm calls first. Leads bought from shared lists are often days old and sold to several buyers. QualifiedLeadsX runs the Meta ads, the qualifying funnel and the verification in your own ad account, aimed at people involved in an accident in the last 30 days, so every lead is exclusive and arrives while the case is still open.",
      "We run this for two kinds of clients: personal injury law firms that want cases for their own intake team, and pay-per-lead (PPL) agencies that resell verified MVA leads to firms. The table below lists campaigns we have published, with spend, volume and cost per lead.",
    ],
  },
  sections: [
    {
      eyebrow: "Published results",
      title: "MVA campaign results",
      items: [],
      table: {
        head: ["Client", "Ad spend", "Leads", "Cost per lead", "Window"],
        rows: [
          ["PPL agency, MVA (US)", "$67,013.43", "8,810", "$7.61", "Jul 1 – Sep 19, 2026 ([case study](/case-studies/mva-personal-injury-leads-8810))"],
          ["Nationwide MVA campaign, OTP-verified", "$27,467.70", "6,275", "$4.38", "19 days"],
          ["MVA client, Texas", "$9,770", "1,865", "$5.24", "Oct 16 – Jan 19"],
          ["Nationwide firm", "Not published", "1,111 qualified", "$4.92", "30 days"],
          ["MVA client, OTP-verified (previously buying at $150–$180)", "$20,324", "1,079", "$18.94", "30 days"],
          ["Texas personal injury firm, Meta OTP-verified", "$14,270", "530", "$26.90", "7 days"],
          ["Florida MVA attorney", "$6,608", "465", "$14.21", "17 days"],
          ["Exclusive MVA appointments", "Not published", "387 appointments", "$19.62 per appointment", "24 days"],
          ["PPL client, New York, OTP-verified calls", "$5,453", "276+ calls", "≈$19.76", "5 days"],
          ["MVA lead-selling client", "$2,162", "126", "$17.16", "14 days"],
        ],
      },
      note: "Results from campaigns QualifiedLeadsX ran and published; cost per lead depends on state, verification depth, offer and budget. More results on the [case studies page](/case-studies).",
    },
    {
      eyebrow: "From lead to signed case",
      title: "What one MVA campaign looked like end to end",
      lead: "For an MVA client that had been buying leads at $150–$180 each, 30 days of its own campaign produced:",
      items: [
        { title: "1,079 OTP-verified leads", text: "$20,324 in ad spend at $18.94 per lead, every phone number confirmed with a one-time code." },
        { title: "669 shows (62%)", text: "Leads were contacted fast and reminded before the consultation. See our [speed to lead](/speed-to-lead) system." },
        { title: "194 signed clients (29%)", text: "At an average of $2,000 per client, $388,000 in revenue from $20,324 in ads." },
      ],
    },
    {
      eyebrow: "How it works",
      title: "How we generate verified MVA leads",
      numbered: true,
      items: [
        { title: "Recent-accident targeting", text: "Ads, copy and questions are built around accidents in the last 30 days, not broad 'injury' interest. The angles are covered in the [Sniper Method mastermind](/mastermind/personal-injury-facebook-ads)." },
        { title: "Multi-step qualification", text: "Accident date, injuries, medical treatment, fault and whether the person already has a lawyer, asked inside the funnel so intake only calls viable cases." },
        { title: "OTP phone verification", text: "The claimant confirms a code sent to their phone, which filters out fake and mistyped numbers before the lead reaches you or your buyers." },
        { title: "Contact within minutes", text: "[AI speed to lead](/speed-to-lead) calls or texts each new lead immediately, with [WhatsApp follow-up](/whatsapp-lead-nurture) for those who don't answer." },
        { title: "Reporting to signed case", text: "Cost per lead, cost per verified lead, show rate and cost per signed case, so you judge the campaign on cases, not volume." },
      ],
    },
    {
      eyebrow: "Who it's for",
      title: "MVA leads for law firms and PPL agencies",
      items: [
        { title: "Personal injury and MVA law firms", text: "Exclusive leads for your own intake team instead of shared lists. See also [personal injury leads](/personal-injury-leads) and [lead generation for law firms](/for/law-firms)." },
        { title: "Pay-per-lead (PPL) agencies", text: "Generate MVA leads you can resell. In one campaign a PPL client resold 126 leads at $150 each, $18,900 in lead value from $2,162 in ads." },
        { title: "Mass tort and other case types", text: "The same intake system adapts to other legal campaigns. See [mass tort lead generation](/mass-tort-leads)." },
      ],
      note: "Attorney advertising rules differ by state. Your firm reviews and approves every ad before it runs, and no ad promises case outcomes.",
    },
  ],
  faqs: [
    { q: "What are MVA leads?", a: "MVA leads are people who were recently in a motor vehicle accident and asked to be contacted about a possible injury claim. A useful MVA lead includes the accident date, injuries, whether they received medical treatment, who was at fault and whether they already have a lawyer." },
    { q: "How much do MVA leads cost?", a: "In campaigns we have published, cost per lead ranged from $4.38 (6,275 OTP-verified leads from $27,467.70 in 19 days) to $26.90 (530 Meta OTP-verified leads for a Texas firm in 7 days). Our largest campaign produced 8,810 leads at $7.61 from $67,013 between July 1 and September 19, 2026. Your cost depends on state, verification depth and budget; our management fee is custom quoted." },
    { q: "Are your MVA leads exclusive?", a: "Yes. The campaign runs in an ad account in your name and every lead goes only to you. We do not resell or share leads between clients." },
    { q: "What does OTP-verified mean?", a: "The person enters a one-time code sent to their phone before the form is submitted, which proves the number is real and belongs to them. It removes most fake, mistyped and bot submissions, which is why resold leads and law-firm intake both convert better." },
    { q: "Do you work with PPL agencies that resell MVA leads?", a: "Yes. Several of our published MVA campaigns were run for pay-per-lead agencies, including the 8,810-lead campaign at $7.61 and a New York campaign that produced 276+ OTP-verified calls in 5 days." },
    { q: "How fast are MVA leads contacted?", a: "Within minutes. New leads get an automatic call or text, then WhatsApp and SMS follow-up and reminders until the consultation is booked." },
  ],
};

/* --------------------------------------------------------- Mass tort */
export const massTortLeadsContent: DeepDiveContent = {
  intro: {
    eyebrow: "Mass tort lead generation",
    title: "Mass tort leads that are screened before they reach intake",
    paragraphs: [
      "Mass tort campaigns are harder than MVA campaigns: the audience is smaller, the qualifying criteria are strict (product use or exposure, a qualifying diagnosis, dates, proof) and most raw leads do not qualify. The cost that matters is cost per signed retainer, not cost per lead. QualifiedLeadsX builds the Meta ads, the screening questionnaire and the follow-up in your own ad account, so intake only spends time on claimants who meet the tort's criteria.",
      "Our published legal results so far are motor vehicle accident (MVA) and personal injury campaigns, for example [8,810 MVA leads at $7.61](/case-studies/mva-personal-injury-leads-8810). Mass tort campaigns use the same intake system with a longer, tort-specific qualification step. We will publish mass tort results here once a campaign has run long enough to report cost per signed case.",
    ],
  },
  sections: [
    {
      eyebrow: "MVA vs mass tort",
      title: "How a mass tort campaign differs from an MVA campaign",
      items: [],
      table: {
        head: ["", "MVA campaign", "Mass tort campaign"],
        rows: [
          ["Audience", "Anyone in a recent accident", "People with a specific product use or exposure and a qualifying injury"],
          ["Qualification", "Accident date, injuries, treatment, fault, representation", "Exposure or usage period, diagnosis and date, proof (records, receipts), representation"],
          ["Lead volume", "High", "Lower; many applicants do not qualify"],
          ["Metric that matters", "Cost per signed case", "Cost per signed retainer that passes the firm's criteria"],
          ["Intake work", "Short call", "Longer questionnaire, document collection, retainer"],
        ],
      },
    },
    {
      eyebrow: "How it works",
      title: "How we run mass tort lead generation",
      numbered: true,
      items: [
        { title: "Criteria first", text: "Your firm defines the qualifying criteria for the tort. Every question in the funnel maps to one of them, so disqualified applicants are filtered before intake." },
        { title: "Compliant creative", text: "Ads describe the injury and the right to a free case review without promising outcomes; your firm approves every ad before it runs." },
        { title: "Multi-step screening and OTP verification", text: "A short questionnaire plus a one-time code to the claimant's phone, the same verification behind our [MVA leads](/mva-leads)." },
        { title: "Fast follow-up", text: "[AI speed to lead](/speed-to-lead) contacts each applicant within minutes and books a call with intake, with reminders by SMS and [WhatsApp](/whatsapp-lead-nurture)." },
        { title: "Report on retainers", text: "We track cost per lead, cost per qualified applicant and cost per signed retainer, and move budget toward the ads that produce retainers." },
      ],
    },
    {
      eyebrow: "Who it's for",
      title: "For mass tort firms and lead buyers",
      items: [
        { title: "Mass tort law firms", text: "Firms that want exclusive, screened claimants from their own campaign rather than shared lists. See also [lead generation for law firms](/for/law-firms)." },
        { title: "Pay-per-lead and pay-per-retainer agencies", text: "Agencies that supply firms and need a predictable, verified flow of applicants." },
      ],
      note: "Attorney advertising rules differ by state and by tort. Your firm reviews every ad and the screening questions; we do not give legal advice or promise case outcomes.",
    },
  ],
  faqs: [
    { q: "What are mass tort leads?", a: "Mass tort leads are people who may have been harmed by the same product, drug, device or exposure and who ask to have their claim reviewed. A qualified mass tort lead meets the firm's criteria for that tort: the right product use or exposure, a qualifying diagnosis, dates within the filing window and no existing representation." },
    { q: "How are mass tort leads different from MVA leads?", a: "MVA leads are high-volume and qualify on a recent accident. Mass tort leads come from a smaller audience and must meet strict, tort-specific criteria, so fewer applicants qualify and screening matters more. The right metric is cost per signed retainer." },
    { q: "Do you have mass tort case studies?", a: "Not published yet. Our published legal results are MVA and personal injury campaigns, such as 8,810 MVA leads at $7.61 and 6,275 OTP-verified accident leads at $4.38. Mass tort campaigns use the same intake system with tort-specific screening." },
    { q: "Are the leads exclusive?", a: "Yes. The campaign runs in an ad account in your firm's name and every applicant goes only to you." },
    { q: "How much does mass tort lead generation cost?", a: "Ad cost depends on the tort, the audience size and how strict the criteria are. Our management fee is custom quoted after we review the criteria, and the engagement has a 90-day written guarantee." },
  ],
};

/* ----------------------------------------- Final expense / burial insurance */
export const finalExpenseLeadsContent: DeepDiveContent = {
  intro: {
    eyebrow: "Final expense & burial insurance leads",
    title: "Exclusive final expense and burial insurance leads from your own campaign",
    paragraphs: [
      "Final expense insurance, often sold as burial insurance, is a small whole life policy that covers funeral and end-of-life costs. Agents and agencies usually buy leads from vendors, where the same prospect is often sold to several agents. QualifiedLeadsX builds the Meta ads, the qualifying form and the follow-up in your own ad account, so every lead is exclusive to you.",
      "For a pay-per-lead client we generated 2,440 final expense leads at $7.79 each from $19,011.31 in Meta ad spend in one month. For life insurance agents, a smaller test produced 55 qualified leads for $990, about $18 each, in 14 days.",
    ],
  },
  sections: [
    {
      eyebrow: "Published results",
      title: "Insurance lead campaign results",
      items: [],
      table: {
        head: ["Campaign", "Ad spend", "Leads", "Cost per lead", "Window"],
        rows: [
          ["Final expense, pay-per-lead client", "$19,011.31", "2,440", "$7.79", "1 month"],
          ["Life insurance agents", "$990", "55 qualified", "≈$18", "14 days"],
        ],
      },
      note: "Results from campaigns QualifiedLeadsX ran and published. Cost per lead depends on state, age band, offer and budget. More results on the [case studies page](/case-studies).",
    },
    {
      eyebrow: "Final expense vs burial insurance",
      title: "Are burial insurance leads the same as final expense leads?",
      lead: "In practice, yes. 'Burial insurance' is the consumer phrase and 'final expense' the industry term for the same small whole life policy. We write the ads in the words your buyers use, and test both angles in the same campaign:",
      items: [
        { title: "Burial insurance angle", text: "Speaks to the concern of not leaving funeral costs to family; often the stronger hook for consumers." },
        { title: "Final expense angle", text: "Speaks to covering medical bills, debts and other end-of-life costs as well as the funeral." },
        { title: "One funnel, both terms", text: "The qualifying questions and follow-up are the same, so leads from both angles go to the same pipeline and are compared on cost per sale." },
      ],
    },
    {
      eyebrow: "How it works",
      title: "How we generate final expense leads",
      numbered: true,
      items: [
        { title: "Audience and creative", text: "Meta ads written for the age group you sell to, with plain-language hooks about funeral and end-of-life costs and no misleading 'government program' claims." },
        { title: "Qualifying form", text: "Age band, state, coverage amount wanted and best time to call, plus consent to be contacted, so agents call people who can buy." },
        { title: "Phone verification", text: "Optional one-time-code verification removes fake and mistyped numbers before leads reach you." },
        { title: "Fast follow-up", text: "[Speed to lead](/speed-to-lead) contacts each lead within minutes, with reminders for booked calls." },
        { title: "Report on policies", text: "Cost per lead, contact rate and cost per policy written, so budget follows sales, not form fills." },
      ],
    },
    {
      eyebrow: "Who it's for",
      title: "For agents, agencies and lead sellers",
      items: [
        { title: "Independent final expense agents", text: "A steady flow of exclusive leads instead of shared vendor leads." },
        { title: "Insurance agencies and call centers", text: "Volume for a team of agents, with lead routing and reporting through [CRM automation](/crm-automation)." },
        { title: "Pay-per-lead sellers", text: "Our 2,440-lead final expense campaign was run for a pay-per-lead client." },
      ],
      note: "Insurance advertising and telemarketing rules (including consent to be contacted) vary by state and channel. You and your compliance team approve the ads, form and consent language before launch.",
    },
  ],
  faqs: [
    { q: "What are final expense leads?", a: "Final expense leads are people who asked for information about a small whole life policy that covers funeral and end-of-life costs. A qualified lead includes age band, state, the coverage amount they want and consent to be contacted." },
    { q: "Are burial insurance leads the same as final expense leads?", a: "Yes, in practice. Burial insurance is the consumer term and final expense the industry term for the same type of policy. We test both angles in one campaign and send both to the same pipeline." },
    { q: "How much do final expense leads cost?", a: "In a campaign for a pay-per-lead client we generated 2,440 final expense leads at $7.79 each from $19,011.31 in Meta ad spend in one month. Your cost depends on state, age band, offer and budget. Our management fee is custom quoted." },
    { q: "Are your final expense leads exclusive?", a: "Yes. The campaign runs in an ad account in your name and every lead goes only to you; we do not resell leads." },
    { q: "Do you generate life insurance leads too?", a: "Yes. A life insurance campaign for agents produced 55 qualified leads for $990, about $18 per lead, in 14 days." },
  ],
};
