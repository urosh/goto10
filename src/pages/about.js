import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Few words about me</h1>
    <p>My name is Uros Damnjanovic, husband, father of two, software developer... I will share with you some ideas on how to 
      build bettwer world. Whether it is programming, everyday life, health, each part of our existance is a stage where we 
      play our roles in the best way we know. Let's learn and grow together.
    </p>
    <p>
      Microservice architecture. How to design a microservice system that benefits from Cloud Infrastructure, but is also easy 
      to develop and test. 
    </p>
    <p>
      Blokchain monitoring. How to monitor transactions on the Ethereum network
    </p>
    <p>
      Build demos, and tutorials. 
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
