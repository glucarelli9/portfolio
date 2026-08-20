import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Home from "./page"

describe("Home page", () => {
  it("renders the top-level section headings in order", () => {
    render(<Home />)
    // Each of the 9 ProjectCards also renders an <h3> with the project
    // title (Task 7) — scope this check to h1/h2 section headings only,
    // not screen.getAllByRole("heading"), which would also pick those up.
    const heroHeading = screen.getByRole("heading", { level: 1 })
    const sectionHeadings = screen.getAllByRole("heading", { level: 2 })
    const headingText = [heroHeading, ...sectionHeadings].map((h) => h.textContent)
    expect(headingText).toEqual([
      "Gianfranco Lucarelli",
      "# Sobre mí",
      "# Stack técnico",
      "# Proyectos",
      "# Contacto",
    ])
  })
})
