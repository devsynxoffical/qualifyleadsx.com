import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyScale } from "@/components/sections/WhyScale";
import { Different } from "@/components/sections/Different";
import { FunnelProof } from "@/components/sections/FunnelProof";
import { ClientSuccess } from "@/components/sections/ClientSuccess";
import { FlowWave } from "@/components/sections/FlowWave";
import { Ownership } from "@/components/sections/Ownership";
import { Industries } from "@/components/sections/Industries";
import { Comparison } from "@/components/sections/Comparison";
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
      <ClientSuccess />
      <Ownership />
      <Industries />
      <Comparison />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
