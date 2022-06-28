module.exports = {
  title: 'Formik MUI',
  tagline: 'Easily combine Formik with MUI',
  url: 'https://stackworx.github.io/',
  baseUrl: '/formik-mui/',
  favicon: 'img/favicon.ico',
  organizationName: 'stackworx',
  projectName: 'formik-mui',
  themeConfig: {
    navbar: {
      title: 'Formik MUI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/guide/getting-started', label: 'Guide', position: 'left' },
        { to: 'docs/api/mui', label: 'API', position: 'left' },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/stackworx/formik-mui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Ciaran Liedeman, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/stackworx/formik-mui/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
