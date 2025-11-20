"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    // Force autoplay même sur mobile
    const playPromise = videoRef.current?.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay bloqué → on reste muted
      })
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <>
      {/* Vidéo fixe en arrière-plan sur tout le site */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/secis-presentation-cover.jpg"   // ← ta belle image actuelle en couverture
        >
          {/* Remplace ces chemins dès que ta vidéo IA sera prête */}
          <source src="/videos/secis-presentation.mp4" type="video/mp4" />
          <source src="/videos/secis-presentation.webm" type="video/webm" />
        </video>

        {/* Overlay sombre pour lisibilité du contenu */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Bouton son (fixe en bas à droite) */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-4 shadow-2xl transition-all hover:scale-110"
        aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
      >
        {isMuted ? (
          <VolumeX className="w-7 h-7 text-orange-600" />
        ) : (
          <Volume2 className="w-7 h-7 text-orange-600" />
        )}
      </button>
    </>
  )
}