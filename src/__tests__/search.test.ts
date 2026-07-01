import { describe, it, expect } from 'vitest'
import { searchIcons, getIconMeta, getCategories, getIconsByCategory } from '../search.js'
import { iconMetaIndex } from '../icons-meta.js'

describe('iconMetaIndex', () => {
  it('contains all 1895 unique icons', () => {
    const unique = new Set(Object.values(iconMetaIndex).map((i) => i.codepoint))
    expect(unique.size).toBeGreaterThanOrEqual(1890)
  })

  it('contains well-known icons', () => {
    expect(iconMetaIndex['heart']).toBeDefined()
    expect(iconMetaIndex['star']).toBeDefined()
    expect(iconMetaIndex['github']).toBeDefined()
  })

  it('has aliases', () => {
    const trashAlt = iconMetaIndex['trash-alt']
    expect(trashAlt).toBeDefined()
    expect(trashAlt.aliases).toContain('trash-can')
  })

  it('has style info', () => {
    expect(iconMetaIndex['github'].style).toBe('brands')
    expect(iconMetaIndex['heart'].style).toBe('solid')
  })

  it('has category info', () => {
    const userIcon = iconMetaIndex['user']
    expect(userIcon).toBeDefined()
    expect(userIcon.category).toBe('Users')
  })
})

describe('searchIcons', () => {
  it('finds icons by exact name', () => {
    const results = searchIcons({ query: 'heart', exact: true })
    expect(results.length).toBeGreaterThanOrEqual(1)
    expect(results[0].name).toBe('heart')
  })

  it('finds icons by partial name', () => {
    const results = searchIcons({ query: 'heart' })
    expect(results.some((r) => r.name === 'heart')).toBe(true)
  })

  it('finds icons by alias', () => {
    const results = searchIcons({ query: 'trash-can' })
    expect(results.some((r) => r.name === 'trash-alt')).toBe(true)
  })

  it('filters by category', () => {
    const results = searchIcons({ category: 'Brands', limit: 10 })
    expect(results.every((r) => r.category === 'Brands')).toBe(true)
    expect(results.length).toBeLessThanOrEqual(10)
  })

  it('filters by style', () => {
    const results = searchIcons({ style: 'brands', limit: 5 })
    expect(results.every((r) => r.style === 'brands')).toBe(true)
  })

  it('combines query and category', () => {
    const results = searchIcons({ query: 'github', category: 'Brands' })
    expect(results.some((r) => r.name === 'github')).toBe(true)
  })

  it('returns empty for non-matching query', () => {
    const results = searchIcons({ query: 'xyznonexistent999' })
    expect(results).toHaveLength(0)
  })

  it('returns all icons without query', () => {
    const results = searchIcons({ limit: 2500 })
    expect(results.length).toBeGreaterThan(1800)
  })
})

describe('getIconMeta', () => {
  it('returns metadata for valid icon', () => {
    const meta = getIconMeta('star')
    expect(meta).toBeDefined()
    expect(meta!.name).toBe('star')
    expect(meta!.codepoint).toBeDefined()
    expect(meta!.keywords).toContain('star')
  })

  it('returns undefined for missing icon', () => {
    expect(getIconMeta('nonexistent')).toBeUndefined()
  })
})

describe('getCategories', () => {
  it('returns sorted categories', () => {
    const cats = getCategories()
    expect(cats.length).toBeGreaterThan(50)
    expect(cats[0].count).toBeGreaterThanOrEqual(cats[1].count)
  })
})

describe('getIconsByCategory', () => {
  it('returns icons in category', () => {
    const icons = getIconsByCategory('Arrows')
    expect(icons.length).toBeGreaterThan(50)
    expect(icons.every((i) => i.category === 'Arrows')).toBe(true)
  })

  it('returns empty for non-existent category', () => {
    const icons = getIconsByCategory('NonExistent')
    expect(icons).toHaveLength(0)
  })
})
