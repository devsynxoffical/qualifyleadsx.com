/** Google Analytics 4 web stream "Qualifiedleadsx" (stream ID 16314271000). */
export const GA_MEASUREMENT_ID = "G-QQLRYFBWPL";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Send a GA4 event. Safe to call before gtag loads or when it's blocked. */
export const gaEvent = (name: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params ?? {});
  }
};
