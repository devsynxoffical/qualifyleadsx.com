import type { LucideIcon } from "lucide-react";
import {
  Target,
  FileText,
  Megaphone,
  Funnel,
  MessageSquare,
  PhoneCall,
  CalendarCheck,
  TrendingUp,
  BarChart3,
  Users,
  PenTool,
  ShieldCheck,
  Rocket,
  Database,
  LineChart,
  Copy,
  Settings,
} from "lucide-react";

/* ============================================================
   Trust metrics
   ============================================================ */
export const trustMetrics = [
  { value: 100, suffix: "K+", prefix: "$", label: "Monthly revenue generated for clients", decimals: 0 },
  { value: 128, suffix: "+", prefix: "", label: "High-ticket clients served", decimals: 0 },
  { value: 12, suffix: "k", prefix: "$", label: "Average booked-appointment cost", decimals: 0 },
  { value: 1, suffix: "%", prefix: "", label: "Client churn — we get results or you leave", decimals: 0 },
] as const;

/* ============================================================
   Why most businesses never scale
   ============================================================ */
export const whyNotScale = [
  {
    title: "Unqualified, cold outbound",
    body: "Cold DMs, cold emails and cold calls burn money and burn your reputation. Only 1–3% of cold outreach ever books a call — and almost none of it is pre-sold.",
    stat: "1–3%",
    statLabel: "Cold outreach converts",
  },
  {
    title: "Dependent on referrals",
    body: "Word of mouth is great until it isn't. You can't forecast it, scale it, or buy more of it. It's a ceiling, not a growth engine.",
    stat: "0",
    statLabel: "Referrals you can actually scale",
  },
  {
    title: "Inbound that never converts",
    body: "Followers and traffic feel like progress. But an audience that never books a call is just a vanity metric with an invoice attached.",
    stat: "2%",
    statLabel: "Average site visitor → call",
  },
  {
    title: "No system, just hustle",
    body: "You are the bottleneck. Without a repeatable acquisition system, every new client depends on your personal energy — and that doesn't compound.",
    stat: "80%",
    statLabel: "Revenue tied to the founder",
  },
] as const;

/* ============================================================
   What makes QLX different
   ============================================================ */
export const differentiators = [
  {
    icon: Funnel,
    title: "A pre-sold pipeline, not a lead list",
    body: "We don't hand you raw leads. Every prospect enters a done-for-you funnel that qualifies, educates and pre-sells them before they ever hit your calendar.",
  },
  {
    icon: BarChart3,
    title: "Built on data, not opinion",
    body: "Every dollar is tracked to the decimal across ad platforms, the funnel and your calendar. We scale what's proven and kill what isn't.",
  },
  {
    icon: PhoneCall,
    title: "AI voice that books real calls",
    body: "AI outbound voice calls + 24/7 automated follow-ups handle the no-shows, the flakes and the 'let me think about it' — so you only talk to qualified buyers.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-risk, results-tied engagement",
    body: "A written 90-day guarantee backs our work. Either the system delivers or you're covered. No agency on earth offers that level of skin in the game.",
  },
  {
    icon: Rocket,
    title: "Speed to first sales call",
    body: "Most agencies take 90 days to 'ramp up'. We install the QualifiedLeadsX™ system and aim for qualified calls on your calendar within the first weeks.",
  },
  {
    icon: Database,
    title: "You own everything",
    body: "Ads accounts, pixels, funnels, audiences, the lot. When we work together, everything transfers to you on day one. No hostage-holding. No exit fees.",
  },
] as const;

/* ============================================================
   Client results
   ============================================================ */
export type CaseStudy = {
  name: string;
  initials: string;
  role: string;
  niche: string;
  color: string;
  photo?: string;
  result: string;
  mrr: string;
  costPerAppt: string;
  period: string;
  highlight: string;
  metrics: { label: string; value: string }[];
  testimonial: string;
};

