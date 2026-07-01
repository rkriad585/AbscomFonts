import { colorPalette } from './palette.js'

export const fontFamilies = [
  { family: 'AbsBrands', woff2: 'abs-brands-400.woff2', ttf: 'abs-brands-400.ttf' },
  { family: 'AbsSolid', woff2: 'abs-solid-900.woff2', ttf: 'abs-solid-900.ttf' },
  { family: 'AbsRegular', woff2: 'abs-regular-400.woff2', ttf: 'abs-regular-400.ttf' },
  {
    family: 'AbsV4Compatibility',
    woff2: 'abs-v4compatibility.woff2',
    ttf: 'abs-v4compatibility.ttf',
  },
]

export function fontFaceCSS(fontsDir: string): string {
  return fontFamilies
    .map(
      (f) => `@font-face {
    font-family: '${f.family}';
    src: url('${fontsDir}${f.woff2}') format('woff2'),
         url('${fontsDir}${f.ttf}') format('truetype');
    font-display: optional;
}`,
    )
    .join('\n')
}

export const baseIconCSS = `.abs {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    font-family: 'AbsSolid',
    'AbsRegular',
    'AbsBrands',
    'AbsV4Compatibility';
}`

function animationRule(name: string, defaultDuration: string, defaultTiming: string): string {
  return [
    `animation-name: ${name};`,
    `animation-duration: var(--abs-animation-duration, ${defaultDuration});`,
    `animation-timing-function: var(--abs-animation-timing, ${defaultTiming});`,
    `animation-iteration-count: var(--abs-animation-iteration-count, infinite);`,
    `animation-delay: var(--abs-animation-delay, 0s);`,
    `animation-direction: var(--abs-animation-direction, normal);`,
    `animation-fill-mode: var(--abs-animation-fill-mode, none);`,
  ].join(' ')
}

