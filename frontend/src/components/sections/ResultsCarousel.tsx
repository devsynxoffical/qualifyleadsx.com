import { useCallback, useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { siteContent } from '../../data/content'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function ResultsCarousel() {
  const images = siteContent.results.images
  const [current, setCurrent] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(2)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  useEffect(() => {
    const update = () => setSlidesToShow(window.innerWidth < 768 ? 1 : 2)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, images.length - slidesToShow)

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Reduced slide timer to 2.5 seconds (2500ms) for faster auto scrolling
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 2500)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  // Touch Swipe handlers for mobile manual scroll
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > 40) {
      next()
    } else if (distance < -40) {
      prev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section id="results" className="qlx-gradient-dark py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading className="mb-6 max-w-3xl mx-auto text-xl sm:text-2xl lg:text-3xl">
          {siteContent.results.title}
        </SectionHeading>

        <AnimatedSection>
          {/* Pause/Play indicator */}
          <div className="mb-4 flex justify-center">
            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 transition hover:bg-white/15 hover:text-white"
            >
              {isAutoPlaying ? <Pause size={12} className="text-primary" /> : <Play size={12} className="text-primary" />}
              <span>{isAutoPlaying ? 'Auto Playing (2.5s)' : 'Paused'}</span>
            </button>
          </div>

          <div
            className="relative mx-auto max-w-4xl px-4 sm:px-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${current * (100 / slidesToShow)}%)`,
                }}
              >
                {images.map((src) => (
                  <div
                    key={src}
                    className="shrink-0 px-2 flex justify-center"
                    style={{ width: `${100 / slidesToShow}%` }}
                  >
                    <div className="overflow-hidden rounded-xl bg-black/40 p-1.5 shadow-lg ring-1 ring-white/10">
                      <img
                        src={src}
                        alt="Client revenue result"
                        className="max-h-60 sm:max-h-72 lg:max-h-80 w-auto rounded-lg object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow-md transition hover:bg-primary hover:text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black shadow-md transition hover:bg-primary hover:text-white"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="mt-5 flex justify-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index ? 'w-6 bg-primary' : 'w-2 bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
