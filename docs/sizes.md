# Size Utilities Reference

AbscomFonts provides fixed and relative sizing classes for icons.

## Fixed Sizes

Add a size class to change the icon's `font-size`. Each step increases by 1em.

| Class | Size |
|-------|------|
| `abs-1x` | 1em (default) |
| `abs-2x` | 2em |
| `abs-3x` | 3em |
| `abs-4x` | 4em |
| `abs-5x` | 5em |
| `abs-6x` | 6em |
| `abs-7x` | 7em |
| `abs-8x` | 8em |
| `abs-9x` | 9em |
| `abs-10x` | 10em |
| `abs-11x` | 11em |
| `abs-12x` | 12em |
| `abs-13x` | 13em |
| `abs-14x` | 14em |
| `abs-15x` | 15em |
| `abs-16x` | 16em |

```html
<i class="abs abs-heart abs-1x"></i>
<i class="abs abs-heart abs-3x"></i>
<i class="abs abs-heart abs-5x"></i>
<i class="abs abs-heart abs-10x"></i>
```

## Inline Size Classes

Quick inline sizing relative to parent font-size, without line-height adjustment.

| Class | Scale Factor |
|-------|-------------|
| `abs-2xs` | 0.625em |
| `abs-xs` | 0.75em |
| `abs-sm` | 0.875em |
| `abs-lg` | 1.25em |
| `abs-xl` | 1.5em |
| `abs-2xl` | 2em |

```html
<div style="font-size: 24px;">
  <i class="abs abs-star abs-2xs"></i> 2XS
  <i class="abs abs-star abs-xs"></i> XS
  <i class="abs abs-star abs-sm"></i> SM
  <i class="abs abs-star abs-lg"></i> LG
  <i class="abs abs-star abs-xl"></i> XL
  <i class="abs abs-star abs-2xl"></i> 2XL
</div>
```

## Relative Sizes (with alignment)

Relative sizes scale based on the parent element's font-size, with adjusted line-height and vertical-align for inline text use.

| Class | Description |
|-------|-------------|
| `abs-relative-3xs` | Smallest |
| `abs-relative-2xs` | Very small |
| `abs-relative-xs` | Extra small |
| `abs-relative-sm` | Small |
| `abs-relative-lg` | Large |
| `abs-relative-xl` | Extra large |
| `abs-relative-2xl` | 2x large |
| `abs-relative-3xl` | 3x large |

```html
<div style="font-size: 24px;">
  <i class="abs abs-star abs-relative-sm"></i> Small
  <i class="abs abs-star abs-relative-lg"></i> Large
  <i class="abs abs-star abs-relative-xl"></i> XL
</div>
```

## Fixed Width

The `abs-fw` class gives an icon a fixed width of 1.25em, perfect for aligning icons in navigation lists.

```html
<ul>
  <li><i class="abs abs-check abs-fw abs-green-500"></i> Completed</li>
  <li><i class="abs abs-cog abs-fw abs-blue-500"></i> Settings</li>
  <li><i class="abs abs-user abs-fw"></i> Profile</li>
</ul>
```

## Combining with Other Utilities

Sizes work with colors, animations, and transforms:

```html
<i class="abs abs-cog abs-spin abs-4x abs-blue-600"></i>
<i class="abs abs-bell abs-bounce abs-3x abs-purple-500"></i>
<i class="abs abs-check abs-2x abs-green-500"></i>
```

## Custom Size via CSS

For sizes beyond 16x or specific values, use inline CSS or a stylesheet:

```html
<i class="abs abs-star" style="font-size: 50px;"></i>
```

Or define a custom class:

```css
.abs-custom-size {
  font-size: 4.5em !important;
}
```

## Best Practices

- Use `abs-1x` to `abs-5x` for most UI needs (inline icons, buttons, nav items)
- Use `abs-6x` to `abs-10x` for hero sections, feature displays
- Use `abs-11x` to `abs-16x` for full-page decorative elements
- Use `abs-fw` for navigation lists and menus
- Use inline size classes (`abs-xs` to `abs-2xl`) for simple relative scaling
- Use relative sizes when icons need precise alignment with surrounding text
