import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { siteContent } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import heroTeamImg from '../../assets/hero-team.png'

export function Hero() {
  const { brand, hero } = siteContent

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-8 lg:pt-24"
    >
      <div className="qlx-aurora" />
      <div className="pointer-events-none absolute inset-0 qlx-grid-dots opacity-25" />
      <div className="qlx-glow-orb left-[-8%] top-[10%] h-64 w-64 bg-primary/20" />
      <div
        className="qlx-glow-orb right-[-5%] top-[30%] h-80 w-80 bg-cyan/15"
        style={{ animationDelay: '1.5s' }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="qlx-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="qlx-heading mt-4 text-xl font-bold text-primary sm:text-2xl"
            >
              {hero.titleHighlight}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-3 text-sm font-semibold text-white/90 sm:text-base"
            >
              {hero.titleGuarantee}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-2 text-xs italic text-cyan-soft sm:text-sm"
            >
              {hero.titleBacked}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex justify-center lg:justify-start"
            >
              <Button href={brand.ctaUrl}>{hero.cta}</Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {hero.trustItems.map((item) => (
                <li
                  key={item}
                  className="qlx-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-white/85"
                >
                  <Check size={14} className="shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xs sm:max-w-sm"
            >
              <motion.div
                aria-hidden
                className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/30 via-cyan/15 to-transparent blur-2xl"
                animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.96, 1.05, 0.96] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="qlx-glass-strong relative overflow-hidden rounded-2xl p-1.5"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.img
                  src={heroTeamImg}
                  alt="QualifiedLeadsX Founders"
                  className="h-auto w-full rounded-xl object-cover"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
