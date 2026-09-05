import type { ReactNode } from 'react'

export function RoutedLink({
  href,
  onNavigate,
  children,
  className,
}: {
  href: string
  onNavigate: () => void
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        event.preventDefault()
        onNavigate()
      }}
    >
      {children}
    </a>
  )
}
