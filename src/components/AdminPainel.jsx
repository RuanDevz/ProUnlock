import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ handleLogout }) => {
  // Recupera dados do localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.isAdmin;

  // Recupera preferências
  const darkMode = JSON.parse(localStorage.getItem("darkMode"));
  const notifications = JSON.parse(localStorage.getItem("notifications"));

  if (!isAdmin) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">Você não tem acesso ao painel de administrador.</p>
      </div>
    );
  }

  return (
    <div className={`absolute right-0 mt-2 w-60 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${darkMode ? "bg-gray-800 text-white" : ""}`}>
      <div className="py-1">
        <h3 className="px-4 py-2 text-sm font-semibold border-b">
          Painel do Administrador
        </h3>

        {/* Links do painel */}
        <Link
          to="/dashboard"
          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          to="/users"
          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Gerenciar Usuários
        </Link>
        <Link
          to="/reports"
          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Relatórios
        </Link>
        <Link
          to="/settings"
          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Configurações
        </Link>

        {/* Preferências */}
        <div className="px-4 py-2 text-sm border-t">
          <p>Dark Mode: {darkMode ? "Ativado" : "Desativado"}</p>
          <p>Notificações: {notifications ? "Ativado" : "Desativado"}</p>
        </div>

        {/* Botão de logout */}
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 border-t"
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
