import { motion } from 'framer-motion'
import { ENGINEER } from '../../data/content'

export function HomeSection() {
  return (
    <section
      id="command"
      className="relative flex min-h-screen flex-col justify-center section-pad pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(180,87,61,0.04),transparent_50%),radial-gradient(ellipse_at_80%_60%,rgba(104,100,93,0.03),transparent_45%)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl w-full"
      >
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-6">
              00 / COMMAND DECK
            </p>
            <h1 className="font-display text-[clamp(4.5rem,11vw,9.5rem)] font-light italic leading-[0.85] tracking-tight text-soft-white select-none">
              Mission
              <br />
              <span className="text-emerald font-normal not-italic">Control</span>
            </h1>
          </div>

          <div className="md:mt-14 space-y-10">
            <div className="border-l border-emerald/30 pl-5 space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
                HAWI / STAFF ENGINEER
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                {ENGINEER.titles.map((t) => (
                  <li key={t} className="after:ml-3 after:text-border after:content-['/'] last:after:content-['']">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-soft-white/90">
              {ENGINEER.objective}
              <span className="cursor-blink ml-1 inline-block text-emerald">▌</span>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="btn-transmit rounded-sm border border-emerald/40 bg-emerald/10 px-6 py-3 font-mono text-[9px] uppercase tracking-[0.25em] text-emerald hover:bg-emerald/15 transition-all"
              >
                [ VIEW PROJECTS ]
              </a>
              <a
                href="#terminal"
                className="btn-transmit rounded-sm border border-border px-6 py-3 font-mono text-[9px] uppercase tracking-[0.25em] text-muted hover:border-soft-white/30 hover:text-soft-white transition-all"
              >
                [ OPEN TERMINAL ]
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
