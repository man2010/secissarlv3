"use client"

import { useState } from "react"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Shield, Wrench } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"

const equipment = [
  {
    id: 1,
    name: "Échafaudage Roulant 6m",
    category: "Échafaudages",
    price: 15000,
    unit: "jour",
    image: "/rolling-scaffolding-construction-site.jpg",
    availability: "Disponible",
    description: "Échafaudage mobile avec plateforme de travail",
  },
  {
    id: 2,
    name: "Bétonnière 350L",
    category: "Malaxage",
    price: 8000,
    unit: "jour",
    image: "/concrete-mixer-machine.jpg",
    availability: "Disponible",
    description: "Bétonnière thermique professionnelle",
  },
  {
    id: 3,
    name: "Marteau-Piqueur Électrique",
    category: "Démolition",
    price: 12000,
    unit: "jour",
    image: "/electric-jackhammer-construction.jpg",
    availability: "Disponible",
    description: "Marteau-piqueur 1500W avec accessoires",
  },
  {
    id: 4,
    name: "Compacteur à Plaque",
    category: "Compactage",
    price: 10000,
    unit: "jour",
    image: "/plate-compactor-construction.png",
    availability: "Disponible",
    description: "Compacteur vibrant 90kg",
  },
  {
    id: 5,
    name: "Groupe Électrogène 5KW",
    category: "Énergie",
    price: 20000,
    unit: "jour",
    image: "/portable-generator-construction.jpg",
    availability: "Loué",
    description: "Générateur diesel silencieux",
  },
  {
    id: 6,
    name: "Pompe à Eau Submersible",
    category: "Pompage",
    price: 7000,
    unit: "jour",
    image: "/submersible-water-pump.jpg",
    availability: "Disponible",
    description: "Pompe immergée haute performance",
  },
]

const categories = ["Tous", "Échafaudages", "Malaxage", "Démolition", "Compactage", "Énergie", "Pompage"]

export default function RentalsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [selectedDuration, setSelectedDuration] = useState<string>("1")

  const [quoteModal, setQuoteModal] = useState<{
    open: boolean
    itemName?: string
    itemPrice?: number
  }>({ open: false })

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Tous" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const calculatePrice = (basePrice: number) => {
    const days = Number.parseInt(selectedDuration)
    let total = basePrice * days
    if (days >= 7) total *= 0.85
    if (days >= 30) total *= 0.7
    return total
  }

  const handleReserve = (name: string, price: number) => {
    setQuoteModal({ open: true, itemName: name, itemPrice: price })
  }

  const heroImages = [
    {
      url: "/construction-equipment-rental-yard-with-machinery.jpg",
      alt: "Location d'Équipements",
      title: "Location d'Équipements",
      subtitle: "Matériel professionnel pour vos chantiers",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Équipements Entretenus",
      title: "Équipements Entretenus",
      subtitle: "Matériel vérifié et prêt à l'emploi",
    },
    {
      url: "/placeholder.svg?height=600&width=1200",
      alt: "Livraison Incluse",
      title: "Livraison Incluse",
      subtitle: "Service de livraison et reprise",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      <Header />
      <HeroSlider images={heroImages} title={""} subtitle={""}/>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Location d'Équipements de Chantier</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Louez l'équipement dont vous avez besoin pour votre chantier. Matériel professionnel, tarifs dégressifs et
              livraison incluse.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Calendar className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-sm">Location Flexible</h3>
              <p className="text-xs text-muted-foreground">Jour, semaine ou mois</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-sm">Équipement Assuré</h3>
              <p className="text-xs text-muted-foreground">Couverture complète</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Wrench className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-sm">Maintenance Incluse</h3>
              <p className="text-xs text-muted-foreground">Support technique</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-sm">Tarifs Dégressifs</h3>
              <p className="text-xs text-muted-foreground">-15% dès 7 jours</p>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input
              type="text"
              placeholder="Rechercher un équipement..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Durée" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 jour</SelectItem>
                <SelectItem value="3">3 jours</SelectItem>
                <SelectItem value="7">7 jours (-15%)</SelectItem>
                <SelectItem value="30">30 jours (-30%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      item.availability === "Disponible" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {item.availability}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-accent font-semibold mb-1">{item.category}</div>
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="border-t border-border pt-4 mb-4">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Prix/jour:</span>
                      <span className="text-lg font-semibold">{item.price.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-muted-foreground">Total ({selectedDuration}j):</span>
                      <span className="text-2xl font-bold text-accent">
                        {calculatePrice(item.price).toLocaleString()} FCFA
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={item.availability !== "Disponible"}
                    onClick={() => handleReserve(item.name, item.price)}
                  >
                    {item.availability === "Disponible" ? "Réserver & Demander Devis" : "Non disponible"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal
        open={quoteModal.open}
        onOpenChange={(open) => setQuoteModal({ ...quoteModal, open })}
        itemName={quoteModal.itemName}
        itemType="rental"
        itemPrice={quoteModal.itemPrice}
        itemUnit="jour"
      />

      <Footer />
    </main>
  )
}