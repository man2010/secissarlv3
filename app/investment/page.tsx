import { HeroSlider } from "@/components/hero-slider"
import { TrendingUp, Shield, Award, Building, Coins, LineChart, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const investmentImages = [
  { url: "/financial-growth-investment-charts-and-graphs.jpg", alt: "Financial growth investment charts" },
  { url: "/construction-investment-development-project.jpg", alt: "Construction investment development" },
  { url: "/business-strategy-planning-meeting.jpg", alt: "Business strategy planning" },
]

const investmentOpportunities = [
  {
    icon: Building,
    title: "Projets Immobiliers",
    description: "Investissez dans des projets de construction résidentielle et commerciale à fort potentiel.",
    roi: "12-18%",
    duration: "24-36 mois",
    minInvestment: "10M FCFA",
  },
  {
    icon: TrendingUp,
    title: "Infrastructure Publique",
    description: "Participez au financement de projets d'infrastructure en partenariat avec l'État.",
    roi: "10-15%",
    duration: "36-48 mois",
    minInvestment: "50M FCFA",
  },
  {
    icon: Award,
    title: "Capital-Risque",
    description: "Prenez part au capital de SECIS SARL et bénéficiez de la croissance de l'entreprise.",
    roi: "15-25%",
    duration: "Indéterminé",
    minInvestment: "100M FCFA",
  },
]

const financialHighlights = [
  { label: "Chiffre d'affaires 2024", value: "2.5 Mds FCFA", growth: "+35%" },
  { label: "Projets en cours", value: "18", growth: "+50%" },
  { label: "Taux de satisfaction", value: "98%", growth: "+5%" },
  { label: "Employés", value: "125", growth: "+40%" },
]

export default function InvestmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider
        images={investmentImages}
        title="Opportunités d'Investissement"
        subtitle="Investissez dans l'avenir de la construction sénégalaise"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Investissement & Croissance
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Pourquoi Investir avec SECIS SARL?</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Le secteur de la construction au Sénégal connaît une croissance exponentielle avec le Plan Sénégal
              Émergent. SECIS SARL se positionne comme un acteur majeur de cette transformation, offrant des
              opportunités d'investissement attractives et sécurisées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {financialHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <p className="text-sm text-foreground/60 mb-2">{item.label}</p>
                <p className="text-3xl font-bold text-foreground mb-1">{item.value}</p>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">{item.growth}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Sécurité Garantie</h3>
              <p className="text-foreground/70 leading-relaxed">
                Tous nos projets sont assurés et garantis. Nous travaillons avec des institutions financières reconnues
                pour sécuriser vos investissements.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <LineChart className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Rendements Attractifs</h3>
              <p className="text-foreground/70 leading-relaxed">
                Des retours sur investissement compétitifs dans un marché en forte croissance, avec des perspectives de
                développement exceptionnelles.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Transparence Totale</h3>
              <p className="text-foreground/70 leading-relaxed">
                Reporting régulier, visites de chantier organisées et communication constante sur l'évolution de votre
                investissement.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Nos Opportunités d'Investissement</h2>
            <div className="space-y-6">
              {investmentOpportunities.map((opportunity, index) => {
                const Icon = opportunity.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">{opportunity.title}</h3>
                            <p className="text-foreground/70 leading-relaxed">{opportunity.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-80 bg-accent/5 rounded-xl p-6">
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-foreground/60 mb-1">ROI Estimé</p>
                            <p className="text-2xl font-bold text-accent">{opportunity.roi}</p>
                          </div>
                          <div className="h-px bg-border" />
                          <div>
                            <p className="text-sm text-foreground/60 mb-1">Durée</p>
                            <p className="text-lg font-semibold text-foreground">{opportunity.duration}</p>
                          </div>
                          <div>
                            <p className="text-sm text-foreground/60 mb-1">Investissement Minimum</p>
                            <p className="text-lg font-semibold text-foreground">{opportunity.minInvestment}</p>
                          </div>
                          <Button className="w-full mt-4">En Savoir Plus</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Processus d'Investissement</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Contact Initial", desc: "Discutons de vos objectifs d'investissement" },
                { step: "02", title: "Due Diligence", desc: "Analyse approfondie du projet et documentation" },
                { step: "03", title: "Signature", desc: "Formalisation de l'accord d'investissement" },
                { step: "04", title: "Suivi", desc: "Reporting régulier et transparence totale" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-12 text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coins className="w-12 h-12" />
              <h2 className="text-3xl font-bold">Commencez à Investir Aujourd'hui</h2>
            </div>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Rejoignez les investisseurs qui font confiance à SECIS SARL pour faire fructifier leur capital tout en
              contribuant au développement du Sénégal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Prendre Rendez-vous
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Télécharger le Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
