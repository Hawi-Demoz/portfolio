import { motion } from 'framer-motion'
import { NAV_MODULES, type SectionId } from '../data/content'

type Props = { onNavigate: (id: SectionId) => void }

const teasers: Record<Exclude<SectionId, 'command'>, string> = {
  mission: 'Three things I keep coming back to.',
  engineer: 'A brief introduction to the engineer and developer behind the work.',
  systems: 'The tools and areas I actually use to get things done.',
  projects: 'A few projects I\'ve built along the way.',
  research: 'Stuff I\'m reading into and thinking about right now.',
  terminal: 'Explore the portfolio through an interactive terminal.',
  contact: 'Say hi, or tell me about something you\'re working on.',
  dossier: 'Education, projects, and experience, in one document.',
}

export function Schematic({ onNavigate }: Props) {
  const entries = NAV_MODULES.filter((module) => module.id !== 'command')

  return (
    <section className="relative min-h-screen section-pad pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-5 flex items-center justify-between border-b border-border/50 pb-3 text-muted">
            <div className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.28em]"><span className="text-emerald">✦</span><span>HOME // PORTFOLIO</span></div>
            <div className="font-mono text-[9px] tracking-[0.24em] text-dim">SCHEMATIC</div>
          </div>
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald font-semibold">SCHEMATIC</p>
            <h1 className="font-display text-6xl font-light italic tracking-tight text-soft-white md:text-8xl">A map of the work</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">Welcome to my portfolio : )</p>
          </div>
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2">
          {entries.map((entry, index) => (
            <motion.button key={entry.id} type="button" onClick={() => onNavigate(entry.id)} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06, duration: 0.45 }} className="group relative rounded-xl border border-border/70 bg-panel/35 p-5 text-left transition-all hover:border-emerald/40 hover:bg-panel/65 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.22em] text-emerald uppercase"><span>{String(index + 1).padStart(2, '0')}</span><span className="text-dim/60">/</span><span>{entry.label}</span></div>
                <span className="font-mono text-[9px] tracking-[0.18em] text-dim group-hover:text-emerald transition-colors">{entry.cmd}</span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-light text-soft-white group-hover:text-emerald transition-colors">{entry.label}</h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{teasers[entry.id as Exclude<SectionId, 'command'>]}</p>
              <div className="mt-6 font-mono text-[8px] tracking-[0.2em] text-dim uppercase group-hover:text-emerald transition-colors">[ OPEN {entry.label} ]</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
