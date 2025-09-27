import { Code } from '@phosphor-icons/react'

export function FeatureCard({
  icon = <Code className="h-6 w-6 text-primary" weight="duotone" />,
  title = "Sample Feature",
  description = "This is a sample feature card description that shows how the component works."
}: {
  icon?: React.ReactNode
  title?: string
  description?: string
}) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-card-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  )
}