"use client"

import { Building2, Users, Award, TrendingUp, Target, Lightbulb, HeartHandshake, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function About() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  const stats = [
    { icon: Building2, label: "Projets Réalisés", value: "100+" },
    { icon: Users, labelEquipments: "Clients Satisfaits", value: "50+" },
    { icon: Award, label: "Années d'Expérience", value: "10+" },
    { icon: TrendingUp, label: "Taux de Satisfaction", value: "98%" },
  ]

  const values = [
    { icon: Target, title: "Excellence", description: "Des standards de qualité élevés dans tous nos projets" },
    { icon: Lightbulb, title: "Innovation", description: "Des solutions modernes et durables pour vos besoins" },
    { icon: HeartHandshake, title: "Engagement", description: "Un partenaire fiable pour la réussite de vos projets" },
  ]

  return (
    <section id="a-propos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* En-tête */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              Qui sommes-nous ?
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            À Propos de <span className="text-accent">SECIS SARL</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La Sénégalaise de Construction, d'Ingénierie et de Services (SECIS) SARL est une entreprise de droit
            sénégalais, fondée par un ingénieur passionné et dynamique. Sa vision s'inscrit dans la participation au
            développement et à la construction du pays.
          </p>
        </div>

        {/* Statistiques avec hover subtil */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const isHovered = hoveredStat === index

            return (
              <Card
                key={index}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                className={`border-2 transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? "border-accent shadow-xl -translate-y-2"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 ${
                      isHovered
                        ? "bg-accent text-white scale-110"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon className={`w-8 h-8 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`} />
                  </div>

                  <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                    isHovered ? "text-accent" : "text-foreground"
                  }`}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mission & Valeurs */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-border">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Notre Mission</h3>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                Nous proposons une gamme complète de services pour la construction de bâtiments et des travaux publics.
                Notre équipe d'experts accompagne nos clients depuis la conception jusqu'à la livraison de chaque
                projet, en garantissant qualité, sécurité et respect des délais.
              </p>

              {/* Nos Valeurs */}
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((item, index) => {
                  const Icon = item.icon
                  const isHovered = hoveredValue === index

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredValue(index)}
                      onMouseLeave={() => setHoveredValue(null)}
                      className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                        isHovered ? "bg-accent/5 shadow-lg -translate-y-1" : "bg-transparent"
                      }`}
                    >
                      {/* Icône */}
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                          isHovered
                            ? "bg-accent text-white shadow-lg scale-110"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Icon className={`w-7 h-7 transition-transform ${isHovered ? "rotate-12" : ""}`} />
                      </div>

                      <h4 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                        isHovered ? "text-accent" : "text-foreground"
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      {/* Barre de progression discrète */}
                      <div className="mt-5 h-1 bg-border rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-accent transition-all duration-700 ease-out ${
                            isHovered ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}