import { HeroSlider } from "@/components/hero-slider"
import { Header } from "@/components/header"
import { Handshake, Target, TrendingUp, Users, Award, Zap, Globe, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

const partnershipImages = [
  {
    url: "/business-handshake-partnership-agreement.jpg",
    alt: "Business handshake partnership agreement"
  },
  {
    url: "/construction-partnership-collaboration-meeting.jpg",
    alt: "Construction partnership collaboration meeting"
  },
  {
    url: "/professional-team-collaboration-workspace.jpg",
    alt: "Professional team collaboration workspace"
  },
]

const partners = [
  {
    name: "SETER",
    logo: "/seter-logo.jpg",
    description: "Société d'Exploitation du TER",
  },
  {
    name: "GIR-Sénégal",
    logo: "/gir-senegal-logo.jpg",
    description: "Génie Civil et Infrastructure",
  },
  {
    name: "SN-HLM",
    logo: "/sn-hlm-logo.jpg",
    description: "Société Nationale des Habitations à Loyer Modéré",
  },
  {
    name: "Tawfekh Academy",
    logo: "/tawfekh-academy-logo.jpg",
    description: "Formation et Développement",
  },
]

const partnershipTypes = [
  {
    icon: Handshake,
    title: "Partenariats Stratégiques",
    description:
      "Collaborations à long terme avec des entreprises partageant notre vision du développement durable et de l'excellence.",
    benefits: [
      "Projets conjoints de grande envergure",
      "Partage d'expertise et de ressources",
      "Accès à de nouveaux marchés",
      "Innovation collaborative",
    ],
  },
  {
    icon: Users,
    title: "Sous-Traitance",
    description:
      "Opportunités pour des entreprises spécialisées de rejoindre nos projets en tant que sous-traitants qualifiés.",
    benefits: [
      "Flux de projets régulier",
      "Paiements garantis et ponctuels",
      "Formation et développement",
      "Croissance assurée",
    ],
  },
  {
    icon: Globe,
    title: "Partenariats Internationaux",
    description:
      "Collaboration avec des entreprises internationales pour apporter expertise technique et standards de qualité.",
    benefits: ["Transfert de technologie", "Standards internationaux", "Expansion géographique", "Projets d'envergure"],
  },
  {
    icon: Award,
    title: "Fournisseurs Privilégiés",
    description:
      "Programme pour les fournisseurs de matériaux et équipements souhaitant établir des relations commerciales durables.",
    benefits: [
      "Commandes régulières",
      "Conditions préférentielles",
      "Visibilité sur nos projets",
      "Croissance mutuelle",
    ],
  },
]

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider
        images={partnershipImages}
        title="Partenariats"
        subtitle="Construisons ensemble l'avenir du Sénégal"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Collaboration & Croissance
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Pourquoi Devenir Partenaire SECIS?</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Chez SECIS SARL, nous croyons fermement que les partenariats stratégiques sont la clé du succès. En
              unissant nos forces, nous créons une synergie qui profite à tous: partenaires, clients et communautés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Vision Partagée</h3>
              <p className="text-foreground/70">
                Contribuer au développement du Sénégal à travers des projets d'infrastructure de qualité.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Croissance Mutuelle</h3>
              <p className="text-foreground/70">
                Des opportunités de croissance garanties grâce à un portefeuille de projets diversifié.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Fiabilité</h3>
              <p className="text-foreground/70">
                Une entreprise solide avec un historique prouvé de projets réussis et de paiements ponctuels.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Innovation</h3>
              <p className="text-foreground/70">
                Adoption des dernières technologies et méthodes de construction pour rester compétitifs.
              </p>
            </div>
          </div>

          <div className="space-y-8 mb-20">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-2/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{type.title}</h3>
                          <p className="text-foreground/70 leading-relaxed">{type.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3 bg-accent/5 rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-3">Avantages Clés</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nos Partenaires Actuels</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Nous sommes fiers de collaborer avec des organisations de renom qui partagent notre engagement envers
                l'excellence et le développement durable.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                >
                  <div className="bg-background rounded-xl p-4 mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={80}
                      className="w-full h-16 object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{partner.name}</h3>
                  <p className="text-sm text-foreground/60">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à Devenir Partenaire?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires et participez à la construction de l'avenir du Sénégal. Ensemble,
              nous sommes plus forts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Contactez-nous
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Télécharger la Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
