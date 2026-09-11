import { motion } from 'framer-motion'
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
            label="EXPERTISE"
            title="WHAT I EXPLORE"
            subtitle="Three things I keep coming back to."
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
              num: '01',
              title: 'Software Development',
              body: (
                <>
                  I like building things with code, but the creative side pulls me in just as much. How something looks and feels matters to me as much as how it works.
                </>
              ),
            },
            {
              num: '02',
              title: 'Engineering',
              body: (
                <>
                  My background is in Electrical and Computer Engineering: embedded systems, wireless communication, signal processing. Still learning more about all of it, one project at a time.
                </>
              ),
            },
            {
              num: '03',
              title: 'Data & Intelligent Systems',
              body: (
                <>
                  Lately I&apos;ve been getting into data and AI. Mostly curious how they actually solve real problems, not just how they sound on paper.
                </>
              ),
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="space-y-4 md:border-l md:border-border/60 md:pl-6 md:first:border-none md:first:pl-0"
            >
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] text-emerald uppercase font-semibold">
                <span>{card.num}</span>
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

        <div className="mt-16 rounded-xl border border-border/70 bg-panel/35 p-6 md:p-8 relative">
          <div className="flex items-center gap-2 text-emerald text-[9px] font-mono tracking-[0.2em] uppercase mb-3">
            <StarMark size={11} color="#B4573D" />
            <span>My Approach</span>
          </div>
          <p className="font-display text-lg md:text-xl font-light italic leading-relaxed text-soft-white/90">
            I like getting my hands into different corners of tech : building, designing for the web, figuring out how the pieces fit together.
          </p>
        </div>
      </div>
    </section>
  )
}
