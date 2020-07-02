import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Row from "../components/row"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
    <Row rowTitle="Work" rowIntro="A small sample of interesting projects I've worked on." bgColor="blue">
      <p>Here is the first row.</p>
    </Row>
    <Row rowTitle="Other Cool Clients" rowIntro="But wait! There's more!">
      <p>Here is another row.</p>
    </Row>
  </Layout>
)

export default IndexPage
