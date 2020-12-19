import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage

