import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | İbrahim Gedik" />
    <div style={{display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column", minHeight:"100vh"}}>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
