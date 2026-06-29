import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path para GitHub Pages (proyecto): https://<usuario>.github.io/<repo>/
// En local (dev) usamos '/'. En el build de Pages, GITHUB_PAGES=1 activa el prefijo.
const base = process.env.GITHUB_PAGES ? '/yam-charters/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
