import './App.css';
import {createContext, React} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import NoPage from './pages/nopage/NoPage';
import Contact from './pages/contact/Contact';
import Reservation from './pages/reservations/Reservation';
import Order from './pages/order/Order';
import Menu from './pages/Menu/Menu'
import DevPage  from './pages/nopage/DevPage';
import Data from "./component/data/MenuData"

function App() {

  const content = createContext()
  return (
    <content.Provider data={Data}>
      <BrowserRouter>
      <Navbar/>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </content.Provider>
  );
}

export default App;
