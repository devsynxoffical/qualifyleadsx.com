"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { gaEvent } from "@/lib/ga";

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

/**
 * Site-wide GA4 events, attached once with document listeners:
 *   click_whatsapp, click_email, click_phone  (any matching link)
 *   scroll_75                                (once per page)
 *   tool_used                                (first input on a /tools page)
 * Lead events (generate_lead, contact, view_booking_form) stay in the forms and
 * lib/pixel.ts. Microsoft Clarity loads only when NEXT_PUBLIC_CLARITY_ID is set.
 */
export function SiteEvents() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      const href = a?.getAttribute("href") || "";
      if (!href) return;
      const page = window.location.pathname;
      if (/wa\.me|whatsapp\.com/i.test(href)) gaEvent("click_whatsapp", { page });
      else if (href.startsWith("mailto:")) gaEvent("click_email", { page });
      else if (href.startsWith("tel:")) gaEvent("click_phone", { page });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    let sent = false;
    const onScroll = () => {
      if (sent) return;
      const doc = document.documentElement;
      if (window.scrollY + window.innerHeight >= doc.scrollHeight * 0.75) {
        sent = true;
        gaEvent("scroll_75", { page: pathname });
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!pathname.startsWith("/tools/")) return;
    let sent = false;
    const onInput = () => {
      if (sent) return;
      sent = true;
      gaEvent("tool_used", { tool: pathname.replace("/tools/", "") });
    };
    document.addEventListener("input", onInput, { capture: true });
    document.addEventListener("change", onInput, { capture: true });
    return () => {
      document.removeEventListener("input", onInput, { capture: true });
      document.removeEventListener("change", onInput, { capture: true });
    };
  }, [pathname]);

  if (!CLARITY_ID) return null;
  return (
    <Script id="ms-clarity" strategy="lazyOnload">
      {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
    </Script>
  );
}
