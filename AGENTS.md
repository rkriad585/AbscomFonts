# AbscomFonts

Single-file icon font framework (1600+ icons, animations, color utilities). Zero build step.

## Files

| File | Role |
|------|------|
| `abscomfonts.js` | The entire framework — JS that auto-injects CSS/fonts into the page |
| `fonts/*.woff2` | Font files (brands, regular, solid, v4compat). Referenced by the JS |
| `css-classes.txt` | Reference list of every available CSS class |

## Adding / editing icons

- Icon mappings are the `abscomIcon` object in `abscomfonts.js` — key is icon name, value is the unicode codepoint (hex).
- Aliases point to the same codepoint (e.g. `"twitter": "f099"`).
- Font binaries live in `fonts/`. If an icon is added to `abscomIcon`, a corresponding glyph must exist in the font files.

## How it's consumed

No build, no package manager. Users include it as:

```html
<script src="abscomfonts.js"></script>
```

Icons use the class pattern `abs abs-{name}` with optional modifiers like `abs-3x`, `abs-blue-600`, `abs-spin`.

## CSS class reference

`css-classes.txt` is a flat list — the canonical source for "does this class exist?" checks.

## No CI, tests, linter, or typechecker

This project has none. Do not look for them.
