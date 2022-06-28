import React from 'react'
import "./home.css"

import Footer from './../../component/Footer'
import PlaceCard from '../../component/PlaceCard'
import Mobile from '../../component/Mobile'
import HomeOrder from '../../component/HomeOrder'
import Feedback from '../../component/Feedback'
const Home = () => {
  return (
    <>
     <div className='contact-text container'>
          <span>Check out our</span><br/>
          <span>offer</span>
      </div>
      <div className='menu about-us'>
        <div className='container'>
          <div className='title'>
            WELCOME TO RESTAURANT
          </div>
          <div className='text'>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.T
          </div>
        </div>
      </div>
      <div className='place'>
          <div className='place-container container'>
              <PlaceCard/>
          </div>
      </div>
      <div className='menu order-from'>
        <div className='container'>
          <HomeOrder/>
        </div>
      </div>
      <div className='menu-top mobil-app'>
        <div className='container'>
          <Mobile/>
        </div>
      </div>
      <div className='menu client-saying'>
        <div className='container'>
          <Feedback/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home