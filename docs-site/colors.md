---
title: Color Palette
---

<script setup>
import { colorPalette } from '../src/palette.ts'

const palettes = Object.entries(colorPalette).map(([name, shades]) => ({
  name,
  shades: Object.entries(shades).map(([num, hex]) => ({ num: Number(num), hex })),
  subtitle: ['slate','gray','zinc','neutral','stone'].includes(name) ? 'Gray family' : undefined,
}))
</script>

<div class="color-page">
  <h1>Color Palette</h1>
  <p class="lead">Every color utility is available in 10 or 11 shades, from <code>abs-{'{color}'}-50</code> (lightest) to <code>abs-{'{color}'}-900</code>/<code>950</code> (darkest).</p>

  <div class="palette" v-for="pal in palettes" :key="pal.name">
    <h2>abs-{{ pal.name }} <small v-if="pal.subtitle">({{ pal.subtitle }})</small></h2>
    <div class="swatches">
      <div v-for="s in pal.shades" :key="s.num" class="swatch">
        <div class="swatch-bg" :style="{ background: s.hex }"></div>
        <div class="swatch-label">
          <span class="shade">{{ s.num }}</span>
          <span class="var">abs-{{ pal.name }}-{{ s.num }}</span>
          <span class="hex">{{ s.hex }}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style scoped>
.color-page { max-width: 1000px; margin: 0 auto; }
.lead { color: var(--vp-c-text-2); margin-bottom: 2rem; font-size: 1.05rem; }
.lead code { font-size: .9rem; }
.palette { margin-bottom: 2.5rem; }
.palette h2 { font-size: 1.1rem; margin-bottom: .75rem; text-transform: capitalize; }
.palette h2 small { font-weight: 400; color: var(--vp-c-text-3); font-size: .8rem; }
.swatches { display: flex; gap: 4px; flex-wrap: wrap; }
.swatch { display: flex; flex-direction: column; border-radius: 6px; overflow: hidden; width: 72px; border: 1px solid var(--vp-c-divider); }
.swatch-bg { height: 48px; width: 100%; }
.swatch-label { padding: 4px 6px; background: var(--vp-c-bg-soft); text-align: center; }
.shade { display: block; font-size: .8rem; font-weight: 600; }
.var { display: block; font-size: .55rem; color: var(--vp-c-text-3); word-break: break-all; }
.hex { display: block; font-size: .5rem; color: var(--vp-c-text-3); }
</style>
