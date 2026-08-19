import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Nav } from "./Nav"

describe("Nav", () => {
  it("renders a link for every section", () => {
    render(<Nav />)
    expect(screen.getByRole("link", { name: "Sobre mí" })).toHaveAttribute("href", "#sobre-mi")
    expect(screen.getByRole("link", { name: "Stack" })).toHaveAttribute("href", "#stack")
    expect(screen.getByRole("link", { name: "Proyectos" })).toHaveAttribute("href", "#proyectos")
    expect(screen.getByRole("link", { name: "Contacto" })).toHaveAttribute("href", "#contacto")
  })
})
