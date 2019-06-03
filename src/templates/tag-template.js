import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import tagTemplateStyles from './tag-templete.module.css'
// import "../pages/post.css"

function Tags(props) {
  const posts = props.data.allMarkdownRemark.edges
  const { tag } = props.pageContext
  return (
    <Layout>
      <h1>{`Available posts in ${tag}`}</h1>
      <div className="tags">
        <ul>
          {posts.map(({ node }, i) => (
            <li>
              <Link to={node.fields.slug} key={i} className={tagTemplateStyles.link}>
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
