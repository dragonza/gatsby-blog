import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      Main Page
    </Layout>
  )
}
export default IndexPage
