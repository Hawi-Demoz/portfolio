import { motion } from 'framer-motion'
import { useMissionStatus } from '../hooks/useMissionStatus'

type Props = {
  active: boolean
}

function Row({
  label,
  value,
  accent,
}: {
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border-soft/80 py-1.5 last:border-0">
      <span className="font-plex text-[9px] tracking-[0.2em] text-dim">
        {label}
      </span>
      <span
        className={`font-mono text-[11px] tracking-wide ${
          accent ? 'text-emerald' : 'text-soft-white/90'
        }`}
      >
        {value}
      </span>
    </div>
  )
}

export function StatusPanel({ active }: Props) {
  const s = useMissionStatus(active)

  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass pointer-events-auto fixed right-4 top-20 z-40 hidden w-[220px] rounded-sm p-3 xl:block"
      aria-label="System status"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="eyebrow text-emerald/70">SYSTEM STATUS</span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald status-dot" />
      </div>
      <Row label="ENGINEER" value={s.engineer} accent />
      <Row label="SIGNAL" value={`${s.signal.toFixed(0)}%`} />
      <Row label="SATELLITE LINK" value={s.satellite} accent={s.satellite === 'CONNECTED'} />
      <Row label="CPU" value={`${s.cpu.toFixed(0)}%`} />
      <Row label="MEMORY" value={`${s.memory.toFixed(0)}%`} />
      <Row label="UPTIME" value={`${s.uptimeHours} HOURS`} />
      <Row label="LOCATION" value={s.location} />
      <Row label="MISSION" value={s.mission} accent />
    </motion.aside>
  )
}
