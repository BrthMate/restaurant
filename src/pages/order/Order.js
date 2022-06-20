import React from 'react'
import FoodCard from '../../component/FoodCard'
import Footer from '../../component/Footer'
import "./order.css"


const Order = () => {
  
  return (
    <>
      <div className='contact-text container'>
          <span>Check out our</span><br/>
          <span>offer</span>
      </div>
      <div className='menu'>
        <div className='container'>
          <FoodCard/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Order