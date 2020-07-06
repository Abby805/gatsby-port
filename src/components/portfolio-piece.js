/**
 * Hero component
 */

import React from "react"
import PropTypes from "prop-types"

import { css } from '@emotion/core';
import { colors, weights, pxToRem, mediaQueries, visuallyHidden, btn } from '../styles';

function PortPiece({ projectName, projectBlurb, projectUrl }) {
  return (
    <section>
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
    </section>
  )
}

PortPiece.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectBlurb: PropTypes.node.isRequired,
  projectUrl: PropTypes.string.isRequired
}

export default PortPiece;
