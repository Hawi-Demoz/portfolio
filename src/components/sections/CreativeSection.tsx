import { motion } from 'framer-motion'
import { DESIGN_WORKS, ESSAYS, PHOTOGRAPHS, READING_NOTES } from '../../data/creative'
import { ChapterHeader, HandDrawnDivider, StarMark } from '../BookDecorations'

function WritingCategory() {
  return (
    <section aria-labelledby="writing-heading">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Category 01</p>
          <h3 id="writing-heading" className="mt-1 font-display text-3xl text-soft-white">Writing</h3>
        </div>
        <span className="font-mono text-[8px] tracking-[0.18em] text-dim uppercase">{ESSAYS.length} essays</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {ESSAYS.map((essay, index) => (
          <motion.article
            key={essay.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="book-plate flex h-full flex-col p-5"
          >
            <div className="flex items-center gap-2">
              <StarMark size={9} color="#B4573D" />
              <span className="font-mono text-[8px] tracking-[0.2em] text-emerald uppercase">Essay {String(index + 1).padStart(2, '0')}</span>
            </div>
            <h4 className="mt-5 font-display text-2xl leading-tight text-soft-white">{essay.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-muted">{essay.description}</p>
            {essay.venue && <p className="mt-4 font-mono text-[8px] leading-relaxed tracking-[0.08em] text-dim">{essay.venue}</p>}
            {essay.link && (
              <a
                href={essay.link}
                target="_blank"
                rel="noreferrer"
                className="btn-transmit mt-6 inline-flex w-fit items-center gap-2 border-b border-emerald/40 pb-1 font-mono text-[8px] tracking-[0.18em] text-emerald uppercase hover:text-soft-white"
              >
                Read the piece <span aria-hidden="true">→</span>
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function ReadingCategory() {
  return (
    <section aria-labelledby="reading-heading">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Category 02</p>
          <h3 id="reading-heading" className="mt-1 font-display text-3xl text-soft-white">Reading</h3>
        </div>
        <span className="font-mono text-[8px] tracking-[0.18em] text-dim uppercase">{READING_NOTES.length} notes</span>
      </div>
      <div className="space-y-0 border-y border-border/50">
        {READING_NOTES.map((note) => (
          <article key={note.title} className="grid gap-3 border-b border-border/50 py-5 last:border-b-0 md:grid-cols-[180px_1fr]">
            <span className="font-mono text-[8px] tracking-[0.16em] text-emerald uppercase">{note.status}</span>
            <div>
              <h4 className="font-display text-2xl text-soft-white">{note.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{note.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function DesignCategory() {
  return (
    <section aria-labelledby="design-heading">
      <div className="mb-5">
        <p className="eyebrow">Category 03</p>
        <h3 id="design-heading" className="mt-1 font-display text-3xl text-soft-white">Design</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {DESIGN_WORKS.map((work) => (
          <article key={work.title} className="book-plate overflow-hidden">
            {work.image && <img src={work.image} alt="" className="aspect-[4/3] w-full object-cover" />}
            <div className="p-5">
              <h4 className="font-display text-2xl text-soft-white">{work.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{work.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PhotographyCategory() {
  return (
    <section aria-labelledby="photography-heading">
      <div className="mb-5">
        <p className="eyebrow">Category 04</p>
        <h3 id="photography-heading" className="mt-1 font-display text-3xl text-soft-white">Photography</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PHOTOGRAPHS.map((photo) => (
          <figure key={photo.title} className="book-plate overflow-hidden">
            <img src={photo.image} alt={photo.description} className="aspect-[4/5] w-full object-cover" />
            <figcaption className="p-4 font-display text-xl text-soft-white">{photo.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export function CreativeSection() {
  const hasContent = ESSAYS.length > 0 || READING_NOTES.length > 0 || DESIGN_WORKS.length > 0 || PHOTOGRAPHS.length > 0

  return (
    <section id="research" className="relative section-pad section-texture-deep">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <ChapterHeader
            label="MAKING"
            title="WRITING & MAKING"
            subtitle="Work made outside the engineering projects."
          />
          <h2 className="font-display text-4xl font-light italic tracking-tight text-soft-white md:text-5xl">Writing & Making</h2>
        </motion.div>

        {hasContent && <HandDrawnDivider className="my-8 text-emerald" />}

        <div className="space-y-12">
          {ESSAYS.length > 0 && <WritingCategory />}
          {READING_NOTES.length > 0 && <ReadingCategory />}
          {DESIGN_WORKS.length > 0 && <DesignCategory />}
          {PHOTOGRAPHS.length > 0 && <PhotographyCategory />}
        </div>
      </div>
    </section>
  )
}