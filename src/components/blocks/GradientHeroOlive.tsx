export function GradientHeroOlive() {
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
}