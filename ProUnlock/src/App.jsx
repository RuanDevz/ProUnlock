import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Pagination";
import Footer from "./components/Footer";
import NetflixPage from "./pages/NetflixPage";
import AmazonPrimePage from "./pages/AmazonPrimePage";
import HBOPage from "./pages/HBOpage";
import StarPage from "./pages/StarPage";
import Register from './pages/Register'
import Login from "./pages/Login";
import CrunchyrollPage from "./pages/CrunchyrollPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/netflix" element={<NetflixPage />} />
        <Route path="/amazonprime" element={<AmazonPrimePage />} />
        <Route path="/hbo" element={<HBOPage />} />
        <Route path="/starplus" element={<StarPage />} />
        <Route path="/crunchyroll" element={<CrunchyrollPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/criarconta" element={<Register/>}/>
        <Route path="/entrar" element={<Login/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
