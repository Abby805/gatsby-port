import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * Inspired by https://noahgilmore.com/blog/easy-gatsby-image-components/
*/

const Image = (props) => {
  const imageStyle = props.imageStyle ? props.imageStyle : 'stageWidth';

  return (
    <StaticQuery
      query={graphql`
        query {
          stageWidth: allFile {
            edges {
              node {
                relativePath
                name

                childImageSharp {
                  fluid(maxWidth: 1120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          teaser: allFile {
            edges {
              node {
                relativePath
                name

                childImageSharp {
                  fluid(maxWidth: 727, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}

      render={(data) => {
        const image = data[imageStyle].edges.find(n => {
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
}

export default Image;
