import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Subtle deck-reveal motion for section roots (skips command deck). */
export function useDeckReveal(enabled: boolean) {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!enabled) return
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>('section[id]:not(#command)')
        .forEach((section) => {
          gsap.fromTo(
            section,
            { y: 28, autoAlpha: 0.35 },
            {
              y: 0,
              autoAlpha: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 88%',
                end: 'top 55%',
                scrub: 0.6,
              },
            },
          )
        })
    }, rootRef)

    return () => ctx.revert()
  }, [enabled])

  return rootRef
}
