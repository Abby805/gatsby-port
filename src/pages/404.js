import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "../components/row"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Row>
      <h1>404: Page Not Found</h1>
      <p>The sadness...</p>
    </Row>
  </Layout>
)

export default NotFoundPage
