import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>So I am now testing</h1>
      <p>This is now home page.</p>
      <p>How many pages there will be.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image 
          imageName="gatsby-astronaut.png"
        />
      </div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3
                
              >
                {node.frontmatter.title}{" "}
                <span
                  
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))}
      <Link to="/about/">About</Link>    
      <Link to="/goals/">Goals</Link> 
      {/* <Link to="/page-3/">Contact</Link> 
      <Link to="/page-4/">Blog</Link> 
      <Link to="/page-5/">Demos</Link> 
      <Link to="/page-6/">Stories</Link>  */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

//export default IndexPage
