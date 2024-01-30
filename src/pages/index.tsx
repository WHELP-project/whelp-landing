import * as React from "react"
import type { HeadFC } from "gatsby"
import { Seo, Hero, GetStarted, Numbers, Community, LaunchApp } from "../components";
import Layout from "../layout"
import { TextImage } from "../components/TextImage";

const IndexPage = () => {
  return (
    <main>
      <Seo />
      <Layout>
        <Hero />
        <TextImage />
        <GetStarted />
        <Numbers />
        <Community />
        <LaunchApp />
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Whelp</title>
