import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as tagTemplateStyles from './tag-templete.module.css'

function Tags(props) {
    const posts = props.data.allMdx
    console.log('posts', posts)
    const { tag } = props.pageContext
    return (
        <Layout>
            <h1>
                Available posts in{' '}
                <span className={tagTemplateStyles.tag}>{tag}</span>
            </h1>
            <div className="tags">
                <ul className={tagTemplateStyles.blogList}>
                    {posts.map(({ node }, i) => (
                        <li>
                            <Link
                                to={node.fields.slug}
                                key={i}
                                className={tagTemplateStyles.tag}
                            >
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
        allMdx(
            limit: 2000
            sort: { frontmatter: { date: DESC } }
            filter: { frontmatter: { tags: { eq: $tag } } }
        ) {
            nodes {
                frontmatter {
                    title
                }
                fields {
                    slug
                }
            }
        }
    }
`
