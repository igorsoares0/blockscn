export function SimpleNavbarOlive() {
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
}