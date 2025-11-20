"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Footer } from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import { Hammer, Building2, Wrench, Droplets, Bold as Road, Boxes, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const [quoteModal, setQuoteModal] = useState<{ open: boolean; itemName?: string }>({ open: false })

  const handleRequestQuote = (serviceName?: string) => {
    setQuoteModal({ open: true, itemName: serviceName })
  }

  const heroImages = [
    { url: "/construction-rehabilitation-and-renovation-work-in.jpg", alt: "Réhabilitation" },
    { url: "/modern-infrastructure-and-road-construction.jpg", alt: "Voiries" },
    { url: "/engineering-and-technical-construction-services.jpg", alt: "Génie civil" },
  ]

  const services = [
    {
      title: "Travaux de Réhabilitation",
      icon: Hammer,
      description: "Restauration complète de bâtiments anciens ou dégradés avec respect de l’architecture d’origine et mise aux normes actuelles.",
      features: [
        "Diagnostic structurel approfondi",
        "Renforcement des fondations et structures",
        "Restauration de façades historiques",
        "Mise en conformité sécurité et accessibilité",
      ],
      benefits: [
        "Préservation du patrimoine architectural",
        "Valorisation immobilière importante",
        "Réduction des coûts énergétiques",
        "Durabilité garantie sur le long terme",
      ],
      image: "/african-site-foreman-construction.jpg",
    },
    {
      title: "Rénovation Complète",
      icon: Building2,
      description: "Transformation totale d’espaces intérieurs et extérieurs pour répondre aux besoins modernes tout en optimisant confort et performance.",
      features: [
        "Rénovation intérieure et extérieure",
        "Réaménagement fonctionnel des espaces",
        "Isolation thermique et phonique",
        "Modernisation des installations techniques",
      ],
      benefits: [
        "Gain de confort et d’espace",
        "Économies d’énergie significatives",
        "Augmentation de la valeur du bien",
        "Design contemporain et personnalisé",
      ],
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&h=800&fit=crop",
    },
    {
      title: "Ouvrages d’Art & Génie Civil",
      icon: Wrench,
      description: "Conception et réalisation d’ouvrages complexes : ponts, viaducs, barrages, structures spéciales avec une expertise technique de haut niveau.",
      features: [
        "Études techniques et calculs de structure",
        "Construction de ponts et viaducs",
        "Ouvrages hydrauliques et maritimes",
        "Fondations spéciales et pieux",
      ],
      benefits: [
        "Sécurité et résistance maximale",
        "Respect des normes internationales",
        "Solutions innovantes et durables",
        "Suivi rigoureux des délais",
      ],
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?w=1200&h=800&fit=crop",
    },
    {
      title: "Assainissement & Gestion des Eaux",
      icon: Droplets,
      description: "Conception et réalisation de systèmes complets d’assainissement collectif et individuel, respectueux de l’environnement.",
      features: [
        "Réseaux d’assainissement EU/EP",
        "Stations d’épuration compactes",
        "Systèmes de traitement des boues",
        "Gestion des eaux pluviales",
      ],
      benefits: [
        "Protection de l’environnement",
        "Conformité aux normes sanitaires",
        "Solutions adaptées au terrain",
        "Maintenance simplifiée",
      ],
      image: "https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?w=1200&h=800&fit=crop",
    },
    {
      title: "Voiries & Réseaux Divers (VRD)",
      icon: Road,
      description: "Aménagement complet des espaces extérieurs : routes, trottoirs, parkings, réseaux souterrains d’eau, électricité et télécom.",
      features: [
        "Construction et réfection de routes",
        "Création de voiries urbaines et rurales",
        "Réseaux AEP, EU, électricité, fibre optique",
        "Drainage et gestion des eaux pluviales",
      ],
      benefits: [
        "Circulation fluide et sécurisée",
        "Infrastructure durable et esthétique",
        "Intégration harmonieuse dans l’environnement",
        "Respect des normes DTU et locales",
      ],
      image: "https://images.unsplash.com/photo-1505832018823-50331d70d237?w=1200&h=800&fit=crop",
    },
    {
      title: "Lots Techniques & Corps d’État Secondaires",
      icon: Boxes,
      description: "Prise en charge complète des installations techniques : plomberie, électricité, climatisation, domotique, sécurité.",
      features: [
        "Électricité CFO/CFA",
        "Plomberie sanitaire et chauffage",
        "Climatisation et ventilation (CVC)",
        "Domotique et bâtiments intelligents",
        "SSI et vidéosurveillance",
      ],
      benefits: [
        "Installations aux normes NF C 15-100",
        "Performance énergétique optimale",
        "Confort et sécurité renforcés",
        "Maintenance facilitée",
      ],
      image: "https://images.pexels.com/photos/5849562/pexels-photo-5849562.jpeg?w=1200&h=800&fit=crop",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <HeroSlider
        images={heroImages}
        title="Nos Services"
        subtitle="Une expertise complète en construction, génie civil et travaux publics"
      />

      {/* Services avec alternance texte/image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              const Icon = service.icon

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Contenu texte */}
                  <div className={isEven ? "md:order-1" : "md:order-2"}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                      <Icon className="w-9 h-9 text-accent" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          Nos Prestations
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Avantages
                        </h3>
                        <ul className="space-y-3">
                          {service.benefits.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleRequestQuote(service.title)}
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-white font-semibold"
                    >
                      Demander un Devis pour ce service
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl ${isEven ? "md:order-2" : "md:order-1"}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-2xl font-bold opacity-90">{service.title}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-accent to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Bénéficiez d’une étude personnalisée gratuite et d’un devis détaillé sous 24h
          </p>
          <Button
            onClick={() => handleRequestQuote()}
            size="lg"
            className="bg-white text-accent hover:bg-gray-100 px-12 py-8 text-xl font-bold shadow-xl"
          >
            Obtenir un Devis Gratuit
          </Button>
        </div>
      </section>

      {/* Modal Intelligent */}
      <QuoteModal
        open={quoteModal.open}
        onOpenChange={(open) => setQuoteModal({ ...quoteModal, open })}
        itemName={quoteModal.itemName}
        itemType="service"
      />

      <Footer />
    </main>
  )
}