import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "oBerry",
  description: "Modern, reactive, jQuery-like API without needing a build setup or full framework.",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }  ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/introduction', activeMatch: '/docs/*' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/docs/introduction' },
          { text: 'Quick Start', link: '/docs/quick-start' },
        ],
        collapsed: false
      },
      {
        text: 'API Reference',
        items: [
          { text: '$() function', link: '/docs/selector' },
          {
            text: 'Element Wrapper',
            items: [
              { text: '.id()', link: '/docs/id' },
              {
                text: '.class',
                items: [
                  { text: '.get()', link: '/docs/class/get' },
                  { text: '.add()', link: '/docs/class/add' },
                  { text: '.toggle()', link: '/docs/class/toggle' },
                  { text: '.remove()', link: '/docs/class/remove' },
                  { text: '.has()', link: '/docs/class/has' },
                ]
              },
              { text: '.is()', link: '/docs/is' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oberryjs/oBerry' }
    ]
  }
})
