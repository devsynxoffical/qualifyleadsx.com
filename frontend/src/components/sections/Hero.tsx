import { motion } from 'framer-motion'
import { siteContent } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import heroTeamImg from '../../assets/hero-team.jpg'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div className="qlx-aurora" />
      <div className="pointer-events-none absolute inset-0 qlx-grid-dots opacity-30" />
      <div className="qlx-glow-orb left-[-8%] top-[12%] h-72 w-72 bg-primary/30" />
      <div
        className="qlx-glow-orb right-[-6%] top-[22%] h-[28rem] w-[28rem] bg-cyan/20"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="qlx-glow-orb bottom-[8%] left-[40%] h-64 w-64 bg-primary/15"
        style={{ animationDelay: '3s' }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="text-center lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_#00ff9d]" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                QualifiedLeadsX™ Funnel System
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="qlx-heading text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-5xl"
            >
              {siteContent.hero.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <Button href={siteContent.brand.ctaUrl} className="!px-8 !py-4 !text-sm">
                {siteContent.brand.ctaShort}
              </Button>
            </motion.div>
          </div>

          <div className="flex justify-center lg:col-span-6 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/25 via-cyan/15 to-transparent blur-2xl" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="qlx-glass-strong group relative overflow-hidden rounded-[1.75rem] p-2"
              >
                <div className="overflow-hidden rounded-[1.35rem]">
                  <img
                    src={heroTeamImg}
                    alt="QualifiedLeadsX Founders"
                    className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
