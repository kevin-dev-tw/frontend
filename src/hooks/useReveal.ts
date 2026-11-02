import { useEffect } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from './useLenis'

export function useReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.hero-title', { yPercent: 25, opacity: 0, clipPath: 'inset(0 0 100% 0)', duration: 1.3 }, 0.1)
        .from('.hero-meta', { y: 32, opacity: 0, duration: 1 }, 0.55)

      gsap.utils.toArray<HTMLElement>('main section h2').forEach((h) => {
        gsap.from(h, {
          y: 28, clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: h, start: 'top 88%' },
        })
      })

      gsap.from('.contact-cta', {
        y: 32, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cta', start: 'top 92%' },
      })
      gsap.from('.contact-foot', {
        opacity: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-foot', start: 'top 98%' },
      })
    })
    return () => ctx.revert()
  }, [])
}
