import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import blogStyle from './blog.module.css'


const Blog = props => {
  // const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      test
    </Layout>
  )
}
export default Blog;

