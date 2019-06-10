import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Metatags from "../components/SEO"
import Share from "../components/Share"
import PrevNext from "../components/PrevNext"
import blogPostStyles from './blog-post.module.css'

function BlogPost({ pageContext, data, location }) {
  const post = data.markdownRemark
  const url = data.site.siteMetadata.siteUrl
  const { title, description, tags, date } = post.frontmatter
  const thumbnail =
    post.frontmatter.image && post.frontmatter.image.childImageSharp.resize.src
  const { prev, next } = pageContext

  return (
    <Layout>
      <Metatags
        title={title}
        description={description}
        thumbnail={url + thumbnail}
        url={url}
        pathname={location.pathname}
      />
      <div className="blog-post-container">
        <h1>{title}</h1>
        <div>
          <span className={blogPostStyles.date}>{date}</span>
        </div>
        {<Img fluid={post.frontmatter.image.childImageSharp.fluid} />}
        <div className="blog-post-content">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div>
          <span>Tagged in </span>
          {tags.map((tag, i) => (
            <a href={`/${tag}`} key={i} style={{ marginLeft: "10px" }} className={`tag-item ${blogPostStyles.tagItem}`}>{tag}</a>
          ))}
        </div>
        <Share title={title} url={url} pathname={location.pathname} />

        <PrevNext prev={prev && prev.node} next={next && next.node} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM Do YYYY")
        title
        tags
        description
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
