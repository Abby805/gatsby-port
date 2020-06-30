import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Homee" />
    <Hero
      pageTitle={
        <>
          Front-End Developer.<br/>Designer. Photographer.
        </>
      }
      introBlurb={
         <p>I specialize in theming, site-building, and custom module development for complex Drupal sites. With over a decade of experience in the public and private sectors and a complementary background in design, I deliver websites that look fantastic, perform well across devices, and meet or exceed the latest accessibility standards.</p>
      }
    />
  </Layout>
)

export default IndexPage
