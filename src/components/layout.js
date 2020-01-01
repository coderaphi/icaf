/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "../components/Menu"
import "./layout.css"
import Modal from "../components/Modal.js"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      
      <div className="header">
        <Menu>  </Menu>
        
        <main>{children}</main>
        <footer className="footer">© 2020 Ashfaq M. Ishaq  |  { <button className="privacy">Privacy Policy</button>}
      
      
        </footer>
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
