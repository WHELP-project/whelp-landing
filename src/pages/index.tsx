import * as React from "react"
import type { HeadFC } from "gatsby"
import { Seo, Hero } from "../components";
import Layout from "../layout"

const IndexPage = () => {
  return (
    <main>
      <Seo />
      <Layout>
        <Hero />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Whelp</title>
