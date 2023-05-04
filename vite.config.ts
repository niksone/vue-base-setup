import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'
import path from 'path'

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    vue(),
    eslintPlugin(),
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
