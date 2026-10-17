import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Static-site-generation options consumed by `vite-react-ssg build`.
  ssgOptions: {
    entry: 'src/main.jsx',
    // /about -> dist/about/index.html, served as clean /about on GitHub Pages.
    dirStyle: 'nested',
    formatting: 'none',
    // SSG's shared bundle includes every route's images; preload only images on this page.
    onPageRendered(_route, html) {
      const images = new Set([...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map((match) => match[1]))
      const seen = new Set()
      return html.replace(/<link\b[^>]*>/g, (link) => {
        if (!/\brel="preload"/.test(link) || !/\bas="image"/.test(link)) return link
        const href = link.match(/\bhref="([^"]+)"/)?.[1]
        if (!images.has(href) || seen.has(href)) return ''
        seen.add(href)
        // SSG adds crossorigin even though these rendered images use normal requests.
        return link.replace(/\s+crossorigin=""/, '')
      })
    },
  },
})
