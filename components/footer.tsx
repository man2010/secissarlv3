import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251109-WA0033-XQrUNvTfFPPPdCGHA5VJyqxVYPGUXk.jpg"
              alt="SECIS SARL"
              width={200}
              height={80}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Sénégalaise de Construction, d'Ingénierie et de Services
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Réhabilitation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Rénovation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Ouvrages d'Art
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Assainissement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Entreprise</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-accent transition-colors">
                  Partenariats
                </Link>
              </li>
              <li>
                <Link href="/investment" className="hover:text-accent transition-colors">
                  Investissement
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="hover:text-accent transition-colors">
                  CGU
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span>Diamaguene, Darou Rahmane Villa N°360</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="tel:+221786328699" className="hover:text-accent transition-colors">
                  78 632 86 99
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="mailto:secissarl@gmail.com" className="hover:text-accent transition-colors">
                  secissarl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} SECIS SARL. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center group transition-colors"
            >
              <Facebook className="w-4 h-4 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center group transition-colors"
            >
              <Linkedin className="w-4 h-4 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center group transition-colors"
            >
              <Instagram className="w-4 h-4 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
