import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import NoPage from './pages/nopage/NoPage';
import Contact from './pages/contact/Contact';
import Reservation from './pages/reservations/Reservation';
import Order from './pages/order/Order';
import Menu from './pages/menu/Menu';


function App() {
  return (
    <>
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
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
