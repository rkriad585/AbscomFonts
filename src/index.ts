import { abscomIcon } from './icons.js'
import { colorPalette } from './palette.js'
import { mainClasses, generateColorClasses, minifyCSS } from './css.js'

export function abs_info(): void {
  console.info(
    `\nframowark:\tabscomfonts,\nversion:\t1.0.0-abs,\nauthor:\t\tRK Riad Khan,\nemail:\t\trkriad585@gmail.com,\ngithub:\t\tgithub.com/rkriad585,\nproduct_by:\trkriad585`,
  )
}

/**
 * Generate standard font-based icon HTML markup.
 * The returned `<i>` element is decorative by default (aria-hidden).
 */
export function fontIcon(name: string, ...modifiers: string[]): string {
  return `<i class="abs abs-${name}${modifiers.length ? ' ' + modifiers.join(' ') : ''}" aria-hidden="true"></i>`
}

export interface AbsIconOptions {
  className?: string
  ariaLabel?: string
  style?: string
}

export function absIcon(name: string, options?: AbsIconOptions): string {
  const cls = `abs abs-${name}${options?.className ? ' ' + options.className : ''}`
  const ariaLabel = options?.ariaLabel
  const aria = ariaLabel ? `role="img" aria-label="${ariaLabel}"` : 'aria-hidden="true"'
  const style = options?.style ? ` style="${options.style}"` : ''
  return `<i class="${cls}"${aria}${style}></i>`
}

export function absLayer(...children: string[]): string {
  return `<span class="abs-layers">${children.join('')}</span>`
}

export function absCounter(count: string | number): string {
  return `<span class="abs-layers-counter">${count}</span>`
}

export function absText(content: string): string {
  return `<span class="abs-layers-text">${content}</span>`
}

export function startAbsAnimation(element: Element): void {
  ;(element as HTMLElement).style.animationPlayState = 'running'
}

export function stopAbsAnimation(element: Element): void {
  ;(element as HTMLElement).style.animation = 'none'
}

export function pauseAbsAnimation(element: Element): void {
  ;(element as HTMLElement).style.animationPlayState = 'paused'
}

export function resumeAbsAnimation(element: Element): void {
  ;(element as HTMLElement).style.animationPlayState = 'running'
}

export { abscomIcon, colorPalette, mainClasses, generateColorClasses }

