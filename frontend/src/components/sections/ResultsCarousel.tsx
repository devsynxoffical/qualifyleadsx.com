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

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 2500)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    if (distance > 40) next()
    else if (distance < -40) prev()
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section id="results" className="qlx-gradient-dark relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="qlx-glow-orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-primary/10" />
      <Container className="relative z-10">
        <SectionHeading className="mb-8 max-w-3xl mx-auto">
          {siteContent.results.title}
        </SectionHeading>

        <AnimatedSection>
          <div className="mb-5 flex justify-center">
            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className="qlx-glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs text-white/80 transition hover:border-primary/40 hover:text-white"
            >
              {isAutoPlaying ? (
                <Pause size={12} className="text-primary" />
              ) : (
                <Play size={12} className="text-primary" />
              )}
              <span>{isAutoPlaying ? 'Auto Playing' : 'Paused'}</span>
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
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${current * (100 / slidesToShow)}%)`,
                }}
              >
                {images.map((src) => (
                  <div
                    key={src}
                    className="flex shrink-0 justify-center px-2"
                    style={{ width: `${100 / slidesToShow}%` }}
                  >
                    <div className="qlx-glass overflow-hidden rounded-2xl p-2">
                      <img
                        src={src}
                        alt="Client revenue result"
                        className="max-h-60 w-auto rounded-xl object-contain sm:max-h-72 lg:max-h-80"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-2.5 text-white backdrop-blur-md transition hover:border-primary/50 hover:bg-primary hover:text-[#05070a]"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-2.5 text-white backdrop-blur-md transition hover:border-primary/50 hover:bg-primary hover:text-[#05070a]"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? 'w-6 bg-primary shadow-[0_0_12px_rgba(0,255,157,0.8)]'
                    : 'w-2 bg-white/25'
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
