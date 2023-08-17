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
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `UA-47069149-2`,
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                },
                gtagConfig: {
                    anonymize_ip: true,
                },
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
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
                gatsbyRemarkPlugins: [
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1035,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: true,
                        },
                    },
                ],
            },
        },
        // {
        //     resolve: 'gatsby-transformer-remark',
        //     options: {
        //         plugins: [
        //             {
        //                 resolve: `gatsby-remark-images`,
        //                 options: {
        //                     maxWidth: 1035,
        //                 },
        //             },
        //         ],
        //     },
        // },
        'gatsby-remark-images',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
    ],
}
