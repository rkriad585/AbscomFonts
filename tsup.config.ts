import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: { index: 'src/index.ts' },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    tsconfig: 'tsconfig.json',
  },
  {
    entry: { 'abscomfonts': 'src/global.ts' },
    format: ['iife'],
    globalName: 'AbscomFonts',
    dts: true,
    sourcemap: true,
    tsconfig: 'tsconfig.json',
    outExtension: () => ({ js: '.iife.js' }),
    minify: true,
  },
  {
    entry: { 'svg/index': 'src/svg/svg-barrel.ts' },
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: false,
    tsconfig: 'tsconfig.json',
  },
  {
    entry: { 'react/index': 'src/react/index.tsx' },
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: false,
    tsconfig: 'tsconfig.json',
    external: ['react'],
  },
  {
    entry: { 'vue/index': 'src/vue/index.ts' },
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: false,
    tsconfig: 'tsconfig.json',
    external: ['vue'],
  },
])
