import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { BOOT_LINES } from '../data/content'

type Props = {
  onComplete: () => void
}

export function BootSequence({ onComplete }: Props) {
  const done = useRef(false)

  useEffect(() => {
    const total = Math.min(2800, 320 + BOOT_LINES.length * 220)
    const t = window.setTimeout(() => {
      if (!done.current) {
        done.current = true
        onComplete()
      }
    }, total)
    return () => window.clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
      role="status"
      aria-live="polite"
      aria-label="Establishing mission link"
    >
      <div className="w-full max-w-xl px-6 font-mono text-sm text-soft-white/90">
        <div className="mb-8 flex items-center gap-2 text-emerald/80">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald status-dot" />
          <span className="eyebrow text-emerald/70">HAWI_OS // BOOTLOADER</span>
        </div>

        <ul className="space-y-2.5">
          {BOOT_LINES.map((line, i) => {
            const isFinal = i === BOOT_LINES.length - 1
            return (
              <motion.li
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.12 + i * 0.22,
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  isFinal
                    ? 'pt-3 font-display text-base tracking-[0.18em] text-emerald'
                    : 'text-muted'
                }
              >
                <span className="text-dim mr-2">{isFinal ? '▸' : '>'}</span>
                {line}
                {!isFinal && i === BOOT_LINES.length - 2 && (
                  <span className="cursor-blink ml-1 text-emerald">▌</span>
                )}
              </motion.li>
            )
          })}
        </ul>

        <motion.div
          className="mt-10 h-px w-full overflow-hidden bg-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-emerald/70"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
