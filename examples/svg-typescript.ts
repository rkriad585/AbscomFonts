// SVG tree-shakeable imports with TypeScript types
// Run: npx tsx examples/svg-typescript.ts

import {
  Heart,
  Star,
  User,
  Camera,
  renderIcon,
  getIconPaths,
  getIconStyle,
  iconRegistry,
} from 'abscomfonts/svg'
import type { IconName, RenderIconOptions } from 'abscomfonts/svg'

// Type-safe icon name
const icon: IconName = 'heart'

// Type-safe render options
const opts: RenderIconOptions = {
  size: 32,
  color: '#dc2626',
  className: 'my-icon',
}

// Tree-shakeable individual imports (typed)
console.log('Heart data:', Heart)
console.log('Star data:', Star)
console.log('User data:', User)

// Dynamic rendering with full type safety
console.log('\nrenderIcon():')
console.log(renderIcon('camera', { size: 48 }))

// Path extraction
const paths = getIconPaths('camera')
console.log('\ngetIconPaths("camera"):', paths ? `${paths.slice(0, 50)}...` : 'not found')

// Style detection
console.log('\ngetIconStyle("twitter"):', getIconStyle('twitter'))
console.log('getIconStyle("heart"):', getIconStyle('heart'))

// Registry typed access
const cameraEntry = iconRegistry.camera
console.log('\nRegistry entry:', {
  name: cameraEntry.name,
  style: cameraEntry.style,
  codepoint: cameraEntry.codepoint,
  pathsLength: cameraEntry.paths.length,
})

// Show that unused named imports would be tree-shaken by a bundler
console.log('\nTypeScript types verified: IconName, RenderIconOptions')
