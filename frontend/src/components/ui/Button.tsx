import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  children: ReactNode
  className?: string
  showArrow?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'qlx-btn-gradient text-white hover:brightness-110 shadow-[0_0_28px_rgba(19,139,212,0.45)] hover:shadow-[0_0_42px_rgba(19,139,212,0.7)] hover:-translate-y-0.5 hover:scale-[1.02]',
  secondary:
    'bg-primary-dark text-white hover:bg-primary-dark/90 shadow-[0_0_24px_rgba(22,67,130,0.4)] hover:shadow-[0_0_36px_rgba(22,67,130,0.6)] hover:-translate-y-0.5',
  outline:
    'border border-primary/60 bg-primary/10 text-primary hover:bg-primary hover:text-white',
  ghost: 'text-white hover:bg-white/10',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  showArrow = true,
  ...props
}: ButtonProps) {
  const classes = `qlx-btn-glow group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {showArrow && variant === 'primary' && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition group-hover:translate-x-0.5 group-hover:bg-white/30">
          <ArrowRight size={14} />
        </span>
      )}
    </>
  )

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes}>
          {content}
        </Link>
      )
    }
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
