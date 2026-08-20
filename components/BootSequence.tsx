"use client"

import { useEffect, useState } from "react"

const LINES = [
  "> iniciando portfolio...",
  "> cargando proyectos [OK]",
  "> conectando stack técnico [OK]",
  "> listo.",
]

const STORAGE_KEY = "boot-sequence-shown"

export function BootSequence() {
  const [shouldRender, setShouldRender] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return
    sessionStorage.setItem(STORAGE_KEY, "1")
    setShouldRender(true)

    const hideTimer = setTimeout(() => setVisible(false), 1700)
    return () => clearTimeout(hideTimer)
  }, [])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-term-bg font-mono text-sm text-term-green transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="space-y-1">
        {LINES.map((line, i) => (
          <div
            key={line}
            className="opacity-0 animate-term-reveal"
            style={{ animationDelay: `${i * 0.35}s`, animationFillMode: "forwards" }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
