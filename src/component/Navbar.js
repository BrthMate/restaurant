import {React,useState,useEffect,useRef, useContext} from 'react'
import "./nav.css"
import NavLink from './NavLink'
import {HiMenuAlt1} from 'react-icons/hi'
import {Link} from "react-router-dom"
import Basket from './Basket'
import {Context} from './../App'

  const Navbar = () => {

    const [IsOpen, setIsOpen] = useState(false)
    const [IsBucketOpen, setIsBucketOpen] = useState(false)
    const basket = useRef()
    const items = useContext(Context)
    
    const clickMenu = () =>{
      if(window.innerWidth < 1001){
        IsOpen ? setIsOpen(false) : setIsOpen(true)
      }
      setIsBucketOpen(false)
    }

    const  handleResize = () => {
      if(window.innerWidth > 1000){
        setIsOpen(false)
        return false;
      }
    }

    const clickBasket = () => {
      IsBucketOpen === false ? setIsBucketOpen(true) : setIsBucketOpen(false)
    }

    useEffect(() => {   
      window.addEventListener('resize', handleResize)
    })

    return (
      <>
      <div className={IsOpen ? "overlay active" : "overlay"}></div>
      <nav className={IsOpen ? "active" : ""}>
          <div className={IsOpen ? 'mobil container' : 'container'}>
            <div className='nav-container'>
              <span>
                <HiMenuAlt1 
                  className='burger-menu' 
                  size="30"
                  onClick={clickMenu}
                />
              </span>
              <ul className={IsOpen ? "mobil" : "" }>
                <li onClick={clickMenu}><Link to="/">Home</Link></li>
                <li onClick={clickMenu}><Link to="/Menu">Menu</Link></li>
                <li onClick={clickMenu}><Link to="/contact">Contact</Link></li>
                <li className={IsOpen ? "mobil" : "" }>Logo</li>
                <li onClick={clickMenu}><Link to="/order">Order online</Link></li>
                <li onClick={clickMenu}><Link to="/reservations">Reservations</Link></li>
              </ul>
              <div onClick={clickBasket} className={IsOpen ? 'basket-reverse btn-reverse from-center-reverse ' : 'basket btn-reverse from-center'}>
                  <box-icon name='basket'></box-icon>
                  <span className={ Object.keys(items.basket).length===0 ? "empty" : 'counter'}>{Object.keys(items.basket).length === 0 ? "" : Object.keys(items.basket).length }</span>
              </div>
            </div>
          </div>
      </nav>
      <div className={IsBucketOpen ? "basket-container active" : "basket-container" } ref={basket}>
        <Basket status={IsBucketOpen} setStatus={setIsBucketOpen}/>
      </div>
    </>
    )
  }
export default Navbar
