import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import blogStyle from './blog.module.css'


const Blog = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link" key={i} >
          <div className="post-list">
            <h1 className={blogStyle.blogTitle}>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}
export default Blog;
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
