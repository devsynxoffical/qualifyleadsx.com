import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  children: ReactNode
  subtitle?: string
  light?: boolean
  dark?: boolean
  className?: string
}

export function SectionHeading({
  children,
  subtitle,
  light = false,
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const titleColor = dark ? 'text-text' : light ? 'text-white' : 'text-white'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`text-center ${className}`}
    >
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {subtitle}
        </p>
      )}
      <h2
        className={`text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl ${titleColor}`}
      >
        {children}
      </h2>
    </motion.div>
  )
}
