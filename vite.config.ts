  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import path from 'path'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: '/VK-Marusya/', 
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables" as *;`
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  })
