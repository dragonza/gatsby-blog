import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Share from '../components/Share'
import PrevNext from '../components/PrevNext'
// import * as blogPostStyles from './blog-post.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'

const blogPostStyles = {}
function BlogPost({ pageContext, data, location, children }) {
    const post = data.mdx
    console.log('post', post)
    console.log('children', children)
    const url = data.site.siteMetadata.siteUrl
    const { title, description, tags, date } = post.frontmatter
    let thumbnail = getImage(
        post.frontmatter.image?.childImageSharp?.gatsbyImageData
    )
    console.log('thumbnail', thumbnail)

    const { prev, next } = pageContext

    return (
        <Layout>
            <SEO
                keywords={tags}
                title={title}
                description={description}
                thumbnail={url + thumbnail}
                url={url}
                pathname={location.pathname}
            />
            <div className="blog-post-container">
                <h1>{title}</h1>
                <div className={blogPostStyles.dateWrapper}>
                    <span className={blogPostStyles.date}>{date}</span>
                </div>
                <GatsbyImage image={thumbnail} />

                <br />
                <div className="blog-post-content">
                    {/*<MDXProvider components={{}}>{children}</MDXProvider>*/}
                </div>

                <hr />

                <div>
                    <span>Tagged in </span>
                    {tags.map((tag, i) => (
                        <a
                            href={`/tags/${tag}`}
                            key={i}
                            style={{ marginLeft: '10px' }}
                            className={`tag-item ${blogPostStyles.tagItem}`}
                        >
                            {tag}
                        </a>
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
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                date(formatString: "MMMM Do, YYYY")
                title
                tags
                image {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1500
                            height: 1500
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                description
            }
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`