export const animationClasses: Record<string, string> = {
  'abs-spin': animationRule('abs-spin', '2s', 'linear'),
  'abs-spin-reverse': animationRule('abs-spin-reverse', '2s', 'linear'),
  'abs-pulse': animationRule('abs-pulse', '1.5s', 'ease-in-out'),
  'abs-bounce': animationRule('abs-bounce', '1s', 'ease-in-out'),
  'abs-shake': animationRule('abs-shake', '0.5s', 'ease-in-out'),
  'abs-wobble': animationRule('abs-wobble', '1s', 'ease-in-out'),
  'abs-swing': [
    'transform-origin: top center;',
    `animation-name: abs-swing;`,
    `animation-duration: var(--abs-animation-duration, 1s);`,
    `animation-timing-function: var(--abs-animation-timing, ease-in-out);`,
    `animation-iteration-count: var(--abs-animation-iteration-count, infinite);`,
    `animation-delay: var(--abs-animation-delay, 0s);`,
    `animation-direction: var(--abs-animation-direction, normal);`,
    `animation-fill-mode: var(--abs-animation-fill-mode, none);`,
  ].join(' '),
  'abs-float': animationRule('abs-float', '2s', 'ease-in-out'),
  'abs-jelly': animationRule('abs-jelly', '1s', 'ease-in-out'),
  'abs-slide': animationRule('abs-slide', '2s', 'ease-in-out'),
  'abs-slide-up-down': animationRule('abs-slide-up-down', '2s', 'ease-in-out'),
  'abs-fade': animationRule('abs-fade', '2s', 'ease-in-out'),
  'abs-blink': animationRule('abs-blink', '1s', 'ease-in-out'),
  'abs-flip': animationRule('abs-flip', '2s', 'ease-in-out'),
  'abs-flip-horizontal': animationRule('abs-flip-horizontal', '2s', 'ease-in-out'),
  'abs-flip-vertical': animationRule('abs-flip-vertical', '2s', 'ease-in-out'),
  'abs-zoom': animationRule('abs-zoom', '2s', 'ease-in-out'),
  'abs-skew': animationRule('abs-skew', '2s', 'ease-in-out'),
  'abs-vibrate': animationRule('abs-vibrate', '0.1s', 'ease-in-out'),
  'abs-rotate3d': animationRule('abs-rotate3d', '3s', 'linear'),
  'abs-rgb-change': animationRule('abs-rgb-change', '3s', 'linear'),
  'abs-rainbow': animationRule('abs-rainbow', '5s', 'linear'),
  'abs-glow-gold': animationRule('abs-glow-gold', '2s', 'ease-in-out'),

  'abs-rotate-45': animationRule('abs-rotate-45', '2s', 'ease-in-out'),
  'abs-rotate-90': animationRule('abs-rotate-90', '2s', 'ease-in-out'),
  'abs-rotate-180': animationRule('abs-rotate-180', '2s', 'ease-in-out'),
  'abs-rotate-270': animationRule('abs-rotate-270', '2s', 'ease-in-out'),
  'abs-rotate-360': animationRule('abs-rotate-360', '2s', 'ease-in-out'),
  'abs-rotate-x': animationRule('abs-rotate-x', '2s', 'ease-in-out'),
  'abs-rotate-y': animationRule('abs-rotate-y', '2s', 'ease-in-out'),
  'abs-rotate-z': animationRule('abs-rotate-z', '2s', 'ease-in-out'),
  'abs-rotate-xyz': animationRule('abs-rotate-xyz', '2s', 'ease-in-out'),
  'abs-rotate-x-90': animationRule('abs-rotate-x-90', '2s', 'ease-in-out'),
  'abs-rotate-y-90': animationRule('abs-rotate-y-90', '2s', 'ease-in-out'),
  'abs-rotate-z-90': animationRule('abs-rotate-z-90', '2s', 'ease-in-out'),
  'abs-rotate-x-180': animationRule('abs-rotate-x-180', '2s', 'ease-in-out'),
  'abs-rotate-y-180': animationRule('abs-rotate-y-180', '2s', 'ease-in-out'),
  'abs-rotate-z-180': animationRule('abs-rotate-z-180', '2s', 'ease-in-out'),
  'abs-rotate-x-270': animationRule('abs-rotate-x-270', '2s', 'ease-in-out'),
  'abs-rotate-y-270': animationRule('abs-rotate-y-270', '2s', 'ease-in-out'),
  'abs-rotate-z-270': animationRule('abs-rotate-z-270', '2s', 'ease-in-out'),
  'abs-rotate-x-360': animationRule('abs-rotate-x-360', '2s', 'ease-in-out'),
  'abs-rotate-y-360': animationRule('abs-rotate-y-360', '2s', 'ease-in-out'),
  'abs-rotate-z-360': animationRule('abs-rotate-z-360', '2s', 'ease-in-out'),
  'abs-rotate-xyz-360': animationRule('abs-rotate-xyz-360', '2s', 'ease-in-out'),
  'abs-rotate-xyz-5040': animationRule('abs-rotate-xyz-5040', '2s', 'ease-in-out'),

  'abs-beat': animationRule('abs-beat', '0.8s', 'ease-in-out'),
  'abs-beat-fade': animationRule('abs-beat-fade', '1.2s', 'ease-in-out'),
  'abs-flash': animationRule('abs-flash', '0.8s', 'ease-in-out'),
  'abs-tada': animationRule('abs-tada', '1s', 'ease-in-out'),
  'abs-jello': animationRule('abs-jello', '1s', 'ease-in-out'),
  'abs-rubber-band': animationRule('abs-rubber-band', '1s', 'ease-in-out'),
  'abs-buzz': animationRule('abs-buzz', '0.15s', 'linear'),
  'abs-wag': [
    'transform-origin: bottom center;',
    `animation-name: abs-wag;`,
    `animation-duration: var(--abs-animation-duration, 0.5s);`,
    `animation-timing-function: var(--abs-animation-timing, ease-in-out);`,
    `animation-iteration-count: var(--abs-animation-iteration-count, infinite);`,
    `animation-delay: var(--abs-animation-delay, 0s);`,
    `animation-direction: var(--abs-animation-direction, normal);`,
    `animation-fill-mode: var(--abs-animation-fill-mode, none);`,
  ].join(' '),
  'abs-glow': animationRule('abs-glow', '2s', 'ease-in-out'),
  'abs-breathe': animationRule('abs-breathe', '3s', 'ease-in-out'),
  'abs-spin-snap': [
    `animation-name: abs-spin-snap;`,
    `animation-duration: var(--abs-animation-duration, 1.2s);`,
    `animation-timing-function: steps(4);`,
    `animation-iteration-count: var(--abs-animation-iteration-count, infinite);`,
    `animation-delay: var(--abs-animation-delay, 0s);`,
    `animation-direction: var(--abs-animation-direction, normal);`,
    `animation-fill-mode: var(--abs-animation-fill-mode, none);`,
  ].join(' '),
}

