import {useContext,React} from 'react'
import {Context} from './../App'
import {Link} from "react-router-dom"
import {GrFormAdd} from 'react-icons/gr'
import {IoMdRemove} from 'react-icons/io'
const BasketCard = () => {

    const items = useContext(Context)
    
    const incItem = (el) =>{
        items.setbasket(items.basket.map((item) =>{
            if(item.row.id === el.row.id){
                item.row.piece = parseInt(item.row.piece)+1
                if(item.row.piece == 0){
                    deleteItem(item)
                }
            }
            return item;
        }))
        saveToLocalStore();
    }

    const desItem = (el) =>{
        items.setbasket(items.basket.map((item) =>{
            if(item.row.id === el.row.id){
                item.row.piece = item.row.piece-1
                if(item.row.piece == 0){
                    deleteItem(item)
                }
            }
            return item;
        }))
        saveToLocalStore();
    }

    const setValue = (e,el) =>{
        items.setbasket(items.basket.map((item) =>{
            if(item.row.id === el.row.id){
                item.row.piece = e.target.value
                if(e.target.value == 0){
                    deleteItem(item)
                }
            }
            return item;
        }))
        saveToLocalStore();
    }

    const saveToLocalStore = ()=>{
        localStorage.setItem('basket', JSON.stringify(items.basket));
    }

    const deleteItem = (param) =>{
        items.setbasket(items.basket.filter((el) => el.row.id !== param.row.id));
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
                                value={row.row.piece}
                                onChange={(e) => {setValue(e,row)}}
                            >
                            </input>
                            <button className='basket' onClick={()=>{desItem(row)}}>
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