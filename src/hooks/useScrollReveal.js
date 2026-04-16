import { useEffect } from 'react'

/**
 * Attach scroll-reveal animations to elements matching `selector`.
 * Elements start invisible (via CSS class "reveal") and fade+slide in
 * when they enter the viewport.
 *
 * @param {string} selector  - CSS selector to observe, default '.reveal'
 * @param {object} options   - IntersectionObserver options
 */
export function useScrollReveal(selector = '.reveal', options = {}) {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [selector])
}
