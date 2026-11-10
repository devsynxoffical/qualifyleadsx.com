import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/ga";

/**
 * GA4 tag. Page views on client-side navigation are recorded by GA4's
 * enhanced measurement ("page changes based on browser history events"),
 * which is on by default for web streams.
 */
export function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
