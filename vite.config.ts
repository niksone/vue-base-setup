import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      fix: true,
    }),
    stylelint({
      fix: true,
    }),
  ],
})
