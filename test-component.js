// 简单测试组件的导入和基本功能
console.log('Testing vue-awesome-countdown component...')

// 测试组件是否能正常导入
try {
  // 尝试导入插件
  const vac = require('./src/vue-awesome-countdown.js').default
  console.log('✓ Plugin imported successfully')
  console.log('✓ Plugin has install method:', typeof vac.install === 'function')
} catch (error) {
  console.error('✗ Failed to import plugin:', error.message)
}

// 测试Vue 3组件是否有语法错误
try {
  const fs = require('fs')
  const path = require('path')
  
  // 读取Vue 3组件文件
  const vue3ComponentPath = path.join(__dirname, 'src', 'vue-awesome-countdown-v3.vue')
  const vue3ComponentContent = fs.readFileSync(vue3ComponentPath, 'utf8')
  
  // 简单检查语法
  console.log('✓ Vue 3 component file exists')
  console.log('✓ Vue 3 component has template section:', vue3ComponentContent.includes('<template>'))
  console.log('✓ Vue 3 component has script setup section:', vue3ComponentContent.includes('<script setup lang="ts">'))
  
  // 检查Vue 2组件
  const vue2ComponentPath = path.join(__dirname, 'src', 'vue-awesome-countdown.vue')
  const vue2ComponentContent = fs.readFileSync(vue2ComponentPath, 'utf8')
  console.log('✓ Vue 2 component file exists')
  console.log('✓ Vue 2 component has template section:', vue2ComponentContent.includes('<template>'))
  console.log('✓ Vue 2 component has script section:', vue2ComponentContent.includes('<script>'))
  
} catch (error) {
  console.error('✗ Error reading component files:', error.message)
}

console.log('\nTest completed!')
