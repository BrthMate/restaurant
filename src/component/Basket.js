import {React,useState} from 'react'
import {Link} from "react-router-dom"
import {RiCloseFill} from 'react-icons/ri'
import BasketCard from './BasketCard'
import './basket.css'

const Basket = (props) => {
    //( props.status === false ? props.setSatus(true) : props.setSatus(false))
    const handleClick = () =>{
        props.setStatus(false)
    }

    return (
        <div className='basket-box'>
            <div className='basket-btn'>
                <Link onClick={handleClick}  className={ props.status ? 'basket btn-reverse from-center-reverse ' : 'basket btn-reverse from-center'} to="/basket">
                    <box-icon name='basket'></box-icon>
                </Link>
                <div onClick={handleClick} className={ props.status ? 'basket btn-reverse from-center-reverse ' : 'basket btn-reverse from-center'}>
                    <RiCloseFill 
                    className='burger-menu' 
                    size="30"
                    />
                </div>
            </div>
            <div className='basket-card-container'>
                <BasketCard/>
            </div>
        </div>
    )
}

export default Basket