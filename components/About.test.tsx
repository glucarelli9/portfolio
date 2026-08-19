import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { About } from "./About"

describe("About", () => {
  it("renders the 'Sobre mí' heading", () => {
    render(<About />)
    expect(screen.getByRole("heading", { name: "Sobre mí" })).toBeInTheDocument()
  })
})
