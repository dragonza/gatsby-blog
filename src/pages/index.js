import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { graphql, Link } from 'gatsby'
import '../styles/prism-override.css'
import { date } from './index.module.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

const IndexPage = (props) => {
  const postList = props.data.allMdx

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} className="link" key={i}>
          <div className="post-list">
            <h2>{node.frontmatter.title}</h2>
            <span className={date}>{node.frontmatter.date}</span>
            <p>{node.frontmatter.description}</p>
            <div>{node.excerpt}</div>
          </div>
        </Link>
      ))}
    </Layout>
  )
}
export default IndexPage
export const listQuery = graphql`
  query ListQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM Do, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
