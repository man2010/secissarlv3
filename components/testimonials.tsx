'use client'

import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Amadou Diallo',
    role: 'Directeur Général, SONATEL',
    company: 'SONATEL',
    content:
      'SECIS SARL a réalisé la construction de notre nouveau siège social avec un professionnalisme exemplaire. Le projet a été livré dans les délais et la qualité des finitions est remarquable.',
    rating: 5,
    avatar: '/african-businessman-portrait.jpg',
  },
  {
    name: 'Fatou Sall',
    role: 'Maire de Thiès',
    company: 'Ville de Thiès',
    content:
      'Les travaux d\'aménagement urbain réalisés par SECIS ont transformé notre ville. Leur expertise technique et leur engagement pour le respect des délais sont impressionnants.',
    rating: 5,
    avatar: '/african-businesswoman-portrait.jpg',
  },
  {
    name: 'Ibrahima Ndiaye',
    role: 'PDG, Groupe NDIAYE Industries',
    company: 'NDIAYE Industries',
    content:
      'Pour la construction de notre complexe industriel, SECIS a démontré une maîtrise parfaite des normes internationales. Une équipe compétente et réactive.',
    rating: 5,
    avatar: '/african-executive-portrait.jpg',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La satisfaction de nos clients est notre priorité absolue. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand text-brand" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-brand">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
