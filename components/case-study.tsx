"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useCallback, useEffect } from "react"

const techStack = ["C#", ".NET", "WPF", "SQL Server", "Entity Framework", "Git"]

const businessHighlights = [
  "Each used iPhone managed as a unique object with Model, Storage, Color, Condition, Identifier (IMEI), and Status",
  "Accessories follow a traditional quantity-based inventory flow",
  "Financial data filterable by date with dashboards displaying total revenue, profit, and investment",
  "Support for multiple currencies (USD and ARS)",
]

const challenges = [
  "Modeling unique products instead of quantity-based inventory",
  "Managing multiple business flows in a single system",
  "Implementing consistent financial calculations",
  "Designing a maintainable WPF application with growing complexity",
]

const decisions = [
  "Choosing a desktop solution (WPF) for the initial phase based on business needs",
  "Treating each used iPhone as an independent entity",
  "Separating business flows for used devices and accessories",
  "Centralizing business logic in the application core",
  "Designing the system with a future web version in mind",
]

const screenshots = [
  {
    src: "/images/image4.png",
    alt: "IPhoneCenter Login Screen",
    caption: "Login",
  },
  {
    src: "/images/image3.png",
    alt: "IPhoneCenter Dashboard with monthly statistics and revenue charts",
    caption: "Dashboard",
  },
  {
    src: "/images/image2.png",
    alt: "IPhoneCenter Stock Management showing iPhone inventory",
    caption: "Stock",
  },
  {
    src: "/images/image.png",
    alt: "IPhoneCenter Sales tracking interface",
    caption: "Sales",
  },
]

export function CaseStudy() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }, [])

  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [lightboxOpen, goToPrevious, goToNext])

  return (
    <section id="case-study" className="py-12 md:py-16 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-sm font-medium text-foreground uppercase tracking-wide">Featured Project</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Used iPhone Business Management System</h3>
              <p className="text-sm text-muted-foreground mb-4">Desktop Application (WPF / .NET)</p>
              <p className="text-muted-foreground leading-relaxed">
                A desktop application built with WPF (.NET) to manage the complete operations of a business focused on
                selling used iPhones and accessories. Unlike traditional inventory systems, each used iPhone is treated as a unique entity, with its own lifecycle, condition, and financial impact.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-foreground">Application Screenshots</h4>
              <p className="text-xs text-muted-foreground">Click on any image to view larger</p>
              <div className="grid grid-cols-4 gap-2">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-video rounded-lg overflow-hidden border border-border/60 bg-muted hover:border-accent/60 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    <Image
                      src={screenshot.src || "/placeholder.svg"}
                      alt={screenshot.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-1.5">
                      <p className="text-[10px] text-white font-medium">{screenshot.caption}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-card border-border/60">
                <CardContent className="pt-6">
                  <h4 className="text-sm font-medium text-foreground mb-4">My Role</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full Stack development of the desktop application</li>
                    <li>• Design of the data model for individual used devices</li>
                    <li>• Implementation of business logic and workflows</li>
                    <li>• Development of WPF interfaces for usability</li>
                    <li>• User login and role-based access</li>
                    <li>• Stock, sales, and purchase management</li>
                    <li>• Repair workflows and accessory sales</li>
                    <li>• Revenue, investment and profit dashboards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/60">
                <CardContent className="pt-6">
                  <h4 className="text-sm font-medium text-foreground mb-4">Business Logic Highlights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {businessHighlights.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-card border-border/60">
                <CardContent className="pt-6">
                  <h4 className="text-sm font-medium text-foreground mb-4">Technical Challenges</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {challenges.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/60">
                <CardContent className="pt-6">
                  <h4 className="text-sm font-medium text-foreground mb-4">Key Decisions</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {decisions.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
              <Lock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                The source code is private because this is a real application in use. Architecture, workflows and
                technical decisions can be discussed during interviews.
              </p>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center" onClick={closeLightbox}>
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-background hover:text-background/80 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 p-2 text-background hover:text-background/80 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[currentIndex].src || "/placeholder.svg"}
              alt={screenshots[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 p-2 text-background hover:text-background/80 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Caption and thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <p className="text-background text-sm font-medium">{screenshots[currentIndex].caption}</p>
            <div className="flex gap-2">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(index)
                  }}
                  className={`relative w-16 h-10 rounded overflow-hidden border-2 transition-all ${
                    index === currentIndex ? "border-background" : "border-background/30 hover:border-background/60"
                  }`}
                >
                  <Image
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
