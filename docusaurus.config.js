// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LrcAPI使用文档',
  tagline: '歌词API开发部署指南',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.lrc.cx',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HisAtri', // Usually your GitHub org/user name.
  projectName: 'LrcAPI', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
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
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.png',
      navbar: {
        title: 'LrcAPI使用文档',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            href: '/docs/sim/goods/',
            label: '大流量精品卡',
            position: 'left',
          },
          {
            href: 'https://github.com/HisAtri/LrcApi',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '友情链接',
            items: [
              {
                label: '音流',
                href: 'https://aqzscn.cn/archives/stream-music-versions',
              },
              {
                label: '光辉ACG',
                href: 'https://ghacg.com',
              }
            ],
          },
          {
            title: '联系方式',
            items: [
              {
                label: '电子邮件',
                href: 'mailto:yz@xms.mx',
              },
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'Twitter',
                href: '#',
              },
            ],
          },
          {
            title: '更多内容',
            items: [
              {
                label: '赞助项目',
                href: '/docs/Donate',
              },
              {
                label: '致谢',
                href: '/docs/Acknowledgments',
              },
            ],
          },
        ],
        copyright: `Copyright &copy 2022-${new Date().getFullYear()} LrcAPI Document Site. Built with Docusaurus.<br />
如未特别注明，本站内容使用<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0/知识共享署名-非商业性使用-相同方式共享 4.0 国际协议</a>，禁止商业使用。<br />
站内链接的其他作者项目，其著作权归属于原作者，适用于其本身的开源协议。本网站仅提供链接，不对这些项目的内容和使用负责。<br />
本站 Logo 并非使用CC BY-NC-SA 4.0协议提供。不得在未经授权的情况下使用本站 Logo。<br />
Build版本20241119<br />
<img src="/img/logo.svg" alt="网站Logo" width="50" height="50" /><br />`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
