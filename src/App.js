import './App.css';
import {React, useState, createContext,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import NoPage from './pages/nopage/NoPage';
import Contact from './pages/contact/Contact';
import Reservation from './pages/reservations/Reservation';
import Order from './pages/order/Order';
import Menu from './pages/Menu/Menu'
import DevPage  from './pages/nopage/DevPage';


export const Context = createContext(null)

function App() {

  const [basket, setbasket] = useState([])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('basket'));
    if (items) {
      setbasket(items);
    }
  }, []);

  return (
      <BrowserRouter>
        <Context.Provider value={{basket,setbasket}}>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/menu/:title" element={<DevPage/>} />
            <Route path="/privacy" element={<DevPage/>} />
            <Route path="/place/:id" element={<DevPage/>} />
            <Route path="/basket" element={<DevPage/>} />
          </Route>
        </Routes>
        </Context.Provider>
      </BrowserRouter>
  );
}

export default App;
