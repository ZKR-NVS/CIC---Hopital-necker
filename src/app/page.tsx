import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-primary">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/images/hospital-facade.jpg"
          alt="Hôpital Necker"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Centre d'Investigation Clinique
            </h1>
            <h2 className="text-3xl mb-8">Hôpital Necker-Enfants Malades</h2>
            <p className="text-xl mb-8">
              Excellence en recherche clinique et innovation médicale
            </p>
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Notre équipe est à votre disposition pour répondre à vos questions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Coordonnées</h3>
                <p className="text-gray-600">
                  149 rue de Sèvres<br />
                  75743 Paris Cedex 15<br />
                  Tél : 01 44 49 40 00
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Horaires</h3>
                <p className="text-gray-600">
                  Lundi - Vendredi : 9h00 - 17h00<br />
                  Consultations sur rendez-vous
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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