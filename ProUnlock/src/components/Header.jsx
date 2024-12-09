import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsLoggedIn(false);
    navigate("/entrar");
  };

  return (
    <div>
      <header>
        <div className="bg-[#2F4F7F] text-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="relative flex h-16 items-center justify-between lg:h-20">
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

              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                {/* Exibe 'Criar Conta' e 'Entrar' se o usuário não estiver logado */}
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
                  // Exibe 'Dashboard' e 'Sair' se o usuário estiver logado
                  <>
                    <Link to="/dashboard" className="text-base font-medium hover:text-[#FFA07A]">
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-base font-medium hover:text-[#FFA07A] bg-transparent border-none cursor-pointer"
                    >
                      Sair
                    </button>
                  </>
                )}
              </div>

              <button
                type="button"
                className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#2F4F7F] text-white lg:hidden"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
