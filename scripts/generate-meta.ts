import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

interface IconMetaEntry {
  name: string
  style: 'brands' | 'solid' | 'regular' | 'v4compat'
  codepoint: string
  category: string
  keywords: string[]
  aliases: string[]
}

const CATEGORY_MAP: [string, string][] = [
  ['arrow', 'Arrows'], ['chevron', 'Arrows'], ['caret', 'Arrows'], ['angle', 'Arrows'],
  ['hand-point', 'Arrows'], ['sort', 'Arrows'], ['exchange', 'Arrows'],
  ['compress', 'Arrows'], ['expand', 'Arrows'], ['up-down', 'Arrows'], ['left-right', 'Arrows'],
  ['circle', 'Shapes'], ['square', 'Shapes'], ['triangle', 'Shapes'], ['diamond', 'Shapes'],
  ['dot-circle', 'Shapes'], ['ring', 'Shapes'], ['hexagon', 'Shapes'], ['octagon', 'Shapes'],
  ['pentagon', 'Shapes'], ['rectangle', 'Shapes'], ['cross', 'Shapes'],
  ['file', 'Files'], ['folder', 'Files'],
  ['user', 'Users'], ['person', 'Users'], ['male', 'Users'], ['female', 'Users'],
  ['child', 'Users'], ['man-', 'Users'], ['woman-', 'Users'], ['people', 'Users'],
  ['baby', 'Users'], ['parent', 'Users'], ['family', 'Users'], ['student', 'Users'],
  ['hand', 'Hands'], ['hands', 'Hands'], ['handshake', 'Hands'], ['fist', 'Hands'],
  ['thumbs', 'Hands'], ['point', 'Hands'],
  ['face-', 'Emoji'], ['smile', 'Emoji'], ['grin', 'Emoji'], ['frown', 'Emoji'],
  ['meh', 'Emoji'], ['grimace', 'Emoji'], ['flush', 'Emoji'], ['surprise', 'Emoji'],
  ['kiss', 'Emoji'], ['wink', 'Emoji'], ['laugh', 'Emoji'], ['sad-', 'Emoji'],
  ['cry', 'Emoji'], ['angry', 'Emoji'], ['dizzy', 'Emoji'], ['tired', 'Emoji'],
  ['rolling', 'Emoji'],
  ['comment', 'Communication'], ['message', 'Communication'], ['chat', 'Communication'],
  ['envelope', 'Communication'], ['mail', 'Communication'], ['inbox', 'Communication'],
  ['reply', 'Communication'], ['share', 'Communication'], ['fax', 'Communication'],
  ['phone', 'Devices'], ['mobile', 'Devices'], ['tablet', 'Devices'], ['laptop', 'Devices'],
  ['computer', 'Devices'], ['keyboard', 'Devices'], ['mouse', 'Devices'], ['display', 'Devices'],
  ['desktop', 'Devices'], ['monitor', 'Devices'], ['tv', 'Devices'], ['radio', 'Devices'],
  ['camera', 'Devices'], ['microphone', 'Devices'], ['headphone', 'Devices'],
  ['speaker', 'Devices'], ['print', 'Devices'], ['scanner', 'Devices'],
  ['car', 'Transport'], ['truck', 'Transport'], ['bus', 'Transport'], ['train', 'Transport'],
  ['plane', 'Transport'], ['ship', 'Transport'], ['boat', 'Transport'], ['bicycle', 'Transport'],
  ['motorcycle', 'Transport'], ['ambulance', 'Transport'], ['taxi', 'Transport'],
  ['tractor', 'Transport'], ['trailer', 'Transport'], ['helicopter', 'Transport'],
  ['rocket', 'Transport'], ['shuttle', 'Transport'], ['subway', 'Transport'], ['tram', 'Transport'],
  ['airplane', 'Transport'],
  ['heart', 'Favorites'], ['star', 'Favorites'], ['flag', 'Favorites'], ['bookmark', 'Favorites'],
  ['tag', 'Favorites'], ['award', 'Favorites'], ['trophy', 'Favorites'], ['crown', 'Favorites'],
  ['medal', 'Favorites'], ['ribbon', 'Favorites'], ['badge', 'Favorites'],
  ['music', 'Media'], ['film', 'Media'], ['video', 'Media'], ['play', 'Media'],
  ['pause', 'Media'], ['stop', 'Media'], ['forward', 'Media'], ['backward', 'Media'],
  ['step', 'Media'], ['shuffle', 'Media'], ['repeat', 'Media'], ['volume', 'Media'],
  ['podcast', 'Media'], ['broadcast', 'Media'], ['audio', 'Media'],
  ['calendar', 'Time'], ['clock', 'Time'], ['hourglass', 'Time'], ['watch', 'Time'],
  ['stopwatch', 'Time'], ['timer', 'Time'], ['alarm', 'Time'],
  ['map', 'Maps'], ['location', 'Maps'], ['pin', 'Maps'], ['marker', 'Maps'],
  ['globe', 'Maps'], ['compass', 'Maps'], ['road', 'Maps'], ['sign', 'Maps'],
  ['direction', 'Maps'], ['route', 'Maps'],
  ['lock', 'Security'], ['unlock', 'Security'], ['key', 'Security'], ['shield', 'Security'],
  ['search', 'Search'], ['filter', 'Search'], ['zoom', 'Search'],
  ['edit', 'Editing'], ['pencil', 'Editing'], ['pen-', 'Editing'], ['write', 'Editing'],
  ['eraser', 'Editing'], ['cut', 'Editing'], ['copy', 'Editing'], ['paste', 'Editing'],
  ['clipboard', 'Editing'], ['scissors', 'Editing'], ['paperclip', 'Editing'], ['crop', 'Editing'],
  ['chart', 'Charts'], ['bar-', 'Charts'], ['pie', 'Charts'], ['graph', 'Charts'],
  ['stats', 'Charts'], ['calculator', 'Charts'],
  ['money', 'Money'], ['dollar', 'Money'], ['euro', 'Money'], ['pound', 'Money'],
  ['yen', 'Money'], ['rupee', 'Money'], ['credit', 'Money'], ['wallet', 'Money'],
  ['bank', 'Money'], ['coin', 'Money'], ['cash', 'Money'], ['payment', 'Money'],
  ['donate', 'Money'], ['gift', 'Money'], ['shopping', 'Money'],
  ['book', 'Books'], ['newspaper', 'Books'], ['library', 'Books'],
  ['hospital', 'Medical'], ['medical', 'Medical'], ['doctor', 'Medical'], ['health', 'Medical'],
  ['pill', 'Medical'], ['syringe', 'Medical'], ['stethoscope', 'Medical'],
  ['bandage', 'Medical'], ['heartbeat', 'Medical'], ['virus', 'Medical'],
  ['dna', 'Medical'], ['tooth', 'Medical'], ['bone', 'Medical'], ['lung', 'Medical'],
  ['brain', 'Medical'], ['ear', 'Medical'],
  ['beer', 'Food'], ['drink', 'Food'], ['coffee', 'Food'], ['tea', 'Food'],
  ['wine', 'Food'], ['cocktail', 'Food'], ['glass', 'Food'], ['bottle', 'Food'],
  ['cup', 'Food'], ['utensil', 'Food'], ['food', 'Food'], ['pizza', 'Food'],
  ['hamburger', 'Food'], ['egg', 'Food'], ['cheese', 'Food'], ['cake', 'Food'],
  ['candy', 'Food'], ['cookie', 'Food'], ['bread', 'Food'], ['hotdog', 'Food'],
  ['sport', 'Sports'], ['football', 'Sports'], ['basketball', 'Sports'], ['baseball', 'Sports'],
  ['volleyball', 'Sports'], ['tennis', 'Sports'], ['golf', 'Sports'], ['soccer', 'Sports'],
  ['hockey', 'Sports'], ['ski', 'Sports'], ['swim', 'Sports'], ['dumbbell', 'Sports'],
  ['game', 'Games'], ['dice', 'Games'], ['chess', 'Games'], ['puzzle', 'Games'],
  ['card', 'Games'], ['robot', 'Games'], ['gamepad', 'Games'],
  ['cloud', 'Weather'], ['rain', 'Weather'], ['snow', 'Weather'], ['wind', 'Weather'],
  ['sun', 'Weather'], ['moon', 'Weather'], ['bolt', 'Weather'], ['fire', 'Weather'],
  ['water', 'Weather'], ['wave', 'Weather'], ['flame', 'Weather'], ['meteor', 'Weather'],
  ['tornado', 'Weather'], ['hurricane', 'Weather'], ['temperature', 'Weather'],
  ['thermometer', 'Weather'], ['droplet', 'Weather'], ['snowflake', 'Weather'],
  ['sun-', 'Weather'], ['moon-', 'Weather'],
  ['house', 'Buildings'], ['building', 'Buildings'], ['home', 'Buildings'],
  ['door', 'Buildings'], ['window', 'Buildings'], ['bed', 'Buildings'],
  ['couch', 'Buildings'], ['toilet', 'Buildings'], ['bath', 'Buildings'],
  ['shower', 'Buildings'], ['chair', 'Buildings'],
  ['plug', 'Electrical'], ['battery', 'Electrical'], ['light', 'Electrical'],
  ['bulb', 'Electrical'], ['lamp', 'Electrical'], ['power', 'Electrical'],
  ['wrench', 'Tools'], ['hammer', 'Tools'], ['tool', 'Tools'], ['screw', 'Tools'],
  ['brush', 'Tools'], ['broom', 'Tools'], ['drill', 'Tools'], ['magnet', 'Tools'],
  ['trash', 'Trash'], ['dumpster', 'Trash'], ['recycle', 'Trash'],
  ['tree', 'Nature'], ['leaf', 'Nature'], ['seed', 'Nature'], ['plant', 'Nature'],
  ['flower', 'Nature'], ['mountain', 'Nature'],
  ['paw', 'Animals'], ['dog', 'Animals'], ['cat', 'Animals'], ['horse', 'Animals'],
  ['cow', 'Animals'], ['bird', 'Animals'], ['fish', 'Animals'], ['bug', 'Animals'],
  ['spider', 'Animals'], ['dragon', 'Animals'], ['frog', 'Animals'], ['hippo', 'Animals'],
  ['otter', 'Animals'], ['crow', 'Animals'], ['dove', 'Animals'], ['worm', 'Animals'],
  ['shirt', 'Clothing'], ['hat', 'Clothing'], ['shoe', 'Clothing'], ['sock', 'Clothing'],
  ['boot', 'Clothing'], ['helmet', 'Clothing'], ['goggles', 'Clothing'],
  ['glasses', 'Clothing'], ['mask', 'Clothing'],
  ['code', 'Code'], ['terminal', 'Code'], ['bracke', 'Code'], ['git', 'Code'],
  ['branch', 'Code'], ['commit', 'Code'], ['server', 'Code'], ['database', 'Code'],
  ['wifi', 'Connectivity'], ['signal', 'Connectivity'], ['bluetooth', 'Connectivity'],
  ['rss', 'Connectivity'], ['link', 'Connectivity'], ['chain', 'Connectivity'],
  ['anchor', 'Maritime'], ['sail', 'Maritime'], ['anchor-', 'Maritime'],
  ['table', 'Data'], ['list', 'Data'], ['grid', 'Data'], ['column', 'Data'], ['row', 'Data'],
  ['align', 'Text'], ['text', 'Text'], ['font', 'Text'], ['paragraph', 'Text'],
  ['heading', 'Text'], ['indent', 'Text'], ['outdent', 'Text'], ['quote', 'Text'],
  ['magic', 'Creative'], ['wand', 'Creative'], ['palette', 'Creative'],
  ['paint', 'Creative'], ['layer', 'Creative'], ['ruler', 'Creative'], ['draw', 'Creative'],
  ['copyright', 'Legal'], ['trademark', 'Legal'], ['registered', 'Legal'],
  ['gavel', 'Legal'], ['balance', 'Legal'], ['scale', 'Legal'], ['legal', 'Legal'],
  ['mars', 'Gender'], ['venus', 'Gender'], ['gender', 'Gender'], ['transgender', 'Gender'],
  ['mercury', 'Gender'], ['neuter', 'Gender'],
  ['bridge', 'Infrastructure'], ['pipe', 'Infrastructure'], ['fence', 'Infrastructure'],
  ['factory', 'Industry'], ['industry', 'Industry'], ['gear', 'Industry'], ['cog', 'Industry'],
  ['oil', 'Industry'], ['gas-', 'Industry'], ['meter', 'Measurement'], ['gauge', 'Measurement'],
  ['weight', 'Measurement'],
  ['wheat', 'Agriculture'], ['corn', 'Agriculture'], ['farm', 'Agriculture'],
  ['holiday', 'Holidays'], ['santa', 'Holidays'], ['menorah', 'Holidays'],
  ['ghost', 'Holidays'], ['skull', 'Holidays'], ['pumpkin', 'Holidays'],
  ['school', 'Education'], ['university', 'Education'], ['learn', 'Education'],
  ['graduate', 'Education'],
  ['wheelchair', 'Accessibility'], ['blind', 'Accessibility'], ['deaf', 'Accessibility'],
  ['braille', 'Accessibility'], ['sign-language', 'Accessibility'],
  ['bell', 'Notifications'], ['notification', 'Notifications'], ['alert', 'Notifications'],
  ['warning', 'Notifications'], ['check', 'Notifications'], ['xmark', 'Notifications'],
  ['times', 'Notifications'], ['close', 'Notifications'], ['ban', 'Notifications'],
  ['camp', 'Travel'], ['hiking', 'Travel'], ['backpack', 'Travel'], ['luggage', 'Travel'],
  ['suitcase', 'Travel'], ['passport', 'Travel'], ['hotel', 'Travel'], ['beach', 'Travel'],
  ['umbrella', 'Travel'], ['binoculars', 'Travel'],
]

  const BRAND_KEYWORDS = [
  'docker', 'slack', 'discord', 'telegram', 'youtube', 'instagram', 'linkedin', 'reddit',
  'amazon', 'microsoft', 'npm', 'node', 'react', 'vue', 'angular', 'python', 'java',
  'js', 'ts', 'css', 'html', 'php', 'ruby', 'rust', 'go-', 'kotlin', 'swift',
  'unity', 'unreal', 'blender', 'figma', 'sketch', 'xd', 'photoshop', 'illustrator',
  'gulp', 'grunt', 'webpack', 'vite', 'babel', 'eslint', 'prettier',
  'ubuntu', 'debian', 'fedora', 'centos', 'arch', 'suse', 'redhat',
  'chrome', 'firefox', 'safari', 'edge', 'opera', 'brave',
  'dropbox', 'drive', 'evernote', 'trello', 'jira', 'confluence', 'slack',
  'shopify', 'wordpress', 'drupal', 'joomla', 'magento', 'woocommerce',
  'paypal', 'stripe', 'square', 'visa', 'mastercard', 'amex',
  'uber', 'lyft', 'airbnb', 'spotify', 'netflix', 'twitch', 'steam',
  'epic', 'unity', 'unreal', 'ibm', 'oracle', 'sap', 'salesforce', 'adobe',
  'atlassian', 'github', 'gitlab', 'bitbucket',
  'alibaba', 'tencent', 'baidu', 'xiaomi', 'huawei', 'oppo', 'vivo',
  'intel', 'amd', 'nvidia', 'arm', 'raspberry', 'arduino',
  'docker', 'kubernetes', 'jenkins', 'travis', 'circleci',
  'mongodb', 'redis', 'postgres', 'mysql', 'sqlite', 'cockroach',
]

