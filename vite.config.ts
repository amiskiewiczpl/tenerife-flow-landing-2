import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/tenerife-flow-landing-2/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        experiences: resolve(__dirname, 'experiences.html'),
        partners: resolve(__dirname, 'partners.html'),
        contact: resolve(__dirname, 'contact.html'),
        articles: resolve(__dirname, 'articles.html'),
      },
    },
  },
})
