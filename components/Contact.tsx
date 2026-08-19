const LINKEDIN_HREF = "https://www.linkedin.com/in/gianfranco-lucarelli-2ab8ba209"
const GITHUB_HREF = "https://github.com/glucarelli9"
const EMAIL_HREF = "mailto:glucarelli9@gmail.com"
const CV_HREF = "/cv-gianfranco-lucarelli.pdf"

export function Contact() {
  return (
    <footer id="contacto" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">Contacto</h2>
        <p className="text-slate-600">
          ¿Buscás sumar a alguien full stack al equipo? Escribime.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={EMAIL_HREF}
            className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            glucarelli9@gmail.com
          </a>
          <a
            href={LINKEDIN_HREF}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_HREF}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href={CV_HREF}
            download
            className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            Descargar CV
          </a>
        </div>
        <p className="mt-8 text-xs text-slate-400">© 2026 Gianfranco Lucarelli</p>
      </div>
    </footer>
  )
}
