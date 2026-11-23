import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Briefcase, CalendarCheck, Filter, HandCoins, PhoneCall, ShieldCheck, Target, Users } from "lucide-react";
import { site, defaultOgImage } from "@/lib/site";
import { RichLeadPage } from "@/components/landing/RichLeadPage";

/*
 * 20 Nov 2026, Gaurav Sir SEO Recovery Plan (P1: "pay per appointment lead generation" 390/mo KD 11,
 * "pay per lead companies" 140 KD 4; P2: "pay per lead" 590 KD 23).
 * Every cost-per-appointment figure is from a campaign published in lib/case-studies-data.ts.
 * Pricing is custom quoted (lib/brand-facts.ts); this page does not state a per-appointment price.
 */
const PATH = "/pay-per-appointment";
const TITLE = "Pay Per Appointment Lead Generation | QualifiedLeadsX";
const DESCRIPTION =
  "Pay per appointment lead generation for service businesses. Published campaigns booked appointments from $4.81 to $45 each, tracked per show and per sale.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["pay per appointment lead generation", "pay per lead companies", "pay per lead", "pay per appointment", "cost per booked appointment"],
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: { images: [defaultOgImage], title: TITLE, description: DESCRIPTION, url: `${site.url}${PATH}`, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const ig = (id: string) => `https://www.instagram.com/p/${id}/`;

export default function Page() {
  return (
    <RichLeadPage
      path={PATH}
      eyebrow="For coaches, consultants, advisors and service businesses"
      h1="Pay-Per-Appointment Lead Generation for Service Businesses"
      shortAnswer={
        <>
          <strong className="text-fog">Pay per appointment lead generation</strong> means judging a campaign on booked, qualified sales appointments instead of raw leads. QualifiedLeadsX runs the ads, qualifies every lead, contacts them within minutes and books them on your calendar, then reports cost per booked appointment. In published campaigns that cost ranged from $4.81 to $45 per booked appointment.
        </>
      }
      heroPoints={[
        "Booked, qualified appointments on your calendar, not a spreadsheet of form fills",
        "Every lead qualified on the questions you set before it is booked",
        "Reminders by SMS, email and WhatsApp to protect the show rate",
        "Reported as cost per booked appointment, per show and per sale",
      ]}
      stats={[
        { value: "$4.81", label: "Lowest published cost per booked appointment" },
        { value: "453", label: "Appointments booked, NYC med spa" },
        { value: "140", label: "Appointments from $1,956, NJ HVAC" },
        { value: "337", label: "Appointments in 19 days, remodeling" },
      ]}
      statsSource={<>Source: the campaign screenshots below, each linked to its original post. Pricing is custom quoted. Results vary by offer, market and budget.</>}
      breadcrumb={[{ name: "Appointment setting", url: "/appointment-setting" }, { name: "Pay per appointment", url: PATH }]}
      service={{
        name: "Pay-per-appointment lead generation",
        description: "Lead generation measured on booked, qualified sales appointments: Meta ads, qualification, speed to lead, booking and reminders, reported as cost per booked appointment.",
        audience: "Coaches, consultants, financial advisors, insurance agents and service businesses",
      }}
      formNiche=""
      formTitle="Get a cost-per-appointment estimate for your offer"
      proof={{
        title: "Appointment campaigns we have run and published",
        intro: <>Every number here comes from a live campaign with the spend shown: 337 remodeling appointments in 19 days at $4.81 each, 140 HVAC appointments from $1,956, and 453 med spa appointments from $10,387. Tap a card to see the full screenshot, or open the original post to check the numbers.</>,
        cards: [
          { img: "/case-studies/videos/DRRS7f-Eh_0.jpg", w: 1440, h: 1440, headline: "337 appointments in 19 days", where: "Kitchen remodeling, New York", metrics: [{ label: "Per appt", value: "$4.81" }, { label: "Appts", value: "337" }, { label: "Days", value: "19" }], source: ig("DRRS7f-Eh_0") },
          { img: "/case-studies/videos/C7v8CbIPJaJ.jpg", w: 1080, h: 1916, headline: "140 booked appointments, 12 installs", where: "HVAC company, New Jersey", metrics: [{ label: "Spend", value: "$1,956" }, { label: "Per appt", value: "$13.97" }, { label: "Revenue", value: "$38,400" }], source: ig("C7v8CbIPJaJ") },
          { img: "/case-studies/images/DM_Poo5z5hT.jpg", w: 1080, h: 1440, headline: "453 appointments, 247 clients", where: "Med spa, 3 NYC clinics", metrics: [{ label: "Spend", value: "$10,387" }, { label: "Per appt", value: "$22.93" }, { label: "Show rate", value: "67%" }], source: ig("DM_Poo5z5hT") },
          { img: "/case-studies/images/DGBOc58yWiq.jpg", w: 1321, h: 685, headline: "10 buyer appointments in 24 hours", where: "Luxury real estate", metrics: [{ label: "Spend", value: "$172.90" }, { label: "Per appt", value: "$17.29" }, { label: "Appts", value: "10" }], source: ig("DGBOc58yWiq") },
          { img: "/case-studies/videos/C7v8ZyxNAOa.jpg", w: 1080, h: 1916, headline: "125 booked appointments, $65,872 net", where: "HVAC company, Florida", metrics: [{ label: "Spend", value: "$5,628" }, { label: "Per appt", value: "$45" }, { label: "ROAS", value: "12.70" }], source: ig("C7v8ZyxNAOa") },
        ],
      }}
      funnel={{
        title: "From booked appointment to paying client",
        intro: <>For a med spa with three New York clinics, $10,387 in ads booked 453 appointments at $22.93 each. 303 showed up (67%), 247 became paying clients, and revenue reached $74,100. That is $42 in ads per paying client.</>,
        steps: [
          { value: "$10,387", label: "Ad spend" },
          { value: "453", label: "Appointments booked", detail: "$22.93 per booked appointment" },
          { value: "303", label: "Showed up (67%)" },
          { value: "247", label: "Became paying clients", detail: "$42 in ads per paying client" },
        ],
        outcome: (
          <>
            <strong className="text-lime">$74,100 in revenue</strong> from $10,387 in ads. This is why we report cost per show and per client, not just cost per appointment. See the <Link href="/case-studies/nyc-med-spa-rf-microneedling-74k" className="text-lime underline-offset-2 hover:underline">full med spa case study</Link>.
          </>
        ),
      }}
      estimator={{ cplLow: 4.81, cplHigh: 45, unit: "booked appointments", sourceNote: "Uses the lowest ($4.81) and highest ($45) cost per booked appointment from the published campaigns on this page." }}
      process={{
        title: "How pay-per-appointment lead generation works",
        intro: <>Each step is built to turn ad spend into appointments that show up. It is the same system behind our <Link href="/appointment-setting" className="text-lime underline-offset-2 hover:underline">appointment setting services</Link>.</>,
        steps: [
          { icon: Target, title: "Agree what qualifies", text: "We agree what counts as a qualified appointment." },
          { icon: Filter, title: "Ads and a qualification funnel", text: "We launch ads and a qualification funnel." },
          { icon: PhoneCall, title: "Contact within minutes", text: <>Every lead is contacted and qualified within minutes. See <Link href="/appointment-setting" className="text-lime underline-offset-2 hover:underline">appointment setting services</Link>.</> },
          { icon: CalendarCheck, title: "Booked with reminders", text: "Qualified prospects are booked into your calendar with reminders." },
          { icon: ShieldCheck, title: "Exclusive to you", text: "The ad account and every appointment are yours. Nothing is shared with or resold to competitors." },
          { icon: BarChart3, title: "Reported per sale", text: "You see cost per appointment, per show and per sale." },
        ],
      }}
      qualifiers={{
        title: "What a booked appointment has already answered",
        intro: <>Questions are set with you for each offer. These are typical for coaches, consultants, advisors and service businesses.</>,
        questions: ["What do you need help with?", "Budget range", "Timeline to start", "Decision-maker?", "Current situation", "Location or service area", "Best time for a call"],
      }}
      comparison={{
        title: "Pay per lead companies vs pay-per-appointment",
        themLabel: "Typical pay per lead companies",
        them: ["You get contact details, not conversations", "Leads are often sold to several buyers at once", "You still have to reach, qualify and book each one", "Cheaper per lead, more expensive per closed client"],
        us: ["The person has already been reached", "Qualified on your criteria before booking", "Booked into your calendar, exclusive to you", "More per unit, far less per closed client"],
      }}
      audiences={{
        title: "Who pay-per-appointment lead generation is for",
        cards: [
          { icon: HandCoins, title: "Home services", text: "HVAC, roofing, remodeling and solar companies, where one client is worth $1,000 or more and the sale happens on a visit." },
          { icon: Briefcase, title: "Med spas, legal and real estate", text: "Businesses that sell on a consultation or call, where a missed or unqualified appointment costs real money." },
          { icon: Users, title: "Insurance and high-ticket coaching", text: <>Agents and coaches who sell on a call. See <Link href="/for/insurance-agencies" className="text-lime underline-offset-2 hover:underline">lead generation for insurance agents</Link> or our <Link href="/" className="text-lime underline-offset-2 hover:underline">done-for-you lead generation</Link>.</> },
        ],
      }}
      faqTitle="Pay per appointment lead generation: FAQ"
      faqs={[
        { q: "What is pay per appointment lead generation?", a: "It is a model where you pay based on booked sales appointments rather than raw leads. The provider handles ads, qualification and booking." },
        { q: "How much does a booked appointment cost?", a: "In our published campaigns, appointments cost between $4.81 and $45 each depending on the industry, offer and location." },
        { q: "Do pay per appointment companies work for roofing and solar?", a: "Yes, both are high-ticket, in-home sales, which suits this model. Our closest published examples are HVAC and remodeling campaigns booking appointments at $4.81 to $45." },
        { q: "What counts as a qualified appointment?", a: "We agree the rules before launch, such as service area, budget, homeowner status and timeline. Only prospects who meet them are booked." },
        { q: "Are the appointments exclusive?", a: "Yes. Appointments are generated from campaigns run for your business only and are never resold." },
        { q: "Pay per lead or pay per appointment: which is better?", a: "Pay per lead suits businesses with their own fast sales team. Pay per appointment suits owners who want sales calls on the calendar without chasing leads." },
      ]}
      further={{
        title: "More on appointments and lead generation",
        links: [
          { href: "/appointment-setting", label: "Appointment setting services", text: "How we turn leads into qualified sales appointments." },
          { href: "/blog/buy-qualified-leads-vs-generating-your-own", label: "Buy leads or generate your own?", text: "What bought leads really cost compared with your own campaign." },
          { href: "/tools/cost-per-booked-call-calculator", label: "Cost per booked call calculator", text: "Work out what a booked appointment costs you today." },
          { href: "/benchmarks/show-rate", label: "Show rate benchmarks", text: "How many booked appointments actually show up." },
        ],
      }}
    />
  );
}
