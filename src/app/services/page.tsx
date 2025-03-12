'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Recherche Clinique",
      description: "Notre centre de recherche clinique est à la pointe de l'innovation médicale, menant des études et des essais cliniques pour faire avancer la médecine.",
      icon: "🔬",
      details: [
        "Études cliniques de phase I à IV",
        "Recherche sur les maladies rares",
        "Innovation thérapeutique",
        "Collaboration internationale"
      ]
    },
    {
      title: "Soins Spécialisés",
      description: "Nous offrons une expertise médicale de haut niveau avec des équipes spécialisées pour répondre aux besoins spécifiques de chaque patient.",
      icon: "⚕️",
      details: [
        "Consultations spécialisées",
        "Suivi personnalisé",
        "Équipements de pointe",
        "Expertise multidisciplinaire"
      ]
    },
    {
      title: "Innovation Médicale",
      description: "Notre hôpital est un centre d'excellence en innovation médicale, développant de nouvelles approches thérapeutiques et techniques.",
      icon: "💡",
      details: [
        "Chirurgie robotique",
        "Thérapies innovantes",
        "Technologies de pointe",
        "Formation continue"
      ]
    },
    {
      title: "Urgences",
      description: "Service d'urgence 24/7 avec une équipe médicale hautement qualifiée pour répondre à toutes les situations d'urgence.",
      icon: "🚑",
      details: [
        "Service 24/7",
        "Équipe d'urgence spécialisée",
        "Plateau technique complet",
        "Prise en charge rapide"
      ]
    },
    {
      title: "Laboratoire",
      description: "Notre laboratoire d'analyses médicales offre des services de diagnostic de pointe avec des résultats rapides et précis.",
      icon: "🧪",
      details: [
        "Analyses biologiques",
        "Imagerie médicale",
        "Diagnostic précoce",
        "Technologies avancées"
      ]
    },
    {
      title: "Chirurgie",
      description: "Service de chirurgie moderne avec des techniques innovantes et une équipe chirurgicale expérimentée.",
      icon: "🔪",
      details: [
        "Chirurgie robotique",
        "Interventions mini-invasives",
        "Suivi post-opératoire",
        "Récupération optimisée"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-gray-600">
              Découvrez notre gamme complète de services médicaux, 
              assurés par des professionnels de santé hautement qualifiés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 border-t">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'informations supplémentaires ?
            </h2>
            <p className="text-xl mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
              sur nos services et votre prise en charge.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg"
            >
              Nous contacter
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
} 