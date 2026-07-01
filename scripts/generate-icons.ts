import opentype from 'opentype.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

interface IconData {
  name: string
  codepoint: string
  style: 'brands' | 'solid' | 'regular' | 'v4compat'
  paths: string
  unicode: number
}

const fontFiles: { style: IconData['style']; path: string }[] = [
  { style: 'brands', path: 'fonts/abs-brands-400.ttf' },
  { style: 'solid', path: 'fonts/abs-solid-900.ttf' },
  { style: 'regular', path: 'fonts/abs-regular-400.ttf' },
  { style: 'v4compat', path: 'fonts/abs-v4compatibility.ttf' },
]

function loadIconMapping(): Record<string, string> {
  const iconsPath = path.join(ROOT, 'src', 'icons.ts')
  const content = fs.readFileSync(iconsPath, 'utf-8')
  const startIdx = content.indexOf('export const abscomIcon = {')
  const endIdx = content.lastIndexOf('}')
  if (startIdx === -1 || endIdx === -1) throw new Error('Could not find abscomIcon export')
  const objStr = content.slice(startIdx + 'export const abscomIcon = '.length, endIdx + 1)
  return Function(`"use strict"; return (${objStr})`)()
}

function buildCodepointMap(fonts: { style: IconData['style']; font: ReturnType<typeof opentype.parse> }[]): Map<number, { style: IconData['style']; name: string }> {
  const map = new Map<number, { style: IconData['style']; name: string }>()
  for (const { style, font } of fonts) {
    for (let i = 0; i < font.glyphs.length; i++) {
      const g = font.glyphs.get(i)
      const unicodes = g.unicodes || (g.unicode != null ? [g.unicode] : [])
      for (const u of unicodes) {
        if (!map.has(u)) {
          map.set(u, { style, name: g.name || `uni${u.toString(16).toUpperCase()}` })
        }
      }
    }
  }
  return map
}

