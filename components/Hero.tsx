import Image from "next/image"

const CV_HREF = "/cv-gianfranco-lucarelli.pdf"
const LINKEDIN_HREF = "https://www.linkedin.com/in/gianfranco-lucarelli-2ab8ba209"
const GITHUB_HREF = "https://github.com/glucarelli9"
const EMAIL_HREF = "mailto:glucarelli9@gmail.com"

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center"
    >
      <Image
        src="/profile.png"
        alt="Foto de Gianfranco Lucarelli"
        width={160}
        height={160}
        className="rounded-full object-cover"
        priority
      />
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Gianfranco Lucarelli</h1>
        <p className="mt-1 text-lg text-blue-600 dark:text-blue-400">Senior Full Stack Developer</p>
      </div>
      <p className="max-w-2xl text-slate-600 dark:text-slate-300">
        Desarrollo aplicaciones full stack en producción: integraciones enterprise
        (Microsoft Graph, Azure AD), automatización, IA aplicada y sistemas con uso
        real diario.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={CV_HREF}
          download
          className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Descargar CV
        </a>
        <a
          href={LINKEDIN_HREF}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href={GITHUB_HREF}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          href={EMAIL_HREF}
          className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
        >
          Email
        </a>
      </div>
    </section>
  )
}
