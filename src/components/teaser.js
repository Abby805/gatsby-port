import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core';
import { colors, weights, pxToRem, mediaQueries, rgba } from '../styles';

const Teaser = ({ post }) => (
  <section
    css={css`
      margin-top: ${pxToRem(30)};
      padding-top: ${pxToRem(30)};
      border-top: solid ${pxToRem(2)} ${rgba(colors.gray, 25)};
    `}
  >
    <Link
      to={post.frontmatter.slug}
      css={css`
        color: inherit;
        text-decoration: none;
      `}
    >
      <h3
        css={css`
          margin-bottom: ${pxToRem(10)};
          font-size: ${pxToRem(20)};
          text-transform: uppercase;
          font-weight: ${weights.bold};
          letter-spacing: ${pxToRem(0.6)};
          color: ${colors.white};

          ${mediaQueries.md} {
            font-size: ${pxToRem(24)};
            letter-spacing: ${pxToRem(1)};
          }
        `}
      >
        {post.frontmatter.title}
      </h3>
      {post.frontmatter.date}
    </Link>
  </section>
)

export default Teaser
