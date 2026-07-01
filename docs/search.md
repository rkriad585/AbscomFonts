# Icon Search & Metadata API

AbscomFonts provides a programmatic search and filter API for icon discovery. Every icon has associated metadata: category, style, keywords, and aliases.

## Search API

```typescript
import { searchIcons } from 'abscomfonts'
// or
import { searchIcons } from 'abscomfonts/svg'
```

### searchIcons(options)

```typescript
interface SearchOptions {
  query?: string    // Search term (fuzzy matched against name, keywords, aliases)
  category?: string // Filter by category (e.g., 'Arrows', 'Brands', 'Users')
  style?: string    // Filter by style ('brands', 'solid', 'regular')
  limit?: number    // Max results (default: 50)
  exact?: boolean   // Exact match only (default: false)
}

interface SearchResult {
  name: string
  style: 'brands' | 'solid' | 'regular'
  codepoint: string
  category: string
  keywords: string[]
  aliases: string[]
  score: number    // Match confidence (0-100)
}
```

**Examples:**

```typescript
// Basic search
searchIcons({ query: 'heart' })
// → [{ name: 'heart', score: 100, ... }, { name: 'heartbeat', score: 80, ... }]

// Filter by category
searchIcons({ category: 'Brands', limit: 10 })
// → [{ name: 'github', style: 'brands', ... }, ...]

// Combined search + filter
searchIcons({ query: 'trash', category: 'Files' })

// Aliases work
searchIcons({ query: 'trash-can' })
// → [{ name: 'trash-alt', score: 85, ... }]
```

### getIconMeta(name)

Returns metadata for a specific icon:

```typescript
import { getIconMeta } from 'abscomfonts'

const meta = getIconMeta('star')
// → { name: 'star', style: 'solid', codepoint: 'f005', category: 'Favorites', keywords: ['star'], aliases: [] }
```

### getCategories()

Returns all categories with icon counts, sorted by count:

```typescript
import { getCategories } from 'abscomfonts'

const cats = getCategories()
// → [{ category: 'Brands', count: 584 }, { category: 'Arrows', count: 178 }, ...]
```

### getIconsByCategory(category)

Returns all icons in a given category:

```typescript
import { getIconsByCategory } from 'abscomfonts'

const arrows = getIconsByCategory('Arrows')
```

## Metadata Index

The full metadata is available as a compiled JSON file:

```json
// dist/icons-index.json (239 KB)
[
  { "n": "heart", "s": "solid", "c": "f005", "g": "Favorites", "k": ["heart"], "a": [] },
  ...
]
```

Where fields are abbreviated: `n`=name, `s`=style, `c`=codepoint, `g`=category, `k`=keywords, `a`=aliases.

## Icon Categories

| Category | Icons | Examples |
|----------|-------|---------|
| Brands | 584 | github, twitter, android, python |
| Arrows | 178 | arrow-right, chevron-down, sort-up |
| Users | 107 | user, user-circle, users |
| Shapes | 80 | circle, square, diamond |
| Weather | 66 | sun, cloud-rain, snowflake |
| Buildings | 59 | home, building, door-open |
| Transport | 49 | car, plane, truck |
| Files | 47 | file, folder, file-code |
| Devices | 47 | phone, laptop, camera |
| Hands | 43 | hand, handshake, thumbs-up |
| Maps | 32 | map-pin, location-dot, globe |
| Communication | 31 | envelope, comment, share |
| Favorites | 30 | heart, star, bookmark |
| Media | 29 | play, music, film |
| Food | 28 | coffee, pizza, hamburger |
| Money | 25 | dollar-sign, wallet, coin |
| Time | 24 | clock, calendar, hourglass |
| ... | ... | ... |
