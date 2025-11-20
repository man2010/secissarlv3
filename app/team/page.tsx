"use client"

import { Mail, Briefcase, Phone, Users, Shield, Award, TrendingUp, HardHat } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers = [
    { name: "Moustapha SAMB", role: "Directeur des travaux", desc: "Gérant et fondateur de SECIS SARL, expert en gestion de projets complexes", image: "/african-construction-director-in-safety-vest.jpg" },
    { name: "Stella Lalha BA", role: "Responsable administratif et financier", desc: "Gestion administrative et financière de l’entreprise", image: "/african-female-finance-manager-professional.jpg" },
    { name: "El Hadj Dame NDIAYE", role: "Conducteur de travaux", desc: "Supervision et coordination des chantiers", image: "/african-construction-site-supervisor.jpg" },
  ]

  return (
    <main className="min-h-screen">

      {/* Hero + Stats rapides */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
            <Users className="w-4 h-4" /> L’Excellence Humaine
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            Notre <span className="text-accent">Équipe</span> d’Experts
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-10" />

          {/* Mini stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "11+", label: "Experts" },
              { icon: Award, value: "10+", label: "Ans d’expérience" },
              { icon: TrendingUp, value: "100+", label: "Projets réalisés" },
              { icon: Shield, value: "98%", label: "Sécurité" },
            ].map((stat, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-colors">
                <stat.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toute l’équipe */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Direction & Équipe Technique
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => {
              const isHovered = hoveredMember === index
              return (
                <Card
                  key={index}
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                  className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                    isHovered ? "-translate-y-4" : ""
                  }`}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay subtil au hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Badge rôle qui monte au hover */}
                    <div className={`absolute top-6 left-6 right-6 transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}>
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl inline-flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-accent" />
                        <span className="font-semibold text-foreground">{member.role}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 bg-card">
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${isHovered ? "text-accent" : "text-foreground"}`}>
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.desc}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <a href="mailto:secissarl@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                        <Mail className="w-4 h-4" /> Email
                      </a>
                      <a href="tel:+221" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                        <Phone className="w-4 h-4" /> Appeler
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ouvriers qualifiés */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <span className="bg-accent/10 text-accent px-5 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <HardHat className="w-5 h-5" /> Force de terrain
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                  Nos Ouvriers <span className="text-accent">Qualifiés</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre encadrement technique est soutenu par plus de <strong>50 ouvriers spécialisés</strong> : maçons, coffreurs, ferrailleurs, électriciens, plombiers… Tous formés et expérimentés pour garantir une exécution parfaite de chaque chantier.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {["Maçons", "Coffreurs", "Ferrailleurs", "Électriciens", "Plombiers", "Manœuvres"].map((job) => (
                  <div key={job} className="bg-card border border-border rounded-xl p-4 text-center hover:border-accent/50 transition-colors">
                    <span className="text-2xl mb-2 block"></span>
                    <span className="font-medium text-foreground">{job}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/african-construction-project-coordinator.jpg"
                alt="Équipe d'ouvriers SECIS SARL"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl inline-flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                    <Users className="w-9 h-9 text-white" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-foreground">50+</div>
                    <div className="text-muted-foreground">Ouvriers qualifiés</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-card rounded-3xl p-12 border-2 border-border">
            <Mail className="w-14 h-14 text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-4">Besoin de nous contacter ?</h3>
            <p className="text-muted-foreground mb-8">
              Notre équipe est à votre écoute pour tous vos projets de construction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:secissarl@gmail.com"
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                secissarl@gmail.com
              </a>
              <a
                href="tel:+221"
                className="inline-flex items-center justify-center gap-3 border-2 border-accent/30 hover:border-accent bg-transparent hover:bg-accent/5 text-foreground px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}