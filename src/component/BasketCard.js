import {useContext,React} from 'react'
import {Context} from './../App'
import {Link} from "react-router-dom"
import {GrFormAdd} from 'react-icons/gr'
import {IoMdRemove} from 'react-icons/io'
const BasketCard = () => {

    const items = useContext(Context)
    
    const incItem = (el) =>{
       items.basket.map((item) =>{
            if(item.row.id === el.row.id){
                return{
                    ...item.row, piece: el.price +1
                };
            }
            return item;
        })
    }

    return (
        items.basket.map((row,index) =>{
            return(
                <div className='row' key={index}>
                    <img src={row.row.img} alt="img"></img>
                    <div className='row-box'>
                        <div className='item'>
                            <div className='title'>{row.row.title}</div>
                        </div>
                        <div className='counter'>
                            <button className='basket' onClick={()=>{incItem(row)}}>
                            <GrFormAdd 
                                    size="30"
                                />
                            </button>
                            <input 
                                value={row.piece}
                            >
                            </input>
                            <button className='basket'>
                                <IoMdRemove 
                                    size="30"
                                />
                            </button>
                        </div>
                        <div className='options'>
                            <div className='price'>{row.row.price}</div>
                            <Link className='btn' to={"/menu/"+ row.title}>show</Link>
                        </div>
                    </div>
                </div>    
            ) 
        })
    )
}

export default BasketCard