import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/portfolio-ai/' : '/', 
  
  plugins: [
    react(),
    tailwindcss(),
  ],
})

