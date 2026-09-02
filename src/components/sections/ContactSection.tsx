import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ChapterHeader, HandDrawnDivider, StarMark } from '../BookDecorations'
import { ENGINEER } from '../../data/content'

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    window.setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 900)
  }

  return (
    <section id="contact" className="relative section-pad">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ChapterHeader
            chapter="06"
            title="THE COLOPHON"
            page="P. 16"
            subtitle="The final page of this book. A space to write, to connect, to begin a new chapter together."
          />
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Get in touch
          </h2>
        </motion.div>

        <HandDrawnDivider className="my-8 text-emerald" />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
          {/* Letter / correspondence form */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Envelope header */}
            <div className="mb-6 flex items-center gap-3">
              <StarMark size={11} color="#B4573D" />
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase">To: Hawi Demoz</div>
                <div className="font-mono text-[8px] tracking-[0.18em] text-dim">Personal Correspondence</div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <label className="block">
                <span className="font-mono text-[9px] tracking-[0.22em] text-muted uppercase">
                  Your Name
                </span>
                <input
                  required
                  name="name"
                  className="mt-1.5 w-full border-b border-border/80 bg-transparent py-3 font-sans text-sm text-soft-white outline-none transition focus:border-emerald placeholder:text-dim/60"
                  placeholder="Who is writing?"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[9px] tracking-[0.22em] text-muted uppercase">
                  Return Address (Email)
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1.5 w-full border-b border-border/80 bg-transparent py-3 font-sans text-sm text-soft-white outline-none transition focus:border-emerald placeholder:text-dim/60"
                  placeholder="your@email.com"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[9px] tracking-[0.22em] text-muted uppercase">
                  Your Letter
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-none border-b border-border/80 bg-transparent py-3 font-sans text-sm text-soft-white outline-none transition focus:border-emerald placeholder:text-dim/60"
                  placeholder="Write your message here..."
                />
              </label>

              <button
                type="submit"
                disabled={sending || sent}
                className="btn-transmit w-full rounded-lg border border-emerald/50 bg-emerald/10 px-5 py-3.5 font-mono text-[9px] tracking-[0.25em] text-emerald disabled:opacity-60 cursor-pointer hover:bg-emerald/15 transition-all"
              >
                {sent
                  ? '[ LETTER RECEIVED · THANK YOU ]'
                  : sending
                    ? '[ SENDING YOUR LETTER... ]'
                    : '[ SEND YOUR LETTER → ]'}
              </button>

              {sent && (
                <p className="font-mono text-[9px] tracking-[0.14em] text-emerald">
                  ✦ Your letter has been received. I will write back soon.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right: colophon details */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-7 lg:border-l lg:border-border/50 lg:pl-10"
          >
            {/* Contact details as colophon type */}
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-emerald mb-4">
                § Contact Details
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Method', value: 'Email' },
                  { label: 'Response time', value: '1–2 days' },
                  { label: 'Name', value: ENGINEER.name },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-3 border-b border-border/40 pb-2.5">
                    <span className="font-mono text-[8.5px] tracking-[0.18em] text-muted uppercase">{row.label}</span>
                    <span className="font-mono text-[8.5px] tracking-[0.14em] text-soft-white/90">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-emerald mb-4">
                § Find me elsewhere
              </p>
              <div className="space-y-2.5">
                {[
                  { label: 'GitHub', href: ENGINEER.links.github },
                  { label: 'LinkedIn', href: ENGINEER.links.linkedin },
                  { label: 'Email', href: `mailto:${ENGINEER.links.email}` },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group font-mono text-[9px] tracking-[0.18em] text-muted hover:text-soft-white transition-colors py-1"
                  >
                    <span className="uppercase">{link.label}</span>
                    <span className="text-emerald group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Closing sign-off */}
            <div className="pt-4 border-t border-border/50">
              <p className="font-display text-base italic text-soft-white/70 leading-relaxed">
                &ldquo;Every great collaboration starts with a single message.&rdquo;
              </p>
              <p className="mt-2 font-mono text-[8.5px] tracking-[0.2em] text-dim">
                — Hawi Demoz
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
