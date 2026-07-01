---
title: Icon Browser
---

<script setup>
import { onMounted, ref, computed } from 'vue'

const allIcons = ref([])
const categories = ref([])
const search = ref('')
const category = ref('')
const loaded = ref(false)
const error = ref('')

const filtered = computed(() => {
  let items = allIcons.value
  if (category.value) items = items.filter(i => i.g === category.value)

  const q = search.value.trim().toLowerCase()
  if (q) {
    items = items.map(i => ({ ...i, _score: score(i, q) })).filter(i => i._score > 0).sort((a, b) => b._score - a._score).slice(0, 100)
  } else {
    items = items.sort((a, b) => a.n.localeCompare(b.n))
  }
  return items
})

function tokenize(s) {
  return s.toLowerCase().split(/[^a-zA-Z0-9]+/).filter(Boolean)
}

function score(icon, query) {
  const tokens = tokenize(query)
  const name = icon.n.toLowerCase()
  const joined = tokens.join('-')
  if (name === joined) return 100
  if (icon.k.some(k => k.toLowerCase() === joined)) return 90
  if (name.startsWith(joined)) return 80
  if (icon.k.some(k => k.startsWith(joined))) return 70
  if (name.includes(joined)) return 50
  if (icon.a && icon.a.some(a => a.toLowerCase() === joined)) return 85
  return tokens.filter(t => icon.k.some(k => k.includes(t))).length * 10
}

function copy(name) {
  const cls = `abs abs-${name}`
  navigator.clipboard.writeText(cls).then(() => {
    const el = document.getElementById('toast')
    el.textContent = `Copied: ${cls}`
    el.classList.add('show')
    setTimeout(() => el.classList.remove('show'), 1500)
  })
}

onMounted(async () => {
  try {
    const res = await fetch('/AbscomFonts/dist/icons-index.json')
    const data = await res.json()
    allIcons.value = data
    const cats = {}
    for (const icon of data) cats[icon.g] = (cats[icon.g] || 0) + 1
    categories.value = Object.entries(cats).sort((a, b) => b[1] - a[1])
    loaded.value = true
  } catch (e) {
    error.value = `Failed to load icons: ${e.message}`
  }
})
</script>

<div class="icon-browser">
  <div class="controls">
    <input v-model="search" placeholder="Search icons..." autofocus />
    <select v-model="category">
      <option value="">All categories</option>
      <option v-for="[cat, count] in categories" :key="cat" :value="cat">{{ cat }} ({{ count }})</option>
    </select>
  </div>

  <div v-if="error" class="error">{{ error }}</div>
  <div v-else-if="!loaded" class="loading">Loading icons...</div>
  <div v-else class="stats">{{ filtered.length }} of {{ allIcons.length }} icons</div>

  <div v-if="filtered.length === 0 && loaded" class="none">No icons found</div>

  <div class="grid">
    <template v-for="(icon, idx) in filtered" :key="icon.n">
      <div class="card" @click="copy(icon.n)">
        <i :class="`abs abs-${icon.n} abs-2x`"></i>
        <span>abs-{{ icon.n }}</span>
      </div>
    </template>
  </div>

  <div id="toast" class="toast"></div>
</div>

<style scoped>
.icon-browser { max-width: 1100px; margin: 0 auto; }
.controls { display: flex; gap: .75rem; margin-bottom: 1rem; flex-wrap: wrap; }
.controls input { flex: 1; min-width: 200px; padding: .75rem 1rem; border-radius: 8px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); font-size: 1rem; outline: none; }
.controls input:focus { border-color: var(--vp-c-brand-1); }
.controls select { padding: .75rem 1rem; border-radius: 8px; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); font-size: .85rem; outline: none; cursor: pointer; }
.controls select:focus { border-color: var(--vp-c-brand-1); }
.stats { text-align: center; color: var(--vp-c-text-2); font-size: .85rem; margin-bottom: 1rem; }
.loading, .error { text-align: center; padding: 3rem; color: var(--vp-c-text-2); }
.error { color: var(--vp-c-danger-1); }
.none { text-align: center; padding: 3rem; color: var(--vp-c-text-3); }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: .75rem; }
.card { background: var(--vp-c-bg-soft); border-radius: 8px; padding: 1rem; text-align: center; cursor: pointer; transition: background .2s, transform .1s; }
.card:hover { background: var(--vp-c-bg-mute); transform: scale(1.05); }
.card:active { transform: scale(.95); }
.card span { display: block; margin-top: .4rem; font-size: .65rem; color: var(--vp-c-text-2); word-break: break-all; }
.toast { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%) translateY(100px); background: var(--vp-c-brand-1); color: #fff; padding: .75rem 1.5rem; border-radius: 8px; font-size: .9rem; opacity: 0; transition: all .3s; z-index: 9999; pointer-events: none; }
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
</style>
