import { motion } from 'framer-motion'
import { ENGINEER } from '../../data/content'
import { ChapterHeader, HandDrawnDivider, StarMark } from '../BookDecorations'

export function MissionSection() {
  return (
    <section id="mission" className="relative section-pad section-texture-deep">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
        >
          <ChapterHeader
            chapter="01"
            title="THE PROLOGUE"
            page="P. 04–05"
            subtitle="Three areas of discipline and ongoing curiosity that define my engineering journey."
          />
          <h2 className="font-display text-4xl md:text-5xl font-light italic tracking-tight text-soft-white">
            What I Explore & Build
          </h2>
        </motion.div>

        <HandDrawnDivider className="my-8 text-emerald" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="grid gap-10 md:grid-cols-3 pt-4"
        >
          {[
            {
              num: '§ 01',
              title: 'Software Development',
              body: 'I develop web applications and software systems using Python, JavaScript, React, Flask, HTML, and CSS. I enjoy crafting practical interfaces with sensible logic and responsive, tactile interactions.',
            },
            {
              num: '§ 02',
              title: 'Engineering & Embedded',
              body: 'My engineering background spans embedded systems, wireless communications, and signal processing. I am passionate about how code translates to real hardware and signals in physical space.',
            },
            {
              num: '§ 03',
              title: 'Data & Intelligent Systems',
              body: 'I explore artificial intelligence, data analytics, and intelligent systems—investigating how data-driven techniques and algorithms can assist in solving real engineering problems.',
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="space-y-4 md:border-l md:border-border/60 md:pl-6 md:first:border-none md:first:pl-0"
            >
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-emerald uppercase font-semibold">
                <span>{card.num}</span>
                <span className="text-dim/60">·</span>
                <span>ENTRY 0{i + 1}</span>
              </div>
              <h3 className="font-display text-2xl font-light text-soft-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted font-sans">
                {card.body}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Editorial author note / inscription */}
        <div className="mt-16 rounded-xl border border-border/70 bg-panel/35 p-6 md:p-8 relative">
          <div className="flex items-center gap-2 text-emerald text-[9px] font-mono tracking-[0.2em] uppercase mb-3">
            <StarMark size={11} color="#B4573D" />
            <span>Author&apos;s Premise</span>
          </div>
          <p className="font-display text-lg md:text-xl font-light italic leading-relaxed text-soft-white/90">
            &ldquo;{ENGINEER.objective}&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
