import { motion } from 'framer-motion'
import { SKILLS } from '../../data/content'

export function SkillsSection() {
  return (
    <section id="systems" className="relative section-pad">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-3">
            03 / SYSTEMS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Skills
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Technical proficiencies, tools, and system competencies.
          </p>
        </motion.div>

        <div className="mt-12 border-t border-border/60 divide-y divide-border/60">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.module}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="grid grid-cols-[100px_1fr_1.2fr_50px] gap-6 items-center py-4"
            >
              <span className="font-mono text-[9px] tracking-wider text-muted">
                {skill.module}
              </span>
              <span className="font-sans text-sm font-medium text-soft-white">
                {skill.name}
              </span>
              <div className="h-[2px] w-full bg-border-soft rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + i * 0.05,
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
              <span className="font-mono text-[10px] tracking-wider text-right text-emerald">
                {skill.progress}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
