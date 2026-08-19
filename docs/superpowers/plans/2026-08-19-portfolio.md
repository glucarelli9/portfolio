# Portfolio Personal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a single-page Next.js portfolio site showcasing Gianfranco Lucarelli's 9 full stack projects, for job search visibility with recruiters.

**Architecture:** Static Next.js (App Router) site, no backend/DB/CMS — project and skill data live in typed TS arrays in the repo. Each visual section is an isolated, independently testable component; `app/page.tsx` assembles them in order.

**Tech Stack:** Next.js 15, React 18, TypeScript, Tailwind CSS 3, Vitest + React Testing Library for component tests, deployed to Vercel.

**Spec:** `docs/superpowers/specs/2026-08-19-portfolio-design.md`

## Global Constraints

- Single-page site (one scrollable route), no backend, no database, no contact form — only static links (spec: Alcance).
- Light theme only, one accent color (blue), no dark mode for now (spec: Estilo visual).
- Exactly 9 projects, in the order and with the descriptions/stacks listed in the spec's "Proyectos a incluir" section.
- Project images are generic gradient mockups, never real screenshots (spec: Estilo visual).
- `public/profile.png` and `public/cv-gianfranco-lucarelli.pdf` already exist in the repo — do not regenerate them.
- Deploy target: Vercel, GitHub repo `glucarelli9/portfolio` (spec: Stack técnico del sitio).
- Contact links: email `glucarelli9@gmail.com`, LinkedIn `https://www.linkedin.com/in/gianfranco-lucarelli-2ab8ba209`, GitHub `https://github.com/glucarelli9`, CV at `/cv-gianfranco-lucarelli.pdf`.

---

### Task 1: Project scaffold (Next.js + Tailwind + Vitest)

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `.gitignore`
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `app/page.tsx`

**Interfaces:**
- Consumes: nothing (first task)
- Produces: a buildable Next.js app with Tailwind and Vitest wired up; every later task's component test runs through this config. Path alias `@/*` resolves to the repo root (used as `@/data/projects`, `@/components/Nav`, etc.).

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.1",
    "@types/node": "^20.14.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "jsdom": "^25.0.0",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.0",
    "vitest": "^2.1.1"
  }
}
```

- [ ] **Step 2: Write `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Write `next.config.mjs`, `tailwind.config.ts`, `postcss.config.js`**

`next.config.mjs`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {}

export default nextConfig
```

`tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
```

`postcss.config.js`:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 4: Write `vitest.config.ts` and `vitest.setup.ts`**

`vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
})
```

`vitest.setup.ts`:
```ts
import "@testing-library/jest-dom/vitest"
```

- [ ] **Step 5: Write `.gitignore`**

```
node_modules
.next
```

- [ ] **Step 6: Write `app/layout.tsx`, `app/globals.css`, `app/page.tsx`**

`app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`app/layout.tsx`:
```tsx
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gianfranco Lucarelli — Senior Full Stack Developer",
  description:
    "Portfolio de proyectos full stack: Next.js, Node.js, integraciones enterprise e IA aplicada.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased text-slate-900">{children}</body>
    </html>
  )
}
```

`app/page.tsx` (temporary placeholder — replaced in Task 8):
```tsx
export default function Home() {
  return <div className="p-10">Portfolio en construcción.</div>
}
```

- [ ] **Step 7: Install dependencies**

Run: `npm install`
Expected: installs without error, creates `node_modules` and `package-lock.json`.

- [ ] **Step 8: Verify the scaffold builds**

Run: `npm run build`
Expected: `Compiled successfully`, no type errors.

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json tsconfig.json next.config.mjs tailwind.config.ts postcss.config.js vitest.config.ts vitest.setup.ts .gitignore app
git commit -m "chore: scaffold Next.js + Tailwind + Vitest"
```

---

### Task 2: Project data module

**Files:**
- Create: `data/projects.ts`
- Test: `data/projects.test.ts`

**Interfaces:**
- Consumes: nothing
- Produces: `type Project = { slug: string; title: string; description: string; stack: string[]; gradient: [string, string]; link?: { label: string; href: string } }` and `projects: Project[]` (9 entries), both exported from `data/projects.ts`. Later tasks import these as `import { projects } from "@/data/projects"` and `import type { Project } from "@/data/projects"`.

- [ ] **Step 1: Write the failing test**

`data/projects.test.ts`:
```ts
import { describe, it, expect } from "vitest"
import { projects } from "./projects"

