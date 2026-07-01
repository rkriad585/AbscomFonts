---
title: Colors Reference
---

# Colors Reference

AbscomFonts includes a Tailwind-inspired color palette with 25 colors and 9–11 shades each (50–950), plus gradient, inverse, and opacity utilities.

## Usage

Apply color classes directly to icons:

```html
<i class="abs abs-heart abs-red-500"></i>
<i class="abs abs-star abs-yellow-400"></i>
<i class="abs abs-arrow-right abs-blue-600"></i>
```

Colors also work as background utilities:

```html
<div class="bg-slate-800">
  <i class="abs abs-star abs-yellow-400"></i>
</div>
```

## Available Colors

| Color | Shades | Example |
|-------|--------|---------|
| `slate` | 50–950 | `abs-slate-500` |
| `gray` | 50–950 | `abs-gray-500` |
| `zinc` | 50–950 | `abs-zinc-500` |
| `neutral` | 50–950 | `abs-neutral-500` |
| `stone` | 50–950 | `abs-stone-500` |
| `red` | 50–950 | `abs-red-500` |
| `orange` | 50–950 | `abs-orange-500` |
| `amber` | 50–950 | `abs-amber-500` |
| `yellow` | 50–950 | `abs-yellow-500` |
| `lime` | 50–950 | `abs-lime-500` |
| `green` | 50–950 | `abs-green-500` |
| `emerald` | 50–950 | `abs-emerald-500` |
| `teal` | 50–950 | `abs-teal-500` |
| `cyan` | 50–950 | `abs-cyan-500` |
| `sky` | 50–950 | `abs-sky-500` |
| `blue` | 50–950 | `abs-blue-500` |
| `indigo` | 50–950 | `abs-indigo-500` |
| `violet` | 50–950 | `abs-violet-500` |
| `purple` | 50–950 | `abs-purple-500` |
| `fuchsia` | 50–950 | `abs-fuchsia-500` |
| `pink` | 50–950 | `abs-pink-500` |
| `rose` | 50–950 | `abs-rose-500` |

## Shade Guide

| Shade | Lightness |
|-------|-----------|
| `50` | Lightest |
| `100` | Very light |
| `200` | Light |
| `300` | Medium-light |
| `400` | Medium |
| `500` | Base |
| `600` | Medium-dark |
| `700` | Dark |
| `800` | Very dark |
| `900` | Extremely dark |
| `950` | Darkest |

## Gradient Text

Apply gradient text colors to icons using the `abs-gradient` class with `abs-gradient-from-` and `abs-gradient-to-` classes:

```html
<i class="abs abs-flag abs-gradient abs-gradient-from-blue-500 abs-gradient-to-purple-500"></i>
<i class="abs abs-star abs-gradient abs-gradient-from-yellow-300 abs-gradient-to-orange-600"></i>
<i class="abs abs-heart abs-gradient abs-gradient-from-pink-400 abs-gradient-to-rose-600"></i>
```

## Background Gradients

Use `bg-gradient` with `bg-gradient-from-` and `bg-gradient-to-` for background gradient fills:

```html
<div class="bg-gradient bg-gradient-from-cyan-500 bg-gradient-to-blue-700">
  <i class="abs abs-cloud abs-white abs-3x"></i>
  <span class="abs-white">Weather</span>
</div>
```

## Opacity

Control icon opacity with dedicated classes:

| Class | Opacity |
|-------|---------|
| `abs-opacity-25` | 25% |
| `abs-opacity-50` | 50% |
| `abs-opacity-75` | 75% |
| `abs-opacity-100` | 100% |

```html
<i class="abs abs-user abs-opacity-50"></i>
<i class="abs abs-lock abs-opacity-25"></i>
```

## Inverse

The `abs-inverse` class renders an icon in white, ideal for dark backgrounds:

```html
<div class="bg-gray-900 p-4">
  <i class="abs abs-star abs-inverse abs-2x"></i>
  <i class="abs abs-heart abs-inverse"></i>
</div>
```

## Examples

```html
<!-- Red heart -->
<i class="abs abs-heart abs-red-500"></i>

<!-- Green check -->
<i class="abs abs-check abs-green-600"></i>

<!-- Blue info -->
<i class="abs abs-info abs-blue-400"></i>

<!-- Purple star -->
<i class="abs abs-star abs-purple-500"></i>

<!-- Yellow warning with dark background -->
<div class="bg-gray-900">
  <i class="abs abs-warning abs-yellow-400"></i>
</div>

<!-- Pink animated icon -->
<i class="abs abs-heart abs-pink-400 abs-pulse"></i>

<!-- Gradient multi-color -->
<i class="abs abs-star abs-amber-400"></i>
<i class="abs abs-star abs-amber-300"></i>
<i class="abs abs-star abs-amber-200"></i>
```

## Background Colors

All color classes also work as background utilities with the `bg-` prefix:

```html
<div class="bg-blue-500">Blue background</div>
<div class="bg-red-100 text-red-800">Red tinted alert</div>
<div class="bg-green-600 text-white">Green button</div>
```

## Color + Size + Animation

Combine freely:

```html
<i class="abs abs-cog abs-spin abs-4x abs-purple-600"></i>
```
