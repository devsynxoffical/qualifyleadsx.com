import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Calendar, Clock, ShieldCheck, CheckCircle2, Zap } from 'lucide-react'

export function BookCallPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    revenue: '$10k-$25k',
    businessType: '',
    date: '',
    time: '10:00 AM',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  return (
    <div className="qlx-gradient-dark min-h-screen pb-16 pt-24 sm:pt-28">
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="qlx-glow-orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-primary/20" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md"
            >
              <Zap size={14} className="text-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Spots Are EXTREMELY Limited - Secure Yours NOW
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-extrabold text-white sm:text-5xl leading-tight"
            >
              BOOK YOUR GAMEPLAN &amp; ATTACK SESSION
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg"
            >
              Want us to Install our QualifiedLeadsX™ Funnel System today into your business so you can start getting qualified sales calls by tomorrow?
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ── Main Booking Content Grid ── */}
      <Container className="mt-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: What Happens On The Call & Guarantee */}
          <div className="lg:col-span-5">
            <div className="qlx-glass rounded-3xl p-6 sm:p-8">
              <h2 className="mb-6 text-xl font-bold uppercase text-white flex items-center gap-2">
                <ShieldCheck className="text-primary" size={24} />
                What Happens On Your Session
              </h2>

              <ul className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Current Funnel & Lead Audit',
                    desc: 'We analyze your current lead generation model, ad scripts, and offer structure to uncover exact conversion bottlenecks.',
                  },
                  {
                    step: '02',
                    title: 'Custom Acquisition Blueprint',
                    desc: 'We map out a 100% customized QualifiedLeadsX™ funnel for your high-ticket service to reach 30–40 qualified calls/mo.',
                  },
                  {
                    step: '03',
                    title: 'Implementation Roadmap',
                    desc: 'You walk away with a crystal-clear attack plan ready to deploy, plus details on how our team can install it for you.',
                  },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-sm font-bold text-primary">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-base">{item.title}</h3>
                      <p className="mt-1 text-xs text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-primary/30 bg-primary/10 p-4 text-xs text-white/80">
                <div className="font-bold text-primary mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  100% Guaranteed Results
                </div>
                If we decide to work together, we guarantee 30–40 qualified booked appointments on your calendar every month.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="qlx-glass-strong rounded-3xl p-6 shadow-2xl sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Gameplan Session Reserved!</h3>
                  <p className="text-sm text-white/80 max-w-md mx-auto mb-6">
                    Thank you, <span className="text-primary font-bold">{formData.fullName}</span>. Your session request has been submitted. One of our lead acquisition specialists will contact you shortly at <span className="text-white font-semibold">{formData.email}</span>.
                  </p>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left max-w-md mx-auto text-xs text-white/75 space-y-2 mb-6">
                    <div>📅 <strong>Preferred Date:</strong> {formData.date || 'Today'}</div>
                    <div>⏰ <strong>Preferred Time:</strong> {formData.time}</div>
                    <div>📊 <strong>Monthly Revenue:</strong> {formData.revenue}</div>
                  </div>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Book Another Session
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Reserve Your Session Below
                  </h3>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone & Revenue */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                        Current Monthly Revenue *
                      </label>
                      <select
                        value={formData.revenue}
                        onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#0d1712] px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                      >
                        <option value="$0-$5k">$0 - $5,000 / mo</option>
                        <option value="$5k-$10k">$5,000 - $10,000 / mo</option>
                        <option value="$10k-$25k">$10,000 - $25,000 / mo</option>
                        <option value="$25k-$50k">$25,000 - $50,000 / mo</option>
                        <option value="$50k+">$50,000+ / mo</option>
                      </select>
                    </div>
                  </div>

                  {/* Business Type / Niche */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                      Business Type / High-Ticket Offer *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Business Coach, Solar Agency, SaaS Consultant"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Date & Time Selection */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2 flex items-center gap-1">
                        <Calendar size={14} /> Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#0d1712] px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2 flex items-center gap-1">
                        <Clock size={14} /> Preferred Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#0d1712] px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                      >
                        <option value="09:00 AM">09:00 AM EST</option>
                        <option value="10:00 AM">10:00 AM EST</option>
                        <option value="01:00 PM">01:00 PM EST</option>
                        <option value="03:00 PM">03:00 PM EST</option>
                        <option value="05:00 PM">05:00 PM EST</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-widest text-[#05070a] shadow-[0_0_32px_rgba(0,255,157,0.45)] transition-all hover:bg-primary/90 hover:scale-[1.01] disabled:opacity-50"
                    >
                      {isSubmitting ? 'Securing Your Spot...' : 'CONFIRM MY ATTACK SESSION NOW 🚀'}
                    </button>
                    <p className="text-center text-[11px] text-white/40 mt-3">
                      🔒 Your information is 100% secure. Zero spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}
