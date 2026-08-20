export type Project = {
  slug: string
  title: string
  description: string
  stack: string[]
  gradient: [string, string]
  image?: string
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
    image: "/projects/chess-profe.png",
    link: { label: "Ver demo", href: "https://chess-profe.vercel.app" },
  },
  {
    slug: "indicio",
    title: "Indicio",
    description:
      "SaaS de análisis de legajos penales asistido por IA, para uso legal (CPP Jujuy/Salta).",
    stack: ["Next.js", "Groq", "Supabase"],
    gradient: ["#7c3aed", "#5b21b6"],
    image: "/projects/indicio.png",
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
    image: "/projects/aguero-demo.png",
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
    image: "/projects/sanz-berger.png",
    link: {
      label: "Ver sitio",
      href: "https://sanzbergerbienesraices.com.ar/",
    },
  },
]
