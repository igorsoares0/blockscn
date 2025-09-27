export function GradientHero() {
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
}