import { describe, it, expect } from 'vitest'
import { mainClasses, generateColorClasses } from '../css.js'
import { colorPalette } from '../palette.js'

describe('mainClasses', () => {
  it('is a non-empty string', () => {
    expect(mainClasses).toBeDefined()
    expect(mainClasses.length).toBeGreaterThan(0)
  })

  it('contains @font-face declarations', () => {
    expect(mainClasses).toContain('@font-face')
    expect(mainClasses).toContain('AbsBrands')
    expect(mainClasses).toContain('AbsSolid')
    expect(mainClasses).toContain('AbsRegular')
    expect(mainClasses).toContain('AbsV4Compatibility')
  })

  it('contains the .abs base class', () => {
    expect(mainClasses).toContain('.abs')
  })

  it('contains animation keyframes', () => {
    expect(mainClasses).toContain('@keyframes')
    expect(mainClasses).toContain('abs-spin')
  })

  it('contains size classes', () => {
    expect(mainClasses).toContain('abs-1x')
    expect(mainClasses).toContain('abs-16x')
  })

  it('contains transform classes', () => {
    expect(mainClasses).toContain('abs-transform-90')
    expect(mainClasses).toContain('abs-transform-180')
    expect(mainClasses).toContain('abs-transform-270')
    expect(mainClasses).toContain('abs-transform-horizontal')
    expect(mainClasses).toContain('abs-transform-vertical')
  })

  it('contains layout utilities', () => {
    expect(mainClasses).toContain('abs-flex')
    expect(mainClasses).toContain('abs-block')
    expect(mainClasses).toContain('abs-center')
  })

  it('contains z-index utilities', () => {
    expect(mainClasses).toContain('abs-z-auto')
    expect(mainClasses).toContain('abs-z-last')
  })
})

describe('generateColorClasses', () => {
  it('returns a non-empty string', () => {
    const css = generateColorClasses()
    expect(css).toBeDefined()
    expect(css.length).toBeGreaterThan(0)
  })

  it('generates background color classes for all colors', () => {
    const css = generateColorClasses()
    for (const colorName of Object.keys(colorPalette)) {
      expect(css).toContain(`bg-${colorName}`)
    }
  })

  it('generates text color classes for all colors', () => {
    const css = generateColorClasses()
    for (const colorName of Object.keys(colorPalette)) {
      expect(css).toContain(`abs-${colorName}`)
    }
  })

  it('generates CSS rules with hex values from palette', () => {
    const css = generateColorClasses()
    expect(css).toContain(colorPalette.red[500])
    expect(css).toContain(colorPalette.blue[500])
  })
})