function deriveCategory(name: string): string {
  const lower = name.toLowerCase()

  for (const [prefix, cat] of CATEGORY_MAP) {
    if (lower === prefix) return cat
    if (lower.startsWith(prefix + '-')) return cat
    if (lower.startsWith(prefix)) {
      const next = lower.slice(prefix.length)
      if (next === '' || next.startsWith('-')) return cat
    }
  }

  const firstPart = name.split('-')[0]
  if (firstPart && firstPart.length > 1) {
    if (BRAND_KEYWORDS.some(b => firstPart === b || name.startsWith(b + '-'))) {
      return 'Brands'
    }
    return firstPart.charAt(0).toUpperCase() + firstPart.slice(1)
  }
  return 'Other'
}

function keywordsFromName(name: string): string[] {
  const parts = name.split('-')
  const set = new Set<string>()
  for (const part of parts) {
    if (part.length > 1 && part !== 'alt') {
      set.add(part)
    }
  }
  set.add(name)
  return Array.from(set)
}

function generateMeta() {
  const iconsPath = path.join(ROOT, 'src', 'icons.ts')
  const content = fs.readFileSync(iconsPath, 'utf-8')
  const startIdx = content.indexOf('export const abscomIcon = {')
  const endIdx = content.lastIndexOf('}')
  if (startIdx === -1 || endIdx === -1) throw new Error('Could not find abscomIcon export')
  const objStr = content.slice(startIdx + 'export const abscomIcon = '.length, endIdx + 1)
  const iconMap: Record<string, string> = Function(`"use strict"; return (${objStr})`)()

  const uniqueCodepoints = new Map<string, string>()
  const primaryNames = new Map<string, string>()
  const aliasNames = new Map<string, string[]>()

  for (const [name, cp] of Object.entries(iconMap)) {
    if (!uniqueCodepoints.has(cp)) {
      uniqueCodepoints.set(cp, name)
      primaryNames.set(name, cp)
    }
  }

  for (const [name, cp] of Object.entries(iconMap)) {
    if (primaryNames.has(name)) continue
    const arr = aliasNames.get(cp) || []
    arr.push(name)
    aliasNames.set(cp, arr)
  }

  // Read style info from SVG registry if available
  const registryPath = path.join(ROOT, 'src', 'svg', 'registry.ts')
  const styleMap = new Map<string, string>()
  if (fs.existsSync(registryPath)) {
    const regContent = fs.readFileSync(registryPath, 'utf-8')
    const styleRegex = /'([^']+)':\s*\{[^}]*style:\s*'([^']+)'/g
    let m
    while ((m = styleRegex.exec(regContent))) {
      styleMap.set(m[1], m[2])
    }
  }

  const entries: IconMetaEntry[] = []

  for (const [name, cp] of Object.entries(iconMap)) {
    if (!primaryNames.has(name)) continue
    const aliases = aliasNames.get(cp) || []
    const style = (styleMap.get(name) || 'solid') as IconMetaEntry['style']

    let category = style === 'brands' ? 'Brands' : deriveCategory(name)

    const entry: IconMetaEntry = { name, style, codepoint: cp, category, keywords: keywordsFromName(name), aliases }
    entries.push(entry)
  }

  // Also add alias entries (simplified, pointing to primary)
  for (const [cp, aliases] of aliasNames) {
    const primaryName = uniqueCodepoints.get(cp)!
    const primary = entries.find(e => e.name === primaryName)!
    for (const aliasName of aliases) {
      entries.push({
        name: aliasName,
        style: primary.style,
        codepoint: cp,
        category: primary.category,
        keywords: keywordsFromName(aliasName),
        aliases: [],
      })
    }
  }

  const outDir = path.join(ROOT, 'src')
  const metaContent = `// Auto-generated icon metadata - do not edit manually
export interface IconMeta {
  name: string
  style: 'brands' | 'solid' | 'regular' | 'v4compat'
  codepoint: string
  category: string
  keywords: string[]
  aliases: string[]
}

export const iconMetaIndex: Record<string, IconMeta> = {
${entries.map(e => `  '${e.name}': ${JSON.stringify(e)},`).join('\n')}
}
`
  fs.writeFileSync(path.join(outDir, 'icons-meta.ts'), metaContent)

  const indexJson = entries.map(e => ({
    n: e.name,
    s: e.style,
    c: e.codepoint,
    g: e.category,
    k: e.keywords,
    a: e.aliases,
  }))

  const distDir = path.join(ROOT, 'dist')
  fs.mkdirSync(distDir, { recursive: true })
  // Don't write to dist here — tsup clean deletes it. Write at build end.
  // JSON is only needed in src/icons-meta.ts for the TypeScript API.
  // For runtime JSON consumers, see the build script which generates it separately.

  const categoryCounts: Record<string, number> = {}
  for (const e of entries) {
    categoryCounts[e.category] = (categoryCounts[e.category] || 0) + 1
  }
  const sorted = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])
  console.log(`Generated metadata for ${entries.length} icons (${Object.keys(uniqueCodepoints).length} unique)`)
  console.log(`  Aliases: ${aliasNames.size} codepoints have ${Array.from(aliasNames.values()).reduce((s, a) => s + a.length, 0)} alias names`)
  console.log(`  Categories: ${sorted.length}`)
  console.log('')
  console.log('All categories:')
  for (const [cat, count] of sorted) {
    console.log(`  ${count.toString().padStart(4)}  ${cat}`)
  }
  console.log(`\nSmall categories (<5): ${sorted.filter(([,v]) => v < 5).length}`)
}

generateMeta()
