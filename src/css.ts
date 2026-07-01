import { colorPalette } from './palette.js'
import {
  fontFaceCSS,
  baseIconCSS,
  animationClassesCSS,
  animationKeyframesCSS,
  sizeClassesCSS,
  relativeSizeClassesCSS,
  utilityClassesCSS,
  generateColorClasses as sharedColorClasses,
  generateGradientClasses,
  generateTransformClasses,
  generateComponentClasses,
  minifyCSS,
} from './css-templates.js'

function getFontsDir(): string {
  if (typeof document === 'undefined') return './fonts/'
  try {
    let scriptUrl = ''
    const cs = document.currentScript as HTMLScriptElement | null
    if (cs && cs.src) {
      scriptUrl = cs.src
    } else {
      const scripts = document.scripts
      for (let i = scripts.length - 1; i >= 0; i--) {
        if (scripts[i].src && scripts[i].src.includes('abscomfonts')) {
          scriptUrl = scripts[i].src
          break
        }
      }
    }
    if (scriptUrl) {
      const u = new URL(scriptUrl)
      const parts = u.pathname.split('/').filter(Boolean)
      parts.pop()
      if (parts[parts.length - 1] === 'dist') parts.pop()
      return u.origin + '/' + parts.join('/') + '/fonts/'
    }
  } catch {
    /* ignore */
  }
  return './fonts/'
}

const FONTS_DIR = getFontsDir()

export const mainClasses = [
  fontFaceCSS(FONTS_DIR),
  baseIconCSS,
  animationClassesCSS(),
  animationKeyframesCSS(),
  sizeClassesCSS(),
  relativeSizeClassesCSS(),
  utilityClassesCSS(),
  generateGradientClasses(),
  generateTransformClasses(),
  generateComponentClasses(),
].join('\n')

export function generateColorClasses(): string {
  return sharedColorClasses()
}

export { colorPalette, minifyCSS, generateGradientClasses, generateTransformClasses }
