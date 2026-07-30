import { Hero } from '../components/sections/Hero'
import { RecognitionGallery } from '../components/sections/RecognitionGallery'
import { VideoSection } from '../components/sections/VideoSection'
import { ComparisonSection } from '../components/sections/ComparisonSection'
import { FunnelSteps } from '../components/sections/FunnelSteps'
import { ResultsCarousel } from '../components/sections/ResultsCarousel'
import { PromoBar } from '../components/sections/PromoBar'
import { TestimonialSection } from '../components/sections/TestimonialSection'
import { FinalCTA } from '../components/sections/FinalCTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <ComparisonSection />
      <FunnelSteps />
      <ResultsCarousel />
      <RecognitionGallery />
      <PromoBar />
      <TestimonialSection />
      <FinalCTA />
    </>
  )
}
