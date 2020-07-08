import PropTypes from "prop-types";
import React from "react";

import { css } from '@emotion/core';
import { stageMax, colors, pxToRem, mediaQueries, rgba , weights} from '../styles';

const Callout = ({ calloutText }) => (
  <div 
    css={css`
      background: ${rgba(colors.blue, 50)};
    `}
  >
    <div
      css={[
        stageMax,
        css`
          ${mediaQueries.md} {
            padding: ${pxToRem(30)} ${pxToRem(40)};
          }
        `
      ]}
    >
      <p
        css={css`
          margin-bottom: 0;
          font-weight: ${weights.bold};
          letter-spacing: ${pxToRem(0.6)};

          ${mediaQueries.md} {
            letter-spacing: ${pxToRem(1)};
          }
        `}
      >
        {calloutText}
      </p>
    </div>
  </div>
)

Callout.propTypes = {
  calloutText: PropTypes.string.isRequired,
}

export default Callout;
