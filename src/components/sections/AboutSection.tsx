import { motion } from 'framer-motion'
import { ENGINEER } from '../../data/content'

const fields = [
  { label: 'Name', value: ENGINEER.name },
  { label: 'Role', value: ENGINEER.role },
  { label: 'Field', value: ENGINEER.division },
  {
    label: 'Focus areas',
    value: ENGINEER.specializations.join(' · '),
  },
  { label: 'Current project', value: ENGINEER.currentMission },
  { label: 'Availability', value: ENGINEER.clearance },
]

export function AboutSection() {
  return (
    <section id="engineer" className="relative section-pad">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-3">
            02 / PERSONNEL
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            About Hawi
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            A profile tracking my engineering background and active focus areas.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div className="border-t border-border/60 divide-y divide-border/60">
            {fields.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="grid grid-cols-[120px_1fr] gap-4 py-4 pr-4"
              >
                <span className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase self-start mt-1">
                  {f.label}
                </span>
                <span className="font-sans text-sm text-soft-white/90 leading-relaxed">
                  {f.value}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 md:border-l md:border-border/60 md:pl-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-4">
                SYSTEM STATUS
              </p>
              <div className="space-y-3 font-mono text-[10px] tracking-wider text-muted">
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span>SYSTEM_ID</span>
                  <span className="text-soft-white">HAWI-OS</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span>DISPATCH_STATUS</span>
                  <span className="text-emerald">ACTIVE // AVAILABLE</span>
                </div>
                <div className="flex justify-between">
                  <span>COORDINATES</span>
                  <span className="text-soft-white">EARTH · REMOTE</span>
                </div>
              </div>
            </div>

            <div className="h-28 rounded-sm border border-border bg-panel-elevated/40 p-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-dim mb-3">
                FREQUENCY SIGNAL UPLINK
              </p>
              <svg viewBox="0 0 200 60" className="h-12 w-full" aria-hidden>
                <polyline
                  fill="none"
                  stroke="#B4573D"
                  strokeWidth="1.2"
                  opacity="0.8"
                  points="0,40 10,38 20,42 30,20 40,35 50,10 60,30 70,28 80,45 90,18 100,32 110,25 120,40 130,15 140,28 150,22 160,38 170,30 180,35 190,28 200,33"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
