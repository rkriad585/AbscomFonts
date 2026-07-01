# Advanced Features

## Transform Utilities

### Basic Transforms

```html
<!-- Rotate -->
<i class="abs abs-arrow abs-transform-90"></i>
<i class="abs abs-arrow abs-transform-180"></i>
<i class="abs abs-arrow abs-transform-270"></i>

<!-- Flip -->
<i class="abs abs-arrow abs-transform-horizontal"></i>
<i class="abs abs-arrow abs-transform-vertical"></i>
<i class="abs abs-arrow abs-transform-both"></i>

<!-- Transform by (custom) -->
<i class="abs abs-arrow abs-transform-by"></i>
```

### Use Cases for Transforms

| Before | After | Class |
|--------|-------|-------|
| `abs-arrow-right` | Pointing down | `abs-transform-90` |
| `abs-arrow-right` | Pointing left | `abs-transform-180` |
| `abs-arrow-right` | Pointing up | `abs-transform-270` |
| `abs-chevron-down` | Chevron up | `abs-transform-180` |
| `abs-play` | Rewind indicator | `abs-transform-horizontal` |

### Rotate by custom angle

```html
<i class="abs abs-arrow abs-rotate-by" style="--abs-rotate-angle: 45deg;"></i>
<i class="abs abs-sun abs-rotate-by" style="--abs-rotate-angle: 25deg;"></i>
```

### Grow & Shrink

```html
<i class="abs abs-star abs-grow-2"></i>  <!-- scale(2) -->
<i class="abs abs-star abs-grow-4"></i>  <!-- scale(4) -->
<i class="abs abs-star abs-shrink-2"></i> <!-- scale(0.5) -->
<i class="abs abs-star abs-shrink-4"></i> <!-- scale(0.25) -->
```

### Translate (Move)

```html
<i class="abs abs-star abs-up-20"></i>    <!-- moved 20px up -->
<i class="abs abs-star abs-down-12"></i>  <!-- moved 12px down -->
<i class="abs abs-star abs-left-8"></i>   <!-- moved 8px left -->
<i class="abs abs-star abs-right-16"></i> <!-- moved 16px right -->
```

Supported values: 4, 8, 12, 16, 20, 24, 32, 48, 64

### Skew

```html
<i class="abs abs-star abs-skew-x-15"></i> <!-- skewX(15deg) -->
<i class="abs abs-star abs-skew-y-10"></i> <!-- skewY(10deg) -->
```

Supported values: 5, 10, 15, 20, 25, 30

## Icon Stacking

Stack two icons on top of each other:

```html
<span class="abs-stack">
  <i class="abs abs-circle abs-stack-2x"></i>
  <i class="abs abs-flag abs-stack-1x"></i>
</span>

<span class="abs-stack">
  <i class="abs abs-square abs-stack-2x"></i>
  <i class="abs abs-check abs-stack-1x"></i>
</span>
```

## Icon Layers

Create complex multi-icon compositions:

```html
<span class="abs-layers">
  <i class="abs abs-circle"></i>
  <i class="abs abs-flag"></i>
</span>
```

### Layers Text

Overlay text on a layer:

```html
<span class="abs-layers">
  <i class="abs abs-circle"></i>
  <span class="abs-layers-text">ABS</span>
</span>
```

### Layers Counter / Badge

Display a notification counter badge:

```html
<span class="abs-layers">
  <i class="abs abs-circle"></i>
  <span class="abs-layers-counter">42</span>
</span>

<span class="abs-layers">
  <i class="abs abs-envelope"></i>
  <span class="abs-layers-counter abs-layers-top-right">3</span>
</span>
```

Position modifiers: `abs-layers-top-left`, `abs-layers-top-right`, `abs-layers-bottom-left`, `abs-layers-bottom-right`.

## Fixed Width

Align icons in navigation and lists:

```html
<ul>
  <li><i class="abs abs-check abs-fw abs-green-500"></i> Completed</li>
  <li><i class="abs abs-cog abs-fw"></i> Settings</li>
  <li><i class="abs abs-user abs-fw"></i> Profile</li>
</ul>
```

## Float / Pull Utilities

```html
<i class="abs abs-info abs-pull-left"></i>
<i class="abs abs-info abs-float-left"></i>
<i class="abs abs-quote-right abs-pull-right"></i>
<i class="abs abs-quote-right abs-float-right"></i>
<p>Text wraps around the icon...</p>
```

## Z-Index Controls

Control stacking order:

| Class | Value |
|-------|-------|
| `abs-z-auto` | `z-index: auto` |
| `abs-z-1` | `z-index: 1` |
| `abs-z-2` | `z-index: 2` |
| `abs-z-3` | `z-index: 3` |
| `abs-z-4` | `z-index: 4` |
| `abs-z-5` | `z-index: 5` |
| `abs-z-fast` | High z-index (for quick access) |
| `abs-z-last` | Highest z-index |

```html
<i class="abs abs-warning abs-z-fast"></i>
```

## Hover Effects

| Class | Effect |
|-------|--------|
| `abs-hover-scale` | Scales up on hover |
| `abs-hover-shadow` | Adds shadow on hover |

```html
<i class="abs abs-download abs-hover-scale"></i>
<i class="abs abs-star abs-hover-shadow"></i>
```

## Display Utilities

```html
<!-- Flex container -->
<div class="abs-flex">
  <i class="abs abs-heart"></i>
  <i class="abs abs-star"></i>
</div>

<!-- Block -->
<i class="abs abs-heart abs-block"></i>
```

## Alignment

```html
<i class="abs abs-heart abs-center"></i>
<i class="abs abs-heart abs-center-icon"></i>
```

## Border

```html
<i class="abs abs-heart abs-border"></i>
```

## Color Overrides

Force a specific color regardless of theme:

| Class | Color |
|-------|-------|
| `abs-white` | `color: white` |
| `abs-black` | `color: black` |
| `abs-inherit` | `color: inherit` |
| `abs-inverse` | `color: white` (for dark backgrounds) |

## Validation Classes

Built-in debugging classes:

| Class | Content |
|-------|---------|
| `abs-version` | Shows framework version |
| `abs-author` | Shows author name |
| `abs-author-info` | Shows detailed author info |

```html
<span class="abs-version"></span>
<!-- Output: version: 1.0.0-abs -->
```

## Tabs vs Spaces

Aesthetic tab-space display:

| Class | Shows |
|-------|-------|
| `abs-border-none` | Removes border |
| `abs-border-all` | Adds border all around |
