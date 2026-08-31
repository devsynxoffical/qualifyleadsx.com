import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/ui/CTABanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyScale } from "@/components/sections/WhyScale";
import { Different } from "@/components/sections/Different";
import { FunnelProof } from "@/components/sections/FunnelProof";
import { VSL } from "@/components/sections/VSL";
import { LogoBar } from "@/components/sections/LogoBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClientSuccess } from "@/components/sections/ClientSuccess";
import { Process } from "@/components/sections/Process";
import { EverythingIncluded } from "@/components/sections/EverythingIncluded";
import { Training } from "@/components/sections/Training";
import { FlowWave } from "@/components/sections/FlowWave";
import { Industries } from "@/components/sections/Industries";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { Pricing } from "@/components/sections/Pricing";
import { Community } from "@/components/sections/Community";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main id="main">
      <AnnouncementBar />
      <Nav />
      <FlowWave />
      <VSL />
      <LogoBar />
      <TrustBar />
      <WhyScale />
      <Different />
      <FunnelProof />
      <EverythingIncluded />
      <ClientSuccess />
      <Process />
      <CTABanner
        compact
        eyebrow="Done-for-you"
        title={
          <>
            Every step above,{" "}
            <em className="font-semibold not-italic text-lime">installed for you.</em>
          </>
        }
      />
      <Training />
      <Industries />
      <Guarantee />
      <CTABanner
        compact
        eyebrow="Risk reversed"
        title={
          <>
            Your free strategy call,{" "}
            <em className="font-semibold not-italic text-lime">backed in writing.</em>
          </>
        }
      />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  );
}

