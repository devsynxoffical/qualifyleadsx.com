import type { LucideIcon } from "lucide-react";
import {
  Target,
  FileText,
  Megaphone,
  Funnel,
  MessageSquare,
  CalendarCheck,
  CalendarCheck2,
  TrendingUp,
  BarChart3,
  PenTool,
  ShieldCheck,
  Database,
  BadgeCheck,
  Bot,
  Mail,
  Palette,
} from "lucide-react";

/* ============================================================
   Why most businesses never scale
   ============================================================ */
export const whyNotScale = [
  {
    title: "Ads without a funnel",
    body: "An agency runs your ads and calls it marketing. But raw clicks don't book premium clients - only a pre-sold journey does.",
    stat: "Clicks",
    statLabel: "Not clients",
  },
  {
    title: "Funnels nobody owns",
    body: "Somebody builds the landing page, somebody else runs the traffic. Nobody owns the full journey - so most leads go cold.",
    stat: "Broken",
    statLabel: "Handoffs between vendors",
  },
  {
    title: "Copy, but no follow-up",
    body: "Great copy can't qualify, nurture or book. Follow-up is where the deals are won - and in the fragmented way, it never happens.",
    stat: "$846K",
    statLabel: "Recorded from 235 clients, most closed after follow-up",
  },
  {
    title: "No one owns the journey",
    body: "The customer journey is split across agencies, freelancers and tools. When no single system owns it, nothing compounds.",
    stat: "0",
    statLabel: "Systems owning it all",
  },
] as const;

/* ============================================================
   What makes QLX different
   ============================================================ */
export const differentiators = [
  {
    icon: Funnel,
    title: "Complete Done-For-You Client Acquisition System",
    body: "We install every piece - offer positioning, Meta Ads, creatives, landing pages, CRM, AI automations, qualification and follow-up. Your only job is to close.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Lead Qualification & Multi-Validation Process",
    body: "A proprietary multi-validation process filters leads before they reach your calendar - lifting booking and show-up rates.",
  },
  {
    icon: Bot,
    title: "CRM + AI Follow-Up Automations Included",
    body: "Every lead automatically enters your CRM, nurtured by email, SMS, reminders and AI follow-up around the clock.",
  },
  {
    icon: Database,
    title: "Everything We Build Becomes Your Business Asset",
    body: "Everything we build becomes your business asset. No lock-ins, no hidden ownership, no dependence on another agency.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Focused Growth Strategy - Not Just More Leads",
    body: "Not just more leads - a growth strategy engineered around closed revenue, ROAS and predictable compounding.",
  },
  {
    icon: ShieldCheck,
    title: "90-Day Written Guarantee - Risk Reversed",
    body: "Everything is backed in writing. If we don't double your revenue within the next 90 days, we keep working at no management fee until we do.",
  },
  {
    icon: Target,
    title: "Dedicated Growth Partner - Not a Vendor",
    body: "You get a single point of contact managing your entire acquisition system. We act as your in-house growth team, fully invested in your results.",
  },
] as const;

/* ============================================================
   8-step client acquisition process
   ============================================================ */
export const acquisitionSteps: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Target,
    title: "Market Research & Customer Analysis",
    body: "We identify exactly who your ideal clients are and what makes them buy.",
  },
  {
    icon: FileText,
    title: "Offer Positioning",
    body: "We package and position your service so it stands out from competitors.",
  },
  {
    icon: Megaphone,
    title: "Messaging & Creative Development",
    body: "We create ad copy and creatives that attract premium buyers.",
  },
  {
    icon: Funnel,
    title: "Landing Pages & Sales Funnel",
    body: "We build high-converting landing pages and funnels that turn traffic into booked appointments.",
  },
  {
    icon: BarChart3,
    title: "Meta Ads Management",
    body: "We launch, manage and optimise your campaigns every day.",
  },
  {
    icon: MessageSquare,
    title: "CRM & AI Automations",
    body: "Every lead automatically enters your CRM with automated email, SMS, reminders and follow-up.",
  },
  {
    icon: ShieldCheck,
    title: "Lead Qualification",
    body: "Our proprietary multi-validation process filters leads before they reach your calendar - improving booking and show-up rates.",
  },
  {
    icon: CalendarCheck,
    title: "Close Premium Clients",
    body: "You simply attend the appointments and close the deals while our system works in the background.",
  },
] as const;

/* ============================================================
   Everything included
   ============================================================ */
export const includedServices: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  { icon: PenTool, title: "Offer Positioning", body: "Your offer packaged and positioned to stand out from competitors." },
  { icon: Megaphone, title: "Messaging Strategy", body: "A clear message that speaks directly to your ideal client." },
  { icon: BarChart3, title: "Meta Ads", body: "Campaigns launched, managed and optimised on a daily basis." },
  { icon: Palette, title: "Ad Creatives", body: "Scroll-stopping creatives engineered to attract premium buyers." },
  { icon: FileText, title: "Landing Pages", body: "High-converting pages built around your specific offer." },
  { icon: Funnel, title: "Complete Sales Funnel", body: "The full journey from first click to booked appointment." },
  { icon: Database, title: "CRM Setup", body: "Every lead organised in one clean, automated pipeline." },
  { icon: Bot, title: "AI Automations", body: "AI-driven nurture and outreach that runs around the clock." },
  { icon: Mail, title: "Email Sequences", body: "Automated email follow-up that sells while you sleep." },
  { icon: MessageSquare, title: "SMS Follow-Up", body: "Text sequences that keep every lead warm and engaged." },
  { icon: CalendarCheck2, title: "Appointment Reminders", body: "Confirmations and reminders that protect your show rate." },
  { icon: ShieldCheck, title: "Lead Qualification System", body: "Multi-validation filtering before leads ever hit your calendar." },
  { icon: CalendarCheck, title: "Calendar Booking System", body: "A booking flow that syncs directly to your calendar." },
  { icon: TrendingUp, title: "Ongoing Optimisation", body: "Daily tweaks and scaling decisions based on real data." },
] as const;

