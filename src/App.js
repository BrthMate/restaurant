import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './pages/home/Home';
import NoPage from './pages/nopage/NoPage';
import Contact from './pages/contact/Contact';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
