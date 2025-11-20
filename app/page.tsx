import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  )
}
