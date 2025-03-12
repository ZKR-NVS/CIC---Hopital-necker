'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

const services = [
  {
    title: "Urgences",
    description: "Service d'urgences 24/7 avec une équipe médicale hautement qualifiée",
    icon: "🏥",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Consultations",
    description: "Consultations spécialisées avec des experts dans tous les domaines",
    icon: "👨‍⚕️",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Chirurgie",
    description: "Blocs opératoires modernes et équipes chirurgicales expérimentées",
    icon: "🔪",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Laboratoire",
    description: "Analyses médicales et recherches de pointe",
    icon: "🔬",
    color: "from-purple-500 to-purple-600"
  }
];

const stats = [
  { number: "50+", label: "Spécialités" },
  { number: "1000+", label: "Professionnels" },
  { number: "50000+", label: "Patients par an" },
  { number: "24/7", label: "Service d'urgences" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('urgences');

  return (
    <main className="min-h-screen">
      {/* Hero Section avec Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hospital-hero.jpg"
            alt="Hôpital Necker"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
        </div>
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
            Excellence en soins de santé et innovation médicale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg"
            >
              Prendre rendez-vous
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg"
            >
              En savoir plus
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section avec Tabs */}
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
          
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-full shadow-md">
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setActiveTab(service.title.toLowerCase())}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === service.title.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-r ${service.color} p-8 rounded-xl text-white`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Témoignages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    👤
                  </div>
                  <div>
                    <h4 className="font-semibold">Patient {index + 1}</h4>
                    <p className="text-gray-500">Service de {services[index].title}</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Une expérience exceptionnelle. Le personnel est très professionnel et à l'écoute."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section avec Formulaire */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>
              <p className="text-gray-600">
                Notre équipe est à votre disposition pour répondre à toutes vos questions.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
              >
                Envoyer
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Carte Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Notre Emplacement</h2>
            <p className="text-gray-600">
              149 rue de Sèvres, 75743 Paris Cedex 15
            </p>
          </motion.div>
          <div className="h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047456456!2d2.314015315674808!3d48.85661497929811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f9c0c0c0c0c%3A0x0!2zSG9zcGl0YWwgTmVja2Vy!5e0!3m2!1sfr!2sfr!4v1647123456789!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
} 