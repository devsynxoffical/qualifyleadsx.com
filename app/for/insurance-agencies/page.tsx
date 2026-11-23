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
const TITLE = "Lead Generation for Insurance Agents: Exclusive Leads | QLX";
const DESCRIPTION =
  "Exclusive lead generation for insurance agents. Published campaigns: 2,440 final expense leads at $7.79 each and life insurance leads at about $18.";

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
      h1="Lead Generation for Insurance Agents and Agencies"
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
        intro: <>For a pay-per-lead client we generated 2,440 final expense leads in one month at $7.79 each on $19,011 in spend. For life insurance agents, $990 produced 55 qualified leads in 14 days, about $18 each. Tap a card to see the full screenshot, or open the original post.</>,
        cards: [
          { img: "/case-studies/images/Dd9D3rnSCMT.jpg", w: 1816, h: 1440, headline: "2,440 final expense leads in a month", where: "Pay-per-lead insurance client", metrics: [{ label: "Spend", value: "$19,011" }, { label: "CPL", value: "$7.79" }, { label: "Leads", value: "2,440" }], source: ig("Dd9D3rnSCMT") },
          { img: "/case-studies/videos/DJFKW2si8E7.jpg", w: 1080, h: 1920, headline: "55 qualified life insurance leads", where: "Life insurance agents, 14 days", metrics: [{ label: "Spend", value: "$990" }, { label: "CPL", value: "≈$18" }, { label: "Leads", value: "55" }], source: ig("DJFKW2si8E7") },
        ],
      }}
      plan={{
        title: "What insurance leads have cost in our campaigns",
        intro: <>Final expense: $7.79 per lead. Life insurance: about $18 per lead. Use the estimator below to see how many leads your monthly budget could produce at those two published costs. Final expense details are on the <Link href="/final-expense-leads" className="text-lime underline-offset-2 hover:underline">final expense leads</Link> page.</>,
        rows: [
          { label: "Final expense, pay-per-lead client, 1 month ($19,011.31 spend)", value: "$7.79" },
          { label: "Life insurance agents, 14 days ($990 spend)", value: "≈$18" },
        ],
      }}
      estimator={{ cplLow: 7.79, cplHigh: 18, unit: "insurance leads", sourceNote: "Uses the two published insurance campaigns on this page: $7.79 (final expense) and about $18 (life insurance) per lead." }}
      process={{
        title: "How we generate insurance leads for agents",
        intro: <>We run compliant Meta and Google campaigns in your licensed states, qualify each prospect by age, coverage need and budget, and send the lead to you or book the call directly into your calendar with our <Link href="/appointment-setting" className="text-lime underline-offset-2 hover:underline">appointment setting services</Link>.</>,
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
        them: ["Leads are often shared with several agents", "You race other agents to call first", "The lead never saw your name or brand", "The price per lead stays the same"],
        us: ["Exclusive to you, from your own campaign", "No race: you are the only agent calling", "Every ad and form carries your brand", "Leads get cheaper as the campaign learns"],
      }}
      audiences={{
        title: "Insurance lead generation for agents, agencies and brokers",
        cards: [
          { icon: UserCheck, title: "Independent and captive agents", text: <>Exclusive final expense, life, Medicare and health leads. See <Link href="/final-expense-leads" className="text-lime underline-offset-2 hover:underline">final expense leads</Link>.</> },
          { icon: Building2, title: "IMOs and agencies", text: <>Volume for a team of agents, routed by state or product. Prefer booked calls? See <Link href="/pay-per-appointment" className="text-lime underline-offset-2 hover:underline">pay per appointment</Link>.</> },
          { icon: HeartHandshake, title: "Brokerages", text: <>Property and casualty, life and health lines for brokers. Also selling investments? See <Link href="/for/financial-advisors" className="text-lime underline-offset-2 hover:underline">lead generation for financial advisors</Link>.</> },
        ],
      }}
      faqTitle="Lead generation for insurance agents: FAQ"
      faqs={[
        { q: "What is the best lead generation for insurance agents?", a: "Exclusive leads from your own ad campaigns usually beat shared vendor leads because you are the only agent calling. Our published final expense campaign produced leads at $7.79 each." },
        { q: "How much do insurance leads cost?", a: "In our published campaigns, final expense leads cost $7.79 and life insurance leads about $18. Prices depend on product, state and targeting." },
        { q: "How do life insurance agents get leads?", a: "The main options are referrals, buying vendor leads, and running your own ads with a qualification funnel. The last gives exclusive leads and steady volume." },
        { q: "Are your insurance leads exclusive?", a: "Yes. Every lead comes from a campaign run only for your agency and is never sold to another agent." },
        { q: "Can you book appointments instead of sending leads?", a: "Yes. We can qualify each lead and book them into your calendar, which is how our appointment setting service works." },
        { q: "Do you work with insurance brokers and agencies with several agents?", a: "Yes. Leads can be routed to multiple agents by state, product or round robin inside your CRM." },
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
