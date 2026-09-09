import { motion } from 'framer-motion'
import { NAV_MODULES, type SectionId } from '../data/content'

type Props = {
  active: SectionId
  onNavigate: (id: SectionId) => void
  open: boolean
  onToggle: () => void
}

export function Navigation({ active, onNavigate, open, onToggle }: Props) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-void/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <button
            type="button"
            onClick={() => onNavigate('command')}
            className="group flex items-center gap-3 text-left cursor-pointer"
            aria-label="Return to home"
          >
            <div>
              <div className="font-mono text-[10.5px] tracking-[0.24em] font-semibold text-soft-white group-hover:text-emerald transition-colors flex items-center gap-2">
                <span>HAWI DEMOZ</span>
                <span className="text-emerald text-[9px]">✦</span>
                <span className="text-muted text-[8.5px] font-normal tracking-[0.2em]">PORTFOLIO</span>
              </div>
            </div>
          </button>

          <nav
            className="hidden items-center gap-2 lg:flex"
            aria-label="Portfolio sections"
          >
            {NAV_MODULES.map((m) => {
              const isActive = active === m.id
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => onNavigate(m.id)}
                  className={`relative px-3 py-2 font-mono text-[9px] tracking-[0.25em] uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'text-emerald'
                      : 'text-dim hover:text-soft-white'
                  }`}
                >
                  {m.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 bottom-0 h-[1.5px] bg-emerald"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          <button
            type="button"
            className="flex flex-col gap-1.5 rounded border border-border px-2.5 py-2 lg:hidden"
            onClick={onToggle}
            aria-expanded={open}
            aria-label="Toggle module menu"
          >
            <span
              className={`block h-px w-5 bg-soft-white transition ${open ? 'translate-y-[5px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-soft-white transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-5 bg-soft-white transition ${open ? '-translate-y-[5px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="fixed inset-x-0 top-[57px] z-50 border-b border-border bg-graphite/95 backdrop-blur-xl lg:hidden"
        >
          <div className="grid grid-cols-2 gap-1 p-3">
            {NAV_MODULES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  onNavigate(m.id)
                  onToggle()
                }}
                className={`rounded border px-3 py-3 text-left transition cursor-pointer ${
                  active === m.id
                    ? 'border-emerald/40 bg-emerald/5 text-emerald'
                    : 'border-border/80 text-muted hover:border-border hover:text-soft-white'
                }`}
              >
                <div className="font-mono text-[8px] tracking-[0.25em] text-dim">
                  {m.cmd}
                </div>
                <div className="mt-1 font-sans text-xs tracking-[0.15em] font-medium uppercase">
                  {m.label}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}
