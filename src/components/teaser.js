import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core';
import Image from "../components/image"
import { colors, weights, pxToRem, mediaQueries, rgba } from '../styles';

const Teaser = ({ post }) => (
  <section>
    <Link
      to={post.frontmatter.slug}
      css={css`
        display: block;
        margin-top: ${pxToRem(30)};
        padding-top: ${pxToRem(30)};
        border-top: solid ${pxToRem(2)} ${rgba(colors.gray, 25)};
        color: inherit;
        text-decoration: none;

        ${mediaQueries.md} {
          display: flex;
          justify-content: space-between;
          margin-top: ${pxToRem(60)};
          padding-top: ${pxToRem(60)};
        }
      `}
    >
      <div
        css={css`
          margin-bottom: ${pxToRem(30)};

          ${mediaQueries.md} {
            width: 50%;
            margin-bottom: 0;
          }
        `}
      >
        <Image fileName={post.frontmatter.featured_image} altText={post.frontmatter.image_alt} imageStyle='teaser'  />
      </div>
      <div
        css={css`
          ${mediaQueries.md} {
            width: 45%;
          }
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
        <p>{post.frontmatter.date}</p>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  </section>
)

export default Teaser
