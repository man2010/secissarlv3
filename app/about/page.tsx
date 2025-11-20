"use client"

import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Footer } from "@/components/footer"
import { Building2, Users, Award, Target, Rocket, Shield, HeartHandshake, TrendingUp, Sparkles, CheckCircle2, Zap } from "lucide-react"
import TeamPage from "../team/page"
import { useState } from "react"

export default function AboutPage() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null)

  const heroImages = [
    {
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251109-WA0038-b5ogsjIi7ToRoVFg0Cctrvm8OP9dOr.jpg",
      alt: "SECIS SARL Construction",
    },
    {
      url: "/modern-construction-building-site-with-workers-and.jpg",
      alt: "Chantier de construction moderne",
    },
    {
      url: "/engineering-blueprints-and-construction-planning.jpg",
      alt: "Plans d'ingénierie et conception",
    },
  ]

  const values = [
    { icon: Target, title: "Excellence", description: "Nous visons l'excellence dans chaque projet, avec des standards de qualité élevés" },
    { icon: Building2, title: "Innovation", description: "Nous adoptons les dernières technologies et méthodes de construction durables" },
    { icon: Users, title: "Engagement", description: "Un accompagnement total de nos clients du début à la fin de chaque projet" },
    { icon: Award, title: "Professionnalisme", description: "Une équipe qualifiée et expérimentée pour garantir la réussite de vos projets" },
  ]

  const pillars = [
    { icon: Rocket, title: "Développement National", stat: "100+ projets", description: "Contribuer activement à la croissance et à la modernisation des infrastructures du Sénégal" },
    { icon: Shield, title: "Qualité & Sécurité", stat: "98% satisfaction", description: "Maintenir les plus hauts standards internationaux dans tous nos chantiers" },
    { icon: HeartHandshake, title: "Durabilité", stat: "Pratiques éco-responsables", description: "Intégrer des solutions respectueuses de l’environnement dans chaque réalisation" },
    { icon: TrendingUp, title: "Innovation Continue", stat: "10+ ans d’expertise", description: "Former nos équipes et adopter les technologies de pointe du secteur" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <HeroSlider
        images={heroImages}
        title="À Propos de SECIS SARL"
        subtitle="Une entreprise sénégalaise engagée dans le développement et la construction du pays"
      />

      {/* Notre Histoire */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              Notre Parcours
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Notre Histoire
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>La Sénégalaise de Construction, d'Ingénierie et Services (SECIS) SARL est une entreprise de droit sénégalais, fondée par un ingénieur passionné et dynamique.</p>
            <p>Notre vision : participer activement au développement du Sénégal à travers des projets de construction et d’ingénierie de qualité.</p>
            <p>De la conception à la livraison, nous accompagnons nos clients avec rigueur, expertise et un engagement total envers l’excellence.</p>
          </div>
        </div>
      </section>

      {/* Nos Valeurs - Animées mais sobres */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              Ce qui nous guide
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Nos Valeurs
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              const isHovered = hoveredValue === index

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className={`relative bg-card p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? "border-accent shadow-xl -translate-y-3"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                      isHovered
                        ? "bg-accent text-white scale-110 rotate-12 shadow-lg"
                        : "bg-accent/10 text-accent"
                    }`}>
                      <Icon className={`w-10 h-10 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`} />
                    </div>

                    <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      isHovered ? "text-accent" : "text-foreground"
                    }`}>
                      {value.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>

                    <div className="mt-6 h-1 bg-border rounded-full overflow-hidden">
                      <div className={`h-full bg-accent transition-all duration-700 ${isHovered ? "w-full" : "w-0"}`} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Notre Mission + 4 Piliers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 w-fit mx-auto">
              <Sparkles className="w-4 h-4" /> Notre Raison d’Être
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Notre Mission
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          {/* Mission Statement */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-accent to-accent/90 text-white p-12 md:p-16 rounded-3xl shadow-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <Zap className="w-16 h-16 mx-auto mb-8 text-white/80" />
                <p className="text-xl md:text-2xl leading-relaxed font-medium">
                  Participer activement au <span className="font-bold">développement du Sénégal</span> en livrant des projets de construction et d’ingénierie <span className="font-bold">de classe mondiale</span>,<br />
                  avec un engagement total envers la qualité, la sécurité et la durabilité.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Piliers */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Nos <span className="text-accent">4 Piliers</span> Stratégiques
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
                const isHovered = hoveredPillar === index

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredPillar(index)}
                    onMouseLeave={() => setHoveredPillar(null)}
                    className={`relative bg-card p-8 rounded-2xl border-2 transition-all duration-300 text-center cursor-pointer ${
                      isHovered
                        ? "border-accent shadow-2xl -translate-y-3"
                        : "border-border"
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-xl mx-auto mb-5 flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "bg-accent text-white" : "bg-accent/10 text-accent"
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3 transition-colors ${
                      isHovered ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                    }`}>
                      {pillar.stat}
                    </span>

                    <h4 className={`font-bold text-lg mb-3 transition-colors ${isHovered ? "text-accent" : "text-foreground"}`}>
                      {pillar.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>

                    <CheckCircle2 className={`w-8 h-8 mx-auto mt-6 transition-all duration-300 ${
                      isHovered ? "text-accent scale-125" : "text-muted"
                    }`} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <TeamPage />
      <Footer />
    </main>
  )
}