import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    // cssInjectedByJsPlugin({ styleId: () => `floatie-style-${Math.random() * 100}` })
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es'],
    },
  },
})
