type ProjectMockupProps = {
  title: string
  gradient: [string, string]
}

export function ProjectMockup({ title, gradient }: ProjectMockupProps) {
  return (
    <div
      className="flex h-40 items-center justify-center px-4"
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <span className="text-center text-sm font-medium text-white">{title}</span>
    </div>
  )
}
