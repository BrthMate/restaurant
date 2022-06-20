import React from 'react'
import "./home.css"

import Meat from "../../assert/banner.jpg"
import Banner from '../../component/Banner'
import Footer from './../../component/Footer'
const Home = () => {
  return (
    <>
     <div className='contact-text container'>
          <span>Check out our</span><br/>
          <span>offer</span>
      </div>
      <div className='menu'>
        <div className='container'>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home