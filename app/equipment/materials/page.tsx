"use client"

import { useState } from "react"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Search, Filter, Package, Truck, Shield } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"

const materials = [
  {
    id: 1,
    name: "Ciment Portland CEM II 42.5",
    category: "Ciment",
    price: 65000,
    unit: "Tonne",
    image: "/cement-bags-construction.jpg",
    stock: "En stock",
    description: "Ciment de haute qualité conforme aux normes NF",
  },
  {
    id: 2,
    name: "Fer à Béton Ø 8mm",
    category: "Ferraillage",
    price: 850,
    unit: "Kg",
    image: "/steel-rebar-construction.jpg",
    stock: "En stock",
    description: "Fer à béton haute adhérence",
  },
  {
    id: 3,
    name: "Sable de Construction",
    category: "Granulats",
    price: 18000,
    unit: "m³",
    image: "/construction-sand-pile.jpg",
    stock: "En stock",
    description: "Sable lavé et tamisé",
  },
  {
    id: 4,
    name: "Gravier 15/25",
    category: "Granulats",
    price: 22000,
    unit: "m³",
    image: "/gravel-aggregate-construction.jpg",
    stock: "En stock",
    description: "Gravier concassé calibré",
  },
  {
    id: 5,
    name: "Parpaing 20x20x50",
    category: "Maçonnerie",
    price: 500,
    unit: "Unité",
    image: "/concrete-blocks-construction.jpg",
    stock: "En stock",
    description: "Parpaing creux standard",
  },
  {
    id: 6,
    name: "Brique Rouge 5x10x20",
    category: "Maçonnerie",
    price: 250,
    unit: "Unité",
    image: "/red-bricks-construction.jpg",
    stock: "En stock",
    description: "Brique pleine de qualité",
  },
  {
    id: 7,
    name: "Poutrelle Métallique HEA 200",
    category: "Charpente",
    price: 95000,
    unit: "6m",
    image: "/steel-beam-construction.jpg",
    stock: "Sur commande",
    description: "Poutrelle en acier S235",
  },
  {
    id: 8,
    name: "Peinture Façade 20L",
    category: "Finitions",
    price: 35000,
    unit: "Bidon",
    image: "/paint-bucket-construction.jpg",
    stock: "En stock",
    description: "Peinture acrylique extérieure",
  },
]

const categories = ["Tous", "Ciment", "Ferraillage", "Granulats", "Maçonnerie", "Charpente", "Finitions"]

export default function MaterialsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  // État du modal
  const [quoteModal, setQuoteModal] = useState<{
    open: boolean
    itemName?: string
    itemPrice?: number
    itemUnit?: string
  }>({ open: false })

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch = material.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "Tous" || material.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleRequestQuote = (name: string, price: number, unit: string) => {
    setQuoteModal({ open: true, itemName: name, itemPrice: price, itemUnit: unit })
  }

  const heroImages = [
    {
      url: "/construction-materials-warehouse-with-cement-and-s.jpg",
      alt: "Matériaux de Construction",
      title: "Matériaux de Construction",
      subtitle: "Qualité professionnelle garantie",
    },
    {
      url: "/construction-materials-delivery-truck-on-site.jpg",
      alt: "Livraison Rapide",
      title: "Livraison Rapide",
      subtitle: "Partout au Sénégal",
    },
    {
      url: "/construction-materials-quality-inspection-and-test.jpg",
      alt: "Matériaux Certifiés",
      title: "Matériaux Certifiés",
      subtitle: "Conformes aux normes internationales",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      <Header />
      <HeroSlider images={heroImages} title={""} subtitle={""} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Vente de Matériaux de Construction</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Découvrez notre large gamme de matériaux de construction de qualité professionnelle. Livraison rapide et
              prix compétitifs garantis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Package className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Stock Permanent</h3>
              <p className="text-sm text-muted-foreground">Large choix de matériaux disponibles immédiatement</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Truck className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Livraison Assurée</h3>
              <p className="text-sm text-muted-foreground">Livraison sur chantier dans toute la région</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Qualité Garantie</h3>
              <p className="text-sm text-muted-foreground">Matériaux certifiés et conformes aux normes</p>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Rechercher un matériau..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <Filter size={18} className="mr-2" />
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMaterials.map((material) => (
              <Card key={material.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={material.image || "/placeholder.svg"}
                    alt={material.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      material.stock === "En stock" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                    }`}
                  >
                    {material.stock}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-accent font-semibold mb-1">{material.category}</div>
                  <h3 className="font-bold text-lg mb-2">{material.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-accent">{material.price.toLocaleString()} FCFA</div>
                      <div className="text-xs text-muted-foreground">par {material.unit}</div>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleRequestQuote(material.name, material.price, material.unit)}
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un Devis Personnalisé ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis détaillé pour vos matériaux de construction. Nous offrons des prix
            compétitifs pour les commandes en gros.
          </p>
        </div>
      </section>

      <QuoteModal
        open={quoteModal.open}
        onOpenChange={(open) => setQuoteModal({ ...quoteModal, open })}
        itemName={quoteModal.itemName}
        itemType="material"
        itemPrice={quoteModal.itemPrice}
        itemUnit={quoteModal.itemUnit}
      />

      <Footer />
    </main>
  )
}