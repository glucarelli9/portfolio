import { Reveal } from "./Reveal"

const LINKEDIN_HREF = "https://www.linkedin.com/in/gianfranco-lucarelli-2ab8ba209"
const GITHUB_HREF = "https://github.com/glucarelli9"
const EMAIL_HREF = "mailto:glucarelli9@gmail.com"
const CV_HREF = "/cv-gianfranco-lucarelli.pdf"

export function Contact() {
  return (
    <footer id="contacto" className="border-t border-term-border bg-term-panel">
      <Reveal>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-term-green">
            <span className="text-term-dim" aria-hidden="true">#</span> Contacto
          </h2>
          <p className="text-term-dim">¿Buscás sumar a alguien full stack al equipo? Escribime.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={EMAIL_HREF}
              className="glitch-hover rounded-md border border-term-cyan px-5 py-2 text-sm font-medium text-term-cyan shadow-[0_0_10px_rgba(0,255,200,0.3)] hover:bg-term-cyan/10"
            >
              glucarelli9@gmail.com
            </a>
            <a
              href={LINKEDIN_HREF}
              target="_blank"
              rel="noreferrer"
              className="glitch-hover rounded-md border border-term-border px-5 py-2 text-sm font-medium text-term-dim hover:border-term-magenta hover:text-term-magenta"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB_HREF}
              target="_blank"
              rel="noreferrer"
              className="glitch-hover rounded-md border border-term-border px-5 py-2 text-sm font-medium text-term-dim hover:border-term-magenta hover:text-term-magenta"
            >
              GitHub
            </a>
            <a
              href={CV_HREF}
              download
              className="glitch-hover rounded-md border border-term-border px-5 py-2 text-sm font-medium text-term-dim hover:border-term-magenta hover:text-term-magenta"
            >
              Descargar CV
            </a>
          </div>
          <p className="mt-8 text-xs text-term-dim/60">© 2026 Gianfranco Lucarelli</p>
        </div>
      </Reveal>
    </footer>
  )
}
