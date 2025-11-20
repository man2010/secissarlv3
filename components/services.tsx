import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Building, Badge as Bridge, Droplets, Route, Cog } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Travaux de Réhabilitation",
      description: "Rénovation et remise en état de bâtiments existants avec des techniques modernes et durables.",
    },
    {
      icon: Building,
      title: "Rénovation",
      description: "Transformation et modernisation complète de structures pour leur donner une nouvelle vie.",
    },
    {
      icon: Bridge,
      title: "Des Ouvrages d'Art",
      description: "Construction de ponts, viaducs et autres structures d'ingénierie complexes.",
    },
    {
      icon: Droplets,
      title: "L'Assainissement",
      description: "Systèmes de drainage, réseaux d'égouts et solutions d'assainissement urbain.",
    },
    {
      icon: Route,
      title: "Les Voiries et Réseaux Divers",
      description: "Aménagement de routes, trottoirs et infrastructures de réseaux techniques.",
    },
    {
      icon: Cog,
      title: "Lots Techniques",
      description: "Installation et maintenance de systèmes électriques, plomberie et climatisation.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nos Prestations</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous assurons un accompagnement total de nos clients, depuis la conception jusqu'à la livraison de chaque
            projet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
