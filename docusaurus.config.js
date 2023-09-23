// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to the Dasset documentation!',
  tagline: 'Learn how to use Dasset',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://planetx-labs.github.io',
  url: 'https://docs.planetxlabs.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/Documentation/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'PlanetX-Labs', // Usually your GitHub org/user name.
  organizationName: 'PlanetX-Labs',
  projectName: 'Documentation', // Usually your repo name.
  trailingSlash: false, //used for Github pages specifically

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PlanetX-Labs/planetx-labs.github.io/tree/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'PlanetX Labs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/PXL_cutout_lockup_darktext.svg',
          srcDark: 'img/PXL_cutout_lockup_white.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/blog', label: 'adsf', position: 'left'},
          {
            href: 'https://github.com/PlanetX-Labs/planetx-labs.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/planetxlabs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/planetx_labs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'PlanetX Labs',
                href: 'https://planetxlabs.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PlanetX-Labs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PlanetX Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
