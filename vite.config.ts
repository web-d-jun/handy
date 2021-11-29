import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path'

export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  build: {
    minify: 'terser',
    cssCodeSplit: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ],
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
