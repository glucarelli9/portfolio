import { skillGroups } from "@/data/skills"
import { Reveal } from "./Reveal"

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <h2 className="text-2xl font-semibold text-term-green">
          <span className="text-term-dim" aria-hidden="true">#</span> Stack técnico
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-term-dim">
                {group.category}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-term-border bg-term-panel px-3 py-1 text-sm text-term-cyan"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
