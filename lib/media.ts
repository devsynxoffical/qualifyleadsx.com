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
  src: string;
  poster: string;
  title: string;
  label: string;
  description: string;
  duration: string;
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
    src: "/training/DPHgI7fEuIA.mp4",
    poster: "/training/DPHgI7fEuIA-poster.jpg",
    title: "Training 01",
    label: "Module 01",
    description: "Placeholder description - replace with the training topic.",
    duration: "7:51",
  },
  {
    src: "/training/DQXUnRNkjR3.mp4",
    poster: "/training/DQXUnRNkjR3-poster.jpg",
    title: "Training 02",
    label: "Module 02",
    description: "Placeholder description - replace with the training topic.",
    duration: "14:29",
  },
  {
    src: "/training/DVjcGrUEr1Y.mp4",
    poster: "/training/DVjcGrUEr1Y-poster.jpg",
    title: "Training 03",
    label: "Module 03",
    description: "Placeholder description - replace with the training topic.",
    duration: "4:49",
  },
];
