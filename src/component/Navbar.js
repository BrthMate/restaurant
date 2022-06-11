import {React,useState,useEffect} from 'react'
import "./nav.css"
import NavLink from './NavLink'
import {HiMenuAlt1} from 'react-icons/hi'

  const Navbar = () => {

    const [IsOpen, setIsOpen] = useState(false)

    const clickMenu = () =>{
      IsOpen ? setIsOpen(false) : setIsOpen(true)
    }

    useEffect(() => {
      function handleResize() {
        if(IsOpen && window.innerWidth > 600){
          setIsOpen(false)
        }
      }
    
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
              <NavLink className={IsOpen ? "mobil" : ""}/>
              <div className={IsOpen ? 'basket-reverse btn-reverse from-center-reverse ' : 'basket btn-reverse from-center'}>
                  <box-icon name='basket'></box-icon>
              </div>
            </div>
          </div>
      </nav>
    </>
    )
  }
export default Navbar