export const caseStudies: CaseStudy[] = [
  {
    name: "Edgar",
    initials: "ED",
    role: "Sales Coach",
    niche: "Coaching",
    color: "#c9f26b",
    result: "$4,500 MRR in 30 days",
    mrr: "$4.5K",
    costPerAppt: "$7",
    period: "First 30 days",
    highlight: "Closed a $1.5K deal with $4.5K MRR on $7 booked appointments",
    metrics: [
      { label: "Booked appointments", value: "$7" },
      { label: "Monthly recurring revenue", value: "$4.5K" },
      { label: "Deal closed", value: "$1.5K" },
    ],
    testimonial:
      "Over the last weeks, after injecting the QualifiedLeadsX™ system, my lead cost has been around $3. Insane, especially in this over-saturated industry.",
  },
  {
    name: "Alexander",
    initials: "AL",
    role: "Business Consultant",
    niche: "Consulting",
    color: "#9b8bff",
    photo: "/images/Alexander-scaled.webp",
    result: "$25K+ in new clients",
    mrr: "$25K",
    costPerAppt: "$11",
    period: "First 60 days",
    highlight: "Doubled his close rate with a fully pre-sold pipeline",
    metrics: [
      { label: "New client revenue", value: "$25K+" },
      { label: "Cost per booked call", value: "$11" },
      { label: "Close rate", value: "2x" },
    ],
    testimonial:
      "The difference is the pre-selling. By the time I get on the call, they already know the value and they're ready to buy.",
  },
  {
    name: "Henry",
    initials: "HE",
    role: "RIA / Financial Advisor",
    niche: "Finance",
    color: "#5ef2c2",
    photo: "/images/Henry-scaled.webp",
    result: "31 qualified calls booked",
    mrr: "31",
    costPerAppt: "$9",
    period: "First 45 days",
    highlight: "31 qualified calls booked at an average of $9 each",
    metrics: [
      { label: "Qualified calls", value: "31" },
      { label: "Cost per appointment", value: "$9" },
      { label: "Show rate", value: "86%" },
    ],
    testimonial:
      "I came from cold calling. This is night and day — the calls that show up are actually qualified.",
  },
  {
    name: "Mateo",
    initials: "MA",
    role: "Real Estate Investor",
    niche: "Real Estate",
    color: "#ffc857",
    photo: "/images/Mateo-scaled.webp",
    result: "11 deals in 90 days",
    mrr: "11",
    costPerAppt: "$8",
    period: "90 days",
    highlight: "11 closed transactions from a single funnel",
    metrics: [
      { label: "Deals closed", value: "11" },
      { label: "Cost per appointment", value: "$8" },
      { label: "ROAS", value: "9.4x" },
    ],
    testimonial:
      "Every single property investor I spoke to was pre-sold by the funnel. My job is just closing now.",
  },
  {
    name: "Jason",
    initials: "JA",
    role: "Clinic Owner",
    niche: "Healthcare",
    color: "#ff7a90",
    photo: "/images/Jason-scaled.webp",
    result: "$18K in new patients",
    mrr: "$18K",
    costPerAppt: "$6",
    period: "First 60 days",
    highlight: "A full new-patient pipeline without touching outreach",
    metrics: [
      { label: "New patient value", value: "$18K+" },
      { label: "Cost per appointment", value: "$6" },
      { label: "Show rate", value: "91%" },
    ],
    testimonial:
      "My front desk used to spend hours chasing leads. Now the system qualifies them before they even call us.",
  },
  {
    name: "Justin",
    initials: "JU",
    role: "Course Creator",
    niche: "Education",
    color: "#c9f26b",
    photo: "/images/Justin-scaled.webp",
    result: "$12K in course sales",
    mrr: "$12K",
    costPerAppt: "$10",
    period: "First 45 days",
    highlight: "Scaled course launches to a consistent monthly number",
    metrics: [
      { label: "Course revenue", value: "$12K" },
      { label: "Cost per appointment", value: "$10" },
      { label: "Launch velocity", value: "3.2x" },
    ],
    testimonial:
      "I finally have a launch machine. Not a spike — a steady, predictable pipeline every single month.",
  },
  {
    name: "Parker",
    initials: "PA",
    role: "E-com Agency Owner",
    niche: "Agencies",
    color: "#9b8bff",
    photo: "/images/Parker-scaled.webp",
    result: "14 new retainers",
    mrr: "$32K",
    costPerAppt: "$13",
    period: "120 days",
    highlight: "14 new retainers signed from cold traffic alone",
    metrics: [
      { label: "Retainers signed", value: "14" },
      { label: "Monthly retainer value", value: "$32K" },
      { label: "Payback period", value: "19 days" },
    ],
    testimonial:
      "I stopped chasing clients. The funnel brings me agency owners who already understand the value of a retainer.",
  },
  {
    name: "Stan",
    initials: "ST",
    role: "MedsPa Owner",
    niche: "Healthcare",
    color: "#5ef2c2",
    photo: "/images/Stan-scaled.webp",
    result: "$21K in new revenue",
    mrr: "$21K",
    costPerAppt: "$8",
    period: "First 75 days",
    highlight: "Premium aesthetic procedures booked on autopilot",
    metrics: [
      { label: "New treatment revenue", value: "$21K" },
      { label: "Cost per appointment", value: "$8" },
      { label: "Average ticket", value: "$2,400" },
    ],
    testimonial:
      "The system books high-value treatments, not tire-kickers. My calendar has never looked like this.",
  },
  {
    name: "Adam",
    initials: "AD",
    role: "Insurance Broker",
    niche: "Insurance",
    color: "#ffc857",
    photo: "/images/Adam-scaled.webp",
    result: "22 qualified calls",
    mrr: "22",
    costPerAppt: "$7",
    period: "First 30 days",
    highlight: "22 qualified calls in month one, fully automated follow-ups",
    metrics: [
      { label: "Qualified calls", value: "22" },
      { label: "Cost per appointment", value: "$7" },
      { label: "Follow-ups automated", value: "100%" },
    ],
    testimonial:
      "The 24/7 follow-up automation alone is worth it. No lead slips through the cracks anymore.",
  },
  {
    name: "Daniel",
    initials: "DA",
    role: "Business Coach",
    niche: "Coaching",
    color: "#ff7a90",
    photo: "/images/Daniel.webp",
    result: "$38K in 4 months",
    mrr: "$38K",
    costPerAppt: "$9",
    period: "120 days",
    highlight: "From cold-start to $38K MRR in under 4 months",
    metrics: [
      { label: "Monthly recurring", value: "$38K" },
      { label: "Cost per appointment", value: "$9" },
      { label: "Time to first client", value: "11 days" },
    ],
    testimonial:
      "I had zero audience and zero outreach. The system built the entire pipeline from scratch.",
  },
  {
    name: "Charles",
    initials: "CH",
    role: "Executive Coach",
    niche: "Coaching",
    color: "#c9f26b",
    photo: "/images/Charles.webp",
    result: "$46K in 5 months",
    mrr: "$46K",
    costPerAppt: "$12",
    period: "5 months",
    highlight: "Scaled an executive coaching practice to a $46K month",
    metrics: [
      { label: "Monthly recurring", value: "$46K" },
      { label: "Cost per appointment", value: "$12" },
      { label: "Client lifetime value", value: "$9K+" },
    ],
    testimonial:
      "This is the most legitimate system I've used to scale past $100K/month. It just works.",
  },
] as const;