function generateIcons() {
  console.log('Loading font files...')
  const fonts = fontFiles.map(({ style, path: fontPath }) => ({
    style,
    font: opentype.parse(fs.readFileSync(path.join(ROOT, fontPath))),
  }))

  console.log('Loading icon mapping...')
  const iconMap = loadIconMapping()

  console.log('Building codepoint index...')
  const codepointMap = buildCodepointMap(fonts)

  // Create output directory
  const outDir = path.join(ROOT, 'src', 'svg')
  fs.mkdirSync(outDir, { recursive: true })

  const icons: IconData[] = []
  const notFound: string[] = []
  let multiStyle = 0

  for (const [name, cp] of Object.entries(iconMap)) {
    const unicode = parseInt(cp, 16)
    const entry = codepointMap.get(unicode)

    if (!entry) {
      notFound.push(name)
      continue
    }

    // Find the font for this style
    const fontData = fonts.find(f => f.style === entry.style)
    if (!fontData) {
      notFound.push(name)
      continue
    }

    const glyph = fontData.font.charToGlyph(String.fromCharCode(unicode))
    if (!glyph || !glyph.path || glyph.name === '.notdef') {
      notFound.push(name)
      continue
    }

    // Font uses Y-up; SVG uses Y-down. Flip Y axis in-place.
    const upem = fontData.font.unitsPerEm || 512
    for (const cmd of glyph.path.commands) {
      if (cmd.y != null) cmd.y = upem - cmd.y
      if (cmd.y1 != null) cmd.y1 = upem - cmd.y1
      if (cmd.y2 != null) cmd.y2 = upem - cmd.y2
    }

    // Find bounding box after flip, then scale+center to fit 512x512
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
    for (const cmd of glyph.path.commands) {
      for (const k of ['x', 'x1', 'x2']) if (cmd[k] != null) { minX = Math.min(minX, cmd[k]); maxX = Math.max(maxX, cmd[k]) }
      for (const k of ['y', 'y1', 'y2']) if (cmd[k] != null) { minY = Math.min(minY, cmd[k]); maxY = Math.max(maxY, cmd[k]) }
    }

    if (maxX !== -Infinity && maxY !== -Infinity && maxX > minX && maxY > minY) {
      const boxW = maxX - minX
      const boxH = maxY - minY
      const scale = Math.min(upem / boxW, upem / boxH, 1)
      const cx = (minX + maxX) / 2
      const cy = (minY + maxY) / 2

      for (const cmd of glyph.path.commands) {
        for (const k of ['x', 'x1', 'x2']) if (cmd[k] != null) cmd[k] = (cmd[k] - cx) * scale + upem / 2
        for (const k of ['y', 'y1', 'y2']) if (cmd[k] != null) cmd[k] = (cmd[k] - cy) * scale + upem / 2
      }
    }

    const paths = glyph.path.toPathData(2)
    if (!paths) {
      notFound.push(name)
      continue
    }

    icons.push({
      name,
      codepoint: cp,
      style: entry.style,
      paths,
      unicode,
    })
  }

  console.log(`\nResults:`)
  console.log(`  Total icons in mapping: ${Object.keys(iconMap).length}`)
  console.log(`  SVG generated: ${icons.length}`)
  console.log(`  Not found: ${notFound.length}`)
  if (notFound.length > 0 && notFound.length <= 20) {
    console.log(`  Missing: ${notFound.join(', ')}`)
  } else if (notFound.length > 20) {
    console.log(`  First 20 missing: ${notFound.slice(0, 20).join(', ')}`)
  }

  // Write individual icon modules
  console.log('\nWriting individual icon modules...')
  const iconNames: string[] = []
  const usedIdentifiers = new Map<string, number>()

  const RESERVED_WORDS = new Set([
    'abstract', 'arguments', 'async', 'await', 'boolean', 'break', 'byte',
    'case', 'catch', 'char', 'class', 'const', 'continue', 'debugger',
    'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export',
    'extends', 'false', 'final', 'finally', 'float', 'for', 'function',
    'goto', 'if', 'implements', 'import', 'in', 'Infinity', 'instanceof', 'int',
    'interface', 'let', 'long', 'NaN', 'native', 'new', 'null', 'of', 'package',
    'private', 'protected', 'public', 'return', 'short', 'static', 'super',
    'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true',
    'try', 'typeof', 'undefined', 'var', 'void', 'volatile', 'while', 'with',
    'yield',
  ])

  function toPascalCase(name: string): string {
    let id = name.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    if (id.length > 0) id = id.charAt(0).toUpperCase() + id.slice(1)
    if (/^\d/.test(id)) id = '_' + id
    if (RESERVED_WORDS.has(id)) id = id + '_'
    id = id.replace(/[^a-zA-Z0-9_$]/g, '_')
    return id
  }

  function getUniqueIdentifier(name: string): string {
    const base = toPascalCase(name)
    const count = usedIdentifiers.get(base) || 0
    usedIdentifiers.set(base, count + 1)
    if (count > 0) return `${base}_${count}`
    return base
  }

  // Track alternate names for conflict resolution
  for (const icon of icons) {
    const safeId = getUniqueIdentifier(icon.name)
    iconNames.push(icon.name)
    const content = `// Auto-generated from ${icon.style} font (U+${icon.codepoint})
const ${safeId}Data = ${JSON.stringify(icon.paths)} as const
export default ${safeId}Data
`
    fs.writeFileSync(path.join(outDir, `${icon.name}.ts`), content)
  }

  // Reset for barrel export
  usedIdentifiers.clear()

  // Write barrel export
  console.log('Writing barrel export...')
  const barrelLines = icons.map(icon => {
    const exportName = getUniqueIdentifier(icon.name)
    return `export { default as ${exportName} } from './${icon.name}.js'`
  })
  const barrelContent = `// Auto-generated barrel export - do not edit manually
${barrelLines.join('\n')}
`
  fs.writeFileSync(path.join(outDir, 'index.ts'), barrelContent)

  // Write icon names type
  console.log('Writing icon names type...')
  const namesType = `// Auto-generated icon names type
export type IconName =\n  | ${icons.map(i => `'${i.name}'`).join('\n  | ')}
`
  fs.writeFileSync(path.join(outDir, 'names.ts'), namesType)

  // Write icon data registry for renderIcon()
  console.log('Writing icon data registry...')
  usedIdentifiers.clear()
  const registryLines = icons.map(icon => {
    const safeId = getUniqueIdentifier(icon.name)
    return `  '${icon.name}': { name: '${icon.name}', codepoint: '${icon.codepoint}', style: '${icon.style}', paths: ${safeId} }`
  })
  usedIdentifiers.clear()
  const registryImports = icons.map(icon => {
    const safeId = getUniqueIdentifier(icon.name)
    return `import ${safeId} from './${icon.name}.js'`
  })
  const registryContent = `// Auto-generated icon registry - do not edit manually
import type { IconData } from '../icon-data.js'
${registryImports.join('\n')}

export const iconRegistry: Record<string, IconData> = {
${registryLines.join(',\n')},
}
`
  fs.writeFileSync(path.join(outDir, 'registry.ts'), registryContent)

  // Write SVG files
  console.log('Writing SVG files...')
  const svgDir = path.join(ROOT, 'icons')
  fs.mkdirSync(svgDir, { recursive: true })
  for (const icon of icons) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="${icon.paths}"/></svg>\n`
    fs.writeFileSync(path.join(svgDir, `${icon.name}.svg`), svg)
  }

  console.log(`\nDone! Generated ${icons.length} icons`)
  console.log(`  SVG files: icons/`)
  console.log(`  TypeScript modules: src/svg/`)
}

generateIcons()
