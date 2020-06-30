/* eslint-disable import/prefer-default-export */
// Global CSS Styles
import { css } from '@emotion/core';

import { colors, fonts, weights, mediaQueries, baseFontSize, pxToRem } from './css-utils';

// Reset, super-basic global typography, etc.
export const globalStyles = css`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after, q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    box-sizing: border-box;
    font-size: ${baseFontSize / 16 * 100}%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${fonts.sans};
    font-weight: ${weights.light};
    line-height: 1.6;
    background: ${colors.gray};
    color: ${colors.white};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1,
  h2 {
    font-family: ${fonts.serif};
    font-weight: ${weights.normal};
  }

  p {
    margin-bottom: ${pxToRem(20)};

    ${mediaQueries.md} {
      font-size: ${pxToRem(22)};
    }
  }

  strong,
  b {
    font-weight: ${weights.bold};
  }
`;