export const animationKeyframes: Record<string, string> = {
  'abs-spin': '0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }',
  'abs-spin-reverse': '0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); }',
  'abs-pulse': '0%,100% { transform: scale(1); } 50% { transform: scale(1.2); }',
  'abs-bounce': '0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); }',
  'abs-shake':
    '0%,100% { transform: translateX(0) rotate(0deg); } 15% { transform: translateX(-5px) rotate(-3deg); } 30% { transform: translateX(5px) rotate(3deg); } 45% { transform: translateX(-4px) rotate(-2deg); } 60% { transform: translateX(4px) rotate(2deg); } 75% { transform: translateX(-2px) rotate(-1deg); }',
  'abs-wobble':
    '0%,100% { transform: rotate(0deg); } 25% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); }',
  'abs-swing':
    '0%,100% { transform: rotate(0deg); } 25% { transform: rotate(15deg); } 50% { transform: rotate(-15deg); } 75% { transform: rotate(15deg); }',
  'abs-float': '0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); }',
  'abs-jelly':
    '0%,100% { transform: scale(1); } 25% { transform: scale(1.2,0.8); } 50% { transform: scale(0.8,1.2); } 75% { transform: scale(1.1,0.9); }',
  'abs-slide': '0%,100% { transform: translateX(0); } 50% { transform: translateX(20px); }',
  'abs-slide-up-down': '0%,100% { transform: translateY(0); } 50% { transform: translateY(20px); }',
  'abs-fade':
    '0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.95); }',
  'abs-blink': '0%,100% { opacity: 1; } 50% { opacity: 0; }',
  'abs-flip': '0%,100% { transform: rotateY(0deg); } 50% { transform: rotateY(180deg); }',
  'abs-flip-horizontal': '0%,100% { transform: scaleX(1); } 50% { transform: scaleX(-1); }',
  'abs-flip-vertical': '0%,100% { transform: scaleY(1); } 50% { transform: scaleY(-1); }',
  'abs-zoom': '0%,100% { transform: scale(1); } 50% { transform: scale(1.5); }',
  'abs-skew': '0%,100% { transform: skew(0deg); } 50% { transform: skew(20deg); }',
  'abs-vibrate':
    '0%,100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); }',
  'abs-rotate3d':
    '0% { transform: rotate3d(1,1,1,0deg); } 100% { transform: rotate3d(1,1,1,360deg); }',
  'abs-rgb-change': '0% { color: red; } 50% { color: blue; } 100% { color: green; }',
  'abs-rainbow':
    '0% { color: red; } 14% { color: orange; } 28% { color: yellow; } 42% { color: green; } 57% { color: blue; } 71% { color: indigo; } 85% { color: violet; } 100% { color: red; }',
  'abs-glow-gold':
    '0%,100% { filter: drop-shadow(0 0 5px gold); } 50% { filter: drop-shadow(0 0 20px gold); }',
  'abs-rotate-45': '0%,100% { transform: rotate(0deg); } 50% { transform: rotate(45deg); }',
  'abs-rotate-90': '0%,100% { transform: rotate(0deg); } 50% { transform: rotate(90deg); }',
  'abs-rotate-180': '0%,100% { transform: rotate(0deg); } 50% { transform: rotate(180deg); }',
  'abs-rotate-270': '0%,100% { transform: rotate(0deg); } 50% { transform: rotate(270deg); }',
  'abs-rotate-360': '0%,100% { transform: rotate(0deg); } 50% { transform: rotate(360deg); }',
  'abs-rotate-x': '0%,100% { transform: rotateX(0deg); } 50% { transform: rotateX(180deg); }',
  'abs-rotate-y': '0%,100% { transform: rotateY(0deg); } 50% { transform: rotateY(180deg); }',
  'abs-rotate-z': '0%,100% { transform: rotateZ(0deg); } 50% { transform: rotateZ(180deg); }',
  'abs-rotate-xyz':
    '0%,100% { transform: rotate3d(1,1,1,0deg); } 50% { transform: rotate3d(1,1,1,180deg); }',
  'abs-rotate-x-90': '0%,100% { transform: rotateX(0deg); } 50% { transform: rotateX(90deg); }',
  'abs-rotate-y-90': '0%,100% { transform: rotateY(0deg); } 50% { transform: rotateY(90deg); }',
  'abs-rotate-z-90': '0%,100% { transform: rotateZ(0deg); } 50% { transform: rotateZ(90deg); }',
  'abs-rotate-x-180': '0%,100% { transform: rotateX(0deg); } 50% { transform: rotateX(180deg); }',
  'abs-rotate-y-180': '0%,100% { transform: rotateY(0deg); } 50% { transform: rotateY(180deg); }',
  'abs-rotate-z-180': '0%,100% { transform: rotateZ(0deg); } 50% { transform: rotateZ(180deg); }',
  'abs-rotate-x-270': '0%,100% { transform: rotateX(0deg); } 50% { transform: rotateX(270deg); }',
  'abs-rotate-y-270': '0%,100% { transform: rotateY(0deg); } 50% { transform: rotateY(270deg); }',
  'abs-rotate-z-270': '0%,100% { transform: rotateZ(0deg); } 50% { transform: rotateZ(270deg); }',
  'abs-rotate-x-360': '0%,100% { transform: rotateX(0deg); } 50% { transform: rotateX(360deg); }',
  'abs-rotate-y-360': '0%,100% { transform: rotateY(0deg); } 50% { transform: rotateY(360deg); }',
  'abs-rotate-z-360': '0%,100% { transform: rotateZ(0deg); } 50% { transform: rotateZ(360deg); }',
  'abs-rotate-xyz-360':
    '0%,100% { transform: rotate3d(1,1,1,0deg); } 50% { transform: rotate3d(1,1,1,360deg); }',
  'abs-rotate-xyz-5040':
    '0%,100% { transform: rotate3d(1,1,1,0deg); } 50% { transform: rotate3d(1,1,1,5040deg); }',

  'abs-beat':
    '0%,100% { transform: scale(1); } 15% { transform: scale(1.25); } 30% { transform: scale(1); } 45% { transform: scale(1.25); } 60% { transform: scale(1); }',
  'abs-beat-fade':
    '0%,100% { opacity: 1; transform: scale(1); } 15% { opacity: 0.6; transform: scale(1.28); } 30% { opacity: 1; transform: scale(1); } 45% { opacity: 0.6; transform: scale(1.28); } 60% { opacity: 1; transform: scale(1); }',
  'abs-flash':
    '0%,100% { opacity: 1; } 25% { opacity: 0; } 50% { opacity: 1; } 75% { opacity: 0; }',
  'abs-tada':
    '0% { transform: scale(1) rotate(0deg); } 15% { transform: scale(0.9) rotate(-3deg); } 30% { transform: scale(1.15) rotate(3deg); } 45% { transform: scale(1.1) rotate(-3deg); } 60% { transform: scale(1.1) rotate(3deg); } 75% { transform: scale(1.05) rotate(-3deg); } 100% { transform: scale(1) rotate(0deg); }',
  'abs-jello':
    '0%,100% { transform: skew(0deg); } 25% { transform: skew(-12deg); } 50% { transform: skew(12deg); } 75% { transform: skew(-6deg); }',
  'abs-rubber-band':
    '0%,100% { transform: scaleX(1) scaleY(1); } 15% { transform: scaleX(1.25) scaleY(0.75); } 30% { transform: scaleX(0.75) scaleY(1.25); } 45% { transform: scaleX(1.15) scaleY(0.85); } 60% { transform: scaleX(0.95) scaleY(1.05); } 75% { transform: scaleX(1.05) scaleY(0.95); }',
  'abs-buzz':
    '0%,100% { transform: translateX(0); } 25% { transform: translateX(4px); } 50% { transform: translateX(-4px); } 75% { transform: translateX(4px); }',
  'abs-wag':
    '0%,100% { transform: rotate(0deg); } 25% { transform: rotate(12deg); } 50% { transform: rotate(-12deg); } 75% { transform: rotate(12deg); }',
  'abs-glow':
    '0%,100% { filter: drop-shadow(0 0 5px currentColor); } 33% { filter: drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px gold); } 66% { filter: drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px #ff69b4); }',
  'abs-breathe':
    '0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.03); }',
  'abs-spin-snap':
    '0% { transform: rotate(0deg); } 25% { transform: rotate(90deg); } 50% { transform: rotate(180deg); } 75% { transform: rotate(270deg); } 100% { transform: rotate(360deg); }',
}

