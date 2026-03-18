// vite.config.js (or vite.config.ts)
import { defineConfig } from 'vite';
// If using TypeScript and Node.js path module for absolute path resolution
// import path from 'node:path'; 

export default defineConfig({
  // ... other configurations
  resolve: {
    alias: {
      // Map '@' to the '/src' directory
      '@': '/src',
      // or using node:path for explicit absolute paths (especially for monorepos)
      // '@': path.resolve(__dirname, 'src'), 
    },
  },
});
