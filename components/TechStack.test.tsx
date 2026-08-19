import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { TechStack } from "./TechStack"
import { skillGroups } from "@/data/skills"

describe("TechStack", () => {
  it("renders every category and at least one item per category", () => {
    render(<TechStack />)
    for (const group of skillGroups) {
      expect(screen.getByText(group.category)).toBeInTheDocument()
      expect(screen.getByText(group.items[0])).toBeInTheDocument()
    }
  })
})
