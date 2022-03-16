// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'How To Extreme Networks',
  tagline: 'All technologies',
  url: 'https://tchevalleraud.github.io',
  baseUrl: '/how-to-extremenetworks/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/extremenetworks.ico',
  organizationName: 'tchevalleraud', // Usually your GitHub org/user name.
  projectName: 'how-to-extremenetworks', // Usually your repo name.


  i18n:{
    defaultLocale: 'en',
    locales: ['en', 'fr']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  themeConfig:
    ({
      navbar: {
        style: 'dark',
        title: 'How to Extreme Networks',
        logo: {
          alt: 'Extreme Networks',
          src: 'img/extremenetworks-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'fabricspbm',
            label: 'Fabric SPBm',
          },
            /**
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'fabricip',
            label: 'Fabric IP',
          },
             **/
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'xiqse',
            label: 'XIQ-SE',
          },
          {
            type: "localeDropdown",
            position: "right"
          },
          {
            href: 'https://github.com/tchevalleraud/how-to-extremenetworks',
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
                label: 'Extreme Networks Website',
                href: 'https://www.extremenetworks.com/',
              },
              {
                label: 'Extreme Networks Github',
                href: 'https://github.com/extremenetworks',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Project',
                href: 'https://github.com/tchevalleraud/how-to-extremenetworks',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} How To Extreme Networks, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
