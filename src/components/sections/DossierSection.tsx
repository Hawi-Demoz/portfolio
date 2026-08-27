import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { ENGINEER } from '../../data/content'

export function DossierSection() {
  return (
    <section id="dossier" className="relative section-pad pb-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-3">
            08 / ARCHIVE
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Resume
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Download a PDF copy of my technical experience and credentials.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-start gap-6 border-t border-b border-border/60 py-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-start gap-4">
            <span className="rounded border border-border p-3 text-emerald">
              <FileText size={22} />
            </span>
            <div>
              <h3 className="font-display text-2xl font-light tracking-wide text-soft-white">
                {ENGINEER.name} — Resume
              </h3>
              <p className="mt-1 font-mono text-[10px] tracking-[0.14em] text-muted">
                PDF SPEC · {ENGINEER.clearance.toUpperCase()}
              </p>
            </div>
          </div>

          <a
            href={ENGINEER.links.resume}
            className="btn-transmit inline-flex items-center gap-2 rounded-sm border border-emerald/40 bg-emerald/10 px-6 py-3 font-mono text-[9px] tracking-[0.25em] text-emerald cursor-pointer"
          >
            <Download size={12} /> [ DOWNLOAD RESUME ]
          </a>
        </motion.div>

        <p className="mt-20 text-center font-mono text-[9px] tracking-[0.28em] text-dim uppercase">
          HAWI · INTEL LINK SECURED · SYSTEM TERMINATED
        </p>
      </div>
    </section>
  )
}
