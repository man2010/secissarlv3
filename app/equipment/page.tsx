import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"
import { 
  Truck, 
  Wrench, 
  Zap, 
  HardHat, 
  Package,
  CheckCircle2,
  Calendar,
  Shield,
  Award,
  TrendingUp,
  Settings,
  Laptop
} from "lucide-react"
import Link from "next/link"

const equipmentImages = [
  { url: "/construction-equipment-and-machinery-site.jpg", alt: "Équipements de construction" },
  { url: "/heavy-machinery-construction-vehicles.jpg", alt: "Véhicules de chantier" },
  { url: "/professional-construction-tools-equipment.jpg", alt: "Outils professionnels" },
]

const ownedEquipment = [
  { name: "Groupe électrogène 5KVA", quantity: 1, state: "Bon état", icon: Zap },
  { name: "Groupe électrogène 3KVA", quantity: 1, state: "Neuf", icon: Zap },
  { name: "Bétonnière 500L", quantity: 1, state: "Bon état", icon: Settings },
  { name: "Aiguille vibrante", quantity: 2, state: "Bon état", icon: Settings },
  { name: "Bois de coffrage", quantity: "Stocks", state: "Bon état", icon: Package },
  { name: "Etais métallique", quantity: 350, state: "Bon état", icon: HardHat },
  { name: "Echafaudage (05 niveaux)", quantity: "2 Ensembles", state: "Bon état", icon: HardHat },
  { name: "Brouettes", quantity: 5, state: "Bon état", icon: Wrench },
  { name: "Auges", quantity: 5, state: "Bon état", icon: Wrench },
  { name: "Pioches", quantity: 4, state: "Bon état", icon: Wrench },
  { name: "Pelles", quantity: 10, state: "Bon état", icon: Wrench },
  { name: "Caisse à outils", quantity: 1, state: "Bon état", icon: Package },
  { name: "Niveau à eau", quantity: 4, state: "Bon état", icon: Settings },
  { name: "Scie circulaire", quantity: 1, state: "Bon état", icon: Settings },
  { name: "Appareil Niveau Optique Topo", quantity: 1, state: "Bon état", icon: Settings },
  { name: "Plaque vibrante", quantity: 1, state: "Bon état", icon: Settings },
]

const rentalEquipment = [
  { name: "Camion Benne 16 m³", quantity: 1, state: "Bon état", icon: Truck },
  { name: "Voiture de liaison L200", quantity: 1, state: "Bon état", icon: Truck },
]

const software = [
  { name: "AutoCAD", description: "Conception et dessin assisté par ordinateur", icon: Laptop },
  { name: "Graitec OMD", description: "Calcul de structures béton armé", icon: Laptop },
  { name: "Robot Structural Analysis", description: "Analyse structurelle avancée", icon: Laptop },
  { name: "MS Project", description: "Gestion et planification de projets", icon: Laptop },
  { name: "Revit", description: "Modélisation des informations du bâtiment (BIM)", icon: Laptop },
]

const rentalServices = [
  {
    title: "Location de Véhicules",
    description: "Camions benne, voitures de liaison et véhicules utilitaires pour vos chantiers",
    icon: Truck,
    items: ["Camions benne de différentes capacités", "Véhicules de liaison 4x4", "Véhicules utilitaires"],
  },
  {
    title: "Location d'Équipements Lourds",
    description: "Matériel de chantier lourd pour tous types de travaux",
    icon: HardHat,
    items: ["Engins de terrassement", "Grues et nacelles", "Compacteurs et rouleaux"],
  },
  {
    title: "Location d'Outils Spécialisés",
    description: "Outils et équipements spécialisés pour travaux techniques",
    icon: Settings,
    items: ["Équipements de mesure topographique", "Matériel électroportatif", "Outils de démolition"],
  },
]

export default function EquipmentRentalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider
        images={equipmentImages}
        title="Moyens Matériels & Location"
        subtitle="Des équipements modernes et performants pour vos projets"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Équipements & Services
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Des Moyens Matériels Complets à Votre Service
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              SECIS SARL dispose d'un parc matériel moderne et entretenu, ainsi qu'un réseau de fournisseurs fiables
              pour répondre à tous vos besoins en location d'équipements de construction.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Matériel Certifié</h3>
              <p className="text-foreground/70">Équipements entretenus et conformes aux normes de sécurité</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Disponibilité Garantie</h3>
              <p className="text-foreground/70">Parc matériel disponible et réseau de location étendu</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Qualité Optimale</h3>
              <p className="text-foreground/70">Matériel récent en bon état et régulièrement vérifié</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Tarifs Compétitifs</h3>
              <p className="text-foreground/70">Solutions de location adaptées à votre budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owned Equipment */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Notre Parc Matériel Propriété</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Équipements possédés par SECIS SARL, disponibles pour nos projets et en location
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ownedEquipment.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 text-sm">{item.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-foreground/60 mb-1">
                        <span className="font-medium">Qté: {item.quantity}</span>
                        <span>•</span>
                        <span className="text-green-600 font-medium">{item.state}</span>
                      </div>
                      <div className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-semibold">
                        Possédé
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 bg-accent/10 border border-accent/20 rounded-xl p-6">
            <p className="text-foreground/70 text-center">
              <strong className="text-foreground">Note:</strong> Cette liste n'est pas limitative. Un apport
              complémentaire de matériel suivant les besoins sera fait pour garantir la réussite de vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Rental Network */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Réseau de Location</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Accès à un réseau étendu de fournisseurs pour répondre à tous vos besoins complémentaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {rentalEquipment.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                        <span>Quantité: {item.quantity}</span>
                        <span>•</span>
                        <span className="text-green-600 font-medium">{item.state}</span>
                      </div>
                      <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                        Disponible en Location
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rentalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Logiciels Métiers</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Technologies de pointe pour la conception, l'analyse et la gestion de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {software.map((soft, index) => {
              const Icon = soft.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{soft.name}</h3>
                      <p className="text-sm text-foreground/60">{soft.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-12 text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Wrench className="w-12 h-12" />
              <h2 className="text-3xl font-bold">Besoin de Matériel pour Votre Projet?</h2>
            </div>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Que vous ayez besoin de location d'équipements ou de prestations complètes, notre équipe est là pour
              vous accompagner avec des solutions adaptées à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Demander un Devis
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Voir nos Tarifs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}