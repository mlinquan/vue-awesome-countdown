---
home: true
heroImage: /vac_logo.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 易用
  details: 代码简洁的同时有着丰富的插槽(slots)和方法(methods)，可应对多种场景。
- title: 高精度
  details: 整个流程下来与预期结束时间误差仅为1~3毫秒。
- title: 轻量级
  details: gzip压缩后不到2kb。
footer: MIT Licensed | Copyright © 2018-present Lin Quan | 自豪地采用Vuepress
---
<template>
<ClientOnly>
<h1>倒计时：
  <countdown :left-time="101000"> <!-- 101秒 -->
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">干完!</span>
  </countdown>
</h1>
</ClientOnly>
</template>

``` vue
<h1>倒计时：
  <countdown :left-time="101000"> <!-- 101秒 -->
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">干完!</span>
  </countdown>
</h1>
```

::: warning 注意
请确保你的 Node.js 版本 >= 8，<br>
Vue.js 版本 >= 2.5.0 或 Vue 3，<br>
支持 TypeScript。
:::
