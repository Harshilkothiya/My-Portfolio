import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000,
    open: true
  }
});

// Set production build output to `build` so platforms like Render can find it
// (Render's default publish directory is often `build`; change Render settings
// instead if you prefer to keep `dist`).
