import { Reveal } from "./Reveal"

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold text-term-green">
          <span className="text-term-dim" aria-hidden="true">#</span> Sobre mí
        </h2>
        <p className="mt-4 text-term-dim">
          Full stack developer con foco en construir software que se usa todos los
          días en producción, no solo demos. Trabajo en todo el ciclo: desde el
          diseño de la base de datos y la API hasta la interfaz final, pasando por
          integraciones con sistemas enterprise (Microsoft Graph, Azure AD),
          automatización de procesos y funcionalidades asistidas por IA.
        </p>
      </Reveal>
    </section>
  )
}
