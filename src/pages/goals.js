import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Goals</h1>
    <p>Practice online presence</p>
    <p>Write techical articles, expand, elaborate, share ideas</p>
    <p>Make yourself heard, use the vast online space to reach your goals</p>
    <p>What are my goals? To make nice products that will make me 50000 till January 2021</p>
    <p>Focus</p>

    <p>I want also to write about my journey?</p>
    <p>Is it ok if i mix techical and personal writings?</p>
    <p>Let's check it out</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>  
)

export default SecondPage
