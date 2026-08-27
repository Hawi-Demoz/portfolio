import { useState } from 'react'
import { motion } from 'framer-motion'
import { Folder } from 'lucide-react'
import { MISSIONS, STATUS_LABEL, type Mission } from '../../data/content'
import { MissionModal } from '../MissionModal'

const statusColor = {
  ACTIVE: 'text-emerald',
  COMPLETE: 'text-cyan',
  STANDBY: 'text-amber',
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
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-3">
            04 / ARCHIVE
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Click a project to read a short overview.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {MISSIONS.map((m, i) => (
            <motion.button
              key={m.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => setSelected(m)}
              className="group rounded-sm border border-border/80 bg-panel/40 p-5 text-left transition hover:border-emerald/35 hover:bg-panel/70 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="rounded border border-border p-2 text-dim transition group-hover:border-emerald/30 group-hover:text-emerald">
                     <Folder size={16} />
                  </span>
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] text-muted">
                      PROJECT {m.id}
                    </div>
                    <div className="mt-1 font-display text-xl font-light tracking-wide text-soft-white group-hover:text-emerald transition-colors">
                      {m.title}
                    </div>
                  </div>
                </div>
                <span
                  className={`font-mono text-[9px] tracking-[0.18em] uppercase ${statusColor[m.status]}`}
                >
                  {STATUS_LABEL[m.status]}
                </span>
              </div>
              <p className="mt-4 line-clamp-2 text-xs leading-relaxed text-muted font-sans">
                {m.brief}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <MissionModal mission={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
