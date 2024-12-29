import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHome, FaInfoCircle, FaServicestack, FaPhone, FaUser, FaCog, FaSignOutAlt, FaTelegramPlane } from "react-icons/fa";
import Prounlock from "../assets/Logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isVip, setIsVip] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      setIsLoggedIn(true);
      setUsername(user.username);

      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/auth/username/${user.username}`)
        .then((response) => {
          const { isAdmin, isVip } = response.data;
          setIsAdmin(isAdmin);
          setIsVip(isVip);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados do usuário:", error);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
      setUsername("");
      setIsAdmin(false);
      setIsVip(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername("");
    setIsAdmin(false);
    setIsVip(false);
    navigate("/");
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 shadow-lg text-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <nav className="relative flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src={Prounlock} className="w-20" alt="ProUnlock Logo" />
              <h1 className="text-2xl font-bold tracking-wide">ProUnlock</h1>
            </Link>
          </div>

          {/* Links principais */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              to="/"
              className="text-base font-medium hover:text-blue-300 transition-all duration-200"
            >
              <FaHome className="inline-block mr-2" />
              Home
            </Link>
            <Link
              to="/about"
              className="text-base font-medium hover:text-blue-300 transition-all duration-200"
            >
              <FaInfoCircle className="inline-block mr-2" />
              Sobre
            </Link>
            <Link
              to="/services"
              className="text-base font-medium hover:text-blue-300 transition-all duration-200"
            >
              <FaServicestack className="inline-block mr-2" />
              Serviços
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium hover:text-blue-300 transition-all duration-200"
            >
              <FaPhone className="inline-block mr-2" />
              Contato
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className="text-base font-medium text-yellow-300 hover:text-yellow-400 transition-all"
              >
                <FaUser className="inline-block mr-2" />
                Painel Admin
              </Link>
            )}
          </div>

          {/* Botões à direita */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/criarconta"
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-base font-medium transition-all"
                >
                  Criar Conta
                </Link>
                <Link
                  to="/entrar"
                  className="px-4 py-2 rounded-md border border-white hover:bg-blue-700 text-base font-medium transition-all"
                >
                  Entrar
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-base font-medium transition-all"
                >
                  <span>{username}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform ${menuOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md bg-white text-gray-800 shadow-lg">
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        <FaUser className="inline-block mr-2" />
                        Perfil
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        <FaCog className="inline-block mr-2" />
                        Configurações
                      </Link>
                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-sm text-yellow-500 hover:bg-gray-100"
                        >
                          <FaUser className="inline-block mr-2" />
                          Painel Admin
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                      >
                        <FaSignOutAlt className="inline-block mr-2" />
                        Sair
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Botão Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-blue-700 px-4 py-4 rounded-md space-y-2">
            <Link
              to="/"
              className="block text-base font-medium hover:text-blue-300"
            >
              <FaHome className="inline-block mr-2" />
              Home
            </Link>
            <Link
              to="/about"
              className="block text-base font-medium hover:text-blue-300"
            >
              <FaInfoCircle className="inline-block mr-2" />
              Sobre
            </Link>
            <Link
              to="/services"
              className="block text-base font-medium hover:text-blue-300"
            >
              <FaServicestack className="inline-block mr-2" />
              Serviços
            </Link>
            <Link
              to="/contact"
              className="block text-base font-medium hover:text-blue-300"
            >
              <FaPhone className="inline-block mr-2" />
              Contato
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className="block text-base font-medium text-yellow-300 hover:text-yellow-400 transition-all"
              >
                <FaUser className="inline-block mr-2" />
                Painel Admin
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
