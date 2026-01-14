import { Badge } from "@/components/ui/badge"
import { Building2 } from "lucide-react"

const experienceHighlights = [
  "Built with Angular and .NET APIs",
  "Used to manage internal company projects",
  "Heavy use of calculations, categorizations and business rules",
  "Integration with multiple external APIs",
  "Front-End consuming data through structured services",
  "Enterprise-level codebase and collaboration",
]

export function WebExperience() {
  return (
    <section id="experience" className="py-12 md:py-16 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <Building2 className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Enterprise Financial Web Application</h3>
                <p className="text-sm text-muted-foreground mb-4">Full Stack Developer • Angular & .NET</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Professional experience working on a large enterprise financial web application used to manage internal
              company projects. The system involved complex business logic including calculations, categorizations, and
              integration with multiple external APIs.
            </p>

            <ul className="space-y-2">
              {experienceHighlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">—</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary" className="font-normal">
                Angular
              </Badge>
              <Badge variant="secondary" className="font-normal">
                .NET
              </Badge>
              <Badge variant="secondary" className="font-normal">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="font-normal">
                REST APIs
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
