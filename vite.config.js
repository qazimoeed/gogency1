
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-intersection-observer'],
    },
  },
   resolve: {
    alias: {
      'react-intersection-observer': 'react-intersection-observer', // Ensure this matches the package name in node_modules
    },
  },
});
 
 
