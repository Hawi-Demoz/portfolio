import { motion } from 'framer-motion'
import heroIllustration from '../../assets/hero-illustration.jpg'
import { ENGINEER } from '../../data/content'
import { ChapterHeader, HandDrawnDivider, StarMark } from '../BookDecorations'

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

          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 p-5 border-l-2 border-emerald/60 bg-panel/25 rounded-r-lg"
            >
              <p className="font-mono text-[8.5px] tracking-[0.22em] text-emerald uppercase mb-2">
                § Personal Note
              </p>
              <p className="font-display text-base md:text-lg font-light italic leading-relaxed text-soft-white/85">
                I notice details most people scroll past. Colors, small choices, the stuff that makes something feel intentional instead of generic. That&apos;s usually what pulls me into a project.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 font-mono text-[8.5px] tracking-[0.18em] text-dim"
            >
              Availability: Open to software development, engineering, data, and technology opportunities.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
