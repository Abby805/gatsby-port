/**
 * Hero component
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { css } from '@emotion/core';
import { colors, weights, pxToRem, mediaQueries, visuallyHidden, btn } from '../styles';

function PortPiece({ projectName, projectBlurb, projectUrl, projectImg, projectImgAlt }) {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "glanbia-lg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 560, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section
      css={css`
        margin-top: ${pxToRem(30)};
        padding-top: ${pxToRem(40)};
        border-top: solid ${pxToRem(2)} ${colors.gray};

        ${mediaQueries.md} {
          display: flex;
          justify-content: space-between;
          margin-top: ${pxToRem(60)};
          padding-top: ${pxToRem(60)};

          &:nth-child(even) {
            flex-direction: row-reverse;
          }
        }
      `}
    >
      <div
        css={css`
          margin-bottom: ${pxToRem(30)};
        
          ${mediaQueries.md} {
            width: 50%;
            margin-bottom: 0;
          }
        `}
      >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={projectImgAlt} />
      </div>
      <div
        css={css`
          ${mediaQueries.md} {
            width: 45%;
          }
        `}
      >
        <h3
          css={css`
            margin-bottom: ${pxToRem(10)};
            font-size: ${pxToRem(20)};
            text-transform: uppercase;
            font-weight: ${weights.bold};
            letter-spacing: ${pxToRem(0.6)};
            color: ${colors.white};

            ${mediaQueries.md} {
              font-size: ${pxToRem(24)};
              letter-spacing: ${pxToRem(1)};
            }
          `}
        >
          {projectName}
         </h3>
        {projectBlurb}
        <a href={projectUrl} css={btn} target="_blank" rel="noreferrer">Check it out<span css={visuallyHidden}> ({projectName})</span></a>
      </div>
    </section>
  )
}

PortPiece.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectBlurb: PropTypes.node.isRequired,
  projectUrl: PropTypes.string.isRequired,
  projectImg: PropTypes.string.isRequired,
  projectImgAlt: PropTypes.string.isRequired,
}

export default PortPiece;
