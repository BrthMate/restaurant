import React from 'react'
import Data from "./data/MenuData"
import "./menu.css"
import {Link} from "react-router-dom"

const MenuComp = () => {
  return (
    <div className='menu-box'>
    <div className='menu-category'>
        <h2>Foods</h2>
    </div>
        {Data.Food.map((row,index) =>{
                return(
                    <div className='row' key={index}>
                        <div className='item'>
                            <Link className='title' to={row.title}>{row.title}</Link>
                            <div className='price'>{row.price}</div>
                        </div>
                        <div className='desc'>
                            {row.desc}
                        </div>
                    </div>    
                    ) 
            })}
    <div className='menu-category'>
        <h2>Drinks</h2>
    </div>
        {Data.Drink.map((row,index) =>{
                return(
                    <div className='row' key={index}>
                        <div className='item'>
                            <Link className='title' to={row.title}>{row.title}</Link>
                            <div className='price'>{row.price}</div>
                        </div>
                        <div className='desc'>
                            {row.desc}
                        </div>
                    </div>    
                    ) 
            })}
    <div className='menu-category'>
        <h2>Dessert</h2>
    </div>
        {Data.Dessert.map((row,index) =>{
                return(
                    <div className='row' key={index}>
                        <div className='item'>
                            <Link className='title' to={row.title}>{row.title}</Link>
                            <div className='price'>{row.price}</div>
                        </div>
                        <div className='desc'>
                            {row.desc}
                        </div>
                    </div>    
                    ) 
            })}
    <div className='menu-category'>
        <h2>Happy Hours</h2>
    </div>
        {Data.HappyHours.map((row,index) =>{
                return(
                    <div className='row' key={index}>
                        <div className='item'>
                            <Link className='title' to={row.title}>{row.title}</Link>
                            <div className='price'>{row.price}</div>
                        </div>
                        <div className='desc'>
                            {row.desc}
                        </div>
                    </div>    
                    ) 
            })}
    </div>
  )
}

export default MenuComp