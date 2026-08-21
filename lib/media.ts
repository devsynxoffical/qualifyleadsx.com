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
    name: "Edgar",
    role: "Agency Founder · High-Ticket Client",
    result: "$4,500 Contract ($1.5K MRR)",
    quote: "“Edgar Landed A New Agency Client At A $1500/ Month MRR Deal For 3 Months ($4,500) At A $7 Lead Cost”",
    duration: "2:04",
    stars: 5,
  },
  {
    src: `${REVIEW_CDN}/69624f62f8a93b0480751a4e.mp4`,
    poster: "/training/DQXUnRNkjR3-poster.jpg",
    name: "Marie Grace Berg",
    role: "Online Summit Founder · High-Ticket Coach",
    result: "2,000+ Registrations",
    quote: "“How We Took Marie's Online Summit From Zero Results To 2,000+ Registrations”",
    duration: "1:12",
    stars: 5,
  },
  {
    src: `${REVIEW_CDN}/6978f116d560857126a4804c.mp4`,
    poster: "/training/DVjcGrUEr1Y-poster.jpg",
    name: "Edgar & Jeremi",
    role: "Co-Founders · High-Ticket Funnel System",
    result: "$120K+ Cash Generated",
    quote: "“How Edgar & Jeremi Are Getting High-Ticket Clients Using Our QualifiedLeadsX™ System”",
    duration: "0:45",
    stars: 5,
  },
];

export const trainingVideos: TrainingVideo[] = [
  {
    src: "/training/DPHgI7fEuIA.mp4",
    poster: "/training/DPHgI7fEuIA-poster.jpg",
    title: "How Teams Target The Most Profitable Homeowners",
    label: "Behind-The-Scenes Training",
    description: "2 Hours Roofing Team Training: Behind-the-scenes breakdown on how top teams target the most profitable homeowners.",
    duration: "7:51",
    link: "/mastermind/hidden-facebook-interest",
  },
  {
    src: "/training/DQXUnRNkjR3.mp4",
    poster: "/training/DQXUnRNkjR3-poster.jpg",
    title: "First DWY Call Worth $10K+ Experience",
    label: "Roofing Leads Strategy",
    description: "I've spent $10K+ on programs, but this first DWY session? Super valuable! Full roofing leads acquisition strategy revealed.",
    duration: "14:29",
    link: "/mastermind/7-days-paid-trial",
  },
  {
    src: "/training/DVjcGrUEr1Y.mp4",
    poster: "/training/DVjcGrUEr1Y-poster.jpg",
    title: "Roofing Agency Client Dropped CPL By 50%",
    label: "$129,000 In 60 Days",
    description: "Roofing agency client just dropped their cost per lead by 50%. Live dashboard breakdown showing $129,000 in 60 days.",
    duration: "4:49",
    link: "/mastermind/lto-funnel-scale",
  },
];
