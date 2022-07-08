import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from './components/Company';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Products from './components/Products'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
