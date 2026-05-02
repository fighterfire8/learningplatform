// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// 
// export default defineConfig({
  // plugins: [vue()],
  // 关键：支持多页面跳转
  // build: {
    // rollupOptions: {
      // input: {
        // main: './index.html',
        // studyunit: './StudyUnit.html'
      // }
    // }
  // }
// })
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // 只留主页！
      }
    }
  }
})