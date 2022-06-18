module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Dzoo NTU 文件',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Documentation Site for Dzoo NTU | 國立台灣大學 Dzoo',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#F0FDF4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'og:image', content: '/images/default-ogimage.jpg' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap' }]
  ],

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
        text: '開始使用 Dzoo',
        link: '/getting-started/'
      },
      {
        text: '身份與權限',
        link: '/permissions/'
      },
      {
        text: '使用者與平台條款',
        link: '/terms-and-conditions/'
      }
    ],
    sidebar: {
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['sitemap', {
      hostname: 'https://docs.dzoo.ntu.edu.tw',
      exclude: ['/404.html']
    }],
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: ($page, $site) => `${$page.title} | ${$site.title}`
    }]
  ]
}
