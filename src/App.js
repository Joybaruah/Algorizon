import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from './components/Company';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
