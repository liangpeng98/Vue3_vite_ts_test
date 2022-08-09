import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src'),
      'com': path.resolve(__dirname,'./src/components')
    }
  },
  server: {
    port: 8080,
    open: true,    
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
