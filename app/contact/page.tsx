"use client"

import type React from "react"

import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const heroImages = [
    {
      url: "/contact-us-construction-office-professional-team.jpg",
      alt: "Contactez-nous",
    },
    {
      url: "/placeholder.svg?height=600&width=1920",
      alt: "Nos bureaux",
    },
    {
      url: "/placeholder.svg?height=600&width=1920",
      alt: "Rencontrez notre équipe",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Merci pour votre message! Nous vous répondrons dans les plus brefs délais.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider
        images={heroImages}
        title="Contactez-Nous"
        subtitle="Notre équipe est à votre écoute pour répondre à tous vos besoins"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Informations de Contact</h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                N'hésitez pas à nous contacter pour toute question ou demande de devis. Notre équipe est disponible pour
                vous accompagner dans vos projets.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Adresse</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Diamaguène, Darou Rahmane Villa N°360
                      <br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Téléphone</h3>
                    <a href="tel:+221786328699" className="text-muted-foreground hover:text-accent transition-colors">
                      +221 78 632 86 99
                    </a>
                    <br />
                    <a href="tel:+221786328699" className="text-muted-foreground hover:text-accent transition-colors">
                      +221 78 632 86 99
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                    <a
                      href="mailto:secissarl@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      secissarl@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Horaires</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lundi - Vendredi: 8h00 - 18h00
                      <br />
                      Samedi: 8h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-card-foreground mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Envoyez-nous un Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Nom Complet *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Objet de votre demande"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-background">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8626758626897!2d-17.46815!3d14.74425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ0JzM5LjMiTiAxN8KwMjgnMDUuMiJX!5e0!3m2!1sfr!2ssn!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation SECIS SARL"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Gérant</h2>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Moustapha SAMB</h3>
              <p className="text-lg text-muted-foreground">Ingénieur passionné et dynamique</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
