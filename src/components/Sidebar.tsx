import Image from 'next/image'
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { profile } from '@/data/cvData'

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-8 lg:h-full" aria-labelledby="profile-name">
      <div className="sidebar-panel flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-midnight/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
        <div className="relative aspect-[0.88] overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-neon/40 via-primary/20 to-black">
          <Image
            src={profile.photoUrl}
            alt={`${profile.name} portrait`}
            fill
            priority
            sizes="(min-width: 1280px) 320px, (min-width: 1024px) 300px, 100vw"
            className="object-cover object-center grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-neon/10" aria-hidden="true" />
        </div>

        <div className="mt-6">
          <h1 id="profile-name" className="font-display text-3xl font-bold tracking-tight text-lilac">{profile.name}</h1>
          <p className="mt-1 text-base font-medium text-neon">{profile.role}</p>
        </div>

        <div className="mt-5 flex gap-2" aria-label="Social profiles">
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link">
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link">
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-auto hidden space-y-5 border-t border-white/10 pt-5 lg:block">
          <div className="space-y-3 text-sm text-zinc-400">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4 text-neon" aria-hidden="true" />
              <span className="truncate">{profile.email}</span>
            </a>
            <a className="contact-link" href={`tel:${profile.phone}`}>
              <Phone className="h-4 w-4 text-neon" aria-hidden="true" />
              <span>{profile.phone}</span>
            </a>
            <div className="contact-link">
              <MapPin className="h-4 w-4 text-neon" aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" aria-label="Open CV in a new tab" className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-lilac shadow-[0_0_24px_rgba(95,37,214,0.3)] transition-transform hover:-translate-y-0.5 hover:bg-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-midnight">
          <Download className="h-4 w-4" aria-hidden="true" />
          Download CV
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}
