import { useCallback, useEffect, useRef } from 'react'

const SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonami(onUnlock: () => void) {
  const index = useRef(0)
  const unlocked = useRef(false)

  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (unlocked.current) return
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      const expected = SEQUENCE[index.current]
      if (key === expected || (expected.length === 1 && key === expected)) {
        index.current += 1
        if (index.current === SEQUENCE.length) {
          unlocked.current = true
          onUnlock()
          index.current = 0
        }
      } else {
        index.current = key === SEQUENCE[0] ? 1 : 0
      }
    },
    [onUnlock],
  )

  useEffect(() => {
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handler])
}
