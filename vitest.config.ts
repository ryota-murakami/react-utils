import path from 'node:path'

import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: [
      './**/*.test.ts',
      './**/*.test.tsx',
      './**/*.test.js',
      './**/*.test.jsx',
    ],
    setupFiles: ['./setupTests.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
