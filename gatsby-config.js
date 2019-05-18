module.exports = {
  siteMetadata: {
    title: 'Dragonza.io',
    description:
      'Just an ordinary developer who loves coding, guitar playing, video games and dragons',
    author: 'Dragonza',
    siteUrl: 'https:/dragonza.io',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Contact',
        link: '/contact'
      },
      {
        name: 'About',
        link: '/about'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
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
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-47069149-2`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
}
