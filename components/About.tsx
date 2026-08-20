import { Reveal } from "./Reveal"

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold text-term-green">
          <span className="text-term-dim" aria-hidden="true">#</span> Sobre mí
        </h2>
        <p className="mt-4 text-term-dim">
          Empecé del lado de IT y con el tiempo terminé programando de tiempo
          completo. Hoy me dedico a construir sistemas que la gente usa todos
          los días en el trabajo real, no proyectos que se quedan en una demo.
          Toco todo el stack —base de datos, API, frontend— y en el camino me
          tocó meterme bastante en integraciones con Microsoft Graph y Azure
          AD, automatizar procesos que antes se hacían a mano, y sumar IA
          donde de verdad aporta algo.
        </p>
      </Reveal>
    </section>
  )
}
