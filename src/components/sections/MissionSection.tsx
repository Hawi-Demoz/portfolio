import { motion } from 'framer-motion'
import { ENGINEER } from '../../data/content'

export function MissionSection() {
  return (
    <section id="mission" className="relative section-pad">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald mb-3">
            01 / DIRECTIVE
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            What I do
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Three key specializations that define my technical approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-12 grid gap-8 md:grid-cols-3 border-t border-border/60 pt-8"
        >
          {[
            {
              title: 'HARDWARE',
              body: 'I write firmware and low-level software that runs on embedded devices — careful, reliable, and optimized for limited hardware resources.',
            },
            {
              title: 'INTELLIGENCE',
              body: 'I integrate artificial intelligence and machine learning models to help products analyze raw sensor data and execute smart decisions.',
            },
            {
              title: 'INTERFACE',
              body: 'I design and implement responsive, high-performance web applications with clean typography and precise motion details.',
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="space-y-4 md:border-l md:border-border/60 md:pl-6 md:first:border-none md:first:pl-0"
            >
              <div className="font-mono text-[9px] tracking-[0.25em] text-muted uppercase">
                [ SPEC. 0{i + 1} // {card.title} ]
              </div>
              <h3 className="font-display text-2xl font-light text-soft-white">
                {card.title.charAt(0) + card.title.slice(1).toLowerCase()}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {card.body}
              </p>
            </div>
          ))}
        </motion.div>

        <p className="mt-16 max-w-3xl border-l-2 border-emerald pl-6 font-display text-lg md:text-xl font-light italic leading-relaxed text-soft-white/80">
          {ENGINEER.objective}
        </p>
      </div>
    </section>
  )
}
