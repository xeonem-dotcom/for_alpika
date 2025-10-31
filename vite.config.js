import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Replace "for_alpika" with your GitHub repo name exactly
export default defineConfig({
  plugins: [react()],
  base: '/for_alpika/',
})
