'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRightIcon, HeartIcon, UserGroupIcon, BeakerIcon } from '@heroicons/react/24/outline';

const HeroBackground = dynamic(() => import('@/components/icons/HeroBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800" />
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
              <span className="text-primary-200 font-semibold tracking-wider uppercase text-sm bg-white/10 px-4 py-2 rounded-full">
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
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-2xl"
            >
              L'Hôpital Necker combine recherche de pointe et soins personnalisés pour offrir une médecine d'excellence.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="btn btn-primary flex items-center gap-2"
              >
                Découvrir nos services
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary"
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
            <h2 className="section-title">
              Une approche globale de la santé
            </h2>
            <p className="section-subtitle">
              Des services spécialisés et des équipements de dernière génération pour des soins personnalisés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Urgences',
                description: 'Prise en charge 24/7 des urgences médicales avec une équipe hautement qualifiée',
                icon: HeartIcon,
                color: 'bg-primary-50 text-primary-600',
              },
              {
                title: 'Spécialités',
                description: 'Large gamme de spécialités médicales et chirurgicales de pointe',
                icon: UserGroupIcon,
                color: 'bg-accent-50 text-accent-600',
              },
              {
                title: 'Recherche',
                description: 'Centre de recherche médicale innovant pour les traitements de demain',
                icon: BeakerIcon,
                color: 'bg-secondary-50 text-secondary-600',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8" />
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
      <section className="py-24 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="section-title">
              Une équipe à votre écoute
            </h2>
            <p className="section-subtitle mb-12">
              Notre équipe médicale et administrative est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre parcours de soins.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary flex items-center gap-2 mx-auto w-fit"
            >
              Prendre rendez-vous
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 