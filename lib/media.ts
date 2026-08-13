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
    poster: "/testimonials/poster-1.png",
    name: "Harm Snaphaan",
    role: "Founder · Dataspark",
    result: "$80K Cash Collected",
    quote: "“Finding strong developers isn't easy, but they made it look effortless. Within a week they presented four high-quality candidates, several of whom we would have happily hired.”",
    duration: "0:45",
    stars: 5,
  },
  {
    src: `${REVIEW_CDN}/69624f62f8a93b0480751a4e.mp4`,
    poster: "/testimonials/poster-2.png",
    name: "Ibam",
    role: "Agency Operator",
    result: "System Case Study",
    quote: "“The amount of qualified calls on my calendar tripled in the first 30 days. It completely changed our agency's growth trajectory.”",
    duration: "1:12",
    stars: 5,
  },
  {
    src: `${REVIEW_CDN}/6978f116d560857126a4804c.mp4`,
    poster: "/testimonials/poster-3.png",
    name: "Edgar",
    role: "High-Ticket Consultant",
    result: "What Changed",
    quote: "“Before we plugged into this system, lead gen was completely unpredictable. Now, the entire machine just runs in the background while we close.”",
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
    description: "Placeholder description — replace with the training topic.",
    duration: "7:51",
  },
  {
    src: "/training/DQXUnRNkjR3.mp4",
    poster: "/training/DQXUnRNkjR3-poster.jpg",
    title: "Training 02",
    label: "Module 02",
    description: "Placeholder description — replace with the training topic.",
    duration: "14:29",
  },
  {
    src: "/training/DVjcGrUEr1Y.mp4",
    poster: "/training/DVjcGrUEr1Y-poster.jpg",
    title: "Training 03",
    label: "Module 03",
    description: "Placeholder description — replace with the training topic.",
    duration: "4:49",
  },
];
