import * as React from 'react';
import './Portrait.css';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

export const Portrait: React.FC = (props) => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "portrait_smaller.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
		<div className="portrait-container">
		<Img fluid={data.fileName.childImageSharp.fluid} />
		</div>
	);
};
