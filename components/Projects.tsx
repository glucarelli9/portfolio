import { projects } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Proyectos</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
