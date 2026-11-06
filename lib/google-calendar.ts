/**
 * Google Calendar appointment schedule used for strategy-call booking.
 *
 * HOW TO CONNECT YOUR CALENDAR
 * 1. In Google Calendar: Create > Appointment schedule. Set the 30-minute
 *    duration, your available hours, buffer time and "Google Meet" as location.
 * 2. Open the schedule > Share > "Website embed" > "Inline schedule" > Copy.
 * 3. Paste what you copied (the whole <iframe ...> snippet or just its URL) into
 *    BOOKING_SOURCE below, OR set it in your hosting dashboard as the
 *    environment variable NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL and redeploy.
 *
 * Leave both empty to keep the old behaviour (form only, team replies by email).
 */
const BOOKING_SOURCE = "";

export interface GoogleCalendarBooking {
  /** URL safe to load in an <iframe> (Google's inline schedule view). */
  embedUrl: string | null;
  /** URL to open the booking page in a new tab (always set when configured). */
  linkUrl: string;
}

const ALLOWED_HOSTS = new Set(["calendar.google.com", "calendar.app.google"]);

/**
 * Accepts the full embed snippet, the long schedule URL or the short
 * calendar.app.google share link and returns safe embed/link URLs.
 * Anything that is not a Google Calendar URL is rejected, so a typo can never
 * load a third-party page inside the booking form.
 */
export function parseGoogleCalendarBooking(raw: string | undefined | null): GoogleCalendarBooking | null {
  if (!raw) return null;
  let value = raw.trim();
  if (!value) return null;

  // Full <iframe src="..."> snippet pasted in: pull out the src.
  const src = value.match(/src\s*=\s*["']([^"']+)["']/i);
  if (src) value = src[1];
  value = value.replace(/&amp;/g, "&");

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || !ALLOWED_HOSTS.has(url.hostname)) return null;

  // Short share links redirect to the booking page but cannot be framed.
  if (url.hostname === "calendar.app.google") {
    return { embedUrl: null, linkUrl: url.toString() };
  }

  if (!/\/calendar\/(?:u\/\d+\/)?appointments\/schedules\/[A-Za-z0-9_-]+/.test(url.pathname)) {
    return null;
  }

  const link = new URL(url.toString());
  link.searchParams.delete("gv");

  const embed = new URL(url.toString());
  embed.searchParams.set("gv", "true");

  return { embedUrl: embed.toString(), linkUrl: link.toString() };
}

export const googleCalendarBooking = parseGoogleCalendarBooking(
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL || BOOKING_SOURCE
);
