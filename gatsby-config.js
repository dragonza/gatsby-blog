/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Dragonza.io',
    description:
      'Just a developer who loves coding, guitar playing, video games and dragons',
    author: 'Alex Vuong',
    siteUrl: 'https://dragonza.io',
    menuLinks: [
      {
        name: 'Blog',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-google-gtag',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dragonza-blog`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#22992e`,
        theme_color: `#2a9928`,
        display: `minimal-ui`,
        // display: `standalone`,
        icon: `src/images/logo-dragon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
      __key: 'pages',
    },
  ],
}
