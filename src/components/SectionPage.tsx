import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { NAV_MODULES, type SectionId } from '../data/content'
import { pathForSection, ROUTES } from '../router'
import { RoutedLink } from './RoutedLink'

type Props = {
  id: Exclude<SectionId, 'command'>
  children: ReactNode
  onNavigate: (id: SectionId) => void
}

export function SectionPage({ id, children, onNavigate }: Props) {
  const index = ROUTES.findIndex((route) => route.id === id)
  const previous = ROUTES[index - 1]
  const next = ROUTES[index + 1]
  const label = NAV_MODULES.find((module) => module.id === id)?.label ?? id

  return (
    <div className="relative z-10 min-h-screen pt-16">
      {children}
      <motion.nav
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-[clamp(1.25rem,5vw,3.5rem)] pb-20 pt-4 font-mono text-[9px] tracking-[0.2em] uppercase"
        aria-label={`${label} page navigation`}
      >
        <RoutedLink href="/" onNavigate={() => onNavigate('command')} className="text-emerald transition-colors hover:text-soft-white">
          [ ← BACK TO SCHEMATIC ]
        </RoutedLink>
        <div className="flex items-center gap-5 text-dim">
          {previous ? (
            <RoutedLink href={pathForSection(previous.id)} onNavigate={() => onNavigate(previous.id)} className="transition-colors hover:text-soft-white">
              [ ← {NAV_MODULES.find((module) => module.id === previous.id)?.label} ]
            </RoutedLink>
          ) : null}
          {next ? (
            <RoutedLink href={pathForSection(next.id)} onNavigate={() => onNavigate(next.id)} className="transition-colors hover:text-soft-white">
              [ {NAV_MODULES.find((module) => module.id === next.id)?.label} → ]
            </RoutedLink>
          ) : null}
        </div>
      </motion.nav>
    </div>
  )
}
