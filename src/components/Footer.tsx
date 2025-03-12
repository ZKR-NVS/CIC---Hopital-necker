'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p className="text-gray-400">
              L'Hôpital Necker est un centre d'excellence en soins de santé,
              offrant des services médicaux de pointe et une recherche innovante.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Urgences', 'Consultations', 'Chirurgie', 'Laboratoire'].map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>149 rue de Sèvres</li>
              <li>75743 Paris Cedex 15</li>
              <li>Tél : 01 44 49 40 00</li>
              <li>Email : contact@hopital-necker.fr</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hôpital Necker. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 