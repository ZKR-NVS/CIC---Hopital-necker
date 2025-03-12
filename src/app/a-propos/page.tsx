'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de l'Hôpital Necker</h1>
            <p className="text-xl text-gray-600">
              Un centre d'excellence en soins de santé depuis plus de 150 ans,
              dédié à l'innovation médicale et au bien-être des patients.
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
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Fondé en 1778, l'Hôpital Necker est l'un des plus anciens et des plus prestigieux hôpitaux de Paris.
                Il a été créé par Jacques Necker, ministre des finances de Louis XVI, et sa femme Suzanne.
              </p>
              <p className="text-gray-600 mb-4">
                Au fil des siècles, l'hôpital a été le théâtre de nombreuses innovations médicales
                et a accueilli des personnalités médicales exceptionnelles.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, l'Hôpital Necker continue d'être à la pointe de l'innovation médicale,
                combinant tradition d'excellence et technologies de pointe.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="/images/hospital-history.jpg"
                alt="Histoire de l'Hôpital Necker"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les valeurs fondamentales qui guident notre action quotidienne
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "Nous nous engageons à fournir des soins de la plus haute qualité, en utilisant les dernières avancées médicales.",
                icon: "⭐"
              },
              {
                title: "Innovation",
                description: "Nous repoussons constamment les limites de la médecine pour offrir les meilleurs traitements à nos patients.",
                icon: "💡"
              },
              {
                title: "Humanité",
                description: "Nous plaçons le patient au cœur de nos préoccupations, avec une approche personnalisée et bienveillante.",
                icon: "❤️"
              }
            ].map((valeur, index) => (
              <motion.div
                key={valeur.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{valeur.icon}</div>
                <h3 className="text-xl font-bold mb-4">{valeur.title}</h3>
                <p className="text-gray-600">{valeur.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une équipe médicale hautement qualifiée et dévouée à votre bien-être
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Marie Laurent",
                role: "Directrice Médicale",
                image: "/images/doctor-1.jpg"
              },
              {
                name: "Dr. Pierre Dubois",
                role: "Chef de Service",
                image: "/images/doctor-2.jpg"
              },
              {
                name: "Dr. Sophie Martin",
                role: "Responsable Recherche",
                image: "/images/doctor-3.jpg"
              },
              {
                name: "Dr. Jean Bernard",
                role: "Chef de Département",
                image: "/images/doctor-4.jpg"
              }
            ].map((membre, index) => (
              <motion.div
                key={membre.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={membre.image}
                    alt={membre.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{membre.name}</h3>
                <p className="text-gray-600">{membre.role}</p>
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
              Rejoignez notre équipe
            </h2>
            <p className="text-xl mb-8">
              Nous recherchons constamment des talents passionnés pour rejoindre notre équipe
              et contribuer à l'excellence de nos soins.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg"
            >
              Voir les offres d'emploi
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
} 