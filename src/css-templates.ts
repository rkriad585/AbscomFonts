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

export const animationClasses: Record<string, string> = {
  'abs-spin': 'animation: abs-spin 2s infinite linear;',
  'abs-spin-reverse': 'animation: abs-spin-reverse 2s infinite linear;',
  'abs-pulse': 'animation: abs-pulse 1.5s infinite ease-in-out;',
  'abs-bounce': 'animation: abs-bounce 1s infinite ease-in-out;',
  'abs-shake': 'animation: abs-shake 0.5s infinite ease-in-out;',
  'abs-wobble': 'animation: abs-wobble 1s infinite ease-in-out;',
  'abs-swing': 'animation: abs-swing 1s infinite ease-in-out;',
  'abs-float': 'animation: abs-float 2s infinite ease-in-out;',
  'abs-jelly': 'animation: abs-jelly 1s infinite ease-in-out;',
  'abs-slide': 'animation: abs-slide 2s infinite ease-in-out;',
  'abs-slide-up-down': 'animation: abs-slide-up-down 2s infinite ease-in-out;',
  'abs-fade': 'animation: abs-fade 2s infinite ease-in-out;',
  'abs-blink': 'animation: abs-blink 1s infinite ease-in-out;',
  'abs-flip': 'animation: abs-flip 2s infinite ease-in-out;',
  'abs-flip-horizontal': 'animation: abs-flip-horizontal 2s infinite ease-in-out;',
  'abs-flip-vertical': 'animation: abs-flip-vertical 2s infinite ease-in-out;',
  'abs-zoom': 'animation: abs-zoom 2s infinite ease-in-out;',
  'abs-skew': 'animation: abs-skew 2s infinite ease-in-out;',
  'abs-vibrate': 'animation: abs-vibrate 0.1s infinite ease-in-out;',
  'abs-rotate3d': 'animation: abs-rotate3d 3s infinite linear;',
  'abs-rgb-change': 'animation: abs-rgb-change 3s infinite linear;',
  'abs-rainbow': 'animation: abs-rainbow 5s infinite linear;',
  'abs-glow-gold': 'animation: abs-glow-gold 2s infinite ease-in-out;',
  'abs-rotate-45': 'animation: abs-rotate-45 2s infinite ease-in-out;',
  'abs-rotate-90': 'animation: abs-rotate-90 2s infinite ease-in-out;',
  'abs-rotate-180': 'animation: abs-rotate-180 2s infinite ease-in-out;',
  'abs-rotate-270': 'animation: abs-rotate-270 2s infinite ease-in-out;',
  'abs-rotate-360': 'animation: abs-rotate-360 2s infinite ease-in-out;',
  'abs-rotate-x': 'animation: abs-rotate-x 2s infinite ease-in-out;',
  'abs-rotate-y': 'animation: abs-rotate-y 2s infinite ease-in-out;',
  'abs-rotate-z': 'animation: abs-rotate-z 2s infinite ease-in-out;',
  'abs-rotate-xyz': 'animation: abs-rotate-xyz 2s infinite ease-in-out;',
  'abs-rotate-x-90': 'animation: abs-rotate-x-90 2s infinite ease-in-out;',
  'abs-rotate-y-90': 'animation: abs-rotate-y-90 2s infinite ease-in-out;',
  'abs-rotate-z-90': 'animation: abs-rotate-z-90 2s infinite ease-in-out;',
  'abs-rotate-x-180': 'animation: abs-rotate-x-180 2s infinite ease-in-out;',
  'abs-rotate-y-180': 'animation: abs-rotate-y-180 2s infinite ease-in-out;',
  'abs-rotate-z-180': 'animation: abs-rotate-z-180 2s infinite ease-in-out;',
  'abs-rotate-x-270': 'animation: abs-rotate-x-270 2s infinite ease-in-out;',
  'abs-rotate-y-270': 'animation: abs-rotate-y-270 2s infinite ease-in-out;',
  'abs-rotate-z-270': 'animation: abs-rotate-z-270 2s infinite ease-in-out;',
  'abs-rotate-x-360': 'animation: abs-rotate-x-360 2s infinite ease-in-out;',
  'abs-rotate-y-360': 'animation: abs-rotate-y-360 2s infinite ease-in-out;',
  'abs-rotate-z-360': 'animation: abs-rotate-z-360 2s infinite ease-in-out;',
  'abs-rotate-xyz-360': 'animation: abs-rotate-xyz-360 2s infinite ease-in-out;',
  'abs-rotate-xyz-5040': 'animation: abs-rotate-xyz-5040 2s infinite ease-in-out;',
}

export const animationKeyframes: Record<string, string> = {
  'abs-spin': '0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }',
  'abs-spin-reverse': '0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); }',
  'abs-pulse': '0%,100% { transform: scale(1); } 50% { transform: scale(1.2); }',
  'abs-bounce': '0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); }',
  'abs-shake':
    '0%,100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); }',
  'abs-wobble':
    '0%,100% { transform: rotate(0deg); } 25% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); }',
  'abs-swing':
    '0%,100% { transform: rotate(0deg); } 25% { transform: rotate(15deg); } 75% { transform: rotate(-15deg); }',
  'abs-float': '0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); }',
  'abs-jelly':
    '0%,100% { transform: scale(1); } 25% { transform: scale(1.2,0.8); } 50% { transform: scale(0.8,1.2); } 75% { transform: scale(1.1,0.9); }',
  'abs-slide': '0%,100% { transform: translateX(0); } 50% { transform: translateX(20px); }',
  'abs-slide-up-down': '0%,100% { transform: translateY(0); } 50% { transform: translateY(20px); }',
  'abs-fade': '0%,100% { opacity: 1; } 50% { opacity: 0.5; }',
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
}

export function animationClassesCSS(): string {
  return Object.entries(animationClasses)
    .map(([cls, rule]) => `.${cls} { ${rule} }`)
    .join('\n')
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
  'abs-xs': 'font-size: 0.75em;',
  'abs-sm': 'font-size: 0.875em;',
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
  'abs-float-left': 'float: left; margin-right: 0.3em;',
  'abs-float-right': 'float: right; margin-left: 0.3em;',
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
