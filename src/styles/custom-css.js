/* eslint-disable import/prefer-default-export */

// Styles that are more specific than the element level, but that we still want
// to reuse across multiple components. Basically things that would be regular
// CSS classes in a non-JS-based theme.
import { css } from '@emotion/core';

// import { colors, fonts, weights, mediaQueries, baseFontSize, pxToRem } from './css-utils';
import { mediaQueries, pxToRem, colors } from './css-utils';

export const stageMax = css`
  padding: ${pxToRem(20)};
  margin: 0 auto;
  max-width: ${pxToRem(1200)};

  ${mediaQueries.md} {
    padding: ${pxToRem(60)} ${pxToRem(40)};
  }
`;

/* Visually hidden (for accessibility) */
export const visuallyHidden = css`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  overflow: hidden;
`;

/* Button styling */
export const btn = css`
  position: relative;
  display: inline-block;
  padding: ${pxToRem(15)} ${pxToRem(40)};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: ${pxToRem(1)};
  background: ${colors.gray};
  color: ${colors.white};
  transition: 0.3s ease color;

  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: ${pxToRem(10)};
    left: 0;
    width: 0;
    height: ${pxToRem(2)};
    background: ${colors.blue};
    transition: 0.3s ease width;
  }

  &:hover,
  &:focus {
    color: ${colors.blue};

    &::after {
      width: 100%;
    }
  }
`;
