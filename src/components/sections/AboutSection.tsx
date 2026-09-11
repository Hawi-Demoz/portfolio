import { motion } from 'framer-motion'
import heroIllustration from '../../assets/hero-illustration.jpg'
import { ENGINEER, MISSIONS, SKILLS } from '../../data/content'
import { ChapterHeader, HandDrawnDivider, StarMark } from '../BookDecorations'

const ACTIVE_MISSIONS = MISSIONS.filter((m) => m.status === 'ACTIVE').slice(0, 2)

const STATS = [
  { label: 'Specializations', value: String(ENGINEER.specializations.length) },
  { label: 'Skill Areas', value: String(SKILLS.length) },
  { label: 'Active Projects', value: String(MISSIONS.filter((m) => m.status === 'ACTIVE').length) },
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
            label="ABOUT"
            title="THE PROFILE"
            subtitle="A brief introduction to the engineer and developer behind the work."
          />
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            About Hawi
          </h2>
        </motion.div>

        <HandDrawnDivider className="my-8 text-emerald" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] items-start">
          {/* Left: profile card */}
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

              <div className="mb-6 overflow-hidden rounded-[18px] border border-border/60 bg-panel-elevated/30 p-2">
                <img src={heroIllustration} alt="Illustration of Hawi in a creative and playful pose" className="mx-auto h-auto max-h-[360px] w-full rounded-[12px] object-cover object-top" width={560} height={747} />
              </div>

              <div className="flex items-center gap-2 text-emerald text-[9px] font-mono tracking-[0.22em] uppercase mb-5">
                <StarMark size={10} color="#B4573D" />
                <span>Profile · Engineer</span>
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
                Currently learning: Data Analysis &amp; Machine Learning
              </div>
            </div>
          </motion.div>

          {/* Right: stacked content blocks */}
          <div className="flex flex-col gap-5 mt-8">
            {/* Personal Note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="p-5 border-l-2 border-emerald/60 bg-panel/25 rounded-r-lg"
            >
              <p className="font-mono text-[8.5px] tracking-[0.22em] text-emerald uppercase mb-3">
                § Personal Note
              </p>
              <p className="font-display text-base md:text-lg font-light italic leading-relaxed text-soft-white/85">
                I care about the small stuff : spacing, color, the details that make something feel intentional instead of generic..
              </p>
            </motion.div>

            {/* Currently Working On */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="relative rounded-xl border border-border/70 bg-panel/25 p-5"
            >
              {/* inner dashed inset */}
              <span className="pointer-events-none absolute inset-[3px] rounded-[10px] border border-dashed border-emerald/14" aria-hidden />
              <p className="font-mono text-[8.5px] tracking-[0.22em] text-emerald uppercase mb-4">
                § Currently Working On
              </p>
              <div className="space-y-4">
                {ACTIVE_MISSIONS.map((m) => (
                  <div key={m.id} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 font-mono text-[7px] tracking-[0.16em] text-emerald/70 uppercase">{m.code}</span>
                    <div className="min-w-0">
                      <p className="font-display text-sm font-light italic text-soft-white/90 leading-snug">{m.title}</p>
                      <p className="mt-1 font-mono text-[8px] tracking-[0.12em] text-muted leading-relaxed line-clamp-2">{m.brief}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {m.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="font-mono text-[7.5px] tracking-[0.14em] text-dim uppercase border border-border/60 rounded px-1.5 py-0.5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* By the Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="relative rounded-xl border border-border/70 bg-panel/25 p-5"
            >
              <span className="pointer-events-none absolute inset-[3px] rounded-[10px] border border-dashed border-emerald/14" aria-hidden />
              <p className="font-mono text-[8.5px] tracking-[0.22em] text-emerald uppercase mb-4">
                § By the Numbers
              </p>
              <div className="grid grid-cols-3 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-2xl font-light italic text-soft-white/90">{s.value}</div>
                    <div className="mt-0.5 font-mono text-[7.5px] tracking-[0.18em] text-muted uppercase leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="font-mono text-[8.5px] tracking-[0.18em] text-dim"
            >
              Availability: Open to software development, engineering, data, and technology opportunities.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

