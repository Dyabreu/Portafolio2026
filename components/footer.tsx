export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dayana Abreu. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
