import { defineConfig } from 'vitepress'

function abscomAssetsPlugin() {
  return {
    name: 'abscom-assets',
    transformIndexHtml() {
      return [
        {
          tag: 'link',
          attrs: { rel: 'stylesheet', href: '/AbscomFonts/abscomfonts.css' },
          injectTo: 'head' as const,
        },
        {
          tag: 'script',
          attrs: { src: '/AbscomFonts/dist/abscomfonts.iife.js' },
          injectTo: 'head' as const,
        },
      ]
    },
  }
}

export default defineConfig({
  title: 'AbscomFonts',
  description: '2492 icons - 30+ animations - Color utilities - Zero build step',
  base: '/AbscomFonts/',
  head: [
    ['link', { rel: 'icon', href: '/AbscomFonts/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/AbscomFonts/abscomfonts.css' }],
    ['script', { src: '/AbscomFonts/dist/abscomfonts.iife.js' }],
  ],
  vite: {
    plugins: [abscomAssetsPlugin()],
  },
  themeConfig: {
    logo: '/AbscomFonts/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Icons', link: '/icons/' },
      { text: 'Search', link: '/icon-browser' },
      { text: 'Colors', link: '/colors' },
      { text: 'Bundle', link: '/bundle-size' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rkriad585/AbscomFonts' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Icons Reference', link: '/guide/icons' },
          { text: 'Animations', link: '/guide/animations' },
          { text: 'Colors', link: '/guide/colors' },
          { text: 'Sizes', link: '/guide/sizes' },
          { text: 'Advanced', link: '/guide/advanced' },
          { text: 'Validation', link: '/guide/validation' },
          { text: 'Troubleshooting', link: '/guide/troubleshooting' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'JavaScript API', link: '/api/javascript' },
          { text: 'SVG Framework', link: '/api/svg' },
          { text: 'Search API', link: '/api/search' },
          { text: 'Framework Components', link: '/api/framework-components' },
        ],
      },
      {
        text: 'Tools',
        items: [
          { text: 'Icon Browser', link: '/icon-browser' },
          { text: 'Color Palette', link: '/colors' },
          { text: 'Bundle Size', link: '/bundle-size' },
        ],
      },
    ],
    footer: {
      message: 'MIT License',
      copyright: 'Copyright (c) rkriad585',
    },
  },
})
