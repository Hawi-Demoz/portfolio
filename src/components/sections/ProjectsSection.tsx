import { useState } from 'react'
import { motion } from 'framer-motion'
import { MISSIONS, STATUS_LABEL, type Mission } from '../../data/content'
import { MissionModal } from '../MissionModal'
import { ChapterHeader, HandDrawnDivider, StarMark } from '../BookDecorations'

const statusMeta = {
  ACTIVE: { label: 'In Progress', dot: 'bg-emerald', text: 'text-emerald' },
  COMPLETE: { label: 'Completed', dot: 'bg-muted', text: 'text-muted' },
  STANDBY: { label: 'On Hold', dot: 'bg-amber', text: 'text-amber' },
} as const

export function ProjectsSection() {
  const [selected, setSelected] = useState<Mission | null>(null)

  return (
    <section id="projects" className="relative section-pad">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <ChapterHeader
            chapter="04"
            title="EXHIBITION PLATES"
            page="P. 10–13"
            subtitle="A curated collection of selected engineering and software works, presented as book plates."
          />
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Selected Works
          </h2>
        </motion.div>

        <HandDrawnDivider className="my-8 text-emerald" />

        <div className="grid gap-5 sm:grid-cols-2">
          {MISSIONS.map((m, i) => (
            <motion.button
              key={m.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => setSelected(m)}
              className="group relative rounded-xl border border-border/70 bg-panel/40 p-5 text-left transition-all hover:border-emerald/35 hover:bg-panel/70 hover:shadow-md cursor-pointer"
            >
              {/* Plate corner marks */}
              <span className="absolute -top-px -left-px h-2.5 w-2.5 border-t border-l border-emerald/35 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -top-px -right-px h-2.5 w-2.5 border-t border-r border-emerald/35 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-px -left-px h-2.5 w-2.5 border-b border-l border-emerald/35 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-px -right-px h-2.5 w-2.5 border-b border-r border-emerald/35 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Plate header */}
              <div className="flex items-start justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md border border-border/60 bg-panel-elevated/50 shrink-0">
                    <span className="font-mono text-[9px] tracking-[0.1em] text-muted">
                      {m.id}
                    </span>
                  </div>
                  <div>
                    <div className="font-mono text-[8px] tracking-[0.22em] text-muted uppercase">
                      PLATE {m.id}
                    </div>
                    <div className="mt-0.5 font-display text-xl font-light tracking-wide text-soft-white group-hover:text-emerald transition-colors leading-tight">
                      {m.title}
                    </div>
                  </div>
                </div>

                <div className={`flex items-center gap-1.5 shrink-0 mt-1 ${statusMeta[m.status].text}`}>
                  <span className={`inline-block w-1.5 h-1.5 rounded-full ${statusMeta[m.status].dot}`} />
                  <span className="font-mono text-[8px] tracking-[0.18em] uppercase">
                    {STATUS_LABEL[m.status]}
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-muted font-sans line-clamp-2 mb-4">
                {m.brief}
              </p>

              {/* Plate tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {m.technologies.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border/60 bg-panel-elevated/35 px-2 py-0.5 font-mono text-[7.5px] tracking-[0.12em] text-dim uppercase"
                  >
                    {t}
                  </span>
                ))}
                {m.technologies.length > 3 && (
                  <span className="font-mono text-[7.5px] tracking-[0.12em] text-dim self-center">
                    +{m.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Read prompt */}
              <div className="mt-4 flex items-center gap-1.5 text-emerald opacity-0 group-hover:opacity-100 transition-opacity">
                <StarMark size={8} color="#B4573D" />
                <span className="font-mono text-[8px] tracking-[0.18em] uppercase">Read plate →</span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-4 font-mono text-[8.5px] tracking-[0.2em] text-dim uppercase"
        >
          <HandDrawnDivider className="flex-1 text-border" />
          <span className="shrink-0">{MISSIONS.length} plates in this chapter</span>
          <HandDrawnDivider className="flex-1 text-border" />
        </motion.div>
      </div>

      <MissionModal mission={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
