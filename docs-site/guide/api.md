---
title: API Reference
---

# API Reference

For developers using AbscomFonts programmatically (ESM, CJS, or TypeScript).

## Installation

```bash
npm install abscomfonts
```

## Exports

### `abscomIcon`

Type: `Record<string, string>`

Maps icon names to their Unicode codepoint (hex string).

```typescript
import { abscomIcon } from 'abscomfonts';

abscomIcon.heart      // "f004"
abscomIcon['twitter'] // "f099"
abscomIcon.star       // "f005"
Object.keys(abscomIcon).length // 2492
```

### `colorPalette`

Type: `Record<string, Record<string, string>>`

The complete color palette: 25 colors x 11 shades each.

```typescript
import { colorPalette } from 'abscomfonts';

colorPalette.red[500]     // "#ef4444"
colorPalette.blue[600]    // "#2563eb"
colorPalette.emerald[400] // "#34d399"
Object.keys(colorPalette) // ["slate", "gray", "zinc", ...]
```

### `mainClasses`

Type: `string`

The core CSS string containing all framework styles: font-face declarations, base `.abs` class, animations, transforms, sizes, and utility classes. This is a static template literal.

```typescript
import { mainClasses } from 'abscomfonts';
console.log(mainClasses.length); // ~17k characters
```

### `generateColorClasses()`

Type: `() => string`

Generates CSS for all color utility classes (`abs-{color}-{shade}` and `bg-{color}-{shade}`) based on the current `colorPalette`. Returns a CSS string.

```typescript
import { generateColorClasses } from 'abscomfonts';

const colorCSS = generateColorClasses();
// ".bg-red-50 { background-color: #fef2f2; }\n.abs-red-50 { color: #fef2f2; }\n..."
```

### `abs_info()`

Type: `() => void`

Prints framework information to the browser console.

```typescript
import { abs_info } from 'abscomfonts';
abs_info();
// framowark:	abscomfonts
// version:	1.0.0-abs
// author:	RK Riad Khan
// ...
```

## Auto-initialization

When AbscomFonts is loaded in a browser environment (via IIFE script tag), it automatically:

1. Generates the complete CSS (`mainClasses` + `generateColorClasses()` + per-icon styles)
2. Injects it into a `<style>` element in `<head>`
3. Sets up a validation system that checks for:
   - Icon classes on non-`<i>` elements
   - Missing `abs` base class
   - Orphan animation/color classes
4. Observes dynamically added elements via `MutationObserver`

No manual initialization is needed for browser usage.

## Programmatic Use (Node.js)

In Node.js, the DOM-based auto-initialization is skipped (guarded by `typeof document !== 'undefined'`). You can still use the data and utility functions:

```typescript
import { abscomIcon, colorPalette, generateColorClasses, mainClasses } from 'abscomfonts';

// Build CSS server-side
const fullCSS = mainClasses + generateColorClasses();

// Generate an HTML page with inline styles
const html = `
  <style>${fullCSS}</style>
  <i class="abs abs-heart abs-3x abs-red-500"></i>
`;
```

## TypeScript Support

Type definitions are included. All public APIs have proper TypeScript types in `dist/index.d.ts`.
