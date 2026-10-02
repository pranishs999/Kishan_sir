import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { translationApiPlugin } from './src/plugins/translationApi.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), translationApiPlugin()],
})
