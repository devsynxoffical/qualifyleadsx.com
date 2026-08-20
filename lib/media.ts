export type TestimonialVideo = {
  src: string;
  poster: string;
  name: string;
  role: string;
  result: string;
  quote: string;
  duration?: string;
  stars?: number;
};

export type TrainingVideo = {
  src?: string;
  youtubeId?: string;
  poster?: string;
  title: string;
  label: string;
  description: string;
  duration?: string;
  link?: string;
};

const REVIEW_CDN =
  "https://storage.googleapis.com/msgsndr/HWyar6Z3u3aF6ydghkCx/media";

export const testimonialVideos: TestimonialVideo[] = [
  {
    src: `${REVIEW_CDN}/69624f63f8a93b76e0751a55.mp4`,
    poster: "/training/DPHgI7fEuIA-poster.jpg",
    name: "Jeremi",
    role: "Agency Founder · Client Acquisition",
    result: "$120K+ Cash Generated",
    quote: "“The QualifiedLeadsX system completely transformed our client acquisition. Within 30 days, our sales calendar was packed with pre-screened, high-ticket prospects ready to close.”",
    duration: "0:45",
    stars: 5,
  },
  {
    src: `${REVIEW_CDN}/69624f62f8a93b0480751a4e.mp4`,
    poster: "/training/DQXUnRNkjR3-poster.jpg",
    name: "Marie",
    role: "Growth Partner · High-Ticket Coach",
    result: "3x Booking Rate",
    quote: "“The multi-validation qualification filtering is a total game changer. We went from wasting time on unqualified leads to speaking exclusively with decision-makers who can afford our services.”",
    duration: "1:12",
    stars: 5,
  },
  {
    src: `${REVIEW_CDN}/6978f116d560857126a4804c.mp4`,
    poster: "/training/DVjcGrUEr1Y-poster.jpg",
    name: "Edgar",
    role: "Founder · Million Dollar Funnel",
    result: "Full Funnel Automation",
    quote: "“Before installing this done-for-you system, lead generation was unpredictable and manual. Now, the entire acquisition engine runs on autopilot, consistently filling our calendar week after week.”",
    duration: "2:04",
    stars: 5,
  },
];

export const trainingVideos: TrainingVideo[] = [
  {
    youtubeId: "Hy1M7WbookU",
    poster: "https://img.youtube.com/vi/Hy1M7WbookU/maxresdefault.jpg",
    title: "7 Days Paid Trial",
    label: "Paid Trial Playbook",
    description: "How to engineer a self-liquidating 7 Days Paid Trial front-end offer that converts cold traffic into high-ticket clients.",
    duration: "Mastermind",
    link: "/mastermind/7-days-paid-trial",
  },
  {
    youtubeId: "jjq9-FSD4iA",
    poster: "https://img.youtube.com/vi/jjq9-FSD4iA/maxresdefault.jpg",
    title: "Hidden Facebook Interest",
    label: "300–500 Calls Framework",
    description: "Uncovering uncompetitive interest pockets and deploying creative rotation to generate 300–500 pre-qualified calls.",
    duration: "Mastermind",
    link: "/mastermind/hidden-facebook-interest",
  },
  {
    youtubeId: "Nr1WIDiWPNA",
    poster: "https://img.youtube.com/vi/Nr1WIDiWPNA/maxresdefault.jpg",
    title: "Scaled LTO Funnel to $847K",
    label: "$255K Spend to Near $1M Sales",
    description: "Case study breakdown on scaling a Low-Ticket Offer (LTO) funnel to $847K in revenue with $255K in Meta ad spend.",
    duration: "Case Study",
    link: "/mastermind/lto-funnel-scale",
  },
];
