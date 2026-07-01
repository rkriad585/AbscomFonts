---
title: Bundle Size Dashboard
---

<script setup>
import { ref, onMounted } from 'vue'

const sizes = ref([])
const loaded = ref(false)

onMounted(async () => {
  const pkgData = await fetch('/AbscomFonts/package.json').then(r => r.json())
  const version = pkgData.version || '0.0.0'
  const deps = Object.keys(pkgData.dependencies || {}).length
  const devDeps = Object.keys(pkgData.devDependencies || {}).length

  try {
    const res = await fetch('/AbscomFonts/.bundle-sizes.json')
    const data = await res.json()
    sizes.value = data
  } catch {
    sizes.value = []
  }
  loaded.value = true
})

function fmt(bytes) {
  if (bytes < 1024) return `${bytes} B`
  const kb = bytes / 1024
  if (kb < 1024) return `${kb.toFixed(1)} KB`
  return `${(kb / 1024).toFixed(1)} MB`
}
</script>

<div v-if="!loaded" style="text-align:center;padding:3rem;color:var(--vp-c-text-2);">Loading...</div>
<div v-else>

# Bundle Size Dashboard

Track the real-world size of each distribution artifact across versions.

## Current Build

The table below shows the actual size of every file in `dist/`:

<table>
  <thead>
    <tr>
      <th>Artifact</th>
      <th>Size</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="s in sizes" :key="s.name">
      <td><code>{{ s.name }}</code></td>
      <td><strong>{{ fmt(s.size) }}</strong></td>
      <td>{{ s.description }}</td>
    </tr>
  </tbody>
</table>

## Size Comparison

### Approach Comparison

| Approach | Size | Scenario |
|---|---|---|
| **Font (IIFE)** | ~40 KB | Single `<script>` tag, all icons |
| **Font (ESM)** | ~35 KB | Import `abscomfonts.css`, tree-shakeable |
| **SVG barrel** | 3.19 MB | All SVG icon modules (unused code is tree-shaken) |
| **Search index** | 239 KB | JSON metadata for browser-based search |
| **React component** | ~2 KB | Tree-shakeable framework wrapper |
| **Vue component** | ~2 KB | Tree-shakeable framework wrapper |
| **Svelte component** | ~2 KB | Raw `.svelte` source |

### Font vs SVG

- **Font approach**: ~40 KB loaded once. All icons available via CSS classes. Ideal for most users.
- **SVG approach**: Import only the icons you need. Bundle size scales linearly with usage. Ideal for modern bundler workflows with tree-shaking.

## Historical

_Size tracking will be populated as versions are released._

</div>

<style scoped>
table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
th, td { text-align: left; padding: .6rem .75rem; border-bottom: 1px solid var(--vp-c-divider); }
th { background: var(--vp-c-bg-soft); font-size: .8rem; text-transform: uppercase; letter-spacing: .05em; color: var(--vp-c-text-2); }
code { font-size: .8rem; }
</style>
