import React from 'react'
import {Link} from "react-router-dom"

const NavLink = (props) => {
  return (
    <ul className={props.ul}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li className={props.ul}>Logo</li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/galery">Gallery</Link></li>
    </ul>
  )
}

export default NavLink