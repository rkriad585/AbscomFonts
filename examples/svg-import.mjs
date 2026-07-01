// SVG tree-shakeable imports (ESM)
// Run: node examples/svg-import.mjs

import { Heart, Star, Cog, Spinner } from 'abscomfonts/svg'
import { renderIcon, getIconPaths, getIconStyle, iconRegistry } from 'abscomfonts/svg'

// Tree-shakeable individual icon imports
console.log('=== Tree-Shakeable Imports ===')
console.log('Heart SVG path:', Heart)
console.log('Star SVG path length:', Star.length, 'chars')
console.log('Cog SVG path length:', Cog.length, 'chars')

// Dynamic rendering with renderIcon
console.log('\n=== renderIcon() ===')
console.log(renderIcon('heart', { size: 32, color: '#dc2626' }))
console.log(renderIcon('star', { size: 48, color: '#fbbf24', className: 'star-icon' }))

// Get raw paths
console.log('\n=== getIconPaths() ===')
console.log('Spinner paths:', getIconPaths('spinner')?.slice(0, 60) + '...')

// Get icon style info
console.log('\n=== getIconStyle() ===')
console.log('heart:', getIconStyle('heart'))
console.log('twitter:', getIconStyle('twitter'))

// Registry inspection
console.log('\n=== Registry ===')
console.log('Total icons:', Object.keys(iconRegistry).length)
console.log('heart entry:', iconRegistry.heart)

// Unused icon (should be tree-shaken by bundler)
console.log('\nNote: Only Heart, Star, Cog, Spinner are imported.')
console.log('A bundler (Vite/Webpack) would tree-shake the other 2488 icons.')
