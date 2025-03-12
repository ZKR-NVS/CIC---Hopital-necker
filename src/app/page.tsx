'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const HeroBackground = dynamic(() => import('@/components/icons/HeroBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800" />
  ),
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroBackground className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
                Centre d'excellence médicale
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Innovation et expertise au service de votre santé
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl"
            >
              L'Hôpital Necker combine recherche de pointe et soins personnalisés pour offrir une médecine d'excellence.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Découvrir nos services
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Une approche globale de la santé
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des services spécialisés et des équipements de dernière génération pour des soins personnalisés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Urgences',
                description: 'Prise en charge 24/7 des urgences médicales avec une équipe hautement qualifiée',
                icon: '🏥',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                title: 'Spécialités',
                description: 'Large gamme de spécialités médicales et chirurgicales de pointe',
                icon: '👨‍⚕️',
                color: 'bg-green-50 text-green-600',
              },
              {
                title: 'Recherche',
                description: 'Centre de recherche médicale innovant pour les traitements de demain',
                icon: '🔬',
                color: 'bg-purple-50 text-purple-600',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Une équipe à votre écoute
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Notre équipe médicale et administrative est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre parcours de soins.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-900 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 