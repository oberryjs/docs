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
            text: 'Reactivity',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/docs/reactivity' },
              { text: '$ref', link: '/docs/reactivity/ref' },
              { text: '$computed', link: '/docs/reactivity/computed' },
              { text: '$effect', link: '/docs/reactivity/effect' },
              { text: '$effectScope', link: '/docs/reactivity/effect-scope' },
            ],
          },
          {
            text: 'Components',
            collapsed: false,
            items: [
              { text: '$component', link: '/docs/component' }
            ]
          },
          {
            text: 'Element Creation',
            collapsed: false,
            items: [
              { text: '$new', link: '/docs/new' }
            ]
          },
          {
            text: 'Element Wrapper',
            collapsed: false,
            items: [
              { text: '.id()', link: '/docs/wrapper/id' },
              {
                text: 'Class Manipulation',
                collapsed: false,
                items: [
                  { text: '.class.get()', link: '/docs/wrapper/class/get' },
                  { text: '.class.add()', link: '/docs/wrapper/class/add' },
                  { text: '.class.toggle()', link: '/docs/wrapper/class/toggle' },
                  { text: '.class.remove()', link: '/docs/wrapper/class/remove' },
                  { text: '.class.has()', link: '/docs/wrapper/class/has' },
                ],
              },
              {
                text: 'Content Manipulation',
                collapsed: false,
                items: [
                  { text: '.html()', link: '/docs/wrapper/html' },
                  { text: '.text()', link: '/docs/wrapper/text' },
                  { text: '.empty()', link: '/docs/wrapper/empty' },
                  { text: '.append()', link: '/docs/wrapper/append' },
                  { text: '.prepend()', link: '/docs/wrapper/prepend' },
                  { text: '.after()', link: '/docs/wrapper/after' },
                  { text: '.before()', link: '/docs/wrapper/before' },
                ],
              },
              {
                text: 'Dimensions',
                collapsed: false,
                items: [
                  { text: '.height()', link: '/docs/wrapper/dimensions/height' },
                  { text: '.width()', link: '/docs/wrapper/dimensions/width' },
                ]
              },
              {
                text: 'Position',
                collapsed: false,
                items: [
                  { text: '.position()', link: '/docs/wrapper/position' },
                  { text: '.offset()', link: '/docs/wrapper/position/offset' },
                ]
              },
              {
                text: "Binding",
                collapsed: false,
                items: [
                  { text: '.bind()', link: '/docs/wrapper/bind'},
                  { text: '.bindInput()', link: '/docs/wrapper/bind/input'},
                  { text: '.bindHTML()', link: '/docs/wrapper/bind/html'},
                  { text: '.bindAttr()', link: '/docs/wrapper/bind/attr'},
                ]
              },
              { text: '.css()', link: '/docs/wrapper/css' },
              { text: '.is()', link: '/docs/wrapper/is' },
              { text: '.remove()', link: '/docs/wrapper/remove' },
              { text: '.value()', link: '/docs/wrapper/value' },
              {
                text: "Attributes",
                collapsed: false,
                items: [
                  { text: '.attr()', link: '/docs/wrapper/attributes/attr'},
                  { text: '.data()', link: '/docs/wrapper/attributes/data'},
                ]
              },
              {
                text: "Event Listeners",
                collapsed: false,
                items: [
                  { text: '.on()', link: '/docs/wrapper/event-listeners/on'},
                  { text: '.off()', link: '/docs/wrapper/event-listeners/off'},
                  { text: '.once()', link: '/docs/wrapper/event-listeners/once'},
                ]
              },
              {
                text: "Visibility",
                collapsed: false,
                items: [
                  { text: '.show()', link: '/docs/wrapper/visibility/show'},
                  { text: '.hide()', link: '/docs/wrapper/visibility/hide'},
                  { text: '.toggle()', link: '/docs/wrapper/visibility/toggle'},
                ]
              },
              {
                text: "Element Navigation",
                collapsed: false,
                items: [
                  { text: '.parent()', link: '/docs/wrapper/navigation/parent'},
                  { text: '.children()', link: '/docs/wrapper/navigation/children'},
                  { text: '.siblings()', link: '/docs/wrapper/navigation/siblings'},
                  { text: '.find()', link: '/docs/wrapper/navigation/find'},
                  { text: '.closest()', link: '/docs/wrapper/navigation/closest'},
                ]
              },
              {
                text: "Filtering and Selection",
                collapsed: false,
                items: [
                  { text: '.filter()', link: '/docs/wrapper/filtering/filter'},
                  { text: '.not()', link: '/docs/wrapper/filtering/not'},
                  { text: '.eq()', link: '/docs/wrapper/filtering/eq'},
                  { text: '.first()', link: '/docs/wrapper/filtering/first'},
                  { text: '.last()', link: '/docs/wrapper/filtering/last'},
                  { text: '.even()', link: '/docs/wrapper/filtering/even'},
                  { text: '.odd()', link: '/docs/wrapper/filtering/odd'},
                ]
              },
              {
                text: "Iteration",
                collapsed: false,
                items: [
                  { text: '.forEach()', link: '/docs/wrapper/iteration/forEach'},
                  { text: '.map()', link: '/docs/wrapper/iteration/map'},
                  { text: '.reduce()', link: '/docs/wrapper/iteration/reduce'},
                ]
              },
              { text: '.getArray()', link: '/docs/wrapper/getArray'},
              { text: '.clone()', link: '/docs/wrapper/clone'},
              { text: '.length()', link: '/docs/wrapper/length'},
              { text: '.isEmpty()', link: '/docs/wrapper/isEmpty'},
            ]
          },
          { text: 'Plugin class', link: '/docs/plugin' },
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oberryjs/oBerry' }
    ]
  }
})
