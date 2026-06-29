# Contributing to AbscomFonts

## Project setup

```bash
git clone <repo-url>
cd AbscomFonts
npm install
npm run build   # builds src/ -> dist/
```

## Project structure

```
src/             # TypeScript source files
  ├── icons.ts   # Icon name → codepoint mappings
  ├── palette.ts # 25-color palette (11 shades each)
  ├── css.ts     # CSS template generation
  ├── info.ts    # Console info utility
  ├── index.ts   # Main entry (ESM)
  └── global.ts  # Browser IIFE entry point
dist/            # Built output (gitignored — run build first)
fonts/           # Font binaries (brands, solid, regular, v4compat)
examples/        # HTML + JS usage examples
docs/            # Documentation markdown files
```

## Adding icons

1. Add the icon name and hex codepoint to `abscomIcon` in `src/icons.ts`.
2. Ensure the glyph exists in the font binaries under `fonts/`.
3. Add the `abs-{name}` class to `css-classes.txt`.
4. Rebuild: `npm run build`

Icon names use kebab-case. Aliases pointing to the same codepoint are welcome.

## Code style

- 2-space indentation
- Single quotes for strings
- No trailing whitespace
- TypeScript with strict types

## Testing your changes

Open any HTML file from `examples/` in a browser after building:

```bash
npm run build
open examples/icon-picker.html
```

## Pull requests

Keep changes focused. Add a brief description of what the icon or feature does.

## Need help?

Open an issue or reach out to rkriad585@gmail.com.
