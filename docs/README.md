---
home: true
heroImage: /vac_logo.png
actionText: Get Started →
actionLink: /zh/guide/
features:
- title: Easy to use
  details: Simple code with rich slots and methods, can cope with a variety of scenarios.
- title: High-precision
  details: The error between the whole process and the expected end time is only 1-3 milliseconds.
- title: Lightweight
  details: Gzip compression is less than 2 kb.
footer: MIT Licensed | Copyright © 2018-present Lin Quan | Powered by Vuepress
---
<template>
<ClientOnly>
<h1>Countdown: 
  <countdown :left-time="101000"> <!-- 101 seconds -->
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">Done!</span>
  </countdown>
</h1>
</ClientOnly>
</template>

``` vue
<h1>Countdown: 
  <countdown :left-time="101000"> <!-- 101 seconds -->
    <span
      slot="process"
      slot-scope="{ timeObj }">
        {{ timeObj.ceil.s }}
      </span>
      <span slot="finish">Done!</span>
  </countdown>
</h1>
```

::: warning COMPATIBILITY NOTE
vue-awesome-countdown requires Node.js >= 8, <br>
Vue.js >= 2.5.0 or Vue 3, <br>
TypeScript is supported.
:::
