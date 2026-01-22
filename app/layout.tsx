import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Srivatsa Gadicherla - Software Engineer',
  description: 'Software Engineer specializing in Cloud & AI Systems',
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
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
