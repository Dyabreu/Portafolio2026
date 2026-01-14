import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Experience working on real production-like applications",
  "Strong experience with .NET across desktop and web environments",
  "Professional experience using Angular in enterprise web applications",
  "Focus on business logic, data modeling and maintainable architectures",
  "Experience handling bug fixes and critical issues",
  "Comfortable working with evolving requirements and complex domains",
  "Proactive, fast learner, and independent problem solver",
  "Regular use of AI tools such as GitHub Copilot and ChatGPT to improve productivity and code quality",
]

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">About</h2>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Full Stack Developer with a strong foundation in .NET and Angular, focused on building
              business-oriented applications that solve real problems. My experience spans desktop and web environments,
              always prioritizing clean architecture and maintainable code.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
