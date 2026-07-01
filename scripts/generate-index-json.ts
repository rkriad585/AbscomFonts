import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { iconMetaIndex } from '../src/icons-meta.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const entries = Object.values(iconMetaIndex).map(e => ({
  n: e.name,
  s: e.style,
  c: e.codepoint,
  g: e.category,
  k: e.keywords,
  a: e.aliases,
}))

const distDir = path.join(ROOT, 'dist')
fs.mkdirSync(distDir, { recursive: true })
fs.writeFileSync(path.join(distDir, 'icons-index.json'), JSON.stringify(entries))
console.log(`Generated icons-index.json (${entries.length} icons)`)
