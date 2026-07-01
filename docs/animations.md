# Animations Reference

AbscomFonts includes 45+ CSS animations that work with any icon.

## Basic Usage

Add an animation class to any icon:

```html
<i class="abs abs-spinner abs-spin"></i>
<i class="abs abs-bell abs-bounce"></i>
<i class="abs abs-heart abs-pulse"></i>
```

Animations can be combined with size and color classes:

```html
<i class="abs abs-sync abs-spin abs-3x abs-blue-500"></i>
```

## Animation Classes

### Spin / Reverse Spin

Continuous rotation. Great for loading states.

```html
<i class="abs abs-spinner abs-spin"></i>
<i class="abs abs-spinner abs-spin-reverse"></i>
```

### Pulse

Quick scale pulse.

```html
<i class="abs abs-heart abs-pulse"></i>
<i class="abs abs-alert abs-pulse"></i>
```

### Bounce

Vertical bouncing motion. Great for notification bells.

```html
<i class="abs abs-bell abs-bounce"></i>
<i class="abs abs-arrow-down abs-bounce"></i>
```

### Shake (enhanced)

Multi-angle shake with rotation.

```html
<i class="abs abs-alert abs-shake"></i>
<i class="abs abs-bell abs-shake"></i>
```

### Wobble

Side-to-side wobble.

```html
<i class="abs abs-cog abs-wobble"></i>
```

### Swing

Pendulum swing (pivots from top center).

```html
<i class="abs abs-bell abs-swing"></i>
```

### Float

Gentle floating up/down motion.

```html
<i class="abs abs-heart abs-float"></i>
```

### Jelly

Jelly-like squish and stretch.

```html
<i class="abs abs-heart abs-jelly"></i>
```

### Slide / Slide Up-Down

Horizontal and vertical sliding.

```html
<i class="abs abs-arrow-right abs-slide"></i>
<i class="abs abs-arrow-down abs-slide-up-down"></i>
```

### Fade

Fade in and out with slight scale change.

```html
<i class="abs abs-heart abs-fade"></i>
```

### Blink

On/off blinking.

```html
<i class="abs abs-lightbulb abs-blink"></i>
```

### Flip / Flip Horizontal / Flip Vertical

3D flip animations.

```html
<i class="abs abs-camera abs-flip"></i>
<i class="abs abs-camera abs-flip-horizontal"></i>
<i class="abs abs-camera abs-flip-vertical"></i>
```

### Zoom

Scales up and down.

```html
<i class="abs abs-search abs-zoom"></i>
```

### Skew

Skews the icon back and forth.

```html
<i class="abs abs-gear abs-skew"></i>
```

### Vibrate

Rapid vibration.

```html
<i class="abs abs-phone abs-vibrate"></i>
```

### Rotate 3D

3D rotation on multiple axes.

```html
<i class="abs abs-cube abs-rotate3d"></i>
```

### RGB Change

Cycles through rainbow colors.

```html
<i class="abs abs-star abs-rgb-change"></i>
```

### Rainbow

Cycles through colors with a rainbow effect.

```html
<i class="abs abs-star abs-rainbow"></i>
```

### Glow Gold

Golden glow drop-shadow effect.

```html
<i class="abs abs-star abs-glow-gold"></i>
```

## New Advanced Animations

### Beat

Heart-beat rhythm scale pulse.

```html
<i class="abs abs-heart abs-beat"></i>
```

### Beat-Fade

Combined beat with fading opacity.

```html
<i class="abs abs-heart abs-beat-fade"></i>
```

### Flash

Quick on/off flash.

```html
<i class="abs abs-bell abs-flash"></i>
```

### Tada

Excitement pop-in with wobble.

```html
<i class="abs abs-star abs-tada"></i>
```

### Jello

Skew-based gelatin wobble.

```html
<i class="abs abs-heart abs-jello"></i>
```

### Rubber Band

Stretch and squash scale effect.

```html
<i class="abs abs-star abs-rubber-band"></i>
```

### Buzz

Rapid micro-vibration.

```html
<i class="abs abs-phone abs-buzz"></i>
```

### Wag

Tail-wag (pivots from bottom center).

```html
<i class="abs abs-bell abs-wag"></i>
```

### Glow

Multi-color glow cycling effect.

```html
<i class="abs abs-star abs-glow"></i>
```

### Breathe

Slow breathing opacity pulse with slight scale.

```html
<i class="abs abs-star abs-breathe"></i>
```

### Spin Snap

Stepped rotation with pauses at each 90-degree interval.

```html
<i class="abs abs-cog abs-spin-snap"></i>
```

## Animation Control System

All animations support CSS custom properties for unified control:

| Custom Property | Default | Description |
|---|---|---|
| `--abs-animation-duration` | Per-animation | Override speed of ALL animations |
| `--abs-animation-timing` | Per-animation | Timing function override |
| `--abs-animation-delay` | `0s` | Delay before animation starts |
| `--abs-animation-direction` | `normal` | `normal`, `reverse`, `alternate` |
| `--abs-animation-iteration-count` | `infinite` | Number of loops |

```html
<!-- Slow down -->
<i class="abs abs-spinner abs-spin" style="--abs-animation-duration: 4s;"></i>

<!-- Fast bounce with delay -->
<i class="abs abs-bell abs-bounce" style="--abs-animation-duration: 0.3s; --abs-animation-delay: 1s;"></i>

<!-- Reverse direction -->
<i class="abs abs-arrow-right abs-slide" style="--abs-animation-direction: reverse;"></i>
```

## prefers-reduced-motion

All animations automatically respect the user's `prefers-reduced-motion` OS setting. No extra code needed.

## Rotation Classes

Static rotation (not animated):

| Class | Rotation |
|-------|----------|
| `abs-rotate-45` | 45 degrees |
| `abs-rotate-90` | 90 degrees |
| `abs-rotate-180` | 180 degrees |
| `abs-rotate-270` | 270 degrees |
| `abs-rotate-360` | 360 degrees |

Axis-specific rotation:

| Class | Effect |
|-------|--------|
| `abs-rotate-x` | Rotate on X axis |
| `abs-rotate-y` | Rotate on Y axis |
| `abs-rotate-z` | Rotate on Z axis |
| `abs-rotate-xyz` | Rotate on all axes |

## Tips

- Not all animations work well with every icon. Experiment to find what looks best.
- Animations add CPU load. Avoid animating many icons on the same page.
- Combine `abs-spin` with `abs-spinner` for the classic loading indicator.
