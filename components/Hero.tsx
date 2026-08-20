import Image from "next/image"
import { TypewriterText } from "./TypewriterText"
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons"

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
          title="Descargar CV"
          aria-label="Descargar CV"
          className="glitch-hover rounded-md border border-term-cyan p-3 text-term-cyan shadow-[0_0_10px_rgba(0,255,200,0.3)] hover:bg-term-cyan/10"
        >
          <DownloadIcon />
        </a>
        <a
          href={LINKEDIN_HREF}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
          className="glitch-hover rounded-md border border-term-border p-3 text-term-dim hover:border-term-magenta hover:text-term-magenta"
        >
          <LinkedinIcon />
        </a>
        <a
          href={GITHUB_HREF}
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          aria-label="GitHub"
          className="glitch-hover rounded-md border border-term-border p-3 text-term-dim hover:border-term-magenta hover:text-term-magenta"
        >
          <GithubIcon />
        </a>
        <a
          href={EMAIL_HREF}
          title="Email"
          aria-label="Email"
          className="glitch-hover rounded-md border border-term-border p-3 text-term-dim hover:border-term-magenta hover:text-term-magenta"
        >
          <MailIcon />
        </a>
      </div>
    </section>
  )
}
