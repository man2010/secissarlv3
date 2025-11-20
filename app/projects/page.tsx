import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const heroImages = [
    {
      url: "/completed-modern-building-construction-project.jpg",
      alt: "Projet de construction achevé",
    },
    {
      url: "/infrastructure-and-civil-engineering-project.jpg",
      alt: "Projet d'infrastructure",
    },
    {
      url: "/architectural-renovation-and-restoration-project.jpg",
      alt: "Projet de rénovation architecturale",
    },
  ]

  const projects = [
    {
      id: "rehabilitation-complexe-commercial",
      title: "Réhabilitation d'un Complexe Commercial",
      category: "Réhabilitation",
      description:
        "Rénovation complète d'un centre commercial avec modernisation des installations et amélioration de l'efficacité énergétique.",
      image: "/modern-commercial-building-renovation.jpg",
      year: "2024",
    },
    {
      id: "construction-voirie-urbaine",
      title: "Construction de Voirie Urbaine",
      category: "Voiries",
      description:
        "Aménagement de 5 km de voiries urbaines incluant l'éclairage public, les réseaux d'assainissement et les trottoirs.",
      image: "/urban-road-construction-with-modern-infrastructure.jpg",
      year: "2023",
    },
    {
      id: "pont-routier",
      title: "Ouvrage d'Art - Pont Routier",
      category: "Ouvrages d'Art",
      description: "Construction d'un pont en béton armé de 50 mètres facilitant la connexion entre deux quartiers.",
      image: "/concrete-bridge-construction-over-water.jpg",
      year: "2023",
    },
    {
      id: "assainissement-collectif",
      title: "Système d'Assainissement Collectif",
      category: "Assainissement",
      description: "Installation d'un réseau d'assainissement pour une zone résidentielle de 500 habitations.",
      image: "/sewage-system-infrastructure-construction.jpg",
      year: "2024",
    },
    {
      id: "renovation-bureaux",
      title: "Rénovation d'Immeuble de Bureaux",
      category: "Rénovation",
      description:
        "Transformation complète d'un bâtiment de bureaux avec mise aux normes et création d'espaces modernes.",
      image: "/modern-office-building-renovation-interior.jpg",
      year: "2023",
    },
    {
      id: "lots-techniques",
      title: "Installation de Lots Techniques",
      category: "Lots Techniques",
      description:
        "Installation complète des systèmes électriques, de plomberie et de climatisation pour un complexe résidentiel.",
      image: "/technical-installations-electrical-and-plumbing.jpg",
      year: "2024",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider
        images={heroImages}
        title="Nos Réalisations"
        subtitle="Découvrez nos projets de construction et d'ingénierie à travers le Sénégal"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Projets Récents</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nous sommes fiers de nos réalisations et de la confiance que nos clients nous accordent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href={`/projects/${project.id}`}>
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                        <Eye className="w-5 h-5" />
                        Voir Détails
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="outline" className="w-full gap-2 bg-transparent">
                      <Eye className="w-4 h-4" />
                      Détails du Projet
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-12 rounded-2xl shadow-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partenaires de Confiance</h2>
              <p className="text-xl leading-relaxed mb-8">
                Nous travaillons avec des partenaires reconnus pour garantir la qualité et la conformité de nos
                réalisations
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-lg font-semibold">SETER</div>
                <div className="text-lg font-semibold">GIR Sénégal</div>
                <div className="text-lg font-semibold">SNHLM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
