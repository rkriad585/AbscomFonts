---
title: Framework Components
---

# Framework Components

AbscomFonts provides framework-specific components for React, Vue, and Svelte. These are lightweight wrappers around the SVG path data, enabling tree-shakeable icon usage with framework-native APIs.

## React

```
npm install abscomfonts
```

```tsx
import { Heart } from 'abscomfonts/svg'
import { AbsIcon } from 'abscomfonts/react'

function App() {
  return (
    <div>
      <AbsIcon path={Heart} size={32} color="#e74c3c" />
      <AbsIcon path={Heart} size={24} spin />
      <AbsIcon path={Heart} size={48} pulse bounce />
    </div>
  )
}
```

### Props

| Prop        | Type      | Default          | Description                 |
|-------------|-----------|------------------|-----------------------------|
| `path`      | `string`  | (required)       | SVG path data from `abscomfonts/svg` |
| `size`      | `number`  | `24`             | Icon width/height in pixels |
| `color`     | `string`  | `'currentColor'` | SVG fill color              |
| `className` | `string`  | `''`             | Additional CSS class        |
| `spin`      | `boolean` | `false`          | Spin animation modifier     |
| `pulse`     | `boolean` | `false`          | Pulse animation modifier    |
| `bounce`    | `boolean` | `false`          | Bounce animation modifier   |
| `shake`     | `boolean` | `false`          | Shake animation modifier    |
| `flip`      | `boolean` | `false`          | Flip animation modifier     |
| `wobble`    | `boolean` | `false`          | Wobble animation modifier   |

### Tree-shaking

Only the path data you import is included in your bundle:

```tsx
import { Heart, Star } from 'abscomfonts/svg'
import { AbsIcon } from 'abscomfonts/react'

// Only Heart and Star SVG data are bundled
<AbsIcon path={Heart} />
<AbsIcon path={Star} color="gold" />
```

## Vue

```
npm install abscomfonts
```

```vue
<script setup>
import { Heart } from 'abscomfonts/svg'
import { AbsIcon } from 'abscomfonts/vue'
</script>

<template>
  <div>
    <AbsIcon :path="Heart" :size="32" color="#e74c3c" />
    <AbsIcon :path="Heart" :size="24" spin />
    <AbsIcon :path="Heart" :size="48" pulse bounce />
  </div>
</template>
```

### Props

Same props as React (camelCase in JavaScript, kebab-case in templates):

```vue
<AbsIcon :path="Heart" :size="32" spin pulse />
```

## Svelte

```
npm install abscomfonts
```

```svelte
<script>
  import { Heart } from 'abscomfonts/svg'
  import { AbsIcon } from 'abscomfonts/svelte'
</script>

<div>
  <AbsIcon path={Heart} size={32} color="#e74c3c" />
  <AbsIcon path={Heart} size={24} spin />
  <AbsIcon path={Heart} size={48} pulse bounce />
</div>
```

### Props

Same props as React (using Svelte 5 `$props()` runes syntax).

## Modifier Classes

The `spin`, `pulse`, `bounce`, `shake`, `flip`, and `wobble` props apply CSS modifier classes (`abs-spin`, `abs-pulse`, `abs-bounce`, `abs-shake`, `abs-flip`, `abs-wobble`). These require the AbscomFonts CSS to be loaded. See [Animations Guide](../guide/animations) for setup.

## SSR

All three framework components render inline SVGs and work with SSR (Next.js, Nuxt, SvelteKit). No special configuration needed.
