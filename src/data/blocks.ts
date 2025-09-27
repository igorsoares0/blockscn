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
    id: 'hero-gradient',
    name: 'Gradient Hero Section',
    description: 'Modern hero section with gradient background and feature highlights',
    category: 'marketing',
    tags: ['hero', 'landing', 'gradient', 'features'],
    complexity: 'intermediate',
    type: 'section',
    code: `export function GradientHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative px-4 mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              ✨ New Features Available
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Build faster with
            <span className="block text-primary">beautiful blocks</span>
          </h1>

          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Ship stunning websites in minutes with our professionally designed, copy-paste components.
            Built with the latest tech stack and best practices.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-200">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-foreground bg-background border border-border rounded-lg hover:bg-muted transition-colors">
              View Components
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">50+</span>
              </div>
              <h3 className="font-semibold text-foreground">Components</h3>
              <p className="text-sm text-muted-foreground">Ready-to-use blocks</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">100%</span>
              </div>
              <h3 className="font-semibold text-foreground">Responsive</h3>
              <p className="text-sm text-muted-foreground">Mobile-first design</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">∞</span>
              </div>
              <h3 className="font-semibold text-foreground">Customizable</h3>
              <p className="text-sm text-muted-foreground">Tailwind CSS classes</p>
            </div>
          </div>
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
        code: `export function GradientHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4e593e] via-[#3a4230] to-[#222222] py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative px-4 mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20">
              ✨ New Features Available
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build faster with
            <span className="block text-gray-200">beautiful blocks</span>
          </h1>

          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Ship stunning websites in minutes with our professionally designed, copy-paste components.
            Built with the latest tech stack and best practices.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-[#222222] rounded-lg shadow-lg hover:bg-[#222222]/90 hover:shadow-xl transition-all duration-200">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
              View Components
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">50+</span>
              </div>
              <h3 className="font-semibold text-white">Components</h3>
              <p className="text-sm text-gray-300">Ready-to-use blocks</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">100%</span>
              </div>
              <h3 className="font-semibold text-white">Responsive</h3>
              <p className="text-sm text-gray-300">Mobile-first design</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">∞</span>
              </div>
              <h3 className="font-semibold text-white">Customizable</h3>
              <p className="text-sm text-gray-300">Tailwind CSS classes</p>
            </div>
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