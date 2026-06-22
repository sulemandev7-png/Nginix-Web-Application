import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['devpro.biz', 'www.devpro.biz'],
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
})