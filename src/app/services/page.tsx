'use client';

import { motion } from 'framer-motion';
import HospitalIcon from '@/components/icons/HospitalIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import BabyIcon from '@/components/icons/BabyIcon';
import SurgeryIcon from '@/components/icons/SurgeryIcon';
import ResearchIcon from '@/components/icons/ResearchIcon';
import ImagingIcon from '@/components/icons/ImagingIcon';

const services = [
  {
    title: 'Urgences',
    description: 'Service d\'urgences 24/7 avec une équipe médicale hautement qualifiée',
    icon: HospitalIcon,
    color: 'text-blue-600',
  },
  {
    title: 'Cardiologie',
    description: 'Centre d\'excellence en cardiologie avec les dernières innovations',
    icon: HeartIcon,
    color: 'text-red-600',
  },
  {
    title: 'Pédiatrie',
    description: 'Service de pédiatrie spécialisé pour les soins aux enfants',
    icon: BabyIcon,
    color: 'text-pink-600',
  },
  {
    title: 'Chirurgie',
    description: 'Blocs opératoires modernes et équipes chirurgicales expérimentées',
    icon: SurgeryIcon,
    color: 'text-purple-600',
  },
  {
    title: 'Recherche',
    description: 'Centre de recherche médicale de pointe pour l\'innovation',
    icon: ResearchIcon,
    color: 'text-green-600',
  },
  {
    title: 'Imagerie',
    description: 'Équipements d\'imagerie médicale de dernière génération',
    icon: ImagingIcon,
    color: 'text-indigo-600',
  },
];

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-gray-600">
              Découvrez notre gamme complète de services médicaux, assurés par des professionnels de santé hautement qualifiés.
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-8"
              >
                <div className={`${service.color} mb-6`}>
                  <service.icon className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Besoin d'informations ?
            </h2>
            <p className="text-xl mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 