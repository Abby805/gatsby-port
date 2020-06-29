/* eslint-disable import/prefer-default-export */

// Styles that are more specific than the element level, but that we still want
// to reuse across multiple components. Basically things that would be regular
// CSS classes in a non-JS-based theme.
import { css } from '@emotion/core';

// import { colors, fonts, weights, mediaQueries, baseFontSize, pxToRem } from './css-utils';
import { mediaQueries, pxToRem } from './css-utils';

export const stageMax = css`
  padding: ${pxToRem(20)};
  margin: 0 auto;
  max-width: ${pxToRem(1200)};

  ${mediaQueries.md} {
    padding: ${pxToRem(60)} ${pxToRem(40)};
  }
`;
