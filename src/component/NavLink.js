import React from 'react'
import {Link} from "react-router-dom"

const NavLink = (props) => {
  return (
    <ul className={props.className}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li>Logo</li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/galery">Gallery</Link></li>
    </ul>
  )
}

export default NavLink