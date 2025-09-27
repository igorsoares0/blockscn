import { useParams, useNavigate } from 'react-router-dom'
import { blocks } from '@/data/blocks'
import { Header } from '@/components/layout/Header'
import { BlockPreview } from '@/components/blocks/BlockPreview'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArrowLeft, Copy, Eye, Download, Palette } from '@phosphor-icons/react'
import { useState } from 'react'
import type { ColorVariant } from '@/types'

export function BlockDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [selectedVariant, setSelectedVariant] = useState<ColorVariant | null>(null)

  const block = blocks.find(b => b.id === id)

  if (!block) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Block not found</h1>
            <button
              onClick={() => navigate('/')}
              className="text-primary hover:underline"
            >
              Go back to home
            </button>
          </div>
        </main>
      </div>
    )
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'basic':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  const getCurrentCode = () => {
    return selectedVariant ? selectedVariant.code : block.code
  }

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(getCurrentCode())
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blocks
        </button>

        {/* Block header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{block.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{block.description}</p>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getComplexityColor(block.complexity)}`}>
              {block.complexity}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground">
              {block.type}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground">
              {block.category}
            </span>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            {block.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded text-xs bg-accent text-accent-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Color Variants */}
          {block.variants && block.variants.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Color Variants
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => setSelectedVariant(null)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedVariant === null
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Default
                </button>
                {block.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                      selectedVariant?.id === variant.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      <div
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: variant.colors.background }}
                      />
                      <div
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: variant.colors.primary }}
                      />
                    </div>
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            <Copy className="h-4 w-4" />
            Copy Code
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-md font-medium hover:bg-muted transition-colors">
            <Download className="h-4 w-4" />
            Download Files
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('preview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'preview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </div>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'code'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2">
                <Copy className="h-4 w-4" />
                Code
              </div>
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="min-h-96">
          {activeTab === 'preview' ? (
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="bg-muted/50 px-4 py-2 border-b border-border">
                <span className="text-sm font-medium text-muted-foreground">Live Preview</span>
              </div>
              <div className="bg-background">
                <BlockPreview block={block} variant={selectedVariant} />
              </div>
            </div>
          ) : (
            <div className="border border-border rounded-lg overflow-hidden">
              <CodeBlock code={getCurrentCode()} language="tsx" />
            </div>
          )}
        </div>

        {/* Dependencies */}
        {block.dependencies.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Dependencies</h3>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">
                This component requires the following ShadCN UI components:
              </p>
              <div className="flex gap-2 flex-wrap">
                {block.dependencies.map((dep) => (
                  <code
                    key={dep}
                    className="px-2 py-1 bg-background border border-border rounded text-sm"
                  >
                    {dep}
                  </code>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}