# Troubleshooting

Common issues and solutions when using AbscomFonts.

## Icons Not Showing

### 1. Font files not loading

The `@font-face` declarations reference fonts at `/fonts/abs-{family}-{weight}.woff2`. If the fonts are 404ing:

**Check:** Open browser DevTools → Network tab and look for failed font requests.

**Fix:** Make sure the `fonts/` directory is served at the root of your site (or copy fonts to the correct location).

If hosting fonts at a different path, update the font URLs in the CSS source.

### 2. Missing `abs` class

```html
<!-- WRONG -->
<i class="abs-heart"></i>

<!-- CORRECT -->
<i class="abs abs-heart"></i>
```

Every icon needs both `abs` and `abs-{name}` classes.

### 3. Icon name is wrong

Check the exact class name in `src/icons.ts`.

```html
<!-- if unsure, check the console for warnings -->
```

### 4. Script not loading

Check the browser console for network errors. Make sure the script tag is correct:

```html
<script src="path/to/abscomfonts.iife.js"></script>
```

## Animation Not Working

Make sure you're using both the icon class and the animation class:

```html
<!-- WRONG -->
<i class="abs-spin"></i>

<!-- CORRECT -->
<i class="abs abs-spinner abs-spin"></i>
```

Some icons work better with certain animations. If an animation seems subtle, try a different icon.

## Colors Not Applying

Color utilities use the format `abs-{color}-{shade}`:

```html
<i class="abs abs-heart abs-red-500"></i>
```

Common mistakes:

- Typo in color name: `abs-red-500` ✓, `abs-reid-500` ✗
- Typo in shade number: `abs-red-500` ✓, `abs-red-50` ✓, `abs-red-1000` ✗
- Using `bg-` prefix for icon color: use `bg-red-500` for backgrounds, `abs-red-500` for icon color

## Console Validation Warnings

See [Validation System](validation.md) for details on warnings.

## Build Errors (npm package)

If you're importing the npm package and getting build errors:

**Ensure your bundler supports the `exports` field** in package.json (webpack 5+, Vite, esbuild, Rollup with node-resolve).

**TypeScript users:** Make sure `skipLibCheck` is not set to `false` if you encounter type errors from the library.

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 80+
- IE11 (with polyfills for `MutationObserver` and `Array.from`)

## Still Having Issues?

Open an issue at [github.com/rkriad585/AbscomFonts/issues](https://github.com/rkriad585/AbscomFonts/issues) with:
- A minimal HTML file that reproduces the problem
- Browser console output
- Steps to reproduce
