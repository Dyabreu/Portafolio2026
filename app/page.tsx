import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CaseStudy } from "@/components/case-study"
import { WebExperience } from "@/components/web-experience"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <CaseStudy />
        <WebExperience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
