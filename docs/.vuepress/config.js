const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'StreamTV Developer Portal',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * The base URL the site will be deployed at.
   *
   * ref：https://vuepress.vuejs.org/config/#base
   */
  base: "/docs/",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Analyzer',
        link: 'https://analyzer.own3d.dev/'
      },
      {
        text: 'Documentation',
        link: '/docs/'
      },
      {
        text: 'Status',
        link: 'https://status.own3d.tv/'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/NyejWgn/'
      },
      {
        text: 'Customer Support',
        link: 'https://www.own3d.tv/contact/'
      },
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'API Documentation',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            '',
            'authorization',
            'own3d-pro-api',
            'own3d-tv-api',
            'jukebox-api',
            'examples',
          ]
        },
        {
          title: 'OWN3D Pro Widgets',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            'widgets/',
          ]
        },
        {
          title: 'OWN3D Pro Chatbot',
          sidebarDepth: 2,
          collapsable: false,
          children: [
            'chatbot/',
            'chatbot/auto-mod',
            'chatbot/timers',
            'chatbot/giveaways',
            'chatbot/command-settings',
            'chatbot/custom-commands',
            'chatbot/template-reference',
            'chatbot/all-commands',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
