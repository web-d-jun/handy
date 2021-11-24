import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  build: {
    cssTarget: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/assets/scss/index.scss';",
        charset: false,
      },
    },
  },
});
