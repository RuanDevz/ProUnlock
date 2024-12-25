import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Prounlock from '../assets/Logo.png'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // Estado para verificar se o usuário é admin
  const [menuOpen, setMenuOpen] = useState(false); // Estado para o menu suspenso
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Menu mobile
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      setIsLoggedIn(true);
      setUsername(user.username); // Define o nome de usuário
      setIsAdmin(user.isAdmin); // Verifica se o usuário é admin
    } else {
      setIsLoggedIn(false);
      setUsername("");
      setIsAdmin(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/entrar");
  };

  return (
    <header className="bg-[#2F4F7F] text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
            <img src={Prounlock} className="w-24" alt="Logo" />
              <h1 className="text-2xl font-bold">ProUnlock</h1>
            </Link>
          </div>

          {/* Links principais */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link to="/" className="text-base font-medium hover:text-[#FFA07A]">
              Home
            </Link>
            <Link to="/about" className="text-base font-medium hover:text-[#FFA07A]">
              Sobre
            </Link>
            <Link to="/services" className="text-base font-medium hover:text-[#FFA07A]">
              Serviços
            </Link>
            <Link to="/contact" className="text-base font-medium hover:text-[#FFA07A]">
              Contato
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className="text-base font-medium text-yellow-300 hover:text-yellow-400"
              >
                Painel Admin
              </Link>
            )}
          </div>

          {/* Ações à direita */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            {!isLoggedIn ? (
              <>
                <Link to="/criarconta" className="text-base font-medium hover:text-[#FFA07A]">
                  Criar Conta
                </Link>
                <Link to="/entrar" className="text-base font-medium hover:text-[#FFA07A]">
                  Entrar
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)} // Alterna o menu suspenso
                  className="flex items-center space-x-2 text-base font-medium hover:text-[#FFA07A]"
                >
                  <span>{username}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform ${menuOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Menu suspenso */}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-2 divide-y divide-gray-100">
                      <Link
                        to="/profile"
                        className="group flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all"
                      >
                        Perfil
                      </Link>
                      <Link
                        to="/settings"
                        className="group flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 transition-all"
                      >
                        Configurações
                      </Link>
                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="group flex items-center px-4 py-2 text-sm font-medium text-yellow-500 hover:bg-yellow-100 transition-all"
                        >
                          Painel Admin
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="group flex w-full items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-red-100 hover:text-red-700 transition-all"
                      >
                        Sair
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Botão de menu mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#445b8c] focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#2F4F7F] text-white px-4 py-4 rounded-md space-y-2">
            <Link to="/" className="block text-base font-medium hover:text-[#FFA07A]">
              Home
            </Link>
            <Link to="/about" className="block text-base font-medium hover:text-[#FFA07A]">
              Sobre
            </Link>
            <Link to="/services" className="block text-base font-medium hover:text-[#FFA07A]">
              Serviços
            </Link>
            <Link to="/contact" className="block text-base font-medium hover:text-[#FFA07A]">
              Contato
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className="block text-base font-medium text-yellow-300 hover:text-yellow-400"
              >
                Painel Admin
              </Link>
            )}
            {!isLoggedIn ? (
              <>
                <Link
                  to="/criarconta"
                  className="block text-base font-medium hover:text-[#FFA07A]"
                >
                  Criar Conta
                </Link>
                <Link
                  to="/entrar"
                  className="block text-base font-medium hover:text-[#FFA07A]"
                >
                  Entrar
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="block text-base font-medium hover:text-[#FFA07A]"
                >
                  Perfil
                </Link>
                <Link
                  to="/settings"
                  className="block text-base font-medium hover:text-[#FFA07A]"
                >
                  Configurações
                </Link>
                <button
                  onClick={handleLogout}
                  className="block text-base font-medium hover:text-red-300"
                >
                  Sair
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
