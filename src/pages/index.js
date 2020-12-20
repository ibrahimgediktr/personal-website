import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import { transitions, positions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from 'react-alert-template-basic'

const options = {
    position: positions.BOTTOM_RIGHT,
    timeout:4000,
    offset:'20px',
    transition:transitions.SCALE
}


const IndexPage = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <Layout>
      <SEO title="Home" />
      <Hero id="hero" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </Layout>
  </AlertProvider>
)

export default IndexPage
