import { Toaster } from 'sonner'

import type { Metadata, Viewport } from 'next'

import './globals.scss'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'
import BackToTop from '@/components/back-to-top'
import App from '@/components/app'

export const metadata: Metadata = {
  title: 'Arch Ecosystem',
  description: 'Ecosystem navigation for Arch.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

interface RootProps {
  readonly children: React.ReactNode
}

export const RootLayout = (props: RootProps) => {
  const { children } = props

  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-white">
        <App>
          <Header />
          <main className={cn('min-h-body max-w-main mx-auto', 'max-sm:px-4')}>
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" />
          <BackToTop />
        </App>
      </body>
    </html>
  )
}

export default RootLayout
