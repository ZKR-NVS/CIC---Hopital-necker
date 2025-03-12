import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-primary">CIC Necker</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary">
              Accueil
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary">
              Services
            </Link>
            <Link href="/equipe" className="text-gray-700 hover:text-primary">
              Équipe
            </Link>
            <Link href="/recherche" className="text-gray-700 hover:text-primary">
              Recherche
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Accueil
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/equipe"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Équipe
              </Link>
              <Link
                href="/recherche"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Recherche
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 