function init(): void {
  if (typeof document === 'undefined') return

  const isDev = typeof process !== 'undefined' && process.env?.NODE_ENV === 'development'
  const colorClasses = generateColorClasses()
  const styleElement = document.createElement('style')
  let cssClass = mainClasses + colorClasses

  for (const [name, code] of Object.entries(abscomIcon)) {
    cssClass += `.abs.abs-${name}::before { content: "\\${code}"; }`
  }

  styleElement.textContent = isDev ? cssClass : minifyCSS(cssClass)
  document.head.appendChild(styleElement)

  const utilityClassPrefixes = new Set([
    'abs-white',
    'abs-black',
    'abs-inherit',
    'abs-1x',
    'abs-2x',
    'abs-3x',
    'abs-4x',
    'abs-5x',
    'abs-6x',
    'abs-7x',
    'abs-8x',
    'abs-9x',
    'abs-10x',
    'abs-11x',
    'abs-12x',
    'abs-13x',
    'abs-14x',
    'abs-15x',
    'abs-16x',
    'abs-relative-2xs',
    'abs-relative-3xs',
    'abs-relative-xs',
    'abs-relative-sm',
    'abs-relative-lg',
    'abs-relative-xl',
    'abs-relative-2xl',
    'abs-relative-3xl',
    'abs-center',
    'abs-center-icon',
    'abs-flex',
    'abs-block',
    'abs-float-left',
    'abs-float-right',
    'abs-border',
    'abs-z-auto',
    'abs-z-1',
    'abs-z-2',
    'abs-z-3',
    'abs-z-4',
    'abs-z-5',
    'abs-z-fast',
    'abs-z-last',
    'abs-hover-scale',
    'abs-hover-shadow',
    'abs-version',
    'abs-author',
    'abs-author-info',
    'abs-transform-90',
    'abs-transform-180',
    'abs-transform-270',
    'abs-transform-horizontal',
    'abs-transform-vertical',
    'abs-transform-both',
    'abs-xs',
    'abs-sm',
    'abs-lg',
    'abs-xl',
    'abs-2xl',
    'abs-2xs',
    'abs-fw',
    'abs-inverse',
    'abs-opacity-25',
    'abs-opacity-50',
    'abs-opacity-75',
    'abs-opacity-100',
    'abs-gradient',
    'bg-gradient',
    'abs-rotate-by',
    'abs-flip-both',
    'abs-stack',
    'abs-stack-1x',
    'abs-stack-2x',
    'abs-layers',
    'abs-layers-text',
    'abs-layers-counter',
    'abs-layers-bottom-left',
    'abs-layers-bottom-right',
    'abs-layers-top-left',
    'abs-layers-top-right',
    'abs-pull-left',
    'abs-pull-right',
  ])

  function isUtilityClass(cls: string): boolean {
    if (utilityClassPrefixes.has(cls)) return true
    if (
      /^abs-(spin|spin-reverse|bounce|wobble|pulse|rgb-change|shake|skew|flip|fade|glow-gold|zoom|slide|slide-up-down|rotate3d|blink|swing|float|jelly|vibrate|rainbow|flip-horizontal|flip-vertical|beat|beat-fade|flash|tada|jello|rubber-band|buzz|wag|glow|breathe|spin-snap)$/.test(
        cls,
      )
    )
      return true
    if (/^abs-(rotate-(45|90|180|270|360|x|y|z|xyz)(-(90|180|270|360|5040))?)$/.test(cls))
      return true
    if (/^abs-[a-z]+-(50|100|200|300|400|500|600|700|800|900|950)$/.test(cls)) return true
    if (/^bg-[a-z]+-(50|100|200|300|400|500|600|700|800|900|950)$/.test(cls)) return true
    if (/^abs-(grow|shrink)-[2-8]$/.test(cls)) return true
    if (/^abs-(up|down|left|right)-(4|8|12|16|20|24|32|48|64)$/.test(cls)) return true
    if (/^abs-skew-[xy]-(5|10|15|20|25|30)$/.test(cls)) return true
    if (/^abs-gradient-from-[a-z]+-(50|100|200|300|400|500|600|700|800|900|950)$/.test(cls))
      return true
    if (/^abs-gradient-to-[a-z]+-(50|100|200|300|400|500|600|700|800|900|950)$/.test(cls))
      return true
    if (/^bg-gradient-from-[a-z]+-(50|100|200|300|400|500|600|700|800|900|950)$/.test(cls))
      return true
    if (/^bg-gradient-to-[a-z]+-(50|100|200|300|400|500|600|700|800|900|950)$/.test(cls))
      return true
    return false
  }

  function isIconClass(cls: string): boolean {
    const name = cls.replace(/^abs-/, '')
    return name in abscomIcon
  }

  const validateElements = () => {
    const elements = document.querySelectorAll('[class*="abs-"], .abs')

    elements.forEach((element) => {
      const isIconElement = element.tagName === 'I'
      const hasAbsClass = element.classList.contains('abs')

      const iconClasses = [...element.classList].filter(
        (c) => (c.startsWith('abs-') || c === 'abs') && !isUtilityClass(c),
      )
      const hasIconClass = iconClasses.length > 0
      const hasActualIconName = [...element.classList].some(
        (c) => c.startsWith('abs-') && isIconClass(c),
      )

      if (isIconElement && hasActualIconName && !hasAbsClass) {
        console.warn('ABSCOM: Please [added] missing abs class to element:', element)
      }

      if (!isIconElement && hasActualIconName) {
        console.error(
          'ABSCOM: Icon classes used on non icon as [ i class=abs abs-[icon-name] ] element:',
          element,
        )
      }

      if (!isIconElement && hasIconClass) {
        element.classList.remove(...iconClasses)
        console.error('ABSCOM: Blocked icon classes from', element, 'Use .abs for unblock.')
      }

      if (hasAbsClass && !hasIconClass && !hasActualIconName) {
        const hasOnlyUtility = [...element.classList].every(
          (c) => !c.startsWith('abs-') || c === 'abs' || isUtilityClass(c),
        )
        if (!hasOnlyUtility) {
          console.warn('ABSCOM: abs class used without abs-[icon-name] classes on:', element)
        }
      }
    })
  }

  validateElements()

  if (document.body) {
    const observer = new MutationObserver(validateElements)
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class'],
    })
  }
}

export { searchIcons, getIconMeta, getCategories, getIconsByCategory } from './search.js'
export type { SearchOptions, SearchResult } from './search.js'
export { iconMetaIndex } from './icons-meta.js'
export type { IconMeta } from './icons-meta.js'

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
}