describe("projects data", () => {
  it("has exactly 9 projects", () => {
    expect(projects).toHaveLength(9)
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run data/projects.test.ts`
Expected: FAIL — `data/projects.ts` does not exist yet.

- [ ] **Step 3: Write the implementation**

`data/projects.ts`:
```ts
export type Project = {
  slug: string
  title: string
  description: string
  stack: string[]
  gradient: [string, string]
  link?: { label: string; href: string }
}

export const projects: Project[] = [
  {
    slug: "srk-rpg",
    title: "SRK RPG / Prode Picante",
    description:
      "Plataforma de predicciones deportivas con lógica de scoring por fases y multiplicadores, en producción con uso masivo de empleados.",
    stack: ["Next.js", "Prisma", "NextAuth", "PostgreSQL"],
    gradient: ["#1d4ed8", "#1e3a8a"],
  },
  {
    slug: "changas-app",
    title: "Changas App",
    description:
      "Marketplace de changas con chat en tiempo real: indicador de escritura, respuesta con swipe y vista de fotos.",
    stack: ["MongoDB", "Node.js", "WebSockets"],
    gradient: ["#0891b2", "#0e7490"],
  },
  {
    slug: "chess-profe",
    title: "Chess Profe",
    description:
      "App de ajedrez educativo con motor de reglas propio. Repo público, flujo de ramas main/dev.",
    stack: ["React", "Vite", "TypeScript", "chess.js", "Supabase"],
    gradient: ["#334155", "#0f172a"],
    link: { label: "Ver demo", href: "https://chess-profe.vercel.app" },
  },
  {
    slug: "indicio",
    title: "Indicio",
    description:
      "SaaS de análisis de legajos penales asistido por IA, para uso legal (CPP Jujuy/Salta).",
    stack: ["Next.js", "Groq", "Supabase"],
    gradient: ["#7c3aed", "#5b21b6"],
    link: { label: "Ver demo", href: "https://indicio-olive.vercel.app" },
  },
  {
    slug: "srk-nomina",
    title: "SRK Nómina",
    description:
      "Sistema de gestión de nómina con roles y permisos granulares, integrado con la API de Power BI.",
    stack: ["Node.js", "Express"],
    gradient: ["#16a34a", "#15803d"],
  },
  {
    slug: "teams-creator",
    title: "Teams Creator",
    description:
      "Automatización que crea equipos de Microsoft Teams y carpetas de SharePoint vía Graph API, con dos apps Azure AD (cert + secret).",
    stack: ["Node.js", "Express", "Microsoft Graph API"],
    gradient: ["#2563eb", "#1e40af"],
  },
  {
    slug: "aguero-demo",
    title: "Agüero Automotores Demo",
    description:
      "Demo de plataforma de venta de vehículos usados con alertas push reales (PWA) para un cliente.",
    stack: ["Next.js", "Supabase", "Web Push"],
    gradient: ["#ea580c", "#c2410c"],
    link: { label: "Ver demo", href: "https://aguero-demo.vercel.app" },
  },
  {
    slug: "srk-comida",
    title: "SRK Comida",
    description:
      "App de pedidos de almuerzo multi-sede, con manejo de feriados y resumen de pedidos al cierre. Uso operativo diario real.",
    stack: ["Node.js", "PM2"],
    gradient: ["#db2777", "#9d174d"],
  },
  {
    slug: "sanz-berger",
    title: "Sanz Berger Bienes Raíces",
    description:
      "Sitio de inmobiliaria en producción para cliente real, con backend propio y panel de administración.",
    stack: ["React", "Node.js", "SQLite"],
    gradient: ["#0d9488", "#115e59"],
    link: {
      label: "Ver sitio",
      href: "https://sanzbergerbienesraices.com.ar/",
    },
  },
]
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run data/projects.test.ts`
Expected: PASS (4 tests)

- [ ] **Step 5: Commit**

```bash
git add data/projects.ts data/projects.test.ts
git commit -m "feat: add project data module"
```

---

### Task 3: Skills data module

**Files:**
- Create: `data/skills.ts`
- Test: `data/skills.test.ts`

**Interfaces:**
- Consumes: nothing
- Produces: `type SkillGroup = { category: string; items: string[] }` and `skillGroups: SkillGroup[]` (5 entries), exported from `data/skills.ts`. Consumed by `components/TechStack.tsx` in Task 5 as `import { skillGroups } from "@/data/skills"`.

- [ ] **Step 1: Write the failing test**

`data/skills.test.ts`:
```ts
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run data/skills.test.ts`
Expected: FAIL — `data/skills.ts` does not exist yet.

- [ ] **Step 3: Write the implementation**

`data/skills.ts`:
```ts
export type SkillGroup = { category: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  { category: "Frontend", items: ["React", "Next.js", "Vite", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express"] },
  { category: "Datos", items: ["MongoDB", "PostgreSQL", "Supabase", "Prisma"] },
  { category: "Cloud/DevOps", items: ["Vercel", "Docker", "PM2", "Azure AD"] },
  { category: "Integraciones", items: ["Microsoft Graph API", "IA (Groq/LLM)"] },
]
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run data/skills.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add data/skills.ts data/skills.test.ts
git commit -m "feat: add skills data module"
```

---

### Task 4: Nav component

**Files:**
- Create: `components/Nav.tsx`
- Test: `components/Nav.test.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: `Nav()` named export from `components/Nav.tsx`, a sticky header with anchors to `#sobre-mi`, `#stack`, `#proyectos`, `#contacto`. Consumed by `app/page.tsx` in Task 8.

- [ ] **Step 1: Write the failing test**

`components/Nav.test.tsx`:
```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/Nav.test.tsx`
Expected: FAIL — `components/Nav.tsx` does not exist yet.

- [ ] **Step 3: Write the implementation**

`components/Nav.tsx`:
```tsx
type NavLink = { href: string; label: string }

const NAV_LINKS: NavLink[] = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-slate-900">
          Gianfranco Lucarelli
        </a>
        <ul className="flex gap-6 text-sm text-slate-600">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/Nav.test.tsx`
Expected: PASS (1 test)

- [ ] **Step 5: Commit**

```bash
git add components/Nav.tsx components/Nav.test.tsx
git commit -m "feat: add sticky nav component"
```

---

### Task 5: Hero and About sections

**Files:**
- Create: `components/Hero.tsx`
- Create: `components/About.tsx`
- Test: `components/Hero.test.tsx`
- Test: `components/About.test.tsx`

**Interfaces:**
- Consumes: `public/profile.png` (already in repo)
- Produces: `Hero()` named export (section `id="top"`) and `About()` named export (section `id="sobre-mi"`), both from their own files. Consumed by `app/page.tsx` in Task 8.

- [ ] **Step 1: Write the failing tests**

`components/Hero.test.tsx`:
```tsx
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
```

`components/About.test.tsx`:
```tsx
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { About } from "./About"

describe("About", () => {
  it("renders the 'Sobre mí' heading", () => {
    render(<About />)
    expect(screen.getByRole("heading", { name: "Sobre mí" })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run components/Hero.test.tsx components/About.test.tsx`
Expected: FAIL — `components/Hero.tsx` and `components/About.tsx` do not exist yet.

- [ ] **Step 3: Write the implementation**

`components/Hero.tsx`:
```tsx
import Image from "next/image"

const CV_HREF = "/cv-gianfranco-lucarelli.pdf"
const LINKEDIN_HREF = "https://www.linkedin.com/in/gianfranco-lucarelli-2ab8ba209"
const GITHUB_HREF = "https://github.com/glucarelli9"
const EMAIL_HREF = "mailto:glucarelli9@gmail.com"

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center"
    >
      <Image
        src="/profile.png"
        alt="Foto de Gianfranco Lucarelli"
        width={160}
        height={160}
        className="rounded-full object-cover"
        priority
      />
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Gianfranco Lucarelli</h1>
        <p className="mt-1 text-lg text-blue-600">Senior Full Stack Developer</p>
      </div>
      <p className="max-w-2xl text-slate-600">
        Desarrollo aplicaciones full stack en producción: integraciones enterprise
        (Microsoft Graph, Azure AD), automatización, IA aplicada y sistemas con uso
        real diario.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={CV_HREF}
          download
          className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Descargar CV
        </a>
        <a
          href={LINKEDIN_HREF}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
        >
          LinkedIn
        </a>
        <a
          href={GITHUB_HREF}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
        >
          GitHub
        </a>
        <a
          href={EMAIL_HREF}
          className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
        >
          Email
        </a>
      </div>
    </section>
  )
}
```

`components/About.tsx`:
```tsx
export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900">Sobre mí</h2>
      <p className="mt-4 text-slate-600">
        Full stack developer con foco en construir software que se usa todos los
        días en producción, no solo demos. Trabajo en todo el ciclo: desde el
        diseño de la base de datos y la API hasta la interfaz final, pasando por
        integraciones con sistemas enterprise (Microsoft Graph, Azure AD),
        automatización de procesos y funcionalidades asistidas por IA.
      </p>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run components/Hero.test.tsx components/About.test.tsx`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx components/About.tsx components/Hero.test.tsx components/About.test.tsx
git commit -m "feat: add hero and about sections"
```

---

### Task 6: Tech stack section

**Files:**
- Create: `components/TechStack.tsx`
- Test: `components/TechStack.test.tsx`

**Interfaces:**
- Consumes: `skillGroups` from `@/data/skills` (Task 3)
- Produces: `TechStack()` named export (section `id="stack"`) from `components/TechStack.tsx`. Consumed by `app/page.tsx` in Task 8.

- [ ] **Step 1: Write the failing test**

`components/TechStack.test.tsx`:
```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/TechStack.test.tsx`
Expected: FAIL — `components/TechStack.tsx` does not exist yet.

- [ ] **Step 3: Write the implementation**

`components/TechStack.tsx`:
```tsx
import { skillGroups } from "@/data/skills"

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900">Stack técnico</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {group.category}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/TechStack.test.tsx`
Expected: PASS (1 test)

- [ ] **Step 5: Commit**

```bash
git add components/TechStack.tsx components/TechStack.test.tsx
git commit -m "feat: add tech stack section"
```

---

### Task 7: Project mockup, card, and grid

**Files:**
- Create: `components/ProjectMockup.tsx`
- Create: `components/ProjectCard.tsx`
- Create: `components/Projects.tsx`
- Test: `components/Projects.test.tsx`

**Interfaces:**
- Consumes: `projects` and `type Project` from `@/data/projects` (Task 2)
- Produces: `ProjectMockup({ title, gradient }: { title: string; gradient: [string, string] })`, `ProjectCard({ project }: { project: Project })`, and `Projects()` (section `id="proyectos"`), all named exports. `Projects` is consumed by `app/page.tsx` in Task 8.

- [ ] **Step 1: Write the failing test**

`components/Projects.test.tsx`:
```tsx
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Projects } from "./Projects"
import { projects } from "@/data/projects"

describe("Projects", () => {
  it("renders a card for every project", () => {
    render(<Projects />)
    for (const project of projects) {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    }
  })

  it("renders exactly one external link per project that defines one", () => {
    render(<Projects />)
    const withLink = projects.filter((p) => p.link)
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(withLink.length)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/Projects.test.tsx`
Expected: FAIL — `components/Projects.tsx` does not exist yet.

- [ ] **Step 3: Write the implementation**

`components/ProjectMockup.tsx`:
```tsx
type ProjectMockupProps = {
  title: string
  gradient: [string, string]
}

export function ProjectMockup({ title, gradient }: ProjectMockupProps) {
  return (
    <div
      className="flex h-40 flex-col overflow-hidden rounded-t-lg"
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <div className="flex items-center gap-1.5 bg-black/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
      </div>
      <div className="flex flex-1 items-center justify-center px-4">
        <span className="text-center text-sm font-medium text-white">{title}</span>
      </div>
    </div>
  )
}
```

`components/ProjectCard.tsx`:
```tsx
import { ProjectMockup } from "./ProjectMockup"
import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <ProjectMockup title={project.title} gradient={project.gradient} />
      <div className="p-5">
        <h3 className="font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{project.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
              {tech}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            {project.link.label} →
          </a>
        )}
      </div>
    </article>
  )
}
```

`components/Projects.tsx`:
```tsx
import { projects } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-slate-900">Proyectos</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/Projects.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 5: Commit**

```bash
git add components/ProjectMockup.tsx components/ProjectCard.tsx components/Projects.tsx components/Projects.test.tsx
git commit -m "feat: add project mockup, card and grid"
```

---

### Task 8: Contact section and page assembly

**Files:**
- Create: `components/Contact.tsx`
- Test: `components/Contact.test.tsx`
- Modify: `app/page.tsx`
- Test: `app/page.test.tsx`

**Interfaces:**
- Consumes: `Nav` (Task 4), `Hero`/`About` (Task 5), `TechStack` (Task 6), `Projects` (Task 7), `Contact` (this task) — all named exports from `@/components/*`
- Produces: the final `Home()` default export from `app/page.tsx`, assembling every section in order.

- [ ] **Step 1: Write the failing tests**

`components/Contact.test.tsx`:
```tsx
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
```

`app/page.test.tsx`:
```tsx
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
      "Sobre mí",
      "Stack técnico",
      "Proyectos",
      "Contacto",
    ])
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run components/Contact.test.tsx app/page.test.tsx`
Expected: FAIL — `components/Contact.tsx` does not exist, and `app/page.tsx` still renders the Task 1 placeholder.

- [ ] **Step 3: Write the implementation**

`components/Contact.tsx`:
```tsx
const LINKEDIN_HREF = "https://www.linkedin.com/in/gianfranco-lucarelli-2ab8ba209"
const GITHUB_HREF = "https://github.com/glucarelli9"
const EMAIL_HREF = "mailto:glucarelli9@gmail.com"
const CV_HREF = "/cv-gianfranco-lucarelli.pdf"

export function Contact() {
  return (
    <footer id="contacto" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">Contacto</h2>
        <p className="text-slate-600">
          ¿Buscás sumar a alguien full stack al equipo? Escribime.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={EMAIL_HREF}
            className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            glucarelli9@gmail.com
          </a>
          <a
            href={LINKEDIN_HREF}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_HREF}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href={CV_HREF}
            download
            className="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            Descargar CV
          </a>
        </div>
        <p className="mt-8 text-xs text-slate-400">© 2026 Gianfranco Lucarelli</p>
      </div>
    </footer>
  )
}
```

`app/page.tsx` (replaces the Task 1 placeholder):
```tsx
import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { TechStack } from "@/components/TechStack"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run components/Contact.test.tsx app/page.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 5: Run the full test suite**

Run: `npm run test`
Expected: all test files pass (Tasks 2–8's tests, ~14 tests total).

- [ ] **Step 6: Verify production build**

Run: `npm run build`
Expected: `Compiled successfully`, no type errors.

- [ ] **Step 7: Manual visual check**

Run: `npm run dev`, open `http://localhost:3000` in a browser. Verify at both mobile width (~375px) and desktop width (~1280px): nav anchors scroll to the right section, all 9 project cards render with distinct gradient mockups, and the CV button downloads the PDF.

- [ ] **Step 8: Commit**

```bash
git add components/Contact.tsx components/Contact.test.tsx app/page.tsx app/page.test.tsx
git commit -m "feat: add contact section and assemble homepage"
```

---

### Task 9: Publish to GitHub and deploy to Vercel

**This task pushes a public repo and deploys to production — confirm with the user before running Steps 3 and 5.**

**Files:** none (operational task)

**Interfaces:**
- Consumes: the completed app from Tasks 1–8
- Produces: a live URL for the portfolio

- [ ] **Step 1: Final local verification**

Run: `npm run test && npm run build`
Expected: both succeed with no failures/errors.

- [ ] **Step 2: Rename default branch to `main`**

```bash
git branch -M main
```

- [ ] **Step 3: Create the GitHub repo and push (confirm with user first)**

```bash
gh repo create glucarelli9/portfolio --public --source=. --remote=origin
git push -u origin main
```

- [ ] **Step 4: Log in to Vercel if not already**

Run: `npx vercel login`
Expected: authenticated session (skip if already logged in from other projects like Chess Profe/Indicio).

- [ ] **Step 5: Deploy to production (confirm with user first)**

```bash
npx vercel --prod
```

Expected: Vercel prints a production URL.

- [ ] **Step 6: Verify the live site**

Open the printed production URL. Verify: nav anchors work, all 9 project cards render, external project links (Chess Profe, Indicio, Agüero Demo, Sanz Berger) open correctly, and the "Descargar CV" button downloads the correct PDF.

- [ ] **Step 7: Commit any Vercel-generated config**

```bash
git add .
git commit -m "chore: add Vercel project config" --allow-empty
git push
```
