// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

const config = {
  title: 'Virtual Coffee Community Docs',
  tagline: 'LOREM IPSUM',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://virtualcoffee.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Virtual-Coffee', // Usually your GitHub org/user name.
  projectName: 'VC-Community-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Virtual-Coffee/VC-Community-Docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/virtual-coffee-mug-square.png',
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    navbar: {
      title: 'Virtual Coffee',
      logo: {
        alt: 'Virtual Coffee Logo',
        src: 'img/virtual-coffee-mug.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebarPath',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://dev.to/virtualcoffee',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/Virtual-Coffee/VC-Community-Docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
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
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://virtualcoffee.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Virtual-Coffee/VC-Community-Docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Virtual Coffee Community Documentation Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
}

export default config;
