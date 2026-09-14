import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Pham Hoang Anh | Full-stack Developer',
  description: 'Portfolio and CV of Pham Hoang Anh, a full-stack developer specializing in .NET, Angular, and Azure.',
  keywords: ['Pham Hoang Anh', 'Full-stack Developer', '.NET', 'Angular', 'Azure', 'Software Engineer'],
  authors: [{ name: 'Pham Hoang Anh' }],
  creator: 'Pham Hoang Anh',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Pham Hoang Anh | Full-stack Developer',
    description: 'Portfolio and CV of Pham Hoang Anh, a full-stack developer specializing in .NET, Angular, and Azure.',
    type: 'profile',
    firstName: 'Hoang Anh',
    lastName: 'Pham',
    images: [{ url: '/assets/profile/hoang-rasta.jpg', width: 1200, height: 1200, alt: 'Pham Hoang Anh portrait' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pham Hoang Anh | Full-stack Developer',
    description: 'Portfolio and CV of Pham Hoang Anh, a full-stack developer specializing in .NET, Angular, and Azure.',
    images: ['/assets/profile/hoang-rasta.jpg'],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  )
}