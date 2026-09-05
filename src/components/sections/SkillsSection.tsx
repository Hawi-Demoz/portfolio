import { motion } from 'framer-motion'
import { SKILLS } from '../../data/content'
import { ChapterHeader, HandDrawnDivider, StarMark } from '../BookDecorations'

export function SkillsSection() {
  return (
    <section id="systems" className="relative section-pad section-texture-deep">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <ChapterHeader
            label="SKILLS"
            title="TOOLS & DISCIPLINES"
            subtitle="The tools and areas I actually use to get things done."
          />
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Skills
          </h2>
        </motion.div>

        <HandDrawnDivider className="my-8 text-emerald" />

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative rounded-xl border border-border/70 bg-panel/35 p-5 md:p-6"
            >
              {/* Corner accents */}
              <span className="absolute -top-px -left-px h-2.5 w-2.5 border-t border-l border-emerald/45 rounded-tl-xl" />
              <span className="absolute -top-px -right-px h-2.5 w-2.5 border-t border-r border-emerald/45 rounded-tr-xl" />

              {/* Category header */}
              <div className="flex items-start justify-between mb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <StarMark size={9} color="#B4573D" />
                    <span className="font-mono text-[8.5px] tracking-[0.24em] text-emerald uppercase font-semibold">
                      {group.group}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[8px] tracking-[0.2em] text-dim">
                  §{String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Dotted leader with entries */}
              <div className="space-y-2">
                {group.items.map((item, j) => (
                  <div key={item} className="flex items-center gap-1 group">
                    <span className="font-mono text-[9px] tracking-[0.15em] text-soft-white/85 uppercase">
                      {item}
                    </span>
                    <span className="flex-1 border-b border-dotted border-border/50 mx-2 mt-1" />
                    <span className="font-mono text-[8px] text-dim group-hover:text-muted transition-colors">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-3 font-mono text-[8.5px] tracking-[0.2em] text-dim uppercase"
        >
          <HandDrawnDivider className="flex-1 text-border" />
          <span className="shrink-0">Skills overview</span>
          <HandDrawnDivider className="flex-1 text-border" />
        </motion.div>
      </div>
    </section>
  )
}
