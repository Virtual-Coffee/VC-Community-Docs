// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

const config = {
  title: 'Virtual Coffee Community Docs',
  tagline: 'Community Building Resources by Virtual Coffee Community',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://virtualcoffee.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

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
          // Make editUrl dynamic
          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/Virtual-Coffee/VC-Community-Docs/edit/main/${versionDocsDirPath}/${docPath}`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
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
  },
}

export default config;
