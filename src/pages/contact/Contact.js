import React from 'react'
import "./contact.css"
import 'boxicons'
import Form from '../../component/Form'
import PlaceCard from '../../component/PlaceCard'
import Footer from "./../../component/Footer"

const Contact = () => {
  return (
    <>
        <div className='contact-text container'>
            <span>Get in touch</span><br/>
            <span>with us</span>
        </div>
        <div className='contact-box container'>
            <div className='contact-inner'>
                <div className='contact-details'>
                    <span className='title'>Phone</span>
                    <span className='desc'>+36 70 348 9584</span>
                    <span className='title'>Email</span>
                    <span className='desc'>beef@restazrent.com</span>
                    <span className='title'>SUPPLIERS & CONTRACTORS</span>
                    <span className='desc'>beefsup@restazrent.com</span>

                    <span className='title share'>Share</span>
                    <div className='social-media'>
                        <a className="btn from-center" href='#'><box-icon name='instagram' type='logo' ></box-icon></a>
                        <a className="btn from-center" href='#'><box-icon name='facebook'  type='logo'></box-icon></a>
                        <a className="btn from-center" href='#'><box-icon name='youtube' type='logo' ></box-icon></a>
                    </div>
                </div>
            </div>
            <div className='contact-form'>
                <Form/>
            </div>
        </div>
        <div className='place'>
            <div className='place-container container'>
                <PlaceCard/>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact