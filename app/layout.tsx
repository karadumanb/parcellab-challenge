import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parcellab',
  description: 'Parcellab challenge by Baturay Karaduman'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-full bg-secondary overflow-auto">
          <div className="mx-auto max-w-screen-xl min-h-full w-full flex items-center justify-center">
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  )
}
