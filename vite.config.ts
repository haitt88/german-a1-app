import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/german-a1-app/',
  plugins: [react()],
})
