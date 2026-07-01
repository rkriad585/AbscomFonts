import { abscomIcon } from '../src/icons.js'
import { writeFileSync } from 'fs'
import {
  fontFaceCSS, baseIconCSS,
  animationClassesCSS, animationKeyframesCSS,
  sizeClassesCSS, relativeSizeClassesCSS,
  utilityClassesCSS, generateColorClasses,
} from '../src/css-templates.js'

const fontPath = process.argv[2] || '/AbscomFonts/fonts/'

let css = `/* AbscomFonts - generated CSS for docs-site */
${fontFaceCSS(fontPath)}

${baseIconCSS}

${animationClassesCSS()}

${animationKeyframesCSS()}

${sizeClassesCSS()}

${relativeSizeClassesCSS()}

${utilityClassesCSS()}

${generateColorClasses()}

`

// Icon ::before rules
for (const [name, code] of Object.entries(abscomIcon)) {
  css += `.abs.abs-${name}::before { content: "\\${code}"; }\n`
}

writeFileSync('docs-site/public/abscomfonts.css', css)
console.log(`Generated abscomfonts.css (${(css.length / 1024 / 1024).toFixed(1)} MB)`)
