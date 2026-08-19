import { ProjectMockup } from "./ProjectMockup"
import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <ProjectMockup title={project.title} gradient={project.gradient} />
      <div className="p-5">
        <h3 className="font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{project.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
              {tech}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            {project.link.label} →
          </a>
        )}
      </div>
    </article>
  )
}
