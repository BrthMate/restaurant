import "./feedback.css";
import FeedbackData from './data/FeedbackData';
import React,{useState} from 'react';
import 'boxicons';

const Feedback = () => {
    const [current, setCurrent] = useState(0)
    const length = FeedbackData.length

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1);
    }


    return ( 
        <section className='slider' >
            <button className="btn-to prev" onClick={prevSlide}>
                <div className= "links">prev
                    <div className='box-icon-container'>
                    </div>
                    <div className='arrow-box'>
                        <box-icon name='left-arrow-alt'></box-icon>
                    </div>
                </div>
            </button>
            <button className="btn-to next" onClick={nextSlide}>
                <div className= "links">next
                    <div className='box-icon-container'>
                    </div>
                    <div className='arrow-box'>
                        <box-icon name='right-arrow-alt'></box-icon>
                    </div>
                </div>
            </button>
            {FeedbackData.map((slide,index) =>{
            return(
                <>
                    <div key={index} className={index === current ? "active feedback-box" : "feedback-box"}>
                        <div className= "text"><span className="mark left-mark">"</span>{slide.text}<span className="mark right-mark">"</span></div>
                    </div>
                </>    
                ) 
            })}
            
        </section>
    )
}

export default Feedback