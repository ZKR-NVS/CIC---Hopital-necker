import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hôpital Necker - Excellence médicale',
  description: 'Site officiel de l\'Hôpital Necker, centre d\'excellence médicale à Paris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Hôpital Necker</h3>
                <p className="text-gray-400">
                  149 rue de Sèvres<br />
                  75743 Paris Cedex 15
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400">
                  Tél : 01 44 49 40 00<br />
                  Email : contact@hopital-necker.fr
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                      À propos
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Hôpital Necker. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 