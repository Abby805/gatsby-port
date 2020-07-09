import React from "react";

import { css } from '@emotion/core';
import { pxToRem, colors } from '../styles';

const Footer = () => (
  <footer
    css={css`
      padding: ${pxToRem(20)};
      text-align: center;
    `}
  >
    <ul
      css={css`
        display: flex;
        justify-content: center;
        margin-bottom: ${pxToRem(20)};

        li {
          margin: 0 ${pxToRem(10)};
        }

        a {
          text-decoration: none;
          color: ${colors.white};
          transition: 0.3s ease opacity;

          &:hover,
          &:focus {
            opacity: 0.8;
          }
        }
      `}
    >
      <li><a href="https://www.linkedin.com/in/abigailmilberg" target="_blank" rel="noreferrer">LinkedIn</a></li>
      <li><a href="https://www.drupal.org/u/abbym" target="_blank" rel="noreferrer">Drupal.org</a></li>
      <li><a href="https://www.instagram.com/abbym805" target="_blank" rel="noreferrer">Instagram</a></li>
      <li><a href="https://twitter.com/AbbyMilberg" target="_blank" rel="noreferrer">Twitter</a></li>
      <li><a href="mailto:abby.milberg@gmail.com">Email</a></li>
    </ul>

    <p
      css={css`
        margin-bottom: 0;
      `}
    >
      © {new Date().getFullYear()} Abby Milberg
    </p>
  </footer>
)

export default Footer;
