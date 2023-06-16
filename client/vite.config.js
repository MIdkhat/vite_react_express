import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v1': 'http://localhost:8080/',
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        format: 'es',
        strict: false,
        dir: 'dist/',
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       quietDeps: true,
  //     //   additionalData: `
  //     //   // @use "./src/sass/index.scss" as *;
  //     // `,
  //     },
  //   },
  // },
})
