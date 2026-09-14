import MainContent from '@/components/MainContent'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-obsidian px-3 py-3 text-lilac sm:px-6 sm:py-6 lg:h-screen lg:px-8 lg:py-8" aria-label="Pham Hoang Anh portfolio">
      <div className="aura-background" aria-hidden="true"><div className="aura-vignette" /></div>
      <div className="relative mx-auto grid h-full min-h-0 max-w-[1180px] gap-4 lg:h-[calc(100vh-4rem)] lg:grid-cols-[300px_minmax(0,1fr)_72px] xl:grid-cols-[320px_minmax(0,1fr)_72px]">
        <Sidebar />
        <section className="order-3 min-h-0 min-w-0 lg:order-none" aria-label="Portfolio details">
          <MainContent />
        </section>
        <div className="order-2 lg:order-none"><Navbar /></div>
      </div>
    </main>
  )
}