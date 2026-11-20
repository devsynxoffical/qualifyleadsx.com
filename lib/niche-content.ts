import type { DeepDiveContent } from "@/lib/deep-dive-content";

/**
 * Niche landing pages (18 Nov 2026). Every number is from a campaign published
 * in lib/case-studies-data.ts (QualifiedLeadsX Instagram case studies) or the
 * /case-studies/mva-personal-injury-leads-8810 page. No invented benchmarks.
 */

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
