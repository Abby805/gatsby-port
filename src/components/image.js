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
                fluid(maxWidth: 560, quality: 100) {
                  ...GatsbyImageSharpFluid
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
      
      const imageFluid = image.node.childImageSharp.fluid;

      return (
        <Img
          alt={props.altText}
          fluid={imageFluid}
        />
      );
    }}
  />
)

export default Image;
