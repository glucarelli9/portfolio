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
