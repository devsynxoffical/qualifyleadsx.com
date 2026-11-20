import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Building2, CalendarCheck, Filter, HeartHandshake, PhoneCall, ShieldCheck, Target, UserCheck } from "lucide-react";
import { site, defaultOgImage } from "@/lib/site";
import { RichLeadPage } from "@/components/landing/RichLeadPage";

/*
 * 20 Nov 2026, Gaurav Sir SEO Recovery Plan (P1: "lead generation for insurance agents", 390/mo, KD 20).
 * Rebuilt from the earlier noindexed page, whose numbers had no published source. Every number below is
 * from a published campaign in lib/case-studies-data.ts (final expense Dd9D3rnSCMT, life insurance DJFKW2si8E7).
 */
const PATH = "/for/insurance-agencies";
const TITLE = "Lead Generation for Insurance Agents: Exclusive Leads";
const DESCRIPTION =
  "Lead generation for insurance agents: exclusive final expense and life insurance leads from your own Meta ads. Published: 2,440 leads at $7.79 in a month.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["lead generation for insurance agents", "insurance leads", "final expense leads", "life insurance leads", "insurance appointment setting"],
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: { images: [defaultOgImage], title: TITLE, description: DESCRIPTION, url: `${site.url}${PATH}`, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const ig = (id: string) => `https://www.instagram.com/p/${id}/`;

export default function Page() {
  return (
    <RichLeadPage
      path={PATH}
      eyebrow="For insurance agents, agencies and call centers"
      h1="Lead Generation for Insurance Agents"
      shortAnswer={
        <>
          QualifiedLeadsX runs <strong className="text-fog">lead generation for insurance agents</strong> with Meta ads in your own ad account. Prospects answer qualifying questions, can verify their phone number, and are contacted within minutes, so your agents call people who asked to hear from them, not leads shared with other agents. For a pay-per-lead client we generated 2,440 final expense leads at $7.79 each in one month.
        </>
      }
      heroPoints={[
        "Exclusive leads: never shared with or resold to other agents",
        "Qualified on age band, state, coverage wanted and best time to call",
        "Optional phone verification to remove fake numbers",
        "Contacted in minutes, with appointments booked for your agents",
      ]}
      stats={[
        { value: "2,440", label: "Final expense leads in one month" },
        { value: "$7.79", label: "Cost per final expense lead" },
        { value: "55", label: "Life insurance leads in 14 days" },
        { value: "≈$18", label: "Cost per life insurance lead" },
      ]}
      statsSource={<>Source: the campaign screenshots below, each linked to its original post. Cost depends on state, age band, product and budget.</>}
      breadcrumb={[{ name: "Industries", url: "/for" }, { name: "Insurance agents", url: PATH }]}
      service={{
        name: "Lead generation for insurance agents",
        description: "Exclusive insurance leads and booked appointments from Meta ads run in the agent's or agency's own ad account, with qualification, verification and fast follow-up.",
        audience: "Insurance agents, insurance agencies and insurance call centers",
      }}
      formNiche="Finance & Insurance"
      formTitle="Get a free insurance lead plan for your states"
      proof={{
        title: "Insurance campaigns we have run and published",
        intro: <>Screenshots from the clients&apos; Ads Manager, published at the time. Tap a card to see the full screenshot, or open the original post to check the numbers.</>,
        cards: [
          { img: "/case-studies/images/Dd9D3rnSCMT.jpg", w: 1816, h: 1440, headline: "2,440 final expense leads in a month", where: "Pay-per-lead insurance client", metrics: [{ label: "Spend", value: "$19,011" }, { label: "CPL", value: "$7.79" }, { label: "Leads", value: "2,440" }], source: ig("Dd9D3rnSCMT") },
          { img: "/case-studies/videos/DJFKW2si8E7.jpg", w: 1080, h: 1920, headline: "55 qualified life insurance leads", where: "Life insurance agents, 14 days", metrics: [{ label: "Spend", value: "$990" }, { label: "CPL", value: "≈$18" }, { label: "Leads", value: "55" }], source: ig("DJFKW2si8E7") },
        ],
      }}
      plan={{
        title: "What insurance leads have cost in our campaigns",
        intro: <>The two insurance campaigns we have published so far. Final expense details are on the <Link href="/final-expense-leads" className="text-lime underline-offset-2 hover:underline">final expense leads</Link> page.</>,
        rows: [
          { label: "Final expense, pay-per-lead client, 1 month ($19,011.31 spend)", value: "$7.79" },
          { label: "Life insurance agents, 14 days ($990 spend)", value: "≈$18" },
        ],
      }}
      estimator={{ cplLow: 7.79, cplHigh: 18, unit: "insurance leads", sourceNote: "Uses the two published insurance campaigns on this page: $7.79 (final expense) and about $18 (life insurance) per lead." }}
      process={{
        title: "How we generate insurance leads for agents",
        intro: <>Built for insurance: honest ads, qualification in the form and follow-up fast enough that your agent is the first to call.</>,
        steps: [
          { icon: Target, title: "Ads for the right age group", text: "Plain-language Meta ads for the people you sell to, with no misleading 'government program' claims. Your compliance rules apply to every ad." },
          { icon: Filter, title: "Qualifying questions", text: "Age band, state, coverage amount wanted and best time to call, plus consent to be contacted." },
          { icon: ShieldCheck, title: "Phone verification", text: "Optional one-time-code verification removes fake and mistyped numbers before leads reach your agents." },
          { icon: PhoneCall, title: "Called within minutes", text: <>Automatic call or text the moment a lead arrives. See <Link href="/speed-to-lead" className="text-lime underline-offset-2 hover:underline">speed to lead</Link>.</> },
          { icon: CalendarCheck, title: "Appointments for agents", text: <>Leads can be booked straight into agents&apos; calendars, with reminders. See <Link href="/appointment-setting" className="text-lime underline-offset-2 hover:underline">appointment setting services</Link>.</> },
          { icon: BarChart3, title: "Reported on policies", text: "Cost per lead, contact rate, appointments and cost per policy written, so budget follows sales." },
        ],
      }}
      qualifiers={{
        title: "What an insurance lead tells you before the first call",
        intro: <>Questions are set with you for each product and state. These are typical for final expense and life insurance.</>,
        questions: ["Age band", "State", "Coverage amount wanted", "Who the policy is for", "Current coverage?", "Best time to call", "Consent to be contacted"],
      }}
      comparison={{
        title: "Insurance lead vendors vs your own campaign",
        themLabel: "Typical lead vendors",
        them: ["The same prospect is sold to several agents", "Aged leads that were called days ago", "You can't change the questions or the ads", "Stop paying and nothing stays with you"],
        us: ["Exclusive leads from your own ad account", "Real-time leads, contacted in minutes", "Questions and ads built for your products", "Ad account, pixel and data stay yours"],
      }}
      audiences={{
        title: "Insurance lead generation for agents, agencies and call centers",
        cards: [
          { icon: UserCheck, title: "Independent agents", text: <>A steady flow of exclusive final expense and life insurance leads. See <Link href="/final-expense-leads" className="text-lime underline-offset-2 hover:underline">final expense leads</Link>.</> },
          { icon: Building2, title: "Agencies and call centers", text: <>Volume for a team of agents, with lead routing and reporting through <Link href="/crm-automation" className="text-lime underline-offset-2 hover:underline">CRM automation</Link>.</> },
          { icon: HeartHandshake, title: "Pay-per-lead insurance businesses", text: "Verified leads you can sell to agents, like the 2,440-lead final expense campaign above." },
        ],
      }}
      faqTitle="Lead generation for insurance agents: FAQ"
      faqs={[
        { q: "How do insurance agents get leads?", a: "Most buy leads from vendors, where the same prospect is often sold to several agents, or rely on referrals. Running your own Meta ads campaign gives you exclusive, real-time leads: people who filled in your form, answered your qualifying questions and are called within minutes." },
        { q: "How much do insurance leads cost?", a: "In our published insurance campaigns, final expense leads cost $7.79 each (2,440 leads from $19,011.31 in one month for a pay-per-lead client) and life insurance leads about $18 each (55 qualified leads for $990 in 14 days). Cost depends on state, age band, product and budget. Our management fee is custom quoted." },
        { q: "Are the leads exclusive to my agency?", a: "Yes. The campaign runs in an ad account in your name and every lead goes only to you. We do not resell or share leads between agents." },
        { q: "Which insurance products do you generate leads for?", a: "Our published insurance results are final expense (burial insurance) and life insurance. Other products can be tested on the same system; we will tell you on the strategy call if we have no comparable results." },
        { q: "Can you book appointments for my agents?", a: "Yes. Leads can be contacted within minutes and booked straight into your agents' calendars, with SMS, email and WhatsApp reminders to protect the show rate." },
        { q: "Are Meta insurance ads compliant?", a: "Every ad is written in plain language without misleading claims, and your compliance team approves ads and disclosures before they run. Some insurance products fall under Meta's special ad category for financial products, which limits targeting; we build campaigns within those rules." },
      ]}
      further={{
        title: "More for insurance and financial professionals",
        links: [
          { href: "/final-expense-leads", label: "Final expense leads", text: "Exclusive final expense and burial insurance leads, with results." },
          { href: "/for/financial-advisors", label: "Lead generation for financial advisors", text: "Qualified client calls for advisors and wealth managers." },
          { href: "/pay-per-appointment", label: "Pay per appointment", text: "Lead generation measured on booked appointments." },
          { href: "/mortgage-leads", label: "Mortgage leads", text: "OTP-verified mortgage and refinance leads." },
        ],
      }}
    />
  );
}
