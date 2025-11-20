import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      image: "/modern-building-construction.jpg",
      title: "Réhabilitation de Bâtiment Commercial",
      category: "Réhabilitation",
      description: "Transformation complète d'un espace commercial en centre moderne.",
    },
    {
      image: "/road-construction-infrastructure.jpg",
      title: "Aménagement de Voirie Urbaine",
      category: "Voiries",
      description: "Construction de routes et aménagement d'infrastructures urbaines.",
    },
    {
      image: "/bridge-construction-engineering.jpg",
      title: "Ouvrage d'Art - Pont Routier",
      category: "Ouvrages d'Art",
      description: "Conception et construction d'un pont routier moderne et sécurisé.",
    },
    {
      image: "/sanitation-drainage-system.jpg",
      title: "Système d'Assainissement",
      category: "Assainissement",
      description: "Installation de systèmes de drainage et d'assainissement urbain.",
    },
    {
      image: "/residential-building-renovation.jpg",
      title: "Rénovation de Complexe Résidentiel",
      category: "Rénovation",
      description: "Modernisation complète d'un ensemble résidentiel existant.",
    },
    {
      image: "/technical-installations-construction.jpg",
      title: "Lots Techniques - Centre Commercial",
      category: "Lots Techniques",
      description: "Installation des systèmes électriques et techniques.",
    },
  ]

  return (
    <section id="projets" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nos Réalisations</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Découvrez quelques-uns de nos projets récents qui témoignent de notre expertise et de notre engagement
            envers l'excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-accent transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
