import * as React from "react"

import "./layout.css"
import { Logo } from "./Logo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import { AboutMe } from "../AboutMe";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(height:45, width:45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      xing: file(relativePath: { eq: "xing-45.png" }) {
        childImageSharp {
          fixed(height:45, width:45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta lang="en" />
        <title>Florian Jüsten</title>
        <meta name="Description" content="Website of Florian Jüsten." />>
      </Helmet>
      <header>
        <div className="leftItems">
          <a aria-label="home" href="/">
          <Logo />
          </a>
        </div>
        <div className="rightItems">
          <a aria-label="github" target="_blank" href="https://github.com/florianjuesten">
          		<Img fixed={data.github.childImageSharp.fixed} />
          </a>
          <a aria-label="xing" target="_blank" href="https://www.xing.com/profile/Florian_Juesten">
          		<Img fixed={data.xing.childImageSharp.fixed} />
          </a>
        </div>
      </header>
      <main>{children}
      <AboutMe />
      </main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default Layout
