import { ThemeToggle } from "./ThemeToggle"

type NavLink = { href: string; label: string }

const NAV_LINKS: NavLink[] = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-slate-900 dark:text-white">
          Gianfranco Lucarelli
        </a>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm text-slate-600 dark:text-slate-300">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
