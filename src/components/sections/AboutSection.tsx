import { motion } from 'framer-motion'
import { ENGINEER } from '../../data/content'
import { ChapterHeader, HandDrawnDivider, StarMark } from '../BookDecorations'

const fields = [
  { label: 'Name', value: ENGINEER.name },
  { label: 'Role', value: ENGINEER.role },
  { label: 'Field', value: ENGINEER.division },
  {
    label: 'Focus areas',
    value: ENGINEER.specializations.join(' · '),
  },
  { label: 'Current project', value: ENGINEER.currentMission },
  { label: 'Availability', value: ENGINEER.clearance },
]

export function AboutSection() {
  return (
    <section id="engineer" className="relative section-pad">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <ChapterHeader
            chapter="02"
            title="THE PROFILE"
            page="P. 06–07"
            subtitle="A brief character sheet and author biography for the engineer behind this book."
          />
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            About Hawi
          </h2>
        </motion.div>

        <HandDrawnDivider className="my-8 text-emerald" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] items-start">
          {/* Left: character profile card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-24"
          >
            <div className="rounded-xl border border-border/70 bg-panel/45 p-6 relative">
              {/* Corner marks */}
              <span className="absolute -top-px -left-px h-3 w-3 border-t border-l border-emerald/50 rounded-tl-lg" />
              <span className="absolute -top-px -right-px h-3 w-3 border-t border-r border-emerald/50 rounded-tr-lg" />
              <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-emerald/50 rounded-bl-lg" />
              <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-emerald/50 rounded-br-lg" />

              <div className="flex items-center gap-2 text-emerald text-[9px] font-mono tracking-[0.22em] uppercase mb-5">
                <StarMark size={10} color="#B4573D" />
                <span>Character Profile · Engineer</span>
              </div>

              <div className="space-y-3">
                <div className="font-display text-3xl font-light italic text-soft-white">
                  Hawi Demoz
                </div>
                <div className="font-mono text-[9.5px] tracking-[0.2em] text-muted uppercase leading-relaxed">
                  Electrical & Computer Engineer<br />
                  Software Developer
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border/50 space-y-3">
                {ENGINEER.specializations.map((s) => (
                  <div key={s} className="flex items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-muted uppercase">
                    <span className="text-emerald text-[7px]">✦</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border/50 font-mono text-[8.5px] tracking-[0.18em] text-dim italic">
                Currently: {ENGINEER.currentMission}
              </div>
            </div>
          </motion.div>

          {/* Right: biography sheet */}
          <div>
            <div className="divide-y divide-border/50">
              {fields.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="grid grid-cols-[110px_1fr] gap-4 py-4"
                >
                  <span className="font-mono text-[9px] tracking-[0.22em] text-muted uppercase self-start mt-0.5">
                    {f.label}
                  </span>
                  <span className="font-sans text-sm text-soft-white/90 leading-relaxed">
                    {f.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 p-5 border-l-2 border-emerald/60 bg-panel/25 rounded-r-lg"
            >
              <p className="font-mono text-[8.5px] tracking-[0.22em] text-emerald uppercase mb-2">
                § Author's Note
              </p>
              <p className="font-display text-base md:text-lg font-light italic leading-relaxed text-soft-white/85">
                &ldquo;I enjoy building things where technical thinking and creative curiosity work together.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
