import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { Helmet } from "react-helmet"
import { AnimatePresence } from "framer-motion"
import FadeInWhenVisible from "../components/animations/fadeInWhenVisible"

function IndexPage() {
  return (
    <AnimatePresence>
      <Helmet></Helmet>
      <Layout>
        <SEO title="Home" />
        <Hero id="hero" />
        <FadeInWhenVisible>
          <About id="about" />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Projects id="projects" />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <Contact id="contact" />
        </FadeInWhenVisible>
      </Layout>
    </AnimatePresence>
  )
}

export default IndexPage
