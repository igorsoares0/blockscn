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
        code: `export function SimpleNavbar() {
  return (
    <nav className="bg-[#4e593e] border-b border-[#222222]/20">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">
              ShadCN Forge
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Blocks
            </a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}`
      }
    ]
  },
  {
    id: 'footer-simple',
    name: 'Simple Footer',
    description: 'Clean footer with company info, links, and social media',
    category: 'content',
    tags: ['footer', 'links', 'social', 'company'],
    complexity: 'basic',
    type: 'section',
    code: `export function SimpleFooter() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-foreground">ShadCN Forge</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Build beautiful, responsive websites with our collection of copy-paste blocks.
              Designed for developers who value speed and quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Components
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 ShadCN Forge. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}`,
    preview: '/previews/placeholder.svg',
    dependencies: [],
    created: new Date('2024-01-01'),
    updated: new Date('2024-01-01'),
    featured: false,
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
        code: `export function SimpleFooter() {
  return (
    <footer className="bg-[#4e593e] border-t border-[#222222]/20">
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">ShadCN Forge</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Build beautiful, responsive websites with our collection of copy-paste blocks.
              Designed for developers who value speed and quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Components
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2024 ShadCN Forge. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}`
      }
    ]
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
    updated: new Date('2024-01-01'),
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
        code: `export function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
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
}`
      }
    ]
  }
]

// Update category counts
categories.forEach(category => {
  category.count = blocks.filter(block => block.category === category.id).length
})