import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Partners() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nos Partenaires</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous collaborons avec des partenaires de confiance pour garantir la qualité et l'excellence de nos services.
          </p>
        </div>

        <Card className="border-2">
          <CardContent className="p-12">
            <div className="flex flex-wrap items-center justify-center gap-12">
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/construction-company-logo.png"
                  alt="Partenaire 1"
                  width={160}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/engineering-firm-logo.png"
                  alt="Partenaire 2"
                  width={160}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/architecture-company-logo.jpg"
                  alt="Partenaire 3"
                  width={160}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src="/infrastructure-company-logo.png"
                  alt="Partenaire 4"
                  width={160}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