export function reducedMotionCSS(): string {
  const selectors = Object.keys(animationClasses).join(',\n')
  return `@media (prefers-reduced-motion: reduce) {\n${selectors} {\n    animation: none !important;\n  }\n}`
}

export function animationClassesCSS(): string {
  const classes = Object.entries(animationClasses)
    .map(([cls, rule]) => `.${cls} { ${rule} }`)
    .join('\n')
  return classes + '\n' + reducedMotionCSS()
}

export function animationKeyframesCSS(): string {
  return Object.entries(animationKeyframes)
    .map(([name, content]) => `@keyframes ${name} { ${content} }`)
    .join('\n')
}

export const sizeClasses: Record<string, string> = {}
for (let i = 1; i <= 16; i++) {
  sizeClasses[`abs-${i}x`] = `font-size: ${i}em;`
}

export function sizeClassesCSS(): string {
  return Object.entries(sizeClasses)
    .map(([cls, rule]) => `.${cls} { ${rule} }`)
    .join('\n')
}

export const relativeSizeClasses: Record<string, string> = {
  'abs-2xs': 'font-size: 0.625em;',
  'abs-xs': 'font-size: 0.75em;',
  'abs-sm': 'font-size: 0.875em;',
  'abs-lg': 'font-size: 1.25em;',
  'abs-xl': 'font-size: 1.5em;',
  'abs-2xl': 'font-size: 2em;',
  'abs-relative-2xs': 'font-size: 0.625em; line-height: 0.1em; vertical-align: 0.225em;',
  'abs-relative-3xs': 'font-size: 0.5em; line-height: 0.12em; vertical-align: 0.3em;',
  'abs-relative-xs': 'font-size: 0.75em; line-height: 0.08333em; vertical-align: 0.125em;',
  'abs-relative-sm': 'font-size: 0.875em; line-height: 0.07143em; vertical-align: 0.05357em;',
  'abs-relative-lg': 'font-size: 1.25em; line-height: 0.05em; vertical-align: -0.075em;',
  'abs-relative-xl': 'font-size: 1.5em; line-height: 0.04167em; vertical-align: -0.125em;',
  'abs-relative-2xl': 'font-size: 2em; line-height: 0.03125em; vertical-align: -0.1875em;',
  'abs-relative-3xl': 'font-size: 3em; line-height: 0.02083em; vertical-align: -0.25em;',
}

