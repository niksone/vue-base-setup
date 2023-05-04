import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import stylelint from 'vite-plugin-stylelint'
import path from 'path'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  plugins: [
    vue(),
    stylelint({
      fix: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
