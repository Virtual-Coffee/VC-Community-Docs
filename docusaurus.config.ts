// See: https://docusaurus.io/docs/api/docusaurus-config

import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import type { PluginOptions as SearchLocalOptions } from '@easyops-cn/docusaurus-search-local'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: 'Virtual Coffee Community Docs',
  tagline: 'Community Building Resources by Virtual Coffee Community',
  favicon: 'img/favicon-32x32.png',

  url: 'https://vc-community-docs.netlify.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Virtual-Coffee/VC-Community-Docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
      } satisfies SearchLocalOptions,
    ],
  ],

  themeConfig: {
    image: 'img/vc-social-card.png',
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    navbar: {
      title: 'Virtual Coffee Community Docs',
      logo: {
        alt: 'Virtual Coffee',
        src: 'img/virtual-coffee-mug-circle-bordered.svg',
      },
      items: [
        {
          href: 'https://github.com/Virtual-Coffee/VC-Community-Docs/blob/main/CONTRIBUTING.md',
          label: 'Contributing Guidelines',
          position: 'left',
        },
        {
          href: 'https://virtualcoffee.io',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://dev.to/virtualcoffee',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/Virtual-Coffee/VC-Community-Docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'Virtual Coffee',
        src: 'img/virtual-coffee-full.svg',
        href: 'https://virtualcoffee.io',
        width: 250,
      },
      links: [
        {
          label: 'X',
          href: 'https://x.com/virtualcoffeeio',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/virtual-coffee/',
        },
        {
          label: 'GitHub Discussion',
          href: 'https://github.com/orgs/Virtual-Coffee/discussions',
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Virtual Coffee Community Documentation Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
