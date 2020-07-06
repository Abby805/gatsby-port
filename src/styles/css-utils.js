/* eslint-disable import/prefer-default-export */
/* Variables and functions for CSS-in-JS use */

/* Breakpoints & media queries */
const breakpoints = [768, 1200];
const names = [`md`, `lg`];

export const mediaQueries = breakpoints.reduce((acc, bp, i) => {
  acc[names[i]] = `@media (min-width: ${bp}px)`;
  return acc;
}, {});

/* Fonts */
export const fonts = {
  serif: `'Crimson Text', serif`,
  sans: `'Mukta', sans-serif`,
  main: `'Mukta', sans-serif`, /* @todo update so we don't repeat sans/main */
};

export const weights = {
  light: `300`, /* "Normal" for sans */
  normal: `400`, /* The only serif weight */
  bold: `700`, /* Sans only */
};

/* pxToRem... as you might expect, converts pixels to rems */
export const baseFontSize = `18`;

export const pxToRem = (px) => {
  return ((Math.round(px / baseFontSize * 1000) / 1000) + 'rem');
};

/* Colors */
export const colors = {
  white: `#ffffff`,
  gray: `#222222`,
  blue: `#369fb9`,
};

/* RGBA
 * Takes a color variable, presumed to be a 6-digit hex value, and an alpha
 * percentage, presumed to be a unit-less number between 0 and 100, 
 * and spits out an rgba string 
 * Adapted from https://css-tricks.com/converting-color-spaces-in-javascript/
 */

 export const rgba = (hex, alpha) => {
   let r = '0x' + hex[1] + hex[2],
       g = '0x' + hex[3] + hex[4],
       b = '0x' + hex[5] + hex[6];

    return 'rgba('+ +r + ',' + +g + ',' + +b + ',' + (alpha / 100).toFixed(2) +  ')';
 };
