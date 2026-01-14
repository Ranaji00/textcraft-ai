import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:true,
    port: 5174, // This changes the frontend server port (make sure it's not in use)
    proxy: {
      '/user': 'http://localhost:5000', // Replace with your actual backend URL
    },
   },

  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "remixicon/fonts/remixicon.css";`,
      },
    },
  },


  
})



