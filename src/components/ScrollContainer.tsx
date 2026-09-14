'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface ScrollContainerProps {
  children: ReactNode
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const currentSection = useRef('')

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let frameId = 0
    const updateActiveSection = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const sections = Array.from(container.querySelectorAll<HTMLElement>('[data-section]'))
        const threshold = container.scrollTop + 120
        const activeSection = sections.reduce((current, section) => {
          return section.offsetTop <= threshold ? section.dataset.section ?? current : current
        }, 'home')
        const nextSection = container.scrollTop + container.clientHeight >= container.scrollHeight - 1
          ? sections.at(-1)?.dataset.section ?? activeSection
          : activeSection

        if (nextSection === currentSection.current) return
        currentSection.current = nextSection
        window.dispatchEvent(new CustomEvent('cv-section-change', { detail: nextSection }))
      })
    }

    updateActiveSection()
    container.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => {
      cancelAnimationFrame(frameId)
      container.removeEventListener('scroll', updateActiveSection)
    }
  }, [])

  return (
    <div
      ref={scrollRef}
      data-main-scroll
      role="region"
      aria-label="CV content"
      tabIndex={0}
      className="scrollbar-hidden h-full min-h-0 overflow-y-auto rounded-[20px] border border-white/10 bg-midnight/90 backdrop-blur-xl"
    >
      {children}
    </div>
  )
}
