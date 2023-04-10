import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('simple-sample')
      }
    }
  })],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'simple-sample',
      fileName: 'simple-sample',
    },
  },
  define: {
    'process.env': process.env
  }
})
