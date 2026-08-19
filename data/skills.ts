export type SkillGroup = { category: string; items: string[] }

export const skillGroups: SkillGroup[] = [
  { category: "Frontend", items: ["React", "Next.js", "Vite", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express"] },
  { category: "Datos", items: ["MongoDB", "PostgreSQL", "Supabase", "Prisma"] },
  { category: "Cloud/DevOps", items: ["Vercel", "Docker", "PM2", "Azure AD"] },
  { category: "Integraciones", items: ["Microsoft Graph API", "IA (Groq/LLM)"] },
]
