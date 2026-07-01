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

The complete color palette: 25 colors × 11 shades each.

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

### `generateGradientClasses()`

Type: `() => string`

Generates CSS for gradient text (`abs-gradient`, `abs-gradient-from-*`, `abs-gradient-to-*`) and background gradient (`bg-gradient`, `bg-gradient-from-*`, `bg-gradient-to-*`) utilities.

```typescript
import { generateGradientClasses } from 'abscomfonts';
```

### `generateTransformClasses()`

Type: `() => string`

Generates CSS for grow/shrink, translate, and skew transform utilities.

```typescript
import { generateTransformClasses } from 'abscomfonts';
```

### `fontIcon(name, ...modifiers)`

Type: `(name: string, ...modifiers: string[]) => string`

Generates a standard icon `<i>` element HTML string. Decorative by default (`aria-hidden="true"`).

```typescript
import { fontIcon } from 'abscomfonts';

fontIcon('heart')                       // '<i class="abs abs-heart" aria-hidden="true"></i>'
fontIcon('star', 'abs-spin', 'abs-3x')  // '<i class="abs abs-star abs-spin abs-3x" aria-hidden="true"></i>'
```

### `absIcon(name, options?)`

Type: `(name: string, options?: AbsIconOptions) => string`

Enhanced icon factory with options support.

```typescript
import { absIcon } from 'abscomfonts';

absIcon('heart', { className: 'abs-spin abs-3x' })
// '<i class="abs abs-heart abs-spin abs-3x" aria-hidden="true"></i>'

absIcon('user', { ariaLabel: 'User profile', style: 'color: blue;' })
// '<i class="abs abs-user" role="img" aria-label="User profile" style="color: blue;"></i>'
```

```typescript
interface AbsIconOptions {
  className?: string  // Additional classes
  ariaLabel?: string  // Accessible label (sets role="img" when provided)
  style?: string      // Inline styles
}
```

### `absLayer(...children)`

Type: `(...children: string[]) => string`

Creates a layers container with child elements.

```typescript
import { absLayer, absCounter } from 'abscomfonts';

absLayer(fontIcon('envelope'), absCounter(3))
// '<span class="abs-layers"><i class="abs abs-envelope" aria-hidden="true"></i><span class="abs-layers-counter">3</span></span>'
```

### `absCounter(count)`

Type: `(count: string | number) => string`

Creates a counter/badge overlay element for use inside layers.

```typescript
import { absCounter } from 'abscomfonts';
absCounter(42)  // '<span class="abs-layers-counter">42</span>'
```

### `absText(content)`

Type: `(content: string) => string`

Creates a text overlay element for use inside layers.

```typescript
import { absText } from 'abscomfonts';
absText('ABS')  // '<span class="abs-layers-text">ABS</span>'
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

## Animation Control

Programmatic animation helpers for DOM elements.

### `startAbsAnimation(element)`

Starts a paused or stopped animation.

```typescript
import { startAbsAnimation } from 'abscomfonts';
const el = document.querySelector('.abs-spinner');
startAbsAnimation(el);
```

### `stopAbsAnimation(element)`

Stops a running animation completely.

```typescript
import { stopAbsAnimation } from 'abscomfonts';
stopAbsAnimation(el);
```

### `pauseAbsAnimation(element)`

Pauses a running animation (can be resumed).

```typescript
import { pauseAbsAnimation } from 'abscomfonts';
pauseAbsAnimation(el);
```

### `resumeAbsAnimation(element)`

Resumes a paused animation.

```typescript
import { resumeAbsAnimation } from 'abscomfonts';
resumeAbsAnimation(el);
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
