import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mentor-QR-code-challenge/',
  plugins: [react()],
})
