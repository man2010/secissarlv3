"use client"

import type React from "react"

import { HeroSlider } from "@/components/hero-slider"
import { Briefcase, Heart, TrendingUp, Users, GraduationCap, Award, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const careerImages = [
  { url: "/construction-team-working-together-on-site.jpg", alt: "Construction team working together" },
  { url: "/professional-engineers-planning-project.jpg", alt: "Professional engineers planning" },
  { url: "/diverse-team-collaboration-office.jpg", alt: "Team collaboration" },
]

const jobOffers = [
  {
    title: "Ingénieur Civil Senior",
    department: "Ingénierie",
    location: "Dakar, Sénégal",
    type: "CDI - Temps plein",
    experience: "5+ ans",
    description: "Nous recherchons un ingénieur civil expérimenté pour diriger nos projets d'infrastructure majeurs.",
    responsibilities: [
      "Supervision des études techniques et conception",
      "Gestion d'équipes de 10-15 personnes",
      "Interface avec les clients et partenaires",
      "Contrôle qualité et respect des normes",
    ],
    requirements: [
      "Diplôme d'ingénieur en génie civil",
      "Minimum 5 ans d'expérience en gestion de projets",
      "Maîtrise d'AutoCAD et logiciels BIM",
      "Excellentes compétences en leadership",
    ],
  },
  {
    title: "Chef de Chantier",
    department: "Construction",
    location: "Dakar, Sénégal",
    type: "CDI - Temps plein",
    experience: "3+ ans",
    description: "Rejoignez notre équipe terrain pour superviser l'exécution de projets de construction d'envergure.",
    responsibilities: [
      "Coordination des équipes de chantier",
      "Suivi de l'avancement et des délais",
      "Gestion des approvisionnements",
      "Application des normes de sécurité",
    ],
    requirements: [
      "Formation en génie civil ou construction",
      "3+ ans d'expérience en gestion de chantier",
      "Connaissance des normes de sécurité",
      "Leadership et capacité à gérer le stress",
    ],
  },
  {
    title: "Architecte Projet",
    department: "Architecture",
    location: "Dakar, Sénégal",
    type: "CDI - Temps plein",
    experience: "4+ ans",
    description: "Concevez des bâtiments innovants et durables qui marquent le paysage sénégalais.",
    responsibilities: [
      "Conception architecturale complète",
      "Élaboration des plans et dossiers techniques",
      "Collaboration avec ingénieurs et clients",
      "Suivi de réalisation des projets",
    ],
    requirements: [
      "Diplôme d'architecte reconnu",
      "Portfolio démontrant créativité et réalisations",
      "Maîtrise d'ArchiCAD, SketchUp, AutoCAD",
      "Sensibilité au design durable",
    ],
  },
  {
    title: "Responsable QSE",
    department: "Qualité & Sécurité",
    location: "Dakar, Sénégal",
    type: "CDI - Temps plein",
    experience: "3+ ans",
    description: "Garantissez l'excellence et la sécurité sur tous nos chantiers.",
    responsibilities: [
      "Mise en place des systèmes QSE",
      "Audits et contrôles réguliers",
      "Formation des équipes aux normes",
      "Gestion de la documentation",
    ],
    requirements: [
      "Formation en QSE ou HSE",
      "Certification ISO 9001, 14001, 45001",
      "Expérience dans le secteur BTP",
      "Rigueur et sens de l'organisation",
    ],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Évolution de Carrière",
    description: "Plan de carrière personnalisé avec promotions basées sur les performances et l'engagement.",
  },
  {
    icon: GraduationCap,
    title: "Formation Continue",
    description: "Programmes de formation réguliers pour développer vos compétences techniques et managériales.",
  },
  {
    icon: Heart,
    title: "Avantages Sociaux",
    description: "Assurance santé familiale, prime de transport, tickets restaurant et bonus de performance.",
  },
  {
    icon: Users,
    title: "Esprit d'Équipe",
    description: "Culture d'entreprise collaborative avec team buildings et événements réguliers.",
  },
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    cv: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Votre candidature a été envoyée avec succès! Nous vous contacterons sous 48h.")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider
        images={careerImages}
        title="Carrières chez SECIS SARL"
        subtitle="Construisez votre avenir avec nous"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Rejoignez Notre Équipe
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Façonnez l'Avenir de la Construction au Sénégal</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Chez SECIS SARL, nous investissons dans nos talents. Rejoignez une équipe passionnée et dynamique où votre
              contribution fait vraiment la différence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Postes Disponibles</h2>
            <div className="space-y-6">
              {jobOffers.map((job, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-3 text-sm text-foreground/60">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                          {job.experience}
                        </span>
                      </div>

                      <p className="text-foreground/70 mb-6 leading-relaxed">{job.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5 text-accent" />
                            Responsabilités
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-accent" />
                            Profil Recherché
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-border">
                        <Button className="w-full sm:w-auto">Postuler Maintenant</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Candidature Spontanée</h2>
                <p className="text-foreground/70">
                  Vous ne trouvez pas le poste qui vous correspond? Envoyez-nous votre candidature spontanée!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nom Complet *</label>
                    <Input
                      required
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                    <Input
                      type="tel"
                      required
                      placeholder="+221 XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Poste Souhaité *</label>
                    <Input
                      required
                      placeholder="Ex: Ingénieur Civil"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Années d'Expérience *</label>
                  <Input
                    required
                    placeholder="Ex: 5 ans"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Lettre de Motivation</label>
                  <Textarea
                    placeholder="Parlez-nous de vous et de vos motivations..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">CV (PDF) *</label>
                  <Input
                    type="file"
                    required
                    accept=".pdf"
                    onChange={(e) => setFormData({ ...formData, cv: e.target.files?.[0] || null })}
                  />
                  <p className="text-xs text-foreground/60 mt-2">Format PDF uniquement, max 5MB</p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Envoyer ma Candidature
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
