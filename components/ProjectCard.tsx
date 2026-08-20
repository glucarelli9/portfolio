import { ProjectMedia } from "./ProjectMedia"
import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-term-border bg-term-panel/60 transition-shadow hover:shadow-[0_0_20px_rgba(0,255,200,0.15)]">
      <ProjectMedia project={project} />
      <div className="p-5">
        <h3 className="glitch-hover inline-block font-semibold text-term-green">{project.title}</h3>
        <p className="mt-2 text-sm text-term-dim">{project.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-term-border px-2.5 py-1 text-xs text-term-cyan"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
            className="glitch-hover mt-4 inline-block text-sm font-medium text-term-magenta hover:underline"
          >
            {project.link.label} →
          </a>
        )}
      </div>
    </article>
  )
}
