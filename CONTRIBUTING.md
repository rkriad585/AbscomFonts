# Contributing to AbscomFonts

## Getting started

This is a single-file JavaScript framework with no build step. The entire library lives in `abscomfonts.js`.

## Adding icons

1. Add the icon name and codepoint to the `abscomIcon` object in `abscomfonts.js`.
2. Ensure the glyph exists in the font binaries under `fonts/`.
3. Add the `abs-{name}` class to `css-classes.txt`.

Icon names use kebab-case. Aliases pointing to the same codepoint are welcome.

## Code style

- No semicolons
- Single quotes for strings
- 2-space indentation
- No trailing whitespace

## Pull requests

Keep changes focused. Add a brief description of what the icon or feature does.
