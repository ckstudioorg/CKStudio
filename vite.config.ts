import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  server: { port: 3000, host: '127.0.0.1' },
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    rolldownOptions: {
      output: {
        // Big libraries that rarely change get their own files, so browsers keep them cached between site updates
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/ },
            { name: 'animation', test: /node_modules[\\/](gsap|lenis|motion|motion-dom|motion-utils|framer-motion)[\\/]/ },
          ],
        },
      },
    },
  },
});
