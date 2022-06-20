import {React,useState,useRef, useContext} from 'react'
import "./foodcard.css"
import { Link } from "react-router-dom"
import Data from "./data/MenuData"
const FoodCard = () => {

    //data._currentValue
    //const first = useContext(content)

    const [category, setCategory] = useState(Data.Food)
    const Items = useRef([]);

    const addItems = Item => {
        if(Item && !Items.current.includes(Item)){
            Items.current.push(Item)
        }
    }

    const handleClick = (e) =>{
        Items.current.map(o => {
            if(o === e.target){
                o.classList.add("active")
            }else{
                o.classList.remove("active")
            }
        })
    }


    return (
    <>
        <div className='choose-category'>
            <button className='btn active links' ref={addItems} onClick={(e) => {setCategory(Data.Food);handleClick(e)}}>Foods</button>
            <button className='btn links' ref={addItems} onClick={(e) => {setCategory(Data.Drink);handleClick(e)}}>Drinks</button>
            <button className='btn links' ref={addItems} onClick={(e) => {setCategory(Data.HappyHours);handleClick(e)}}>HappyHours</button>
            <button className='btn links' ref={addItems} onClick={(e) => {setCategory(Data.Dessert);handleClick(e)}}>Dessert</button>
        </div>
        <div className='food-container'>
            {category.map((row,index) =>{
                return(
                    <div className='row' key={index}>
                        <img src={row.img} alt="img"></img>
                        <div className='item'>
                            <div className='title'>{row.title}</div>
                            <div className='price'>{row.price}</div>
                        </div>
                        <div className='desc'>
                            {row.desc}
                        </div>
                        <div className='options'>
                            <Link className='btn' to={"/menu/"+ row.title}>show</Link>
                            <div className='basket btn-reverse from-center'>
                                <box-icon name='basket'></box-icon>
                            </div>
                        </div>
                    </div>    
                ) 
            })}
        </div>
    </>
  )
}

export default FoodCard