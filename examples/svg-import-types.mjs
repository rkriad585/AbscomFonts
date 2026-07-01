// SVG typed imports — examples showing type info at runtime
// Run: node examples/svg-import-types.mjs

import { renderIcon, getIconPaths, getIconStyle, iconRegistry } from 'abscomfonts/svg'

// Dynamic rendering
console.log('=== renderIcon() with corrected SVG coordinates ===')
console.log(renderIcon('heart', { size: 32, color: '#dc2626' }))
console.log()

// Path extraction
const paths = getIconPaths('heart')
console.log('=== getIconPaths("heart") ===')
console.log('length:', paths?.length)
console.log('starts with:', paths?.slice(0, 40))
console.log('First Y coordinate is positive:', !paths?.match(/M\d+\s+-/) ? '✓' : '✗')
console.log()

// Style detection
console.log('=== Icon Styles ===')
const samples = ['twitter', 'heart', 'star', 'bell', '500px']
for (const name of samples) {
  const style = getIconStyle(name)
  const cp = iconRegistry[name]?.codepoint
  console.log(`  ${name.padEnd(12)} style=${style?.padEnd(8)} codepoint=${cp}`)
}
console.log()

// Verify a few SVG files have correct Y-down coordinates
console.log('=== SVG Coordinate Verification ===')
function hasNegativeY(path) {
  return /[MLQCST][\d.\s-]*-\d/.test(path)
}
const checks = ['heart', 'star', 'cog', 'user', 'camera']
let allClean = true
for (const name of checks) {
  const p = iconRegistry[name]?.paths
  if (p) {
    const hasNeg = hasNegativeY(p)
    if (hasNeg) {
      console.log(`  ${name}: ⚠️ has negative Y values`)
      allClean = false
    } else {
      console.log(`  ${name}: ✓ all Y values positive`)
    }
  }
}
console.log(allClean ? '\nAll icons have correct SVG Y-down coordinates ✓' : '')
