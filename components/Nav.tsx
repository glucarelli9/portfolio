type NavLink = { href: string; label: string }

const NAV_LINKS: NavLink[] = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-term-border bg-term-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold text-term-green">
          gianfranco@portfolio<span className="text-term-dim">:~$</span>
          <span className="ml-1 inline-block h-3.5 w-2 animate-term-blink bg-term-green align-middle" />
        </a>
        <ul className="flex gap-6 text-sm text-term-dim">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="glitch-hover hover:text-term-cyan">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
