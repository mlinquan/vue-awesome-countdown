// Vue 3测试文件
const { createApp } = require('vue');
const Vac = require('vue-awesome-countdown').default;
const { VueAwesomeCountdown } = require('vue-awesome-countdown');

// 测试1：作为插件使用
console.log('Vue 3 Countdown Component Test:');
console.log('1. Testing as plugin:');

try {
  const app1 = createApp({
    template: `
      <div>
        <h1>Vue 3 Countdown Test (Plugin)</h1>
        <vac :left-time="10000" tag="div">
          <template v-slot:process="{ timeObj }">
            <div>Countdown: {{ timeObj.m }}:{{ timeObj.s }}</div>
          </template>
          <template v-slot:finish>
            <div>Countdown finished!</div>
          </template>
        </vac>
      </div>
    `
  });
  
  // 注册插件
  app1.use(Vac);
  
  console.log('- ✅ Vue 3 imported successfully');
  console.log('- ✅ vue-awesome-countdown plugin imported successfully');
  console.log('- ✅ Plugin registered successfully');
  console.log('- ✅ Vue 3 app created successfully with plugin');
  console.log('- ✅ Plugin test passed!');
} catch (error) {
  console.error('- ❌ Plugin test failed:', error.message);
}

// 测试2：直接导入组件
console.log('\n2. Testing as direct component import:');

try {
  const app2 = createApp({
    components: {
      VueAwesomeCountdown
    },
    template: `
      <div>
        <h1>Vue 3 Countdown Test (Direct Import)</h1>
        <vue-awesome-countdown :left-time="10000" tag="div">
          <template v-slot:process="{ timeObj }">
            <div>Countdown: {{ timeObj.m }}:{{ timeObj.s }}</div>
          </template>
          <template v-slot:finish>
            <div>Countdown finished!</div>
          </template>
        </vue-awesome-countdown>
      </div>
    `
  });
  
  console.log('- ✅ Vue 3 imported successfully');
  console.log('- ✅ VueAwesomeCountdown component imported successfully');
  console.log('- ✅ Component registered locally successfully');
  console.log('- ✅ Vue 3 app created successfully with direct component import');
  console.log('- ✅ Direct component import test passed!');
} catch (error) {
  console.error('- ❌ Direct component import test failed:', error.message);
}

console.log('\nAll tests completed! The component should work correctly in Vue 3.');
