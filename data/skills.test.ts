import { describe, it, expect } from "vitest"
import { skillGroups } from "./skills"

describe("skills data", () => {
  it("has exactly 5 categories", () => {
    expect(skillGroups).toHaveLength(5)
  })

  it("every category has at least one item", () => {
    for (const group of skillGroups) {
      expect(group.category.length).toBeGreaterThan(0)
      expect(group.items.length).toBeGreaterThan(0)
    }
  })
})
