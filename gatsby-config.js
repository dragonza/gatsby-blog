module.exports = {
  siteMetadata: {
    title: 'Dragonza.io',
    description:
      'Just an ordinary developer who loves coding, guitar playing, video games and dragons',
    author: 'Alex Vuong',
    siteUrl: 'https://dragonza.io',
    menuLinks: [
      {
        name: 'Blog',
        link: '/',
      },
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Contact',
        link: '/contact'
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
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
        // Repeat config for gatsby-remark-images here to work around bug in gatsby-plugin-mdx
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035
            }
          },
        ],
        extensions: ['.md']
      }
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
    'gatsby-plugin-dark-mode',
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
  ],
}
