import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'

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
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-3">
            07 / UPLINK
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Get in touch
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Send a transmission — I will reply as soon as signal allows.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <form
            onSubmit={onSubmit}
            className="space-y-6 md:pr-4"
          >
            <label className="block">
              <span className="font-mono text-[9px] tracking-[0.2em] text-muted">
                NAME
              </span>
              <input
                required
                name="name"
                className="mt-1 w-full border-b border-border bg-transparent py-3 font-sans text-sm text-soft-white outline-none transition focus:border-emerald"
                placeholder="Identify yourself"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[9px] tracking-[0.2em] text-muted">
                EMAIL
              </span>
              <input
                required
                type="email"
                name="email"
                className="mt-1 w-full border-b border-border bg-transparent py-3 font-sans text-sm text-soft-white outline-none transition focus:border-emerald"
                placeholder="your@email.com"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[9px] tracking-[0.2em] text-muted">
                MESSAGE
              </span>
              <textarea
                required
                name="message"
                rows={4}
                className="mt-1 w-full resize-none border-b border-border bg-transparent py-3 font-sans text-sm text-soft-white outline-none transition focus:border-emerald"
                placeholder="State your objective..."
              />
            </label>

            <button
              type="submit"
              disabled={sending || sent}
              className="btn-transmit w-full rounded-sm border border-emerald/40 bg-emerald/10 px-5 py-3.5 font-mono text-[9px] tracking-[0.25em] text-emerald disabled:opacity-60 cursor-pointer"
            >
              {sent
                ? '[ MESSAGE RECEIVED ]'
                : sending
                  ? '[ SENDING UPLINK... ]'
                  : '[ DISPATCH TRANSMISSION ]'}
            </button>

            {sent && (
              <p className="font-mono text-[10px] tracking-[0.12em] text-emerald">
                Transmission broadcasted successfully. Standing by for response.
              </p>
            )}
          </form>

          <div className="space-y-8 lg:border-l lg:border-border/60 lg:pl-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-4">
                CONNECTION PROTOCOL
              </p>
              <div className="space-y-4 font-mono text-[10px] tracking-wider text-muted">
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span>CHANNEL</span>
                  <span className="text-soft-white">SECURE EMAIL</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span>EXPECTED UPLINK</span>
                  <span className="text-soft-white">1–2 SYSTEM DAYS</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-2">
                  <span>ENCRYPTION</span>
                  <span className="text-emerald">END-TO-END</span>
                </div>
                <div className="flex justify-between">
                  <span>DESTINATION</span>
                  <span className="text-soft-white">HAWI // MISSION CONTROL</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-6 border border-border/60 bg-panel-elevated/20 rounded-sm">
              <div className="relative h-28 w-28">
                <span className="absolute inset-0 rounded-full border border-emerald/20" />
                <span className="absolute inset-3 rounded-full border border-border/30" />
                <span className="absolute inset-6 rounded-full border border-border/50" />
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald status-dot" />
                <motion.span
                  className="absolute left-1/2 top-1/2 h-px w-14 origin-left bg-emerald/30"
                  style={{ translateX: '-0%', translateY: '-50%' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
