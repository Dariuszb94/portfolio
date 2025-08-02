import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    target: 'es2020', // Modern target for better optimization
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js into its own chunk (heavy library)
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate React into its own chunk
          'react-vendor': ['react', 'react-dom'],
          // Separate styled-components and typewriter
          ui: ['styled-components', 'typewriter-effect'],
        },
      },
    },
    // Disable source maps for production for better performance
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Additional optimizations
    reportCompressedSize: false, // Faster builds
    assetsInlineLimit: 8192, // Inline small assets
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
      'styled-components',
      'typewriter-effect',
    ],
    // Force pre-bundling for better cache
    force: true,
  },
  // Performance optimizations
  server: {
    hmr: {
      overlay: false, // Disable error overlay for better dev performance
    },
  },
});
