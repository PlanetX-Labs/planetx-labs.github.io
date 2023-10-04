// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dasset',
  tagline: 'Get started owning your data today',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.planetxlabs.io',
  baseUrl: '/',

  // GitHub pages deployment config.
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
      image: 'img/dasset_wordmark.svg',
      navbar: {
        title: '',
        logo: {
          alt: 'PlanetX Labs Logo',
          src: 'img/dasset_wordmark.svg',
        //  srcDark: 'img/dasset_light.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
            to: '/docs'
          },
          // {to: '/blog', label: 'adsf', position: 'left'},
          {
            href: 'https://github.com/PlanetX-Labs/planetx-labs.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      //announcementBar: {
      //  id: 'support_us',
      //  content:
      //    'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //  backgroundColor: '#fafbfc',
      //  textColor: '#091E42',
      //  isCloseable: false,
      //},
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Documentation',
                to: '/docs/getting-started/intro',
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
