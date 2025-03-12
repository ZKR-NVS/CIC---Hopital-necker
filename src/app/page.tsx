'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hôpital Necker
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Excellence en soins de santé
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg"
          >
            Prendre rendez-vous
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Nos Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Urgences', 'Consultations', 'Chirurgie'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Des soins de qualité pour votre santé et votre bien-être.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Contactez-nous</h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg"
            >
              Nous contacter
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: "Recherche Clinique",
    description: "Études et essais cliniques de pointe pour faire avancer la médecine",
    icon: "🔬"
  },
  {
    title: "Soins Spécialisés",
    description: "Expertise médicale de haut niveau pour les patients",
    icon: "⚕️"
  },
  {
    title: "Innovation Médicale",
    description: "Développement de nouvelles approches thérapeutiques",
    icon: "💡"
  }
] 