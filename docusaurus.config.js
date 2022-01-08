// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WatcherDAO',
  tagline: 'Entity analytics by and for the Solana community',
  url: 'https://watcherdao.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'WatcherDAO', // Usually your GitHub org/user name.
  projectName: 'WatcherDAO', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/WatcherDAO/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/WatcherDAO/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WatcherDAO',
        logo: {
          alt: 'WatcherDAO',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://vote.watcherdao.org',
            label: 'Vote',
            position: 'left',
          },
          {
            href: 'https://www.entitylists.org',
            label: 'Entiy Lists',
            position: 'right',
          },
          {
            href: 'https://www.solanatokens.info',
            label: 'Tokens',
            position: 'right',
          },
          {
            href: 'https://www.solanadaos.info',
            label: 'DAOs',
            position: 'right',
          },
          {
            href: 'https://www.solanafees.info',
            label: 'Fees',
            position: 'right',
          },
          {
            href: 'https://github.com/WatcherDAO',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/watcherdao/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/WatcherDAO',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WatcherDAO`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
