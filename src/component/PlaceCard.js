import {React,useRef} from 'react'
import "./placecard.css"
import { Link } from "react-router-dom"
import PlaceData from "./data/PlaceData"
import 'boxicons'

const PlaceCard = () => {

    const imgs = useRef([]);
    
    const handleMove = (e) =>{
        /*
        const x = -50 + (e.pageX - img.current.offsetLeft - 300 / 2) / 3;
        const y = -10 + (e.pageY - img.current.offsetTop - 100 / 2) / 3;

        img.current.style.transform = `translate(${ x }px,${ y })`;
        console.log(img.current)
        */
    }

    const addImgs = img => {
        if(img && !imgs.current.includes(img)){
            imgs.current.push(img)
        }
    }

    return(
        <>
            {PlaceData.map((row,index) =>{
                return(
                    
                        <div className='placeCard-box' key={index} onMouseMove={handleMove}>
                            <span>
                                <img className="place-img back" src={row.bg} alt="img"></img>
                                <div>
                                    <img className="place-img img-hover" ref={addImgs} src={row.img} alt="img"></img>
                                </div>
                            </span>
                            <div className="place-box">
                                <div className= "name">{row.name}</div>
                                <div className="text">{row.text}</div>
                                <button className="btn-to">
                                    <Link className= "links" to={row.link}>{row.name}
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
            })}
        </>
    )
}

export default PlaceCard