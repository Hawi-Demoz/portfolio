import { motion } from 'framer-motion'
import { RESEARCH } from '../../data/content'

export function ResearchSection() {
  return (
    <section id="research" className="relative section-pad">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-3">
            05 / RESEARCH
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Research Notes
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Topics I am currently studying, designing, or exploring.
          </p>
        </motion.div>

        <div className="mt-12 border-t border-border/60 divide-y divide-border/60">
          {RESEARCH.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid md:grid-cols-[150px_1fr] gap-4 md:gap-8 py-6 items-start"
            >
              <span className="font-mono text-[9px] tracking-[0.2em] text-emerald uppercase font-semibold mt-1">
                // {r.status}
              </span>
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-light text-soft-white leading-tight">
                  {r.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted font-sans">
                  {r.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
