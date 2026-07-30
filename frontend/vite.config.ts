import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const themeDist = '/wp-content/themes/qualifiedleadsx-child/assets/dist/'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? themeDist : '/',
  build: {
    outDir: '../wp-content/themes/qualifiedleadsx-child/assets/dist',
    emptyOutDir: true,
    manifest: false,
    rollupOptions: {
      output: {
        entryFileNames: 'homepage.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'homepage.css'
          return 'assets/[name].[ext]'
        },
      },
    },
  },
}))
