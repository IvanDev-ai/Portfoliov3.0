import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iván',
  description: 'Portfolio',
  icons: {
    icon: '🧑🏻‍💻'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}