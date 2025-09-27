export function SimpleHero() {
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
}