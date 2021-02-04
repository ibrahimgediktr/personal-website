import React, { lazy, Suspense } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
// import About from "../components/About"
// import Projects from "../components/Projects"
// import Contact from "../components/Contact"
import { Helmet } from "react-helmet"
import { AnimatePresence } from "framer-motion"
import LoaderSVG from "../images/loading.gif"

const About = lazy(() => import("../components/About"))
const Projects = lazy(() => import("../components/Projects"))
const Contact = lazy(() => import("../components/Contact"))

function IndexPage() {
  return (
    <AnimatePresence>
      <Helmet>
        <link rel="canonical" href="https://ibrahimgedik.tech" />
      </Helmet>
      <Layout>
        <SEO title="Home" />
        <Hero id="hero" />
        <Suspense fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={LoaderSVG} alt="Loader SVG" width="150" height="150"></img> 
            </div>
          }>
          <About id="about" />
        </Suspense>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={LoaderSVG} alt="Loader SVG" width="150" height="150"></img> 
            </div>
          }
        >
          <Projects id="projects" />
        </Suspense>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={LoaderSVG} alt="Loader SVG" width="150" height="150"></img> 
            </div>
          }
        >
          <Contact id="contact" />
        </Suspense>
      </Layout>
    </AnimatePresence>
  )
}

export default IndexPage