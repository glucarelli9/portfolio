"use client"

import { useState } from "react"
import { ProjectMockup } from "./ProjectMockup"
import type { Project } from "@/data/projects"

export function ProjectMedia({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false)

  if (!project.image || failed) {
    return <ProjectMockup title={project.title} gradient={project.gradient} />
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.image}
      alt={`Captura de pantalla de ${project.title}`}
      className="h-40 w-full rounded-t-lg object-cover"
      onError={() => setFailed(true)}
    />
  )
}
