import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { BootSequence } from "@/components/BootSequence"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Gianfranco Lucarelli — Senior Full Stack Developer",
  description:
    "Portfolio de proyectos full stack: Next.js, Node.js, integraciones enterprise e IA aplicada.",
  icons: {
    icon: "/profile.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={jetbrainsMono.variable}>
      <body className="bg-term-bg font-mono text-term-green antialiased">
        <div className="scanline-overlay" aria-hidden="true" />
        <BootSequence />
        {children}
      </body>
    </html>
  )
}
