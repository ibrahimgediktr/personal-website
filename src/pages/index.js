import React from "react"
import loadable from "@loadable/component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { Helmet } from "react-helmet"
import { AnimatePresence } from "framer-motion"
import LoaderSVG from "../images/loading.gif"

const About = loadable(() => import("../components/About"))
const Projects = loadable(() => import("../components/Projects"))
const Contact = loadable(() => import("../components/Contact"))

function IndexPage() {
  return (
    <AnimatePresence>
      <Helmet>
        <link rel="canonical" href="https://ibrahimgedik.tech" />
      </Helmet>
      <Layout>
        <SEO title="Home" />
        <Hero id="hero" />
        <About
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={LoaderSVG}
                alt="Loader SVG"
                width="150"
                height="150"
              ></img>
            </div>
          }
          id="about"
        />
        <Projects
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={LoaderSVG}
                alt="Loader SVG"
                width="150"
                height="150"
              ></img>
            </div>
          }
          id="projects"
        />
        <Contact
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={LoaderSVG}
                alt="Loader SVG"
                width="150"
                height="150"
              ></img>
            </div>
          }
          id="contact"
        />
      </Layout>
    </AnimatePresence>
  )
}

export default IndexPage
