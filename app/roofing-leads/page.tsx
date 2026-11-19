import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Building2, Filter, Handshake, Hammer, Megaphone, PhoneCall, ShieldCheck, Target } from "lucide-react";
import { site, defaultOgImage } from "@/lib/site";
import { RichLeadPage } from "@/components/landing/RichLeadPage";

/*
 * 19 Nov 2026. Every number is from a roofing campaign QualifiedLeadsX published
 * (lib/case-studies-data.ts, Instagram posts linked on each card). Nine lead
 * campaigns: 1,024 + 850 + 1,068 + 537 + 215 + 177 + 686 + 635 + 54 = 5,246 leads.
 */
const PATH = "/roofing-leads";
const TITLE = "Roofing Leads: Exclusive, Verified Leads for Roofers";
const DESCRIPTION =
  "Exclusive roofing leads from Meta ads in your own ad account. Published: 850 leads at $7.60 in 8 days and 1,068 at $17.40 in 30 days; 5,246 leads in 9 campaigns.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: { images: [defaultOgImage], title: TITLE, description: DESCRIPTION, url: `${site.url}${PATH}`, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const ig = (id: string) => `https://www.instagram.com/p/${id}/`;

export default function Page() {
  return (
    <RichLeadPage
      path={PATH}
      eyebrow="For roofing contractors and roofing lead sellers"
      h1="Exclusive Roofing Leads, Verified Before They Reach You"
      shortAnswer={
        <>
          QualifiedLeadsX generates <strong className="text-fog">exclusive roofing leads</strong> with Meta ads that run in your own ad account. Homeowners answer qualifying questions and verify their phone number before the lead reaches you, and nobody else gets the same lead. Across nine published roofing campaigns we generated 5,246 leads, at $4.27 to $24 per lead.
        </>
      }
      heroPoints={[
        "Exclusive: the ad account and every lead are yours, never resold",
        "Filtered: homeowner, repair or replacement, timeline and service area",
        "Verified: one-time code to the homeowner's phone on most campaigns",
        "Contacted within minutes by call, SMS and WhatsApp",
      ]}
      stats={[
        { value: "5,246", label: "Roofing leads in 9 published campaigns" },
        { value: "$4.27", label: "Lowest published cost per lead" },
        { value: "850", label: "Leads in 8 days, Texas roofer" },
        { value: "3.79%", label: "Best published click-through rate" },
      ]}
      statsSource={<>Source: the campaign screenshots below, each linked to its original post. Results vary by market, offer and budget.</>}
      breadcrumb={[{ name: "Home improvement", url: "/for/home-improvement" }, { name: "Roofing leads", url: PATH }]}
      service={{
        name: "Roofing lead generation",
        description: "Exclusive, pre-qualified roofing leads from Meta ads run in the contractor's own ad account, with phone verification and follow-up within minutes.",
        audience: "Roofing contractors and roofing pay-per-lead agencies",
      }}
      formNiche="Roofing"
      formTitle="Get a free roofing lead plan for your service area"
      proof={{
        title: "Roofing campaigns we have run and published",
        intro: (
          <>
            Screenshots from the clients&apos; Ads Manager, published at the time. Tap a card to see the full screenshot, or open the original post to check the numbers.
          </>
        ),
        cards: [
          { img: "/case-studies/videos/DO57rRFkoxB.jpg", w: 2160, h: 1215, headline: "850 roofing leads in 8 days", where: "Roofing contractor, Texas", metrics: [{ label: "Spend", value: "$6,461" }, { label: "CPL", value: "$7.60" }, { label: "CTR", value: "3.79%" }], source: ig("DO57rRFkoxB") },
          { img: "/case-studies/images/DNVeSkDyaNM.jpg", w: 1440, h: 1920, headline: "1,068 exclusive leads in 30 days", where: "Roofing lead agency client", metrics: [{ label: "Spend", value: "$18,583" }, { label: "CPL", value: "$17.40" }, { label: "Leads", value: "1,068" }], source: ig("DNVeSkDyaNM") },
          { img: "/case-studies/videos/DPYWdJ9iQPY.jpg", w: 1440, h: 1440, headline: "1,024 OTP-verified roofing leads", where: "Pay-per-lead agency client", metrics: [{ label: "Spend", value: "$24,902" }, { label: "CPL", value: "$24" }, { label: "CTR", value: "1.63%" }], source: ig("DPYWdJ9iQPY") },
          { img: "/case-studies/videos/DQZ4nbUkuAz.jpg", w: 1440, h: 1440, headline: "537 qualified leads in 13 days", where: "New client, TX, FL and GA", metrics: [{ label: "Spend", value: "$2,292" }, { label: "CPL", value: "$4.27" }, { label: "Days", value: "13" }], source: ig("DQZ4nbUkuAz") },
          { img: "/case-studies/videos/DY5S2yNye8S.jpg", w: 2466, h: 1440, headline: "215 validated leads at $12.79", where: "Roofing contractor, 28 days", metrics: [{ label: "Spend", value: "$2,749" }, { label: "CPL", value: "$12.79" }, { label: "CTR", value: "2.33%" }], source: ig("DY5S2yNye8S") },
          { img: "/case-studies/images/DKH58Gky3qe.jpg", w: 1440, h: 1818, headline: "52 inbound calls in 7 days", where: "Roof repair, California", metrics: [{ label: "Spend", value: "$646" }, { label: "Per call", value: "$12.42" }, { label: "Calls", value: "52" }], source: ig("DKH58Gky3qe") },
        ],
      }}
      plan={{
        title: "What roofing leads have cost in our campaigns",
        intro: <>Cost per lead in nine published roofing lead campaigns, lowest first. Verification depth and the market explain most of the spread: the $24 campaign required a phone code on every lead in a saturated market.</>,
        rows: [
          { label: "537 leads, new client (TX, FL, GA), 13 days", value: "$4.27" },
          { label: "177 verified leads, new client, 7 days", value: "$4.80" },
          { label: "635 pre-qualified leads, 45 days", value: "$4–$6" },
          { label: "686 website leads, Texas, 8 days", value: "$5.31" },
          { label: "850 leads, Texas, 8 days", value: "$7.60" },
          { label: "215 validated leads, 28 days", value: "$12.79" },
          { label: "1,068 exclusive leads, agency client, 30 days", value: "$17.40" },
          { label: "54 qualified leads, 7 days", value: "$23.81" },
          { label: "1,024 OTP-verified leads, PPL agency", value: "$24" },
        ],
      }}
      estimator={{ cplLow: 4.27, cplHigh: 24, unit: "roofing leads", sourceNote: "Uses the lowest ($4.27) and highest ($24) cost per lead from the published roofing campaigns on this page." }}
      process={{
        title: "How we generate exclusive roofing leads",
        intro: <>The same system behind the campaigns above, set up in your ad account so you keep the data, the pixel history and the leads.</>,
        steps: [
          { icon: Target, title: "Service-area targeting", text: "Ads run only in the ZIP codes you serve. For storm work we focus on areas hit by recent storms, as in the California call campaign above." },
          { icon: Megaphone, title: "Offers homeowners act on", text: "Free inspection, replacement or repair angles tested against each other, with real video instead of polished stock ads." },
          { icon: Filter, title: "Qualifying questions", text: "Homeowner, repair or replacement, storm damage, timeline and address are asked inside the form, so renters and tire-kickers drop out." },
          { icon: ShieldCheck, title: "Phone verification", text: "On verified campaigns the homeowner confirms a one-time code sent to their phone, which removes fake and mistyped numbers." },
          { icon: PhoneCall, title: "Contact within minutes", text: <>New leads get an automatic call or text and <Link href="/whatsapp-lead-nurture" className="text-lime underline-offset-2 hover:underline">WhatsApp follow-up</Link>. See our <Link href="/speed-to-lead" className="text-lime underline-offset-2 hover:underline">speed-to-lead system</Link>.</> },
          { icon: BarChart3, title: "Scale the winners", text: "Budget moves to the ads that produce inspections and signed jobs. For one agency client, three ads took 35% of the budget and drove over 70% of closed deals." },
        ],
      }}
      qualifiers={{
        title: "The questions a roofing lead answers before you see it",
        intro: <>Each campaign uses a short set of questions matched to your jobs. These are the ones we use most for residential roofing.</>,
        questions: ["Do you own the home?", "Repair or full replacement?", "Storm or hail damage?", "Roof age", "Insurance claim?", "When do you want the work done?", "Address in your service area", "Best time to call"],
      }}
      comparison={{
        title: "Shared roofing leads vs your own campaign",
        themLabel: "Shared lead vendors",
        them: ["The same homeowner is sold to several roofers", "You never see the ads or the targeting", "Leads can be days old when they arrive", "Stop paying and the lead flow stops with nothing to keep"],
        us: ["Every lead is exclusive to you", "Ads, pixel and data live in your ad account", "Leads arrive in real time and are contacted in minutes", "The campaigns and their learning stay yours"],
      }}
      audiences={{
        title: "Roofing leads for contractors, lead sellers and agencies",
        cards: [
          { icon: Hammer, title: "Roofing contractors", text: "Repair and replacement leads for your own sales team, in the ZIP codes you serve." },
          { icon: Handshake, title: "Pay-per-lead agencies", text: "Verified roofing leads you can sell to roofers. One PPL client received 1,024 OTP-verified leads at $24." },
          { icon: Building2, title: "Agencies serving roofers", text: "We run campaigns and train agency teams in the roofing niche, as for the agency client that reached 1,068 leads in 30 days." },
        ],
      }}
      faqTitle="Roofing leads: frequently asked questions"
      faqs={[
        { q: "How much do roofing leads cost?", a: "In nine roofing lead campaigns we have published, cost per lead ranged from $4.27 (537 leads in 13 days) to $24 (1,024 OTP-verified leads for a pay-per-lead agency). Larger campaigns included 850 leads at $7.60 in 8 days and 1,068 leads at $17.40 in 30 days. Your cost depends on the market, the offer, how strict the verification is and the budget. Our management fee is custom quoted." },
        { q: "Are your roofing leads exclusive?", a: "Yes. The ads run in an ad account in your name and each lead goes only to you. We do not resell or share leads between roofers." },
        { q: "What is an OTP-verified roofing lead?", a: "The homeowner enters a one-time code sent to their phone before the form is submitted. It proves the phone number is real and belongs to them, and removes most fake and mistyped submissions." },
        { q: "Do you work with roofing lead sellers and agencies?", a: "Yes. Some of the campaigns on this page were run for pay-per-lead agencies and for agencies that serve roofers, including 1,024 OTP-verified leads for a PPL client." },
        { q: "Can you get inbound calls instead of form leads?", a: "Yes. For a California roof repair client we ran a call campaign straight from the ad to the phone: 52 inbound calls in 7 days from $646, $12.42 per call." },
        { q: "How fast does a roofing campaign start producing leads?", a: "In published campaigns, new clients saw volume in the first days: 177 leads in the first 7 days for one roofer and 686 leads in 8 days for a Texas roofer starting with no pixel data." },
      ]}
      further={{
        title: "More for roofing and home service companies",
        links: [
          { href: "/hvac-leads", label: "HVAC leads", text: "Booked HVAC appointments and installs from Meta ads, with full funnel numbers." },
          { href: "/for/home-improvement", label: "Home improvement leads", text: "Lead generation for remodeling, solar and other home service companies." },
          { href: "/speed-to-lead", label: "Speed to lead", text: "How new leads get a call or text within minutes, day or night." },
          { href: "/benchmarks/cost-per-lead-by-industry", label: "Cost per lead by industry", text: "Benchmarks for home services and other industries." },
        ],
      }}
    />
  );
}
