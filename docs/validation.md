# Validation System

AbscomFonts includes a built-in validation system that helps you use icons correctly.

## How It Works

When the page loads, the framework scans all elements with icon-related classes and checks for common mistakes. Warnings and errors appear in the browser console.

## Checks Performed

### 1. Missing `abs` Base Class

```html
<!-- WRONG: missing "abs" base class -->
<i class="abs-heart"></i>
```

Console warning:
```
ABSCOM: Please [added] missing abs class to element: <i class="abs-heart">
```

**Fix:** Add the `abs` class:
```html
<i class="abs abs-heart"></i>
```

### 2. Icon Classes on Non-`<i>` Elements

```html
<!-- WRONG: icon classes on a div -->
<div class="abs abs-heart"></div>
```

Console error:
```
ABSCOM: Icon classes used on non icon as [ i class=abs abs-[icon-name] ] element: <div class="abs abs-heart">
```

**Fix:** Use an `<i>` element for icons:
```html
<i class="abs abs-heart"></i>
```

### 3. Orphan Classes Automatically Removed

If icon classes are detected on a non-`<i>` element, the framework automatically **removes** them to prevent rendering issues.

Console error:
```
ABSCOM: Blocked icon classes from <div class="abs abs-heart">, Use .abs for unblock.
```

### 4. `abs` Class Without Icon Class

```html
<!-- USAGE WARNING: abs class but no icon -->
<i class="abs"></i>
```

Console warning:
```
ABSCOM: abs class used without abs-[icon-name] classes on: <i class="abs">
```

## Dynamic Content

The validation system uses `MutationObserver` to watch for dynamically added elements (e.g., content loaded via JavaScript, SPAs, AJAX). Any new elements with icon classes are automatically validated.

## Disabling Validation

There is no built-in way to disable validation. If the console noise is unwanted, you can:

1. Use the library in production where console output is less visible
2. Override `console.warn` and `console.error` on your page (not recommended)
3. Use the npm package without the auto-initialization (only the data APIs)

## Best Practices

- Always use `<i>` for icons
- Always include both `abs` and `abs-{name}` classes
- Don't mix icon classes with non-icon elements
- Check the browser console during development
