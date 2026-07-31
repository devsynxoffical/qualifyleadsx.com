import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { siteContent } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Results', href: '/results' },
  { label: 'Testimonials', href: '/testimonials' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-[#081136]/90 py-3 shadow-[0_10px_40px_rgba(8,17,54,0.6)] backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <nav className="qlx-glass flex items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-5">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img
              src={siteContent.brand.logo}
              alt={siteContent.brand.logoAlt}
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive ? 'text-primary' : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:block">
            <Button href={siteContent.brand.ctaUrl} className="!px-5 !py-2.5 !text-xs">
              {siteContent.brand.ctaShort}
            </Button>
          </div>

          <button
            type="button"
            className="rounded-full p-2 text-white lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2 px-4 lg:hidden"
          >
            <Container className="qlx-glass-strong flex flex-col gap-4 rounded-3xl py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-white/90 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <div onClick={() => setMobileOpen(false)}>
                <Button href={siteContent.brand.ctaUrl} className="w-full">
                  {siteContent.brand.ctaShort}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
