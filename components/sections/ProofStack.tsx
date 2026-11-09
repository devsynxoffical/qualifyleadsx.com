import { TrustBar } from "@/components/sections/TrustBar";
import { LogoBar } from "@/components/sections/LogoBar";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Guarantee } from "@/components/sections/Guarantee";

/**
 * The homepage's proof sections, reused on service, industry, comparison,
 * benchmark and tool pages so they share the homepage's design.
 *
 * - "full": results stats, client logos, how-it-works process, video
 *   testimonials and the written guarantee (service, industry, comparison pages)
 * - "compact": results stats and video testimonials only (tools, benchmarks
 *   and hubs, where the calculator or data should stay the focus)
 *
 * Each page keeps its own H1, copy, metadata and schema; these sections only
 * add H2-level proof content below the page's main content.
 */
export function ProofStack({ variant = "full" }: { variant?: "full" | "compact" }) {
  if (variant === "compact") {
    return (
      <>
        <TrustBar />
        <Testimonials />
      </>
    );
  }
  return (
    <>
      <TrustBar />
      <LogoBar />
      <Process />
      <Testimonials />
      <Guarantee />
    </>
  );
}
