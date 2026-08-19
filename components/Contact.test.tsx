import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Contact } from "./Contact"

describe("Contact", () => {
  it("links to email, LinkedIn, GitHub and the CV", () => {
    render(<Contact />)
    expect(screen.getByRole("link", { name: "glucarelli9@gmail.com" })).toHaveAttribute(
      "href",
      "mailto:glucarelli9@gmail.com"
    )
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/gianfranco-lucarelli-2ab8ba209"
    )
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/glucarelli9"
    )
    expect(screen.getByRole("link", { name: "Descargar CV" })).toHaveAttribute(
      "href",
      "/cv-gianfranco-lucarelli.pdf"
    )
  })
})
