import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal-website/',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
})
