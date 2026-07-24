import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// La web vive en la raíz del dominio (https://yam-charters.github.io/),
// así que la base es '/' tanto en local como en el build de Pages.

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
