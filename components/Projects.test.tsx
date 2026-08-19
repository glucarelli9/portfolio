import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Projects } from "./Projects"
import { projects } from "@/data/projects"

describe("Projects", () => {
  it("renders a card for every project", () => {
    render(<Projects />)
    for (const project of projects) {
      expect(screen.getAllByText(project.title).length).toBeGreaterThan(0)
    }
  })

  it("renders exactly one external link per project that defines one", () => {
    render(<Projects />)
    const withLink = projects.filter((p) => p.link)
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(withLink.length)
  })
})
