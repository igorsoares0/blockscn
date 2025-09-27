import type { Block } from '@/types'
import { Copy, Eye, Palette } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '@/components/ui/Modal'
import { BlockPreview } from './BlockPreview'

interface BlockCardProps {
  block: Block
}

export function BlockCard({ block }: BlockCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const navigate = useNavigate()
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

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(block.code)
      // TODO: Add toast notification
      console.log('Code copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div
      className="group border border-border rounded-lg bg-card p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
      onClick={() => navigate(`/block/${block.id}`)}
    >
      <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center overflow-hidden">
        {block.preview ? (
          <img
            src={block.preview}
            alt={block.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="text-muted-foreground text-sm">Preview</div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
              {block.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {block.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(block.complexity)}`}>
            {block.complexity}
          </span>
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
            {block.type}
          </span>
          {block.variants && block.variants.length > 0 && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 flex items-center gap-1">
              <Palette className="h-3 w-3" />
              {block.variants.length + 1} variants
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 pt-2">
          {block.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
          {block.tags.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{block.tags.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-border">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleCopyCode()
            }}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Copy className="h-4 w-4" />
            Copy Code
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsPreviewOpen(true)
            }}
            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-md border border-border hover:bg-muted transition-colors"
          >
            <Eye className="h-4 w-4" />
            Preview
          </button>
        </div>
      </div>

      <Modal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title={`Preview: ${block.name}`}
      >
        <BlockPreview block={block} />
      </Modal>
    </div>
  )
}