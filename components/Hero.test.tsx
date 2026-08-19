import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Hero } from "./Hero"

describe("Hero", () => {
  it("renders name and title", () => {
    render(<Hero />)
    expect(screen.getByRole("heading", { name: "Gianfranco Lucarelli" })).toBeInTheDocument()
    expect(screen.getByText("Senior Full Stack Developer")).toBeInTheDocument()
  })

  it("links to the CV, LinkedIn, GitHub and email", () => {
    render(<Hero />)
    expect(screen.getByRole("link", { name: "Descargar CV" })).toHaveAttribute(
      "href",
      "/cv-gianfranco-lucarelli.pdf"
    )
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/gianfranco-lucarelli-2ab8ba209"
    )
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/glucarelli9"
    )
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:glucarelli9@gmail.com"
    )
  })
})
