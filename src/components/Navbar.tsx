'use client'
import { BriefcaseBusiness, FileText, Home, UserRound, Wrench } from 'lucide-react'
import { useEffect, useRef, useState, type MouseEvent } from 'react'

const tabs = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: UserRound },
  { label: 'Resume', href: '#resume', icon: FileText },
  { label: 'Education', href: '#education', icon: BriefcaseBusiness },
  { label: 'Skills', href: '#skills', icon: Wrench },
]

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home')
  const navigationTarget = useRef<string | null>(null)

  useEffect(() => {
    const handleSectionChange = (event: Event) => {
      const section = (event as CustomEvent<string>).detail
      const nextTab = section.charAt(0).toUpperCase() + section.slice(1)
      const targetTab = navigationTarget.current

      if (targetTab && nextTab !== targetTab) return
      if (targetTab === nextTab) navigationTarget.current = null
      setActiveTab(nextTab)
    }

    window.addEventListener('cv-section-change', handleSectionChange)
    return () => window.removeEventListener('cv-section-change', handleSectionChange)
  }, [])

  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    event.preventDefault()
    navigationTarget.current = label
    setActiveTab(label)
    const target = document.querySelector(href)
    const container = document.querySelector<HTMLElement>('[data-main-scroll]')
    if (target && container) {
      const targetElement = target as HTMLElement
      const maxScrollTop = container.scrollHeight - container.clientHeight
      const targetTop = Math.min(targetElement.offsetTop, maxScrollTop)
      container.scrollTo({ top: targetTop, behavior: 'smooth' })
    } else {
      navigationTarget.current = null
    }
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
  }

  return (
    <nav aria-label="Portfolio sections" className="flex h-full flex-row items-center justify-center gap-2 rounded-[20px] border border-white/10 bg-midnight/90 p-2 backdrop-blur-xl lg:flex-col lg:justify-center">
      <div className="flex min-w-0 flex-row items-center gap-1 overflow-x-auto lg:flex-col">
        {tabs.map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            onClick={(event) => handleNavigation(event, tab.href, tab.label)}
            aria-label={tab.label}
            aria-current={activeTab === tab.label ? 'page' : undefined}
            title={tab.label}
            className={`group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-semibold transition-colors ${activeTab === tab.label ? 'text-lilac' : 'text-zinc-400 hover:text-lilac'}`}
          >
            {activeTab === tab.label && <span className="absolute inset-0 rounded-xl bg-primary shadow-[0_0_22px_rgba(142,84,255,0.45)]" aria-hidden="true" />}
            <tab.icon className="relative h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  )
}