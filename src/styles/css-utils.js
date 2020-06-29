/* eslint-disable import/prefer-default-export */
/* Variables and functions for CSS-in-JS use */








// // Font-related variables

// $font-size-base: 18; // The default font size for your site. This gets used in
// // the px-to-em() function used sitewide.

// // Time out for a function
// @function px-to-rem($number) {
//   $raw: $number/$font-size-base;
//   $rounded: ceil($raw * 1000)/1000;
//   @return $rounded * 1rem;
// }

// // Spacing
// $stage-max: px-to-rem(1200);


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

export const baseFontSize = `18`;



/* pxToRem */

// export const pxToRem = (px) => {

// };


/* Colors */
export const colors = {
  white: `#fff`,
  gray: `#222`,
  blue: `#369fb9`,
};
