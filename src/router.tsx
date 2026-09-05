import { useEffect, useState } from 'react'
import type { SectionId } from './data/content'

export const ROUTES: { id: Exclude<SectionId, 'command'>; path: string }[] = [
  { id: 'terminal', path: '/terminal' },
  { id: 'engineer', path: '/about' },
  { id: 'mission', path: '/expertise' },
  { id: 'projects', path: '/projects' },
  { id: 'systems', path: '/skills' },
  { id: 'research', path: '/hobbies' },
  { id: 'contact', path: '/contact' },
  { id: 'dossier', path: '/resume' },
]

export function pathForSection(id: SectionId) {
  return id === 'command' ? '/' : ROUTES.find((route) => route.id === id)?.path ?? '/'
}

export function sectionForPath(pathname: string): SectionId {
  return ROUTES.find((route) => route.path === pathname)?.id ?? 'command'
}

export function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return pathname
}
