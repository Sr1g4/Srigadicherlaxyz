import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'
import { siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Srivatsa Gadicherla | Software Engineer',
    template: '%s | Srivatsa Gadicherla',
  },
  description: 'Software Engineer specializing in Cloud & AI Systems. Portfolio, blog, and projects.',
  keywords: ['Software Engineer', 'Cloud', 'AI', 'AWS', 'Next.js', 'Srivatsa Gadicherla', 'portfolio'],
  authors: [{ name: 'Srivatsa Gadicherla', url: siteUrl }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Srivatsa Gadicherla',
    title: 'Srivatsa Gadicherla | Software Engineer',
    description: 'Software Engineer specializing in Cloud & AI Systems. Portfolio and blog.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srivatsa Gadicherla | Software Engineer',
    description: 'Software Engineer specializing in Cloud & AI Systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {/* Fixed Header */}
          <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <div className="flex items-center gap-8">
                <a href="/" className="text-sm tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity">
                  Srivatsa Gadicherla
                </a>
                <a href="/blog" className="text-sm tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity">
                  Blog
                </a>
              </div>
              <ThemeToggle />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
