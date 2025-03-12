import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Hôpital Necker - Excellence médicale',
  description: 'Centre hospitalier universitaire de référence, offrant des soins de qualité et innovants.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white">
        <Navbar />
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Adresse</h3>
                <p>
                  149 rue de Sèvres<br />
                  75743 Paris Cedex 15
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p>Tél : 01 44 49 40 00</p>
                <p>Email : contact@hopital-necker.fr</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
                <ul className="space-y-2">
                  <li><a href="/services" className="hover:text-primary-400">Services</a></li>
                  <li><a href="/a-propos" className="hover:text-primary-400">À propos</a></li>
                  <li><a href="/contact" className="hover:text-primary-400">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>&copy; {new Date().getFullYear()} Hôpital Necker. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 