import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CIC Hôpital Necker',
  description: 'Centre d\'Investigation Clinique - Hôpital Necker-Enfants Malades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-white pt-20">
          {children}
        </main>
      </body>
    </html>
  )
} 