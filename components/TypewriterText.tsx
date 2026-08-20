"use client"

import { useId } from "react"

export function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const rawId = useId()
  const animName = `typewriter-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`

  return (
    <span className={`inline-block whitespace-nowrap ${className}`}>
      <style>{`
        @keyframes ${animName} {
          from { width: 0; }
          to { width: ${text.length}ch; }
        }
      `}</style>
      <span
        className="inline-block overflow-hidden align-bottom"
        style={{ animation: `${animName} 1.6s steps(${text.length}, end) forwards` }}
      >
        {text}
      </span>
      <span className="ml-0.5 inline-block h-[0.9em] w-[0.5em] animate-term-blink bg-term-cyan align-middle" />
    </span>
  )
}
