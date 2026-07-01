import type { IconMeta } from './icons-meta.js'
import { iconMetaIndex } from './icons-meta.js'

export interface SearchOptions {
  query?: string
  category?: string
  style?: 'brands' | 'solid' | 'regular' | 'v4compat'
  limit?: number
  exact?: boolean
}

export interface SearchResult {
  name: string
  style: 'brands' | 'solid' | 'regular' | 'v4compat'
  codepoint: string
  category: string
  keywords: string[]
  aliases: string[]
  score: number
}

const ALL_ICONS = Object.values(iconMetaIndex)

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
}

function scoreIcon(icon: IconMeta, queryTokens: string[], exact: boolean): number {
  const nameLower = icon.name.toLowerCase()
  const nameExact = icon.name.replace(/-/g, '')
  const query = queryTokens.join('')
  const queryLower = queryTokens.join('-')

  if (nameLower === queryLower) return 100
  if (nameExact === query) return 95

  const kwJoined = icon.keywords.join('-').toLowerCase()
  if (kwJoined === queryLower) return 90

  if (nameLower.startsWith(queryLower)) return 80
  if (icon.keywords.some((k) => k.toLowerCase() === query)) return 75
  if (icon.keywords.some((k) => k.toLowerCase().startsWith(query))) return 70
  if (icon.keywords.some((k) => k.toLowerCase().includes(query))) return 60
  if (nameLower.includes(queryLower)) return 50

  for (const alias of icon.aliases) {
    if (alias.toLowerCase() === queryLower) return 85
    if (alias.toLowerCase().includes(queryLower)) return 55
  }

  if (icon.category.toLowerCase() === queryLower) return 1

  if (!exact) {
    const matchedTokens = queryTokens.filter((t) =>
      icon.keywords.some((k) => k.toLowerCase().includes(t)),
    )
    if (matchedTokens.length > 0) return matchedTokens.length * 10
  }

  return 0
}

export function searchIcons(options: SearchOptions): SearchResult[] {
  const { query, category, style, limit = 50, exact = false } = options
  let results: SearchResult[]

  const queryTokens = query ? tokenize(query) : []

  const filtered = ALL_ICONS.filter((icon) => {
    if (category && icon.category !== category) return false
    if (style && icon.style !== style) return false
    return true
  })

  if (query) {
    results = filtered
      .map((icon) => ({
        ...icon,
        score: scoreIcon(icon, queryTokens, exact),
      }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
  } else {
    results = filtered.map((icon) => ({
      ...icon,
      score: 0,
    }))
  }

  return results.slice(0, limit)
}

export function getIconMeta(name: string): IconMeta | undefined {
  return iconMetaIndex[name]
}

export function getCategories(): { category: string; count: number }[] {
  const counts: Record<string, number> = {}
  for (const icon of ALL_ICONS) {
    counts[icon.category] = (counts[icon.category] || 0) + 1
  }
  return Object.entries(counts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count)
}

export function getIconsByCategory(category: string): IconMeta[] {
  return ALL_ICONS.filter((i) => i.category === category)
}
