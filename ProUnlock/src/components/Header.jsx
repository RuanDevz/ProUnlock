import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // Estado para o menu suspenso
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      setIsLoggedIn(true);
      setUsername(user.username); // Define o nome de usuário
    } else {
      setIsLoggedIn(false);
      setUsername("");
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
          </div>

          {/* Logo */}
          <div className="lg:absolute lg:inset-y-5 lg:left-1/2 lg:-translate-x-1/2">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#FFA07A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 13V5a4 4 0 10-8 0v8m4 0H8m4 0h4m0 0a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h1 className="text-2xl font-bold">ProUnlock</h1>
              </Link>
            </div>
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
                  onClick={() => setMenuOpen(!menuOpen)} // Alterna o menu
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
      {/* Link para o Perfil */}
      <Link
        to="/profile"
        className="group flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 group-hover:text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A4 4 0 007 21h10a4 4 0 001.879-3.196M15 11a4 4 0 10-6 0m6 0a4 4 0 01-6 0"
          />
        </svg>
        <span className="ml-3">Perfil</span>
      </Link>

      {/* Link para Configurações */}
      <Link
        to="/settings"
        className="group flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 group-hover:text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="ml-3">Configurações</span>
      </Link>

      {/* Botão de Logout */}
      <button
        onClick={handleLogout}
        className="group flex w-full items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-red-100 hover:text-red-700 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 group-hover:text-red-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7"
          />
        </svg>
        <span className="ml-3">Sair</span>
      </button>
    </div>
  </div>
)}

              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
