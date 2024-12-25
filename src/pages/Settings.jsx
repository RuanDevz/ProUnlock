import React, { useEffect, useState } from "react";

const Settings = () => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Recupera os dados do localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Recupera configurações armazenadas (se houver)
    const storedNotifications = localStorage.getItem("notifications");
    const storedDarkMode = localStorage.getItem("darkMode");

    setNotifications(storedNotifications === "true");
    setDarkMode(storedDarkMode === "true");
  }, []);

  const handleSaveSettings = () => {
    // Salva as configurações no localStorage
    localStorage.setItem("notifications", notifications);
    localStorage.setItem("darkMode", darkMode);

    alert("Configurações salvas com sucesso!");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Carregando configurações...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header de Configurações */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 text-white">
          <h1 className="text-2xl font-bold">Configurações</h1>
          <p className="mt-1 text-sm">Gerencie suas preferências e segurança</p>
        </div>

        {/* Configurações do Usuário */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Preferências</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Notificações:</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Modo Escuro:</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>
          </div>

          {/* Alterar Senha */}
          <h2 className="mt-8 text-xl font-semibold text-gray-800">Segurança</h2>
          <div className="mt-4">
            <button
              onClick={() => alert("Função de alterar senha em breve!")}
              className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700"
            >
              Alterar Senha
            </button>
          </div>
        </div>

        {/* Botão Salvar Configurações */}
        <div className="p-6 border-t bg-gray-50">
          <button
            className="w-full rounded-lg bg-green-600 py-3 text-white font-semibold hover:bg-green-700"
            onClick={handleSaveSettings}
          >
            Salvar Configurações
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
