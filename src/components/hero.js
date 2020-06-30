/**
 * Hero component
 */

import React from "react"
import PropTypes from "prop-types"

import { css } from '@emotion/core';
import { stageMax, colors, pxToRem, mediaQueries } from '../styles';
import background from "../images/pattern-03.png"

function Hero({ pageTitle, introBlurb }) {
  return (
    <div
      css={css`
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
      `}
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
        <h1
          css={css`
            margin-bottom: ${pxToRem(30)};
            font-size: ${pxToRem(44)};
            line-height: 1.2;
            color: ${colors.blue};

            ${mediaQueries.md} {
              font-size: ${pxToRem(74)};
            }
          `}
        >
          { pageTitle }
         </h1>
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
}

export default Hero;