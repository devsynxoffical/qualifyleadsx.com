import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyScale } from "@/components/sections/WhyScale";
import { Different } from "@/components/sections/Different";
import { FunnelProof } from "@/components/sections/FunnelProof";
import { VSL } from "@/components/sections/VSL";
import { ClientSuccess } from "@/components/sections/ClientSuccess";
import { Process } from "@/components/sections/Process";
import { EverythingIncluded } from "@/components/sections/EverythingIncluded";
import { FlowWave } from "@/components/sections/FlowWave";
import { Ownership } from "@/components/sections/Ownership";
import { Industries } from "@/components/sections/Industries";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main id="main">
      <AnnouncementBar />
      <Nav />
      <FlowWave />
      <TrustBar />
      <WhyScale />
      <Different />
      <FunnelProof />
      <VSL />
      <ClientSuccess />
      <CTABanner
        compact
        eyebrow="The results speak for themselves"
        title={
          <>
            The calls they&apos;re missing are{" "}
            <em className="font-semibold not-italic text-lime">yours to take.</em>
          </>
        }
      />
      <Process />
      <CTABanner
        compact
        eyebrow="Done-for-you"
        title={
          <>
            Every step above —{" "}
            <em className="font-semibold not-italic text-lime">installed for you.</em>
          </>
        }
      />
      <EverythingIncluded />
      <Ownership />
      <Industries />
      <Guarantee />
      <CTABanner
        compact
        eyebrow="Risk reversed"
        title={
          <>
            Your free strategy call —{" "}
            <em className="font-semibold not-italic text-lime">backed in writing.</em>
          </>
        }
      />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
