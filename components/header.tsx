"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEquipmentDropdownOpen, setIsEquipmentDropdownOpen] = useState(false)
 
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251109-WA0033-XQrUNvTfFPPPdCGHA5VJyqxVYPGUXk.jpg"
              alt="SECIS SARL Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              À Propos
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors ${
                isActive("/services") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors ${
                isActive("/projects") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Projets
            </Link>

            {/*<Link
              href="/equipment"
              className={`text-sm font-medium transition-colors ${
                isActive("/equipment") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Moyens & Location
            </Link>*/}
            <div
              className="relative"
              onMouseEnter={() => setIsEquipmentDropdownOpen(true)}
              onMouseLeave={() => setIsEquipmentDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/equipment") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                Moyens et Locations
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isEquipmentDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isEquipmentDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg py-2 animate-in fade-in slide-in-from-top-2">
                  <Link
                    href="/equipment/materials"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                  >
                    Vente de Matériaux
                  </Link>
                  <Link
                    href="/equipment/rentals"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                  >
                    Location d'Équipements
                  </Link>
                  <Link
                    href="/equipment/machinery"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                  >
                    Engins de Chantier
                  </Link>
                </div>
              )}
            </div>
            
            
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-accent" : "text-foreground hover:text-accent"
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Nous Contacter</Button>
            </Link>
          </nav>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors py-2 ${
                  isActive("/") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                Accueil
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors py-2 ${
                  isActive("/about") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                À Propos
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors py-2 ${
                  isActive("/services") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors py-2 ${
                  isActive("/projects") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                Projets
              </Link>

              {/*<Link
                href="/equipment"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors py-2 ${
                  isActive("/equipment") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                Moyens & Location
              </Link>*/}
              <div className="border-t border-border pt-2 mt-2">
                <p className="text-sm font-semibold text-muted-foreground px-2 mb-2">Moyens et Locations</p>
                <Link
                  href="/equipment/materials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left text-sm font-medium transition-colors py-2 pl-4 block hover:text-accent"
                >
                  Vente de Matériaux
                </Link>
                <Link
                  href="/equipment/rentals"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left text-sm font-medium transition-colors py-2 pl-4 block hover:text-accent"
                >
                  Location d'Équipements
                </Link>
                <Link
                  href="/equipment/machinery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left text-sm font-medium transition-colors py-2 pl-4 block hover:text-accent"
                >
                  Engins de Chantier
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left text-sm font-medium transition-colors py-2 ${
                  isActive("/contact") ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                Contact
              </Link>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-foreground">Mode Sombre</span>
                <ThemeToggle />
              </div>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">Nous Contacter</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
