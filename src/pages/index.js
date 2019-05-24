import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { graphql, Link } from 'gatsby'
import ToggleTheme from '../components/ToggleTheme'

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark

  return (
    <Layout>
      <ToggleTheme />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link" key={i} >
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}
export default IndexPage
export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
