import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

export const Logo :React.FC= () => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "logo_bold.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.fileName.childImageSharp.fluid} />
}
