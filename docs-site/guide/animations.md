---
title: Animations Reference
---

# Animations Reference

<script setup>
import { ref } from 'vue'

const icon = ref('star')
</script>

<div class="anim-intro">
  <p>Add motion to any icon by appending an animation class. All animations play on loop and can be combined with size/color modifiers.</p>
  <div class="demo-icon">
    <input v-model="icon" placeholder="Icon name" class="icon-input" />
    <div class="demo-grid">
      <div class="demo-item" v-for="cls in animations" :key="cls">
        <i :class="['abs', `abs-${icon}`, cls, 'abs-3x']"></i>
        <code>{{ cls }}</code>
      </div>
    </div>
  </div>
</div>

## Animation Classes

| Class | Type | Description | Default Timing |
|---|---|---|---|
| `abs-spin` | Rotation | Continuous 360 rotation | 2s linear |
| `abs-spin-reverse` | Rotation | Continuous reverse 360 rotation | 2s linear |
| `abs-pulse` | Scale | Grow and shrink pulse | 1.5s ease-in-out |
| `abs-bounce` | Motion | Vertical bounce | 1s ease-in-out |
| `abs-shake` | Motion | Multi-angle shake with rotation | 0.5s ease-in-out |
| `abs-wobble` | Rotation | Gentle wobble | 1s ease-in-out |
| `abs-swing` | Rotation | Pendulum swing (top center pivot) | 1s ease-in-out |
| `abs-float` | Motion | Gentle float up/down | 2s ease-in-out |
| `abs-jelly` | Scale | Squish and stretch | 1s ease-in-out |
| `abs-slide` | Motion | Horizontal slide | 2s ease-in-out |
| `abs-slide-up-down` | Motion | Vertical slide | 2s ease-in-out |
| `abs-fade` | Opacity+Scale | Fade with slight scale change | 2s ease-in-out |
| `abs-blink` | Opacity | Rapid blink | 1s ease-in-out |
| `abs-flip` | 3D | Y-axis flip | 2s ease-in-out |
| `abs-flip-horizontal` | 3D | Horizontal flip | 2s ease-in-out |
| `abs-flip-vertical` | 3D | Vertical flip | 2s ease-in-out |
| `abs-zoom` | Scale | Zoom in and out | 2s ease-in-out |
| `abs-skew` | Distortion | Skew distortion | 2s ease-in-out |
| `abs-vibrate` | Motion | Rapid vibration | 0.1s ease-in-out |
| `abs-rotate3d` | 3D | 3D rotation | 3s linear |
| `abs-rgb-change` | Color | Cycling colors: red/green/blue | 3s linear |
| `abs-rainbow` | Color | Full spectrum rainbow | 5s linear |
| `abs-glow-gold` | Visual | Golden glow drop-shadow | 2s ease-in-out |

### New advanced animations

| Class | Type | Description | Default Timing |
|---|---|---|---|
| `abs-beat` | Scale | Heart-beat rhythm scale pulse | 0.8s ease-in-out |
| `abs-beat-fade` | Combined | Beat with fading opacity | 1.2s ease-in-out |
| `abs-flash` | Opacity | Quick on/off flash | 0.8s ease-in-out |
| `abs-tada` | Motion | Excitement pop-in with wobble | 1s ease-in-out |
| `abs-jello` | Distortion | Skew-based gelatin wobble | 1s ease-in-out |
| `abs-rubber-band` | Scale | Stretch and squash | 1s ease-in-out |
| `abs-buzz` | Motion | Rapid micro-vibration | 0.15s linear |
| `abs-wag` | Rotation | Tail-wag (bottom center pivot) | 0.5s ease-in-out |
| `abs-glow` | Visual | Multi-color glow cycling | 2s ease-in-out |
| `abs-breathe` | Opacity+Scale | Slow breathing pulse | 3s ease-in-out |
| `abs-spin-snap` | Rotation | Stepped rotation with pauses | 1.2s steps(4) |

### Rotate sub-classes

| Class | Effect |
|---|---|
| `abs-rotate-45` | Rotate to 45 degrees and back |
| `abs-rotate-90` | Rotate to 90 degrees and back |
| `abs-rotate-180` | Rotate to 180 degrees and back |
| `abs-rotate-270` | Rotate to 270 degrees and back |
| `abs-rotate-360` | Full 360 rotation and back |
| `abs-rotate-x` | Rotate around X axis |
| `abs-rotate-y` | Rotate around Y axis |
| `abs-rotate-z` | Rotate around Z axis |
| `abs-rotate-xyz` | Rotate around all axes |
| `abs-rotate-x-90` | X-axis 90 degree |
| `abs-rotate-y-90` | Y-axis 90 degree |
| `abs-rotate-z-90` | Z-axis 90 degree |
| `abs-rotate-x-180` | X-axis 180 degree |
| `abs-rotate-y-180` | Y-axis 180 degree |
| `abs-rotate-z-180` | Z-axis 180 degree |
| `abs-rotate-x-270` | X-axis 270 degree |
| `abs-rotate-y-270` | Y-axis 270 degree |
| `abs-rotate-z-270` | Z-axis 270 degree |
| `abs-rotate-x-360` | X-axis full rotation |
| `abs-rotate-y-360` | Y-axis full rotation |
| `abs-rotate-z-360` | Z-axis full rotation |
| `abs-rotate-xyz-360` | All axes full rotation |
| `abs-rotate-xyz-5040` | All axes 14-turn rotation |

