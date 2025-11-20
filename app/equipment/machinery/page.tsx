"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Calendar, TrendingUp, Award } from "lucide-react"
import { useState } from "react"

const machinery = [
  {
    id: 1,
    name: "Pelle Hydraulique 20T",
    category: "Terrassement",
    price: 150000,
    unit: "jour",
    image: "/machine1.jfif",
    specs: ["Capacité: 1.0m³", "Profondeur: 6m", "Opérateur inclus"],
  },
  {
    id: 2,
    name: "Bulldozer D6",
    category: "Terrassement",
    price: 180000,
    unit: "jour",
    image: "/machine2.jpg",
    specs: ["Puissance: 215HP", "Lame: 3.5m", "Opérateur inclus"],
  },
  {
    id: 3,
    name: "Chargeuse sur Pneus",
    category: "Manutention",
    price: 120000,
    unit: "jour",
    image: "/machine3.jpg",
    specs: ["Capacité: 2.5m³", "Poids: 15T", "Opérateur inclus"],
  },
  {
    id: 4,
    name: "Grue Mobile 50T",
    category: "Levage",
    price: 250000,
    unit: "jour",
    image: "/machine4.webp",
    specs: ["Portée: 40m", "Charge max: 50T", "Opérateur inclus"],
  },
  {
    id: 5,
    name: "Compacteur Vibrant 12T",
    category: "Compactage",
    price: 100000,
    unit: "jour",
    image: "/machine5.webp",
    specs: ["Largeur: 2.1m", "Poids: 12T", "Opérateur inclus"],
  },
  {
    id: 6,
    name: "Camion Benne 15m³",
    category: "Transport",
    price: 80000,
    unit: "jour",
    image: "/machine6.avif",
    specs: ["Capacité: 15m³", "Charge: 20T", "Chauffeur inclus"],
  },
]

export default function MachineryPage() {
  // Dans machinery/page.tsx
  const [quoteModal, setQuoteModal] = useState<{
  open: boolean
  itemName?: string
  itemPrice?: number
  }>({ open: false })

  const handleRequestQuote = (name: string, price: number) => {
    setQuoteModal({ open: true, itemName: name, itemPrice: price })
  }
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=600&fit=crop",
      alt: "Engins de chantier sur un site de construction",
      title: "Engins de Chantier",
      subtitle: "Machines lourdes pour grands travaux",
    },
    {
      url: "https://images.unsplash.com/photo-1590496794648-47891a89b85c?w=1200&h=600&fit=crop",
      alt: "Grue mobile sur chantier",
      title: "Grues et Levage",
      subtitle: "Solutions de levage professionnelles",
    },
    {
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=600&fit=crop",
      alt: "Opérateur qualifié utilisant un engin de chantier",
      title: "Opérateurs Qualifiés",
      subtitle: "Personnel expérimenté et certifié",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      <Header />
      <HeroSlider images={heroImages} title={""} subtitle={""} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Location d'Engins de Chantier</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Machines lourdes et engins de terrassement avec opérateurs qualifiés. Solutions complètes pour vos grands
              travaux.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-sm">Engins Récents</h3>
              <p className="text-xs text-muted-foreground">Flotte moderne</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <TrendingUp className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-sm">Opérateurs Certifiés</h3>
              <p className="text-xs text-muted-foreground">Personnel qualifié</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Calendar className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-sm">Planning Flexible</h3>
              <p className="text-xs text-muted-foreground">Disponibilité adaptée</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-sm">Support 24/7</h3>
              <p className="text-xs text-muted-foreground">Assistance technique</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machinery.map((machine) => (
              <Card key={machine.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={machine.image || "/placeholder.svg"}
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {machine.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">{machine.name}</h3>
                  <div className="space-y-2 mb-4">
                    {machine.specs.map((spec, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {spec}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 mb-4">
                    <div className="text-3xl font-bold text-accent mb-1">{machine.price.toLocaleString()} FCFA</div>
                    <div className="text-sm text-muted-foreground">par {machine.unit}</div>
                  </div>
                  <Button
                    onClick={() => handleRequestQuote(machine.name, machine.price)}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Demander un Devis
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Besoin d'une Solution Sur Mesure ?</h2>
            <p className="text-lg mb-8">
              Contactez notre équipe commerciale pour discuter de vos besoins spécifiques en matière d'engins de
              chantier. Nous proposons des solutions personnalisées pour vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2" size={20} />
                78 632 86 99
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Demander un Devis Détaillé
              </Button>
            </div>
          </div>
        </div>
      </section>
      <QuoteModal
        open={quoteModal.open}
        onOpenChange={(open) => setQuoteModal({ ...quoteModal, open })}
        itemName={quoteModal.itemName}
        itemType="machinery"
        itemPrice={quoteModal.itemPrice}
        itemUnit="jour"
      />
      <Footer />
    </main>
  )
}
