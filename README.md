<div align="center">

# AbscomFonts

**1600+ icons • 30+ animations • Color utilities • Zero build step**

[![npm version](https://img.shields.io/npm/v/abscomfonts)](https://www.npmjs.com/package/abscomfonts)
[![license](https://img.shields.io/npm/l/abscomfonts)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/abscomfonts)](https://www.npmjs.com/package/abscomfonts)
[![CI](https://github.com/rkriad585/AbscomFonts/actions/workflows/ci.yml/badge.svg)](https://github.com/rkriad585/AbscomFonts/actions/workflows/ci.yml)
[![Release](https://github.com/rkriad585/AbscomFonts/actions/workflows/release.yml/badge.svg)](https://github.com/rkriad585/AbscomFonts/actions/workflows/release.yml)
[![GitHub stars](https://img.shields.io/github/stars/rkriad585/AbscomFonts)](https://github.com/rkriad585/AbscomFonts)

A comprehensive icon font framework with 1600+ icons, 30+ CSS animations, a Tailwind-inspired color palette, and a built-in validation system. Works in any web project — no build tools required.

</div>

---

## Overview

AbscomFonts is a single-script icon framework that auto-injects everything into your page. Include one `<script>` tag and start using icons immediately.

**Key features:**
- **2492 icons** — Brands, Solid, and Regular styles
- **30+ animations** — Spin, bounce, pulse, shake, and more
- **242 color classes** — 22 colors × 11 shades (Tailwind palette)
- **Size utilities** — Fixed (1x–16x) and relative sizing
- **Transform & rotate** — 90°, 180°, 270°, flip, 3D rotation
- **Validation system** — Detects missing classes, wrong elements
- **No build step** — Works with plain HTML, no npm needed
- **TypeScript support** — Full type definitions included

---

## Quick Start

### Browser (CDN)

```html
<script src="https://unpkg.com/abscomfonts/dist/abscomfonts.iife.js"></script>

<i class="abs abs-heart abs-3x abs-red-500"></i>
<i class="abs abs-spinner abs-spin abs-blue-600"></i>
```

### npm

```bash
npm install abscomfonts
```

```javascript
// ESM / TypeScript — font-based API
import { abscomIcon, colorPalette, generateColorClasses, fontIcon } from 'abscomfonts';

// Tree-shakeable SVG icons
import { Heart, Star, renderIcon } from 'abscomfonts/svg';

// CommonJS — font-based only
const abscomfonts = require('abscomfonts');
```

---

## SVG Framework & Bundle Size

AbscomFonts provides two consumption methods:

| Approach | Bundle Size | Use Case |
|----------|-------------|----------|
| **Font-based** (CSS) | **~86 KB** (ESM) / **91 KB** (IIFE) | Drop-in CDN usage, zero build step |
| **SVG tree-shakeable** | **~2.17 MB** (full) → **~1 KB/icon** tree-shaken | Modern bundlers (Vite, Webpack, esbuild) |

### Tree-Shakeable SVG Imports

```typescript
// Import individual icons (tree-shakeable)
import { Heart, Star, User } from 'abscomfonts/svg'

// Dynamic runtime rendering
import { renderIcon } from 'abscomfonts/svg'
document.body.innerHTML = renderIcon('heart', { size: 32, color: '#dc2626' })

// Raw SVG path data
import { getIconPaths } from 'abscomfonts/svg'
const paths = getIconPaths('heart') // SVG path string

// Full registry for programmatic access
import { iconRegistry } from 'abscomfonts/svg'
```

With `sideEffects: false`, bundlers only include the icons you actually import.

### Framework Components

```tsx
// React
import { Heart } from 'abscomfonts/svg'
import { AbsIcon } from 'abscomfonts/react'
<AbsIcon path={Heart} size={32} color="#e74c3c" spin />

// Vue
import { Heart } from 'abscomfonts/svg'
import { AbsIcon } from 'abscomfonts/vue'
<AbsIcon :path="Heart" :size="32" spin />

// Svelte
import { Heart } from 'abscomfonts/svg'
import { AbsIcon } from 'abscomfonts/svelte'
<AbsIcon path={Heart} size={32} spin />
```

---

```
AbscomFonts/
├── src/
│   ├── icons.ts          # 2492 icon codepoint mappings
│   ├── icons-meta.ts     # Auto-generated icon metadata (categories, keywords, aliases)
│   ├── search.ts         # searchIcons(), getIconMeta(), getCategories() API
│   ├── palette.ts        # 25-color palette (11 shades each)
│   ├── css.ts            # CSS templates + generateColorClasses()
│   ├── info.ts           # Console info utility
│   ├── svg/              # Tree-shakeable SVG modules (auto-generated)
│   │   ├── index.ts      # Barrel export of all icons
│   │   ├── renderer.ts   # renderIcon(), getIconPaths(), getIconStyle()
│   │   ├── registry.ts   # Full icon path registry
│   │   └── names.ts      # IconName union type
│   ├── react/            # React AbsIcon component
│   ├── vue/              # Vue AbsIcon component
│   └── svelte/           # Svelte AbsIcon component
│   ├── index.ts          # Main entry (auto-inits in browser)
│   └── global.ts         # IIFE entry for browser <script>
├── dist/
│   ├── index.js              # ESM build (~86 KB)
│   ├── index.cjs             # CommonJS build (~87 KB)
│   ├── index.d.ts            # TypeScript declarations
│   ├── icons-index.json      # Search index (239 KB, all icon metadata)
│   ├── abscomfonts.iife.js   # Browser IIFE (~91 KB)
│   ├── abscomfonts.d.ts      # IIFE type declarations
│   └── svg/                  # SVG bundle (~2.17 MB, tree-shakeable)
│       ├── index.js
│       └── index.d.ts
│   ├── react/                # React AbsIcon component (~1 KB)
│   │   ├── index.js
│   │   └── index.d.ts
│   ├── vue/                  # Vue AbsIcon component (~1 KB)
│   │   ├── index.js
│   │   └── index.d.ts
│   └── svelte/               # Svelte AbsIcon component source
├── icons/                 # Raw SVG files per icon (auto-generated)
├── fonts/
│   ├── abs-brands-400.woff2
│   ├── abs-solid-900.woff2
│   ├── abs-regular-400.woff2
│   └── abs-v4compatibility.woff2
├── docs/
│   ├── getting-started.md
│   ├── icons.md
│   ├── animations.md
│   ├── colors.md
│   ├── sizes.md
│   ├── advanced.md
│   ├── api.md
│   ├── validation.md
│   └── troubleshooting.md
├── examples/
│   ├── basic-icons.html       # Icon grid with click-to-copy
│   ├── animated-icons.html    # Animation demos with click-to-copy
│   ├── color-showcase.html    # Full color palette demo with click-to-copy
│   ├── all-in-one.html        # Landing page showcase with click-to-copy
│   ├── icon-picker.html       # Searchable icon browser with click-to-copy
│   ├── form-elements.html     # Form inputs styled with icons
│   ├── social-cards.html      # Brand cards with click-to-copy
│   ├── require-example.cjs
│   ├── import-example.mjs
│   ├── typescript-example.ts
│   ├── svg-import.mjs        # Node ESM SVG import
│   ├── svg-typescript.ts     # TypeScript SVG import
│   ├── svg-browser.html      # Browser live icon grid
│   ├── svg-custom-element.html
│   ├── react-import.mjs      # React AbsIcon component usage
│   ├── vue-import.mjs        # Vue AbsIcon component usage
│   └── svelte-import.svelte  # Svelte AbsIcon component usage
├── src/icons.ts           # All icon codepoint mappings
├── abscomfonts.js         # Original single-file framework
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

---

## Documentation

| Guide | Description |
|-------|-------------|
| [Getting Started](docs/getting-started.md) | Installation, setup, first icon |
| [Icons Reference](docs/icons.md) | All icon categories and usage |
| [Animations](docs/animations.md) | 30+ animation classes |
| [Colors](docs/colors.md) | Color palette and utilities |
| [Sizes](docs/sizes.md) | Fixed and relative sizing |
| [Advanced Features](docs/advanced.md) | Transforms, z-index, hover effects |
| [API Reference](docs/api.md) | Programmatic usage (ESM/CJS/TS) |
| [Icon Search](docs/search.md) | Search, filter & metadata API |
| [Framework Components](docs/framework-components.md) | React, Vue, Svelte components |
| [Validation System](docs/validation.md) | Built-in usage validation |
| [Troubleshooting](docs/troubleshooting.md) | Common issues and fixes |

---

## Basic Usage

```html
<!-- Basic Icon -->
<i class="abs abs-heart"></i>

<!-- With size and color -->
<i class="abs abs-arrow-right abs-3x abs-blue-600"></i>

<!-- Animated -->
<i class="abs abs-spinner abs-spin abs-purple-500"></i>

<!-- Multiple modifiers -->
<i class="abs abs-cog abs-spin abs-4x abs-red-500 abs-hover-scale"></i>
```

---

## Browser Support

Chrome • Firefox • Safari • Edge • IE11+ (with polyfills) • Mobile browsers

---

## Author & License

**Developer:** RK Riad Khan  
**Contact:** [rkriad585@gmail.com](mailto:rkriad585@gmail.com)  
**License:** MIT — Free for personal and commercial use.

---

<div align="center">
Made with ❤️ by rkriad585 — Revolutionizing web icon solutions since 2025
</div>