export function relativeSizeClassesCSS(): string {
  return Object.entries(relativeSizeClasses)
    .map(([cls, rule]) => `.${cls} { ${rule} }`)
    .join('\n')
}

export const utilityClasses: Record<string, string> = {
  'abs-center': 'text-align: center;',
  'abs-center-icon': 'text-align: center;',
  'abs-flex': 'display: flex; justify-content: center; align-items: center;',
  'abs-block': 'display: block; margin: 0 auto;',
  'abs-white': 'color: #fff;',
  'abs-black': 'color: #000;',
  'abs-inherit': 'line-height: inherit;',
  'abs-transform-90': 'transform: rotate(90deg);',
  'abs-transform-180': 'transform: rotate(180deg);',
  'abs-transform-270': 'transform: rotate(270deg);',
  'abs-transform-horizontal': 'transform: scaleX(-1);',
  'abs-transform-vertical': 'transform: scaleY(-1);',
  'abs-transform-both': 'transform: scale(-1);',
  'abs-transform-by': 'transform: rotate(0);',
  'abs-rotate-by': 'transform: rotate(var(--abs-rotate-angle, 0deg));',
  'abs-flip-both': 'transform: scale(-1, -1);',
  'abs-fw': 'width: 1.25em; text-align: center;',
  'abs-float-left': 'float: left; margin-right: 0.3em;',
  'abs-float-right': 'float: right; margin-left: 0.3em;',
  'abs-pull-left': 'float: left; margin-right: 0.3em;',
  'abs-pull-right': 'float: right; margin-left: 0.3em;',
  'abs-border': 'border-radius: 0.1em; border: 0.08em solid #eee; padding: 0.2em 0.25em 0.15em;',
  'abs-z-auto': 'z-index: auto;',
  'abs-z-1': 'z-index: 1;',
  'abs-z-2': 'z-index: 2;',
  'abs-z-3': 'z-index: 3;',
  'abs-z-4': 'z-index: 4;',
  'abs-z-5': 'z-index: 5;',
  'abs-z-fast': 'z-index: 999999;',
  'abs-z-last': 'z-index: -999999;',
  'abs-hover-scale:hover': 'transform: scale(1.05); transition: transform 0.2s;',
  'abs-hover-shadow:hover': 'box-shadow: 0 4px 6px rgba(55, 60, 457, 0.1);',
  'abs-inverse': 'color: #fff;',
  'abs-opacity-25': 'opacity: 0.25;',
  'abs-opacity-50': 'opacity: 0.5;',
  'abs-opacity-75': 'opacity: 0.75;',
  'abs-opacity-100': 'opacity: 1;',
  'abs-version::before': 'content: "Version: 1.0.0-abs";',
  'abs-author::before': 'content: "Author: RK";',
  'abs-author-info::before':
    'content: "framowark:_abscomfonts___version:_1.0.0-abs___author:_RK Riad Khan___email:_rkriad585@gmail.com___github:_github.com/rkriad585___product by:_rkriad585";',
}

