import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the 'revealed' class is added,
 * which triggers the CSS transition defined on .reveal in index.css.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Reveals all child elements with the .reveal class inside a container.
 * Useful for staggered list / grid animations.
 */
export function useScrollRevealGroup(options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const items = container.querySelectorAll('.reveal')
    const observers = []

    items.forEach((item) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            item.classList.add('revealed')
            observer.unobserve(item)
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px', ...options }
      )
      observer.observe(item)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return containerRef
}
