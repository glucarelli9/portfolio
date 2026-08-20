import { describe, it, expect } from "vitest"
import { projects } from "./projects"

describe("projects data", () => {
  it("has exactly 10 projects", () => {
    expect(projects).toHaveLength(10)
  })

  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it("every project has non-empty required fields", () => {
    for (const project of projects) {
      expect(project.title.length).toBeGreaterThan(0)
      expect(project.description.length).toBeGreaterThan(0)
      expect(project.stack.length).toBeGreaterThan(0)
      expect(project.gradient).toHaveLength(2)
    }
  })

  it("every link, when present, is an absolute URL", () => {
    for (const project of projects) {
      if (project.link) {
        expect(project.link.href.startsWith("http")).toBe(true)
      }
    }
  })
})
