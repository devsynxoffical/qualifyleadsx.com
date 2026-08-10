export type TestimonialVideo = {
  src: string;
  poster: string;
  name: string;
  role: string;
  result: string;
  quote: string;
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
    name: "Edgar",
    role: "High-ticket sales client",
    result: "Client results walkthrough",
    quote: "Placeholder quote — replace with a client testimonial.",
  },
  {
    src: `${REVIEW_CDN}/69624f62f8a93b0480751a4e.mp4`,
    poster: "/testimonials/poster-2.png",
    name: "Ibam",
    role: "Agency operator",
    result: "System case study",
    quote: "Placeholder quote — replace with a client testimonial.",
  },
  {
    src: `${REVIEW_CDN}/6978f116d560857126a4804c.mp4`,
    poster: "/testimonials/poster-3.png",
    name: "Edgar",
    role: "High-ticket sales client",
    result: "What changed once ads were live",
    quote: "Placeholder quote — replace with a client testimonial.",
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
