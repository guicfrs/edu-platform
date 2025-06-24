import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'   // ← adicionamos esta linha

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {                                   // ← bloco novo
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
