import React from 'react'
import Subs from './Subs'
import "./footer.css"
import 'boxicons'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer-container container'>
      <div className='footer-box'>
        <h1>Restaurant</h1>
        <div className='social-media'>
            <a className="" href='#'><box-icon name='instagram' type='logo' ></box-icon></a>
            <a className="" href='#'><box-icon name='facebook'  type='logo'></box-icon></a>
            <a className="" href='#'><box-icon name='youtube' type='logo' ></box-icon></a>
        </div>
      </div>
      <div className='footer-box'>
      <div className='links'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/galery">Gallery</Link></li>
          <li><Link to="/privacy">TERMS & PRIVACY</Link></li>
        </ul>
      </div>
      <Subs/>
      </div>

    </div>
  )
}

export default Footer