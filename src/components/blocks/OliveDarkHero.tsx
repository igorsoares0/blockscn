export function OliveDarkHero() {
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
}