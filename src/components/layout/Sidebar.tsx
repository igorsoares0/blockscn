import { categories } from '@/data/blocks'
import * as Icons from '@phosphor-icons/react'
import type { BlockCategory } from '@/types'

interface SidebarProps {
  selectedCategory: BlockCategory | 'all'
  onCategoryChange: (category: BlockCategory | 'all') => void
}

export function Sidebar({ selectedCategory, onCategoryChange }: SidebarProps) {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>
    return IconComponent ? <IconComponent className="h-5 w-5" weight="duotone" /> : null
  }

  return (
    <aside className="w-64 border-r border-border bg-muted/10 p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Categories</h3>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => onCategoryChange('all')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icons.SquaresFour className="h-5 w-5" weight="duotone" />
                <span>All Blocks</span>
              </button>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => onCategoryChange(category.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {getIcon(category.icon)}
                    <span>{category.name}</span>
                  </div>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Complexity</h3>
          <ul className="space-y-1">
            <li>
              <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Basic</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span>Intermediate</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span>Advanced</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}