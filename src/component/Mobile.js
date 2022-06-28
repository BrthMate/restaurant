import React from 'react'
import "./mobile.css"
import Apple from './../assert/app store.png'
import Google from './../assert/google play.png'
import Mobil from './../assert/mobil.png'
const Mobile = () => {
  return (
    <div className='mobil-container'>
        <div className='box'>
            <div className="title">
                Download Our Mobile App
            </div>
            <div className="text">
                industry's standard dummy text ever more recently with desktop publishing software like Aldus PageMaker including versions
            </div>
            <div className="app">
                <img src={Google}/>
                <img src={Apple}/>
            </div>
        </div>
        <img src={Mobil}/>
    </div>
  )
}

export default Mobile