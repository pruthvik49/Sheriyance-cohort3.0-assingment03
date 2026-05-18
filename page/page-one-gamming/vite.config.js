import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        audiowide: ['Audiowide', 'cursive'],
        michroma: ['Michroma', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
      },
    },
  },
})
