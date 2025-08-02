import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js into its own chunk
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate React into its own chunk
          'react-vendor': ['react', 'react-dom'],
          // Separate styled-components
          styles: ['styled-components'],
        },
      },
    },
    // Enable source maps for better debugging
    sourcemap: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1500, // Increase to 1.5MB to account for Three.js
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
    ],
  },
});
