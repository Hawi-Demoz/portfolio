import { AnimatePresence, motion } from 'framer-motion'
import { X, ExternalLink, GitBranch } from 'lucide-react'
import type { Mission } from '../data/content'
import { STATUS_LABEL } from '../data/content'

type Props = {
  mission: Mission | null
  onClose: () => void
}

export function MissionModal({ mission, onClose }: Props) {
  return (
    <AnimatePresence>
      {mission && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal
          aria-labelledby="mission-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-void/80 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="glass relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-md border border-border sm:rounded-sm"
          >
            <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-border-soft bg-panel/90 px-5 py-4 backdrop-blur-md">
              <div>
                <p className="font-plex text-[10px] tracking-[0.22em] text-dim">
                  {mission.code} · {STATUS_LABEL[mission.status]}
                </p>
                <h3
                  id="mission-title"
                  className="mt-1 font-display text-xl tracking-[0.08em] md:text-2xl"
                >
                  {mission.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded border border-border p-2 text-muted hover:border-soft-white/30 hover:text-soft-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-8 px-5 py-6">
              <section>
                <h4 className="eyebrow mb-2">Overview</h4>
                <p className="text-sm leading-relaxed text-soft-white/85">
                  {mission.brief}
                </p>
              </section>

              <section>
                <h4 className="eyebrow mb-3">Goals</h4>
                <ul className="space-y-2">
                  {mission.objectives.map((o) => (
                    <li
                      key={o}
                      className="flex gap-3 text-sm text-muted before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-emerald before:content-['']"
                    >
                      {o}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="eyebrow mb-3">Tools used</h4>
                <div className="flex flex-wrap gap-2">
                  {mission.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-border px-2.5 py-1 font-plex text-[10px] tracking-[0.14em] text-cyan/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="eyebrow mb-3">Challenges</h4>
                <ul className="space-y-2">
                  {mission.challenges.map((c) => (
                    <li key={c} className="text-sm text-muted">
                      ▸ {c}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="flex flex-wrap gap-3 pt-2">
                {mission.github && (
                  <a
                    href={mission.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-transmit inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 font-plex text-[10px] tracking-[0.18em] text-muted hover:text-soft-white"
                  >
                    <GitBranch size={14} /> GITHUB
                  </a>
                )}
                {mission.demo && (
                  <a
                    href={mission.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-transmit inline-flex items-center gap-2 rounded-sm border border-emerald/40 bg-emerald/10 px-4 py-2 font-plex text-[10px] tracking-[0.18em] text-emerald"
                  >
                    <ExternalLink size={14} /> LIVE DEMO
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