export const resultStats = [
  { value: 100, prefix: "$", suffix: "K+", label: "Best client months" },
  { value: 200, prefix: "", suffix: "+", label: "Qualified calls booked monthly" },
  { value: 9, prefix: "$", suffix: "", label: "Avg. cost per booked appointment" },
  { value: 88, prefix: "", suffix: "%", label: "Average show rate" },
] as const;

/* ============================================================
   8-step client acquisition system
   ============================================================ */
export const acquisitionSteps: {
  icon: LucideIcon;
  title: string;
  short: string;
  body: string;
  detail: string[];
}[] = [
  {
    icon: Target,
    title: "Market & Offer Audit",
    short: "Diagnosis",
    body: "We dissect your niche, avatar, offer and current numbers to find the exact leverage point for growth.",
    detail: [
      "Niche & avatar research",
      "Offer & pricing diagnosis",
      "Current-funnel teardown",
      "Competitor gap analysis",
    ],
  },
  {
    icon: FileText,
    title: "No-Brainer Offer Engineering",
    short: "Offer",
    body: "We rebuild your offer so the market instantly sees value — the foundation of every profitable funnel.",
    detail: [
      "Offer stacking & bonuses",
      "Risk-reversal mechanics",
      "Pricing architecture",
      "Guarantee positioning",
    ],
  },
  {
    icon: Megaphone,
    title: "Ad Script Injection",
    short: "Traffic",
    body: "Paid ad campaigns engineered around your exact buyer — not spray-and-pray broad targeting.",
    detail: [
      "Meta & Google campaigns",
      "Avatars & interest stacks",
      "Ad copy & creative direction",
      "Budget architecture",
    ],
  },
  {
    icon: Funnel,
    title: "QualifiedLeadsX™ Funnel Build",
    short: "Funnel",
    body: "A conversion-optimized funnel that qualifies, educates and pre-sells every single visitor.",
    detail: [
      "High-converting VSL",
      "Landing pages & forms",
      "Qualification logic",
      "A/B test roadmap",
    ],
  },
  {
    icon: MessageSquare,
    title: "24/7 Automated Nurturing",
    short: "Nurture",
    body: "SMS + email sequences that follow up around the clock so no lead is ever forgotten.",
    detail: [
      "Email automation",
      "SMS sequences",
      "Retargeting flows",
      "Objection handling",
    ],
  },
  {
    icon: PhoneCall,
    title: "AI Outbound Voice Calls",
    short: "Outbound AI",
    body: "AI voice assistants call your leads, qualify them and book time on your calendar — automatically.",
    detail: [
      "AI booking calls",
      "Qualification scripting",
      "Calendar integration",
      "No-show reminders",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Show Rate Optimization",
    short: "Show Rate",
    body: "Confirmations, reminders and rebooking flows that push your show rate past 85%.",
    detail: [
      "Multi-touch confirmations",
      "Reminder sequences",
      "Auto-rebooking",
      "Buffer management",
    ],
  },
  {
    icon: TrendingUp,
    title: "Scale & Reporting",
    short: "Scale",
    body: "A live KPI dashboard where every dollar is tracked — and winning campaigns get scaled.",
    detail: [
      "Real-time dashboard",
      "ROAS & CAC tracking",
      "Winner scaling",
      "Weekly optimization",
    ],
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
  { icon: Users, title: "Campaign Strategy", body: "Full-funnel strategy mapped to your niche, offer and revenue targets." },
  { icon: PenTool, title: "Ad Creative & Copy", body: "Scroll-stopping creatives and conversion copy, refreshed on a monthly rotation." },
  { icon: Funnel, title: "Funnel System Build", body: "Your QualifiedLeadsX™ funnel, live and tracking within weeks, not months." },
  { icon: MessageSquare, title: "Email & SMS Automation", body: "24/7 nurturing flows that sell while you sleep." },
  { icon: PhoneCall, title: "AI Outbound Calling", body: "AI voice agents that qualify and book your calendar automatically." },
  { icon: Settings, title: "CRM & Calendar Integration", body: "Every lead, call and closed deal tracked in one clean pipeline." },
  { icon: Database, title: "Pixels & Tracking Setup", body: "Full measurement infrastructure so every dollar is accountable." },
  { icon: LineChart, title: "Live KPI Dashboard", body: "A real-time command center showing appointments, cost and revenue." },
  { icon: Copy, title: "VSL & Landing Pages", body: "High-converting sales assets engineered for your specific buyer." },
  { icon: Rocket, title: "Traffic Management", body: "Daily campaign management across Meta and Google." },
  { icon: CalendarCheck, title: "Show-Rate Management", body: "Confirmations, reminders and rebooking to protect your calendar." },
  { icon: BarChart3, title: "Weekly Reporting", body: "Transparent numbers every week — no vanity metrics, ever." },
] as const;

/* ============================================================
   Ownership
   ============================================================ */
export const ownershipSteps = [
  {
    step: "01",
    title: "We build",
    body: "We construct the entire acquisition system — ads, funnel, automation, CRM, the lot.",
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
  "Ad accounts",
  "Pixels & audiences",
  "Funnels & landing pages",
  "Email lists",
  "SMS lists",
  "Automation sequences",
  "AI voice scripts",
  "Campaign data",
  "Creative library",
] as const;

/* ============================================================
   Industries
   ============================================================ */
export const industries: {
  title: string;
  icon: LucideIcon;
  body: string;
  metric: string;
  metricLabel: string;
}[] = [
  { title: "Business Coaches", icon: Rocket, body: "Scale from time-for-money to a system that books your calendar.", metric: "$38K", metricLabel: "Client MRR" },
  { title: "Fitness & Health Coaches", icon: Target, body: "Fill coaching slots with pre-sold, high-intent clients.", metric: "9.4x", metricLabel: "Return on ad spend" },
  { title: "Consultants", icon: BarChart3, body: "Replace cold outreach with a pipeline that qualifies itself.", metric: "$25K+", metricLabel: "New client revenue" },
  { title: "Agencies & SaaS", icon: Funnel, body: "Book agencies and decision-makers on retained engagements.", metric: "$32K", metricLabel: "Retainer MRR" },
  { title: "Real Estate Investors", icon: TrendingUp, body: "Qualified property conversations booked on autopilot.", metric: "11", metricLabel: "Deals in 90 days" },
  { title: "Clinics & MedSpas", icon: ShieldCheck, body: "High-ticket treatments booked, not tire-kickers.", metric: "$2,400", metricLabel: "Average ticket" },
  { title: "Financial Advisors", icon: LineChart, body: "A compliant-qualified pipeline of investable conversations.", metric: "31", metricLabel: "Qualified calls" },
  { title: "Online Course Creators", icon: Copy, body: "Turn launches into a predictable monthly revenue engine.", metric: "3.2x", metricLabel: "Launch velocity" },
  { title: "Law Firms & Legal", icon: FileText, body: "High-value consultation clients, pre-screened and ready.", metric: "88%", metricLabel: "Show rate" },
  { title: "Home Services", icon: Settings, body: "Local, qualified job opportunities without the phone tag.", metric: "$7", metricLabel: "Cost per appointment" },
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
  { label: "Done-for-you acquisition system", agency: "Sometimes", qlx: true },
  { label: "Pre-sold, qualified prospects", agency: false, qlx: true },
  { label: "AI outbound voice calling", agency: false, qlx: true },
  { label: "24/7 automated follow-ups", agency: false, qlx: true },
  { label: "Written 90-day guarantee", agency: false, qlx: true },
  { label: "You own all accounts & assets", agency: false, qlx: true, highlight: true },
  { label: "Live KPI dashboard", agency: "Extra cost", qlx: true },
  { label: "Time to first sales call", agency: "90+ days", qlx: "Weeks", highlight: true },
  { label: "Lock-in contracts", agency: "Yes", qlx: "Never" },
  { label: "Exit fees", agency: "Yes", qlx: false },
] as const;

/* ============================================================
   FAQ
   ============================================================ */
export const faqCategories = ["All", "Results", "The System", "Ownership", "Guarantee", "Pricing"] as const;

export const faqs: {
  q: string;
  a: string;
  category: (typeof faqCategories)[number];
}[] = [
  {
    q: "How is QualifiedLeadsX™ different from a regular marketing agency?",
    a: "Most agencies hand you leads or manage ads — then charge you a retainer regardless of outcome. We install a complete, pre-sold acquisition system: ads, funnel, automated nurture, AI voice calling and show-rate management. You don't chase prospects — they chase you. And we back it with a written 90-day guarantee.",
    category: "The System",
  },
  {
    q: "How fast can I expect my first sales call?",
    a: "Because the QualifiedLeadsX™ system qualifies and pre-sells prospects before they reach your calendar, most clients see their first booked calls within the first weeks — not the 90+ days agencies typically need to 'ramp up'.",
    category: "Results",
  },
  {
    q: "Who is this built for?",
    a: "High-ticket coaches, consultants, service providers, agencies, clinics, and professional practices selling offers above $1,000. The system works best when there's real margin to work with — that's what funds the traffic engine.",
    category: "The System",
  },
  {
    q: "Do I really own everything?",
    a: "Yes — written into the engagement. Ad accounts, pixels, audiences, funnels, email and SMS lists, automation, AI voice scripts and campaign data are all registered under your name from day one. If we ever part ways, the entire system stays yours. No hostage-holding, no exit fees.",
    category: "Ownership",
  },
  {
    q: "What does the 90-day written guarantee actually cover?",
    a: "We put our skin in the game in writing. If the system isn't delivering qualified booked appointments at the agreed level within 90 days, you're covered under the terms of the written guarantee. That's how confident we are in the QualifiedLeadsX™ system.",
    category: "Guarantee",
  },
  {
    q: "How much does it cost to work with you?",
    a: "Investment depends on your niche, offer and revenue target. It's priced to be immediately profitable from your very first closed deal — most clients recoup their investment with a single client. Book a free strategy call for an exact scope.",
    category: "Pricing",
  },
  {
    q: "What if I don't have a big audience or any outreach?",
    a: "Perfect — that's exactly what we're built for. Our clients like Edgar and Daniel had zero audience and zero cold outreach. The system generates its own pipeline from cold paid traffic. You don't need a following, you need a system.",
    category: "Results",
  },
  {
    q: "How are leads qualified before they reach my calendar?",
    a: "Every lead passes through your funnel — a high-converting VSL, landing page and qualification logic — then gets nurtured via 24/7 SMS/email automation and booked by AI outbound voice calls. Only prospects that qualify, engage and book actually reach your calendar.",
    category: "The System",
  },
  {
    q: "Is there a long-term contract?",
    a: "No lock-in contracts and no exit fees. We keep clients because we deliver a positive return on ad spend — not because a contract holds them hostage.",
    category: "Pricing",
  },
  {
    q: "What niches do you specialize in?",
    a: "Coaches, consultants, agencies, real estate investors, financial advisors, clinics and medspas, legal, online educators and home services. If you sell a high-ticket offer, the QualifiedLeadsX™ system can be engineered for it.",
    category: "The System",
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

export { caseStudies as caseStudiesData };
