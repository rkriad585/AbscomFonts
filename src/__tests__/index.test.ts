import { describe, it, expect } from 'vitest'
import { abscomIcon, colorPalette, mainClasses, generateColorClasses, abs_info } from '../index.js'

describe('package exports', () => {
  it('exports abscomIcon', () => {
    expect(abscomIcon).toBeDefined()
    expect(typeof abscomIcon).toBe('object')
  })

  it('exports colorPalette', () => {
    expect(colorPalette).toBeDefined()
    expect(typeof colorPalette).toBe('object')
  })

  it('exports mainClasses', () => {
    expect(mainClasses).toBeDefined()
    expect(typeof mainClasses).toBe('string')
  })

  it('exports generateColorClasses', () => {
    expect(generateColorClasses).toBeDefined()
    expect(typeof generateColorClasses).toBe('function')
  })

  it('exports abs_info', () => {
    expect(abs_info).toBeDefined()
    expect(typeof abs_info).toBe('function')
  })
})
