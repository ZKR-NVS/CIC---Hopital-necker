'use client';

import { motion } from 'framer-motion';
import AboutBackground from '@/components/icons/AboutBackground';
import HospitalIcon from '@/components/icons/HospitalIcon';
import ResearchIcon from '@/components/icons/ResearchIcon';
import BabyIcon from '@/components/icons/BabyIcon';

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <AboutBackground className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              À propos de l'Hôpital Necker
            </h1>
            <p className="text-xl text-gray-600">
              Un centre d'excellence médicale au service de la santé depuis plus de 150 ans
            </p>
          </motion.div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <p className="text-gray-600 mb-6">
                Fondé en 1778, l'Hôpital Necker est l'un des plus anciens hôpitaux de Paris.
                Il a été créé par Jacques Necker, ministre des finances de Louis XVI,
                et sa femme Suzanne Curchod.
              </p>
              <p className="text-gray-600">
                Depuis sa création, l'hôpital a toujours été à la pointe de l'innovation médicale,
                accueillant des générations de médecins et chercheurs qui ont contribué
                à faire avancer la médecine.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <HospitalIcon className="w-48 h-48 text-primary-600" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre mission est de fournir des soins de santé de qualité,
              d'innover dans la recherche médicale et de former les professionnels
              de santé de demain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Soins',
                  description: 'Des soins de qualité adaptés à chaque patient',
                  icon: HospitalIcon,
                  color: 'text-blue-600',
                },
                {
                  title: 'Recherche',
                  description: 'Innovation et recherche médicale de pointe',
                  icon: ResearchIcon,
                  color: 'text-green-600',
                },
                {
                  title: 'Formation',
                  description: 'Formation des futurs professionnels de santé',
                  icon: BabyIcon,
                  color: 'text-pink-600',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className={`${item.color} mb-4`}>
                    <item.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des professionnels de santé passionnés et dévoués
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Marie Laurent',
                role: 'Directrice Médicale',
                icon: HospitalIcon,
                color: 'text-blue-600',
              },
              {
                name: 'Dr. Pierre Dubois',
                role: 'Chef de Service',
                icon: ResearchIcon,
                color: 'text-green-600',
              },
              {
                name: 'Dr. Sophie Martin',
                role: 'Responsable Recherche',
                icon: BabyIcon,
                color: 'text-pink-600',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`${member.color} mb-4`}>
                  <member.icon className="w-24 h-24 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 