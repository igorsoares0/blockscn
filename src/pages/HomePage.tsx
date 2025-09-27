import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { BlockCard } from '@/components/blocks/BlockCard'
import { blocks } from '@/data/blocks'
import type { BlockCategory } from '@/types'
import { MagnifyingGlass, Sparkle } from '@phosphor-icons/react'

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<BlockCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBlocks = blocks.filter((block) => {
    const matchesCategory = selectedCategory === 'all' || block.category === selectedCategory
    const matchesSearch = block.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         block.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         block.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  const featuredBlocks = blocks.filter(block => block.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Hero Section */}
            <div className="text-center py-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkle className="h-8 w-8 text-primary" weight="fill" />
                <h1 className="text-4xl font-bold text-foreground">
                  ShadCN Forge
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Beautiful, responsive components and blocks built with ShadCN UI and Tailwind CSS.
                Copy, paste, and customize to build your next project.
              </p>
            </div>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <MagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search blocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Featured Blocks */}
            {selectedCategory === 'all' && !searchQuery && featuredBlocks.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Sparkle className="h-6 w-6 text-primary" weight="fill" />
                  Featured Blocks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredBlocks.map((block) => (
                    <BlockCard key={block.id} block={block} />
                  ))}
                </div>
              </section>
            )}

            {/* All Blocks */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  {selectedCategory === 'all' ? 'All Blocks' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Blocks`}
                  <span className="ml-2 text-sm text-muted-foreground font-normal">
                    ({filteredBlocks.length} {filteredBlocks.length === 1 ? 'block' : 'blocks'})
                  </span>
                </h2>
              </div>

              {filteredBlocks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlocks.map((block) => (
                    <BlockCard key={block.id} block={block} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No blocks found. Try adjusting your search or category filter.
                  </p>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}