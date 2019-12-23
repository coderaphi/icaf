import React from "react"
import Link from "gatsby-link"
import "./menu.css"

const Menu = () => {
  return (
    <div className="menucontainer">
      <ul className="menu-items">
       
        <li className="menulink">
          <Link to="/">Home</Link>
        </li>
        <li className="menulink">
          <Link to="/book">Book</Link>
        </li>
        <li className="menulink">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
