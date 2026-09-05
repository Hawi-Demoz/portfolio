import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BootSequence } from './components/BootSequence'
import { Navigation } from './components/Navigation'
import { Schematic } from './components/Schematic'
import { SectionPage } from './components/SectionPage'
import { Starfield } from './components/Starfield'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { DossierSection } from './components/sections/DossierSection'
import { MissionSection } from './components/sections/MissionSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ResearchSection } from './components/sections/ResearchSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { TerminalSection } from './components/sections/TerminalSection'
import { useKonami } from './hooks/useKonami'
import { pathForSection, sectionForPath, usePathname } from './router'
import type { SectionId } from './data/content'

function SectionContent({ id, onNavigate }: { id: SectionId; onNavigate: (id: SectionId) => void }) {
  if (id === 'command') return <Schematic onNavigate={onNavigate} />
  const content = {
    mission: <MissionSection />,
    engineer: <AboutSection />,
    systems: <SkillsSection />,
    projects: <ProjectsSection />,
    research: <ResearchSection />,
    terminal: <TerminalSection />,
    contact: <ContactSection />,
    dossier: <DossierSection />,
  }[id]
  return <SectionPage id={id} onNavigate={onNavigate}>{content}</SectionPage>
}

export default function App() {
  const pathname = usePathname()
  const active = sectionForPath(pathname)
  const [booted, setBooted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [secret, setSecret] = useState<string | null>(null)
  const onBootComplete = useCallback(() => setBooted(true), [])

  useKonami(() => {
    setSecret('Secret code unlocked. Nice find.')
    window.setTimeout(() => setSecret(null), 4200)
  })

  const navigate = (id: SectionId) => {
    const path = pathForSection(id)
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence>{!booted && <BootSequence onComplete={onBootComplete} />}</AnimatePresence>
      <div className="noise-overlay" aria-hidden />
      <Starfield />
      {booted && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} className="relative z-10">
          <Navigation active={active} onNavigate={navigate} open={menuOpen} onToggle={() => setMenuOpen((value) => !value)} />
          <main><SectionContent id={active} onNavigate={navigate} /></main>
        </motion.div>
      )}
      <AnimatePresence>
        {secret && <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} className="fixed bottom-6 left-1/2 z-[90] w-[min(92vw,420px)] -translate-x-1/2 rounded-sm border border-emerald/40 bg-panel/95 px-4 py-3 text-center font-plex text-[11px] tracking-[0.14em] text-emerald backdrop-blur-md" role="status">{secret}</motion.div>}
      </AnimatePresence>
    </>
  )
}
