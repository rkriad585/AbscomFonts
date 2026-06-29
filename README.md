<div align="center">

# AbscomFonts

**1600+ icons • 30+ animations • Color utilities • Zero build step**

[![npm version](https://img.shields.io/npm/v/abscomfonts)](https://www.npmjs.com/package/abscomfonts)
[![license](https://img.shields.io/npm/l/abscomfonts)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/abscomfonts)](https://www.npmjs.com/package/abscomfonts)

A comprehensive icon font framework with 1600+ icons, 30+ CSS animations, a Tailwind-inspired color palette, and a built-in validation system. Works in any web project — no build tools required.

</div>

---

## Overview

AbscomFonts is a single-script icon framework that auto-injects everything into your page. Include one `<script>` tag and start using icons immediately.

**Key features:**
- **2492 icons** — Brands, Solid, and Regular styles
- **30+ animations** — Spin, bounce, pulse, shake, and more
- **275 color classes** — 25 colors × 11 shades (Tailwind palette)
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
// ESM / TypeScript
import { abscomIcon, colorPalette, generateColorClasses } from 'abscomfonts';

// CommonJS
const abscomfonts = require('abscomfonts');
```

---

## Project Structure

```
AbscomFonts/
├── src/
│   ├── icons.ts          # 2492 icon codepoint mappings
│   ├── palette.ts        # 25-color palette (11 shades each)
│   ├── css.ts            # CSS templates + generateColorClasses()
│   ├── info.ts           # Console info utility
│   ├── index.ts          # Main entry (auto-inits in browser)
│   └── global.ts         # IIFE entry for browser <script>
├── dist/
│   ├── index.js          # ESM build
│   ├── index.cjs         # CommonJS build
│   ├── index.d.ts        # TypeScript declarations
│   ├── abscomfonts.iife.js   # Browser IIFE (~91 KB)
│   └── abscomfonts.d.ts      # IIFE type declarations
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
│   └── typescript-example.ts
├── css-classes.txt        # Complete class reference
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
