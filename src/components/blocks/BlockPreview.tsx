import type { Block, ColorVariant } from '@/types'
import { SimpleHero } from './SimpleHero'
import { OliveDarkHero } from './OliveDarkHero'
import { GradientHero } from './GradientHero'
import { GradientHeroOlive } from './GradientHeroOlive'
import { SimpleNavbar } from './SimpleNavbar'
import { SimpleFooter } from './SimpleFooter'
import { SimpleFooterOlive } from './SimpleFooterOlive'
import { FeatureCard } from './FeatureCard'
import { Code, Heart, Lightning } from '@phosphor-icons/react'

interface BlockPreviewProps {
  block: Block
  variant?: ColorVariant | null
}

export function BlockPreview({ block, variant }: BlockPreviewProps) {
  const renderBlock = () => {
    switch (block.id) {
      case 'hero-simple':
        return variant?.id === 'olive-dark' ? <OliveDarkHero /> : <SimpleHero />

      case 'hero-gradient':
        return variant?.id === 'olive-dark' ? <GradientHeroOlive /> : <GradientHero />

      case 'navbar-simple':
        return <SimpleNavbar />

      case 'footer-simple':
        return variant?.id === 'olive-dark' ? <SimpleFooterOlive /> : <SimpleFooter />

      case 'feature-card':
        return (
          <div className="p-8 bg-muted/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <FeatureCard
                icon={<Code className="h-6 w-6 text-primary" weight="duotone" />}
                title="Clean Code"
                description="Well-structured, readable code that follows best practices and conventions."
              />
              <FeatureCard
                icon={<Lightning className="h-6 w-6 text-primary" weight="duotone" />}
                title="Fast Performance"
                description="Optimized components that load quickly and provide smooth user experience."
              />
              <FeatureCard
                icon={<Heart className="h-6 w-6 text-primary" weight="duotone" />}
                title="Easy to Use"
                description="Simple copy-paste components that work out of the box with minimal setup."
              />
            </div>
          </div>
        )

      default:
        return (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">Preview not available for this block</p>
          </div>
        )
    }
  }

  return (
    <div className="w-full">
      <div className="bg-background min-h-96">
        {renderBlock()}
      </div>
    </div>
  )
}