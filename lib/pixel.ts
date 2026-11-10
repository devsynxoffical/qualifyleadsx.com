export const FB_PIXEL_IDS = [
  "474182998516134", // Qualified leads X
];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

import { gaEvent } from "@/lib/ga";

/** Meta Pixel standard event -> GA4 event, so both tools count the same actions. */
const GA4_EVENT: Record<string, string> = {
  CompleteRegistration: "generate_lead",
  Contact: "contact",
  Schedule: "view_booking_form",
  Lead: "generate_lead",
};

export const fbqTrack = (event: string, params?: Record<string, unknown>) => {
  const ga = GA4_EVENT[event];
  if (ga) gaEvent(ga, { ...(params ?? {}), ...(ga === "generate_lead" && !params?.form ? { form: "booking" } : {}) });
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq("track", event, params);
    } else {
      window.fbq("track", event);
    }
  }
};
