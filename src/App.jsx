import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Pagination";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import StreamingPage from "./pages/StreamingPage";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AdminPostPage from "./pages/AdminPostPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Homepage />} />
        
        {/* Rota com Parâmetro Dinâmico para Streaming */}
        <Route path="/streaming/:serviceName" element={<StreamingPage />} />
        
        {/* Páginas Informativas */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin" element={<AdminPostPage />} />




        
        {/* Autenticação */}
        <Route path="/criarconta" element={<Register />} />
        <Route path="/entrar" element={<Login />} />
      </Routes>
       {/*       <Footer /> */}
    </Router>
  );
};

export default App;
