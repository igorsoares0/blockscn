import type { Block, CategoryInfo } from '@/types'

export const categories: CategoryInfo[] = [
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Hero sections, CTAs, testimonials',
    icon: 'megaphone',
    count: 0
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Headers, menus, breadcrumbs',
    icon: 'navigation',
    count: 0
  },
  {
    id: 'content',
    name: 'Content',
    description: 'Cards, lists, grids',
    icon: 'squares-four',
    count: 0
  },
  {
    id: 'forms',
    name: 'Forms',
    description: 'Login, contact, newsletter',
    icon: 'textbox',
    count: 0
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    description: 'Stats, charts, tables',
    icon: 'chart-bar',
    count: 0
  }
]

export const blocks: Block[] = [
  {
    id: 'hero-simple',
    name: 'Simple Hero Section',
    description: 'Clean hero section with title, subtitle and CTA button',
    category: 'marketing',
    tags: ['hero', 'landing', 'cta'],
    complexity: 'basic',
    type: 'section',
    code: `export function SimpleHero() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Build beautiful UI blocks
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Create stunning websites with our collection of copy-paste blocks built with ShadCN UI and Tailwind CSS.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
            Get started
          </button>
          <button className="text-sm font-semibold leading-6 text-foreground">
            Learn more <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}`,
    preview: '/previews/placeholder.svg',
    dependencies: [],
    created: new Date('2024-01-01'),
    updated: new Date('2024-01-01'),
    featured: true,
    variants: [
      {
        id: 'olive-dark',
        name: 'Olive & Dark',
        colors: {
          primary: '#222222',
          secondary: '#4e593e',
          background: '#4e593e',
          text: '#ffffff'
        },
        code: `export function SimpleHero() {
  return (
    <section className="w-full bg-[#4e593e] text-white py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Build beautiful UI blocks
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Create stunning websites with our collection of copy-paste blocks built with ShadCN UI and Tailwind CSS.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-[#222222] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#222222]/90 transition-colors">
              Get started
            </button>
            <button className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors">
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}`
      }
    ]
  },
  {
    id: 'navbar-simple',
    name: 'Simple Navigation Bar',
    description: 'Clean navigation with logo and menu items',
    category: 'navigation',
    tags: ['navbar', 'header', 'menu'],
    complexity: 'basic',
    type: 'component',
    code: `export function SimpleNavbar() {
  return (
    <nav className="border-b border-border">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-foreground">
              ShadCN Forge
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Blocks
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}`,
    preview: '/previews/placeholder.svg',
    dependencies: [],
    created: new Date('2024-01-01'),
    updated: new Date('2024-01-01'),
    featured: true
  },
  {
    id: 'feature-card',
    name: 'Feature Card',
    description: 'Card component with icon, title and description',
    category: 'content',
    tags: ['card', 'feature', 'icon'],
    complexity: 'basic',
    type: 'component',
    code: `export function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
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
}`,
    preview: '/previews/placeholder.svg',
    dependencies: [],
    created: new Date('2024-01-01'),
    updated: new Date('2024-01-01')
  }
]

// Update category counts
categories.forEach(category => {
  category.count = blocks.filter(block => block.category === category.id).length
})