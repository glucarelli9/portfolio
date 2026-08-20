import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gianfranco Lucarelli — Senior Full Stack Developer",
  description:
    "Portfolio de proyectos full stack: Next.js, Node.js, integraciones enterprise e IA aplicada.",
  icons: {
    icon: "/profile.png",
  },
}

const THEME_INIT_SCRIPT = `
  try {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="antialiased text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  )
}
