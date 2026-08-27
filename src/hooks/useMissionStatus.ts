import { useCallback, useEffect, useState } from 'react'

type Status = {
  engineer: 'ONLINE' | 'STANDBY'
  signal: number
  satellite: 'CONNECTED' | 'SYNCING'
  cpu: number
  memory: number
  uptimeHours: number
  location: string
  mission: 'ACTIVE' | 'IDLE'
}

const initial: Status = {
  engineer: 'ONLINE',
  signal: 98,
  satellite: 'CONNECTED',
  cpu: 41,
  memory: 62,
  uptimeHours: 1024,
  location: 'EARTH',
  mission: 'ACTIVE',
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export function useMissionStatus(active: boolean) {
  const [status, setStatus] = useState<Status>(initial)

  const tick = useCallback(() => {
    setStatus((prev) => ({
      ...prev,
      signal: clamp(prev.signal + (Math.random() * 2 - 1), 94, 99),
      cpu: clamp(prev.cpu + (Math.random() * 6 - 3), 28, 68),
      memory: clamp(prev.memory + (Math.random() * 4 - 2), 48, 78),
      satellite: Math.random() > 0.92 ? 'SYNCING' : 'CONNECTED',
      uptimeHours: prev.uptimeHours + (Math.random() > 0.7 ? 1 : 0),
    }))
  }, [])

  useEffect(() => {
    if (!active) return
    const id = window.setInterval(tick, 2400)
    return () => window.clearInterval(id)
  }, [active, tick])

  return status
}
