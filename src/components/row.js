/**
 * Layout component for a full-bleed row.
 */

import React from "react"
import PropTypes from "prop-types"

import { css } from '@emotion/core';
import { stageMax, colors, pxToRem, mediaQueries } from '../styles';

const Row = ({ rowTitle, rowIntro, bgColor, children }) => {

  // If the background is blue, the h2 should be white
  // Otherwise the h2 should be blue
  const h2Color = (bgColor === 'blue') ? 'white' : 'blue';

  return (
    <div 
      css={css`
        background: ${colors[bgColor]};
      `}
    >
      <div css={stageMax}>
        {rowTitle && (
          <h2
            css={css`
              font-size: ${pxToRem(30)};

              color: ${colors[h2Color]};

              ${mediaQueries.md} {
                font-size: ${pxToRem(50)};
              }
            `}
          >
            { rowTitle }
           </h2>
        )}

        {rowIntro && (
          <p>{ rowIntro }</p>
        )}

        {children}
      </div>
    </div>
  )
}

Row.defaultProps = {
  rowTitle: ``,
  rowIntro: ``,
  bgColor: `gray`,
}

Row.propTypes = {
  rowTitle: PropTypes.string,
  rowIntro: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Row;
