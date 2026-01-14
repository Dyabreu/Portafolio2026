import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground mb-4">Full Stack Developer</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6 text-balance">
            Hi, I'm Dayana Abreu
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            Full Stack Developer (.NET & Angular)
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I build business-oriented applications with complex data models, dashboards and real-world workflows,
            choosing the right technology for each context.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <Link
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              Learn more
              <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
