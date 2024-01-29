import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Seo />
      <Layout>
        foo
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Whelp</title>
