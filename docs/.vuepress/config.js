module.exports = {
  dest: '../vuepress',
  contentLoading: true,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-awesome-countdown',
      description: 'Countdown plug-in with high performance and high accuracy for Vue 2.5.0+.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vue-awesome-countdown',
      description: '适用于Vue 2.5.0+的高性能高精度倒计时插件。'
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
          '/plugin/': getPluginSidebar('Plugin', 'Introduction'),
          '/theme/': getThemeSidebar('Theme', 'Introduction'),
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
          '/zh/plugin/': getPluginSidebar('插件', '介绍'),
          '/zh/theme/': getThemeSidebar('主题', '介绍')
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

function getPluginSidebar (groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ['', introductionA],
        'using-a-plugin',
        'writing-a-plugin',
        'life-cycle',
        'option-api',
        'context-api',
        'official'
      ]
    },
  ]
}

function getThemeSidebar (groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ['', introductionA],
        'using-a-theme',
        'writing-a-theme',
        'option-api',
        'default-theme-config'
      ]
    },
  ]
}