import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3055",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      '/socket.io': {
        target: 'ws://localhost:5174',
        ws: true,
      },
    },

  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  }
})
