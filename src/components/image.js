import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/* Inspired by https://noahgilmore.com/blog/easy-gatsby-image-components/ */

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name

              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.fileName);
      });

      if (!image) { return null; }
      
      const imageSizes = image.node.childImageSharp.sizes;

      return (
        <Img
          alt={props.altText}
          sizes={imageSizes}
        />
      );
    }}
  />
)

export default Image;
