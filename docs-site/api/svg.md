---
title: SVG API
---

# SVG API

AbscomFonts provides a tree-shakeable SVG framework for modern bundlers. Import only the icons you need and keep your bundle small.

## Installation

```bash
npm install abscomfonts
```

## Tree-Shakeable Icon Imports

Import individual icons as SVG path strings:

```typescript
import { Heart, Star, User, Camera } from 'abscomfonts/svg'

// Each import is a raw SVG path string
console.log(Heart)  // "M462.3... (SVG path data)"
console.log(Star)   // "M528.1... (SVG path data)"
```

With `sideEffects: false`, bundlers only include the icons you actually import.

## Dynamic Rendering

### `renderIcon(name, options)`

Dynamically renders a complete SVG string for any icon by name.

```typescript
import { renderIcon } from 'abscomfonts/svg'

const svg = renderIcon('heart', { size: 32, color: '#dc2626' })
document.body.innerHTML = svg
```

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `size` | `number` | `24` | Icon width/height in pixels |
| `color` | `string` | `'currentColor'` | SVG fill color |
| `className` | `string` | `''` | Additional CSS class |

### `getIconPaths(name)`

Returns the raw SVG path string for a given icon name.

```typescript
import { getIconPaths } from 'abscomfonts/svg'

const paths = getIconPaths('heart')
// Returns SVG path string or undefined if not found
```

### `getIconStyle(name)`

Returns the style (family) information for an icon.

```typescript
import { getIconStyle } from 'abscomfonts/svg'

getIconStyle('heart')   // 'solid'
getIconStyle('twitter') // 'brands'
```

## Icon Registry

### `iconRegistry`

The full icon path registry for programmatic access.

```typescript
import { iconRegistry } from 'abscomfonts/svg'

console.log(Object.keys(iconRegistry).length) // Total icons available

const entry = iconRegistry.heart
// {
//   name: 'heart',
//   style: 'solid',
//   codepoint: 'f004',
//   paths: 'M462.3...'
// }
```

## TypeScript Types

```typescript
import type { IconName, RenderIconOptions } from 'abscomfonts/svg'

// Type-safe icon name
const icon: IconName = 'heart'

// Type-safe render options
const opts: RenderIconOptions = {
  size: 32,
  color: '#dc2626',
  className: 'my-icon',
}
```

## Tree-Shaking

Only the path data you import is included in your bundle:

```typescript
import { Heart, Star } from 'abscomfonts/svg'

// Only Heart and Star SVG data are bundled, not the other 2490 icons
console.log(Heart, Star)
```

For dynamic rendering with `renderIcon()`, the full icon registry is included but tree-shaking still applies to individual named imports.
