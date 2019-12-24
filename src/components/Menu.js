import React from "react"
import Link from "gatsby-link"
import "./menu.css"

const Menu = () => {
  return (
    <div className="menucontainer">
      <ul className="menu-items">
       
        <li className="menulink">
          <Link className="menu-a" to="/">Home</Link>
        </li>
        <li className="menulink">
          <Link className="menu-a" to="/book">Book</Link>
        </li>
        <li className="menulink">
          <Link className="menu-a" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
