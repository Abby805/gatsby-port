import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Row from "../components/row"
import Image from "../components/image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Hero
        pageTitle={frontmatter.title}
        introBlurb={
           <p>{frontmatter.date}</p>
        }
      />
      <Row>
        <Image fileName={frontmatter.featured_image} altText={frontmatter.image_alt} />

        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Row>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featured_image
        image_alt
      }
    }
  }
`
