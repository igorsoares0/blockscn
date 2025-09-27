export function SimpleNavbar() {
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
}