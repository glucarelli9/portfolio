import Image from "next/image"
import { TypewriterText } from "./TypewriterText"

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
        className="rounded-full object-cover ring-2 ring-term-cyan/50"
        priority
      />
      <div>
        <p className="text-xs text-term-dim">gianfranco@portfolio:~$ whoami</p>
        <h1 className="mt-1 text-3xl font-bold text-term-green">Gianfranco Lucarelli</h1>
        <p className="mt-1 text-lg text-term-cyan">
          <TypewriterText text="Senior Full Stack Developer" />
        </p>
      </div>
      <p className="max-w-2xl text-term-dim">
        Desarrollo aplicaciones full stack en producción: integraciones enterprise
        (Microsoft Graph, Azure AD), automatización, IA aplicada y sistemas con uso
        real diario.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={CV_HREF}
          download
          className="glitch-hover rounded-md border border-term-cyan px-5 py-2 text-sm font-medium text-term-cyan shadow-[0_0_10px_rgba(0,255,200,0.3)] hover:bg-term-cyan/10"
        >
          Descargar CV
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
          href={EMAIL_HREF}
          className="glitch-hover rounded-md border border-term-border px-5 py-2 text-sm font-medium text-term-dim hover:border-term-magenta hover:text-term-magenta"
        >
          Email
        </a>
      </div>
    </section>
  )
}
