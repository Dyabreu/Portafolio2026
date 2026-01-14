import { Badge } from "@/components/ui/badge"

const technologies = {
  languages: ["C#", ".NET", "ASP.NET Core", "TypeScript"],
  frontend: ["Angular", "WPF"],
  backend: ["REST APIs", "Entity Framework"],
  database: ["SQL Server"],
  cloud: ["Azure"],
  tools: ["Git", "GitHub", "Azure DevOps", "AI Tools"],
}

export function TechStack() {
  return (
    <section className="py-12 md:py-16 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">Tech Stack</h2>
          </div>
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              {Object.values(technologies)
                .flat()
                .map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="font-normal text-foreground border-border hover:bg-secondary transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Languages & Frameworks</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {technologies.languages.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Frontend</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {technologies.frontend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Backend & Database</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[...technologies.backend, ...technologies.database].map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Cloud</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {technologies.cloud.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Tools</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {technologies.tools.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
