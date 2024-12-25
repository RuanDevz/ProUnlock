import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MenuOpen = ({ handleLogout, closeMenu }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.isAdmin) {
      setIsAdmin(true); // Define se o usuário é admin
    }
  }, []);

  const handleClick = () => {
    if (closeMenu) closeMenu(); // Fecha o menu ao clicar em qualquer opção
  };

  return (
    <div>
      <div className="absolute right-0 mt-2 w-56 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg ring-1 ring-blue-400 ring-opacity-5">
        <div className="py-2 divide-y divide-blue-300">
          {/* Link para o Perfil */}
          <Link
            to="/profile"
            onClick={handleClick}
            className="flex items-center px-4 py-3 text-sm font-medium text-blue-800 hover:bg-blue-300 hover:text-white transition-all rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-600"
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
            Perfil
          </Link>

          {/* Link para Configurações */}
          <Link
            to="/settings"
            onClick={handleClick}
            className="flex items-center px-4 py-3 text-sm font-medium text-blue-800 hover:bg-blue-300 hover:text-white transition-all rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v8m4-4H8"
              />
            </svg>
            Configurações
          </Link>

          {/* Link para Admin */}
          {isAdmin && (
            <Link
              to="/admin"
              onClick={handleClick}
              className="flex items-center px-4 py-3 text-sm font-medium text-yellow-700 hover:bg-yellow-300 hover:text-white transition-all rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9l.75 4.5M12 9v4.5m1.5-4.5l-.75 4.5m7.5-1.5A8.25 8.25 0 0112 20.25a8.25 8.25 0 01-8.25-8.25A8.25 8.25 0 0112 3.75a8.25 8.25 0 018.25 8.25z"
                />
              </svg>
              Admin
            </Link>
          )}

          {/* Botão de Logout */}
          <button
            onClick={() => {
              handleLogout();
              handleClick();
            }}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-300 hover:text-white transition-all rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3m12 0l-4 4m4-4l-4-4"
              />
            </svg>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuOpen;
