import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({ imgName }) => {
  return (
    (
      <StaticQuery
        query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
        render={data => {
          const image = data.allImageSharp.edges.find(
            edge => edge.node.fluid.originalName === imgName
          )
          if (!image) {
            return null
          }
          return <Img fluid={image.node.fluid} alt={imgName} />
        }}
      />
    )
  )
}
export default Image
