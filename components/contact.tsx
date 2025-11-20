"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Contactez-Nous</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Parlons de votre projet. Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <Input id="name" placeholder="Votre nom" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <Input id="phone" type="tel" placeholder="+221 XX XXX XX XX" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Décrivez votre projet..." rows={5} required />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251109-WA0033-XQrUNvTfFPPPdCGHA5VJyqxVYPGUXk.jpg"
                    alt="SECIS SARL"
                    width={200}
                    height={80}
                    className="h-16 w-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-primary-foreground/90">Diamaguene, Darou Rahmane Villa N°360</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-primary-foreground/90">78 632 86 99</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-primary-foreground/90">secissarl@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-accent/10 hover:bg-accent rounded-lg flex items-center justify-center group transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-accent/10 hover:bg-accent rounded-lg flex items-center justify-center group transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-accent/10 hover:bg-accent rounded-lg flex items-center justify-center group transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-accent text-accent-foreground">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Horaires d'ouverture</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
