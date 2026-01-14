import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

const contactLinks = [
  {
    label: "Email",
    href: "mailto:dayanaabreu2103@gmail.com",
    icon: Mail,
    value: "dayanaabreu2103@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dayana-abreu-petit-032a6b144/",
    icon: Linkedin,
    value: "linkedin.com/in/dayana-abreu-petit",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">Contact</h2>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              If you'd like to discuss a project or just say hi, I'm always open to chat. Feel free to reach out through
              any of the channels below.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 group"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="p-2.5 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                    <link.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{link.label}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                      {link.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