### Transform utility classes

| Class | Effect |
|---|---|
| `abs-transform-90` | Static 90 degree rotation |
| `abs-transform-180` | Static 180 degree rotation |
| `abs-transform-270` | Static 270 degree rotation |
| `abs-transform-horizontal` | Flip horizontally |
| `abs-transform-vertical` | Flip vertically |
| `abs-transform-both` | Flip both axes |
| `abs-rotate-by` | Rotate by custom angle (`--abs-rotate-angle`) |
| `abs-flip-both` | Scale(-1, -1) both axes |

## Animation Control System

All animations support CSS custom properties for unified control over duration, timing, delay, direction, and iteration count.

| Custom Property | Default | Description |
|---|---|---|
| `--abs-animation-duration` | Per-animation default | Override speed of ALL animations |
| `--abs-animation-timing` | Per-animation default | Timing function override |
| `--abs-animation-delay` | `0s` | Delay before animation starts |
| `--abs-animation-direction` | `normal` | `normal`, `reverse`, `alternate` |
| `--abs-animation-iteration-count` | `infinite` | Number of loops |
| `--abs-animation-fill-mode` | `none` | Fill mode for animation |

```html
<!-- Slow down all animations on this icon -->
<i class="abs abs-spinner abs-spin" style="--abs-animation-duration: 4s;"></i>

<!-- Fast bounce with delay -->
<i class="abs abs-bell abs-bounce" style="--abs-animation-duration: 0.3s; --abs-animation-delay: 1s;"></i>

<!-- Reverse direction -->
<i class="abs abs-arrow-right abs-slide" style="--abs-animation-direction: reverse;"></i>
```

## prefers-reduced-motion

All animations automatically respect the user's `prefers-reduced-motion` OS setting. When enabled, every animation class is immediately stopped:

```css
/* Built-in — no extra code needed */
@media (prefers-reduced-motion: reduce) {
  .abs-spin, .abs-bounce, /* all animations */ {
    animation: none !important;
  }
}
```

## Usage

```html
<i class="abs abs-heart abs-spin"></i>
<i class="abs abs-star abs-pulse abs-2x"></i>
<i class="abs abs-bell abs-swing abs-3x abs-red-500"></i>
<i class="abs abs-sun abs-float abs-4x"></i>
<i class="abs abs-music abs-rainbow"></i>

<!-- New animations -->
<i class="abs abs-heart abs-beat abs-2x"></i>
<i class="abs abs-bell abs-tada abs-3x"></i>
<i class="abs abs-star abs-breathe abs-4x"></i>
```

<script>
const animations = [
  'abs-spin', 'abs-spin-reverse', 'abs-pulse', 'abs-bounce',
  'abs-shake', 'abs-wobble', 'abs-swing', 'abs-float',
  'abs-jelly', 'abs-slide', 'abs-slide-up-down', 'abs-fade',
  'abs-blink', 'abs-flip', 'abs-flip-horizontal', 'abs-flip-vertical',
  'abs-zoom', 'abs-skew', 'abs-vibrate', 'abs-rotate3d',
  'abs-rgb-change', 'abs-rainbow', 'abs-glow-gold',
  'abs-beat', 'abs-beat-fade', 'abs-flash', 'abs-tada',
  'abs-jello', 'abs-rubber-band', 'abs-buzz', 'abs-wag',
  'abs-glow', 'abs-breathe', 'abs-spin-snap',
]
</script>

<style scoped>
.anim-intro p { color: var(--vp-c-text-2); margin-bottom: 1.5rem; }
.demo-icon { margin-bottom: 2rem; }
.icon-input { padding: .6rem .75rem; border-radius: 8px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); font-size: .9rem; outline: none; margin-bottom: 1rem; width: 200px; }
.demo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: .75rem; }
.demo-item { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 1rem .5rem; text-align: center; }
.demo-item code { display: block; margin-top: .4rem; font-size: .6rem; word-break: break-all; color: var(--vp-c-text-2); }
</style>
