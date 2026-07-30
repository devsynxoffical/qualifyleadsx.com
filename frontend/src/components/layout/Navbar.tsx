import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { siteContent } from '../../data/content'
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
          ? 'bg-primary-dark/95 py-3 shadow-xl shadow-black/30 backdrop-blur-md'
          : 'bg-black/40 py-5 backdrop-blur-sm'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img
              src={siteContent.brand.logo}
              alt={siteContent.brand.logoAlt}
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-sm font-semibold transition-colors ${
                      isActive ? 'text-primary' : 'text-white/90 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/book-your-call/"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-primary/90"
            >
              {siteContent.brand.ctaShort}
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-white lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-primary-dark lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-semibold text-white/90 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/book-your-call/"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center rounded-xl bg-primary py-3 text-sm font-semibold uppercase text-white shadow-md"
              >
                {siteContent.brand.ctaShort}
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
