import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      external:['react','react-dom', 'react-bootstrap/Carousel', 'react-bootstrap/Button', 'react-bootstrap/Card']
    }
  },
  base:"/ekene-repo"
})
