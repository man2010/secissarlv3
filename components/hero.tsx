"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Play, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // commence muet pour autoPlay
  const videoRef = useRef<HTMLVideoElement>(null)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const togglePlayPause = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
      // On peut remettre le son dès que l'utilisateur interagit
      setIsMuted(false)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <section id="accueil" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* === Texte === */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-block">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Leader en Construction au Sénégal
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Bâtir l'avenir du <span className="text-accent">Sénégal</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              SECIS SARL est votre partenaire de confiance pour tous vos projets de construction,
              d'ingénierie et de travaux publics. Nous transformons vos visions en réalité avec excellence et innovation.
            </p>

            <div className="space-y-4">
              {[
                "Équipe d'experts qualifiés",
                "Projets livrés dans les délais & budget",
                "Matériel moderne & normes internationales"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("services")}
                className="h-14 px-8 font-semibold shadow-lg"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 font-semibold">
                <a href="/contact">Nous contacter</a>
              </Button>
            </div>
          </div>

          {/* === Vidéo avec contrôles === */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              poster="/secis.jpeg"
              className="w-full h-full object-cover aspect-video md:aspect-auto"
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src="/SECIS_SARL_Construction_Senegal.mp4" type="video/mp4" />
              <track kind="captions" src="" label="Aucun sous-titre" />
            </video>

            {/* Overlay sombre subtil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

            {/* Bouton Play central (seulement si pas en cours) */}
            {!isPlaying && (
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center group cursor-pointer z-10"
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <Play className="w-16 h-16 text-accent fill-current" />
                </div>
              </button>
            )}

            {/* Contrôles en bas */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20">
              {/* Badge DG */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-xl">
                <p className="text-sm font-semibold text-foreground">Message du Directeur Général</p>
                <p className="text-xs text-muted-foreground">M. Moustapha SAMB</p>
              </div>

              {/* Boutons Play + Son */}
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7" />
                  ) : (
                    <Play className="w-7 h-7 ml-1" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full transition-all hover:scale-110"
                >
                  {isMuted ? <VolumeX className="w-7 h-7" /> : <Volume2 className="w-7 h-7" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Icône Pause (tu peux l'ajouter si tu n’as pas déjà)
function Pause(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  )
}