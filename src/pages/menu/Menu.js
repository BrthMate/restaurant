import React from 'react'
import Footer from '../../component/Footer'
import MenuComp from '../../component/MenuComp'
import "./menu.css"

const Menu = () => {
  return (
    <>
    <div className='contact-text container'>
        <span>Check out our</span><br/>
        <span>offer</span>
    </div>
    <div className='menu'>
       <div className='container'>
        <MenuComp/> 
       </div>
    </div>
    <Footer/>
</>
  )
}

export default Menu