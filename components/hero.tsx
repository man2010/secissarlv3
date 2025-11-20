"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={1400}
      height={950}
      className={className}
      quality={95}
      priority
    />
  )
}

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="accueil" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 to-orange-50/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* === Texte === */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-block">
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                Leader en Construction au Sénégal
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Bâtir l'avenir du <span className="text-orange-600">Sénégal</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              SECIS SARL est votre partenaire de confiance pour tous vos projets de construction,
              d'ingénierie et de travaux publics. Nous transformons vos visions en réalité avec excellence et innovation.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-600 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Équipe d'experts qualifiés</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-600 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Projets livrés dans les délais & budget</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-orange-600 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Matériel moderne & normes internationales</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("services")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 h-14 font-semibold shadow-lg"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 text-gray-800 hover:bg-gray-100 h-14 font-semibold"
              >
                Nous contacter
              </Button>
            </div>
          </div>

          {/* === Vidéo + Image de couverture === */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto">
            {/* Vidéo */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              poster="/secis.jpeg"
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src="/videos/presentation-secis.mp4" type="video/mp4" />
              <source src="/videos/presentation-secis.webm" type="video/webm" />
              {/* Fallback image si vidéo bloquée */}
              <ImageWithFallback
                src="/secis-presentation-cover.jpg"
                alt="Présentation SECIS SARL - Le DG vous accueille"
                className="w-full h-full object-cover"
              />
            </video>

            {/* Overlay sombre pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

            {/* Bouton Play décoratif (optionnel) */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl opacity-90 hover:opacity-100 transition-opacity">
              <Play className="w-8 h-8 text-orange-600" fill="currentColor" />
            </div>

            {/* Petit badge en bas à gauche */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur rounded-lg px-5 py-3 shadow-lg">
              <p className="text-sm font-semibold text-gray-800">Message du Directeur Général</p>
              <p className="text-xs text-gray-600">M. Moustapha SAMB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}