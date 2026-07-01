import { describe, it, expect } from 'vitest'
import { colorPalette } from '../palette.js'

describe('colorPalette', () => {
  it('exports a non-empty record', () => {
    expect(colorPalette).toBeDefined()
    expect(Object.keys(colorPalette).length).toBeGreaterThan(0)
  })

  it('contains exactly 22 color families', () => {
    expect(Object.keys(colorPalette).length).toBe(22)
  })

  it('each color has exactly 11 shades (50-100-200-300-400-500-600-700-800-900-950)', () => {
    const expectedShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    for (const shades of Object.values(colorPalette)) {
      const shadeKeys = Object.keys(shades).map(Number)
      expect(shadeKeys.sort((a, b) => a - b)).toEqual(expectedShades)
    }
  })

  it('all hex values are valid 6-character hex colors', () => {
    for (const shades of Object.values(colorPalette)) {
      for (const hex of Object.values(shades)) {
        expect(hex).toMatch(/^#[0-9a-fA-F]{6}$/)
      }
    }
  })

  it('includes Tailwind-standard colors', () => {
    const expectedColors = [
      'slate',
      'gray',
      'zinc',
      'neutral',
      'stone',
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'fuchsia',
      'pink',
      'rose',
    ]
    for (const color of expectedColors) {
      expect(colorPalette).toHaveProperty(color)
    }
  })

  it('white and black are not palette colors (they are special)', () => {
    expect(colorPalette).not.toHaveProperty('white')
    expect(colorPalette).not.toHaveProperty('black')
  })

  it('red-500 is the canonical Tailwind red', () => {
    expect(colorPalette.red[500]).toBe('#ef4444')
  })

  it('blue-500 is the canonical Tailwind blue', () => {
    expect(colorPalette.blue[500]).toBe('#3b82f6')
  })
})
