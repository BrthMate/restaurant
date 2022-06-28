import React from 'react'
import "./homeorder.css"
import { Link } from "react-router-dom"
import 'boxicons'

const HomeOrder = () => {
  return (
    <div className='mobil-container dark'>
        <div className='box'>
            <div className="title">
                Stay At Home, We Will Provide Good Food
            </div>
            <div className="text">
                industry's standard dummy text ever more recently with desktop publishing software like Aldus PageMaker including versions
            </div>
            <button className="btn-to">
                <Link className= "links" to="#">See More
                    <div className='box-icon-container'>
                    </div>
                    <div className='arrow-box'>
                        <box-icon name='right-arrow-alt'></box-icon>
                    </div>
                </Link>
            </button>
        </div>

    </div>
  )
}

export default HomeOrder