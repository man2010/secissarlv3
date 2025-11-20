import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle2, Building2 } from "lucide-react"
import { notFound } from "next/navigation"

const projectsData = {
  "rehabilitation-complexe-commercial": {
    title: "Réhabilitation d'un Complexe Commercial",
    category: "Réhabilitation",
    description:
      "Projet ambitieux de rénovation complète d'un centre commercial de 5000m². Nous avons modernisé l'ensemble des installations, amélioré l'efficacité énergétique avec l'installation de panneaux solaires et de systèmes de climatisation performants, et créé de nouveaux espaces commerciaux attractifs.",
    image: "/modern-commercial-building-renovation.jpg",
    year: "2024",
    location: "Dakar, Plateau",
    duration: "8 mois",
    budget: "450 millions FCFA",
    client: "SCI Plateau Commercial",
    collaborators: [
      { name: "SETER", role: "Études Techniques" },
      { name: "GIR Sénégal", role: "Ingénierie Structure" },
      { name: "SNHLM", role: "Coordination Projet" },
    ],
    features: [
      "Rénovation complète de la façade",
      "Installation de panneaux solaires 100kW",
      "Modernisation des systèmes électriques",
      "Création de nouveaux espaces commerciaux",
      "Amélioration de l'accessibilité PMR",
      "Système de climatisation centralisé",
    ],
    gallery: [
      "/modern-commercial-building-renovation.jpg",
      "/construction-site-workers-modern-equipment.jpg",
      "/architectural-renovation-and-restoration-project.jpg",
    ],
  },
  "construction-voirie-urbaine": {
    title: "Construction de Voirie Urbaine",
    category: "Voiries",
    description:
      "Aménagement complet de 5 km de voiries urbaines dans le cadre du développement des infrastructures de la ville. Le projet inclut la construction de routes en béton bitumineux, l'installation d'un éclairage public LED économe en énergie, la mise en place de réseaux d'assainissement modernes et l'aménagement de trottoirs accessibles.",
    image: "/urban-road-construction-with-modern-infrastructure.jpg",
    year: "2023",
    location: "Thiès, Zone Extension",
    duration: "12 mois",
    budget: "750 millions FCFA",
    client: "Mairie de Thiès",
    collaborators: [
      { name: "SETER", role: "Maîtrise d'œuvre" },
      { name: "Bureau d'Études Routes", role: "Études de Tracé" },
      { name: "Entreprise Locale", role: "Sous-traitance Terrassement" },
    ],
    features: [
      "5 km de voiries en béton bitumineux",
      "Éclairage public LED sur toute la longueur",
      "Réseaux d'assainissement EP/EU",
      "Trottoirs de 2m de largeur",
      "Signalisation routière complète",
      "Espaces verts et plantation d'arbres",
    ],
    gallery: [
      "/urban-road-construction-with-modern-infrastructure.jpg",
      "/infrastructure-and-civil-engineering-project.jpg",
      "/construction-site-workers-modern-equipment.jpg",
    ],
  },
  "pont-routier": {
    title: "Ouvrage d'Art - Pont Routier",
    category: "Ouvrages d'Art",
    description:
      "Construction d'un pont en béton armé de 50 mètres de portée facilitant la connexion entre deux quartiers séparés par un cours d'eau. Cet ouvrage d'art majeur améliore considérablement la mobilité urbaine et désengorge les axes routiers existants.",
    image: "/concrete-bridge-construction-over-water.jpg",
    year: "2023",
    location: "Kaolack, Quartier Léona",
    duration: "14 mois",
    budget: "920 millions FCFA",
    client: "Ministère des Infrastructures",
    collaborators: [
      { name: "SETER", role: "Bureau d'Études Structure" },
      { name: "GIR Sénégal", role: "Contrôle Technique" },
      { name: "Laboratoire BTP", role: "Essais Matériaux" },
    ],
    features: [
      "Pont en béton armé de 50m",
      "Capacité de charge: 40 tonnes",
      "2 voies de circulation + trottoirs",
      "Fondations profondes sur pieux",
      "Garde-corps sécurisés",
      "Éclairage architectural LED",
    ],
    gallery: [
      "/concrete-bridge-construction-over-water.jpg",
      "/infrastructure-and-civil-engineering-project.jpg",
      "/completed-modern-building-construction-project.jpg",
    ],
  },
  "assainissement-collectif": {
    title: "Système d'Assainissement Collectif",
    category: "Assainissement",
    description:
      "Installation d'un réseau d'assainissement complet pour une zone résidentielle de 500 habitations. Le projet comprend la pose de canalisations, la construction de regards de visite, l'installation de stations de pompage et le raccordement au réseau principal.",
    image: "/sewage-system-infrastructure-construction.jpg",
    year: "2024",
    location: "Rufisque, Cité Nouvelle",
    duration: "10 mois",
    budget: "380 millions FCFA",
    client: "ONAS (Office National de l'Assainissement)",
    collaborators: [
      { name: "SETER", role: "Études Hydrauliques" },
      { name: "Bureau Environnement", role: "Étude d'Impact" },
      { name: "Entreprise Réseaux", role: "Pose Canalisations" },
    ],
    features: [
      "8 km de canalisations PVC et fonte",
      "120 regards de visite",
      "2 stations de pompage",
      "Raccordement de 500 habitations",
      "Système de télégestion",
      "Formation des équipes d'exploitation",
    ],
    gallery: [
      "/sewage-system-infrastructure-construction.jpg",
      "/technical-installations-electrical-and-plumbing.jpg",
      "/construction-site-workers-modern-equipment.jpg",
    ],
  },
  "renovation-bureaux": {
    title: "Rénovation d'Immeuble de Bureaux",
    category: "Rénovation",
    description:
      "Transformation complète d'un bâtiment de bureaux R+5 avec mise aux normes, création d'espaces modernes et flexibles, amélioration de l'efficacité énergétique et installation d'équipements high-tech pour répondre aux besoins des entreprises modernes.",
    image: "/modern-office-building-renovation-interior.jpg",
    year: "2023",
    location: "Dakar, Mermoz",
    duration: "11 mois",
    budget: "620 millions FCFA",
    client: "SCI Mermoz Business",
    collaborators: [
      { name: "SETER", role: "Coordination Générale" },
      { name: "Architecte d'Intérieur", role: "Design & Aménagement" },
      { name: "GIR Sénégal", role: "Structure & Sécurité" },
    ],
    features: [
      "Rénovation complète de 3000m²",
      "Espaces de travail modulables",
      "Isolation thermique renforcée",
      "Ascenseurs modernes",
      "Système de sécurité intégré",
      "Fibre optique & réseau haute performance",
    ],
    gallery: [
      "/modern-office-building-renovation-interior.jpg",
      "/architectural-renovation-and-restoration-project.jpg",
      "/completed-modern-building-construction-project.jpg",
    ],
  },
  "lots-techniques": {
    title: "Installation de Lots Techniques",
    category: "Lots Techniques",
    description:
      "Installation complète des systèmes électriques, de plomberie sanitaire, de climatisation et de ventilation pour un complexe résidentiel haut standing de 80 appartements. Tous les équipements sont aux normes internationales avec des solutions économes en énergie.",
    image: "/technical-installations-electrical-and-plumbing.jpg",
    year: "2024",
    location: "Saly, Résidence Océane",
    duration: "9 mois",
    budget: "290 millions FCFA",
    client: "Promoteur Immobilier Saly",
    collaborators: [
      { name: "SETER", role: "Bureau d'Études Fluides" },
      { name: "Électricien Agrée", role: "Installation Électrique" },
      { name: "Plombier Certifié", role: "Plomberie Sanitaire" },
    ],
    features: [
      "Installation électrique complète",
      "Plomberie sanitaire 80 appartements",
      "Climatisation VRV centralisée",
      "Système de ventilation VMC",
      "Panneaux solaires 50kW",
      "Domotique et contrôle d'accès",
    ],
    gallery: [
      "/technical-installations-electrical-and-plumbing.jpg",
      "/construction-site-workers-modern-equipment.jpg",
      "/modern-commercial-building-renovation.jpg",
    ],
  },
}

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Await params pour Next.js 15/16
  const { id } = await params
  
  const project = projectsData[id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] mt-20">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link href="/projects">
              <Button variant="outline" className="mb-4 gap-2 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                Retour aux Projets
              </Button>
            </Link>
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <Calendar className="w-8 h-8 text-accent mb-3" />
              <div className="text-sm text-muted-foreground mb-1">Année</div>
              <div className="text-2xl font-bold text-card-foreground">{project.year}</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <MapPin className="w-8 h-8 text-accent mb-3" />
              <div className="text-sm text-muted-foreground mb-1">Localisation</div>
              <div className="text-lg font-bold text-card-foreground">{project.location}</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <Building2 className="w-8 h-8 text-accent mb-3" />
              <div className="text-sm text-muted-foreground mb-1">Durée</div>
              <div className="text-lg font-bold text-card-foreground">{project.duration}</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <Users className="w-8 h-8 text-accent mb-3" />
              <div className="text-sm text-muted-foreground mb-1">Budget</div>
              <div className="text-lg font-bold text-card-foreground">{project.budget}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Description du Projet</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.description}</p>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Client</h3>
                <p className="text-lg text-muted-foreground">{project.client}</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Caractéristiques Principales</h2>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Collaborateurs du Projet</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {project.collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{collaborator.name}</h3>
                <p className="text-muted-foreground">{collaborator.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Galerie du Projet</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative h-80 rounded-lg overflow-hidden group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Intéressé par nos services ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous pour discuter de votre projet de construction ou d'ingénierie
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Nous Contacter
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}