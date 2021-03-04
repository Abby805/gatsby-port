/**
 * Hero component
 */

import React from "react"
import PropTypes from "prop-types"

import { css } from '@emotion/core';
import { stageMax, colors, pxToRem, mediaQueries } from '../styles';
import background from "../images/pattern-03.png"

function Hero({ pageTitle, introBlurb, hasBg }) {
  const bgStyles = css`
    position: relative;
    &::before {
      ${mediaQueries.lg} {
        content: '';
        display: block;
        position: absolute;
        top: ${pxToRem(60)};
        bottom: 0;
        right: 0;
        width: calc(50% + ${pxToRem(100)});
        background-image:
          linear-gradient(-65deg, transparent 0%, ${colors.gray} 75%),
          url(${background});
      }
    }
  `;

  return (
    <div
      css={hasBg ? bgStyles : ``}
    >
      <div
        css={[
          stageMax,
          css`
            position: relative;

            p {
              ${mediaQueries.lg} {
                width: 66%;
              }
            }
          `
        ]}
      >
        <h1>{ pageTitle }</h1>
        { introBlurb }
      </div>
    </div>
  )
}

Hero.defaultProps = {
  introBlurb: ``,
}

Hero.propTypes = {
  pageTitle: PropTypes.node.isRequired,
  introBlurb: PropTypes.node,
  hasBg: PropTypes.bool,
}

export default Hero;
