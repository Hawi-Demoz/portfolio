import { useCallback, useEffect, useState, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BootSequence } from './components/BootSequence'
import { Starfield } from './components/Starfield'
import { Navigation } from './components/Navigation'
import { StatusPanel } from './components/StatusPanel'
import { HomeSection } from './components/sections/HomeSection'
import { MissionSection } from './components/sections/MissionSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ResearchSection } from './components/sections/ResearchSection'
import { TerminalSection } from './components/sections/TerminalSection'
import { ContactSection } from './components/sections/ContactSection'
import { DossierSection } from './components/sections/DossierSection'
import { useKonami } from './hooks/useKonami'
import { useDeckReveal } from './hooks/useDeckReveal'
import { NAV_MODULES, type SectionId } from './data/content'

const Scene3D = lazy(() =>
  import('./components/Scene3D').then((m) => ({ default: m.Scene3D })),
)

function sectionFromScroll(): SectionId {
  const ids = NAV_MODULES.map((m) => m.id)
  let current: SectionId = 'command'
  for (const id of ids) {
    const el = document.getElementById(id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= window.innerHeight * 0.35) current = id
  }
  return current
}

export default function App() {
  const [booted, setBooted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<SectionId>('command')
  const [secret, setSecret] = useState<string | null>(null)

  const onBootComplete = useCallback(() => setBooted(true), [])

  useKonami(() => {
    setSecret('Secret code unlocked. Nice find.')
    window.setTimeout(() => setSecret(null), 4200)
  })

  const mainRef = useDeckReveal(booted)

  useEffect(() => {
    if (!booted) return
    const onScroll = () => setActive(sectionFromScroll())
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [booted])

  const navigate = (id: SectionId) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence>
        {!booted && <BootSequence onComplete={onBootComplete} />}
      </AnimatePresence>

      <div className="noise-overlay" aria-hidden />
      <Starfield />

      {booted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <Navigation
            active={active}
            onNavigate={navigate}
            open={menuOpen}
            onToggle={() => setMenuOpen((v) => !v)}
          />
          <StatusPanel active={booted} />

          <main ref={mainRef}>
            <div className="relative min-h-screen overflow-hidden">
              <Suspense fallback={null}>
                <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] xl:block">
                  <Scene3D />
                </div>
              </Suspense>
              <HomeSection />
            </div>
            <MissionSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ResearchSection />
            <TerminalSection />
            <ContactSection />
            <DossierSection />
          </main>
        </motion.div>
      )}

      <AnimatePresence>
        {secret && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 left-1/2 z-[90] w-[min(92vw,420px)] -translate-x-1/2 rounded-sm border border-emerald/40 bg-panel/95 px-4 py-3 text-center font-plex text-[11px] tracking-[0.14em] text-emerald backdrop-blur-md"
            role="status"
          >
            {secret}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
