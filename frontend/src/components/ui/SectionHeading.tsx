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
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`text-center ${className}`}
    >
      {subtitle && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan sm:text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="qlx-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-primary to-cyan" />
    </motion.div>
  )
}
