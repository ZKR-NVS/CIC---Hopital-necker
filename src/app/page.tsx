'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroBackground from '@/components/icons/HeroBackground';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <HeroBackground className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hôpital Necker
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Excellence médicale et innovation au service de la santé
            </p>
            <Link
              href="/services"
              className="bg-white text-primary-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Découvrir nos services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600">
              Des soins de qualité adaptés à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Urgences',
                description: 'Prise en charge 24/7 des urgences médicales',
                icon: '🏥',
              },
              {
                title: 'Spécialités',
                description: 'Large gamme de spécialités médicales',
                icon: '👨‍⚕️',
              },
              {
                title: 'Recherche',
                description: 'Centre de recherche médicale de pointe',
                icon: '🔬',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe est à votre disposition pour répondre à vos questions
            </p>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 