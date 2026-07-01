---
title: Getting Started
---

# Getting Started with AbscomFonts

AbscomFonts is a zero-config icon font framework. Add 1600+ icons, animations, and color utilities to your project without any build tools.

## Quick Start (Browser)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Icons</title>
  <script src="https://unpkg.com/abscomfonts/dist/abscomfonts.iife.js"></script>
</head>
<body>
  <i class="abs abs-heart"></i>
  <i class="abs abs-star abs-3x abs-yellow-400"></i>
  <i class="abs abs-spinner abs-spin abs-blue-600"></i>
</body>
</html>
```

That's it. The script auto-injects all CSS and fonts into the page.

## Installation Options

### 1. Download and host yourself

Download `abscomfonts.iife.js` from the `dist/` folder or the [GitHub releases page](https://github.com/rkriad585/AbscomFonts/releases).

```
your-project/
├── index.html
├── fonts/          ← copy from AbscomFonts/fonts/
├── abscomfonts.iife.js  ← copy from AbscomFonts/dist/
```

```html
<script src="abscomfonts.iife.js"></script>
```

### 2. npm (for Node.js / bundler projects)

```bash
npm install abscomfonts
```

#### CommonJS
```javascript
const abscomfonts = require('abscomfonts');
console.log(Object.keys(abscomfonts.abscomIcon).length); // 2492
```

#### ESM / TypeScript
```typescript
import { abscomIcon, colorPalette, generateColorClasses } from 'abscomfonts';
```

### 3. CDN

```html
<!-- unpkg -->
<script src="https://unpkg.com/abscomfonts/dist/abscomfonts.iife.js"></script>

<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/abscomfonts/dist/abscomfonts.iife.js"></script>
```

## Your First Icon

Every icon follows this pattern:

```html
<i class="abs abs-{icon-name}"></i>
```

- `<i>` — the icon element (required)
- `abs` — base class that sets up the font family
- `abs-{icon-name}` — selects which icon to show

Try replacing `heart` with any of these: `star`, `camera`, `bell`, `home`, `user`, `settings` (gear), `twitter`, `github`.

## Adding Modifiers

Add size, color, and animation by adding more classes:

```html
<i class="abs abs-{icon} abs-3x abs-red-500 abs-spin"></i>
```

Modifiers are optional and can be combined freely.

## Need Help?

- See all available icon classes in `src/icons.ts`
- Full icon reference: [Icons Guide](./icons)
- Animation reference: [Animations Guide](./animations)
- Color reference: [Colors Guide](./colors)
