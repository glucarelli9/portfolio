"use client"

import { useState } from "react"
import { ProjectMockup } from "./ProjectMockup"
import type { Project } from "@/data/projects"

export function ProjectMedia({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(project.image) && !failed

  return (
    <div className="overflow-hidden rounded-t-lg border-b border-term-border">
      <div className="flex items-center gap-1.5 bg-term-panel px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 truncate text-xs text-term-dim">~/proyectos/{project.slug}</span>
      </div>
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`Captura de pantalla de ${project.title}`}
          className="h-40 w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <ProjectMockup title={project.title} gradient={project.gradient} />
      )}
    </div>
  )
}
