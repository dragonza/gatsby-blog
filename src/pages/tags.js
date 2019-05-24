import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout';
// import './post.css'

function TagsPage(props) {

  const data = props.data.allMarkdownRemark.group

  return (
    <Layout>
      <div className="tags">
        <h1>All tags</h1>
        {
          data.map((tag, i) => (
            <Link to={`/${tag.fieldValue}`} key={i}>
              {tag.fieldValue} {`(${tag.totalCount})`}
            </Link>
          ))
        }
      </div>
    </Layout>
  )

}

export default TagsPage;


export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }

`