export function utilityClassesCSS(): string {
  return Object.entries(utilityClasses)
    .map(([cls, rule]) => `.${cls} { ${rule} }`)
    .join('\n')
}

export function minifyCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};,:])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim()
}

export function generateColorClasses(): string {
  let styles = ''
  for (const [color, shades] of Object.entries(colorPalette)) {
    for (const [shade, hex] of Object.entries(shades)) {
      styles += `.bg-${color}-${shade} { background-color: ${hex}; }\n`
      styles += `.abs-${color}-${shade} { color: ${hex}; }\n`
    }
  }
  return styles
}

export function generateTransformClasses(): string {
  let styles = ''
  for (let i = 2; i <= 8; i++) {
    styles += `.abs-grow-${i} { transform: scale(${i}); }\n`
    styles += `.abs-shrink-${i} { transform: scale(${1 / i}); }\n`
  }
  for (const px of [4, 8, 12, 16, 20, 24, 32, 48, 64]) {
    styles += `.abs-up-${px} { transform: translateY(-${px}px); }\n`
    styles += `.abs-down-${px} { transform: translateY(${px}px); }\n`
    styles += `.abs-left-${px} { transform: translateX(-${px}px); }\n`
    styles += `.abs-right-${px} { transform: translateX(${px}px); }\n`
  }
  for (const deg of [5, 10, 15, 20, 25, 30]) {
    styles += `.abs-skew-x-${deg} { transform: skewX(${deg}deg); }\n`
    styles += `.abs-skew-y-${deg} { transform: skewY(${deg}deg); }\n`
  }
  return styles
}

export function generateComponentClasses(): string {
  return `
.abs-stack { display: inline-block; height: 2em; line-height: 2em; position: relative; vertical-align: middle; width: 2em; }
.abs-stack-1x { line-height: inherit; }
.abs-stack-2x { position: absolute; left: 0; width: 100%; text-align: center; font-size: 2em; line-height: inherit; }
.abs-layers { display: inline-block; height: 1em; line-height: 1em; position: relative; text-align: center; vertical-align: middle; width: 1em; }
.abs-layers-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.5em; font-family: sans-serif; }
.abs-layers-counter { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #ff4545; border-radius: 1em; color: #fff; font-family: sans-serif; font-size: 0.45em; font-weight: 700; line-height: 1em; min-width: 1em; padding: 0.15em 0.3em; }
.abs-layers-bottom-left { top: auto; bottom: 0; left: 0; transform: none; }
.abs-layers-bottom-right { top: auto; bottom: 0; right: 0; left: auto; transform: none; }
.abs-layers-top-left { top: 0; left: 0; transform: none; }
.abs-layers-top-right { top: 0; right: 0; left: auto; transform: none; }
  `.trim()
}

export function generateGradientClasses(): string {
  let styles =
    '.abs-gradient { -webkit-background-clip: text; background-clip: text; color: transparent; background-image: linear-gradient(to right, var(--abs-gradient-from, currentColor), var(--abs-gradient-to, currentColor)); }\n'
  styles +=
    '.bg-gradient { background-image: linear-gradient(to right, var(--abs-bg-gradient-from, transparent), var(--abs-bg-gradient-to, transparent)); }\n'
  for (const [color, shades] of Object.entries(colorPalette)) {
    for (const [shade, hex] of Object.entries(shades)) {
      styles += `.abs-gradient-from-${color}-${shade} { --abs-gradient-from: ${hex}; }\n`
      styles += `.abs-gradient-to-${color}-${shade} { --abs-gradient-to: ${hex}; }\n`
      styles += `.bg-gradient-from-${color}-${shade} { --abs-bg-gradient-from: ${hex}; }\n`
      styles += `.bg-gradient-to-${color}-${shade} { --abs-bg-gradient-to: ${hex}; }\n`
    }
  }
  return styles
}
