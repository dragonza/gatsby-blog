/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
      },
    },
  })
}

const createBlogPost = (createPage, posts) => {
  const blogTemplate = path.resolve('./src/templates/blog-post.js')

  posts.forEach((post, index) => {
    createPage({
      path: post.fields.slug,
      component: blogTemplate,
      context: {
        slug: post.fields.slug,
        prev: index === 0 ? null : posts[index - 1],
        next: index === posts.length - 1 ? null : posts[index + 1],
      }, // additional data can be passed via context
    })
  })
}

const createTagPage = (createPage, edges) => {
  const tagsTemplate = path.resolve('./src/templates/tag-template.js')
  //All tags
  let allTags = []
  // Iterate through each post, putting all found tags into `allTags array`
  _.each(edges, (edge) => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      allTags = allTags.concat(edge.node.frontmatter.tags)
    }
  })
  allTags = _.uniq(allTags)

  allTags.forEach((tag) => {
    createPage({
      path: `tags/${_.kebabCase(tag)}/`,
      component: tagsTemplate,
      context: {
        tag,
      },
    })
  })
}

const PAGINATION_OFFSET = 2

const createPaginatedPages = (createPage, edges, pathPrefix, context) => {
  const pages = edges.reduce((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET)

    if (!acc[pageIndex]) {
      acc[pageIndex] = []
    }

    acc[pageIndex].push(value.node.id)

    return acc
  }, [])

  pages.forEach((page, index) => {
    const previousPagePath = `${pathPrefix}/${index + 1}`
    const nextPagePath = index === 1 ? pathPrefix : `${pathPrefix}/${index - 1}`

    createPage({
      path: index > 0 ? `${pathPrefix}/${index}` : `${pathPrefix}`,
      component: path.resolve(`src/templates/blog.js`),
      context: {
        pagination: {
          page,
          nextPagePath: index === 0 ? null : nextPagePath,
          previousPagePath:
            index === pages.length - 1 ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
        },
        ...context,
      },
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
            title
            tags
          }
          frontmatter {
            tags
            date(formatString: "MMMM DD, YYYY")
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.nodes
  console.log('posts', posts)
  createBlogPost(createPage, posts)
  // createTagPage(createPage, edges)

}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
      },
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: `blog` })
    createNodeField({
      name: 'id',
      node,
      value: node.id,
    })

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    })

    createNodeField({
      name: 'description',
      node,
      value: node.frontmatter.description,
    })

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })

    createNodeField({
      name: 'date',
      node,
      value: node.frontmatter.date || '',
    })

    // createNodeField({
    //   name: 'banner',
    //   node,
    //   banner: node.frontmatter.banner,
    // });
    //
    createNodeField({
      name: 'tags',
      node,
      value: node.frontmatter.tags || [],
    })

    createNodeField({
      name: 'keywords',
      node,
      value: node.frontmatter.keywords || [],
    })
  }
}
