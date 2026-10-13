import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        labs: resolve(import.meta.dirname, 'labs/index.html'),
      },
    },
  },
});
