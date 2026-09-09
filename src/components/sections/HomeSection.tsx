import { motion } from 'framer-motion'
import heroIllustration from '../../assets/hero-illustration.jpg'
import { CurlyUnderline, StarMark } from '../BookDecorations'

export function HomeSection() {
  return (
    <section
      id="command"
      className="relative flex min-h-screen flex-col justify-center section-pad pt-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-6xl"
      >
        <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-3 text-muted">
          <div className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.28em]">
            <span className="text-emerald">✦</span>
            <span>HOME // PORTFOLIO</span>
          </div>
          <div className="font-mono text-[9px] tracking-[0.24em] text-dim">
            SELECTED WORK
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald font-semibold">
              illustrated engineering portfolio
            </p>

            <div className="relative inline-block">
              <h1 className="font-display text-[clamp(4.5rem,11vw,9.5rem)] leading-[0.78] tracking-[-0.05em] text-soft-white select-none">
                HELLO!
              </h1>
              <CurlyUnderline className="absolute -bottom-3 left-2 w-36 text-emerald" />
            </div>

            <h2 className="mt-8 max-w-xl font-sans text-2xl font-medium leading-snug text-soft-white md:text-4xl">
              I&apos;m Hawi, an{' '}
              <span className="font-sans text-[1.1em] font-bold text-soft-white">
                Electrical & Computer Engineer
              </span>{' '}
              and{' '}
              <span className="font-sans text-[1.1em] font-bold text-soft-white">
                Software Developer
              </span>
              .
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Welcome to my portfolio : )
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-transmit rounded-full border border-emerald/50 bg-emerald/10 px-7 py-3.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-emerald transition-all hover:border-emerald hover:bg-emerald/15 shadow-sm"
              >
                [ VIEW PROJECTS → ]
              </a>
              <a
                href="#engineer"
                className="btn-transmit rounded-full border border-border bg-white/40 px-6 py-3.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-soft-white transition-all hover:border-soft-white/40 hover:bg-white/60"
              >
                [ ABOUT HAWI ]
              </a>
            </div>

            {/* Editorial marginal note */}
            <div className="mt-12 flex items-center gap-3 border-t border-border/40 pt-4 text-dim font-mono text-[8.5px] tracking-[0.2em] uppercase">
              <StarMark size={10} color="#B4573D" />
              <span>Addis Ababa / Global · Engineering & Software</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 18, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="hero-art relative w-full max-w-[540px]">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hero-badge hero-badge-top !px-3 !py-1.5"
              >
                study no. 01
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="hero-badge hero-badge-right !px-3 !py-1.5"
              >
                illustrated
              </motion.div>

              <motion.div
                animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.15, 1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                className="floating-star star-one"
              >
                ✦
              </motion.div>

              <motion.div
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="floating-star star-two"
              >
                ✦
              </motion.div>

              <div className="illustration-shell">
                <img
                  src={heroIllustration}
                  alt="Original 2D illustration of Hawi in a creative, quirky, and playful pose"
                  className="hero-img w-full h-auto rounded-[24px] object-cover"
                  loading="eager"
                  width={560}
                  height={747}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
