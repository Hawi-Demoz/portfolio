import { motion } from 'framer-motion'
import { RESEARCH } from '../../data/content'
import { ChapterHeader, HandDrawnDivider, StarMark } from '../BookDecorations'

export function ResearchSection() {
  return (
    <section id="research" className="relative section-pad section-texture-deep">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ChapterHeader
            label="HOBBIES"
            title="INTERESTS & STUDY"
            subtitle="Stuff I&apos;m reading into and thinking about right now."
          />
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Hobbies
          </h2>
        </motion.div>

        <HandDrawnDivider className="my-8 text-emerald" />

        <div className="space-y-0">
          {RESEARCH.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-7 border-b border-border/50 last:border-b-0"
            >
              <div className="flex md:flex-col gap-2 md:gap-3">
                <div className="flex items-center gap-2">
                  <StarMark size={9} color="#B4573D" />
                  <span className="font-mono text-[9px] tracking-[0.22em] text-emerald uppercase font-semibold">
                    // {r.status}
                  </span>
                </div>
                <span className="font-mono text-[8px] tracking-[0.18em] text-dim">
                  Topic {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-display text-2xl font-light text-soft-white leading-tight">
                  {r.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-muted font-sans">
                  {r.summary}
                </p>
                {/* Doodle bracket */}
                <div className="flex items-center gap-3 mt-1">
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="text-emerald/50" aria-hidden="true">
                    <path d="M2 1C2 1 4 4 10 4C16 4 18 7 18 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className="font-mono text-[8px] tracking-[0.2em] text-dim uppercase">ongoing exploration</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-xl border border-border/50 bg-panel/25 px-5 py-4"
        >
          <p className="font-mono text-[8.5px] tracking-[0.22em] text-dim uppercase">
            § Current Focus. I&apos;ll keep adding to this as new things catch my interest.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
