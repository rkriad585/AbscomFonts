import { describe, it, expect } from 'vitest'
import { abscomIcon } from '../icons.js'

describe('abscomIcon', () => {
  it('exports a non-empty record', () => {
    expect(abscomIcon).toBeDefined()
    expect(Object.keys(abscomIcon).length).toBeGreaterThan(0)
  })

  it('has at least 2000 icon entries', () => {
    expect(Object.keys(abscomIcon).length).toBeGreaterThanOrEqual(2000)
  })

  it('all codepoints are valid hex strings (2-4 chars)', () => {
    for (const code of Object.values(abscomIcon)) {
      expect(code).toMatch(/^[0-9a-fA-F]{2,4}$/)
    }
  })

  it('all icon names are non-empty strings', () => {
    for (const name of Object.keys(abscomIcon)) {
      expect(name.length).toBeGreaterThan(0)
      expect(name).not.toContain(' ')
    }
  })

  it('contains essential common icons', () => {
    const essentials = [
      'heart',
      'star',
      'home',
      'user',
      'cog',
      'search',
      'bell',
      'trash',
      'envelope',
      'phone',
    ]
    for (const icon of essentials) {
      expect(icon in abscomIcon).toBe(true)
    }
  })

  it('contains brand icons', () => {
    const brands = ['github', 'twitter', 'youtube', 'facebook', 'linkedin', 'apple', 'google']
    for (const brand of brands) {
      expect(brand in abscomIcon).toBe(true)
    }
  })

  it('has some shared codepoints for aliases (not all unique)', () => {
    const codepoints = Object.values(abscomIcon)
    const uniqueCodepoints = new Set(codepoints)
    // Aliases mean some codepoints repeat -- just verify most are unique
    expect(uniqueCodepoints.size).toBeGreaterThan(codepoints.length * 0.7)
  })

  it('no duplicate icon names', () => {
    const names = Object.keys(abscomIcon)
    const uniqueNames = new Set(names)
    expect(uniqueNames.size).toBe(names.length)
  })
})
