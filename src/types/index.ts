export type BlockCategory = 'marketing' | 'navigation' | 'content' | 'forms' | 'dashboard'

export type BlockComplexity = 'basic' | 'intermediate' | 'advanced'

export type BlockType = 'component' | 'section' | 'page'

export interface ColorVariant {
  id: string
  name: string
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
  }
  code: string
}

export interface Block {
  id: string
  name: string
  description: string
  category: BlockCategory
  tags: string[]
  complexity: BlockComplexity
  type: BlockType
  code: string
  preview: string
  dependencies: string[]
  created: Date
  updated: Date
  featured?: boolean
  variants?: ColorVariant[]
}

export interface CategoryInfo {
  id: BlockCategory
  name: string
  description: string
  icon: string
  count: number
}