/* ============================================================
   Ownership
   ============================================================ */
export const ownershipSteps = [
  {
    step: "01",
    title: "We build",
    body: "We construct the entire acquisition system - ads, funnel, automation, CRM, the lot.",
  },
  {
    step: "02",
    title: "Everything transfers",
    body: "From day one, every account, asset and audience is registered under your name.",
  },
  {
    step: "03",
    title: "You own it all",
    body: "When we part ways, the system stays with you. No hostage-holding. No exit fees.",
  },
] as const;

export const ownershipAssets = [
  "Landing Pages",
  "Sales Funnel",
  "CRM",
  "Automations",
  "Ad Creatives",
  "Copy",
  "Follow-Up Sequences",
  "Customer Data",
] as const;

/* ============================================================
   Industries we've worked with
   ============================================================ */
export const industries: string[] = [
  // 20 Nov 2026 (SEO Recovery Plan): core audiences first; legal (PI/MVA) and roofing
  // belong to sister sites and are no longer listed here.
  "Business Coaches",
  "Consultants",
  "Financial Advisors",
  "Insurance Agents",
  "Digital Marketing Agencies",
  "High-Ticket Service Providers",
  "B2B Companies",
  "Mortgage Brokers",
  "Real Estate Companies",
  "Med Spas & Aesthetic Clinics",
  "Fitness Brands & Gyms",
  "Solar Companies",
  "Home Service Businesses",
  "HVAC Companies",
  "Healthcare Practices",
  "Chiropractors",
  "E-Commerce Brands",
  "Construction Companies",
  "Garage Door Companies",
  "Kitchen & Bathroom Remodeling",
  "Painting Companies",
  "Window & Door Companies",
  "Landscaping Businesses",
  "Pressure Washing Companies",
  "Car Detailing Businesses",
  "Pest Control Companies",
  "Plumbing Companies",
  "Electrical Companies",
  "Carpet Cleaning Companies",
  "Air Duct Cleaning Companies",
] as const;

/* ============================================================
   Comparison
   ============================================================ */
export const comparisonRows: {
  label: string;
  agency: string | boolean;
  qlx: string | boolean;
  highlight?: boolean;
}[] = [
  { label: "Runs ads", agency: "Yes", qlx: "Complete client acquisition system" },
  { label: "Delivers leads", agency: "Yes", qlx: "Premium client acquisition" },
  { label: "Follow-up", agency: "Limited", qlx: "AI follow-up" },
  { label: "CRM", agency: false, qlx: true },
  { label: "Automation", agency: false, qlx: true },
  { label: "Ownership", agency: false, qlx: true, highlight: true },
  { label: "Guarantee", agency: false, qlx: true, highlight: true },
] as const;

/* ============================================================
   FAQ
   ============================================================ */
export const faqCategories = ["All", "The System", "Pricing", "Ownership", "Onboarding"] as const;

export const faqs: {
  q: string;
  a: string;
  category: (typeof faqCategories)[number];
}[] = [
  {
    q: "What is a customer acquisition agency?",
    a: "A customer acquisition agency runs the full process of turning strangers into booked sales calls: ads, landing pages, lead qualification, follow-up and calendar booking. You get appointments, not a spreadsheet of contacts.",
    category: "The System",
  },
  {
    q: "How much does done-for-you lead generation cost?",
    a: "You pay a management fee plus your own ad spend. In our published campaigns, booked appointments have cost between $4.81 and $45 each depending on the industry and offer.",
    category: "Pricing",
  },
  {
    q: "Do you guarantee results?",
    a: "Yes. Every engagement comes with a 90-day written guarantee. The terms are agreed before we start, so you know exactly what we are accountable for.",
    category: "Ownership",
  },
  {
    q: "How fast will I get my first appointments?",
    a: "Most campaigns start booking within the first weeks once ads, funnel and follow-up are live. One luxury real estate campaign booked 10 buyer appointments in 24 hours.",
    category: "Onboarding",
  },
  {
    q: "Which industries do you work with?",
    a: "Service businesses with a sales call in the process: home services, med spas, insurance, financial advisors, legal, real estate, coaching and B2B services, across 30+ industries.",
    category: "The System",
  },
  {
    q: "Is outsourced lead generation worth it?",
    a: "It is worth it when the value of one client is far higher than the cost of a booked call. Our med spa client paid $42 in ads per paying client and generated $74,100 from $10,387 in ads.",
    category: "Pricing",
  },
] as const;

/* ============================================================
   Testimonials (floating cards / footer)
   ============================================================ */
export const testimonials = [
  {
    quote:
      "I had zero audience and zero outreach. The system built my entire pipeline from scratch. $38K a month and climbing.",
    name: "Daniel",
    role: "Business Coach",
  },
  {
    quote: "My lead cost dropped to $3 in an over-saturated industry. Closed a $1.5K deal in the first month.",
    name: "Edgar",
    role: "Sales Coach",
  },
  {
    quote: "The most legitimate system I've used to scale past $100K/month. It just works.",
    name: "Charles",
    role: "Executive Coach",
  },
  {
    quote: "By the time I get on the call they already know the value. They're ready to buy.",
    name: "Alexander",
    role: "Business Consultant",
  },
] as const;
