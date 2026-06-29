# AbscomFonts Framework

A comprehensive icon and styling framework with 1600+ icons, animations, color utilities, and validation system.

## Features ✨
- 1600+ icons (Brands, Solid, Regular)
- 30+ CSS animations
- Tailwind-inspired color palette (25 colors, 10 shades each)
- Auto-generated CSS classes
- Usage validation system
- Size utilities (1x-16x)
- Relative sizing classes
- Color utilities
- Transform utilities
- Z-index controls
- Icon Only support In `<i class={Icons_Class_Name}></i>` element

## Installation 📦
0. See all available classes [click 📖](https://github.com/rkstudio585/AbscomFonts/blob/main/css-classes.txt) 
1. Download `abscomfonts.js` from the project
2. Add to your HTML:
```html
<script src="abscomfonts.js"></script>
```

## Setup 🛠️
The framework auto-injects required styles. Just include the JS file - no additional CSS needed!

## Basic Usage 🔧
```html
<!-- Basic Icon -->
<i class="abs abs-heart"></i>

<!-- Icon with size and color -->
<i class="abs abs-arrow-right abs-3x abs-blue-600"></i>

<!-- Animated Icon -->
<i class="abs abs-spinner abs-spin abs-purple-500"></i>
```

## Icon Classes 🎨
**Format:** `abs abs-{icon-name}`

Examples:
- `abs abs-twitter`
- `abs abs-camera`
- `abs abs-cloud-download`

## Color Utilities 🌈
**Format:** `abs-{color}-{shade}`  
Available colors: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

Shades: 50-900 (in 100 increments) + 950

Example:
```html
<i class="abs abs-star abs-emerald-400"></i>
<div class="bg-slate-800">...</div>
```

## Animations 🌀
30+ animations available:

```html
<i class="abs abs-sync abs-spin"></i>
<i class="abs abs-bell abs-bounce"></i>
<i class="abs abs-alert abs-pulse"></i>
```

**Full Animation List:**
- spin, bounce, wobble, pulse
- rgb-change, shake, skew, flip
- fade, glow-gold, zoom, slide
- rotate3d, blink, swing, float
- jelly, vibrate, rainbow
- Multiple rotation variations

## Size Control 📏
**Fixed Sizes:**
```html
<i class="abs abs-1x">...</i> <!-- 1em -->
<i class="abs abs-5x">...</i> <!-- 5em -->
<!-- Up to abs-16x -->
```

**Relative Sizes:**
```html
<i class="abs abs-relative-sm"></i>
<!-- Options: 2xs, 3xs, xs, sm, lg, xl, 2xl, 3xl -->
```

## Advanced Features ⚡

**Transforms:**
```html
<i class="abs abs-arrow abs-transform-90"></i>
<i class="abs abs-refresh abs-transform-vertical"></i>
```

**Z-Index Control:**
```html
<i class="abs abs-warning abs-z-fast"></i>
<!-- Options: z-auto, z-1 to z-5, z-fast, z-last -->
```

**Hover Effects:**
```html
<i class="abs abs-download abs-hover-scale"></i>
```

## Validation System ✔️
The framework checks for:
- Icon classes on non-`<i>` elements
- Missing base `abs` class
- Orphan animation/color classes
- Warnings in browser console

## Customization 🎛️
**Custom Sizes:**
```css
.custom-size {
  font-size: 4.5em !important;
}
```

**Custom Colors:**
```css
.abs-custom-color {
  color: #customhex !important;
}
```

## Browser Support 🌐
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills)
- Mobile browsers

## Author & License 📄
**Developer:** RK Riad Khan  
**Contact:** [rkriad585@gmail.com](mailto:rkriad585@gmail.com)  
**License:** Free for personal and commercial use.

> Made with ❤️ by rkriad585 - Revolutionizing web icon solutions since 2025
