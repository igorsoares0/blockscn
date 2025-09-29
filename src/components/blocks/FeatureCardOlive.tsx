import { Code } from '@phosphor-icons/react'

export function FeatureCardOlive({
  icon = <Code className="h-6 w-6 text-white" weight="duotone" />,
  title = "Sample Feature",
  description = "This is a sample feature card description that shows how the component works."
}: {
  icon?: React.ReactNode
  title?: string
  description?: string
}) {
  return (
    <div className="p-6 rounded-lg border border-[#222222]/20 bg-[#4e593e]">
      <div className="w-12 h-12 rounded-lg bg-[#222222]/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  )
}