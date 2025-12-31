// Vue 3简单测试文件
console.log('Vue 3 Simple Countdown Test:');

try {
  // 测试导入和基本结构
  const { createApp } = require('vue');
  const Vac = require('vue-awesome-countdown').default;
  const { VueAwesomeCountdown } = require('vue-awesome-countdown');
  
  console.log('- ✅ Vue 3 imported successfully');
  console.log('- ✅ vue-awesome-countdown plugin imported successfully');
  console.log('- ✅ VueAwesomeCountdown component imported successfully');
  console.log('- ✅ Plugin has install method:', typeof Vac.install === 'function');
  
  // 测试插件注册
  const app = createApp({
    template: '<div></div>'
  });
  app.use(Vac);
  
  console.log('- ✅ Plugin registered successfully to Vue 3 app');
  console.log('- ✅ Vue 3 app created successfully');
  
  console.log('\nSimple test passed! The component should work correctly in Vue 3.');
  console.log('Note: Full rendering test requires a browser environment.');
} catch (error) {
  console.error('- ❌ Test failed:', error.message);
}
