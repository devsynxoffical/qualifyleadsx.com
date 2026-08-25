export const FB_PIXEL_IDS = [
  "474182998516134", // Qualified leads X
];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export const fbqTrack = (event: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq("track", event, params);
    } else {
      window.fbq("track", event);
    }
  }
};
