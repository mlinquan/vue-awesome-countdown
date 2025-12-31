module.exports = {
  dest: 'vuepress',
  contentLoading: true,
  head: [
    ['link', { type: 'text/css', rel: 'stylesheet', href: '/css/common.css' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VAC (vue-awesome-countdown)',
      description: 'Countdown plug-in with high performance and high accuracy for Vue 2.5.0+ and Vue 3, with TypeScript support.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VAC (vue-awesome-countdown)',
      description: '适用于Vue 2.5.0+和Vue 3的高性能高精度倒计时插件，支持TypeScript。'
    }
  },
  themeConfig: {
    repo: 'mlinquan/vue-awesome-countdown',
    editLinks: true,
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    // algolia: {
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // },
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar('Guide'),
          '/examples/': getExamplesSidebar('Examples', 'Methods')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/guide/': getGuideSidebar('指南'),
          '/zh/examples/': getExamplesSidebar('示例', '方法')
        }
      }
    }
  }
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    }/*,
    {
      title: groupB,
      collapsable: false,
      children: [
        'permalinks',
        'markdown-slot'
      ]
    }*/
  ]
}

function getExamplesSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'send-sms-code',
        'event-start-time'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'methods/start-countdown',
        'methods/stop-countdown',
        'methods/switch-countdown',
        'methods/finish-countdown',
        'methods/all-methods'
      ]
    },
  ]
}