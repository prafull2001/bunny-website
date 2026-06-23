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
  },
})
