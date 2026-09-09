import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { ENGINEER } from '../../data/content'
import { HandDrawnDivider, StarMark } from '../BookDecorations'

export function DossierSection() {
  return (
    <section id="dossier" className="relative section-pad section-texture-deep pb-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Resume header */}
          <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-3">
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.26em] text-muted">
              <StarMark size={9} color="#B4573D" />
              <span>RESUME // DOWNLOAD</span>
            </div>
            <div className="font-mono text-[9px] tracking-[0.22em] text-dim">
              PDF
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            Resume
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Education, projects, and experience, in one document.
          </p>
        </motion.div>

        <HandDrawnDivider className="my-8 text-emerald" />

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl border border-border/70 bg-panel/40 p-6 md:p-8"
        >
          {/* Corner marks */}
          <span className="absolute -top-px -left-px h-3 w-3 border-t border-l border-emerald/45 rounded-tl-xl" />
          <span className="absolute -top-px -right-px h-3 w-3 border-t border-r border-emerald/45 rounded-tr-xl" />
          <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-emerald/45 rounded-bl-xl" />
          <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-emerald/45 rounded-br-xl" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-lg border border-border/60 p-3 text-emerald bg-panel-elevated/30">
                <FileText size={22} />
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.22em] text-emerald uppercase mb-1">
                  § Resume Document
                </div>
                <h3 className="font-display text-2xl font-light tracking-wide text-soft-white">
                  {ENGINEER.name}
                </h3>
                <p className="mt-1 font-mono text-[9px] tracking-[0.16em] text-muted uppercase">
                  PDF Format · {ENGINEER.clearance}
                </p>
              </div>
            </div>

            <a
              href={ENGINEER.links.resume}
              download="Hawi-Demoz-Resume.pdf"
              className="btn-transmit inline-flex items-center gap-2.5 rounded-lg border border-emerald/50 bg-emerald/10 px-6 py-3.5 font-mono text-[9px] tracking-[0.22em] text-emerald cursor-pointer hover:bg-emerald/15 transition-all shrink-0"
            >
              <Download size={12} />
              [ DOWNLOAD RESUME ]
            </a>
          </div>
        </motion.div>

        {/* Closing mark */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <HandDrawnDivider className="mx-auto mb-8 text-border/50" />
          <div className="flex items-center justify-center gap-4 mb-4">
            <StarMark size={12} color="#C9C1B5" />
            <span className="font-mono text-[9px] tracking-[0.32em] text-dim uppercase">Thanks for visiting</span>
            <StarMark size={12} color="#C9C1B5" />
          </div>
          <p className="font-display text-xl italic text-soft-white/50">❦</p>
          <p className="mt-3 font-mono text-[8.5px] tracking-[0.3em] text-dim uppercase">
            Hawi Demoz · Portfolio · 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}
