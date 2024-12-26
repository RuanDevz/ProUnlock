import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Pagination";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import StreamingPage from "./pages/StreamingPage";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import AdminPostPage from "./pages/AdminPostPage";
import { AuthProvider, useAuth } from "../context/Authprovider";

// Componente para proteger rotas
const ProtectedRoute = ({ children, adminOnly }) => {
  const { user, isAdmin } = useAuth();

  if (!user) {
    return <Navigate to="/entrar" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/streaming/:serviceName" element={<StreamingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <AdminPostPage />
              </ProtectedRoute>
            }
          />
          <Route path="/criarconta" element={<Register />} />
          <Route path="/entrar" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
