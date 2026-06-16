import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,  
     allowedHosts: 'all',      // ← explicitly declare port
    strictPort: true,  // ← fail if port is taken (no silent port switching)
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
})