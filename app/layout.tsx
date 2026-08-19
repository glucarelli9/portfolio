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
