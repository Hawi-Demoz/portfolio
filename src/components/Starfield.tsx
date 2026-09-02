import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  z: number
  size: number
  twinkle: number
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  a: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    let stars: Star[] = []
    let particles: Particle[] = []
    let t = 0
    let mx = 0.5
    let my = 0.5
    let tmx = 0.5
    let tmy = 0.5

    const constellations: [number, number][][] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.floor((w * h) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        size: Math.random() * 1.4 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      }))

      particles = Array.from({ length: 28 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        a: Math.random() * 0.35 + 0.1,
      }))

      constellations.length = 0
      for (let i = 0; i < 5; i++) {
        const cx = Math.random() * w
        const cy = Math.random() * h
        const pts: [number, number][] = []
        let px = cx
        let py = cy
        const n = 3 + Math.floor(Math.random() * 3)
        for (let j = 0; j < n; j++) {
          px += (Math.random() - 0.5) * 120
          py += (Math.random() - 0.5) * 90
          pts.push([px, py])
        }
        constellations.push(pts)
      }
    }

    const onMove = (e: PointerEvent) => {
      tmx = e.clientX / w
      tmy = e.clientY / h
    }

    const draw = () => {
      t += 0.004
      mx += (tmx - mx) * 0.02
      my += (tmy - my) * 0.02
      const px = (mx - 0.5) * 18
      const py = (my - 0.5) * 12

      ctx.clearRect(0, 0, w, h)

      const g = ctx.createRadialGradient(
        w * 0.5 + px,
        h * 0.35 + py,
        0,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.75,
      )
      g.addColorStop(0, 'rgba(247, 243, 237, 0.65)')
      g.addColorStop(0.45, 'rgba(231, 224, 212, 0.35)')
      g.addColorStop(1, 'rgba(231, 224, 212, 0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // constellation lines
      ctx.strokeStyle = 'rgba(201, 193, 181, 0.25)'
      ctx.lineWidth = 1
      for (const pts of constellations) {
        ctx.beginPath()
        pts.forEach(([x, y], i) => {
          const dx = x + px * 0.4
          const dy = y + py * 0.4
          if (i === 0) ctx.moveTo(dx, dy)
          else ctx.lineTo(dx, dy)
        })
        ctx.stroke()
        for (const [x, y] of pts) {
          ctx.beginPath()
          ctx.fillStyle = 'rgba(180, 87, 61, 0.25)'
          ctx.arc(x + px * 0.4, y + py * 0.4, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // stars
      for (const s of stars) {
        const drift = t * (0.15 + s.z * 0.35)
        const x = ((s.x + drift * 8 + px * s.z) % w + w) % w
        const y = ((s.y + drift * 2 + py * s.z) % h + h) % h
        const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 2 + s.twinkle))
        ctx.beginPath()
        ctx.fillStyle = `rgba(104, 100, 93, ${0.08 + tw * 0.18 * s.z})`
        ctx.arc(x, y, s.size * (0.5 + s.z), 0, Math.PI * 2)
        ctx.fill()
      }

      // particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.fillStyle = `rgba(104, 100, 93, ${p.a * 0.3})`
        ctx.fillRect(p.x, p.y, 1.5, 1.5)
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  )
}
